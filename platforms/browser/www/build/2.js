webpackJsonp([2],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSongPageModule", function() { return CreateSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_song__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateSongPageModule = (function () {
    function CreateSongPageModule() {
    }
    CreateSongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__create_song__["a" /* CreateSongPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__create_song__["a" /* CreateSongPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__create_song__["a" /* CreateSongPage */]
            ]
        })
    ], CreateSongPageModule);
    return CreateSongPageModule;
}());

//# sourceMappingURL=create-song.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateSongPage = (function () {
    function CreateSongPage(viewCtrl, fb, db) {
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.db = db;
        this.basePath = 'songs';
        this.songForm = this.fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'imageUrl': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'description': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'fullVideoID': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'playListID': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
        });
        this.name = this.songForm.controls['name'];
        this.imageUrl = this.songForm.controls['imageUrl'];
        this.description = this.songForm.controls['description'];
        this.fullVideoID = this.songForm.controls['fullVideoID'];
        this.playListID = this.songForm.controls['playListID'];
    }
    CreateSongPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CreateSongPage.prototype.create = function () {
        var timestamp = new Date();
        var path = "" + this.basePath;
        var data = {
            name: this.name.value,
            imageUrl: this.imageUrl.value,
            description: this.description.value,
            fullVideoID: this.fullVideoID.value,
            playListID: this.playListID.value,
            date: timestamp
        };
        var key = this.db.list(path).push(data).key;
        //update id as key
        var pathKey = this.basePath + "/" + key;
        var dataKey = {
            id: key
        };
        this.db.object(pathKey).update(dataKey)
            .catch(function (error) { return console.log(error); });
        this.viewCtrl.dismiss({ title: "created a song" });
    };
    CreateSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-song',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\home\create-song\create-song.html"*/'<ion-content>\n  <h3>Create a song</h3>\n  <form [formGroup]="songForm" (ngSubmit)="submit()" novalidate>      \n    <ion-row>\n      <ion-item>\n        <ion-label for="name"></ion-label>\n        <ion-input type="name" value="" placeholder="Name" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="imageUrl"></ion-label>\n        <ion-input type="imageUrl" value="" placeholder="ImageUrl" formControlName="imageUrl"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="description"></ion-label>\n        <ion-input type="description" value="" placeholder="Description" formControlName="description"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="fullVideoID"></ion-label>\n        <ion-input type="fullVideoID" value="" placeholder="FullVideoID" formControlName="fullVideoID"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="playListID"></ion-label>\n        <ion-input type="playListID" value="" placeholder="PlayListID" formControlName="playListID"></ion-input>\n      </ion-item>\n    </ion-row>\n  </form>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button block (click)="create()">\n        Create\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button block color="danger" (click)="dismiss()">\n        Cancel\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\home\create-song\create-song.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CreateSongPage);
    return CreateSongPage;
}());

//# sourceMappingURL=create-song.js.map

/***/ })

});
//# sourceMappingURL=2.js.map