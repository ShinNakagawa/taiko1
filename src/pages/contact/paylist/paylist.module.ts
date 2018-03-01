import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayListPage } from './paylist';

@NgModule({
  declarations: [
    PayListPage,
  ],
  imports: [
    IonicPageModule.forChild(PayListPage),
  ],
  exports: [
    PayListPage
  ]
})
export class PayListPageModule { }
