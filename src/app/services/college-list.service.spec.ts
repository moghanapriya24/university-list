import { TestBed } from '@angular/core/testing';

import { CollegeListService } from './college-list.service';

describe('CollegeListService', () => {
  let service: CollegeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
