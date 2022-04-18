import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiTruongDoThiComponent } from './moi-truong-do-thi.component';

describe('MoiTruongDoThiComponent', () => {
  let component: MoiTruongDoThiComponent;
  let fixture: ComponentFixture<MoiTruongDoThiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoiTruongDoThiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiTruongDoThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
