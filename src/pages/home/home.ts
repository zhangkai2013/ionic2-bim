import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WorkOrderPage } from '../work-order/work-order';
import { OperationsPage } from '../operations/operations';
import { LoginPage } from '../login/login';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public notices = {};
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public storage: Storage) {

  }
  ionViewDidLoad() {
   	this.notices = this.getNotices();//获取首页提醒数量
   	this.storage.set('loginType', false);//登录状态
  }
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //工单提醒
  WorkOrderPage(){
  	this.navCtrl.push(WorkOrderPage,{});
  }
  //运维管理
  OperationsPage(){
  	this.navCtrl.push(OperationsPage,{});
  }
  //设置
  SettingPage(){
  	//判断账户是否登录
  	let that = this;
  	this.storage.get('loginType').then((loginType) => {
  		if(loginType){//已登录
			that.navCtrl.push(SettingPage,{});
		}else{//未登录
			that.navCtrl.push(LoginPage,{});
		}
	});
  }
  //首页提醒数量
  getNotices(){
  	return {"sb":"2","gd":"3","tz":"0","yw":"4","zc":"0","kj":"4"};
  }
}
