import { Injectable } from '@angular/core';
import { UserI } from '../modeles/id-i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:UserI = <UserI>{};
  
  constructor(private router:Router) { }

  deconnexion(){
    this.user = <UserI>{};
    this.router.navigateByUrl('/');
  }
}
