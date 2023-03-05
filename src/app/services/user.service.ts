import { Injectable } from '@angular/core';
import { UserI } from '../modeles/id-i';
import { Router } from '@angular/router';
import { Auth, getAuth, updateProfile } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Token reçu après la connexion d'un utilisateur
  token:string | number = "Token avec valeur quelconque"; 
  // Utilisateur avec ses propriétés
  user:UserI = <UserI>{};
  // Profil de l'utilisateur
  profil:UserI = <UserI>{};
  
  constructor(private router:Router, private bdd: Firestore,private readonly auth: Auth,) { 
  }

  /** déconnexion d'un utilisateur'*/
  deconnexion(){
    this.user = <UserI>{};
    this.router.navigateByUrl('/');
  }

  async addUser(code:string,user:UserI){
    const docUser= doc(this.bdd, 'profil', code)
    await setDoc(docUser, user, { merge: true });

  }

  /** Récupérer le profil dans firestore */
  async getFireProfil(uid:string){
    const docProfil = doc(this.bdd,'profil', uid);
    await getDoc(docProfil).then(
      u=> this.user = u.data() as UserI
    )
    .catch(err => console.log(err))
  }

  async saveUserProfil(){
    console.log(this.auth.currentUser!.uid);
    // Création d'un lien vers un document spécifique vers la bdd Firestore : la bdd, la collection, l'id du document
    const docUser = doc(this.bdd, 'profil', this.auth.currentUser!.uid);
    //mettre a jour un utilisateur
    await setDoc(docUser, this.profil, {merge:true})
    // Modifier les données de l'utilisateur de firebase authentification
    await updateProfile(this.auth.currentUser!, {displayName : this.profil.nom})
    .then(r => console.log("Les données ont été mises à jour",this.profil))
    .catch(err => console.log(err));
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
