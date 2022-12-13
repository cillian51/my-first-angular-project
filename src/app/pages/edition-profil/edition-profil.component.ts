import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenusI, PagesProfil } from 'src/app/modeles/pages-i';
import { PagesService } from 'src/app/services/pages.service';
import { Auth, updateProfile } from "@angular/fire/auth";
import { UserService } from 'src/app/services/user.service';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-edition-profil',
  templateUrl: './edition-profil.component.html',
  styleUrls: ['./edition-profil.component.css']
})
export class EditionProfilComponent implements OnInit {

  constructor(public pagesServ: PagesService,private bdd:Firestore, public user: UserService, private router: Router, private http: HttpClient, public auth: Auth) { }


  ngOnInit(): void {
    console.log(this.pagesServ.contenu.profil);
  }



  /** Mettre à jour les données dans l'authentification */
  async weirdUpdate(){
    console.log(this.auth.currentUser!.uid);
    // Création d'un lien vers un document spécifique vers la bdd Firestore : la bdd, la collection, l'id du document
    const docUser = doc(this.bdd, 'profil', this.auth.currentUser!.uid);
    //mettre a jour un utilisateur
    await setDoc(docUser, this.user.user, {merge:true})
    // Modifier les données de l'utilisateur de firebase authentification
    await updateProfile(this.auth.currentUser!, {displayName : this.user.user.nom})
    .then(r => console.log("Les données ont été mises à jour"))
    .catch(err => console.log(err));
    this.router.navigateByUrl('/profil');
  }

  retourProfil() {
    console.log("Modification du profil annulée");
    this.user.getFireProfil(this.auth.currentUser!.uid);
    this.router.navigateByUrl('/profil');
  }

}
