(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Planets/components/pagination/pagination.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Planets/components/pagination/pagination.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row justify-content-center align-items-center\">\n  <ngb-pagination class=\"mt-3 mr-4\"\n                  [page]=\"page\"\n                  (pageChange)=\"onPageChange($event)\"\n                  [pageSize]=\"pageSize\"\n                  [collectionSize]=\"collectionSize\"></ngb-pagination>\n  <div class=\"btn-group\">\n    <div *ngFor=\"let setPageSize of pageSizes\" class=\"btn btn-primary\"\n         (click)=\"changePageSize(setPageSize)\"> {{setPageSize}} </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Planets/components/pagination/pagination.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Planets/components/pagination/pagination.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BsYW5ldHMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Planets/components/pagination/pagination.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Planets/components/pagination/pagination.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSizes = [5, 10, 25, 100];
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.onPageChange = function (event) {
        this.pageChange.emit(event);
    };
    PaginationComponent.prototype.changePageSize = function (size) {
        this.pageSizeChange.emit(size);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "collectionSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginationComponent.prototype, "pageSizeChange", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/Planets/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/Planets/components/pagination/pagination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/Planets/components/planet-list/planet-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Planets/components/planet-list/planet-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdOpacity = 0.9\n  bdColor = \"white\"\n  size = \"large\"\n  color = \"#2f7aff\"\n  type = \"ball-atom\"\n  fullScreen = \"true\">\n  <p style=\"color: cornflowerblue\" > Loading Planets </p>\n</ngx-spinner>\n<div *ngIf=\"filteredPlanets\">\n  <div class=\"form-group m-3\">\n    <label for=\"search\"><h4>Search for planet:</h4></label>\n    <input type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" [ngModel]=\"querySubject | async\"\n           (ngModelChange)=\"onQueryChange($event)\">\n  </div>\n\n  <app-pagination [page]=\"pageSubject | async\"\n                  [pageSize]=\"pageSizeSubject | async\"\n                  [collectionSize]=\"collectionSize\"\n                  (pageChange)=\"onPageChange($event)\"\n                  (pageSizeChange)=\"changePageSize($event)\"></app-pagination>\n\n  <div class=\"list-group m-3\">\n    <a class=\"list-group-item list-group-item-action flex-column align-items-start\"\n       *ngFor=\"let planet of filteredPlanets\"\n       [routerLink]=\"['/planet', planet.id]\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">{{planet.name}}</h5>\n        <small>Climate: {{planet.climate}}</small>\n      </div>\n    </a>\n  </div>\n\n  <app-pagination [page]=\"pageSubject | async\"\n                  [pageSize]=\"pageSizeSubject | async\"\n                  [collectionSize]=\"collectionSize\"\n                  (pageChange)=\"onPageChange($event)\"\n                  (pageSizeChange)=\"changePageSize($event)\"></app-pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/Planets/components/planet-list/planet-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Planets/components/planet-list/planet-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BsYW5ldHMvY29tcG9uZW50cy9wbGFuZXQtbGlzdC9wbGFuZXQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Planets/components/planet-list/planet-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Planets/components/planet-list/planet-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlanetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetListComponent", function() { return PlanetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/Planets/services/swapi.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var PlanetListComponent = /** @class */ (function () {
    function PlanetListComponent(service, spinner) {
        var _this = this;
        this.service = service;
        this.spinner = spinner;
        this.alive = true;
        this.querySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.pageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.pageSizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](5);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.querySubject, this.pageSubject, this.pageSizeSubject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var query = _a[0], page = _a[1], pageSize = _a[2];
            return ({ query: query, page: page, pageSize: pageSize });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.spinner.show(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (args) { return _this.service.fetchPlanetsPaginated(args); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function () { return _this.alive; })).subscribe(function (results) {
            _this.filteredPlanets = results.planets.splice(0, results.planets.length - results.errorNumber);
            _this.collectionSize = results.listSize;
            _this.spinner.hide();
        });
    }
    PlanetListComponent.prototype.ngOnInit = function () {
        this.spinner.show();
    };
    PlanetListComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    PlanetListComponent.prototype.onQueryChange = function (val) {
        this.pageSubject.next(1);
        this.querySubject.next(val);
    };
    PlanetListComponent.prototype.changePageSize = function (size) {
        this.pageSubject.next(1);
        this.pageSizeSubject.next(size);
    };
    PlanetListComponent.prototype.onPageChange = function (page) {
        this.pageSubject.next(page);
    };
    PlanetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet-list',
            template: __webpack_require__(/*! ./planet-list.component.html */ "./src/app/Planets/components/planet-list/planet-list.component.html"),
            styles: [__webpack_require__(/*! ./planet-list.component.scss */ "./src/app/Planets/components/planet-list/planet-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_swapi_service__WEBPACK_IMPORTED_MODULE_4__["SwapiService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PlanetListComponent);
    return PlanetListComponent;
}());



/***/ }),

/***/ "./src/app/Planets/components/planet/planet.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Planets/components/planet/planet.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdOpacity = 0.9\n  bdColor = \"white\"\n  size = \"large\"\n  color = \"#2f7aff\"\n  type = \"ball-atom\"\n  fullScreen = \"true\">\n  <p style=\"color: cornflowerblue\" > Loading Planet </p>\n</ngx-spinner>\n<div class=\"container w-50 h-50 mt-3\">\n  <button class=\"btn btn-lg btn-primary w-50\"\n          style=\"border-radius: 5px 5px 0 0\"\n          [routerLink]=\"['/planet-list']\"> Back to planet list </button>\n  <div class=\"card card-image shadow\" *ngIf=\"planet$ | async as planet\"\n       style=\"background-image: url(http://s1.picswalls.com/wallpapers/2016/06/16/latest-planet-wallpaper_115144863_310.jpg);\n       border-radius: 0 5px 5px 5px;\">\n    <div class=\"text-white text-center rgba-stylish-strong p-0\">\n      <div class=\"p-2\">\n        <h1 class=\"card-title\">{{planet.name}}</h1>\n        <div class=\"list-group d-flex align-items-center mb-3 text-black-50\">\n          <p class=\"list-group-item w-75\">Climate: {{planet.climate}}</p>\n          <p class=\"list-group-item w-75\">Terrain: {{planet.terrain}}</p>\n          <p class=\"list-group-item w-75\">Water surface: {{planet.surface_water}}</p>\n          <p class=\"list-group-item w-75\">Population: {{planet.population}}</p>\n          <p class=\"list-group-item w-75\">Gravity: {{planet.gravity}}</p>\n          <p class=\"list-group-item w-75\">Diameter: {{planet.diameter}}</p>\n          <p class=\"list-group-item w-75\">Orbital period: {{planet.orbital_period}}</p>\n          <p class=\"list-group-item w-75\">Rotation period: {{planet.rotation_period}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Planets/components/planet/planet.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Planets/components/planet/planet.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BsYW5ldHMvY29tcG9uZW50cy9wbGFuZXQvcGxhbmV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/Planets/components/planet/planet.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Planets/components/planet/planet.component.ts ***!
  \***************************************************************/
/*! exports provided: PlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetComponent", function() { return PlanetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/Planets/services/swapi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






var PlanetComponent = /** @class */ (function () {
    function PlanetComponent(route, service, spinner) {
        this.route = route;
        this.service = service;
        this.spinner = spinner;
    }
    PlanetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planet$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.spinner.show(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.service.fetchPlanet(+params.get('id')); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.spinner.hide(); }));
    };
    PlanetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet',
            template: __webpack_require__(/*! ./planet.component.html */ "./src/app/Planets/components/planet/planet.component.html"),
            styles: [__webpack_require__(/*! ./planet.component.scss */ "./src/app/Planets/components/planet/planet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_swapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapiService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PlanetComponent);
    return PlanetComponent;
}());



/***/ }),

/***/ "./src/app/Planets/model/planet.model.ts":
/*!***********************************************!*\
  !*** ./src/app/Planets/model/planet.model.ts ***!
  \***********************************************/
/*! exports provided: PlanetModel, fromDtoToModelPlanet, fromDtoToModelPlanets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetModel", function() { return PlanetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDtoToModelPlanet", function() { return fromDtoToModelPlanet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDtoToModelPlanets", function() { return fromDtoToModelPlanets; });
var PlanetModel = /** @class */ (function () {
    function PlanetModel() {
        this.id = null;
        this.name = null;
        this.rotation_period = null;
        this.orbital_period = null;
        this.diameter = null;
        this.climate = null;
        this.gravity = null;
        this.terrain = null;
        this.surface_water = null;
        this.population = null;
    }
    return PlanetModel;
}());

function fromDtoToModelPlanet(planetDto) {
    return {
        id: +planetDto.url.match(/\d+/),
        name: planetDto.name,
        rotation_period: +planetDto.rotation_period,
        orbital_period: +planetDto.orbital_period,
        diameter: +planetDto.diameter,
        climate: planetDto.climate,
        gravity: planetDto.gravity,
        terrain: planetDto.terrain,
        surface_water: +planetDto.surface_water,
        population: +planetDto.population,
    };
}
function fromDtoToModelPlanets(planetsDto) {
    return planetsDto.map(function (planet) { return fromDtoToModelPlanet(planet); });
}


/***/ }),

/***/ "./src/app/Planets/services/swapi.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Planets/services/swapi.service.ts ***!
  \***************************************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_planet_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/planet.model */ "./src/app/Planets/model/planet.model.ts");
/* harmony import */ var _utils_compute_number_of_api_pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/compute-number-of-api-pages */ "./src/app/Planets/utils/compute-number-of-api-pages.ts");
/* harmony import */ var _utils_compute_api_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/compute-api-page */ "./src/app/Planets/utils/compute-api-page.ts");
/* harmony import */ var _utils_compute_first_api_result_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/compute-first-api-result-index */ "./src/app/Planets/utils/compute-first-api-result-index.ts");









var SwapiService = /** @class */ (function () {
    function SwapiService(http) {
        this.http = http;
        this.planetsUrl = 'https://swapi.co/api/planets/';
    }
    SwapiService.prototype.fetchPlanetsPaginated = function (args) {
        var _this = this;
        var query = args.query, page = args.page, pageSize = args.pageSize;
        var apiPageSize = 10;
        var firstPage = Object(_utils_compute_api_page__WEBPACK_IMPORTED_MODULE_7__["computeApiPage"])({ page: page, pageSize: pageSize, apiPageSize: apiPageSize });
        var listSize;
        var errorNumber = 0;
        var requests = Array.from({ length: Object(_utils_compute_number_of_api_pages__WEBPACK_IMPORTED_MODULE_6__["computeNumberOfApiPages"])({ page: page, pageSize: pageSize, apiPageSize: apiPageSize }) }, function (_, i) {
            var params = {
                page: (firstPage + i).toString(),
                search: query,
            };
            return _this.http.get(_this.planetsUrl, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dto) {
                listSize = dto.count;
                return Object(_model_planet_model__WEBPACK_IMPORTED_MODULE_5__["fromDtoToModelPlanets"])(dto.results);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                errorNumber++;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(err);
            }));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (responses) { return responses.reduce(function (flat, next) { return flat.concat(next); }, []); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (planets) {
            var first = Object(_utils_compute_first_api_result_index__WEBPACK_IMPORTED_MODULE_8__["computeFirstApiResultIndex"])({ page: page, pageSize: pageSize, apiPageSize: apiPageSize });
            var last = first + pageSize;
            return { listSize: listSize, planets: planets.splice(first, last), errorNumber: errorNumber };
        }));
    };
    SwapiService.prototype.fetchPlanet = function (id) {
        return this.http.get(this.planetsUrl + id.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dto) { return Object(_model_planet_model__WEBPACK_IMPORTED_MODULE_5__["fromDtoToModelPlanet"])(dto); }));
    };
    SwapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SwapiService);
    return SwapiService;
}());



/***/ }),

/***/ "./src/app/Planets/utils/compute-api-page.ts":
/*!***************************************************!*\
  !*** ./src/app/Planets/utils/compute-api-page.ts ***!
  \***************************************************/
/*! exports provided: computeApiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeApiPage", function() { return computeApiPage; });
function computeApiPage(args) {
    var page = args.page, pageSize = args.pageSize, apiPageSize = args.apiPageSize;
    return Math.ceil((((page - 1) * pageSize) + 1) / apiPageSize);
}


/***/ }),

/***/ "./src/app/Planets/utils/compute-first-api-result-index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Planets/utils/compute-first-api-result-index.ts ***!
  \*****************************************************************/
/*! exports provided: computeFirstApiResultIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeFirstApiResultIndex", function() { return computeFirstApiResultIndex; });
function computeFirstApiResultIndex(args) {
    var page = args.page, pageSize = args.pageSize, apiPageSize = args.apiPageSize;
    return ((page - 1) * pageSize % apiPageSize);
}


/***/ }),

/***/ "./src/app/Planets/utils/compute-number-of-api-pages.ts":
/*!**************************************************************!*\
  !*** ./src/app/Planets/utils/compute-number-of-api-pages.ts ***!
  \**************************************************************/
/*! exports provided: computeNumberOfApiPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNumberOfApiPages", function() { return computeNumberOfApiPages; });
/* harmony import */ var _compute_first_api_result_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute-first-api-result-index */ "./src/app/Planets/utils/compute-first-api-result-index.ts");

function computeNumberOfApiPages(args) {
    var pageSize = args.pageSize, apiPageSize = args.apiPageSize;
    return Math.ceil((Object(_compute_first_api_result_index__WEBPACK_IMPORTED_MODULE_0__["computeFirstApiResultIndex"])(args) + pageSize) / apiPageSize);
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Planets_components_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Planets/components/planet-list/planet-list.component */ "./src/app/Planets/components/planet-list/planet-list.component.ts");
/* harmony import */ var _Planets_components_planet_planet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Planets/components/planet/planet.component */ "./src/app/Planets/components/planet/planet.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");






var routes = [
    { path: 'planet-list', component: _Planets_components_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_3__["PlanetListComponent"], data: { title: 'Planet list' } },
    { path: 'planet/:id', component: _Planets_components_planet_planet_component__WEBPACK_IMPORTED_MODULE_4__["PlanetComponent"] },
    { path: '', redirectTo: 'planet-list', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ListOfPlanets';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _store_app_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/app.effects */ "./src/app/store/app.effects.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Planets_components_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Planets/components/planet-list/planet-list.component */ "./src/app/Planets/components/planet-list/planet-list.component.ts");
/* harmony import */ var _Planets_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Planets/components/pagination/pagination.component */ "./src/app/Planets/components/pagination/pagination.component.ts");
/* harmony import */ var _Planets_components_planet_planet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Planets/components/planet/planet.component */ "./src/app/Planets/components/planet/planet.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Planets_components_planet_list_planet_list_component__WEBPACK_IMPORTED_MODULE_14__["PlanetListComponent"],
                _Planets_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"],
                _Planets_components_planet_planet_component__WEBPACK_IMPORTED_MODULE_16__["PlanetComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"], { metaReducers: _store_app_reducers__WEBPACK_IMPORTED_MODULE_8__["metaReducers"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_store_app_effects__WEBPACK_IMPORTED_MODULE_10__["AppEffects"]]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument() : []
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> 404 page not found </h1>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/store/app.effects.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.effects.ts ***!
  \**************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");



var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var reducers = {};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Boro\WebstormProjects\ListOfPlanets\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map