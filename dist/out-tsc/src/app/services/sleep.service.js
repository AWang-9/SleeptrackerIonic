var SleepService_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
let SleepService = SleepService_1 = class SleepService {
    constructor() {
        if (SleepService_1.LoadDefaultData) {
            this.addDefaultData();
            SleepService_1.LoadDefaultData = false;
        }
    }
    addDefaultData() {
        this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00'), "no extra notes"));
        this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00'), "no extra notes"));
        this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00'), "no extra notes"));
    }
    logOvernightData(sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllOvernightData.push(sleepData);
    }
    logSleepinessData(sleepData) {
        SleepService_1.AllSleepData.push(sleepData);
        SleepService_1.AllSleepinessData.push(sleepData);
    }
};
SleepService.LoadDefaultData = true;
SleepService.AllSleepData = [];
SleepService.AllOvernightData = [];
SleepService.AllSleepinessData = [];
SleepService = SleepService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SleepService);
export { SleepService };
//# sourceMappingURL=sleep.service.js.map