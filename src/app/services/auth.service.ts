import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IdI } from '../modeles/id-i';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth: Auth, private router: Router) { }



  identification(mail: string, mdp: string) {
    signInWithEmailAndPassword(this.auth, mail, mdp)
      .then(data => {
        console.log("Utilisateur connecté", data);
        this.router.navigateByUrl('/intranet');
      })
      .catch(err => console.log(err));
  }
}
