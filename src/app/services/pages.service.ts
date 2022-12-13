import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { getAuth, onAuthStateChanged, updateProfile } from "@angular/fire/auth";
import { UserI } from '../modeles/id-i';
import { ContenusI, PagesI, PagesProfil } from '../modeles/pages-i';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private readonly http: HttpClient, private bdd: Firestore) {
    this.getPages();
    this.getFireProfil();
  }
  // mentions:PagesI = {
  //   titre:"Mentions Légales",
  //   contenu :"Ces mentions ne servent à rien parce que c'est un cours et que de toute façon tout est partagé."
  // };

  contenu: ContenusI = <ContenusI>{};
  profil: UserI = <UserI>{};


  /**
   * Renvoie une chaîne tronquée
   */
  tronqueChaine(str: string) {
    return str?.substr(0, 50)
  }

  /** Récupérer le contenu des pages depuis le fichier JSON */
  getPages() {
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
    this.http.get<ContenusI>('assets/data/pages.json').subscribe(p => {
      console.log('Données: ', p);
      this.contenu = p;
    });
  }

  // async getFireProfil() {
  //   const docProfil = doc(this.bdd, 'profil', this.user.email);
  //   await getDoc(docProfil).then(doc => {
  //     this.profil = doc.data() as UserI
  //   });
  // };

  async getFireProfil() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const docProfil = doc(this.bdd, 'profil', user.email as string);
      await getDoc(docProfil).then(doc => {
        this.profil = doc.data() as UserI
      });
    }
  }

  async updateFireProfil(code:string, data:UserI){
    const docProfil = doc(this.bdd, 'profil', code);
    await setDoc(docProfil, data, {merge:true});
  }

}
