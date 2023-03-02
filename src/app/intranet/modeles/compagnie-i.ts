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
    personnels:Array<String>;
    aeroportDepart:string;
    aeroportArrivee:string;
    duree:number;
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
