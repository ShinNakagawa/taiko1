import { EditEventPage } from './edit-event';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EditEventPage,
  ],
  imports: [
    IonicPageModule.forChild(EditEventPage),
  ],
  exports: [
    EditEventPage
  ]
})

export class EditEventPageModule { }
