import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'join', component: JoinPageComponent },
  { path: 'discover', component: DiscoverPageComponent }
];
