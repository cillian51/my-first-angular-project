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

  personnel:PersonnelsI =<PersonnelsI>{};

   /** Mettre a jour notre avion */
   addPerso(){
    console.log("Le personnel va être mis à jour ici :");
    this.compagnie.addFirePersos(this.personnel.nom as string + "-" + this.personnel.prenom[0], this.personnel);
    this.router.navigateByUrl('/intranet/personnels');
  }

  retourPersonnel() {
    console.log("Modification du personnel annulée");
    this.router.navigateByUrl('/intranet/personnels');
  }

}
