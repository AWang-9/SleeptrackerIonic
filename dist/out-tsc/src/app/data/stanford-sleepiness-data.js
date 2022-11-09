/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */
import { SleepData } from './sleep-data';
export class StanfordSleepinessData extends SleepData {
    constructor(loggedValue, loggedAt = new Date(), extraNotes) {
        super();
        this.loggedValue = loggedValue;
        this.loggedAt = loggedAt;
        this.extraNotes = extraNotes;
    }
    summaryString() {
        return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
    }
    getExtraNotes() {
        return this.extraNotes;
    }
    getDateOnly() {
        return new Date(this.loggedAt.getFullYear(), this.loggedAt.getMonth(), this.loggedAt.getDate());
    }
    getTimeOnly() {
        return new Date(this.loggedAt.getHours(), this.loggedAt.getMinutes(), this.loggedAt.getSeconds());
    }
}
StanfordSleepinessData.ScaleValues = [undefined,
    'Feeling active, vital, alert, or wide awake',
    'Functioning at high levels, but not at peak; able to concentrate',
    'Awake, but relaxed; responsive but not fully alert',
    'Somewhat foggy, let down',
    'Foggy; losing interest in remaining awake; slowed down',
    'Sleepy, woozy, fighting sleep; prefer to lie down',
    'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7
//# sourceMappingURL=stanford-sleepiness-data.js.map