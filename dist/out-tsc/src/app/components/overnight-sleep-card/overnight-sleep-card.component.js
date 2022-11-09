import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let OvernightSleepCardComponent = class OvernightSleepCardComponent {
    constructor() { }
    ngOnInit() { }
    calculateHoursSlept() {
        // console.log(this.sleepTimeStart);
        // console.log(this.sleepTimeEnd);
        if (this.overnightData.sleepStart == undefined || this.overnightData.sleepEnd == undefined) {
            return;
        }
        var sleepStart_ms = this.overnightData.sleepStart.getTime();
        var sleepEnd_ms = this.overnightData.sleepStart.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = sleepEnd_ms - sleepStart_ms;
        // Convert to hours and minutes
        var ans = Math.floor(difference_ms / (1000 * 60 * 60)) + " hours, " + Math.floor(difference_ms / (1000 * 60) % 60) + " minutes.";
        console.log(ans);
    }
};
__decorate([
    Input()
], OvernightSleepCardComponent.prototype, "overnightData", void 0);
__decorate([
    Input()
], OvernightSleepCardComponent.prototype, "notes", void 0);
OvernightSleepCardComponent = __decorate([
    Component({
        selector: 'app-overnight-sleep-card',
        templateUrl: './overnight-sleep-card.component.html',
        styleUrls: ['./overnight-sleep-card.component.scss'],
    })
], OvernightSleepCardComponent);
export { OvernightSleepCardComponent };
//# sourceMappingURL=overnight-sleep-card.component.js.map