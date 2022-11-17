import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {

  
  constructor(private readonly http:HttpClient) { 
    this.getVols();
  }

  vols:Array<VolI> = [];

  /** Récupérer le contenu des vols depuis le fichier JSON */
getVols(){
  this.http.get<VolI[]>('assets/data/vols.json').subscribe(v =>{
    console.log('Données: ', v);
    this.vols = v;
  });
}
}
