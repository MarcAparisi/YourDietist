(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["see-diets-page-see-diets-page-module"],{

/***/ "33f+":
/*!*********************************************************!*\
  !*** ./src/app/see-diets-page/see-diets-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SeeDietsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeDietsPagePageModule", function() { return SeeDietsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _see_diets_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./see-diets-page-routing.module */ "DZsT");
/* harmony import */ var _see_diets_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./see-diets-page.page */ "rD0U");







let SeeDietsPagePageModule = class SeeDietsPagePageModule {
};
SeeDietsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _see_diets_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeeDietsPagePageRoutingModule"]
        ],
        declarations: [_see_diets_page_page__WEBPACK_IMPORTED_MODULE_6__["SeeDietsPagePage"]]
    })
], SeeDietsPagePageModule);



/***/ }),

/***/ "DZsT":
/*!*****************************************************************!*\
  !*** ./src/app/see-diets-page/see-diets-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SeeDietsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeDietsPagePageRoutingModule", function() { return SeeDietsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _see_diets_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./see-diets-page.page */ "rD0U");




const routes = [
    {
        path: '',
        component: _see_diets_page_page__WEBPACK_IMPORTED_MODULE_3__["SeeDietsPagePage"]
    }
];
let SeeDietsPagePageRoutingModule = class SeeDietsPagePageRoutingModule {
};
SeeDietsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeeDietsPagePageRoutingModule);



/***/ }),

/***/ "DjRZ":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/see-diets-page/see-diets-page.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app  >\n  <ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" >\n          <ion-icon name=\"refresh-outline\" class=\"Buttons\" slot=\"start\"(click)=\"reloadData()\" ></ion-icon>\n          <ion-icon (click)=\"presentAlertConfirm()\" slot=\"end\"class=\"Buttons\" name=\"backspace\"></ion-icon>\n           \n        </ion-buttons>\n        <ion-buttons >\n            <h2 class=\"title\"> {{userDiet.name}}</h2>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\">\n          <a  (click)=\"moveToList()\" class=\"Buttons\" style=\"text-decoration: underline;\" > Lista de la compra</a>   \n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n<ion-content>\n  \n  <ion-slides class=\"slides\"  style=\"padding-bottom: 10%;\" [options]=\"slideOpts\" >\n    \n    <ion-slide>\n      \n      <ion-grid fixed=\"true\">\n        \n          <h1>Lunes</h1>\n\n          <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n        <ion-row>\n\n          \n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card1\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.dilluns_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card2\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dilluns_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dilluns_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dilluns_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dilluns_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n          \n      \n      </ion-grid>    \n    \n  \n  \n  \n    </ion-slide>\n    \n     \n    <ion-slide>\n      \n      <ion-grid fixed=\"true\">\n        \n\n          <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n          <h1>Martes</h1>\n\n          <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n    \n        \n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card2\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.dimarts_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimarts_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card1\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimarts_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimarts_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimarts_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-grid>    \n    \n  \n  \n  \n    </ion-slide>\n    \n    <ion-slide>\n        \n      <ion-grid fixed=\"true\">\n        <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n          <h1>Miércoles</h1>\n\n          <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n        \n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card2\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.dimecres_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimecres_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card1\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimecres_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimecres_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dimecres_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-grid>    \n    \n  \n  \n    </ion-slide>\n    <ion-slide>\n        \n      <ion-grid fixed=\"true\">\n        <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n          <h1>Jueves</h1>\n\n          <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n        \n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card2\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.dijous_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dijous_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card1\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dijous_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dijous_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dijous_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-grid>    \n    \n  \n  \n    </ion-slide>\n    <ion-slide>\n        \n      <ion-grid fixed=\"true\">\n        <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n        <h1>Viernes</h1>\n\n        <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n        \n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card2\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.divendres_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.divendres_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card1\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.divendres_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.divendres_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.divendres_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-grid>    \n    \n  \n  \n    </ion-slide>\n    <ion-slide>\n        \n      <ion-grid fixed=\"true\">\n        <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n          <h1>Sábado</h1>\n\n          <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n        \n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card2\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.dissabte_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dissabte_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card1\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dissabte_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dissabte_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.dissabte_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-grid>    \n    \n  \n  \n    </ion-slide>\n    <ion-slide>\n        \n      <ion-grid fixed=\"true\">\n        <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n        <h1>Domingo</h1>\n\n          <ion-icon name=\"caret-forward-outline\" (click)=\"this.slidepast()\" ></ion-icon>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n            <ion-card class=\"card2\">\n              <ion-card-title>\n                Almuerzo media mañana\n              </ion-card-title>\n              <ion-card-content>\n              <h3>{{userDiet.diumenge_esmorzar}}</h3>\n            </ion-card-content>\n        \n            </ion-card>\n          </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Comida\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.diumenge_dinar}}  </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div>\n              <ion-card class=\"card1\">\n                <ion-card-title>\n                  Merienda\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.diumenge_berenar}}  </h3>\n              </ion-card-content>\n            \n              </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-card class=\"card5\">\n                <ion-card-title>\n                  Cena\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.diumenge_sopar}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-card class=\"card4\">\n                <ion-card-title>\n                  Consejos del dietista\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.diumenge_consells}}  </h3>\n              </ion-card-content>\n              </ion-card> \n            \n            </div>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-grid>    \n    \n  \n  \n    </ion-slide>\n    <ion-slide>\n        \n      <ion-grid fixed=\"true\">\n        <ion-icon name=\"caret-back-outline\" (click)=\"this.slidenext()\" ></ion-icon>\n        <h1>Lista de la compra</h1>\n        \n        <ion-row>\n          \n          <ion-col>\n            <div>\n              <ion-card class=\"card3\">\n                <ion-card-title>\n                  Lista de la compra\n                </ion-card-title>\n                <ion-card-content>\n                <h3>{{userDiet.shoppingList}} </h3>\n              </ion-card-content>\n          \n              </ion-card>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>    \n    \n  \n  \n    </ion-slide>\n   \n\n  </ion-slides>\n</ion-content>\n</ion-app>\n\n<!--<ion-app>\n  <ion-button (click)=\"reloadData()\" >\n    Actualitzar la dieta (Recomendable)\n  </ion-button>\n\n  \n\n      <h1>Tu dieta de la semana</h1>\n      <ion-card>\n        <ion-card-header>\n          Desayuno\n        </ion-card-header>\n        <ion-card-content>\n          <p >    \n            {{userDiet.dilluns_esmorzar}}    \n        </p>\n        </ion-card-content>\n      </ion-card>\n        <ion-card>\n        <ion-card-header>\n          Comida\n        </ion-card-header>\n        <ion-card-content>\n          <p >    \n            {{userDiet.dilluns_dinar}}\n        </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-header>\n          Merienda\n        </ion-card-header>\n        <ion-card-content>\n          <p >    \n            {{userDiet.dilluns_berenar}}  \n        </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-header>\n          Cena\n        </ion-card-header>    \n        <ion-card-content>\n          <p >    \n            {{userDiet.dilluns_sopar}}         \n        </p>\n        </ion-card-content>\n      \n      </ion-card>\n    \n   \n    \n  \n    \n\n</ion-app>-->");

/***/ }),

/***/ "nbxU":
/*!*********************************************************!*\
  !*** ./src/app/see-diets-page/see-diets-page.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  overflow-y: scroll;\n  --bullet-background:rgb(0, 0, 0);\n  height: 100%;\n  background-color: #fafafa;\n}\n\nion-row {\n  justify-content: center;\n}\n\nion-card-title {\n  font-size: large;\n}\n\nion-icon {\n  display: inline-block;\n  color: #3b3b3b;\n}\n\nh1 {\n  display: inline-block;\n  margin-right: 10%;\n  font: bold;\n  font-size: larger;\n  margin-left: 10%;\n}\n\n.row1 {\n  min-width: 100%;\n  min-height: 25%;\n}\n\nion-toolbar {\n  --background: rgb(250, 250, 250);\n}\n\nion-header {\n  background-color: #fafafa;\n}\n\nion-title {\n  margin-top: 2%;\n  background-color: #fafafa;\n}\n\nion-content {\n  background-color: #fafafa;\n}\n\nion-grid {\n  --ion-grid-padding: 1%;\n  --ion-grid-width: 90%;\n  margin-bottom: 3%;\n  background-color: #fafafa;\n}\n\nh3 {\n  overflow: auto;\n}\n\n.card1 {\n  background-color: #ffe8e2;\n}\n\n.card2 {\n  background-color: #ddffff;\n}\n\n.card3 {\n  background-color: #fffcce;\n}\n\n.card4 {\n  background-color: #ffcbcb;\n}\n\n.card5 {\n  background-color: #ffd0e9;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n  width: 80%;\n}\n\n.Buttons {\n  min-width: 50%;\n  min-height: 50%;\n  display: block;\n  background-color: #fafafa;\n}\n\nion-app {\n  background-color: #fafafa;\n}\n\nion-buttons {\n  background-color: #fafafa;\n}\n\nh2 {\n  display: inline-block;\n  font-size: 35px;\n  text-align: center;\n  width: 80%;\n  margin-top: 2%;\n  vertical-align: middle;\n}\n\n.title {\n  display: block;\n}\n\n.title:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlZS1kaWV0cy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJRTtFQUNFLHVCQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtBQURKOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFJSjs7QUFEQTtFQUNFLGNBQUE7RUFDRSx5QkFBQTtBQUlKOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSEE7RUFDRSx5QkFBQTtBQU1GOztBQUZBO0VBQ0EseUJBQUE7QUFLQTs7QUFGQTtFQUNBLHlCQUFBO0FBS0E7O0FBRkE7RUFDRSx5QkFBQTtBQUtGOztBQURBO0VBQ0EseUJBQUE7QUFJQTs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBRkE7RUFFRSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBSEE7RUFHRSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0YiLCJmaWxlIjoic2VlLWRpZXRzLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tc2xpZGVzIHtcbiBcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDpyZ2IoMCwgMCwgMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTs7XG4gIFxuICB9XG4gIGlvbi1yb3d7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbiAgfVxuICBpb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIGlvbi1pY29ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xuICB9XG4gIGgxe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBmb250OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbiAgLnJvdzF7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI1JTtcbiAgfVxuICBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTs7XG4gIH1cbiAgaW9uLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gIH1cblxuaW9uLXRpdGxle1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgXG59XG5pb24tY29udGVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xufVxuaW9uLWdyaWR7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMSU7XG4gIC0taW9uLWdyaWQtd2lkdGg6IDkwJTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcbn1cbmgze1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNhcmQxe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzIsIDIyNik7XG5cbn1cblxuLmNhcmQye1xuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjU1LCAyNTUpO1xufVxuXG4uY2FyZDN7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTIsIDIwNik7XG59XG5cbi5jYXJkNHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAzLCAyMDMpO1xuXG59XG5cbi5jYXJkNXtcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwOCwgMjMzKTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgd2lkdGg6ODAlO1xuICBcbn1cbi5CdXR0b25ze1xuICBtaW4td2lkdGg6IDUwJTtcbiAgbWluLWhlaWdodDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xufVxuaW9uLWFwcHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICBcbn1cbmlvbi1idXR0b25ze1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcbn1cbmgye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi50aXRsZXtcblxuICBcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGU6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "rD0U":
/*!*******************************************************!*\
  !*** ./src/app/see-diets-page/see-diets-page.page.ts ***!
  \*******************************************************/
/*! exports provided: SeeDietsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeDietsPagePage", function() { return SeeDietsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_see_diets_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./see-diets-page.page.html */ "DjRZ");
/* harmony import */ var _see_diets_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./see-diets-page.page.scss */ "nbxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let SeeDietsPagePage = class SeeDietsPagePage {
    constructor(alertController, router, db) {
        this.alertController = alertController;
        this.router = router;
        this.db = db;
        this.slideOpts = {
            initialSlide: 0,
            autoHeight: true,
            speed: 400
        };
        let currentDate = new Date();
        let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        this.days = weekdays[currentDate.getDay()];
        if (this.days == "monday") {
            this.initialSlide = 0;
        }
        if (this.days == "tuesday") {
            this.initialSlide = 1;
        }
        if (this.days == "wednesday") {
            this.initialSlide = 2;
        }
        if (this.days == "thursday") {
            this.initialSlide = 3;
        }
        if (this.days == "friday") {
            this.initialSlide = 4;
        }
        if (this.days == "saturday") {
            this.initialSlide = 5;
        }
        if (this.days == "sunday") {
            this.initialSlide = 6;
        }
    }
    ionViewDidEnter() {
        this.slides.slideTo(this.initialSlide, 0);
    }
    slidenext() {
        this.slides.slidePrev();
    }
    slidepast() {
        this.slides.slideNext();
    }
    ngOnInit() {
        if (localStorage.getItem('client')) {
            this.getDiet();
            console.log(this.userDiet);
        }
        else {
            this.router.navigate['clients'];
        }
    }
    getDiet() {
        this.userDiet = JSON.parse(localStorage.getItem('client'));
    }
    reloadData() {
        this.getUser(this.userDiet.id);
    }
    removeData() {
        console.log("BEFOREEEE" + localStorage);
        localStorage.removeItem('client');
        this.router.navigate(['clients']);
        console.log("AFTEEER" + localStorage);
    }
    getUser(userSelected) {
        this.userDiet = [];
        localStorage.removeItem('client');
        this.db.collection('users').snapshotChanges().subscribe(data => {
            this.userDiet = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    name: e.payload.doc.data()['name'],
                    email: e.payload.doc.data()['email'],
                    mobile: e.payload.doc.data()['mobile'],
                    weight: e.payload.doc.data()['weight'],
                    height: e.payload.doc.data()['height'],
                    dietistID: e.payload.doc.data()['dietistID'],
                    isAdmin: e.payload.doc.data()['isAdmin'],
                    dilluns_esmorzar: e.payload.doc.data()['dilluns_esmorzar'],
                    dilluns_dinar: e.payload.doc.data()['dilluns_dinar'],
                    dilluns_berenar: e.payload.doc.data()['dilluns_berenar'],
                    dilluns_sopar: e.payload.doc.data()['dilluns_sopar'],
                    dilluns_consells: e.payload.doc.data()['dilluns_consells'],
                    dimarts_esmorzar: e.payload.doc.data()['dimarts_esmorzar'],
                    dimarts_dinar: e.payload.doc.data()['dimarts_dinar'],
                    dimarts_berenar: e.payload.doc.data()['dimarts_berenar'],
                    dimarts_sopar: e.payload.doc.data()['dimarts_sopar'],
                    dimarts_consells: e.payload.doc.data()['dimarts_consells'],
                    dimecres_esmorzar: e.payload.doc.data()['dimecres_esmorzar'],
                    dimecres_dinar: e.payload.doc.data()['dimecres_dinar'],
                    dimecres_berenar: e.payload.doc.data()['dimecres_berenar'],
                    dimecres_sopar: e.payload.doc.data()['dimecres_sopar'],
                    dimecres_consells: e.payload.doc.data()['dimecres_consells'],
                    dijous_esmorzar: e.payload.doc.data()['dijous_esmorzar'],
                    dijous_dinar: e.payload.doc.data()['dijous_dinar'],
                    dijous_berenar: e.payload.doc.data()['dijous_berenar'],
                    dijous_sopar: e.payload.doc.data()['dijous_sopar'],
                    dijous_consells: e.payload.doc.data()['dijous_consells'],
                    divendres_esmorzar: e.payload.doc.data()['divendres_esmorzar'],
                    divendres_dinar: e.payload.doc.data()['divendres_dinar'],
                    divendres_berenar: e.payload.doc.data()['divendres_berenar'],
                    divendres_sopar: e.payload.doc.data()['divendres_sopar'],
                    divendres_consells: e.payload.doc.data()['divendres_consells'],
                    dissabte_esmorzar: e.payload.doc.data()['dissabte_esmorzar'],
                    dissabte_dinar: e.payload.doc.data()['dissabte_dinar'],
                    dissabte_berenar: e.payload.doc.data()['dissabte_berenar'],
                    dissabte_sopar: e.payload.doc.data()['dissabte_sopar'],
                    dissabte_consells: e.payload.doc.data()['dissabte_consells'],
                    diumenge_esmorzar: e.payload.doc.data()['diumenge_esmorzar'],
                    diumenge_dinar: e.payload.doc.data()['diumenge_dinar'],
                    diumenge_berenar: e.payload.doc.data()['diumenge_berenar'],
                    diumenge_sopar: e.payload.doc.data()['diumenge_sopar'],
                    diumenge_consells: e.payload.doc.data()['diumenge_consells'],
                    shoppingList: e.payload.doc.data()['shoppingList']
                };
            });
            console.log(this.userDiet);
            this.getAllData(userSelected);
        });
    }
    moveToList() {
        this.slides.slideTo(8, 400);
    }
    getAllData(user) {
        user = user.replace(/\s+/g, ' ').trim();
        this.userDiet.forEach(element => {
            if ((element.id) === user) {
                console.log(element);
                console.log("in");
                sessionStorage.setItem('client', JSON.stringify(element));
                localStorage.setItem('client', JSON.stringify(element));
                console.log(sessionStorage.getItem('client'));
                console.log(localStorage);
            }
            if (localStorage.getItem('client')) {
                location.reload();
            }
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alerta',
                message: 'Si haces esto necesitarás volver a poner tu código, esto solo deberías hacerlo si cambias de dietista. Estás seguro/a?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Sí',
                        handler: () => {
                            this.removeData();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SeeDietsPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
SeeDietsPagePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"],] }]
};
SeeDietsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-see-diets-page',
        template: _raw_loader_see_diets_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_see_diets_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SeeDietsPagePage);



/***/ })

}]);
//# sourceMappingURL=see-diets-page-see-diets-page-module.js.map