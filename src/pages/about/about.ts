import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  users: Observable<any[]>;
  userPath = 'users';

  constructor(private db: AngularFireDatabase,
              private modalCtrl: ModalController) {
    this.users = this.db.list(`${this.userPath}/`).valueChanges();
  }

  userTapped(event, user) {
    let payModal = this.modalCtrl.create('PayPage', {user: user}, { cssClass: 'inset-modal' });
    payModal.onDidDismiss(data => {
      if (data) {
        //this.items.add(data);
      }
    })
    payModal.present();
  }

  userEdit(user) {
    let editModel = this.modalCtrl.create('EditUserPage', {user: user}, { cssClass: 'inset-modal' });
    editModel.onDidDismiss(data => {
      if (data) {
        //console.log("test1111");
      }
    });
    editModel.present();
  }
}
