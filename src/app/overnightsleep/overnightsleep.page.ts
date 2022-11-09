import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { NavController, ModalController } from '@ionic/angular';
import { ONSDetailsPage } from '../onsdetails/onsdetails.page';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-overnightsleep',
  templateUrl: './overnightsleep.page.html',
  styleUrls: ['./overnightsleep.page.scss'],
})
export class OvernightsleepPage implements OnInit {
  all_cards_map:Map<string, OvernightSleepData> = new Map<string, OvernightSleepData>();

  constructor(public navCtrl: NavController, public modalController: ModalController, public alertController: AlertController) { }
  
  presentModal(existing_data) {
    this.modalController.create({
      component: ONSDetailsPage,
      componentProps: {existingONSData: existing_data}
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if(data['data'] != undefined) {
          if(this.all_cards_map.has(data['data'])) {
            //We got back an Id. That means delete it from the map
            this.all_cards_map.delete(data['data']);
            this.saveData();
          }
          else
          {
            this.updateOvernightCards(data['data']);
          }
        }
      })
    });
  }

  async presentAlert(){
    const alert = await this.alertController.create({
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
    await alert.present();
  }


  back() {
    this.navCtrl.back();
  }

  updateOvernightCards(overnightData: OvernightSleepData) {
    this.all_cards_map.set(overnightData.id, overnightData);
    this.saveData();
  }

  deleteAll(){
    this.all_cards_map = new Map<string, OvernightSleepData>();
    this.clear();
  }

  editCard(card_data){
    this.presentModal(card_data);
  }

  async loadData(){
    var prevData = await Storage.get({key: 'ONSData'});
    if(prevData.value != null) {
      console.log('previous data exists: ', prevData.value);
      var reverted = JSON.parse(prevData.value);
      for(var i = 0; i < reverted.length; ++i){
        var keyValPair = reverted[i];
        var sleepObjectVals = keyValPair[1];
        var overnightData = new OvernightSleepData(new Date(sleepObjectVals.sleepStart), new Date(sleepObjectVals.sleepEnd), sleepObjectVals.extraNotes);
        this.all_cards_map.set(overnightData.id, overnightData);
      }
    }
    else {
      console.log('no previous data to load, map will remain empty for now');

    }
  }

  async saveData(){
    var mapDataJSONver = JSON.stringify(Array.from(this.all_cards_map.entries()));
    await Storage.set({
      key: 'ONSData',
      value: mapDataJSONver
    });
    console.log('successfully updated Storage data')
  }

  async clear(){
    await Storage.remove({key: 'ONSData'});
    console.log('successfully cleared storage');
  }

  ngOnInit() {
    this.loadData();
    
  }

}
