webpackJsonp([10],{

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_user__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditUserPageModule = (function () {
    function EditUserPageModule() {
    }
    EditUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__edit_user__["a" /* EditUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__edit_user__["a" /* EditUserPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__edit_user__["a" /* EditUserPage */]
            ]
        })
    ], EditUserPageModule);
    return EditUserPageModule;
}());

//# sourceMappingURL=edit-user.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserPage = (function () {
    function EditUserPage(viewCtrl, navParams, fb, db) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.db = db;
        this.basePath = 'users';
        this.user = navParams.get('user');
        this.editUserForm = this.fb.group({
            'displayName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'imageUrl': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        this.displayName = this.editUserForm.controls['displayName'];
        this.imageUrl = this.editUserForm.controls['imageUrl'];
    }
    EditUserPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditUserPage.prototype.edit = function () {
        var data = {
            displayName: this.displayName.value,
            imageUrl: this.imageUrl.value
        };
        this.db.object(this.basePath + "/" + this.user.uid).update(data)
            .catch(function (error) { return console.log(error); });
        this.viewCtrl.dismiss({ title: "updated a user" });
    };
    EditUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-user',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\edit-user\edit-user.html"*/'<ion-content>\n  <h3>Edit a User</h3>\n  <form [formGroup]="editUserForm" (ngSubmit)="submit()" novalidate>      \n    <ion-row>\n      <ion-item>\n        <ion-label for="displayName"></ion-label>\n        <ion-input type="displayName" value="{{user.displayName}}" placeholder="Display Name" formControlName="displayName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="imageUrl"></ion-label>\n        <ion-select formControlName="imageUrl">\n          <ion-option value="assets/img/speakers/bear.jpg">Bear</ion-option>\n          <ion-option value="assets/img/speakers/cheetah.jpg">Cheetah</ion-option>\n          <ion-option value="assets/img/speakers/duck.jpg">Duck</ion-option>\n          <ion-option value="assets/img/speakers/eagle.jpg">Eagle</ion-option>\n          <ion-option value="assets/img/speakers/elephant.jpg">Elephant</ion-option>\n          <ion-option value="assets/img/speakers/giraffe.jpg">Giraffe</ion-option>\n          <ion-option value="assets/img/speakers/iguana.jpg">Iguana</ion-option>\n          <ion-option value="assets/img/speakers/lion.jpg">Lion</ion-option>\n          <ion-option value="assets/img/speakers/mouse.jpg">Mouse</ion-option>\n          <ion-option value="assets/img/speakers/puppy.jpg">Puppy</ion-option>\n          <ion-option value="assets/img/speakers/rabbit.jpg">Rabbit</ion-option>\n          <ion-option value="assets/img/speakers/turtle.jpg">Turtle</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n  </form>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button block (click)="edit()">\n        Edit\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button block color="danger" (click)="dismiss()">\n        Cancel\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\edit-user\edit-user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EditUserPage);
    return EditUserPage;
}());

//# sourceMappingURL=edit-user.js.map

/***/ })

});
//# sourceMappingURL=10.js.map