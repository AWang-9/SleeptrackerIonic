import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DSdetailsPageRoutingModule } from './dsdetails-routing.module';

import { DSdetailsPage } from './dsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DSdetailsPageRoutingModule
  ],
  declarations: [DSdetailsPage]
})
export class DSdetailsPageModule {}
