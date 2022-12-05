import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenusI, PagesProfil } from 'src/app/modeles/pages-i';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-edition-profil',
  templateUrl: './edition-profil.component.html',
  styleUrls: ['./edition-profil.component.css']
})
export class EditionProfilComponent implements OnInit {

  constructor(public pagesServ:PagesService, private router:Router, private http:HttpClient) { }


  ngOnInit(): void {
    console.log(this.pagesServ.contenu.profil);
  }

  changeProfil(){
    this.http.get<ContenusI>(`assets/data/pages.json`).subscribe(
      retour =>{
        //Ne fonctionne pas avec le fichier json
        // retour.profil.nom = this.pagesServ.contenu.profil.nom;
        // retour.profil.prenom= this.pagesServ.contenu.profil.prenom;
        console.log("Profil modifié", retour);
        this.router.navigateByUrl('/profil');
      },
      erreur =>{
        console.log("Error");
        alert('Erreur '+JSON.stringify(erreur))
      }
    )
  }

  retourProfil(){
    console.log("Modification du profil annulée");
    this.router.navigateByUrl('/profil');
  }

}
