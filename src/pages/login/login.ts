import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { UrlPage } from '../url/url';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
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
  UrlPage(){
  	this.navCtrl.push(UrlPage,{});
  }
}
