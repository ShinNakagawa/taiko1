webpackJsonp([6],{

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventPageModule", function() { return EditEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_event__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditEventPageModule = (function () {
    function EditEventPageModule() {
    }
    EditEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__edit_event__["a" /* EditEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__edit_event__["a" /* EditEventPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__edit_event__["a" /* EditEventPage */]
            ]
        })
    ], EditEventPageModule);
    return EditEventPageModule;
}());

//# sourceMappingURL=edit-event.module.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEventPage; });
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




var EditEventPage = (function () {
    function EditEventPage(viewCtrl, navParams, fb, db) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.db = db;
        this.basePath = 'events';
        this.yearPay = navParams.get('yearPay');
        this.event = navParams.get('item');
        this.eventEditForm = this.fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'imageUrl': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'date': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'description': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        this.name = this.eventEditForm.controls['name'];
        this.imageUrl = this.eventEditForm.controls['imageUrl'];
        this.date = this.eventEditForm.controls['date'];
        this.description = this.eventEditForm.controls['description'];
    }
    EditEventPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditEventPage.prototype.edit = function () {
        var data = {
            name: this.name.value,
            imageUrl: this.imageUrl.value,
            date: this.date.value,
            description: this.description.value
        };
        this.db.object(this.basePath + "/" + this.yearPay + "/" + this.event.id).update(data)
            .catch(function (error) { return console.log(error); });
        this.viewCtrl.dismiss({ title: "updated an event" });
    };
    EditEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-event',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\contact\edit-event\edit-event.html"*/'<ion-content>\n  <h3>Edit an event</h3>\n  <form [formGroup]="eventEditForm" (ngSubmit)="submit()" novalidate>      \n    <ion-row>\n      <ion-item>\n        <ion-label for="name"></ion-label>\n        <ion-input type="name" value="{{event.name}}" placeholder="Name" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="imageUrl"></ion-label>\n        <ion-input type="imageUrl" value="{{event.imageUrl}}" placeholder="ImageUrl" formControlName="imageUrl"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="date"></ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" max="2050" formControlName="date"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label for="description"></ion-label>\n        <ion-input type="description" value="{{event.description}}" placeholder="Description" formControlName="description"></ion-input>\n      </ion-item>\n    </ion-row>\n  </form>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button block (click)="edit()">\n        Edit\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button block color="danger" (click)="dismiss()">\n        Cancel\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\contact\edit-event\edit-event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EditEventPage);
    return EditEventPage;
}());

//# sourceMappingURL=edit-event.js.map

/***/ })

});
//# sourceMappingURL=6.js.map