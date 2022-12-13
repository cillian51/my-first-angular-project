import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdI, UserI } from 'src/app/modeles/id-i';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  id:IdI= {id:'',passe:''};

  constructor(private http:HttpClient, private router:Router, private user:UserService, private auth:AuthService) { }

  ngOnInit(): void {
  }

  logId(){
    console.log(this.id);
  }

  /** Identification en utilisant un email et un mdp depuis json*/
  checkId(){
    this.http.get<UserI>(`assets/ids/${this.id.id}@${this.id.passe}.json`).subscribe(
      retour =>{
        console.log("Utilisateur identifié", retour);
        this.user.user = retour;
        this.router.navigateByUrl('/intranet');
      },
      erreur =>{
        console.log("Error");
        alert('Erreur '+JSON.stringify(erreur))
      }
    )
  }

  /** Identification à l'aide de FireBase */
  checkFromFire(){
    this.auth.identification(this.id.id as string,this.id.passe as string);

  }

}
