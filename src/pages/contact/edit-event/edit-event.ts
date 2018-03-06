import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Event } from '../../../models/event.model';

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html'
})
export class EditEventPage {
  eventEditForm: FormGroup;
  name: AbstractControl;
  imageUrl: AbstractControl;
  date: AbstractControl;
  description: AbstractControl;
  event: Event;
  basePath = 'events';
  yearPay;

  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams,
    public fb: FormBuilder,
    private db: AngularFireDatabase) {
      this.yearPay = navParams.get('yearPay');
      this.event = navParams.get('item');
      this.eventEditForm = this.fb.group({  
        'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'date': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'description': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });
      this.name = this.eventEditForm.controls['name'];  
      this.imageUrl = this.eventEditForm.controls['imageUrl'];  
      this.date = this.eventEditForm.controls['date'];  
      this.description = this.eventEditForm.controls['description'];  
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  edit(): void{
    const data = {
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      date: this.date.value,
      description: this.description.value
    };
    this.db.object(`${this.basePath}/${this.yearPay}/${this.event.id}`).update(data)
      .catch(error => console.log(error));
    this.viewCtrl.dismiss({title: "updated an event"});    
  }
}
