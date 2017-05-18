webpackJsonp([1,4],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/polyfills.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    // Get all posts from the API
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('/api/posts')
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/posts.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 508;


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(616);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/main.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_service__ = __webpack_require__(497);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(postsService) {
        this.postsService = postsService;
        // instantiate posts to an empty array
        this.posts = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve posts from the API
        this.postsService.getAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(627),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/app.component.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_file_upload_section__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_file_upload_simple_demo__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__posts_service__ = __webpack_require__(497);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// // Define the routes
// const ROUTES = [
//   {
//     path: '',
//     redirectTo: 'posts',
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: PostsComponent
//   }
// ];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__components_file_upload_section__["a" /* FileUploadSectionComponent */], __WEBPACK_IMPORTED_MODULE_9__components_file_upload_simple_demo__["a" /* SimpleDemoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__posts_service__["a" /* PostsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/app.module.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var tabDesc = [
    {
        heading: 'Simple',
        ts: __webpack_require__(632),
        html: __webpack_require__(631),
        js: __webpack_require__(630)
    }
];
var FileUploadSectionComponent = (function () {
    function FileUploadSectionComponent() {
        this.name = 'File Upload';
        this.currentHeading = 'Simple';
        this.tabs = tabDesc;
    }
    FileUploadSectionComponent.prototype.select = function (e) {
        if (e.heading) {
            this.currentHeading = e.heading;
        }
    };
    FileUploadSectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'file-upload-section',
            template: __webpack_require__(628)
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploadSectionComponent);
    return FileUploadSectionComponent;
}());
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/file-upload-section.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const URL = '/api/';
var URL = '/api/upload';
// https://slik-test.herokuapp.com
// http://localhost:3000
var SimpleDemoComponent = (function () {
    function SimpleDemoComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    SimpleDemoComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    SimpleDemoComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    SimpleDemoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'simple-demo',
            template: __webpack_require__(629)
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleDemoComponent);
    return SimpleDemoComponent;
}());
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/simple-demo.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/WebAppHeroku/sliktest/src/environment.js.map

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<main class=\"bd-pageheader\">\n    <div class=\"container\">\n      <h1>ng2-file-upload</h1>\n      <p>The Angular2 File Upload directives</p>\n      <a class=\"btn btn-primary\" href=\"https://github.com/valor-software/ng2-file-upload\">View on GitHub</a>\n      <div class=\"row\">\n        <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-file-upload&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n        <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-file-upload&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n      </div>\n    </div>\n  </main>\n\n  <div class=\"container\">\n    <section id=\"getting-started\" [innerHtml]=\"gettingStarted\"></section>\n\n    <file-upload-section class=\"col-md-12\"></file-upload-section>\n  </div>\n\n  <div class=\"container\">\n  <div class=\"row\" *ngFor=\"let post of posts\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ post.title }}</h4>\n      <p class=\"card-text\">{{post.body}}</p>\n      <a href=\"#\" class=\"card-link\">Card link</a>\n      <a href=\"#\" class=\"card-link\">Another link</a>\n    </div>\n  </div>\n</div>\n\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p class=\"text-muted text-center\"><a href=\"https://github.com/valor-software/ng2-file-upload\">ng2-file-upload</a> is maintained by <a href=\"https://github.com/valor-software\">valor-software</a>.</p>\n    </div>\n  </footer>"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<section [attr.id]=\"name.toLowerCase()\">\r\n  <div class=\"row\">\r\n    <tabset>\r\n      <tab *ngFor=\"let desc of tabs\" heading=\"{{desc.heading}}\" (select)=\"select($event)\">\r\n        <div class=\"card card-block panel panel-default panel-body\">\r\n\r\n          <simple-demo></simple-demo>\r\n\r\n          <br>\r\n\r\n          <div class=\"row\" style=\"margin: 0px;\">\r\n            <tabset>\r\n              <tab heading=\"Markup\">\r\n                <div class=\"card card-block panel panel-default panel-body\">\r\n                  <pre class=\"prettyprint linenums lang-html\">{{desc.html}}</pre>\r\n                </div>\r\n              </tab>\r\n              <tab heading=\"TypeScript\">\r\n                <div class=\"card card-block panel panel-default panel-body\">\r\n                  <pre class=\"prettyprint linenums lang-js\">{{desc.ts}}</pre>\r\n                  <pre class=\"language-typescript\"><code class=\"language-typescript\" ng-non-bindable [innerHTML]=\"desc.ts\"></code></pre>\r\n                </div>\r\n              </tab>\r\n              <tab heading=\"Backend Demo\">\r\n                <div class=\"card card-block panel panel-default panel-body\">\r\n                  <pre class=\"prettyprint linenums lang-js\">{{desc.js}}</pre>\r\n                </div>\r\n              </tab>\r\n            </tabset>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <h2>API</h2>\r\n    <div class=\"card card-block panel panel-default panel-body\" [innerHTML]=\"doc\"></div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .my-drop-zone { border: dotted 3px lightgray; }\r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }\r\n\r\n    html, body { height: 100%; }\r\n</style>\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"navbar navbar-default\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href>Angular2 File Upload</a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-3\">\r\n\r\n            <h3>Select files</h3>\r\n\r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                 (fileOver)=\"fileOverBase($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                Base drop zone\r\n            </div>\r\n\r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\r\n                 (fileOver)=\"fileOverAnother($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                Another drop zone\r\n            </div>\r\n\r\n            Multiple\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n\r\n            Single\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n\r\n            <h3>Upload queue</h3>\r\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">Name</th>\r\n                    <th>Size</th>\r\n                    <th>Progress</th>\r\n                    <th>Status</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                    <td><strong>{{ item?.file?.name }}</strong></td>\r\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                    <td *ngIf=\"uploader.isHTML5\">\r\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                (click)=\"item.remove()\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <div>\r\n                <div>\r\n                    Queue progress:\r\n                    <div class=\"progress\" style=\"\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "/*eslint-disable*/\r\nvar express = require('express');\r\nvar multer = require('multer');\r\nvar fs = require('fs');\r\nvar app = express();\r\n\r\nvar DIR = './uploads/';\r\n\r\nvar upload = multer({dest: DIR});\r\n\r\napp.use(function (req, res, next) {\r\n  res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');\r\n  res.setHeader('Access-Control-Allow-Methods', 'POST');\r\n  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');\r\n  res.setHeader('Access-Control-Allow-Credentials', true);\r\n  next();\r\n});\r\n\r\napp.use(multer({\r\n  dest: DIR,\r\n  rename: function (fieldname, filename) {\r\n    return filename + Date.now();\r\n  },\r\n  onFileUploadStart: function (file) {\r\n    console.log(file.originalname + ' is starting ...');\r\n  },\r\n  onFileUploadComplete: function (file) {\r\n    console.log(file.fieldname + ' uploaded to  ' + file.path);\r\n  }\r\n}));\r\n\r\napp.get('/api', function (req, res) {\r\n  res.end('file catcher example');\r\n});\r\n\r\napp.post('/api', function (req, res) {\r\n  upload(req, res, function (err) {\r\n    if (err) {\r\n      return res.end(err.toString());\r\n    }\r\n\r\n    res.end('File is uploaded');\r\n  });\r\n});\r\n\r\nvar PORT = process.env.PORT || 3000;\r\n\r\napp.listen(PORT, function () {\r\n  console.log('Working on port ' + PORT);\r\n});\r\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<style>\r\n    .my-drop-zone { border: dotted 3px lightgray; }\r\n    .nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n    .another-file-over-class { border: dotted 3px green; }\r\n\r\n    html, body { height: 100%; }\r\n</style>\r\n\r\n<div class=\"container\">\r\n\r\n    <div class=\"navbar navbar-default\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href>Angular2 File Upload</a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-md-3\">\r\n\r\n            <h3>Select files</h3>\r\n\r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n                 (fileOver)=\"fileOverBase($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                Base drop zone\r\n            </div>\r\n\r\n            <div ng2FileDrop\r\n                 [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\r\n                 (fileOver)=\"fileOverAnother($event)\"\r\n                 [uploader]=\"uploader\"\r\n                 class=\"well my-drop-zone\">\r\n                Another drop zone\r\n            </div>\r\n\r\n            Multiple\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n\r\n            Single\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n\r\n            <h3>Upload queue</h3>\r\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th width=\"50%\">Name</th>\r\n                    <th>Size</th>\r\n                    <th>Progress</th>\r\n                    <th>Status</th>\r\n                    <th>Actions</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                    <td><strong>{{ item?.file?.name }}</strong></td>\r\n                    <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                    <td *ngIf=\"uploader.isHTML5\">\r\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">\r\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                    </td>\r\n                    <td nowrap>\r\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                                (click)=\"item.remove()\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <div>\r\n                <div>\r\n                    Queue progress:\r\n                    <div class=\"progress\" style=\"\">\r\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                        (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                        (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                        (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\r\nimport { FileUploader } from 'ng2-file-upload';\r\n\r\n// const URL = '/api/';\r\nconst URL = '/api/upload';\r\n// https://slik-test.herokuapp.com\r\n// http://localhost:3000\r\n\r\n@Component({\r\n  selector: 'simple-demo',\r\n  templateUrl: './simple-demo.html'\r\n})\r\nexport class SimpleDemoComponent {\r\n  public uploader:FileUploader = new FileUploader({url: URL});\r\n  public hasBaseDropZoneOver:boolean = false;\r\n  public hasAnotherDropZoneOver:boolean = false;\r\n\r\n  public fileOverBase(e:any):void {\r\n    this.hasBaseDropZoneOver = e;\r\n  }\r\n\r\n  public fileOverAnother(e:any):void {\r\n    this.hasAnotherDropZoneOver = e;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(509);


/***/ })

},[646]);
//# sourceMappingURL=main.bundle.map