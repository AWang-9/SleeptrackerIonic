import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ONSDetailsPage } from './onsdetails.page';
const routes = [
    {
        path: '',
        component: ONSDetailsPage
    }
];
let ONSDetailsPageRoutingModule = class ONSDetailsPageRoutingModule {
};
ONSDetailsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ONSDetailsPageRoutingModule);
export { ONSDetailsPageRoutingModule };
//# sourceMappingURL=onsdetails-routing.module.js.map