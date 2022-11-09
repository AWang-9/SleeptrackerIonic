import { TestBed } from '@angular/core/testing';
import { SleepService } from './sleep.service';
describe('SleepService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SleepService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=sleep.service.spec.js.map