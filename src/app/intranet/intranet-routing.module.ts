import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AttributionComponent } from './pages/attribution/attribution.component';
import { AvionComponent } from './pages/avion/avion.component';
import { EditionPersonnelComponent } from './pages/edition-personnel/edition-personnel.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, children:[
    {path:'',component:AttributionComponent},
    {path:'avion',component:AvionComponent},
    {path:'avion/edition',component:AvionComponent},
    {path:'personnels',component:PersonnelsComponent},
    {path:'personnels/edition',component:EditionPersonnelComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
