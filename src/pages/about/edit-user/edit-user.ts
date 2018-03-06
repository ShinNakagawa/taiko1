import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html'
})
export class EditUserPage {
  editUserForm: FormGroup;
  displayName: AbstractControl;
  imageUrl: AbstractControl;
  user: User;
  basePath = 'users';

  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams,
    public fb: FormBuilder,
    private db: AngularFireDatabase) {
      this.user = navParams.get('user');
      this.editUserForm = this.fb.group({  
        'displayName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });
      this.displayName = this.editUserForm.controls['displayName'];  
      this.imageUrl = this.editUserForm.controls['imageUrl'];  
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  edit(): void{
    const data = {
      displayName: this.displayName.value,
      imageUrl: this.imageUrl.value
    };
    this.db.object(`${this.basePath}/${this.user.uid}`).update(data)
      .catch(error => console.log(error));
    this.viewCtrl.dismiss({title: "updated a user"});    
  }
}
