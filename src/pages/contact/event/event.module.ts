import { EventPage } from './event';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EventPage,
  ],
  imports: [
    IonicPageModule.forChild(EventPage),
  ],
  exports: [
    EventPage
  ]
})

export class EventPageModule { }
