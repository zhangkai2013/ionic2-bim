import { Component } from '@angular/core';
import { NavController,AlertController,NavParams } from 'ionic-angular';
import { RoomPage } from '../room/room';

@Component({
  selector: 'page-floor',
  templateUrl: 'floor.html'
})
export class FloorPage {
  public floors = [];
  public largeId:number;
  public largeName:string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public navParams:NavParams) {
	this.largeId = navParams.get("id");
	this.largeName = navParams.get("name");
  }
  ionViewDidLoad() {
  	this.getFloors();//获取大楼信息
  }  
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //获取大楼信息
  getFloors(){
  	for(let i=0;i<10;i++){
  		this.floors.push({
  			id:i,
  			name:"xx楼层"+i
  		});
  	}
  }
  //某某大楼
  RoomPage(params){
  	params.largeId = this.largeId;
  	params.largeName = this.largeName;
  	this.navCtrl.push(RoomPage,params);
  }
}
