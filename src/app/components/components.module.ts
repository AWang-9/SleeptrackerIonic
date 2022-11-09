import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OvernightSleepCardComponent } from './overnight-sleep-card/overnight-sleep-card.component';
import { DaysleepinessCardComponent } from './daysleepiness-card/daysleepiness-card.component';
import { OvernightsleepPageModule } from '../overnightsleep/overnightsleep.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OvernightSleepCardComponent,
    DaysleepinessCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    OvernightSleepCardComponent,
    DaysleepinessCardComponent
  ]
})
export class ComponentsModule { }
