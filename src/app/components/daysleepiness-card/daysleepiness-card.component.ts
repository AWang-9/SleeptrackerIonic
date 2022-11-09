import { Component, Input, OnInit } from '@angular/core';
import { StanfordSleepinessData } from 'src/app/data/stanford-sleepiness-data';

@Component({
  selector: 'app-daysleepiness-card',
  templateUrl: './daysleepiness-card.component.html',
  styleUrls: ['./daysleepiness-card.component.scss'],
})
export class DaysleepinessCardComponent implements OnInit {
  @Input() sleepinessData:StanfordSleepinessData;
  summaryString:string;
  extraNotes:string = "No extra notes.";
  StanfordScale = StanfordSleepinessData.ScaleValues;


  constructor() { }

  ngOnInit() {}

}
