import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items: Observable<any[]>;
  basePath = 'events';
  yearPay;

  constructor(private modalCtrl: ModalController,
              private db: AngularFireDatabase) {
    this.yearPay = moment(new Date()).format('YYYY');
    this.loadingData();
  }

  loadingData() {
    this.items = this.db.list(`${this.basePath}/${this.yearPay}/`).valueChanges();
  }

  createItem() {
    let createModel = this.modalCtrl.create('CreateEventPage', {yearPay: this.yearPay}, { cssClass: 'inset-modal' });
    createModel.onDidDismiss(data => {
      if (data) {
        //console.log("created an item");
      }
    });
    createModel.present();
  }

  itemTapped(event, item) {
    let itemModel = this.modalCtrl.create('EventPage', {item: item}, { cssClass: 'inset-modal' });
    itemModel.onDidDismiss(data => {
      if (data) {
        //console.log("test1111");
      }
    });
    itemModel.present();
  }

  editItem(item) {
    let editModel = this.modalCtrl.create('EditEventPage', {item: item, yearPay: this.yearPay}, { cssClass: 'inset-modal' });
    editModel.onDidDismiss(data => {
      if (data) {
        //console.log("test1111");
      }
    });
    editModel.present();
  }

  deleteItem(item) {
    this.db.object(`${this.basePath}/${this.yearPay}/${item.id}`).remove()
      .catch(error => console.log(error));
  }

}