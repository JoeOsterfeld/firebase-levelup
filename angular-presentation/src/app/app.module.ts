import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CloudFirestorePageComponent } from './pages/cloud-firestore-page/cloud-firestore-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RealtimeDbPageComponent } from './pages/realtime-db-page/realtime-db-page.component';
import { PetComponent } from './components/pet/pet.component';
import { PetListComponent } from './components/pet-list/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RealtimeDbPageComponent,
    CloudFirestorePageComponent,
    AuthPageComponent,
    NavbarComponent,
    HomeComponent,
    PetComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
