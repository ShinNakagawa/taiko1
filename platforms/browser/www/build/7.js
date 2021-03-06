webpackJsonp([7],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay__ = __webpack_require__(633);
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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
    function PayPage(db, viewCtrl, 
        //private alertCtrl: AlertController,
        navParams) {
        var _this = this;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.payPath = 'pays';
        this.user = navParams.get('user');
        this.yearPay = navParams.get('yearPay');
        var pays = this.db.list(this.payPath + "/" + this.yearPay + "/", function (ref) { return ref.orderByChild('userid').equalTo(_this.user.uid); }).valueChanges();
        pays.subscribe(function (res) {
            _this.months = [];
            res.forEach(function (rs1) {
                var pay = rs1;
                _this.payID = pay.id;
                var i = 0;
                pay.monthly.forEach(function (rs2) {
                    _this.months.push({ index: i, date: rs2.date });
                    i++;
                });
            });
        });
    }
    PayPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PayPage.prototype.clickStar = function (item) {
        //console.log('item=', item)
        var date = __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date()).format('MMM Do YYYY');
        if (item.date !== '') {
            //delete payment record
            var data = {
                date: ''
            };
            this.db.object(this.payPath + "/" + this.yearPay + "/" + this.payID + "/monthly/" + item.index).update(data)
                .catch(function (error) { return console.log(error); });
            // let alert = this.alertCtrl.create({
            //   title: 'pay',
            //   message: 'delete pay date:',
            //   buttons: ['OK']
            // });
            // alert.present();
        }
        else {
            //update payment record
            var data = {
                date: date
            };
            this.db.object(this.payPath + "/" + this.yearPay + "/" + this.payID + "/monthly/" + item.index).update(data)
                .catch(function (error) { return console.log(error); });
            // let alert = this.alertCtrl.create({
            //   title: 'pay',
            //   message: 'update pay date:',
            //   buttons: ['OK']
            // });
            // alert.present();
        }
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\pay\pay.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{user.displayName}} : Pay List {{yearPay}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name=\'close\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/LSTaiko.jpg\'" />\n          </ion-avatar>  \n          <ion-row><button ion-button full>Jan</button></ion-row>\n          <ion-row><button ion-button full>Feb</button></ion-row>\n          <ion-row><button ion-button full>Mar</button></ion-row>\n          <ion-row><button ion-button full>Apr</button></ion-row>\n          <ion-row><button ion-button full>May</button></ion-row>\n          <ion-row><button ion-button full>Jun</button></ion-row>\n          <ion-row><button ion-button full>Jul</button></ion-row>\n          <ion-row><button ion-button full>Aug</button></ion-row>\n          <ion-row><button ion-button full>Sep</button></ion-row>\n          <ion-row><button ion-button full>Oct</button></ion-row>\n          <ion-row><button ion-button full>Nov</button></ion-row>\n          <ion-row><button ion-button full>Dec</button></ion-row>\n        </ion-col>      \n        <ion-col>\n          <ion-avatar>\n            <img [src]="user.imageUrl" />\n          </ion-avatar>\n          <ion-row *ngFor="let item of months">\n            <button ion-button [color]="item.date ? \'danger\' : \'light\'" full (click)="clickStar(item)">\n              <ion-icon name="star"> {{item.date}}</ion-icon>\n            </button>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\pay\pay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ })

});
//# sourceMappingURL=7.js.map