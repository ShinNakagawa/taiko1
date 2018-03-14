import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
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
  months: Monthly[];
  payPath = 'pays';
  yearPay;
  payID: string;
  user: any;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              //private alertCtrl: AlertController,
              public navParams: NavParams) {
    this.user = navParams.get('user');
    this.yearPay = navParams.get('yearPay');
    let pays = this.db.list(`${this.payPath}/${this.yearPay}/`, ref => ref.orderByChild('userid').equalTo(this.user.uid)).valueChanges();
    pays.subscribe(res => {
      this.months = [];
      res.forEach(rs1 => {
        let pay: Pay = rs1;
        this.payID = pay.id;
        let i = 0;
        pay.monthly.forEach(rs2 => {
          this.months.push({index: i, date: rs2.date})
          i++;
        })
      })
    })

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickStar(item): void {
    //console.log('item=', item)
    const date = moment(new Date()).format('MMM Do YYYY');
    if (item.date !== '') {
      //delete payment record
      const data = {
        date: ''
      };
      this.db.object(`${this.payPath}/${this.yearPay}/${this.payID}/monthly/${item.index}`).update(data)
        .catch(error => console.log(error));
      // let alert = this.alertCtrl.create({
      //   title: 'pay',
      //   message: 'delete pay date:',
      //   buttons: ['OK']
      // });
      // alert.present();
    } else {
      //update payment record
      const data = {
        date: date
      };
      this.db.object(`${this.payPath}/${this.yearPay}/${this.payID}/monthly/${item.index}`).update(data)
        .catch(error => console.log(error));
      // let alert = this.alertCtrl.create({
      //   title: 'pay',
      //   message: 'update pay date:',
      //   buttons: ['OK']
      // });
      // alert.present();
    }
  }

}
