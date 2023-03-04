import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IdI } from '../modeles/id-i';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth: Auth, private router: Router, public user:UserService) { 

  }

  isLoggedIn = false;
  

  identification(mail: string, mdp: string) {
    signInWithEmailAndPassword(this.auth, mail, mdp)
      .then(data => {
        console.log("Utilisateur connecté", data);
        console.log("daeazez",this.user);
        this.user.getFireProfil(this.auth.currentUser!.uid);
        this.isLoggedIn = true;
        this.router.navigateByUrl('/intranet');
      })
      .catch(err => console.log(err));
  }
}
