(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/dashboard/dashboard.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/dashboard/dashboard.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-12 col-md-10 col-lg-10\">\r\n      <h2 class=\"text-success\">Administration Panel</h2>\r\n      <h4 class=\"text-secondary\">\r\n        Here you can edit a landmark and/or upload a photo for it\r\n      </h4>\r\n      <hr />\r\n      <ng-container\r\n        *ngTemplateOutlet=\"landmarks ? form : loading\"\r\n      ></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #form>\r\n    <form\r\n      [formGroup]=\"landmarkForm\"\r\n      class=\"form\"\r\n      (ngSubmit)=\"onSubmit(landmarkForm.value)\"\r\n    >\r\n      <div class=\"form-group row\">\r\n        <label for=\"landmark\" class=\"col-sm-2 col-form-label\">Landmark</label>\r\n        <div class=\"col-sm-10\">\r\n          <select\r\n            name=\"landmark\"\r\n            id=\"landmark\"\r\n            class=\"form-control\"\r\n            (change)=\"onLandmarkSelect($event.target.value)\"\r\n          >\r\n            <option selected disabled>Choose a Landmark</option>\r\n            <option *ngFor=\"let l of landmarks\" [value]=\"l.id\">\r\n              {{ l.get('title') }}</option\r\n            >\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"title\" class=\"col-sm-2 col-form-label\">Title</label>\r\n        <div class=\"col-sm-10\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"title\"\r\n            formControlName=\"title\"\r\n            value=\"Landmark's Title\"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"shortInfo\" class=\"col-sm-2 col-form-label\"\r\n          >Short Info</label\r\n        >\r\n        <div class=\"col-sm-10\">\r\n          <textarea\r\n            rows=\"5\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"shortInfo\"\r\n            formControlName=\"shortInfo\"\r\n            placeholder=\"Landmark's Short Info\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"description\" class=\"col-sm-2 col-form-label\"\r\n          >Description</label\r\n        >\r\n        <div class=\"col-sm-10\">\r\n          <textarea\r\n            rows=\"15\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"description\"\r\n            formControlName=\"description\"\r\n            placeholder=\"Landmark's Description\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Photo upload -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"photo\" class=\"col-sm-2 col-form-label\">Photograph</label>\r\n        <div class=\"col-sm-10 input-group mb-3\" id=\"photo\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"inputGroupFileAddon01\"\r\n              >Upload</span\r\n            >\r\n          </div>\r\n          <div class=\"custom-file\">\r\n            <input\r\n              #fileInput\r\n              type=\"file\"\r\n              class=\"custom-file-input\"\r\n              id=\"file\"\r\n              accept=\"image/*\"\r\n              aria-describedby=\"inputGroupFileAddon01\"\r\n              (change)=\"handleFileInput($event.target.files)\"\r\n            />\r\n            <label class=\"custom-file-label\" for=\"file\">{{\r\n              fileInput.value ? fileName : \"Choose File\"\r\n            }}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        class=\"form-group row\"\r\n        *ngIf=\"selectedLandmark && selectedLandmarkPhoto\"\r\n      >\r\n        <label for=\"uploadedFile\" class=\"col-sm-2 col-form-label\"\r\n          >Uploaded</label\r\n        >\r\n        <div class=\"col-sm-10\">\r\n          <a\r\n            placement=\"top\"\r\n            ngbTooltip=\"Click to see the full photo\"\r\n            [href]=\"selectedLandmarkPhoto.url()\"\r\n            target=\"_blank\"\r\n            class=\"card-link text-dark\"\r\n          >\r\n            {{ selectedLandmarkPhoto.name() }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-end align-items-center\">\r\n        <button class=\"btn btn-danger mr-3\" *ngIf=\"selectedLandmark\">\r\n          Delete landmark\r\n        </button>\r\n\r\n        <button\r\n          [disabled]=\"!selectedLandmark\"\r\n          type=\"submit\"\r\n          class=\" btn btn-success\"\r\n        >\r\n          Update Landmark\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <!-- Update Modal -->\r\n  <ng-template #modal let-modal>\r\n    <div class=\"modal-body\">\r\n      <div class=\"d-flex align-items-center justify-content-between mt-2\">\r\n        <h4 class=\"text-primary\">Updating selected landmark. Please wait!</h4>\r\n        <div class=\"spinner-border text-success\" role=\"status\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #loading>\r\n    <loading></loading>\r\n  </ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/app/shared/pages/dashboard/dashboard.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/pages/dashboard/dashboard.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding-top: calc(70.38px + 3rem);\n  padding-bottom: 3rem;\n  min-height: 100vh;\n  background: #f7f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDcwLjM4cHggKyAzcmVtKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuICAiLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoNzAuMzhweCArIDNyZW0pO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/pages/dashboard/dashboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/pages/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_landmark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/landmark.service */ "./src/app/shared/services/landmark.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_Toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/Toast.service */ "./src/app/shared/services/Toast.service.ts");





// Creates uuids



let DashboardComponent = class DashboardComponent {
    constructor(landmarkService, formBuilder, modalService, toasterService) {
        this.landmarkService = landmarkService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.fileName = '';
        // Initialization of reactive form
        this.landmarkForm = this.formBuilder.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Landmark\'s Title', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            shortInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Landmark\'s Short Info', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Landmark\'s Description', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    }
    ngOnInit() {
        //Retrieving all landmarks
        this.landmarkService.getLandmarks().then(landmarks => {
            this.landmarks = landmarks;
            console.log(landmarks);
        }).catch(error => console.error(error));
    }
    onLandmarkSelect(landmarkID) {
        // Finds the selected landmark based on user selection and sets value on the form
        this.selectedLandmark = this.landmarks.find((l) => l.id === landmarkID);
        this.landmarkForm.setValue({
            title: this.selectedLandmark.attributes.title,
            shortInfo: this.selectedLandmark.attributes.short_info,
            description: this.selectedLandmark.attributes.description
        });
        this.selectedLandmarkPhoto = this.selectedLandmark.get("photo");
    }
    handleFileInput(files) {
        this.photoToBeUploaded = files.item(0);
        if (this.landmarkService.isFileSizeAccepted(files.item(0).size)) {
            this.fileName = files.item(0).name;
            this.photoToBeUploaded = files.item(0);
        }
        else {
            this.toasterService.show('The size of the image is not accepted!', { classname: 'bg-danger text-light', delay: 1500 });
            if (this.photoToBeUploaded) {
                this.photoToBeUploaded = null;
                this.fileName = 'Choose file';
            }
        }
    }
    //Handle form submit
    onSubmit(value) {
        this.showModal(this.modal);
        if (this.photoToBeUploaded && this.selectedLandmark) {
            // set unique name for the file
            // I am doing this in order not to check for valid file names ....
            // Parse does not accept some special chars...
            const photo = new parse__WEBPACK_IMPORTED_MODULE_4__["File"](uuid_v4__WEBPACK_IMPORTED_MODULE_5__(), this.photoToBeUploaded);
            photo.save().then(uploadedPhoto => {
                this.toasterService.show(`Photo uploaded successfuly!`, { classname: 'bg-success text-light', delay: 1000 });
                //Create thumbnail
                this.landmarkService.createTumbnail(this.selectedLandmark.id, uploadedPhoto.url(), parse__WEBPACK_IMPORTED_MODULE_4__["User"].current().getSessionToken()).then((thumbnail) => {
                    console.log('Thumbnail created!', thumbnail);
                }).then(() => {
                    // Update selected landmark with the form's data and file
                    this.updateSelectedLandMark(uploadedPhoto).then((parseObject) => {
                        this.updateForm(parseObject);
                        this.modalService.dismissAll();
                    }).catch(error => {
                        this.modalService.dismissAll();
                        this.landmarkService.showError('Update on selected landmar failed!', error);
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
                .then(() => {
                //Create thumbnail for the uploaded photo
            })
                .catch(error => {
                this.modalService.dismissAll();
                this.landmarkService.showError('Photo upload failed!', error);
            });
        }
        else {
            // Update selected landmark with the form's data only
            this.updateSelectedLandMark().then((parseObject) => {
                this.updateForm(parseObject);
                this.modalService.dismissAll();
                this.toasterService.show(`Landmark uploaded successfuly!`, { classname: 'bg-success text-light', delay: 1000 });
            }).catch(error => {
                this.modalService.dismissAll();
                this.landmarkService.showError('Landmark upload failed!', error);
            });
        }
    }
    updateSelectedLandMark(newFile) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const object = null;
                this.selectedLandmark.set('title', this.landmarkForm.value.title);
                this.selectedLandmark.set('short_info', this.landmarkForm.value.shortInfo);
                this.selectedLandmark.set('description', this.landmarkForm.value.description);
                if (newFile) {
                    this.selectedLandmark.set('photo', newFile);
                }
                this.selectedLandmark.save().then(updatedObject => {
                    console.log('Landmard updated!\n', updatedObject);
                    resolve(updatedObject);
                }).catch(error => {
                    console.error('Something went wrong!', error);
                    reject(error);
                });
            });
        });
    }
    //Setting value to reactive form
    updateForm(object) {
        this.selectedLandmark = object;
        this.landmarkForm.setValue({ title: object.attributes.title, shortInfo: object.attributes.short_info, description: object.attributes.description });
        if (object.attributes.photo) {
            this.fileName = object.get('photo.name');
        }
    }
    showModal(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
            console.log('Modal closed!');
        }, (reason) => {
            console.log('Modal cannot close correctly!');
        });
    }
    //
    onRemovePhoto(file) {
        console.log(file);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_landmark_service__WEBPACK_IMPORTED_MODULE_2__["LandmarkService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _services_Toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
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



/***/ }),

/***/ "./src/app/shared/pages/dashboard/dashboard.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/pages/dashboard/dashboard.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/shared/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");








let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
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



/***/ })

}]);
//# sourceMappingURL=shared-pages-dashboard-dashboard-module-es2015.js.map