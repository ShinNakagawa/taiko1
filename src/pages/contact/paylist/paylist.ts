import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-paylist',
  templateUrl: 'paylist.html'
})
export class PayListPage {
  showType: string;
  pays: Observable<any[]>;
  months: Array<{month: string,
                 userid: string,
                 date: string}>;
  yearPay = '2018';
  payPath = 'pays';
  userid: string;
  users: Observable<any[]>;
  userPath = 'users';

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              private alertCtrl: AlertController
            ) {
    this.userid = '';
    this.showType = 'all';
    this.users = this.db.list(`${this.userPath}/`).valueChanges();
    this.pays = this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges();
    this.months=[];
    this.months.push({month: 'January', userid: this.userid, date: 'Jan/22/2018'});
    this.months.push({month: 'February', userid: this.userid, date: 'Feb/1/2018'});
    this.months.push({month: 'March', userid: this.userid, date: ''});
    this.months.push({month: 'April', userid: this.userid, date: ''});
    this.months.push({month: 'May', userid: this.userid, date: ''});
    this.months.push({month: 'June', userid: this.userid, date: ''});
    this.months.push({month: 'July', userid: this.userid, date: ''});
    this.months.push({month: 'August', userid: this.userid, date: ''});
    this.months.push({month: 'September', userid: this.userid, date: ''});
    this.months.push({month: 'October', userid: this.userid, date: ''});
    this.months.push({month: 'November', userid: this.userid, date: ''});
    this.months.push({month: 'December', userid: this.userid, date: ''});
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickStar(item): void {
    if (item.datePay) {
      // delete payment record
      const path = `${this.payPath}/${this.yearPay}/${item.id}`;
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
        userid: item.userid,
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
