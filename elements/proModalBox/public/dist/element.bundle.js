(window["vcvWebpackJsonp4x"] = window["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./node_modules/raw-loader/index.js!./proModalBox/cssMixins/closeColor.pcss":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./proModalBox/cssMixins/closeColor.pcss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-modal-box-close-color--$selector .pro-modal-box-close-button svg {\\n  fill: $closeColor;\\n}\"\n\n//# sourceURL=webpack:///./proModalBox/cssMixins/closeColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proModalBox/cssMixins/closeHoverColor.pcss":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./proModalBox/cssMixins/closeHoverColor.pcss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-modal-box-close-hover-color--$selector .pro-modal-box-close-button:hover svg {\\n  fill: $closeHoverColor;\\n}\"\n\n//# sourceURL=webpack:///./proModalBox/cssMixins/closeHoverColor.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proModalBox/cssMixins/modalBackground.pcss":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./proModalBox/cssMixins/modalBackground.pcss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-modal-box-modal-background--$selector .pro-modal-box {\\n  background-color: $modalBackground;\\n}\"\n\n//# sourceURL=webpack:///./proModalBox/cssMixins/modalBackground.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proModalBox/cssMixins/overlayBackground.pcss":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./proModalBox/cssMixins/overlayBackground.pcss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-modal-box-overlay-background--$selector {\\n  background-color: $overlayBackground;\\n}\"\n\n//# sourceURL=webpack:///./proModalBox/cssMixins/overlayBackground.pcss?./node_modules/raw-loader");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./proModalBox/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/raw-loader!./proModalBox/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".pro-modal-box-container {\\n  position: fixed;\\n  z-index: -99999;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  height: 0;\\n  width: 0;\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: row;\\n  visibility: hidden;\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: opacity .2s;\\n  align-items: center;\\n}\\n\\n.pro-modal-box-container[data-vcv-pro-modal-box-visible=\\\"true\\\"] {\\n  visibility: visible;\\n  opacity: 1;\\n  z-index: 99999;\\n  pointer-events: auto;\\n  width: auto;\\n  height: auto;\\n}\\n\\n.pro-modal-box-container .pro-modal-box {\\n  margin: 30px;\\n}\\n\\n.pro-modal-box {\\n  background: #eee;\\n  position: relative;\\n  padding: 30px;\\n  overflow-y: auto;\\n  border-radius: 5px;\\n  flex-grow: 1;\\n  width: 0;\\n}\\n\\n.pro-modal-box-container button.pro-modal-box-close-button {\\n  position: absolute;\\n  right: 5px;\\n  top: 5px;\\n  height: 25px;\\n  width: 25px;\\n  border: 0;\\n  box-shadow: none;\\n  text-decoration: none;\\n  padding: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\\n\\n.pro-modal-box-container button.pro-modal-box-close-button:focus {\\n  outline: none;\\n}\\n\\n.pro-modal-box-close-button svg {\\n  transition: fill .2s;\\n}\"\n\n//# sourceURL=webpack:///./proModalBox/styles.css?./node_modules/raw-loader");

/***/ }),

/***/ "./proModalBox/component.js":
/*!**********************************!*\
  !*** ./proModalBox/component.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAPI = _vcCake2.default.getService('api');\n\nvar ProScrollToTopButton = function (_vcvAPI$elementCompon) {\n  (0, _inherits3.default)(ProScrollToTopButton, _vcvAPI$elementCompon);\n\n  function ProScrollToTopButton() {\n    (0, _classCallCheck3.default)(this, ProScrollToTopButton);\n    return (0, _possibleConstructorReturn3.default)(this, (ProScrollToTopButton.__proto__ || (0, _getPrototypeOf2.default)(ProScrollToTopButton)).apply(this, arguments));\n  }\n\n  (0, _createClass3.default)(ProScrollToTopButton, [{\n    key: 'validateSize',\n    value: function validateSize(value) {\n      var units = ['px', 'em', 'rem', '%', 'vw', 'vh'];\n      var re = new RegExp('^-?\\\\d*(\\\\.\\\\d{0,9})?(' + units.join('|') + ')?$');\n      if (value === '' || value.match(re)) {\n        return value;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          id = _props.id,\n          atts = _props.atts,\n          editor = _props.editor,\n          children = _props.children;\n      var modalSelector = atts.modalSelector,\n          width = atts.width,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId;\n\n      var containerClasses = 'pro-modal-box-container';\n      var innerClasses = 'pro-modal-box vce';\n      var customProps = {\n        'data-vce-pro-modal-selector': modalSelector\n      };\n      var customInnerProps = {};\n      customInnerProps.style = {};\n\n      if (customClass) {\n        containerClasses += ' ' + customClass;\n      }\n\n      if (metaCustomId) {\n        customProps.id = metaCustomId;\n      }\n\n      if (width) {\n        width = this.validateSize(width);\n\n        if (width) {\n          width = /^\\d+$/.test(width) ? width + 'px' : width;\n          customInnerProps.style.maxWidth = width;\n        }\n      }\n\n      var mixinData = this.getMixinData('overlayBackground');\n      if (mixinData) {\n        containerClasses += ' pro-modal-box-overlay-background--' + mixinData.selector;\n      }\n\n      mixinData = this.getMixinData('modalBackground');\n      if (mixinData) {\n        containerClasses += ' pro-modal-box-modal-background--' + mixinData.selector;\n      }\n\n      mixinData = this.getMixinData('closeColor');\n      if (mixinData) {\n        containerClasses += ' pro-modal-box-close-color--' + mixinData.selector;\n      }\n\n      mixinData = this.getMixinData('closeHoverColor');\n      if (mixinData) {\n        containerClasses += ' pro-modal-box-close-hover-color--' + mixinData.selector;\n      }\n\n      var doAll = this.applyDO('all');\n\n      return _react2.default.createElement(\n        'div',\n        (0, _extends3.default)({ className: containerClasses }, customProps),\n        _react2.default.createElement(\n          'div',\n          (0, _extends3.default)({ className: innerClasses }, editor, customInnerProps, { id: 'el-' + id }, doAll),\n          _react2.default.createElement(\n            'button',\n            { className: 'pro-modal-box-close-button' },\n            _react2.default.createElement(\n              'svg',\n              { width: '15px', height: '15px', viewBox: '0 0 20 20' },\n              _react2.default.createElement('polygon', { points: '9.5 7.38888889 2.11111111 0 0 2.11111111 7.38888889 9.5 0 16.8888889 2.11111111 19 9.5 11.6111111 16.8888889 19 19 16.8888889 11.6111111 9.5 19 2.11111111 16.8888889 1.76780781e-15' })\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'pro-modal-box-inner' },\n            children\n          )\n        )\n      );\n    }\n  }]);\n  return ProScrollToTopButton;\n}(vcvAPI.elementComponent);\n\nexports.default = ProScrollToTopButton;\n\n//# sourceURL=webpack:///./proModalBox/component.js?");

/***/ }),

/***/ "./proModalBox/index.js":
/*!******************************!*\
  !*** ./proModalBox/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vcCake = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n\nvar _vcCake2 = _interopRequireDefault(_vcCake);\n\nvar _component = __webpack_require__(/*! ./component */ \"./proModalBox/component.js\");\n\nvar _component2 = _interopRequireDefault(_component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vcvAddElement = _vcCake2.default.getService('cook').add;\n\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./proModalBox/settings.json\"),\n// Component callback\nfunction (component) {\n  component.add(_component2.default);\n},\n// css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./proModalBox/styles.css\"),\n  editorCss: false,\n  mixins: {\n    overlayBackground: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/overlayBackground.pcss */ \"./node_modules/raw-loader/index.js!./proModalBox/cssMixins/overlayBackground.pcss\")\n    },\n    modalBackground: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/modalBackground.pcss */ \"./node_modules/raw-loader/index.js!./proModalBox/cssMixins/modalBackground.pcss\")\n    },\n    closeColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/closeColor.pcss */ \"./node_modules/raw-loader/index.js!./proModalBox/cssMixins/closeColor.pcss\")\n    },\n    closeHoverColor: {\n      mixin: __webpack_require__(/*! raw-loader!./cssMixins/closeHoverColor.pcss */ \"./node_modules/raw-loader/index.js!./proModalBox/cssMixins/closeHoverColor.pcss\")\n    }\n  }\n});\n\n//# sourceURL=webpack:///./proModalBox/index.js?");

/***/ }),

/***/ "./proModalBox/settings.json":
/*!***********************************!*\
  !*** ./proModalBox/settings.json ***!
  \***********************************/
/*! exports provided: modalSelector, width, overlayBackground, modalBackground, closeColor, closeHoverColor, designOptions, editFormTab1, metaEditFormTabs, relatedTo, containerFor, customClass, metaCustomId, tag, initChildren, parentWrapper, metaPublicJs, default */
/***/ (function(module) {

eval("module.exports = {\"modalSelector\":{\"type\":\"string\",\"access\":\"public\",\"value\":\".pro-modal-box-1 button\",\"options\":{\"label\":\"Open modal element selector\",\"description\":\"Use this selector to find an element which will trigger to open modal box.\"}},\"width\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"600px\",\"options\":{\"label\":\"Width\",\"description\":\"Enter width in pixels or percentages (Example: 200px).\"}},\"overlayBackground\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"rgba(0,0,0,.7)\",\"options\":{\"label\":\"Overlay background\",\"cssMixin\":{\"mixin\":\"overlayBackground\",\"property\":\"overlayBackground\",\"namePattern\":\"[\\\\da-f]+\"}}},\"modalBackground\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#EEEEEE\",\"options\":{\"label\":\"Modal background\",\"cssMixin\":{\"mixin\":\"modalBackground\",\"property\":\"modalBackground\",\"namePattern\":\"[\\\\da-f]+\"}}},\"closeColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#555555\",\"options\":{\"label\":\"Close button color\",\"cssMixin\":{\"mixin\":\"closeColor\",\"property\":\"closeColor\",\"namePattern\":\"[\\\\da-f]+\"}}},\"closeHoverColor\":{\"type\":\"color\",\"access\":\"public\",\"value\":\"#666666\",\"options\":{\"label\":\"Close button hover color\",\"cssMixin\":{\"mixin\":\"closeHoverColor\",\"property\":\"closeHoverColor\",\"namePattern\":\"[\\\\da-f]+\"}}},\"designOptions\":{\"type\":\"designOptions\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"modalSelector\",\"width\",\"overlayBackground\",\"modalBackground\",\"closeColor\",\"closeHoverColor\",\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptions\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"RootElements\"]},\"containerFor\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"Row\"]},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from Custom CSS option.\"}},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"proModalBox\"},\"initChildren\":{\"access\":\"protected\",\"type\":\"object\",\"value\":[{\"tag\":\"row\"}]},\"parentWrapper\":{\"type\":\"string\",\"access\":\"protected\",\"value\":\"\"},\"metaPublicJs\":{\"access\":\"protected\",\"type\":\"string\",\"value\":{\"libraries\":[{\"libPaths\":\"public/dist/proModalBoxScript.min.js\"}]}}};\n\n//# sourceURL=webpack:///./proModalBox/settings.json?");

/***/ })

},[['./proModalBox/index.js']]]);