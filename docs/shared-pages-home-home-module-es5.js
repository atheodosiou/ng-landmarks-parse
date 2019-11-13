var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-home-home-module"], {
        /***/ "./node_modules/@agm/core/fesm2015/agm-core.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/@agm/core/fesm2015/agm-core.js ***!
          \*****************************************************/
        /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, DataLayerManager, FitBoundsAccessor, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ɵa, ɵb, ɵc, ɵd, ɵe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () { return AgmBicyclingLayer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function () { return AgmCircle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () { return AgmCoreModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () { return AgmDataLayer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () { return AgmFitBounds; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () { return AgmInfoWindow; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () { return AgmKmlLayer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function () { return AgmMap; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function () { return AgmMarker; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () { return AgmPolygon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () { return AgmPolyline; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () { return AgmPolylineIcon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () { return AgmPolylinePoint; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () { return AgmRectangle; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () { return AgmTransitLayer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function () { return CircleManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () { return DataLayerManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () { return FitBoundsAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () { return GoogleMapsAPIWrapper; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () { return GoogleMapsScriptProtocol; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () { return InfoWindowManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () { return KmlLayerManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () { return LAZY_MAPS_API_CONFIG; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function () { return LayerManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () { return LazyMapsAPILoader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () { return MapsAPILoader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function () { return MarkerManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () { return NoOpMapsAPILoader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function () { return PolygonManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function () { return PolylineManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function () { return RectangleManager; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return FitBoundsService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return coreDirectives; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function () { return WindowRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function () { return DocumentRef; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function () { return BROWSER_GLOBALS_PROVIDERS; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var MapsAPILoader = /** @class */ (function () {
                function MapsAPILoader() {
                }
                return MapsAPILoader;
            }());
            MapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MapsAPILoader);
            /**
             * Wrapper class that handles the communication with the Google Maps Javascript
             * API v3
             */
            var GoogleMapsAPIWrapper = /** @class */ (function () {
                function GoogleMapsAPIWrapper(_loader, _zone) {
                    var _this = this;
                    this._loader = _loader;
                    this._zone = _zone;
                    this._map =
                        new Promise(function (resolve) { _this._mapResolver = resolve; });
                }
                GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
                    var _this = this;
                    return this._zone.runOutsideAngular(function () {
                        return _this._loader.load().then(function () {
                            var map = new google.maps.Map(el, mapOptions);
                            _this._mapResolver(map);
                            return;
                        });
                    });
                };
                GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
                    this._map.then(function (m) { m.setOptions(options); });
                };
                /**
                 * Creates a google map marker with the map context
                 */
                GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
                    if (options === void 0) { options = {}; }
                    if (addToMap === void 0) { addToMap = true; }
                    return this._map.then(function (map) {
                        if (addToMap) {
                            options.map = map;
                        }
                        return new google.maps.Marker(options);
                    });
                };
                GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
                    return this._map.then(function () { return new google.maps.InfoWindow(options); });
                };
                /**
                 * Creates a google.map.Circle for the current map.
                 */
                GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
                    return this._map.then(function (map) {
                        if (typeof options.strokePosition === 'string') {
                            options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                        }
                        options.map = map;
                        return new google.maps.Circle(options);
                    });
                };
                /**
                 * Creates a google.map.Rectangle for the current map.
                 */
                GoogleMapsAPIWrapper.prototype.createRectangle = function (options) {
                    return this._map.then(function (map) {
                        options.map = map;
                        return new google.maps.Rectangle(options);
                    });
                };
                GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
                    return this.getNativeMap().then(function (map) {
                        var line = new google.maps.Polyline(options);
                        line.setMap(map);
                        return line;
                    });
                };
                GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
                    return this.getNativeMap().then(function (map) {
                        var polygon = new google.maps.Polygon(options);
                        polygon.setMap(map);
                        return polygon;
                    });
                };
                /**
                 * Creates a new google.map.Data layer for the current map
                 */
                GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
                    return this._map.then(function (m) {
                        var data = new google.maps.Data(options);
                        data.setMap(m);
                        return data;
                    });
                };
                /**
                 * Creates a TransitLayer instance for a map
                 * @param {TransitLayerOptions} options - used for setting layer options
                 * @returns {Promise<TransitLayer>} a new transit layer object
                 */
                GoogleMapsAPIWrapper.prototype.createTransitLayer = function (options) {
                    return this._map.then(function (map) {
                        var newLayer = new google.maps.TransitLayer();
                        newLayer.setMap(options.visible ? map : null);
                        return newLayer;
                    });
                };
                /**
                 * Creates a BicyclingLayer instance for a map
                 * @param {BicyclingLayerOptions} options - used for setting layer options
                 * @returns {Promise<BicyclingLayer>} a new bicycling layer object
                 */
                GoogleMapsAPIWrapper.prototype.createBicyclingLayer = function (options) {
                    return this._map.then(function (map) {
                        var newLayer = new google.maps.BicyclingLayer();
                        newLayer.setMap(options.visible ? map : null);
                        return newLayer;
                    });
                };
                /**
                 * Determines if given coordinates are insite a Polygon path.
                 */
                GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
                    return google.maps.geometry.poly.containsLocation(latLng, polygon);
                };
                GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._map.then(function (m) {
                            m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
                        });
                    });
                };
                GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
                    this._map.then(function (map) {
                        google.maps.event.clearInstanceListeners(map);
                    });
                };
                GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
                    return this._map.then(function (map) { return map.setCenter(latLng); });
                };
                GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
                GoogleMapsAPIWrapper.prototype.getBounds = function () {
                    return this._map.then(function (map) { return map.getBounds(); });
                };
                GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
                    return this._map.then(function (map) { return map.getMapTypeId(); });
                };
                GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
                    return this._map.then(function (map) { return map.setZoom(zoom); });
                };
                GoogleMapsAPIWrapper.prototype.getCenter = function () {
                    return this._map.then(function (map) { return map.getCenter(); });
                };
                GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
                    return this._map.then(function (map) { return map.panTo(latLng); });
                };
                GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
                    return this._map.then(function (map) { return map.panBy(x, y); });
                };
                GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng, padding) {
                    return this._map.then(function (map) { return map.fitBounds(latLng, padding); });
                };
                GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng, padding) {
                    return this._map.then(function (map) { return map.panToBounds(latLng, padding); });
                };
                /**
                 * Returns the native Google Maps Map instance. Be careful when using this instance directly.
                 */
                GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
                /**
                 * Triggers the given event name on the map instance.
                 */
                GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
                    return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
                };
                return GoogleMapsAPIWrapper;
            }());
            GoogleMapsAPIWrapper.ctorParameters = function () { return [
                { type: MapsAPILoader },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], GoogleMapsAPIWrapper);
            /**
             * This class manages Transit and Bicycling Layers for a Google Map instance.
             */
            var LayerManager = /** @class */ (function () {
                function LayerManager(_wrapper) {
                    this._wrapper = _wrapper;
                    this._layers = new Map();
                }
                /**
                 * Adds a transit layer to a map instance.
                 * @param {AgmTransitLayer} layer - a TransitLayer object
                 * @param {TransitLayerOptions} options - TransitLayerOptions options
                 * @returns void
                 */
                LayerManager.prototype.addTransitLayer = function (layer, options) {
                    var newLayer = this._wrapper.createTransitLayer(options);
                    this._layers.set(layer, newLayer);
                };
                /**
                 * Adds a bicycling layer to a map instance.
                 * @param {AgmBicyclingLayer} layer - a bicycling layer object
                 * @param {BicyclingLayerOptions} options - BicyclingLayer options
                 * @returns void
                 */
                LayerManager.prototype.addBicyclingLayer = function (layer, options) {
                    var newLayer = this._wrapper.createBicyclingLayer(options);
                    this._layers.set(layer, newLayer);
                };
                /**
                 * Deletes a map layer
                 * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
                 * @returns  Promise<void>
                 */
                LayerManager.prototype.deleteLayer = function (layer) {
                    var _this = this;
                    return this._layers.get(layer).then(function (currentLayer) {
                        currentLayer.setMap(null);
                        _this._layers.delete(layer);
                    });
                };
                /**
                 * Hide/Show a google map layer
                 * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
                 * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
                 * @returns Promise<void>
                 */
                LayerManager.prototype.toggleLayerVisibility = function (layer, options) {
                    var _this = this;
                    return this._layers.get(layer).then(function (currentLayer) {
                        if (!options.visible) {
                            currentLayer.setMap(null);
                            return;
                        }
                        else {
                            return _this._wrapper.getNativeMap().then(function (map) {
                                currentLayer.setMap(map);
                            });
                        }
                    });
                };
                return LayerManager;
            }());
            LayerManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper }
            ]; };
            LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])
            ], LayerManager);
            var layerId = 0;
            /*
             * This directive adds a bicycling layer to a google map instance
             * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
             * */
            var AgmBicyclingLayer = /** @class */ (function () {
                function AgmBicyclingLayer(_manager) {
                    this._manager = _manager;
                    this._addedToManager = false;
                    this._id = (layerId++).toString();
                    /**
                     * Hide/show bicycling layer
                     */
                    this.visible = true;
                }
                AgmBicyclingLayer.prototype.ngOnInit = function () {
                    if (this._addedToManager) {
                        return;
                    }
                    this._manager.addBicyclingLayer(this, { visible: this.visible });
                    this._addedToManager = true;
                };
                AgmBicyclingLayer.prototype.ngOnChanges = function (changes) {
                    if (!this._addedToManager) {
                        return;
                    }
                    if (changes['visible'] != null) {
                        this._manager.toggleLayerVisibility(this, { visible: changes['visible'].currentValue });
                    }
                };
                /** @internal */
                AgmBicyclingLayer.prototype.id = function () { return this._id; };
                /** @internal */
                AgmBicyclingLayer.prototype.toString = function () { return "AgmBicyclingLayer-" + this._id.toString(); };
                /** @internal */
                AgmBicyclingLayer.prototype.ngOnDestroy = function () {
                    this._manager.deleteLayer(this);
                };
                return AgmBicyclingLayer;
            }());
            AgmBicyclingLayer.ctorParameters = function () { return [
                { type: LayerManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmBicyclingLayer.prototype, "visible", void 0);
            AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-bicycling-layer',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])
            ], AgmBicyclingLayer);
            var CircleManager = /** @class */ (function () {
                function CircleManager(_apiWrapper, _zone) {
                    this._apiWrapper = _apiWrapper;
                    this._zone = _zone;
                    this._circles = new Map();
                }
                CircleManager.prototype.addCircle = function (circle) {
                    this._circles.set(circle, this._apiWrapper.createCircle({
                        center: { lat: circle.latitude, lng: circle.longitude },
                        clickable: circle.clickable,
                        draggable: circle.draggable,
                        editable: circle.editable,
                        fillColor: circle.fillColor,
                        fillOpacity: circle.fillOpacity,
                        radius: circle.radius,
                        strokeColor: circle.strokeColor,
                        strokeOpacity: circle.strokeOpacity,
                        strokePosition: circle.strokePosition,
                        strokeWeight: circle.strokeWeight,
                        visible: circle.visible,
                        zIndex: circle.zIndex,
                    }));
                };
                /**
                 * Removes the given circle from the map.
                 */
                CircleManager.prototype.removeCircle = function (circle) {
                    var _this = this;
                    return this._circles.get(circle).then(function (c) {
                        c.setMap(null);
                        _this._circles.delete(circle);
                    });
                };
                CircleManager.prototype.setOptions = function (circle, options) {
                    return this._circles.get(circle).then(function (c) {
                        if (typeof options.strokePosition === 'string') {
                            options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                        }
                        c.setOptions(options);
                    });
                };
                CircleManager.prototype.getBounds = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.getBounds(); });
                };
                CircleManager.prototype.getCenter = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.getCenter(); });
                };
                CircleManager.prototype.getRadius = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.getRadius(); });
                };
                CircleManager.prototype.setCenter = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
                };
                CircleManager.prototype.setEditable = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
                };
                CircleManager.prototype.setDraggable = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
                };
                CircleManager.prototype.setVisible = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
                };
                CircleManager.prototype.setRadius = function (circle) {
                    return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
                };
                CircleManager.prototype.getNativeCircle = function (circle) {
                    return this._circles.get(circle);
                };
                CircleManager.prototype.createEventObservable = function (eventName, circle) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        var listener = null;
                        _this._circles.get(circle).then(function (c) {
                            listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                        return function () {
                            if (listener !== null) {
                                listener.remove();
                            }
                        };
                    });
                };
                return CircleManager;
            }());
            CircleManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], CircleManager);
            var AgmCircle_1;
            var AgmCircle = AgmCircle_1 = /** @class */ (function () {
                function AgmCircle(_manager) {
                    this._manager = _manager;
                    /**
                     * Indicates whether this Circle handles mouse events. Defaults to true.
                     */
                    this.clickable = true;
                    /**
                     * If set to true, the user can drag this circle over the map. Defaults to false.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.draggable = false;
                    /**
                     * If set to true, the user can edit this circle by dragging the control points shown at
                     * the center and around the circumference of the circle. Defaults to false.
                     */
                    this.editable = false;
                    /**
                     * The radius in meters on the Earth's surface.
                     */
                    this.radius = 0;
                    /**
                     * The stroke position. Defaults to CENTER.
                     * This property is not supported on Internet Explorer 8 and earlier.
                     */
                    this.strokePosition = 'CENTER';
                    /**
                     * The stroke width in pixels.
                     */
                    this.strokeWeight = 0;
                    /**
                     * Whether this circle is visible on the map. Defaults to true.
                     */
                    this.visible = true;
                    /**
                     * This event is fired when the circle's center is changed.
                     */
                    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user clicks on the circle.
                     */
                    this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user clicks on the circle.
                     */
                    this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is repeatedly fired while the user drags the circle.
                     */
                    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user stops dragging the circle.
                     */
                    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user starts dragging the circle.
                     */
                    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousedown event is fired on the circle.
                     */
                    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousemove event is fired on the circle.
                     */
                    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on circle mouseout.
                     */
                    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on circle mouseover.
                     */
                    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mouseup event is fired on the circle.
                     */
                    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the circle's radius is changed.
                     */
                    this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the circle is right-clicked on.
                     */
                    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this._circleAddedToManager = false;
                    this._eventSubscriptions = [];
                }
                /** @internal */
                AgmCircle.prototype.ngOnInit = function () {
                    this._manager.addCircle(this);
                    this._circleAddedToManager = true;
                    this._registerEventListeners();
                };
                /** @internal */
                AgmCircle.prototype.ngOnChanges = function (changes) {
                    if (!this._circleAddedToManager) {
                        return;
                    }
                    if (changes['latitude'] || changes['longitude']) {
                        this._manager.setCenter(this);
                    }
                    if (changes['editable']) {
                        this._manager.setEditable(this);
                    }
                    if (changes['draggable']) {
                        this._manager.setDraggable(this);
                    }
                    if (changes['visible']) {
                        this._manager.setVisible(this);
                    }
                    if (changes['radius']) {
                        this._manager.setRadius(this);
                    }
                    this._updateCircleOptionsChanges(changes);
                };
                AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
                    var options = {};
                    var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle_1._mapOptions.indexOf(k) !== -1; });
                    optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
                    if (optionKeys.length > 0) {
                        this._manager.setOptions(this, options);
                    }
                };
                AgmCircle.prototype._registerEventListeners = function () {
                    var _this = this;
                    var events = new Map();
                    events.set('center_changed', this.centerChange);
                    events.set('click', this.circleClick);
                    events.set('dblclick', this.circleDblClick);
                    events.set('drag', this.drag);
                    events.set('dragend', this.dragEnd);
                    events.set('dragstart', this.dragStart);
                    events.set('mousedown', this.mouseDown);
                    events.set('mousemove', this.mouseMove);
                    events.set('mouseout', this.mouseOut);
                    events.set('mouseover', this.mouseOver);
                    events.set('mouseup', this.mouseUp);
                    events.set('radius_changed', this.radiusChange);
                    events.set('rightclick', this.rightClick);
                    events.forEach(function (eventEmitter, eventName) {
                        _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                            switch (eventName) {
                                case 'radius_changed':
                                    _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                                    break;
                                case 'center_changed':
                                    _this._manager.getCenter(_this).then(function (center) { return eventEmitter.emit({ lat: center.lat(), lng: center.lng() }); });
                                    break;
                                default:
                                    eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                            }
                        }));
                    });
                };
                /** @internal */
                AgmCircle.prototype.ngOnDestroy = function () {
                    this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
                    this._eventSubscriptions = null;
                    this._manager.removeCircle(this);
                };
                /**
                 * Gets the LatLngBounds of this Circle.
                 */
                AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
                AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
                return AgmCircle;
            }());
            AgmCircle._mapOptions = [
                'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
                'visible', 'zIndex', 'clickable',
            ];
            AgmCircle.ctorParameters = function () { return [
                { type: CircleManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmCircle.prototype, "latitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmCircle.prototype, "longitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmCircle.prototype, "clickable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmCircle.prototype, "draggable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmCircle.prototype, "editable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmCircle.prototype, "fillColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmCircle.prototype, "fillOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmCircle.prototype, "radius", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmCircle.prototype, "strokeColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmCircle.prototype, "strokeOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmCircle.prototype, "strokePosition", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmCircle.prototype, "strokeWeight", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmCircle.prototype, "visible", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmCircle.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "centerChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "circleClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "circleDblClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "drag", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "dragEnd", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "dragStart", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "mouseDown", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "mouseMove", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "mouseOut", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "mouseOver", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "mouseUp", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "radiusChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmCircle.prototype, "rightClick", void 0);
            AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-circle',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])
            ], AgmCircle);
            /**
             * Manages all Data Layers for a Google Map instance.
             */
            var DataLayerManager = /** @class */ (function () {
                function DataLayerManager(_wrapper, _zone) {
                    this._wrapper = _wrapper;
                    this._zone = _zone;
                    this._layers = new Map();
                }
                /**
                 * Adds a new Data Layer to the map.
                 */
                DataLayerManager.prototype.addDataLayer = function (layer) {
                    var _this = this;
                    var newLayer = this._wrapper.createDataLayer({
                        style: layer.style,
                    })
                        .then(function (d) {
                        if (layer.geoJson) {
                            _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
                        }
                        return d;
                    });
                    this._layers.set(layer, newLayer);
                };
                DataLayerManager.prototype.deleteDataLayer = function (layer) {
                    var _this = this;
                    this._layers.get(layer).then(function (l) {
                        l.setMap(null);
                        _this._layers.delete(layer);
                    });
                };
                DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
                    var _this = this;
                    this._layers.get(layer).then(function (l) {
                        l.forEach(function (feature) {
                            l.remove(feature);
                            var index = l.features.indexOf(feature, 0);
                            if (index > -1) {
                                l.features.splice(index, 1);
                            }
                        });
                        _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
                    });
                };
                DataLayerManager.prototype.setDataOptions = function (layer, options) {
                    this._layers.get(layer).then(function (l) {
                        l.setControlPosition(options.controlPosition);
                        l.setControls(options.controls);
                        l.setDrawingMode(options.drawingMode);
                        l.setStyle(options.style);
                    });
                };
                /**
                 * Creates a Google Maps event listener for the given DataLayer as an Observable
                 */
                DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._layers.get(layer).then(function (d) {
                            d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                    });
                };
                /**
                 * Extract features from a geoJson using google.maps Data Class
                 * @param d : google.maps.Data class instance
                 * @param geoJson : url or geojson object
                 */
                DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
                    return new Promise(function (resolve, reject) {
                        if (typeof geoJson === 'object') {
                            try {
                                var features = d.addGeoJson(geoJson);
                                resolve(features);
                            }
                            catch (e) {
                                reject(e);
                            }
                        }
                        else if (typeof geoJson === 'string') {
                            d.loadGeoJson(geoJson, null, resolve);
                        }
                        else {
                            reject("Impossible to extract features from geoJson: wrong argument type");
                        }
                    });
                };
                return DataLayerManager;
            }());
            DataLayerManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], DataLayerManager);
            var AgmDataLayer_1;
            var layerId$1 = 0;
            /**
             * AgmDataLayer enables the user to add data layers to the map.
             *
             * ### Example
             * ```typescript
             * import { Component } from 'angular2/core';
             * import { AgmMap, AgmDataLayer } from
             * 'angular-google-maps/core';
             *
             * @Component({
             *  selector: 'my-map-cmp',
             *  directives: [AgmMap, AgmDataLayer],
             *  styles: [`
             *    .agm-container {
             *      height: 300px;
             *    }
             * `],
             *  template: `
             * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
             * 	  </agm-data-layer>
             * </agm-map>
             *  `
             * })
             * export class MyMapCmp {
             *   lat: number = -25.274449;
             *   lng: number = 133.775060;
             *   zoom: number = 5;
             *
             * clicked(clickEvent) {
             *    console.log(clickEvent);
             *  }
             *
             *  styleFunc(feature) {
             *    return ({
             *      clickable: false,
             *      fillColor: feature.getProperty('color'),
             *      strokeWeight: 1
             *    });
             *  }
             *
             *  geoJsonObject: Object = {
             *    "type": "FeatureCollection",
             *    "features": [
             *      {
             *        "type": "Feature",
             *        "properties": {
             *          "letter": "G",
             *          "color": "blue",
             *          "rank": "7",
             *          "ascii": "71"
             *        },
             *        "geometry": {
             *          "type": "Polygon",
             *          "coordinates": [
             *            [
             *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
             *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
             *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
             *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
             *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
             *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
             *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
             *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
             *            ]
             *          ]
             *        }
             *      },
             *      {
             *        "type": "Feature",
             *        "properties": {
             *          "letter": "o",
             *          "color": "red",
             *          "rank": "15",
             *          "ascii": "111"
             *        },
             *        "geometry": {
             *          "type": "Polygon",
             *          "coordinates": [
             *            [
             *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
             *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
             *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
             *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
             *            ],
             *            [
             *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
             *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
             *            ]
             *          ]
             *        }
             *      },
             *      {
             *        "type": "Feature",
             *        "properties": {
             *          "letter": "o",
             *          "color": "yellow",
             *          "rank": "15",
             *          "ascii": "111"
             *        },
             *        "geometry": {
             *          "type": "Polygon",
             *          "coordinates": [
             *            [
             *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
             *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
             *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
             *              [132.71, -25.64], [131.87, -25.76]
             *            ],
             *            [
             *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
             *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
             *            ]
             *          ]
             *        }
             *      },
             *      {
             *        "type": "Feature",
             *        "properties": {
             *          "letter": "g",
             *          "color": "blue",
             *          "rank": "7",
             *          "ascii": "103"
             *        },
             *        "geometry": {
             *          "type": "Polygon",
             *          "coordinates": [
             *            [
             *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
             *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
             *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
             *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
             *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
             *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
             *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
             *            ],
             *            [
             *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
             *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
             *            ]
             *          ]
             *        }
             *      },
             *      {
             *        "type": "Feature",
             *        "properties": {
             *          "letter": "l",
             *          "color": "green",
             *          "rank": "12",
             *          "ascii": "108"
             *        },
             *        "geometry": {
             *          "type": "Polygon",
             *          "coordinates": [
             *            [
             *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
             *            ]
             *          ]
             *        }
             *      },
             *      {
             *        "type": "Feature",
             *        "properties": {
             *          "letter": "e",
             *          "color": "red",
             *          "rank": "5",
             *          "ascii": "101"
             *        },
             *        "geometry": {
             *          "type": "Polygon",
             *          "coordinates": [
             *            [
             *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
             *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
             *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
             *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
             *              [144.31, -28.26], [144.14, -27.41]
             *            ],
             *            [
             *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
             *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
             *            ]
             *          ]
             *        }
             *      }
             *    ]
             *  };
             * }
             * ```
             */
            var AgmDataLayer = AgmDataLayer_1 = /** @class */ (function () {
                function AgmDataLayer(_manager) {
                    this._manager = _manager;
                    this._addedToManager = false;
                    this._id = (layerId$1++).toString();
                    this._subscriptions = [];
                    /**
                     * This event is fired when a feature in the layer is clicked.
                     */
                    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * The geoJson to be displayed
                     */
                    this.geoJson = null;
                }
                AgmDataLayer.prototype.ngOnInit = function () {
                    if (this._addedToManager) {
                        return;
                    }
                    this._manager.addDataLayer(this);
                    this._addedToManager = true;
                    this._addEventListeners();
                };
                AgmDataLayer.prototype._addEventListeners = function () {
                    var _this = this;
                    var listeners = [
                        { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
                    ];
                    listeners.forEach(function (obj) {
                        var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                        _this._subscriptions.push(os);
                    });
                };
                /** @internal */
                AgmDataLayer.prototype.id = function () { return this._id; };
                /** @internal */
                AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
                /** @internal */
                AgmDataLayer.prototype.ngOnDestroy = function () {
                    this._manager.deleteDataLayer(this);
                    // unsubscribe all registered observable subscriptions
                    this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                /** @internal */
                AgmDataLayer.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    if (!this._addedToManager) {
                        return;
                    }
                    var geoJsonChange = changes['geoJson'];
                    if (geoJsonChange) {
                        this._manager.updateGeoJson(this, geoJsonChange.currentValue);
                    }
                    var dataOptions = {};
                    AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
                    this._manager.setDataOptions(this, dataOptions);
                };
                return AgmDataLayer;
            }());
            AgmDataLayer._dataOptionsAttributes = ['style'];
            AgmDataLayer.ctorParameters = function () { return [
                { type: DataLayerManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmDataLayer.prototype, "layerClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmDataLayer.prototype, "geoJson", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
            ], AgmDataLayer.prototype, "style", void 0);
            AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-data-layer',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])
            ], AgmDataLayer);
            /**
             * Class to implement when you what to be able to make it work with the auto fit bounds feature
             * of AGM.
             */
            var FitBoundsAccessor = /** @class */ (function () {
                function FitBoundsAccessor() {
                }
                return FitBoundsAccessor;
            }());
            /**
             * The FitBoundsService is responsible for computing the bounds of the a single map.
             */
            var FitBoundsService = /** @class */ (function () {
                function FitBoundsService(loader) {
                    var _this = this;
                    this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
                    this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
                    this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                }
                FitBoundsService.prototype._generateBounds = function (includeInBounds) {
                    var bounds = new google.maps.LatLngBounds();
                    includeInBounds.forEach(function (b) { return bounds.extend(b); });
                    return bounds;
                };
                FitBoundsService.prototype.addToBounds = function (latLng) {
                    var id = this._createIdentifier(latLng);
                    if (this._includeInBounds$.value.has(id)) {
                        return;
                    }
                    var map = this._includeInBounds$.value;
                    map.set(id, latLng);
                    this._includeInBounds$.next(map);
                };
                FitBoundsService.prototype.removeFromBounds = function (latLng) {
                    var map = this._includeInBounds$.value;
                    map.delete(this._createIdentifier(latLng));
                    this._includeInBounds$.next(map);
                };
                FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
                    this._boundsChangeSampleTime$.next(timeMs);
                };
                FitBoundsService.prototype.getBounds$ = function () {
                    return this.bounds$;
                };
                FitBoundsService.prototype._createIdentifier = function (latLng) {
                    return latLng.lat + "+" + latLng.lng;
                };
                return FitBoundsService;
            }());
            FitBoundsService.ctorParameters = function () { return [
                { type: MapsAPILoader }
            ]; };
            FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])
            ], FitBoundsService);
            /**
             * Adds the given directive to the auto fit bounds feature when the value is true.
             * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
             * @example
             * <agm-marker [agmFitBounds]="true"></agm-marker>
             */
            var AgmFitBounds = /** @class */ (function () {
                function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
                    this._fitBoundsAccessor = _fitBoundsAccessor;
                    this._fitBoundsService = _fitBoundsService;
                    /**
                     * If the value is true, the element gets added to the bounds of the map.
                     * Default: true.
                     */
                    this.agmFitBounds = true;
                    this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this._latestFitBoundsDetails = null;
                }
                /**
                 * @internal
                 */
                AgmFitBounds.prototype.ngOnChanges = function () {
                    this._updateBounds();
                };
                /**
                 * @internal
                 */
                AgmFitBounds.prototype.ngOnInit = function () {
                    var _this = this;
                    this._fitBoundsAccessor
                        .getFitBoundsDetails$()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) { return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
                        .subscribe(function (details) { return _this._updateBounds(details); });
                };
                /*
                 Either the location changed, or visible status changed.
                 Possible state changes are
                 invisible -> visible
                 visible -> invisible
                 visible -> visible (new location)
                */
                AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
                    // either visibility will change, or location, so remove the old one anyway
                    if (this._latestFitBoundsDetails) {
                        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
                        // don't set latestFitBoundsDetails to null, because we can toggle visibility from
                        // true -> false -> true, in which case we still need old value cached here
                    }
                    if (newFitBoundsDetails) {
                        this._latestFitBoundsDetails = newFitBoundsDetails;
                    }
                    if (!this._latestFitBoundsDetails) {
                        return;
                    }
                    if (this.agmFitBounds === true) {
                        this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
                    }
                };
                /**
                 * @internal
                 */
                AgmFitBounds.prototype.ngOnDestroy = function () {
                    this._destroyed$.next();
                    this._destroyed$.complete();
                    if (this._latestFitBoundsDetails !== null) {
                        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
                    }
                };
                return AgmFitBounds;
            }());
            AgmFitBounds.ctorParameters = function () { return [
                { type: FitBoundsAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
                { type: FitBoundsService }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmFitBounds.prototype, "agmFitBounds", void 0);
            AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[agmFitBounds]',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor,
                    FitBoundsService])
            ], AgmFitBounds);
            var MarkerManager = /** @class */ (function () {
                function MarkerManager(_mapsWrapper, _zone) {
                    this._mapsWrapper = _mapsWrapper;
                    this._zone = _zone;
                    this._markers = new Map();
                }
                MarkerManager.prototype.convertAnimation = function (uiAnim) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (uiAnim === null) {
                                return [2 /*return*/, null];
                            }
                            else {
                                return [2 /*return*/, this._mapsWrapper.getNativeMap().then(function () { return google.maps.Animation[uiAnim]; })];
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                MarkerManager.prototype.deleteMarker = function (marker) {
                    var _this = this;
                    var m = this._markers.get(marker);
                    if (m == null) {
                        // marker already deleted
                        return Promise.resolve();
                    }
                    return m.then(function (m) {
                        return _this._zone.run(function () {
                            m.setMap(null);
                            _this._markers.delete(marker);
                        });
                    });
                };
                MarkerManager.prototype.updateMarkerPosition = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
                };
                MarkerManager.prototype.updateTitle = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
                };
                MarkerManager.prototype.updateLabel = function (marker) {
                    return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
                };
                MarkerManager.prototype.updateDraggable = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
                };
                MarkerManager.prototype.updateIcon = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
                };
                MarkerManager.prototype.updateOpacity = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
                };
                MarkerManager.prototype.updateVisible = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
                };
                MarkerManager.prototype.updateZIndex = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
                };
                MarkerManager.prototype.updateClickable = function (marker) {
                    return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
                };
                MarkerManager.prototype.updateAnimation = function (marker) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var m, _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, this._markers.get(marker)];
                                case 1:
                                    m = _c.sent();
                                    _b = (_a = m).setAnimation;
                                    return [4 /*yield*/, this.convertAnimation(marker.animation)];
                                case 2:
                                    _b.apply(_a, [_c.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                MarkerManager.prototype.addMarker = function (marker) {
                    var _this = this;
                    var markerPromise = new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _b = (_a = this._mapsWrapper).createMarker;
                                    _c = {
                                        position: { lat: marker.latitude, lng: marker.longitude },
                                        label: marker.label,
                                        draggable: marker.draggable,
                                        icon: marker.iconUrl,
                                        opacity: marker.opacity,
                                        visible: marker.visible,
                                        zIndex: marker.zIndex,
                                        title: marker.title,
                                        clickable: marker.clickable
                                    };
                                    return [4 /*yield*/, this.convertAnimation(marker.animation)];
                                case 1: return [2 /*return*/, _b.apply(_a, [(_c.animation = _d.sent(),
                                            _c)]).then(resolve)];
                            }
                        });
                    }); });
                    this._markers.set(marker, markerPromise);
                };
                MarkerManager.prototype.getNativeMarker = function (marker) {
                    return this._markers.get(marker);
                };
                MarkerManager.prototype.createEventObservable = function (eventName, marker) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._markers.get(marker).then(function (m) {
                            m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                    });
                };
                return MarkerManager;
            }());
            MarkerManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], MarkerManager);
            var InfoWindowManager = /** @class */ (function () {
                function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
                    this._mapsWrapper = _mapsWrapper;
                    this._zone = _zone;
                    this._markerManager = _markerManager;
                    this._infoWindows = new Map();
                }
                InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
                    var _this = this;
                    var iWindow = this._infoWindows.get(infoWindow);
                    if (iWindow == null) {
                        // info window already deleted
                        return Promise.resolve();
                    }
                    return iWindow.then(function (i) {
                        return _this._zone.run(function () {
                            i.close();
                            _this._infoWindows.delete(infoWindow);
                        });
                    });
                };
                InfoWindowManager.prototype.setPosition = function (infoWindow) {
                    return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
                        lat: infoWindow.latitude,
                        lng: infoWindow.longitude,
                    }); });
                };
                InfoWindowManager.prototype.setZIndex = function (infoWindow) {
                    return this._infoWindows.get(infoWindow)
                        .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
                };
                InfoWindowManager.prototype.open = function (infoWindow) {
                    var _this = this;
                    return this._infoWindows.get(infoWindow).then(function (w) {
                        if (infoWindow.hostMarker != null) {
                            return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                                return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                            });
                        }
                        return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
                    });
                };
                InfoWindowManager.prototype.close = function (infoWindow) {
                    return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
                };
                InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
                    return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
                };
                InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
                    var options = {
                        content: infoWindow.content,
                        maxWidth: infoWindow.maxWidth,
                        zIndex: infoWindow.zIndex,
                        disableAutoPan: infoWindow.disableAutoPan,
                    };
                    if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
                        options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
                    }
                    var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
                    this._infoWindows.set(infoWindow, infoWindowPromise);
                };
                /**
                 * Creates a Google Maps event listener for the given InfoWindow as an Observable
                 */
                InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._infoWindows.get(infoWindow).then(function (i) {
                            i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                    });
                };
                return InfoWindowManager;
            }());
            InfoWindowManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
                { type: MarkerManager }
            ]; };
            InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
                    MarkerManager])
            ], InfoWindowManager);
            var AgmInfoWindow_1;
            var infoWindowId = 0;
            /**
             * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
             *
             * ### Example
             * ```typescript
             * import { Component } from '@angular/core';
             *
             * @Component({
             *  selector: 'my-map-cmp',
             *  styles: [`
             *    .agm-map-container {
             *      height: 300px;
             *    }
             * `],
             *  template: `
             *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
             *        <agm-info-window [disableAutoPan]="true">
             *          Hi, this is the content of the <strong>info window</strong>
             *        </agm-info-window>
             *      </agm-marker>
             *    </agm-map>
             *  `
             * })
             * ```
             */
            var AgmInfoWindow = AgmInfoWindow_1 = /** @class */ (function () {
                function AgmInfoWindow(_infoWindowManager, _el) {
                    this._infoWindowManager = _infoWindowManager;
                    this._el = _el;
                    /**
                     * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
                     */
                    this.isOpen = false;
                    /**
                     * Emits an event when the info window is closed.
                     */
                    this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this._infoWindowAddedToManager = false;
                    this._id = (infoWindowId++).toString();
                }
                AgmInfoWindow.prototype.ngOnInit = function () {
                    this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
                    this._infoWindowManager.addInfoWindow(this);
                    this._infoWindowAddedToManager = true;
                    this._updateOpenState();
                    this._registerEventListeners();
                };
                /** @internal */
                AgmInfoWindow.prototype.ngOnChanges = function (changes) {
                    if (!this._infoWindowAddedToManager) {
                        return;
                    }
                    if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
                        typeof this.longitude === 'number') {
                        this._infoWindowManager.setPosition(this);
                    }
                    if (changes['zIndex']) {
                        this._infoWindowManager.setZIndex(this);
                    }
                    if (changes['isOpen']) {
                        this._updateOpenState();
                    }
                    this._setInfoWindowOptions(changes);
                };
                AgmInfoWindow.prototype._registerEventListeners = function () {
                    var _this = this;
                    this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
                        _this.isOpen = false;
                        _this.infoWindowClose.emit();
                    });
                };
                AgmInfoWindow.prototype._updateOpenState = function () {
                    this.isOpen ? this.open() : this.close();
                };
                AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
                    var options = {};
                    var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1; });
                    optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
                    this._infoWindowManager.setOptions(this, options);
                };
                /**
                 * Opens the info window.
                 */
                AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
                /**
                 * Closes the info window.
                 */
                AgmInfoWindow.prototype.close = function () {
                    var _this = this;
                    return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
                };
                /** @internal */
                AgmInfoWindow.prototype.id = function () { return this._id; };
                /** @internal */
                AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
                /** @internal */
                AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
                return AgmInfoWindow;
            }());
            AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
            AgmInfoWindow.ctorParameters = function () { return [
                { type: InfoWindowManager },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmInfoWindow.prototype, "latitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmInfoWindow.prototype, "longitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
            ], AgmInfoWindow.prototype, "disableAutoPan", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmInfoWindow.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmInfoWindow.prototype, "maxWidth", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmInfoWindow.prototype, "isOpen", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmInfoWindow.prototype, "infoWindowClose", void 0);
            AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
            ], AgmInfoWindow);
            /**
             * Manages all KML Layers for a Google Map instance.
             */
            var KmlLayerManager = /** @class */ (function () {
                function KmlLayerManager(_wrapper, _zone) {
                    this._wrapper = _wrapper;
                    this._zone = _zone;
                    this._layers = new Map();
                }
                /**
                 * Adds a new KML Layer to the map.
                 */
                KmlLayerManager.prototype.addKmlLayer = function (layer) {
                    var newLayer = this._wrapper.getNativeMap().then(function (m) {
                        return new google.maps.KmlLayer({
                            clickable: layer.clickable,
                            map: m,
                            preserveViewport: layer.preserveViewport,
                            screenOverlays: layer.screenOverlays,
                            suppressInfoWindows: layer.suppressInfoWindows,
                            url: layer.url,
                            zIndex: layer.zIndex,
                        });
                    });
                    this._layers.set(layer, newLayer);
                };
                KmlLayerManager.prototype.setOptions = function (layer, options) {
                    this._layers.get(layer).then(function (l) { return l.setOptions(options); });
                };
                KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
                    var _this = this;
                    this._layers.get(layer).then(function (l) {
                        l.setMap(null);
                        _this._layers.delete(layer);
                    });
                };
                /**
                 * Creates a Google Maps event listener for the given KmlLayer as an Observable
                 */
                KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._layers.get(layer).then(function (m) {
                            m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                    });
                };
                return KmlLayerManager;
            }());
            KmlLayerManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], KmlLayerManager);
            var AgmKmlLayer_1;
            var layerId$2 = 0;
            var AgmKmlLayer = AgmKmlLayer_1 = /** @class */ (function () {
                function AgmKmlLayer(_manager) {
                    this._manager = _manager;
                    this._addedToManager = false;
                    this._id = (layerId$2++).toString();
                    this._subscriptions = [];
                    /**
                     * If true, the layer receives mouse events. Default value is true.
                     */
                    this.clickable = true;
                    /**
                     * By default, the input map is centered and zoomed to the bounding box of the contents of the
                     * layer.
                     * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
                     * were never set.
                     */
                    this.preserveViewport = false;
                    /**
                     * Whether to render the screen overlays. Default true.
                     */
                    this.screenOverlays = true;
                    /**
                     * Suppress the rendering of info windows when layer features are clicked.
                     */
                    this.suppressInfoWindows = false;
                    /**
                     * The URL of the KML document to display.
                     */
                    this.url = null;
                    /**
                     * The z-index of the layer.
                     */
                    this.zIndex = null;
                    /**
                     * This event is fired when a feature in the layer is clicked.
                     */
                    this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the KML layers default viewport has changed.
                     */
                    this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the KML layer has finished loading.
                     * At this point it is safe to read the status property to determine if the layer loaded
                     * successfully.
                     */
                    this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                AgmKmlLayer.prototype.ngOnInit = function () {
                    if (this._addedToManager) {
                        return;
                    }
                    this._manager.addKmlLayer(this);
                    this._addedToManager = true;
                    this._addEventListeners();
                };
                AgmKmlLayer.prototype.ngOnChanges = function (changes) {
                    if (!this._addedToManager) {
                        return;
                    }
                    this._updatePolygonOptions(changes);
                };
                AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
                    var options = Object.keys(changes)
                        .filter(function (k) { return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1; })
                        .reduce(function (obj, k) {
                        obj[k] = changes[k].currentValue;
                        return obj;
                    }, {});
                    if (Object.keys(options).length > 0) {
                        this._manager.setOptions(this, options);
                    }
                };
                AgmKmlLayer.prototype._addEventListeners = function () {
                    var _this = this;
                    var listeners = [
                        { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
                        { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
                        { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
                    ];
                    listeners.forEach(function (obj) {
                        var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                        _this._subscriptions.push(os);
                    });
                };
                /** @internal */
                AgmKmlLayer.prototype.id = function () { return this._id; };
                /** @internal */
                AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
                /** @internal */
                AgmKmlLayer.prototype.ngOnDestroy = function () {
                    this._manager.deleteKmlLayer(this);
                    // unsubscribe all registered observable subscriptions
                    this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                return AgmKmlLayer;
            }());
            AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
            AgmKmlLayer.ctorParameters = function () { return [
                { type: KmlLayerManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmKmlLayer.prototype, "clickable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmKmlLayer.prototype, "preserveViewport", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmKmlLayer.prototype, "screenOverlays", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmKmlLayer.prototype, "url", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmKmlLayer.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmKmlLayer.prototype, "layerClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmKmlLayer.prototype, "statusChange", void 0);
            AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-kml-layer',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])
            ], AgmKmlLayer);
            function createMVCEventObservable(array) {
                var eventNames = ['insert_at', 'remove_at', 'set_at'];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) { return eventNames.map(function (evName) { return array.addListener(evName, function (index, previous) { return handler.apply(array, [{ 'newArr': array.getArray(), evName: evName, index: index, previous: previous }]); }); }); }, function (_handler, evListeners) { return evListeners.forEach(function (evListener) { return evListener.remove(); }); });
            }
            var MvcArrayMock = /** @class */ (function () {
                function MvcArrayMock() {
                    this.vals = [];
                    this.listeners = {
                        'remove_at': [],
                        'insert_at': [],
                        'set_at': [],
                    };
                }
                MvcArrayMock.prototype.clear = function () {
                    for (var i = this.vals.length - 1; i >= 0; i--) {
                        this.removeAt(i);
                    }
                };
                MvcArrayMock.prototype.getArray = function () {
                    return this.vals.slice();
                };
                MvcArrayMock.prototype.getAt = function (i) {
                    return this.vals[i];
                };
                MvcArrayMock.prototype.getLength = function () {
                    return this.vals.length;
                };
                MvcArrayMock.prototype.insertAt = function (i, elem) {
                    this.vals.splice(i, 0, elem);
                    this.listeners.insert_at.map(function (listener) { return listener(i); });
                };
                MvcArrayMock.prototype.pop = function () {
                    var _this = this;
                    var deleted = this.vals.pop();
                    this.listeners.remove_at.map(function (listener) { return listener(_this.vals.length, deleted); });
                    return deleted;
                };
                MvcArrayMock.prototype.push = function (elem) {
                    var _this = this;
                    this.vals.push(elem);
                    this.listeners.insert_at.map(function (listener) { return listener(_this.vals.length - 1); });
                    return this.vals.length;
                };
                MvcArrayMock.prototype.removeAt = function (i) {
                    var deleted = this.vals.splice(i, 1)[0];
                    this.listeners.remove_at.map(function (listener) { return listener(i, deleted); });
                    return deleted;
                };
                MvcArrayMock.prototype.setAt = function (i, elem) {
                    var deleted = this.vals[i];
                    this.vals[i] = elem;
                    this.listeners.set_at.map(function (listener) { return listener(i, deleted); });
                };
                MvcArrayMock.prototype.forEach = function (callback) {
                    this.vals.forEach(callback);
                };
                MvcArrayMock.prototype.addListener = function (eventName, handler) {
                    var listenerArr = this.listeners[eventName];
                    listenerArr.push(handler);
                    return {
                        remove: function () {
                            listenerArr.splice(listenerArr.indexOf(handler), 1);
                        },
                    };
                };
                return MvcArrayMock;
            }());
            var PolygonManager = /** @class */ (function () {
                function PolygonManager(_mapsWrapper, _zone) {
                    this._mapsWrapper = _mapsWrapper;
                    this._zone = _zone;
                    this._polygons = new Map();
                }
                PolygonManager.prototype.addPolygon = function (path) {
                    var polygonPromise = this._mapsWrapper.createPolygon({
                        clickable: path.clickable,
                        draggable: path.draggable,
                        editable: path.editable,
                        fillColor: path.fillColor,
                        fillOpacity: path.fillOpacity,
                        geodesic: path.geodesic,
                        paths: path.paths,
                        strokeColor: path.strokeColor,
                        strokeOpacity: path.strokeOpacity,
                        strokeWeight: path.strokeWeight,
                        visible: path.visible,
                        zIndex: path.zIndex,
                    });
                    this._polygons.set(path, polygonPromise);
                };
                PolygonManager.prototype.updatePolygon = function (polygon) {
                    var _this = this;
                    var m = this._polygons.get(polygon);
                    if (m == null) {
                        return Promise.resolve();
                    }
                    return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
                };
                PolygonManager.prototype.setPolygonOptions = function (path, options) {
                    return this._polygons.get(path).then(function (l) { l.setOptions(options); });
                };
                PolygonManager.prototype.deletePolygon = function (paths) {
                    var _this = this;
                    var m = this._polygons.get(paths);
                    if (m == null) {
                        return Promise.resolve();
                    }
                    return m.then(function (l) {
                        return _this._zone.run(function () {
                            l.setMap(null);
                            _this._polygons.delete(paths);
                        });
                    });
                };
                PolygonManager.prototype.getPath = function (polygon) {
                    return this._polygons.get(polygon)
                        .then(function (polygon) { return polygon.getPath().getArray(); });
                };
                PolygonManager.prototype.getPaths = function (polygon) {
                    return this._polygons.get(polygon)
                        .then(function (polygon) { return polygon.getPaths().getArray().map(function (p) { return p.getArray(); }); });
                };
                PolygonManager.prototype.createEventObservable = function (eventName, path) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._polygons.get(path).then(function (l) {
                            l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                    });
                };
                PolygonManager.prototype.createPathEventObservable = function (agmPolygon) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var polygon, paths, pathsChanges$;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this._polygons.get(agmPolygon)];
                                case 1:
                                    polygon = _a.sent();
                                    paths = polygon.getPaths();
                                    pathsChanges$ = createMVCEventObservable(paths);
                                    return [2 /*return*/, pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ newArr: paths.getArray() }), // in order to subscribe to them all
                                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, // rest parameter
                                        parentMVEvent.newArr.map(function (chMVC, index) { return createMVCEventObservable(chMVC)
                                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) { return ({ parentMVEvent: parentMVEvent, chMVCEvent: chMVCEvent, pathIndex: index }); })); })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ parentMVEvent: parentMVEvent, chMVCEvent: null, pathIndex: null })); }), // start the merged ob with an event signinifing change to parent
                                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                                            var parentMVEvent = _a.parentMVEvent, chMVCEvent = _a.chMVCEvent, pathIndex = _a.pathIndex;
                                            var retVal;
                                            if (!chMVCEvent) {
                                                retVal = {
                                                    newArr: parentMVEvent.newArr.map(function (subArr) { return subArr.getArray().map(function (latLng) { return latLng.toJSON(); }); }),
                                                    eventName: parentMVEvent.evName,
                                                    index: parentMVEvent.index,
                                                };
                                                if (parentMVEvent.previous) {
                                                    retVal.previous = parentMVEvent.previous.getArray();
                                                }
                                            }
                                            else {
                                                retVal = {
                                                    newArr: parentMVEvent.newArr.map(function (subArr) { return subArr.getArray().map(function (latLng) { return latLng.toJSON(); }); }),
                                                    pathIndex: pathIndex,
                                                    eventName: chMVCEvent.evName,
                                                    index: chMVCEvent.index,
                                                };
                                                if (chMVCEvent.previous) {
                                                    retVal.previous = chMVCEvent.previous;
                                                }
                                            }
                                            return retVal;
                                        }))];
                            }
                        });
                    });
                };
                return PolygonManager;
            }());
            PolygonManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], PolygonManager);
            var PolylineManager_1;
            var PolylineManager = PolylineManager_1 = /** @class */ (function () {
                function PolylineManager(_mapsWrapper, _zone) {
                    this._mapsWrapper = _mapsWrapper;
                    this._zone = _zone;
                    this._polylines = new Map();
                }
                PolylineManager._convertPoints = function (line) {
                    var path = line._getPoints().map(function (point) {
                        return { lat: point.latitude, lng: point.longitude };
                    });
                    return path;
                };
                PolylineManager._convertPath = function (path) {
                    var symbolPath = google.maps.SymbolPath[path];
                    if (typeof symbolPath === 'number') {
                        return symbolPath;
                    }
                    else {
                        return path;
                    }
                };
                PolylineManager._convertIcons = function (line) {
                    var icons = line._getIcons().map(function (agmIcon) { return ({
                        fixedRotation: agmIcon.fixedRotation,
                        offset: agmIcon.offset,
                        repeat: agmIcon.repeat,
                        icon: {
                            anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                            fillColor: agmIcon.fillColor,
                            fillOpacity: agmIcon.fillOpacity,
                            path: PolylineManager_1._convertPath(agmIcon.path),
                            rotation: agmIcon.rotation,
                            scale: agmIcon.scale,
                            strokeColor: agmIcon.strokeColor,
                            strokeOpacity: agmIcon.strokeOpacity,
                            strokeWeight: agmIcon.strokeWeight,
                        },
                    }); });
                    // prune undefineds;
                    icons.forEach(function (icon) {
                        Object.entries(icon).forEach(function (_a) {
                            var key = _a[0], val = _a[1];
                            if (typeof val === 'undefined') {
                                delete icon[key];
                            }
                        });
                        if (typeof icon.icon.anchor.x === 'undefined' ||
                            typeof icon.icon.anchor.y === 'undefined') {
                            delete icon.icon.anchor;
                        }
                    });
                    return icons;
                };
                PolylineManager.prototype.addPolyline = function (line) {
                    var _this = this;
                    var polylinePromise = this._mapsWrapper.getNativeMap()
                        .then(function () { return [PolylineManager_1._convertPoints(line),
                        PolylineManager_1._convertIcons(line)]; })
                        .then(function (_a) {
                        var path = _a[0], icons = _a[1];
                        return _this._mapsWrapper.createPolyline({
                            clickable: line.clickable,
                            draggable: line.draggable,
                            editable: line.editable,
                            geodesic: line.geodesic,
                            strokeColor: line.strokeColor,
                            strokeOpacity: line.strokeOpacity,
                            strokeWeight: line.strokeWeight,
                            visible: line.visible,
                            zIndex: line.zIndex,
                            path: path,
                            icons: icons,
                        });
                    });
                    this._polylines.set(line, polylinePromise);
                };
                PolylineManager.prototype.updatePolylinePoints = function (line) {
                    var _this = this;
                    var path = PolylineManager_1._convertPoints(line);
                    var m = this._polylines.get(line);
                    if (m == null) {
                        return Promise.resolve();
                    }
                    return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
                };
                PolylineManager.prototype.updateIconSequences = function (line) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var icons, m;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this._mapsWrapper.getNativeMap()];
                                case 1:
                                    _a.sent();
                                    icons = PolylineManager_1._convertIcons(line);
                                    m = this._polylines.get(line);
                                    if (m == null) {
                                        return [2 /*return*/];
                                    }
                                    return [2 /*return*/, m.then(function (l) { return _this._zone.run(function () { return l.setOptions({ icons: icons }); }); })];
                            }
                        });
                    });
                };
                PolylineManager.prototype.setPolylineOptions = function (line, options) {
                    return this._polylines.get(line).then(function (l) { l.setOptions(options); });
                };
                PolylineManager.prototype.deletePolyline = function (line) {
                    var _this = this;
                    var m = this._polylines.get(line);
                    if (m == null) {
                        return Promise.resolve();
                    }
                    return m.then(function (l) {
                        return _this._zone.run(function () {
                            l.setMap(null);
                            _this._polylines.delete(line);
                        });
                    });
                };
                PolylineManager.prototype.getMVCPath = function (agmPolyline) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var polyline;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this._polylines.get(agmPolyline)];
                                case 1:
                                    polyline = _a.sent();
                                    return [2 /*return*/, polyline.getPath()];
                            }
                        });
                    });
                };
                PolylineManager.prototype.getPath = function (agmPolyline) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getMVCPath(agmPolyline)];
                                case 1: return [2 /*return*/, (_a.sent()).getArray()];
                            }
                        });
                    });
                };
                PolylineManager.prototype.createEventObservable = function (eventName, line) {
                    var _this = this;
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        _this._polylines.get(line).then(function (l) {
                            l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                    });
                };
                PolylineManager.prototype.createPathEventObservable = function (line) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
                        var mvcPath;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getMVCPath(line)];
                                case 1:
                                    mvcPath = _a.sent();
                                    return [2 /*return*/, createMVCEventObservable(mvcPath)];
                            }
                        });
                    });
                };
                return PolylineManager;
            }());
            PolylineManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], PolylineManager);
            var RectangleManager = /** @class */ (function () {
                function RectangleManager(_apiWrapper, _zone) {
                    this._apiWrapper = _apiWrapper;
                    this._zone = _zone;
                    this._rectangles = new Map();
                }
                RectangleManager.prototype.addRectangle = function (rectangle) {
                    this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
                        bounds: {
                            north: rectangle.north,
                            east: rectangle.east,
                            south: rectangle.south,
                            west: rectangle.west,
                        },
                        clickable: rectangle.clickable,
                        draggable: rectangle.draggable,
                        editable: rectangle.editable,
                        fillColor: rectangle.fillColor,
                        fillOpacity: rectangle.fillOpacity,
                        strokeColor: rectangle.strokeColor,
                        strokeOpacity: rectangle.strokeOpacity,
                        strokePosition: rectangle.strokePosition,
                        strokeWeight: rectangle.strokeWeight,
                        visible: rectangle.visible,
                        zIndex: rectangle.zIndex,
                    }));
                };
                /**
                 * Removes the given rectangle from the map.
                 */
                RectangleManager.prototype.removeRectangle = function (rectangle) {
                    var _this = this;
                    return this._rectangles.get(rectangle).then(function (r) {
                        r.setMap(null);
                        _this._rectangles.delete(rectangle);
                    });
                };
                RectangleManager.prototype.setOptions = function (rectangle, options) {
                    return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
                };
                RectangleManager.prototype.getBounds = function (rectangle) {
                    return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
                };
                RectangleManager.prototype.setBounds = function (rectangle) {
                    return this._rectangles.get(rectangle).then(function (r) {
                        return r.setBounds({
                            north: rectangle.north,
                            east: rectangle.east,
                            south: rectangle.south,
                            west: rectangle.west,
                        });
                    });
                };
                RectangleManager.prototype.setEditable = function (rectangle) {
                    return this._rectangles.get(rectangle).then(function (r) {
                        return r.setEditable(rectangle.editable);
                    });
                };
                RectangleManager.prototype.setDraggable = function (rectangle) {
                    return this._rectangles.get(rectangle).then(function (r) {
                        return r.setDraggable(rectangle.draggable);
                    });
                };
                RectangleManager.prototype.setVisible = function (rectangle) {
                    return this._rectangles.get(rectangle).then(function (r) {
                        return r.setVisible(rectangle.visible);
                    });
                };
                RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
                    var _this = this;
                    return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                        var listener = null;
                        _this._rectangles.get(rectangle).then(function (r) {
                            listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
                        });
                        return function () {
                            if (listener !== null) {
                                listener.remove();
                            }
                        };
                    });
                };
                return RectangleManager;
            }());
            RectangleManager.ctorParameters = function () { return [
                { type: GoogleMapsAPIWrapper },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], RectangleManager);
            var AgmMap_1;
            /**
             * AgmMap renders a Google Map.
             * **Important note**: To be able see a map in the browser, you have to define a height for the
             * element `agm-map`.
             *
             * ### Example
             * ```typescript
             * import { Component } from '@angular/core';
             *
             * @Component({
             *  selector: 'my-map-cmp',
             *  styles: [`
             *    agm-map {
             *      height: 300px;
             *    }
             * `],
             *  template: `
             *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             *    </agm-map>
             *  `
             * })
             * ```
             */
            var AgmMap = AgmMap_1 = /** @class */ (function () {
                function AgmMap(_elem, _mapsWrapper, _fitBoundsService, _zone) {
                    this._elem = _elem;
                    this._mapsWrapper = _mapsWrapper;
                    this._fitBoundsService = _fitBoundsService;
                    this._zone = _zone;
                    /**
                     * The longitude that defines the center of the map.
                     */
                    this.longitude = 0;
                    /**
                     * The latitude that defines the center of the map.
                     */
                    this.latitude = 0;
                    /**
                     * The zoom level of the map. The default zoom level is 8.
                     */
                    this.zoom = 8;
                    /**
                     * Enables/disables if map is draggable.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.draggable = true;
                    /**
                     * Enables/disables zoom and center on double click. Enabled by default.
                     */
                    this.disableDoubleClickZoom = false;
                    /**
                     * Enables/disables all default UI of the Google map. Please note: When the map is created, this
                     * value cannot get updated.
                     */
                    this.disableDefaultUI = false;
                    /**
                     * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
                     */
                    this.scrollwheel = true;
                    /**
                     * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
                     * enabled by default.
                     */
                    this.keyboardShortcuts = true;
                    /**
                     * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
                     * modes, these styles will only apply to labels and geometry.
                     */
                    this.styles = [];
                    /**
                     * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
                     * used to
                     * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
                     */
                    this.usePanning = false;
                    /**
                     * Sets the viewport to contain the given bounds.
                     * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
                     */
                    this.fitBounds = false;
                    /**
                     * The initial enabled/disabled state of the Scale control. This is disabled by default.
                     */
                    this.scaleControl = false;
                    /**
                     * The initial enabled/disabled state of the Map type control.
                     */
                    this.mapTypeControl = false;
                    /**
                     * The initial enabled/disabled state of the Pan control.
                     */
                    this.panControl = false;
                    /**
                     * The initial enabled/disabled state of the Rotate control.
                     */
                    this.rotateControl = false;
                    /**
                     * The initial enabled/disabled state of the Fullscreen control.
                     */
                    this.fullscreenControl = false;
                    /**
                     * The map mapTypeId. Defaults to 'roadmap'.
                     */
                    this.mapTypeId = 'roadmap';
                    /**
                     * When false, map icons are not clickable. A map icon represents a point of interest,
                     * also known as a POI. By default map icons are clickable.
                     */
                    this.clickableIcons = true;
                    /**
                     * A map icon represents a point of interest, also known as a POI.
                     * When map icons are clickable by default, an info window is displayed.
                     * When this property is set to false, the info window will not be shown but the click event
                     * will still fire
                     */
                    this.showDefaultInfoWindow = true;
                    /**
                     * This setting controls how gestures on the map are handled.
                     * Allowed values:
                     * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
                     * - 'greedy'      (All touch gestures pan or zoom the map.)
                     * - 'none'        (The map cannot be panned or zoomed by user gestures.)
                     * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
                     */
                    this.gestureHandling = 'auto';
                    /**
                     * Controls the automatic switching behavior for the angle of incidence of
                     * the map. The only allowed values are 0 and 45. The value 0 causes the map
                     * to always use a 0° overhead view regardless of the zoom level and
                     * viewport. The value 45 causes the tilt angle to automatically switch to
                     * 45 whenever 45° imagery is available for the current zoom level and
                     * viewport, and switch back to 0 whenever 45° imagery is not available
                     * (this is the default behavior). 45° imagery is only available for
                     * satellite and hybrid map types, within some locations, and at some zoom
                     * levels. Note: getTilt returns the current tilt angle, not the value
                     * specified by this option. Because getTilt and this option refer to
                     * different things, do not bind() the tilt property; doing so may yield
                     * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
                     */
                    this.tilt = 0;
                    this._observableSubscriptions = [];
                    /**
                     * This event emitter gets emitted when the user clicks on the map (but not when they click on a
                     * marker or infoWindow).
                     */
                    this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user right-clicks on the map (but not when they click
                     * on a marker or infoWindow).
                     */
                    this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user double-clicks on the map (but not when they click
                     * on a marker or infoWindow).
                     */
                    this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter is fired when the map center changes.
                     */
                    this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the viewport bounds have changed.
                     */
                    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the mapTypeId property changes.
                     */
                    this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the map becomes idle after panning or zooming.
                     */
                    this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the zoom level has changed.
                     */
                    this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the google map is fully initialized.
                     * You get the google.maps.Map instance as a result of this EventEmitter.
                     */
                    this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the visible tiles have finished loading.
                     */
                    this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /** @internal */
                AgmMap.prototype.ngOnInit = function () {
                    // todo: this should be solved with a new component and a viewChild decorator
                    var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
                    this._initMapInstance(container);
                };
                AgmMap.prototype._initMapInstance = function (el) {
                    var _this = this;
                    this._mapsWrapper.createMap(el, {
                        center: { lat: this.latitude || 0, lng: this.longitude || 0 },
                        zoom: this.zoom,
                        minZoom: this.minZoom,
                        maxZoom: this.maxZoom,
                        controlSize: this.controlSize,
                        disableDefaultUI: this.disableDefaultUI,
                        disableDoubleClickZoom: this.disableDoubleClickZoom,
                        scrollwheel: this.scrollwheel,
                        backgroundColor: this.backgroundColor,
                        draggable: this.draggable,
                        draggableCursor: this.draggableCursor,
                        draggingCursor: this.draggingCursor,
                        keyboardShortcuts: this.keyboardShortcuts,
                        styles: this.styles,
                        zoomControl: this.zoomControl,
                        zoomControlOptions: this.zoomControlOptions,
                        streetViewControl: this.streetViewControl,
                        streetViewControlOptions: this.streetViewControlOptions,
                        scaleControl: this.scaleControl,
                        scaleControlOptions: this.scaleControlOptions,
                        mapTypeControl: this.mapTypeControl,
                        mapTypeControlOptions: this.mapTypeControlOptions,
                        panControl: this.panControl,
                        panControlOptions: this.panControlOptions,
                        rotateControl: this.rotateControl,
                        rotateControlOptions: this.rotateControlOptions,
                        fullscreenControl: this.fullscreenControl,
                        fullscreenControlOptions: this.fullscreenControlOptions,
                        mapTypeId: this.mapTypeId,
                        clickableIcons: this.clickableIcons,
                        gestureHandling: this.gestureHandling,
                        tilt: this.tilt,
                        restriction: this.restriction,
                    })
                        .then(function () { return _this._mapsWrapper.getNativeMap(); })
                        .then(function (map) { return _this.mapReady.emit(map); });
                    // register event listeners
                    this._handleMapCenterChange();
                    this._handleMapZoomChange();
                    this._handleMapMouseEvents();
                    this._handleBoundsChange();
                    this._handleMapTypeIdChange();
                    this._handleTilesLoadedEvent();
                    this._handleIdleEvent();
                };
                /** @internal */
                AgmMap.prototype.ngOnDestroy = function () {
                    // unsubscribe all registered observable subscriptions
                    this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
                    // remove all listeners from the map instance
                    this._mapsWrapper.clearInstanceListeners();
                    if (this._fitBoundsSubscription) {
                        this._fitBoundsSubscription.unsubscribe();
                    }
                };
                /* @internal */
                AgmMap.prototype.ngOnChanges = function (changes) {
                    this._updateMapOptionsChanges(changes);
                    this._updatePosition(changes);
                };
                AgmMap.prototype._updateMapOptionsChanges = function (changes) {
                    var options = {};
                    var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1; });
                    optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
                    this._mapsWrapper.setMapOptions(options);
                };
                /**
                 * Triggers a resize event on the google map instance.
                 * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
                 * Returns a promise that gets resolved after the event was triggered.
                 */
                AgmMap.prototype.triggerResize = function (recenter) {
                    var _this = this;
                    if (recenter === void 0) { recenter = true; }
                    // Note: When we would trigger the resize event and show the map in the same turn (which is a
                    // common case for triggering a resize event), then the resize event would not
                    // work (to show the map), so we trigger the event in a timeout.
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                                if (recenter) {
                                    _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                                }
                                resolve();
                            });
                        });
                    });
                };
                AgmMap.prototype._updatePosition = function (changes) {
                    if (changes['latitude'] == null && changes['longitude'] == null &&
                        !changes['fitBounds']) {
                        // no position update needed
                        return;
                    }
                    // we prefer fitBounds in changes
                    if ('fitBounds' in changes) {
                        this._fitBounds();
                        return;
                    }
                    if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
                        return;
                    }
                    this._setCenter();
                };
                AgmMap.prototype._setCenter = function () {
                    var newCenter = {
                        lat: this.latitude,
                        lng: this.longitude,
                    };
                    if (this.usePanning) {
                        this._mapsWrapper.panTo(newCenter);
                    }
                    else {
                        this._mapsWrapper.setCenter(newCenter);
                    }
                };
                AgmMap.prototype._fitBounds = function () {
                    switch (this.fitBounds) {
                        case true:
                            this._subscribeToFitBoundsUpdates();
                            break;
                        case false:
                            if (this._fitBoundsSubscription) {
                                this._fitBoundsSubscription.unsubscribe();
                            }
                            break;
                        default:
                            this._updateBounds(this.fitBounds, this.fitBoundsPadding);
                    }
                };
                AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
                    var _this = this;
                    this._zone.runOutsideAngular(function () {
                        _this._fitBoundsSubscription = _this._fitBoundsService.getBounds$().subscribe(function (b) {
                            _this._zone.run(function () { return _this._updateBounds(b, _this.fitBoundsPadding); });
                        });
                    });
                };
                AgmMap.prototype._updateBounds = function (bounds, padding) {
                    if (!bounds) {
                        return;
                    }
                    if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
                        var newBounds = new google.maps.LatLngBounds();
                        newBounds.union(bounds);
                        bounds = newBounds;
                    }
                    if (this.usePanning) {
                        this._mapsWrapper.panToBounds(bounds, padding);
                        return;
                    }
                    this._mapsWrapper.fitBounds(bounds, padding);
                };
                AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
                    return bounds != null && bounds.extend === undefined;
                };
                AgmMap.prototype._handleMapCenterChange = function () {
                    var _this = this;
                    var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
                        _this._mapsWrapper.getCenter().then(function (center) {
                            _this.latitude = center.lat();
                            _this.longitude = center.lng();
                            _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
                        });
                    });
                    this._observableSubscriptions.push(s);
                };
                AgmMap.prototype._handleBoundsChange = function () {
                    var _this = this;
                    var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
                        _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
                    });
                    this._observableSubscriptions.push(s);
                };
                AgmMap.prototype._handleMapTypeIdChange = function () {
                    var _this = this;
                    var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
                        _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
                    });
                    this._observableSubscriptions.push(s);
                };
                AgmMap.prototype._handleMapZoomChange = function () {
                    var _this = this;
                    var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
                        _this._mapsWrapper.getZoom().then(function (z) {
                            _this.zoom = z;
                            _this.zoomChange.emit(z);
                        });
                    });
                    this._observableSubscriptions.push(s);
                };
                AgmMap.prototype._handleIdleEvent = function () {
                    var _this = this;
                    var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
                    this._observableSubscriptions.push(s);
                };
                AgmMap.prototype._handleTilesLoadedEvent = function () {
                    var _this = this;
                    var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () { return _this.tilesLoaded.emit(void 0); });
                    this._observableSubscriptions.push(s);
                };
                AgmMap.prototype._handleMapMouseEvents = function () {
                    var _this = this;
                    var events = [
                        { name: 'click', emitter: this.mapClick },
                        { name: 'rightclick', emitter: this.mapRightClick },
                        { name: 'dblclick', emitter: this.mapDblClick },
                    ];
                    events.forEach(function (e) {
                        var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                            var value = {
                                coords: {
                                    lat: event.latLng.lat(),
                                    lng: event.latLng.lng(),
                                },
                                placeId: event.placeId,
                            };
                            // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                            if (value.placeId && !_this.showDefaultInfoWindow) {
                                event.stop();
                            }
                            e.emitter.emit(value);
                        });
                        _this._observableSubscriptions.push(s);
                    });
                };
                return AgmMap;
            }());
            /**
             * Map option attributes that can change over time
             */
            AgmMap._mapOptionsAttributes = [
                'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
                'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
                'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
                'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
                'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
                'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction',
            ];
            AgmMap.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: GoogleMapsAPIWrapper },
                { type: FitBoundsService },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "longitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "latitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "zoom", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmMap.prototype, "minZoom", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmMap.prototype, "maxZoom", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmMap.prototype, "controlSize", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "draggable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "disableDoubleClickZoom", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "disableDefaultUI", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "scrollwheel", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMap.prototype, "backgroundColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMap.prototype, "draggableCursor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMap.prototype, "draggingCursor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "keyboardShortcuts", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
            ], AgmMap.prototype, "zoomControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "zoomControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
            ], AgmMap.prototype, "styles", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "usePanning", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
            ], AgmMap.prototype, "streetViewControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "streetViewControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "fitBounds", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "fitBoundsPadding", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "scaleControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "scaleControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "mapTypeControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "mapTypeControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "panControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "panControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "rotateControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "rotateControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "fullscreenControl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "fullscreenControlOptions", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMap.prototype, "mapTypeId", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "clickableIcons", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "showDefaultInfoWindow", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMap.prototype, "gestureHandling", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "tilt", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMap.prototype, "restriction", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "mapClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "mapRightClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "mapDblClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "centerChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "boundsChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "mapTypeIdChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "idle", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "zoomChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "mapReady", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMap.prototype, "tilesLoaded", void 0);
            AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'agm-map',
                    providers: [
                        CircleManager,
                        DataLayerManager,
                        DataLayerManager,
                        FitBoundsService,
                        GoogleMapsAPIWrapper,
                        InfoWindowManager,
                        KmlLayerManager,
                        LayerManager,
                        MarkerManager,
                        PolygonManager,
                        PolylineManager,
                        RectangleManager,
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true',
                    },
                    template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleMapsAPIWrapper, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
            ], AgmMap);
            var AgmMarker_1;
            var markerId = 0;
            /**
             * AgmMarker renders a map marker inside a {@link AgmMap}.
             *
             * ### Example
             * ```typescript
             * import { Component } from '@angular/core';
             *
             * @Component({
             *  selector: 'my-map-cmp',
             *  styles: [`
             *    .agm-map-container {
             *      height: 300px;
             *    }
             * `],
             *  template: `
             *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
             *      </agm-marker>
             *    </agm-map>
             *  `
             * })
             * ```
             */
            var AgmMarker = AgmMarker_1 = /** @class */ (function () {
                function AgmMarker(_markerManager) {
                    this._markerManager = _markerManager;
                    /**
                     * If true, the marker can be dragged. Default value is false.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.draggable = false;
                    /**
                     * If true, the marker is visible
                     */
                    this.visible = true;
                    /**
                     * Whether to automatically open the child info window when the marker is clicked.
                     */
                    this.openInfoWindow = true;
                    /**
                     * The marker's opacity between 0.0 and 1.0.
                     */
                    this.opacity = 1;
                    /**
                     * All markers are displayed on the map in order of their zIndex, with higher values displaying in
                     * front of markers with lower values. By default, markers are displayed according to their
                     * vertical position on screen, with lower markers appearing in front of markers further up the
                     * screen.
                     */
                    this.zIndex = 1;
                    /**
                     * If true, the marker can be clicked. Default value is true.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.clickable = true;
                    /**
                     * This event is fired when the marker's animation property changes.
                     *
                     * @memberof AgmMarker
                     */
                    this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user clicks on the marker.
                     */
                    this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user rightclicks on the marker.
                     */
                    this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user starts dragging the marker.
                     */
                    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is repeatedly fired while the user drags the marker.
                     */
                    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user stops dragging the marker.
                     */
                    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user mouses over the marker.
                     */
                    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user mouses outside the marker.
                     */
                    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /** @internal */
                    this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
                    this._markerAddedToManger = false;
                    this._observableSubscriptions = [];
                    this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                    this._id = (markerId++).toString();
                }
                /* @internal */
                AgmMarker.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    this.handleInfoWindowUpdate();
                    this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
                };
                AgmMarker.prototype.handleInfoWindowUpdate = function () {
                    var _this = this;
                    if (this.infoWindow.length > 1) {
                        throw new Error('Expected no more than one info window.');
                    }
                    this.infoWindow.forEach(function (marker) {
                        marker.hostMarker = _this;
                    });
                };
                /** @internal */
                AgmMarker.prototype.ngOnChanges = function (changes) {
                    if (typeof this.latitude === 'string') {
                        this.latitude = Number(this.latitude);
                    }
                    if (typeof this.longitude === 'string') {
                        this.longitude = Number(this.longitude);
                    }
                    if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
                        return;
                    }
                    if (!this._markerAddedToManger) {
                        this._markerManager.addMarker(this);
                        this._updateFitBoundsDetails();
                        this._markerAddedToManger = true;
                        this._addEventListeners();
                        return;
                    }
                    if (changes['latitude'] || changes['longitude']) {
                        this._markerManager.updateMarkerPosition(this);
                        this._updateFitBoundsDetails();
                    }
                    if (changes['title']) {
                        this._markerManager.updateTitle(this);
                    }
                    if (changes['label']) {
                        this._markerManager.updateLabel(this);
                    }
                    if (changes['draggable']) {
                        this._markerManager.updateDraggable(this);
                    }
                    if (changes['iconUrl']) {
                        this._markerManager.updateIcon(this);
                    }
                    if (changes['opacity']) {
                        this._markerManager.updateOpacity(this);
                    }
                    if (changes['visible']) {
                        this._markerManager.updateVisible(this);
                    }
                    if (changes['zIndex']) {
                        this._markerManager.updateZIndex(this);
                    }
                    if (changes['clickable']) {
                        this._markerManager.updateClickable(this);
                    }
                    if (changes['animation']) {
                        this._markerManager.updateAnimation(this);
                    }
                };
                /** @internal */
                AgmMarker.prototype.getFitBoundsDetails$ = function () {
                    return this._fitBoundsDetails$.asObservable();
                };
                AgmMarker.prototype._updateFitBoundsDetails = function () {
                    this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
                };
                AgmMarker.prototype._addEventListeners = function () {
                    var _this = this;
                    var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
                        if (_this.openInfoWindow) {
                            _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
                        }
                        _this.markerClick.emit(_this);
                    });
                    this._observableSubscriptions.push(cs);
                    var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
                        _this.markerRightClick.emit(null);
                    });
                    this._observableSubscriptions.push(rc);
                    var ds = this._markerManager.createEventObservable('dragstart', this)
                        .subscribe(function (e) {
                        _this.dragStart.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
                    });
                    this._observableSubscriptions.push(ds);
                    var d = this._markerManager.createEventObservable('drag', this)
                        .subscribe(function (e) {
                        _this.drag.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
                    });
                    this._observableSubscriptions.push(d);
                    var de = this._markerManager.createEventObservable('dragend', this)
                        .subscribe(function (e) {
                        _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
                    });
                    this._observableSubscriptions.push(de);
                    var mover = this._markerManager.createEventObservable('mouseover', this)
                        .subscribe(function (e) {
                        _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
                    });
                    this._observableSubscriptions.push(mover);
                    var mout = this._markerManager.createEventObservable('mouseout', this)
                        .subscribe(function (e) {
                        _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
                    });
                    this._observableSubscriptions.push(mout);
                    var anChng = this._markerManager.createEventObservable('animation_changed', this)
                        .subscribe(function () {
                        _this.animationChange.emit(_this.animation);
                    });
                    this._observableSubscriptions.push(anChng);
                };
                /** @internal */
                AgmMarker.prototype.id = function () { return this._id; };
                /** @internal */
                AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
                /** @internal */
                AgmMarker.prototype.ngOnDestroy = function () {
                    this._markerManager.deleteMarker(this);
                    // unsubscribe all registered observable subscriptions
                    this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                return AgmMarker;
            }());
            AgmMarker.ctorParameters = function () { return [
                { type: MarkerManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmMarker.prototype, "latitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmMarker.prototype, "longitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMarker.prototype, "title", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "label", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "draggable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMarker.prototype, "iconUrl", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "visible", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "openInfoWindow", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "opacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "clickable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmMarker.prototype, "animation", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmMarker.prototype, "animationChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "markerClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "markerRightClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "dragStart", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "drag", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "dragEnd", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "mouseOver", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmMarker.prototype, "mouseOut", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
            ], AgmMarker.prototype, "infoWindow", void 0);
            AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-marker',
                    providers: [
                        { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AgmMarker_1; }) },
                    ],
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation',
                    ],
                    outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut'],
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])
            ], AgmMarker);
            var AgmPolygon_1;
            /**
             * AgmPolygon renders a polygon on a {@link AgmMap}
             *
             * ### Example
             * ```typescript
             * import { Component } from '@angular/core';
             *
             * @Component({
             *  selector: 'my-map-cmp',
             *  styles: [`
             *    agm-map {
             *      height: 300px;
             *    }
             * `],
             *  template: `
             *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             *      <agm-polygon [paths]="paths">
             *      </agm-polygon>
             *    </agm-map>
             *  `
             * })
             * export class MyMapCmp {
             *   lat: number = 0;
             *   lng: number = 0;
             *   zoom: number = 10;
             *   paths: Array<LatLngLiteral> = [
             *     { lat: 0,  lng: 10 },
             *     { lat: 0,  lng: 20 },
             *     { lat: 10, lng: 20 },
             *     { lat: 10, lng: 10 },
             *     { lat: 0,  lng: 10 }
             *   ]
             *   // Nesting paths will create a hole where they overlap;
             *   nestedPaths: Array<Array<LatLngLiteral>> = [[
             *     { lat: 0,  lng: 10 },
             *     { lat: 0,  lng: 20 },
             *     { lat: 10, lng: 20 },
             *     { lat: 10, lng: 10 },
             *     { lat: 0,  lng: 10 }
             *   ], [
             *     { lat: 0, lng: 15 },
             *     { lat: 0, lng: 20 },
             *     { lat: 5, lng: 20 },
             *     { lat: 5, lng: 15 },
             *     { lat: 0, lng: 15 }
             *   ]]
             * }
             * ```
             */
            var AgmPolygon = AgmPolygon_1 = /** @class */ (function () {
                function AgmPolygon(_polygonManager) {
                    this._polygonManager = _polygonManager;
                    /**
                     * Indicates whether this Polygon handles mouse events. Defaults to true.
                     */
                    this.clickable = true;
                    /**
                     * If set to true, the user can drag this shape over the map. The geodesic
                     * property defines the mode of dragging. Defaults to false.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.draggable = false;
                    /**
                     * If set to true, the user can edit this shape by dragging the control
                     * points shown at the vertices and on each segment. Defaults to false.
                     */
                    this.editable = false;
                    /**
                     * When true, edges of the polygon are interpreted as geodesic and will
                     * follow the curvature of the Earth. When false, edges of the polygon are
                     * rendered as straight lines in screen space. Note that the shape of a
                     * geodesic polygon may appear to change when dragged, as the dimensions
                     * are maintained relative to the surface of the earth. Defaults to false.
                     */
                    this.geodesic = false;
                    /**
                     * The ordered sequence of coordinates that designates a closed loop.
                     * Unlike polylines, a polygon may consist of one or more paths.
                     *  As a result, the paths property may specify one or more arrays of
                     * LatLng coordinates. Paths are closed automatically; do not repeat the
                     * first vertex of the path as the last vertex. Simple polygons may be
                     * defined using a single array of LatLngs. More complex polygons may
                     * specify an array of arrays. Any simple arrays are converted into Arrays.
                     * Inserting or removing LatLngs from the Array will automatically update
                     * the polygon on the map.
                     */
                    this.paths = [];
                    /**
                     * This event is fired when the DOM click event is fired on the Polygon.
                     */
                    this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM dblclick event is fired on the Polygon.
                     */
                    this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is repeatedly fired while the user drags the polygon.
                     */
                    this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user stops dragging the polygon.
                     */
                    this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user starts dragging the polygon.
                     */
                    this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousedown event is fired on the Polygon.
                     */
                    this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousemove event is fired on the Polygon.
                     */
                    this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on Polygon mouseout.
                     */
                    this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on Polygon mouseover.
                     */
                    this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired whe the DOM mouseup event is fired on the Polygon
                     */
                    this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the Polygon is right-clicked on.
                     */
                    this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired after Polygon first path changes.
                     */
                    this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this._polygonAddedToManager = false;
                    this._subscriptions = [];
                }
                /** @internal */
                AgmPolygon.prototype.ngAfterContentInit = function () {
                    if (!this._polygonAddedToManager) {
                        this._init();
                    }
                };
                AgmPolygon.prototype.ngOnChanges = function (changes) {
                    if (!this._polygonAddedToManager) {
                        this._init();
                        return;
                    }
                    this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
                };
                AgmPolygon.prototype._init = function () {
                    this._polygonManager.addPolygon(this);
                    this._polygonAddedToManager = true;
                    this._addEventListeners();
                };
                AgmPolygon.prototype._addEventListeners = function () {
                    var _this = this;
                    var handlers = [
                        { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
                        { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
                        { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
                        { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
                        { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
                        { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
                        { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
                        { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
                        { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
                        { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
                        { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
                    ];
                    handlers.forEach(function (obj) {
                        var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                        _this._subscriptions.push(os);
                    });
                    this._polygonManager.createPathEventObservable(this)
                        .then(function (paths$) {
                        var os = paths$.subscribe(function (pathEvent) { return _this.polyPathsChange.emit(pathEvent); });
                        _this._subscriptions.push(os);
                    });
                };
                AgmPolygon.prototype._updatePolygonOptions = function (changes) {
                    return Object.keys(changes)
                        .filter(function (k) { return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1; })
                        .reduce(function (obj, k) {
                        obj[k] = changes[k].currentValue;
                        return obj;
                    }, {});
                };
                /** @internal */
                AgmPolygon.prototype.id = function () { return this._id; };
                /** @internal */
                AgmPolygon.prototype.ngOnDestroy = function () {
                    this._polygonManager.deletePolygon(this);
                    // unsubscribe all registered observable subscriptions
                    this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                AgmPolygon.prototype.getPath = function () {
                    return this._polygonManager.getPath(this);
                };
                AgmPolygon.prototype.getPaths = function () {
                    return this._polygonManager.getPaths(this);
                };
                return AgmPolygon;
            }());
            AgmPolygon._polygonOptionsAttributes = [
                'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
                'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
                'editable', 'visible',
            ];
            AgmPolygon.ctorParameters = function () { return [
                { type: PolygonManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolygon.prototype, "clickable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolygon.prototype, "draggable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolygon.prototype, "editable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolygon.prototype, "fillColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolygon.prototype, "fillOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolygon.prototype, "geodesic", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
            ], AgmPolygon.prototype, "paths", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolygon.prototype, "strokeColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolygon.prototype, "strokeOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolygon.prototype, "strokeWeight", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
            ], AgmPolygon.prototype, "visible", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolygon.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyDblClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyDrag", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyDragEnd", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyDragStart", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyMouseDown", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyMouseMove", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyMouseOut", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyMouseOver", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyMouseUp", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolygon.prototype, "polyRightClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolygon.prototype, "polyPathsChange", void 0);
            AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-polygon',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])
            ], AgmPolygon);
            /**
             * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
             * or custom icons either along the entire line, or in a specific part of it.
             * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
             *
             * ### Example
             * ```html
             *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             *      <agm-polyline>
             *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
             *          </agm-icon-sequence>
             *      </agm-polyline>
             *    </agm-map>
             * ```
             *
             * @export
             * @class AgmPolylineIcon
             */
            var AgmPolylineIcon = /** @class */ (function () {
                function AgmPolylineIcon() {
                }
                AgmPolylineIcon.prototype.ngOnInit = function () {
                    if (this.path == null) {
                        throw new Error('Icon Sequence path is required');
                    }
                };
                return AgmPolylineIcon;
            }());
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
            ], AgmPolylineIcon.prototype, "fixedRotation", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolylineIcon.prototype, "offset", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolylineIcon.prototype, "repeat", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "anchorX", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "anchorY", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolylineIcon.prototype, "fillColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "fillOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolylineIcon.prototype, "path", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "rotation", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "scale", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolylineIcon.prototype, "strokeColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylineIcon.prototype, "strokeWeight", void 0);
            AgmPolylineIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'agm-polyline agm-icon-sequence' })
            ], AgmPolylineIcon);
            var AgmPolylinePoint_1;
            /**
             * AgmPolylinePoint represents one element of a polyline within a  {@link
             * AgmPolyline}
             */
            var AgmPolylinePoint = AgmPolylinePoint_1 = /** @class */ (function () {
                function AgmPolylinePoint() {
                    /**
                     * This event emitter gets emitted when the position of the point changed.
                     */
                    this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
                    if (changes['latitude'] || changes['longitude']) {
                        var position = {
                            lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                            lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
                        };
                        this.positionChanged.emit(position);
                    }
                };
                /** @internal */
                AgmPolylinePoint.prototype.getFitBoundsDetails$ = function () {
                    return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ lat: this.latitude, lng: this.longitude }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) { return ({ latLng: position }); }));
                };
                return AgmPolylinePoint;
            }());
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylinePoint.prototype, "latitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolylinePoint.prototype, "longitude", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolylinePoint.prototype, "positionChanged", void 0);
            AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-polyline-point',
                    providers: [
                        { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AgmPolylinePoint_1; }) },
                    ],
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
            ], AgmPolylinePoint);
            var AgmPolyline_1;
            var polylineId = 0;
            /**
             * AgmPolyline renders a polyline on a {@link AgmMap}
             *
             * ### Example
             * ```typescript
             * import { Component } from '@angular/core';
             *
             * @Component({
             *  selector: 'my-map-cmp',
             *  styles: [`
             *    .agm-map-container {
             *      height: 300px;
             *    }
             * `],
             *  template: `
             *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
             *      <agm-polyline>
             *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
             *          </agm-polyline-point>
             *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
             *          </agm-polyline-point>
             *      </agm-polyline>
             *    </agm-map>
             *  `
             * })
             * ```
             */
            var AgmPolyline = AgmPolyline_1 = /** @class */ (function () {
                function AgmPolyline(_polylineManager) {
                    this._polylineManager = _polylineManager;
                    /**
                     * Indicates whether this Polyline handles mouse events. Defaults to true.
                     */
                    this.clickable = true;
                    /**
                     * If set to true, the user can drag this shape over the map. The geodesic property defines the
                     * mode of dragging. Defaults to false.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.draggable = false;
                    /**
                     * If set to true, the user can edit this shape by dragging the control points shown at the
                     * vertices and on each segment. Defaults to false.
                     */
                    this.editable = false;
                    /**
                     * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
                     * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
                     * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
                     * are maintained relative to the surface of the earth. Defaults to false.
                     */
                    this.geodesic = false;
                    /**
                     * Whether this polyline is visible on the map. Defaults to true.
                     */
                    this.visible = true;
                    /**
                     * This event is fired when the DOM click event is fired on the Polyline.
                     */
                    this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM dblclick event is fired on the Polyline.
                     */
                    this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is repeatedly fired while the user drags the polyline.
                     */
                    this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user stops dragging the polyline.
                     */
                    this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user starts dragging the polyline.
                     */
                    this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousedown event is fired on the Polyline.
                     */
                    this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousemove event is fired on the Polyline.
                     */
                    this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on Polyline mouseout.
                     */
                    this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on Polyline mouseover.
                     */
                    this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired whe the DOM mouseup event is fired on the Polyline
                     */
                    this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the Polyline is right-clicked on.
                     */
                    this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired after Polyline's path changes.
                     */
                    this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this._polylineAddedToManager = false;
                    this._subscriptions = [];
                    this._id = (polylineId++).toString();
                }
                /** @internal */
                AgmPolyline.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    if (this.points.length) {
                        this.points.forEach(function (point) {
                            var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                            _this._subscriptions.push(s);
                        });
                    }
                    if (!this._polylineAddedToManager) {
                        this._init();
                    }
                    var pointSub = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
                    this._subscriptions.push(pointSub);
                    this._polylineManager.updatePolylinePoints(this);
                    var iconSub = this.iconSequences.changes.subscribe(function () { return _this._polylineManager.updateIconSequences(_this); });
                    this._subscriptions.push(iconSub);
                };
                AgmPolyline.prototype.ngOnChanges = function (changes) {
                    if (!this._polylineAddedToManager) {
                        this._init();
                        return;
                    }
                    var options = {};
                    var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1; });
                    optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
                    this._polylineManager.setPolylineOptions(this, options);
                };
                AgmPolyline.prototype.getPath = function () {
                    return this._polylineManager.getPath(this);
                };
                AgmPolyline.prototype._init = function () {
                    this._polylineManager.addPolyline(this);
                    this._polylineAddedToManager = true;
                    this._addEventListeners();
                };
                AgmPolyline.prototype._addEventListeners = function () {
                    var _this = this;
                    var handlers = [
                        { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
                        { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
                        { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
                        { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
                        { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
                        { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
                        { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
                        { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
                        { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
                        { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
                        { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
                    ];
                    handlers.forEach(function (obj) {
                        var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
                        _this._subscriptions.push(os);
                    });
                    this._polylineManager.createPathEventObservable(this).then(function (ob$) {
                        var os = ob$.subscribe(function (pathEvent) { return _this.polyPathChange.emit(pathEvent); });
                        _this._subscriptions.push(os);
                    });
                };
                /** @internal */
                AgmPolyline.prototype._getPoints = function () {
                    if (this.points) {
                        return this.points.toArray();
                    }
                    return [];
                };
                AgmPolyline.prototype._getIcons = function () {
                    if (this.iconSequences) {
                        return this.iconSequences.toArray();
                    }
                    return [];
                };
                /** @internal */
                AgmPolyline.prototype.id = function () { return this._id; };
                /** @internal */
                AgmPolyline.prototype.ngOnDestroy = function () {
                    this._polylineManager.deletePolyline(this);
                    // unsubscribe all registered observable subscriptions
                    this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
                };
                return AgmPolyline;
            }());
            AgmPolyline._polylineOptionsAttributes = [
                'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
                'zIndex',
            ];
            AgmPolyline.ctorParameters = function () { return [
                { type: PolylineManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolyline.prototype, "clickable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolyline.prototype, "draggable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolyline.prototype, "editable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolyline.prototype, "geodesic", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmPolyline.prototype, "strokeColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolyline.prototype, "strokeOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolyline.prototype, "strokeWeight", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolyline.prototype, "visible", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmPolyline.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineDblClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineDrag", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineDragEnd", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineDragStart", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineMouseDown", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineMouseMove", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineMouseOut", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineMouseOver", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineMouseUp", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmPolyline.prototype, "lineRightClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmPolyline.prototype, "polyPathChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
            ], AgmPolyline.prototype, "points", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
            ], AgmPolyline.prototype, "iconSequences", void 0);
            AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-polyline',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])
            ], AgmPolyline);
            var AgmRectangle_1;
            var AgmRectangle = AgmRectangle_1 = /** @class */ (function () {
                function AgmRectangle(_manager) {
                    this._manager = _manager;
                    /**
                     * Indicates whether this Rectangle handles mouse events. Defaults to true.
                     */
                    this.clickable = true;
                    /**
                     * If set to true, the user can drag this rectangle over the map. Defaults to false.
                     */
                    // tslint:disable-next-line:no-input-rename
                    this.draggable = false;
                    /**
                     * If set to true, the user can edit this rectangle by dragging the control points shown at
                     * the center and around the circumference of the rectangle. Defaults to false.
                     */
                    this.editable = false;
                    /**
                     * The stroke position. Defaults to CENTER.
                     * This property is not supported on Internet Explorer 8 and earlier.
                     */
                    this.strokePosition = 'CENTER';
                    /**
                     * The stroke width in pixels.
                     */
                    this.strokeWeight = 0;
                    /**
                     * Whether this rectangle is visible on the map. Defaults to true.
                     */
                    this.visible = true;
                    /**
                     * This event is fired when the rectangle's is changed.
                     */
                    this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user clicks on the rectangle.
                     */
                    this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event emitter gets emitted when the user clicks on the rectangle.
                     */
                    this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is repeatedly fired while the user drags the rectangle.
                     */
                    this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user stops dragging the rectangle.
                     */
                    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the user starts dragging the rectangle.
                     */
                    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousedown event is fired on the rectangle.
                     */
                    this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mousemove event is fired on the rectangle.
                     */
                    this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on rectangle mouseout.
                     */
                    this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired on rectangle mouseover.
                     */
                    this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the DOM mouseup event is fired on the rectangle.
                     */
                    this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    /**
                     * This event is fired when the rectangle is right-clicked on.
                     */
                    this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this._rectangleAddedToManager = false;
                    this._eventSubscriptions = [];
                }
                /** @internal */
                AgmRectangle.prototype.ngOnInit = function () {
                    this._manager.addRectangle(this);
                    this._rectangleAddedToManager = true;
                    this._registerEventListeners();
                };
                /** @internal */
                AgmRectangle.prototype.ngOnChanges = function (changes) {
                    if (!this._rectangleAddedToManager) {
                        return;
                    }
                    if (changes['north'] ||
                        changes['east'] ||
                        changes['south'] ||
                        changes['west']) {
                        this._manager.setBounds(this);
                    }
                    if (changes['editable']) {
                        this._manager.setEditable(this);
                    }
                    if (changes['draggable']) {
                        this._manager.setDraggable(this);
                    }
                    if (changes['visible']) {
                        this._manager.setVisible(this);
                    }
                    this._updateRectangleOptionsChanges(changes);
                };
                AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
                    var options = {};
                    var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle_1._mapOptions.indexOf(k) !== -1; });
                    optionKeys.forEach(function (k) {
                        options[k] = changes[k].currentValue;
                    });
                    if (optionKeys.length > 0) {
                        this._manager.setOptions(this, options);
                    }
                };
                AgmRectangle.prototype._registerEventListeners = function () {
                    var _this = this;
                    var events = new Map();
                    events.set('bounds_changed', this.boundsChange);
                    events.set('click', this.rectangleClick);
                    events.set('dblclick', this.rectangleDblClick);
                    events.set('drag', this.drag);
                    events.set('dragend', this.dragEnd);
                    events.set('dragStart', this.dragStart);
                    events.set('mousedown', this.mouseDown);
                    events.set('mousemove', this.mouseMove);
                    events.set('mouseout', this.mouseOut);
                    events.set('mouseover', this.mouseOver);
                    events.set('mouseup', this.mouseUp);
                    events.set('rightclick', this.rightClick);
                    events.forEach(function (eventEmitter, eventName) {
                        _this._eventSubscriptions.push(_this._manager
                            .createEventObservable(eventName, _this)
                            .subscribe(function (value) {
                            switch (eventName) {
                                case 'bounds_changed':
                                    _this._manager.getBounds(_this).then(function (bounds) { return eventEmitter.emit({
                                        north: bounds.getNorthEast().lat(),
                                        east: bounds.getNorthEast().lng(),
                                        south: bounds.getSouthWest().lat(),
                                        west: bounds.getSouthWest().lng(),
                                    }); });
                                    break;
                                default:
                                    eventEmitter.emit({
                                        coords: { lat: value.latLng.lat(), lng: value.latLng.lng() },
                                    });
                            }
                        }));
                    });
                };
                /** @internal */
                AgmRectangle.prototype.ngOnDestroy = function () {
                    this._eventSubscriptions.forEach(function (s) {
                        s.unsubscribe();
                    });
                    this._eventSubscriptions = null;
                    this._manager.removeRectangle(this);
                };
                /**
                 * Gets the LatLngBounds of this Rectangle.
                 */
                AgmRectangle.prototype.getBounds = function () {
                    return this._manager.getBounds(this);
                };
                return AgmRectangle;
            }());
            AgmRectangle._mapOptions = [
                'fillColor',
                'fillOpacity',
                'strokeColor',
                'strokeOpacity',
                'strokePosition',
                'strokeWeight',
                'visible',
                'zIndex',
                'clickable',
            ];
            AgmRectangle.ctorParameters = function () { return [
                { type: RectangleManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "north", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "east", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "south", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "west", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmRectangle.prototype, "clickable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmRectangle.prototype, "draggable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmRectangle.prototype, "editable", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmRectangle.prototype, "fillColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "fillOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmRectangle.prototype, "strokeColor", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "strokeOpacity", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
            ], AgmRectangle.prototype, "strokePosition", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmRectangle.prototype, "strokeWeight", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmRectangle.prototype, "visible", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
            ], AgmRectangle.prototype, "zIndex", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "boundsChange", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "rectangleClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "rectangleDblClick", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "drag", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "dragEnd", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "dragStart", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "mouseDown", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "mouseMove", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "mouseOut", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "mouseOver", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "mouseUp", void 0);
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
            ], AgmRectangle.prototype, "rightClick", void 0);
            AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-rectangle',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])
            ], AgmRectangle);
            var layerId$3 = 0;
            /*
             * This directive adds a transit layer to a google map instance
             * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
             * */
            var AgmTransitLayer = /** @class */ (function () {
                function AgmTransitLayer(_manager) {
                    this._manager = _manager;
                    this._addedToManager = false;
                    this._id = (layerId$3++).toString();
                    /**
                     * Hide/show transit layer
                     */
                    this.visible = true;
                }
                AgmTransitLayer.prototype.ngOnInit = function () {
                    if (this._addedToManager) {
                        return;
                    }
                    this._manager.addTransitLayer(this, { visible: this.visible });
                    this._addedToManager = true;
                };
                AgmTransitLayer.prototype.ngOnChanges = function (changes) {
                    if (!this._addedToManager) {
                        return;
                    }
                    if (changes['visible'] != null) {
                        this._manager.toggleLayerVisibility(this, { visible: changes['visible'].currentValue });
                    }
                };
                /** @internal */
                AgmTransitLayer.prototype.id = function () { return this._id; };
                /** @internal */
                AgmTransitLayer.prototype.toString = function () { return "AgmTransitLayer-" + this._id.toString(); };
                /** @internal */
                AgmTransitLayer.prototype.ngOnDestroy = function () {
                    this._manager.deleteLayer(this);
                };
                return AgmTransitLayer;
            }());
            AgmTransitLayer.ctorParameters = function () { return [
                { type: LayerManager }
            ]; };
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
            ], AgmTransitLayer.prototype, "visible", void 0);
            AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: 'agm-transit-layer',
                }),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])
            ], AgmTransitLayer);
            var WindowRef = /** @class */ (function () {
                function WindowRef() {
                }
                WindowRef.prototype.getNativeWindow = function () { return window; };
                return WindowRef;
            }());
            var DocumentRef = /** @class */ (function () {
                function DocumentRef() {
                }
                DocumentRef.prototype.getNativeDocument = function () { return document; };
                return DocumentRef;
            }());
            var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
            var GoogleMapsScriptProtocol;
            (function (GoogleMapsScriptProtocol) {
                GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
                GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
                GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
            })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
            /**
             * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
             * LazyMapsAPILoaderConfig}.
             */
            var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
            var LazyMapsAPILoader = /** @class */ (function (_super) {
                __extends(LazyMapsAPILoader, _super);
                function LazyMapsAPILoader(config, w, d) {
                    if (config === void 0) { config = null; }
                    var _this = _super.call(this) || this;
                    _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
                    _this.callbackName = "agmLazyMapsAPILoader";
                    _this._config = config || {};
                    _this._windowRef = w;
                    _this._documentRef = d;
                    return _this;
                }
                LazyMapsAPILoader.prototype.load = function () {
                    var window = this._windowRef.getNativeWindow();
                    if (window.google && window.google.maps) {
                        // Google maps already loaded on the page.
                        return Promise.resolve();
                    }
                    if (this._scriptLoadingPromise) {
                        return this._scriptLoadingPromise;
                    }
                    // this can happen in HMR situations or Stackblitz.io editors.
                    var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
                    if (scriptOnPage) {
                        this._assignScriptLoadingPromise(scriptOnPage);
                        return this._scriptLoadingPromise;
                    }
                    var script = this._documentRef.getNativeDocument().createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.defer = true;
                    script.id = this._SCRIPT_ID;
                    script.src = this._getScriptSrc(this.callbackName);
                    this._assignScriptLoadingPromise(script);
                    this._documentRef.getNativeDocument().body.appendChild(script);
                    return this._scriptLoadingPromise;
                };
                LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
                    var _this = this;
                    this._scriptLoadingPromise = new Promise(function (resolve, reject) {
                        _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                            resolve();
                        };
                        scriptElem.onerror = function (error) {
                            reject(error);
                        };
                    });
                };
                LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
                    var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
                    var protocol;
                    switch (protocolType) {
                        case GoogleMapsScriptProtocol.AUTO:
                            protocol = '';
                            break;
                        case GoogleMapsScriptProtocol.HTTP:
                            protocol = 'http:';
                            break;
                        case GoogleMapsScriptProtocol.HTTPS:
                            protocol = 'https:';
                            break;
                    }
                    var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
                    var queryParams = {
                        v: this._config.apiVersion || 'quarterly',
                        callback: callbackName,
                        key: this._config.apiKey,
                        client: this._config.clientId,
                        channel: this._config.channel,
                        libraries: this._config.libraries,
                        region: this._config.region,
                        language: this._config.language,
                    };
                    var params = Object.keys(queryParams)
                        .filter(function (k) { return queryParams[k] != null; })
                        .filter(function (k) {
                        // remove empty arrays
                        return !Array.isArray(queryParams[k]) ||
                            (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
                    })
                        .map(function (k) {
                        // join arrays as comma seperated strings
                        var i = queryParams[k];
                        if (Array.isArray(i)) {
                            return { key: k, value: i.join(',') };
                        }
                        return { key: k, value: queryParams[k] };
                    })
                        .map(function (entry) {
                        return entry.key + "=" + entry.value;
                    })
                        .join('&');
                    return protocol + "//" + hostAndPath + "?" + params;
                };
                return LazyMapsAPILoader;
            }(MapsAPILoader));
            LazyMapsAPILoader.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LAZY_MAPS_API_CONFIG,] }] },
                { type: WindowRef },
                { type: DocumentRef }
            ]; };
            LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)),
                Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef])
            ], LazyMapsAPILoader);
            /**
             * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
             * Tag.
             * It's important that the Google Maps API script gets loaded first on the page.
             */
            var NoOpMapsAPILoader = /** @class */ (function () {
                function NoOpMapsAPILoader() {
                }
                NoOpMapsAPILoader.prototype.load = function () {
                    if (!window.google || !window.google.maps) {
                        throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
                    }
                    return Promise.resolve();
                };
                return NoOpMapsAPILoader;
            }());
            var AgmCoreModule_1;
            /**
             * @internal
             */
            function coreDirectives() {
                return [
                    AgmBicyclingLayer,
                    AgmCircle,
                    AgmDataLayer,
                    AgmFitBounds,
                    AgmInfoWindow,
                    AgmKmlLayer,
                    AgmMap,
                    AgmMarker,
                    AgmPolygon,
                    AgmPolyline,
                    AgmPolylineIcon,
                    AgmPolylinePoint,
                    AgmRectangle,
                    AgmTransitLayer,
                ];
            }
            /**
             * The angular-google-maps core module. Contains all Directives/Services/Pipes
             * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
             */
            var AgmCoreModule = AgmCoreModule_1 = /** @class */ (function () {
                function AgmCoreModule() {
                }
                /**
                 * Please use this method when you register the module at the root level.
                 */
                AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
                    return {
                        ngModule: AgmCoreModule_1,
                        providers: BROWSER_GLOBALS_PROVIDERS.concat([
                            { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                            { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig },
                        ]),
                    };
                };
                return AgmCoreModule;
            }());
            AgmCoreModule = AgmCoreModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({ declarations: coreDirectives(), exports: coreDirectives() })
            ], AgmCoreModule);
            // main modules
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=agm-core.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/home/home.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/home/home.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid h-100\">\n  <ng-container *ngTemplateOutlet=\"landmarks?data:loading\"></ng-container>\n</div>\n\n<ng-template #data>\n  <div class=\"row\">\n    <div *ngIf=\"landmarks\" class=\"col-12 col-md-6\">\n      <landmark *ngFor=\"let l of landmarks\" [landmark]=\"l\" (onSelect)=\"onLandmarkSelect($event)\"></landmark>\n    </div>\n    <div class=\"col-12 col-md-6\">\n        <div class=\"sticky-top\">\n            <agm-map class=\"w-100\" *ngIf=\"landmarks\" [latitude]=\"selectedLandmark.attributes.location.latitude\"\n            [longitude]=\"selectedLandmark.attributes.location.longitude\" [zoom]=\"zoom\">\n              <agm-marker [latitude]=\"selectedLandmark.attributes.location.latitude\"\n                [longitude]=\"selectedLandmark.attributes.location.longitude\">\n                <agm-info-window>{{selectedLandmark.attributes.title}}</agm-info-window>\n              </agm-marker>\n            </agm-map>\n        </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #loading>\n    <loading></loading>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/home/home.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/shared/pages/home/home.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  padding-top: calc(70.38px + 3rem);\n  padding-bottom: 3rem;\n  min-height: 100vh;\n  background: #f7f7f7;\n}\n\n.affix {\n  top: calc(70.38px + 3rem);\n  position: fixed;\n  margin-right: 2em;\n}\n\nagm-map {\n  height: calc( 100vh - 160px);\n  width: 900px;\n}\n\n.sticky-top {\n  top: calc(70.38px + 3rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F0aGVvZG9zaW91L0RvY3VtZW50cy9kZXZlbG9wbWVudC9uZy1sYW5kbWFya3Mvc3JjL2FwcC9zaGFyZWQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGMoNzAuMzhweCArIDNyZW0pO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi5hZmZpeCB7XHJcbiAgdG9wOmNhbGMoNzAuMzhweCArIDNyZW0pO1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogY2FsYyggMTAwdmggLSAxNjBweCk7XHJcbiAgd2lkdGg6IDkwMHB4O1xyXG59XHJcblxyXG4uc3RpY2t5LXRvcHtcclxuICB0b3A6IGNhbGMoNzAuMzhweCArIDNyZW0pO1xyXG59IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDcwLjM4cHggKyAzcmVtKTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xufVxuXG4uYWZmaXgge1xuICB0b3A6IGNhbGMoNzAuMzhweCArIDNyZW0pO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiBjYWxjKCAxMDB2aCAtIDE2MHB4KTtcbiAgd2lkdGg6IDkwMHB4O1xufVxuXG4uc3RpY2t5LXRvcCB7XG4gIHRvcDogY2FsYyg3MC4zOHB4ICsgM3JlbSk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/pages/home/home.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/pages/home/home.component.ts ***!
          \*****************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_landmark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/landmark.service */ "./src/app/shared/services/landmark.service.ts");
            /* harmony import */ var _services_Toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Toast.service */ "./src/app/shared/services/Toast.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(landmarkService, toastService) {
                    this.landmarkService = landmarkService;
                    this.toastService = toastService;
                    this.selectedLandmark = { attributes: { title: 'Dubai', location: { latitude: 25.2050773, longitude: 55.2623135 } } };
                    this.zoom = 13;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.landmarkService.getLandmarks().then(function (landmarks) {
                        _this.landmarks = landmarks;
                        _this.landmarkService.landmarks = landmarks;
                        console.warn('Landmarks loaded correctly!');
                    }).catch(function (error) {
                        _this.toastService.show("Landmarks could not be loaded successfully! Reason: " + error.message, { classname: 'bg-danger text-light', delay: 1500 });
                    });
                };
                // private sortBy(array: Landmark[]): Landmark[] {
                //   return array.sort((a: Landmark, b: Landmark) =>
                //     a.order > b.order ? 1 : -1
                //   );
                // }
                HomeComponent.prototype.onLandmarkSelect = function (landmark) {
                    this.selectedLandmark = landmark;
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_landmark_service__WEBPACK_IMPORTED_MODULE_2__["LandmarkService"] },
                { type: _services_Toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "home",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/shared/pages/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/pages/home/home.module.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/pages/home/home.module.ts ***!
          \**************************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/shared/pages/home/home.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                            {
                                path: "",
                                component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                            }
                        ]),
                        _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                            apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].googleMapsApiKey
                        }),
                        _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"]
                    ],
                    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                    exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
                })
            ], HomeModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=shared-pages-home-home-module-es2015.js.map
//# sourceMappingURL=shared-pages-home-home-module-es5.js.map
//# sourceMappingURL=shared-pages-home-home-module-es5.js.map