import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController,Tabs } from 'ionic-angular';
import { KhbxPage } from './khbx/khbx';
import { RcjxPage } from './rcjx/rcjx';
import { YfxwhPage } from './yfxwh/yfxwh';
import { BjydPage } from './bjyd/bjyd';

@Component({
  selector: 'page-all-works-order',
  templateUrl: 'all-works-order.html'
})
export class AllWorksOrderPage {
  @ViewChild('mainTabs') tabRef:Tabs;
  tab1Root: any = KhbxPage; 
  tab2Root: any = RcjxPage; 
  tab3Root: any = YfxwhPage; 
  tab4Root: any = BjydPage; 
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
}