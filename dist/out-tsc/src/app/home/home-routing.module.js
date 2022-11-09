import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
const routes = [
    { path: '', component: HomePage },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'overnightsleep', loadChildren: '../overnightsleep/overnightsleep.module#overnightsleepPageModule' },
    { path: 'daysleepiness', loadChildren: '../daysleepiness/daysleepiness.module#daysleepinessPageModule' }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], HomePageRoutingModule);
export { HomePageRoutingModule };
//# sourceMappingURL=home-routing.module.js.map