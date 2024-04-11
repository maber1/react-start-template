"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[682],{"./src/components/RangeSlider/RangeSlider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RangeSlider_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),RangeSlider=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/RangeSlider/RangeSlider.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(RangeSlider.Z,options);RangeSlider.Z&&RangeSlider.Z.locals&&RangeSlider.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var RangeSlider_RangeSlider_RangeSlider=function RangeSlider(_ref){var min=_ref.min,max=_ref.max,value=_ref.value,sliderContainerRef=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)({value:0|value,roundedValue:0|value}),2),position=_useState2[0],setPosition=_useState2[1],calcPosition=function calcPosition(event){var rect=sliderContainerRef.current.getBoundingClientRect(),percent=(event.clientX-rect.left)/rect.width,totalPos=Math.min(max,Math.max(min,min+percent*(max-min)));setPosition({value:(totalPos-min)/(max-min)*100,roundedValue:Math.round(totalPos)})},destroyHandle=function destroyHandle(){document.removeEventListener("mousemove",calcPosition),document.removeEventListener("mousedown",calcPosition),document.removeEventListener("mouseup",destroyHandle)};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:"range-slider",children:[min,(0,jsx_runtime.jsxs)("div",{className:"range-slider__container",onMouseDown:function handleMouseDown(){document.addEventListener("mousemove",calcPosition),document.addEventListener("mousedown",calcPosition),document.addEventListener("mouseup",destroyHandle)},ref:sliderContainerRef,children:[(0,jsx_runtime.jsx)("div",{className:"range-slider__progress-line",style:{width:"".concat(position.value,"%")}}),(0,jsx_runtime.jsx)("div",{className:"range-slider__control",style:{left:"".concat(position.value,"%")},children:position.roundedValue})]}),max]})})};const components_RangeSlider_RangeSlider=RangeSlider_RangeSlider_RangeSlider;try{RangeSlider_RangeSlider_RangeSlider.displayName="RangeSlider",RangeSlider_RangeSlider_RangeSlider.__docgenInfo={description:"",displayName:"RangeSlider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RangeSlider/RangeSlider.tsx#RangeSlider"]={docgenInfo:RangeSlider_RangeSlider_RangeSlider.__docgenInfo,name:"RangeSlider",path:"src/components/RangeSlider/RangeSlider.tsx#RangeSlider"})}catch(__react_docgen_typescript_loader_error){}const components_RangeSlider=components_RangeSlider_RangeSlider;const RangeSlider_stories={title:"Shop/RangeSlider",component:components_RangeSlider,tags:["autodocs"]};var Default={args:{min:10,max:150,value:30},render:function render(_ref){var args=Object.assign({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,jsx_runtime.jsx)(components_RangeSlider,{min:args.min,max:args.max,value:args.value})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    min: 10,\n    max: 150,\n    value: 30\n  },\n  render: ({\n    ...args\n  }) => <RangeSlider min={args.min} max={args.max} value={args.value} />\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/RangeSlider/RangeSlider.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".range-slider{display:flex;align-items:center;flex-wrap:nowrap;user-select:none}.range-slider__container{width:100%;height:10px;border:1px solid #dadada;position:relative;cursor:pointer;box-shadow:inset 2px 2px 5px 0 rgba(187,187,187,.3);margin:10px 20px}.range-slider__control{position:absolute;top:50%;display:flex;justify-content:center;align-items:center;min-width:20px;height:20px;border-radius:3px;background-color:#007bff;transform:translate(-50%, -50%);color:#fff;padding:0 3px;font-size:12px;font-weight:bold}.range-slider__progress-line{position:absolute;top:0;bottom:0;background-color:#5fa6ff}","",{version:3,sources:["webpack://./src/components/RangeSlider/RangeSlider.scss"],names:[],mappings:"AAAA,cACE,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CAEA,yBACE,UAAA,CACA,WAAA,CACA,wBAAA,CACA,iBAAA,CACA,cAAA,CACA,mDAAA,CACA,gBAAA,CAGF,uBACE,iBAAA,CACA,OAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,WAAA,CACA,iBAAA,CACA,wBAAA,CACA,+BAAA,CACA,UAAA,CACA,aAAA,CACA,cAAA,CACA,gBAAA,CAEF,6BACE,iBAAA,CACA,KAAA,CACA,QAAA,CACA,wBAAA",sourcesContent:[".range-slider {\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  user-select: none;\n\n  &__container {\n    width: 100%;//500px;\n    height: 10px;\n    border: 1px solid #dadada;\n    position: relative;\n    cursor: pointer;\n    box-shadow: inset 2px 2px 5px 0 rgba(187, 187, 187, 0.3);\n    margin: 10px 20px;\n  }\n\n  &__control {\n    position: absolute;\n    top: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 20px;\n    height: 20px;\n    border-radius: 3px;\n    background-color: #007bff;\n    transform: translate(-50%, -50%);\n    color: #ffffff;\n    padding: 0 3px;\n    font-size: 12px;\n    font-weight: bold;\n  }\n  &__progress-line {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    background-color: #5fa6ff;\n  }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"range-slider":"range-slider","range-slider__container":"range-slider__container","range-slider__control":"range-slider__control","range-slider__progress-line":"range-slider__progress-line"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);