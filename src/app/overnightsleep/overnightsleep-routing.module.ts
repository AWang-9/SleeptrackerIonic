import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvernightsleepPage } from './overnightsleep.page';

const routes: Routes = [
  {
    path: '',
    component: OvernightsleepPage
  },
  {path: 'home', loadChildren: '../home/home.module#HomePageModule'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvernightsleepPageRoutingModule {}
