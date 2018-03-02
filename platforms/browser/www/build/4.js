webpackJsonp([4],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay__ = __webpack_require__(451);
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

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
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
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.yearPay = '2018';
        this.payPath = 'pays';
        this.user = navParams.get('user');
        this.pays = this.db.list(this.payPath + "/" + this.yearPay + "/").valueChanges();
        this.months = [];
        this.months.push({ month: 'January', date: 'Jan/22/2018' });
        this.months.push({ month: 'February', date: 'Feb/1/2018' });
        this.months.push({ month: 'March', date: '' });
        this.months.push({ month: 'April', date: '' });
        this.months.push({ month: 'May', date: '' });
        this.months.push({ month: 'June', date: '' });
        this.months.push({ month: 'July', date: '' });
        this.months.push({ month: 'August', date: '' });
        this.months.push({ month: 'September', date: '' });
        this.months.push({ month: 'October', date: '' });
        this.months.push({ month: 'November', date: '' });
        this.months.push({ month: 'December', date: '' });
    }
    PayPage.prototype.ionViewDidLoad = function () {
    };
    PayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PayPage.prototype.clickStar = function (item) {
        if (item.datePay) {
            // delete payment record
            var path = this.payPath + "/" + this.yearPay + "/" + this.user.uid;
            this.db.object(path).remove()
                .catch(function (error) { return console.log(error); });
            var alert_1 = this.alertCtrl.create({
                title: 'delete',
                message: 'delete pay date:',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            //add payment record
            var path = this.payPath + "/" + this.yearPay;
            var timestamp = new Date();
            var data = {
                userid: this.user.uid,
                month: item.month,
                date: timestamp
            };
            var key = this.db.list(path).push(data).key;
            //update id as key
            var pathKey = this.payPath + "/" + this.yearPay + "/" + key;
            var dataKey = {
                id: key
            };
            this.db.object(pathKey).update(dataKey)
                .catch(function (error) { return console.log(error); });
            var alert_2 = this.alertCtrl.create({
                title: 'pay',
                message: 'add pay date:',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\pay\pay.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Monthly Pay</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name=\'close\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3>user is {{user.displayName}}</h3>     \n\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n  </ion-item>\n  \n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/bear.jpg\'" />\n          </ion-avatar>  \n          <ion-row><button ion-button full>Jan</button></ion-row>\n          <ion-row><button ion-button full>Feb</button></ion-row>\n          <ion-row><button ion-button full>Mar</button></ion-row>\n          <ion-row><button ion-button full>Apr</button></ion-row>\n          <ion-row><button ion-button full>May</button></ion-row>\n          <ion-row><button ion-button full>Jun</button></ion-row>\n          <ion-row><button ion-button full>Jul</button></ion-row>\n          <ion-row><button ion-button full>Aug</button></ion-row>\n          <ion-row><button ion-button full>Sep</button></ion-row>\n          <ion-row><button ion-button full>Oct</button></ion-row>\n          <ion-row><button ion-button full>Nov</button></ion-row>\n          <ion-row><button ion-button full>Dec</button></ion-row>\n        </ion-col>      \n        <ion-col>\n          <ion-avatar>\n            <img [src]="user.imageUrl" />\n          </ion-avatar>\n          <ion-row *ngFor="let item of months">\n            <button ion-button [color]="item.date ? \'danger\' : \'light\'" full (click)="clickStar(item)">\n              <ion-icon name="star"> {{item.date}}</ion-icon>\n            </button>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\pay\pay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ })

});
//# sourceMappingURL=4.js.map