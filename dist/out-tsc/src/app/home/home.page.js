import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
let HomePage = class HomePage {
    constructor(sleepService) {
        this.sleepService = sleepService;
    }
    ngOnInit() {
        console.log(this.allSleepData);
    }
    /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
    get allSleepData() {
        return SleepService.AllSleepData;
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map