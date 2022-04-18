import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoatNuocComponent } from './thoat-nuoc.component';

describe('ThoatNuocComponent', () => {
  let component: ThoatNuocComponent;
  let fixture: ComponentFixture<ThoatNuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThoatNuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoatNuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
