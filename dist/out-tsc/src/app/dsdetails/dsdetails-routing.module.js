import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DSdetailsPage } from './dsdetails.page';
const routes = [
    {
        path: '',
        component: DSdetailsPage
    }
];
let DSdetailsPageRoutingModule = class DSdetailsPageRoutingModule {
};
DSdetailsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DSdetailsPageRoutingModule);
export { DSdetailsPageRoutingModule };
//# sourceMappingURL=dsdetails-routing.module.js.map