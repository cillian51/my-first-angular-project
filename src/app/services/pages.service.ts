import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContenusI, PagesI, PagesProfil } from '../modeles/pages-i';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private readonly http:HttpClient) { 
    this.getPages();
  }
  // mentions:PagesI = {
  //   titre:"Mentions Légales",
  //   contenu :"Ces mentions ne servent à rien parce que c'est un cours et que de toute façon tout est partagé."
  // };

  contenu:ContenusI = <ContenusI>{};

  // profil:PagesProfil = {
  //   titre: "Profil de l'utilisateur",
  //   nom: "Dupont",
  //   prenom:"Tintin"
  // }

  

  /**
   * Renvoie une chaîne tronquée
   */
  tronqueChaine(str:string) {
    return str?.substr(0,50)
  }

  /** Récupérer le contenu des pages depuis le fichier JSON */
  getPages(){
    /** 
    this.http.get('assets/data/pages.json').subscribe({
        next(data){
          console.log('Données: ', data);
        },
        error(msg){
          console.log('Error Getting Data: ',msg);
        },
        complete(){
          console.log('Requête Complétée');
        }
    });*/
    this.http.get<ContenusI>('assets/data/pages.json').subscribe(p =>{
      console.log('Données: ', p);
      this.contenu = p;
    });
  }
}
