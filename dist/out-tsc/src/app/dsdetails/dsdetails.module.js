import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DSdetailsPageRoutingModule } from './dsdetails-routing.module';
import { DSdetailsPage } from './dsdetails.page';
let DSdetailsPageModule = class DSdetailsPageModule {
};
DSdetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DSdetailsPageRoutingModule
        ],
        declarations: [DSdetailsPage]
    })
], DSdetailsPageModule);
export { DSdetailsPageModule };
//# sourceMappingURL=dsdetails.module.js.map