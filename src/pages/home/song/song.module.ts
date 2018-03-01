import { SongPage } from './song';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SongPage,
  ],
  imports: [
    IonicPageModule.forChild(SongPage),
  ],
  exports: [
    SongPage
  ]
})

export class SongPageModule { }
