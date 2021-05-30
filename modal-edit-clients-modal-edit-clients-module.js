(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-edit-clients-modal-edit-clients-module"],{

/***/ "EMUI":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-edit-clients/modal-edit-clients.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-app>\n    <ion-back-button  defaultHref=\"dashboard\" (click)=\"dismiss()\"></ion-back-button>\n  <ion-item class=\"list list-inset\">\n    <ion-label>Nombre</ion-label>\n    <ion-input [(ngModel)]=\"userEditing.name\" type=\"text\" placeholder=\"Nombre Completo\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]=\"userEditing.email\" type=\"email\" placeholder=\"Correo electronico\"> </ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Telefono de contacto</ion-label>\n    <ion-input [(ngModel)]=\"userEditing.mobile\" type=\"number\" placeholder=\"Telefono de contacto\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Altura</ion-label>\n    <ion-input [(ngModel)]=\"userEditing.height\" type=\"number\" placeholder=\"Altura en cm\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Peso actual</ion-label>\n    <ion-input [(ngModel)]=\"userEditing.weight\"  type=\"number\" placeholder=\"Peso actual en KG\"></ion-input>\n  </ion-item>\n  <ion-item >\n    <ion-label>ADMIN ID</ion-label>\n    <ion-input [(ngModel)]=\"userEditing.dietistID\" type=\"hidden\" >{{dataArray.uid}} </ion-input>\n  </ion-item>\n\n  <ion-button (click)=\"insertUser()\">Realizar cambios</ion-button>\n  </ion-app>\n");

/***/ }),

/***/ "Rg7z":
/*!*****************************************************************!*\
  !*** ./src/app/modal-edit-clients/modal-edit-clients.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0LWNsaWVudHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "gJWM":
/*!*****************************************************************!*\
  !*** ./src/app/modal-edit-clients/modal-edit-clients.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModalEditClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditClientsPageModule", function() { return ModalEditClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_edit_clients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-edit-clients-routing.module */ "hGv7");
/* harmony import */ var _modal_edit_clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-edit-clients.page */ "w7DY");







let ModalEditClientsPageModule = class ModalEditClientsPageModule {
};
ModalEditClientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_edit_clients_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalEditClientsPageRoutingModule"]
        ],
        declarations: [_modal_edit_clients_page__WEBPACK_IMPORTED_MODULE_6__["ModalEditClientsPage"]]
    })
], ModalEditClientsPageModule);



/***/ }),

/***/ "hGv7":
/*!*************************************************************************!*\
  !*** ./src/app/modal-edit-clients/modal-edit-clients-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModalEditClientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditClientsPageRoutingModule", function() { return ModalEditClientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_edit_clients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-edit-clients.page */ "w7DY");




const routes = [
    {
        path: '',
        component: _modal_edit_clients_page__WEBPACK_IMPORTED_MODULE_3__["ModalEditClientsPage"]
    }
];
let ModalEditClientsPageRoutingModule = class ModalEditClientsPageRoutingModule {
};
ModalEditClientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalEditClientsPageRoutingModule);



/***/ }),

/***/ "w7DY":
/*!***************************************************************!*\
  !*** ./src/app/modal-edit-clients/modal-edit-clients.page.ts ***!
  \***************************************************************/
/*! exports provided: ModalEditClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditClientsPage", function() { return ModalEditClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_edit_clients_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-edit-clients.page.html */ "EMUI");
/* harmony import */ var _modal_edit_clients_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-edit-clients.page.scss */ "Rg7z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global.service */ "dVwY");






let ModalEditClientsPage = class ModalEditClientsPage {
    constructor(global, toastController, ModalController) {
        this.global = global;
        this.toastController = toastController;
        this.ModalController = ModalController;
        this.userEditing = {};
    }
    ngOnInit() {
        this.dataArray = JSON.parse(localStorage.getItem('user'));
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.ModalController.dismiss({
            'dismissed': true
        });
    }
    insertUser() {
        if (this.userEditing.hasOwnProperty('name') && this.userEditing.hasOwnProperty('weight') && this.userEditing.hasOwnProperty('height') && this.userEditing.hasOwnProperty('mobile') && this.userEditing.hasOwnProperty('email')) {
            if (this.userEditing.name != null || this.userEditing.weight != null || this.userEditing.height != null || this.userEditing.mobile != null || this.userEditing.email != null || this.userEditing.dietistID != null
                || this.userEditing.name != "" || this.userEditing.weight != 0 || this.userEditing.height != 0 || this.userEditing.mobile != 0 || this.userEditing.email != "" || this.userEditing.dietistID != "" || this.userEditing != null) {
                this.userEditing.dietistID = this.dataArray.uid;
                this.userEditing.isAdmin = "No";
                this.userEditing.dilluns_esmorzar = "";
                this.userEditing.dilluns_dinar = "";
                this.userEditing.dilluns_berenar = "";
                this.userEditing.dilluns_sopar = "";
                this.userEditing.dilluns_consells = "";
                this.userEditing.dimarts_esmorzar = "";
                this.userEditing.dimarts_dinar = "";
                this.userEditing.dimarts_berenar = "";
                this.userEditing.dimarts_sopar = "";
                this.userEditing.dimarts_consells = "";
                this.userEditing.dimecres_esmorzar = "";
                this.userEditing.dimecres_dinar = "";
                this.userEditing.dimecres_berenar = "";
                this.userEditing.dimecres_sopar = "";
                this.userEditing.dimecres_consells = "";
                this.userEditing.dijous_esmorzar = "";
                this.userEditing.dijous_dinar = "";
                this.userEditing.dijous_berenar = "";
                this.userEditing.dijous_sopar = "";
                this.userEditing.dijous_consells = "";
                this.userEditing.divendres_esmorzar = "";
                this.userEditing.divendres_dinar = "";
                this.userEditing.divendres_berenar = "";
                this.userEditing.divendres_sopar = "";
                this.userEditing.divendres_consells = "";
                this.userEditing.dissabte_esmorzar = "";
                this.userEditing.dissabte_dinar = "";
                this.userEditing.dissabte_berenar = "";
                this.userEditing.dissabte_sopar = "";
                this.userEditing.dissabte_consells = "";
                this.userEditing.diumenge_esmorzar = "";
                this.userEditing.diumenge_dinar = "";
                this.userEditing.diumenge_berenar = "";
                this.userEditing.diumenge_sopar = "";
                this.userEditing.diumenge_consells = "";
                this.userEditing.shoppingList = "";
                this.global.insertToCollection("admin", this.userEditing, this.dataArray.uid);
                this.presentToast();
                //this.global.
                this.userEditing = {};
            }
            (error) => {
                console.error(error);
            };
        }
        else {
            this.presentToastWithOptions();
        }
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'User created!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastWithOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Rellena todos los campos del formulario',
                position: 'top',
                duration: 1000
            });
            toast.present();
        });
    }
};
ModalEditClientsPage.ctorParameters = () => [
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalEditClientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-edit-clients',
        template: _raw_loader_modal_edit_clients_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_edit_clients_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditClientsPage);



/***/ })

}]);
//# sourceMappingURL=modal-edit-clients-modal-edit-clients-module.js.map