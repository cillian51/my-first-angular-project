export interface IdI {
    id:string | number;
    passe:string|number;
}

export interface UserI{
    uid:string|number;
    nom:string;
    prenom:string;
    mail:string;
    mdp:string;
    statut?:string;
}