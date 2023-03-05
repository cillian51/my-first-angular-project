import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserI } from 'src/app/modeles/id-i';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  user:UserI=<UserI>{};
  constructor(private authServ:AuthService,private router:Router,private uServ:UserService ,private auth:Auth) { }

  ngOnInit(): void {
  }


  AddToFire(){
    this.user.uid=this.auth.currentUser?.uid!
    this.user.statut="utilisateur"
    this.authServ.createAccount(this.user)
    this.uServ.addUser(this.user.uid,this.user)
    this.router.navigateByUrl('');
  }

}
