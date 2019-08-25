import { TestBed } from '@angular/core/testing';

import { ContentTypeManagerService } from './content-type-manager.service';

describe('ContentTypeManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentTypeManagerService = TestBed.get(ContentTypeManagerService);
    expect(service).toBeTruthy();
  });
});
