import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Song } from '../../../models/song.model';

@IonicPage()
@Component({
  selector: 'page-edit-song',
  templateUrl: 'edit-song.html'
})
export class EditSongPage {
  songEditForm: FormGroup;
  name: AbstractControl;
  imageUrl: AbstractControl;
  description: AbstractControl;
  fullVideoID: AbstractControl;
  playListID: AbstractControl;
  song: Song;
  basePath = 'songs';

  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams,
    public fb: FormBuilder,
    private db: AngularFireDatabase) {
      this.song = navParams.get('song');
      this.songEditForm = this.fb.group({  
        'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'description': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'fullVideoID': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'playListID': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      });
      this.name = this.songEditForm.controls['name'];  
      this.imageUrl = this.songEditForm.controls['imageUrl'];  
      this.description = this.songEditForm.controls['description'];  
      this.fullVideoID = this.songEditForm.controls['fullVideoID'];  
      this.playListID = this.songEditForm.controls['playListID'];  
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  edit(): void{
    const path = `${this.basePath}/${this.song.id}`;
    const data = {
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      description: this.description.value,
      fullVideoID: this.fullVideoID.value,
      playListID: this.playListID.value
    };
    this.db.object(path).update(data)
      .catch(error => console.log(error));
    this.viewCtrl.dismiss({title: "updated a song"});    
  }
}
