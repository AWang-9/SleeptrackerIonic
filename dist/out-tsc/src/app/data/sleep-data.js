import { generate } from 'shortid';
export class SleepData {
    constructor() {
        //Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
        this.id = generate();
        this.loggedAt = new Date();
    }
    summaryString() {
        return 'Unknown sleep data';
    }
    dateString() {
        return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
}
//# sourceMappingURL=sleep-data.js.map