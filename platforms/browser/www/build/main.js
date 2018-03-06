webpackJsonp([9],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/edit-user/edit-user.module": [
		570,
		8
	],
	"../pages/about/pay/pay.module": [
		571,
		7
	],
	"../pages/contact/create-event/create-event.module": [
		572,
		6
	],
	"../pages/contact/edit-event/edit-event.module": [
		573,
		5
	],
	"../pages/contact/event/event.module": [
		574,
		4
	],
	"../pages/contact/paylist/paylist.module": [
		575,
		3
	],
	"../pages/home/create-song/create-song.module": [
		576,
		2
	],
	"../pages/home/edit-song/edit-song.module": [
		577,
		1
	],
	"../pages/home/song/song.module": [
		578,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Song" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(db, modalCtrl) {
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.userPath = 'users';
        this.users = this.db.list(this.userPath + "/").valueChanges();
    }
    AboutPage.prototype.userTapped = function (event, user) {
        var payModal = this.modalCtrl.create('PayPage', { user: user }, { cssClass: 'inset-modal' });
        payModal.onDidDismiss(function (data) {
            if (data) {
                //this.items.add(data);
            }
        });
        payModal.present();
    };
    AboutPage.prototype.userEdit = function (user) {
        var editModel = this.modalCtrl.create('EditUserPage', { user: user }, { cssClass: 'inset-modal' });
        editModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        editModel.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>User List</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item-sliding *ngFor="let user of users | async">\n        <button ion-item (click)="userTapped($event, user)">\n          <ion-avatar item-start>\n            <img *ngIf="user.imageUrl" [src]="user.imageUrl" />\n          </ion-avatar>\n          <h2>{{user.displayName}}</h2>\n        </button>\n        <ion-item-options>\n          <button ion-button clear small color="secondary" icon-left (click)="userEdit(user)">\n            <ion-icon name=\'create\'></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
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




var ContactPage = (function () {
    function ContactPage(modalCtrl, db) {
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.basePath = 'events';
        this.yearPay = __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date()).format('YYYY');
        this.loadingData();
    }
    ContactPage.prototype.loadingData = function () {
        this.items = this.db.list(this.basePath + "/" + this.yearPay + "/").valueChanges();
    };
    ContactPage.prototype.createItem = function () {
        var createModel = this.modalCtrl.create('CreateEventPage', { yearPay: this.yearPay }, { cssClass: 'inset-modal' });
        createModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("created an item");
            }
        });
        createModel.present();
    };
    ContactPage.prototype.itemTapped = function (event, item) {
        var itemModel = this.modalCtrl.create('EventPage', { item: item }, { cssClass: 'inset-modal' });
        itemModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        itemModel.present();
    };
    ContactPage.prototype.editItem = function (item) {
        var editModel = this.modalCtrl.create('EditEventPage', { item: item, yearPay: this.yearPay }, { cssClass: 'inset-modal' });
        editModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        editModel.present();
    };
    ContactPage.prototype.deleteItem = function (item) {
        this.db.object(this.basePath + "/" + this.yearPay + "/" + item.id).remove()
            .catch(function (error) { return console.log(error); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Event List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadingData()">\n        <ion-icon name=\'star\'></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="createItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon name="calendar" item-start></ion-icon>\n    <ion-label>Year</ion-label>\n    <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n  </ion-item>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items | async">\n      <button ion-item (click)="itemTapped($event, item)">\n        <ion-avatar item-start>\n          <img *ngIf="item.imageUrl" [src]="item.imageUrl" />\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <p item-end>{{item.date}}</p>\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteItem(item)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editItem(item)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(modalCtrl, db) {
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.basePath = 'songs';
        var path = "" + this.basePath;
        this.songs = this.db.list(path).valueChanges();
    }
    HomePage.prototype.createSong = function () {
        var createSongModel = this.modalCtrl.create('CreateSongPage', null, { cssClass: 'inset-modal' });
        createSongModel.onDidDismiss(function (data) {
            if (data) {
                console.log("created song");
            }
        });
        createSongModel.present();
    };
    HomePage.prototype.songTapped = function (event, song) {
        var songModel = this.modalCtrl.create('SongPage', { song: song }, { cssClass: 'inset-modal' });
        songModel.onDidDismiss(function (data) {
            if (data) {
                console.log("test1111");
            }
        });
        songModel.present();
    };
    HomePage.prototype.editSong = function (song) {
        var editSongModel = this.modalCtrl.create('EditSongPage', { song: song }, { cssClass: 'inset-modal' });
        editSongModel.onDidDismiss(function (data) {
            if (data) {
                console.log("test1111");
            }
        });
        editSongModel.present();
    };
    HomePage.prototype.deleteSong = function (song) {
        var path = this.basePath + "/" + song.id;
        this.db.object(path).remove()
            .catch(function (error) { return console.log(error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Song List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createSong()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let song of songs | async">\n      <button ion-item (click)="songTapped($event, song)">\n        <ion-avatar item-start>\n          <img *ngIf="song.imageUrl" [src]="song.imageUrl" />\n        </ion-avatar>\n        <h2>{{song.name}}</h2>\n        <!-- <p item-end>{{song.description}}</p> -->\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteSong(song)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editSong(song)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YtProvider = (function () {
    function YtProvider(http) {
        this.http = http;
        this.apiKey = 'AIzaSyCNWIL_2QY77plm4XU9AQVhfiLwYfOnMc4';
    }
    YtProvider.prototype.getPlaylistsForChannel = function (channel) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
            .map(function (res) {
            return res.json()['items'];
        });
    };
    YtProvider.prototype.getListVideos = function (listId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId + '&part=snippet,id&maxResults=20')
            .map(function (res) {
            return res.json()['items'];
        });
    };
    // https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyCNWIL_2QY77plm4XU9AQVhfiLwYfOnMc4&id=MZjsDuAh7v8
    YtProvider.prototype.getVideoSnippet = function (videoId) {
        return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=' + this.apiKey + '&id=' + videoId)
            .map(function (res) {
            return res.json()['items'];
        });
    };
    YtProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], YtProvider);
    return YtProvider;
}());

//# sourceMappingURL=yt.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(429);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_youtube_video_player__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_yt_yt__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_moment_moment__ = __webpack_require__(569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//firebase



var firebaseConfig = {
    apiKey: "AIzaSyCEo24FMxTyU8IemGPVY8-XRXuO_ZkZVn4",
    authDomain: "base-gallery.firebaseapp.com",
    databaseURL: "https://base-gallery.firebaseio.com",
    projectId: "base-gallery",
    storageBucket: "base-gallery.appspot.com",
    messagingSenderId: "103599334911"
};

//youtube



//pipes

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_moment_moment__["a" /* MomentPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/paylist/paylist.module#PayListPageModule', name: 'PayListPage', segment: 'paylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/create-song/create-song.module#CreateSongPageModule', name: 'CreateSongPage', segment: 'create-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/edit-song/edit-song.module#EditSongPageModule', name: 'EditSongPage', segment: 'edit-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/song/song.module#SongPageModule', name: 'SongPage', segment: 'song', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_13__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_yt_yt__["a" /* YtProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_17__pipes_moment_moment__["a" /* MomentPipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 236,
	"./af.js": 236,
	"./ar": 237,
	"./ar-dz": 238,
	"./ar-dz.js": 238,
	"./ar-kw": 239,
	"./ar-kw.js": 239,
	"./ar-ly": 240,
	"./ar-ly.js": 240,
	"./ar-ma": 241,
	"./ar-ma.js": 241,
	"./ar-sa": 242,
	"./ar-sa.js": 242,
	"./ar-tn": 243,
	"./ar-tn.js": 243,
	"./ar.js": 237,
	"./az": 244,
	"./az.js": 244,
	"./be": 245,
	"./be.js": 245,
	"./bg": 246,
	"./bg.js": 246,
	"./bm": 247,
	"./bm.js": 247,
	"./bn": 248,
	"./bn.js": 248,
	"./bo": 249,
	"./bo.js": 249,
	"./br": 250,
	"./br.js": 250,
	"./bs": 251,
	"./bs.js": 251,
	"./ca": 252,
	"./ca.js": 252,
	"./cs": 253,
	"./cs.js": 253,
	"./cv": 254,
	"./cv.js": 254,
	"./cy": 255,
	"./cy.js": 255,
	"./da": 256,
	"./da.js": 256,
	"./de": 257,
	"./de-at": 258,
	"./de-at.js": 258,
	"./de-ch": 259,
	"./de-ch.js": 259,
	"./de.js": 257,
	"./dv": 260,
	"./dv.js": 260,
	"./el": 261,
	"./el.js": 261,
	"./en-au": 262,
	"./en-au.js": 262,
	"./en-ca": 263,
	"./en-ca.js": 263,
	"./en-gb": 264,
	"./en-gb.js": 264,
	"./en-ie": 265,
	"./en-ie.js": 265,
	"./en-il": 266,
	"./en-il.js": 266,
	"./en-nz": 267,
	"./en-nz.js": 267,
	"./eo": 268,
	"./eo.js": 268,
	"./es": 269,
	"./es-do": 270,
	"./es-do.js": 270,
	"./es-us": 271,
	"./es-us.js": 271,
	"./es.js": 269,
	"./et": 272,
	"./et.js": 272,
	"./eu": 273,
	"./eu.js": 273,
	"./fa": 274,
	"./fa.js": 274,
	"./fi": 275,
	"./fi.js": 275,
	"./fo": 276,
	"./fo.js": 276,
	"./fr": 277,
	"./fr-ca": 278,
	"./fr-ca.js": 278,
	"./fr-ch": 279,
	"./fr-ch.js": 279,
	"./fr.js": 277,
	"./fy": 280,
	"./fy.js": 280,
	"./gd": 281,
	"./gd.js": 281,
	"./gl": 282,
	"./gl.js": 282,
	"./gom-latn": 283,
	"./gom-latn.js": 283,
	"./gu": 284,
	"./gu.js": 284,
	"./he": 285,
	"./he.js": 285,
	"./hi": 286,
	"./hi.js": 286,
	"./hr": 287,
	"./hr.js": 287,
	"./hu": 288,
	"./hu.js": 288,
	"./hy-am": 289,
	"./hy-am.js": 289,
	"./id": 290,
	"./id.js": 290,
	"./is": 291,
	"./is.js": 291,
	"./it": 292,
	"./it.js": 292,
	"./ja": 293,
	"./ja.js": 293,
	"./jv": 294,
	"./jv.js": 294,
	"./ka": 295,
	"./ka.js": 295,
	"./kk": 296,
	"./kk.js": 296,
	"./km": 297,
	"./km.js": 297,
	"./kn": 298,
	"./kn.js": 298,
	"./ko": 299,
	"./ko.js": 299,
	"./ky": 300,
	"./ky.js": 300,
	"./lb": 301,
	"./lb.js": 301,
	"./lo": 302,
	"./lo.js": 302,
	"./lt": 303,
	"./lt.js": 303,
	"./lv": 304,
	"./lv.js": 304,
	"./me": 305,
	"./me.js": 305,
	"./mi": 306,
	"./mi.js": 306,
	"./mk": 307,
	"./mk.js": 307,
	"./ml": 308,
	"./ml.js": 308,
	"./mr": 309,
	"./mr.js": 309,
	"./ms": 310,
	"./ms-my": 311,
	"./ms-my.js": 311,
	"./ms.js": 310,
	"./mt": 312,
	"./mt.js": 312,
	"./my": 313,
	"./my.js": 313,
	"./nb": 314,
	"./nb.js": 314,
	"./ne": 315,
	"./ne.js": 315,
	"./nl": 316,
	"./nl-be": 317,
	"./nl-be.js": 317,
	"./nl.js": 316,
	"./nn": 318,
	"./nn.js": 318,
	"./pa-in": 319,
	"./pa-in.js": 319,
	"./pl": 320,
	"./pl.js": 320,
	"./pt": 321,
	"./pt-br": 322,
	"./pt-br.js": 322,
	"./pt.js": 321,
	"./ro": 323,
	"./ro.js": 323,
	"./ru": 324,
	"./ru.js": 324,
	"./sd": 325,
	"./sd.js": 325,
	"./se": 326,
	"./se.js": 326,
	"./si": 327,
	"./si.js": 327,
	"./sk": 328,
	"./sk.js": 328,
	"./sl": 329,
	"./sl.js": 329,
	"./sq": 330,
	"./sq.js": 330,
	"./sr": 331,
	"./sr-cyrl": 332,
	"./sr-cyrl.js": 332,
	"./sr.js": 331,
	"./ss": 333,
	"./ss.js": 333,
	"./sv": 334,
	"./sv.js": 334,
	"./sw": 335,
	"./sw.js": 335,
	"./ta": 336,
	"./ta.js": 336,
	"./te": 337,
	"./te.js": 337,
	"./tet": 338,
	"./tet.js": 338,
	"./tg": 339,
	"./tg.js": 339,
	"./th": 340,
	"./th.js": 340,
	"./tl-ph": 341,
	"./tl-ph.js": 341,
	"./tlh": 342,
	"./tlh.js": 342,
	"./tr": 343,
	"./tr.js": 343,
	"./tzl": 344,
	"./tzl.js": 344,
	"./tzm": 345,
	"./tzm-latn": 346,
	"./tzm-latn.js": 346,
	"./tzm.js": 345,
	"./ug-cn": 347,
	"./ug-cn.js": 347,
	"./uk": 348,
	"./uk.js": 348,
	"./ur": 349,
	"./ur.js": 349,
	"./uz": 350,
	"./uz-latn": 351,
	"./uz-latn.js": 351,
	"./uz.js": 350,
	"./vi": 352,
	"./vi.js": 352,
	"./x-pseudo": 353,
	"./x-pseudo.js": 353,
	"./yo": 354,
	"./yo.js": 354,
	"./zh-cn": 355,
	"./zh-cn.js": 355,
	"./zh-hk": 356,
	"./zh-hk.js": 356,
	"./zh-tw": 357,
	"./zh-tw.js": 357
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 536;

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\taiko1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\ionic\taiko1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthProvider = (function () {
    function AuthProvider(db, af) {
        this.db = db;
        this.af = af;
        this.user = af.authState;
    }
    AuthProvider.prototype.login = function (email, password) {
        var _this = this;
        return this.af.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.setUserStatus('online');
            console.log("success to log in: uid=", _this.authState.uid);
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthProvider.prototype.logout = function () {
        this.af.auth.signOut();
        this.setUserStatus('offline');
        //  console.log("success to log out");
    };
    Object.defineProperty(AuthProvider.prototype, "currentUserId", {
        get: function () {
            return this.authState !== null ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.registerUser = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (authData) {
                observer.next(authData);
                _this.authState = authData;
                var status = 'online';
                _this.setUserData(credentials.email, credentials.username, status, authData.uid);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthProvider.prototype.setUserData = function (email, displayName, status, uid) {
        var path = "users/" + this.currentUserId;
        var data = {
            email: email,
            displayName: displayName,
            status: status,
            uid: uid
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthProvider.prototype.setUserStatus = function (status) {
        var path = "users/" + this.currentUserId;
        var data = {
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    Object.defineProperty(AuthProvider.prototype, "currentUser", {
        get: function () {
            return this.af.auth.currentUser ? this.af.auth.currentUser.email : null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.authUser = function () {
        return this.user;
    };
    AuthProvider.prototype.resetPassword = function (emailAddress) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.sendPasswordResetEmail(emailAddress).then(function (success) {
                //console.log('email sent', success);
                observer.next(success);
            }, function (error) {
                //console.log('error sending email',error);
                observer.error(error);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, args) {
        args = args || '';
        return args === 'ago' ? __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).fromNow() : __WEBPACK_IMPORTED_MODULE_1_moment___default()(value).format(args);
    };
    MomentPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'moment'
        })
    ], MomentPipe);
    return MomentPipe;
}());

//# sourceMappingURL=moment.js.map

/***/ })

},[408]);
//# sourceMappingURL=main.js.map