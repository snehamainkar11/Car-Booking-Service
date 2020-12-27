import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsizeComponent } from './carsize.component';

describe('CarsizeComponent', () => {
  let component: CarsizeComponent;
  let fixture: ComponentFixture<CarsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
