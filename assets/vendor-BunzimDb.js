import{r as _}from"./react-vendor-QBYUYYrz.js";var z={exports:{}},F={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z;function U(){return Z||(Z=1,(function(r){function o(e,n){var t=e.length;e.push(n);e:for(;0<t;){var a=t-1>>>1,i=e[a];if(0<d(i,n))e[a]=n,e[t]=i,t=a;else break e}}function l(e){return e.length===0?null:e[0]}function f(e){if(e.length===0)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var a=0,i=e.length,I=i>>>1;a<I;){var p=2*(a+1)-1,N=e[p],m=p+1,A=e[m];if(0>d(N,t))m<i&&0>d(A,N)?(e[a]=A,e[m]=t,a=m):(e[a]=N,e[p]=t,a=p);else if(m<i&&0>d(A,t))e[a]=A,e[m]=t,a=m;else break e}}return n}function d(e,n){var t=e.sortIndex-n.sortIndex;return t!==0?t:e.id-n.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;r.unstable_now=function(){return k.now()}}else{var M=Date,P=M.now();r.unstable_now=function(){return M.now()-P}}var s=[],y=[],T=1,c=null,u=3,x=!1,v=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(e){for(var n=l(y);n!==null;){if(n.callback===null)f(y);else if(n.startTime<=e)f(y),n.sortIndex=n.expirationTime,o(s,n);else break;n=l(y)}}function R(e){if(b=!1,E(e),!v)if(l(s)!==null)v=!0,S(j);else{var n=l(y);n!==null&&B(R,n.startTime-e)}}function j(e,n){v=!1,b&&(b=!1,D(g),g=-1),x=!0;var t=u;try{for(E(n),c=l(s);c!==null&&(!(c.expirationTime>n)||e&&!W());){var a=c.callback;if(typeof a=="function"){c.callback=null,u=c.priorityLevel;var i=a(c.expirationTime<=n);n=r.unstable_now(),typeof i=="function"?c.callback=i:c===l(s)&&f(s),E(n)}else f(s);c=l(s)}if(c!==null)var I=!0;else{var p=l(y);p!==null&&B(R,p.startTime-n),I=!1}return I}finally{c=null,u=t,x=!1}}var C=!1,L=null,g=-1,K=5,V=-1;function W(){return!(r.unstable_now()-V<K)}function q(){if(L!==null){var e=r.unstable_now();V=e;var n=!0;try{n=L(!0,e)}finally{n?w():(C=!1,L=null)}}else C=!1}var w;if(typeof H=="function")w=function(){H(q)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=q,w=function(){Q.postMessage(null)}}else w=function(){O(q,0)};function S(e){L=e,C||(C=!0,w())}function B(e,n){g=O(function(){e(r.unstable_now())},n)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(e){e.callback=null},r.unstable_continueExecution=function(){v||x||(v=!0,S(j))},r.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},r.unstable_getCurrentPriorityLevel=function(){return u},r.unstable_getFirstCallbackNode=function(){return l(s)},r.unstable_next=function(e){switch(u){case 1:case 2:case 3:var n=3;break;default:n=u}var t=u;u=n;try{return e()}finally{u=t}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=u;u=e;try{return n()}finally{u=t}},r.unstable_scheduleCallback=function(e,n,t){var a=r.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?a+t:a):t=a,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=t+i,e={id:T++,callback:n,priorityLevel:e,startTime:t,expirationTime:i,sortIndex:-1},t>a?(e.sortIndex=t,o(y,e),l(s)===null&&e===l(y)&&(b?(D(g),g=-1):b=!0,B(R,t-a))):(e.sortIndex=i,o(s,e),v||x||(v=!0,S(j))),e},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(e){var n=u;return function(){var t=u;u=n;try{return e.apply(this,arguments)}finally{u=t}}}})(F)),F}var G;function te(){return G||(G=1,z.exports=U()),z.exports}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J=(...r)=>r.filter((o,l,f)=>!!o&&o.trim()!==""&&f.indexOf(o)===l).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=_.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:f,className:d="",children:k,iconNode:M,...P},s)=>_.createElement("svg",{ref:s,...$,width:o,height:o,stroke:r,strokeWidth:f?Number(l)*24/Number(o):l,className:J("lucide",d),...P},[...M.map(([y,T])=>_.createElement(y,T)),...Array.isArray(k)?k:[k]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(r,o)=>{const l=_.forwardRef(({className:f,...d},k)=>_.createElement(ee,{ref:k,iconNode:o,className:J(`lucide-${Y(r)}`,f),...d}));return l.displayName=`${r}`,l};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=h("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=h("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=h("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=h("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=h("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=h("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=h("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=h("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=h("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=h("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{re as A,ae as B,le as C,ue as L,se as M,fe as S,ye as X,oe as a,ce as b,ie as c,te as r};
