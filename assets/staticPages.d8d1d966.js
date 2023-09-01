import{a as W}from"./fetch.08b3c3c4.js";import{E as G,k as X}from"./entry.0ca5719b.js";const F=(B,f)=>{const l=B[f];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((I,S)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(S.bind(null,new Error("Unknown variable dynamic import: "+f)))})};var U={};(function(B){Object.defineProperty(B,"__esModule",{value:!0});var f=function(){return f=Object.assign||function(e){for(var r,u=1,E=arguments.length;u<E;u++){r=arguments[u];for(var _ in r)Object.prototype.hasOwnProperty.call(r,_)&&(e[_]=r[_])}return e},f.apply(this,arguments)};/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var l=/["'&<>]/,I=S;function S(t){var e=""+t,r=l.exec(e);if(!r)return e;var u,E="",_=0,i=0;for(_=r.index;_<e.length;_++){switch(e.charCodeAt(_)){case 34:u="&quot;";break;case 38:u="&amp;";break;case 39:u="&#39;";break;case 60:u="&lt;";break;case 62:u="&gt;";break;default:continue}i!==_&&(E+=e.substring(i,_)),i=_+1,E+=u}return i!==_?E+e.substring(i,_):E}var O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof G<"u"?G:typeof self<"u"?self:{};function A(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function C(t,e){return e={exports:{}},t(e,e.exports),e.exports}var n=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.BLOCKS=void 0,function(r){r.DOCUMENT="document",r.PARAGRAPH="paragraph",r.HEADING_1="heading-1",r.HEADING_2="heading-2",r.HEADING_3="heading-3",r.HEADING_4="heading-4",r.HEADING_5="heading-5",r.HEADING_6="heading-6",r.OL_LIST="ordered-list",r.UL_LIST="unordered-list",r.LIST_ITEM="list-item",r.HR="hr",r.QUOTE="blockquote",r.EMBEDDED_ENTRY="embedded-entry-block",r.EMBEDDED_ASSET="embedded-asset-block",r.EMBEDDED_RESOURCE="embedded-resource-block",r.TABLE="table",r.TABLE_ROW="table-row",r.TABLE_CELL="table-cell",r.TABLE_HEADER_CELL="table-header-cell"}(e.BLOCKS||(e.BLOCKS={}))});A(n),n.BLOCKS;var N=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.INLINES=void 0,function(r){r.HYPERLINK="hyperlink",r.ENTRY_HYPERLINK="entry-hyperlink",r.ASSET_HYPERLINK="asset-hyperlink",r.EMBEDDED_ENTRY="embedded-entry-inline"}(e.INLINES||(e.INLINES={}))});A(N),N.INLINES;var M=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r;(function(u){u.BOLD="bold",u.ITALIC="italic",u.UNDERLINE="underline",u.CODE="code",u.SUPERSCRIPT="superscript",u.SUBSCRIPT="subscript"})(r||(r={})),e.default=r});A(M);var s=C(function(t,e){var r=O&&O.__spreadArray||function(i,D,a){if(a||arguments.length===2)for(var c=0,d=D.length,T;c<d;c++)(T||!(c in D))&&(T||(T=Array.prototype.slice.call(D,0,c)),T[c]=D[c]);return i.concat(T||Array.prototype.slice.call(D))},u=O&&O.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},E;Object.defineProperty(e,"__esModule",{value:!0}),e.V1_MARKS=e.V1_NODE_TYPES=e.TEXT_CONTAINERS=e.HEADINGS=e.CONTAINERS=e.VOID_BLOCKS=e.TABLE_BLOCKS=e.LIST_ITEM_BLOCKS=e.TOP_LEVEL_BLOCKS=void 0;var _=u(M);e.TOP_LEVEL_BLOCKS=[n.BLOCKS.PARAGRAPH,n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6,n.BLOCKS.OL_LIST,n.BLOCKS.UL_LIST,n.BLOCKS.HR,n.BLOCKS.QUOTE,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,n.BLOCKS.EMBEDDED_RESOURCE,n.BLOCKS.TABLE],e.LIST_ITEM_BLOCKS=[n.BLOCKS.PARAGRAPH,n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6,n.BLOCKS.OL_LIST,n.BLOCKS.UL_LIST,n.BLOCKS.HR,n.BLOCKS.QUOTE,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,n.BLOCKS.EMBEDDED_RESOURCE],e.TABLE_BLOCKS=[n.BLOCKS.TABLE,n.BLOCKS.TABLE_ROW,n.BLOCKS.TABLE_CELL,n.BLOCKS.TABLE_HEADER_CELL],e.VOID_BLOCKS=[n.BLOCKS.HR,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,n.BLOCKS.EMBEDDED_RESOURCE],e.CONTAINERS=(E={},E[n.BLOCKS.OL_LIST]=[n.BLOCKS.LIST_ITEM],E[n.BLOCKS.UL_LIST]=[n.BLOCKS.LIST_ITEM],E[n.BLOCKS.LIST_ITEM]=e.LIST_ITEM_BLOCKS,E[n.BLOCKS.QUOTE]=[n.BLOCKS.PARAGRAPH],E[n.BLOCKS.TABLE]=[n.BLOCKS.TABLE_ROW],E[n.BLOCKS.TABLE_ROW]=[n.BLOCKS.TABLE_CELL,n.BLOCKS.TABLE_HEADER_CELL],E[n.BLOCKS.TABLE_CELL]=[n.BLOCKS.PARAGRAPH],E[n.BLOCKS.TABLE_HEADER_CELL]=[n.BLOCKS.PARAGRAPH],E),e.HEADINGS=[n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6],e.TEXT_CONTAINERS=r([n.BLOCKS.PARAGRAPH],e.HEADINGS,!0),e.V1_NODE_TYPES=[n.BLOCKS.DOCUMENT,n.BLOCKS.PARAGRAPH,n.BLOCKS.HEADING_1,n.BLOCKS.HEADING_2,n.BLOCKS.HEADING_3,n.BLOCKS.HEADING_4,n.BLOCKS.HEADING_5,n.BLOCKS.HEADING_6,n.BLOCKS.OL_LIST,n.BLOCKS.UL_LIST,n.BLOCKS.LIST_ITEM,n.BLOCKS.HR,n.BLOCKS.QUOTE,n.BLOCKS.EMBEDDED_ENTRY,n.BLOCKS.EMBEDDED_ASSET,N.INLINES.HYPERLINK,N.INLINES.ENTRY_HYPERLINK,N.INLINES.ASSET_HYPERLINK,N.INLINES.EMBEDDED_ENTRY,"text"],e.V1_MARKS=[_.default.BOLD,_.default.CODE,_.default.ITALIC,_.default.UNDERLINE]});A(s),s.V1_MARKS,s.V1_NODE_TYPES,s.TEXT_CONTAINERS,s.HEADINGS,s.CONTAINERS,s.VOID_BLOCKS,s.TABLE_BLOCKS,s.LIST_ITEM_BLOCKS,s.TOP_LEVEL_BLOCKS;var y=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0})});A(y);var h=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0})});A(h);var g=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r={nodeType:n.BLOCKS.DOCUMENT,data:{},content:[{nodeType:n.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};e.default=r});A(g);var b=C(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.isText=e.isBlock=e.isInline=void 0;function r(i,D){for(var a=0,c=Object.keys(i);a<c.length;a++){var d=c[a];if(D===i[d])return!0}return!1}function u(i){return r(N.INLINES,i.nodeType)}e.isInline=u;function E(i){return r(n.BLOCKS,i.nodeType)}e.isBlock=E;function _(i){return i.nodeType==="text"}e.isText=_});A(b),b.isText,b.isBlock,b.isInline;var H=C(function(t,e){var r=O&&O.__createBinding||(Object.create?function(a,c,d,T){T===void 0&&(T=d);var P=Object.getOwnPropertyDescriptor(c,d);(!P||("get"in P?!c.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return c[d]}}),Object.defineProperty(a,T,P)}:function(a,c,d,T){T===void 0&&(T=d),a[T]=c[d]}),u=O&&O.__setModuleDefault||(Object.create?function(a,c){Object.defineProperty(a,"default",{enumerable:!0,value:c})}:function(a,c){a.default=c}),E=O&&O.__exportStar||function(a,c){for(var d in a)d!=="default"&&!Object.prototype.hasOwnProperty.call(c,d)&&r(c,a,d)},_=O&&O.__importStar||function(a){if(a&&a.__esModule)return a;var c={};if(a!=null)for(var d in a)d!=="default"&&Object.prototype.hasOwnProperty.call(a,d)&&r(c,a,d);return u(c,a),c},i=O&&O.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.helpers=e.EMPTY_DOCUMENT=e.MARKS=e.INLINES=e.BLOCKS=void 0,Object.defineProperty(e,"BLOCKS",{enumerable:!0,get:function(){return n.BLOCKS}}),Object.defineProperty(e,"INLINES",{enumerable:!0,get:function(){return N.INLINES}}),Object.defineProperty(e,"MARKS",{enumerable:!0,get:function(){return i(M).default}}),E(s,e),E(y,e),E(h,e),Object.defineProperty(e,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return i(g).default}});var D=_(b);e.helpers=D});A(H);var j=H.helpers;H.EMPTY_DOCUMENT;var v=H.MARKS,R=H.INLINES,L=H.BLOCKS,o,K,k=function(t){return'"'.concat(t.replace(/"/g,"&quot;"),'"')},w=(o={},o[L.PARAGRAPH]=function(t,e){return"<p>".concat(e(t.content),"</p>")},o[L.HEADING_1]=function(t,e){return"<h1>".concat(e(t.content),"</h1>")},o[L.HEADING_2]=function(t,e){return"<h2>".concat(e(t.content),"</h2>")},o[L.HEADING_3]=function(t,e){return"<h3>".concat(e(t.content),"</h3>")},o[L.HEADING_4]=function(t,e){return"<h4>".concat(e(t.content),"</h4>")},o[L.HEADING_5]=function(t,e){return"<h5>".concat(e(t.content),"</h5>")},o[L.HEADING_6]=function(t,e){return"<h6>".concat(e(t.content),"</h6>")},o[L.EMBEDDED_ENTRY]=function(t,e){return"<div>".concat(e(t.content),"</div>")},o[L.EMBEDDED_RESOURCE]=function(t,e){return"<div>".concat(e(t.content),"</div>")},o[L.UL_LIST]=function(t,e){return"<ul>".concat(e(t.content),"</ul>")},o[L.OL_LIST]=function(t,e){return"<ol>".concat(e(t.content),"</ol>")},o[L.LIST_ITEM]=function(t,e){return"<li>".concat(e(t.content),"</li>")},o[L.QUOTE]=function(t,e){return"<blockquote>".concat(e(t.content),"</blockquote>")},o[L.HR]=function(){return"<hr/>"},o[L.TABLE]=function(t,e){return"<table>".concat(e(t.content),"</table>")},o[L.TABLE_ROW]=function(t,e){return"<tr>".concat(e(t.content),"</tr>")},o[L.TABLE_HEADER_CELL]=function(t,e){return"<th>".concat(e(t.content),"</th>")},o[L.TABLE_CELL]=function(t,e){return"<td>".concat(e(t.content),"</td>")},o[R.ASSET_HYPERLINK]=function(t){return p(R.ASSET_HYPERLINK,t)},o[R.ENTRY_HYPERLINK]=function(t){return p(R.ENTRY_HYPERLINK,t)},o[R.EMBEDDED_ENTRY]=function(t){return p(R.EMBEDDED_ENTRY,t)},o[R.HYPERLINK]=function(t,e){var r=typeof t.data.uri=="string"?t.data.uri:"";return"<a href=".concat(k(r),">").concat(e(t.content),"</a>")},o),V=(K={},K[v.BOLD]=function(t){return"<b>".concat(t,"</b>")},K[v.ITALIC]=function(t){return"<i>".concat(t,"</i>")},K[v.UNDERLINE]=function(t){return"<u>".concat(t,"</u>")},K[v.CODE]=function(t){return"<code>".concat(t,"</code>")},K[v.SUPERSCRIPT]=function(t){return"<sup>".concat(t,"</sup>")},K[v.SUBSCRIPT]=function(t){return"<sub>".concat(t,"</sub>")},K),p=function(t,e){return"<span>type: ".concat(I(t)," id: ").concat(I(e.data.target.sys.id),"</span>")};function q(t,e){return e===void 0&&(e={}),!t||!t.content?"":m(t.content,{renderNode:f(f({},w),e.renderNode),renderMark:f(f({},V),e.renderMark)})}function m(t,e){var r=e.renderNode,u=e.renderMark;return t.map(function(E){return Q(E,{renderNode:r,renderMark:u})}).join("")}function Q(t,e){var r=e.renderNode,u=e.renderMark;if(j.isText(t)){var E=I(t.value);return t.marks.length>0?t.marks.reduce(function(i,D){return u[D.type]?u[D.type](i):i},E):E}else{var _=function(i){return m(i,{renderMark:u,renderNode:r})};return!t.nodeType||!r[t.nodeType]?"":r[t.nodeType](t,_)}}B.documentToHtmlString=q})(U);const J=X("staticPages",{state:()=>({staticPages:[],loaded:!1}),getters:{getStaticPageByType:B=>f=>B.staticPages.find(l=>l.type===f)},actions:{async fetchStaticPagesContent(){this.loaded||await W("staticPage").then(B=>{this.staticPages=B.items.map(f=>({title:f.fields.pageTitle,description:f.fields.pageDescription,type:f.fields.type,sections:Y(f.fields.cardSection)})),this.loaded=!0})}}});function Y(B){return B.map(l=>{const I={};return Object.keys(l.fields).forEach(function(S,O){l.fields[S].nodeType&&l.fields[S].nodeType==="document"?I[S]=U.documentToHtmlString(l.fields[S]):l.fields[S].sys&&l.fields[S].sys.type==="Asset"?I[S]=l.fields[S].fields.file.url:S==="cards"?I[S]=Y(l.fields[S]):I[S]=l.fields[S]}),I})}export{F as _,J as u};
