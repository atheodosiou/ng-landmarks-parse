(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-login-login-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/login/login.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/login/login.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login-wrapper\" class=\"container-fluid h-100\">\n  <div class=\"row h-100 justify-content-center\">\n    <div class=\"col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 my-auto\">\n      <div class=\"card shadow-sm\">\n        <div class=\"card-header pt-4 border-bottom-0 bg-white\">\n          <h4 class=\"mb-0 text-center\">\n            Log in to Dubai Landmarks\n          </h4>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" class=\"form\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n            <div class=\"form-group\">\n              <label for=\"username\" class=\"col-form-label\">Username</label>\n              <input id=\"username\" type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"John Doe\" />\n            </div>\n            <!-- [(ngModel)]=\"username\" -->\n\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"col-form-label\">Password</label>\n              <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\"\n                placeholder=\"password\" />\n            </div>\n            <!-- [(ngModel)]=\"password\" -->\n            <button class=\"btn btn-block btn-primary\" type=\"submit\">Log in</button>\n            <!-- <button class=\"btn btn-block btn-secondary\" type=\"button\" (click)=\"onLogOut()\">Log out</button> -->\n          </form>\n        </div>\n        <div class=\"card-footer pb-4 bg-white border-top-0 py-3\">\n          <!-- <p class=\"text-center mb-0\">\n            New here? Create an\n            <a [routerLink]=\"['/signup']\">account</a>\n          </p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/login/login.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/pages/login/login.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#login-wrapper {\n  position: absolute;\n  background: url(\"/assets/images/dubai.jpg\") no-repeat center center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUVBQUE7RUFJQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2R1YmFpLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIiNsb2dpbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9kdWJhaS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/login/login.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/pages/login/login.component.ts ***!
          \*******************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_Toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Toast.service */ "./src/app/shared/services/Toast.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, formBuilder, router, toastService) {
                    this.authService = authService;
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.toastService = toastService;
                    this.loginForm = this.formBuilder.group({
                        username: '',
                        password: ''
                    });
                }
                LoginComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    this.authService.login(value.username, value.password).then(function (user) {
                        _this.toastService.show("Welcome " + user.getUsername() + "!", { classname: 'bg-success text-light', delay: 1000 });
                        _this.router.navigate(['/home']);
                    }).catch(function (error) {
                        _this.toastService.show("Login failed! Reason: " + error.message, { classname: 'bg-danger text-light', delay: 1500 });
                    });
                };
                LoginComponent.prototype.onLogOut = function () {
                    this.authService.logOut();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _services_Toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "login",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/shared/pages/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/pages/login/login.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/shared/pages/login/login.module.ts ***!
          \****************************************************/
        /*! exports provided: LoginModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function () { return LoginModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/shared/pages/login/login.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var LoginModule = /** @class */ (function () {
                function LoginModule() {
                }
                return LoginModule;
            }());
            LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                            {
                                path: "",
                                component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                            }
                        ]),
                    ],
                    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],],
                    exports: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
                })
            ], LoginModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=shared-pages-login-login-module-es2015.js.map
//# sourceMappingURL=shared-pages-login-login-module-es5.js.map
//# sourceMappingURL=shared-pages-login-login-module-es5.js.map