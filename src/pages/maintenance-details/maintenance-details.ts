import { Component } from '@angular/core';
import { NavController,AlertController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-maintenance-details',
  templateUrl: 'maintenance-details.html'
})
export class MaintenanceDetailsPage {
  public maintenanceDetails={};
  public id:number;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public navParams:NavParams) {
	this.id = navParams.get("id");
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
  MaintenanceDetailsPage(){
  	this.navCtrl.push(MaintenanceDetailsPage,{});
  }
}
