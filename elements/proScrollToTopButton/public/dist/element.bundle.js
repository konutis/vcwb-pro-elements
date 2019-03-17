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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\n\nvar ProScrollToTopButton = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(ProScrollToTopButton, _vcvAPI$elementCompon);\n\n  function ProScrollToTopButton() {\n    (0, _classCallCheck3.default)(this, ProScrollToTopButton);\n    return (0, _possibleConstructorReturn3.default)(this, (ProScrollToTopButton.__proto__ || (0, _getPrototypeOf2.default)(ProScrollToTopButton)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(ProScrollToTopButton, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor;\n      var shape = atts.shape,\n          visibilityOffset = atts.visibilityOffset,\n          alignment = atts.alignment,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n\n      var containerClasses = 'pro-scroll-to-top-button-container vce';\n      var buttonClasses = 'pro-scroll-to-top-button';\n      var customProps = {};\n\n      if (customClass) {\n        containerClasses += ' ' + customClass;\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      var mixinData = this.getMixinData('background');\n      if (mixinData) {\n        containerClasses += ' pro-scroll-to-top-button-background--' + mixinData.selector;\n      }\n\n      mixinData = this.getMixinData('hoverBackground');\n      if (mixinData) {\n        containerClasses += ' pro-scroll-to-top-button-hover-background--' + mixinData.selector;\n      }\n\n      mixinData = this.getMixinData('iconColor');\n      if (mixinData) {\n        containerClasses += ' pro-scroll-to-top-button-icon-color--' + mixinData.selector;\n      }\n\n      mixinData = this.getMixinData('iconHoverColor');\n      if (mixinData) {\n        containerClasses += ' pro-scroll-to-top-button-icon-hover-color--' + mixinData.selector;\n      }\n\n      if (shape === 'rounded') {\n        containerClasses += ' pro-scroll-to-top-button-shape--rounded';\n      }\n\n      if (alignment) {\n        containerClasses += ' pro-scroll-to-top-button-align--' + alignment;\n      }\n\n      var visibilityOffsetProps = {\n        'data-pro-scroll-to-top-visibility-offset': visibilityOffset\n      };\n\n      var doRest = this.applyDO('margin animation border background');\n      var doPadding = this.applyDO('padding');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({ className: containerClasses }, editor, { id: 'el-' + id }, doRest, visibilityOffsetProps),\n        _react2.default.createElement(\n          'button',\n          (0, _extends3.default)({ className: buttonClasses }, customProps, doPadding, { title: 'Scroll To Top' }),\n          _react2.default.createElement(\n            'svg',\n            { className: 'pro-scroll-to-top-button-icon', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },\n            _react2.default.createElement('path', { d: 'M16 6.303l-16.162 16.162 3.232 3.232 12.93-12.93 12.93 12.93 3.233-3.233z' })\n          )\n        )\n      );\n    }\n  }]);\n  return ProScrollToTopButton;\n}(vcvAPI.elementComponent);\n\nexports.default = ProScrollToTopButton;\n\n//# sourceURL=webpack:///./proScrollToTopButton/component.js?");

/***/ }),

/***/ "./proScrollToTopButton/index.js":
/*!***************************************!*\
  !*** ./proScrollToTopButton/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(/*! ./component */ \"./proScrollToTopButton/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./proScrollToTopButton/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/editor.css\"),\n  mixins: {\n    background: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/background.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/background.pcss\")\n    },\n    hoverBackground: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/hoverBackground.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/hoverBackground.pcss\")\n    },\n    iconColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/iconColor.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconColor.pcss\")\n    },\n    iconHoverColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/iconHoverColor.pcss */ \"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconHoverColor.pcss\")\n    }\n  }\n});\n\n//# sourceURL=webpack:///./proScrollToTopButton/index.js?");

/***/ }),

/***/ "./proScrollToTopButton/settings.json":
/*!********************************************!*\
  !*** ./proScrollToTopButton/settings.json ***!
  \********************************************/
/*! exports provided: background, hoverBackground, iconColor, iconHoverColor, shape, visibilityOffset, alignment, designOptions, editFormTab1, metaEditFormTabs, relatedTo, customClass, metaCustomId, tag, parentWrapper, metaPublicJs, default */
/***/ (function(module) {

eval("module.exports = {\"background\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"rgba(50,50,50,.6)\",\"options\":{\"label\":\"Button background\",\"cssMixin\":{\"mixin\":\"background\",\"property\":\"background\",\"namePattern\":\"[\\\\da-f]+\"}}},\"hoverBackground\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"rgba(50,50,50,.8)\",\"options\":{\"label\":\"Button hover background\",\"cssMixin\":{\"mixin\":\"hoverBackground\",\"property\":\"hoverBackground\",\"namePattern\":\"[\\\\da-f]+\"}}},\"iconColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"rgba(255,255,255, .7)\",\"options\":{\"label\":\"Icon color\",\"cssMixin\":{\"mixin\":\"iconColor\",\"property\":\"iconColor\",\"namePattern\":\"[\\\\da-f]+\"}}},\"iconHoverColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"rgba(255,255,255, .9)\",\"options\":{\"label\":\"Icon hover color\",\"cssMixin\":{\"mixin\":\"iconHoverColor\",\"property\":\"iconHoverColor\",\"namePattern\":\"[\\\\da-f]+\"}}},\"shape\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"rounded\",\"options\":{\"label\":\"Button shape\",\"values\":[{\"label\":\"Square\",\"value\":\"square\",\"icon\":\"vcv-ui-icon-attribute-shape-square\"},{\"label\":\"Rounded\",\"value\":\"rounded\",\"icon\":\"vcv-ui-icon-attribute-shape-rounded\"}]}},\"visibilityOffset\":{\"type\":\"number\",\"access\":\"public\",\"value\":\"100\",\"options\":{\"min\":\"0\",\"label\":\"Visibility offset\",\"description\":\"Enter visibility offset when button will become visible in px.\"}},\"alignment\":{\"type\":\"buttonGroup\",\"access\":\"public\",\"value\":\"right\",\"options\":{\"label\":\"Alignment\",\"values\":[{\"label\":\"Left\",\"value\":\"left\",\"icon\":\"vcv-ui-icon-attribute-alignment-left\"},{\"label\":\"Right\",\"value\":\"right\",\"icon\":\"vcv-ui-icon-attribute-alignment-right\"}]}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"visibilityOffset\",\"background\",\"hoverBackground\",\"iconColor\",\"iconHoverColor\",\"shape\",\"alignment\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"RootElements\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"proScrollToTopButton\"},\"parentWrapper\":{\"type\":\"string\",\"access\":\"protected\",\"value\":\"\"},\"metaPublicJs\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libPaths\":\"public/dist/proScrollToTopScript.min.js\"}]}}};\n\n//# sourceURL=webpack:///./proScrollToTopButton/settings.json?");

/***/ })

},[['./proScrollToTopButton/index.js']]]);