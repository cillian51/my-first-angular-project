import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { ErreurRouteComponent } from './pages/erreur-route/erreur-route.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { AuthGuard } from './securite/auth.guard';
import { EditionProfilComponent } from './pages/edition-profil/edition-profil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';

const routes: Routes = [
  {path :'', component:ConnexionComponent},
  {path :'inscription',component:InscriptionComponent},
  {path :'mention' , component:MentionsComponent},
  {path :'profil' , component:ProfilComponent},
  {path :'profil/edition', component:EditionProfilComponent},
  {path :'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule), canActivate:[AuthGuard], canLoad:[AuthGuard]},

  {path:'**', component:ErreurRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
