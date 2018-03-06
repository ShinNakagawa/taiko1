import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams } from 'ionic-angular';
import { Event } from '../../../models/event.model';

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  item: Event;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams) {
      this.item = navParams.get('item');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
