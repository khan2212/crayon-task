import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAreaComponent } from './digital-area.component';

describe('DigitalAreaComponent', () => {
  let component: DigitalAreaComponent;
  let fixture: ComponentFixture<DigitalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
