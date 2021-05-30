(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "9bfK":
/*!*****************************************!*\
  !*** ./src/app/clients/clients.page.ts ***!
  \*****************************************/
/*! exports provided: ClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPage", function() { return ClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clients_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clients.page.html */ "NXgi");
/* harmony import */ var _clients_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients.page.scss */ "NfJl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/authentication-service */ "umB2");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global.service */ "dVwY");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_clients_modal_clients_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-clients/modal-clients.page */ "wkTb");










let ClientsPage = class ClientsPage {
    constructor(router, db, authService, global, toastController, modalCtrl) {
        this.router = router;
        this.db = db;
        this.authService = authService;
        this.global = global;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.arrayDietists = [{
                id: "",
                data: {}
            }];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem('client')) {
            this.router.navigate(['diet']);
        }
        else {
            var dietistList;
            this.getDietistsList();
        }
    }
    getDietists() {
        return this.db.collection("admins").snapshotChanges();
    }
    getDietistsList() {
        this.getDietists().subscribe((result) => {
            this.arrayDietists = [];
            result.forEach((dietistData) => {
                this.arrayDietists.push({
                    id: dietistData.payload.doc.id,
                    data: dietistData.payload.doc.data()
                });
            });
        });
    }
    openModal(dietistID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalCtrl.create({
                    swipeToClose: true,
                    component: _modal_clients_modal_clients_page__WEBPACK_IMPORTED_MODULE_9__["ModalClientsPage"],
                    componentProps: {
                        value: dietistID
                    }
                });
                modal.onDidDismiss()
                    .then((data) => {
                    const nameOfUser = data['data'];
                });
                return yield modal.present();
            }
            catch (e) {
            }
        });
    }
};
ClientsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] }
];
ClientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-clients',
        template: _raw_loader_clients_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clients_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientsPage);



/***/ }),

/***/ "9iw0":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageModule", function() { return ClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients-routing.module */ "f2Yv");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients.page */ "9bfK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");








let ClientsPageModule = class ClientsPageModule {
};
ClientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientsPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
        ],
        declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_6__["ClientsPage"]]
    })
], ClientsPageModule);



/***/ }),

/***/ "NXgi":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button  defaultHref=\"home\" ></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <h2>Selecciona tu dietista</h2>\n  <ion-searchbar placeholder=\"Search...\" [(ngModel)]=\"filterTerm\" animated=\"true\"></ion-searchbar>\n \n    <a class=\"buttonDietists\" *ngFor=\"let dietist of arrayDietists| filter:filterTerm\"  (click)=\"openModal(dietist.data.name)\" >    \n    \n        {{dietist.data.name}}\n        <!--  <h2>{{dietist.id}}</h2>-->\n     \n        \n    </a>\n</ion-content>\n</ion-app>");

/***/ }),

/***/ "NfJl":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttonDietists {\n  display: inline-block;\n  padding: 0.75rem 1.25rem;\n  border-radius: 10rem;\n  color: #fff;\n  margin: 2%;\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 0.15rem;\n  transition: all 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n.buttonDietists:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0cf;\n  border-radius: 10rem;\n  z-index: -2;\n}\n.buttonDietists:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0%;\n  height: 100%;\n  background-color: #008fb3;\n  transition: all 0.3s;\n  border-radius: 10rem;\n  z-index: -1;\n}\n.buttonDietists:hover {\n  color: #fff;\n  cursor: pointer;\n}\n.buttonDietists:hover:before {\n  width: 100%;\n}\n.textOnAdmins {\n  background-color: #0cf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQXJCRTtFQXNCRixvQkFBQTtFQUNBLFdBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBSUE7RUFDSSxzQkFoREk7QUErQ1IiLCJmaWxlIjoiY2xpZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3I6ICMwY2Y7XG4uYnV0dG9uRGlldGlzdHN7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IC43NXJlbSAxLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMiU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgei1pbmRleDogLTI7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDE1JSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICB9XG59XG5cbi50ZXh0T25BZG1pbnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xufSJdfQ== */");

/***/ }),

/***/ "f2Yv":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageRoutingModule", function() { return ClientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients.page */ "9bfK");




const routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_3__["ClientsPage"]
    }
];
let ClientsPageRoutingModule = class ClientsPageRoutingModule {
};
ClientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=clients-clients-module.js.map