import { TestBed, inject } from '@angular/core/testing';

import { DataStudentService } from './data-student.service';

describe('DataStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStudentService]
    });
  });

  it('should be created', inject([DataStudentService], (service: DataStudentService) => {
    expect(service).toBeTruthy();
  }));
});
