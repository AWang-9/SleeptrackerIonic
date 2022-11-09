import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OvernightSleepCardComponent } from './overnight-sleep-card/overnight-sleep-card.component';
import { DaysleepinessCardComponent } from './daysleepiness-card/daysleepiness-card.component';
import { FormsModule } from '@angular/forms';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
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
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map