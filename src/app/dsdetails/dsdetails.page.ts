import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dsdetails',
  templateUrl: './dsdetails.page.html',
  styleUrls: ['./dsdetails.page.scss'],
})
export class DSdetailsPage implements OnInit {
  date:string;
  time:string;
  sleepinessNum:number = 1; //default value of 1
  sleepinessText:string;
  extraNotes:string;
  sleepinessData:string[] = StanfordSleepinessData.ScaleValues;
  @Input() existingDSData:StanfordSleepinessData;


  constructor(public modalController:ModalController, public datepipe: DatePipe, public alertController: AlertController) { }

 cancel(){
    this.modalController.dismiss();
  }

  delete(){
    if(this.existingDSData == undefined) {
      this.modalController.dismiss();
    }
    else {
      this.modalController.dismiss(this.existingDSData.id);
    }
  }

  convertToDate(value){
    if(value == undefined){
      return new Date();
    }
    else if (value instanceof Date) {
      return value;
    }
    return new Date(value);
  }

  updateVals(){
    this.sleepinessText = StanfordSleepinessData.ScaleValues[this.sleepinessNum];
    console.log(this.sleepinessNum, this.sleepinessText);
  }


  save(){
    //create a new StanfordSleepinessData and pass it ou
    var dateOnly = this.convertToDate(this.date);
    var timeOnly = this.convertToDate(this.time);
    var bothDateTime = new Date(dateOnly.getFullYear(), dateOnly.getMonth(), dateOnly.getDate(), timeOnly.getHours(), timeOnly.getMinutes(), timeOnly.getSeconds());
    if(this.existingDSData != undefined){

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
    if(this.existingDSData){
      this.extraNotes = this.existingDSData.extraNotes;
      this.date = this.datepipe.transform(this.existingDSData.loggedAt, 'MM/dd/YYYY');

      //make a string that looks like this
      // 2021-11-17T15:56:08.601-08:00
      var timeAsDateObj = new Date(this.existingDSData.loggedAt);
      this.time = timeAsDateObj.toISOString();
      this.sleepinessNum = this.existingDSData.loggedValue;

    }
  }


  async presentAlert(){
    const alert = await this.alertController.create({
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
    await alert.present();
  }


}
