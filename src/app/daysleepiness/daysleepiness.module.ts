import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaysleepinessPageRoutingModule } from './daysleepiness-routing.module';

import { DaysleepinessPage } from './daysleepiness.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysleepinessPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DaysleepinessPage]
})
export class DaysleepinessPageModule {}
