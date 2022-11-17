import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AvionComponent } from './pages/avion/avion.component';
import { AttributionComponent } from './pages/attribution/attribution.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AvionComponent,
    AttributionComponent,
    PersonnelsComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    HttpClientModule,
  ]
})
export class IntranetModule { }
