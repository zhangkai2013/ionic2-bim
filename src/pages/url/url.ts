import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-url',
  templateUrl: 'url.html'
})
export class UrlPage {
  public items = [];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  ionViewDidLoad() {
  	this.items = this.getItems();
  }
  getItems(){
  	return [{
  		name:"远中产业园1",
  		ip:"61.173.1.21"
  	},{
  		name:"远中产业园2",
  		ip:"61.173.1.22"
  	},{
  		name:"远中产业园3",
  		ip:"61.173.1.23"
  	},{
  		name:"远中产业园4",
  		ip:"61.173.1.24"
  	},{
  		name:"远中产业园5",
  		ip:"61.173.1.25"
  	},{
  		name:"远中产业园6",
  		ip:"61.173.1.26"
  	},{
  		name:"远中产业园7",
  		ip:"61.173.1.27"
  	},{
  		name:"远中产业园8",
  		ip:"61.173.1.28"
  	}];
  }
  settings(){
  	let alert = this.alertCtrl.create({ 
            title: 'Prompt!', 
            subTitle: 'settings not done yet', 
            buttons: ['OK'] 
        }); 
        alert.present(); 
  }
}
