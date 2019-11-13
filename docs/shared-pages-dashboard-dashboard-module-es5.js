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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-dashboard-dashboard-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/dashboard/dashboard.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/dashboard/dashboard.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n      <h2 class=\"text-success\">Administration Panel</h2>\r\n      <h4 class=\"text-secondary\">Here you can edit a landmark and/or upload a photo for it</h4>\r\n      <hr>\r\n      <ng-container *ngTemplateOutlet=\"landmarks?form:loading\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #form>\r\n    <form [formGroup]=\"landmarkForm\" class=\"form\" (ngSubmit)=\"onSubmit(landmarkForm.value)\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"landmark\" class=\"col-sm-2 col-form-label\">Landmark</label>\r\n        <div class=\"col-sm-10\">\r\n          <select name=\"landmark\" id=\"landmark\" class=\"form-control\" (change)=\"onLandmarkSelect($event.target.value)\">\r\n            <option selected disabled>Choose a Landmark</option>\r\n            <option *ngFor=\"let l of landmarks\" [value]=\"l.id\">\r\n              {{l?.attributes?.title}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"title\" class=\"col-sm-2 col-form-label\">Title</label>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" class=\"form-control\" id=\"title\" formControlName=\"title\" value=\"Landmark's Title\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"shortInfo\" class=\"col-sm-2 col-form-label\">Short Info</label>\r\n        <div class=\"col-sm-10\">\r\n          <!-- <input type=\"text\" class=\"form-control\" id=\"info\" > -->\r\n          <textarea rows=\"5\" type=\"text\" class=\"form-control\" id=\"shortInfo\" formControlName=\"shortInfo\"\r\n            placeholder=\"Landmark's Short Info\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"description\" class=\"col-sm-2 col-form-label\">Description</label>\r\n        <div class=\"col-sm-10\">\r\n          <textarea rows=\"15\" type=\"text\" class=\"form-control\" id=\"description\" formControlName=\"description\"\r\n            placeholder=\"Landmark's Description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <!-- Photo upload -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"photo\" class=\"col-sm-2 col-form-label\">Photograph</label>\r\n        <div class=\"col-sm-10 input-group mb-3\" id=\"photo\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r\n          </div>\r\n          <div class=\"custom-file\">\r\n            <input #fileInput type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\"\r\n              (change)=\"handleFileInput($event.target.files)\">\r\n            <label class=\"custom-file-label\" for=\"file\">{{fileInput.value? fileName:'Choose File'}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button [disabled]=\"!selectedLandmark\" type=\"submit\" class=\" btn btn-block btn-success\">Update Landmark</button>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <!-- Update Modal -->\r\n  <ng-template #modal let-modal>\r\n    <div class=\"modal-body\">\r\n      <div class=\"d-flex align-items-center justify-content-between mt-2\">\r\n        <h4 class=\"text-primary\">Updating selected landmark. Please wait!</h4>\r\n        <div class=\"spinner-border text-success\" role=\"status\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #loading>\r\n    <loading></loading>\r\n  </ng-template>");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/dashboard/dashboard.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/shared/pages/dashboard/dashboard.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding-top: calc(70.38px + 3rem);\n  padding-bottom: 3rem;\n  min-height: 100vh;\n  background: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDcwLjM4cHggKyAzcmVtKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuICAiLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoNzAuMzhweCArIDNyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59Il19 */");
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
            /* harmony import */ var _services_landmark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/landmark.service */ "./src/app/shared/services/landmark.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
            /* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
            /* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            //Creates uuids
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(landmarkService, formBuilder, modalService) {
                    this.landmarkService = landmarkService;
                    this.formBuilder = formBuilder;
                    this.modalService = modalService;
                    this.fileName = '';
                    //Initiallize Parse
                    parse__WEBPACK_IMPORTED_MODULE_5__["initialize"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appId);
                    parse__WEBPACK_IMPORTED_MODULE_5__["serverURL"] = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL;
                    this.landmarkForm = this.formBuilder.group({
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Landmark\'s Title', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        shortInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Landmark\'s Short Info', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Landmark\'s Description', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
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
                        var photo = new parse__WEBPACK_IMPORTED_MODULE_5__["File"](uuid_v4__WEBPACK_IMPORTED_MODULE_6__(), this.photoToBeUploaded);
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
            DashboardComponent.ctorParameters = function () { return [
                { type: _services_landmark_service__WEBPACK_IMPORTED_MODULE_2__["LandmarkService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false })
            ], DashboardComponent.prototype, "modal", void 0);
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/shared/pages/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
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
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/shared/pages/dashboard/dashboard.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
            var DashboardModule = /** @class */ (function () {
                function DashboardModule() {
                }
                return DashboardModule;
            }());
            DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                            {
                                path: "",
                                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
                            }
                        ]),
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"]
                    ],
                    exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
                    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
                })
            ], DashboardModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-es2015.js.map
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-es5.js.map
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-es5.js.map