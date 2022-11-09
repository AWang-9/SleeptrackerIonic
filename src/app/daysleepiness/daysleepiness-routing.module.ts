import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysleepinessPage } from './daysleepiness.page';
import { HomePageModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '',
    component: DaysleepinessPage
  },
  {path: 'home', loadChildren: '../home/home.module#HomePageModule'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysleepinessPageRoutingModule {}
