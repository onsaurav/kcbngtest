import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspannelComponent } from './newspannel.component';

describe('NewspannelComponent', () => {
  let component: NewspannelComponent;
  let fixture: ComponentFixture<NewspannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewspannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewspannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
