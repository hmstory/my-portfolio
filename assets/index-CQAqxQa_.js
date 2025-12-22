(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Uy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var td={exports:{}},ka={},nd={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function gw(){if(Ym)return be;Ym=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),x=Symbol.iterator;function b(V){return V===null||typeof V!="object"?null:(V=x&&V[x]||V["@@iterator"],typeof V=="function"?V:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Y={};function q(V,W,Se){this.props=V,this.context=W,this.refs=Y,this.updater=Se||B}q.prototype.isReactComponent={},q.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},q.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Te(){}Te.prototype=q.prototype;function ge(V,W,Se){this.props=V,this.context=W,this.refs=Y,this.updater=Se||B}var Ee=ge.prototype=new Te;Ee.constructor=ge,J(Ee,q.prototype),Ee.isPureReactComponent=!0;var Pe=Array.isArray,$e=Object.prototype.hasOwnProperty,Ne={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(V,W,Se){var ve,ke={},Ce=null,z=null;if(W!=null)for(ve in W.ref!==void 0&&(z=W.ref),W.key!==void 0&&(Ce=""+W.key),W)$e.call(W,ve)&&!N.hasOwnProperty(ve)&&(ke[ve]=W[ve]);var re=arguments.length-2;if(re===1)ke.children=Se;else if(1<re){for(var te=Array(re),ct=0;ct<re;ct++)te[ct]=arguments[ct+2];ke.children=te}if(V&&V.defaultProps)for(ve in re=V.defaultProps,re)ke[ve]===void 0&&(ke[ve]=re[ve]);return{$$typeof:i,type:V,key:Ce,ref:z,props:ke,_owner:Ne.current}}function k(V,W){return{$$typeof:i,type:V.type,key:W,ref:V.ref,props:V.props,_owner:V._owner}}function R(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function P(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Se){return W[Se]})}var O=/\/+/g;function A(V,W){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):W.toString(36)}function le(V,W,Se,ve,ke){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var z=!1;if(V===null)z=!0;else switch(Ce){case"string":case"number":z=!0;break;case"object":switch(V.$$typeof){case i:case e:z=!0}}if(z)return z=V,ke=ke(z),V=ve===""?"."+A(z,0):ve,Pe(ke)?(Se="",V!=null&&(Se=V.replace(O,"$&/")+"/"),le(ke,W,Se,"",function(ct){return ct})):ke!=null&&(R(ke)&&(ke=k(ke,Se+(!ke.key||z&&z.key===ke.key?"":(""+ke.key).replace(O,"$&/")+"/")+V)),W.push(ke)),1;if(z=0,ve=ve===""?".":ve+":",Pe(V))for(var re=0;re<V.length;re++){Ce=V[re];var te=ve+A(Ce,re);z+=le(Ce,W,Se,te,ke)}else if(te=b(V),typeof te=="function")for(V=te.call(V),re=0;!(Ce=V.next()).done;)Ce=Ce.value,te=ve+A(Ce,re++),z+=le(Ce,W,Se,te,ke);else if(Ce==="object")throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return z}function Re(V,W,Se){if(V==null)return V;var ve=[],ke=0;return le(V,ve,"","",function(Ce){return W.call(Se,Ce,ke++)}),ve}function ut(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(Se){(V._status===0||V._status===-1)&&(V._status=1,V._result=Se)},function(Se){(V._status===0||V._status===-1)&&(V._status=2,V._result=Se)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var He={current:null},ee={transition:null},de={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ne};function ne(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:Re,forEach:function(V,W,Se){Re(V,function(){W.apply(this,arguments)},Se)},count:function(V){var W=0;return Re(V,function(){W++}),W},toArray:function(V){return Re(V,function(W){return W})||[]},only:function(V){if(!R(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},be.Component=q,be.Fragment=t,be.Profiler=o,be.PureComponent=ge,be.StrictMode=s,be.Suspense=y,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,be.act=ne,be.cloneElement=function(V,W,Se){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var ve=J({},V.props),ke=V.key,Ce=V.ref,z=V._owner;if(W!=null){if(W.ref!==void 0&&(Ce=W.ref,z=Ne.current),W.key!==void 0&&(ke=""+W.key),V.type&&V.type.defaultProps)var re=V.type.defaultProps;for(te in W)$e.call(W,te)&&!N.hasOwnProperty(te)&&(ve[te]=W[te]===void 0&&re!==void 0?re[te]:W[te])}var te=arguments.length-2;if(te===1)ve.children=Se;else if(1<te){re=Array(te);for(var ct=0;ct<te;ct++)re[ct]=arguments[ct+2];ve.children=re}return{$$typeof:i,type:V.type,key:ke,ref:Ce,props:ve,_owner:z}},be.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},be.createElement=S,be.createFactory=function(V){var W=S.bind(null,V);return W.type=V,W},be.createRef=function(){return{current:null}},be.forwardRef=function(V){return{$$typeof:m,render:V}},be.isValidElement=R,be.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:ut}},be.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},be.startTransition=function(V){var W=ee.transition;ee.transition={};try{V()}finally{ee.transition=W}},be.unstable_act=ne,be.useCallback=function(V,W){return He.current.useCallback(V,W)},be.useContext=function(V){return He.current.useContext(V)},be.useDebugValue=function(){},be.useDeferredValue=function(V){return He.current.useDeferredValue(V)},be.useEffect=function(V,W){return He.current.useEffect(V,W)},be.useId=function(){return He.current.useId()},be.useImperativeHandle=function(V,W,Se){return He.current.useImperativeHandle(V,W,Se)},be.useInsertionEffect=function(V,W){return He.current.useInsertionEffect(V,W)},be.useLayoutEffect=function(V,W){return He.current.useLayoutEffect(V,W)},be.useMemo=function(V,W){return He.current.useMemo(V,W)},be.useReducer=function(V,W,Se){return He.current.useReducer(V,W,Se)},be.useRef=function(V){return He.current.useRef(V)},be.useState=function(V){return He.current.useState(V)},be.useSyncExternalStore=function(V,W,Se){return He.current.useSyncExternalStore(V,W,Se)},be.useTransition=function(){return He.current.useTransition()},be.version="18.3.1",be}var Xm;function Gd(){return Xm||(Xm=1,nd.exports=gw()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function yw(){if(Jm)return ka;Jm=1;var i=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var E,x={},b=null,B=null;_!==void 0&&(b=""+_),y.key!==void 0&&(b=""+y.key),y.ref!==void 0&&(B=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(x[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)x[E]===void 0&&(x[E]=y[E]);return{$$typeof:e,type:m,key:b,ref:B,props:x,_owner:o.current}}return ka.Fragment=t,ka.jsx=h,ka.jsxs=h,ka}var Zm;function _w(){return Zm||(Zm=1,td.exports=yw()),td.exports}var T=_w(),tt=Gd();const vw=Uy(tt);var Su={},rd={exports:{}},Xt={},id={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function ww(){return eg||(eg=1,(function(i){function e(ee,de){var ne=ee.length;ee.push(de);e:for(;0<ne;){var V=ne-1>>>1,W=ee[V];if(0<o(W,de))ee[V]=de,ee[ne]=W,ne=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],ne=ee.pop();if(ne!==de){ee[0]=ne;e:for(var V=0,W=ee.length,Se=W>>>1;V<Se;){var ve=2*(V+1)-1,ke=ee[ve],Ce=ve+1,z=ee[Ce];if(0>o(ke,ne))Ce<W&&0>o(z,ke)?(ee[V]=z,ee[Ce]=ne,V=Ce):(ee[V]=ke,ee[ve]=ne,V=ve);else if(Ce<W&&0>o(z,ne))ee[V]=z,ee[Ce]=ne,V=Ce;else break e}}return de}function o(ee,de){var ne=ee.sortIndex-de.sortIndex;return ne!==0?ne:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],E=1,x=null,b=3,B=!1,J=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ee(ee){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=ee)s(_),de.sortIndex=de.expirationTime,e(y,de);else break;de=t(_)}}function Pe(ee){if(Y=!1,Ee(ee),!J)if(t(y)!==null)J=!0,ut($e);else{var de=t(_);de!==null&&He(Pe,de.startTime-ee)}}function $e(ee,de){J=!1,Y&&(Y=!1,Te(S),S=-1),B=!0;var ne=b;try{for(Ee(de),x=t(y);x!==null&&(!(x.expirationTime>de)||ee&&!P());){var V=x.callback;if(typeof V=="function"){x.callback=null,b=x.priorityLevel;var W=V(x.expirationTime<=de);de=i.unstable_now(),typeof W=="function"?x.callback=W:x===t(y)&&s(y),Ee(de)}else s(y);x=t(y)}if(x!==null)var Se=!0;else{var ve=t(_);ve!==null&&He(Pe,ve.startTime-de),Se=!1}return Se}finally{x=null,b=ne,B=!1}}var Ne=!1,N=null,S=-1,k=5,R=-1;function P(){return!(i.unstable_now()-R<k)}function O(){if(N!==null){var ee=i.unstable_now();R=ee;var de=!0;try{de=N(!0,ee)}finally{de?A():(Ne=!1,N=null)}}else Ne=!1}var A;if(typeof ge=="function")A=function(){ge(O)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Re=le.port2;le.port1.onmessage=O,A=function(){Re.postMessage(null)}}else A=function(){q(O,0)};function ut(ee){N=ee,Ne||(Ne=!0,A())}function He(ee,de){S=q(function(){ee(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){J||B||(J=!0,ut($e))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(ee){switch(b){case 1:case 2:case 3:var de=3;break;default:de=b}var ne=b;b=de;try{return ee()}finally{b=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=b;b=ee;try{return de()}finally{b=ne}},i.unstable_scheduleCallback=function(ee,de,ne){var V=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,ee={id:E++,callback:de,priorityLevel:ee,startTime:ne,expirationTime:W,sortIndex:-1},ne>V?(ee.sortIndex=ne,e(_,ee),t(y)===null&&ee===t(_)&&(Y?(Te(S),S=-1):Y=!0,He(Pe,ne-V))):(ee.sortIndex=W,e(y,ee),J||B||(J=!0,ut($e))),ee},i.unstable_shouldYield=P,i.unstable_wrapCallback=function(ee){var de=b;return function(){var ne=b;b=de;try{return ee.apply(this,arguments)}finally{b=ne}}}})(sd)),sd}var tg;function Ew(){return tg||(tg=1,id.exports=ww()),id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Tw(){if(ng)return Xt;ng=1;var i=Gd(),e=Ew();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},x={};function b(n){return y.call(x,n)?!0:y.call(E,n)?!1:_.test(n)?x[n]=!0:(E[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Te,ge);q[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Te,ge);q[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Te,ge);q[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ee(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(J(r,a,d,c)&&(a=null),c||d===null?b(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Pe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function W(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var Se=!1;function ve(n,r){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,I=f.length-1;1<=v&&0<=I&&d[v]!==f[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==f[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==f[I]){var C=`
`+d[v].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=v&&0<=I);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function ke(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=ve(n.type,!1),n;case 11:return n=ve(n.type.render,!1),n;case 1:return n=ve(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ne:return"Portal";case k:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Re:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case ut:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function z(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function te(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ct(n){var r=te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Dr(n){n._valueTracker||(n._valueTracker=ct(n))}function bi(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function On(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Vr(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Dt(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=re(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vs(n,r){r=r.checked,r!=null&&Ee(n,"checked",r,!1)}function Di(n,r){vs(n,r);var a=re(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ht(n,r.type,a):r.hasOwnProperty("defaultValue")&&ht(n,r.type,re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Vo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ht(n,r,a){(r!=="number"||On(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function wn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+re(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Oo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:re(a)}}function cl(n,r){var a=re(r.value),c=re(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Or(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Mo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ws(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Mo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Lr,hl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Lr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Vi(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dl=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){dl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Mr[r]=Mr[n]})});function jr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+r).trim():r+"px"}function Es(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var jo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,r){if(r){if(jo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ts(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function Is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lr=null,ur=null,rt=null;function Fo(n){if(n=da(n)){if(typeof lr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Fl(r),lr(n.stateNode,n.type,r))}}function Ur(n){ur?rt?rt.push(n):rt=[n]:ur=n}function zr(){if(ur){var n=ur,r=rt;if(rt=ur=null,Fo(n),r)for(n=0;n<r.length;n++)Fo(r[n])}}function fl(n,r){return n(r)}function pl(){}var Ln=!1;function ml(n,r,a){if(Ln)return n(r,a);Ln=!0;try{return fl(n,r,a)}finally{Ln=!1,(ur!==null||rt!==null)&&(pl(),zr())}}function Oi(n,r){var a=n.stateNode;if(a===null)return null;var c=Fl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Br=!1;if(m)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Br=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Br=!1}function gl(n,r,a,c,d,f,v,I,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var cr=!1,Mn=null,Ss=!1,hn=null,yl={onError:function(n){cr=!0,Mn=n}};function _l(n,r,a,c,d,f,v,I,C){cr=!1,Mn=null,gl.apply(yl,arguments)}function Uo(n,r,a,c,d,f,v,I,C){if(_l.apply(this,arguments),cr){if(cr){var F=Mn;cr=!1,Mn=null}else throw Error(t(198));Ss||(Ss=!0,hn=F)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function zo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function vl(n){if(Tn(n)!==n)throw Error(t(188))}function wl(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return vl(d),n;if(f===c)return vl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=f;break}if(I===c){v=!0,c=d,a=f;break}I=I.sibling}if(!v){for(I=f.child;I;){if(I===a){v=!0,a=f,c=d;break}if(I===c){v=!0,c=f,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function El(n){return n=wl(n),n!==null?Li(n):null}function Li(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Li(n);if(r!==null)return r;n=n.sibling}return null}var Bo=e.unstable_scheduleCallback,As=e.unstable_cancelCallback,Mi=e.unstable_shouldYield,hr=e.unstable_requestPaint,Ke=e.unstable_now,bc=e.unstable_getCurrentPriorityLevel,xs=e.unstable_ImmediatePriority,$o=e.unstable_UserBlockingPriority,ji=e.unstable_NormalPriority,qo=e.unstable_LowPriority,ks=e.unstable_IdlePriority,Fi=null,en=null;function Tl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Fi,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Ui,jn=Math.log,dn=Math.LN2;function Ui(n){return n>>>=0,n===0?32:31-(jn(n)/dn|0)|0}var Fn=64,qr=4194304;function Ue(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Ue(I):(f&=v,f!==0&&(c=Ue(f)))}else v=a&~d,v!==0?c=Ue(v):f!==0&&(c=Ue(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-tn(r),d=1<<a,c|=n[a],r&=~d;return c}function zi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),I=1<<v,C=d[v];C===-1?((I&a)===0||(I&c)!==0)&&(d[v]=zi(I,r)):C<=r&&(n.expiredLanes|=I),f&=~I}}function Ho(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=Fn;return Fn<<=1,(Fn&4194240)===0&&(Fn=64),n}function Go(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function $i(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-tn(r),n[r]=a}function Dc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Ko(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Le=0;function Un(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qo,Cs,Yo,Xo,Jo,zn=!1,Rs=[],Bn=null,$n=null,xt=null,qi=new Map,fr=new Map,nn=[],Il="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":qi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(r.pointerId)}}function In(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=da(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Sl(n,r,a,c,d){switch(r){case"focusin":return Bn=In(Bn,n,r,a,c,d),!0;case"dragenter":return $n=In($n,n,r,a,c,d),!0;case"mouseover":return xt=In(xt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return qi.set(f,In(qi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,fr.set(f,In(fr.get(f)||null,n,r,a,c,d)),!0}return!1}function Ps(n){var r=Ki(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=zo(a),r!==null){n.blockedOn=r,Jo(n.priority,function(){Yo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ns(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Fr=c,a.target.dispatchEvent(c),Fr=null}else return r=da(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function Al(n,r,a){qe(n)&&a.delete(r)}function Vc(){zn=!1,Bn!==null&&qe(Bn)&&(Bn=null),$n!==null&&qe($n)&&($n=null),xt!==null&&qe(xt)&&(xt=null),qi.forEach(Al),fr.forEach(Al)}function Wr(n,r){n.blockedOn===r&&(n.blockedOn=null,zn||(zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vc)))}function Gr(n){function r(d){return Wr(d,n)}if(0<Rs.length){Wr(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bn!==null&&Wr(Bn,n),$n!==null&&Wr($n,n),xt!==null&&Wr(xt,n),qi.forEach(r),fr.forEach(r),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)Ps(a),a.blockedOn===null&&nn.shift()}var pr=Pe.ReactCurrentBatchConfig,mr=!0;function qn(n,r,a,c){var d=Le,f=pr.transition;pr.transition=null;try{Le=1,Zo(n,r,a,c)}finally{Le=d,pr.transition=f}}function xl(n,r,a,c){var d=Le,f=pr.transition;pr.transition=null;try{Le=4,Zo(n,r,a,c)}finally{Le=d,pr.transition=f}}function Zo(n,r,a,c){if(mr){var d=Ns(n,r,a,c);if(d===null)Hc(n,r,c,Hn,a),Hr(n,c);else if(Sl(d,n,r,a,c))c.stopPropagation();else if(Hr(n,c),r&4&&-1<Il.indexOf(n)){for(;d!==null;){var f=da(d);if(f!==null&&Qo(f),f=Ns(n,r,a,c),f===null&&Hc(n,r,c,Hn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Hc(n,r,c,null,a)}}var Hn=null;function Ns(n,r,a,c){if(Hn=null,n=Is(c),n=Ki(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=zo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Hn=n,null}function bs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case xs:return 1;case $o:return 4;case ji:case qo:return 16;case ks:return 536870912;default:return 16}default:return 16}}var rn=null,Ds=null,gr=null;function kl(){if(gr)return gr;var n,r=Ds,a=r.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return gr=d.slice(n,1<c?1-c:void 0)}function Hi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function ea(){return!1}function Vt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:ea,this.isPropagationStopped=ea,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),r}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Vt(Gn),Kr=ne({},Gn,{view:0,detail:0}),Vs=Vt(Kr),Os,Ls,sn,Gi=ne({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ae,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?(Os=n.screenX-sn.screenX,Ls=n.screenY-sn.screenY):Ls=Os=0,sn=n),Os)},movementY:function(n){return"movementY"in n?n.movementY:Ls}}),ta=Vt(Gi),Cl=ne({},Gi,{dataTransfer:0}),Rl=Vt(Cl),Ms=ne({},Kr,{relatedTarget:0}),kt=Vt(Ms),Pl=ne({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nl=Vt(Pl),Qr=ne({},Gn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Vt(Qr),p=ne({},Gn,{data:0}),g=Vt(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function Ae(){return Z}var ot=ne({},Kr,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ae,charCode:function(n){return n.type==="keypress"?Hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Vt(ot),dt=ne({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Vt(dt),yr=ne({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ae}),Kn=Vt(yr),Qn=ne({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),js=Vt(Qn),na=ne({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=Vt(na),h0=[9,13,27,32],Oc=m&&"CompositionEvent"in window,ra=null;m&&"documentMode"in document&&(ra=document.documentMode);var d0=m&&"TextEvent"in window&&!ra,Bf=m&&(!Oc||ra&&8<ra&&11>=ra),$f=" ",qf=!1;function Hf(n,r){switch(n){case"keyup":return h0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function f0(n,r){switch(n){case"compositionend":return Wf(r);case"keypress":return r.which!==32?null:(qf=!0,$f);case"textInput":return n=r.data,n===$f&&qf?null:n;default:return null}}function p0(n,r){if(Fs)return n==="compositionend"||!Oc&&Hf(n,r)?(n=kl(),gr=Ds=rn=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bf&&r.locale!=="ko"?null:r.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!m0[n.type]:r==="textarea"}function Kf(n,r,a,c){Ur(c),r=Ll(r,"onChange"),0<r.length&&(a=new Wi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ia=null,sa=null;function g0(n){dp(n,0)}function bl(n){var r=qs(n);if(bi(r))return n}function y0(n,r){if(n==="change")return r}var Qf=!1;if(m){var Lc;if(m){var Mc="oninput"in document;if(!Mc){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Mc=typeof Yf.oninput=="function"}Lc=Mc}else Lc=!1;Qf=Lc&&(!document.documentMode||9<document.documentMode)}function Xf(){ia&&(ia.detachEvent("onpropertychange",Jf),sa=ia=null)}function Jf(n){if(n.propertyName==="value"&&bl(sa)){var r=[];Kf(r,sa,n,Is(n)),ml(g0,r)}}function _0(n,r,a){n==="focusin"?(Xf(),ia=r,sa=a,ia.attachEvent("onpropertychange",Jf)):n==="focusout"&&Xf()}function v0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bl(sa)}function w0(n,r){if(n==="click")return bl(r)}function E0(n,r){if(n==="input"||n==="change")return bl(r)}function T0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Sn=typeof Object.is=="function"?Object.is:T0;function oa(n,r){if(Sn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Sn(n[d],r[d]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,r){var a=Zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function tp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?tp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function np(){for(var n=window,r=On();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=On(n.document)}return r}function jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function I0(n){var r=np(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=ep(a,f);var v=ep(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var S0=m&&"documentMode"in document&&11>=document.documentMode,Us=null,Fc=null,aa=null,Uc=!1;function rp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Us==null||Us!==On(c)||(c=Us,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=Ll(Fc,"onSelect"),0<c.length&&(r=new Wi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Us)))}function Dl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var zs={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},zc={},ip={};m&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Vl(n){if(zc[n])return zc[n];if(!zs[n])return n;var r=zs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ip)return zc[n]=r[a];return n}var sp=Vl("animationend"),op=Vl("animationiteration"),ap=Vl("animationstart"),lp=Vl("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,r){up.set(n,r),u(r,[n])}for(var Bc=0;Bc<cp.length;Bc++){var $c=cp[Bc],A0=$c.toLowerCase(),x0=$c[0].toUpperCase()+$c.slice(1);Yr(A0,"on"+x0)}Yr(sp,"onAnimationEnd"),Yr(op,"onAnimationIteration"),Yr(ap,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function hp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Uo(c,r,void 0,n),n.currentTarget=null}function dp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],C=I.instance,F=I.currentTarget;if(I=I.listener,C!==f&&d.isPropagationStopped())break e;hp(d,I,F),f=C}else for(v=0;v<c.length;v++){if(I=c[v],C=I.instance,F=I.currentTarget,I=I.listener,C!==f&&d.isPropagationStopped())break e;hp(d,I,F),f=C}}}if(Ss)throw n=hn,Ss=!1,hn=null,n}function Qe(n,r){var a=r[Xc];a===void 0&&(a=r[Xc]=new Set);var c=n+"__bubble";a.has(c)||(fp(r,n,2,!1),a.add(c))}function qc(n,r,a){var c=0;r&&(c|=4),fp(a,n,c,r)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[Ol]){n[Ol]=!0,s.forEach(function(a){a!=="selectionchange"&&(k0.has(a)||qc(a,!1,n),qc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ol]||(r[Ol]=!0,qc("selectionchange",!1,r))}}function fp(n,r,a,c){switch(bs(r)){case 1:var d=qn;break;case 4:d=xl;break;default:d=Zo}a=d.bind(null,r,a,n),d=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Hc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Ki(I),v===null)return;if(C=v.tag,C===5||C===6){c=f=v;continue e}I=I.parentNode}}c=c.return}ml(function(){var F=f,K=Is(a),Q=[];e:{var G=up.get(n);if(G!==void 0){var se=Wi,ue=n;switch(n){case"keypress":if(Hi(a)===0)break e;case"keydown":case"keyup":se=Be;break;case"focusin":ue="focus",se=kt;break;case"focusout":ue="blur",se=kt;break;case"beforeblur":case"afterblur":se=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Kn;break;case sp:case op:case ap:se=Nl;break;case lp:se=js;break;case"scroll":se=Vs;break;case"wheel":se=c0;break;case"copy":case"cut":case"paste":se=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=on}var ce=(r&4)!==0,at=!ce&&n==="scroll",L=ce?G!==null?G+"Capture":null:G;ce=[];for(var D=F,j;D!==null;){j=D;var X=j.stateNode;if(j.tag===5&&X!==null&&(j=X,L!==null&&(X=Oi(D,L),X!=null&&ce.push(ca(D,X,j)))),at)break;D=D.return}0<ce.length&&(G=new se(G,ue,null,a,K),Q.push({event:G,listeners:ce}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",G&&a!==Fr&&(ue=a.relatedTarget||a.fromElement)&&(Ki(ue)||ue[_r]))break e;if((se||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=F,ue=ue?Ki(ue):null,ue!==null&&(at=Tn(ue),ue!==at||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=F),se!==ue)){if(ce=ta,X="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ce=on,X="onPointerLeave",L="onPointerEnter",D="pointer"),at=se==null?G:qs(se),j=ue==null?G:qs(ue),G=new ce(X,D+"leave",se,a,K),G.target=at,G.relatedTarget=j,X=null,Ki(K)===F&&(ce=new ce(L,D+"enter",ue,a,K),ce.target=j,ce.relatedTarget=at,X=ce),at=X,se&&ue)t:{for(ce=se,L=ue,D=0,j=ce;j;j=Bs(j))D++;for(j=0,X=L;X;X=Bs(X))j++;for(;0<D-j;)ce=Bs(ce),D--;for(;0<j-D;)L=Bs(L),j--;for(;D--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=Bs(ce),L=Bs(L)}ce=null}else ce=null;se!==null&&pp(Q,G,se,ce,!1),ue!==null&&at!==null&&pp(Q,at,ue,ce,!0)}}e:{if(G=F?qs(F):window,se=G.nodeName&&G.nodeName.toLowerCase(),se==="select"||se==="input"&&G.type==="file")var he=y0;else if(Gf(G))if(Qf)he=E0;else{he=v0;var pe=_0}else(se=G.nodeName)&&se.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=w0);if(he&&(he=he(n,F))){Kf(Q,he,a,K);break e}pe&&pe(n,G,F),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&ht(G,"number",G.value)}switch(pe=F?qs(F):window,n){case"focusin":(Gf(pe)||pe.contentEditable==="true")&&(Us=pe,Fc=F,aa=null);break;case"focusout":aa=Fc=Us=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,rp(Q,a,K);break;case"selectionchange":if(S0)break;case"keydown":case"keyup":rp(Q,a,K)}var me;if(Oc)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Fs?Hf(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Bf&&a.locale!=="ko"&&(Fs||we!=="onCompositionStart"?we==="onCompositionEnd"&&Fs&&(me=kl()):(rn=K,Ds="value"in rn?rn.value:rn.textContent,Fs=!0)),pe=Ll(F,we),0<pe.length&&(we=new g(we,n,null,a,K),Q.push({event:we,listeners:pe}),me?we.data=me:(me=Wf(a),me!==null&&(we.data=me)))),(me=d0?f0(n,a):p0(n,a))&&(F=Ll(F,"onBeforeInput"),0<F.length&&(K=new g("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=me))}dp(Q,r)})}function ca(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ll(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Oi(n,a),f!=null&&c.unshift(ca(n,f,d)),f=Oi(n,r),f!=null&&c.push(ca(n,f,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var I=a,C=I.alternate,F=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&F!==null&&(I=F,d?(C=Oi(a,f),C!=null&&v.unshift(ca(a,C,I))):d||(C=Oi(a,f),C!=null&&v.push(ca(a,C,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var C0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(C0,`
`).replace(R0,"")}function Ml(n,r,a){if(r=mp(r),mp(n)!==r&&a)throw Error(t(425))}function jl(){}var Wc=null,Gc=null;function Kc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,N0=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(b0)}:Qc;function b0(n){setTimeout(function(){throw n})}function Yc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gr(r)}function Xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function yp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Yn="__reactFiber$"+$s,ha="__reactProps$"+$s,_r="__reactContainer$"+$s,Xc="__reactEvents$"+$s,D0="__reactListeners$"+$s,V0="__reactHandles$"+$s;function Ki(n){var r=n[Yn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_r]||a[Yn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=yp(n);n!==null;){if(a=n[Yn])return a;n=yp(n)}return r}n=a,a=n.parentNode}return null}function da(n){return n=n[Yn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fl(n){return n[ha]||null}var Jc=[],Hs=-1;function Jr(n){return{current:n}}function Ye(n){0>Hs||(n.current=Jc[Hs],Jc[Hs]=null,Hs--)}function We(n,r){Hs++,Jc[Hs]=n.current,n.current=r}var Zr={},Ot=Jr(Zr),Wt=Jr(!1),Qi=Zr;function Ws(n,r){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Ul(){Ye(Wt),Ye(Ot)}function _p(n,r,a){if(Ot.current!==Zr)throw Error(t(168));We(Ot,r),We(Wt,a)}function vp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,z(n)||"Unknown",d));return ne({},a,c)}function zl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Qi=Ot.current,We(Ot,n),We(Wt,Wt.current),!0}function wp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vp(n,r,Qi),c.__reactInternalMemoizedMergedChildContext=n,Ye(Wt),Ye(Ot),We(Ot,n)):Ye(Wt),We(Wt,a)}var vr=null,Bl=!1,Zc=!1;function Ep(n){vr===null?vr=[n]:vr.push(n)}function O0(n){Bl=!0,Ep(n)}function ei(){if(!Zc&&vr!==null){Zc=!0;var n=0,r=Le;try{var a=vr;for(Le=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,Bl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Bo(xs,ei),d}finally{Le=r,Zc=!1}}return null}var Gs=[],Ks=0,$l=null,ql=0,fn=[],pn=0,Yi=null,wr=1,Er="";function Xi(n,r){Gs[Ks++]=ql,Gs[Ks++]=$l,$l=n,ql=r}function Tp(n,r,a){fn[pn++]=wr,fn[pn++]=Er,fn[pn++]=Yi,Yi=n;var c=wr;n=Er;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,wr=1<<32-tn(r)+d|a<<d|c,Er=f+n}else wr=1<<f|a<<d|c,Er=n}function eh(n){n.return!==null&&(Xi(n,1),Tp(n,1,0))}function th(n){for(;n===$l;)$l=Gs[--Ks],Gs[Ks]=null,ql=Gs[--Ks],Gs[Ks]=null;for(;n===Yi;)Yi=fn[--pn],fn[pn]=null,Er=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null}var an=null,ln=null,Je=!1,An=null;function Ip(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Sp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=Xr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Yi!==null?{id:wr,overflow:Er}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function nh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function rh(n){if(Je){var r=ln;if(r){var a=r;if(!Sp(n,r)){if(nh(n))throw Error(t(418));r=Xr(a.nextSibling);var c=an;r&&Sp(n,r)?Ip(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(nh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Hl(n){if(n!==an)return!1;if(!Je)return Ap(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Kc(n.type,n.memoizedProps)),r&&(r=ln)){if(nh(n))throw xp(),Error(t(418));for(;r;)Ip(n,r),r=Xr(r.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=Xr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?Xr(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=ln;n;)n=Xr(n.nextSibling)}function Qs(){ln=an=null,Je=!1}function ih(n){An===null?An=[n]:An.push(n)}var L0=Pe.ReactCurrentBatchConfig;function fa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var I=d.refs;v===null?delete I[f]:I[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function kp(n){var r=n._init;return r(n._payload)}function Cp(n){function r(L,D){if(n){var j=L.deletions;j===null?(L.deletions=[D],L.flags|=16):j.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)r(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=li(L,D),L.index=0,L.sibling=null,L}function f(L,D,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<D?(L.flags|=2,D):j):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,D,j,X){return D===null||D.tag!==6?(D=Qh(j,L.mode,X),D.return=L,D):(D=d(D,j),D.return=L,D)}function C(L,D,j,X){var he=j.type;return he===N?K(L,D,j.props.children,X,j.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ut&&kp(he)===D.type)?(X=d(D,j.props),X.ref=fa(L,D,j),X.return=L,X):(X=gu(j.type,j.key,j.props,null,L.mode,X),X.ref=fa(L,D,j),X.return=L,X)}function F(L,D,j,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=Yh(j,L.mode,X),D.return=L,D):(D=d(D,j.children||[]),D.return=L,D)}function K(L,D,j,X,he){return D===null||D.tag!==7?(D=ss(j,L.mode,X,he),D.return=L,D):(D=d(D,j),D.return=L,D)}function Q(L,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Qh(""+D,L.mode,j),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case $e:return j=gu(D.type,D.key,D.props,null,L.mode,j),j.ref=fa(L,null,D),j.return=L,j;case Ne:return D=Yh(D,L.mode,j),D.return=L,D;case ut:var X=D._init;return Q(L,X(D._payload),j)}if(st(D)||de(D))return D=ss(D,L.mode,j,null),D.return=L,D;Wl(L,D)}return null}function G(L,D,j,X){var he=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:I(L,D,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case $e:return j.key===he?C(L,D,j,X):null;case Ne:return j.key===he?F(L,D,j,X):null;case ut:return he=j._init,G(L,D,he(j._payload),X)}if(st(j)||de(j))return he!==null?null:K(L,D,j,X,null);Wl(L,j)}return null}function se(L,D,j,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(j)||null,I(D,L,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $e:return L=L.get(X.key===null?j:X.key)||null,C(D,L,X,he);case Ne:return L=L.get(X.key===null?j:X.key)||null,F(D,L,X,he);case ut:var pe=X._init;return se(L,D,j,pe(X._payload),he)}if(st(X)||de(X))return L=L.get(j)||null,K(D,L,X,he,null);Wl(D,X)}return null}function ue(L,D,j,X){for(var he=null,pe=null,me=D,we=D=0,It=null;me!==null&&we<j.length;we++){me.index>we?(It=me,me=null):It=me.sibling;var Fe=G(L,me,j[we],X);if(Fe===null){me===null&&(me=It);break}n&&me&&Fe.alternate===null&&r(L,me),D=f(Fe,D,we),pe===null?he=Fe:pe.sibling=Fe,pe=Fe,me=It}if(we===j.length)return a(L,me),Je&&Xi(L,we),he;if(me===null){for(;we<j.length;we++)me=Q(L,j[we],X),me!==null&&(D=f(me,D,we),pe===null?he=me:pe.sibling=me,pe=me);return Je&&Xi(L,we),he}for(me=c(L,me);we<j.length;we++)It=se(me,L,we,j[we],X),It!==null&&(n&&It.alternate!==null&&me.delete(It.key===null?we:It.key),D=f(It,D,we),pe===null?he=It:pe.sibling=It,pe=It);return n&&me.forEach(function(ui){return r(L,ui)}),Je&&Xi(L,we),he}function ce(L,D,j,X){var he=de(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var pe=he=null,me=D,we=D=0,It=null,Fe=j.next();me!==null&&!Fe.done;we++,Fe=j.next()){me.index>we?(It=me,me=null):It=me.sibling;var ui=G(L,me,Fe.value,X);if(ui===null){me===null&&(me=It);break}n&&me&&ui.alternate===null&&r(L,me),D=f(ui,D,we),pe===null?he=ui:pe.sibling=ui,pe=ui,me=It}if(Fe.done)return a(L,me),Je&&Xi(L,we),he;if(me===null){for(;!Fe.done;we++,Fe=j.next())Fe=Q(L,Fe.value,X),Fe!==null&&(D=f(Fe,D,we),pe===null?he=Fe:pe.sibling=Fe,pe=Fe);return Je&&Xi(L,we),he}for(me=c(L,me);!Fe.done;we++,Fe=j.next())Fe=se(me,L,we,Fe.value,X),Fe!==null&&(n&&Fe.alternate!==null&&me.delete(Fe.key===null?we:Fe.key),D=f(Fe,D,we),pe===null?he=Fe:pe.sibling=Fe,pe=Fe);return n&&me.forEach(function(mw){return r(L,mw)}),Je&&Xi(L,we),he}function at(L,D,j,X){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case $e:e:{for(var he=j.key,pe=D;pe!==null;){if(pe.key===he){if(he=j.type,he===N){if(pe.tag===7){a(L,pe.sibling),D=d(pe,j.props.children),D.return=L,L=D;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ut&&kp(he)===pe.type){a(L,pe.sibling),D=d(pe,j.props),D.ref=fa(L,pe,j),D.return=L,L=D;break e}a(L,pe);break}else r(L,pe);pe=pe.sibling}j.type===N?(D=ss(j.props.children,L.mode,X,j.key),D.return=L,L=D):(X=gu(j.type,j.key,j.props,null,L.mode,X),X.ref=fa(L,D,j),X.return=L,L=X)}return v(L);case Ne:e:{for(pe=j.key;D!==null;){if(D.key===pe)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(L,D.sibling),D=d(D,j.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else r(L,D);D=D.sibling}D=Yh(j,L.mode,X),D.return=L,L=D}return v(L);case ut:return pe=j._init,at(L,D,pe(j._payload),X)}if(st(j))return ue(L,D,j,X);if(de(j))return ce(L,D,j,X);Wl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,j),D.return=L,L=D):(a(L,D),D=Qh(j,L.mode,X),D.return=L,L=D),v(L)):a(L,D)}return at}var Ys=Cp(!0),Rp=Cp(!1),Gl=Jr(null),Kl=null,Xs=null,sh=null;function oh(){sh=Xs=Kl=null}function ah(n){var r=Gl.current;Ye(Gl),n._currentValue=r}function lh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Js(n,r){Kl=n,sh=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(sh!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if(Kl===null)throw Error(t(308));Xs=n,Kl.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Ji=null;function uh(n){Ji===null?Ji=[n]:Ji.push(n)}function Pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,uh(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ni(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(je&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,uh(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function Ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ko(n,a)}}function bp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Yl(n,r,a,c){var d=n.updateQueue;ti=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,F=C.next;C.next=null,v===null?f=F:v.next=F,v=C;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=C))}if(f!==null){var Q=d.baseState;v=0,K=F=C=null,I=f;do{var G=I.lane,se=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:se,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ue=n,ce=I;switch(G=r,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Q=ue.call(se,Q,G);break e}Q=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,G=typeof ue=="function"?ue.call(se,Q,G):ue,G==null)break e;Q=ne({},Q,G);break e;case 2:ti=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else se={eventTime:se,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=se,C=Q):K=K.next=se,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);ts|=v,n.lanes=v,n.memoizedState=Q}}function Dp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pa={},Xn=Jr(pa),ma=Jr(pa),ga=Jr(pa);function Zi(n){if(n===pa)throw Error(t(174));return n}function hh(n,r){switch(We(ga,r),We(ma,n),We(Xn,pa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ws(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ws(r,n)}Ye(Xn),We(Xn,r)}function Zs(){Ye(Xn),Ye(ma),Ye(ga)}function Vp(n){Zi(ga.current);var r=Zi(Xn.current),a=ws(r,n.type);r!==a&&(We(ma,n),We(Xn,a))}function dh(n){ma.current===n&&(Ye(Xn),Ye(ma))}var Ze=Jr(0);function Xl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var fh=[];function ph(){for(var n=0;n<fh.length;n++)fh[n]._workInProgressVersionPrimary=null;fh.length=0}var Jl=Pe.ReactCurrentDispatcher,mh=Pe.ReactCurrentBatchConfig,es=0,et=null,yt=null,Et=null,Zl=!1,ya=!1,_a=0,M0=0;function Lt(){throw Error(t(321))}function gh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Sn(n[a],r[a]))return!1;return!0}function yh(n,r,a,c,d,f){if(es=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Jl.current=n===null||n.memoizedState===null?z0:B0,n=a(c,d),ya){f=0;do{if(ya=!1,_a=0,25<=f)throw Error(t(301));f+=1,Et=yt=null,r.updateQueue=null,Jl.current=$0,n=a(c,d)}while(ya)}if(Jl.current=nu,r=yt!==null&&yt.next!==null,es=0,Et=yt=et=null,Zl=!1,r)throw Error(t(300));return n}function _h(){var n=_a!==0;return _a=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(yt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=yt.next;var r=Et===null?et.memoizedState:Et.next;if(r!==null)Et=r,yt=n;else{if(n===null)throw Error(t(310));yt=n,n={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function va(n,r){return typeof r=="function"?r(n):r}function vh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=yt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var I=v=null,C=null,F=f;do{var K=F.lane;if((es&K)===K)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(I=C=Q,v=c):C=C.next=Q,et.lanes|=K,ts|=K}F=F.next}while(F!==null&&F!==f);C===null?v=c:C.next=I,Sn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,ts|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function wh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Sn(f,r.memoizedState)||(Kt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Op(){}function Lp(n,r){var a=et,c=gn(),d=r(),f=!Sn(c.memoizedState,d);if(f&&(c.memoizedState=d,Kt=!0),c=c.queue,Eh(Fp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,wa(9,jp.bind(null,a,c,d,r),void 0,null),Tt===null)throw Error(t(349));(es&30)!==0||Mp(a,r,d)}return d}function Mp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function jp(n,r,a,c){r.value=a,r.getSnapshot=c,Up(r)&&zp(n)}function Fp(n,r,a){return a(function(){Up(r)&&zp(n)})}function Up(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Sn(n,a)}catch{return!0}}function zp(n){var r=Tr(n,1);r!==null&&Rn(r,n,1,-1)}function Bp(n){var r=Jn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},r.queue=n,n=n.dispatch=U0.bind(null,et,n),[r.memoizedState,n]}function wa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function $p(){return gn().memoizedState}function eu(n,r,a,c){var d=Jn();et.flags|=n,d.memoizedState=wa(1|r,a,void 0,c===void 0?null:c)}function tu(n,r,a,c){var d=gn();c=c===void 0?null:c;var f=void 0;if(yt!==null){var v=yt.memoizedState;if(f=v.destroy,c!==null&&gh(c,v.deps)){d.memoizedState=wa(r,a,f,c);return}}et.flags|=n,d.memoizedState=wa(1|r,a,f,c)}function qp(n,r){return eu(8390656,8,n,r)}function Eh(n,r){return tu(2048,8,n,r)}function Hp(n,r){return tu(4,2,n,r)}function Wp(n,r){return tu(4,4,n,r)}function Gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kp(n,r,a){return a=a!=null?a.concat([n]):null,tu(4,4,Gp.bind(null,r,n),a)}function Th(){}function Qp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&gh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Yp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&gh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Xp(n,r,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Sn(a,r)||(a=Wo(),et.lanes|=a,ts|=a,n.baseState=!0),r)}function j0(n,r){var a=Le;Le=a!==0&&4>a?a:4,n(!0);var c=mh.transition;mh.transition={};try{n(!1),r()}finally{Le=a,mh.transition=c}}function Jp(){return gn().memoizedState}function F0(n,r,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zp(n))em(r,a);else if(a=Pp(n,r,a,c),a!==null){var d=Ht();Rn(a,n,c,d),tm(a,r,c)}}function U0(n,r,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))em(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,I=f(v,a);if(d.hasEagerState=!0,d.eagerState=I,Sn(I,v)){var C=r.interleaved;C===null?(d.next=d,uh(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=Pp(n,r,d,c),a!==null&&(d=Ht(),Rn(a,n,c,d),tm(a,r,c))}}function Zp(n){var r=n.alternate;return n===et||r!==null&&r===et}function em(n,r){ya=Zl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function tm(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ko(n,a)}}var nu={readContext:mn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},z0={readContext:mn,useCallback:function(n,r){return Jn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:qp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,eu(4194308,4,Gp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return eu(4194308,4,n,r)},useInsertionEffect:function(n,r){return eu(4,2,n,r)},useMemo:function(n,r){var a=Jn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Jn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=F0.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Jn();return n={current:n},r.memoizedState=n},useState:Bp,useDebugValue:Th,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=Bp(!1),r=n[0];return n=j0.bind(null,n[1]),Jn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Jn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Tt===null)throw Error(t(349));(es&30)!==0||Mp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,qp(Fp.bind(null,c,f,n),[n]),c.flags|=2048,wa(9,jp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Jn(),r=Tt.identifierPrefix;if(Je){var a=Er,c=wr;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=_a++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=M0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},B0={readContext:mn,useCallback:Qp,useContext:mn,useEffect:Eh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Yp,useReducer:vh,useRef:$p,useState:function(){return vh(va)},useDebugValue:Th,useDeferredValue:function(n){var r=gn();return Xp(r,yt.memoizedState,n)},useTransition:function(){var n=vh(va)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:Lp,useId:Jp,unstable_isNewReconciler:!1},$0={readContext:mn,useCallback:Qp,useContext:mn,useEffect:Eh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Yp,useReducer:wh,useRef:$p,useState:function(){return wh(va)},useDebugValue:Th,useDeferredValue:function(n){var r=gn();return yt===null?r.memoizedState=n:Xp(r,yt.memoizedState,n)},useTransition:function(){var n=wh(va)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:Lp,useId:Jp,unstable_isNewReconciler:!1};function xn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Ih(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ru={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=oi(n),f=Ir(c,d);f.payload=r,a!=null&&(f.callback=a),r=ni(n,f,d),r!==null&&(Rn(r,n,d,c),Ql(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=oi(n),f=Ir(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ni(n,f,d),r!==null&&(Rn(r,n,d,c),Ql(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=oi(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=ni(n,d,c),r!==null&&(Rn(r,n,c,a),Ql(r,n,c))}};function nm(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!oa(a,c)||!oa(d,f):!0}function rm(n,r,a){var c=!1,d=Zr,f=r.contextType;return typeof f=="object"&&f!==null?f=mn(f):(d=Gt(r)?Qi:Ot.current,c=r.contextTypes,f=(c=c!=null)?Ws(n,d):Zr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ru,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function im(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ru.enqueueReplaceState(r,r.state,null)}function Sh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ch(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=mn(f):(f=Gt(r)?Qi:Ot.current,d.context=Ws(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Ih(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ru.enqueueReplaceState(d,d.state,null),Yl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,r){try{var a="",c=r;do a+=ke(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function Ah(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function xh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function sm(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){cu||(cu=!0,zh=c),xh(n,r)},a}function om(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){xh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){xh(n,r),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function am(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new q0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=iw.bind(null,n,r,a),r.then(n,n))}function lm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function um(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,ni(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var H0=Pe.ReactCurrentOwner,Kt=!1;function qt(n,r,a,c){r.child=n===null?Rp(r,null,a,c):Ys(r,n.child,a,c)}function cm(n,r,a,c,d){a=a.render;var f=r.ref;return Js(r,d),c=yh(n,r,a,c,f,d),a=_h(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Je&&a&&eh(r),r.flags|=1,qt(n,r,c,d),r.child)}function hm(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Kh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,dm(n,r,f,c,d)):(n=gu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(v,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=li(f,c),n.ref=r.ref,n.return=r,r.child=n}function dm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(oa(f,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return kh(n,r,a,c,d)}function fm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(no,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,We(no,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,We(no,un),un|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,We(no,un),un|=c;return qt(n,r,d,a),r.child}function pm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function kh(n,r,a,c,d){var f=Gt(a)?Qi:Ot.current;return f=Ws(r,f),Js(r,d),a=yh(n,r,a,c,f,d),c=_h(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Je&&c&&eh(r),r.flags|=1,qt(n,r,a,d),r.child)}function mm(n,r,a,c,d){if(Gt(a)){var f=!0;zl(r)}else f=!1;if(Js(r,d),r.stateNode===null)su(n,r),rm(r,a,c),Sh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var C=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Gt(a)?Qi:Ot.current,F=Ws(r,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||C!==F)&&im(r,v,c,F),ti=!1;var G=r.memoizedState;v.state=G,Yl(r,c,v,d),C=r.memoizedState,I!==c||G!==C||Wt.current||ti?(typeof K=="function"&&(Ih(r,a,K,c),C=r.memoizedState),(I=ti||nm(r,a,I,c,G,C,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),v.props=c,v.state=C,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Np(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:xn(r.type,I),v.props=F,Q=r.pendingProps,G=v.context,C=a.contextType,typeof C=="object"&&C!==null?C=mn(C):(C=Gt(a)?Qi:Ot.current,C=Ws(r,C));var se=a.getDerivedStateFromProps;(K=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||G!==C)&&im(r,v,c,C),ti=!1,G=r.memoizedState,v.state=G,Yl(r,c,v,d);var ue=r.memoizedState;I!==Q||G!==ue||Wt.current||ti?(typeof se=="function"&&(Ih(r,a,se,c),ue=r.memoizedState),(F=ti||nm(r,a,F,c,G,ue,C)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,C),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,C)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ue),v.props=c,v.state=ue,v.context=C,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return Ch(n,r,a,c,f,d)}function Ch(n,r,a,c,d,f){pm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&wp(r,a,!1),Sr(n,r,f);c=r.stateNode,H0.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Ys(r,n.child,null,f),r.child=Ys(r,null,I,f)):qt(n,r,I,f),r.memoizedState=c.state,d&&wp(r,a,!0),r.child}function gm(n){var r=n.stateNode;r.pendingContext?_p(n,r.pendingContext,r.pendingContext!==r.context):r.context&&_p(n,r.context,!1),hh(n,r.containerInfo)}function ym(n,r,a,c,d){return Qs(),ih(d),r.flags|=256,qt(n,r,a,c),r.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ze,d&1),n===null)return rh(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=yu(v,c,0,null),n=ss(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Ph(a),r.memoizedState=Rh,n):Nh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return W0(n,r,v,c,I,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=li(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?f=li(I,f):(f=ss(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=Rh,c}return f=n.child,n=f.sibling,c=li(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Nh(n,r){return r=yu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function iu(n,r,a,c){return c!==null&&ih(c),Ys(r,n.child,null,a),n=Nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function W0(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=Ah(Error(t(422))),iu(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=yu({mode:"visible",children:c.children},d,0,null),f=ss(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Ys(r,n.child,null,v),r.child.memoizedState=Ph(v),r.memoizedState=Rh,f);if((r.mode&1)===0)return iu(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(t(419)),c=Ah(f,c,void 0),iu(n,r,v,c)}if(I=(v&n.childLanes)!==0,Kt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Tr(n,d),Rn(c,n,d,-1))}return Gh(),c=Ah(Error(t(421))),iu(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=sw.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,ln=Xr(d.nextSibling),an=r,Je=!0,An=null,n!==null&&(fn[pn++]=wr,fn[pn++]=Er,fn[pn++]=Yi,wr=n.id,Er=n.overflow,Yi=r),r=Nh(r,c.children),r.flags|=4096,r)}function vm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),lh(n.return,r,a)}function bh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function wm(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(qt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,a,r);else if(n.tag===19)vm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),bh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}bh(r,!0,a,null,f);break;case"together":bh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function su(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),ts|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=li(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function G0(n,r,a){switch(r.tag){case 3:gm(r),Qs();break;case 5:Vp(r);break;case 1:Gt(r.type)&&zl(r);break;case 4:hh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;We(Gl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?_m(n,r,a):(We(Ze,Ze.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return wm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,fm(n,r,a)}return Sr(n,r,a)}var Em,Dh,Tm,Im;Em=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dh=function(){},Tm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Zi(Xn.current);var f=null;switch(a){case"input":d=Vr(n,d),c=Vr(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=Oo(n,d),c=Oo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}En(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var C=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==I&&(C!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||C&&C.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in C)C.hasOwnProperty(v)&&I[v]!==C[v]&&(a||(a={}),a[v]=C[v])}else a||(f||(f=[]),f.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(f=f||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&Qe("scroll",n),f||I===C||(f=[])):(f=f||[]).push(F,C))}a&&(f=f||[]).push("style",a);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},Im=function(n,r,a,c){a!==c&&(r.flags|=4)};function Ea(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function K0(n,r,a){var c=r.pendingProps;switch(th(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(r),null;case 1:return Gt(r.type)&&Ul(),Mt(r),null;case 3:return c=r.stateNode,Zs(),Ye(Wt),Ye(Ot),ph(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Hl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,An!==null&&(qh(An),An=null))),Dh(n,r),Mt(r),null;case 5:dh(r);var d=Zi(ga.current);if(a=r.type,n!==null&&r.stateNode!=null)Tm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Mt(r),null}if(n=Zi(Xn.current),Hl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Yn]=r,c[ha]=f,n=(r.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<la.length;d++)Qe(la[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Dt(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":Lo(c,f),Qe("invalid",c)}En(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var I=f[v];v==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&Ml(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&Ml(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":Dr(c),Vo(c,f,!0);break;case"textarea":Dr(c),Or(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=jl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=r,n[ha]=c,Em(n,r,!1,!1),r.stateNode=n;e:{switch(v=Ts(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<la.length;d++)Qe(la[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Dt(n,c),d=Vr(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":Lo(n,c),d=Oo(n,c),Qe("invalid",n);break;default:d=c}En(a,d),I=d;for(f in I)if(I.hasOwnProperty(f)){var C=I[f];f==="style"?Es(n,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&hl(n,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Vi(n,C):typeof C=="number"&&Vi(n,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Qe("scroll",n):C!=null&&Ee(n,f,C,v))}switch(a){case"input":Dr(n),Vo(n,c,!1);break;case"textarea":Dr(n),Or(n);break;case"option":c.value!=null&&n.setAttribute("value",""+re(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?wn(n,!!c.multiple,f,!1):c.defaultValue!=null&&wn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mt(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Zi(ga.current),Zi(Xn.current),Hl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Yn]=r,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Ml(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ml(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=r,r.stateNode=c}return Mt(r),null;case 13:if(Ye(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xp(),Qs(),r.flags|=98560,f=!1;else if(f=Hl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Yn]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mt(r),f=!1}else An!==null&&(qh(An),An=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?_t===0&&(_t=3):Gh())),r.updateQueue!==null&&(r.flags|=4),Mt(r),null);case 4:return Zs(),Dh(n,r),n===null&&ua(r.stateNode.containerInfo),Mt(r),null;case 10:return ah(r.type._context),Mt(r),null;case 17:return Gt(r.type)&&Ul(),Mt(r),null;case 19:if(Ye(Ze),f=r.memoizedState,f===null)return Mt(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)Ea(f,!1);else{if(_t!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Xl(n),v!==null){for(r.flags|=128,Ea(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ke()>ro&&(r.flags|=128,c=!0,Ea(f,!1),r.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ea(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Mt(r),null}else 2*Ke()-f.renderingStartTime>ro&&a!==1073741824&&(r.flags|=128,c=!0,Ea(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ke(),r.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),r):(Mt(r),null);case 22:case 23:return Wh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(Mt(r),r.subtreeFlags&6&&(r.flags|=8192)):Mt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Q0(n,r){switch(th(r),r.tag){case 1:return Gt(r.type)&&Ul(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zs(),Ye(Wt),Ye(Ot),ph(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return dh(r),null;case 13:if(Ye(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ye(Ze),null;case 4:return Zs(),null;case 10:return ah(r.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var ou=!1,jt=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function to(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,r,c)}else a.current=null}function Vh(n,r,a){try{a()}catch(c){it(n,r,c)}}var Sm=!1;function X0(n,r){if(Wc=mr,n=np(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,I=-1,C=-1,F=0,K=0,Q=n,G=null;t:for(;;){for(var se;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==f||c!==0&&Q.nodeType!==3||(C=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(se=Q.firstChild)!==null;)G=Q,Q=se;for(;;){if(Q===n)break t;if(G===a&&++F===d&&(I=v),G===f&&++K===c&&(C=v),(se=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=se}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:n,selectionRange:a},mr=!1,ae=r;ae!==null;)if(r=ae,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ae=n;else for(;ae!==null;){r=ae;try{var ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,at=ue.memoizedState,L=r.stateNode,D=L.getSnapshotBeforeUpdate(r.elementType===r.type?ce:xn(r.type,ce),at);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ae=n;break}ae=r.return}return ue=Sm,Sm=!1,ue}function Ta(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Vh(r,a,f)}d=d.next}while(d!==c)}}function au(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Oh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Am(n){var r=n.alternate;r!==null&&(n.alternate=null,Am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yn],delete r[ha],delete r[Xc],delete r[D0],delete r[V0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(Lh(n,r,a),n=n.sibling;n!==null;)Lh(n,r,a),n=n.sibling}function Mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,r,a),n=n.sibling;n!==null;)Mh(n,r,a),n=n.sibling}var Ct=null,kn=!1;function ri(n,r,a){for(a=a.child;a!==null;)Cm(n,r,a),a=a.sibling}function Cm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Fi,a)}catch{}switch(a.tag){case 5:jt||to(a,r);case 6:var c=Ct,d=kn;Ct=null,ri(n,r,a),Ct=c,kn=d,Ct!==null&&(kn?(n=Ct,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(kn?(n=Ct,a=a.stateNode,n.nodeType===8?Yc(n.parentNode,a):n.nodeType===1&&Yc(n,a),Gr(n)):Yc(Ct,a.stateNode));break;case 4:c=Ct,d=kn,Ct=a.stateNode.containerInfo,kn=!0,ri(n,r,a),Ct=c,kn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Vh(a,r,v),d=d.next}while(d!==c)}ri(n,r,a);break;case 1:if(!jt&&(to(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){it(a,r,I)}ri(n,r,a);break;case 21:ri(n,r,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,ri(n,r,a),jt=c):ri(n,r,a);break;default:ri(n,r,a)}}function Rm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Y0),r.forEach(function(c){var d=ow.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Cn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Ct=I.stateNode,kn=!1;break e;case 3:Ct=I.stateNode.containerInfo,kn=!0;break e;case 4:Ct=I.stateNode.containerInfo,kn=!0;break e}I=I.return}if(Ct===null)throw Error(t(160));Cm(f,v,d),Ct=null,kn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){it(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pm(r,n),r=r.sibling}function Pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(r,n),Zn(n),c&4){try{Ta(3,n,n.return),au(3,n)}catch(ce){it(n,n.return,ce)}try{Ta(5,n,n.return)}catch(ce){it(n,n.return,ce)}}break;case 1:Cn(r,n),Zn(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(Cn(r,n),Zn(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{Vi(d,"")}catch(ce){it(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&vs(d,f),Ts(I,v);var F=Ts(I,f);for(v=0;v<C.length;v+=2){var K=C[v],Q=C[v+1];K==="style"?Es(d,Q):K==="dangerouslySetInnerHTML"?hl(d,Q):K==="children"?Vi(d,Q):Ee(d,K,Q,F)}switch(I){case"input":Di(d,f);break;case"textarea":cl(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var se=f.value;se!=null?wn(d,!!f.multiple,se,!1):G!==!!f.multiple&&(f.defaultValue!=null?wn(d,!!f.multiple,f.defaultValue,!0):wn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ha]=f}catch(ce){it(n,n.return,ce)}}break;case 6:if(Cn(r,n),Zn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ce){it(n,n.return,ce)}}break;case 3:if(Cn(r,n),Zn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(r.containerInfo)}catch(ce){it(n,n.return,ce)}break;case 4:Cn(r,n),Zn(n);break;case 13:Cn(r,n),Zn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Uh=Ke())),c&4&&Rm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(jt=(F=jt)||K,Cn(r,n),jt=F):Cn(r,n),Zn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(ae=n,K=n.child;K!==null;){for(Q=ae=K;ae!==null;){switch(G=ae,se=G.child,G.tag){case 0:case 11:case 14:case 15:Ta(4,G,G.return);break;case 1:to(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,ue.props=r.memoizedProps,ue.state=r.memoizedState,ue.componentWillUnmount()}catch(ce){it(c,a,ce)}}break;case 5:to(G,G.return);break;case 22:if(G.memoizedState!==null){Dm(Q);continue}}se!==null?(se.return=G,ae=se):Dm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=Q.stateNode,C=Q.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=jr("display",v))}catch(ce){it(n,n.return,ce)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ce){it(n,n.return,ce)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Cn(r,n),Zn(n),c&4&&Rm(n);break;case 21:break;default:Cn(r,n),Zn(n)}}function Zn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vi(d,""),c.flags&=-33);var f=km(n);Mh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=km(n);Lh(n,I,v);break;default:throw Error(t(161))}}catch(C){it(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function J0(n,r,a){ae=n,Nm(n)}function Nm(n,r,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ou;if(!v){var I=d.alternate,C=I!==null&&I.memoizedState!==null||jt;I=ou;var F=jt;if(ou=v,(jt=C)&&!F)for(ae=d;ae!==null;)v=ae,C=v.child,v.tag===22&&v.memoizedState!==null?Vm(d):C!==null?(C.return=v,ae=C):Vm(d);for(;f!==null;)ae=f,Nm(f),f=f.sibling;ae=d,ou=I,jt=F}bm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ae=f):bm(n)}}function bm(n){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:jt||au(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:xn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Dp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Dp(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Gr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||r.flags&512&&Oh(r)}catch(G){it(r,r.return,G)}}if(r===n){ae=null;break}if(a=r.sibling,a!==null){a.return=r.return,ae=a;break}ae=r.return}}function Dm(n){for(;ae!==null;){var r=ae;if(r===n){ae=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ae=a;break}ae=r.return}}function Vm(n){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{au(4,r)}catch(C){it(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){it(r,d,C)}}var f=r.return;try{Oh(r)}catch(C){it(r,f,C)}break;case 5:var v=r.return;try{Oh(r)}catch(C){it(r,v,C)}}}catch(C){it(r,r.return,C)}if(r===n){ae=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ae=I;break}ae=r.return}}var Z0=Math.ceil,lu=Pe.ReactCurrentDispatcher,jh=Pe.ReactCurrentOwner,yn=Pe.ReactCurrentBatchConfig,je=0,Tt=null,ft=null,Rt=0,un=0,no=Jr(0),_t=0,Ia=null,ts=0,uu=0,Fh=0,Sa=null,Qt=null,Uh=0,ro=1/0,Ar=null,cu=!1,zh=null,ii=null,hu=!1,si=null,du=0,Aa=0,Bh=null,fu=-1,pu=0;function Ht(){return(je&6)!==0?Ke():fu!==-1?fu:fu=Ke()}function oi(n){return(n.mode&1)===0?1:(je&2)!==0&&Rt!==0?Rt&-Rt:L0.transition!==null?(pu===0&&(pu=Wo()),pu):(n=Le,n!==0||(n=window.event,n=n===void 0?16:bs(n.type)),n)}function Rn(n,r,a,c){if(50<Aa)throw Aa=0,Bh=null,Error(t(185));$i(n,a,c),((je&2)===0||n!==Tt)&&(n===Tt&&((je&2)===0&&(uu|=a),_t===4&&ai(n,Rt)),Yt(n,c),a===1&&je===0&&(r.mode&1)===0&&(ro=Ke()+500,Bl&&ei()))}function Yt(n,r){var a=n.callbackNode;Bi(n,r);var c=dr(n,n===Tt?Rt:0);if(c===0)a!==null&&As(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&As(a),r===1)n.tag===0?O0(Lm.bind(null,n)):Ep(Lm.bind(null,n)),N0(function(){(je&6)===0&&ei()}),a=null;else{switch(Un(c)){case 1:a=xs;break;case 4:a=$o;break;case 16:a=ji;break;case 536870912:a=ks;break;default:a=ji}a=qm(a,Om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Om(n,r){if(fu=-1,pu=0,(je&6)!==0)throw Error(t(327));var a=n.callbackNode;if(io()&&n.callbackNode!==a)return null;var c=dr(n,n===Tt?Rt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=mu(n,c);else{r=c;var d=je;je|=2;var f=jm();(Tt!==n||Rt!==r)&&(Ar=null,ro=Ke()+500,rs(n,r));do try{nw();break}catch(I){Mm(n,I)}while(!0);oh(),lu.current=f,je=d,ft!==null?r=0:(Tt=null,Rt=0,r=_t)}if(r!==0){if(r===2&&(d=Ho(n),d!==0&&(c=d,r=$h(n,d))),r===1)throw a=Ia,rs(n,0),ai(n,c),Yt(n,Ke()),a;if(r===6)ai(n,c);else{if(d=n.current.alternate,(c&30)===0&&!ew(d)&&(r=mu(n,c),r===2&&(f=Ho(n),f!==0&&(c=f,r=$h(n,f))),r===1))throw a=Ia,rs(n,0),ai(n,c),Yt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:is(n,Qt,Ar);break;case 3:if(ai(n,c),(c&130023424)===c&&(r=Uh+500-Ke(),10<r)){if(dr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Qc(is.bind(null,n,Qt,Ar),r);break}is(n,Qt,Ar);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Z0(c/1960))-c,10<c){n.timeoutHandle=Qc(is.bind(null,n,Qt,Ar),c);break}is(n,Qt,Ar);break;case 5:is(n,Qt,Ar);break;default:throw Error(t(329))}}}return Yt(n,Ke()),n.callbackNode===a?Om.bind(null,n):null}function $h(n,r){var a=Sa;return n.current.memoizedState.isDehydrated&&(rs(n,r).flags|=256),n=mu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&qh(r)),n}function qh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function ew(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Sn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ai(n,r){for(r&=~Fh,r&=~uu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-tn(r),c=1<<a;n[a]=-1,r&=~c}}function Lm(n){if((je&6)!==0)throw Error(t(327));io();var r=dr(n,0);if((r&1)===0)return Yt(n,Ke()),null;var a=mu(n,r);if(n.tag!==0&&a===2){var c=Ho(n);c!==0&&(r=c,a=$h(n,c))}if(a===1)throw a=Ia,rs(n,0),ai(n,r),Yt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,is(n,Qt,Ar),Yt(n,Ke()),null}function Hh(n,r){var a=je;je|=1;try{return n(r)}finally{je=a,je===0&&(ro=Ke()+500,Bl&&ei())}}function ns(n){si!==null&&si.tag===0&&(je&6)===0&&io();var r=je;je|=1;var a=yn.transition,c=Le;try{if(yn.transition=null,Le=1,n)return n()}finally{Le=c,yn.transition=a,je=r,(je&6)===0&&ei()}}function Wh(){un=no.current,Ye(no)}function rs(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,P0(a)),ft!==null)for(a=ft.return;a!==null;){var c=a;switch(th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ul();break;case 3:Zs(),Ye(Wt),Ye(Ot),ph();break;case 5:dh(c);break;case 4:Zs();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:ah(c.type._context);break;case 22:case 23:Wh()}a=a.return}if(Tt=n,ft=n=li(n.current,null),Rt=un=r,_t=0,Ia=null,Fh=uu=ts=0,Qt=Sa=null,Ji!==null){for(r=0;r<Ji.length;r++)if(a=Ji[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ji=null}return n}function Mm(n,r){do{var a=ft;try{if(oh(),Jl.current=nu,Zl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Zl=!1}if(es=0,Et=yt=et=null,ya=!1,_a=0,jh.current=null,a===null||a.return===null){_t=1,Ia=r,ft=null;break}e:{var f=n,v=a.return,I=a,C=r;if(r=Rt,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var se=lm(v);if(se!==null){se.flags&=-257,um(se,v,I,f,r),se.mode&1&&am(f,F,r),r=se,C=F;var ue=r.updateQueue;if(ue===null){var ce=new Set;ce.add(C),r.updateQueue=ce}else ue.add(C);break e}else{if((r&1)===0){am(f,F,r),Gh();break e}C=Error(t(426))}}else if(Je&&I.mode&1){var at=lm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),um(at,v,I,f,r),ih(eo(C,I));break e}}f=C=eo(C,I),_t!==4&&(_t=2),Sa===null?Sa=[f]:Sa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=sm(f,C,r);bp(f,L);break e;case 1:I=C;var D=f.type,j=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ii===null||!ii.has(j)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=om(f,I,r);bp(f,X);break e}}f=f.return}while(f!==null)}Um(a)}catch(he){r=he,ft===a&&a!==null&&(ft=a=a.return);continue}break}while(!0)}function jm(){var n=lu.current;return lu.current=nu,n===null?nu:n}function Gh(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||(ts&268435455)===0&&(uu&268435455)===0||ai(Tt,Rt)}function mu(n,r){var a=je;je|=2;var c=jm();(Tt!==n||Rt!==r)&&(Ar=null,rs(n,r));do try{tw();break}catch(d){Mm(n,d)}while(!0);if(oh(),je=a,lu.current=c,ft!==null)throw Error(t(261));return Tt=null,Rt=0,_t}function tw(){for(;ft!==null;)Fm(ft)}function nw(){for(;ft!==null&&!Mi();)Fm(ft)}function Fm(n){var r=$m(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?Um(n):ft=r,jh.current=null}function Um(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=K0(a,r,un),a!==null){ft=a;return}}else{if(a=Q0(a,r),a!==null){a.flags&=32767,ft=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,ft=null;return}}if(r=r.sibling,r!==null){ft=r;return}ft=r=n}while(r!==null);_t===0&&(_t=5)}function is(n,r,a){var c=Le,d=yn.transition;try{yn.transition=null,Le=1,rw(n,r,a,c)}finally{yn.transition=d,Le=c}return null}function rw(n,r,a,c){do io();while(si!==null);if((je&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Dc(n,f),n===Tt&&(ft=Tt=null,Rt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||hu||(hu=!0,qm(ji,function(){return io(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yn.transition,yn.transition=null;var v=Le;Le=1;var I=je;je|=4,jh.current=null,X0(n,a),Pm(a,n),I0(Gc),mr=!!Wc,Gc=Wc=null,n.current=a,J0(a),hr(),je=I,Le=v,yn.transition=f}else n.current=a;if(hu&&(hu=!1,si=n,du=d),f=n.pendingLanes,f===0&&(ii=null),Tl(a.stateNode),Yt(n,Ke()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(cu)throw cu=!1,n=zh,zh=null,n;return(du&1)!==0&&n.tag!==0&&io(),f=n.pendingLanes,(f&1)!==0?n===Bh?Aa++:(Aa=0,Bh=n):Aa=0,ei(),null}function io(){if(si!==null){var n=Un(du),r=yn.transition,a=Le;try{if(yn.transition=null,Le=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,du=0,(je&6)!==0)throw Error(t(331));var d=je;for(je|=4,ae=n.current;ae!==null;){var f=ae,v=f.child;if((ae.flags&16)!==0){var I=f.deletions;if(I!==null){for(var C=0;C<I.length;C++){var F=I[C];for(ae=F;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:Ta(8,K,f)}var Q=K.child;if(Q!==null)Q.return=K,ae=Q;else for(;ae!==null;){K=ae;var G=K.sibling,se=K.return;if(Am(K),K===F){ae=null;break}if(G!==null){G.return=se,ae=G;break}ae=se}}}var ue=f.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var at=ce.sibling;ce.sibling=null,ce=at}while(ce!==null)}}ae=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ae=v;else e:for(;ae!==null;){if(f=ae,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ta(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ae=L;break e}ae=f.return}}var D=n.current;for(ae=D;ae!==null;){v=ae;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ae=j;else e:for(v=D;ae!==null;){if(I=ae,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:au(9,I)}}catch(he){it(I,I.return,he)}if(I===v){ae=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,ae=X;break e}ae=I.return}}if(je=d,ei(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Fi,n)}catch{}c=!0}return c}finally{Le=a,yn.transition=r}}return!1}function zm(n,r,a){r=eo(a,r),r=sm(n,r,1),n=ni(n,r,1),r=Ht(),n!==null&&($i(n,1,r),Yt(n,r))}function it(n,r,a){if(n.tag===3)zm(n,n,a);else for(;r!==null;){if(r.tag===3){zm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=eo(a,n),n=om(r,n,1),r=ni(r,n,1),n=Ht(),r!==null&&($i(r,1,n),Yt(r,n));break}}r=r.return}}function iw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Rt&a)===a&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>Ke()-Uh?rs(n,0):Fh|=a),Yt(n,r)}function Bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var a=Ht();n=Tr(n,r),n!==null&&($i(n,r,a),Yt(n,a))}function sw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Bm(n,a)}function ow(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Bm(n,a)}var $m;$m=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,G0(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Je&&(r.flags&1048576)!==0&&Tp(r,ql,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;su(n,r),n=r.pendingProps;var d=Ws(r,Ot.current);Js(r,a),d=yh(null,r,c,n,d,a);var f=_h();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(f=!0,zl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ch(r),d.updater=ru,r.stateNode=d,d._reactInternals=r,Sh(r,c,n,a),r=Ch(null,r,c,!0,f,a)):(r.tag=0,Je&&f&&eh(r),qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(su(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=lw(c),n=xn(c,n),d){case 0:r=kh(null,r,c,n,a);break e;case 1:r=mm(null,r,c,n,a);break e;case 11:r=cm(null,r,c,n,a);break e;case 14:r=hm(null,r,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),kh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),mm(n,r,c,d,a);case 3:e:{if(gm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,Np(n,r),Yl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=eo(Error(t(423)),r),r=ym(n,r,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),r),r=ym(n,r,c,a,d);break e}else for(ln=Xr(r.stateNode.containerInfo.firstChild),an=r,Je=!0,An=null,a=Rp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),c===d){r=Sr(n,r,a);break e}qt(n,r,c,a)}r=r.child}return r;case 5:return Vp(r),n===null&&rh(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Kc(c,d)?v=null:f!==null&&Kc(c,f)&&(r.flags|=32),pm(n,r),qt(n,r,v,a),r.child;case 6:return n===null&&rh(r),null;case 13:return _m(n,r,a);case 4:return hh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ys(r,null,c,a):qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),cm(n,r,c,d,a);case 7:return qt(n,r,r.pendingProps,a),r.child;case 8:return qt(n,r,r.pendingProps.children,a),r.child;case 12:return qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,We(Gl,c._currentValue),c._currentValue=v,f!==null)if(Sn(f.value,v)){if(f.children===d.children&&!Wt.current){r=Sr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var I=f.dependencies;if(I!==null){v=f.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=Ir(-1,a&-a),C.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?C.next=C:(C.next=K.next,K.next=C),F.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),lh(f.return,a,r),I.lanes|=a;break}C=C.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),lh(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Js(r,a),d=mn(d),c=c(d),r.flags|=1,qt(n,r,c,a),r.child;case 14:return c=r.type,d=xn(c,r.pendingProps),d=xn(c.type,d),hm(n,r,c,d,a);case 15:return dm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),su(n,r),r.tag=1,Gt(c)?(n=!0,zl(r)):n=!1,Js(r,a),rm(r,c,d),Sh(r,c,d,a),Ch(null,r,c,!0,n,a);case 19:return wm(n,r,a);case 22:return fm(n,r,a)}throw Error(t(156,r.tag))};function qm(n,r){return Bo(n,r)}function aw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new aw(n,r,a,c)}function Kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lw(n){if(typeof n=="function")return Kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Re)return 14}return 2}function li(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Kh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ss(a.children,d,f,r);case S:v=8,d|=8;break;case k:return n=_n(12,a,r,d|2),n.elementType=k,n.lanes=f,n;case A:return n=_n(13,a,r,d),n.elementType=A,n.lanes=f,n;case le:return n=_n(19,a,r,d),n.elementType=le,n.lanes=f,n;case He:return yu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:v=10;break e;case P:v=9;break e;case O:v=11;break e;case Re:v=14;break e;case ut:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function ss(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function yu(n,r,a,c){return n=_n(22,n,c,r),n.elementType=He,n.lanes=a,n.stateNode={isHidden:!1},n}function Qh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Yh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function uw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xh(n,r,a,c,d,f,v,I,C){return n=new uw(n,r,a,I,C),r===1?(r=1,f===!0&&(r|=8)):r=0,f=_n(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(f),n}function cw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Hm(n){if(!n)return Zr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return vp(n,a,r)}return r}function Wm(n,r,a,c,d,f,v,I,C){return n=Xh(a,c,!0,n,d,f,v,I,C),n.context=Hm(null),a=n.current,c=Ht(),d=oi(a),f=Ir(c,d),f.callback=r??null,ni(a,f,d),n.current.lanes=d,$i(n,d,c),Yt(n,c),n}function _u(n,r,a,c){var d=r.current,f=Ht(),v=oi(d);return a=Hm(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ni(d,r,v),n!==null&&(Rn(n,d,v,f),Ql(n,d,v)),v}function vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Jh(n,r){Gm(n,r),(n=n.alternate)&&Gm(n,r)}function hw(){return null}var Km=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zh(n){this._internalRoot=n}wu.prototype.render=Zh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_u(n,r,null,null)},wu.prototype.unmount=Zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ns(function(){_u(null,n,null,null)}),r[_r]=null}};function wu(n){this._internalRoot=n}wu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Xo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<nn.length&&r!==0&&r<nn[a].priority;a++);nn.splice(a,0,n),a===0&&Ps(n)}};function ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function dw(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=vu(v);f.call(F)}}var v=Wm(r,c,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=v,n[_r]=v.current,ua(n.nodeType===8?n.parentNode:n),ns(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=vu(C);I.call(F)}}var C=Xh(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=C,n[_r]=C.current,ua(n.nodeType===8?n.parentNode:n),ns(function(){_u(r,C,a,c)}),C}function Tu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var I=d;d=function(){var C=vu(v);I.call(C)}}_u(r,v,n,d)}else v=dw(a,r,n,d,c);return vu(v)}Qo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ue(r.pendingLanes);a!==0&&(Ko(r,a|1),Yt(r,Ke()),(je&6)===0&&(ro=Ke()+500,ei()))}break;case 13:ns(function(){var c=Tr(n,1);if(c!==null){var d=Ht();Rn(c,n,1,d)}}),Jh(n,1)}},Cs=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=Ht();Rn(r,n,134217728,a)}Jh(n,134217728)}},Yo=function(n){if(n.tag===13){var r=oi(n),a=Tr(n,r);if(a!==null){var c=Ht();Rn(a,n,r,c)}Jh(n,r)}},Xo=function(){return Le},Jo=function(n,r){var a=Le;try{return Le=n,r()}finally{Le=a}},lr=function(n,r,a){switch(r){case"input":if(Di(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Fl(c);if(!d)throw Error(t(90));bi(c),Di(c,d)}}}break;case"textarea":cl(n,a);break;case"select":r=a.value,r!=null&&wn(n,!!a.multiple,r,!1)}},fl=Hh,pl=ns;var fw={usingClientEntryPoint:!1,Events:[da,qs,Fl,Ur,zr,Hh]},xa={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pw={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=El(n),n===null?null:n.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{Fi=Iu.inject(pw),en=Iu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(r))throw Error(t(200));return cw(n,r,null,a)},Xt.createRoot=function(n,r){if(!ed(n))throw Error(t(299));var a=!1,c="",d=Km;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Xh(n,1,!1,null,null,a,!1,c,d),n[_r]=r.current,ua(n.nodeType===8?n.parentNode:n),new Zh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=El(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return ns(n)},Xt.hydrate=function(n,r,a){if(!Eu(r))throw Error(t(200));return Tu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!ed(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Wm(r,null,n,1,a??null,d,!1,f,v),n[_r]=r.current,ua(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new wu(r)},Xt.render=function(n,r,a){if(!Eu(r))throw Error(t(200));return Tu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!Eu(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Tu(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Xt.unstable_batchedUpdates=Hh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var rg;function Iw(){if(rg)return rd.exports;rg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rd.exports=Tw(),rd.exports}var ig;function Sw(){if(ig)return Su;ig=1;var i=Iw();return Su.createRoot=i.createRoot,Su.hydrateRoot=i.hydrateRoot,Su}var Aw=Sw();const xw=Uy(Aw);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=tt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>tt.createElement("svg",{ref:y,...Cw,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:zy("lucide",o),...m},[...h.map(([_,E])=>tt.createElement(_,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(i,e)=>{const t=tt.forwardRef(({className:s,...o},u)=>tt.createElement(Rw,{ref:u,iconNode:e,className:zy(`lucide-${kw(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=$t("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=$t("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=$t("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=$t("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=$t("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=$t("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=$t("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=$t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=$t("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=$t("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=$t("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=$t("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=$t("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=$t("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=$t("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=$t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Lw=()=>{};var cg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Mw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,E=u>>2,x=(u&3)<<4|m>>4;let b=(m&15)<<2|_>>6,B=_&63;y||(B=64,h||(b=64)),s.push(t[E],t[x],t[b],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(By(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Mw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const x=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||x==null)throw new jw;const b=u<<2|m>>4;if(s.push(b),_!==64){const B=m<<4&240|_>>2;if(s.push(B),x!==64){const J=_<<6&192|x;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fw=function(i){const e=By(i);return $y.encodeByteArray(e,!0)},Gu=function(i){return Fw(i).replace(/\./g,"")},qy=function(i){try{return $y.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=()=>Uw().__FIREBASE_DEFAULTS__,Bw=()=>{if(typeof process>"u"||typeof cg>"u")return;const i=cg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},$w=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qy(i[1]);return e&&JSON.parse(e)},dc=()=>{try{return Lw()||zw()||Bw()||$w()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Hy=i=>{var e,t;return(t=(e=dc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},qw=i=>{const e=Hy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Wy=()=>{var i;return(i=dc())==null?void 0:i.config},Gy=i=>{var e;return(e=dc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ky(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Gu(JSON.stringify(t)),Gu(JSON.stringify(h)),""].join(".")}const La={};function Gw(){const i={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?i.emulator.push(e):i.prod.push(e);return i}function Kw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let hg=!1;function Qy(i,e){if(typeof window>"u"||typeof document>"u"||!Ao(window.location.host)||La[i]===e||La[i]||hg)return;La[i]=e;function t(b){return`__firebase__banner__${b}`}const s="__firebase__banner",u=Gw().prod.length>0;function h(){const b=document.getElementById(s);b&&b.remove()}function m(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function y(b,B){b.setAttribute("width","24"),b.setAttribute("id",B),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function _(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{hg=!0,h()},b}function E(b,B){b.setAttribute("id",B),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function x(){const b=Kw(s),B=t("text"),J=document.getElementById(B)||document.createElement("span"),Y=t("learnmore"),q=document.getElementById(Y)||document.createElement("a"),Te=t("preprendIcon"),ge=document.getElementById(Te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const Ee=b.element;m(Ee),E(q,Y);const Pe=_();y(ge,Te),Ee.append(ge,J,q,Pe),document.body.appendChild(Ee)}u?(J.innerText="Preview backend disconnected.",ge.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ge.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function Yw(){var e;const i=(e=dc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eE(){const i=Bt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function tE(){return!Yw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nE(){try{return typeof indexedDB=="object"}catch{return!1}}function rE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="FirebaseError";class br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=iE,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?sE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new br(o,m,s)}}function sE(i,e){return i.replace(oE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const oE=/\{\$([^}]+)}/g;function aE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function us(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(dg(u)&&dg(h)){if(!us(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function dg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Na(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ba(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function lE(i,e){const t=new uE(i,e);return t.subscribe.bind(t)}class uE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ad),o.error===void 0&&(o.error=ad),o.complete===void 0&&(o.complete=ad);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function ad(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(i){return i&&i._delegate?i._delegate:i}class cs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Hw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dE(i){return i===as?void 0:i}function fE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(De||(De={}));const mE={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},gE=De.INFO,yE={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},_E=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=yE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=gE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const vE=(i,e)=>e.some(t=>i instanceof t);let fg,pg;function wE(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EE(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yy=new WeakMap,wd=new WeakMap,Xy=new WeakMap,ld=new WeakMap,Qd=new WeakMap;function TE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(gi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Yy.set(t,i)}).catch(()=>{}),Qd.set(e,i),e}function IE(i){if(wd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});wd.set(i,e)}let Ed={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return wd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Xy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function SE(i){Ed=i(Ed)}function AE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ud(this),e,...t);return Xy.set(s,e.sort?e.sort():[e]),gi(s)}:EE().includes(i)?function(...e){return i.apply(ud(this),e),gi(Yy.get(this))}:function(...e){return gi(i.apply(ud(this),e))}}function xE(i){return typeof i=="function"?AE(i):(i instanceof IDBTransaction&&IE(i),vE(i,wE())?new Proxy(i,Ed):i)}function gi(i){if(i instanceof IDBRequest)return TE(i);if(ld.has(i))return ld.get(i);const e=xE(i);return e!==i&&(ld.set(i,e),Qd.set(e,i)),e}const ud=i=>Qd.get(i);function kE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=gi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(gi(h.result),y.oldVersion,y.newVersion,gi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const CE=["get","getKey","getAll","getAllKeys","count"],RE=["put","add","delete","clear"],cd=new Map;function mg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=RE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||CE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return cd.set(e,u),u}SE(i=>({...i,get:(e,t,s)=>mg(e,t)||i.get(e,t,s),has:(e,t)=>!!mg(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(NE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function NE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",gg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Kd("@firebase/app"),bE="@firebase/app-compat",DE="@firebase/analytics-compat",VE="@firebase/analytics",OE="@firebase/app-check-compat",LE="@firebase/app-check",ME="@firebase/auth",jE="@firebase/auth-compat",FE="@firebase/database",UE="@firebase/data-connect",zE="@firebase/database-compat",BE="@firebase/functions",$E="@firebase/functions-compat",qE="@firebase/installations",HE="@firebase/installations-compat",WE="@firebase/messaging",GE="@firebase/messaging-compat",KE="@firebase/performance",QE="@firebase/performance-compat",YE="@firebase/remote-config",XE="@firebase/remote-config-compat",JE="@firebase/storage",ZE="@firebase/storage-compat",eT="@firebase/firestore",tT="@firebase/ai",nT="@firebase/firestore-compat",rT="firebase",iT="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="[DEFAULT]",sT={[Td]:"fire-core",[bE]:"fire-core-compat",[VE]:"fire-analytics",[DE]:"fire-analytics-compat",[LE]:"fire-app-check",[OE]:"fire-app-check-compat",[ME]:"fire-auth",[jE]:"fire-auth-compat",[FE]:"fire-rtdb",[UE]:"fire-data-connect",[zE]:"fire-rtdb-compat",[BE]:"fire-fn",[$E]:"fire-fn-compat",[qE]:"fire-iid",[HE]:"fire-iid-compat",[WE]:"fire-fcm",[GE]:"fire-fcm-compat",[KE]:"fire-perf",[QE]:"fire-perf-compat",[YE]:"fire-rc",[XE]:"fire-rc-compat",[JE]:"fire-gcs",[ZE]:"fire-gcs-compat",[eT]:"fire-fst",[nT]:"fire-fst-compat",[tT]:"fire-vertex","fire-js":"fire-js",[rT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Map,oT=new Map,Sd=new Map;function yg(i,e){try{i.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function yo(i){const e=i.name;if(Sd.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,i);for(const t of Ku.values())yg(t,i);for(const t of oT.values())yg(t,i);return!0}function Yd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Pn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ja("app","Firebase",aT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=iT;function Jy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Id,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=Wy()),!t)throw yi.create("no-options");const u=Ku.get(o);if(u){if(us(t,u.options)&&us(s,u.config))return u;throw yi.create("duplicate-app",{appName:o})}const h=new pE(o);for(const y of Sd.values())h.addComponent(y);const m=new lT(t,s,h);return Ku.set(o,m),m}function Zy(i=Id){const e=Ku.get(i);if(!e&&i===Id&&Wy())return Jy();if(!e)throw yi.create("no-app",{appName:i});return e}function _i(i,e,t){let s=sT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(h.join(" "));return}yo(new cs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="firebase-heartbeat-database",cT=1,Ba="firebase-heartbeat-store";let hd=null;function e_(){return hd||(hd=kE(uT,cT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(i=>{throw yi.create("idb-open",{originalErrorMessage:i.message})})),hd}async function hT(i){try{const t=(await e_()).transaction(Ba),s=await t.objectStore(Ba).get(t_(i));return await t.done,s}catch(e){if(e instanceof br)Cr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function _g(i,e){try{const s=(await e_()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,t_(i)),await s.done}catch(t){if(t instanceof br)Cr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function t_(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=1024,fT=30;class pT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=vg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>fT){const h=yT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vg(),{heartbeatsToSend:s,unsentEntries:o}=mT(this._heartbeatsCache.heartbeats),u=Gu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Cr.warn(t),""}}}function vg(){return new Date().toISOString().substring(0,10)}function mT(i,e=dT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),wg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),wg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wg(i){return Gu(JSON.stringify({version:2,heartbeats:i})).length}function yT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(i){yo(new cs("platform-logger",e=>new PE(e),"PRIVATE")),yo(new cs("heartbeat",e=>new pT(e),"PRIVATE")),_i(Td,gg,i),_i(Td,gg,"esm2020"),_i("fire-js","")}_T("");var vT="firebase",wT="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_i(vT,wT,"app");var Eg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,n_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function k(){}k.prototype=S.prototype,N.F=S.prototype,N.prototype=new k,N.prototype.constructor=N,N.D=function(R,P,O){for(var A=Array(arguments.length-2),le=2;le<arguments.length;le++)A[le-2]=arguments[le];return S.prototype[P].apply(R,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,k){k||(k=0);const R=Array(16);if(typeof S=="string")for(var P=0;P<16;++P)R[P]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(P=0;P<16;++P)R[P]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=N.g[0],k=N.g[1],P=N.g[2];let O=N.g[3],A;A=S+(O^k&(P^O))+R[0]+3614090360&4294967295,S=k+(A<<7&4294967295|A>>>25),A=O+(P^S&(k^P))+R[1]+3905402710&4294967295,O=S+(A<<12&4294967295|A>>>20),A=P+(k^O&(S^k))+R[2]+606105819&4294967295,P=O+(A<<17&4294967295|A>>>15),A=k+(S^P&(O^S))+R[3]+3250441966&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(O^k&(P^O))+R[4]+4118548399&4294967295,S=k+(A<<7&4294967295|A>>>25),A=O+(P^S&(k^P))+R[5]+1200080426&4294967295,O=S+(A<<12&4294967295|A>>>20),A=P+(k^O&(S^k))+R[6]+2821735955&4294967295,P=O+(A<<17&4294967295|A>>>15),A=k+(S^P&(O^S))+R[7]+4249261313&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(O^k&(P^O))+R[8]+1770035416&4294967295,S=k+(A<<7&4294967295|A>>>25),A=O+(P^S&(k^P))+R[9]+2336552879&4294967295,O=S+(A<<12&4294967295|A>>>20),A=P+(k^O&(S^k))+R[10]+4294925233&4294967295,P=O+(A<<17&4294967295|A>>>15),A=k+(S^P&(O^S))+R[11]+2304563134&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(O^k&(P^O))+R[12]+1804603682&4294967295,S=k+(A<<7&4294967295|A>>>25),A=O+(P^S&(k^P))+R[13]+4254626195&4294967295,O=S+(A<<12&4294967295|A>>>20),A=P+(k^O&(S^k))+R[14]+2792965006&4294967295,P=O+(A<<17&4294967295|A>>>15),A=k+(S^P&(O^S))+R[15]+1236535329&4294967295,k=P+(A<<22&4294967295|A>>>10),A=S+(P^O&(k^P))+R[1]+4129170786&4294967295,S=k+(A<<5&4294967295|A>>>27),A=O+(k^P&(S^k))+R[6]+3225465664&4294967295,O=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(O^S))+R[11]+643717713&4294967295,P=O+(A<<14&4294967295|A>>>18),A=k+(O^S&(P^O))+R[0]+3921069994&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(P^O&(k^P))+R[5]+3593408605&4294967295,S=k+(A<<5&4294967295|A>>>27),A=O+(k^P&(S^k))+R[10]+38016083&4294967295,O=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(O^S))+R[15]+3634488961&4294967295,P=O+(A<<14&4294967295|A>>>18),A=k+(O^S&(P^O))+R[4]+3889429448&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(P^O&(k^P))+R[9]+568446438&4294967295,S=k+(A<<5&4294967295|A>>>27),A=O+(k^P&(S^k))+R[14]+3275163606&4294967295,O=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(O^S))+R[3]+4107603335&4294967295,P=O+(A<<14&4294967295|A>>>18),A=k+(O^S&(P^O))+R[8]+1163531501&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(P^O&(k^P))+R[13]+2850285829&4294967295,S=k+(A<<5&4294967295|A>>>27),A=O+(k^P&(S^k))+R[2]+4243563512&4294967295,O=S+(A<<9&4294967295|A>>>23),A=P+(S^k&(O^S))+R[7]+1735328473&4294967295,P=O+(A<<14&4294967295|A>>>18),A=k+(O^S&(P^O))+R[12]+2368359562&4294967295,k=P+(A<<20&4294967295|A>>>12),A=S+(k^P^O)+R[5]+4294588738&4294967295,S=k+(A<<4&4294967295|A>>>28),A=O+(S^k^P)+R[8]+2272392833&4294967295,O=S+(A<<11&4294967295|A>>>21),A=P+(O^S^k)+R[11]+1839030562&4294967295,P=O+(A<<16&4294967295|A>>>16),A=k+(P^O^S)+R[14]+4259657740&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(k^P^O)+R[1]+2763975236&4294967295,S=k+(A<<4&4294967295|A>>>28),A=O+(S^k^P)+R[4]+1272893353&4294967295,O=S+(A<<11&4294967295|A>>>21),A=P+(O^S^k)+R[7]+4139469664&4294967295,P=O+(A<<16&4294967295|A>>>16),A=k+(P^O^S)+R[10]+3200236656&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(k^P^O)+R[13]+681279174&4294967295,S=k+(A<<4&4294967295|A>>>28),A=O+(S^k^P)+R[0]+3936430074&4294967295,O=S+(A<<11&4294967295|A>>>21),A=P+(O^S^k)+R[3]+3572445317&4294967295,P=O+(A<<16&4294967295|A>>>16),A=k+(P^O^S)+R[6]+76029189&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(k^P^O)+R[9]+3654602809&4294967295,S=k+(A<<4&4294967295|A>>>28),A=O+(S^k^P)+R[12]+3873151461&4294967295,O=S+(A<<11&4294967295|A>>>21),A=P+(O^S^k)+R[15]+530742520&4294967295,P=O+(A<<16&4294967295|A>>>16),A=k+(P^O^S)+R[2]+3299628645&4294967295,k=P+(A<<23&4294967295|A>>>9),A=S+(P^(k|~O))+R[0]+4096336452&4294967295,S=k+(A<<6&4294967295|A>>>26),A=O+(k^(S|~P))+R[7]+1126891415&4294967295,O=S+(A<<10&4294967295|A>>>22),A=P+(S^(O|~k))+R[14]+2878612391&4294967295,P=O+(A<<15&4294967295|A>>>17),A=k+(O^(P|~S))+R[5]+4237533241&4294967295,k=P+(A<<21&4294967295|A>>>11),A=S+(P^(k|~O))+R[12]+1700485571&4294967295,S=k+(A<<6&4294967295|A>>>26),A=O+(k^(S|~P))+R[3]+2399980690&4294967295,O=S+(A<<10&4294967295|A>>>22),A=P+(S^(O|~k))+R[10]+4293915773&4294967295,P=O+(A<<15&4294967295|A>>>17),A=k+(O^(P|~S))+R[1]+2240044497&4294967295,k=P+(A<<21&4294967295|A>>>11),A=S+(P^(k|~O))+R[8]+1873313359&4294967295,S=k+(A<<6&4294967295|A>>>26),A=O+(k^(S|~P))+R[15]+4264355552&4294967295,O=S+(A<<10&4294967295|A>>>22),A=P+(S^(O|~k))+R[6]+2734768916&4294967295,P=O+(A<<15&4294967295|A>>>17),A=k+(O^(P|~S))+R[13]+1309151649&4294967295,k=P+(A<<21&4294967295|A>>>11),A=S+(P^(k|~O))+R[4]+4149444226&4294967295,S=k+(A<<6&4294967295|A>>>26),A=O+(k^(S|~P))+R[11]+3174756917&4294967295,O=S+(A<<10&4294967295|A>>>22),A=P+(S^(O|~k))+R[2]+718787259&4294967295,P=O+(A<<15&4294967295|A>>>17),A=k+(O^(P|~S))+R[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+P&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.v=function(N,S){S===void 0&&(S=N.length);const k=S-this.blockSize,R=this.C;let P=this.h,O=0;for(;O<S;){if(P==0)for(;O<=k;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<S;)if(R[P++]=N.charCodeAt(O++),P==this.blockSize){o(this,R),P=0;break}}else for(;O<S;)if(R[P++]=N[O++],P==this.blockSize){o(this,R),P=0;break}}this.h=P,this.o+=S},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;S=this.o*8;for(var k=N.length-8;k<N.length;++k)N[k]=S&255,S/=256;for(this.v(N),N=Array(16),S=0,k=0;k<4;++k)for(let R=0;R<32;R+=8)N[S++]=this.g[k]>>>R&255;return N};function u(N,S){var k=m;return Object.prototype.hasOwnProperty.call(k,N)?k[N]:k[N]=S(N)}function h(N,S){this.h=S;const k=[];let R=!0;for(let P=N.length-1;P>=0;P--){const O=N[P]|0;R&&O==S||(k[P]=O,R=!1)}this.g=k}var m={};function y(N){return-128<=N&&N<128?u(N,function(S){return new h([S|0],S<0?-1:0)}):new h([N|0],N<0?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return x;if(N<0)return q(_(-N));const S=[];let k=1;for(let R=0;N>=k;R++)S[R]=N/k|0,k*=4294967296;return new h(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return q(E(N.substring(1),S));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=_(Math.pow(S,8));let R=x;for(let O=0;O<N.length;O+=8){var P=Math.min(8,N.length-O);const A=parseInt(N.substring(O,O+P),S);P<8?(P=_(Math.pow(S,P)),R=R.j(P).add(_(A))):(R=R.j(k),R=R.add(_(A)))}return R}var x=y(0),b=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-q(this).m();let N=0,S=1;for(let k=0;k<this.g.length;k++){const R=this.i(k);N+=(R>=0?R:4294967296+R)*S,S*=4294967296}return N},i.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(J(this))return"0";if(Y(this))return"-"+q(this).toString(N);const S=_(Math.pow(N,6));var k=this;let R="";for(;;){const P=Pe(k,S).g;k=Te(k,P.j(S));let O=((k.g.length>0?k.g[0]:k.h)>>>0).toString(N);if(k=P,J(k))return O+R;for(;O.length<6;)O="0"+O;R=O+R}},i.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function J(N){if(N.h!=0)return!1;for(let S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=Te(this,N),Y(N)?-1:J(N)?0:1};function q(N){const S=N.g.length,k=[];for(let R=0;R<S;R++)k[R]=~N.g[R];return new h(k,~N.h).add(b)}i.abs=function(){return Y(this)?q(this):this},i.add=function(N){const S=Math.max(this.g.length,N.g.length),k=[];let R=0;for(let P=0;P<=S;P++){let O=R+(this.i(P)&65535)+(N.i(P)&65535),A=(O>>>16)+(this.i(P)>>>16)+(N.i(P)>>>16);R=A>>>16,O&=65535,A&=65535,k[P]=A<<16|O}return new h(k,k[k.length-1]&-2147483648?-1:0)};function Te(N,S){return N.add(q(S))}i.j=function(N){if(J(this)||J(N))return x;if(Y(this))return Y(N)?q(this).j(q(N)):q(q(this).j(N));if(Y(N))return q(this.j(q(N)));if(this.l(B)<0&&N.l(B)<0)return _(this.m()*N.m());const S=this.g.length+N.g.length,k=[];for(var R=0;R<2*S;R++)k[R]=0;for(R=0;R<this.g.length;R++)for(let P=0;P<N.g.length;P++){const O=this.i(R)>>>16,A=this.i(R)&65535,le=N.i(P)>>>16,Re=N.i(P)&65535;k[2*R+2*P]+=A*Re,ge(k,2*R+2*P),k[2*R+2*P+1]+=O*Re,ge(k,2*R+2*P+1),k[2*R+2*P+1]+=A*le,ge(k,2*R+2*P+1),k[2*R+2*P+2]+=O*le,ge(k,2*R+2*P+2)}for(N=0;N<S;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=S;N<2*S;N++)k[N]=0;return new h(k,0)};function ge(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function Ee(N,S){this.g=N,this.h=S}function Pe(N,S){if(J(S))throw Error("division by zero");if(J(N))return new Ee(x,x);if(Y(N))return S=Pe(q(N),S),new Ee(q(S.g),q(S.h));if(Y(S))return S=Pe(N,q(S)),new Ee(q(S.g),S.h);if(N.g.length>30){if(Y(N)||Y(S))throw Error("slowDivide_ only works with positive integers.");for(var k=b,R=S;R.l(N)<=0;)k=$e(k),R=$e(R);var P=Ne(k,1),O=Ne(R,1);for(R=Ne(R,2),k=Ne(k,2);!J(R);){var A=O.add(R);A.l(N)<=0&&(P=P.add(k),O=A),R=Ne(R,1),k=Ne(k,1)}return S=Te(N,P.j(S)),new Ee(P,S)}for(P=x;N.l(S)>=0;){for(k=Math.max(1,Math.floor(N.m()/S.m())),R=Math.ceil(Math.log(k)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),O=_(k),A=O.j(S);Y(A)||A.l(N)>0;)k-=R,O=_(k),A=O.j(S);J(O)&&(O=b),P=P.add(O),N=Te(N,A)}return new Ee(P,N)}i.B=function(N){return Pe(this,N).h},i.and=function(N){const S=Math.max(this.g.length,N.g.length),k=[];for(let R=0;R<S;R++)k[R]=this.i(R)&N.i(R);return new h(k,this.h&N.h)},i.or=function(N){const S=Math.max(this.g.length,N.g.length),k=[];for(let R=0;R<S;R++)k[R]=this.i(R)|N.i(R);return new h(k,this.h|N.h)},i.xor=function(N){const S=Math.max(this.g.length,N.g.length),k=[];for(let R=0;R<S;R++)k[R]=this.i(R)^N.i(R);return new h(k,this.h^N.h)};function $e(N){const S=N.g.length+1,k=[];for(let R=0;R<S;R++)k[R]=N.i(R)<<1|N.i(R-1)>>>31;return new h(k,N.h)}function Ne(N,S){const k=S>>5;S%=32;const R=N.g.length-k,P=[];for(let O=0;O<R;O++)P[O]=S>0?N.i(O+k)>>>S|N.i(O+k+1)<<32-S:N.i(O+k);return new h(P,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,n_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,vi=h}).apply(typeof Eg<"u"?Eg:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r_,Da,i_,Mu,Ad,s_,o_,a_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in g))break e;g=g[M]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function E(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function x(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,M,U){for(var Z=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)Z[Ae-2]=arguments[Ae];return p.prototype[M].apply(w,Z)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function J(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const U=M.length||0;l.length=g+U;for(let Z=0;Z<U;Z++)l[g+Z]=M[Z]}else l.push(M)}}class Y{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(l){h.setTimeout(()=>{throw l},0)}function Te(){var l=N;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ge{constructor(){this.h=this.g=null}add(p,g){const w=Ee.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ee=new Y(()=>new Pe,l=>l.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,Ne=!1,N=new ge,S=()=>{const l=Promise.resolve(void 0);$e=()=>{l.then(k)}};function k(){for(var l;l=Te();){try{l.h.call(l.g)}catch(g){q(g)}var p=Ee;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ne=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function le(l,p){P.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}x(le,P),le.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Re="closure_listenable_"+(Math.random()*1e6|0),ut=0;function He(l,p,g,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=M,this.key=++ut,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function de(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function V(l){const p={};for(const g in l)p[g]=l[g];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(l,p){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)l[g]=w[g];for(let U=0;U<W.length;U++)g=W[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function ve(l){this.src=l,this.g={},this.h=0}ve.prototype.add=function(l,p,g,w,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const Z=Ce(l,p,w,M);return Z>-1?(p=l[Z],g||(p.fa=!1)):(p=new He(p,this.src,U,!!w,M),p.fa=g,l.push(p)),p};function ke(l,p){const g=p.type;if(g in l.g){var w=l.g[g],M=Array.prototype.indexOf.call(w,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(w,M,1),U&&(ee(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ce(l,p,g,w){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==w)return M}return-1}var z="closure_lm_"+(Math.random()*1e6|0),re={};function te(l,p,g,w,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)te(l,p[U],g,w,M);return null}return g=Vo(g),l&&l[Re]?l.J(p,g,m(w)?!!w.capture:!1,M):ct(l,p,g,!1,w,M)}function ct(l,p,g,w,M,U){if(!p)throw Error("Invalid event type");const Z=m(M)?!!M.capture:!!M;let Ae=vs(l);if(Ae||(l[z]=Ae=new ve(l)),g=Ae.add(p,g,w,Z,U),g.proxy)return g;if(w=Dr(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)O||(M=Z),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(Vr(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Dr(){function l(g){return p.call(l.src,l.listener,g)}const p=Dt;return l}function bi(l,p,g,w,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)bi(l,p[U],g,w,M);else w=m(w)?!!w.capture:!!w,g=Vo(g),l&&l[Re]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=Ce(p,g,w,M),g>-1&&(ee(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=vs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ce(p,g,w,M)),(g=l>-1?p[l]:null)&&On(g))}function On(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Re])ke(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(Vr(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=vs(p))?(ke(g,l),g.h==0&&(g.src=null,p[z]=null)):ee(l)}}}function Vr(l){return l in re?re[l]:re[l]="on"+l}function Dt(l,p){if(l.da)l=!0;else{p=new le(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&On(l),l=g.call(w,p)}return l}function vs(l){return l=l[z],l instanceof ve?l:null}var Di="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(l){return typeof l=="function"?l:(l[Di]||(l[Di]=function(p){return l.handleEvent(p)}),l[Di])}function ht(){R.call(this),this.i=new ve(this),this.M=this,this.G=null}x(ht,R),ht.prototype[Re]=!0,ht.prototype.removeEventListener=function(l,p,g,w){bi(this,l,p,g,w)};function st(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new P(p,l);else if(p instanceof P)p.target=p.target||l;else{var M=p;p=new P(w,l),Se(p,M)}M=!0;let U,Z;if(g)for(Z=g.length-1;Z>=0;Z--)U=p.g=g[Z],M=wn(U,w,!0,p)&&M;if(U=p.g=l,M=wn(U,w,!0,p)&&M,M=wn(U,w,!1,p)&&M,g)for(Z=0;Z<g.length;Z++)U=p.g=g[Z],M=wn(U,w,!1,p)&&M}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)ee(g[w]);delete l.g[p],l.h--}}this.G=null},ht.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},ht.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function wn(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const Z=p[U];if(Z&&!Z.da&&Z.capture==g){const Ae=Z.listener,ot=Z.ha||Z.src;Z.fa&&ke(l.i,Z),M=Ae.call(ot,w)!==!1&&M}}return M&&!w.defaultPrevented}function Oo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Lo(l){l.g=Oo(()=>{l.g=null,l.i&&(l.i=!1,Lo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class cl extends R{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Or(l){R.call(this),this.h=l,this.g={}}x(Or,R);var Mo=[];function ws(l){de(l.g,function(p,g){this.g.hasOwnProperty(g)&&On(p)},l),l.g={}}Or.prototype.N=function(){Or.Z.N.call(this),ws(this)},Or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=h.JSON.stringify,hl=h.JSON.parse,Vi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function dl(){}var jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Es(){P.call(this,"d")}x(Es,P);function jo(){P.call(this,"c")}x(jo,P);var En={},Ts=null;function Fr(){return Ts=Ts||new ht}En.Ia="serverreachability";function Is(l){P.call(this,En.Ia,l)}x(Is,P);function lr(l){const p=Fr();st(p,new Is(p))}En.STAT_EVENT="statevent";function ur(l,p){P.call(this,En.STAT_EVENT,l),this.stat=p}x(ur,P);function rt(l){const p=Fr();st(p,new ur(p,l))}En.Ja="timingevent";function Fo(l,p){P.call(this,En.Ja,l),this.size=p}x(Fo,P);function Ur(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function zr(){this.g=!0}zr.prototype.ua=function(){this.g=!1};function fl(l,p,g,w,M,U){l.info(function(){if(l.g)if(U){var Z="",Ae=U.split("&");for(let Be=0;Be<Ae.length;Be++){var ot=Ae[Be].split("=");if(ot.length>1){const dt=ot[0];ot=ot[1];const on=dt.split("_");Z=on.length>=2&&on[1]=="type"?Z+(dt+"="+ot+"&"):Z+(dt+"=redacted&")}}}else Z=null;else Z=U;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+g+`
`+Z})}function pl(l,p,g,w,M,U,Z){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+g+`
`+U+" "+Z})}function Ln(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Oi(l,g)+(w?" "+w:"")})}function ml(l,p){l.info(function(){return"TIMEOUT: "+p})}zr.prototype.info=function(){};function Oi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<w.length;Z++)w[Z]=""}}}}return Lr(U)}catch{return p}}var Br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$r={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gl;function cr(){}x(cr,Mr),cr.prototype.g=function(){return new XMLHttpRequest},gl=new cr;function Mn(l){return encodeURIComponent(String(l))}function Ss(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function hn(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new Or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var _l={},Uo={};function Tn(l,p,g){l.M=1,l.A=dr(dn(p)),l.u=g,l.R=!0,zo(l,null)}function zo(l,p){l.F=Date.now(),Li(l),l.B=dn(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Xo(g.i,"t",w),l.C=0,g=l.j.L,l.h=new yl,l.g=Cl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new cl(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Mo[0]=M.toString()),M=Mo);for(let U=0;U<M.length;U++){const Z=te(g,M[U],w||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=l.J?V(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),lr(),fl(l.i,l.v,l.B,l.l,l.S,l.u)}hn.prototype.ba=function(l){l=l.target;const p=this.O;p&&qn(l)==3?p.j():this.Y(l)},hn.prototype.Y=function(l){try{if(l==this.g)e:{const Ae=qn(this.g),ot=this.g.ya(),Be=this.g.ca();if(!(Ae<3)&&(Ae!=3||this.g&&(this.h.h||this.g.la()||xl(this.g)))){this.K||Ae!=4||ot==7||(ot==8||Be<=0?lr(3):lr(2)),As(this);var p=this.g.ca();this.X=p;var g=vl(this);if(this.o=p==200,pl(this.i,this.v,this.B,this.l,this.S,Ae,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var U=w;break t}}U=null}if(l=U)Ln(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,l);else{this.o=!1,this.m=3,rt(12),hr(this),Mi(this);break e}}if(this.R){l=!0;let dt;for(;!this.K&&this.C<g.length;)if(dt=El(this,g),dt==Uo){Ae==4&&(this.m=4,rt(14),l=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==_l){this.m=4,rt(15),Ln(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Ln(this.i,this.l,dt,null),Ke(this,dt);if(wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||g.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)Ln(this.i,this.l,g,"[Invalid Chunked Response]"),hr(this),Mi(this);else if(g.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Wi(Z),Z.P=!0,rt(11))}}else Ln(this.i,this.l,g,null),Ke(this,g);Ae==4&&hr(this),this.o&&!this.K&&(Ae==4?Os(this.j,this):(this.o=!1,Li(this)))}else Zo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),hr(this),Mi(this)}}}catch{}finally{}};function vl(l){if(!wl(l))return l.g.la();const p=xl(l.g);if(p==="")return"";let g="";const w=p.length,M=qn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return hr(l),Mi(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<w;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(M&&U==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function wl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function El(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?Uo:(g=Number(p.substring(g,w)),isNaN(g)?_l:(w+=1,w+g>p.length?Uo:(p=p.slice(w,w+g),l.C=w+g,p)))}hn.prototype.cancel=function(){this.K=!0,hr(this)};function Li(l){l.T=Date.now()+l.H,Bo(l,l.H)}function Bo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ur(_(l.aa,l),p)}function As(l){l.D&&(h.clearTimeout(l.D),l.D=null)}hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(ml(this.i,this.B),this.M!=2&&(lr(),rt(17)),hr(this),this.m=2,Mi(this)):Bo(this,this.T-l)};function Mi(l){l.j.I==0||l.K||Os(l.j,l)}function hr(l){As(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ws(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ke(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||qo(g.h,l))){if(!l.L&&qo(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Vs(g),rn(g);else break e;Gn(g),rt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Ur(_(g.Va,g),6e3));ji(g.h)<=1&&g.ta&&(g.ta=void 0)}else sn(g,11)}else if((l.L||g.g==l)&&Vs(g),!A(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Be=M[p];const dt=Be[0];if(!(dt<=g.K))if(g.K=dt,Be=Be[1],g.I==2)if(Be[0]=="c"){g.M=Be[1],g.ba=Be[2];const on=Be[3];on!=null&&(g.ka=on,g.j.info("VER="+g.ka));const yr=Be[4];yr!=null&&(g.za=yr,g.j.info("SVER="+g.za));const Kn=Be[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(w=1.5*Kn,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Qn=l.g;if(Qn){const js=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var U=w.h;U.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(ks(U,U.h),U.h=null))}if(w.G){const na=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(w.wa=na,Ue(w.J,w.G,na))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var Z=l;if(w.na=ta(w,w.L?w.ba:null,w.W),Z.L){Fi(w.h,Z);var Ae=Z,ot=w.O;ot&&(Ae.H=ot),Ae.D&&(As(Ae),Li(Ae)),w.g=Z}else Vt(w);g.i.length>0&&gr(g)}else Be[0]!="stop"&&Be[0]!="close"||sn(g,7);else g.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?sn(g,7):bs(g):Be[0]!="noop"&&g.l&&g.l.qa(Be),g.A=0)}}lr(4)}catch{}}var bc=class{constructor(l,p){this.g=l,this.map=p}};function xs(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ji(l){return l.h?1:l.g?l.g.size:0}function qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function ks(l,p){l.g?l.g.add(p):l.h=p}function Fi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}xs.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function en(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return B(l.i)}var Tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let M,U=null;w>=0?(M=l[g].substring(0,w),U=l[g].substring(w+1)):M=l[g],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function jn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof jn?(this.l=l.l,Ui(this,l.j),this.o=l.o,this.g=l.g,Fn(this,l.u),this.h=l.h,qr(this,Jo(l.i)),this.m=l.m):l&&(p=String(l).match(Tl))?(this.l=!1,Ui(this,p[1]||"",!0),this.o=zi(p[2]||""),this.g=zi(p[3]||"",!0),Fn(this,p[4]),this.h=zi(p[5]||"",!0),qr(this,p[6]||"",!0),this.m=zi(p[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}jn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Bi(p,Wo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Bi(p,Wo,!0),"@"),l.push(Mn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Bi(g,g.charAt(0)=="/"?$i:Go,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Bi(g,Ko)),l.join("")},jn.prototype.resolve=function(l){const p=dn(this);let g=!!l.j;g?Ui(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)Fn(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let Z=0;Z<M.length;){const Ae=M[Z++];Ae=="."?w&&Z==M.length&&U.push(""):Ae==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),w&&Z==M.length&&U.push("")):(U.push(Ae),w=!0)}w=U.join("/")}else w=M}return g?p.h=w:g=l.i.toString()!=="",g?qr(p,Jo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function dn(l){return new jn(l)}function Ui(l,p,g){l.j=g?zi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Fn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function qr(l,p,g){p instanceof Le?(l.i=p,Rs(l.i,l.l)):(g||(p=Bi(p,Dc)),l.i=new Le(p,l.l))}function Ue(l,p,g){l.i.set(p,g)}function dr(l){return Ue(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function zi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Bi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Ho),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ho(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Wo=/[#\/\?@]/g,Go=/[#\?:]/g,$i=/[#\?]/g,Dc=/[#\?@]/g,Ko=/#/g;function Le(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Un(l){l.g||(l.g=new Map,l.h=0,l.i&&tn(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Le.prototype,i.add=function(l,p){Un(this),this.i=null,l=zn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Qo(l,p){Un(l),p=zn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Cs(l,p){return Un(l),p=zn(l,p),l.g.has(p)}i.forEach=function(l,p){Un(this),this.g.forEach(function(g,w){g.forEach(function(M){l.call(p,M,w,this)},this)},this)};function Yo(l,p){Un(l);let g=[];if(typeof p=="string")Cs(l,p)&&(g=g.concat(l.g.get(zn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Un(this),this.i=null,l=zn(this,l),Cs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Yo(this,l),l.length>0?String(l[0]):p):p};function Xo(l,p,g){Qo(l,p),g.length>0&&(l.i=null,l.g.set(zn(l,p),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const M=Mn(g);g=Yo(this,g);for(let U=0;U<g.length;U++){let Z=M;g[U]!==""&&(Z+="="+Mn(g[U])),l.push(Z)}}return this.i=l.join("&")};function Jo(l){const p=new Le;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function zn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Un(l),l.i=null,l.g.forEach(function(g,w){const M=w.toLowerCase();w!=M&&(Qo(this,w),Xo(this,M,g))},l)),l.j=p}function Bn(l,p){const g=new zr;if(h.Image){const w=new Image;w.onload=E(xt,g,"TestLoadImage: loaded",!0,p,w),w.onerror=E(xt,g,"TestLoadImage: error",!1,p,w),w.onabort=E(xt,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=E(xt,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function $n(l,p){const g=new zr,w=new AbortController,M=setTimeout(()=>{w.abort(),xt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(M),U.ok?xt(g,"TestPingServer: ok",!0,p):xt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),xt(g,"TestPingServer: error",!1,p)})}function xt(l,p,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function qi(){this.g=new Vi}function fr(l){this.i=l.Sb||null,this.h=l.ab||!1}x(fr,Mr),fr.prototype.g=function(){return new nn(this.i,this.h)};function nn(l,p){ht.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(nn,ht),i=nn.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Il(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Il(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):In(this),this.readyState==3&&Il(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,In(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Sl(l){let p="";return de(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Ps(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Sl(g),typeof l=="string"?g!=null&&Mn(g):Ue(l,p,g))}function qe(l){ht.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x(qe,ht);var Al=/^https?$/i,Vc=["POST","PUT"];i=qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gl.g(),this.g.onreadystatechange=b(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Wr(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Vc,p,void 0)>=0)||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Z]of g)this.g.setRequestHeader(U,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){Wr(this,U)}};function Wr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Gr(l),mr(l)}function Gr(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),mr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?pr(this):this.Xa())},i.Xa=function(){pr(this)};function pr(l){if(l.h&&typeof u<"u"){if(l.v&&qn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),qn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=U===0){let Z=String(l.D).match(Tl)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),w=!Al.test(Z?Z.toLowerCase():"")}g=w}if(g)st(l,"complete"),st(l,"success");else{l.o=6;try{var M=qn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Gr(l)}}finally{mr(l)}}}}function mr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||st(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return qn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),hl(p)}};function xl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(l){const p={};l=(l.g&&qn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var g=Ss(l[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[M]||[];p[M]=U,U.push(g)}ne(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ns(l){this.za=0,this.i=[],this.j=new zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hn("baseRetryDelayMs",5e3,l),this.Za=Hn("retryDelaySeedMs",1e4,l),this.Ta=Hn("forwardChannelMaxRetries",2,l),this.va=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new xs(l&&l.concurrentRequestLimit),this.Ba=new qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ns.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){rt(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=ta(this,null,this.W),gr(this)};function bs(l){if(Ds(l),l.I==3){var p=l.V++,g=dn(l.J);if(Ue(g,"SID",l.M),Ue(g,"RID",p),Ue(g,"TYPE","terminate"),Wn(l,g),p=new hn(l,l.j,p),p.M=2,p.A=dr(dn(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Cl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Li(p)}Gi(l)}function rn(l){l.g&&(Wi(l),l.g.cancel(),l.g=null)}function Ds(l){rn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Vs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function gr(l){if(!$o(l.h)&&!l.m){l.m=!0;var p=l.Ea;$e||S(),Ne||($e(),Ne=!0),N.add(p,l),l.D=0}}function kl(l,p){return ji(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ur(_(l.Ea,l,p),Ls(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new hn(this,this.j,l);let U=this.o;if(this.U&&(U?(U=V(U),Se(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=ea(this,M,p),g=dn(this.J),Ue(g,"RID",l),Ue(g,"CVER",22),this.G&&Ue(g,"X-HTTP-Session-Id",this.G),Wn(this,g),U&&(this.R?p="headers="+Mn(Sl(U))+"&"+p:this.u&&Ps(g,this.u,U)),ks(this.h,M),this.Ra&&Ue(g,"TYPE","init"),this.S?(Ue(g,"$req",p),Ue(g,"SID","null"),M.U=!0,Tn(M,g,null)):Tn(M,g,p),this.I=2}}else this.I==3&&(l?Hi(this,l):this.i.length==0||$o(this.h)||Hi(this))};function Hi(l,p){var g;p?g=p.l:g=l.V++;const w=dn(l.J);Ue(w,"SID",l.M),Ue(w,"RID",g),Ue(w,"AID",l.K),Wn(l,w),l.u&&l.o&&Ps(w,l.u,l.o),g=new hn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ea(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ks(l.h,g),Tn(g,w,p)}function Wn(l,p){l.H&&de(l.H,function(g,w){Ue(p,w,g)}),l.l&&de({},function(g,w){Ue(p,w,g)})}function ea(l,p,g){g=Math.min(l.i.length,g);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ae=-1;for(;;){const ot=["count="+g];Ae==-1?g>0?(Ae=M[0].g,ot.push("ofs="+Ae)):Ae=0:ot.push("ofs="+Ae);let Be=!0;for(let dt=0;dt<g;dt++){var U=M[dt].g;const on=M[dt].map;if(U-=Ae,U<0)Ae=Math.max(0,M[dt].g-100),Be=!1;else try{U="req"+U+"_"||"";try{var Z=on instanceof Map?on:Object.entries(on);for(const[yr,Kn]of Z){let Qn=Kn;m(Kn)&&(Qn=Lr(Kn)),ot.push(U+yr+"="+encodeURIComponent(Qn))}}catch(yr){throw ot.push(U+"type="+encodeURIComponent("_badmap")),yr}}catch{w&&w(on)}}if(Be){Z=ot.join("&");break e}}Z=void 0}return l=l.i.splice(0,g),p.G=l,Z}function Vt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;$e||S(),Ne||($e(),Ne=!0),N.add(p,l),l.A=0}}function Gn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ur(_(l.Da,l),Ls(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Kr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ur(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),rn(this),Kr(this))};function Wi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Kr(l){l.g=new hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=dn(l.na);Ue(p,"RID","rpc"),Ue(p,"SID",l.M),Ue(p,"AID",l.K),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ue(p,"TO",l.ia),Ue(p,"TYPE","xmlhttp"),Wn(l,p),l.u&&l.o&&Ps(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=dr(dn(p)),g.u=null,g.R=!0,zo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,rn(this),Gn(this),rt(19))};function Vs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Os(l,p){var g=null;if(l.g==p){Vs(l),Wi(l),l.g=null;var w=2}else if(qo(l.h,p))g=p.G,Fi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=Fr(),st(w,new Fo(w,g)),gr(l)}else Vt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&kl(l,p)||w==2&&Gn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:sn(l,5);break;case 4:sn(l,10);break;case 3:sn(l,6);break;default:sn(l,2)}}}function Ls(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function sn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),w=l.Ua;const M=!w;w=new jn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Ui(w,"https"),dr(w),M?Bn(w.toString(),g):$n(w.toString(),g)}else rt(2);l.I=0,l.l&&l.l.pa(p),Gi(l),Ds(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Gi(l){if(l.I=0,l.ja=[],l.l){const p=en(l.h);(p.length!=0||l.i.length!=0)&&(J(l.ja,p),J(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function ta(l,p,g){var w=g instanceof jn?dn(g):new jn(g);if(w.g!="")p&&(w.g=p+"."+w.g),Fn(w,w.u);else{var M=h.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new jn(null);w&&Ui(U,w),p&&(U.g=p),M&&Fn(U,M),g&&(U.h=g),w=U}return g=l.G,p=l.wa,g&&p&&Ue(w,g,p),Ue(w,"VER",l.ka),Wn(l,w),w}function Cl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new fr({ab:g})):new qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rl(){}i=Rl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ms(){}Ms.prototype.g=function(l,p){return new kt(l,p)};function kt(l,p){ht.call(this),this.g=new Ns(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Qr(this)}x(kt,ht),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){bs(this.g)},kt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Lr(l),l=g);p.i.push(new bc(p.Ya++,l)),p.I==3&&gr(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,bs(this.g),delete this.g,kt.Z.N.call(this)};function Pl(l){Es.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}x(Pl,Es);function Nl(){jo.call(this),this.status=1}x(Nl,jo);function Qr(l){this.g=l}x(Qr,Rl),Qr.prototype.ra=function(){st(this.g,"a")},Qr.prototype.qa=function(l){st(this.g,new Pl(l))},Qr.prototype.pa=function(l){st(this.g,new Nl)},Qr.prototype.oa=function(){st(this.g,"b")},Ms.prototype.createWebChannel=Ms.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,a_=function(){return new Ms},o_=function(){return Fr()},s_=En,Ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,Mu=Br,$r.COMPLETE="complete",i_=$r,dl.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Da=dl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,r_=qe}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const Tg="@firebase/firestore",Ig="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Kd("@firebase/firestore");function so(){return hs.logLevel}function oe(i,...e){if(hs.logLevel<=De.DEBUG){const t=e.map(Xd);hs.debug(`Firestore (${ko}): ${i}`,...t)}}function Rr(i,...e){if(hs.logLevel<=De.ERROR){const t=e.map(Xd);hs.error(`Firestore (${ko}): ${i}`,...t)}}function _o(i,...e){if(hs.logLevel<=De.WARN){const t=e.map(Xd);hs.warn(`Firestore (${ko}): ${i}`,...t)}}function Xd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,l_(i,s,t)}function l_(i,e,t){let s=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Rr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||l_(e,o,s)}function xe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ET{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class TT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class IT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new wi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new wi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new u_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class ST{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new ST(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=kT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ve(i,e){return i<e?-1:i>e?1:0}function xd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return dd(o)===dd(u)?Ve(o,u):dd(o)?1:-1}return Ve(i.length,e.length)}const CT=55296,RT=57343;function dd(i){const e=i.charCodeAt(0);return e>=CT&&e<=RT}function vo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=er.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ve(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),o=er.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?er.extractNumericId(e).compare(er.extractNumericId(t)):xd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class Ge extends er{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const PT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends er{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return PT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ag}static keyField(){return new Nt([Ag])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ge.fromString(e))}static fromName(e){return new fe(Ge.fromString(e).popFirst(5))}static empty(){return new fe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function NT(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xg(i){if(!fe.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function kg(i){if(fe.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function h_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function fc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function ds(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fc(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(i,e){const t={typeString:i};return e&&(t.value=e),t}function el(i,e){if(!h_(i))throw new ie($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=-62135596800,Rg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Rg);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cg)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:gt("string",Xe._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Xe(0,0))}static max(){return new Ie(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=-1;function bT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new Ii(o,fe.empty(),e)}function DT(i){return new Ii(i.readTime,i.key,$a)}class Ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ii(Ie.min(),fe.empty(),$a)}static max(){return new Ii(Ie.max(),fe.empty(),$a)}}function VT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Ve(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==OT)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((E=>{h[_]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function MT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=-1;function mc(i){return i==null}function Qu(i){return i===0&&1/i==-1/0}function jT(i){return typeof i=="number"&&Number.isInteger(i)&&!Qu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="";function FT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Pg(e)),e=UT(i.get(t),e);return Pg(e)}function UT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case d_:t+="";break;default:t+=u}}return t}function Pg(i){return i+d_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ri(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function f_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cu(this.root,e,this.comparator,!0)}}class Cu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bg(this.data.getIterator())}getIteratorFrom(e){return new bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new wt(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new p_("Invalid base64 string: "+u):u}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const zT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=zT.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(i.seconds),nanos:lt(i.nanos)}}function lt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ai(i){return typeof i=="string"?bt.fromBase64String(i):bt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="server_timestamp",g_="__type__",y_="__previous_value__",__="__local_write_time__";function ef(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[g_])==null?void 0:s.stringValue)===m_}function gc(i){const e=i.mapValue.fields[y_];return ef(e)?gc(e):e}function qa(i){const e=Si(i.mapValue.fields[__].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,s,o,u,h,m,y,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=E}}const Yu="(default)";class Ha{constructor(e,t){this.projectId=e,this.database=t||Yu}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database===Yu}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="__type__",$T="__max__",Ru={mapValue:{}},w_="__vector__",Xu="value";function xi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?ef(i)?4:HT(i)?9007199254740991:qT(i)?10:11:_e(28295,{value:i})}function ar(i,e){if(i===e)return!0;const t=xi(i);if(t!==xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return qa(i).isEqual(qa(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Si(o.timestampValue),m=Si(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ai(o.bytesValue).isEqual(Ai(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?Qu(h)===Qu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return vo(i.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ng(h)!==Ng(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ar(h[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Wa(i,e){return(i.values||[]).find((t=>ar(t,e)))!==void 0}function wo(i,e){if(i===e)return 0;const t=xi(i),s=xi(e);if(t!==s)return Ve(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),y=lt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Dg(i.timestampValue,e.timestampValue);case 4:return Dg(qa(i),qa(e));case 5:return xd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ai(u),y=Ai(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const E=Ve(m[_],y[_]);if(E!==0)return E}return Ve(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ve(lt(u.latitude),lt(h.latitude));return m!==0?m:Ve(lt(u.longitude),lt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Vg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var b,B,J,Y;const m=u.fields||{},y=h.fields||{},_=(b=m[Xu])==null?void 0:b.arrayValue,E=(B=y[Xu])==null?void 0:B.arrayValue,x=Ve(((J=_==null?void 0:_.values)==null?void 0:J.length)||0,((Y=E==null?void 0:E.values)==null?void 0:Y.length)||0);return x!==0?x:Vg(_,E)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Ru.mapValue&&h===Ru.mapValue)return 0;if(u===Ru.mapValue)return 1;if(h===Ru.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let x=0;x<y.length&&x<E.length;++x){const b=xd(y[x],E[x]);if(b!==0)return b;const B=wo(m[y[x]],_[E[x]]);if(B!==0)return B}return Ve(y.length,E.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Dg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ve(i,e);const t=Si(i),s=Si(e),o=Ve(t.seconds,s.seconds);return o!==0?o:Ve(t.nanos,s.nanos)}function Vg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=wo(t[o],s[o]);if(u)return u}return Ve(t.length,s.length)}function Eo(i){return kd(i)}function kd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Si(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ai(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=kd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${kd(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function ju(i){switch(xi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(i);return e?16+ju(e):16;case 5:return 2*i.stringValue.length;case 6:return Ai(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ju(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ri(s.fields,((u,h)=>{o+=u.length+ju(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function Og(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Cd(i){return!!i&&"integerValue"in i}function tf(i){return!!i&&"arrayValue"in i}function Lg(i){return!!i&&"nullValue"in i}function Mg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Fu(i){return!!i&&"mapValue"in i}function qT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[v_])==null?void 0:s.stringValue)===w_}function Ma(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ri(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ma(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ma(i.arrayValue.values[t]);return e}return{...i}}function HT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===$T}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ma(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ri(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Zt(Ma(this.value))}}function E_(i){const e=[];return Ri(i.fields,((t,s)=>{const o=new Nt([t]);if(Fu(s)){const u=E_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new zt(e,0,Ie.min(),Ie.min(),Ie.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new zt(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Ie.min(),Ie.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Ie.min(),Ie.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t){this.position=e,this.inclusive=t}}function jg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=wo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ar(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t="asc"){this.field=e,this.dir=t}}function WT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{}class mt extends T_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new KT(e,t,s):t==="array-contains"?new XT(e,s):t==="in"?new JT(e,s):t==="not-in"?new ZT(e,s):t==="array-contains-any"?new eI(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new QT(e,s):new YT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wo(t,this.value)):t!==null&&xi(this.value)===xi(t)&&this.matchesComparison(wo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends T_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Dn(e,t)}matches(e){return I_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function I_(i){return i.op==="and"}function S_(i){return GT(i)&&I_(i)}function GT(i){for(const e of i.filters)if(e instanceof Dn)return!1;return!0}function Rd(i){if(i instanceof mt)return i.field.canonicalString()+i.op.toString()+Eo(i.value);if(S_(i))return i.filters.map((e=>Rd(e))).join(",");{const e=i.filters.map((t=>Rd(t))).join(",");return`${i.op}(${e})`}}function A_(i,e){return i instanceof mt?(function(s,o){return o instanceof mt&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)})(i,e):i instanceof Dn?(function(s,o){return o instanceof Dn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&A_(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function x_(i){return i instanceof mt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`})(i):i instanceof Dn?(function(t){return t.op.toString()+" {"+t.getFilters().map(x_).join(" ,")+"}"})(i):"Filter"}class KT extends mt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class QT extends mt{constructor(e,t){super(e,"in",t),this.keys=k_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class YT extends mt{constructor(e,t){super(e,"not-in",t),this.keys=k_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function k_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class XT extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tf(t)&&Wa(t.arrayValue,this.value)}}class JT extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wa(this.value.arrayValue,t)}}class ZT extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wa(this.value.arrayValue,t)}}class eI extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Wa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Ug(i,e=null,t=[],s=[],o=null,u=null,h=null){return new tI(i,e,t,s,o,u,h)}function nf(i){const e=xe(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Rd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Eo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Eo(s))).join(",")),e.Te=t}return e.Te}function rf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!WT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!A_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Fg(i.startAt,e.startAt)&&Fg(i.endAt,e.endAt)}function Pd(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function nI(i,e,t,s,o,u,h,m){return new Po(i,e,t,s,o,u,h,m)}function C_(i){return new Po(i)}function zg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function R_(i){return i.collectionGroup!==null}function ja(i){const e=xe(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new wt(Nt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ga(u,s))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new Ga(Nt.keyField(),s))}return e.Ie}function tr(i){const e=xe(i);return e.Ee||(e.Ee=rI(e,ja(i))),e.Ee}function rI(i,e){if(i.limitType==="F")return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ga(o.field,u)}));const t=i.endAt?new Ju(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ju(i.startAt.position,i.startAt.inclusive):null;return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Nd(i,e){const t=i.filters.concat([e]);return new Po(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function bd(i,e,t){return new Po(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function yc(i,e){return rf(tr(i),tr(e))&&i.limitType===e.limitType}function P_(i){return`${nf(tr(i))}|lt:${i.limitType}`}function oo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>x_(o))).join(", ")}]`),mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Eo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Eo(o))).join(",")),`Target(${s})`})(tr(i))}; limitType=${i.limitType})`}function _c(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of ja(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=jg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,ja(s),o)||s.endAt&&!(function(h,m,y){const _=jg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,ja(s),o))})(i,e)}function iI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function N_(i){return(e,t)=>{let s=!1;for(const o of ja(i)){const u=sI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function sI(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?wo(y,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new nt(fe.comparator);function Pr(){return oI}const b_=new nt(fe.comparator);function Va(...i){let e=b_;for(const t of i)e=e.insert(t.key,t);return e}function D_(i){let e=b_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ls(){return Fa()}function V_(){return Fa()}function Fa(){return new ms((i=>i.toString()),((i,e)=>i.isEqual(e)))}const aI=new nt(fe.comparator),lI=new wt(fe.comparator);function Oe(...i){let e=lI;for(const t of i)e=e.add(t);return e}const uI=new wt(Ve);function cI(){return uI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function O_(i){return{integerValue:""+i}}function hI(i,e){return jT(e)?O_(e):sf(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this._=void 0}}function dI(i,e,t){return i instanceof Zu?(function(o,u){const h={fields:{[g_]:{stringValue:m_},[__]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ef(u)&&(u=gc(u)),u&&(h.fields[y_]=u),{mapValue:h}})(t,e):i instanceof Ka?M_(i,e):i instanceof Qa?j_(i,e):(function(o,u){const h=L_(o,u),m=Bg(h)+Bg(o.Ae);return Cd(h)&&Cd(o.Ae)?O_(m):sf(o.serializer,m)})(i,e)}function fI(i,e,t){return i instanceof Ka?M_(i,e):i instanceof Qa?j_(i,e):t}function L_(i,e){return i instanceof ec?(function(s){return Cd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Zu extends vc{}class Ka extends vc{constructor(e){super(),this.elements=e}}function M_(i,e){const t=F_(e);for(const s of i.elements)t.some((o=>ar(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Qa extends vc{constructor(e){super(),this.elements=e}}function j_(i,e){let t=F_(e);for(const s of i.elements)t=t.filter((o=>!ar(o,s)));return{arrayValue:{values:t}}}class ec extends vc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bg(i){return lt(i.integerValue||i.doubleValue)}function F_(i){return tf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function pI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ka&&o instanceof Ka||s instanceof Qa&&o instanceof Qa?vo(s.elements,o.elements,ar):s instanceof ec&&o instanceof ec?ar(s.Ae,o.Ae):s instanceof Zu&&o instanceof Zu})(i.transform,e.transform)}class mI{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class wc{}function U_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new of(i.key,bn.none()):new tl(i.key,i.data,bn.none());{const t=i.data,s=Zt.empty();let o=new wt(Nt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Pi(i.key,s,new cn(o.toArray()),bn.none())}}function gI(i,e,t){i instanceof tl?(function(o,u,h){const m=o.value.clone(),y=qg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Pi?(function(o,u,h){if(!Uu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=qg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(z_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ua(i,e,t,s){return i instanceof tl?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const _=u.value.clone(),E=Hg(u.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof Pi?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const _=Hg(u.fieldTransforms,y,h),E=h.data;return E.setAll(z_(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((x=>x.field)))})(i,e,t,s):(function(u,h,m){return Uu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function yI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=L_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function $g(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,((u,h)=>pI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class tl extends wc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Pi extends wc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function z_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function qg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,fI(h,m,t[o]))}return s}function Hg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,dI(u,h,e))}return s}class of extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _I extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&gI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ua(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ua(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=V_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=U_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oe())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,((t,s)=>$g(t,s)))&&vo(this.baseMutations,e.baseMutations,((t,s)=>$g(t,s)))}}class af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return aI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new af(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Me;function TI(i){switch(i){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function B_(i){if(i===void 0)return Rr("GRPC error has no .code"),$.UNKNOWN;switch(i){case pt.OK:return $.OK;case pt.CANCELLED:return $.CANCELLED;case pt.UNKNOWN:return $.UNKNOWN;case pt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case pt.INTERNAL:return $.INTERNAL;case pt.UNAVAILABLE:return $.UNAVAILABLE;case pt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case pt.NOT_FOUND:return $.NOT_FOUND;case pt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case pt.ABORTED:return $.ABORTED;case pt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case pt.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:i})}}(Me=pt||(pt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new vi([4294967295,4294967295],0);function Wg(i){const e=II().encode(i),t=new n_;return t.update(e),new Uint8Array(t.digest())}function Gg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,u],0)]}class lf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(SI)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new lf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Wg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,nl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ec(Ie.min(),o,new nt(Ve),Pr(),Oe())}}class nl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nl(s,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class $_{constructor(e,t){this.targetId=e,this.Ce=t}}class q_{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Kg{constructor(){this.ve=0,this.Fe=Qg(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Oe(),t=Oe(),s=Oe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new nl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Qg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class AI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=Pu(),this.He=Pu(),this.Ye=new nt(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new fe(u.path);this.et(t,h,zt.newNoDocument(h,Ie.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ai(s).toUint8Array()}catch(y){if(y instanceof p_)return _o("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new lf(h,o,u)}catch(y){return _o(y instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Pd(m.target)){const y=new fe(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,zt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Oe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Ec(e,t,this.Ye,this.je,s);return this.je=Pr(),this.Je=Pu(),this.He=Pu(),this.Ye=new nt(Ve),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new wt(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new wt(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new nt(fe.comparator)}function Qg(){return new nt(fe.comparator)}const xI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CI={and:"AND",or:"OR"};class RI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dd(i,e){return i.useProto3Json||mc(e)?e:{value:e}}function tc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function PI(i,e){return tc(i,e.toTimestamp())}function nr(i){return ze(!!i,49232),Ie.fromTimestamp((function(t){const s=Si(t);return new Xe(s.seconds,s.nanos)})(i))}function uf(i,e){return Vd(i,e).canonicalString()}function Vd(i,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function W_(i){const e=Ge.fromString(i);return ze(X_(e),10190,{key:e.toString()}),e}function Od(i,e){return uf(i.databaseId,e.path)}function fd(i,e){const t=W_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(K_(t))}function G_(i,e){return uf(i.databaseId,e)}function NI(i){const e=W_(i);return e.length===4?Ge.emptyPath():K_(e)}function Ld(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function K_(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Yg(i,e,t){return{name:Od(i,e),fields:t.value.mapValue.fields}}function bI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(ze(E===void 0||typeof E=="string",58123),bt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),bt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const E=_.code===void 0?$.UNKNOWN:B_(_.code);return new ie(E,_.message||"")})(h);t=new q_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=fd(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Ie.min(),m=new Zt({mapValue:{fields:s.document.fields}}),y=zt.newFoundDocument(o,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];t=new zu(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=fd(i,s.document),u=s.readTime?nr(s.readTime):Ie.min(),h=zt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=fd(i,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new EI(o,u),m=s.targetId;t=new $_(m,h)}}return t}function DI(i,e){let t;if(e instanceof tl)t={update:Yg(i,e.key,e.value)};else if(e instanceof of)t={delete:Od(i,e.key)};else if(e instanceof Pi)t={update:Yg(i,e.key,e.data),updateMask:BI(e.fieldMask)};else{if(!(e instanceof _I))return _e(16599,{Vt:e.type});t={verify:Od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Zu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ka)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ec)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:PI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function VI(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Ie.min())&&(h=nr(u)),new mI(h,o.transformResults||[])})(t,e)))):[]}function OI(i,e){return{documents:[G_(i,e.path)]}}function LI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=G_(i,o);const u=(function(_){if(_.length!==0)return Y_(Dn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((E=>(function(b){return{field:ao(b.field),direction:FI(b.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Dd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function MI(i){let e=NI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(x){const b=Q_(x);return b instanceof Dn&&S_(b)?b.getFilters():[b]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((b=>(function(J){return new Ga(lo(J.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(b)))})(t.orderBy));let m=null;t.limit&&(m=(function(x){let b;return b=typeof x=="object"?x.value:x,mc(b)?null:b})(t.limit));let y=null;t.startAt&&(y=(function(x){const b=!!x.before,B=x.values||[];return new Ju(B,b)})(t.startAt));let _=null;return t.endAt&&(_=(function(x){const b=!x.before,B=x.values||[];return new Ju(B,b)})(t.endAt)),nI(e,o,h,u,m,"F",y,_)}function jI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Q_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=lo(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=lo(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=lo(t.unaryFilter.field);return mt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=lo(t.unaryFilter.field);return mt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return mt.create(lo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Dn.create(t.compositeFilter.filters.map((s=>Q_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function FI(i){return xI[i]}function UI(i){return kI[i]}function zI(i){return CI[i]}function ao(i){return{fieldPath:i.canonicalString()}}function lo(i){return Nt.fromServerFormat(i.fieldPath)}function Y_(i){return i instanceof mt?(function(t){if(t.op==="=="){if(Mg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NAN"}};if(Lg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NAN"}};if(Lg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(t.field),op:UI(t.op),value:t.value}}})(i):i instanceof Dn?(function(t){const s=t.getFilters().map((o=>Y_(o)));return s.length===1?s[0]:{compositeFilter:{op:zI(t.op),filters:s}}})(i):_e(54877,{filter:i})}function BI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function X_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,s,o,u=Ie.min(),h=Ie.min(),m=bt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.yt=e}}function qI(i){const e=MI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.Cn=new WI}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ii.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class WI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new wt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new wt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},J_=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(J_,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new To(0)}static cr(){return new To(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="LruGarbageCollector",GI=1048576;function Zg([i,e],[t,s]){const o=Ve(i,t);return o===0?Ve(e,s):o}class KI{constructor(e){this.Ir=e,this.buffer=new wt(Zg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Zg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(Jg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?oe(Jg,"Ignoring IndexedDB error during garbage collection: ",t):await Co(t)}await this.Vr(3e5)}))}}class YI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(pc.ce);const s=new KI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Xg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(s=x,m=Date.now(),this.removeTargets(e,s,t)))).next((x=>(u=x,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(_=Date.now(),so()<=De.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${x} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:x}))))}}function XI(i,e){return new YI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.changes=new ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ua(s.mutation,o,cn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Oe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Oe()){const o=ls();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Va();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ls();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Oe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Pr();const h=Fa(),m=(function(){return Fa()})();return t.forEach(((y,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Pi)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Ua(E.mutation,_,E.mutation.getFieldMask(),Xe.now())):h.set(_.key,cn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>m.set(_,new ZI(E,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Fa();let o=new nt(((h,m)=>h-m)),u=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let E=s.get(y)||cn.empty();E=m.applyToLocalView(_,E),s.set(y,E);const x=(o.get(m.batchId)||Oe()).add(y);o=o.insert(m.batchId,x)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,E=y.value,x=V_();E.forEach((b=>{if(!u.has(b)){const B=U_(t.get(b),s.get(b));B!==null&&x.set(b,B),u=u.add(b)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,x))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):R_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(ls());let m=$a,y=u;return h.next((_=>H.forEach(_,((E,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),u.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next((b=>{y=y.insert(E,b)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Oe()))).next((E=>({batchId:m,changes:D_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(y=>{const _=(function(x,b){return new Po(b,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((x,b)=>{h=h.insert(x,b)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))}));let m=Va();return h.forEach(((y,_)=>{const E=u.get(y);E!==void 0&&Ua(E.mutation,_,cn.empty(),Xe.now()),_c(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:qI(o.bundledQuery),readTime:nr(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.overlays=new nt(fe.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ls();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=ls(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=ls(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=ls(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,E)=>m.set(_,E))),!(m.size()>=o)););return H.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new wI(t,s));let u=this.qr.get(t);u===void 0&&(u=Oe(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Qr=new wt(St.$r),this.Ur=new wt(St.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new St(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new fe(new Ge([])),s=new St(t,e),o=new St(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new Ge([])),s=new St(t,e),o=new St(t,e+1);let u=Oe();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new St(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new wt(St.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new St(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Zd:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new wt(Ve);return t.forEach((o=>{const u=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),H.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new St(new fe(u),0);let m=new wt(Ve);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),H.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return H.forEach(t.mutations,(o=>{const u=new St(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new St(t,0),o=this.Zr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.ri=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let s=Pr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():zt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Pr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||VT(DT(E),s)<=0||(o.has(E.key)||_c(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ii(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new o1(this)}getSize(e){return H.resolve(this.size)}}class o1 extends JI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.persistence=e,this.si=new ms((t=>nf(t)),rf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.oi=0,this._i=new cf,this.targetCount=0,this.ai=To.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new To(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t){this.ui={},this.overlays={},this.ci=new pc(0),this.li=!1,this.li=!0,this.hi=new r1,this.referenceDelegate=e(this),this.Pi=new a1(this),this.indexManager=new HI,this.remoteDocumentCache=(function(o){return new s1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new $I(t),this.Ii=new t1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new i1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new l1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return H.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class l1 extends LT{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Vi=null}static mi(e){return new hf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(s=>{const o=fe.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class nc{constructor(e,t){this.persistence=e,this.pi=new ms((s=>FT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=XI(this,t)}static mi(e,t){return new nc(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ie.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}br(e,t,s){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Oe(),o=Oe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new df(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return tE()?8:MT(Bt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new u1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(so()<=De.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(so()<=De.DEBUG&&oe("QueryEngine","Query:",oo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(so()<=De.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):H.resolve())}ys(e,t){if(zg(t))return H.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=bd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Oe(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,bd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return zg(t)||o.isEqual(Ie.min())?H.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?H.resolve(null):(so()<=De.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(t)),this.vs(e,h,t,bT(o,$a)).next((m=>m)))}))}Ds(e,t){let s=new wt(N_(e));return t.forEach(((o,u)=>{_c(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return so()<=De.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",oo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ii.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="LocalStore",h1=3e8;class d1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Ve),this.xs=new ms((u=>nf(u)),rf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function f1(i,e,t,s){return new d1(i,e,t,s)}async function ev(i,e){const t=xe(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Oe();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function p1(i,e){const t=xe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,E){const x=_.batch,b=x.keys();let B=H.resolve();return b.forEach((J=>{B=B.next((()=>E.getEntry(y,J))).next((Y=>{const q=_.docVersions.get(J);ze(q!==null,48541),Y.version.compareTo(q)<0&&(x.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),E.addEntry(Y)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,x)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Oe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function tv(i){const e=xe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function m1(i,e){const t=xe(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((E,x)=>{const b=o.get(x);if(!b)return;m.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(u,E.addedDocuments,x))));let B=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(x)!==null?B=B.withResumeToken(bt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(x,B),(function(Y,q,Te){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=h1?!0:Te.addedDocuments.size+Te.modifiedDocuments.size+Te.removedDocuments.size>0})(b,B,E)&&m.push(t.Pi.updateTargetData(u,B))}));let y=Pr(),_=Oe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(g1(u,h,e.documentUpdates).next((E=>{y=E.ks,_=E.qs}))),!s.isEqual(Ie.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next((x=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function g1(i,e,t){let s=Oe(),o=Oe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Pr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ie.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):oe(ff,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function y1(i,e){const t=xe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Zd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function _1(i,e){const t=xe(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new mi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Md(i,e,t){const s=xe(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;oe(ff,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function ey(i,e,t){const s=xe(i);let o=Ie.min(),u=Oe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,E){const x=xe(y),b=x.xs.get(E);return b!==void 0?H.resolve(x.Ms.get(b)):x.Pi.getTargetData(_,E)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?u:Oe()))).next((m=>(v1(s,iI(e),m),{documents:m,Qs:u})))))}function v1(i,e,t){let s=i.Os.get(e)||Ie.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class ty{constructor(){this.activeTargetIds=cI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w1{constructor(){this.Mo=new ty,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ty,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="ConnectivityMonitor";class ry{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(ny,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu=null;function jd(){return Nu===null?Nu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Nu++,"0x"+Nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="RestConnection",T1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class I1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Yu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=jd(),m=this.zo(e,t.toUriEncodedString());oe(pd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),E=Ao(_);return this.Jo(e,m,y,s,E).then((x=>(oe(pd,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw _o(pd,`RPC '${e}' ${h} failed with error: `,x,"url: ",m,"request:",s),x}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ko})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=T1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class A1 extends I1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=jd();return new Promise(((m,y)=>{const _=new r_;_.setWithCredentials(!0),_.listenOnce(i_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Mu.NO_ERROR:const x=_.getResponseJson();oe(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),m(x);break;case Mu.TIMEOUT:oe(Ft,`RPC '${e}' ${h} timed out`),y(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const b=_.getStatus();if(oe(Ft,`RPC '${e}' ${h} failed with status:`,b,"response text:",_.getResponseText()),b>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const J=B==null?void 0:B.error;if(J&&J.status&&J.message){const Y=(function(Te){const ge=Te.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ge)>=0?ge:$.UNKNOWN})(J.status);y(new ie(Y,J.message))}else y(new ie($.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ie($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{oe(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);oe(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}T_(e,t,s){const o=jd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=a_(),m=o_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const E=u.join("");oe(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,y);const x=h.createWebChannel(E,y);this.I_(x);let b=!1,B=!1;const J=new S1({Yo:q=>{B?oe(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(b||(oe(Ft,`Opening RPC '${e}' stream ${o} transport.`),x.open(),b=!0),oe(Ft,`RPC '${e}' stream ${o} sending:`,q),x.send(q))},Zo:()=>x.close()}),Y=(q,Te,ge)=>{q.listen(Te,(Ee=>{try{ge(Ee)}catch(Pe){setTimeout((()=>{throw Pe}),0)}}))};return Y(x,Da.EventType.OPEN,(()=>{B||(oe(Ft,`RPC '${e}' stream ${o} transport opened.`),J.o_())})),Y(x,Da.EventType.CLOSE,(()=>{B||(B=!0,oe(Ft,`RPC '${e}' stream ${o} transport closed`),J.a_(),this.E_(x))})),Y(x,Da.EventType.ERROR,(q=>{B||(B=!0,_o(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),J.a_(new ie($.UNAVAILABLE,"The operation could not be completed")))})),Y(x,Da.EventType.MESSAGE,(q=>{var Te;if(!B){const ge=q.data[0];ze(!!ge,16349);const Ee=ge,Pe=(Ee==null?void 0:Ee.error)||((Te=Ee[0])==null?void 0:Te.error);if(Pe){oe(Ft,`RPC '${e}' stream ${o} received error:`,Pe);const $e=Pe.status;let Ne=(function(k){const R=pt[k];if(R!==void 0)return B_(R)})($e),N=Pe.message;Ne===void 0&&(Ne=$.INTERNAL,N="Unknown error status: "+$e+" with message "+Pe.message),B=!0,J.a_(new ie(Ne,N)),x.close()}else oe(Ft,`RPC '${e}' stream ${o} received:`,ge),J.u_(ge)}})),Y(m,s_.STAT_EVENT,(q=>{q.stat===Ad.PROXY?oe(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Ad.NOPROXY&&oe(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){return new RI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="PersistentStream";class rv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Rr(t.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(iy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(oe(iy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class x1 extends rv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=bI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ie.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?nr(h.readTime):Ie.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ld(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Pd(y)?{documents:OI(u,y)}:{query:LI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=H_(u,h.resumeToken);const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){m.readTime=tc(u,h.snapshotVersion.toTimestamp());const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=jI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ld(this.serializer),t.removeTarget=e,this.q_(t)}}class k1 extends rv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=VI(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ld(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>DI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{}class R1 extends C1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Vd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Vd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class P1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RemoteStore";class N1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{gs(this)&&(oe(fs,"Restarting streams for network reachability change."),await(async function(y){const _=xe(y);_.Ea.add(4),await rl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Ic(_)})(this))}))})),this.Ra=new P1(s,o)}}async function Ic(i){if(gs(i))for(const e of i.da)await e(!0)}async function rl(i){for(const e of i.da)await e(!1)}function iv(i,e){const t=xe(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),yf(t)?gf(t):No(t).O_()&&mf(t,e))}function pf(i,e){const t=xe(i),s=No(t);t.Ia.delete(e),s.O_()&&sv(t,e),t.Ia.size===0&&(s.O_()?s.L_():gs(t)&&t.Ra.set("Unknown"))}function mf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(i).Y_(e)}function sv(i,e){i.Va.Ue(e),No(i).Z_(e)}function gf(i){i.Va=new AI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),No(i).start(),i.Ra.ua()}function yf(i){return gs(i)&&!No(i).x_()&&i.Ia.size>0}function gs(i){return xe(i).Ea.size===0}function ov(i){i.Va=void 0}async function b1(i){i.Ra.set("Online")}async function D1(i){i.Ia.forEach(((e,t)=>{mf(i,e)}))}async function V1(i,e){ov(i),yf(i)?(i.Ra.ha(e),gf(i)):i.Ra.set("Unknown")}async function O1(i,e,t){if(i.Ra.set("Online"),e instanceof q_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){oe(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rc(i,s)}else if(e instanceof zu?i.Va.Ze(e):e instanceof $_?i.Va.st(e):i.Va.tt(e),!t.isEqual(Ie.min()))try{const s=await tv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(_);E&&u.Ia.set(_,E.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(bt.EMPTY_BYTE_STRING,E.snapshotVersion)),sv(u,y);const x=new mi(E.target,y,_,E.sequenceNumber);mf(u,x)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){oe(fs,"Failed to raise snapshot:",s),await rc(i,s)}}async function rc(i,e,t){if(!Ro(e))throw e;i.Ea.add(1),await rl(i),i.Ra.set("Offline"),t||(t=()=>tv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{oe(fs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Ic(i)}))}function av(i,e){return e().catch((t=>rc(i,t,e)))}async function Sc(i){const e=xe(i),t=ki(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zd;for(;L1(e);)try{const o=await y1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,M1(e,o)}catch(o){await rc(e,o)}lv(e)&&uv(e)}function L1(i){return gs(i)&&i.Ta.length<10}function M1(i,e){i.Ta.push(e);const t=ki(i);t.O_()&&t.X_&&t.ea(e.mutations)}function lv(i){return gs(i)&&!ki(i).x_()&&i.Ta.length>0}function uv(i){ki(i).start()}async function j1(i){ki(i).ra()}async function F1(i){const e=ki(i);for(const t of i.Ta)e.ea(t.mutations)}async function U1(i,e,t){const s=i.Ta.shift(),o=af.from(s,e,t);await av(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Sc(i)}async function z1(i,e){e&&ki(i).X_&&await(async function(s,o){if((function(h){return TI(h)&&h!==$.ABORTED})(o.code)){const u=s.Ta.shift();ki(s).B_(),await av(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Sc(s)}})(i,e),lv(i)&&uv(i)}async function sy(i,e){const t=xe(i);t.asyncQueue.verifyOperationInProgress(),oe(fs,"RemoteStore received new credentials");const s=gs(t);t.Ea.add(3),await rl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ic(t)}async function B1(i,e){const t=xe(i);e?(t.Ea.delete(2),await Ic(t)):e||(t.Ea.add(2),await rl(t),t.Ra.set("Unknown"))}function No(i){return i.ma||(i.ma=(function(t,s,o){const u=xe(t);return u.sa(),new x1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:b1.bind(null,i),t_:D1.bind(null,i),r_:V1.bind(null,i),H_:O1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),yf(i)?gf(i):i.Ra.set("Unknown")):(await i.ma.stop(),ov(i))}))),i.ma}function ki(i){return i.fa||(i.fa=(function(t,s,o){const u=xe(t);return u.sa(),new k1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:j1.bind(null,i),r_:z1.bind(null,i),ta:F1.bind(null,i),na:U1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await Sc(i)):(await i.fa.stop(),i.Ta.length>0&&(oe(fs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new _f(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(i,e){if(Rr("AsyncQueue",`${e}: ${i}`),Ro(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new co;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Io{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Io(e,t,co.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class q1{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=xe(t),u=o.queries;o.queries=ay(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new ie($.ABORTED,"Firestore shutting down"))}}function ay(){return new ms((i=>P_(i)),yc)}async function H1(i,e){const t=xe(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new $1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=vf(h,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&wf(t)}async function W1(i,e){const t=xe(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function G1(i,e){const t=xe(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&wf(t)}function K1(i,e,t){const s=xe(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function wf(i){i.Ca.forEach((e=>{e.next()}))}var Fd,ly;(ly=Fd||(Fd={})).Ma="default",ly.Cache="cache";class Q1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.key=e}}class hv{constructor(e){this.key=e}}class Y1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Oe(),this.mutatedKeys=Oe(),this.eu=N_(e),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new oy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,x)=>{const b=o.get(E),B=_c(this.query,x)?x:null,J=!!b&&this.mutatedKeys.has(b.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;b&&B?b.data.isEqual(B.data)?J!==Y&&(s.track({type:3,doc:B}),q=!0):this.su(b,B)||(s.track({type:2,doc:B}),q=!0,(y&&this.eu(B,y)>0||_&&this.eu(B,_)<0)&&(m=!0)):!b&&B?(s.track({type:0,doc:B}),q=!0):b&&!B&&(s.track({type:1,doc:b}),q=!0,(y||_)&&(m=!0)),q&&(B?(h=h.add(B),u=Y?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((E,x)=>(function(B,J){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:q})}};return Y(B)-Y(J)})(E.type,x.type)||this.eu(E.doc,x.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new Io(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new oy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Oe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new hv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new cv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ef="SyncEngine";class X1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class J1{constructor(e){this.key=e,this.hu=!1}}class Z1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ms((m=>P_(m)),yc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(fe.comparator),this.Au=new Map,this.Ru=new cf,this.Vu={},this.mu=new Map,this.fu=To.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function eS(i,e,t=!0){const s=yv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await dv(s,e,t,!0),o}async function tS(i,e){const t=yv(i);await dv(t,e,!0,!1)}async function dv(i,e,t,s){const o=await _1(i.localStore,tr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await nS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&iv(i.remoteStore,o),m}async function nS(i,e,t,s,o){i.pu=(x,b,B)=>(async function(Y,q,Te,ge){let Ee=q.view.ru(Te);Ee.Cs&&(Ee=await ey(Y.localStore,q.query,!1).then((({documents:N})=>q.view.ru(N,Ee))));const Pe=ge&&ge.targetChanges.get(q.targetId),$e=ge&&ge.targetMismatches.get(q.targetId)!=null,Ne=q.view.applyChanges(Ee,Y.isPrimaryClient,Pe,$e);return cy(Y,q.targetId,Ne.au),Ne.snapshot})(i,x,b,B);const u=await ey(i.localStore,e,!0),h=new Y1(e,u.Qs),m=h.ru(u.documents),y=nl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);cy(i,t,_.au);const E=new X1(e,t,h);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function rS(i,e,t){const s=xe(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!yc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Md(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&pf(s.remoteStore,o.targetId),Ud(s,o.targetId)})).catch(Co)):(Ud(s,o.targetId),await Md(s.localStore,o.targetId,!0))}async function iS(i,e){const t=xe(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pf(t.remoteStore,s.targetId))}async function sS(i,e,t){const s=dS(i);try{const o=await(function(h,m){const y=xe(h),_=Xe.now(),E=m.reduce(((B,J)=>B.add(J.key)),Oe());let x,b;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let J=Pr(),Y=Oe();return y.Ns.getEntries(B,E).next((q=>{J=q,J.forEach(((Te,ge)=>{ge.isValidDocument()||(Y=Y.add(Te))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,J))).next((q=>{x=q;const Te=[];for(const ge of m){const Ee=yI(ge,x.get(ge.key).overlayedDocument);Ee!=null&&Te.push(new Pi(ge.key,Ee,E_(Ee.value.mapValue),bn.exists(!0)))}return y.mutationQueue.addMutationBatch(B,_,Te,m)})).next((q=>{b=q;const Te=q.applyToLocalDocumentSet(x,Y);return y.documentOverlayCache.saveOverlays(B,q.batchId,Te)}))})).then((()=>({batchId:b.batchId,changes:D_(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new nt(Ve)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await il(s,o.changes),await Sc(s.remoteStore)}catch(o){const u=vf(o,"Failed to persist write");t.reject(u)}}async function fv(i,e){const t=xe(i);try{const s=await m1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await il(t,s,e)}catch(s){await Co(s)}}function uy(i,e,t){const s=xe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=xe(h);y.onlineState=m;let _=!1;y.queries.forEach(((E,x)=>{for(const b of x.Sa)b.va(m)&&(_=!0)})),_&&wf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function oS(i,e,t){const s=xe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,zt.newNoDocument(u,Ie.min()));const m=Oe().add(u),y=new Ec(Ie.min(),new Map,new nt(Ve),h,m);await fv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Tf(s)}else await Md(s.localStore,e,!1).then((()=>Ud(s,e,t))).catch(Co)}async function aS(i,e){const t=xe(i),s=e.batch.batchId;try{const o=await p1(t.localStore,e);mv(t,s,null),pv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await il(t,o)}catch(o){await Co(o)}}async function lS(i,e,t){const s=xe(i);try{const o=await(function(h,m){const y=xe(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return y.mutationQueue.lookupMutationBatch(_,m).next((x=>(ze(x!==null,37113),E=x.keys(),y.mutationQueue.removeMutationBatch(_,x)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>y.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);mv(s,e,t),pv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await il(s,o)}catch(o){await Co(o)}}function pv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function mv(i,e,t){const s=xe(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Ud(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||gv(i,s)}))}function gv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(pf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Tf(i))}function cy(i,e,t){for(const s of t)s instanceof cv?(i.Ru.addReference(s.key,e),uS(i,s)):s instanceof hv?(oe(Ef,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||gv(i,s.key)):_e(19791,{wu:s})}function uS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(oe(Ef,"New document in limbo: "+t),i.Eu.add(s),Tf(i))}function Tf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new fe(Ge.fromString(e)),s=i.fu.next();i.Au.set(s,new J1(t)),i.du=i.du.insert(t,s),iv(i.remoteStore,new mi(tr(C_(t.path)),s,"TargetPurposeLimboResolution",pc.ce))}}async function il(i,e,t){const s=xe(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const x=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,x?"current":"not-current")}if(_){o.push(_);const x=df.As(y.targetId,_);u.push(x)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const E=xe(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>H.forEach(_,(b=>H.forEach(b.Es,(B=>E.persistence.referenceDelegate.addReference(x,b.targetId,B))).next((()=>H.forEach(b.ds,(B=>E.persistence.referenceDelegate.removeReference(x,b.targetId,B)))))))))}catch(x){if(!Ro(x))throw x;oe(ff,"Failed to update sequence numbers: "+x)}for(const x of _){const b=x.targetId;if(!x.fromCache){const B=E.Ms.get(b),J=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(J);E.Ms=E.Ms.insert(b,Y)}}})(s.localStore,u))}async function cS(i,e){const t=xe(i);if(!t.currentUser.isEqual(e)){oe(Ef,"User change. New user:",e.toKey());const s=await ev(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new ie($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await il(t,s.Ls)}}function hS(i,e){const t=xe(i),s=t.Au.get(e);if(s&&s.hu)return Oe().add(s.key);{let o=Oe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function yv(i){const e=xe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=fv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oS.bind(null,e),e.Pu.H_=G1.bind(null,e.eventManager),e.Pu.yu=K1.bind(null,e.eventManager),e}function dS(i){const e=xe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lS.bind(null,e),e}class ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return f1(this.persistence,new c1,e.initialUser,this.serializer)}Cu(e){return new Z_(hf.mi,this.serializer)}Du(e){return new w1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ic.provider={build:()=>new ic};class fS extends ic{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof nc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new QI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Z_((s=>nc.mi(s,t)),this.serializer)}}class zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=cS.bind(null,this.syncEngine),await B1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new q1})()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=(function(u){return new A1(u)})(e.databaseInfo);return(function(u,h,m,y){return new R1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new N1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>uy(this.syncEngine,t,0)),(function(){return ry.v()?new ry:new E1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,E){const x=new Z1(o,u,h,m,y,_);return E&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=xe(o);oe(fs,"RemoteStore shutting down."),u.Ea.add(5),await rl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zd.provider={build:()=>new zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="FirestoreClient";class mS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{oe(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function gd(i,e){i.asyncQueue.verifyOperationInProgress(),oe(Ci,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await ev(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function hy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await gS(i);oe(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>sy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>sy(e.remoteStore,o))),i._onlineComponents=e}async function gS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(Ci,"Using user provided OfflineComponentProvider");try{await gd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;_o("Error using user provided cache. Falling back to memory cache: "+t),await gd(i,new ic)}}else oe(Ci,"Using default OfflineComponentProvider"),await gd(i,new fS(void 0));return i._offlineComponents}async function _v(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(Ci,"Using user provided OnlineComponentProvider"),await hy(i,i._uninitializedComponentsProvider._online)):(oe(Ci,"Using default OnlineComponentProvider"),await hy(i,new zd))),i._onlineComponents}function yS(i){return _v(i).then((e=>e.syncEngine))}async function _S(i){const e=await _v(i),t=e.eventManager;return t.onListen=eS.bind(null,e.syncEngine),t.onUnlisten=rS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=iS.bind(null,e.syncEngine),t}function vS(i,e,t={}){const s=new wi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const E=new pS({next:b=>{E.Nu(),h.enqueueAndForget((()=>W1(u,x))),b.fromCache&&y.source==="server"?_.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(b)},error:b=>_.reject(b)}),x=new Q1(m,E,{includeMetadataChanges:!0,qa:!0});return H1(u,x)})(await _S(i),i.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wv,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=J_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GI)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new ET;switch(s.type){case"firstParty":return new AT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=dy.get(t);s&&(oe("ComponentProvider","Removing Datastore"),dy.delete(t),s.terminate())})(this),Promise.resolve()}}function wS(i,e,t,s={}){var _;i=ds(i,Ac);const o=Ao(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Ky(`https://${m}`),Qy("Firestore",!0)),u.host!==wv&&u.host!==m&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!us(y,h)&&(i._setSettings(y),s.mockUserToken)){let E,x;if(typeof s.mockUserToken=="string")E=s.mockUserToken,x=Ut.MOCK_USER;else{E=Ww(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new Ut(b)}i._authCredentials=new TT(new u_(E,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(el(t,vt._jsonSchema))return new vt(e,s||null,new fe(Ge.fromString(t.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:gt("string",vt._jsonSchemaVersion),referencePath:gt("string")};class Ei extends ys{constructor(e,t,s){super(e,t,C_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new fe(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function Pa(i,e,...t){if(i=At(i),c_("collection","path",e),i instanceof Ac){const s=Ge.fromString(e,...t);return kg(s),new Ei(i,null,s)}{if(!(i instanceof vt||i instanceof Ei))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return kg(s),new Ei(i.firestore,null,s)}}function Bd(i,e,...t){if(i=At(i),arguments.length===1&&(e=Jd.newId()),c_("doc","path",e),i instanceof Ac){const s=Ge.fromString(e,...t);return xg(s),new vt(i,null,new fe(s))}{if(!(i instanceof vt||i instanceof Ei))throw new ie($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return xg(s),new vt(i.firestore,i instanceof Ei?i.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="AsyncQueue";class gy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nv(this,"async_queue_retry"),this._c=()=>{const s=md();s&&oe(my,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new wi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;oe(my,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Rr("INTERNAL UNHANDLED ERROR: ",yy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=_f.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:yy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class sl extends Ac{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new gy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function ES(i,e){const t=typeof i=="object"?i:Zy(),s=typeof i=="string"?i:Yu,o=Yd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=qw("firestore");u&&wS(o,...u)}return o}function Ev(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||TS(i),i._firestoreClient}function TS(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,_,E){return new BT(m,y,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,vv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new mS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(bt.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:gt("string",vn._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(el(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:gt("string",rr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ie($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:gt("string",ir._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=/^__.*__$/;class SS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new tl(e,this.data,t,this.fieldTransforms)}}class Tv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Iv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:i})}}class Sf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return sc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Iv(this.Ac)&&IS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class AS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}Cc(e,t,s,o=!1){return new Sf({Ac:e,methodName:t,Dc:s,path:Nt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Af(i){const e=i._freezeSettings(),t=Tc(i._databaseId);return new AS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function xS(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);xf("Data must be an object, but it was:",h,s);const m=Sv(s,h);let y,_;if(u.merge)y=new cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const x of u.mergeFields){const b=$d(e,x,t);if(!h.contains(b))throw new ie($.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);xv(E,b)||E.push(b)}y=new cn(E),_=h.fieldTransforms.filter((x=>y.covers(x.field)))}else y=null,_=h.fieldTransforms;return new SS(new Zt(m),y,_)}class kc extends If{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}function kS(i,e,t,s){const o=i.Cc(1,e,t);xf("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();Ri(s,((y,_)=>{const E=kf(e,y,t);_=At(_);const x=o.yc(E);if(_ instanceof kc)u.push(E);else{const b=ol(_,x);b!=null&&(u.push(E),h.set(E,b))}}));const m=new cn(u);return new Tv(h,m,o.fieldTransforms)}function CS(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[$d(e,s,t)],y=[o];if(u.length%2!=0)throw new ie($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<u.length;b+=2)m.push($d(e,u[b])),y.push(u[b+1]);const _=[],E=Zt.empty();for(let b=m.length-1;b>=0;--b)if(!xv(_,m[b])){const B=m[b];let J=y[b];J=At(J);const Y=h.yc(B);if(J instanceof kc)_.push(B);else{const q=ol(J,Y);q!=null&&(_.push(B),E.set(B,q))}}const x=new cn(_);return new Tv(E,x,h.fieldTransforms)}function RS(i,e,t,s=!1){return ol(t,i.Cc(s?4:3,e))}function ol(i,e){if(Av(i=At(i)))return xf("Unsupported field value:",e,i),Sv(i,e);if(i instanceof If)return(function(s,o){if(!Iv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=ol(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:tc(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tc(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:H_(o.serializer,s._byteString)};if(s instanceof vt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:uf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[v_]:{stringValue:w_},[Xu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return sf(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${fc(s)}`)})(i,e)}function Sv(i,e){const t={};return f_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(i,((s,o)=>{const u=ol(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Av(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Xe||i instanceof rr||i instanceof vn||i instanceof vt||i instanceof If||i instanceof ir)}function xf(i,e,t){if(!Av(t)||!h_(t)){const s=fc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function $d(i,e,t){if((e=At(e))instanceof xc)return e._internalPath;if(typeof e=="string")return kf(i,e);throw sc("Field path arguments must be of type string or ",i,!1,void 0,t)}const PS=new RegExp("[~\\*/\\[\\]]");function kf(i,e,t){if(e.search(PS)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new xc(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function sc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ie($.INVALID_ARGUMENT,m+i+y)}function xv(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NS extends kv{data(){return super.data()}}function Cf(i,e){return typeof e=="string"?kf(i,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{}class Cv extends Rf{}function bu(i,e,...t){let s=[];e instanceof Rf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof Nf)).length,m=u.filter((y=>y instanceof Pf)).length;if(h>1||h>0&&m>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Pf extends Cv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Pf(e,t,s)}_apply(e){const t=this._parse(e);return Rv(e._query,t),new ys(e.firestore,e.converter,Nd(e._query,t))}_parse(e){const t=Af(e.firestore);return(function(u,h,m,y,_,E,x){let b;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){vy(x,E);const J=[];for(const Y of x)J.push(_y(y,u,Y));b={arrayValue:{values:J}}}else b=_y(y,u,x)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||vy(x,E),b=RS(m,h,x,E==="in"||E==="not-in");return mt.create(_,E,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Nf extends Rf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)Rv(h,y),h=Nd(h,y)})(e._query,t),new ys(e.firestore,e.converter,Nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bf extends Cv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ga(u,h)})(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Po(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Du(i,e="asc"){const t=e,s=Cf("orderBy",i);return bf._create(s,t)}function _y(i,e,t){if(typeof(t=At(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R_(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!fe.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Og(i,new fe(s))}if(t instanceof vt)return Og(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(t)}.`)}function vy(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class DS{convertValue(e,t="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ri(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Xu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>lt(h.doubleValue)));return new ir(t)}convertGeoPoint(e){return new rr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const t=Si(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);ze(X_(s),9688,{name:e});const o=new Ha(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||Rr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Vu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ho extends kv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ho._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ho._jsonSchemaVersion="firestore/documentSnapshot/1.0",ho._jsonSchema={type:gt("string",ho._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Bu extends ho{data(e={}){return super.data(e)}}class fo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Vu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new Vu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:OS(m.type),doc:y,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}fo._jsonSchemaVersion="firestore/querySnapshot/1.0",fo._jsonSchema={type:gt("string",fo._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};class LS extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,t)}}function Ou(i){i=ds(i,ys);const e=ds(i.firestore,sl),t=Ev(e),s=new LS(e);return bS(i._query),vS(t,i._query).then((o=>new fo(e,s,i,o)))}function MS(i,e,t,...s){i=ds(i,vt);const o=ds(i.firestore,sl),u=Af(o);let h;return h=typeof(e=At(e))=="string"||e instanceof xc?CS(u,"updateDoc",i._key,e,t,s):kS(u,"updateDoc",i._key,e),Df(o,[h.toMutation(i._key,bn.exists(!0))])}function jS(i){return Df(ds(i.firestore,sl),[new of(i._key,bn.none())])}function FS(i,e){const t=ds(i.firestore,sl),s=Bd(i),o=VS(i.converter,e);return Df(t,[xS(Af(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then((()=>s))}function Df(i,e){return(function(s,o){const u=new wi;return s.asyncQueue.enqueueAndForget((async()=>sS(await yS(s),o,u))),u.promise})(Ev(i),e)}(function(e,t=!0){(function(o){ko=o})(xo),yo(new cs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new sl(new IT(s.getProvider("auth-internal")),new xT(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(_.options.projectId,E)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),_i(Tg,Ig,e),_i(Tg,Ig,"esm2020")})();function Pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const US=Pv,Nv=new Ja("auth","Firebase",Pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Kd("@firebase/auth");function zS(i,...e){oc.logLevel<=De.WARN&&oc.warn(`Auth (${xo}): ${i}`,...e)}function $u(i,...e){oc.logLevel<=De.ERROR&&oc.error(`Auth (${xo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(i,...e){throw Vf(i,...e)}function sr(i,...e){return Vf(i,...e)}function bv(i,e,t){const s={...US(),[e]:t};return new Ja("auth","Firebase",s).create(e,{appName:i.name})}function Ti(i){return bv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Nv.create(i,...e)}function ye(i,e,...t){if(!i)throw Vf(e,...t)}function xr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw $u(e),new Error(e)}function Nr(i,e){i||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function BS(){return wy()==="http:"||wy()==="https:"}function wy(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BS()||Jw()||"connection"in navigator)?navigator.onLine:!0}function qS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=Qw()||Zw()}get(){return $S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(i,e){Nr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],GS=new al(3e4,6e4);function _s(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ni(i,e,t,s,o={}){return Vv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Za({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return Xw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Ao(i.emulatorConfig.host)&&(_.credentials="include"),Dv.fetch()(await Ov(i,i.config.apiHost,t,m),_)})}async function Vv(i,e,t){i._canInitEmulator=!1;const s={...HS,...e};try{const o=new QS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Lu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Lu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Lu(i,"user-disabled",h);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw bv(i,E,_);Vn(i,E)}}catch(o){if(o instanceof br)throw o;Vn(i,"network-request-failed",{message:String(o)})}}async function Cc(i,e,t,s,o={}){const u=await Ni(i,e,t,s,o);return"mfaPendingCredential"in u&&Vn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ov(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Of(i.config,o):`${i.config.apiScheme}://${o}`;return WS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function KS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),GS.get())})}}function Lu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(i,e,s);return o.customData._tokenResponse=t,o}function Ey(i){return i!==void 0&&i.enterprise!==void 0}class YS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return KS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XS(i,e){return Ni(i,"GET","/v2/recaptchaConfig",_s(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(i,e){return Ni(i,"POST","/v1/accounts:delete",e)}async function ac(i,e){return Ni(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZS(i,e=!1){const t=At(i),s=await t.getIdToken(e),o=Lf(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:za(yd(o.auth_time)),issuedAtTime:za(yd(o.iat)),expirationTime:za(yd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function yd(i){return Number(i)*1e3}function Lf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return $u("JWT malformed, contained fewer than 3 sections"),null;try{const o=qy(t);return o?JSON.parse(o):($u("Failed to decode base64 JWT payload"),null)}catch(o){return $u("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ty(i){const e=Lf(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof br&&eA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function eA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(i){var x;const e=i.auth,t=await i.getIdToken(),s=await Ya(i,ac(e,{idToken:t}));ye(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(x=o.providerUserInfo)!=null&&x.length?Lv(o.providerUserInfo):[],h=rA(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Hd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,E)}async function nA(i){const e=At(i);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Lv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(i,e){const t=await Vv(i,{},async()=>{const s=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Ov(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ao(i.emulatorConfig.host)&&(y.credentials="include"),Dv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sA(i,e){return Ni(i,"POST","/v2/accounts:revokeToken",_s(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await iA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new tA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Hd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ya(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ZS(this,e)}reload(){return nA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await Ya(this,JS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:x,emailVerified:b,isAnonymous:B,providerData:J,stsTokenManager:Y}=t;ye(x&&Y,e,"internal-error");const q=po.fromJSON(this.name,Y);ye(typeof x=="string",e,"internal-error"),ci(s,e.name),ci(o,e.name),ye(typeof b=="boolean",e,"internal-error"),ye(typeof B=="boolean",e,"internal-error"),ci(u,e.name),ci(h,e.name),ci(m,e.name),ci(y,e.name),ci(_,e.name),ci(E,e.name);const Te=new Nn({uid:x,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:q,createdAt:_,lastLoginAt:E});return J&&Array.isArray(J)&&(Te.providerData=J.map(ge=>({...ge}))),y&&(Te._redirectEventId=y),Te}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await lc(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Lv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const y=new Nn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Hd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;function kr(i){Nr(i instanceof Function,"Expected a class definition");let e=Iy.get(i);return e?(Nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Iy.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mv.type="NONE";const Sy=Mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(i,e,t){return`firebase:${i}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=qu(this.userKey,o.apiKey,u),this.fullPersistenceKey=qu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ac(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(kr(Sy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||kr(Sy);const h=qu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const E=await _._get(h);if(E){let x;if(typeof E=="string"){const b=await ac(e,{idToken:E}).catch(()=>{});if(!b)break;x=await Nn._fromGetAccountInfoResponse(e,b,E)}else x=Nn._fromJSON(e,E);_!==u&&(m=x),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new mo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new mo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($v(e))return"Blackberry";if(qv(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||Uv(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jv(i=Bt()){return/firefox\//i.test(i)}function Fv(i=Bt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uv(i=Bt()){return/crios\//i.test(i)}function zv(i=Bt()){return/iemobile/i.test(i)}function Bv(i=Bt()){return/android/i.test(i)}function $v(i=Bt()){return/blackberry/i.test(i)}function qv(i=Bt()){return/webos/i.test(i)}function Mf(i=Bt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function oA(i=Bt()){var e;return Mf(i)&&!!((e=window.navigator)!=null&&e.standalone)}function aA(){return eE()&&document.documentMode===10}function Hv(i=Bt()){return Mf(i)||Bv(i)||qv(i)||$v(i)||/windows phone/i.test(i)||zv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(i,e=[]){let t;switch(i){case"Browser":t=Ay(Bt());break;case"Worker":t=`${Ay(Bt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(i,e={}){return Ni(i,"GET","/v2/passwordPolicy",_s(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=6;class hA{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new lA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ac(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Ti(this));const t=e?At(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uA(this),t=new hA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ja("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await sA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[kr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&zS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bo(i){return At(i)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=lE(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fA(i){Rc=i}function Gv(i){return Rc.loadJS(i)}function pA(){return Rc.recaptchaEnterpriseScript}function mA(){return Rc.gapiScript}function gA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class yA{constructor(){this.enterprise=new _A}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _A{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vA="recaptcha-enterprise",Kv="NO_RECAPTCHA";class wA{constructor(e){this.type=vA,this.auth=bo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{XS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new YS(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;Ey(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Kv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ey(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=pA();y.length!==0&&(y+=m),Gv(y).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function ky(i,e,t,s=!1,o=!1){const u=new wA(i);let h;if(o)h=Kv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Cy(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ky(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await ky(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(i,e){const t=Yd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(us(u,e??{}))return o;Vn(o,"already-initialized")}return t.initialize({options:e})}function TA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function IA(i,e,t){const s=bo(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Qv(e),{host:h,port:m}=SA(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(us(_,s.config.emulator)&&us(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ao(h)?(Ky(`${u}//${h}${y}`),Qy("Auth",!0)):AA()}function Qv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function SA(i){const e=Qv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ry(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ry(h)}}}function Ry(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function AA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function xA(i,e){return Ni(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(i,e){return Cc(i,"POST","/v1/accounts:signInWithPassword",_s(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(i,e){return Cc(i,"POST","/v1/accounts:signInWithEmailLink",_s(i,e))}async function RA(i,e){return Cc(i,"POST","/v1/accounts:signInWithEmailLink",_s(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends jf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Xa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,t,"signInWithPassword",kA);case"emailLink":return CA(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,s,"signUpPassword",xA);case"emailLink":return RA(e,{idToken:t,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(i,e){return Cc(i,"POST","/v1/accounts:signInWithIdp",_s(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="http://localhost";class ps extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ps(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:PA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Za(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bA(i){const e=Na(ba(i)).link,t=e?Na(ba(e)).deep_link_id:null,s=Na(ba(i)).deep_link_id;return(s?Na(ba(s)).link:null)||s||t||e||i}class Ff{constructor(e){const t=Na(ba(e)),s=t.apiKey??null,o=t.oobCode??null,u=NA(t.mode??null);ye(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=bA(e);try{return new Ff(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,t){return Xa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ff.parseLink(t);return ye(s,"argument-error"),Xa._fromEmailAndCode(e,s.code,s.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Yv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends ll{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ps._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ll{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends ll{constructor(){super("twitter.com")}static credential(e,t){return ps._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Nn._fromIdTokenResponse(e,s,o),h=Py(s);return new So({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Py(s);return new So({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Py(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends br{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new uc(e,t,s,o)}}function Xv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(i,u,e,s):u})}async function DA(i,e,t=!1){const s=await Ya(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return So._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(i,e,t=!1){const{auth:s}=i;if(Pn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const u=await Ya(i,Xv(s,o,e,i),t);ye(u.idToken,s,"internal-error");const h=Lf(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),So._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Vn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(i,e,t=!1){if(Pn(i.app))return Promise.reject(Ti(i));const s="signIn",o=await Xv(i,s,e),u=await So._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function OA(i,e){return Jv(bo(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(i){const e=bo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function MA(i,e,t){return Pn(i.app)?Promise.reject(Ti(i)):OA(At(i),Do.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&LA(i),s})}function jA(i,e,t,s){return At(i).onIdTokenChanged(e,t,s)}function FA(i,e,t){return At(i).beforeAuthStateChanged(e,t)}function UA(i,e,t,s){return At(i).onAuthStateChanged(e,t,s)}function zA(i){return At(i).signOut()}const cc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1e3,$A=10;class e0 extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);aA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$A):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}e0.type="LOCAL";const qA=e0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t0.type="SESSION";const n0=t0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await HA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Uf("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(x){const b=x;if(b.data.eventId===_)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function GA(i){or().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function KA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function YA(){return r0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebaseLocalStorageDb",XA=1,hc="firebaseLocalStorage",s0="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nc(i,e){return i.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function JA(){const i=indexedDB.deleteDatabase(i0);return new ul(i).toPromise()}function Wd(){const i=indexedDB.open(i0,XA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(hc,{keyPath:s0})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(hc)?e(s):(s.close(),await JA(),e(await Wd()))})})}async function Ny(i,e,t){const s=Nc(i,!0).put({[s0]:e,value:t});return new ul(s).toPromise()}async function ZA(i,e){const t=Nc(i,!1).get(e),s=await new ul(t).toPromise();return s===void 0?null:s.value}function by(i,e){const t=Nc(i,!0).delete(e);return new ul(t).toPromise()}const ex=800,tx=3;class o0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(YA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await KA(),!this.activeServiceWorker)return;this.sender=new WA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wd();return await Ny(e,cc,"1"),await by(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ny(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ZA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>by(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Nc(o,!1).getAll();return new ul(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ex)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o0.type="LOCAL";const nx=o0;new al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(i,e){return e?kr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ix(i){return Jv(i.auth,new zf(i),i.bypassAuthState)}function sx(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),VA(t,new zf(i),i.bypassAuthState)}async function ox(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),DA(t,new zf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ix;case"linkViaPopup":case"linkViaRedirect":return ox;case"reauthViaPopup":case"reauthViaRedirect":return sx;default:Vn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=new al(2e3,1e4);class uo extends a0{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ax.get())};e()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="pendingRedirect",Hu=new Map;class ux extends a0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Hu.get(this.auth._key());if(!e){try{const s=await cx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Hu.set(this.auth._key(),e)}return this.bypassAuthState||Hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cx(i,e){const t=fx(e),s=dx(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function hx(i,e){Hu.set(i._key(),e)}function dx(i){return kr(i._redirectPersistence)}function fx(i){return qu(lx,i.config.apiKey,i.name)}async function px(i,e,t=!1){if(Pn(i.app))return Promise.reject(Ti(i));const s=bo(i),o=rx(s,e),h=await new ux(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=600*1e3;class gx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!l0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function l0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yx(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(i,e={}){return Ni(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wx=/^https?/;async function Ex(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _x(i);for(const t of e)try{if(Tx(t))return}catch{}Vn(i,"unauthorized-domain")}function Tx(i){const e=qd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!wx.test(t))return!1;if(vx.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=new al(3e4,6e4);function Vy(){const i=or().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Sx(i){return new Promise((e,t)=>{var o,u,h;function s(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),t(sr(i,"network-request-failed"))},timeout:Ix.get()})}if((u=(o=or().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=or().gapi)!=null&&h.load)s();else{const m=gA("iframefcb");return or()[m]=()=>{gapi.load?s():t(sr(i,"network-request-failed"))},Gv(`${mA()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function Ax(i){return Wu=Wu||Sx(i),Wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new al(5e3,15e3),kx="__/auth/iframe",Cx="emulator/auth/iframe",Rx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Px=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nx(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Of(e,Cx):`https://${i.config.authDomain}/${kx}`,s={apiKey:e.apiKey,appName:i.name,v:xo},o=Px.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Za(s).slice(1)}`}async function bx(i){const e=await Ax(i),t=or().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:Nx(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rx,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=sr(i,"network-request-failed"),m=or().setTimeout(()=>{u(h)},xx.get());function y(){or().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vx=500,Ox=600,Lx="_blank",Mx="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jx(i,e,t,s=Vx,o=Ox){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...Dx,width:s.toString(),height:o.toString(),top:u,left:h},_=Bt().toLowerCase();t&&(m=Uv(_)?Lx:t),jv(_)&&(e=e||Mx,y.scrollbars="yes");const E=Object.entries(y).reduce((b,[B,J])=>`${b}${B}=${J},`,"");if(oA(_)&&m!=="_self")return Fx(e||"",m),new Oy(null);const x=window.open(e||"",m,E);ye(x,i,"popup-blocked");try{x.focus()}catch{}return new Oy(x)}function Fx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="__/auth/handler",zx="emulator/auth/handler",Bx=encodeURIComponent("fac");async function Ly(i,e,t,s,o,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:xo,eventId:o};if(e instanceof Yv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",aE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,x]of Object.entries({}))h[E]=x}if(e instanceof ll){const E=e.getScopes().filter(x=>x!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),_=y?`#${Bx}=${encodeURIComponent(y)}`:"";return`${$x(i)}?${Za(m).slice(1)}${_}`}function $x({config:i}){return i.emulator?Of(i,zx):`https://${i.authDomain}/${Ux}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="webStorageSupport";class qx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n0,this._completeRedirectFn=px,this._overrideRedirectResult=hx}async _openPopup(e,t,s,o){var h;Nr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Ly(e,t,s,qd(),o);return jx(e,u,Uf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ly(e,t,s,qd(),o);return GA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await bx(e),s=new gx(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_d,{type:_d},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[_d];u!==void 0&&t(!!u),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ex(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hv()||Fv()||Mf()}}const Hx=qx;var My="@firebase/auth",jy="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kx(i){yo(new cs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(i)},_=new dA(s,o,u,y);return TA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yo(new cs("auth-internal",e=>{const t=bo(e.getProvider("auth").getImmediate());return(s=>new Wx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(My,jy,Gx(i)),_i(My,jy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=300,Yx=Gy("authIdTokenMaxAge")||Qx;let Fy=null;const Xx=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Yx)return;const o=t==null?void 0:t.token;Fy!==o&&(Fy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Jx(i=Zy()){const e=Yd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=EA(i,{popupRedirectResolver:Hx,persistence:[nx,qA,n0]}),s=Gy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=Xx(u.toString());FA(t,h,()=>h(t.currentUser)),jA(t,m=>h(m))}}const o=Hy("auth");return o&&IA(t,`http://${o}`),t}function Zx(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}fA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=sr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",Zx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kx("Browser");const ek={apiKey:"AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",authDomain:"my-portfolio-db-8e7ac.firebaseapp.com",projectId:"my-portfolio-db-8e7ac",storageBucket:"my-portfolio-db-8e7ac.firebasestorage.app",messagingSenderId:"640921515154",appId:"1:640921515154:web:528be384c173cf632e224b"},u0=Jy(ek),os=ES(u0),vd=Jx(u0),tk=()=>{const[i,e]=tt.useState("home"),[t,s]=tt.useState(!1),[o,u]=tt.useState(!1),[h,m]=tt.useState([]),[y,_]=tt.useState([]),[E,x]=tt.useState([]),[b,B]=tt.useState([]),[J,Y]=tt.useState(!0),[q,Te]=tt.useState(null),[ge,Ee]=tt.useState(!1),[Pe,$e]=tt.useState(""),[Ne,N]=tt.useState(""),[S,k]=tt.useState(""),[R,P]=tt.useState(null),[O,A]=tt.useState(null),[le,Re]=tt.useState({}),ut=async()=>{Y(!0);try{const z=bu(Pa(os,"projects"),Du("createdAt","desc")),re=await Ou(z);m(re.docs.map(Dt=>({id:Dt.id,...Dt.data()})));const te=bu(Pa(os,"experiences"),Du("order","asc")),ct=await Ou(te);_(ct.docs.map(Dt=>({id:Dt.id,...Dt.data()})));const Dr=bu(Pa(os,"educations"),Du("order","asc")),bi=await Ou(Dr);x(bi.docs.map(Dt=>({id:Dt.id,...Dt.data()})));const On=bu(Pa(os,"skills"),Du("order","asc")),Vr=await Ou(On);B(Vr.docs.map(Dt=>({id:Dt.id,...Dt.data()})))}catch(z){console.error("Error fetching data: ",z)}finally{Y(!1)}};tt.useEffect(()=>{ut();const z=()=>u(window.scrollY>50);window.addEventListener("scroll",z);const re=UA(vd,te=>{Te(te)});return()=>{window.removeEventListener("scroll",z),re()}},[]);const He=async z=>{z.preventDefault();try{await MA(vd,Pe,Ne),k(""),Ee(!0)}catch{k("Login failed. Check your email/password.")}},ee=async()=>{await zA(vd),Ee(!1),W()},de=(z,re=null)=>{z==="project"?Re(re||{title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""}):z==="experience"?Re(re||{role:"",company:"",period:"",description:"",details:[]}):z==="education"?Re(re||{school:"",degree:"",period:"",description:""}):z==="skill"&&Re(re||{category:"",items:""})},ne=z=>{A(z),P(null),de(z)},V=(z,re)=>{P({type:z,id:re.id}),A(null);let te={...re};z==="skill"&&Array.isArray(re.items)&&(te.items=re.items.join(", ")),z==="experience"&&Array.isArray(re.details)&&(te.detailsStr=re.details.join(`
`)),de(z,te);const ct=document.getElementById(`form-${z}`);ct&&ct.scrollIntoView({behavior:"smooth",block:"center"})},W=()=>{A(null),P(null),Re({})},Se=async z=>{try{let re={...le,createdAt:new Date};re.order||(re.order=Date.now()),z==="skill"&&(re.items=le.items.split(",").map(te=>te.trim()).filter(te=>te)),z==="experience"&&le.detailsStr&&(re.details=le.detailsStr.split(`
`).filter(te=>te.trim()),delete re.detailsStr),R&&R.type===z?(await MS(Bd(os,`${z}s`,R.id),re),alert("Updated successfully!")):(await FS(Pa(os,`${z}s`),re),alert("Added successfully!")),ut(),W()}catch(re){console.error("Error saving document: ",re),alert("Error saving data")}},ve=async(z,re)=>{if(window.confirm("Are you sure you want to delete this item?"))try{await jS(Bd(os,`${z}s`,re)),ut()}catch(te){console.error("Error deleting document: ",te)}},ke=z=>{const re=document.getElementById(z);re&&(re.scrollIntoView({behavior:"smooth"}),e(z),s(!1))},Ce=z=>{const re=R&&R.type===z;return T.jsxs("div",{id:`form-${z}`,className:"glass-panel p-6 rounded-2xl mb-8 animate-fade-in-up border border-indigo-500/30 ring-1 ring-indigo-500/20 shadow-lg shadow-indigo-500/10",children:[T.jsxs("h4",{className:"text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4",children:[re?T.jsx(Ca,{size:22,className:"text-indigo-400"}):T.jsx(Ra,{size:22,className:"text-indigo-400"}),re?`Edit ${z.charAt(0).toUpperCase()+z.slice(1)}`:`Add New ${z.charAt(0).toUpperCase()+z.slice(1)}`]}),T.jsxs("div",{className:"grid gap-5",children:[z==="project"&&T.jsxs(T.Fragment,{children:[T.jsx("input",{className:"input-field",placeholder:"Project Title",value:le.title||"",onChange:te=>Re({...le,title:te.target.value})}),T.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[T.jsxs("select",{className:"input-field",value:le.type||"blog",onChange:te=>Re({...le,type:te.target.value}),children:[T.jsx("option",{value:"blog",children:"Blog Post"}),T.jsx("option",{value:"video",children:"YouTube Video"}),T.jsx("option",{value:"podcast",children:"Podcast"})]}),T.jsx("input",{className:"input-field",placeholder:"Button Label (e.g. View Blog)",value:le.linkText||"",onChange:te=>Re({...le,linkText:te.target.value})})]}),T.jsx("textarea",{className:"input-field min-h-[100px]",placeholder:"Short Description",value:le.description||"",onChange:te=>Re({...le,description:te.target.value})}),le.type==="video"?T.jsxs("div",{className:"space-y-2",children:[T.jsx("input",{className:"input-field",placeholder:"YouTube Video ID (e.g. kcb8OI46uTA)",value:le.videoId||"",onChange:te=>Re({...le,videoId:te.target.value})}),T.jsx("p",{className:"text-xs text-slate-500 pl-1",children:"* Video ID is the part after v= in URL"})]}):T.jsx("input",{className:"input-field",placeholder:"Full Link URL (https://...)",value:le.link||"",onChange:te=>Re({...le,link:te.target.value})})]}),z==="experience"&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[T.jsx("input",{className:"input-field",placeholder:"Role / Job Title",value:le.role||"",onChange:te=>Re({...le,role:te.target.value})}),T.jsx("input",{className:"input-field",placeholder:"Company Name",value:le.company||"",onChange:te=>Re({...le,company:te.target.value})})]}),T.jsx("input",{className:"input-field",placeholder:"Period (e.g. 2022 - 2024)",value:le.period||"",onChange:te=>Re({...le,period:te.target.value})}),T.jsx("textarea",{className:"input-field min-h-[150px]",placeholder:"Details (Enter one bullet point per line)",value:le.detailsStr||"",onChange:te=>Re({...le,detailsStr:te.target.value})})]}),z==="education"&&T.jsxs(T.Fragment,{children:[T.jsx("input",{className:"input-field",placeholder:"School / University",value:le.school||"",onChange:te=>Re({...le,school:te.target.value})}),T.jsx("input",{className:"input-field",placeholder:"Degree / Major",value:le.degree||"",onChange:te=>Re({...le,degree:te.target.value})}),T.jsx("input",{className:"input-field",placeholder:"Period / Location",value:le.period||"",onChange:te=>Re({...le,period:te.target.value})}),T.jsx("textarea",{className:"input-field min-h-[100px]",placeholder:"Description / Coursework (Optional)",value:le.description||"",onChange:te=>Re({...le,description:te.target.value})})]}),z==="skill"&&T.jsxs(T.Fragment,{children:[T.jsx("input",{className:"input-field",placeholder:"Skill Category (e.g. Strategy & Data)",value:le.category||"",onChange:te=>Re({...le,category:te.target.value})}),T.jsx("textarea",{className:"input-field min-h-[100px]",placeholder:"List Skills (Comma separated: e.g. Python, SQL, Excel)",value:le.items||"",onChange:te=>Re({...le,items:te.target.value})})]}),T.jsxs("div",{className:"flex gap-3 pt-4 border-t border-white/10",children:[T.jsxs("button",{onClick:()=>Se(z),className:"btn-primary flex items-center gap-2",children:[T.jsx(Vw,{size:18})," Save Changes"]}),T.jsxs("button",{onClick:W,className:"btn-secondary flex items-center gap-2",children:[T.jsx(Dw,{size:18})," Cancel"]})]})]})]})};return T.jsxs("div",{className:"min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden",children:[T.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none",children:[T.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen"}),T.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"}),T.jsx("div",{className:"absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-900/5 rounded-full blur-[100px] mix-blend-screen"})]}),T.jsx("div",{className:"fixed bottom-8 right-8 z-[100]",children:q?T.jsxs("div",{className:"flex gap-3 items-center animate-fade-in-up",children:[T.jsx("span",{className:"bg-indigo-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg shadow-indigo-900/20 border border-indigo-400/30 tracking-wide",children:"ADMIN MODE"}),T.jsx("button",{onClick:ee,className:"p-3.5 bg-red-500/10 backdrop-blur-md text-red-400 rounded-full shadow-2xl hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 border border-red-500/30",title:"Logout",children:T.jsx(Nw,{size:18})})]}):T.jsx("button",{onClick:()=>Ee(!ge),className:"p-3.5 bg-slate-800/80 backdrop-blur-md rounded-full shadow-2xl border border-slate-700/50 hover:bg-slate-700 hover:scale-110 transition-all duration-300 group hover:border-indigo-500/50",title:"Admin Login",children:T.jsx(og,{size:18,className:"text-slate-400 group-hover:text-indigo-300 transition-colors"})})}),ge&&!q&&T.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-md z-[101] flex items-center justify-center p-4 animate-fade-in",children:T.jsxs("div",{className:"glass-panel p-8 rounded-3xl w-full max-w-sm shadow-2xl border border-white/10 relative overflow-hidden",children:[T.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"}),T.jsxs("div",{className:"flex justify-between items-center mb-8",children:[T.jsxs("h2",{className:"text-xl font-bold text-white tracking-tight flex items-center gap-2",children:[T.jsx(og,{size:18,className:"text-indigo-400"})," Admin Access"]}),T.jsx("button",{onClick:()=>Ee(!1),className:"p-2 hover:bg-white/10 rounded-full transition-colors",children:T.jsx(ug,{size:18,className:"text-slate-400 hover:text-white"})})]}),T.jsxs("form",{onSubmit:He,className:"space-y-5",children:[T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider",children:"Email"}),T.jsx("input",{type:"email",value:Pe,onChange:z=>$e(z.target.value),className:"input-field",placeholder:"admin@example.com"})]}),T.jsxs("div",{children:[T.jsx("label",{className:"block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider",children:"Password"}),T.jsx("input",{type:"password",value:Ne,onChange:z=>N(z.target.value),className:"input-field",placeholder:"••••••••"})]}),S&&T.jsx("div",{className:"p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center font-medium",children:S}),T.jsx("button",{type:"submit",className:"w-full btn-primary py-3.5 text-sm uppercase tracking-wide shadow-lg shadow-indigo-500/20 mt-2",children:"Sign In"})]})]})}),T.jsxs("nav",{className:`fixed w-full z-40 transition-all duration-500 ${o?"bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/5":"bg-transparent py-4"}`,children:[T.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-3 flex justify-between items-center",children:[T.jsxs("div",{onClick:()=>ke("home"),className:"text-2xl font-black text-slate-100 cursor-pointer hover:text-indigo-400 transition-colors tracking-tighter group",children:["HK",T.jsx("span",{className:"text-indigo-500 group-hover:text-white transition-colors",children:"."})]}),T.jsx("div",{className:"hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full backdrop-blur-md border border-white/5",children:["About","Experience","Projects","Skills","Contact"].map(z=>T.jsx("button",{onClick:()=>ke(z.toLowerCase()),className:"px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-wide uppercase",children:z},z))}),T.jsx("div",{className:"md:hidden",children:T.jsx("button",{onClick:()=>s(!t),className:"text-slate-100 p-2 hover:bg-white/10 rounded-lg transition-colors",children:t?T.jsx(ug,{size:24}):T.jsx(bw,{size:24})})})]}),t&&T.jsx("div",{className:"md:hidden bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 animate-slide-down absolute w-full",children:T.jsx("div",{className:"px-6 py-6 flex flex-col space-y-2",children:["About","Experience","Projects","Skills","Contact"].map(z=>T.jsx("button",{onClick:()=>ke(z.toLowerCase()),className:"text-left px-4 py-4 text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5",children:z},z))})})]}),T.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center px-6 relative pt-20",children:T.jsxs("div",{className:"max-w-5xl mx-auto text-center relative z-10",children:[T.jsxs("div",{className:"inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold tracking-[0.2em] uppercase animate-fade-in-up hover:bg-indigo-500/20 transition-colors cursor-default",children:[T.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"}),"Content Strategist & Producer"]}),T.jsxs("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight animate-fade-in-up delay-100",children:["Hyeongmo ",T.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-300% animate-gradient",children:"Kim"})]}),T.jsxs("p",{className:"text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200",children:["Combining ",T.jsx("strong",{className:"text-white font-semibold",children:"Content"}),", ",T.jsx("strong",{className:"text-white font-semibold",children:"AI"}),", and ",T.jsx("strong",{className:"text-white font-semibold",children:"Psychology"}),T.jsx("br",{className:"hidden md:block"})," to create impactful digital experiences."]}),T.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up delay-300",children:[T.jsxs("button",{onClick:()=>ke("contact"),className:"btn-primary py-4 px-10 text-base flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/20 group",children:[T.jsx(ag,{size:18,className:"group-hover:-translate-y-0.5 transition-transform"})," Get in Touch"]}),T.jsxs("a",{href:"https://www.linkedin.com/in/hmstory0111",target:"_blank",rel:"noreferrer",className:"btn-secondary py-4 px-10 text-base flex items-center justify-center gap-3 group",children:[T.jsx(Pw,{size:18,className:"group-hover:-translate-y-0.5 transition-transform"})," LinkedIn Profile"]})]})]})}),T.jsx("section",{id:"about",className:"py-32 px-6",children:T.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start",children:[T.jsxs("div",{className:"animate-fade-in-up",children:[T.jsx("h2",{className:"section-title mb-10",children:"Professional Summary"}),T.jsxs("div",{className:"prose prose-lg prose-invert text-slate-400 leading-relaxed font-light",children:[T.jsxs("p",{className:"mb-8",children:["I am a multidisciplinary professional working across ",T.jsx("span",{className:"text-indigo-300 font-medium",children:"content strategy, production, and operations"}),". My passion lies in bridging the gap between creative storytelling and analytical rigor."]}),T.jsxs("p",{className:"p-6 bg-slate-900/50 border-l-4 border-indigo-500 rounded-r-xl italic text-slate-300",children:["Currently, I am expanding my expertise by pursuing an ",T.jsx("span",{className:"text-white font-semibold",children:"M.A. in Digital Innovation"}),", specifically studying how AI and data can inform audience behavior analysis and decision-making processes."]})]})]}),T.jsxs("div",{className:"glass-panel p-8 rounded-[2rem] border border-white/5 shadow-2xl relative animate-fade-in-up delay-200 hover:border-white/10 transition-colors",children:[T.jsxs("div",{className:"flex items-center justify-between mb-8 pb-6 border-b border-white/5",children:[T.jsxs("div",{className:"flex items-center gap-4",children:[T.jsx("div",{className:"p-3.5 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/10",children:T.jsx(od,{size:24})}),T.jsx("h3",{className:"text-xl font-bold text-white tracking-wide",children:"Education"})]}),q&&T.jsx("button",{onClick:()=>ne("education"),className:"icon-btn-add",children:T.jsx(Ra,{size:18})})]}),(O==="education"||(R==null?void 0:R.type)==="education")&&Ce("education"),T.jsx("div",{className:"space-y-10",children:E.length>0?E.map(z=>T.jsxs("div",{className:"relative pl-8 border-l border-slate-800 group hover:border-indigo-500/30 transition-colors",children:[T.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-900 group-hover:bg-indigo-500 group-hover:scale-125 transition-all"}),q&&T.jsxs("div",{className:"absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0",children:[T.jsx("button",{onClick:()=>V("education",z),className:"icon-btn-edit",children:T.jsx(Ca,{size:14})}),T.jsx("button",{onClick:()=>ve("education",z.id),className:"icon-btn-delete",children:T.jsx(xu,{size:14})})]}),T.jsx("h4",{className:"text-lg font-bold text-white mb-1.5",children:z.school}),T.jsxs("p",{className:"text-indigo-400 font-semibold text-xs mb-4 uppercase tracking-widest",children:[z.degree," • ",z.period]}),T.jsx("p",{className:"text-slate-400 text-sm leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all",children:z.description})]},z.id)):T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"relative pl-8 border-l border-indigo-500/30",children:[T.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"}),T.jsx("h4",{className:"text-lg font-bold text-white mb-1.5",children:"Yonsei University - Graduate School"}),T.jsx("p",{className:"text-indigo-400 font-semibold text-xs mb-4 uppercase tracking-widest",children:"M.A. Digital Innovation (Expected 2027)"}),T.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Focus: Audience Behavior, AI Data-driven decision-making"})]}),T.jsxs("div",{className:"relative pl-8 border-l border-slate-800",children:[T.jsx("div",{className:"absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700"}),T.jsx("h4",{className:"text-lg font-bold text-white mb-1.5",children:"Yonsei University"}),T.jsx("p",{className:"text-slate-500 font-semibold text-xs mb-4 uppercase tracking-widest",children:"B.A. International Relations & Psychology"})]})]})})]})]})}),T.jsxs("section",{id:"experience",className:"py-32 px-6 bg-[#03091e] relative overflow-hidden",children:[T.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"40px 40px"}}),T.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[T.jsxs("div",{className:"flex items-center justify-between mb-20",children:[T.jsx("h2",{className:"section-title",children:"Professional Experience"}),q&&T.jsxs("button",{onClick:()=>ne("experience"),className:"btn-primary py-2 px-4 text-xs flex items-center gap-2",children:[T.jsx(Ra,{size:16})," Add Exp"]})]}),(O==="experience"||(R==null?void 0:R.type)==="experience")&&Ce("experience"),T.jsx("div",{className:"space-y-6",children:y.length>0?y.map(z=>T.jsxs("div",{className:"glass-card p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.02] transition-all duration-300 group",children:[q&&T.jsxs("div",{className:"absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all",children:[T.jsx("button",{onClick:()=>V("experience",z),className:"icon-btn-edit",children:T.jsx(Ca,{size:16})}),T.jsx("button",{onClick:()=>ve("experience",z.id),className:"icon-btn-delete",children:T.jsx(xu,{size:16})})]}),T.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-bold text-white mb-1.5 group-hover:text-indigo-400 transition-colors",children:z.role}),T.jsx("p",{className:"text-lg text-slate-400 font-medium",children:z.company})]}),T.jsx("span",{className:"px-4 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/20 shadow-sm whitespace-nowrap tracking-wide",children:z.period})]}),T.jsx("ul",{className:"space-y-4",children:z.details&&z.details.map((re,te)=>T.jsxs("li",{className:"flex items-start gap-4 text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors",children:[T.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"}),T.jsx("span",{className:"font-light",children:re})]},te))})]},z.id)):T.jsxs("div",{className:"glass-card p-8 rounded-3xl border border-white/5",children:[T.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4",children:[T.jsxs("div",{children:[T.jsx("h3",{className:"text-2xl font-bold text-white mb-1.5",children:"Podcast & Video Producer"}),T.jsx("p",{className:"text-lg text-slate-400 font-medium",children:"Krafton - Publishing Platform Division (PPD)"})]}),T.jsx("span",{className:"px-4 py-1.5 bg-indigo-500/10 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/20",children:"2025 - Present"})]}),T.jsxs("ul",{className:"space-y-4",children:[T.jsxs("li",{className:"flex items-start gap-4 text-slate-400 font-light",children:[T.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"}),T.jsx("span",{children:"Produced internal podcasts and videos for 200+ staff to improve communication."})]}),T.jsxs("li",{className:"flex items-start gap-4 text-slate-400 font-light",children:[T.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"}),T.jsx("span",{children:"Handled the full production cycle end-to-end: script, host, record, film, edit."})]})]}),T.jsx("div",{className:"text-center mt-10 pt-6 border-t border-white/5 text-xs text-slate-600 uppercase tracking-widest",children:"* Admin: Add your experiences to replace this placeholder."})]})})]})]}),T.jsx("section",{id:"projects",className:"py-32 px-6",children:T.jsxs("div",{className:"max-w-7xl mx-auto",children:[T.jsxs("div",{className:"flex items-center justify-between mb-16",children:[T.jsx("h2",{className:"section-title",children:"Selected Works"}),q&&T.jsxs("button",{onClick:()=>ne("project"),className:"btn-primary py-2 px-4 text-xs flex items-center gap-2",children:[T.jsx(Ra,{size:16})," Add Project"]})]}),(O==="project"||(R==null?void 0:R.type)==="project")&&Ce("project"),T.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[T.jsxs("div",{className:"glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group flex flex-col hover:-translate-y-2",children:[T.jsxs("div",{className:"h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-900"}),T.jsx(od,{size:64,className:"text-slate-600 group-hover:text-indigo-400 transition-colors z-10 drop-shadow-2xl"})]}),T.jsxs("div",{className:"p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/20",children:[T.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors",children:"Film Review Blog"}),T.jsx("p",{className:"text-slate-400 mb-8 text-sm leading-relaxed flex-1 font-light",children:"A comprehensive film review platform written in English, analyzing cinematic techniques and storytelling structures."}),T.jsxs("a",{href:"https://medium.com/@hmstory0111",target:"_blank",rel:"noreferrer",className:"mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-indigo-600 text-center text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 group/btn",children:["Read on Medium ",T.jsx(Au,{size:16,className:"group-hover/btn:translate-x-1 transition-transform"})]})]})]}),T.jsxs("div",{className:"glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group flex flex-col hover:-translate-y-2",children:[T.jsxs("div",{className:"h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900 to-slate-900"}),T.jsx(lg,{size:64,className:"text-slate-600 group-hover:text-purple-400 transition-colors z-10 drop-shadow-2xl"})]}),T.jsxs("div",{className:"p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/20",children:[T.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors",children:"Film Review Podcast"}),T.jsx("p",{className:"text-slate-400 mb-8 text-sm leading-relaxed flex-1 font-light",children:"Proof of concept audio series exploring film narratives. Produced, hosted, and edited entirely solo."}),T.jsxs("a",{href:"https://youtu.com/ZafaT7ibW9I?si=Adj6qcoAAND6LHc_",target:"_blank",rel:"noreferrer",className:"mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-purple-600 text-center text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 group/btn",children:["Listen on YouTube ",T.jsx(Au,{size:16,className:"group-hover/btn:translate-x-1 transition-transform"})]})]})]}),T.jsxs("div",{className:"glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group flex flex-col hover:-translate-y-2",children:[T.jsx("div",{className:"h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden",children:T.jsx("img",{src:"https://img.youtube.com/vi/kcb8OI46uTA/hqdefault.jpg",alt:"AI Video",className:"w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"})}),T.jsxs("div",{className:"p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/20",children:[T.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors",children:"AI Creative Video"}),T.jsx("p",{className:"text-slate-400 mb-8 text-sm leading-relaxed flex-1 font-light",children:"Experimental video content created using Generative AI tools. Explored new visual storytelling."}),T.jsxs("a",{href:"https://youtu.com/kcb8OI46uTA",target:"_blank",rel:"noreferrer",className:"mt-auto w-full py-3 rounded-xl bg-white/5 hover:bg-red-600 text-center text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 group/btn",children:["Watch on YouTube ",T.jsx(Au,{size:16,className:"group-hover/btn:translate-x-1 transition-transform"})]})]})]}),h.map(z=>T.jsxs("div",{className:"glass-card rounded-[2rem] overflow-hidden border border-white/5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group relative flex flex-col hover:-translate-y-2",children:[q&&T.jsxs("div",{className:"absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all bg-black/60 p-1.5 rounded-full backdrop-blur-md border border-white/10",children:[T.jsx("button",{onClick:()=>V("project",z),className:"icon-btn-edit",children:T.jsx(Ca,{size:14})}),T.jsx("button",{onClick:()=>ve("project",z.id),className:"icon-btn-delete",children:T.jsx(xu,{size:14})})]}),T.jsx("div",{className:"h-64 bg-slate-900 flex items-center justify-center relative overflow-hidden",children:z.type==="video"&&z.videoId?T.jsx("img",{src:`https://img.youtube.com/vi/${z.videoId}/hqdefault.jpg`,alt:z.title,className:"w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"}):T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-900 group-hover:scale-105 transition-transform duration-500"}),z.type==="podcast"?T.jsx(lg,{size:64,className:"text-slate-600 group-hover:text-purple-400 z-10 drop-shadow-2xl"}):T.jsx(od,{size:64,className:"text-slate-600 group-hover:text-indigo-400 z-10 drop-shadow-2xl"})]})}),T.jsxs("div",{className:"p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-black/20",children:[T.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors",children:z.title}),T.jsx("p",{className:"text-slate-400 mb-8 text-sm line-clamp-3 leading-relaxed flex-1 font-light",children:z.description}),T.jsxs("a",{href:z.type==="video"?`https://youtu.be/${z.videoId}`:z.link,target:"_blank",rel:"noreferrer",className:`mt-auto w-full py-3 rounded-xl bg-white/5 text-center text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 group/btn ${z.type==="video"?"hover:bg-red-600":z.type==="podcast"?"hover:bg-purple-600":"hover:bg-indigo-600"}`,children:[z.linkText||"View Detail"," ",T.jsx(Au,{size:16,className:"group-hover/btn:translate-x-1 transition-transform"})]})]})]},z.id))]})]})}),T.jsx("section",{id:"skills",className:"py-32 px-6 bg-slate-900/30",children:T.jsxs("div",{className:"max-w-5xl mx-auto",children:[T.jsxs("div",{className:"flex items-center justify-center gap-4 mb-20 relative",children:[T.jsx("h2",{className:"section-title text-center",children:"Skills & Expertise"}),q&&T.jsx("button",{onClick:()=>ne("skill"),className:"absolute right-0 top-1 btn-primary py-2 px-3 text-xs",children:T.jsx(Ra,{size:16})})]}),(O==="skill"||(R==null?void 0:R.type)==="skill")&&Ce("skill"),T.jsx("div",{className:"grid md:grid-cols-2 gap-10",children:b.length>0?b.map(z=>T.jsxs("div",{className:"relative group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:border-indigo-500/30 transition-all",children:[q&&T.jsxs("div",{className:"absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all",children:[T.jsx("button",{onClick:()=>V("skill",z),className:"icon-btn-edit",children:T.jsx(Ca,{size:14})}),T.jsx("button",{onClick:()=>ve("skill",z.id),className:"icon-btn-delete",children:T.jsx(xu,{size:14})})]}),T.jsxs("div",{className:"flex items-center gap-4 mb-8 pb-6 border-b border-white/5",children:[T.jsx("div",{className:"p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/10",children:T.jsx(sg,{size:24})}),T.jsx("h3",{className:"text-2xl font-bold text-white",children:z.category})]}),T.jsx("div",{className:"flex flex-wrap gap-3",children:z.items&&z.items.map((re,te)=>T.jsx("span",{className:"px-5 py-2.5 bg-white/5 hover:bg-indigo-500/20 text-slate-300 hover:text-white rounded-xl text-sm font-medium border border-white/5 hover:border-indigo-500/30 transition-all cursor-default",children:re},te))})]},z.id)):T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]",children:[T.jsxs("div",{className:"flex items-center gap-4 mb-8 pb-6 border-b border-white/5",children:[T.jsx("div",{className:"p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/10",children:T.jsx(sg,{size:24})}),T.jsx("h3",{className:"text-2xl font-bold text-white",children:"Strategy & Data"})]}),T.jsx("div",{className:"flex flex-wrap gap-3",children:["Audience Insights","Content Analytics","Roadmapping","Cross-functional Ops"].map(z=>T.jsx("span",{className:"px-5 py-2.5 bg-white/5 text-slate-300 rounded-xl text-sm font-medium border border-white/5",children:z},z))})]}),T.jsxs("div",{className:"p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]",children:[T.jsxs("div",{className:"flex items-center gap-4 mb-8 pb-6 border-b border-white/5",children:[T.jsx("div",{className:"p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/10",children:T.jsx(Ow,{size:24})}),T.jsx("h3",{className:"text-2xl font-bold text-white",children:"Production & Tools"})]}),T.jsx("div",{className:"flex flex-wrap gap-3",children:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"].map(z=>T.jsx("span",{className:"px-5 py-2.5 bg-white/5 text-slate-300 rounded-xl text-sm font-medium border border-white/5",children:z},z))})]})]})})]})}),T.jsx("section",{id:"contact",className:"py-40 px-6",children:T.jsxs("div",{className:"max-w-4xl mx-auto text-center glass-panel p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group",children:[T.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-blue-900/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700"}),T.jsxs("div",{className:"relative z-10",children:[T.jsx("h2",{className:"text-4xl md:text-5xl font-black text-white mb-8 tracking-tight",children:"Ready to Collaborate?"}),T.jsx("p",{className:"text-slate-400 mb-12 text-lg font-light max-w-2xl mx-auto",children:"I'm always open to discussing content strategy, AI applications in media, or production opportunities. Let's create something amazing together."}),T.jsx("div",{className:"flex flex-col sm:flex-row justify-center gap-6",children:T.jsxs("a",{href:"mailto:hmstory0111@gmail.com",className:"btn-primary py-4 px-10 text-lg flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/30",children:[T.jsx(ag,{size:22})," hmstory0111@gmail.com"]})}),T.jsx("div",{className:"mt-20 pt-8 border-t border-white/5 text-slate-500 text-sm font-medium tracking-wide",children:T.jsx("p",{children:"© 2025 Hyeongmo Kim. All rights reserved."})})]})]})}),T.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body { font-family: 'Inter', sans-serif; background-color: #020617; }
        
        /* Custom Utilities */
        .glass-panel { background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .glass-card { background: rgba(30, 41, 59, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        
        .section-title { font-size: 2.5rem; font-weight: 800; color: white; display: flex; align-items: center; gap: 1rem; letter-spacing: -0.02em; }
        .section-title::before { content: ''; display: block; width: 3rem; height: 0.25rem; background: linear-gradient(to right, #6366f1, #3b82f6); border-radius: 9999px; }
        
        .btn-primary { background: linear-gradient(135deg, #4f46e5, #3b82f6); color: white; border-radius: 1rem; font-weight: 600; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden; }
        .btn-primary:hover { transform: translateY(-2px); filter: brightness(1.1); box-shadow: 0 10px 30px -10px rgba(79, 70, 229, 0.6); }
        .btn-primary:active { transform: translateY(0); }
        
        .btn-secondary { background: rgba(255, 255, 255, 0.05); color: #e2e8f0; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 1rem; font-weight: 600; transition: all 0.2s; backdrop-filter: blur(10px); }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); color: white; border-color: rgba(255, 255, 255, 0.2); }

        .input-field { width: 100%; background: rgba(2, 6, 23, 0.5); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 0.75rem; padding: 1rem 1.25rem; color: white; outline: none; transition: all 0.2s; font-size: 0.95rem; }
        .input-field:focus { border-color: #6366f1; background: rgba(2, 6, 23, 0.8); box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15); }
        
        .icon-btn-add { padding: 0.5rem; background: #4f46e5; color: white; border-radius: 0.5rem; transition: all 0.2s; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3); }
        .icon-btn-add:hover { background: #4338ca; transform: scale(1.05); }

        .icon-btn-edit { padding: 0.5rem; background: rgba(255, 255, 255, 0.1); color: white; border-radius: 0.5rem; transition: all 0.2s; backdrop-filter: blur(4px); }
        .icon-btn-edit:hover { background: #4f46e5; }
        
        .icon-btn-delete { padding: 0.5rem; background: rgba(255, 255, 255, 0.1); color: white; border-radius: 0.5rem; transition: all 0.2s; backdrop-filter: blur(4px); }
        .icon-btn-delete:hover { background: #ef4444; }

        /* Animations */
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        
        @keyframes slide-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-down { animation: slide-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient { background-size: 200% auto; animation: gradient 4s linear infinite; }

        .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; }
      `})]})};xw.createRoot(document.getElementById("root")).render(T.jsx(vw.StrictMode,{children:T.jsx(tk,{})}));
