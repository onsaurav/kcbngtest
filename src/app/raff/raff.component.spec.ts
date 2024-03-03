import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffComponent } from './raff.component';

describe('RaffComponent', () => {
  let component: RaffComponent;
  let fixture: ComponentFixture<RaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
