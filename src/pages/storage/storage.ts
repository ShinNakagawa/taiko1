import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { Upload } from '../../models/upload.model';
import * as _ from 'lodash'; // to help loop over files more succinctly
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Observable } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  uploadItems: Observable<any[]>;
  files: FileList;
  upload: Upload;
  basePath = '/uploads';
  folder;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private alertCtrl: AlertController) {
      this.folder = 'song'
      this.uploadItems = this.db.list(`${this.basePath}/${this.folder}/`).valueChanges();
  }

  segmentChanged() {
    console.log('segmentChanged =', this.folder);
    this.uploadItems = this.db.list(`${this.basePath}/${this.folder}/`).valueChanges();
  }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });

    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      // console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${this.folder}/${this.upload.file.name}`)
        .put(this.upload.file);
  
        loader.present();
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        // three observers
        // 1.) state_changed observer
        (snapshot) => {
          // upload in progress
          this.upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
          console.log(this.upload.progress);
        },
        // 2.) error observer
        (error) => {
          // upload failed
          console.log(error);
          loader.dismiss();
        },
        // 3.) success observer
        (): any => {
          this.upload.url = uploadTask.snapshot.downloadURL;
          this.upload.name = this.upload.file.name;
          this.saveFileData(this.upload);
          loader.dismiss();
        }
      );
    });
  }

  private saveFileData(upload: Upload) {
    let key = this.db.list(`${this.basePath}/${this.folder}/`).push(upload).key;
    const path = `${this.basePath}/${this.folder}/${key}`;
    const data = {
      id: key
    };
    this.db.object(path).update(data)
      .catch(error => console.log(error));
    console.log('File saved!: ' + upload.url);
  }

  deleteItem(item): void {
    console.log(item);
    //delete data in list
    const path = `${this.basePath}/${this.folder}/${item.id}`;
    this.db.object(path).remove().then( (res) => {
      console.log('Data deleted from database! ' + item.name);
    }).catch (err => {
      console.log(err);
    })

    //delete file in storage
    let storageRef = firebase.storage().ref().child(`${this.basePath}/${this.folder}/${item.name}`);
    storageRef.delete().then( (snapshot) => {
      console.log('File deleted from storage!: ' + item.name);
    }).catch (err => {
      console.log('Failed to delete from storage!: ' + item.name);
    })

    let alert = this.alertCtrl.create({
      title: 'delete file',
      message: 'delete file from storage:',
      buttons: ['OK']
    });
    alert.present();
  }

}
