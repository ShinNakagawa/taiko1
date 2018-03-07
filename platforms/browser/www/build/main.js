webpackJsonp([12],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
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

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload_model__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // to help loop over files more succinctly



var StoragePage = (function () {
    function StoragePage(navCtrl, loadingCtrl, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.basePath = '/uploads';
        this.uploadItems = this.db.list(this.basePath + "/").valueChanges();
    }
    StoragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoragePage');
    };
    StoragePage.prototype.handleFiles = function (event) {
        this.files = event.target.files;
    };
    StoragePage.prototype.uploadFiles = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        var filesToUpload = this.files;
        var filesIdx = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](filesToUpload.length);
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](filesIdx, function (idx) {
            // console.log(filesToUpload[idx]);
            _this.upload = new __WEBPACK_IMPORTED_MODULE_2__models_upload_model__["a" /* Upload */](filesToUpload[idx]);
            var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + _this.upload.file.name)
                .put(_this.upload.file);
            loader.present();
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"].TaskEvent.STATE_CHANGED, 
            // three observers
            // 1.) state_changed observer
            function (snapshot) {
                // upload in progress
                _this.upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
                console.log(_this.upload.progress);
            }, 
            // 2.) error observer
            function (error) {
                // upload failed
                console.log(error);
                loader.dismiss();
            }, 
            // 3.) success observer
            function () {
                _this.upload.url = uploadTask.snapshot.downloadURL;
                _this.upload.name = _this.upload.file.name;
                _this.saveFileData(_this.upload);
                loader.dismiss();
            });
        });
    };
    StoragePage.prototype.saveFileData = function (upload) {
        var key = this.db.list(this.basePath + "/").push(upload).key;
        var path = this.basePath + "/" + key;
        var data = {
            id: key
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
        console.log('File saved!: ' + upload.url);
    };
    StoragePage.prototype.deleteItem = function (item) {
        console.log(item);
        //delete data in list
        var path = this.basePath + "/" + item.id;
        this.db.object(path).remove().then(function (res) {
            console.log('Data deleted from database! ' + item.name);
        }).catch(function (err) {
            console.log(err);
        });
        //delete file in storage
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["storage"]().ref().child(this.basePath + "/" + item.name);
        storageRef.delete().then(function (snapshot) {
            console.log('File deleted from storage!: ' + item.name);
        }).catch(function (err) {
            console.log('Failed to delete from storage!: ' + item.name);
        });
        var alert = this.alertCtrl.create({
            title: 'delete file',
            message: 'delete file from storage:',
            buttons: ['OK']
        });
        alert.present();
    };
    StoragePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storage',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\storage\storage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Storage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container">\n    <div *ngIf="upload">\n      <div class="progress">\n        <div class="progress-bar progress-bar-animated" \n        [ngStyle]="{ \'width\': upload?.progress + \'%\' }"></div>\n      </div>\n      Progress: {{upload?.progress}}% Complete\n    </div>\n    <div class="container">\n      <input type="file" (change)="handleFiles($event)" multiple>\n      <button ion-button color="secondary" small (click)="uploadFiles()">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of uploadItems | async">\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.url" />\n        </ion-avatar>\n        <ion-icon name="download"></ion-icon>\n        <a href="{{item.url}}" download>{{item.name}}</a>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\storage\storage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], StoragePage);
    return StoragePage;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/edit-user/edit-user.module": [
		616,
		10
	],
	"../pages/about/newyear/newyear.module": [
		615,
		9
	],
	"../pages/about/pay/pay.module": [
		617,
		8
	],
	"../pages/contact/create-event/create-event.module": [
		619,
		7
	],
	"../pages/contact/edit-event/edit-event.module": [
		618,
		6
	],
	"../pages/contact/event/event.module": [
		620,
		5
	],
	"../pages/home/create-song/create-song.module": [
		621,
		4
	],
	"../pages/home/edit-song/edit-song.module": [
		625,
		3
	],
	"../pages/home/login/login.module": [
		622,
		2
	],
	"../pages/home/signup/signup.module": [
		623,
		1
	],
	"../pages/home/song/song.module": [
		624,
		0
	],
	"../pages/storage/storage.module": [
		626,
		11
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
webpackAsyncContext.id = 203;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(148);
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
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__storage_storage__["a" /* StoragePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Song" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Event" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Storage" tabIcon="cloud"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\taiko1\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
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




var AboutPage = (function () {
    function AboutPage(db, modalCtrl) {
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.userPath = 'users';
        this.payPath = 'pays';
        this.users = this.db.list(this.userPath + "/").valueChanges();
        this.yearPay = __WEBPACK_IMPORTED_MODULE_3_moment___default()(new Date()).format('YYYY');
    }
    AboutPage.prototype.userTapped = function (event, user) {
        var payModal = this.modalCtrl.create('PayPage', { user: user, yearPay: this.yearPay }, { cssClass: 'inset-modal' });
        payModal.onDidDismiss(function (data) {
            if (data) {
                //this.items.add(data);
            }
        });
        payModal.present();
    };
    AboutPage.prototype.userEdit = function (user) {
        var editUserModel = this.modalCtrl.create('EditUserPage', { user: user }, { cssClass: 'inset-modal' });
        editUserModel.onDidDismiss(function (data) {
            if (data) {
                //console.log("test1111");
            }
        });
        editUserModel.present();
    };
    AboutPage.prototype.newYear = function () {
        var _this = this;
        var data = this.db.list(this.payPath + "/" + this.yearPay + "/").valueChanges();
        data.subscribe(function (rs) {
            console.log('re.length=', rs.length);
            if (rs.length < 1) {
                var newYearModal = _this.modalCtrl.create('NewYearPage', { yearPay: _this.yearPay }, { cssClass: 'inset-modal' });
                newYearModal.onDidDismiss(function (data) {
                    if (data) {
                        //this.items.add(data);
                    }
                });
                newYearModal.present();
            }
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>User List</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <!-- <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Year</ion-label>\n      <ion-datetime displayFormat="YYYY" max="2050" [(ngModel)]="yearPay"></ion-datetime>\n    </ion-item>\n    <button ion-button (click)="newYear()">New Year</button> -->\n      \n\n    <ion-list>\n      <ion-item-sliding *ngFor="let user of users | async">\n        <button ion-item (click)="userTapped($event, user)">\n          <ion-avatar item-start>\n            <img *ngIf="user.imageUrl" [src]="user.imageUrl" />\n          </ion-avatar>\n          <h2>{{user.displayName}}</h2>\n        </button>\n        <ion-item-options>\n          <button ion-button clear small color="secondary" icon-left (click)="userEdit(user)">\n            <ion-icon name=\'create\'></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(147);
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
    function HomePage(modalCtrl, auth, db) {
        this.modalCtrl = modalCtrl;
        this.auth = auth;
        this.db = db;
        this.basePath = 'songs';
        this.songs = this.db.list("" + this.basePath).valueChanges();
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
        this.db.object(this.basePath + "/" + song.id).remove()
            .catch(function (error) { return console.log(error); });
    };
    //==========================================================
    //Shinichi : shinichi0719@hotmail.com
    //James Bykowy  : shin234@example.com
    //April Sora : test@example.com
    //Ann DeVito : test2@example.com
    //Kristie Muzyka : test3@example.com
    //Bryan Bock : test4@example.com
    //Jeff : test5@example.com
    //Audra Balion : test6@example.com
    HomePage.prototype.openModalLogin = function () {
        var loginModel = this.modalCtrl.create('LoginPage', null, { cssClass: 'inset-modal' });
        loginModel.onDidDismiss(function (data) {
            if (data) {
                console.log("HomePage::openModalLogin login");
                window.location.reload();
            }
        });
        loginModel.present();
    };
    HomePage.prototype.openModalSignup = function () {
        var signupModel = this.modalCtrl.create('SignupPage', null, { cssClass: 'inset-modal' });
        signupModel.onDidDismiss(function (data) {
            if (data) {
                console.log("HomePage::openModalSignup signup");
                window.location.reload();
            }
        });
        signupModel.present();
    };
    HomePage.prototype.logout = function () {
        this.auth.logout();
        window.location.reload();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\ionic\taiko1\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Song List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="createSong()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let song of songs | async">\n      <button ion-item (click)="songTapped($event, song)">\n        <ion-avatar item-start>\n          <img *ngIf="song.imageUrl" [src]="song.imageUrl" />\n        </ion-avatar>\n        <h2>{{song.name}}</h2>\n        <!-- <p item-end>{{song.description}}</p> -->\n      </button>\n      <ion-item-options>\n        <button ion-button clear small color="danger" icon-left (click)="deleteSong(song)">\n          <ion-icon name=\'trash\'></ion-icon>\n        </button>\n        <button ion-button clear small color="secondary" icon-left (click)="editSong(song)">\n          <ion-icon name=\'create\'></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n    <!-- Float Action Buttons -->\n  <!-- <ion-fab bottom right >\n    <button ion-fab class="pop-in" color="danger">Accout</button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary" (click)="openModalLogin()">\n        <ion-icon  name="log-in"></ion-icon>\n      </button>\n      <button ion-fab color="secondary" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      <button ion-fab color="danger" (click)="openModalSignup()">\n        <ion-icon name="link"></ion-icon>\n      </button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab>\n        <ion-icon name="logo-github"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab> -->\n    \n</ion-content>'/*ion-inline-end:"E:\ionic\taiko1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(73);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(450);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_storage_storage__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_youtube_video_player__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_yt_yt__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_moment_moment__ = __webpack_require__(614);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_moment_moment__["a" /* MomentPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/newyear/newyear.module#NewYearPageModule', name: 'NewYearPage', segment: 'newyear', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/edit-event/edit-event.module#EditEventPageModule', name: 'EditEventPage', segment: 'edit-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/create-event/create-event.module#CreateEventPageModule', name: 'CreateEventPage', segment: 'create-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/create-song/create-song.module#CreateSongPageModule', name: 'CreateSongPage', segment: 'create-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/song/song.module#SongPageModule', name: 'SongPage', segment: 'song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/edit-song/edit-song.module#EditSongPageModule', name: 'EditSongPage', segment: 'edit-song', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/storage/storage.module#StoragePageModule', name: 'StoragePage', segment: 'storage', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_storage_storage__["a" /* StoragePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_yt_yt__["a" /* YtProvider */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_18__pipes_moment_moment__["a" /* MomentPipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 252,
	"./af.js": 252,
	"./ar": 253,
	"./ar-dz": 254,
	"./ar-dz.js": 254,
	"./ar-kw": 255,
	"./ar-kw.js": 255,
	"./ar-ly": 256,
	"./ar-ly.js": 256,
	"./ar-ma": 257,
	"./ar-ma.js": 257,
	"./ar-sa": 258,
	"./ar-sa.js": 258,
	"./ar-tn": 259,
	"./ar-tn.js": 259,
	"./ar.js": 253,
	"./az": 260,
	"./az.js": 260,
	"./be": 261,
	"./be.js": 261,
	"./bg": 262,
	"./bg.js": 262,
	"./bm": 263,
	"./bm.js": 263,
	"./bn": 264,
	"./bn.js": 264,
	"./bo": 265,
	"./bo.js": 265,
	"./br": 266,
	"./br.js": 266,
	"./bs": 267,
	"./bs.js": 267,
	"./ca": 268,
	"./ca.js": 268,
	"./cs": 269,
	"./cs.js": 269,
	"./cv": 270,
	"./cv.js": 270,
	"./cy": 271,
	"./cy.js": 271,
	"./da": 272,
	"./da.js": 272,
	"./de": 273,
	"./de-at": 274,
	"./de-at.js": 274,
	"./de-ch": 275,
	"./de-ch.js": 275,
	"./de.js": 273,
	"./dv": 276,
	"./dv.js": 276,
	"./el": 277,
	"./el.js": 277,
	"./en-au": 278,
	"./en-au.js": 278,
	"./en-ca": 279,
	"./en-ca.js": 279,
	"./en-gb": 280,
	"./en-gb.js": 280,
	"./en-ie": 281,
	"./en-ie.js": 281,
	"./en-il": 282,
	"./en-il.js": 282,
	"./en-nz": 283,
	"./en-nz.js": 283,
	"./eo": 284,
	"./eo.js": 284,
	"./es": 285,
	"./es-do": 286,
	"./es-do.js": 286,
	"./es-us": 287,
	"./es-us.js": 287,
	"./es.js": 285,
	"./et": 288,
	"./et.js": 288,
	"./eu": 289,
	"./eu.js": 289,
	"./fa": 290,
	"./fa.js": 290,
	"./fi": 291,
	"./fi.js": 291,
	"./fo": 292,
	"./fo.js": 292,
	"./fr": 293,
	"./fr-ca": 294,
	"./fr-ca.js": 294,
	"./fr-ch": 295,
	"./fr-ch.js": 295,
	"./fr.js": 293,
	"./fy": 296,
	"./fy.js": 296,
	"./gd": 297,
	"./gd.js": 297,
	"./gl": 298,
	"./gl.js": 298,
	"./gom-latn": 299,
	"./gom-latn.js": 299,
	"./gu": 300,
	"./gu.js": 300,
	"./he": 301,
	"./he.js": 301,
	"./hi": 302,
	"./hi.js": 302,
	"./hr": 303,
	"./hr.js": 303,
	"./hu": 304,
	"./hu.js": 304,
	"./hy-am": 305,
	"./hy-am.js": 305,
	"./id": 306,
	"./id.js": 306,
	"./is": 307,
	"./is.js": 307,
	"./it": 308,
	"./it.js": 308,
	"./ja": 309,
	"./ja.js": 309,
	"./jv": 310,
	"./jv.js": 310,
	"./ka": 311,
	"./ka.js": 311,
	"./kk": 312,
	"./kk.js": 312,
	"./km": 313,
	"./km.js": 313,
	"./kn": 314,
	"./kn.js": 314,
	"./ko": 315,
	"./ko.js": 315,
	"./ky": 316,
	"./ky.js": 316,
	"./lb": 317,
	"./lb.js": 317,
	"./lo": 318,
	"./lo.js": 318,
	"./lt": 319,
	"./lt.js": 319,
	"./lv": 320,
	"./lv.js": 320,
	"./me": 321,
	"./me.js": 321,
	"./mi": 322,
	"./mi.js": 322,
	"./mk": 323,
	"./mk.js": 323,
	"./ml": 324,
	"./ml.js": 324,
	"./mr": 325,
	"./mr.js": 325,
	"./ms": 326,
	"./ms-my": 327,
	"./ms-my.js": 327,
	"./ms.js": 326,
	"./mt": 328,
	"./mt.js": 328,
	"./my": 329,
	"./my.js": 329,
	"./nb": 330,
	"./nb.js": 330,
	"./ne": 331,
	"./ne.js": 331,
	"./nl": 332,
	"./nl-be": 333,
	"./nl-be.js": 333,
	"./nl.js": 332,
	"./nn": 334,
	"./nn.js": 334,
	"./pa-in": 335,
	"./pa-in.js": 335,
	"./pl": 336,
	"./pl.js": 336,
	"./pt": 337,
	"./pt-br": 338,
	"./pt-br.js": 338,
	"./pt.js": 337,
	"./ro": 339,
	"./ro.js": 339,
	"./ru": 340,
	"./ru.js": 340,
	"./sd": 341,
	"./sd.js": 341,
	"./se": 342,
	"./se.js": 342,
	"./si": 343,
	"./si.js": 343,
	"./sk": 344,
	"./sk.js": 344,
	"./sl": 345,
	"./sl.js": 345,
	"./sq": 346,
	"./sq.js": 346,
	"./sr": 347,
	"./sr-cyrl": 348,
	"./sr-cyrl.js": 348,
	"./sr.js": 347,
	"./ss": 349,
	"./ss.js": 349,
	"./sv": 350,
	"./sv.js": 350,
	"./sw": 351,
	"./sw.js": 351,
	"./ta": 352,
	"./ta.js": 352,
	"./te": 353,
	"./te.js": 353,
	"./tet": 354,
	"./tet.js": 354,
	"./tg": 355,
	"./tg.js": 355,
	"./th": 356,
	"./th.js": 356,
	"./tl-ph": 357,
	"./tl-ph.js": 357,
	"./tlh": 358,
	"./tlh.js": 358,
	"./tr": 359,
	"./tr.js": 359,
	"./tzl": 360,
	"./tzl.js": 360,
	"./tzm": 361,
	"./tzm-latn": 362,
	"./tzm-latn.js": 362,
	"./tzm.js": 361,
	"./ug-cn": 363,
	"./ug-cn.js": 363,
	"./uk": 364,
	"./uk.js": 364,
	"./ur": 365,
	"./ur.js": 365,
	"./uz": 366,
	"./uz-latn": 367,
	"./uz-latn.js": 367,
	"./uz.js": 366,
	"./vi": 368,
	"./vi.js": 368,
	"./x-pseudo": 369,
	"./x-pseudo.js": 369,
	"./yo": 370,
	"./yo.js": 370,
	"./zh-cn": 371,
	"./zh-cn.js": 371,
	"./zh-hk": 372,
	"./zh-hk.js": 372,
	"./zh-tw": 373,
	"./zh-tw.js": 373
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
webpackContext.id = 555;

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = (function () {
    function Upload(file) {
        this.createdOn = new Date();
        this.file = file;
    }
    return Upload;
}());

//# sourceMappingURL=upload.model.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(424);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 614:
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

},[429]);
//# sourceMappingURL=main.js.map