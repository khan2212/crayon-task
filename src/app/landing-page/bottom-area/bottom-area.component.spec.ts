import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAreaComponent } from './bottom-area.component';

describe('BottomAreaComponent', () => {
  let component: BottomAreaComponent;
  let fixture: ComponentFixture<BottomAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
