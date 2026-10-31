import { Routes } from '@angular/router';
import { PortafolioComponent } from './components/portafolio';

export const routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: '', redirectTo: '/portafolio', pathMatch: 'full' },
];
