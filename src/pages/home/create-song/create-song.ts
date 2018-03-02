import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-create-song',
  templateUrl: 'create-song.html'
})
export class CreateSongPage {
  songForm: FormGroup;
  name: AbstractControl;
  imageUrl: AbstractControl;
  description: AbstractControl;
  fullVideoID: AbstractControl;
  playListID: AbstractControl;
  userid: string;
  basePath = 'songs';

  constructor(
    public viewCtrl: ViewController, 
    public fb: FormBuilder,
    private db: AngularFireDatabase) {
      this.userid = '';
      this.songForm = this.fb.group({  
        'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'description': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'fullVideoID': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'playListID': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      });
      this.name = this.songForm.controls['name'];  
      this.imageUrl = this.songForm.controls['imageUrl'];  
      this.description = this.songForm.controls['description'];  
      this.fullVideoID = this.songForm.controls['fullVideoID'];  
      this.playListID = this.songForm.controls['playListID'];  
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(): void{
    const timestamp = new Date();
    const path = `${this.basePath}`;
    const data = {
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      description: this.description.value,
      fullVideoID: this.fullVideoID.value,
      playListID: this.playListID.value,
      date: timestamp,
      userid: this.userid
    };
    let key = this.db.list(path).push(data).key;
    //update id as key
    const pathKey = `${this.basePath}/${key}`;
    const dataKey = {
      id: key
    };
    this.db.object(pathKey).update(dataKey)
      .catch(error => console.log(error));
    this.viewCtrl.dismiss({title: "created a song"});    
  }
}
