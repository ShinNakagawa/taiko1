import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewYearPage } from './newyear';

@NgModule({
  declarations: [
    NewYearPage,
  ],
  imports: [
    IonicPageModule.forChild(NewYearPage),
  ],
  exports: [
    NewYearPage
  ]
})
export class NewYearPageModule { }
