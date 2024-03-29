import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { ErreurRouteComponent } from './pages/erreur-route/erreur-route.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EditionProfilComponent } from './pages/edition-profil/edition-profil.component';
import { TokenInterceptor } from './securite/token.interceptor';
import { Erreur401Interceptor } from './securite/erreur401.interceptor';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './pages/inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    MenuComponent,
    MentionsComponent,
    ErreurRouteComponent,
    FooterComponent,
    ProfilComponent,
    EditionProfilComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NgbModule,
    BrowserAnimationsModule,
  ],
  exports:[
    FormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:Erreur401Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
