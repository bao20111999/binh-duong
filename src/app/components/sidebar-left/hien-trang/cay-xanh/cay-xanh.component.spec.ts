import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CayXanhComponent } from './cay-xanh.component';

describe('CayXanhComponent', () => {
  let component: CayXanhComponent;
  let fixture: ComponentFixture<CayXanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CayXanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CayXanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
