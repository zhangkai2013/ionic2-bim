import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  public setting = {};
  public id:number;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public storage: Storage) {

  }
  ionViewDidLoad() {
  	let that = this;
  	this.storage.set('id', 2);
  	this.storage.get('id').then((id) => {
  		that.id = id;
	});
  	this.setting = this.getSetting(this.id);
  }
  getSetting(id){
  	return {
  		head:"head.jpg",
  		name:"张某某",
  		URL:"远中产业园",
  		language:"简体中文"
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
}
