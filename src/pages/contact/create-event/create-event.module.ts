import { CreateEventPage } from './create-event';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CreateEventPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEventPage),
  ],
  exports: [
    CreateEventPage
  ]
})

export class CreateEventPageModule { }
