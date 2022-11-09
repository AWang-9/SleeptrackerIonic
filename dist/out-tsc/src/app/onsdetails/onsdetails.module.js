import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ONSDetailsPageRoutingModule } from './onsdetails-routing.module';
import { ONSDetailsPage } from './onsdetails.page';
let ONSDetailsPageModule = class ONSDetailsPageModule {
};
ONSDetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ONSDetailsPageRoutingModule
        ],
        declarations: [ONSDetailsPage]
    })
], ONSDetailsPageModule);
export { ONSDetailsPageModule };
//# sourceMappingURL=onsdetails.module.js.map