import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';
import { Pay } from '../../../models/pay.model';
import { Monthly } from '../../../models/monthly.model';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html'
})
export class PayPage {
  months: Monthly[] = [];
  pay: Pay = null;
  payPath = 'pays';
  user: any;
  yearPay;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    this.user = navParams.get('user');
    this.yearPay = navParams.get('yearPay');
    let pays = this.db.list(`${this.payPath}/${this.yearPay}/`, ref => ref.orderByChild('userid').equalTo(this.user.uid)).valueChanges();
    pays.subscribe(res => {
      res.forEach(rs1 => {
        this.pay = rs1;
        this.months = this.pay.monthly;
      })
    })

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickStar(item): void {
    console.log('item=', item)
    const date = moment(new Date()).format('MMM Do YYYY');
    if (item.date !== '') {
      //delete payment record
      const data = {
        date: ''
      };
      this.db.object(`${this.payPath}/${this.yearPay}/${this.pay.id}/monthly/${item.index}`).update(data)
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
      this.db.object(`${this.payPath}/${this.yearPay}/${this.pay.id}/monthly/${item.index}`).update(data)
        .catch(error => console.log(error));
      let alert = this.alertCtrl.create({
        title: 'pay',
        message: 'update pay date:',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
