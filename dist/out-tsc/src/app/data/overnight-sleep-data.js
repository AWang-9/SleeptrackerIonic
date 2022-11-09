import { SleepData } from './sleep-data';
export class OvernightSleepData extends SleepData {
    constructor(sleepStart, sleepEnd, extraNotes) {
        super();
        this.sleepStart = sleepStart;
        this.sleepEnd = sleepEnd;
        this.extraNotes = extraNotes;
    }
    summaryString() {
        var sleepStart_ms = this.sleepStart.getTime();
        var sleepEnd_ms = this.sleepEnd.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = sleepEnd_ms - sleepStart_ms;
        // Convert to hours and minutes
        return Math.floor(difference_ms / (1000 * 60 * 60)) + " hours, " + Math.floor(difference_ms / (1000 * 60) % 60) + " minutes";
    }
    dateString() {
        return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
    notes() {
        return this.extraNotes;
    }
}
//# sourceMappingURL=overnight-sleep-data.js.map