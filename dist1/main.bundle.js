webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/request/request.module": [
		"../../../../../src/app/request/request.module.ts"
	],
	"app/user-management/user-management.module": [
		"../../../../../src/app/user-management/user-management.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#maincontent\" class=\"skip-link\" data-translate=\"text\">SkipToMain</a>\n<soho-icons></soho-icons>\n<soho-icons-ext></soho-icons-ext>\n<soho-icons-empty></soho-icons-empty>\n<!-- <approva-os-masthead></approva-os-masthead> -->\n<nav soho-application-menu class=\"application-menu is-open is-pesonalizable\" [openOnLarge]=\"true\">\n  <application-menu></application-menu>\n</nav>\n<div class=\"page-container no-scroll\">\n  <approva-os-header></approva-os-header>\n  <div id=\"maincontent\" class=\"page-container scrollable\" role=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div soho-personalize [options]=\"personalizeOptions\" (changetheme)=\"onChangeTheme($event)\" (changecolors)=\"onChangeColors($event)\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.personalizeOptions = {};
        // @todo Set the locale here, to ensure all the values are setup.
        Locale.set('en-US');
        this.setInitialPersonalization();
    }
    Object.defineProperty(AppComponent.prototype, "isNoScroll", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.setInitialPersonalization = function () {
        var theme = localStorage.getItem('soho_theme');
        var colors = localStorage.getItem('soho_color');
        if (theme) {
            this.personalizeOptions = {
                theme: theme,
            };
        }
        if (colors) {
            if (this.personalizeOptions) {
                this.personalizeOptions.colors = colors;
            }
            else {
                this.personalizeOptions = {
                    colors: colors,
                };
            }
        }
    };
    AppComponent.prototype.onChangeTheme = function (ev) {
        console.log('Theme changed: ', ev);
        localStorage.setItem('soho_theme', ev.data);
    };
    AppComponent.prototype.onChangeColors = function (ev) {
        console.log('Colors changed: ', ev);
        localStorage.setItem('soho_color', ev.data);
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.no-scroll'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isNoScroll", null);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__ = __webpack_require__("../../../../@infor/sohoxi-angular/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_approvaos_core__ = __webpack_require__("../../../../approvaos-core/approvaos-core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_management_user_management_module__ = __webpack_require__("../../../../../src/app/user-management/user-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_request_module__ = __webpack_require__("../../../../../src/app/request/request.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["a" /* SohoComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_3_approvaos_core__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__user_management_user_management_module__["UserManagementModule"],
            __WEBPACK_IMPORTED_MODULE_6__request_request_module__["RequestModule"],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/user-management' },
    { path: 'request', redirectTo: '/request' },
    { path: 'user-management', loadChildren: 'app/user-management/user-management.module#UserManagementModule' },
    { path: 'request', loadChildren: 'app/request/request.module#RequestModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/user-management' } // catch any unfound routes and redirect to home page
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(app_routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* PreloadAllModules */] })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/layout/application-menu/application-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion panel inverse\" data-options=\"{'allowOnePane': true, rerouteOnLinkClick: false}\">\r\n  <div class=\"accordion-header hide-focus is-focused\" role=\"presentation\">\r\n    <svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\r\n      <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-home\"></use>\r\n    </svg>\r\n    <a href=\"/\">\r\n      <span>Home Page</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"accordion-header\" routerLinkActive=\"is-selected\" *ngFor=\"let navItem of mainMenuItems\">\r\n    <a href=\"javascript:void(0);\">\r\n      <span>{{navItem.menu}}</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"accordion-pane\">\r\n    <div class=\"accordion-header list-item\" *ngFor=\"let navSubItem of mainMenuItems[0].subMenu\">\r\n      <a [routerLink]=\"[navSubItem.path]\">\r\n        <span>{{navSubItem.title}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/application-menu/application-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nav_service__ = __webpack_require__("../../../../../src/app/layout/services/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationMenuComponent = (function () {
    function ApplicationMenuComponent(navService) {
        this.navService = navService;
        this.mainMenuItems = this.navService.getMenuItems();
        console.log(this.mainMenuItems);
        this.activeMenuItem$ = this.navService.activeMenuItem$;
    }
    ApplicationMenuComponent.prototype.ngOnInit = function () {
    };
    return ApplicationMenuComponent;
}());
ApplicationMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'application-menu',
        template: __webpack_require__("../../../../../src/app/layout/application-menu/application-menu.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_nav_service__["a" /* NavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_nav_service__["a" /* NavService */]) === "function" && _a || Object])
], ApplicationMenuComponent);

var _a;
//# sourceMappingURL=application-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header-dynamic-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderDynamicRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Special service used by a "root router-outlet component": i.e. ListComponent, FormComponent. etc...
 * to set the banner headers toolbar options and state.
 */
var HeaderDynamicRefService = (function () {
    function HeaderDynamicRefService() {
    }
    Object.defineProperty(HeaderDynamicRefService.prototype, "instance", {
        get: function () {
            return this.headerComponent;
        },
        set: function (sohoHeaderComponent) {
            this.headerComponent = sohoHeaderComponent;
        },
        enumerable: true,
        configurable: true
    });
    return HeaderDynamicRefService;
}());
HeaderDynamicRefService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], HeaderDynamicRefService);

//# sourceMappingURL=header-dynamic-ref.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<soho-header [hasTabs]=\"hasHeaderTabs\" [hasToolbar]=\"hasHeaderToolbar\">\r\n\r\n  <!-- header toolbar -->\r\n  <soho-toolbar #appDynamicHeaderToolbar maxVisibleButtons=\"5\" hasMoreButton=\"!currentToolbarOptions\">\r\n\r\n    <soho-toolbar-title>\r\n      <button soho-nav-button>Show Navigation</button>\r\n      <h1>\r\n        <!-- <span [class.page-title]=\"sectionTitle\" >SohoXI Angular Components</span> -->\r\n        <span [class.page-title]=\"sectionTitle\" *ngIf=\"sectionTitle\">{{sectionTitle}}</span>\r\n      </h1>\r\n    </soho-toolbar-title>\r\n\r\n    <!-- If the currentToolbarOptions are NOT null/undefined then display the toolbar buttons\r\n         using the toolbarOptions input. -->\r\n    <!-- todo ppatton - for some reason if I put the ngIf='false' in the soho-toolbar-button-set\r\n         then some div seems to be automatically created for me or something. Something in soho perhaps? -->\r\n    <soho-toolbar-button-set>\r\n\r\n      <!-- search field\r\n      <input soho-toolbar-searchfield\r\n        *ngIf=\"toolbarSearchField\"\r\n        placeholder=\"{{toolbarSearchField?.label}}\"\r\n        [(ngModel)]=\"toolbarSearchField.value\"\r\n        [collapsible]=\"true\"\r\n        [clearable]=\"true\"\r\n        (keyup.enter)=\"fireSearchEvent($event)\"\r\n        (cleared)=\"fireClearSearchEvent($event)\"\r\n      />\r\n      -->\r\n\r\n      <ng-template [ngIf]=\"currentToolbarOptions\">\r\n        <ng-template ngFor let-button [ngForOf]=\"currentToolbarOptions?.toolbarButtons\">\r\n          <button *ngIf=\"!button.menu\" soho-button=\"secondary\" icon=\"{{button?.icon}}\" id=\"{{button?.id}}\" attr.data-button=\"{{button?.data}}\">{{button?.text}}</button>\r\n\r\n          <ng-template [ngIf]=\"button.menu\">\r\n            <button soho-menu-button id=\"{{button?.id}}\" menu=\"buttonPopupMenu\" icon=\"{{button?.icon}}\"  attr.data-button=\"{{button?.data}}\" >\r\n              {{button?.text}}</button>\r\n            <div class=\"popupmenu-wrapper bottom\" role=\"application\" aria-hidden=\"true\">\r\n              <ul soho-popupmenu id=\"buttonPopupMenu\">\r\n                <li soho-popupmenu-item *ngFor=\"let item of button.menu\" id=\"{{item?.id}}\">\r\n                  <a soho-popupmenu-label attr.data=\"{{item?.data}}\">{{item?.text}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </ng-template>\r\n        </ng-template>\r\n      </ng-template>\r\n\r\n    </soho-toolbar-button-set>\r\n\r\n    <!-- If the currentToolbarOptions are null/undefined then display the \"default\" toolbar buttons\r\n         and more menu. -->\r\n    <soho-toolbar-more-button>\r\n      <ul class=\"popupmenu is-selectable\">\r\n        <li class=\"heading\" role=\"presentation\">Theme</li>\r\n        <li class=\"is-selectable is-checked\"><a href=\"#\" [attr.data-theme]=\"defaultPersonalizeTheme\">Default</a></li>\r\n        <li class=\"is-selectable\"><a href=\"#\" data-theme=\"light-theme\">Light</a></li>\r\n        <li class=\"is-selectable\"><a href=\"#\" data-theme=\"dark-theme\">Dark</a></li>\r\n        <li class=\"is-selectable\"><a href=\"#\" data-theme=\"high-contrast-theme\">High Contrast</a></li>\r\n        <li class=\"separator\"></li>\r\n        <li class=\"heading\" role=\"presentation\">Personalization</li>\r\n        <li class=\"is-selectable is-checked\"><a [attr.data-rgbcolor]=\"defaultPersonalizeColor\" href=\"#\">Default</a></li>\r\n        <li class=\"is-selectable\"><a data-rgbcolor=\"#368AC0\" href=\"#\">Azure</a></li>\r\n        <li class=\"is-selectable\"><a data-rgbcolor=\"#EFA836\" href=\"#\">Amber</a></li>\r\n        <li class=\"is-selectable\"><a data-rgbcolor=\"#9279A6\" href=\"#\">Amethyst</a></li>\r\n        <li class=\"is-selectable\"><a data-rgbcolor=\"#579E95\" href=\"#\">Turqoise</a></li>\r\n        <li class=\"is-selectable\"><a data-rgbcolor=\"#76B051\" href=\"#\">Emerald</a></li>\r\n        <li class=\"is-selectable\"><a data-rgbcolor=\"#5C5C5C\" href=\"#\">Graphite</a></li>\r\n      </ul>\r\n    </soho-toolbar-more-button>\r\n\r\n  </soho-toolbar>\r\n\r\n  <div soho-tabs *ngIf=\"currentTabsOptions\" #appDynamicHeaderTabs [containerElement]=\"currentTabsOptions.containerElementSelector\">\r\n    <div soho-tab-list-container>\r\n      <ul soho-tab-list>\r\n        <li soho-tab *ngFor=\"let tab of currentTabsOptions.tabs\">\r\n          <a soho-tab-title [tabId]=\"tab.id\">{{tab.title}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</soho-header>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_model__ = __webpack_require__("../../../../../src/app/layout/header/header.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__ = __webpack_require__("../../../../@infor/sohoxi-angular/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_dynamic_ref_service__ = __webpack_require__("../../../../../src/app/layout/header/header-dynamic-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(headerRef) {
        this.headerRef = headerRef;
        this._toolbarSearchField = {
            id: 'toolbarSearchField',
            label: 'Search',
            value: '',
            collapsible: true
        };
        /**
         * Used by the component template to decide when to display the tabs.
         * @type {any}
         */
        this.currentToolbarOptions = null;
        /**
         * Used by the component template to decide when to display the toolbar.
         * @type {any}
         */
        this.currentTabsOptions = null;
        this.headerRef.instance = this;
        this.defaultPersonalizeColor = this.getDefaultColor();
        this.defaultPersonalizeTheme = this.getDefaultTheme();
    }
    Object.defineProperty(HeaderComponent.prototype, "isHeader", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "isPersonalizable", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "hasHeaderToolbar", {
        get: function () { return !!this.toolbarOptions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "hasHeaderTabs", {
        get: function () { return !!this.tabOptions; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "toolbarOptions", {
        /**
         * Get the current toolbar options.
         * @returns {HeaderDynamicToolbarOptions}
         */
        get: function () {
            return this.currentToolbarOptions;
        },
        /**
         * Sets the header toolbar using TabOptions
         */
        set: function (options) {
            this.currentToolbarOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "tabOptions", {
        /**
         * Get the current toolbar options.
         * @returns {HeaderDynamicToolbarOptions}
         */
        get: function () {
            return this.currentTabsOptions;
        },
        /**
         * Sets the header tabset using TabOptions
         */
        set: function (options) {
            this.currentTabsOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "toolbarSearchField", {
        get: function () {
            return this._toolbarSearchField;
        },
        set: function (searchField) {
            var _this = this;
            this._toolbarSearchField = searchField;
            setTimeout(function () {
                if (_this.sohoToolbarComponent) {
                    _this.sohoToolbarComponent.updated();
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    // This should be within an Application Service in your local project
    HeaderComponent.prototype.getDefaultColor = function () {
        return localStorage.getItem('soho_color');
    };
    // This should be within an Application Service in your local project
    HeaderComponent.prototype.getDefaultTheme = function () {
        var theme = localStorage.getItem('soho_theme');
        if (theme) {
            theme += '-theme';
        }
        return theme;
    };
    HeaderComponent.prototype.fireSearchEvent = function (event) {
        alert('run search value : "' + this.toolbarSearchField.value + '"');
    };
    HeaderComponent.prototype.fireClearSearchEvent = function (event) {
        alert('search value cleared');
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.header'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeaderComponent.prototype, "isHeader", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.is-personalizable'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeaderComponent.prototype, "isPersonalizable", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.has-toolbar'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeaderComponent.prototype, "hasHeaderToolbar", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.has-tabs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HeaderComponent.prototype, "hasHeaderTabs", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["d" /* SohoToolbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["d" /* SohoToolbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["d" /* SohoToolbarComponent */]) === "function" && _a || Object)
], HeaderComponent.prototype, "sohoToolbarComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["b" /* SohoTabsComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["b" /* SohoTabsComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["b" /* SohoTabsComponent */]) === "function" && _b || Object)
], HeaderComponent.prototype, "sohoTabsComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "sectionTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicToolbarOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicToolbarOptions"]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicToolbarOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicToolbarOptions"]) === "function" && _d || Object])
], HeaderComponent.prototype, "toolbarOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicTabsetOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicTabsetOptions"]) === "function" && _e || Object),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicTabsetOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_model__["HeaderDynamicTabsetOptions"]) === "function" && _f || Object])
], HeaderComponent.prototype, "tabOptions", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__header_model__["ToolbarSearchField"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_model__["ToolbarSearchField"]) === "function" && _g || Object),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__header_model__["ToolbarSearchField"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__header_model__["ToolbarSearchField"]) === "function" && _h || Object])
], HeaderComponent.prototype, "toolbarSearchField", null);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-header',
        template: __webpack_require__("../../../../../src/app/layout/header/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__header_dynamic_ref_service__["a" /* HeaderDynamicRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__header_dynamic_ref_service__["a" /* HeaderDynamicRefService */]) === "function" && _j || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=header.model.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infor_sohoxi_angular__ = __webpack_require__("../../../../@infor/sohoxi-angular/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_application_menu_application_menu_component__ = __webpack_require__("../../../../../src/app/layout/application-menu/application-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_nav_service__ = __webpack_require__("../../../../../src/app/layout/services/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_dynamic_ref_service__ = __webpack_require__("../../../../../src/app/layout/header/header-dynamic-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__infor_sohoxi_angular__["a" /* SohoComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__layout_application_menu_application_menu_component__["a" /* ApplicationMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__layout_header_header_component__["a" /* HeaderComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__layout_application_menu_application_menu_component__["a" /* ApplicationMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__layout_header_header_component__["a" /* HeaderComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__header_header_dynamic_ref_service__["a" /* HeaderDynamicRefService */],
            __WEBPACK_IMPORTED_MODULE_7__services_nav_service__["a" /* NavService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/services/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuItem = (function () {
    function MenuItem() {
    }
    return MenuItem;
}());

var NavService = (function () {
    function NavService(router, titleService) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.activeMenuItem$ = this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            var active = _this.lastRouteWithMenuItem(route.root);
            _this.titleService.setTitle(active.title);
            return active;
        });
    }
    NavService.prototype.getMenuItems = function () {
        var manageRoutes = this.router.config
            .filter(function (route) { return route.data && route.data.title && route.data.parent; }) // only add a menu item for routes with a title set.
            .filter(function (route) { return route.data.parent.toLowerCase() === 'manage'; })
            .map(function (route) {
            return {
                path: route.path,
                title: route.data.title,
                icon: route.data.icon
            };
        });
        var menuItems = [];
        menuItems.push({
            menu: 'Manage',
            subMenu: manageRoutes
        });
        return menuItems;
    };
    NavService.prototype.lastRouteWithMenuItem = function (route) {
        var lastMenu;
        do {
            lastMenu = this.extractMenu(route) || lastMenu;
        } while ((route = route.firstChild));
        return lastMenu;
    };
    NavService.prototype.extractMenu = function (route) {
        var cfg = route.routeConfig;
        return cfg && cfg.data && cfg.data.title
            ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon }
            : undefined;
    };
    return NavService;
}());
NavService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], NavService);

var _a, _b;
//# sourceMappingURL=nav.service.js.map

/***/ }),

/***/ "../../../../../src/app/request/request-list/request-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width\">\r\n    <div class=\"row\">\r\n        <div class=\"twelve columns\">\r\n          <button-set>\r\n            <button soho-button=\"icon\" icon=\"delete\">Delete</button>\r\n            <button soho-button=\"icon\" icon=\"check\">Approve</button>\r\n            <button soho-button=\"icon\" icon=\"close\">Deny</button>\r\n          </button-set>\r\n        </div>\r\n      </div>\r\n\r\n     <div class=\"row\">\r\n        <div class=\"twelve columns\" role=\"main\">\r\n          <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/request/request-list/request-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request/request-list/request-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestListComponent = (function () {
    function RequestListComponent() {
    }
    RequestListComponent.prototype.ngOnInit = function () { };
    return RequestListComponent;
}());
RequestListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approvaos-request-list',
        template: __webpack_require__("../../../../../src/app/request/request-list/request-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/request/request-list/request-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RequestListComponent);

//# sourceMappingURL=request-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/request/request-new/request-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width\">\r\n  <div class=\"row\">\r\n    <div class=\"full column\">\r\n      <button-set>\r\n        <button soho-button=\"icon\" icon=\"save\">Save</button>\r\n        <button soho-button=\"icon\" icon=\"delete\">Delete</button>\r\n        <button soho-button=\"icon\" icon=\"close\">Deny</button>\r\n        <button soho-button=\"icon\" icon=\"edit\">Edit</button>\r\n      </button-set>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"full column\">\r\n      <soho-accordion>\r\n        <soho-accordion-header>Request Details</soho-accordion-header>\r\n        <soho-accordion-pane>\r\n          <div class=\"form-responsive top-padding\">\r\n            <div class=\"one-third column\">\r\n              <div class=\"field\">\r\n                <label for=\"request-for-user\">Request For User</label>\r\n                <input name=\"request-for-user\" id=\"request-for-user\" type=\"text\" placeholder=\"Sam D\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"application-instance\" class=\"label\">Application Instance</label>\r\n                <select soho-dropdown name=\"application-instance\" multiple [closeOnSelect]=\"false\" maxSelected=\"3\" [(ngModel)]=\"model.multi\">\r\n                  <option value=\"AL\">Alabama</option>\r\n                  <option value=\"CA\">California</option>\r\n                  <option value=\"DE\">Delaware</option>\r\n                  <option value=\"NY\">New York</option>\r\n                  <option value=\"WY\">Wyoming</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"request-type\">Request Type</label>\r\n                <input name=\"request-type\" id=\"request-type\" type=\"text\" placeholder=\"User Creation\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <a class=\"hyperlink hide-focus\" href=\"\">details</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"one-third column\">\r\n              <div class=\"field\">\r\n                <label for=\"submitted-by\">Submitted by</label>\r\n                <input name=\"submitted-by\" id=\"submitted-by\" type=\"text\" disabled placeholder=\"John C\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"parent-request-id\">Parent Request ID</label>\r\n                <input name=\"parent-request-id\" id=\"parent-request-id\" type=\"text\" placeholder=\"0001\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <label for=\"request-age\">Age</label>\r\n                <input name=\"request-age\" id=\"request-age\" type=\"text\" placeholder=\"1 week\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </soho-accordion-pane>\r\n        <soho-accordion-header>Violation Chart</soho-accordion-header>\r\n        <soho-accordion-pane>\r\n          <div class=\"row\">\r\n            <div class=\"one-third column\">Chart will come here</div>\r\n            <div class=\"one-third column\">\r\n              <div class=\"field\">\r\n                <span class=\"label\">Violating Rules</span>\r\n                <span class=\"data\">2</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </soho-accordion-pane>\r\n\r\n        <soho-accordion-header>Violating Objects</soho-accordion-header>\r\n        <soho-accordion-pane>\r\n          <div soho-tabs (activated)=\"onTabActivated($event)\">\r\n            <div soho-tab-list-container>\r\n              <ul soho-tab-list>\r\n                <li soho-tab selected=\"true\">\r\n                  <a soho-tab-title tabId=\"roles-selected-connection\">Roles from Selected Connection</a>\r\n                </li>\r\n                <li soho-tab>\r\n                  <a soho-tab-title tabId=\"responsibilities-selected-connection\">Responsibilities from Selected Connection</a>\r\n                </li>\r\n                <li soho-tab>\r\n                  <a soho-tab-title tabId=\"responsibilities-selected-connection\">Roles / Responsibilities from Other Connection</a>\r\n                </li>\r\n                <li soho-tab>\r\n                  <a soho-tab-title tabId=\"responsibilities-selected-connection\">Roles / Responsibilities with Exisiting Violations</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div soho-tab-panel-container>\r\n            <div soho-tab-panel tabId=\"roles-selected-connection\">\r\n              <div class=\"\">\r\n                <div soho-tabs vertical=\"true\" (activated)=\"onTabActivated($event)\">\r\n                  <div soho-tab-list-container [verticalScrolling]=\"true\">\r\n                    <ul soho-tab-list>\r\n                      <li soho-tab>\r\n                        <a soho-tab-title tabId=\"tabs-vertical-role1\">Role1</a>\r\n                      </li>\r\n                      <li soho-tab>\r\n                        <a soho-tab-title tabId=\"tabs-vertical-role2\">Role2</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <div soho-tab-panel-container [verticalScrolling]=\"true\">\r\n                  <div soho-tab-panel tabId=\"tabs-vertical-role1\">\r\n                    <div class=\"row\">\r\n                      <div class=\"one-third column\">\r\n                        <div class=\"field\">\r\n                          <span class=\"label\">Role Description</span>\r\n                          <span class=\"data\">Infor Template for User Creation</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"one-third column\">\r\n                        <div class=\"field\">\r\n                          <span class=\"label\">Application Instance</span>\r\n                          <span class=\"data\">Infor </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"full column\">\r\n                        <button-set>\r\n                          <button soho-button=\"icon\" icon=\"checkbox\">Mitigate</button>\r\n                        </button-set>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"twelve columns\" role=\"main\">\r\n                        <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"twelve columns\">\r\n                        <button-set>\r\n                          <button soho-button class=\"btn-secondary\">Revoke Role</button>\r\n                        </button-set>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div soho-tab-panel tabId=\"tabs-vertical-role2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"one-third column\">\r\n                        <div class=\"field\">\r\n                          <span class=\"label\">Role Description</span>\r\n                          <span class=\"data\">Infor Template for User Creation</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"one-third column\">\r\n                        <div class=\"field\">\r\n                          <span class=\"label\">Application Instance</span>\r\n                          <span class=\"data\">Infor </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"full column\">\r\n                        <button-set>\r\n                          <button soho-button=\"icon\" icon=\"checkbox\">Mitigate</button>\r\n                        </button-set>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"twelve columns\" role=\"main\">\r\n                        <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"twelve columns\">\r\n                        <button-set>\r\n                          <button soho-button class=\"btn-secondary\">Revoke Rule</button>\r\n                        </button-set>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div soho-tab-panel-container>\r\n                <div soho-tab-panel tabId=\"responsibilities-selected-connection\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </soho-accordion-pane>\r\n        <soho-accordion-header>Other Details</soho-accordion-header>\r\n        <soho-accordion-pane>\r\n          <div class=\"row\">\r\n            <div class=\"twelve columns\">\r\n              <div class=\"field\">\r\n                <label for=\"readonly\" class=\"label\">Comments</label>\r\n                <textarea soho-textarea name=\"readonly\" class=\"full-width\" [readonly]=\"true\" [(ngModel)]=\"model.readonlyText\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </soho-accordion-pane>\r\n      </soho-accordion>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/request/request-new/request-new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request/request-new/request-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestNewComponent = (function () {
    function RequestNewComponent() {
    }
    RequestNewComponent.prototype.ngOnInit = function () { };
    RequestNewComponent.prototype.onTabActivated = function (event) {
        console.log(event.tab + ' TabsBasicDemoComponent.onTabActivated');
    };
    return RequestNewComponent;
}());
RequestNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approvaos-request-new',
        template: __webpack_require__("../../../../../src/app/request/request-new/request-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/request/request-new/request-new.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RequestNewComponent);

//# sourceMappingURL=request-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_header_header_dynamic_ref_service__ = __webpack_require__("../../../../../src/app/layout/header/header-dynamic-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestMainComponent = (function () {
    function RequestMainComponent(headerRef) {
        this.headerRef = headerRef;
    }
    RequestMainComponent.prototype.ngOnInit = function () {
        this.headerRef.instance.sectionTitle = 'Request';
    };
    return RequestMainComponent;
}());
RequestMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-request',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_header_header_dynamic_ref_service__["a" /* HeaderDynamicRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_header_header_dynamic_ref_service__["a" /* HeaderDynamicRefService */]) === "function" && _a || Object])
], RequestMainComponent);

var _a;
//# sourceMappingURL=request.component.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infor_sohoxi_angular__ = __webpack_require__("../../../../@infor/sohoxi-angular/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_routing_module__ = __webpack_require__("../../../../../src/app/request/request.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request_component__ = __webpack_require__("../../../../../src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_list_request_list_component__ = __webpack_require__("../../../../../src/app/request/request-list/request-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__request_new_request_new_component__ = __webpack_require__("../../../../../src/app/request/request-new/request-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RequestModule = (function () {
    function RequestModule() {
    }
    return RequestModule;
}());
RequestModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__infor_sohoxi_angular__["a" /* SohoComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__request_routing_module__["a" /* RequestRoutingModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__request_component__["a" /* RequestMainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__request_list_request_list_component__["a" /* RequestListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__request_new_request_new_component__["a" /* RequestNewComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__request_component__["a" /* RequestMainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__request_list_request_list_component__["a" /* RequestListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__request_new_request_new_component__["a" /* RequestNewComponent */]
        ],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], RequestModule);

//# sourceMappingURL=request.module.js.map

/***/ }),

/***/ "../../../../../src/app/request/request.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_component__ = __webpack_require__("../../../../../src/app/request/request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_list_request_list_component__ = __webpack_require__("../../../../../src/app/request/request-list/request-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_new_request_new_component__ = __webpack_require__("../../../../../src/app/request/request-new/request-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'request',
        component: __WEBPACK_IMPORTED_MODULE_2__request_component__["a" /* RequestMainComponent */],
        children: [
            { path: '', redirectTo: 'requestlist', pathMatch: 'full' },
            { path: 'requestlist', component: __WEBPACK_IMPORTED_MODULE_3__request_list_request_list_component__["a" /* RequestListComponent */] },
            { path: 'newrequest', component: __WEBPACK_IMPORTED_MODULE_4__request_new_request_new_component__["a" /* RequestNewComponent */] }
        ],
        data: {
            title: 'Request',
            parent: 'Manage'
        }
    }
];
var RequestRoutingModule = (function () {
    function RequestRoutingModule() {
    }
    return RequestRoutingModule;
}());
RequestRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__request_component__["a" /* RequestMainComponent */], __WEBPACK_IMPORTED_MODULE_3__request_list_request_list_component__["a" /* RequestListComponent */], __WEBPACK_IMPORTED_MODULE_4__request_new_request_new_component__["a" /* RequestNewComponent */]];
RequestRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], RequestRoutingModule);

//# sourceMappingURL=request.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/adduser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width full-height scrollable-flex\">\r\n  <div soho-wizard (afteractivated)=\"onActivated($event)\">\r\n    <div soho-wizard-header>\r\n      <a soho-wizard-tick tickId=\"user-details\" current=\"true\">User Details</a>\r\n      <a soho-wizard-tick tickId=\"role-assignments\">Role Assignments</a>\r\n      <a soho-wizard-tick tickId=\"summary\">Summary</a>\r\n    </div>\r\n    <div soho-wizard-pages>\r\n      <div soho-wizard-page tickId=\"user-details\">\r\n          <approva-os-user-details></approva-os-user-details>\r\n      </div>\r\n      <div soho-wizard-page tickId=\"role-assignments\">\r\n          <approva-os-role-assignments></approva-os-role-assignments>\r\n      </div>\r\n      <div soho-wizard-page tickId=\"summary\" class=\"complete\">\r\n          <approva-os-user-summary></approva-os-user-summary>\r\n      </div>\r\n    </div>\r\n    <div soho-wizard-buttonbar [buttons]=\"buttons\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/adduser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/adduser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__ = __webpack_require__("../../../../@infor/sohoxi-angular/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = (function () {
    function AddUserComponent(toastService, router) {
        var _this = this;
        this.toastService = toastService;
        this.router = router;
        this.buttons = [
            {
                id: 'prevous',
                text: Locale.translate('Previous'),
                click: function () { _this.wizard.previous(); },
                disabled: function () { return !_this.wizard.hasPrevious(); },
                position: 'middle'
            },
            {
                id: 'next',
                text: Locale.translate('Next'),
                click: function () { _this.onNext(); },
                isDefault: true,
                disabled: function () { return _this.nextButtonDisabled(); },
                position: 'middle'
            },
            {
                id: 'finish',
                text: 'Finish',
                click: function () { _this.finish(); },
                disabled: function () { return !_this.wizard.hasFinished(); },
                position: 'middle'
            }
        ];
    }
    AddUserComponent.prototype.nextButtonDisabled = function () {
        return this.wizard.currentTickId === 'summary';
    };
    AddUserComponent.prototype.onNext = function () {
        switch (this.wizard.currentTickId) {
            case 'user-details':
                this.wizard.next();
                break;
            case 'role-assignments':
                this.wizard.finish();
                break;
            case 'summary':
                // this.wizard.finish();
                break;
        }
    };
    AddUserComponent.prototype.finish = function () {
        this.router.navigate(['./userlist']);
    };
    AddUserComponent.prototype.onActivated = function (e) {
    };
    return AddUserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["e" /* SohoWizardComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["e" /* SohoWizardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["e" /* SohoWizardComponent */]) === "function" && _a || Object)
], AddUserComponent.prototype, "wizard", void 0);
AddUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-add-new-user',
        template: __webpack_require__("../../../../../src/app/user-management/adduser/adduser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management/adduser/adduser.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["c" /* SohoToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__infor_sohoxi_angular__["c" /* SohoToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _c || Object])
], AddUserComponent);

var _a, _b, _c;
//# sourceMappingURL=adduser.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/role-assignments/role-assignments.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\r\n  <legend>New Roles to be assigned</legend>\r\n</fieldset>\r\n<div class=\"form-responsive row\">\r\n  <div class=\"one-third column\">\r\n    <div class=\"field\">\r\n      <label class=\"label\" for=\"role-select\">Roles\r\n        <span class=\"audible\">Select Role</span>\r\n      </label>\r\n      <span class=\"lookup-wrapper\">\r\n        <input name=\"role-select\" class=\"lookup\" id=\"role-select\" type=\"text\" data-init=\"false\"><span tabindex=\"-1\" class=\"trigger\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" role=\"presentation\" aria-hidden=\"true\" focusable=\"false\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-search-list\" /></svg>\r\n        </span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"one-third column\">\r\n    <div class=\"field\">\r\n      <label class=\"label\" for=\"assign-roles-another-user\">Assign Roles as Another User\r\n        <span class=\"audible\">Assign Roles as Another User</span>\r\n      </label>\r\n      <span class=\"lookup-wrapper\">\r\n        <input name=\"assign-roles-another-user\" class=\"lookup\" id=\"assign-roles-another-user\" type=\"text\" data-init=\"false\"><span tabindex=\"-1\" class=\"trigger\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" role=\"presentation\" aria-hidden=\"true\" focusable=\"false\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-search-list\" /></svg>\r\n        </span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"twelve columns\" role=\"main\">\r\n    <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<fieldset>\r\n  <legend>More Details</legend>\r\n</fieldset>\r\n<div class=\"form-responsive row\">\r\n  <div class=\"one-third column\">\r\n    <div class=\"field\">\r\n      <span class=\"label\">Approval Process Template</span>\r\n      <span class=\"data\">Infor Template for User Creation</span>\r\n    </div>\r\n    <div class=\"field\">\r\n      <label class=\"label\" for=\"comments\">Comments\r\n        <span class=\"audible\">Comments</span>\r\n      </label>\r\n      <textarea name=\"comments\" class=\"textarea resizable\" id=\"comments\" placeholder=\"Type your notes here...\">Type your notes here...</textarea>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/role-assignments/role-assignments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/role-assignments/role-assignments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleAssignmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleAssignmentsComponent = (function () {
    function RoleAssignmentsComponent() {
    }
    RoleAssignmentsComponent.prototype.ngOnInit = function () { };
    return RoleAssignmentsComponent;
}());
RoleAssignmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-role-assignments',
        template: __webpack_require__("../../../../../src/app/user-management/adduser/role-assignments/role-assignments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management/adduser/role-assignments/role-assignments.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RoleAssignmentsComponent);

//# sourceMappingURL=role-assignments.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"full columns\" role=\"main\">\r\n    <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/summary/summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserSummaryComponent = (function () {
    function UserSummaryComponent() {
    }
    UserSummaryComponent.prototype.ngOnInit = function () { };
    return UserSummaryComponent;
}());
UserSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-user-summary',
        template: __webpack_require__("../../../../../src/app/user-management/adduser/summary/summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management/adduser/summary/summary.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UserSummaryComponent);

//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"full column\">\r\n    <button-set>\r\n      <button soho-button=\"icon\" icon=\"add\">Add</button>\r\n      <button soho-button=\"icon\" icon=\"delete\">Delete</button>\r\n    </button-set>\r\n  </div>\r\n</div>\r\n<div class=\"row top-padding\">\r\n  <div class=\"twelve columns\" role=\"main\">\r\n    <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/user-details/user-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/adduser/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () { };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-user-details',
        template: __webpack_require__("../../../../../src/app/user-management/adduser/user-details/user-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management/adduser/user-details/user-details.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UserDetailsComponent);

//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width\">\r\n  <div class=\"row\">\r\n      <div class=\"twelve columns\">\r\n        <button-set>\r\n          <button soho-button=\"icon\" icon=\"add\" (click)=\"addNewUser($event)\">Add</button>\r\n          <button soho-button=\"icon\" icon=\"delete\">Delete</button>\r\n          <button soho-button=\"icon\" icon=\"export\" disabled=\"disabled\">Export</button>\r\n        </button-set>\r\n      </div>\r\n    </div>\r\n\r\n   <div class=\"row\">\r\n      <div class=\"twelve columns\" role=\"main\">\r\n        <div soho-datagrid [columns]=\"columns\" [data]=\"data\" [paging]=\"true\" [pagesize]=\"10\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management/user-list/user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-management/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_approvaos_core__ = __webpack_require__("../../../../approvaos-core/approvaos-core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(dataService, router, route) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
    }
    UserListComponent.prototype.ngOnInit = function () { };
    UserListComponent.prototype.addNewUser = function () {
        this.router.navigate(['./adduser']);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-user-list',
        template: __webpack_require__("../../../../../src/app/user-management/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-management/user-list/user-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_approvaos_core__["b" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_approvaos_core__["b" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UserListComponent);

var _a, _b, _c;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_header_header_dynamic_ref_service__ = __webpack_require__("../../../../../src/app/layout/header/header-dynamic-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserManagementComponent = (function () {
    function UserManagementComponent(headerRef) {
        this.headerRef = headerRef;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.headerRef.instance.sectionTitle = 'User';
    };
    return UserManagementComponent;
}());
UserManagementComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'approva-os-user-management',
        template: __webpack_require__("../../../../../src/app/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_header_header_dynamic_ref_service__["a" /* HeaderDynamicRefService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_header_header_dynamic_ref_service__["a" /* HeaderDynamicRefService */]) === "function" && _a || Object])
], UserManagementComponent);

var _a;
//# sourceMappingURL=user-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__infor_sohoxi_angular__ = __webpack_require__("../../../../@infor/sohoxi-angular/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_management_routing_module__ = __webpack_require__("../../../../../src/app/user-management/user-management.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-management/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adduser_adduser_component__ = __webpack_require__("../../../../../src/app/user-management/adduser/adduser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__adduser_role_assignments_role_assignments_component__ = __webpack_require__("../../../../../src/app/user-management/adduser/role-assignments/role-assignments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adduser_summary_summary_component__ = __webpack_require__("../../../../../src/app/user-management/adduser/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adduser_user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user-management/adduser/user-details/user-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserManagementModule = (function () {
    function UserManagementModule() {
    }
    return UserManagementModule;
}());
UserManagementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__infor_sohoxi_angular__["a" /* SohoComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__user_management_routing_module__["a" /* UserManagementRoutingModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__user_management_component__["a" /* UserManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__adduser_adduser_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__adduser_role_assignments_role_assignments_component__["a" /* RoleAssignmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__adduser_summary_summary_component__["a" /* UserSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__adduser_user_details_user_details_component__["a" /* UserDetailsComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__user_management_component__["a" /* UserManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__adduser_adduser_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__adduser_role_assignments_role_assignments_component__["a" /* RoleAssignmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__adduser_summary_summary_component__["a" /* UserSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__adduser_user_details_user_details_component__["a" /* UserDetailsComponent */]
        ],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], UserManagementModule);

//# sourceMappingURL=user-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-management/user-management.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_component__ = __webpack_require__("../../../../../src/app/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-management/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adduser_adduser_component__ = __webpack_require__("../../../../../src/app/user-management/adduser/adduser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_management_component__["a" /* UserManagementComponent */],
        children: [
            { path: '', redirectTo: 'userlist', pathMatch: 'full' },
            { path: 'userlist', component: __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__["a" /* UserListComponent */] },
            { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_4__adduser_adduser_component__["a" /* AddUserComponent */] }
        ],
        data: {
            title: 'User',
            parent: 'Manage'
        }
    }
];
var UserManagementRoutingModule = (function () {
    function UserManagementRoutingModule() {
    }
    return UserManagementRoutingModule;
}());
UserManagementRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__user_management_component__["a" /* UserManagementComponent */], __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_4__adduser_adduser_component__["a" /* AddUserComponent */]];
UserManagementRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], UserManagementRoutingModule);

//# sourceMappingURL=user-management.routing.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map