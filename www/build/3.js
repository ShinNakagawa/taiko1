webpackJsonp([3],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayListPageModule", function() { return PayListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paylist__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayListPageModule = (function () {
    function PayListPageModule() {
    }
    PayListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paylist__["a" /* PayListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paylist__["a" /* PayListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__paylist__["a" /* PayListPage */]
            ]
        })
    ], PayListPageModule);
    return PayListPageModule;
}());

//# sourceMappingURL=paylist.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AuthProvider } from '../../../providers/auth/auth';
var PayListPage = (function () {
    function PayListPage(db, viewCtrl, alertCtrl, toastCtrl) {
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.yearPay = '2018';
        this.basePath = 'pays';
        // if (this.auth.currentUser) {       
        //   console.log('this.auth.currentUser=', this.auth.currentUser);
        //   console.log('this.auth.currentUserId=', this.auth.currentUserId);
        //   this.userid = this.auth.currentUserId;
        //   this.showType = 'you';
        // } else {
        console.log('Unable to read userID, so add timer to wait for user ID');
        var toast = this.toastCtrl.create({
            message: 'Please wait for a second.',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.userid = '';
        this.showType = 'all';
        // }
        this.pays = this.db.list(this.basePath + "/" + this.yearPay + "/").valueChanges();
        this.months = [];
        this.months.push({ month: 'January', userid: this.userid, date: 'Jan/22/2018' });
        this.months.push({ month: 'February', userid: this.userid, date: 'Feb/1/2018' });
        this.months.push({ month: 'March', userid: this.userid, date: '' });
        this.months.push({ month: 'April', userid: this.userid, date: '' });
        this.months.push({ month: 'May', userid: this.userid, date: '' });
        this.months.push({ month: 'June', userid: this.userid, date: '' });
        this.months.push({ month: 'July', userid: this.userid, date: '' });
        this.months.push({ month: 'August', userid: this.userid, date: '' });
        this.months.push({ month: 'September', userid: this.userid, date: '' });
        this.months.push({ month: 'October', userid: this.userid, date: '' });
        this.months.push({ month: 'November', userid: this.userid, date: '' });
        this.months.push({ month: 'December', userid: this.userid, date: '' });
    }
    PayListPage.prototype.ionViewDidLoad = function () {
    };
    PayListPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PayListPage.prototype.clickStar = function (item) {
        if (item.datePay) {
            // delete payment record
            var path = this.basePath + "/" + this.yearPay + "/" + item.id;
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
            var path = this.basePath + "/" + this.yearPay;
            var timestamp = new Date();
            var data = {
                userid: this.userid,
                month: item.month,
                date: timestamp
            };
            var key = this.db.list(path).push(data).key;
            //update id as key
            var pathKey = this.basePath + "/" + this.yearPay + "/" + key;
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
    PayListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paylist',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\contact\paylist\paylist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Monthly Pay</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button block color="danger" (click)="dismiss()">\n        Cancel\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n  </ion-item>\n\n  <!-- <ion-scroll scrollY="true"> -->\n  <ion-segment [(ngModel)]="showType" color="primary">\n    <ion-segment-button value="you">\n      YOU\n    </ion-segment-button>\n    <ion-segment-button value="all">\n      ALL\n    </ion-segment-button>\n  </ion-segment>\n   \n  <div [ngSwitch]="showType">\n    <ion-grid *ngSwitchCase="\'you\'">\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/bear.jpg\'" />\n          </ion-avatar>  \n          <ion-row><button ion-button full>Jan</button></ion-row>\n          <ion-row><button ion-button full>Feb</button></ion-row>\n          <ion-row><button ion-button full>Mar</button></ion-row>\n          <ion-row><button ion-button full>Apr</button></ion-row>\n          <ion-row><button ion-button full>May</button></ion-row>\n          <ion-row><button ion-button full>Jun</button></ion-row>\n          <ion-row><button ion-button full>Jul</button></ion-row>\n          <ion-row><button ion-button full>Aug</button></ion-row>\n          <ion-row><button ion-button full>Sep</button></ion-row>\n          <ion-row><button ion-button full>Oct</button></ion-row>\n          <ion-row><button ion-button full>Nov</button></ion-row>\n          <ion-row><button ion-button full>Dec</button></ion-row>\n        </ion-col>      \n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/lion.jpg\'" />\n          </ion-avatar>\n          <ion-row *ngFor="let item of months">\n            <button ion-button [color]="item.date ? \'danger\' : \'light\'" full (click)="clickStar(item)">\n              <ion-icon name="star"> {{item.date}}</ion-icon>\n            </button>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n   \n      <!-- More Pinterest floating gallery style -->\n    <ion-grid *ngSwitchCase="\'all\'">\n      <ion-row>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/bear.jpg\'" />\n          </ion-avatar>  \n          <button ion-button full>Jan</button>\n          <button ion-button full>Feb</button>\n          <button ion-button full>Mar</button>\n          <button ion-button full>Apr</button>\n          <button ion-button full>May</button>\n          <button ion-button full>Jun</button>\n          <button ion-button full>Jul</button>\n          <button ion-button full>Aug</button>\n          <button ion-button full>Sep</button>\n          <button ion-button full>Oct</button>\n          <button ion-button full>Nov</button>\n          <button ion-button full>Dec</button>\n        </ion-col>      \n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/lion.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="light" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/kitten.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="danger" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n  \n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/duck.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="secondary" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n  \n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/puppy.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n\n\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/puppy.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/puppy.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/puppy.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <ion-avatar>\n            <img [src]="\'assets/img/speakers/puppy.jpg\'" />\n          </ion-avatar>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n          <button ion-button color="dark" full (click)="clickStar()">\n            <ion-icon name="star"></ion-icon>\n          </button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n\n  <!-- <ion-list>\n      <ion-item-sliding *ngFor="let item of months">\n        <button ion-item (click)="addItem(item)">         \n          <ion-thumbnail item-start>\n            <img [src]="item.imageUrl">\n          </ion-thumbnail>\n          <h2>{{item.name}}</h2>\n          <ion-note item-end *ngIf="item.datePay">{{item.datePay}}</ion-note>\n        </button>\n        <ion-item-options *ngIf="item.datePay">\n          <button ion-button color="danger" (click)="deleteItem(item)">\n            {{ \'DELETE_BUTTON\' | translate }}\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\contact\paylist\paylist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PayListPage);
    return PayListPage;
}());

//# sourceMappingURL=paylist.js.map

/***/ })

});
//# sourceMappingURL=3.js.map