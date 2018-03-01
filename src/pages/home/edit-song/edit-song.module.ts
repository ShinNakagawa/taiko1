import { EditSongPage } from './edit-song';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EditSongPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSongPage),
  ],
  exports: [
    EditSongPage
  ]
})

export class EditSongPageModule { }
