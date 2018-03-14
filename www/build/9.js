webpackJsonp([9],{

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewYearPageModule", function() { return NewYearPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newyear__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewYearPageModule = (function () {
    function NewYearPageModule() {
    }
    NewYearPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newyear__["a" /* NewYearPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newyear__["a" /* NewYearPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__newyear__["a" /* NewYearPage */]
            ]
        })
    ], NewYearPageModule);
    return NewYearPageModule;
}());

//# sourceMappingURL=newyear.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewYearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewYearPage = (function () {
    function NewYearPage(navParams, viewCtrl, db, alertCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.userPath = 'users';
        this.payPath = 'pays';
        this.yearPay = navParams.get('yearPay');
        this.users = this.db.list(this.userPath + "/").valueChanges();
    }
    NewYearPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewYearPage.prototype.addPayList = function () {
        var _this = this;
        var monthly = [];
        for (var i = 0; i < 12; i++) {
            monthly.push({ date: '' });
        }
        this.users.subscribe(function (res) {
            res.forEach(function (user) {
                var data = {
                    userid: user.uid,
                    monthly: monthly
                };
                var key = _this.db.list(_this.payPath + "/" + _this.yearPay + "/").push(data).key;
                var dataKey = {
                    id: key
                };
                _this.db.object(_this.payPath + "/" + _this.yearPay + "/" + key + "/").update(dataKey)
                    .catch(function (error) { return console.log(error); });
            });
        });
        var alert = this.alertCtrl.create();
        alert.setTitle('Add data');
        alert.setMessage('Add pat list data');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('finish adding data:');
                _this.viewCtrl.dismiss({ title: "new year was added" });
            }
        });
        alert.present();
    };
    NewYearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newyear',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\newyear\newyear.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add Pay List {{yearPay}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name=\'close\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <button ion-button (click)="addPayList()">START</button>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\newyear\newyear.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewYearPage);
    return NewYearPage;
}());

//# sourceMappingURL=newyear.js.map

/***/ })

});
//# sourceMappingURL=9.js.map