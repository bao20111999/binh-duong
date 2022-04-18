import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongTrinhXayDungComponent } from './cong-trinh-xay-dung.component';

describe('CongTrinhXayDungComponent', () => {
  let component: CongTrinhXayDungComponent;
  let fixture: ComponentFixture<CongTrinhXayDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongTrinhXayDungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongTrinhXayDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
