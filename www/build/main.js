webpackJsonp([23],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(148);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturSumbangPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_uang_donatur_uang__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__donatur_barang_donatur_barang__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ModalPage } from './modal-page';


var DonaturSumbangPage = (function () {
    function DonaturSumbangPage(
        // private vibration: Vibration,
        navCtrl, 
        // public http: Http, 
        alertCtrl, navParams, 
        // public data: Data,
        loadCtrl, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.validLembaga = false;
        this.choose_lembaga = false;
        this.submitted = false;
        this.sumbang = "barang";
    }
    DonaturSumbangPage.prototype.UploadFoto = function () {
        var modal = this.modalCtrl.create(ModalContentPage);
        modal.present();
    };
    DonaturSumbangPage.prototype.cekLembaga = function () {
        this.validLembaga = true;
    };
    // OpenItemUang() {
    //   // untuk push page dengan tabs dihide
    //   this.app.getRootNav().push(DonaturUangPage);
    // }
    DonaturSumbangPage.prototype.OpenItemUang = function (form) {
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'memuat..'
        });
        if (form.valid && this.validLembaga) {
            loading.present();
            // untuk push page dengan tabs dihide
            this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__donatur_uang_donatur_uang__["a" /* DonaturUangPage */]);
            loading.dismiss();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Lengkapi Data',
                // subTitle: 'Email atau Password salah',      
                buttons: ['OK']
            });
            // this.vibration.vibrate(1000);
            alert_1.present();
        }
    };
    DonaturSumbangPage.prototype.OpenItemBarang = function () {
        // untuk push page dengan tabs dihide
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__donatur_barang_donatur_barang__["a" /* DonaturBarangPage */]);
    };
    return DonaturSumbangPage;
}());
DonaturSumbangPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-sumbang',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-sumbang\donatur-sumbang.html"*/'<ion-header>\n\n  <ion-toolbar no-border-top color="AyoDermawan" class="Toolbar">\n\n    <ion-segment  [(ngModel)]="sumbang">\n\n      <ion-segment-button color="light" value="uang">\n\n        <div class="Header">Uang</div>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="barang">\n\n        <div class="Header">Barang</div>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="sumbang">\n\n    <ion-list *ngSwitchCase="\'uang\'">\n\n      \n\n      <img src="assets/pict/Uang.png" class=\'Logo\'>\n\n\n\n      <form #uangForm="ngForm" novalidate>\n\n          \n\n        <ion-item class="Konten1">\n\n          <ion-label floating><p class="Head">Nama</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="name"  name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        \n\n        <p class="Warning" ion-text [hidden]="nama.valid || submitted == false" color="danger" padding-left>\n\n          Nama harus diisi\n\n        </p>\n\n\n\n        <ion-item>\n\n          <ion-label><p class="Head">Lembaga</p></ion-label>\n\n          <ion-select [(ngModel)]="Lembaga" name="lembaga" (ionChange)="cekLembaga()" type="text" [ngModelOptions]="{standalone: true}" class="Head2">\n\n            <ion-option value="1">Lembaga1</ion-option>\n\n            <ion-option value="2">Lembaga2</ion-option>\n\n            <ion-option value="3">Lembaga3</ion-option>\n\n            <ion-option value="4">Lembaga4</ion-option>\n\n            <ion-option value="5">Lembaga5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <p class="Warning" ion-text [hidden]="Lembaga || submitted == false" color="danger" padding-left>\n\n          Pilih satu.\n\n        </p>\n\n\n\n        <ion-item>\n\n          <ion-label floating><p class="Head">Jumlah Donasi</p></ion-label>\n\n          <ion-input class="Head2" [(ngModel)]="donation" pattern="[0-9]{1,}" minlength="5" name="donation" type="text" #donasi="ngModel" spellcheck="false" autocapitalize="off"\n\n            required>\n\n          </ion-input>\n\n        </ion-item>\n\n        \n\n\n\n        <p class="Warning" ion-text [hidden]="donasi.valid || submitted == false" color="danger" padding-left>\n\n          Jumlah Donasi harus diisi\n\n        </p>\n\n\n\n        <ion-item no-lines>\n\n          <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'OpenItemUang(uangForm)\'><p class="ButtonWord">Lanjut</p></button>\n\n        </ion-item>\n\n\n\n      </form>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'barang\'">\n\n      \n\n      <img src="assets/pict/Barang.png" class=\'Logo\'>\n\n\n\n      <ion-item class="Konten1">\n\n				<ion-label floating><p class="Head">Nama</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="name" name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			\n\n			<!--<p class="Warning" ion-text [hidden]="nama.valid || submitted == false" color="danger" padding-left>\n\n				Nama harus diisi\n\n			</p>-->\n\n\n\n      <ion-item>\n\n        <ion-label><p class="Head">Kategori</p></ion-label>\n\n        <ion-select [(ngModel)]="Kategori" class="Head2">\n\n          <ion-option value="1">Kategori1</ion-option>\n\n          <ion-option value="2">Kategori2</ion-option>\n\n          <ion-option value="3">Kategori3</ion-option>\n\n          <ion-option value="4">Kategori4</ion-option>\n\n          <ion-option value="5">Kategori5</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label><p class="Head">Lembaga</p></ion-label>\n\n        <ion-select [(ngModel)]="Lembaga" class="Head2">\n\n          <ion-option value="1">Lembaga1</ion-option>\n\n          <ion-option value="2">Lembaga2</ion-option>\n\n          <ion-option value="3">Lembaga3</ion-option>\n\n          <ion-option value="4">Lembaga4</ion-option>\n\n          <ion-option value="5">Lembaga5</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <ion-label><p class="Head">Alamat</p></ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label><p class="Head21">Provinsi</p></ion-label>\n\n        <ion-select [(ngModel)]="Provinsi" class="Head2">\n\n          <ion-option value="1">Provinsi1</ion-option>\n\n          <ion-option value="2">Provinsi2</ion-option>\n\n          <ion-option value="3">Provinsi3</ion-option>\n\n          <ion-option value="4">Provinsi4</ion-option>\n\n          <ion-option value="5">Provinsi5</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label><p class="Head21">Kota/Kab</p></ion-label>\n\n        <ion-select [(ngModel)]="Kota/Kab" class="Head2">\n\n          <ion-option value="1">Kota/Kab1</ion-option>\n\n          <ion-option value="2">Kota/Kab2</ion-option>\n\n          <ion-option value="3">Kota/Kab3</ion-option>\n\n          <ion-option value="4">Kota/Kab4</ion-option>\n\n          <ion-option value="5">Kota/Kab5</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label><p class="Head21">Kecamatan</p></ion-label>\n\n        <ion-select [(ngModel)]="Kecamatan" class="Head2">\n\n          <ion-option value="1">Kecamatan1</ion-option>\n\n          <ion-option value="2">Kecamatan2</ion-option>\n\n          <ion-option value="3">Kecamatan3</ion-option>\n\n          <ion-option value="4">Kecamatan4</ion-option>\n\n          <ion-option value="5">Kecamatan5</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n      <ion-textarea class="Head3"  [(ngModel)]="address" name="address" type="text" #alamat="ngModel" placeholder="Alamat Pengambilan Barang" required autosize>\n\n      </ion-textarea>\n\n      </ion-item>\n\n      \n\n      <ion-item class="Konten1">\n\n        \n\n				<ion-label stacked><p class="Head">Deskripsi Barang</p></ion-label>\n\n				<ion-textarea class="Head2" [(ngModel)]="description" name="description" type="text" #deskripsi="ngModel" placeholder="Berikan Deskripsi barang yang akan didonasikan" spellcheck="false" autocapitalize="off"\n\n					autosize text-wrap required>\n\n				</ion-textarea>\n\n			\n\n\n\n      <!--<ion-label stack class="Head">Deskripsi Barang</ion-label>\n\n				<ion-textarea class="Head2"  [(ngModel)]="description" name="description" type="text" #deskripsi="ngModel" required autosize>\n\n      </ion-textarea>-->\n\n			</ion-item>\n\n\n\n      <ion-item no-lines>\n\n        <button class=\'Button\' color="AyoDermawan" ion-button outline block (click)=\'UploadFoto()\'><p class="ButtonWordBlue">Unggah Foto</p></button>\n\n        <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'OpenItemBarang()\'><p class="ButtonWord">Lanjut</p></button>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-sumbang\donatur-sumbang.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], DonaturSumbangPage);

var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalContentPage;
}());
ModalContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n<ion-header>\n\n  <ion-navbar color=\"AyoDermawan\">\n    <ion-title text-center>Unggah Foto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-item no-lines>\n        <button class='Button' color=\"AyoDermawan\" ion-button outline block (click)='UploadFoto()'><p class=\"ButtonWordBlue\">Selesai</p></button>\n        <button class='Button' color=\"AyoDermawan\" ion-button block (click)='dismiss()'><p class=\"ButtonWord\">Batal</p></button>\n      </ion-item>\n</ion-content>\n"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], ModalContentPage);

//# sourceMappingURL=donatur-sumbang.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturHome2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DonaturHome2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DonaturHome2Page = (function () {
    function DonaturHome2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonaturHome2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturHome2Page');
    };
    return DonaturHome2Page;
}());
DonaturHome2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-home2',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-home2\donatur-home2.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Lelang</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item no-lines text-center>\n\n    <button  class="ButtonCountdown" ion-button color="danger"><p class="ButtonWordCountdown">Countdown</p></button>\n\n  </ion-item>\n\n\n\n  <ion-slides pager>\n\n\n\n  <ion-slide>\n\n    <img class="Gambar" src="assets/pict/mock5.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/BarangBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Barang</p>\n\n    <p class="Konten">Nama Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/LembagaIconSmall.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Lembaga Penerima</p>\n\n    <p class="Konten">Lembaga X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/PetaBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Alamat Pengambilan</p>\n\n    <p class="Konten">Jalan X, Kecamatan X, Kabupaten X, Provinsi X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/ListBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Deskripsi Barang</p>\n\n    <p class="Konten">Kateogiri Barang X</p>\n\n  </ion-item>\n\n\n\n  \n\n  <ion-item no-lines>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="danger" ion-button (click)=\'Cancel()\'><p class="ButtonWordWhite">Batal</p></button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="secondary" ion-button (click)=\'Finish()\'><p class="ButtonWordWhite">Selesai</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-item>\n\n\n\n<!--Action Sheet-->\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-home2\donatur-home2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DonaturHome2Page);

//# sourceMappingURL=donatur-home2.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_home2_donatur_home2__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonaturHomePage = (function () {
    function DonaturHomePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    DonaturHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturHomePage');
    };
    DonaturHomePage.prototype.OpenItem = function () {
        // untuk push page dengan tabs dihide
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__donatur_home2_donatur_home2__["a" /* DonaturHome2Page */]);
    };
    return DonaturHomePage;
}());
DonaturHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-home',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-home\donatur-home.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title></ion-title>\n\n    <ion-searchbar color="ayoDermawan" (ionInput)="getItems($event)"></ion-searchbar>\n\n    <!--<ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list>-->\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Tarik untuk memperbaharui"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Memperbaharui...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-fab bottom right >\n\n    <button color="AyoDermawan" ion-fab mini><ion-icon  name="md-add"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock2.jpeg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Lukisan Mona Lisa</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock3.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Batik Tulis</p>\n\n            <p class="HargaItem">\n\n              Rp. 1.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        \n\n        <ion-card>\n\n          <img src="assets/pict/mock1.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Patung</p>\n\n            <p class="HargaItem">\n\n              Rp. 5.000.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>    \n\n        \n\n      </ion-col>\n\n      <ion-col col-6 (tap)="OpenItem()">\n\n        <ion-card>\n\n          <img src="assets/pict/mock4.jpg" class="Item"/>\n\n          <ion-card-content>\n\n            <p class="JudulItem">Pahatan</p>\n\n            <p class="HargaItem">\n\n              Rp. 2.700.000\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-home\donatur-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], DonaturHomePage);

//# sourceMappingURL=donatur-home.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturList2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DonaturList2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DonaturList2Page = (function () {
    function DonaturList2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonaturList2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturList2Page');
    };
    return DonaturList2Page;
}());
DonaturList2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-list2',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-list2\donatur-list2.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title text-center>Profil Lembaga Sosial</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/pict/LembagaLogo.png" class="Pict"/>\n\n  \n\n  <ion-item padding-right text-wrap>\n\n    <p class="Nama">Nama Lembaga Sosial panjang panjang\n\n    </p>\n\n  </ion-item>\n\n\n\n  <ion-item padding-right>\n\n	  <ion-icon name="mail" item-left class="IconMail"></ion-icon>\n\n	  <p class="Head">Email</p>\n\n	  <p class="Konten">lembaga@gmail.com</p>\n\n	</ion-item>\n\n  <ion-item padding-right>\n\n	  <ion-icon name="call" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Nomor Telepon</p>\n\n	  <p class="Konten">0896 5701 1491</p>\n\n	</ion-item>\n\n  <ion-item padding-right>\n\n	  <ion-icon name="md-map" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Alamat</p>\n\n	  <p class="Konten">Ipb Dramaga Bogor</p>\n\n	</ion-item>\n\n\n\n  <!--KONDISI SATU-->\n\n  <div>\n\n  <ion-item padding-right no-lines>\n\n	  <ion-icon name="ios-card" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Mandiri\n\n    </p>\n\n	  <p class="Konten">1234564256262</p>\n\n	</ion-item>\n\n  </div>\n\n\n\n  <!--KONDISI DUA-->\n\n  <div>\n\n  <ion-item padding-right no-lines>\n\n	  <ion-icon name="ios-card" item-left class="IconSpesial"></ion-icon>\n\n	  <p class="Head">Mandiri\n\n    </p>\n\n	  <p class="Konten">1234564256262</p>\n\n	</ion-item>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-list2\donatur-list2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DonaturList2Page);

//# sourceMappingURL=donatur-list2.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_list2_donatur_list2__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonaturListPage = (function () {
    function DonaturListPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    DonaturListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturListPage');
    };
    DonaturListPage.prototype.OpenItem = function () {
        // untuk push page dengan tabs dihide
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__donatur_list2_donatur_list2__["a" /* DonaturList2Page */]);
    };
    return DonaturListPage;
}());
DonaturListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-list',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-list\donatur-list.html"*/'<!--\n\n  Generated template for the DonaturListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title></ion-title>\n\n    <ion-searchbar color="ayoDermawan" (ionInput)="getItems($event)"></ion-searchbar>\n\n    <!--<ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list>-->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding-left>\n\n  \n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/LembagaLogo.png"/>\n\n    </ion-thumbnail>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <p class="NamaLembaga">Nama Lembaga X</p>\n\n        <p class="KotaLembaga">Kota X</p>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button class="Button" ion-button small color="AyoDermawan" (click)="OpenItem()" block><p class="ButtonWord">Lihat</p></button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-item>\n\n  \n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-list\donatur-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], DonaturListPage);

//# sourceMappingURL=donatur-list.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturProfilEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_profil_donatur_profil__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonaturProfilEditPage = (function () {
    function DonaturProfilEditPage(fireauth, firedata, navCtrl, navParams, loadCtrl, alertCtrl) {
        var _this = this;
        this.fireauth = fireauth;
        this.firedata = firedata;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        var user = this.fireauth.auth.currentUser;
        var donatur = this.firedata.object('/donatur/' + user.uid).subscribe(function (data) {
            _this.name = data.name;
            _this.email = data.email;
            _this.telephone = data.telephone;
            _this.address = data.address;
        });
    }
    DonaturProfilEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturProfilEditPage');
    };
    DonaturProfilEditPage.prototype.simpanProfil = function () {
        var user = this.fireauth.auth.currentUser;
        this.firedata.object('/donatur/' + user.uid).update({
            name: this.name, email: this.email, address: this.address, telephone: this.telephone
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__donatur_profil_donatur_profil__["a" /* DonaturProfilPage */]);
    };
    return DonaturProfilEditPage;
}());
DonaturProfilEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-profil-edit',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-profil-edit\donatur-profil-edit.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Sunting Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n	<form #profileForm="ngForm" novalidate>\n\n\n\n	<ion-item>\n\n			<ion-label floating><p class="Head">Nama</p></ion-label>\n\n			<ion-input class="Head2" value="{{name}}" [(ngModel)]="name" name="name" type="text" #user="ngModel" spellcheck="false" autocapitalize="off"	required>\n\n			</ion-input>\n\n	</ion-item>\n\n	<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n	Nama harus diisi\n\n	</p>\n\n\n\n	<ion-item>\n\n			<ion-label floating><p class="Head">Alamat</p></ion-label>\n\n			<ion-input class="Head2" value="{{address}}" [(ngModel)]="address" name="address" type="text" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n				required>\n\n			</ion-input>\n\n	</ion-item>\n\n	<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n	Nama harus diisi\n\n	</p>\n\n\n\n	<ion-item>\n\n			<ion-label floating><p class="Head">Nomor Telepon</p></ion-label>\n\n			<ion-input class="Head2" value="{{telephone}}" [(ngModel)]="telephone" name="telephone" type="number" pattern="[0]{1}[0-9]{1,}" maxlength="13" required	required>\n\n			</ion-input>\n\n	</ion-item>\n\n	<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n	Nomor Telepon harus diisi\n\n	</p>\n\n\n\n  <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'simpanProfil()\'><p class="ButtonWord">SIMPAN</p></button>\n\n\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-profil-edit\donatur-profil-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DonaturProfilEditPage);

//# sourceMappingURL=donatur-profil-edit.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_login_donatur_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lembaga_login_lembaga_login__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginDonatur = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__donatur_login_donatur_login__["a" /* DonaturLoginPage */]);
    };
    LoginPage.prototype.loginLembaga = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lembaga_login_lembaga_login__["a" /* LembagaLoginPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="assets/pict/AyoDermawanLogo.png" class=\'Logo\'>\n\n  \n\n  <ion-item no-lines></ion-item>\n\n\n\n  <ion-item no-lines>\n\n\n\n			<ion-thumbnail item-left (tap)="loginDonatur()">\n\n	      <img src="assets/pict/DonaturIcon.png" class=\'LogoIcon\'>		    \n\n      </ion-thumbnail>\n\n		\n\n    	<button class=\'login_button\' clear ion-button  block color="AyoDermawan" (click)="loginDonatur()">\n\n				<p class="ButtonWord">Donatur</p>\n\n    	</button>			    \n\n\n\n	</ion-item>\n\n  \n\n  <ion-item class=\'line\'></ion-item>\n\n\n\n  <ion-item no-lines>\n\n\n\n			<ion-thumbnail item-left (tap)="loginLembaga()">\n\n	      <img src="assets/pict/LembagaIcon.png" class=\'LogoIcon\'>		    \n\n      </ion-thumbnail>\n\n		\n\n    	<button class=\'login_button\' clear ion-button  block color="AyoDermawan" (click)="loginLembaga()">\n\n				<p class="ButtonWord"  text-wrap>Lembaga Sosial</p>\n\n    	</button>			    \n\n\n\n	</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_donatur_tabs_donatur__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__donatur_signup_donatur_signup__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonaturLoginPage = (function () {
    function DonaturLoginPage(fireauth, navCtrl, navParams, loadCtrl, alertCtrl) {
        this.fireauth = fireauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.lihat = true;
    }
    DonaturLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturLoginPage');
        this.status = "password";
    };
    DonaturLoginPage.prototype.masuk = function (form) {
        var _this = this;
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'memuat..'
        });
        if (form.valid) {
            loading.present();
            //firebase
            this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
                .then(function (data) {
                var json = { uid: data.uid, email: data.email
                };
                console.log(json);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_donatur_tabs_donatur__["a" /* TabsDonaturPage */]);
            })
                .catch(function (error) {
                console.error(error);
                var alert = _this.alertCtrl.create({
                    title: 'Gagal Masuk',
                    subTitle: 'Email atau Password salah',
                    buttons: ['OK']
                });
                // this.vibration.vibrate(1000);
                alert.present();
            });
            loading.dismiss();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',
                buttons: ['OK']
            });
            // this.vibration.vibrate(1000);
            alert_1.present();
        }
    };
    // masuk() {
    //   this.navCtrl.setRoot(TabsDonaturPage);
    // }
    DonaturLoginPage.prototype.showPassword = function () {
        this.status = "text";
        this.lihat = false;
        console.log(this.status);
    };
    DonaturLoginPage.prototype.hidePassword = function () {
        this.status = "password";
        this.lihat = true;
        console.log(this.status);
    };
    DonaturLoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__donatur_signup_donatur_signup__["a" /* DonaturSignupPage */]);
    };
    return DonaturLoginPage;
}());
DonaturLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-login',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-login\donatur-login.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Donatur</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="assets/pict/AyoDermawanLogo.png" class=\'Logo\'>\n\n\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n			<ion-item>\n\n				<ion-label floating><p class="Head">Email</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating><p class="Head">Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input class="Head2"  [(ngModel)]="password" name="pass" type="{{status}}" #pass="ngModel"  required>\n\n				</ion-input>\n\n				<button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				\n\n\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p>\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk(loginForm)" block><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Tidak punya akun?</font>\n\n						<a class="Link" (click)="signUp()"> Buat akun.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-login\donatur-login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DonaturLoginPage);

//# sourceMappingURL=donatur-login.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturNotifikasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonaturNotifikasiPage = (function () {
    function DonaturNotifikasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notifikasi = "pemberitahuan";
    }
    DonaturNotifikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturNotifikasiPage');
    };
    return DonaturNotifikasiPage;
}());
DonaturNotifikasiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-notifikasi',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-notifikasi\donatur-notifikasi.html"*/'<ion-header>\n\n  <ion-toolbar no-border-top color="AyoDermawan" class="Toolbar">\n\n    <ion-segment  [(ngModel)]="notifikasi">\n\n      <ion-segment-button color="light" value="tertunda">\n\n        <div class="Header">Tertunda</div>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="pemberitahuan">\n\n        <div class="Header">Pemberitahuan</div>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="notifikasi">\n\n    <ion-list *ngSwitchCase="\'tertunda\'">\n\n      \n\n      <ion-item text-wrap>\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/pict/mock4.jpg"/>\n\n        </ion-thumbnail>\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <p class="Head">Pahatan X</p>\n\n            <p class="Konten">Unggah Bukti Bayar</p>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <button class="Button" ion-button small color="AyoDermawan" (click)="masuk()" block><p class="ButtonWord">Lihat</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'pemberitahuan\'">\n\n      \n\n      <ion-item text-wrap>\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/pict/mock1.jpg"/>\n\n        </ion-thumbnail>\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <p class="Head">Patung X</p>\n\n            <p class="Konten">Sudah terjual</p>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <button class="Button" ion-button small color="AyoDermawan" (click)="masuk()" block><p class="ButtonWord">Lihat</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-notifikasi\donatur-notifikasi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DonaturNotifikasiPage);

//# sourceMappingURL=donatur-notifikasi.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturUangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DonaturUangPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DonaturUangPage = (function () {
    function DonaturUangPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonaturUangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturUangPage');
    };
    DonaturUangPage.prototype.Cancel = function () {
        this.navCtrl.pop();
    };
    DonaturUangPage.prototype.Finish = function () {
        this.navCtrl.pop();
    };
    return DonaturUangPage;
}());
DonaturUangPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-uang',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-uang\donatur-uang.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Donasi Uang</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/UangBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Jumlah Donasi</p>\n\n    <p class="Konten">Rp. 50.000.000</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/LembagaIconSmall.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Lembaga Penerima</p>\n\n    <p class="Konten">Lembaga X</p>\n\n  </ion-item>\n\n  <p class="HeadBank">Daftar Bank</p>\n\n  <ion-item class="Bank" margin-left text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/MandiriBank.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Rekening Lembaga X</p>\n\n    <p class="Konten">144 182598 123</p>\n\n  </ion-item>\n\n  <ion-item class="Bank" margin-left text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/MandiriBank.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Rekening Lembaga X</p>\n\n    <p class="Konten">144 182598 123</p>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines>\n\n        <button class=\'Button\' color="AyoDermawan" ion-button outline block (click)=\'UploadFoto()\'><p class="ButtonWordBlue">Unggah Foto</p></button>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="danger" ion-button (click)=\'Cancel()\'><p class="ButtonWordWhite">Batal</p></button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="secondary" ion-button (click)=\'Finish()\'><p class="ButtonWordWhite">Selesai</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-uang\donatur-uang.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DonaturUangPage);

//# sourceMappingURL=donatur-uang.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturBarangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonaturBarangPage = (function () {
    function DonaturBarangPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    DonaturBarangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturBarangPage');
    };
    DonaturBarangPage.prototype.Cancel = function () {
        this.navCtrl.pop();
    };
    DonaturBarangPage.prototype.Finish = function () {
        this.navCtrl.pop();
    };
    return DonaturBarangPage;
}());
DonaturBarangPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-barang',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-barang\donatur-barang.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Donasi Barang</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides pager>\n\n\n\n  <ion-slide>\n\n    <img class="Gambar" src="assets/pict/mock5.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/BarangBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Barang</p>\n\n    <p class="Konten">Nama Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/ListBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Kategori</p>\n\n    <p class="Konten">Kateogiri Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/LembagaIconSmall.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Lembaga Penerima</p>\n\n    <p class="Konten">Lembaga X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/PetaBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Alamat Pengambilan</p>\n\n    <p class="Konten">Jalan X, Kecamatan X, Kabupaten X, Provinsi X</p>\n\n  </ion-item>\n\n\n\n  \n\n  <ion-item no-lines>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="danger" ion-button (click)=\'Cancel()\'><p class="ButtonWordWhite">Batal</p></button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="secondary" ion-button (click)=\'Finish()\'><p class="ButtonWordWhite">Selesai</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-barang\donatur-barang.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], DonaturBarangPage);

//# sourceMappingURL=donatur-barang.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_donatur_tabs_donatur__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Vibration } from '@ionic-native/vibration';



var DonaturSignupPage = (function () {
    function DonaturSignupPage(
        //firebase
        fireauth, firedata, 
        // private vibration: Vibration,
        navCtrl, 
        // public http: Http, 
        alertCtrl, navParams, 
        // public data: Data,
        loadCtrl) {
        this.fireauth = fireauth;
        this.firedata = firedata;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.submitted = false;
        this.submitted2 = true;
        this.isValidFormTelephone = true;
    }
    DonaturSignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturSignupPage');
    };
    DonaturSignupPage.prototype.checkTelephone = function () {
        console.log(this.telephone);
        if (this.telephone < 0) {
            this.isValidFormTelephone = false;
            // this.telephoneMessage = "Jangan minus coy";
        }
        else {
            // this.telephoneMessage=null;
            this.isValidFormTelephone = true;
        }
    };
    DonaturSignupPage.prototype.signUp = function (form) {
        var _this = this;
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'memuat..'
        });
        if (form.valid) {
            loading.present();
            //firebase
            this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(function (data) {
                //this.donatur = this.firedata.object('donatur/${data.uid}');
                var donatur = _this.firedata.object('/donatur/' + data.uid);
                donatur.set({ id: data.uid, name: _this.name, email: _this.email, telephone: _this.telephone, address: _this.address });
                console.log(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_donatur_tabs_donatur__["a" /* TabsDonaturPage */]);
            })
                .catch(function (error) {
                console.log(error);
            });
            loading.dismiss();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',
                buttons: ['OK']
            });
            // this.vibration.vibrate(1000);
            alert_1.present();
        }
    };
    return DonaturSignupPage;
}());
DonaturSignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-signup',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-signup\donatur-signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Daftar Donatur</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form #signupForm="ngForm" novalidate>\n\n		<ion-list >\n\n			\n\n			<ion-item>\n\n				<ion-label floating ><p class="Head">Nama</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="name" name="name" type="text" #nama="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			\n\n			<p class="Warning" ion-text [hidden]="nama.valid || submitted == false" color="danger" padding-left>\n\n				Nama harus diisi\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating ><p class="Head">Email</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="email" pattern="[^@\]+@[^@\]+\.[^@\s]+" name="email" type="email" #mail="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			\n\n			<p class="Warning" ion-text [hidden]="mail.valid || submitted == false" color="danger" padding-left>\n\n				Email harus diisi\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating ><p class="Head">Password</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="password" name="pass" type="password" minlength="8" #pass="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			\n\n			<p class="Warning" ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left>\n\n				Password harus diisi (minimal 8 karakter)\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating ><p class="Head">Konfirmasi Password</p></ion-label>\n\n				<ion-input class="Head" [(ngModel)]="password2" name="pass2" type="password" #passconfirm="ngModel" required>\n\n				</ion-input>\n\n\n\n			</ion-item>\n\n			<p class="Warning" ion-text [hidden]="submitted2 == true" color="danger" padding-left>\n\n				Password salah\n\n			</p>\n\n			<div ion-text [hidden]="password2==password"  padding-left>\n\n				<p class="Warning" color="danger" *ngIf="password2!=null">Password salah</p>\n\n			</div>\n\n\n\n			<ion-item>\n\n				<ion-label floating ><p class="Head">Nomor Telepon</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="telephone" (ionChange)="checkTelephone()" name="telephone" type="number" #telpon="ngModel" pattern="[0]{1}[0-9]{1,}" maxlength="13" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<div ion-text [hidden]="telpon.valid || submitted == false"  padding-left>\n\n				<p class="Warning" color="danger" *ngIf="!telephone">Nomor telepon harus diisi</p>\n\n				<p class="Warning" color="danger" *ngIf="telephone">Nomor telepon salah</p>\n\n			</div>\n\n\n\n			<ion-item>\n\n				<ion-label floating ><p class="Head">Alamat</p></ion-label>\n\n				<ion-textarea class="Head2"  [(ngModel)]="address" name="address" type="text" #alamat="ngModel" required autosize></ion-textarea>\n\n			</ion-item>\n\n			<p class="Warning" ion-text [hidden]="alamat.valid || submitted == false" color="danger" padding-left>\n\n				Alamat harus diisi\n\n			</p>\n\n		</ion-list>\n\n\n\n		<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button class="Button" color="AyoDermawan" ion-button block (click)="signUp(signupForm)" type="submit"><p class="ButtonWord">Daftar</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-signup\donatur-signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], DonaturSignupPage);

//# sourceMappingURL=donatur-signup.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_lembaga_tabs_lembaga__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lembaga_signup_lembaga_signup__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LembagaLoginPage = (function () {
    function LembagaLoginPage(navCtrl, navParams, loadCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.lihat = true;
    }
    LembagaLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaLoginPage');
        this.status = "password";
    };
    LembagaLoginPage.prototype.masuk = function (form) {
        this.submitted = true;
        var loading = this.loadCtrl.create({
            content: 'memuat..'
        });
        if (form.valid) {
            loading.present();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_lembaga_tabs_lembaga__["a" /* TabsLembagaPage */]);
            loading.dismiss();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',
                buttons: ['OK']
            });
            // this.vibration.vibrate(1000);
            alert_1.present();
        }
    };
    // masuk() {
    //   this.navCtrl.setRoot(TabsLembagaPage);
    // }
    LembagaLoginPage.prototype.showPassword = function () {
        this.status = "text";
        this.lihat = false;
        console.log(this.status);
    };
    LembagaLoginPage.prototype.hidePassword = function () {
        this.status = "password";
        this.lihat = true;
        console.log(this.status);
    };
    LembagaLoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__lembaga_signup_lembaga_signup__["a" /* LembagaSignupPage */]);
    };
    return LembagaLoginPage;
}());
LembagaLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-login',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-login\lembaga-login.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Donatur</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <img src="assets/pict/AyoDermawanLogo.png" class=\'Logo\'>\n\n\n\n  <form #loginForm="ngForm" novalidate>\n\n		<ion-list >\n\n			<ion-item>\n\n				<ion-label floating><p class="Head">Email</p></ion-label>\n\n				<ion-input class="Head2" [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n			Email harus diisi\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label floating><p class="Head">Password</p></ion-label>\n\n				\n\n				\n\n				<ion-input class="Head2"  [(ngModel)]="password" name="pass" type="{{status}}" #pass="ngModel"  required>\n\n				</ion-input>\n\n				<button class="tombol" [hidden]="lihat == false" (click)="showPassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				<button class="tombol" [hidden]="lihat == true" (click)="hidePassword()" ion-button clear color="dark" type="button" item-right> <ion-icon name="md-eye-off" class=\'icon\' color="primary2"> </ion-icon> </button>\n\n				\n\n\n\n			</ion-item>\n\n			\n\n			<p ion-text [hidden]="pass.valid || submitted == false" color="danger" padding-left class="Warning">\n\n				Password harus diisi\n\n			</p>\n\n		</ion-list>\n\n\n\n		<!--<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="login(loginForm)" type="submit" block>Masuk</button>\n\n			</ion-col>\n\n		</ion-row>-->\n\n\n\n		<!--ini buat mock up-->\n\n		<ion-row>\n\n			<ion-col>\n\n				<button class="ButtonMasuk" ion-button color="AyoDermawan" (click)="masuk(loginForm)" block><p class="ButtonWord">Masuk</p></button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n<!--		\n\n		<div text-center>\n\n			<button ion-button medium>\n\n				Click Here\n\n			</button>\n\n		</div>\n\n				-->\n\n\n\n		<ion-grid>\n\n			<ion-row>\n\n				<ion-col text-center>\n\n					<p class="Head">\n\n						<font color="black">Tidak punya akun?</font>\n\n						<a class="Link" (click)="signUp()"> Buat akun.</a>\n\n					</p>\n\n				</ion-col>\n\n			</ion-row>\n\n			<!--<ion-row>\n\n				<ion-col text-center><a><font color="black"></font><a (click)="lupaPassword()">Lupa password.</a></a></ion-col>\n\n			</ion-row>-->\n\n		</ion-grid>\n\n\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-login\lembaga-login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LembagaLoginPage);

//# sourceMappingURL=lembaga-login.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLembagaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lembaga_lelang_lembaga_lelang__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lembaga_notifikasi_lembaga_notifikasi__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lembaga_profil_lembaga_profil__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsLembagaPage = (function () {
    function TabsLembagaPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__lembaga_lelang_lembaga_lelang__["a" /* LembagaLelangPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__lembaga_notifikasi_lembaga_notifikasi__["a" /* LembagaNotifikasiPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__lembaga_profil_lembaga_profil__["a" /* LembagaProfilPage */];
    }
    return TabsLembagaPage;
}());
TabsLembagaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs-lembaga',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\tabs-lembaga\tabs-lembaga.html"*/'<ion-tabs color="AyoDermawan">\n\n\n\n  <ion-tab tabIcon="ios-trending-up"  [root]="tab1Root"></ion-tab>\n\n  <ion-tab tabIcon="ios-notifications"  [root]="tab2Root"></ion-tab>\n\n  <ion-tab tabIcon="ios-people"  [root]="tab3Root"></ion-tab>\n\n\n\n</ion-tabs>\n\n\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\tabs-lembaga\tabs-lembaga.html"*/,
    }),
    __metadata("design:paramtypes", [])
], TabsLembagaPage);

//# sourceMappingURL=tabs-lembaga.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaLelangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LembagaLelangPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LembagaLelangPage = (function () {
    function LembagaLelangPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LembagaLelangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaLelangPage');
    };
    return LembagaLelangPage;
}());
LembagaLelangPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-lelang',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-lelang\lembaga-lelang.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title></ion-title>\n\n    <ion-searchbar color="ayoDermawan" (ionInput)="getItems($event)"></ion-searchbar>\n\n    <!--<ion-list>\n\n      <ion-item *ngFor="let item of items">\n\n        {{ item }}\n\n      </ion-item>\n\n    </ion-list>-->\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left >\n\n      <img src="assets/pict/mock2.jpeg" class="Gambar"/>\n\n    </ion-thumbnail>\n\n    <ion-row>\n\n      <ion-col col-9>\n\n        <p class="NamaBarang">Lukisan X</p>\n\n        <p class="Harga">Rp. 2.000.000</p>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <button ion-button small color="AyoDermawan" (click)="OpenItem()" class="Button" block><p class="ButtonWord">Lihat</p></button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <p class="Countdown">sisa 4 hari</p>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-lelang\lembaga-lelang.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LembagaLelangPage);

//# sourceMappingURL=lembaga-lelang.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaNotifikasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lembaga_donasi_lembaga_donasi__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lembaga_riwayat_lembaga_riwayat__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LembagaNotifikasiPage = (function () {
    function LembagaNotifikasiPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.notifikasi = "pemberitahuan";
    }
    LembagaNotifikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaNotifikasiPage');
    };
    LembagaNotifikasiPage.prototype.masuk = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__lembaga_donasi_lembaga_donasi__["a" /* LembagaDonasiPage */]);
    };
    LembagaNotifikasiPage.prototype.masuk2 = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__lembaga_riwayat_lembaga_riwayat__["a" /* LembagaRiwayatPage */]);
    };
    return LembagaNotifikasiPage;
}());
LembagaNotifikasiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-notifikasi',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-notifikasi\lembaga-notifikasi.html"*/'<ion-header>\n\n  <ion-toolbar no-border-top color="AyoDermawan" class="Toolbar">\n\n    <ion-segment  [(ngModel)]="notifikasi">\n\n      <ion-segment-button color="light" value="riwayat">\n\n        <div class="Header">Riwayat</div>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="pemberitahuan">\n\n        <div class="Header">Pemberitahuan</div>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="notifikasi">\n\n    <ion-list *ngSwitchCase="\'riwayat\'">\n\n      \n\n      <ion-item text-wrap (tap)="masuk2()">\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/pict/mock2.jpeg"/>\n\n        </ion-thumbnail>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <p class="Head">Lukisan X</p>\n\n            <p class="Konten">Nama Donatur</p>\n\n            <p class="Konten">Alamat Donatur</p>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <div>\n\n            <button class="Button" ion-button small color="secondary"  block><p class="ButtonWord2">Diterima</p></button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      <ion-item text-wrap  (tap)="masuk2()" >\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/pict/mock3.jpg"/>\n\n        </ion-thumbnail>\n\n        <ion-row>\n\n          <ion-col col-8>\n\n            <p class="Head">Batik Tulis X</p>\n\n            <p class="Konten">Nama Donatur</p>\n\n            <p class="Konten">Alamat Donatur</p>\n\n          </ion-col>\n\n          <ion-col col-4>\n\n            <div>\n\n            <button class="Button" ion-button small color="danger"block><p class="ButtonWord2">Ditolak</p></button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      \n\n\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'pemberitahuan\'">\n\n      \n\n      <ion-item text-wrap>\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/pict/mock5.jpg"/>\n\n        </ion-thumbnail>\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <p class="Head">Beras Cianjur</p>\n\n            <p class="Konten">Nama Donatur</p>\n\n            <p class="Konten">Alamat Donatur</p>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <button class="Button" ion-button small color="AyoDermawan" (click)="masuk()" block><p class="ButtonWord">Lihat</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n      <ion-item text-wrap>\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/pict/mock4.jpg"/>\n\n        </ion-thumbnail>\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <p class="Head">Pahatan</p>\n\n            <p class="Konten">Nama Donatur</p>\n\n            <p class="Konten">Alamat Donatur</p>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <button class="Button" ion-button small color="AyoDermawan" (click)="masuk()" block><p class="ButtonWord">Lihat</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-notifikasi\lembaga-notifikasi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LembagaNotifikasiPage);

//# sourceMappingURL=lembaga-notifikasi.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaDonasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LembagaDonasiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LembagaDonasiPage = (function () {
    function LembagaDonasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LembagaDonasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaDonasiPage');
    };
    LembagaDonasiPage.prototype.Cancel = function () {
        this.navCtrl.pop();
    };
    LembagaDonasiPage.prototype.Finish = function () {
        this.navCtrl.pop();
    };
    return LembagaDonasiPage;
}());
LembagaDonasiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-donasi',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-donasi\lembaga-donasi.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Konfirmasi Donasi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides pager>\n\n\n\n  <ion-slide>\n\n    <img class="Gambar" src="assets/pict/mock5.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/DonaturIconSmall.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Donatur</p>\n\n    <p class="Konten">Donatur X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/TeleponBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nomor Telepon</p>\n\n    <p class="Konten">021 742339</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/BarangBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Barang</p>\n\n    <p class="Konten">Nama Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/ListBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Kategori</p>\n\n    <p class="Konten">Kateogiri Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/PetaBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Alamat Pengambilan</p>\n\n    <p class="Konten">Jalan X, Kecamatan X, Kabupaten X, Provinsi X</p>\n\n  </ion-item>\n\n\n\n  \n\n  <ion-item no-lines>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="danger" ion-button (click)=\'Cancel()\'><p class="ButtonWordWhite">Tolak</p></button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button class=\'ButtonSmall\' color="secondary" ion-button (click)=\'Finish()\'><p class="ButtonWordWhite">Terima</p></button>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-donasi\lembaga-donasi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LembagaDonasiPage);

//# sourceMappingURL=lembaga-donasi.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaRiwayatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LembagaRiwayatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LembagaRiwayatPage = (function () {
    function LembagaRiwayatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LembagaRiwayatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaRiwayatPage');
    };
    return LembagaRiwayatPage;
}());
LembagaRiwayatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-riwayat',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-riwayat\lembaga-riwayat.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Riwayat Donasi</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides pager>\n\n\n\n  <ion-slide>\n\n    <img class="Gambar" src="assets/pict/mock5.jpg"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <img src="assets/pict/BarangBiru.png"/>\n\n  </ion-slide>\n\n\n\n</ion-slides>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/DonaturIconSmall.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Donatur</p>\n\n    <p class="Konten">Donatur X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/TeleponBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nomor Telepon</p>\n\n    <p class="Konten">021 742339</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/BarangBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Nama Barang</p>\n\n    <p class="Konten">Nama Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/ListBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Kategori</p>\n\n    <p class="Konten">Kateogiri Barang X</p>\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    <ion-thumbnail item-left>\n\n      <img src="assets/pict/PetaBiru.png"/>\n\n    </ion-thumbnail>\n\n    <p class="Head">Alamat Pengambilan</p>\n\n    <p class="Konten">Jalan X, Kecamatan X, Kabupaten X, Provinsi X</p>\n\n  </ion-item>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-riwayat\lembaga-riwayat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LembagaRiwayatPage);

//# sourceMappingURL=lembaga-riwayat.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lembaga_profil_edit_lembaga_profil_edit__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LembagaProfilPage = (function () {
    function LembagaProfilPage(navCtrl, navParams, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
    }
    LembagaProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaProfilPage');
    };
    LembagaProfilPage.prototype.editProfil = function () {
        // untuk push page dengan tabs dihide
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__lembaga_profil_edit_lembaga_profil_edit__["a" /* LembagaProfilEditPage */]);
    };
    LembagaProfilPage.prototype.logOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Apakah Anda Yakin?',
            subTitle: 'Keluar dari akun akan menghapus semua data yang belum tersimpan.',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                        // this.navCtrl.setRoot(MyApp);
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]);
                        // ,
                        // this.data.logout();
                        // this.app.getRootNav().setRoot(MyApp);
                    }
                }
            ]
        });
        confirm.present();
    };
    return LembagaProfilPage;
}());
LembagaProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-profil',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-profil\lembaga-profil.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title text-center>AyoDermawan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/pict/LembagaLogo.png" class="Pict"/>\n\n  \n\n  <ion-item padding-right text-wrap>\n\n    <p class="Nama">Nama Lembaga Sosial panjang panjang\n\n    </p>\n\n  </ion-item>\n\n\n\n  <ion-item padding-right>\n\n	  <ion-icon name="mail" item-left class="IconMail"></ion-icon>\n\n	  <p class="Head">Email</p>\n\n	  <p class="Konten">lembaga@gmail.com</p>\n\n	</ion-item>\n\n  <ion-item padding-right>\n\n	  <ion-icon name="call" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Nomor Telepon</p>\n\n	  <p class="Konten">0896 5701 1491</p>\n\n	</ion-item>\n\n  <ion-item padding-right>\n\n	  <ion-icon name="md-map" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Alamat</p>\n\n	  <p class="Konten">Ipb Dramaga Bogor</p>\n\n	</ion-item>\n\n\n\n  <!--KONDISI SATU-->\n\n  <div>\n\n  <ion-item padding-right no-lines>\n\n	  <ion-icon name="ios-card" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Mandiri\n\n    </p>\n\n	  <p class="Konten">1234564256262</p>\n\n	</ion-item>\n\n  </div>\n\n\n\n  <!--KONDISI DUA-->\n\n  <div>\n\n  <ion-item padding-right no-lines>\n\n	  <ion-icon name="ios-card" item-left class="IconSpesial"></ion-icon>\n\n	  <p class="Head">Mandiri\n\n    </p>\n\n	  <p class="Konten">1234564256262</p>\n\n	</ion-item>\n\n  </div>\n\n\n\n  <ion-item padding-left-right>\n\n    <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'editProfil()\'><p class="ButtonWordWhite">Sunting Profil</p></button>\n\n    <button class=\'Button\' color="danger" ion-button outline block (click)=\'logOut()\'><p class="ButtonWordBlack">Keluar Akun</p></button>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-profil\lembaga-profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], LembagaProfilPage);

//# sourceMappingURL=lembaga-profil.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaProfilEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LembagaProfilEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LembagaProfilEditPage = (function () {
    function LembagaProfilEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LembagaProfilEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaProfilEditPage');
    };
    return LembagaProfilEditPage;
}());
LembagaProfilEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-profil-edit',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-profil-edit\lembaga-profil-edit.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title>Sunting Profil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n	<ion-item>\n\n			<ion-label floating><p class="Head">Nama</p></ion-label>\n\n			<ion-input class="Head2" value="{{name}}" [(ngModel)]="namel" name="name" type="text" #user="ngModel" spellcheck="false" autocapitalize="off"	required>\n\n			</ion-input>\n\n	</ion-item>\n\n	<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n	Nama harus diisi\n\n	</p>\n\n\n\n	<ion-item>\n\n			<ion-label floating><p class="Head">Email</p></ion-label>\n\n			<ion-input class="Head2" value="{{email}}" [(ngModel)]="email" name="email" type="email" #user="ngModel" spellcheck="false" autocapitalize="off"\n\n				required>\n\n			</ion-input>\n\n	</ion-item>\n\n	<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n	Nama harus diisi\n\n	</p>\n\n\n\n	<ion-item>\n\n			<ion-label floating><p class="Head">Nomor Telepon</p></ion-label>\n\n			<ion-input class="Head2" value="{{no_tel_patient}}" [(ngModel)]="no_tel_patient" name="telp" type="number" pattern="[0]{1}[0-9]{1,}" maxlength="13" required	required>\n\n			</ion-input>\n\n	</ion-item>\n\n	<p ion-text [hidden]="user.valid || submitted == false" color="danger" padding-left class="Warning">\n\n	Nomor Telepon harus diisi\n\n	</p>\n\n\n\n  <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'simpanProfil()\'><p class="ButtonWord">SIMPAN</p></button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-profil-edit\lembaga-profil-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LembagaProfilEditPage);

//# sourceMappingURL=lembaga-profil-edit.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LembagaSignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LembagaSignupPage = (function () {
    function LembagaSignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LembagaSignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaSignupPage');
    };
    return LembagaSignupPage;
}());
LembagaSignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-signup',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-signup\lembaga-signup.html"*/'<!--\n\n  Generated template for the LembagaSignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>LembagaSignup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  1. Akta Pendirian\n\nNo. Akta : 44\n\nTanggal : 20 Juni 2007\n\nNotaris : DR. WIRATNI AHMADI, SH\n\n \n\n2. SK Menteri Hukum dan HAM R.I\n\nNomor : C - 2840. HT. 01. 02. TH 2007\n\nTanggal : 06 September 2007\n\n \n\n3. Berita Negara R.I\n\nNomor : 102\n\nTanggal : 21 Desember 2007\n\n \n\n4. Surat Izin Dinas Sosial Kota Bandung\n\nNomor : 062/1190-Dinsos\n\nTanggal : 25 Juni 2013\n\n \n\n5. Surat Izin Dinas Sosial Provinsi Jawa Barat\n\nNomor : 062 / 3144 / PPKS / 08/2011\n\nTanggal : 1 April 2011\n\n \n\n6. Surat Keterangan Domisili\n\nNomor : 07 / DP / Kel / VI / 2007\n\nTanggal : 28 Juni 2007\n\n \n\n7. NPWP\n\nNomor : 02. 587. 749. 9-429. 000\n\nTanggal : 05 Juli 2008\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-signup\lembaga-signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LembagaSignupPage);

//# sourceMappingURL=lembaga-signup.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/donatur-barang/donatur-barang.module": [
		433,
		22
	],
	"../pages/donatur-home/donatur-home.module": [
		426,
		20
	],
	"../pages/donatur-home2/donatur-home2.module": [
		425,
		21
	],
	"../pages/donatur-list/donatur-list.module": [
		428,
		18
	],
	"../pages/donatur-list2/donatur-list2.module": [
		427,
		19
	],
	"../pages/donatur-login/donatur-login.module": [
		436,
		17
	],
	"../pages/donatur-notifikasi/donatur-notifikasi.module": [
		431,
		16
	],
	"../pages/donatur-profil-edit/donatur-profil-edit.module": [
		429,
		15
	],
	"../pages/donatur-profil/donatur-profil.module": [
		430,
		14
	],
	"../pages/donatur-signup/donatur-signup.module": [
		435,
		13
	],
	"../pages/donatur-uang/donatur-uang.module": [
		432,
		12
	],
	"../pages/lembaga-donasi/lembaga-donasi.module": [
		438,
		11
	],
	"../pages/lembaga-lelang/lembaga-lelang.module": [
		437,
		9
	],
	"../pages/lembaga-lelang2/lembaga-lelang2.module": [
		447,
		10
	],
	"../pages/lembaga-login/lembaga-login.module": [
		445,
		8
	],
	"../pages/lembaga-notifikasi/lembaga-notifikasi.module": [
		440,
		7
	],
	"../pages/lembaga-profil-edit/lembaga-profil-edit.module": [
		441,
		6
	],
	"../pages/lembaga-profil/lembaga-profil.module": [
		442,
		5
	],
	"../pages/lembaga-riwayat/lembaga-riwayat.module": [
		439,
		4
	],
	"../pages/lembaga-signup/lembaga-signup.module": [
		444,
		3
	],
	"../pages/login/login.module": [
		446,
		2
	],
	"../pages/tabs-donatur/tabs-donatur.module": [
		434,
		1
	],
	"../pages/tabs-lembaga/tabs-lembaga.module": [
		443,
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
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembagaLelang2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LembagaLelang2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LembagaLelang2Page = (function () {
    function LembagaLelang2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LembagaLelang2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LembagaLelang2Page');
    };
    return LembagaLelang2Page;
}());
LembagaLelang2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lembaga-lelang2',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-lelang2\lembaga-lelang2.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>LembagaLelang2</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\lembaga-lelang2\lembaga-lelang2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LembagaLelang2Page);

//# sourceMappingURL=lembaga-lelang2.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_lembaga_tabs_lembaga__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_donatur_tabs_donatur__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_donatur_login_donatur_login__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_donatur_home_donatur_home__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_donatur_home2_donatur_home2__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_donatur_list_donatur_list__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_donatur_list2_donatur_list2__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_donatur_profil_donatur_profil__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_donatur_profil_edit_donatur_profil_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_donatur_sumbang_donatur_sumbang__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_donatur_signup_donatur_signup__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_donatur_uang_donatur_uang__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_donatur_barang_donatur_barang__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_donatur_notifikasi_donatur_notifikasi__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lembaga_login_lembaga_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_lembaga_lelang_lembaga_lelang__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_lembaga_lelang2_lembaga_lelang2__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_lembaga_notifikasi_lembaga_notifikasi__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_lembaga_profil_lembaga_profil__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_lembaga_profil_edit_lembaga_profil_edit__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_lembaga_signup_lembaga_signup__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_lembaga_donasi_lembaga_donasi__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_lembaga_riwayat_lembaga_riwayat__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { SuperTabsModule } from '../ionic2-super-tabs/src';





var firebaseConfig = {
    apiKey: "AIzaSyB1kvSkJn1s5B_EUMXPqCHflbkMG8aNWMk",
    authDomain: "test-627c2.firebaseapp.com",
    databaseURL: "https://test-627c2.firebaseio.com",
    projectId: "test-627c2",
    storageBucket: "test-627c2.appspot.com",
    messagingSenderId: "970304330253"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_donatur_home_donatur_home__["a" /* DonaturHomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_donatur_home2_donatur_home2__["a" /* DonaturHome2Page */],
            __WEBPACK_IMPORTED_MODULE_8__pages_donatur_login_donatur_login__["a" /* DonaturLoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_donatur_list_donatur_list__["a" /* DonaturListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_donatur_list2_donatur_list2__["a" /* DonaturList2Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_donatur_profil_donatur_profil__["a" /* DonaturProfilPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_donatur_profil_edit_donatur_profil_edit__["a" /* DonaturProfilEditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_donatur_sumbang_donatur_sumbang__["a" /* DonaturSumbangPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_donatur_signup_donatur_signup__["a" /* DonaturSignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_donatur_uang_donatur_uang__["a" /* DonaturUangPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_donatur_barang_donatur_barang__["a" /* DonaturBarangPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_donatur_notifikasi_donatur_notifikasi__["a" /* DonaturNotifikasiPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_donatur_sumbang_donatur_sumbang__["b" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_lembaga_login_lembaga_login__["a" /* LembagaLoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_lembaga_lelang_lembaga_lelang__["a" /* LembagaLelangPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_lembaga_lelang2_lembaga_lelang2__["a" /* LembagaLelang2Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_lembaga_notifikasi_lembaga_notifikasi__["a" /* LembagaNotifikasiPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_lembaga_profil_lembaga_profil__["a" /* LembagaProfilPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_lembaga_profil_edit_lembaga_profil_edit__["a" /* LembagaProfilEditPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_lembaga_signup_lembaga_signup__["a" /* LembagaSignupPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_lembaga_donasi_lembaga_donasi__["a" /* LembagaDonasiPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_lembaga_riwayat_lembaga_riwayat__["a" /* LembagaRiwayatPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_donatur_tabs_donatur__["a" /* TabsDonaturPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_lembaga_tabs_lembaga__["a" /* TabsLembagaPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/donatur-home2/donatur-home2.module#DonaturHome2PageModule', name: 'DonaturHome2Page', segment: 'donatur-home2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-home/donatur-home.module#DonaturHomePageModule', name: 'DonaturHomePage', segment: 'donatur-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-list2/donatur-list2.module#DonaturList2PageModule', name: 'DonaturList2Page', segment: 'donatur-list2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-list/donatur-list.module#DonaturListPageModule', name: 'DonaturListPage', segment: 'donatur-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-profil-edit/donatur-profil-edit.module#DonaturProfilEditPageModule', name: 'DonaturProfilEditPage', segment: 'donatur-profil-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-profil/donatur-profil.module#DonaturProfilPageModule', name: 'DonaturProfilPage', segment: 'donatur-profil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-notifikasi/donatur-notifikasi.module#DonaturNotifikasiPageModule', name: 'DonaturNotifikasiPage', segment: 'donatur-notifikasi', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-uang/donatur-uang.module#DonaturUangPageModule', name: 'DonaturUangPage', segment: 'donatur-uang', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-barang/donatur-barang.module#DonaturBarangPageModule', name: 'DonaturBarangPage', segment: 'donatur-barang', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs-donatur/tabs-donatur.module#TabsDonaturPageModule', name: 'TabsDonaturPage', segment: 'tabs-donatur', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-signup/donatur-signup.module#DonaturSignupPageModule', name: 'DonaturSignupPage', segment: 'donatur-signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donatur-login/donatur-login.module#DonaturLoginPageModule', name: 'DonaturLoginPage', segment: 'donatur-login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-lelang/lembaga-lelang.module#LembagaLelangPageModule', name: 'LembagaLelangPage', segment: 'lembaga-lelang', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-donasi/lembaga-donasi.module#LembagaDonasiPageModule', name: 'LembagaDonasiPage', segment: 'lembaga-donasi', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-riwayat/lembaga-riwayat.module#LembagaRiwayatPageModule', name: 'LembagaRiwayatPage', segment: 'lembaga-riwayat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-notifikasi/lembaga-notifikasi.module#LembagaNotifikasiPageModule', name: 'LembagaNotifikasiPage', segment: 'lembaga-notifikasi', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-profil-edit/lembaga-profil-edit.module#LembagaProfilEditPageModule', name: 'LembagaProfilEditPage', segment: 'lembaga-profil-edit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-profil/lembaga-profil.module#LembagaProfilPageModule', name: 'LembagaProfilPage', segment: 'lembaga-profil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs-lembaga/tabs-lembaga.module#TabsLembagaPageModule', name: 'TabsLembagaPage', segment: 'tabs-lembaga', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-signup/lembaga-signup.module#LembagaSignupPageModule', name: 'LembagaSignupPage', segment: 'lembaga-signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-login/lembaga-login.module#LembagaLoginPageModule', name: 'LembagaLoginPage', segment: 'lembaga-login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lembaga-lelang2/lembaga-lelang2.module#LembagaLelang2PageModule', name: 'LembagaLelang2Page', segment: 'lembaga-lelang2', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_31_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_32_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_donatur_home_donatur_home__["a" /* DonaturHomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_donatur_home2_donatur_home2__["a" /* DonaturHome2Page */],
            __WEBPACK_IMPORTED_MODULE_8__pages_donatur_login_donatur_login__["a" /* DonaturLoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_donatur_list_donatur_list__["a" /* DonaturListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_donatur_list2_donatur_list2__["a" /* DonaturList2Page */],
            __WEBPACK_IMPORTED_MODULE_13__pages_donatur_profil_donatur_profil__["a" /* DonaturProfilPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_donatur_profil_edit_donatur_profil_edit__["a" /* DonaturProfilEditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_donatur_sumbang_donatur_sumbang__["a" /* DonaturSumbangPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_donatur_signup_donatur_signup__["a" /* DonaturSignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_donatur_uang_donatur_uang__["a" /* DonaturUangPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_donatur_barang_donatur_barang__["a" /* DonaturBarangPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_donatur_notifikasi_donatur_notifikasi__["a" /* DonaturNotifikasiPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_donatur_sumbang_donatur_sumbang__["b" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_lembaga_login_lembaga_login__["a" /* LembagaLoginPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_lembaga_lelang_lembaga_lelang__["a" /* LembagaLelangPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_lembaga_lelang2_lembaga_lelang2__["a" /* LembagaLelang2Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_lembaga_notifikasi_lembaga_notifikasi__["a" /* LembagaNotifikasiPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_lembaga_profil_lembaga_profil__["a" /* LembagaProfilPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_lembaga_profil_edit_lembaga_profil_edit__["a" /* LembagaProfilEditPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_lembaga_signup_lembaga_signup__["a" /* LembagaSignupPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_lembaga_donasi_lembaga_donasi__["a" /* LembagaDonasiPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_lembaga_riwayat_lembaga_riwayat__["a" /* LembagaRiwayatPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_donatur_tabs_donatur__["a" /* TabsDonaturPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_lembaga_tabs_lembaga__["a" /* TabsLembagaPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(424);
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
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonaturProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_profil_edit_donatur_profil_edit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DonaturProfilPage = (function () {
    function DonaturProfilPage(fireauth, firedata, navCtrl, navParams, alertCtrl, app) {
        var _this = this;
        this.fireauth = fireauth;
        this.firedata = firedata;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        var user = this.fireauth.auth.currentUser;
        var donatur = this.firedata.object('/donatur/' + user.uid).subscribe(function (data) {
            _this.name = data.name;
            _this.email = data.email;
            _this.telephone = data.telephone;
            _this.address = data.address;
        });
        // this.name=donatur.name.value;      
    }
    DonaturProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonaturProfilPage');
    };
    DonaturProfilPage.prototype.editProfil = function () {
        // untuk push page dengan tabs dihide
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__donatur_profil_edit_donatur_profil_edit__["a" /* DonaturProfilEditPage */]);
    };
    DonaturProfilPage.prototype.logOut = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Apakah Anda Yakin?',
            subTitle: 'Keluar dari akun akan menghapus semua data yang belum tersimpan.',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                        // this.navCtrl.setRoot(MyApp);
                        _this.fireauth.auth.signOut;
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]);
                        // ,
                        // this.data.logout();
                        // this.app.getRootNav().setRoot(MyApp);
                    }
                }
            ]
        });
        confirm.present();
    };
    return DonaturProfilPage;
}());
DonaturProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-donatur-profil',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-profil\donatur-profil.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="AyoDermawan">\n\n    <ion-title text-center>AyoDermawan</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/pict/Profil.png" class="Pict"/>\n\n  \n\n  <ion-item padding-right>\n\n    <p class="Nama">{{name}}</p>\n\n  </ion-item>\n\n\n\n  <ion-item padding-right>\n\n	  <ion-icon name="mail" item-left class="IconMail"></ion-icon>\n\n	  <p class="Head">Email</p>\n\n	  <p class="Konten">{{email}}</p>\n\n	</ion-item>\n\n  <ion-item padding-right>\n\n	  <ion-icon name="call" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Nomor Telepon</p>\n\n	  <p class="Konten">{{telephone}}</p>\n\n	</ion-item>\n\n  <ion-item padding-right>\n\n	  <ion-icon name="md-map" item-left class="Icon"></ion-icon>\n\n	  <p class="Head">Alamat</p>\n\n	  <p class="Konten">{{address}}</p>\n\n	</ion-item>\n\n\n\n  <ion-item padding-left-right>\n\n    <button class=\'Button\' color="AyoDermawan" ion-button block (click)=\'editProfil()\'><p class="ButtonWordWhite">Sunting Profil</p></button>\n\n    <button class=\'Button\' color="danger" ion-button outline block (click)=\'logOut()\'><p class="ButtonWordBlack">Keluar Akun</p></button>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\donatur-profil\donatur-profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], DonaturProfilPage);

//# sourceMappingURL=donatur-profil.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsDonaturPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatur_home_donatur_home__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__donatur_list_donatur_list__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__donatur_profil_donatur_profil__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donatur_notifikasi_donatur_notifikasi__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__donatur_sumbang_donatur_sumbang__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsDonaturPage = (function () {
    function TabsDonaturPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__donatur_home_donatur_home__["a" /* DonaturHomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__donatur_list_donatur_list__["a" /* DonaturListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__donatur_sumbang_donatur_sumbang__["a" /* DonaturSumbangPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__donatur_notifikasi_donatur_notifikasi__["a" /* DonaturNotifikasiPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__donatur_profil_donatur_profil__["a" /* DonaturProfilPage */];
    }
    return TabsDonaturPage;
}());
TabsDonaturPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs-donatur',template:/*ion-inline-start:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\tabs-donatur\tabs-donatur.html"*/'<ion-tabs color="AyoDermawan">\n\n\n\n  <ion-tab tabIcon="ios-trending-up"  [root]="tab1Root"></ion-tab>\n\n  <ion-tab tabIcon="ios-people"  [root]="tab2Root"></ion-tab>\n\n  <ion-tab tabIcon="ios-add-circle"  [root]="tab3Root"></ion-tab>\n\n  <ion-tab tabIcon="ios-notifications"  [root]="tab4Root"></ion-tab>\n\n  <ion-tab tabIcon="ios-person"  [root]="tab5Root"></ion-tab>\n\n\n\n</ion-tabs>\n\n\n\n'/*ion-inline-end:"C:\Users\NuhSat\Documents\HVS\AyoDermawan-Firebase-\src\pages\tabs-donatur\tabs-donatur.html"*/,
    }),
    __metadata("design:paramtypes", [])
], TabsDonaturPage);

//# sourceMappingURL=tabs-donatur.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map