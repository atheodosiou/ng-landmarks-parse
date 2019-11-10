/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LandmarkService } from './landmark.service';

describe('Service: Landmark', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandmarkService]
    });
  });

  it('should ...', inject([LandmarkService], (service: LandmarkService) => {
    expect(service).toBeTruthy();
  }));
});
