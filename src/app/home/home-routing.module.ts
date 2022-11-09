import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DaysleepinessPage } from '../daysleepiness/daysleepiness.page';

const routes: Routes = [
  { path: '', component: HomePage},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'overnightsleep', loadChildren: '../overnightsleep/overnightsleep.module#overnightsleepPageModule'},
  {path: 'daysleepiness', loadChildren: '../daysleepiness/daysleepiness.module#daysleepinessPageModule'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
