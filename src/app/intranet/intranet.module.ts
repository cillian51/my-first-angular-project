import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AvionComponent } from './pages/avion/avion.component';
import { AttributionComponent } from './pages/attribution/attribution.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { AvionsPipe, VolsPipe} from './utils/avions.pipe';
import { FormsModule } from '@angular/forms';
import { EditionVolsComponent } from './pages/edition-vols/edition-vols.component';
import { EditionPersonnelComponent } from './pages/edition-personnel/edition-personnel.component';
import { AeroportsComponent } from './pages/aeroports/aeroports.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AccueilComponent,
    AvionComponent,
    AttributionComponent,
    PersonnelsComponent,
    AvionsPipe,
    VolsPipe,
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
    MatPaginatorModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSelectModule,
    MatAutocompleteModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule
  ]
})
export class IntranetModule { }
