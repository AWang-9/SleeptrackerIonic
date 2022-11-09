import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DSdetailsPage } from './dsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: DSdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DSdetailsPageRoutingModule {}
