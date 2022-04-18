import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoAnQuyHoachComponent } from './components/main-content/do-an-quy-hoach/do-an-quy-hoach.component';
import { HienTrangComponent } from './components/main-content/hien-trang/hien-trang.component';
import { KhuChucNangComponent } from './components/main-content/khu-chuc-nang/khu-chuc-nang.component';
import { QuyHoachComponent } from './components/main-content/quy-hoach/quy-hoach.component';
import { XuatBaoCaoComponent } from './components/main-content/xuat-bao-cao/xuat-bao-cao.component';

const routes: Routes = [
  {
    path: 'do-an-quy-hoach-chi-tiet',
    component: DoAnQuyHoachComponent,
  },
  {
    path: 'xuat-bao-cao',
    component: XuatBaoCaoComponent,
  },
  {
    path: 'khu-chuc-nang',
    component:KhuChucNangComponent,


  },
  {
    path: 'hien-trang',
    component:HienTrangComponent,


  },
  {
    path: 'quy-hoach',
    component:QuyHoachComponent,


  },

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
