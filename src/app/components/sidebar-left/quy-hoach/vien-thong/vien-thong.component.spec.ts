import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VienThongComponent } from './vien-thong.component';

describe('VienThongComponent', () => {
  let component: VienThongComponent;
  let fixture: ComponentFixture<VienThongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VienThongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VienThongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
