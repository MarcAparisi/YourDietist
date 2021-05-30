(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-clients-modal-clients-module"],{

/***/ "9wwv":
/*!***************************************************************!*\
  !*** ./src/app/modal-clients/modal-clients-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalClientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClientsPageRoutingModule", function() { return ModalClientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_clients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-clients.page */ "wkTb");




const routes = [
    {
        path: '',
        component: _modal_clients_page__WEBPACK_IMPORTED_MODULE_3__["ModalClientsPage"]
    }
];
let ModalClientsPageRoutingModule = class ModalClientsPageRoutingModule {
};
ModalClientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalClientsPageRoutingModule);



/***/ }),

/***/ "ccGv":
/*!*******************************************************!*\
  !*** ./src/app/modal-clients/modal-clients.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClientsPageModule", function() { return ModalClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_clients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-clients-routing.module */ "9wwv");
/* harmony import */ var _modal_clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-clients.page */ "wkTb");







let ModalClientsPageModule = class ModalClientsPageModule {
};
ModalClientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_clients_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalClientsPageRoutingModule"]
        ],
        declarations: [_modal_clients_page__WEBPACK_IMPORTED_MODULE_6__["ModalClientsPage"]]
    })
], ModalClientsPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-clients-modal-clients-module.js.map