import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';
import { Monthly } from '../../models/monthly.model';
import { Pay } from '../../models/pay.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  users: User[];
  userPath = 'users';
  payPath = 'pays';
  yearPay;

  constructor(private db: AngularFireDatabase,
              private modalCtrl: ModalController) {
    this.yearPay = moment(new Date()).format('YYYY');
    let users = this.db.list(`${this.userPath}/`).valueChanges();

    users.subscribe(res => {
      this.users = [];
      res.forEach(rs => {
        let user: User = rs;
        this.users.push({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          imageUrl: user.imageUrl,
          count: 0
        });
      })
    })

    let pays = this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges();
    pays.subscribe(res => {
      res.forEach(rs1 => {
        let count = 0;
        let pay: Pay = rs1;
        Object.keys(pay.monthly).map(function(index){
          let monthly = new Monthly;
          monthly = pay.monthly[index];
          if (monthly.date !== ''){
            count++;
          }
        })
        //console.log('user=', pay.userid, ', count=', count);
        let check = this.users.filter(item => item.uid === pay.userid);
        if (check.length > 0) {
          check[0].count = count;
        }
      })
    })
  }

  userTapped(event, user) {
    let payModal = this.modalCtrl.create('PayPage', {user: user, yearPay: this.yearPay}, { cssClass: 'inset-modal' });
    payModal.onDidDismiss(data => {
      if (data) {
        //this.items.add(data);
      }
    })
    payModal.present();
  }

  userEdit(user) {
    let editUserModel = this.modalCtrl.create('EditUserPage', {user: user}, { cssClass: 'inset-modal' });
    editUserModel.onDidDismiss(data => {
      if (data) {
        //console.log("test1111");
      }
    });
    editUserModel.present();
  }

  newYear(): void {
    let data = this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges();
    data.subscribe(rs => {
      console.log('re.length=', rs.length);
      if (rs.length < 1) {
        let newYearModal = this.modalCtrl.create('NewYearPage', {yearPay: this.yearPay}, { cssClass: 'inset-modal' });
        newYearModal.onDidDismiss(data => {
          if (data) {
            //this.items.add(data);
          }
        })
        newYearModal.present();
      }
    })

  }

}
