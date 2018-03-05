webpackJsonp([0],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayPageModule = (function () {
    function PayPageModule() {
    }
    PayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */]
            ]
        })
    ], PayPageModule);
    return PayPageModule;
}());

//# sourceMappingURL=pay.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_pay_model__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayPage = (function () {
    function PayPage(db, viewCtrl, navParams, alertCtrl) {
        var _this = this;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.yearPay = '2018';
        this.payPath = 'pays';
        this.userPath = 'users';
        this.user = navParams.get('user');
        var pays;
        pays = this.db.list(this.userPath + "/" + this.user.uid + "/" + this.payPath + "/", function (ref) { return ref.orderByChild('year').equalTo(_this.yearPay); }).valueChanges();
        //pays.filter(item => item[0].month === 1).subscribe(res => console.log('res', res))
        //this.pays = this.db.list(`${this.payPath}/${this.yearPay}/`).valueChanges();
        this.payInfo = [];
        pays.subscribe(function (res) {
            res.forEach(function (data) {
                _this.payInfo.push(data);
            });
        });
        console.log('constructor', this.payInfo);
        this.Loaddata();
    }
    // ionViewDidLoad() {
    PayPage.prototype.Loaddata = function () {
        var data = this.payInfo.filter(function test(value) {
            console.log('value', value);
            if (value.year === '2018') {
                console.log('value', value);
                return value;
            }
        });
        //data = this.payInfo.filter(item => item.year === '2018');
        console.log('data', data);
        var test = new Array();
        test = this.payInfo;
        console.log('test', test);
        Object.keys(test).map(function (index) {
            console.log('index', index);
            var payData = new __WEBPACK_IMPORTED_MODULE_3__models_pay_model__["a" /* Pay */];
            payData = test[index];
            if (payData.month === 1) {
                console.log('hdgdhd', payData);
            }
        });
        var data1 = null;
        data1 = this.payInfo.findIndex(function (item) { return item.year === '2018'; });
        console.log('data1', data1);
        for (var _i = 0, _a = this.payInfo; _i < _a.length; _i++) {
            var res = _a[_i];
            console.log('test123', res);
        }
        this.payInfo.forEach(function (res) {
            console.log('test', res);
            if (res.month === 1) {
                console.log('naka', res);
            }
        });
        console.log('ionViewDidLoad', this.payInfo);
        this.months = [];
        var _loop_1 = function (i) {
            var data_1 = this_1.payInfo.filter(function (item) { return item.month === i; });
            //let data = Object.assign([], payInfo).filter(item => item.month.equalTo(i.toString()))
            //let data = this.pays.query(orderBy('month').equalTo(i.toString()));
            //console.log(data);
            if (data_1.length > 0) {
                this_1.months.push({ id: data_1[0].id, month: i, date: data_1[0].date });
            }
            else {
                this_1.months.push({ id: '', month: i, date: '' });
            }
        };
        var this_1 = this;
        for (var i = 1; i <= 12; i++) {
            _loop_1(i);
        }
    };
    PayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PayPage.prototype.clickStar = function (item) {
        console.log(item);
        if (item.date !== '') {
            //delete payment record
            var data = {
                date: ''
            };
            this.db.object(this.userPath + "/" + this.user.uid + "/" + this.payPath + "/" + item.id + "/").update(data)
                .catch(function (error) { return console.log(error); });
            var alert_1 = this.alertCtrl.create({
                title: 'pay',
                message: 'delete pay date:',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            if (item.id === '') {
                //add payment record
                var timestamp = new Date();
                var data = {
                    year: this.yearPay,
                    month: item.month,
                    date: timestamp.toString()
                };
                var key = this.db.list(this.userPath + "/" + this.user.uid + "/" + this.payPath + "/").push(data).key;
                //update id as key
                var dataKey = {
                    id: key
                };
                this.db.object(this.userPath + "/" + this.user.uid + "/" + this.payPath + "/" + key + "/").update(dataKey)
                    .catch(function (error) { return console.log(error); });
                var alert_2 = this.alertCtrl.create({
                    title: 'pay',
                    message: 'add pay date:',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                //update payment record
                var timestamp = new Date();
                var data = {
                    date: timestamp.toString()
                };
                this.db.object(this.userPath + "/" + this.user.uid + "/" + this.payPath + "/" + item.id + "/").update(data)
                    .catch(function (error) { return console.log(error); });
                var alert_3 = this.alertCtrl.create({
                    title: 'pay',
                    message: 'update pay date:',
                    buttons: ['OK']
                });
                alert_3.present();
            }
        }
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\pay\pay.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Monthly Pay</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name=\'close\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3>user is {{user.displayName}}</h3>     \n\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n  </ion-item>\n  \n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/bear.jpg\'" />\n          </ion-avatar>  \n          <ion-row><button ion-button full>Jan</button></ion-row>\n          <ion-row><button ion-button full>Feb</button></ion-row>\n          <ion-row><button ion-button full>Mar</button></ion-row>\n          <ion-row><button ion-button full>Apr</button></ion-row>\n          <ion-row><button ion-button full>May</button></ion-row>\n          <ion-row><button ion-button full>Jun</button></ion-row>\n          <ion-row><button ion-button full>Jul</button></ion-row>\n          <ion-row><button ion-button full>Aug</button></ion-row>\n          <ion-row><button ion-button full>Sep</button></ion-row>\n          <ion-row><button ion-button full>Oct</button></ion-row>\n          <ion-row><button ion-button full>Nov</button></ion-row>\n          <ion-row><button ion-button full>Dec</button></ion-row>\n        </ion-col>      \n        <ion-col>\n          <ion-avatar>\n            <img [src]="user.imageUrl" />\n          </ion-avatar>\n          <ion-row *ngFor="let item of months">\n            <button ion-button [color]="item.date ? \'danger\' : \'light\'" full (click)="clickStar(item)">\n              <ion-icon name="star"> {{item.date}}</ion-icon>\n            </button>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\pay\pay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pay; });
var Pay = (function () {
    function Pay() {
    }
    return Pay;
}());

//# sourceMappingURL=pay.model.js.map

/***/ })

});
//# sourceMappingURL=0.js.map