import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'overnightsleep',
        loadChildren: () => import('./overnightsleep/overnightsleep.module').then(m => m.OvernightsleepPageModule)
    },
    {
        path: 'daysleepiness',
        loadChildren: () => import('./daysleepiness/daysleepiness.module').then(m => m.DaysleepinessPageModule)
    },
    {
        path: 'dsdetails',
        loadChildren: () => import('./dsdetails/dsdetails.module').then(m => m.DSdetailsPageModule)
    },
    {
        path: 'onsdetails',
        loadChildren: () => import('./onsdetails/onsdetails.module').then(m => m.ONSDetailsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map