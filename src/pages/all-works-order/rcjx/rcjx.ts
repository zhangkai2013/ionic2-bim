import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderInfoPage } from '../../order-info/order-info';

@Component({
  selector: 'page-all-works-order',
  templateUrl: 'rcjx.html'
})
export class RcjxPage {
  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }
  ionViewDidLoad() {
   	this.items = this.getItems();//获取工单提醒列表
  }
  getItems(){
  	return [{
  		id:"1",
  		time:"13年12月01日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址1",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		id:"2",
  		time:"13年12月02日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址2",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		id:"3",
  		time:"13年12月03日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址3",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		id:"4",
  		time:"13年12月04日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址4",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		id:"5",
  		time:"13年12月01日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址5",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		id:"6",
  		time:"13年12月01日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址6",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	},{
  		id:"7",
  		time:"13年12月01日",
  		img:"head.png",
  		name:"问题类型日常检修",
  		tit:"设备地址7",
  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
  	}];
  }
  //下拉刷新
  doRefresh(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.items.unshift({
  				id:(this.items.length+1),
		  		time:"13年12月01日",
		  		img:"head.png",
		  		name:"问题类型日常检修",
		  		tit:"设备地址"+(this.items.length+1),
		  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  //上拉加载
  doInfinite(refresher) {
	     setTimeout(() => {
	       for (var i = 0; i < 3; i++) {
	         this.items.push({
  				id:(this.items.length+1),
		  		time:"13年12月01日",
		  		img:"head.png",
		  		name:"问题类型日常检修",
		  		tit:"设备地址"+(this.items.length+1),
		  		info:"问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述"
		  	});
	      }
	      refresher.complete();
	    }, 2000);
  }
  //订单详情
  OrderInfoPage(id){
  	this.navCtrl.push(OrderInfoPage,{id:id});
  }
}
