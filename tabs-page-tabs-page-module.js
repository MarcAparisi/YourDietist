(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-page-tabs-page-module"],{

/***/ "3o4F":
/*!*******************************************************!*\
  !*** ./src/app/tabs-page/tabs-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TabsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPagePageRoutingModule", function() { return TabsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page.page */ "PoUy");




const routes = [
    {
        path: '',
        component: _tabs_page_page__WEBPACK_IMPORTED_MODULE_3__["TabsPagePage"]
    }
];
let TabsPagePageRoutingModule = class TabsPagePageRoutingModule {
};
TabsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPagePageRoutingModule);



/***/ }),

/***/ "4SVz":
/*!***********************************************!*\
  !*** ./src/app/tabs-page/tabs-page.module.ts ***!
  \***********************************************/
/*! exports provided: TabsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPagePageModule", function() { return TabsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "3o4F");
/* harmony import */ var _tabs_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-page.page */ "PoUy");







let TabsPagePageModule = class TabsPagePageModule {
};
TabsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPagePageRoutingModule"]
        ],
        declarations: [_tabs_page_page__WEBPACK_IMPORTED_MODULE_6__["TabsPagePage"]]
    })
], TabsPagePageModule);



/***/ }),

/***/ "PoUy":
/*!*********************************************!*\
  !*** ./src/app/tabs-page/tabs-page.page.ts ***!
  \*********************************************/
/*! exports provided: TabsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPagePage", function() { return TabsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs-page.page.html */ "Zti/");
/* harmony import */ var _tabs_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-page.page.scss */ "z5Ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TabsPagePage = class TabsPagePage {
    constructor() { }
    ngOnInit() {
    }
};
TabsPagePage.ctorParameters = () => [];
TabsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs-page',
        template: _raw_loader_tabs_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPagePage);



/***/ }),

/***/ "Zti/":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs-page/tabs-page.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "z5Ws":
/*!***********************************************!*\
  !*** ./src/app/tabs-page/tabs-page.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=tabs-page-tabs-page-module.js.map