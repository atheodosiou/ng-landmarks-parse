var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-dashboard-dashboard-module-ngfactory"], {
        /***/ "./src/app/shared/pages/dashboard/dashboard.component.ngfactory.js": 
        /*!*************************************************************************!*\
          !*** ./src/app/shared/pages/dashboard/dashboard.component.ngfactory.js ***!
          \*************************************************************************/
        /*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function () { return RenderType_DashboardComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function () { return View_DashboardComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function () { return View_DashboardComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function () { return DashboardComponentNgFactory; });
            /* harmony import */ var _dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component.scss.shim.ngstyle */ "./src/app/shared/pages/dashboard/dashboard.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_loading_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading/loading.component.ngfactory */ "./src/app/shared/components/loading/loading.component.ngfactory.js");
            /* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
            /* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/shared/pages/dashboard/dashboard.component.ts");
            /* harmony import */ var _services_landmark_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/landmark.service */ "./src/app/shared/services/landmark.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_DashboardComponent = [_dashboard_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_DashboardComponent, data: {} });
            function View_DashboardComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
            function View_DashboardComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.attributes == null) ? null : _v.context.$implicit.attributes.title)); _ck(_v, 3, 0, currVal_2); }); }
            function View_DashboardComponent_2(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 58, "form", [["class", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("submit" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onSubmit($event) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("reset" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onReset() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("ngSubmit" === en)) {
                            var pd_2 = (_co.onSubmit(_co.landmarkForm.value) !== false);
                            ad = (pd_2 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"], ["for", "landmark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Landmark"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "select", [["class", "form-control"], ["id", "landmark"], ["name", "landmark"]], null, [[null, "change"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("change" === en)) {
                            var pd_0 = (_co.onLandmarkSelect($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "option", [["disabled", ""], ["selected", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Choose a Landmark"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 9, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"], ["for", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 6, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "title"], ["id", "title"], ["type", "text"], ["value", "Landmark's Title"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
                        var ad = true;
                        if (("input" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("blur" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("compositionstart" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("compositionend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false);
                            ad = (pd_3 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 9, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"], ["for", "shortInfo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Short Info"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "shortInfo"], ["id", "shortInfo"], ["placeholder", "Landmark's Short Info"], ["rows", "5"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
                        var ad = true;
                        if (("input" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleInput($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("blur" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onTouched() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("compositionstart" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionStart() !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("compositionend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionEnd($event.target.value) !== false);
                            ad = (pd_3 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 9, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"], ["for", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 6, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "description"], ["id", "description"], ["placeholder", "Landmark's Description"], ["rows", "15"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
                        var ad = true;
                        if (("input" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._handleInput($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("blur" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onTouched() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("compositionstart" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionStart() !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("compositionend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionEnd($event.target.value) !== false);
                            ad = (pd_3 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 10, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"], ["for", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Photograph"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 7, "div", [["class", "col-sm-10 input-group mb-3"], ["id", "photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "div", [["class", "input-group-prepend"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "span", [["class", "input-group-text"], ["id", "inputGroupFileAddon01"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 3, "div", [["class", "custom-file"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, [["fileInput", 1]], null, 0, "input", [["aria-describedby", "inputGroupFileAddon01"], ["class", "custom-file-input"], ["id", "file"], ["type", "file"]], null, [[null, "change"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("change" === en)) {
                            var pd_0 = (_co.handleFileInput($event.target.files) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "label", [["class", "custom-file-label"], ["for", "file"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](56, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "button", [["class", " btn btn-block btn-success"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Update Landmark"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.landmarkForm; _ck(_v, 2, 0, currVal_7); var currVal_8 = _co.landmarks; _ck(_v, 15, 0, currVal_8); var currVal_16 = "title"; _ck(_v, 23, 0, currVal_16); var currVal_24 = "shortInfo"; _ck(_v, 33, 0, currVal_24); var currVal_32 = "description"; _ck(_v, 43, 0, currVal_32); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 20, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 40, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_33 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).value ? _co.fileName : "Choose File"); _ck(_v, 56, 0, currVal_33); var currVal_34 = !_co.selectedLandmark; _ck(_v, 57, 0, currVal_34); });
            }
            function View_DashboardComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "d-flex align-items-center justify-content-between mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h4", [["class", "text-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Updating selected landmark. Please wait!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "spinner-border text-success"], ["role", "status"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loading..."]))], null, null); }
            function View_DashboardComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loading", [], null, null, null, _components_loading_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_LoadingComponent_0"], _components_loading_loading_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_LoadingComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            function View_DashboardComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { modal: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "div", [["class", "row justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "col-sm-12 col-md-10 col-lg-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h2", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Administration Panel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h4", [["class", "text-secondary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Here you can edit a landmark and/or upload a photo for it"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["form", 2]], null, 0, null, View_DashboardComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["modal", 2]], null, 0, null, View_DashboardComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["loading", 2]], null, 0, null, View_DashboardComponent_5))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.landmarks ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)); _ck(_v, 10, 0, currVal_0); }, null); }
            function View_DashboardComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], [_services_landmark_service__WEBPACK_IMPORTED_MODULE_7__["LandmarkService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/shared/pages/dashboard/dashboard.component.scss.shim.ngstyle.js": 
        /*!*********************************************************************************!*\
          !*** ./src/app/shared/pages/dashboard/dashboard.component.scss.shim.ngstyle.js ***!
          \*********************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = [".container-fluid[_ngcontent-%COMP%] {\n  padding-top: calc(70.38px + 3rem);\n  padding-bottom: 3rem;\n  min-height: 100vh;\n  background: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDcwLjM4cHggKyAzcmVtKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuICAiLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoNzAuMzhweCArIDNyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59Il19 */"];
            /***/ 
        }),
        /***/ "./src/app/shared/pages/dashboard/dashboard.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/shared/pages/dashboard/dashboard.component.ts ***!
          \***************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
            /* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
            /* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_5__);
            //Creates uuids
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(landmarkService, formBuilder, modalService) {
                    this.landmarkService = landmarkService;
                    this.formBuilder = formBuilder;
                    this.modalService = modalService;
                    this.fileName = '';
                    //Initiallize Parse
                    parse__WEBPACK_IMPORTED_MODULE_4__["initialize"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appId);
                    parse__WEBPACK_IMPORTED_MODULE_4__["serverURL"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL;
                    this.landmarkForm = this.formBuilder.group({
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Landmark\'s Title', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        shortInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Landmark\'s Short Info', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Landmark\'s Description', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.landmarkService.getLandmarks().then(function (landmarks) {
                        _this.landmarks = landmarks;
                        console.log(landmarks);
                    }).catch(function (error) { return console.error(error); });
                };
                DashboardComponent.prototype.onLandmarkSelect = function (landmarkID) {
                    this.selectedLandmark = this.landmarks.find(function (l) { return l.id === landmarkID; });
                    this.landmarkForm.setValue({ title: this.selectedLandmark.attributes.title, shortInfo: this.selectedLandmark.attributes.short_info, description: this.selectedLandmark.attributes.description });
                };
                DashboardComponent.prototype.handleFileInput = function (files) {
                    this.photoToBeUploaded = files.item(0);
                    console.log(files.item(0));
                    if (this.isFileSizeAccepted(files.item(0).size)) {
                        this.fileName = files.item(0).name;
                        this.photoToBeUploaded = files.item(0);
                    }
                    else {
                        console.log('File size not accepted!');
                        alert('File size not accepted!');
                        if (this.photoToBeUploaded) {
                            this.photoToBeUploaded = null;
                            this.fileName = 'Choose file';
                        }
                    }
                };
                DashboardComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    this.showModal(this.modal);
                    // console.log('Form data:',this.landmarkForm.value);
                    if (this.photoToBeUploaded && this.selectedLandmark) {
                        //set unique name for the file
                        //I am doing this in order not to check for valid file names ....
                        //Parse does not accept some special chars...
                        var photo = new parse__WEBPACK_IMPORTED_MODULE_4__["File"](uuid_v4__WEBPACK_IMPORTED_MODULE_5__(), this.photoToBeUploaded);
                        photo.save().then(function (uploadedPhoto) {
                            console.log('Photo uploaded successfuly!', uploadedPhoto);
                            //Toast goes here
                            //Update selected landmark with the form's data and file
                            _this.updateSelectedLandMark(uploadedPhoto).then(function (parseObject) {
                                _this.updateForm(parseObject);
                                _this.modalService.dismissAll();
                            }).catch(function (error) {
                                _this.modalService.dismissAll();
                                console.error(error);
                            });
                        }).catch(function (error) {
                            _this.modalService.dismissAll();
                            console.error(error);
                        });
                    }
                    else {
                        //Update selected landmark with the form's data only
                        this.updateSelectedLandMark().then(function (parseObject) {
                            _this.updateForm(parseObject);
                            _this.modalService.dismissAll();
                        }).catch(function (error) {
                            console.error(error);
                            _this.modalService.dismissAll();
                        });
                    }
                };
                DashboardComponent.prototype.updateSelectedLandMark = function (newFile) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    var object = null;
                                    _this.selectedLandmark.set('title', _this.landmarkForm.value.title);
                                    _this.selectedLandmark.set('short_info', _this.landmarkForm.value.shortInfo);
                                    _this.selectedLandmark.set('description', _this.landmarkForm.value.description);
                                    if (newFile) {
                                        _this.selectedLandmark.set('photo', newFile);
                                    }
                                    _this.selectedLandmark.save().then(function (updatedObject) {
                                        console.log('Landmard updated!\n', updatedObject);
                                        resolve(updatedObject);
                                    }).catch(function (error) {
                                        console.error('Something went wrong!', error);
                                        reject(error);
                                    });
                                })];
                        });
                    });
                };
                DashboardComponent.prototype.updateForm = function (object) {
                    console.log('Updating form...');
                    this.selectedLandmark = object;
                    this.landmarkForm.setValue({ title: object.attributes.title, shortInfo: object.attributes.short_info, description: object.attributes.description });
                    if (object.attributes.photo) {
                        this.fileName = 'Choose a new photo to replace the existing';
                    }
                    console.log('Form updated!');
                };
                DashboardComponent.prototype.isFileSizeAccepted = function (fileSize) {
                    var size = Math.round((fileSize / 1024));
                    if (size <= 5120) {
                        console.log('file smaller than or equal to 5Mbytes');
                        return true;
                    }
                    else {
                        console.log('file grater than 5Mbytes');
                        return false;
                    }
                };
                DashboardComponent.prototype.showModal = function (content) {
                    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then(function (result) {
                        console.log('Modal closed!');
                    }, function (reason) {
                        console.log('Modal cannot close correctly!');
                    });
                };
                return DashboardComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/pages/dashboard/dashboard.module.ngfactory.js": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/pages/dashboard/dashboard.module.ngfactory.js ***!
          \**********************************************************************/
        /*! exports provided: DashboardModuleNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModuleNgFactory", function () { return DashboardModuleNgFactory; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/shared/pages/dashboard/dashboard.module.ts");
            /* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
            /* harmony import */ var _dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component.ngfactory */ "./src/app/shared/pages/dashboard/dashboard.component.ngfactory.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
            /* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/shared/pages/dashboard/dashboard.component.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var DashboardModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DashboardComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"], _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"], _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_6__["ROUTES"], function () { return [[{ path: "", component: _dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] }]]; }, [])]); });
            /***/ 
        }),
        /***/ "./src/app/shared/pages/dashboard/dashboard.module.ts": 
        /*!************************************************************!*\
          !*** ./src/app/shared/pages/dashboard/dashboard.module.ts ***!
          \************************************************************/
        /*! exports provided: DashboardModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function () { return DashboardModule; });
            var DashboardModule = /** @class */ (function () {
                function DashboardModule() {
                }
                return DashboardModule;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-ngfactory-es2015.js.map
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-ngfactory-es5.js.map
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-ngfactory-es5.js.map