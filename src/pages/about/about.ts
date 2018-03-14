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
                this.db.list(`${this.userPath}/`).valueChanges().subscribe(res => {
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

                this.loadingData();
  }

  loadingData() {
    this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges().subscribe(res => {
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
          //console.log('found user=', pay.userid, ', count=', count);
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

  doView(): void {
    this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges().subscribe(rs => {
      console.log('re.length=', rs.length);
      if (rs.length < 1) {
        let monthly = [];
        for (let i = 0; i < 12; i++) {
          monthly.push({date: ''});
        }
        this.users.forEach(user => {
          const data = {
            userid: user.uid,
            monthly: monthly
          };
          let key = this.db.list(`${this.payPath}/${this.yearPay}/`).push(data).key;
          const dataKey = {
            id: key
          };
          this.db.object(`${this.payPath}/${this.yearPay}/${key}/`).update(dataKey)
            .catch(error => console.log(error));
        })
      }
    })
    this.loadingData();
  }

}
