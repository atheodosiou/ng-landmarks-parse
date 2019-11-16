(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<!-- Show tost messages -->\n<app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/landmark/landmark.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/landmark/landmark.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-3\" (click)=\"onLandmarkClick()\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center\">\n      <img class=\"mr-2\"\n        [src]=\"landmark.attributes.photo_thumb?landmark.attributes.photo_thumb._url:'assets/images/photo.svg'\"\n        alt=\"not image\" height=\"100\" (click)=\"onClick(content)\" />\n      <div>\n        <h6>\n          <a [routerLink]=\"['/landmark/' + landmark?.id]\">{{ landmark?.attributes?.title }}</a>\n        </h6>\n        <ng-container *ngTemplateOutlet=\"isCollapsed ? shortText : fullText\"></ng-container>\n        <ng-template #shortText>\n          <p class=\"text-justify mb-0\">\n            {{ landmark?.attributes?.short_info | ellipsis: 120 }}\n            <span class=\"cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\">read more</span>\n          </p>\n        </ng-template>\n        <ng-template #fullText>\n          <p class=\"text-justify mb-0\">\n            {{ landmark?.attributes?.short_info }}\n            <span class=\"cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\">show less</span>\n          </p>\n        </ng-template>\n        <!-- <a\n          class=\"btn btn-link float-right\"\n         \n        >\n          Read more\n        </a> -->\n      </div>\n      <!-- <div>\n        <h6>\n          <a [href]=\"landmark?.attributes?.url\" target=\"_blank\">{{ landmark?.attributes?.title }}</a>\n        </h6>\n        <ng-container\n          *ngTemplateOutlet=\"isCollapsed ? shortText : fullText\"\n        ></ng-container>\n        <ng-template #shortText>\n          <p class=\"text-justify mb-0\">\n            {{ landmark?.attributes?.short_info | ellipsis: 120 }}\n            <span class=\"cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\"\n              >read more</span\n            >\n          </p>\n        </ng-template>\n        <ng-template #fullText>\n          <p class=\"text-justify mb-0\">\n            {{ landmark?.attributes?.short_info }}\n            <span class=\"cursor-pointer\" (click)=\"isCollapsed = !isCollapsed\"\n              >show less</span\n            >\n          </p>\n        </ng-template>\n        <a\n          class=\"btn btn-link float-right\"\n          [routerLink]=\"['/landmark/' + landmark?.id]\"\n        >\n          Read more\n        </a>\n      </div> -->\n    </div>\n  </div>\n</div>\n\n\n<!-- Image Modal -->\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{landmark?.attributes?.title}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body d-flex justify-content-center\">\n    <img [src]=\"landmark.attributes.photo?landmark.attributes.photo._url:'assets/images/photo.svg'\" alt=\"not image\"\n      class=\"img-fluid\" />\n  </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <a\n    class=\"navbar-brand\"\n    [routerLink]=\"['/']\"\n    routerLinkActive=\"router-link-active\"\n    >Dubai <span class=\"text-success\">Landmarks</span></a\n  >\n  <button\n    class=\"navbar-toggler border-0\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbar-collapse\"\n    aria-controls=\"navbar-collapse\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"fa fa-bars text-success\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n    <ul class=\"navbar-nav ml-auto\">\n      <ng-container\n        *ngTemplateOutlet=\"(auth | async)?.isLogged ? loggedIn : loggedOut\"\n      ></ng-container>\n      <ng-template #loggedIn>\n        <li class=\"nav-item\">\n          <a\n            [routerLink]=\"['/dashboard']\"\n            class=\"nav-link\"\n            [routerLinkActive]=\"['text-success', 'font-weight-bold']\"\n            >Dashboard</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            (click)=\"logOut()\"\n            class=\"nav-link\"\n            [routerLinkActive]=\"['text-success', 'font-weight-bold']\"\n            >Logout</a\n          >\n        </li>\n      </ng-template>\n\n      <ng-template #loggedOut>\n        <li class=\"nav-item\">\n          <a\n            [routerLink]=\"['/login']\"\n            class=\"nav-link\"\n            [routerLinkActive]=\"['text-success', 'font-weight-bold']\"\n            >Login</a\n          >\n        </li>\n      </ng-template>\n      <!-- <li class=\"nav-item\">\n        <a\n          [routerLink]=\"['/dashboard']\"\n          class=\"nav-link\"\n          [routerLinkActive]=\"['text-success', 'font-weight-bold']\"\n          >Dashboard</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          (click)=\"logOut()\"\n          class=\"nav-link\"\n          [routerLinkActive]=\"['text-success', 'font-weight-bold']\"\n          >Logout</a\n        >\n      </li>\n\n      <li class=\"nav-item\">\n        <a\n          [routerLink]=\"['/login']\"\n          class=\"nav-link\"\n          [routerLinkActive]=\"['text-success', 'font-weight-bold']\"\n          >Login</a\n        >\n      </li> -->\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_gaurds_AuthGaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/gaurds/AuthGaurd.service */ "./src/app/shared/gaurds/AuthGaurd.service.ts");
/* harmony import */ var _shared_gaurds_loginGuard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/gaurds/loginGuard.service */ "./src/app/shared/gaurds/loginGuard.service.ts");





const routes = [
    {
        path: "home",
        loadChildren: () => Promise.all(/*! import() | shared-pages-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("shared-pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./shared/pages/home/home.module */ "./src/app/shared/pages/home/home.module.ts")).then(l => l.HomeModule)
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() | shared-pages-login-login-module */ "shared-pages-login-login-module").then(__webpack_require__.bind(null, /*! ./shared/pages/login/login.module */ "./src/app/shared/pages/login/login.module.ts")).then(l => l.LoginModule),
        canActivate: [_shared_gaurds_loginGuard_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    },
    {
        path: "landmark/:landmarkId",
        loadChildren: () => Promise.all(/*! import() | shared-pages-article-article-module */[__webpack_require__.e("common"), __webpack_require__.e("shared-pages-article-article-module")]).then(__webpack_require__.bind(null, /*! ./shared/pages/article/article.module */ "./src/app/shared/pages/article/article.module.ts")).then(a => a.ArticleModule)
    },
    {
        path: "dashboard",
        loadChildren: () => Promise.all(/*! import() | shared-pages-dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("shared-pages-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./shared/pages/dashboard/dashboard.module */ "./src/app/shared/pages/dashboard/dashboard.module.ts")).then(d => d.DashboardModule),
        canActivate: [_shared_gaurds_AuthGaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]]
    },
    {
        path: "404",
        loadChildren: () => __webpack_require__.e(/*! import() | shared-pages-not-found-not-found-module */ "shared-pages-not-found-not-found-module").then(__webpack_require__.bind(null, /*! ./shared/pages/not-found/not-found.module */ "./src/app/shared/pages/not-found/not-found.module.ts")).then(l => l.NotFoundModule)
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "**",
        redirectTo: "404"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_shared_gaurds_AuthGaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"], _shared_gaurds_loginGuard_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);






let AppComponent = class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = "parse-dashboard";
        parse__WEBPACK_IMPORTED_MODULE_5__["initialize"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appId);
        parse__WEBPACK_IMPORTED_MODULE_5__["serverURL"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL;
        console.log('PARSE INITIALIZED');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_services_landmark_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/landmark.service */ "./src/app/shared/services/landmark.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_Toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/Toast.service */ "./src/app/shared/services/Toast.service.ts");
/* harmony import */ var _shared_components_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/toaster/toaster.module */ "./src/app/shared/components/toaster/toaster.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/store/reducers/auth.reducer */ "./src/store/reducers/auth.reducer.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
                auth: src_store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_12__["AuthReducer"]
            }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _shared_components_toaster_toaster_module__WEBPACK_IMPORTED_MODULE_10__["ToasterModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })],
        providers: [_shared_services_landmark_service__WEBPACK_IMPORTED_MODULE_7__["LandmarkService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _shared_services_Toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/components/landmark/landmark.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/landmark/landmark.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cursor-pointer {\n  color: #95a5a6;\n}\n.cursor-pointer:hover {\n  color: #7b8a8b;\n  cursor: pointer;\n}\nimg:hover {\n  cursor: pointer;\n}\n.img-fluid {\n  max-height: 75vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYW5kbWFyay9sYW5kbWFyay5jb21wb25lbnQuc2NzcyIsIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2Fzc2V0cy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xhbmRtYXJrL2xhbmRtYXJrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0NXUztBQ1hYO0FGQ0U7RUFDRSxjQ1VPO0VEVFAsZUFBQTtBRUNKO0FGR0E7RUFDRSxlQUFBO0FFQUY7QUZHQTtFQUNFLDJCQUFBO0FFQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYW5kbWFyay9sYW5kbWFyay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3ZhcmlhYmxlc1wiO1xyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRkYXJrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuaW1nOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWctZmx1aWR7XHJcbiAgbWF4LWhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xyXG59IiwiLy8gRmxhdGx5IDQuMy4xXG4vLyBCb290c3dhdGNoXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2VjZjBmMSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2I0YmNjMiAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzk1YTVhNiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzdiOGE4YiAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGJsdWU6ICAgICMyQzNFNTAgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI0U3NEMzQyAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNGMzlDMTIgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzE4QkM5QyAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMzNDk4REIgIWRlZmF1bHQ7XG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTc1ICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMC45Mzc1cmVtICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAzcmVtICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMi41cmVtICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0ICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHN1Y2Nlc3MgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgIGRhcmtlbigkc3VjY2VzcywgMTUlKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1ob3Zlci1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICBsaWdodGVuKCRzdWNjZXNzLCAxNSUpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMC42MjVyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAwLjYyNXJlbSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuLy8gQ2xvc2VcblxuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiIsIi5jdXJzb3ItcG9pbnRlciB7XG4gIGNvbG9yOiAjOTVhNWE2O1xufVxuLmN1cnNvci1wb2ludGVyOmhvdmVyIHtcbiAgY29sb3I6ICM3YjhhOGI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgbWF4LWhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/landmark/landmark.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/landmark/landmark.component.ts ***!
  \******************************************************************/
/*! exports provided: LandmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandmarkComponent", function() { return LandmarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let LandmarkComponent = class LandmarkComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.isCollapsed = true;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
            console.log('Modal closed!');
        }, (reason) => {
            console.log('Modal cannot close correctly!');
        });
    }
    onLandmarkClick() {
        this.onSelect.emit(this.landmark);
    }
};
LandmarkComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LandmarkComponent.prototype, "landmark", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LandmarkComponent.prototype, "onSelect", void 0);
LandmarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "landmark",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landmark.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/landmark/landmark.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landmark.component.scss */ "./src/app/shared/components/landmark/landmark.component.scss")).default]
    })
], LandmarkComponent);



/***/ }),

/***/ "./src/app/shared/components/landmark/landmark.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/landmark/landmark.module.ts ***!
  \***************************************************************/
/*! exports provided: LandmarkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandmarkModule", function() { return LandmarkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _landmark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landmark.component */ "./src/app/shared/components/landmark/landmark.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/ellipsis.pipe */ "./src/app/shared/pipes/ellipsis.pipe.ts");






let LandmarkModule = class LandmarkModule {
};
LandmarkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [_landmark_component__WEBPACK_IMPORTED_MODULE_3__["LandmarkComponent"], _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_5__["EllipsisPipe"]],
        exports: [_landmark_component__WEBPACK_IMPORTED_MODULE_3__["LandmarkComponent"]]
    })
], LandmarkModule);



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-toggler:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItdG9nZ2xlcjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufSIsIi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
        // TO-DO
        // I have to update the logedIn stare in order to chande the navbar links!
        this.logedIn = false;
    }
    ngOnInit() {
        this.logedIn = this.authService.isLogedIn;
        this.auth = this.store.select(state => state.auth);
        this.auth.subscribe(s => console.log(s.isLogged));
    }
    logOut() {
        this.authService.logOut();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "logedIn", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "navbar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/shared/components/navbar/navbar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.module.ts ***!
  \***********************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NavbarModule = class NavbarModule {
};
NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "./src/app/shared/components/toaster/toaster-container.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/toaster/toaster-container.component.ts ***!
  \**************************************************************************/
/*! exports provided: ToastsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastsContainer", function() { return ToastsContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_Toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Toast.service */ "./src/app/shared/services/Toast.service.ts");



let ToastsContainer = class ToastsContainer {
    constructor(toastService) {
        this.toastService = toastService;
    }
    isTemplate(toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]; }
};
ToastsContainer.ctorParameters = () => [
    { type: _services_Toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
];
ToastsContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toasts',
        template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
        host: { '[class.ngb-toasts]': 'true' }
    })
], ToastsContainer);



/***/ }),

/***/ "./src/app/shared/components/toaster/toaster.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/toaster/toaster.module.ts ***!
  \*************************************************************/
/*! exports provided: ToasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterModule", function() { return ToasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _toaster_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toaster-container.component */ "./src/app/shared/components/toaster/toaster-container.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let ToasterModule = class ToasterModule {
};
ToasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToastsContainer"]],
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToastModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        exports: [_toaster_container_component__WEBPACK_IMPORTED_MODULE_2__["ToastsContainer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToastModule"]]
    })
], ToasterModule);



/***/ }),

/***/ "./src/app/shared/gaurds/AuthGaurd.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/gaurds/AuthGaurd.service.ts ***!
  \****************************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let AuthGaurd = class AuthGaurd {
    constructor(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    //Checks if a user id logde in else stops the navigation and redirects him back to home
    canActivate(route, state) {
        console.log('Gaurd works!');
        console.log('Is loged in:', this.authService.isLogedIn);
        if (!this.authService.isLogedIn) {
            this.router.navigate(['/home']);
            // this.store.dispatch(new AuthLoggedInAction())
            return false;
        }
        else {
            // this.store.dispatch(new AuthLoggedOutAction())
            return true;
        }
    }
};
AuthGaurd.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
AuthGaurd = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthGaurd);



/***/ }),

/***/ "./src/app/shared/gaurds/loginGuard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/gaurds/loginGuard.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let LoginGuard = class LoginGuard {
    constructor(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        console.log('Is loged in:', this.authService.isLogedIn);
        if (this.authService.isLogedIn) {
            this.router.navigate(['/home']);
            // this.store.dispatch(new AuthLoggedOutAction())
            return false;
        }
        else {
            // this.store.dispatch(new AuthLoggedInAction())
            return true;
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/shared/pipes/ellipsis.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/ellipsis.pipe.ts ***!
  \***********************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EllipsisPipe = class EllipsisPipe {
    transform(value, maxChars) {
        return value.slice(0, maxChars).concat("...");
    }
};
EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: "ellipsis"
    })
], EllipsisPipe);



/***/ }),

/***/ "./src/app/shared/services/Toast.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/Toast.service.ts ***!
  \**************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(textOrTpl, options = {}) {
        this.toasts.push(Object.assign({ textOrTpl }, options));
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
};
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toast.service */ "./src/app/shared/services/Toast.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/store/actions/auth.actions */ "./src/store/actions/auth.actions.ts");







let AuthService = class AuthService {
    constructor(router, toasterService, store) {
        this.router = router;
        this.toasterService = toasterService;
        this.store = store;
        this._isLogedIn = false;
        // Parse.initialize(environment.appId,environment.javaScriptKey);
        // (Parse as any).serverURL=environment.serverURL;
    }
    set isLogedIn(value) {
        this._isLogedIn = value;
    }
    get isLogedIn() {
        if (window.localStorage.getItem('sessionToken')) {
            this._isLogedIn = true;
        }
        else {
            this._isLogedIn = false;
        }
        return this._isLogedIn;
    }
    /**
     * Used to login a use with the provided credentials
     * @param username Users credentials
     * @param password Users credentials
     */
    login(username, password) {
        return new Promise((resolve, reject) => {
            parse__WEBPACK_IMPORTED_MODULE_2__["User"].logIn(username, password).then((user) => {
                this.sessionToken = user.attributes.sessionToken;
                window.localStorage.setItem('sessionToken', this.sessionToken);
                console.log(parse__WEBPACK_IMPORTED_MODULE_2__["User"].current());
                this._isLogedIn = true;
                this.store.dispatch(new src_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthLoggedInAction"]());
                resolve(user);
            }).catch(error => {
                reject(error);
            });
        });
    }
    //Logs out a user
    logOut() {
        if (window.localStorage.getItem('sessionToken')) {
            window.localStorage.removeItem('sessionToken');
            this._isLogedIn = false;
            this.store.dispatch(new src_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthLoggedOutAction"]());
            this.toasterService.show('Loged out successfully!', { classname: 'bg-danger text-light', delay: 1500 });
            this.router.navigate(['/home']);
            // Returns Error => Database adapter error!!!
            // Parse.User.logOut();
            // Parse.User.logOut().then((data) => {
            //   console.log(data);
            // }).catch(error => {
            //   this.toasterService.show(`Logout failed! Reason: ${error.message}`, { classname: 'bg-danger text-light', delay: 2500 });
            // });
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _Toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/landmark.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/landmark.service.ts ***!
  \*****************************************************/
/*! exports provided: LandmarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandmarkService", function() { return LandmarkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _Toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toast.service */ "./src/app/shared/services/Toast.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let LandmarkService = class LandmarkService {
    constructor(toastService, http) {
        this.toastService = toastService;
        this.http = http;
    }
    get landmarks() {
        return this._landmarks;
    }
    set landmarks(value) {
        this._landmarks = value;
    }
    getLandmarks() {
        var Landmarks = parse__WEBPACK_IMPORTED_MODULE_2__["Object"].extend("Landmarks");
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Landmarks);
        query.ascending('order');
        return new Promise((resolve, reject) => {
            query.find()
                .then((landmarks) => {
                resolve(landmarks);
            }, (error) => {
                reject(error);
            });
        });
    }
    getLandmark(objectId) {
        var Landmarks = parse__WEBPACK_IMPORTED_MODULE_2__["Object"].extend("Landmarks");
        var query = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](Landmarks);
        return new Promise((resolve, reject) => {
            query.get(objectId)
                .then((landmark) => {
                resolve(landmark);
            }, (error) => {
                reject(error);
            });
        });
    }
    fileUpload(file) {
        if (file) {
            const parseFile = new parse__WEBPACK_IMPORTED_MODULE_2__["File"](file.name, file);
            parseFile.save().then(data => { console.log('File uploaded to parse server!', data); }).catch(error => { console.log('Could not updoad the file!'); });
        }
        else {
            console.log('File needed!');
        }
    }
    //Validates image file size
    isFileSizeAccepted(fileSize) {
        const size = Math.round((fileSize / 1024));
        if (size <= 5120) {
            // file smaller than or equal to 5Mbytes
            return true;
        }
        else {
            // file grater than 5Mbytes
            return false;
        }
    }
    showError(message, error) {
        if (error) {
            this.toastService.show(`${message} Reason: ${error.message || error}`, { classname: 'bg-danger text-light', delay: 1500 });
        }
        else {
            this.toastService.show(`${message}`, { classname: 'bg-danger text-light', delay: 1500 });
        }
    }
    /**
     * Create photo thumbnail with sharp library
     * @param landmarkId
     * @param photoUrl
     * @param sessionToken
     */
    createTumbnail(landmarkId, photoUrl, sessionToken) {
        return new Promise((resolve, reject) => {
            let body = {
                landmarkId: landmarkId,
                url: photoUrl,
                sessionToken: sessionToken
            };
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
            headers = headers.set('X-Parse-Application-Id', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appId).set('Content-Type', 'application/json').set('X-Parse-REST-API-Key', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].restApiKey);
            console.log('Headers', headers);
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL}/functions/thumbnail`, body, { headers: headers }).subscribe((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }
};
LandmarkService.ctorParameters = () => [
    { type: _Toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
LandmarkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LandmarkService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.module */ "./src/app/shared/components/navbar/navbar.module.ts");
/* harmony import */ var _components_landmark_landmark_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landmark/landmark.module */ "./src/app/shared/components/landmark/landmark.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__["NavbarModule"], _components_landmark_landmark_module__WEBPACK_IMPORTED_MODULE_3__["LandmarkModule"]],
        exports: [_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__["NavbarModule"], _components_landmark_landmark_module__WEBPACK_IMPORTED_MODULE_3__["LandmarkModule"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    serverURL: 'http://localhost:4242/parse',
    // serverURL: 'http://interviewfront.theodosiou-anastasios.com:4242/parse',
    appId: 'instashopInterviewAppId',
    googleMapsApiKey: 'AIzaSyBmi_OGF0-_U5oZ77rug2wbVsN8cA_7ge4',
    javaScriptKey: 'instashopJavascriptKey',
    restApiKey: 'instashopRestApiKey'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/store/actions/auth.actions.ts":
/*!*******************************************!*\
  !*** ./src/store/actions/auth.actions.ts ***!
  \*******************************************/
/*! exports provided: AuthActionTypes, AuthLoggedInAction, AuthLoggedOutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoggedInAction", function() { return AuthLoggedInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoggedOutAction", function() { return AuthLoggedOutAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGGED_IN"] = "[Auth] Logged In";
    AuthActionTypes["LOGGED_OUT"] = "[Auth] Logged Out";
})(AuthActionTypes || (AuthActionTypes = {}));
class AuthLoggedInAction {
    constructor() {
        this.type = AuthActionTypes.LOGGED_IN;
    }
}
class AuthLoggedOutAction {
    constructor() {
        this.type = AuthActionTypes.LOGGED_OUT;
    }
}


/***/ }),

/***/ "./src/store/reducers/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: AuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return AuthReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/store/actions/auth.actions.ts");


const initialState = { isLogged: false };
function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGGED_IN:
            return Object.assign({}, state, { isLogged: true });
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGGED_OUT:
            return Object.assign({}, state, { isLogged: false });
        default:
            return state;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/atheodosiou/Documents/development/ng-landmarks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map