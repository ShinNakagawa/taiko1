import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams } from 'ionic-angular';
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
  date: AbstractControl;
  place: AbstractControl;
  description: AbstractControl;
  basePath = 'events';
  yearPay;

  constructor(
    public viewCtrl: ViewController, 
    public fb: FormBuilder,
    public navParams: NavParams,
    private db: AngularFireDatabase) {
      this.yearPay = navParams.get('yearPay');
      this.eventCreateForm = this.fb.group({  
        'name': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'date': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'place': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        'description': ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });
      this.name = this.eventCreateForm.controls['name'];  
      this.imageUrl = this.eventCreateForm.controls['imageUrl'];  
      this.date = this.eventCreateForm.controls['date'];  
      this.place = this.eventCreateForm.controls['place'];  
      this.description = this.eventCreateForm.controls['description'];  
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  create(): void{
    const data = {
      name: this.name.value,
      imageUrl: this.imageUrl.value,
      date: this.date.value,
      place: this.place.value,
      description: this.description.value
    };
    let key = this.db.list(`${this.basePath}/${this.yearPay}/`).push(data).key;
    //update id as key
    const dataKey = {
      id: key
    };
    this.db.object(`${this.basePath}/${this.yearPay}/${key}`).update(dataKey)
      .catch(error => console.log(error));
    this.viewCtrl.dismiss({title: "created an event"});    
  }
}
