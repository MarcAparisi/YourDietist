(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-editar-modal-editar-module"],{

/***/ "GR+3":
/*!*************************************************************!*\
  !*** ./src/app/modal-editar/modal-editar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ModalEditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarPageRoutingModule", function() { return ModalEditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-editar.page */ "LEsy");




const routes = [
    {
        path: '',
        component: _modal_editar_page__WEBPACK_IMPORTED_MODULE_3__["ModalEditarPage"]
    }
];
let ModalEditarPageRoutingModule = class ModalEditarPageRoutingModule {
};
ModalEditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalEditarPageRoutingModule);



/***/ }),

/***/ "b/PT":
/*!*****************************************************!*\
  !*** ./src/app/modal-editar/modal-editar.module.ts ***!
  \*****************************************************/
/*! exports provided: ModalEditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarPageModule", function() { return ModalEditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-editar-routing.module */ "GR+3");
/* harmony import */ var _modal_editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-editar.page */ "LEsy");







let ModalEditarPageModule = class ModalEditarPageModule {
};
ModalEditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalEditarPageRoutingModule"]
        ],
        declarations: [_modal_editar_page__WEBPACK_IMPORTED_MODULE_6__["ModalEditarPage"]]
    })
], ModalEditarPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-editar-modal-editar-module.js.map