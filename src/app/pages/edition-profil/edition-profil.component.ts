import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenusI, PagesProfil } from 'src/app/modeles/pages-i';
import { PagesService } from 'src/app/services/pages.service';
import { Auth, updateProfile } from "@angular/fire/auth";

@Component({
  selector: 'app-edition-profil',
  templateUrl: './edition-profil.component.html',
  styleUrls: ['./edition-profil.component.css']
})
export class EditionProfilComponent implements OnInit {

  constructor(public pagesServ:PagesService, private router:Router, private http:HttpClient, public auth:Auth) { }


  ngOnInit(): void {
    console.log(this.pagesServ.contenu.profil);
  }

  
  /** Mettre a jour notre profil */
  updateProfil(){
    updateProfile(this.auth.currentUser!, {displayName : this.pagesServ.profil.nom})
    .then(r => console.log("Les données ont été mises à jour"))
    .catch(err => console.log(err));
    this.pagesServ.updateFireProfil(this.pagesServ.profil.uid as string, this.pagesServ.profil);
    this.router.navigateByUrl('/profil');
    
  }

  retourProfil(){
    console.log("Modification du profil annulée");
    this.router.navigateByUrl('/profil');
  }

}
