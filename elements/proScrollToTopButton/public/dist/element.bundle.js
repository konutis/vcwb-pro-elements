(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[1],{"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/background.pcss":function(o,t){o.exports=".pro-scroll-to-top-button-background--$selector {\n  background-color: $background;\n}"},"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/hoverBackground.pcss":function(o,t){o.exports=".pro-scroll-to-top-button-hover-background--$selector:hover {\n  background-color: $hoverBackground;\n}"},"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconColor.pcss":function(o,t){o.exports=".pro-scroll-to-top-button-icon-color--$selector .pro-scroll-to-top-button-icon path {\n  fill: $iconColor;\n}"},"./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconHoverColor.pcss":function(o,t){o.exports=".pro-scroll-to-top-button-icon-hover-color--$selector:hover .pro-scroll-to-top-button-icon path {\n  fill: $iconHoverColor;\n}"},"./node_modules/raw-loader/index.js!./proScrollToTopButton/editor.css":function(o,t){o.exports="\n"},"./node_modules/raw-loader/index.js!./proScrollToTopButton/styles.css":function(o,t){o.exports='.pro-scroll-to-top-button-container {\n  position: fixed;\n\n  bottom: -100%;\n  opacity: 0;\n  z-index: -99999;\n  visibility: hidden;\n  transition: opacity .5s, background-color .2s;\n}\n\n.pro-scroll-to-top-button-container.vce {\n  margin: 0 10px 10px 10px;\n}\n\n.pro-scroll-to-top-button-shape--rounded {\n  border-radius: 5px;\n}\n\n.pro-scroll-to-top-button-align--left {\n  left: 0;\n}\n\n.pro-scroll-to-top-button-align--right {\n  right: 0;\n}\n\n.pro-scroll-to-top-button-container[data-vcv-pro-scroll-button-visible="true"] {\n  bottom: 0;\n  z-index: 99999;\n  opacity: 1;\n  visibility: visible;\n}\n\n.pro-scroll-to-top-button-container button.pro-scroll-to-top-button {\n  border: 0;\n  box-shadow: none;\n  text-decoration: none;\n  background: transparent;\n  padding: 9px;\n}\n\n.pro-scroll-to-top-button-container button.pro-scroll-to-top-button:focus {\n  outline: none;\n}\n\n.pro-scroll-to-top-button-icon {\n  vertical-align: middle;\n}\n\n.pro-scroll-to-top-button-icon path {\n  transition: fill .2s;\n}'},"./proScrollToTopButton/component.js":function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(e("./node_modules/babel-runtime/helpers/extends.js")),r=p(e("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),l=p(e("./node_modules/babel-runtime/helpers/classCallCheck.js")),s=p(e("./node_modules/babel-runtime/helpers/createClass.js")),i=p(e("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),c=p(e("./node_modules/babel-runtime/helpers/inherits.js")),a=p(e("./node_modules/react/index.js"));function p(o){return o&&o.__esModule?o:{default:o}}var u=function(o){function t(){return(0,l.default)(this,t),(0,i.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,c.default)(t,o),(0,s.default)(t,[{key:"render",value:function(){var o=this.props,t=o.id,e=o.atts,r=o.editor,l=e.shape,s=e.visibilityOffset,i=e.alignment,c=e.customClass,p=e.metaCustomId,u="pro-scroll-to-top-button-container vce",d={};c&&(u=+(" "+c)),p&&(d.id=p);var b=this.getMixinData("background");b&&(u+=" pro-scroll-to-top-button-background--"+b.selector),(b=this.getMixinData("hoverBackground"))&&(u+=" pro-scroll-to-top-button-hover-background--"+b.selector),(b=this.getMixinData("iconColor"))&&(u+=" pro-scroll-to-top-button-icon-color--"+b.selector),(b=this.getMixinData("iconHoverColor"))&&(u+=" pro-scroll-to-top-button-icon-hover-color--"+b.selector),"rounded"===l&&(u+=" pro-scroll-to-top-button-shape--rounded"),i&&(u+=" pro-scroll-to-top-button-align--"+i);var m={"data-pro-scroll-to-top-visibility-offset":s},v=this.applyDO("margin animation border background"),g=this.applyDO("padding");return a.default.createElement("div",(0,n.default)({className:u},r,{id:"el-"+t},v,m),a.default.createElement("button",(0,n.default)({className:"pro-scroll-to-top-button"},d,g,{title:"Scroll To Top"}),a.default.createElement("svg",{className:"pro-scroll-to-top-button-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},a.default.createElement("path",{d:"M16 6.303l-16.162 16.162 3.232 3.232 12.93-12.93 12.93 12.93 3.233-3.233z"}))))}}]),t}(p(e("./node_modules/vc-cake/index.js")).default.getService("api").elementComponent);t.default=u},"./proScrollToTopButton/index.js":function(o,t,e){"use strict";var n=l(e("./node_modules/vc-cake/index.js")),r=l(e("./proScrollToTopButton/component.js"));function l(o){return o&&o.__esModule?o:{default:o}}(0,n.default.getService("cook").add)(e("./proScrollToTopButton/settings.json"),function(o){o.add(r.default)},{css:e("./node_modules/raw-loader/index.js!./proScrollToTopButton/styles.css"),editorCss:e("./node_modules/raw-loader/index.js!./proScrollToTopButton/editor.css"),mixins:{background:{mixin:e("./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/background.pcss")},hoverBackground:{mixin:e("./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/hoverBackground.pcss")},iconColor:{mixin:e("./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconColor.pcss")},iconHoverColor:{mixin:e("./node_modules/raw-loader/index.js!./proScrollToTopButton/cssMixins/iconHoverColor.pcss")}}})},"./proScrollToTopButton/settings.json":function(o){o.exports={background:{type:"color",access:"public",value:"rgba(50,50,50,.6)",options:{label:"Button background",cssMixin:{mixin:"background",property:"background",namePattern:"[\\da-f]+"}}},hoverBackground:{type:"color",access:"public",value:"rgba(50,50,50,.8)",options:{label:"Button hover background",cssMixin:{mixin:"hoverBackground",property:"hoverBackground",namePattern:"[\\da-f]+"}}},iconColor:{type:"color",access:"public",value:"rgba(255,255,255, .7)",options:{label:"Icon color",cssMixin:{mixin:"iconColor",property:"iconColor",namePattern:"[\\da-f]+"}}},iconHoverColor:{type:"color",access:"public",value:"rgba(255,255,255, .9)",options:{label:"Icon hover color",cssMixin:{mixin:"iconHoverColor",property:"iconHoverColor",namePattern:"[\\da-f]+"}}},shape:{type:"buttonGroup",access:"public",value:"rounded",options:{label:"Button shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"}]}},visibilityOffset:{type:"number",access:"public",value:"100",options:{min:"0",label:"Visibility offset",description:"Enter visibility offset when button will become visible in px."}},alignment:{type:"buttonGroup",access:"public",value:"right",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["visibilityOffset","background","hoverBackground","iconColor","iconHoverColor","shape","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["RootElements"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},tag:{access:"protected",type:"string",value:"proScrollToTopButton"},parentWrapper:{type:"string",access:"protected",value:""},metaPublicJs:{access:"protected",type:"string",value:{libraries:[{libPaths:"public/dist/proScrollToTopScript.min.js"}]}}}}},[["./proScrollToTopButton/index.js"]]]);