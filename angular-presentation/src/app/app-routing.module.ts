import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CloudFirestorePageComponent } from './pages/cloud-firestore-page/cloud-firestore-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RealtimeDbPageComponent } from './pages/realtime-db-page/realtime-db-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'cloud-firestore',
    component: CloudFirestorePageComponent
  },
  {
    path: 'realtime-db',
    component: RealtimeDbPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
