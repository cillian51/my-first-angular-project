import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AttributionComponent } from './pages/attribution/attribution.component';
import { AvionComponent } from './pages/avion/avion.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';

const routes: Routes = [
  {path:'', component:AccueilComponent, children:[
    {path:'',component:AttributionComponent},
    {path:'avion',component:AvionComponent},
    {path:'personnels',component:PersonnelsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
