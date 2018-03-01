import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AuthProvider } from '../../../providers/auth/auth';

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
  basePath = 'pays';
  userid: string;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              private alertCtrl: AlertController,
              public toastCtrl: ToastController,
              //private auth: AuthProvider
            ) {
                // if (this.auth.currentUser) {       
                //   console.log('this.auth.currentUser=', this.auth.currentUser);
                //   console.log('this.auth.currentUserId=', this.auth.currentUserId);
                //   this.userid = this.auth.currentUserId;
                //   this.showType = 'you';
                // } else {
                  console.log('Unable to read userID, so add timer to wait for user ID');       
                  let toast = this.toastCtrl.create({
                    message: 'Please wait for a second.',
                    duration: 3000,
                    position: 'top'
                  });
                  toast.present();
                  this.userid = '';
                  this.showType = 'all';
                // }
                this.pays = this.db.list(`${this.basePath}/${this.yearPay}/`).valueChanges();
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
      const path = `${this.basePath}/${this.yearPay}/${item.id}`;
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
      const path = `${this.basePath}/${this.yearPay}`;
      const timestamp = new Date();
      const data = {
        userid: this.userid,
        month: item.month,
        date: timestamp
      };
      let key = this.db.list(path).push(data).key;
      //update id as key
      const pathKey = `${this.basePath}/${this.yearPay}/${key}`;
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
