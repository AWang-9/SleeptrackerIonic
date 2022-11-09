import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DaysleepinessPageRoutingModule } from './daysleepiness-routing.module';
import { DaysleepinessPage } from './daysleepiness.page';
import { ComponentsModule } from '../components/components.module';
let DaysleepinessPageModule = class DaysleepinessPageModule {
};
DaysleepinessPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DaysleepinessPageRoutingModule,
            ComponentsModule
        ],
        declarations: [DaysleepinessPage]
    })
], DaysleepinessPageModule);
export { DaysleepinessPageModule };
//# sourceMappingURL=daysleepiness.module.js.map