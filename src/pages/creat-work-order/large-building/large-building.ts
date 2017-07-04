import { Component } from '@angular/core';
import { NavController,AlertController,ViewController,NavParams} from 'ionic-angular';
import { FloorPage } from '../floor/floor';

@Component({
  selector: 'page-large-building',
  templateUrl: 'large-building.html'
})
export class LargeBuildingPage {
  public largeBuildings = [];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public viewCtrl: ViewController,public navParams:NavParams) {
	
  }
  ionViewDidLoad() {
  	this.getLargeBuildings();//获取大楼信息
  }  
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //获取大厦信息
  getLargeBuildings(){
  	for(let i=0;i<10;i++){
  		this.largeBuildings.push({
  			id:i,
  			name:"xx大厦"+i
  		});
  	}
  }
  //某某大楼
  FloorPage(params){
  	this.navCtrl.push(FloorPage,params);
  }
}
