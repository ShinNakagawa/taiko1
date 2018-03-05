import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pay } from '../../../models/pay.model';

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html'
})
export class PayPage {
  months: Array<{id: string,
                 month: number,
                 date: string}>;
  yearPay = '2018';
  payPath = 'pays';
  userPath = 'users';
  user: any;
  payInfo: Array<Pay>;

  constructor(private db: AngularFireDatabase,
              public viewCtrl:ViewController,
              public navParams: NavParams,
              private alertCtrl: AlertController
            ) {
    this.user = navParams.get('user');
    let pays: Observable<Pay[]>;
    pays = this.db.list(`${this.userPath}/${this.user.uid}/${this.payPath}/`, ref => ref.orderByChild('year').equalTo(this.yearPay)).valueChanges();

    //pays.filter(item => item[0].month === 1).subscribe(res => console.log('res', res))

    //this.pays = this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges();
    this.payInfo = [];
    pays.subscribe(res => {
      res.forEach(data => {
        this.payInfo.push(data)
      })
    })
    console.log('constructor', this.payInfo);
    
    this.Loaddata();
  }

  // ionViewDidLoad() {
  Loaddata() {
    

    let data = this.payInfo.filter(function test(value) {
      console.log('value', value)      
      if (value.year === '2018') {
        console.log('value', value)
        return value;
      }
    });
    //data = this.payInfo.filter(item => item.year === '2018');
    console.log('data', data)

    let test = new Array<Pay>();
    test = this.payInfo;
    console.log('test', test)
    Object.keys(test).map(function(index){
      console.log('index', index)
      let payData = new Pay;
      payData = test[index];
      if (payData.month === 1){
        console.log('hdgdhd', payData)
      }
    })

    let data1 = null;
    data1 = this.payInfo.findIndex(item => item.year === '2018');
    console.log('data1', data1);

    for(let res of this.payInfo){
      console.log('test123', res);
    }

    this.payInfo.forEach(res => {
      console.log('test', res);
      if (res.month === 1) {
        console.log('naka', res);
      }
    })
    
    console.log('ionViewDidLoad', this.payInfo);

    this.months=[];
    for (let i = 1; i <= 12; i++) {
      let data = this.payInfo.filter(item => item.month === i);
      //let data = Object.assign([], payInfo).filter(item => item.month.equalTo(i.toString()))
      //let data = this.pays.query(orderBy('month').equalTo(i.toString()));
      //console.log(data);
      if (data.length > 0) {
        this.months.push({id: data[0].id, month: i, date: data[0].date});
      } else {
        this.months.push({id: '', month: i, date: ''});       
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  clickStar(item): void {
    console.log(item);
    if (item.date !== '') {
      //delete payment record
      const data = {
        date: ''
      };
      this.db.object(`${this.userPath}/${this.user.uid}/${this.payPath}/${item.id}/`).update(data)
        .catch(error => console.log(error));
      let alert = this.alertCtrl.create({
        title: 'pay',
        message: 'delete pay date:',
        buttons: ['OK']
      });
      alert.present();
    } else {
      if (item.id === '') {
        //add payment record
        const timestamp = new Date();
        const data = {
          year: this.yearPay,
          month: item.month,
          date: timestamp.toString()
        };
        let key = this.db.list(`${this.userPath}/${this.user.uid}/${this.payPath}/`).push(data).key;
        //update id as key
        const dataKey = {
          id: key
        };
        this.db.object(`${this.userPath}/${this.user.uid}/${this.payPath}/${key}/`).update(dataKey)
          .catch(error => console.log(error));
        let alert = this.alertCtrl.create({
          title: 'pay',
          message: 'add pay date:',
          buttons: ['OK']
        });
        alert.present();
      } else {
        //update payment record
        const timestamp = new Date();
        const data = {
          date: timestamp.toString()
        };
        this.db.object(`${this.userPath}/${this.user.uid}/${this.payPath}/${item.id}/`).update(data)
          .catch(error => console.log(error));
        let alert = this.alertCtrl.create({
          title: 'pay',
          message: 'update pay date:',
          buttons: ['OK']
        });
        alert.present();
      }
    }
  }

}
