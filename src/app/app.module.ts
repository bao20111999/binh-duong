import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/home/home.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';



import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DoAnQuyHoachComponent } from './components/main-content/do-an-quy-hoach/do-an-quy-hoach.component';
import { XuatBaoCaoComponent } from './components/main-content/xuat-bao-cao/xuat-bao-cao.component';

import { MainContentComponent } from './components/main-content/main-content.component';
import { KhuChucNangComponent } from './components/main-content/khu-chuc-nang/khu-chuc-nang.component';
import { HienTrangComponent } from './components/main-content/hien-trang/hien-trang.component';
import { QuyHoachComponent } from './components/main-content/quy-hoach/quy-hoach.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarLeftComponent,

 
    QuyHoachComponent,
    HienTrangComponent,
    DoAnQuyHoachComponent,
    XuatBaoCaoComponent,

  
    MainContentComponent,
    KhuChucNangComponent,
    
  
    // BieudoTronComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NgxChartsModule,

    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
