import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html'
})
export class PayPage {
  months: Observable<any[]>;
  payPath = 'pays';
  user: any;
  yearPay;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    this.user = navParams.get('user');
    this.yearPay = navParams.get('yearPay');
    this.months = this.db.list(`${this.payPath}/${this.yearPay}/`, ref => ref.orderByChild('userid').equalTo(this.user.uid)).valueChanges();
  }

  loadingData() {
    let data: Observable<any[]>;
    data = this.db.list(`${this.payPath}/${this.yearPay}/`, ref => ref.orderByChild('userid').equalTo(this.user.uid)).valueChanges();
    this.months = data;
    this.months.subscribe(res => {
      console.log('res.length = ', res.length);
    })
    console.log('year=', this.yearPay);
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

}
