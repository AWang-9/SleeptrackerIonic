import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';
let DaysleepinessCardComponent = class DaysleepinessCardComponent {
    constructor() {
        this.extraNotes = "No extra notes.";
        this.StanfordScale = StanfordSleepinessData.ScaleValues;
    }
    ngOnInit() { }
};
__decorate([
    Input()
], DaysleepinessCardComponent.prototype, "sleepinessData", void 0);
DaysleepinessCardComponent = __decorate([
    Component({
        selector: 'app-daysleepiness-card',
        templateUrl: './daysleepiness-card.component.html',
        styleUrls: ['./daysleepiness-card.component.scss'],
    })
], DaysleepinessCardComponent);
export { DaysleepinessCardComponent };
//# sourceMappingURL=daysleepiness-card.component.js.map