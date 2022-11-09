import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OvernightsleepPage } from './overnightsleep.page';
const routes = [
    {
        path: '',
        component: OvernightsleepPage
    },
    { path: 'home', loadChildren: '../home/home.module#HomePageModule' }
];
let OvernightsleepPageRoutingModule = class OvernightsleepPageRoutingModule {
};
OvernightsleepPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OvernightsleepPageRoutingModule);
export { OvernightsleepPageRoutingModule };
//# sourceMappingURL=overnightsleep-routing.module.js.map