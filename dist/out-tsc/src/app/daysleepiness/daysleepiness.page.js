import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { DSdetailsPage } from '../dsdetails/dsdetails.page';
import { Storage } from '@capacitor/storage';
let DaysleepinessPage = class DaysleepinessPage {
    constructor(navCtrl, modalController, alertController) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.all_cards_map = new Map();
    }
    back() {
        this.navCtrl.back();
    }
    presentAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                subHeader: 'Subtitle',
                message: 'Are you sure you want to delete everything?',
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
                            this.confirm_delete = true;
                            this.deleteAll();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentModal(existing_data) {
        this.modalController.create({
            component: DSdetailsPage,
            componentProps: { existingDSData: existing_data }
        }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data['data'] != undefined) {
                    if (this.all_cards_map.has(data['data'])) {
                        //Got the signal to delete 
                        this.all_cards_map.delete(data['data']);
                        this.saveData();
                    }
                    else {
                        this.updateCards(data['data']);
                    }
                }
            });
        });
    }
    updateCards(sleepinessData) {
        //update local
        this.all_cards_map.set(sleepinessData.id, sleepinessData);
        //then use updated local to update the behind JSON 
        this.saveData();
        console.log(this.all_cards_map);
    }
    editCard(card_data) {
        this.presentModal(card_data);
    }
    confirmDelete() {
        this.presentAlert();
    }
    deleteAll() {
        this.all_cards_map = new Map();
        this.clear();
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            var prevData = yield Storage.get({ key: 'DSData' });
            if (prevData.value != null) {
                console.log('previous data exists: ', prevData);
                //Load in the previous data and parse resulting structure
                //create all required StanfordSleepinessData objects and store into local map
                var reverted = JSON.parse(prevData.value);
                for (var i = 0; i < reverted.length; ++i) {
                    var keyValPair = reverted[i];
                    var sleepObjectVals = keyValPair[1];
                    var daySleepinessData = new StanfordSleepinessData(sleepObjectVals.loggedValue, sleepObjectVals.loggedAt, sleepObjectVals.extraNotes);
                    this.all_cards_map.set(daySleepinessData.id, daySleepinessData);
                }
            }
            else {
                console.log('no previous data to load, map will remain empty for now');
            }
        });
    }
    saveData() {
        return __awaiter(this, void 0, void 0, function* () {
            var mapDataJSONver = JSON.stringify(Array.from(this.all_cards_map.entries()));
            yield Storage.set({
                key: 'DSData',
                value: mapDataJSONver
            });
            console.log('successfully updated Storage data');
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Storage.remove({ key: 'DSData' });
            console.log('successfully cleared storage');
        });
    }
};
DaysleepinessPage = __decorate([
    Component({
        selector: 'app-daysleepiness',
        templateUrl: './daysleepiness.page.html',
        styleUrls: ['./daysleepiness.page.scss'],
    })
], DaysleepinessPage);
export { DaysleepinessPage };
//# sourceMappingURL=daysleepiness.page.js.map