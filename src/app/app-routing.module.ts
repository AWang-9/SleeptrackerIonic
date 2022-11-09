import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'overnightsleep',
    loadChildren: () => import('./overnightsleep/overnightsleep.module').then( m => m.OvernightsleepPageModule)
  },
  {
    path: 'daysleepiness',
    loadChildren: () => import('./daysleepiness/daysleepiness.module').then( m => m.DaysleepinessPageModule)
  },
  {
    path: 'dsdetails',
    loadChildren: () => import('./dsdetails/dsdetails.module').then( m => m.DSdetailsPageModule)
  },
  {
    path: 'onsdetails',
    loadChildren: () => import('./onsdetails/onsdetails.module').then( m => m.ONSDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
