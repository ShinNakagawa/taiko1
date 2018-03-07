import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-newyear',
  templateUrl: 'newyear.html'
})
export class NewYearPage {
  users: Observable<any[]>;
  userPath = 'users';
  payPath = 'pays';
  yearPay;

  constructor(public navParams: NavParams,
              public viewCtrl:ViewController,
              private db: AngularFireDatabase,
              private alertCtrl: AlertController) {
    this.yearPay = navParams.get('yearPay');
    this.users = this.db.list(`${this.userPath}/`).valueChanges();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addPayList(): void {
    //add Pay data for a new year
    this.users.subscribe(res => {
      res.forEach(user => {
        for (let i = 1; i <= 12; i++) {
          const data = {
            userid: user.uid,
            month: i,
            date: ''
          };
          let key = this.db.list(`${this.payPath}/${this.yearPay}/`).push(data).key;
          const dataKey = {
            id: key
          };
          this.db.object(`${this.payPath}/${this.yearPay}/${key}/`).update(dataKey)
            .catch(error => console.log(error));
        }
      })
    })
    let alert = this.alertCtrl.create();
    alert.setTitle('Add data');
    alert.setMessage('Add pat list data');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('finish adding data:');  
        this.viewCtrl.dismiss();    
      }
    });
    alert.present();
  }
}
