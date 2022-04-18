import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNuocComponent } from './cap-nuoc.component';

describe('CapNuocComponent', () => {
  let component: CapNuocComponent;
  let fixture: ComponentFixture<CapNuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapNuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
