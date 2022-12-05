import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvionI, PersonnelsI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {

  
  constructor(private readonly http:HttpClient) { 
    this.getVols();
    this.getAvions();
    this.getPersonnels();
  }

  vols:Array<VolI> = [];
  avions:Array<AvionI>=[];
  personnels:Array<PersonnelsI> = [];

  /** Récupérer le contenu des vols depuis le fichier JSON */
getVols(){
  this.http.get<VolI[]>('assets/data/vols.json').subscribe(v =>{
    console.log('Données: ', v);
    this.vols = v;
  });
}

getAvions(){
  this.http.get<AvionI[]>('assets/data/avions.json').subscribe(a=>{
    this.avions = a;
  })
}

getPersonnels(){
  this.http.get<PersonnelsI[]>('assets/data/personnels.json').subscribe({
    next : (p) => {
      this.personnels = p;
    },
    error : (e) => {
      console.log('Error: ', e);
    },
    complete : () => {
      console.log('Complete');
    }
  })
}
}
