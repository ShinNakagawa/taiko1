import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: Observable<any[]>;
  basePath = 'events';
  yearPay = '2018';

  constructor(private modalCtrl: ModalController,
              private db: AngularFireDatabase) {
    //this.events = this.db.list(`${this.basePath}/${this.yearPay}/`).valueChanges();
    this.items = this.db.list(`${this.basePath}/`).valueChanges();
  }

  createItem() {
    let createModel = this.modalCtrl.create('CreateEventPage', null, { cssClass: 'inset-modal' });
    createModel.onDidDismiss(data => {
      if (data) {
        //console.log("created an item");
      }
    });
    createModel.present();
  }

  itemTapped(event, item) {
    let itemModel = this.modalCtrl.create('EditEventPage', {item: item}, { cssClass: 'inset-modal' });
    itemModel.onDidDismiss(data => {
      if (data) {
        //console.log("test1111");
      }
    });
    itemModel.present();
  }

  deleteItem(item) {
    const path = `${this.basePath}/${item.id}`;
    this.db.object(path).remove()
      .catch(error => console.log(error));
  }
}