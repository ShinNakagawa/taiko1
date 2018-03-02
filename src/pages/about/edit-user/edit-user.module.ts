import { EditUserPage } from './edit-user';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EditUserPage,
  ],
  imports: [
    IonicPageModule.forChild(EditUserPage),
  ],
  exports: [
    EditUserPage
  ]
})

export class EditUserPageModule { }
