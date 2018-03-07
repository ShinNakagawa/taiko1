import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import moment from 'moment';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  users: Observable<any[]>;
  userPath = 'users';
  payPath = 'pays';
  yearPay;

  constructor(private db: AngularFireDatabase,
              private modalCtrl: ModalController) {
    this.users = this.db.list(`${this.userPath}/`).valueChanges();
    this.yearPay = moment(new Date()).format('YYYY');
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
