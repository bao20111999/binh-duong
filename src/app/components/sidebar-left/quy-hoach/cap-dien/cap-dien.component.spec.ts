import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapDienComponent } from './cap-dien.component';

describe('CapDienComponent', () => {
  let component: CapDienComponent;
  let fixture: ComponentFixture<CapDienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapDienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapDienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
