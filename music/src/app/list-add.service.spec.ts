import { TestBed, inject } from '@angular/core/testing';

import { ListAddService } from './list-add.service';

describe('ListAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAddService]
    });
  });

  it('should be created', inject([ListAddService], (service: ListAddService) => {
    expect(service).toBeTruthy();
  }));
});
