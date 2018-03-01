import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  payMonth() {
    let payModal = this.modalCtrl.create('PayListPage', null, { cssClass: 'inset-modal' });
    payModal.onDidDismiss(item => {
      if (item) {
        //this.items.add(item);
      }
    })
    payModal.present();
  }
}
