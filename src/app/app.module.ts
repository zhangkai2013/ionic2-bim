import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WorkOrderPage } from '../pages/work-order/work-order';
import { OperationsPage } from '../pages/operations/operations';
import { AllWorksOrderPage } from '../pages/all-works-order/all-works-order';
import { KhbxPage } from '../pages/all-works-order/khbx/khbx';
import { RcjxPage } from '../pages/all-works-order/rcjx/rcjx';
import { YfxwhPage } from '../pages/all-works-order/yfxwh/yfxwh';
import { BjydPage } from '../pages/all-works-order/bjyd/bjyd';
import { CreatWorkOrderPage } from '../pages/creat-work-order/creat-work-order';
import { LargeBuildingPage } from '../pages/creat-work-order/large-building/large-building';
import { FloorPage } from '../pages/creat-work-order/floor/floor';
import { RoomPage } from '../pages/creat-work-order/room/room';
import { OrderInfoPage } from '../pages/order-info/order-info';
import { MaintenanceDetailsPage } from '../pages/maintenance-details/maintenance-details';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { UrlPage } from '../pages/url/url';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WorkOrderPage,
    OperationsPage,
    AllWorksOrderPage,
    KhbxPage,
    RcjxPage,
    YfxwhPage,
    BjydPage,
    CreatWorkOrderPage,
    LargeBuildingPage,
    FloorPage,
    RoomPage,
    OrderInfoPage,
    MaintenanceDetailsPage,
    LoginPage,
    SettingPage,
    UrlPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true' ,
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
   	  backButtonText: '',
    	  tabsPlacement: 'bottom',  
      pageTransition: 'ios'  
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WorkOrderPage,
    OperationsPage,
    AllWorksOrderPage,
    KhbxPage,
    RcjxPage,
    YfxwhPage,
    BjydPage,
    CreatWorkOrderPage,
    LargeBuildingPage,
    FloorPage,
    RoomPage,
    OrderInfoPage,
    MaintenanceDetailsPage,
    LoginPage,
    SettingPage,
    UrlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
