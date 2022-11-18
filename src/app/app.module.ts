import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { ErreurRouteComponent } from './pages/erreur-route/erreur-route.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfilComponent } from './pages/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MenuComponent,
    MentionsComponent,
    ErreurRouteComponent,
    FooterComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
