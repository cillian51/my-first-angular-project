import { Component, OnInit } from '@angular/core';
import { AvionI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-avion',
  templateUrl: './avion.component.html',
  styleUrls: ['./avion.component.css']
})
export class AvionComponent implements OnInit {

  /** Avion sélectionné depuis le code */
  avion:AvionI =<AvionI>{};

  constructor(public volServ:CompagnieService) { }

  ngOnInit(): void {
  }

  selectAvion(code:string|number){
    // ! veut dire qu'il ne faut pas consider undefined
    this.avion = this.volServ.avions.find(av=> av.code == code)!;
  }

  /** Mettre a jour notre avion */
  updateAvion(){
    console.log("L'avion va être mis à jour ici :");
    this.volServ.updateFireAvions(this.avion.code as string, this.avion);
  }

  /** Annuler la sélection sur un avion */
  resetAvion(){
    this.avion = <AvionI>{};
  }

}
