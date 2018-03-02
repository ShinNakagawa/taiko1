import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html'
})
export class PayPage {
  pays: Observable<any[]>;
  months: Array<{month: string,
                 date: string}>;
  yearPay = '2018';
  payPath = 'pays';
  user: any;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              public navParams: NavParams,
              private alertCtrl: AlertController
            ) {
    this.user = navParams.get('user');
    this.pays = this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges();
    this.months=[];
    this.months.push({month: 'January', date: 'Jan/22/2018'});
    this.months.push({month: 'February', date: 'Feb/1/2018'});
    this.months.push({month: 'March', date: ''});
    this.months.push({month: 'April', date: ''});
    this.months.push({month: 'May', date: ''});
    this.months.push({month: 'June', date: ''});
    this.months.push({month: 'July', date: ''});
    this.months.push({month: 'August', date: ''});
    this.months.push({month: 'September', date: ''});
    this.months.push({month: 'October', date: ''});
    this.months.push({month: 'November', date: ''});
    this.months.push({month: 'December', date: ''});
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickStar(item): void {
    if (item.datePay) {
      // delete payment record
      const path = `${this.payPath}/${this.yearPay}/${this.user.uid}`;
      this.db.object(path).remove()
        .catch(error => console.log(error));
      let alert = this.alertCtrl.create({
        title: 'delete',
        message: 'delete pay date:',
        buttons: ['OK']
      });
      alert.present();
    } else {
      //add payment record
      const path = `${this.payPath}/${this.yearPay}`;
      const timestamp = new Date();
      const data = {
        userid: this.user.uid,
        month: item.month,
        date: timestamp
      };
      let key = this.db.list(path).push(data).key;
      //update id as key
      const pathKey = `${this.payPath}/${this.yearPay}/${key}`;
      const dataKey = {
        id: key
      };
      this.db.object(pathKey).update(dataKey)
        .catch(error => console.log(error));
      let alert = this.alertCtrl.create({
        title: 'pay',
        message: 'add pay date:',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
