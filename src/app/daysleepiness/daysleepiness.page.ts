import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { DSdetailsPage } from '../dsdetails/dsdetails.page';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-daysleepiness',
  templateUrl: './daysleepiness.page.html',
  styleUrls: ['./daysleepiness.page.scss'],
})
export class DaysleepinessPage implements OnInit {
  all_cards_map:Map<string, StanfordSleepinessData> = new Map<string, StanfordSleepinessData>();
  confirm_delete:boolean;

  constructor(public navCtrl: NavController, public modalController: ModalController, public alertController: AlertController) { }

  back() {
    this.navCtrl.back();
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
            this.confirm_delete = true;
            this.deleteAll();
          }
        }
      ]
    });
    await alert.present();
  }

  presentModal(existing_data) {
    this.modalController.create({
      component: DSdetailsPage,
      componentProps: {existingDSData: existing_data}
    }).then((modal) => {
      modal.present();
      modal.onDidDismiss().then((data) => {
        if(data['data'] != undefined) {
          if(this.all_cards_map.has(data['data'])) {
            //Got the signal to delete 
            this.all_cards_map.delete(data['data']);
            this.saveData();
          }
          else
          {
            this.updateCards(data['data']);
          }
        }
      })
    });
  }

  updateCards(sleepinessData: StanfordSleepinessData){
    //update local
    this.all_cards_map.set(sleepinessData.id, sleepinessData);
    //then use updated local to update the behind JSON 
    this.saveData();
    console.log(this.all_cards_map);
  }

  editCard(card_data){
    this.presentModal(card_data);
  }

  confirmDelete(){
    this.presentAlert();
  }


  deleteAll(){
    this.all_cards_map = new Map<string, StanfordSleepinessData>();
    this.clear();
  }


  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    var prevData = await Storage.get({key: 'DSData'});
    if(prevData.value != null) {
      console.log('previous data exists: ', prevData);
      //Load in the previous data and parse resulting structure
      //create all required StanfordSleepinessData objects and store into local map
      var reverted = JSON.parse(prevData.value);
      for(var i = 0; i < reverted.length; ++i){
        var keyValPair = reverted[i];
        var sleepObjectVals = keyValPair[1];
        var daySleepinessData = new StanfordSleepinessData(sleepObjectVals.loggedValue, sleepObjectVals.loggedAt, sleepObjectVals.extraNotes);
        this.all_cards_map.set(daySleepinessData.id, daySleepinessData);
      }
    }
    else {
      console.log('no previous data to load, map will remain empty for now');
    }
  }

  async saveData(){
    var mapDataJSONver = JSON.stringify(Array.from(this.all_cards_map.entries()));
    await Storage.set({
      key: 'DSData',
      value: mapDataJSONver
  });
  console.log('successfully updated Storage data');
  }

  async clear(){
    await Storage.remove({key: 'DSData'});
    console.log('successfully cleared storage');
    
  }

}
