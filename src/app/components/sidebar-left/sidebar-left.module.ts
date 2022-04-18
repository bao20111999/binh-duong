import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongTrinhXayDungComponent } from './hien-trang/cong-trinh-xay-dung/cong-trinh-xay-dung.component';
import { GiaoThongComponent } from './hien-trang/giao-thong/giao-thong.component';
import { CapDienComponent } from './hien-trang/cap-dien/cap-dien.component';
import { CayXanhComponent } from './hien-trang/cay-xanh/cay-xanh.component';
import { ChieuSangComponent } from './hien-trang/chieu-sang/chieu-sang.component';
import { ThoatNuocComponent } from './hien-trang/thoat-nuoc/thoat-nuoc.component';
import { VienThongComponent } from './hien-trang/vien-thong/vien-thong.component';
import { MoiTruongDoThiComponent } from './hien-trang/moi-truong-do-thi/moi-truong-do-thi.component';
import { CapNuocComponent } from './hien-trang/cap-nuoc/cap-nuoc.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    CongTrinhXayDungComponent,
    GiaoThongComponent,
    CapDienComponent,
    CayXanhComponent,
    ChieuSangComponent,
    ThoatNuocComponent,
    VienThongComponent,
    MoiTruongDoThiComponent,
    CapNuocComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
  ]
})
export class SidebarLeftModule { }
