import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdI, UserI } from 'src/app/modeles/id-i';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  id:IdI= {id:'',passe:''};

  constructor(private http:HttpClient, private router:Router, private user:UserService) { }

  ngOnInit(): void {
  }

  logId(){
    console.log(this.id);
  }

  checkId(){
    this.http.get<UserI>(`assets/ids/${this.id.id}@${this.id.passe}.json`).subscribe(
      retour =>{
        console.log("Utilisateur identifié", retour);
        alert('Bienvenue ' + retour.nom);
        this.user.user = retour;
        this.router.navigateByUrl('/intranet');
      },
      erreur =>{
        console.log("Error");
        alert('Erreur '+JSON.stringify(erreur))
      }
    )
  }


}
