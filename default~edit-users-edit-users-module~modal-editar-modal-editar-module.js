(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~edit-users-edit-users-module~modal-editar-modal-editar-module"],{

/***/ "5oVa":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-editar/modal-editar.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n \n  <ion-toolbar>\n    <ion-back-button slot=\"start\" defaultHref=\"\" (click)=\"this.dismiss()\" ></ion-back-button>\n    <ion-title slot=\"\">Dieta de {{this.data.name}}</ion-title>\n    <ion-button (click)=\"presentAlertConfirm()\"  slot=\"secondary\" class =\"Delete\"color =\"danger\"  >Eliminar Cliente </ion-button>\n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <ion-segment \n    value=\"all\" \n    color=\"tertiary\" \n    scrollable=\"true\"\n    mode=\"ios\"\n    [(ngModel)]=\"segmentModel\" \n    (ionChange)=\"segmentChanged($event)\">\n\n      <ion-segment-button value=\"dilluns\">\n        <ion-label>Lunes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"dimarts\">\n        <ion-label>Martes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"dimecres\">\n        <ion-label>Miércoles</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"dijous\">\n        <ion-label>Jueves</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"divendres\">\n        <ion-label>Viernes</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"dissabte\">\n        <ion-label>Sábado</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"diumenge\">\n        <ion-label>Domingo</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"shoppingList\">\n        <ion-label>Compra</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    \n\n      <ion-card *ngIf=\"segmentModel === 'dilluns'\" class=\"card\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Lunes</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n         \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dilluns_esmorzar\"></ion-textarea>\n          \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dilluns_dinar\" ></ion-textarea>\n         \n            <ion-label color=\"danger\">Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dilluns_berenar\"></ion-textarea>\n          \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dilluns_sopar\" ></ion-textarea>\n          \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.dilluns_consells\"></ion-textarea> \n        \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf=\"segmentModel === 'dimarts'\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Martes</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n          \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimarts_esmorzar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimarts_dinar\" ></ion-textarea>\n          \n            <ion-label color=\"danger\">Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimarts_berenar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimarts_sopar\" ></ion-textarea>\n        \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimarts_consells\"></ion-textarea> \n         \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf=\"segmentModel === 'dimecres'\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Miércoles</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n        \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimecres_esmorzar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimecres_dinar\" ></ion-textarea>\n         \n            <ion-label color=\"danger\">Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimecres_berenar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimecres_sopar\" ></ion-textarea>\n         \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.dimecres_consells\"></ion-textarea> \n      \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf=\"segmentModel === 'dijous'\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Jueves</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n          \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dijous_esmorzar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dijous_dinar\" ></ion-textarea>\n         \n            <ion-label color=\"danger\">Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dijous_berenar\"></ion-textarea>\n       \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dijous_sopar\" ></ion-textarea>\n       \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.dijous_consells\"></ion-textarea> \n      \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf=\"segmentModel === 'divendres'\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Viernes</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n          \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.divendres_esmorzar\"></ion-textarea>\n         \n     \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.divendres_dinar\" ></ion-textarea>\n          \n            <ion-label color=\"danger\">Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.divendres_berenar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.divendres_sopar\" ></ion-textarea>\n          \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.divendres_consells\"></ion-textarea> \n         \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      \n      <ion-card *ngIf=\"segmentModel === 'dissabte'\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Sábado</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n        \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dissabte_esmorzar\"></ion-textarea>\n          \n         \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dissabte_dinar\" ></ion-textarea>\n         \n            <ion-label color=\"danger\" >Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dissabte_berenar\"></ion-textarea>\n         \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.dissabte_sopar\" ></ion-textarea>\n         \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.dissabte_consells\"></ion-textarea> \n          \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      \n      <ion-card *ngIf=\"segmentModel === 'diumenge'\">\n        <ion-card-header>\n          <ion-card-subtitle>Introduce la dieta en los campos correspondientes</ion-card-subtitle>\n          <ion-card-title>Domingo</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n         \n            <ion-label color=\"danger\">Almuerzo</ion-label>\n    \n           <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.diumenge_esmorzar\"></ion-textarea>\n          \n            <ion-label color=\"danger\">Comida</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.diumenge_dinar\" ></ion-textarea>\n          \n            <ion-label color=\"danger\">Merienda</ion-label>\n          <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.diumenge_berenar\"></ion-textarea>\n          \n            <ion-label color=\"danger\">Cena</ion-label>\n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.diumenge_sopar\" ></ion-textarea>\n          \n            <ion-label color=\"danger\">Consejos y otras comidas</ion-label>\n     <ion-textarea  auto-grow=\"true\" [(ngModel)]=\"clientEditing.diumenge_consells\"></ion-textarea> \n          \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n       <ion-card *ngIf=\"segmentModel === 'shoppingList'\">\n        <ion-card-header>\n          <ion-card-subtitle>Compra</ion-card-subtitle>\n          <ion-card-title>Lista de la compra </ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n         \n            <ion-label color=\"danger\"></ion-label>\n    \n            <ion-textarea auto-grow=\"true\" [(ngModel)]=\"clientEditing.shoppingList\" ></ion-textarea>\n          \n          \n          <ion-button (click)=\"insertChange()\">Realizar cambios</ion-button>\n        </ion-card-content>\n      </ion-card>\n      \n</ion-content>\n");

/***/ }),

/***/ "DkZu":
/*!*************************************************!*\
  !*** ./src/app/edit-users/edit-users.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  margin-top: 10%;\n}\n\n.buttonDietists {\n  display: inline-block;\n  padding: 0.75rem 1.25rem;\n  border-radius: 10rem;\n  color: #fff;\n  margin: 2%;\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 0.15rem;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.buttonDietists:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0cf;\n  border-radius: 10rem;\n  z-index: -2;\n}\n\n.buttonDietists:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0%;\n  height: 100%;\n  background-color: #008fb3;\n  transition: all 0.3s;\n  border-radius: 10rem;\n  z-index: -1;\n}\n\n.buttonDietists:hover {\n  color: #fff;\n  cursor: pointer;\n}\n\n.buttonDietists:hover:before {\n  width: 100%;\n}\n\n.textOnAdmins {\n  background-color: #0cf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtdXNlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtBQURGOztBQUtBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFyQkU7RUFzQkYsb0JBQUE7RUFDQSxXQUFBO0FBRE47O0FBR0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUROOztBQUdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFETjs7QUFFTTtFQUNFLFdBQUE7QUFBUjs7QUFNQTtFQUNJLHNCQWhESTtBQTZDUiIsImZpbGUiOiJlZGl0LXVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5oMntcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4kY29sb3I6ICMwY2Y7XG4uYnV0dG9uRGlldGlzdHN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMiU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgei1pbmRleDogLTI7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDE1JSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICB9XG59XG5cbi50ZXh0T25BZG1pbnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xufSJdfQ== */");

/***/ }),

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

/***/ "LEsy":
/*!***************************************************!*\
  !*** ./src/app/modal-editar/modal-editar.page.ts ***!
  \***************************************************/
/*! exports provided: ModalEditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarPage", function() { return ModalEditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_editar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-editar.page.html */ "5oVa");
/* harmony import */ var _modal_editar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-editar.page.scss */ "VA3J");
/* harmony import */ var _edit_users_edit_users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../edit-users/edit-users.page */ "hq68");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");








let ModalEditarPage = class ModalEditarPage {
    constructor(alertController, modalController, router, db) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.router = router;
        this.db = db;
        this.segmentModel = "monday";
    }
    ngOnInit() {
        this.clientEditing = this.data;
    }
    segmentChanged(event) {
        console.log(event);
    }
    insertChange() {
        this.db.collection('users').doc(this.id).update({
            dilluns_berenar: this.clientEditing.dilluns_berenar,
            dilluns_dinar: this.clientEditing.dilluns_dinar,
            dilluns_esmorzar: this.clientEditing.dilluns_esmorzar,
            dilluns_sopar: this.clientEditing.dilluns_sopar,
            dilluns_consells: this.clientEditing.dilluns_consells,
            dimarts_berenar: this.clientEditing.dimarts_berenar,
            dimarts_dinar: this.clientEditing.dimarts_dinar,
            dimarts_esmorzar: this.clientEditing.dimarts_esmorzar,
            dimarts_sopar: this.clientEditing.dimarts_sopar,
            dimarts_consells: this.clientEditing.dimarts_consells,
            dimecres_berenar: this.clientEditing.dimecres_berenar,
            dimecres_dinar: this.clientEditing.dimecres_dinar,
            dimecres_esmorzar: this.clientEditing.dimecres_esmorzar,
            dimecres_sopar: this.clientEditing.dimecres_sopar,
            dimecres_consells: this.clientEditing.dimecres_consells,
            dijous_berenar: this.clientEditing.dijous_berenar,
            dijous_dinar: this.clientEditing.dijous_dinar,
            dijous_esmorzar: this.clientEditing.dijous_esmorzar,
            dijous_sopar: this.clientEditing.dijous_sopar,
            dijous_consells: this.clientEditing.dijous_consells,
            divendres_berenar: this.clientEditing.divendres_berenar,
            divendres_dinar: this.clientEditing.divendres_dinar,
            divendres_esmorzar: this.clientEditing.divendres_esmorzar,
            divendres_sopar: this.clientEditing.divendres_sopar,
            divendres_consells: this.clientEditing.divendres_consells,
            dissabte_berenar: this.clientEditing.dissabte_berenar,
            dissabte_dinar: this.clientEditing.dissabte_dinar,
            dissabte_esmorzar: this.clientEditing.dissabte_esmorzar,
            dissabte_sopar: this.clientEditing.dissabte_sopar,
            dissabte_consells: this.clientEditing.dissabte_consells,
            diumenge_berenar: this.clientEditing.diumenge_berenar,
            diumenge_dinar: this.clientEditing.diumenge_dinar,
            diumenge_esmorzar: this.clientEditing.diumenge_esmorzar,
            diumenge_sopar: this.clientEditing.diumenge_sopar,
            diumenge_consells: this.clientEditing.diumenge_consells,
            shoppingList: this.clientEditing.shoppingList
        }).then(() => {
            window.alert("Se han realizado los cambios");
            this.dismiss();
            console.log(this.clientEditing.dilluns_berenar);
        });
    }
    dismiss() {
        _edit_users_edit_users_page__WEBPACK_IMPORTED_MODULE_3__["EditUsersPage"].reloadPage();
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    getClients() {
        return this.db.collection("admins").snapshotChanges();
    }
    deleteUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.db.collection('users').doc(this.id).delete();
            this.user = yield JSON.parse(localStorage.getItem('user'));
            this.db.collection('admins').doc(this.user.uid).get().subscribe((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.clientData = element.data();
                console.log(this.clientData.clients);
                var llistaBorrar = this.clientData.clients.split(',');
                llistaBorrar.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (element == (" " + this.id)) {
                        console.log('Found one:' + element);
                        var llista = llistaBorrar.toString();
                        var stringToDelete = "," + element;
                        llista = llista.replace(stringToDelete, '');
                        yield this.db.collection('admins').doc(this.user.uid).update({
                            clients: llista
                        });
                    }
                }));
            }));
            console.log(this.user.uid);
            _edit_users_edit_users_page__WEBPACK_IMPORTED_MODULE_3__["EditUsersPage"].reloadPage();
            //var userRef = this.db.collection('users').doc(this.id).delete();
        });
    }
    ;
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Seguro que quieres eliminar este usuario?',
                message: 'Se eliminará el usuario junto con su dieta de forma permanente, estás seguro?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Sí, borrar definitivamente',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.deleteUser();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ModalEditarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
ModalEditarPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
};
ModalEditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-modal-editar',
        template: _raw_loader_modal_editar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_editar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditarPage);



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

/***/ "VA3J":
/*!*****************************************************!*\
  !*** ./src/app/modal-editar/modal-editar.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea {\n  --background:rgb(251, 249, 249);\n  border: 0.1px solid #cacaca;\n}\n\nion-header {\n  margin-right: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGFsLWVkaXRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDRywrQkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBRUM7RUFDRyxpQkFBQTtBQUNKIiwiZmlsZSI6Im1vZGFsLWVkaXRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiBpb24tdGV4dGFyZWF7XG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyNTEsIDI0OSwgMjQ5KTtcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHJnYigyMDIsIDIwMiwgMjAyKTtcbiB9XG4gaW9uLWhlYWRlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcbiB9XG4gIl19 */");

/***/ }),

/***/ "e9B+":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-users/edit-users.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"assets/javascript/accordion.js\"></script>\n<ion-app>\n  <ion-header>\n    <ion-toolbar class=\"toolbar\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button  defaultHref=\"dashboard\" ></ion-back-button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n  <ion-button (click)=\"openAddClientModal()\" expand=\"block\" fill=\"outline\" >Añadir un nuevo cliente</ion-button>\n\n  <ion-button (click)=\"refreshPage()\" expand=\"block\" fill=\"outline\" >Cargar nuevos clientes</ion-button>\n      </div>\n    </div>\n    <div>\n        \n      \n            <h2>Editar un cliente</h2>\n            \n            <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar>\n            \n                \n                <div *ngIf=\"this.arrayClientsFinals.length > 0 \" >\n                 \n                  <a class=\"buttonDietists\" *ngFor=\"let client of this.arrayClientsFinals| filter:filterTerm\" (click)=\"editClientModal(client)\"> \n                  {{client.data.name }}\n                </a>\n                </div>\n                <div *ngIf=\"this.arrayClientsFinals.length == 0 \">\n                  <h2>Tus clientes están cargando o aún no has añadido ninguno</h2>\n                </div>\n                  \n                  <!--  <h2>{{dietist.id}}</h2>-->\n               \n                  \n             \n         \n    </div>\n   \n  </div>\n</ion-content>\n</ion-app>\n\n");

/***/ }),

/***/ "hq68":
/*!***********************************************!*\
  !*** ./src/app/edit-users/edit-users.page.ts ***!
  \***********************************************/
/*! exports provided: EditUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUsersPage", function() { return EditUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_users_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-users.page.html */ "e9B+");
/* harmony import */ var _edit_users_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-users.page.scss */ "DkZu");
/* harmony import */ var _modal_edit_clients_modal_edit_clients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../modal-edit-clients/modal-edit-clients.page */ "w7DY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_editar_modal_editar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-editar/modal-editar.page */ "LEsy");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");









let EditUsersPage = class EditUsersPage {
    constructor(db, global, toastController, ModalController) {
        this.db = db;
        this.global = global;
        this.toastController = toastController;
        this.ModalController = ModalController;
        this.newFormulaList = [];
        this.arrayClients = [{
                id: "",
                data: {}
            }];
        this.arrayClientsFinals = [{
                id: "",
                data: {},
                name: ""
            }];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.arrayClientsFinals = [];
        this.arrayClients = [];
        this.llistatClients = [];
        this.getClientsList();
    }
    static reloadPage() {
        window.location.reload();
    }
    openAddClientModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const modal = yield this.ModalController.create({
                    component: _modal_edit_clients_modal_edit_clients_page__WEBPACK_IMPORTED_MODULE_3__["ModalEditClientsPage"],
                    componentProps: {}
                });
                return yield modal.present();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    editClientModal(clientData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const modal = yield this.ModalController.create({
                    component: _modal_editar_modal_editar_page__WEBPACK_IMPORTED_MODULE_7__["ModalEditarPage"],
                    componentProps: {
                        id: clientData.id,
                        data: clientData.data
                    }
                });
                return yield modal.present();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    getClientsList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var user = JSON.parse(localStorage.getItem('user'));
            yield this.db.collection('admins').doc(user.uid).get().subscribe((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.clientData = element.data();
                console.log(this.clientData);
                if (this.clientData.clients == "") {
                    console.log("empty");
                }
                else {
                    var llistaBorrar = this.clientData.clients.split(', ');
                    const run = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        for (let i = 0; i <= llistaBorrar.length; i++) {
                            if (llistaBorrar[i] == "" || llistaBorrar[i] == undefined) {
                                console.log("one found");
                            }
                            else {
                                // llistaBorrar[i] = llistaBorrar[i].replace(/\s/g, "");;
                                this.llistatClients.push(llistaBorrar[i]);
                            }
                        }
                    });
                    run();
                    this.getList(this.llistatClients);
                }
            }));
        });
    }
    getList(llista) {
        var alreadyGot = [];
        const run1 = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let i = 0; i <= llista.length; i++) {
                const data = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var resultss = yield this.db.collection('users').doc(llista[i]).snapshotChanges();
                    yield resultss.subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (alreadyGot.indexOf(result.payload.id)) {
                            i++;
                        }
                        if (result && result.payload.data() != undefined) {
                            alreadyGot.push(result.payload.id);
                            yield this.arrayClientsFinals.push({
                                id: result.payload.id,
                                data: result.payload.data()
                            });
                        }
                    }));
                });
                data();
            }
        });
        run1();
    }
    refreshPage() {
        window.location.reload();
    }
};
EditUsersPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
EditUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-edit-users',
        template: _raw_loader_edit_users_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_users_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditUsersPage);



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
//# sourceMappingURL=default~edit-users-edit-users-module~modal-editar-modal-editar-module.js.map