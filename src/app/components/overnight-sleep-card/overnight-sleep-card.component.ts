import { Component, OnInit, Input } from '@angular/core';
import { OvernightSleepData } from 'src/app/data/overnight-sleep-data';

@Component({
  selector: 'app-overnight-sleep-card',
  templateUrl: './overnight-sleep-card.component.html',
  styleUrls: ['./overnight-sleep-card.component.scss'],
})
export class OvernightSleepCardComponent implements OnInit {
  // @Input() overnightData:OvernightSleepData;
  // @Input() startSleep:Date;
  // @Input() endSleep:Date;
  // @Input() hoursSlept:number;
  // @Input() notes:string;

  @Input() overnightData:OvernightSleepData;
  @Input() notes:string;

  constructor() { }

  ngOnInit() {}

  calculateHoursSlept(){
    // console.log(this.sleepTimeStart);
    // console.log(this.sleepTimeEnd);
    if(this.overnightData.sleepStart == undefined || this.overnightData.sleepEnd == undefined) {
      return;
    }
    var sleepStart_ms = this.overnightData.sleepStart.getTime();
		var sleepEnd_ms = this.overnightData.sleepStart.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		var ans = Math.floor(difference_ms / (1000*60*60)) + " hours, " + Math.floor(difference_ms / (1000*60) % 60) + " minutes.";
    console.log(ans);
  }

}
