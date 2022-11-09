import { __awaiter, __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
let DSdetailsPage = class DSdetailsPage {
    constructor(modalController, datepipe, alertController) {
        this.modalController = modalController;
        this.datepipe = datepipe;
        this.alertController = alertController;
        this.sleepinessNum = 1; //default value of 1
        this.sleepinessData = StanfordSleepinessData.ScaleValues;
    }
    cancel() {
        this.modalController.dismiss();
    }
    delete() {
        if (this.existingDSData == undefined) {
            this.modalController.dismiss();
        }
        else {
            this.modalController.dismiss(this.existingDSData.id);
        }
    }
    convertToDate(value) {
        if (value == undefined) {
            return new Date();
        }
        else if (value instanceof Date) {
            return value;
        }
        return new Date(value);
    }
    updateVals() {
        this.sleepinessText = StanfordSleepinessData.ScaleValues[this.sleepinessNum];
        console.log(this.sleepinessNum, this.sleepinessText);
    }
    save() {
        //create a new StanfordSleepinessData and pass it ou
        var dateOnly = this.convertToDate(this.date);
        var timeOnly = this.convertToDate(this.time);
        var bothDateTime = new Date(dateOnly.getFullYear(), dateOnly.getMonth(), dateOnly.getDate(), timeOnly.getHours(), timeOnly.getMinutes(), timeOnly.getSeconds());
        if (this.existingDSData != undefined) {
            //update the existing DS and return it back
            this.existingDSData.loggedAt = bothDateTime;
            this.existingDSData.loggedValue = this.sleepinessNum;
            this.existingDSData.extraNotes = this.extraNotes;
            this.modalController.dismiss(this.existingDSData);
        }
        var daySleepinessData = new StanfordSleepinessData(this.sleepinessNum, bothDateTime, this.extraNotes);
        this.modalController.dismiss(daySleepinessData);
    }
    ngOnInit() {
        if (this.existingDSData) {
            this.extraNotes = this.existingDSData.extraNotes;
            this.date = this.datepipe.transform(this.existingDSData.loggedAt, 'MM/dd/YYYY');
            //make a string that looks like this
            // 2021-11-17T15:56:08.601-08:00
            var timeAsDateObj = new Date(this.existingDSData.loggedAt);
            this.time = timeAsDateObj.toISOString();
            this.sleepinessNum = this.existingDSData.loggedValue;
        }
    }
    presentAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                subHeader: 'Subtitle',
                message: 'Are you sure you want to delete this card?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (val) => {
                            console.log("you want to cancel");
                        }
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            console.log('confirm deletion.');
                            this.delete();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
__decorate([
    Input()
], DSdetailsPage.prototype, "existingDSData", void 0);
DSdetailsPage = __decorate([
    Component({
        selector: 'app-dsdetails',
        templateUrl: './dsdetails.page.html',
        styleUrls: ['./dsdetails.page.scss'],
    })
], DSdetailsPage);
export { DSdetailsPage };
//# sourceMappingURL=dsdetails.page.js.map