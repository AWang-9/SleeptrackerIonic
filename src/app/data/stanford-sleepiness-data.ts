/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	public loggedValue:number;
	public extraNotes:string;

	constructor(loggedValue:number, loggedAt:Date = new Date(), extraNotes:string) {
		super();
		this.loggedValue = loggedValue;
		this.loggedAt = loggedAt;
		this.extraNotes = extraNotes;
	}

	summaryString():string {
		return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

	getExtraNotes():string {
		return this.extraNotes;
	}

	getDateOnly():Date{
		return new Date(this.loggedAt.getFullYear(), this.loggedAt.getMonth(), this.loggedAt.getDate());
	}

	getTimeOnly():Date{
		return new Date(this.loggedAt.getHours(), this.loggedAt.getMinutes(), this.loggedAt.getSeconds());
	}
}
