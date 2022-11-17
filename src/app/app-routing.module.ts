import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { ErreurRouteComponent } from './pages/erreur-route/erreur-route.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  {path :'', component:ConnexionComponent},
  {path :'mention' , component:MentionsComponent},
  {path :'profil' , component:ProfilComponent},
  {path :'profil/:cequonveut' , component:ProfilComponent},
  {path :'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule)},

  {path:'**', component:ErreurRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
