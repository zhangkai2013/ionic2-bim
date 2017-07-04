import { Component } from '@angular/core';
import { NavController,AlertController,NavParams,ViewController,App } from 'ionic-angular';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html'
})
export class RoomPage {
  public rooms = [];
  public largeId:number;
  public largeName:string;
  public floorId:number;
  public floorName:string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public navParams:NavParams,public ViewCtrl:ViewController) {
	this.largeId = navParams.get("largeId");
	this.largeName = navParams.get("largeName");
	this.floorId = navParams.get("id");
	this.floorName = navParams.get("name");
  }
  ionViewDidLoad() {
  	this.getRooms();//获取大楼信息
  }  
  settings(){
	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //获取房间信息
  getRooms(){
  	for(let i=0;i<10;i++){
  		this.rooms.push({
  			id:i,
  			name:"房间名称"+i
  		});
  	}
  }
}
