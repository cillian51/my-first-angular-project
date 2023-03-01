import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, doc, deleteDoc, getDoc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { AvionI, PersonnelsI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {


  constructor(private readonly http: HttpClient, private bdd: Firestore) {
    // this.getVols();
    this.getFireAvs();
    this.getFirePersos();
  }

  // vols: Array<VolI> = [];
  avions: Array<AvionI> = [];
  personnels: Array<{ id: string, data: PersonnelsI }> = [];
  listeAvions: Array<{ id: string, data: AvionI }> =[];
  listeVols: Array<{ id: string, data:VolI }> = [];

  // Création d'un observable pour synchroniser les données
  personnels$: BehaviorSubject<Array<{ id: string, data: PersonnelsI }>> = new BehaviorSubject(<Array<{ id: string, data: PersonnelsI }>>[]);

  /** Récupérer le contenu des vols depuis le fichier JSON */
  // getVols() {
  //   this.http.get<VolI[]>('assets/data/vols.json').subscribe(v => {
  //     console.log('Données: ', v);
  //     this.vols = v;
  //   });
  // }

  /** Récupération des vols depuis firebase */
  async getFireVols(){
    await getDocs(collection(this.bdd, 'vols'))
    .then(vols => {
      this.listeVols=[];
      console.log("firevols",vols);
      vols.forEach(async a => {
        console.log("data",a.data());
        this.listeVols.push({ id: a.id, data: a.data() as VolI });
        
        // this.vols.push(a.data() as VolI);
      });
    })
    .catch(err => console.log("Erreur : ", err));
  }

  /** 
   * Récupération des avions depuis firebase 
   */
  async getFireAvs() {
    await getDocs(collection(this.bdd, 'avions'))
      .then(av => {
        this.listeAvions = [];
        console.log(av);
        av.forEach(a => {
          console.log(a.id, a.data());
          this.listeAvions.push({id:a.id,data:a.data() as AvionI});
          // this.avions.push(a.data() as AvionI);
        });
      })
      .catch(err => console.log("Erreur : ", err));
  }

  getAvions() {
    this.http.get<AvionI[]>('assets/data/avions.json').subscribe(a => {
      this.avions = a;
    })
  }

  /** Récuperer un avion grâce à son code */
  async getFireAvions(code: string) {
    const docAvion = doc(this.bdd, 'avions', code);
    return getDoc(docAvion);
  }

  /** Récuperer un avion grâce à son code */
  async delFireAvions(code: string) {
    const docAvion = doc(this.bdd, 'avions', code);
    await deleteDoc(docAvion);
  }

  /** Update un avion grâce à son code et les data*/
  async updateFireAvions(code: string, data: AvionI) {
    const docAvion = doc(this.bdd, 'avions', code);
    await setDoc(docAvion, data, { merge: true });
  }

  async getFirePersos() {
    await getDocs(collection(this.bdd, 'personnels'))
      .then(perso => {
        console.log(perso);
        perso.forEach(a => {
          console.log(a.id, a.data());
          this.personnels.push({ id: a.id, data: a.data() as PersonnelsI });
        });
        this.getFireAvs();
        this.getFireVols();
        //Envoyer des données à l'observable
        this.personnels$.next(this.personnels);
      })
      .catch(err => console.log("Erreur : ", err));
  }

  async addFirePersos(code: string, data: PersonnelsI) {
    const docPersos = doc(this.bdd, 'personnels', code);
    await setDoc(docPersos, data, { merge: true });
  }


}
