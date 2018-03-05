import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pay } from '../../../models/pay.model';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html'
})
export class PayPage {
  months: Observable<any[]>;
  yearPay = '2018';
  payPath = 'pays';
  userPath = 'users';
  user: any;
  payInfo: Array<Pay>;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              public navParams: NavParams,
              private alertCtrl: AlertController
            ) {
    this.user = navParams.get('user');
    this.months = this.db.list(`${this.payPath}/${this.yearPay}/`, ref => ref.orderByChild('userid').equalTo(this.user.uid)).valueChanges();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickStar(item): void {
    const date = moment(new Date()).format('MMM Do YYYY');
    if (item.date !== '') {
      //delete payment record
      const data = {
        date: ''
      };
      this.db.object(`${this.payPath}/${this.yearPay}/${item.id}/`).update(data)
        .catch(error => console.log(error));
      let alert = this.alertCtrl.create({
        title: 'pay',
        message: 'delete pay date:',
        buttons: ['OK']
      });
      alert.present();
    } else {
      //update payment record
      const data = {
        date: date
      };
      this.db.object(`${this.payPath}/${this.yearPay}/${item.id}/`).update(data)
        .catch(error => console.log(error));
      let alert = this.alertCtrl.create({
        title: 'pay',
        message: 'update pay date:',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  addList(): void {
    for (let i = 1; i <= 12; i++) {
      const data = {
        userid: this.user.uid,
        month: i,
        date: ''
      };
      let key = this.db.list(`${this.payPath}/${this.yearPay}/`).push(data).key;
      //update id as key
      const dataKey = {
        id: key
      };
      this.db.object(`${this.payPath}/${this.yearPay}/${key}/`).update(dataKey)
        .catch(error => console.log(error));
    }
    let alert = this.alertCtrl.create({
      title: 'pay',
      message: 'add pay data:',
      buttons: ['OK']
    });
    alert.present();
  }

}
