import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoThongComponent } from './giao-thong.component';

describe('GiaoThongComponent', () => {
  let component: GiaoThongComponent;
  let fixture: ComponentFixture<GiaoThongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoThongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoThongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
