import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonnelsI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {

  constructor(public compagnie: CompagnieService) { }

  // Une liste locale des personnels pour montrer de la manipulation d'observable
  persoLocaux: Array<{ id: string, data: PersonnelsI }> = [];

  listeHabilitations!: ["Pilote", "Copilote", "PNC"];
  listeHabilitation:Array<string>=[];
  subs:Subscription= new Subscription();

  ngOnInit(): void {
    // Connexion à l'écouteur de l'observable
    // this.compagnie.personnels$.subscribe(
    //   {
    //     next: (personnel) => personnel.forEach(p => {
    //       if (!this.listeHabilitation.includes(p.data.habilitation)) this.listeHabilitation.push(p.data.habilitation);
    //     }),
    //     error: (e) => console.log(e),
    //     complete: () => console.log("Les données reçues depuis le behaviorsubject (observable) ont été synchronisées")
    //   }
    // )
  }

  // Lorsque le composant est détruit, le souscription à l'observable est arrêtée aussi
  ngOnDestroy(): void {
    this.compagnie.personnels$.unsubscribe();
  }
}