import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyHoachComponent } from './quy-hoach.component';

describe('QuyHoachComponent', () => {
  let component: QuyHoachComponent;
  let fixture: ComponentFixture<QuyHoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuyHoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyHoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
