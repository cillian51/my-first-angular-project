/** Interface d'une page utilisée pour typer nos objets*/

export interface PagesI {
    titre:string;
    intro?:string;
    contenu?:string;
}

export interface PagesProfil {
    titre:string;
    nom?:string;
    prenom?:string;
}

export interface ContenusI {
    mentions:PagesI;
    profil:PagesProfil;
}
