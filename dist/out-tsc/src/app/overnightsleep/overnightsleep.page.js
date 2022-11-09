import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { ONSDetailsPage } from '../onsdetails/onsdetails.page';
import { Storage } from '@capacitor/storage';
let OvernightsleepPage = class OvernightsleepPage {
    constructor(navCtrl, modalController, alertController) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.all_cards_map = new Map();
    }
    presentModal(existing_data) {
        this.modalController.create({
            component: ONSDetailsPage,
            componentProps: { existingONSData: existing_data }
        }).then((modal) => {
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data['data'] != undefined) {
                    if (this.all_cards_map.has(data['data'])) {
                        //We got back an Id. That means delete it from the map
                        this.all_cards_map.delete(data['data']);
                        this.saveData();
                    }
                    else {
                        this.updateOvernightCards(data['data']);
                    }
                }
            });
        });
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
                            this.deleteAll();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        this.navCtrl.back();
    }
    updateOvernightCards(overnightData) {
        this.all_cards_map.set(overnightData.id, overnightData);
        this.saveData();
    }
    deleteAll() {
        this.all_cards_map = new Map();
        this.clear();
    }
    editCard(card_data) {
        this.presentModal(card_data);
    }
    loadData() {
        return __awaiter(this, void 0, void 0, function* () {
            var prevData = yield Storage.get({ key: 'ONSData' });
            if (prevData.value != null) {
                console.log('previous data exists: ', prevData.value);
                var reverted = JSON.parse(prevData.value);
                for (var i = 0; i < reverted.length; ++i) {
                    var keyValPair = reverted[i];
                    var sleepObjectVals = keyValPair[1];
                    var overnightData = new OvernightSleepData(new Date(sleepObjectVals.sleepStart), new Date(sleepObjectVals.sleepEnd), sleepObjectVals.extraNotes);
                    this.all_cards_map.set(overnightData.id, overnightData);
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
                key: 'ONSData',
                value: mapDataJSONver
            });
            console.log('successfully updated Storage data');
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Storage.remove({ key: 'ONSData' });
            console.log('successfully cleared storage');
        });
    }
    ngOnInit() {
        this.loadData();
    }
};
OvernightsleepPage = __decorate([
    Component({
        selector: 'app-overnightsleep',
        templateUrl: './overnightsleep.page.html',
        styleUrls: ['./overnightsleep.page.scss'],
    })
], OvernightsleepPage);
export { OvernightsleepPage };
//# sourceMappingURL=overnightsleep.page.js.map