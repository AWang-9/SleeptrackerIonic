import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightsleepPageRoutingModule } from './overnightsleep-routing.module';

import { OvernightsleepPage } from './overnightsleep.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightsleepPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OvernightsleepPage]
})
export class OvernightsleepPageModule {}
