(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-users-edit-users-module"],{

/***/ "Esst":
/*!*************************************************!*\
  !*** ./src/app/edit-users/edit-users.module.ts ***!
  \*************************************************/
/*! exports provided: EditUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUsersPageModule", function() { return EditUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-users-routing.module */ "tz4C");
/* harmony import */ var _edit_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-users.page */ "hq68");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");








let EditUsersPageModule = class EditUsersPageModule {
};
EditUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_users_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditUsersPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_edit_users_page__WEBPACK_IMPORTED_MODULE_6__["EditUsersPage"]]
    })
], EditUsersPageModule);



/***/ }),

/***/ "tz4C":
/*!*********************************************************!*\
  !*** ./src/app/edit-users/edit-users-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditUsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUsersPageRoutingModule", function() { return EditUsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-users.page */ "hq68");




const routes = [
    {
        path: '',
        component: _edit_users_page__WEBPACK_IMPORTED_MODULE_3__["EditUsersPage"]
    }
];
let EditUsersPageRoutingModule = class EditUsersPageRoutingModule {
};
EditUsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditUsersPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=edit-users-edit-users-module.js.map