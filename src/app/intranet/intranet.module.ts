import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AvionComponent } from './pages/avion/avion.component';
import { AttributionComponent } from './pages/attribution/attribution.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { AvionsPipe } from './utils/avions.pipe';
import { FormsModule } from '@angular/forms';
import { EditionVolsComponent } from './pages/edition-vols/edition-vols.component';
import { EditionPersonnelComponent } from './pages/edition-personnel/edition-personnel.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AvionComponent,
    AttributionComponent,
    PersonnelsComponent,
    AvionsPipe,
    EditionVolsComponent,
    EditionPersonnelComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class IntranetModule { }
