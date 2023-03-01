import { Pipe, PipeTransform } from '@angular/core';
import { AvionI, VolI } from '../modeles/compagnie-i';

@Pipe({
  name: 'avions'
})
export class AvionsPipe implements PipeTransform {

  transform(vols: Array<VolI>, filtre?: string): Array<VolI> {
    if (!filtre || filtre.length == 0) return vols;
    if (vols.length == 0) return [];

    return vols.filter(v => v.avion.modele.toLowerCase().indexOf(filtre.toLowerCase()) != -1);
  }

}


/** Filtrer la liste des vols */
@Pipe({
  name: 'vols'
})


export class VolsPipe implements PipeTransform {

  transform(vols: Array<{ id: string, data: VolI }>, filtre?: string): Array<{ id: string, data: VolI }> {
    if (!filtre || filtre.length == 0) return vols;
    if (vols.length == 0) return [];

    return vols.filter(v => v.data.code.toLowerCase().indexOf(filtre.toLowerCase()) != -1);
  }
}


/** récuperer les modeles des avions */

@Pipe({
  name: 'modele'
})

export class ModelePipe implements PipeTransform {
  transform(avionId:string, avions:Array<{id:string,data:AvionI}>): string{
    console.log("Pipe liste", avions)
    console.log("Avion id",avionId); 
    if(avionId){
      const avion:any=avions.find(av=>av.id == avionId);
      console.log("Pipe",avion);
      return avion.data.modele;
    }
    return ''
  }
}