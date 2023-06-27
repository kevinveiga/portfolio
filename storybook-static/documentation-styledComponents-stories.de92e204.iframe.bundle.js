"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9465],{"./src/storybook/documentation/styledComponents.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StyledComponents:()=>StyledComponents,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _StyledComponents$par,_StyledComponents$par2,_StyledComponents$par3,_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),_styles_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/storybook.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_kevinmveiga_Documents_repositories_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function StyledComponentsWithHooks(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Vt,null,"Styled Components"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Organização"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Os Styled Components de uso geral estão na pasta "src/styles".'),__jsx("li",null,"Os Styled Components específicos do componente devem estar dentro da mesma pasta deste componente.")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Padrões"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,'Em nomes de arquivos e das declarações de Styled Components dentro da pasta "src/components", deve ser incluído o nome "Styled" no final. Ex:')),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"Nome do arquivo: headerStyled.tsx\n------------------------------\nexport const HeaderStyled = styled.header<IHeader>`\n  background-color: ${({ theme }): string => theme.bgColor?.primary};\n  border-bottom: 1px solid ${({ theme }): string => theme.borderColor?.secondary};\n  height: auto;\n  width: 100%;\n  z-index: 0;\n`;")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Quando se deseja definir um valor default de uma propriedade que já está sendo usada pelo Styled System, colocar undefined no final da condição. Ex:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"export const Spacer = styled.div<IStyledSystem>`\n  ${layout};\n\n  ${({ height }): number | string | undefined => (height === undefined\n    ? `height: ${variable.space.spacingSM}`\n    : undefined)};")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"No uso de uma propriedade customizada, colocar undefined no final da condição. Ex:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"${({ align }): string | undefined =>\n  align === 'center'\n    ? 'margin-left: auto; margin-right: auto; text-align: center;'\n    : align === 'right'\n    ? 'margin-left: auto; margin-right: 0; text-align: right;'\n    : undefined};")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Sempre dar preferência para variáveis ou theme como valores nos estilos. Ex:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.borderColor.secondary};\ncolor: ${({ color, theme }): string => color || theme.textColor.secondary};\ntransition: color ${variable.animation.transition};")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Exemplos"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Com uma propriedade customizada lineColor:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"const title = css<ITextStyled>`\n...\n\n  # Tipagem de retorno para usar estilo dentro da função\n  ${({ lineColor }): any =>\n    lineColor ?\n      css`\n        &::after {\n          background-color: ${lineColor};\n          ...\n        }\n      ` : undefined};\n`;")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Usando as funções de gradiente:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"import { gradientDirection } from '@/styles/function';\n...\n\nexport const DivComGradiente = styled.div`\n  height: 50px;\n  width: 100px;\n\n  ${gradientDirection({\n    colorEnd: variable.color.blackTransparent5,\n    colorEndPercent: '100%',\n    colorStart: variable.color.blackTransparent1,\n    colorStartPercent: '0',\n    deg: '180deg'\n  })};\n`;")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Com responsividade em propriedade do Styled Components:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"<MenuItemsStyled active={active} display={{ d: 'block', md: 'none' }}>\n------------------------------\nexport const MenuItemsStyled = styled.nav<IActiveStyled>`\n  ${display}")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Com responsividade dentro do estilo:")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Bf,null,__jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Z,{language:"javascript"},"export const LayoutAdminLeftStyled = styled.div<IActiveStyled>`\n  ${flexbox};\n  ${layout};\n  ${space};\n\n  background-color: ${({ theme }): string => theme.bgColor?.secondary};\n  ${({ flexDirection }): string | undefined => (flexDirection === undefined ? 'flex-direction: column' : undef\n  height: 100vh;\n  transition: flex ${variable.animation.transitionFastCubic}, left ${variable.animation.transitionFast};\n  z-index: 1;\n\n  @media (max-width: ${variable.breakpoint.md}) {\n    display: block;\n    height: 100vh;\n    left: ${({ active }): string => (active ? '-250px' : '0')};\n    position: fixed;\n    top: 0;\n    width: 250px;\n  }\n\n  @media (min-width: ${variable.breakpoint.md}) {\n    display: flex;\n    flex: ${({ active }): string => (active ? '0 0 58px' : '0 0 250px')};\n  }\n`;")),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.uM,null,"Referências"),__jsx(_styles_storybook__WEBPACK_IMPORTED_MODULE_2__.Sh,null,__jsx("li",null,"Styled Components."," ",__jsx("a",{href:"https://www.styled-components.com/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled Components - Básico."," ",__jsx("a",{href:"https://blog.getty.io/desenvolvendo-apps-com-styled-components-85ec6880b194",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled Components - Avançado."," ",__jsx("a",{href:"https://www.robinwieruch.de/react-styled-components/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled Components - Melhores práticas do SCSS."," ",__jsx("a",{href:"https://blog.pagepro.co/2018/11/06/moving-best-scss-practices-to-styled-components-part-1/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled Components - Do CSS para Styled Components."," ",__jsx("a",{href:"https://jsramblings.com/2017/10/29/migrating-to-styled-components-cheatsheet.html",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled System."," ",__jsx("a",{href:"https://styled-system.com/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled System - API."," ",__jsx("a",{href:"https://styled-system.com/api/",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled System - Tabela de referência."," ",__jsx("a",{href:"https://styled-system.com/table",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled System - Melhores práticas."," ",__jsx("a",{href:"https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee",rel:"noopener noreferrer",target:"_blank"},"(link)")),__jsx("li",null,"Styled System - Responsivo."," ",__jsx("a",{href:"hhttps://styled-system.com/responsive-styles",rel:"noopener noreferrer",target:"_blank"},"(link)"))))}const __WEBPACK_DEFAULT_EXPORT__={title:"Documentation/Styled Components"};var StyledComponents={render:function render(){return __jsx(StyledComponentsWithHooks,null)}};StyledComponents.parameters=_objectSpread(_objectSpread({},StyledComponents.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StyledComponents$par=StyledComponents.parameters)||void 0===_StyledComponents$par?void 0:_StyledComponents$par.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <StyledComponentsWithHooks />\n}"},null===(_StyledComponents$par2=StyledComponents.parameters)||void 0===_StyledComponents$par2||null===(_StyledComponents$par3=_StyledComponents$par2.docs)||void 0===_StyledComponents$par3?void 0:_StyledComponents$par3.source)})})},"./src/styles/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bf:()=>BoxDocs,NE:()=>Subtitle2Docs,Sh:()=>ListDocs,Vt:()=>Title1Docs,bM:()=>SpacerDocs,kO:()=>Subtitle1Docs,pR:()=>StrongDocs,uM:()=>Title2Docs,uT:()=>BoxColor});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styles_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/variable.ts"),BoxColor=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-0"})(["",";",";"," background-color:",";border-color:",";border-radius:",";border-style:solid;border-width:1px;display:flex;",";",";padding:",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref){var backgroundColor=_ref.backgroundColor,theme=_ref.theme;return backgroundColor||theme.bgColor.tertiary}),(function(_ref2){return _ref2.borderColor||"unset"}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref3){return void 0===_ref3.height?"height: 50px":void 0}),(function(_ref4){return void 0===_ref4.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref5){var rowGap=_ref5.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0}),(function(_ref6){return void 0===_ref6.width?"width: 100%":void 0})),BoxDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-1"})(["",";",";"," background-color:",";border-radius:",";",";display:flex;",";padding:",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ,styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh,(function(_ref7){var backgroundColor=_ref7.backgroundColor,theme=_ref7.theme;return backgroundColor||theme.bgColor.tertiary}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.layout.borderRadiusPrimary,(function(_ref8){var columnGap=_ref8.columnGap;return columnGap?"column-gap: ".concat(columnGap):void 0}),(function(_ref9){return void 0===_ref9.mb?"margin-bottom: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM,(function(_ref10){var rowGap=_ref10.rowGap;return rowGap?"row-gap: ".concat(rowGap):void 0})),ListDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.ul.withConfig({componentId:"sc-60e7xr-2"})(["list-style-type:disc;margin-bottom:",";padding:0 ",";"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS,_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM),SpacerDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({componentId:"sc-60e7xr-3"})(["",";",";",";"],styled_system__WEBPACK_IMPORTED_MODULE_0__.bK,(function(_ref11){return void 0===_ref11.height?"height: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD):void 0}),(function(_ref12){return void 0===_ref12.width?"width: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM):void 0})),StrongDocs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.strong.withConfig({componentId:"sc-60e7xr-4"})(["color:",";font-weight:700;"],_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandTertiary),Title1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1.withConfig({componentId:"sc-60e7xr-5"})(["color:",";",";",";",";@media (min-width:","){",";",";}"],(function(_ref13){return _ref13.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.orange}),(function(_ref14){return void 0===_ref14.fontSize?"font-size: 22px":void 0}),(function(_ref15){return void 0===_ref15.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref16){return void 0===_ref16.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref17){return void 0===_ref17.fontSize?"font-size: 28px":void 0}),(function(_ref18){return void 0===_ref18.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingMD," 0"):void 0})),Title2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2.withConfig({componentId:"sc-60e7xr-6"})(["color:",";",";",";",";@media (min-width:","){",";}"],(function(_ref19){return _ref19.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.blue}),(function(_ref20){return void 0===_ref20.fontSize?"font-size: 16px":void 0}),(function(_ref21){return void 0===_ref21.fontWeight?"font-weight: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.text.fontWeightBold):void 0}),(function(_ref22){return void 0===_ref22.my?"margin: ".concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingSM," 0 ").concat(_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.space.spacingXS," 0"):void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref23){return void 0===_ref23.fontSize?"font-size: 18px":void 0})),Subtitle1Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-7"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref24){return _ref24.color||_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.color.brandSecondary}),(function(_ref25){return void 0===_ref25.fontSize?"font-size: 14px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref26){return void 0===_ref26.fontSize?"font-size: 16px":void 0})),Subtitle2Docs=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p.withConfig({componentId:"sc-60e7xr-8"})(["color:",";",";@media (min-width:","){",";}"],(function(_ref27){var color=_ref27.color,theme=_ref27.theme;return color||theme.textColor.secondary}),(function(_ref28){return void 0===_ref28.fontSize?"font-size: 12px":void 0}),_styles_variable__WEBPACK_IMPORTED_MODULE_1__.V.breakpoint.md,(function(_ref29){return void 0===_ref29.fontSize?"font-size: 14px":void 0}))}}]);