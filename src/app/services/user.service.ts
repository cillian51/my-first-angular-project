import { Injectable } from '@angular/core';
import { UserI } from '../modeles/id-i';
import { Router } from '@angular/router';
import { getAuth } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Token reçu après la connexion d'un utilisateur
  token:string | number = "Token avec valeur quelconque"; 
  // Utilisateur avec ses propriétés
  user:UserI = <UserI>{};
  
  constructor(private router:Router, private bdd: Firestore) { 
  }

  /** déconnexion d'un utilisateur'*/
  deconnexion(){
    this.user = <UserI>{};
    this.router.navigateByUrl('/');
  }

  /** Récupérer le profil dans firestore */
  async getFireProfil(uid:string){
    const docProfil = doc(this.bdd,'profil', uid);
    await getDoc(docProfil).then(
      u=> this.user = u.data() as UserI
    )
    .catch(err => console.log(err))
  }

  // async getFireProfil() {
  //   const auth = getAuth();
  //   const user = auth.currentUser;
  //   console.log("user trouvé",user);
  //   if (user !== null) {
  //     const docProfil = doc(this.bdd, 'profil', user.uid);
  //     await getDoc(docProfil).then(doc => {
  //       this.user = doc.data() as UserI
  //     });
  //   }
  // }




}
