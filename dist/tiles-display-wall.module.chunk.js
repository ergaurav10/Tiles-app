webpackJsonp(["tiles-display-wall.module"],{

/***/ "../../../../../src/app/tools/tiles-display-wall/tile-row/tile-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bd-border-utils [class^=border] {\n    display: inline-block;\n    width: 5rem;\n    height: 5rem;\n    margin: 0rem;\n    background-color: #f5f5f5;\n    outline: .1px solid gray;\n    line-height: 0;\n}\n\n.bd-bg-colour-utils [class^=border] {\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tile-row/tile-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-border-utils clearfix \">\n  <div class=\"pull-left\">\n    <button type=\"button\"\n      class=\"btn btn-default btn-sm\"\n      (click)=\"toggleCell()\">\n      a\n    </button>\n\n    <button type=\"button\"\n      class=\"btn btn-default btn-sm\"\n      (click)=\"fillRow($event)\">\n      f\n    </button>\n  </div>\n\n  <span style=\"cursor: pointer;\"\n    class=\"border clearfix\"\n    [ngStyle]=\"{'width': width +'px', 'height': height +'px'}\"\n    *ngFor=\"let col of colCount | numToArray\"\n     appDisplaySelectedTile>\n      <img\n      [src]=\"tilesFolderPath + imageAddress\"\n      alt=\"\"\n      class=\"img-responsive\"\n      [ngStyle]=\"{'max-width': widthp +'px', 'max-height': heightp +'px' }\">\n    \n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tile-row/tile-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tile_size_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TileRowComponent = /** @class */ (function () {
    function TileRowComponent(tileSizeService, tileService, renderer) {
        this.tileSizeService = tileSizeService;
        this.tileService = tileService;
        this.renderer = renderer;
        this.tilesFolderPath = '';
        this.isToggled = false;
    }
    TileRowComponent.prototype.ngOnInit = function () {
        this.colCount = this.tileSizeService.getColumnCount(this.originalWidth);
        this.width = this.tileSizeService.getRowWidth(this.originalWidth);
        this.height = this.tileSizeService.getRowHeight(this.originalHeight);
        this.tilesFolderPath = this.tileService.tilesFolderPath;
    };
    TileRowComponent.prototype.toggleCell = function () {
        this.isToggled = !this.isToggled;
        var tempSize = this.width;
        this.width = this.height;
        this.height = tempSize;
        if (this.isToggled) {
            this.colCount = this.tileSizeService.getColumnCount(this.originalHeight);
            this.widthp = this.height;
            this.heightp = this.width;
        }
        else {
            this.colCount = this.tileSizeService.getColumnCount(this.originalWidth);
            this.widthp = this.width;
            this.heightp = this.height;
        }
    };
    TileRowComponent.prototype.fillRow = function (event) {
        var tilesInRow = this.renderer
            .parentNode(this.renderer.parentNode(event.srcElement)).querySelectorAll('img');
        for (var i = 0; i < tilesInRow.length; i++) {
            tilesInRow[i].click();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TileRowComponent.prototype, "originalWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TileRowComponent.prototype, "originalHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TileRowComponent.prototype, "imageAddress", void 0);
    TileRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tile-row',
            template: __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tile-row/tile-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools/tiles-display-wall/tile-row/tile-row.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tile_size_service__["a" /* TileSizeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_tile_select_service__["a" /* TileSelectService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], TileRowComponent);
    return TileRowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container col-sm-9\">\n  <div class=\"row\">\n    <form [formGroup] = \"wallSizeForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"row\">\n\n        <div class=\"form-group  col-sm-3\">\n          <label for=\"wallWidth\">Wall Width (ft)</label>\n            <select class=\"form-control\"\n              name=\"wallWidth\"\n              id=\"wallWidth\"\n              formControlName=\"wallWidth\">\n              <option\n                *ngFor=\"let num of 10 | numToArray\"\n                [value]= \"num + 1\" >{{num + 1}}</option>\n            </select>\n        </div>\n\n        <div class=\"form-group  col-sm-3\">\n          <label for=\"wallHeight\">Wall Height (ft)</label>\n            <select class=\"form-control\"\n              name=\"wallHeight\"\n              id=\"wallHeight\"\n              formControlName=\"wallHeight\">\n              <option\n                *ngFor=\"let num of 10 | numToArray\"\n                [value]= \"num + 1\" >{{num + 1}}</option>\n            </select>\n        </div>\n        <div class=\"form-group  col-sm-2\">\n          <label for=\"wallFormbtn\">Action</label>\n            <input class=\"btn btn-primary\" type=\"submit\" value=\"Update Wall Size\">\n        </div>\n      </div>\n    </form>\n    <hr>\n  </div>\n\n  <div class=\"row\">\n    <div\n      style=\"width: 700px; height: 650px; background-color:#f5f5f5;\"\n      >\n        <div class=\"row w-100\" style=\"line-height: 0;\"\n          *ngFor=\"let row of rowCount | numToArray\"\n           >\n          <app-tile-row\n            [originalWidth] = \"originalWidth\"\n            [originalHeight] = \"originalHeight\"\n            [imageAddress] = \"imageAddress\"\n            ></app-tile-row>\n\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container col-sm-3\">\n  <div class=\"row px-2\">\n    <app-tiles-panel\n      *ngFor=\"let tile of tiles\"\n      [tile] = \"tile\"></app-tiles-panel>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilesDisplayWallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tile_size_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TilesDisplayWallComponent = /** @class */ (function () {
    function TilesDisplayWallComponent(route, router, tileService, tileSizeService) {
        this.route = route;
        this.router = router;
        this.tileService = tileService;
        this.tileSizeService = tileSizeService;
        // override the route reuse strategy to reload the component on every time when parameter change.
        // Used this to to recreate html template on every load
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.onSameUrlNavigation = 'reload';
    }
    TilesDisplayWallComponent.prototype.ngOnInit = function () {
        this.inItWallSizeForm();
        this.tiles = this.tileService.getAvailableTiles();
        this.getParams();
    };
    TilesDisplayWallComponent.prototype.inItWallSizeForm = function () {
        var wallSize = this.tileSizeService.getWallSize();
        var wallWidth = wallSize.wallWidth / 60;
        var wallHeight = wallSize.wallHeight / 60;
        this.wallSizeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'wallWidth': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](wallWidth, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            'wallHeight': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](wallHeight, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
        });
    };
    TilesDisplayWallComponent.prototype.getParams = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // get the original tile size
            _this.originalWidth = +params['width'];
            _this.originalHeight = +params['height'];
            // get the number of row and column count
            _this.rowCount = _this.tileSizeService.getRowCount(_this.originalHeight);
            // get the tiles list based on size
            _this.tiles = _this.tileService.getTilesBySize(_this.originalWidth, _this.originalHeight);
            var selectedTilesFromStock = _this.tileService.getSelectedTile();
            if (selectedTilesFromStock) {
                _this.setDefaultTilesOnWall();
            }
        });
    };
    TilesDisplayWallComponent.prototype.setDefaultTilesOnWall = function () {
        this.imageAddress = this.tileService.getSelectedTile().path;
    };
    TilesDisplayWallComponent.prototype.onSubmit = function () {
        this.tileSizeService.setWallSize(this.wallSizeForm.value.wallWidth, this.wallSizeForm.value.wallHeight);
        this.tileService.setSelectedTile(null);
        this.router.navigate(['./'], { relativeTo: this.route });
    };
    TilesDisplayWallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tiles-display-wall',
            template: __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_tile_select_service__["a" /* TileSelectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_tile_size_service__["a" /* TileSizeService */]])
    ], TilesDisplayWallComponent);
    return TilesDisplayWallComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesDisplayWallModule", function() { return TilesDisplayWallModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiles_display_wall_component__ = __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tile_row_tile_row_component__ = __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tile-row/tile-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tiles_panel_tiles_panel_component__ = __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-panel/tiles-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/tools/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tiles_display_wall_routing_module__ = __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TilesDisplayWallModule = /** @class */ (function () {
    function TilesDisplayWallModule() {
    }
    TilesDisplayWallModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__tiles_display_wall_routing_module__["a" /* TilesDisplayWallRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tiles_display_wall_component__["a" /* TilesDisplayWallComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tiles_panel_tiles_panel_component__["a" /* TilesPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tile_row_tile_row_component__["a" /* TileRowComponent */],
            ],
            providers: []
        })
    ], TilesDisplayWallModule);
    return TilesDisplayWallModule;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilesDisplayWallRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tiles_display_wall_component__ = __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-display-wall.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var tilesDisplayWallRoute = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tiles_display_wall_component__["a" /* TilesDisplayWallComponent */], pathMatch: 'full' }
];
var TilesDisplayWallRoutingModule = /** @class */ (function () {
    function TilesDisplayWallRoutingModule() {
    }
    TilesDisplayWallRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(tilesDisplayWallRoute)
            ],
            declarations: [],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TilesDisplayWallRoutingModule);
    return TilesDisplayWallRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-panel/tiles-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-panel/tiles-panel.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <a\n    style=\"cursor: pointer;\"\n    class=\"list-group-item clearfix\">\n      <div\n        class=\"pull-left\"\n        (click)=\"setSelectedTile('')\">\n        <h4 class=\"list-group-item-heading\">{{ tile.name }}</h4>\n        <p class=\"list-group-item-text\">{{ 'Size: ' + tile.width +' X '+ tile.height }}</p>\n      </div>\n      <span\n        class=\"pull-right\"\n        (click)=\"setSelectedTile('0deg')\">\n        <img\n          [src]=\"tilesFolderPath + tile.path\"\n          alt=\"{{ tile.name }}\"\n          class=\"img-responsive\"\n          style=\"max-height: 50px;\">\n      </span>\n\n      <span class=\"list-group-item-text\">\n        <p class=\"pull-left\">Availability:&nbsp;&nbsp; </p>\n        <p class=\"pull-left label-success img-circle\"\n          *ngIf=\"tile.availability === 'Yes'\"\n          style=\"width:15px; height:15px;\"></p>\n        <p class=\"pull-left label-danger img-circle\"\n          *ngIf=\"tile.availability != 'Yes'\"\n          style=\"width:15px; height:15px;\"></p>\n      </span>\n\n      <span class=\"float-none col-xs-12\" style=\"max-height: 120px;\">\n        <hr>\n        <img\n          [src]=\"tilesFolderPath + tile.path\"\n          alt=\"{{ tile.name }}\"\n          class=\"img-responsive col-xs-4 rotate-tile-90\"\n          style=\"max-height: 50px; max-width: 50px;\"\n          (click)=\"setSelectedTile('90deg')\">\n          <img\n            [src]=\"tilesFolderPath + tile.path\"\n            alt=\"{{ tile.name }}\"\n            class=\"img-responsive col-xs-4 rotate-tile-180\"\n            style=\"max-height: 50px; max-width: 50px;\"\n            (click)=\"setSelectedTile('180deg')\">\n          <img\n            [src]=\"tilesFolderPath + tile.path\"\n            alt=\"{{ tile.name }}\"\n            class=\"img-responsive col-xs-4 rotate-tile-270\"\n            style=\"max-height: 50px; max-width: 50px;\"\n            (click)=\"setSelectedTile('270deg')\">\n\n      </span>\n\n  </a>\n"

/***/ }),

/***/ "../../../../../src/app/tools/tiles-display-wall/tiles-panel/tiles-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TilesPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tile_select_service__ = __webpack_require__("../../../../../src/app/tools/services/tile-select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tile_model__ = __webpack_require__("../../../../../src/app/tools/shared/tile.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TilesPanelComponent = /** @class */ (function () {
    function TilesPanelComponent(tileService) {
        this.tileService = tileService;
        this.tilesFolderPath = '';
    }
    TilesPanelComponent.prototype.ngOnInit = function () {
        this.tilesFolderPath = this.tileService.tilesFolderPath;
    };
    TilesPanelComponent.prototype.setSelectedTile = function (classRotate) {
        this.tileService.setSelectedTile(this.tile, classRotate);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_tile_model__["a" /* Tile */])
    ], TilesPanelComponent.prototype, "tile", void 0);
    TilesPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tiles-panel',
            template: __webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-panel/tiles-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools/tiles-display-wall/tiles-panel/tiles-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tile_select_service__["a" /* TileSelectService */]])
    ], TilesPanelComponent);
    return TilesPanelComponent;
}());



/***/ })

});
//# sourceMappingURL=tiles-display-wall.module.chunk.js.map