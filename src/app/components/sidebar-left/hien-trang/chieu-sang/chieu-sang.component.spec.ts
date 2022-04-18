import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieuSangComponent } from './chieu-sang.component';

describe('ChieuSangComponent', () => {
  let component: ChieuSangComponent;
  let fixture: ComponentFixture<ChieuSangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChieuSangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChieuSangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
