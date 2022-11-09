import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DaysleepinessPage } from './daysleepiness.page';
const routes = [
    {
        path: '',
        component: DaysleepinessPage
    },
    { path: 'home', loadChildren: '../home/home.module#HomePageModule' }
];
let DaysleepinessPageRoutingModule = class DaysleepinessPageRoutingModule {
};
DaysleepinessPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DaysleepinessPageRoutingModule);
export { DaysleepinessPageRoutingModule };
//# sourceMappingURL=daysleepiness-routing.module.js.map