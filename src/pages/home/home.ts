import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from './../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: Observable<any[]>;
  userid: string;
  basePath = 'songs';

  constructor(private modalCtrl: ModalController,
              private auth: AuthProvider,
              private db: AngularFireDatabase) {
    this.songs = this.db.list(`${this.basePath}`).valueChanges();
  }

  createSong() {
    let createSongModel = this.modalCtrl.create('CreateSongPage', null, { cssClass: 'inset-modal' });
    createSongModel.onDidDismiss(data => {
      if (data) {
        console.log("created song");
      }
    });
    createSongModel.present();
  }

  songTapped(event, song) {
    let songModel = this.modalCtrl.create('SongPage', {song: song}, { cssClass: 'inset-modal' });
    songModel.onDidDismiss(data => {
      if (data) {
        console.log("test1111");
      }
    });
    songModel.present();
  }

  editSong(song) {
    let editSongModel = this.modalCtrl.create('EditSongPage', {song: song}, { cssClass: 'inset-modal' });
    editSongModel.onDidDismiss(data => {
      if (data) {
        console.log("test1111");
      }
    });
    editSongModel.present();
  }

  deleteSong(song) {
    this.db.object(`${this.basePath}/${song.id}`).remove()
      .catch(error => console.log(error));
  }


//==========================================================
//Shinichi : shinichi0719@hotmail.com
//James Bykowy  : shin234@example.com
//April Sora : test@example.com
//Ann DeVito : test2@example.com
//Kristie Muzyka : test3@example.com
//Bryan Bock : test4@example.com
//Jeff : test5@example.com
//Audra Balion : test6@example.com
  openModalLogin() {
    let loginModel = this.modalCtrl.create('LoginPage', null, { cssClass: 'inset-modal' });
    loginModel.onDidDismiss(data => {
      if (data) {
        console.log("HomePage::openModalLogin login");
        //window.location.reload();
      }
    });
    loginModel.present();
  }

  openModalSignup() {
    let signupModel = this.modalCtrl.create('SignupPage', null, { cssClass: 'inset-modal' });
    signupModel.onDidDismiss(data => {
      if (data) {
        console.log("HomePage::openModalSignup signup");
        //window.location.reload();        
      }
    });
    signupModel.present();
  }

  logout(): void {
    this.auth.logout();
    //window.location.reload();    
  }

}
