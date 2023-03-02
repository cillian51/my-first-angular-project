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
  avion:{ id: string, data: AvionI } =<{ id: string, data: AvionI }>{};

  constructor(public volServ:CompagnieService) { }

  ngOnInit(): void {
  }

  selectAvion(code:string|number){
    // ! veut dire qu'il ne faut pas consider undefined
    this.avion = this.volServ.listeAvions.find(av=> av.data.code == code)!;
  }

  /** Mettre a jour notre avion */
  updateAvion(){
    console.log("L'avion va être mis à jour ici :");
    this.volServ.updateFireAvions(this.avion.id as string, this.avion.data);
  }

  /** Annuler la sélection sur un avion */
  resetAvion(){
    this.avion = <{ id: string, data: AvionI }>{};
  }

}
