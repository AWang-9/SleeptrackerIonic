import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { DatePipe } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-onsdetails',
  templateUrl: './onsdetails.page.html',
  styleUrls: ['./onsdetails.page.scss'],
})
export class ONSDetailsPage implements OnInit {
  startDate:string;
  endDate:string;
  startTime:string;
  endTime:string;
  extraNotes:string;
  @Input() existingONSData:OvernightSleepData;


  constructor(public modalController:ModalController, public datepipe: DatePipe, public alertController: AlertController) { }

  ngOnInit() {
    console.log(this.existingONSData);
    if(this.existingONSData) {
      this.extraNotes = this.existingONSData.extraNotes;
      this.startDate = this.datepipe.transform(this.existingONSData.sleepStart, 'MM/dd/YYYY');
      this.endDate = this.datepipe.transform(this.existingONSData.sleepEnd, 'MM/dd/YYYY');
      
      var startTimeDateObj = new Date(this.existingONSData.sleepStart);
      this.startTime = startTimeDateObj.toISOString();

      this.endTime = new Date(this.existingONSData.sleepEnd).toISOString();
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

  cancel(){
    this.modalController.dismiss();
  }

  delete(){
    if(this.existingONSData == undefined) {
      //No data was made yet
      this.modalController.dismiss();
    }
    else {
      this.modalController.dismiss(this.existingONSData.id);
    }
  }

  convertToDate(convert){
    if(convert == undefined){
      return new Date();
    }
    else {
      return new Date(convert);
    }
  }

  save(){
    var startDateOnly = this.convertToDate(this.startDate);
    var startTimeOnly = this.convertToDate(this.startTime);
    var endDateOnly = this.convertToDate(this.endDate);
    var endTimeOnly = this.convertToDate(this.endTime);
    var startBothDateTime = new Date(startDateOnly.getFullYear(), startDateOnly.getMonth(), startDateOnly.getDate(), startTimeOnly.getHours(), startTimeOnly.getMinutes(), startTimeOnly.getSeconds());
    var endBothDateTime = new Date(endDateOnly.getFullYear(), endDateOnly.getMonth(), endDateOnly.getDate(), endTimeOnly.getHours(), endTimeOnly.getMinutes(), endTimeOnly.getSeconds());

    var test = this.extraNotes;

    if(this.existingONSData != undefined){
      //update the existing ONS data and return it back
      this.existingONSData.sleepStart = startBothDateTime;
      this.existingONSData.sleepEnd = endBothDateTime;
      this.existingONSData.extraNotes = test;
      this.modalController.dismiss(this.existingONSData);
    }

    var overnight = new OvernightSleepData(startBothDateTime, endBothDateTime, test);
    console.log(overnight);
    this.modalController.dismiss(overnight);
  }

}
