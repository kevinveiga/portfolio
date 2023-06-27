"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[6434],{"./src/storybook/components/form/inputCustom.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputCustomDefault:()=>InputCustomDefault,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _InputCustomDefault$p,_InputCustomDefault$p2,_InputCustomDefault$p3,_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_yup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/yup.ts"),_components_form_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/form.tsx"),_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/form/formCustom.tsx"),_components_form_formStyled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/form/formStyled.ts"),_styles_layout__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/styles/layout.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function InputCustomWithHooks(){var validationSchema=_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.object().shape({cep:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.string().min(9).required(),cpf:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.string().min(14).required(),currency:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.string().required(),email:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.string().email().required(),name:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.string().required(),number:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.number().required(),phone:_helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.string().min(14).max(15).required()});return __jsx(_components_form_formStyled__WEBPACK_IMPORTED_MODULE_6__.tN,{initialData:{cep:"",cpf:"",currency:"",email:"",name:"",number:"",phone:""},onSubmit:function handleSubmit(formData){var submit=function(){var _ref=(0,_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__.Z)(_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark((function _callee(){return _home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,validationSchema.validate(formData,{abortEarly:!1}).catch((function(yupError){if(yupError instanceof _helpers_yup__WEBPACK_IMPORTED_MODULE_3__.Z.ValidationError){var errorMessages={};yupError.inner.forEach((function(item){errorMessages[item.path]=item.message}))}}));case 2:case"end":return _context.stop()}}),_callee)})));return function submit(){return _ref.apply(this,arguments)}}();submit().catch((function(){return null}))}},__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Cep:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__.u9,{idInput:"id-cep",name:"cep",validationSchema}),__jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.LZ,null),__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Cpf:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__._,{idInput:"id-cpf",name:"cpf",validationSchema}),__jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.LZ,null),__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Currency:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__.Of,{idInput:"id-currency",name:"currency",validationSchema}),__jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.LZ,null),__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Email:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__.j7,{idInput:"id-email",name:"email",validationSchema}),__jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.LZ,null),__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Name:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__.ff,{idInput:"id-name",name:"name",validationSchema}),__jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.LZ,null),__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Number:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__.Rn,{idInput:"id-number",name:"number",validationSchema}),__jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_7__.LZ,null),__jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_4__.__,{text:"Phone:"}),__jsx(_components_form_formCustom__WEBPACK_IMPORTED_MODULE_5__.Z6,{idInput:"id-phone",name:"phone",validationSchema}))}InputCustomWithHooks.displayName="InputCustomWithHooks";const __WEBPACK_DEFAULT_EXPORT__={component:_components_form_form__WEBPACK_IMPORTED_MODULE_4__.II,title:"Components/Form"};var InputCustomDefault={render:function render(){return __jsx(InputCustomWithHooks,null)}};InputCustomDefault.parameters=_objectSpread(_objectSpread({},InputCustomDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InputCustomDefault$p=InputCustomDefault.parameters)||void 0===_InputCustomDefault$p?void 0:_InputCustomDefault$p.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <InputCustomWithHooks />\n}"},null===(_InputCustomDefault$p2=InputCustomDefault.parameters)||void 0===_InputCustomDefault$p2||null===(_InputCustomDefault$p3=_InputCustomDefault$p2.docs)||void 0===_InputCustomDefault$p3?void 0:_InputCustomDefault$p3.source)})})}}]);