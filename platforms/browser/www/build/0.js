webpackJsonp([0],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongPageModule", function() { return SongPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__song__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SongPageModule = (function () {
    function SongPageModule() {
    }
    SongPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__song__["a" /* SongPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__song__["a" /* SongPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__song__["a" /* SongPage */]
            ]
        })
    ], SongPageModule);
    return SongPageModule;
}());

//# sourceMappingURL=song.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_yt_yt__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongPage = (function () {
    function SongPage(viewCtrl, navParams, ytProvider) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.ytProvider = ytProvider;
        this.song = navParams.get('song');
        this.videoFull = this.ytProvider.getVideoSnippet(this.song.fullVideoID);
        this.videos = this.ytProvider.getListVideos(this.song.playListID);
    }
    SongPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SongPage.prototype.openVideo = function (video) {
        console.log(video);
        window.open('https://www.youtube.com/watch?v=' + video.id);
    };
    SongPage.prototype.openListVideo = function (video) {
        console.log(video);
        window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
    };
    SongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-song',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\home\song\song.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{song.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name=\'close\'></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <p>{{song.description}}</p>\n\n  <h4 text-center>Full Video:</h4>\n  <ion-list>\n    <button ion-item *ngFor="let video of videoFull | async" (click)="openVideo(video)" detail-none>\n      <ion-thumbnail item-start>\n      <img *ngIf="video.snippet.thumbnails.default" [src]="video.snippet.thumbnails.default.url">\n    </ion-thumbnail>\n    <h2>{{ video.snippet.title }}</h2>\n    <p>{{ video.snippet.description }}</p>\n    </button>\n  </ion-list>\n\n  <h4 text-center>Supporting Videos:</h4>\n  <ion-list>\n    <button ion-item *ngFor="let video of videos | async" (click)="openListVideo(video)" detail-none>\n      <ion-thumbnail item-start>\n      <img *ngIf="video.snippet.thumbnails.default" [src]="video.snippet.thumbnails.default.url">\n    </ion-thumbnail>\n    <h2>{{ video.snippet.title }}</h2>\n    <p>{{ video.snippet.description }}</p>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\home\song\song.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_yt_yt__["a" /* YtProvider */]])
    ], SongPage);
    return SongPage;
}());

//# sourceMappingURL=song.js.map

/***/ })

});
//# sourceMappingURL=0.js.map