webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.specs = [];
        this.model = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
        this.year = new Date().getFullYear();
        this.specs = [
            {
                title: 'NUMERO COURT',
                subTitle: 'Paragraphe.Cliquez ici pour ajouter votre propre texte.'
            },
            {
                title: 'SOLUTION PAIEMENT',
                subTitle: 'Paragraphe.Cliquez ici pour ajouter votre propre texte.'
            },
            {
                title: 'USSD',
                subTitle: 'Paragraphe.Cliquez ici pour ajouter votre propre texte.'
            },
            {
                title: 'INTEGRATION',
                subTitle: 'Paragraphe.Cliquez ici pour ajouter votre propre texte.'
            }
        ];
    }
    HomePage.prototype.onClick = function (id) {
        var element;
        if (id == 'accueil')
            element = this.accueil.nativeElement;
        else if (id == 'contact')
            element = this.contact.nativeElement;
        else if (id == 'vision')
            element = this.vision.nativeElement;
        else if (id == 'speciality')
            element = this.speciality.nativeElement;
        if (element) {
            this.content.scrollTo(0.0, element.offsetTop, 1000);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('contact'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "contact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('vision'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "vision", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('accueil'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "accueil", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('speciality'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "speciality", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/e-services/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button icon-only menuToggle class="smaller">\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <!-- <img src="assets/imgs/world.png" alt="" class="logo"> -->E-Services\n        </ion-title>\n        <ion-buttons end class="larger">\n            <a ion-button (click)="onClick(\'accueil\')">Accueil</a>\n        </ion-buttons>\n        <ion-buttons end class="larger">\n            <a ion-button (click)="onClick(\'speciality\')">Spécialités</a>\n        </ion-buttons>\n        <ion-buttons end class="larger">\n            <a ion-button (click)="onClick(\'vision\')">Notre vision</a>\n        </ion-buttons>\n        <ion-buttons end class="larger">\n            <a ion-button (click)="onClick(\'contact\')">Contact</a>\n        </ion-buttons>\n        <ion-buttons end>\n            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding no-margin #content>\n    <header no-padding no-margin id="accueil" #accueil>\n        <ion-grid no-padding no-margin>\n            <ion-row no-padding no-margin>\n                <ion-col col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 class="branding" text-center>\n                    <div class="branding-content">\n                        <h2>\n                            Cabinet d\'E-services\n                        </h2>\n                        <h4>\n                            Numéro court ,solution tech. mobile\n                        </h4>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </header>\n    <ion-grid no-padding no-margin id="speciality" #speciality>\n        <ion-row class="speciality" no-padding no-margin>\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 class="left-panel">\n                <div text-center>\n                    <h2 class="font_2">\n                        <span style="font-weight:bold;">NOS</span>\n                    </h2>\n\n                    <h2 class="font_2">SPÉCIALITÉS</h2>\n                </div>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8 class="right-panel" padding>\n                <ion-row margin padding>\n                    <ion-col *ngFor="let spec of specs" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center padding>\n                        <span class="list-type"></span> <strong>{{spec.title}}</strong>\n                        <p>\n                            <span>{{spec.subTitle}}</span>\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div id="vision" no-margin padding #vision>\n        <div text-center padding>\n            <p class="font_2" style="font-weight: bold;">\n                <span style="font-weight:bold;">NOTRE </span>\n                <span>VISION</span>\n            </p>\n        </div>\n        <p text-center padding style="margin:0;">\n            Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur "Modifier Texte" ou double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Relatez ici votre parcours et présentez votre activité à vos visiteurs. <br><br><br>            ​ Présentez votre entreprise, vos services et vos équipes. Utilisez cet espace pour décrire votre activité. Présentez votre équipe et les services proposés. Expliquez à vos visiteurs vos motivations, vos objectifs et soulignez vos avantages\n            par rapport à vos Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur "Modifier Texte" ou double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Relatez ici votre parcours et présentez votre activité à\n            vos visiteurs.\n            <br><br><br> ​ Présentez votre concurrents. Démarquez-vous et captivez l\'attention de vos visiteurs. ​ Chez Wix, nous sommes fiers de mettre à votre disposition des templates qui vous permettront de créer de magnifiques sites. Nos échanges\n            avec notre communauté d\'utilisateurs nous ont permis de vous proposer un choix varié de templates. Tenez-vous informé des fonctionnalités à venir dans la section "Général" de l\'assistance.\n        </p>\n    </div>\n    <ion-grid id="contact" padding no-margin class="contact" #contact>\n        <ion-row no-padding no-margin>\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 class="left-panel" style="position: relative;">\n                <div text-center class="title">\n                    <h2 class="font_2">\n                        <span style="font-weight:bold;">CONTACT</span>\n                    </h2>\n\n                    <h2 class="font_2">E-SERVICES</h2>\n                </div>\n            </ion-col>\n            <ion-col col-12 col-sm-12 col-md-12 col-lg-7 col-xl-8 class="right-panel" padding text-center>\n                NOTRE ADRESSE\n                <div>\n                    <p class="font_8" style="line-height:1.5em;" text-center>\n                        <span class="color_11">\n                <span>15, rue dzidzeme,&nbsp;75001 Lomé, TOGO</span>\n                        </span>\n                    </p>\n\n                    <p class="font_8" style="line-height:1.5em;" text-center>\n                        <span class="color_11">\n                <span>\n                  <span style="font-weight:bold;">E-mail :</span>\n                        <object height="0">\n                    <a class="auto-generated-link" data-auto-recognition="true" data-content="info@monsite.fr" href="mailto:info@monsite.fr"\n                      data-type="mail">info@monsite.fr</a>\n                  </object>\n                        <br>\n                        <span style="font-weight:bold;">Tél : </span>&nbsp;01 23 45 67 89</span>\n                        </span>\n                    </p>\n\n                    <p class="font_8" style="line-height:1.5em;">&nbsp;</p>\n\n                </div>\n                <p>\n                    Vous pouvez nous contacter via le formulaire ci-dessous :\n                </p>\n                <ion-item>\n                    <ion-input placeholder="Nom*" [(ngModel)]="model.name" name="name"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input placeholder="Email*" type="email" [(ngModel)]="model.email" name="email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input placeholder="Sujet" [(ngModel)]="model.subject" name="subject"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-textarea placeholder="votre message ..." [(ngModel)]="model.message" name="message"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <button item-end ion-button [disabled]="!model.email || !model.name" padding>\n                     Envoyer\n                  </button>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-toolbar>\n        <ion-title>\n            <span style="font-size: 0.5em">\n              <em>© {{year}}</em>\n            </span>\n        </ion-title>\n        <ion-buttons end>\n            <a ion-button icon-only href="https://linkedin.com" target="_blank">\n                <ion-icon name="logo-linkedin" style="color:#0072b2"></ion-icon>\n            </a>\n        </ion-buttons>\n        <ion-buttons end>\n            <a ion-button icon-only href="https://twitter.com" target="_blank">\n                <ion-icon name="logo-twitter" style="color:#55acee"></ion-icon>\n            </a>\n        </ion-buttons>\n        <ion-buttons end>\n            <a ion-button icon-only href="https://plus.google.com/" target="_blank">\n                <ion-icon name="logo-googleplus" style="color:#dd4b39"></ion-icon>\n            </a>\n        </ion-buttons>\n        <ion-buttons end>\n            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-content>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/e-services/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
    }
    MyApp.prototype.onClick = function (id) {
        //console.log(this.contact.nativeElement.scrollHeight);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andre/Documents/projetsIonic/e-services/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n    <ion-list no-lines>\n        <a ion-button (click)="onClick(\'accueil\')">Accueil</a>\n\n\n        <a ion-button (click)="onClick(\'speciality\')">Spécialités</a>\n\n\n        <a ion-button (click)="onClick(\'vision\')">Notre vision</a>\n\n        <a ion-button (click)="onClick(\'contact\')">Contact</a>\n\n    </ion-list>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"/home/andre/Documents/projetsIonic/e-services/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map