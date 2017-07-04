import { Component } from '@angular/core';
import { NavController,AlertController,NavParams } from 'ionic-angular';
import { MaintenanceDetailsPage } from '../maintenance-details/maintenance-details';

@Component({
  selector: 'page-order-info',
  templateUrl: 'order-info.html'
})
export class OrderInfoPage {
  public orderInfors={};
  public id:number;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public navParams:NavParams) {
	this.id = navParams.get("id");
  }
  ionViewDidLoad() {
  	this.orderInfors = this.getOrderInfors(this.id);
  }  
  //获取工单详情
  getOrderInfors(id){
  	return {
  		"deviceName":id+"设备",
  		"code":"KDF7K56M345RE",
  		"address":"某某大厦－xx楼－ABCD房间",
  		"orderType":"设备报警应对",
  		"personType":"问题的类型",
  		"infoDesc":"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述",
  		"img":["fault.png","gears.png","fault.png","head.png","fault.png"],
  		"priority":"高",
  		"time":"2017-06-23 12:23:30",
  		"distributionName":"张某某",
  		"sparePart":"备件1234",
  		"repairMan":"王某某",
  		"repairTel":"13222222222"
  	};
  }
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  MaintenanceDetailsPage(){
  	this.navCtrl.push(MaintenanceDetailsPage,{id:this.id});
  }
}
