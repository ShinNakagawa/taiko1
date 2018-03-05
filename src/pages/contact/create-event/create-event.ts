import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventPage {
  eventCreateForm: FormGroup;
  name: AbstractControl;
  imageUrl: AbstractControl;
  description: AbstractControl;
  basePath = 'events';

  constructor(
    public viewCtrl: ViewController, 
    public fb: FormBuilder,
    private db: AngularFireDatabase) {
      this.eventCreateForm = this.fb.group({  
        'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'description': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });
      this.name = this.eventCreateForm.controls['name'];  
      this.imageUrl = this.eventCreateForm.controls['imageUrl'];  
      this.description = this.eventCreateForm.controls['description'];  
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(): void{
    const timestamp = new Date();
    const path = `${this.basePath}`;
    const data = {
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      description: this.description.value,
      date: timestamp
    };
    let key = this.db.list(path).push(data).key;
    //update id as key
    const pathKey = `${this.basePath}/${key}`;
    const dataKey = {
      id: key
    };
    this.db.object(pathKey).update(dataKey)
      .catch(error => console.log(error));
    this.viewCtrl.dismiss({title: "created an event"});    
  }
}
