(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-article-article-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/article/article.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/article/article.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <ng-container *ngTemplateOutlet=\"landmark?data:loading\"></ng-container>\n</div>\n\n<ng-template #data>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-sm-12 col-md-7 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"d-flex align-items-center\">\n                    <img class=\"mr-2 img-thumbnail\"\n                    [src]=\"landmark.get('photo_thumb')?landmark.get('photo_thumb')._url:'assets/images/photo.svg'\"\n                    alt=\"image not found\" width=\"100\" />\n                    <div>\n                        <h4 class=\"card-title\">{{ landmark?.attributes?.title }}</h4>\n                        <p class=\"text-justify mb-2 text-success\">Short info</p>\n                        <p class=\"text-justify mb-2\">\n                          {{ landmark?.attributes?.short_info }}\n                        </p>\n                        <a [attr.href]=\"landmark?.attributes?.url\" target=\"_blanck\" class=\"badge badge-success\">Go to Official Site</a>\n                    </div>            \n                  </div>\n                    <p class=\"text-justify mb-2 text-success\">Description</p>\n                    <p class=\"text-justify mb-2\">\n                        {{ landmark?.attributes?.description }}\n                    </p>\n                   \n              </div>\n            </div>\n          </div>\n        </div>\n</ng-template>\n\n<ng-template #loading>\n  <loading></loading>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/article/article.component.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/shared/pages/article/article.component.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding-top: calc(70.38px + 3rem);\n  padding-bottom: 3rem;\n  min-height: 100vh;\n  background: #f7f7f7;\n}\n\n.img-responsive {\n  display: inline-block;\n}\n\n.img-thumbnail {\n  min-width: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvcGFnZXMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcGFnZXMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2VzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDcwLjM4cHggKyAzcmVtKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICB9XG4gIFxuICAuaW1nLXJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5pbWctdGh1bWJuYWlse1xuICAgIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgfSIsIi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nLXRvcDogY2FsYyg3MC4zOHB4ICsgM3JlbSk7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbn1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW1nLXRodW1ibmFpbCB7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/article/article.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/shared/pages/article/article.component.ts ***!
          \***********************************************************/
        /*! exports provided: ArticleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () { return ArticleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_landmark_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/landmark.service */ "./src/app/shared/services/landmark.service.ts");
            var ArticleComponent = /** @class */ (function () {
                function ArticleComponent(route, landmarkService) {
                    this.route = route;
                    this.landmarkService = landmarkService;
                }
                ArticleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var landmarkId = params['landmarkId'];
                        console.log(landmarkId);
                        if (_this.landmarkService.landmarks) {
                            _this.landmark = _this.landmarkService.landmarks.find(function (l) { return l.id === landmarkId; });
                            console.log(_this.landmark);
                        }
                        else {
                            console.log('Landmarks does not exists!');
                            _this.landmarkService.getLandmark(landmarkId).then(function (l) {
                                _this.landmark = l;
                            }).catch(function (error) {
                                console.log('Cannot get landmark by ID!');
                            });
                        }
                    });
                };
                return ArticleComponent;
            }());
            ArticleComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_landmark_service__WEBPACK_IMPORTED_MODULE_3__["LandmarkService"] }
            ]; };
            ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-article',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/article/article.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article.component.scss */ "./src/app/shared/pages/article/article.component.scss")).default]
                })
            ], ArticleComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/pages/article/article.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/pages/article/article.module.ts ***!
          \********************************************************/
        /*! exports provided: ArticleModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function () { return ArticleModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.component */ "./src/app/shared/pages/article/article.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
            var ArticleModule = /** @class */ (function () {
                function ArticleModule() {
                }
                return ArticleModule;
            }());
            ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                            {
                                path: "",
                                component: _article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"]
                            }
                        ]),
                        _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"]
                    ],
                    exports: [_article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"]],
                    declarations: [_article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"]]
                })
            ], ArticleModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=shared-pages-article-article-module-es2015.js.map
//# sourceMappingURL=shared-pages-article-article-module-es5.js.map
//# sourceMappingURL=shared-pages-article-article-module-es5.js.map