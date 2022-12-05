import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnelsI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-edition-personnel',
  templateUrl: './edition-personnel.component.html',
  styleUrls: ['./edition-personnel.component.css']
})
export class EditionPersonnelComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient,public compagnie:CompagnieService) { }

  ngOnInit(): void {
  }

  addPersonnel(){
    this.http.get<PersonnelsI>(`assets/data/vols.json`).subscribe(
      retour =>{

        console.log("Nouveau personnel ", retour);
        this.router.navigateByUrl('/intranet/personnels');
      },
      erreur =>{
        console.log("Error");
        alert('Erreur '+JSON.stringify(erreur))
      }
    )
  }

}
