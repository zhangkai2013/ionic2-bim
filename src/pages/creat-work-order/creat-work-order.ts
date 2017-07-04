import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { LargeBuildingPage } from './large-building/large-building';

@Component({
  selector: 'page-creat-work-order',
  templateUrl: 'creat-work-order.html'
})
export class CreatWorkOrderPage {
  public notices = {};
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
  	
  }  
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
  //某某大厦
	LargeBuildingPage(){
		this.navCtrl.push(LargeBuildingPage,{});
	}
}
