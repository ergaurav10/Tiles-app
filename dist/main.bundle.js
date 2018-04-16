webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../tiles-display-wall/tiles-display-wall.module": [
		"../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.module.ts",
		"tiles-display-wall.module"
	],
	"../tiles-stock/tiles-stock.module": [
		"../../../../../src/app/tools/tiles-stock/tiles-stock.module.ts",
		"tiles-stock.module"
	],
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		"auth.module"
	],
	"./tools/tile-size/tile-size.module": [
		"../../../../../src/app/tools/tile-size/tile-size.module.ts",
		"tile-size.module"
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
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <app-header></app-header>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_tile_edit_tile_component__ = __webpack_require__("../../../../../src/app/edit-tile/edit-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_tile_edit_tile_component__["a" /* EditTileComponent */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileDropDirective"],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_tile_edit_tile_component__ = __webpack_require__("../../../../../src/app/edit-tile/edit-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__core_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'tiles', loadChildren: './tools/tile-size/tile-size.module#TileSizeModule' },
    { path: 'edittile/:_id', component: __WEBPACK_IMPORTED_MODULE_3__edit_tile_edit_tile_component__["a" /* EditTileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })
            ],
            declarations: [],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/signin']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
    }
    AuthService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthService.prototype.setUser = function (user) {
        this.user = user;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.signupUser = function (email, password) {
        return this.httpClient.post('/users', { email: email, password: password }, { observe: 'response' });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var result = true;
        return this.httpClient.post('/users/login', { email: email, password: password }, { observe: 'response' });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        console.log('logout');
        this.httpClient.delete('/users/logout', {
            observe: 'response',
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().append('x-auth', this.token)
        })
            .subscribe(function (response) {
            _this.token = null;
            _this.user = null;
        }, function (error) {
            console.log(error);
        });
    };
    AuthService.prototype.getTokenFromServer = function () {
        var _this = this;
        console.log('getToken token before DB: ', this.token);
        this.httpClient.get('/users/me', {
            observe: 'response',
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().append('x-auth', this.token)
        })
            .subscribe(function (response) {
            _this.token = response.headers.get('x-auth');
            _this.user = response.body;
            console.log('getToken : ', _this.user);
        }, function (error) {
            console.log(error);
        });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_shared_shared_module__ = __webpack_require__("../../../../../src/app/tools/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tools_services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tools_services_tile_size_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_services_data_storage_service__ = __webpack_require__("../../../../../src/app/tools/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__tools_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__tools_services_tile_select_service__["a" /* TileSelectService */],
                __WEBPACK_IMPORTED_MODULE_7__tools_services_tile_size_service__["a" /* TileSizeService */],
                __WEBPACK_IMPORTED_MODULE_8__tools_services_data_storage_service__["a" /* DataStorageService */],
                __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\" style=\"cursor: pointer\" >Learning Tiles App</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\"\n          style=\"cursor: pointer\">\n            <a routerLink=\"/\">Home</a>\n        </li>\n        <li\n          routerLinkActive=\"active\"\n          style=\"cursor: pointer\">\n            <a routerLink=\"/tiles/walldisplay\">Wall Design</a>\n        </li>\n        <li\n          routerLinkActive=\"active\"\n          style=\"cursor: pointer\">\n            <a routerLink=\"/tiles/tilesstock\">Tiles Stock</a>\n        </li>\n        <li\n          routerLinkActive=\"active\"\n          style=\"cursor: pointer\">\n            <a routerLink=\"/edittile/0\">Edit Tiles</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"></a></li>\n        <ng-template [ngIf]=\"!isAuthenticated()\">\n          <li><a style=\"cursor:pointer\" routerLink=\"/signup\">Register</a></li>\n          <li><a style=\"cursor:pointer\" routerLink=\"/signin\">Login</a></li>\n        </ng-template>\n        <li><a style=\"cursor:pointer\" *ngIf=\"isAuthenticated()\" (click)=\"onlogOut()\" >Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router, authService, tileService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.tileService = tileService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onlogOut = function () {
        this.tileService.resetTilesList();
        this.authService.logout();
        this.router.navigate(['/signin']);
    };
    HeaderComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/core/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__tools_services_tile_select_service__["a" /* TileSelectService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-2\">\n      <a style=\"cursor: pointer\"\n      [routerLink]=\"['/walldisplay']\">\n        Wall Design</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-tile/edit-tile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-tile/edit-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-4\">\n    <form [formGroup] = \"tileForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div id=\"fileRequired\" [hidden]=\"!fileRequired\" class=\"alert alert-warning\" role=\"alert\">\n            Please select at least one file!\n          </div>\n          <button\n            type=\"submit\"\n            class=\"btn btn-success\"\n            [disabled] =\"!tileForm.valid\">\n            {{ editMode ? 'Edit' : 'Add' }}\n          </button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\">\n            Cancel\n          </button>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              formControlName=\"name\"\n              class=\"form-control\">\n              <input\n                type=\"hidden\"\n                id=\"_id\"\n                formControlName=\"_id\"\n                class=\"form-control\">\n              <input\n                type=\"hidden\"\n                id=\"_userid\"\n                formControlName=\"_userid\"\n                class=\"form-control\">\n              <input\n                type=\"hidden\"\n                id=\"path\"\n                formControlName=\"path\"\n                class=\"form-control\">\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!editMode\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"single\">Tile</label>\n            <input type=\"file\" class=\"form-control\" name=\"single\" id=\"single\" ng2FileSelect [uploader]=\"uploader\" (click)=\"clearFileField($event)\"/>\n          </div>\n          <div id=\"maxSizeWarning\" [hidden]=\"!maxSizeWarning\" class=\"alert alert-warning\" role=\"alert\" >\n            File size should not be less more then 300KB!\n          </div>\n          <div id=\"fileExtensionWarning\" [hidden]=\"!fileExtensionWarning\" class=\"alert alert-warning\" role=\"alert\">\n            You can only save the file as an PNG, JPG or GIF format!\n          </div>\n          <br />\n          <!-- <button type=\"button\" class=\"btn btn-success btn-s\"\n            (click)=\"onUploadFile()\" [disabled]=\"!uploader.getNotUploadedItems().length \">\n            <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n          </button><br /> -->\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"size\">Size</label>\n            <select class=\"form-control\" name=\"size\"\n              id=\"size\" formControlName=\"size\">\n              <option\n                *ngFor=\"let tileSize of tileSizes; let i = index;\"\n                [value]= \"i\" >{{tileSize.name}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"availability\">Availability</label>\n            <div class=\"radio\">\n              <label>\n                <input type=\"radio\"\n                  name=\"availability\"\n                  formControlName=\"availability\"\n                  value='Yes'>\n                Yes\n              </label>\n            </div>\n            <div class=\"radio\">\n              <label>\n                <input type=\"radio\"\n                  name=\"availability\"\n                  formControlName=\"availability\"\n                  value='No'>\n                No\n              </label>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea\n              type=\"text\"\n              id=\"description\"\n              class=\"form-control\"\n              formControlName=\"description\"\n              rows=\"4\"></textarea>\n          </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n  <div class=\"col-xs-4\" *ngIf=\"editMode\">\n    <img\n      [src]=\"tilesFolderPath + selectedTile.path\"\n      alt=\"{{ selectedTile.name }}\"\n      class=\"img-responsive\"\n      style=\"max-height: 150px;\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-tile/edit-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_services_tile_size_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditTileComponent = /** @class */ (function () {
    function EditTileComponent(route, router, tileSizeService, tileService, authService) {
        this.route = route;
        this.router = router;
        this.tileSizeService = tileSizeService;
        this.tileService = tileService;
        this.authService = authService;
        this.editMode = false;
        this.fileExtensionWarning = false;
        this.maxSizeWarning = false;
        this.fileRequired = false;
        this.tilesFolderPath = '';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({}); // --fs
    }
    EditTileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tileSizes = this.tileSizeService.getTilesSize();
        this.tilesFolderPath = this.tileService.tilesFolderPath;
        this.route.params
            .subscribe(function (params) {
            _this._id = params['_id'];
            _this.editMode = params['_id'] !== '0';
            var user = _this.authService.getUser();
            if (user && user._id) {
                _this._userid = user._id;
            }
            _this.initForm();
        });
    };
    EditTileComponent.prototype.initForm = function () {
        var tileName = '';
        var tileSize = '';
        var tileDescription = '';
        var tileAvailability = 'Yes';
        var tilepath = '';
        if (this.editMode) {
            // Get selected tile
            this.selectedTile = this.tileService.getTileByID(this._id);
            tileName = this.selectedTile.name;
            tileSize = this.tileSizeService.getSizeIndexByDimension(this.selectedTile.width, this.selectedTile.height).toString();
            tileDescription = this.selectedTile.description;
            tileAvailability = this.selectedTile.availability;
            tilepath = this.selectedTile.path;
        }
        this.tileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            '_id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this._id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](tileName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'size': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](tileSize, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](tileDescription),
            'availability': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](tileAvailability),
            'path': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](tilepath),
            '_userid': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](this._userid),
        });
    };
    EditTileComponent.prototype.onCancel = function () {
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    EditTileComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.tileService.updateTile(this._id, this.tileForm.value);
        }
        else {
            this.onUploadFile();
        }
        this.onCancel();
    };
    EditTileComponent.prototype.onUploadFile = function () {
        var _this = this;
        if (this.onUploadValidateFile()) {
            // this.uploader.setOptions({url: 'http://localhost:3000/upload/' + this.tileForm.value.name});
            this.uploader.setOptions({ url: 'https://guarded-cove-17160.herokuapp.com/upload/' + this.tileForm.value.name });
            this.uploader.uploadAll();
            this.uploader.response.subscribe(function (res) {
                var res1 = JSON.parse(res);
                if (res1) {
                    if (res1.error_code === 0) {
                        _this.tileForm.value.path = res1.file_name;
                        // Store form values in table
                        _this.tileService.addTile(_this.tileForm.value);
                    }
                    else {
                        alert('Error on Upload file: ' + res1.err_desc);
                    }
                }
                return res;
            });
        }
    };
    EditTileComponent.prototype.onUploadValidateFile = function () {
        this.maxSizeWarning = false;
        this.fileExtensionWarning = false;
        var allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
        var fileExt = '';
        if (this.uploader.getNotUploadedItems().length > 0) {
            fileExt = this.uploader.queue[0].file.name.split('.').pop();
            // Check the max size of file
            if (this.uploader.queue[0].file.size > 300000) {
                this.maxSizeWarning = true;
            }
            // Check the allowable file extension
            var foundExt = allowedExtensions.find(function (ext) {
                return ext === fileExt.toLowerCase();
            });
            if (typeof (foundExt) === 'undefined') {
                this.fileExtensionWarning = true;
            }
            if (this.maxSizeWarning || this.fileExtensionWarning) {
                this.uploader.clearQueue();
                return false;
            }
            else {
                return true;
            }
        }
        else {
            this.fileRequired = true;
            return false;
        }
    };
    EditTileComponent.prototype.clearFileField = function (event) {
        this.uploader.clearQueue();
    };
    EditTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-tile',
            template: __webpack_require__("../../../../../src/app/edit-tile/edit-tile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-tile/edit-tile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__tools_services_tile_size_service__["a" /* TileSizeService */],
            __WEBPACK_IMPORTED_MODULE_4__tools_services_tile_select_service__["a" /* TileSelectService */],
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */]])
    ], EditTileComponent);
    return EditTileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/services/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/Rx';
var DataStorageService = /** @class */ (function () {
    function DataStorageService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    DataStorageService.prototype.storeTile = function (tile) {
        var token = this.authService.getToken();
        return this.httpClient.post('/api/tile?', tile, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('x-auth', token)
        });
    };
    DataStorageService.prototype.updateTileOnDB = function (_id, tile) {
        var token = this.authService.getToken();
        return this.httpClient.patch('/api/tile/' + _id, tile, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('x-auth', token)
        });
    };
    DataStorageService.prototype.getTilesListData = function () {
        var token = this.authService.getToken();
        return this.httpClient.get('/api/tileslist?', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().append('x-auth', token)
        });
    };
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/tools/services/tile-select.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileSelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tile_model__ = __webpack_require__("../../../../../src/app/tools/shared/tile.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_size_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_storage_service__ = __webpack_require__("../../../../../src/app/tools/services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TileSelectService = /** @class */ (function () {
    function TileSelectService(tileSizeService, dataService) {
        this.tileSizeService = tileSizeService;
        this.dataService = dataService;
        // For informing the change in elected tile to others
        this.selectedTileChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.tiles = [];
        this.tilesFolderPath = '../../../../assets/uploads/';
    }
    // Get full list of available tiles
    TileSelectService.prototype.getAvailableTiles = function () {
        return this.tiles.slice();
    };
    // Reset full list of available tiles
    TileSelectService.prototype.resetTilesList = function () {
        this.tiles = [];
    };
    //  Get availabele tiles list based on size
    TileSelectService.prototype.getTilesBySize = function (width, height) {
        this.selectedTiles = this.tiles.filter(function (tile) {
            if (tile.width === width && tile.height === height) {
                return tile;
            }
        }).slice();
        return this.selectedTiles;
    };
    // Set the currently selected tile and emit the change to inform others
    TileSelectService.prototype.setSelectedTile = function (tileSelected, classRotate) {
        if (classRotate === void 0) { classRotate = '0deg'; }
        this.selectedTile = tileSelected;
        this.selectedTileChanged.next({ tile: this.selectedTile, rotatedByClass: classRotate });
    };
    // Get the currently selected tile
    TileSelectService.prototype.getSelectedTile = function () {
        return this.selectedTile;
    };
    //  Get tiles by ID
    TileSelectService.prototype.getTileByID = function (_id) {
        return this.tiles.find(function (tile) {
            return tile._id === _id;
        });
    };
    TileSelectService.prototype.fetchTilesListFromDatabase = function () {
        var _this = this;
        this.dataService.getTilesListData()
            .subscribe(function (tilesList) {
            _this.tiles = tilesList;
        });
    };
    // Create a Tile Object for Saving and updating tile
    TileSelectService.prototype.createTileObject = function (tileDetails) {
        var tilesize = this.tileSizeService.getTilesSizeById(+tileDetails.size);
        var tile = new __WEBPACK_IMPORTED_MODULE_2__shared_tile_model__["a" /* Tile */](tileDetails._id, tileDetails.name, tilesize.width, tilesize.height, tileDetails.path, tileDetails._userid, tileDetails.description, tileDetails.availability);
        return tile;
    };
    // Add New tile details
    TileSelectService.prototype.addTile = function (tileDetails) {
        var _this = this;
        var tile = this.createTileObject(tileDetails);
        //  Published the changes
        this.dataService.storeTile(tile)
            .subscribe(function (tile1) {
            console.log(tile1);
            // Add the new Tile in the list
            _this.tiles.push(tile1);
            console.log(_this.tiles);
        });
    };
    TileSelectService.prototype.updateTile = function (_id, tileDetails) {
        var _this = this;
        var tile = this.createTileObject(tileDetails);
        var index = this.tiles.findIndex(function (this_tile) {
            return this_tile._id === _id;
        });
        // Updated the new Tile in the list
        this.tiles[index] = tile;
        this.dataService.updateTileOnDB(_id, tile)
            .subscribe(function (updatedTile) {
            console.log('updateTileOnDB', updatedTile);
            _this.tiles[index] = updatedTile.tile;
            // Update the Tile in the list
            console.log(_this.tiles);
        });
        // //  Published the changes
    };
    TileSelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__tile_size_service__["a" /* TileSizeService */],
            __WEBPACK_IMPORTED_MODULE_4__data_storage_service__["a" /* DataStorageService */]])
    ], TileSelectService);
    return TileSelectService;
}());



/***/ }),

/***/ "../../../../../src/app/tools/services/tile-size.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileSizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__ = __webpack_require__("../../../../../src/app/tools/shared/tile-size.model.ts");

var TileSizeService = /** @class */ (function () {
    function TileSizeService() {
        this.wallWidth = 600;
        this.wallHeight = 600;
        this.tileSizes = [
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('24 X 24', 24, 24),
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('12 X 18', 12, 18),
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('18 X 12', 18, 12),
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('12 X 12', 12, 12),
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('10 X 15', 10, 15),
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('10 X 13', 10, 13),
            new __WEBPACK_IMPORTED_MODULE_0__shared_tile_size_model__["a" /* TileSize */]('12 X 8', 12, 8),
        ];
    }
    // Get full list of available tiles size
    TileSizeService.prototype.getTilesSize = function () {
        return this.tileSizes.slice();
    };
    //  Get availabele tiles size by ID
    TileSizeService.prototype.getTilesSizeById = function (id) {
        return this.tileSizes[id];
    };
    //  Get tiles size Index by Dimension
    TileSizeService.prototype.getSizeIndexByDimension = function (width, height) {
        return this.tileSizes.findIndex(function (size) {
            return size.height === height && size.width === width;
        });
    };
    // Get Wall  size
    TileSizeService.prototype.getWallSize = function () {
        return { 'wallWidth': this.wallWidth, 'wallHeight': this.wallHeight };
    };
    // Set Wall size
    TileSizeService.prototype.setWallSize = function (wallWidth, wallHeight) {
        this.wallWidth = wallWidth * 60;
        this.wallHeight = wallHeight * 60;
    };
    TileSizeService.prototype.getRowWidth = function (originalWidth) {
        return (originalWidth * 5);
    };
    TileSizeService.prototype.getRowHeight = function (originalHeight) {
        return (originalHeight * 5);
    };
    TileSizeService.prototype.getRowCount = function (originalHeight) {
        return (this.wallHeight / (this.getRowHeight(originalHeight)));
    };
    TileSizeService.prototype.getColumnCount = function (originalWidth) {
        return (this.wallWidth / (this.getRowWidth(originalWidth)));
    };
    return TileSizeService;
}());



/***/ }),

/***/ "../../../../../src/app/tools/shared/display-selected-tile.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplaySelectedTileDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplaySelectedTileDirective = /** @class */ (function () {
    function DisplaySelectedTileDirective(elRef, renderer, tileService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.tileService = tileService;
        this.tilesFolderPath = '';
    }
    DisplaySelectedTileDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTile = this.tileService.getSelectedTile();
        this.tilesFolderPath = this.tileService.tilesFolderPath;
        this.tileChangedSubscription = this.tileService.selectedTileChanged
            .subscribe(function (tileUpdate) {
            _this.selectedTile = tileUpdate.tile;
            _this.rotatedByClass = tileUpdate.rotatedByClass;
        });
    };
    // set the background for tile
    DisplaySelectedTileDirective.prototype.changeTile = function () {
        this.spanHeight = this.elRef.nativeElement.clientHeight;
        this.spanWidth = this.elRef.nativeElement.clientWidth;
        if (this.selectedTile) {
            this.renderer.setAttribute(this.elRef.nativeElement.children[0], 'src', this.tilesFolderPath + this.selectedTile.path);
            this.renderer.setStyle(this.elRef.nativeElement.children[0], 'transform', 'rotate(' + this.rotatedByClass + ')');
            this.setTranformOriginStyle(this.elRef.nativeElement.children[0], this.spanWidth, this.spanHeight);
        }
    };
    // set the background for complete row
    DisplaySelectedTileDirective.prototype.changeTiles = function () {
        if (this.selectedTile) {
            var tilesInRow = this.renderer
                .parentNode(this.elRef.nativeElement).querySelectorAll('img');
            for (var i = 0; i < tilesInRow.length; i++) {
                tilesInRow[i].setAttribute('src', this.tilesFolderPath + this.selectedTile.path);
                tilesInRow[i].style.transform = 'rotate(' + this.rotatedByClass + ')';
                this.setTranformOriginStyle(tilesInRow[i], this.spanWidth, this.spanHeight);
            }
        }
    };
    DisplaySelectedTileDirective.prototype.setTranformOriginStyle = function (imgElement, width, height) {
        if (this.rotatedByClass === '0deg' || this.rotatedByClass === '180deg') {
            this.renderer.removeStyle(imgElement, 'transform-origin');
        }
        else if (this.rotatedByClass === '90deg') {
            this.transform_origin = width / 2 + 'px ' + width / 2 + 'px';
            this.renderer.setStyle(imgElement, 'transform-origin', this.transform_origin);
        }
        else if (this.rotatedByClass === '270deg') {
            this.transform_origin = height / 2 + 'px ' + height / 2 + 'px';
            this.renderer.setStyle(imgElement, 'transform-origin', this.transform_origin);
        }
    };
    DisplaySelectedTileDirective.prototype.ngOnDestroy = function () {
        this.tileChangedSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DisplaySelectedTileDirective.prototype, "changeTile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dblclick'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DisplaySelectedTileDirective.prototype, "changeTiles", null);
    DisplaySelectedTileDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDisplaySelectedTile]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__services_tile_select_service__["a" /* TileSelectService */]])
    ], DisplaySelectedTileDirective);
    return DisplaySelectedTileDirective;
}());



/***/ }),

/***/ "../../../../../src/app/tools/shared/num-to-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumToArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumToArrayPipe = /** @class */ (function () {
    function NumToArrayPipe() {
    }
    NumToArrayPipe.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    NumToArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'numToArray'
        })
    ], NumToArrayPipe);
    return NumToArrayPipe;
}());



/***/ }),

/***/ "../../../../../src/app/tools/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__num_to_array_pipe__ = __webpack_require__("../../../../../src/app/tools/shared/num-to-array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display_selected_tile_directive__ = __webpack_require__("../../../../../src/app/tools/shared/display-selected-tile.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__num_to_array_pipe__["a" /* NumToArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_3__display_selected_tile_directive__["a" /* DisplaySelectedTileDirective */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__num_to_array_pipe__["a" /* NumToArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_3__display_selected_tile_directive__["a" /* DisplaySelectedTileDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/tools/shared/tile-size.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileSize; });
var TileSize = /** @class */ (function () {
    function TileSize(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }
    return TileSize;
}());



/***/ }),

/***/ "../../../../../src/app/tools/shared/tile.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tile; });
var Tile = /** @class */ (function () {
    function Tile(_id, name, width, height, path, _userid, description, availability) {
        if (description === void 0) { description = ''; }
        if (availability === void 0) { availability = 'Yes'; }
        this._id = _id;
        this.name = name;
        this.width = width;
        this.height = height;
        this.path = path;
        this._userid = _userid;
        this.description = description;
        this.availability = availability;
    }
    return Tile;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map