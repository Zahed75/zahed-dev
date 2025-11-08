import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyDetails } from './case-study-details';

describe('CaseStudyDetails', () => {
  let component: CaseStudyDetails;
  let fixture: ComponentFixture<CaseStudyDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
