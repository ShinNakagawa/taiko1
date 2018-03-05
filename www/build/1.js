webpackJsonp([1],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongPageModule", function() { return EditSongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_song__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditSongPageModule = (function () {
    function EditSongPageModule() {
    }
    EditSongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__edit_song__["a" /* EditSongPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__edit_song__["a" /* EditSongPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__edit_song__["a" /* EditSongPage */]
            ]
        })
    ], EditSongPageModule);
    return EditSongPageModule;
}());

//# sourceMappingURL=edit-song.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSongPage; });
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




var EditSongPage = (function () {
    function EditSongPage(viewCtrl, navParams, fb, db) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.db = db;
        this.basePath = 'songs';
        this.song = navParams.get('song');
        this.songEditForm = this.fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'imageUrl': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'description': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'fullVideoID': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'playListID': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
        });
        this.name = this.songEditForm.controls['name'];
        this.imageUrl = this.songEditForm.controls['imageUrl'];
        this.description = this.songEditForm.controls['description'];
        this.fullVideoID = this.songEditForm.controls['fullVideoID'];
        this.playListID = this.songEditForm.controls['playListID'];
    }
    EditSongPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditSongPage.prototype.edit = function () {
        var path = this.basePath + "/" + this.song.id;
        var data = {
            name: this.name.value,
            imageUrl: this.imageUrl.value,
            description: this.description.value,
            fullVideoID: this.fullVideoID.value,
            playListID: this.playListID.value
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
        this.viewCtrl.dismiss({ title: "updated a song" });
    };
    EditSongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-song',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\home\edit-song\edit-song.html"*/'<ion-content>\n  <h3>Edit a song</h3>\n  <form [formGroup]="songEditForm" (ngSubmit)="submit()" novalidate>      \n    <ion-row>\n      <ion-item>\n        <ion-label for="name"></ion-label>\n        <ion-input type="name" value="{{song.name}}" placeholder="Name" formControlName="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="imageUrl"></ion-label>\n        <ion-input type="imageUrl" value="{{song.imageUrl}}" placeholder="ImageUrl" formControlName="imageUrl"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="description"></ion-label>\n        <ion-input type="description" value="{{song.description}}" placeholder="Description" formControlName="description"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="fullVideoID"></ion-label>\n        <ion-input type="fullVideoID" value="{{song.fullVideoID}}" placeholder="FullVideoID" formControlName="fullVideoID"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label for="playListID"></ion-label>\n        <ion-input type="playListID" value="{{song.playListID}}" placeholder="PlayListID" formControlName="playListID"></ion-input>\n      </ion-item>\n    </ion-row>\n  </form>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button block (click)="edit()">\n        Edit\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button block color="danger" (click)="dismiss()">\n        Cancel\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\home\edit-song\edit-song.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EditSongPage);
    return EditSongPage;
}());

//# sourceMappingURL=edit-song.js.map

/***/ })

});
//# sourceMappingURL=1.js.map