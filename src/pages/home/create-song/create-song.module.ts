import { CreateSongPage } from './create-song';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CreateSongPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSongPage),
  ],
  exports: [
    CreateSongPage
  ]
})

export class CreateSongPageModule { }
