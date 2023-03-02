import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AvionComponent } from './pages/avion/avion.component';
import { AttributionComponent } from './pages/attribution/attribution.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { AvionsPipe, VolsPipe, ModelePipe, PersonnelPipe } from './utils/avions.pipe';
import { FormsModule } from '@angular/forms';
import { EditionVolsComponent } from './pages/edition-vols/edition-vols.component';
import { EditionPersonnelComponent } from './pages/edition-personnel/edition-personnel.component';
import { AeroportsComponent } from './pages/aeroports/aeroports.component';


@NgModule({
  declarations: [
    AccueilComponent,
    AvionComponent,
    AttributionComponent,
    PersonnelsComponent,
    AvionsPipe,
    VolsPipe,
    ModelePipe,
    PersonnelPipe,
    EditionVolsComponent,
    EditionPersonnelComponent,
    AeroportsComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class IntranetModule { }
