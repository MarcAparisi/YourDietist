(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-settings-admin-settings-module"],{

/***/ "4NDc":
/*!*******************************************************!*\
  !*** ./src/app/admin-settings/admin-settings.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsPage", function() { return AdminSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-settings.page.html */ "Ru/z");
/* harmony import */ var _admin_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-settings.page.scss */ "69L2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminSettingsPage = class AdminSettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminSettingsPage.ctorParameters = () => [];
AdminSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-settings',
        template: _raw_loader_admin_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminSettingsPage);



/***/ }),

/***/ "69L2":
/*!*********************************************************!*\
  !*** ./src/app/admin-settings/admin-settings.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1zZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Ru/z":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-settings/admin-settings.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-header>\n      <ion-toolbar>\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n              <ion-back-button  defaultHref=\"dashboard\" ></ion-back-button>\n            </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n  <ion-content>\n      Admin Settings Page\n  </ion-content>\n  </ion-app>");

/***/ }),

/***/ "WJ9k":
/*!*****************************************************************!*\
  !*** ./src/app/admin-settings/admin-settings-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsPageRoutingModule", function() { return AdminSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-settings.page */ "4NDc");




const routes = [
    {
        path: '',
        component: _admin_settings_page__WEBPACK_IMPORTED_MODULE_3__["AdminSettingsPage"]
    }
];
let AdminSettingsPageRoutingModule = class AdminSettingsPageRoutingModule {
};
AdminSettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminSettingsPageRoutingModule);



/***/ }),

/***/ "Yw3L":
/*!*********************************************************!*\
  !*** ./src/app/admin-settings/admin-settings.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsPageModule", function() { return AdminSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admin_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-settings-routing.module */ "WJ9k");
/* harmony import */ var _admin_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-settings.page */ "4NDc");







let AdminSettingsPageModule = class AdminSettingsPageModule {
};
AdminSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminSettingsPageRoutingModule"]
        ],
        declarations: [_admin_settings_page__WEBPACK_IMPORTED_MODULE_6__["AdminSettingsPage"]]
    })
], AdminSettingsPageModule);



/***/ })

}]);
//# sourceMappingURL=admin-settings-admin-settings-module.js.map