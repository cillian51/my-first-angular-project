import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { AeroportI, AvionI, VolI, PersonnelsI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';


@Component({
  selector: 'app-edition-vols',
  templateUrl: './edition-vols.component.html',
  styleUrls: ['./edition-vols.component.css']
})
export class EditionVolsComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public compagnie: CompagnieService) { }

  aeroportDepartControl = new FormControl();
  aeroportArriveeControl = new FormControl();
  piloteControl = new FormControl();
  copiloteControl = new FormControl();
  pncControl = new FormControl();
  avionControl = new FormControl();

  aeroportList: Array<AeroportI> = [];
  piloteList: Array<PersonnelsI> = [];
  copiloteList: Array<PersonnelsI> = [];
  pncList: Array<PersonnelsI> = [];
  avionList: Array<AvionI> = [];

  aeroportDepartFilteredOptions!: Observable<string[]>;
  aeroportArriveeFilteredOptions!: Observable<string[]>;
  piloteFilteredOptions!: Observable<string[]>;
  copiloteFilteredOptions!: Observable<string[]>;
  pncFilteredOptions!: Observable<string[]>;
  avionFilteredOptions!: Observable<string[]>;

  vol: VolI = <VolI>{};

  ngOnInit(): void {
    this.aeroportList = this.compagnie.aeroports;
    this.avionList = this.compagnie.avions;
    this.piloteList = this.compagnie.persos.filter(personnels => personnels.habilitation == "Pilote");
    this.copiloteList = this.compagnie.persos.filter(personnels => personnels.habilitation == "Copilote");
    this.pncList = this.compagnie.persos.filter(personnels => personnels.habilitation == "PNC");

    this.aeroportDepartFilteredOptions = this.aeroportDepartControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', "aeroport")),
    );
    this.aeroportArriveeFilteredOptions = this.aeroportArriveeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', "aeroport")),
    );
    this.avionFilteredOptions = this.avionControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', "avion")),
    );
    this.piloteFilteredOptions = this.piloteControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', "pilote")),
    );
    this.copiloteFilteredOptions = this.copiloteControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', "copilote")),
    );
    this.pncFilteredOptions = this.pncControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', "pnc")),
    );
  }

  private _filter(value: string, list: string): string[] {
    const filterValue = value.toLowerCase();
    switch (list) {
      case "aeroport":
        return this.aeroportList.filter(option => option.ville.toLowerCase().includes(filterValue) || option.nom.toLowerCase().includes(filterValue))
          .map(option => option.nom);
      case "avion":
        return this.avionList.filter(option => option.modele.toLowerCase().includes(filterValue))
          .map(option => option.modele);
      case "pilote":
        return this.piloteList.filter(option => option.prenom.includes(filterValue) || option.nom.toLowerCase().includes(filterValue))
          .map(option => option.nom.toUpperCase() + " " + option.prenom);
      case "copilote":
        return this.copiloteList.filter(option => option.prenom.includes(filterValue) || option.nom.toLowerCase().includes(filterValue))
          .map(option => option.nom.toUpperCase() + " " + option.prenom);
      default:
        return this.pncList.filter(option => option.prenom.includes(filterValue) || option.nom.toLowerCase().includes(filterValue))
          .map(option => option.nom.toUpperCase() + " " + option.prenom);
    }

  }

  /** Retrouver le code d'un aéroport depuis son nom */
  codeAeroport(nom: string) {
    let codeAeroport: string | null = null;

    for (const aeroport of this.aeroportList) {
      if (aeroport.nom === nom) {
        codeAeroport = aeroport.code;
        break;
      }
    }
    return codeAeroport;

  }

  /** Mettre a jour notre vol */
  addVol() {
    this.vol.aeroportArrivee =this.aeroportArriveeControl.value;
    this.vol.aeroportDepart =this.aeroportDepartControl.value;
    this.vol.pilote = this.piloteControl.value;
    this.vol.copilote = this.copiloteControl.value;
    this.vol.pnc = this.pncControl.value;
    let codeAeroportDepart = this.codeAeroport(this.vol.aeroportDepart);
    let codeAeroportArrivee = this.codeAeroport(this.vol.aeroportArrivee);
    this.vol.code = codeAeroportDepart + "-" + codeAeroportArrivee +"-"+ this.vol.date;
    console.log("Le vol va être ajouté ici :");
    this.compagnie.addFireVols(this.vol.code, this.vol);
    this.router.navigateByUrl('/intranet');
  }

  retourPersonnel() {
    console.log("Ajout du vol annulée");
    this.router.navigateByUrl('/intranet');
  }
}
