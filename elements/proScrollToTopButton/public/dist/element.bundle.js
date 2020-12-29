(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/background.pcss":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./proScrollToTopButton/cssMixins/background.pcss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-scroll-to-top-button-background--$selector {\\n  background-color: $background;\\n}\"\n\n//# sourceURL=webpack:///./proScrollToTopButton/cssMixins/background.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/hoverBackground.pcss":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./proScrollToTopButton/cssMixins/hoverBackground.pcss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-scroll-to-top-button-hover-background--$selector:hover {\\n  background-color: $hoverBackground;\\n}\"\n\n//# sourceURL=webpack:///./proScrollToTopButton/cssMixins/hoverBackground.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconColor.pcss":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./proScrollToTopButton/cssMixins/iconColor.pcss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-scroll-to-top-button-icon-color--$selector .pro-scroll-to-top-button-icon path {\\n  fill: $iconColor;\\n}\"\n\n//# sourceURL=webpack:///./proScrollToTopButton/cssMixins/iconColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconHoverColor.pcss":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./proScrollToTopButton/cssMixins/iconHoverColor.pcss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-scroll-to-top-button-icon-hover-color--$selector:hover .pro-scroll-to-top-button-icon path {\\n  fill: $iconHoverColor;\\n}\"\n\n//# sourceURL=webpack:///./proScrollToTopButton/cssMixins/iconHoverColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proScrollToTopButton/editor.css":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./proScrollToTopButton/editor.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n\"\n\n//# sourceURL=webpack:///./proScrollToTopButton/editor.css?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proScrollToTopButton/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./proScrollToTopButton/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-scroll-to-top-button-container {\\n  position: fixed;\\n\\n  bottom: -100%;\\n  opacity: 0;\\n  z-index: -99999;\\n  visibility: hidden;\\n  transition: opacity .5s, background-color .2s;\\n}\\n\\n.pro-scroll-to-top-button-container.vce {\\n  margin: 0 10px 10px 10px;\\n}\\n\\n.pro-scroll-to-top-button-shape--rounded {\\n  border-radius: 5px;\\n}\\n\\n.pro-scroll-to-top-button-align--left {\\n  left: 0;\\n}\\n\\n.pro-scroll-to-top-button-align--right {\\n  right: 0;\\n}\\n\\n.pro-scroll-to-top-button-container[data-vcv-pro-scroll-button-visible=\\\"true\\\"] {\\n  bottom: 0;\\n  z-index: 99999;\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n.pro-scroll-to-top-button-container button.pro-scroll-to-top-button {\\n  border: 0;\\n  box-shadow: none;\\n  text-decoration: none;\\n  background: transparent;\\n  padding: 9px;\\n}\\n\\n.pro-scroll-to-top-button-container button.pro-scroll-to-top-button:focus {\\n  outline: none;\\n}\\n\\n.pro-scroll-to-top-button-icon {\\n  vertical-align: middle;\\n}\\n\\n.pro-scroll-to-top-button-icon path {\\n  transition: fill .2s;\\n}\"\n\n//# sourceURL=webpack:///./proScrollToTopButton/styles.css?./node_modules/raw-loader");

/***/ }),

/***/ "./proScrollToTopButton/component.js":
/*!*******************************************!*\
  !*** ./proScrollToTopButton/component.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProScrollToTopButton; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar vcvAPI = vc_cake__WEBPACK_IMPORTED_MODULE_7___default.a.getService('api');\n\nvar ProScrollToTopButton = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ProScrollToTopButton, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(ProScrollToTopButton);\n\n  function ProScrollToTopButton() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ProScrollToTopButton);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ProScrollToTopButton, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor;\n      var shape = atts.shape,\n          visibilityOffset = atts.visibilityOffset,\n          alignment = atts.alignment,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n      var containerClasses = 'pro-scroll-to-top-button-container vce';\n      var buttonClasses = 'pro-scroll-to-top-button';\n      var customProps = {};\n\n      if (customClass) {\n        containerClasses += \" \".concat(customClass);\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var mixinData = this.getMixinData('background');\n\n      if (mixinData) {\n        containerClasses += \" pro-scroll-to-top-button-background--\".concat(mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('hoverBackground');\n\n      if (mixinData) {\n        containerClasses += \" pro-scroll-to-top-button-hover-background--\".concat(mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('iconColor');\n\n      if (mixinData) {\n        containerClasses += \" pro-scroll-to-top-button-icon-color--\".concat(mixinData.selector);\n      }\n\n      mixinData = this.getMixinData('iconHoverColor');\n\n      if (mixinData) {\n        containerClasses += \" pro-scroll-to-top-button-icon-hover-color--\".concat(mixinData.selector);\n      }\n\n      if (shape === 'rounded') {\n        containerClasses += \" pro-scroll-to-top-button-shape--rounded\";\n      }\n\n      if (alignment) {\n        containerClasses += \" pro-scroll-to-top-button-align--\".concat(alignment);\n      }\n\n      var visibilityOffsetProps = {\n        'data-pro-scroll-to-top-visibility-offset': visibilityOffset\n      };\n      var doRest = this.applyDO('margin animation border background');\n      var doPadding = this.applyDO('padding');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: containerClasses\n      }, editor, {\n        id: 'el-' + id\n      }, doRest, visibilityOffsetProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"button\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        className: buttonClasses\n      }, customProps, doPadding, {\n        title: \"Scroll To Top\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"svg\", {\n        className: \"pro-scroll-to-top-button-icon\",\n        version: \"1.1\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"32\",\n        height: \"32\",\n        viewBox: \"0 0 32 32\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"path\", {\n        d: \"M16 6.303l-16.162 16.162 3.232 3.232 12.93-12.93 12.93 12.93 3.233-3.233z\"\n      }))));\n    }\n  }]);\n\n  return ProScrollToTopButton;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./proScrollToTopButton/component.js?");

/***/ }),

/***/ "./proScrollToTopButton/index.js":
/*!***************************************!*\
  !*** ./proScrollToTopButton/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./proScrollToTopButton/component.js\");\n\n\nvar vcvAddElement = vc_cake__WEBPACK_IMPORTED_MODULE_0___default.a.getService('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./proScrollToTopButton/settings.json\"), // Component callback\nfunction (component) {\n  component.add(_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/editor.css\"),\n  mixins: {\n    background: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/background.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/background.pcss\")\n    },\n    hoverBackground: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/hoverBackground.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/hoverBackground.pcss\")\n    },\n    iconColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/iconColor.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconColor.pcss\")\n    },\n    iconHoverColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/iconHoverColor.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconHoverColor.pcss\")\n    }\n  }\n});\n\n//# sourceURL=webpack:///./proScrollToTopButton/index.js?");

/***/ }),

/***/ "./proScrollToTopButton/settings.json":
/*!********************************************!*\
  !*** ./proScrollToTopButton/settings.json ***!
  \********************************************/
/*! exports provided: background, hoverBackground, iconColor, iconHoverColor, shape, visibilityOffset, alignment, designOptions, editFormTab1, metaEditFormTabs, relatedTo, customClass, metaCustomId, tag, parentWrapper, metaPublicJs, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"background\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"rgba(50,50,50,.6)\\\",\\\"options\\\":{\\\"label\\\":\\\"Button background\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"background\\\",\\\"property\\\":\\\"background\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"hoverBackground\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"rgba(50,50,50,.8)\\\",\\\"options\\\":{\\\"label\\\":\\\"Button hover background\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"hoverBackground\\\",\\\"property\\\":\\\"hoverBackground\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"iconColor\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"rgba(255,255,255, .7)\\\",\\\"options\\\":{\\\"label\\\":\\\"Icon color\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"iconColor\\\",\\\"property\\\":\\\"iconColor\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"iconHoverColor\\\":{\\\"type\\\":\\\"color\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"rgba(255,255,255, .9)\\\",\\\"options\\\":{\\\"label\\\":\\\"Icon hover color\\\",\\\"cssMixin\\\":{\\\"mixin\\\":\\\"iconHoverColor\\\",\\\"property\\\":\\\"iconHoverColor\\\",\\\"namePattern\\\":\\\"[\\\\\\\\da-f]+\\\"}}},\\\"shape\\\":{\\\"type\\\":\\\"buttonGroup\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"rounded\\\",\\\"options\\\":{\\\"label\\\":\\\"Button shape\\\",\\\"values\\\":[{\\\"label\\\":\\\"Square\\\",\\\"value\\\":\\\"square\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-shape-square\\\"},{\\\"label\\\":\\\"Rounded\\\",\\\"value\\\":\\\"rounded\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-shape-rounded\\\"}]}},\\\"visibilityOffset\\\":{\\\"type\\\":\\\"number\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"100\\\",\\\"options\\\":{\\\"min\\\":\\\"0\\\",\\\"label\\\":\\\"Visibility offset\\\",\\\"description\\\":\\\"Enter visibility offset when button will become visible in px.\\\"}},\\\"alignment\\\":{\\\"type\\\":\\\"buttonGroup\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"right\\\",\\\"options\\\":{\\\"label\\\":\\\"Alignment\\\",\\\"values\\\":[{\\\"label\\\":\\\"Left\\\",\\\"value\\\":\\\"left\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-left\\\"},{\\\"label\\\":\\\"Right\\\",\\\"value\\\":\\\"right\\\",\\\"icon\\\":\\\"vcv-ui-icon-attribute-alignment-right\\\"}]}},\\\"designOptions\\\":{\\\"type\\\":\\\"designOptions\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":{},\\\"options\\\":{\\\"label\\\":\\\"Design Options\\\"}},\\\"editFormTab1\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"visibilityOffset\\\",\\\"background\\\",\\\"hoverBackground\\\",\\\"iconColor\\\",\\\"iconHoverColor\\\",\\\"shape\\\",\\\"alignment\\\",\\\"metaCustomId\\\",\\\"customClass\\\"],\\\"options\\\":{\\\"label\\\":\\\"General\\\"}},\\\"metaEditFormTabs\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"editFormTab1\\\",\\\"designOptions\\\"]},\\\"relatedTo\\\":{\\\"type\\\":\\\"group\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":[\\\"RootElements\\\"]},\\\"customClass\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Extra class name\\\",\\\"description\\\":\\\"Add an extra class name to the element and refer to it from Custom CSS option.\\\"}},\\\"metaCustomId\\\":{\\\"type\\\":\\\"customId\\\",\\\"access\\\":\\\"public\\\",\\\"value\\\":\\\"\\\",\\\"options\\\":{\\\"label\\\":\\\"Element ID\\\",\\\"description\\\":\\\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\\\"}},\\\"tag\\\":{\\\"access\\\":\\\"protected\\\",\\\"type\\\":\\\"string\\\",\\\"value\\\":\\\"proScrollToTopButton\\\"},\\\"parentWrapper\\\":{\\\"type\\\":\\\"string\\\",\\\"access\\\":\\\"protected\\\",\\\"value\\\":\\\"\\\"},\\\"metaPublicJs\\\":{\\\"access\\\":\\\"protected\\\",\\\"type\\\":\\\"string\\\",\\\"value\\\":{\\\"libraries\\\":[{\\\"libPaths\\\":\\\"public/dist/proScrollToTopScript.min.js\\\"}]}}}\");\n\n//# sourceURL=webpack:///./proScrollToTopButton/settings.json?");

/***/ })

},[['./proScrollToTopButton/index.js']]]);