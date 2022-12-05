import { Injectable } from '@angular/core';
import { UserI } from '../modeles/id-i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Token reçu après la connexion d'un utilisateur
  token:string | number = "Token avec valeur quelconque"; 
  // Utilisateur avec ses propriétés
  user:UserI = <UserI>{};
  
  constructor(private router:Router) { }

  /** déconnexion d'un utilisateur'*/
  deconnexion(){
    this.user = <UserI>{};
    this.router.navigateByUrl('/');
  }
}
