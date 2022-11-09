import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ONSDetailsPageRoutingModule } from './onsdetails-routing.module';

import { ONSDetailsPage } from './onsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ONSDetailsPageRoutingModule
  ],
  declarations: [ONSDetailsPage]
})
export class ONSDetailsPageModule {}
