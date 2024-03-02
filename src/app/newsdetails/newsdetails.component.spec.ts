import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsdetailsComponent } from './newsdetails.component';

describe('NewsdetailsComponent', () => {
  let component: NewsdetailsComponent;
  let fixture: ComponentFixture<NewsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
