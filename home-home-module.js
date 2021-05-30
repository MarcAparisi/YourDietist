(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-app>\n<ion-header no-border>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<img src=\"../../assets/logo.png\" class=\"logo\">\n</ion-content>\n\n\n\n  \n<div class=\"ocean\" >\n  <div class=\"wave\"></div>\n  <div class=\"wave\"></div>\n</div>\n</ion-app>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".quitApp {\n  max-width: 5%;\n}\n\n.logoDiv {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20%;\n}\n\nion-card {\n  --background: rgba(255, 145, 0, 0.753);\n  --border-radius: 20px;\n  border-radius: 50px;\n  font: large;\n  color: black;\n  box-shadow: 2px 4px 6px 0 #ff8800;\n  padding: 25px;\n  width: 33, 3%;\n  min-height: 25%;\n}\n\nion-card:hover {\n  color: red;\n  cursor: pointer;\n}\n\n.cliente {\n  color: red;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  background: radial-gradient(ellipse at center, #fffeea 0%, #fffeea 35%, #B7E8EB 100%);\n  overflow: hidden;\n  position: absolute;\n}\n\n.ocean {\n  height: 5%;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background: #015871;\n}\n\n.wave {\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;\n  position: absolute;\n  top: -198px;\n  width: 6400px;\n  height: 198px;\n  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;\n  transform: translate3d(0, 0, 0);\n}\n\n.wave:nth-of-type(2) {\n  top: -175px;\n  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;\n  opacity: 1;\n}\n\n@keyframes wave {\n  0% {\n    margin-left: 0;\n  }\n  100% {\n    margin-left: -1600px;\n  }\n}\n\n@keyframes swell {\n  0%, 100% {\n    transform: translate3d(0, -25px, 0);\n  }\n  50% {\n    transform: translate3d(0, 5px, 0);\n  }\n}\n\n@media (min-width: 960px) {\n  .logo {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUdBO0VBQWEsWUFBQTtBQUNiOztBQUFBO0VBQ0UscUZBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UscUZBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdFQUFBO0VBQ0EsK0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSx1R0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsY0FBQTtFQUdGO0VBREE7SUFDRSxvQkFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLG1DQUFBO0VBRUY7RUFBQTtJQUNFLGlDQUFBO0VBRUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBREY7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWl0QXBwe1xuICBtYXgtd2lkdGg6IDUlO1xufVxuLmxvZ29EaXZ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjAlO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0NSwgMCwgMC43NTMpO1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQ6bGFyZ2U7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNnB4IDAgcmdiKDI1NSwgMTM2LCAwKTtcbiAgcGFkZGluZzogMjVweDtcbiAgd2lkdGg6MzMsMyU7XG4gIG1pbi1oZWlnaHQgOjI1JTtcbiAgXG59XG5pb24tY2FyZDpob3ZlcntcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNsaWVudGV7XG4gIGNvbG9yOiByZWQ7XG59XG5cblxuLy8gYmVzdCBzZWVuIGF0IDE1MDBweCBvciBsZXNzXG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkge1xuICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgyNTUsMjU0LDIzNCwxKSAwJSwgcmdiYSgyNTUsMjU0LDIzNCwxKSAzNSUsICNCN0U4RUIgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm9jZWFuIHsgXG4gIGhlaWdodDogNSU7XG4gIHdpZHRoOjEwMCU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBib3R0b206MDtcbiAgbGVmdDowO1xuICBiYWNrZ3JvdW5kOiAjMDE1ODcxO1xufVxuXG4ud2F2ZSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby84NTQ4Ni93YXZlLnN2ZykgcmVwZWF0LXg7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE5OHB4O1xuICB3aWR0aDogNjQwMHB4O1xuICBoZWlnaHQ6IDE5OHB4O1xuICBhbmltYXRpb246IHdhdmUgN3MgY3ViaWMtYmV6aWVyKCAwLjM2LCAwLjQ1LCAwLjYzLCAwLjUzKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLndhdmU6bnRoLW9mLXR5cGUoMikge1xuICB0b3A6IC0xNzVweDtcbiAgYW5pbWF0aW9uOiB3YXZlIDdzIGN1YmljLWJlemllciggMC4zNiwgMC40NSwgMC42MywgMC41MykgLS4xMjVzIGluZmluaXRlLCBzd2VsbCA3cyBlYXNlIC0xLjI1cyBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQGtleWZyYW1lcyB3YXZlIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTYwMHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dlbGwge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0yNXB4LDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDVweCwwKTtcbiAgfVxufVxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6OTYwcHgpIHsgXG4gIC5sb2dve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gfSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() {
    }
    OnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map