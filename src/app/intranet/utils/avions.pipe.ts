import { Pipe, PipeTransform } from '@angular/core';
import { AvionI, VolI } from '../modeles/compagnie-i';
import { CompagnieService } from '../services/compagnie.service';

@Pipe({
  name: 'avions'
})
export class AvionsPipe implements PipeTransform {

  transform(vols: Array<VolI>, filtre?: string): Array<VolI> {
    if (!filtre || filtre.length == 0) return vols;
    if (vols.length == 0) return [];

    return vols.filter(v => v.avion.toLowerCase().indexOf(filtre.toLowerCase()) != -1);
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

