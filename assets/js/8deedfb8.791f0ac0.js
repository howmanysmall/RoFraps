"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(d,".").concat(f)]||s[f]||c[f]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26437:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={},i="RoFraps Changelog",o={type:"mdx",permalink:"/RoFraps/CHANGELOG",source:"@site/pages/CHANGELOG.md",title:"RoFraps Changelog",description:"All notable changes to this project will be documented in this file.",frontMatter:{}},d=[{value:"1.2.2 - 2023-02-17",id:"122---2023-02-17",level:2},{value:"Fixed",id:"fixed",level:3},{value:"1.2.1 - 2023-02-17",id:"121---2023-02-17",level:2},{value:"Fixed",id:"fixed-1",level:3},{value:"1.2.0 - 2023-02-17",id:"120---2023-02-17",level:2},{value:"Added",id:"added",level:3},{value:"1.1.0 - 2023-02-17",id:"110---2023-02-17",level:2},{value:"Added",id:"added-1",level:3},{value:"1.0.0 - 2023-02-17",id:"100---2023-02-17",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rofraps-changelog"},"RoFraps Changelog"),(0,a.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,a.kt)("p",null,"The format is based on ",(0,a.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),",\nand this project adheres to ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,a.kt)("h2",{id:"122---2023-02-17"},"1.2.2 - 2023-02-17"),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the CircularBuffer's array being prefilled.")),(0,a.kt)("h2",{id:"121---2023-02-17"},"1.2.1 - 2023-02-17"),(0,a.kt)("h3",{id:"fixed-1"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the bug where after the first update rate is met, the ",(0,a.kt)("inlineCode",{parentName:"li"},"DataUpdated")," event is fired every frame.")),(0,a.kt)("h2",{id:"120---2023-02-17"},"1.2.0 - 2023-02-17"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added more customization options to ",(0,a.kt)("inlineCode",{parentName:"li"},"MountGui"),".")),(0,a.kt)("h2",{id:"110---2023-02-17"},"1.1.0 - 2023-02-17"),(0,a.kt)("h3",{id:"added-1"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"MountGui")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"UnmountGui"),", which are used to render an information gui.")),(0,a.kt)("h2",{id:"100---2023-02-17"},"1.0.0 - 2023-02-17"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initial release.")))}u.isMDXComponent=!0}}]);