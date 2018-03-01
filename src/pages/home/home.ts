import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: Observable<any[]>;
  userid: string;
  basePath = 'songs';

  constructor(private modalCtrl: ModalController,
              private db: AngularFireDatabase) {
    const path = `${this.basePath}`;
    this.songs = this.db.list(path).valueChanges();
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
    const path = `${this.basePath}/${song.id}`;
    this.db.object(path).remove()
      .catch(error => console.log(error));
  }
}
