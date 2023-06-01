import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMoreDetailsComponent } from './car-more-details.component';

describe('CarMoreDetailsComponent', () => {
  let component: CarMoreDetailsComponent;
  let fixture: ComponentFixture<CarMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
