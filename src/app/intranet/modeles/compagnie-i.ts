export interface CompagnieI {
}

export interface AvionI{
    modele:string;
    capacite:number;
    autonomie:number;
    code:string;
}

export interface PersonnelsI{
    nom:string;
    prenom:Array<string>;
    habilitation:HabilitationsE

}

export interface VolI {
    code:string;
    avion:string;
    date:any;
    aeroportDepart:string;
    aeroportArrivee:string;
    duree:number;
    pilote:string;
    copilote:string;
    pnc:string;
}

export interface AeroportI{
    nom:string;
    code:string;
    ville:string;
}

enum HabilitationsE {
    pilote = 'Pilote',
    copilote = 'Copilote',
    pnc = 'PNC'
}
