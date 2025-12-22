(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Fy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ed={exports:{}},Ra={},td={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function pE(){if(Qm)return De;Qm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Y={};function q(O,W,Se){this.props=O,this.context=W,this.refs=Y,this.updater=Se||B}q.prototype.isReactComponent={},q.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Te(){}Te.prototype=q.prototype;function ge(O,W,Se){this.props=O,this.context=W,this.refs=Y,this.updater=Se||B}var we=ge.prototype=new Te;we.constructor=ge,J(we,q.prototype),we.isPureReactComponent=!0;var xe=Array.isArray,$e=Object.prototype.hasOwnProperty,Ne={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(O,W,Se){var ve,Re={},ke=null,z=null;if(W!=null)for(ve in W.ref!==void 0&&(z=W.ref),W.key!==void 0&&(ke=""+W.key),W)$e.call(W,ve)&&!N.hasOwnProperty(ve)&&(Re[ve]=W[ve]);var re=arguments.length-2;if(re===1)Re.children=Se;else if(1<re){for(var te=Array(re),Ct=0;Ct<re;Ct++)te[Ct]=arguments[Ct+2];Re.children=te}if(O&&O.defaultProps)for(ve in re=O.defaultProps,re)Re[ve]===void 0&&(Re[ve]=re[ve]);return{$$typeof:i,type:O,key:ke,ref:z,props:Re,_owner:Ne.current}}function R(O,W){return{$$typeof:i,type:O.type,key:W,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function x(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return W[Se]})}var L=/\/+/g;function S(O,W){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):W.toString(36)}function le(O,W,Se,ve,Re){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var z=!1;if(O===null)z=!0;else switch(ke){case"string":case"number":z=!0;break;case"object":switch(O.$$typeof){case i:case e:z=!0}}if(z)return z=O,Re=Re(z),O=ve===""?"."+S(z,0):ve,xe(Re)?(Se="",O!=null&&(Se=O.replace(L,"$&/")+"/"),le(Re,W,Se,"",function(Ct){return Ct})):Re!=null&&(P(Re)&&(Re=R(Re,Se+(!Re.key||z&&z.key===Re.key?"":(""+Re.key).replace(L,"$&/")+"/")+O)),W.push(Re)),1;if(z=0,ve=ve===""?".":ve+":",xe(O))for(var re=0;re<O.length;re++){ke=O[re];var te=ve+S(ke,re);z+=le(ke,W,Se,te,Re)}else if(te=D(O),typeof te=="function")for(O=te.call(O),re=0;!(ke=O.next()).done;)ke=ke.value,te=ve+S(ke,re++),z+=le(ke,W,Se,te,Re);else if(ke==="object")throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return z}function Pe(O,W,Se){if(O==null)return O;var ve=[],Re=0;return le(O,ve,"","",function(ke){return W.call(Se,ke,Re++)}),ve}function ut(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var He={current:null},ee={transition:null},de={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Ne};function ne(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:Pe,forEach:function(O,W,Se){Pe(O,function(){W.apply(this,arguments)},Se)},count:function(O){var W=0;return Pe(O,function(){W++}),W},toArray:function(O){return Pe(O,function(W){return W})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},De.Component=q,De.Fragment=t,De.Profiler=o,De.PureComponent=ge,De.StrictMode=s,De.Suspense=y,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,De.act=ne,De.cloneElement=function(O,W,Se){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ve=J({},O.props),Re=O.key,ke=O.ref,z=O._owner;if(W!=null){if(W.ref!==void 0&&(ke=W.ref,z=Ne.current),W.key!==void 0&&(Re=""+W.key),O.type&&O.type.defaultProps)var re=O.type.defaultProps;for(te in W)$e.call(W,te)&&!N.hasOwnProperty(te)&&(ve[te]=W[te]===void 0&&re!==void 0?re[te]:W[te])}var te=arguments.length-2;if(te===1)ve.children=Se;else if(1<te){re=Array(te);for(var Ct=0;Ct<te;Ct++)re[Ct]=arguments[Ct+2];ve.children=re}return{$$typeof:i,type:O.type,key:Re,ref:ke,props:ve,_owner:z}},De.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},De.createElement=I,De.createFactory=function(O){var W=I.bind(null,O);return W.type=O,W},De.createRef=function(){return{current:null}},De.forwardRef=function(O){return{$$typeof:m,render:O}},De.isValidElement=P,De.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:ut}},De.memo=function(O,W){return{$$typeof:_,type:O,compare:W===void 0?null:W}},De.startTransition=function(O){var W=ee.transition;ee.transition={};try{O()}finally{ee.transition=W}},De.unstable_act=ne,De.useCallback=function(O,W){return He.current.useCallback(O,W)},De.useContext=function(O){return He.current.useContext(O)},De.useDebugValue=function(){},De.useDeferredValue=function(O){return He.current.useDeferredValue(O)},De.useEffect=function(O,W){return He.current.useEffect(O,W)},De.useId=function(){return He.current.useId()},De.useImperativeHandle=function(O,W,Se){return He.current.useImperativeHandle(O,W,Se)},De.useInsertionEffect=function(O,W){return He.current.useInsertionEffect(O,W)},De.useLayoutEffect=function(O,W){return He.current.useLayoutEffect(O,W)},De.useMemo=function(O,W){return He.current.useMemo(O,W)},De.useReducer=function(O,W,Se){return He.current.useReducer(O,W,Se)},De.useRef=function(O){return He.current.useRef(O)},De.useState=function(O){return He.current.useState(O)},De.useSyncExternalStore=function(O,W,Se){return He.current.useSyncExternalStore(O,W,Se)},De.useTransition=function(){return He.current.useTransition()},De.version="18.3.1",De}var Ym;function Wd(){return Ym||(Ym=1,td.exports=pE()),td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function mE(){if(Xm)return Ra;Xm=1;var i=Wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var w,A={},D=null,B=null;_!==void 0&&(D=""+_),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(B=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(A[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)A[w]===void 0&&(A[w]=y[w]);return{$$typeof:e,type:m,key:D,ref:B,props:A,_owner:o.current}}return Ra.Fragment=t,Ra.jsx=h,Ra.jsxs=h,Ra}var Jm;function gE(){return Jm||(Jm=1,ed.exports=mE()),ed.exports}var C=gE(),tt=Wd();const yE=Fy(tt);var Tu={},nd={exports:{}},Xt={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function _E(){return Zm||(Zm=1,(function(i){function e(ee,de){var ne=ee.length;ee.push(de);e:for(;0<ne;){var O=ne-1>>>1,W=ee[O];if(0<o(W,de))ee[O]=de,ee[ne]=W,ne=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],ne=ee.pop();if(ne!==de){ee[0]=ne;e:for(var O=0,W=ee.length,Se=W>>>1;O<Se;){var ve=2*(O+1)-1,Re=ee[ve],ke=ve+1,z=ee[ke];if(0>o(Re,ne))ke<W&&0>o(z,Re)?(ee[O]=z,ee[ke]=ne,O=ke):(ee[O]=Re,ee[ve]=ne,O=ve);else if(ke<W&&0>o(z,ne))ee[O]=z,ee[ke]=ne,O=ke;else break e}}return de}function o(ee,de){var ne=ee.sortIndex-de.sortIndex;return ne!==0?ne:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,A=null,D=3,B=!1,J=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function we(ee){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=ee)s(_),de.sortIndex=de.expirationTime,e(y,de);else break;de=t(_)}}function xe(ee){if(Y=!1,we(ee),!J)if(t(y)!==null)J=!0,ut($e);else{var de=t(_);de!==null&&He(xe,de.startTime-ee)}}function $e(ee,de){J=!1,Y&&(Y=!1,Te(I),I=-1),B=!0;var ne=D;try{for(we(de),A=t(y);A!==null&&(!(A.expirationTime>de)||ee&&!x());){var O=A.callback;if(typeof O=="function"){A.callback=null,D=A.priorityLevel;var W=O(A.expirationTime<=de);de=i.unstable_now(),typeof W=="function"?A.callback=W:A===t(y)&&s(y),we(de)}else s(y);A=t(y)}if(A!==null)var Se=!0;else{var ve=t(_);ve!==null&&He(xe,ve.startTime-de),Se=!1}return Se}finally{A=null,D=ne,B=!1}}var Ne=!1,N=null,I=-1,R=5,P=-1;function x(){return!(i.unstable_now()-P<R)}function L(){if(N!==null){var ee=i.unstable_now();P=ee;var de=!0;try{de=N(!0,ee)}finally{de?S():(Ne=!1,N=null)}}else Ne=!1}var S;if(typeof ge=="function")S=function(){ge(L)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Pe=le.port2;le.port1.onmessage=L,S=function(){Pe.postMessage(null)}}else S=function(){q(L,0)};function ut(ee){N=ee,Ne||(Ne=!0,S())}function He(ee,de){I=q(function(){ee(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){J||B||(J=!0,ut($e))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(ee){switch(D){case 1:case 2:case 3:var de=3;break;default:de=D}var ne=D;D=de;try{return ee()}finally{D=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=D;D=ee;try{return de()}finally{D=ne}},i.unstable_scheduleCallback=function(ee,de,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,ee){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,ee={id:w++,callback:de,priorityLevel:ee,startTime:ne,expirationTime:W,sortIndex:-1},ne>O?(ee.sortIndex=ne,e(_,ee),t(y)===null&&ee===t(_)&&(Y?(Te(I),I=-1):Y=!0,He(xe,ne-O))):(ee.sortIndex=W,e(y,ee),J||B||(J=!0,ut($e))),ee},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(ee){var de=D;return function(){var ne=D;D=de;try{return ee.apply(this,arguments)}finally{D=ne}}}})(id)),id}var eg;function vE(){return eg||(eg=1,rd.exports=_E()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function EE(){if(tg)return Xt;tg=1;var i=Wd(),e=vE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function D(n){return y.call(A,n)?!0:y.call(w,n)?!1:_.test(n)?A[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function ge(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Te,ge);q[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Te,ge);q[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Te,ge);q[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function we(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(J(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var xe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$e=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function W(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Se=!1;function ve(n,r){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,T=f.length-1;1<=v&&0<=T&&d[v]!==f[T];)T--;for(;1<=v&&0<=T;v--,T--)if(d[v]!==f[T]){if(v!==1||T!==1)do if(v--,T--,0>T||d[v]!==f[T]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=T);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function Re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=ve(n.type,!1),n;case 11:return n=ve(n.type.render,!1),n;case 1:return n=ve(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ne:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case L:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pe:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case ut:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function z(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function te(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ct(n){var r=te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Vr(n){n._valueTracker||(n._valueTracker=Ct(n))}function Di(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Ln(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Or(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ot(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=re(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vs(n,r){r=r.checked,r!=null&&we(n,"checked",r,!1)}function Vi(n,r){vs(n,r);var a=re(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ct(n,r.type,a):r.hasOwnProperty("defaultValue")&&ct(n,r.type,re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Oo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ct(n,r,a){(r!=="number"||Ln(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var st=Array.isArray;function En(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+re(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Lo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function bo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(st(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:re(a)}}function ll(n,r){var a=re(r.value),c=re(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Lr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Mo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Mo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var br,ul=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=br.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Oi(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cl=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(n){cl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Mr[r]=Mr[n]})});function Fr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Mr.hasOwnProperty(n)&&Mr[n]?(""+r).trim():r+"px"}function ws(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Fr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Fo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wn(n,r){if(r){if(Fo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ts(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ur=null;function Is(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lr=null,ur=null,rt=null;function Uo(n){if(n=da(n)){if(typeof lr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ml(r),lr(n.stateNode,n.type,r))}}function jr(n){ur?rt?rt.push(n):rt=[n]:ur=n}function zr(){if(ur){var n=ur,r=rt;if(rt=ur=null,Uo(n),r)for(n=0;n<r.length;n++)Uo(r[n])}}function hl(n,r){return n(r)}function dl(){}var bn=!1;function fl(n,r,a){if(bn)return n(r,a);bn=!0;try{return hl(n,r,a)}finally{bn=!1,(ur!==null||rt!==null)&&(dl(),zr())}}function Li(n,r){var a=n.stateNode;if(a===null)return null;var c=Ml(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Br=!1;if(m)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Br=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Br=!1}function pl(n,r,a,c,d,f,v,T,k){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var cr=!1,Mn=null,Ss=!1,hn=null,ml={onError:function(n){cr=!0,Mn=n}};function gl(n,r,a,c,d,f,v,T,k){cr=!1,Mn=null,pl.apply(ml,arguments)}function jo(n,r,a,c,d,f,v,T,k){if(gl.apply(this,arguments),cr){if(cr){var U=Mn;cr=!1,Mn=null}else throw Error(t(198));Ss||(Ss=!0,hn=U)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function zo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function yl(n){if(Tn(n)!==n)throw Error(t(188))}function _l(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return yl(d),n;if(f===c)return yl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,T=d.child;T;){if(T===a){v=!0,a=d,c=f;break}if(T===c){v=!0,c=d,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,c=d;break}if(T===c){v=!0,c=f,a=d;break}T=T.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function vl(n){return n=_l(n),n!==null?bi(n):null}function bi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=bi(n);if(r!==null)return r;n=n.sibling}return null}var Bo=e.unstable_scheduleCallback,As=e.unstable_cancelCallback,Mi=e.unstable_shouldYield,hr=e.unstable_requestPaint,Ke=e.unstable_now,Nc=e.unstable_getCurrentPriorityLevel,Cs=e.unstable_ImmediatePriority,$o=e.unstable_UserBlockingPriority,Fi=e.unstable_NormalPriority,qo=e.unstable_LowPriority,Rs=e.unstable_IdlePriority,Ui=null,en=null;function El(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:ji,Fn=Math.log,dn=Math.LN2;function ji(n){return n>>>=0,n===0?32:31-(Fn(n)/dn|0)|0}var Un=64,qr=4194304;function je(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var T=v&~d;T!==0?c=je(T):(f&=v,f!==0&&(c=je(f)))}else v=a&~d,v!==0?c=je(v):f!==0&&(c=je(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-tn(r),d=1<<a,c|=n[a],r&=~d;return c}function zi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),T=1<<v,k=d[v];k===-1?((T&a)===0||(T&c)!==0)&&(d[v]=zi(T,r)):k<=r&&(n.expiredLanes|=T),f&=~T}}function Ho(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wo(){var n=Un;return Un<<=1,(Un&4194240)===0&&(Un=64),n}function Go(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function $i(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-tn(r),n[r]=a}function Dc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Ko(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var be=0;function jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qo,ks,Yo,Xo,Jo,zn=!1,Ps=[],Bn=null,$n=null,Rt=null,qi=new Map,fr=new Map,nn=[],wl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,r){switch(n){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":qi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(r.pointerId)}}function In(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=da(r),r!==null&&ks(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Tl(n,r,a,c,d){switch(r){case"focusin":return Bn=In(Bn,n,r,a,c,d),!0;case"dragenter":return $n=In($n,n,r,a,c,d),!0;case"mouseover":return Rt=In(Rt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return qi.set(f,In(qi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,fr.set(f,In(fr.get(f)||null,n,r,a,c,d)),!0}return!1}function xs(n){var r=Ki(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=zo(a),r!==null){n.blockedOn=r,Jo(n.priority,function(){Yo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ns(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ur=c,a.target.dispatchEvent(c),Ur=null}else return r=da(a),r!==null&&ks(r),n.blockedOn=a,!1;r.shift()}return!0}function Il(n,r,a){qe(n)&&a.delete(r)}function Vc(){zn=!1,Bn!==null&&qe(Bn)&&(Bn=null),$n!==null&&qe($n)&&($n=null),Rt!==null&&qe(Rt)&&(Rt=null),qi.forEach(Il),fr.forEach(Il)}function Wr(n,r){n.blockedOn===r&&(n.blockedOn=null,zn||(zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vc)))}function Gr(n){function r(d){return Wr(d,n)}if(0<Ps.length){Wr(Ps[0],n);for(var a=1;a<Ps.length;a++){var c=Ps[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bn!==null&&Wr(Bn,n),$n!==null&&Wr($n,n),Rt!==null&&Wr(Rt,n),qi.forEach(r),fr.forEach(r),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)xs(a),a.blockedOn===null&&nn.shift()}var pr=xe.ReactCurrentBatchConfig,mr=!0;function qn(n,r,a,c){var d=be,f=pr.transition;pr.transition=null;try{be=1,Zo(n,r,a,c)}finally{be=d,pr.transition=f}}function Sl(n,r,a,c){var d=be,f=pr.transition;pr.transition=null;try{be=4,Zo(n,r,a,c)}finally{be=d,pr.transition=f}}function Zo(n,r,a,c){if(mr){var d=Ns(n,r,a,c);if(d===null)qc(n,r,c,Hn,a),Hr(n,c);else if(Tl(d,n,r,a,c))c.stopPropagation();else if(Hr(n,c),r&4&&-1<wl.indexOf(n)){for(;d!==null;){var f=da(d);if(f!==null&&Qo(f),f=Ns(n,r,a,c),f===null&&qc(n,r,c,Hn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else qc(n,r,c,null,a)}}var Hn=null;function Ns(n,r,a,c){if(Hn=null,n=Is(c),n=Ki(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=zo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Hn=n,null}function Ds(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nc()){case Cs:return 1;case $o:return 4;case Fi:case qo:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var rn=null,Vs=null,gr=null;function Al(){if(gr)return gr;var n,r=Vs,a=r.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return gr=d.slice(n,1<c?1-c:void 0)}function Hi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function ea(){return!1}function Lt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:ea,this.isPropagationStopped=ea,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),r}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Lt(Gn),Kr=ne({},Gn,{view:0,detail:0}),Os=Lt(Kr),Ls,bs,sn,Gi=ne({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ae,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?(Ls=n.screenX-sn.screenX,bs=n.screenY-sn.screenY):bs=Ls=0,sn=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:bs}}),ta=Lt(Gi),Cl=ne({},Gi,{dataTransfer:0}),Rl=Lt(Cl),Ms=ne({},Kr,{relatedTarget:0}),kt=Lt(Ms),kl=ne({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pl=Lt(kl),Qr=ne({},Gn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Lt(Qr),p=ne({},Gn,{data:0}),g=Lt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function Ae(){return Z}var ot=ne({},Kr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ae,charCode:function(n){return n.type==="keypress"?Hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Be=Lt(ot),ht=ne({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Lt(ht),yr=ne({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ae}),Kn=Lt(yr),Qn=ne({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fs=Lt(Qn),na=ne({},Gi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=Lt(na),u0=[9,13,27,32],Oc=m&&"CompositionEvent"in window,ra=null;m&&"documentMode"in document&&(ra=document.documentMode);var c0=m&&"TextEvent"in window&&!ra,zf=m&&(!Oc||ra&&8<ra&&11>=ra),Bf=" ",$f=!1;function qf(n,r){switch(n){case"keyup":return u0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function h0(n,r){switch(n){case"compositionend":return Hf(r);case"keypress":return r.which!==32?null:($f=!0,Bf);case"textInput":return n=r.data,n===Bf&&$f?null:n;default:return null}}function d0(n,r){if(Us)return n==="compositionend"||!Oc&&qf(n,r)?(n=Al(),gr=Vs=rn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zf&&r.locale!=="ko"?null:r.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!f0[n.type]:r==="textarea"}function Gf(n,r,a,c){jr(c),r=Ol(r,"onChange"),0<r.length&&(a=new Wi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ia=null,sa=null;function p0(n){hp(n,0)}function xl(n){var r=qs(n);if(Di(r))return n}function m0(n,r){if(n==="change")return r}var Kf=!1;if(m){var Lc;if(m){var bc="oninput"in document;if(!bc){var Qf=document.createElement("div");Qf.setAttribute("oninput","return;"),bc=typeof Qf.oninput=="function"}Lc=bc}else Lc=!1;Kf=Lc&&(!document.documentMode||9<document.documentMode)}function Yf(){ia&&(ia.detachEvent("onpropertychange",Xf),sa=ia=null)}function Xf(n){if(n.propertyName==="value"&&xl(sa)){var r=[];Gf(r,sa,n,Is(n)),fl(p0,r)}}function g0(n,r,a){n==="focusin"?(Yf(),ia=r,sa=a,ia.attachEvent("onpropertychange",Xf)):n==="focusout"&&Yf()}function y0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xl(sa)}function _0(n,r){if(n==="click")return xl(r)}function v0(n,r){if(n==="input"||n==="change")return xl(r)}function E0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Sn=typeof Object.is=="function"?Object.is:E0;function oa(n,r){if(Sn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Sn(n[d],r[d]))return!1}return!0}function Jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zf(n,r){var a=Jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jf(a)}}function ep(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ep(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function tp(){for(var n=window,r=Ln();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Ln(n.document)}return r}function Mc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function w0(n){var r=tp(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&ep(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Zf(a,f);var v=Zf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var T0=m&&"documentMode"in document&&11>=document.documentMode,js=null,Fc=null,aa=null,Uc=!1;function np(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||js==null||js!==Ln(c)||(c=js,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=Ol(Fc,"onSelect"),0<c.length&&(r=new Wi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=js)))}function Nl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var zs={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},jc={},rp={};m&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Dl(n){if(jc[n])return jc[n];if(!zs[n])return n;var r=zs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in rp)return jc[n]=r[a];return n}var ip=Dl("animationend"),sp=Dl("animationiteration"),op=Dl("animationstart"),ap=Dl("transitionend"),lp=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(n,r){lp.set(n,r),u(r,[n])}for(var zc=0;zc<up.length;zc++){var Bc=up[zc],I0=Bc.toLowerCase(),S0=Bc[0].toUpperCase()+Bc.slice(1);Yr(I0,"on"+S0)}Yr(ip,"onAnimationEnd"),Yr(sp,"onAnimationIteration"),Yr(op,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(ap,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function cp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,jo(c,r,void 0,n),n.currentTarget=null}function hp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var T=c[v],k=T.instance,U=T.currentTarget;if(T=T.listener,k!==f&&d.isPropagationStopped())break e;cp(d,T,U),f=k}else for(v=0;v<c.length;v++){if(T=c[v],k=T.instance,U=T.currentTarget,T=T.listener,k!==f&&d.isPropagationStopped())break e;cp(d,T,U),f=k}}}if(Ss)throw n=hn,Ss=!1,hn=null,n}function Qe(n,r){var a=r[Yc];a===void 0&&(a=r[Yc]=new Set);var c=n+"__bubble";a.has(c)||(dp(r,n,2,!1),a.add(c))}function $c(n,r,a){var c=0;r&&(c|=4),dp(a,n,c,r)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[Vl]){n[Vl]=!0,s.forEach(function(a){a!=="selectionchange"&&(A0.has(a)||$c(a,!1,n),$c(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vl]||(r[Vl]=!0,$c("selectionchange",!1,r))}}function dp(n,r,a,c){switch(Ds(r)){case 1:var d=qn;break;case 4:d=Sl;break;default:d=Zo}a=d.bind(null,r,a,n),d=void 0,!Br||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function qc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;T!==null;){if(v=Ki(T),v===null)return;if(k=v.tag,k===5||k===6){c=f=v;continue e}T=T.parentNode}}c=c.return}fl(function(){var U=f,K=Is(a),Q=[];e:{var G=lp.get(n);if(G!==void 0){var se=Wi,ue=n;switch(n){case"keypress":if(Hi(a)===0)break e;case"keydown":case"keyup":se=Be;break;case"focusin":ue="focus",se=kt;break;case"focusout":ue="blur",se=kt;break;case"beforeblur":case"afterblur":se=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Kn;break;case ip:case sp:case op:se=Pl;break;case ap:se=Fs;break;case"scroll":se=Os;break;case"wheel":se=l0;break;case"copy":case"cut":case"paste":se=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=on}var ce=(r&4)!==0,at=!ce&&n==="scroll",b=ce?G!==null?G+"Capture":null:G;ce=[];for(var V=U,F;V!==null;){F=V;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,b!==null&&(X=Li(V,b),X!=null&&ce.push(ca(V,X,F)))),at)break;V=V.return}0<ce.length&&(G=new se(G,ue,null,a,K),Q.push({event:G,listeners:ce}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",G&&a!==Ur&&(ue=a.relatedTarget||a.fromElement)&&(Ki(ue)||ue[_r]))break e;if((se||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=U,ue=ue?Ki(ue):null,ue!==null&&(at=Tn(ue),ue!==at||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=U),se!==ue)){if(ce=ta,X="onMouseLeave",b="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(ce=on,X="onPointerLeave",b="onPointerEnter",V="pointer"),at=se==null?G:qs(se),F=ue==null?G:qs(ue),G=new ce(X,V+"leave",se,a,K),G.target=at,G.relatedTarget=F,X=null,Ki(K)===U&&(ce=new ce(b,V+"enter",ue,a,K),ce.target=F,ce.relatedTarget=at,X=ce),at=X,se&&ue)t:{for(ce=se,b=ue,V=0,F=ce;F;F=Bs(F))V++;for(F=0,X=b;X;X=Bs(X))F++;for(;0<V-F;)ce=Bs(ce),V--;for(;0<F-V;)b=Bs(b),F--;for(;V--;){if(ce===b||b!==null&&ce===b.alternate)break t;ce=Bs(ce),b=Bs(b)}ce=null}else ce=null;se!==null&&fp(Q,G,se,ce,!1),ue!==null&&at!==null&&fp(Q,at,ue,ce,!0)}}e:{if(G=U?qs(U):window,se=G.nodeName&&G.nodeName.toLowerCase(),se==="select"||se==="input"&&G.type==="file")var he=m0;else if(Wf(G))if(Kf)he=v0;else{he=y0;var pe=g0}else(se=G.nodeName)&&se.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=_0);if(he&&(he=he(n,U))){Gf(Q,he,a,K);break e}pe&&pe(n,G,U),n==="focusout"&&(pe=G._wrapperState)&&pe.controlled&&G.type==="number"&&ct(G,"number",G.value)}switch(pe=U?qs(U):window,n){case"focusin":(Wf(pe)||pe.contentEditable==="true")&&(js=pe,Fc=U,aa=null);break;case"focusout":aa=Fc=js=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,np(Q,a,K);break;case"selectionchange":if(T0)break;case"keydown":case"keyup":np(Q,a,K)}var me;if(Oc)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Us?qf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(zf&&a.locale!=="ko"&&(Us||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Us&&(me=Al()):(rn=K,Vs="value"in rn?rn.value:rn.textContent,Us=!0)),pe=Ol(U,Ee),0<pe.length&&(Ee=new g(Ee,n,null,a,K),Q.push({event:Ee,listeners:pe}),me?Ee.data=me:(me=Hf(a),me!==null&&(Ee.data=me)))),(me=c0?h0(n,a):d0(n,a))&&(U=Ol(U,"onBeforeInput"),0<U.length&&(K=new g("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:U}),K.data=me))}hp(Q,r)})}function ca(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ol(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Li(n,a),f!=null&&c.unshift(ca(n,f,d)),f=Li(n,r),f!=null&&c.push(ca(n,f,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var T=a,k=T.alternate,U=T.stateNode;if(k!==null&&k===c)break;T.tag===5&&U!==null&&(T=U,d?(k=Li(a,f),k!=null&&v.unshift(ca(a,k,T))):d||(k=Li(a,f),k!=null&&v.push(ca(a,k,T)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var C0=/\r\n?/g,R0=/\u0000|\uFFFD/g;function pp(n){return(typeof n=="string"?n:""+n).replace(C0,`
`).replace(R0,"")}function Ll(n,r,a){if(r=pp(r),pp(n)!==r&&a)throw Error(t(425))}function bl(){}var Hc=null,Wc=null;function Gc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(n){return mp.resolve(null).then(n).catch(x0)}:Kc;function x0(n){setTimeout(function(){throw n})}function Qc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Gr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Gr(r)}function Xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function gp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Yn="__reactFiber$"+$s,ha="__reactProps$"+$s,_r="__reactContainer$"+$s,Yc="__reactEvents$"+$s,N0="__reactListeners$"+$s,D0="__reactHandles$"+$s;function Ki(n){var r=n[Yn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_r]||a[Yn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=gp(n);n!==null;){if(a=n[Yn])return a;n=gp(n)}return r}n=a,a=n.parentNode}return null}function da(n){return n=n[Yn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ml(n){return n[ha]||null}var Xc=[],Hs=-1;function Jr(n){return{current:n}}function Ye(n){0>Hs||(n.current=Xc[Hs],Xc[Hs]=null,Hs--)}function We(n,r){Hs++,Xc[Hs]=n.current,n.current=r}var Zr={},bt=Jr(Zr),Wt=Jr(!1),Qi=Zr;function Ws(n,r){var a=n.type.contextTypes;if(!a)return Zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Fl(){Ye(Wt),Ye(bt)}function yp(n,r,a){if(bt.current!==Zr)throw Error(t(168));We(bt,r),We(Wt,a)}function _p(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,z(n)||"Unknown",d));return ne({},a,c)}function Ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,Qi=bt.current,We(bt,n),We(Wt,Wt.current),!0}function vp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=_p(n,r,Qi),c.__reactInternalMemoizedMergedChildContext=n,Ye(Wt),Ye(bt),We(bt,n)):Ye(Wt),We(Wt,a)}var vr=null,jl=!1,Jc=!1;function Ep(n){vr===null?vr=[n]:vr.push(n)}function V0(n){jl=!0,Ep(n)}function ei(){if(!Jc&&vr!==null){Jc=!0;var n=0,r=be;try{var a=vr;for(be=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,jl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Bo(Cs,ei),d}finally{be=r,Jc=!1}}return null}var Gs=[],Ks=0,zl=null,Bl=0,fn=[],pn=0,Yi=null,Er=1,wr="";function Xi(n,r){Gs[Ks++]=Bl,Gs[Ks++]=zl,zl=n,Bl=r}function wp(n,r,a){fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Yi,Yi=n;var c=Er;n=wr;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-tn(r)+d|a<<d|c,wr=f+n}else Er=1<<f|a<<d|c,wr=n}function Zc(n){n.return!==null&&(Xi(n,1),wp(n,1,0))}function eh(n){for(;n===zl;)zl=Gs[--Ks],Gs[Ks]=null,Bl=Gs[--Ks],Gs[Ks]=null;for(;n===Yi;)Yi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,Er=fn[--pn],fn[pn]=null}var an=null,ln=null,Je=!1,An=null;function Tp(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Ip(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=Xr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Yi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function th(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nh(n){if(Je){var r=ln;if(r){var a=r;if(!Ip(n,r)){if(th(n))throw Error(t(418));r=Xr(a.nextSibling);var c=an;r&&Ip(n,r)?Tp(c,a):(n.flags=n.flags&-4097|2,Je=!1,an=n)}}else{if(th(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,an=n}}}function Sp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function $l(n){if(n!==an)return!1;if(!Je)return Sp(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Gc(n.type,n.memoizedProps)),r&&(r=ln)){if(th(n))throw Ap(),Error(t(418));for(;r;)Tp(n,r),r=Xr(r.nextSibling)}if(Sp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=Xr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?Xr(n.stateNode.nextSibling):null;return!0}function Ap(){for(var n=ln;n;)n=Xr(n.nextSibling)}function Qs(){ln=an=null,Je=!1}function rh(n){An===null?An=[n]:An.push(n)}var O0=xe.ReactCurrentBatchConfig;function fa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var T=d.refs;v===null?delete T[f]:T[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ql(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Cp(n){var r=n._init;return r(n._payload)}function Rp(n){function r(b,V){if(n){var F=b.deletions;F===null?(b.deletions=[V],b.flags|=16):F.push(V)}}function a(b,V){if(!n)return null;for(;V!==null;)r(b,V),V=V.sibling;return null}function c(b,V){for(b=new Map;V!==null;)V.key!==null?b.set(V.key,V):b.set(V.index,V),V=V.sibling;return b}function d(b,V){return b=li(b,V),b.index=0,b.sibling=null,b}function f(b,V,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<V?(b.flags|=2,V):F):(b.flags|=2,V)):(b.flags|=1048576,V)}function v(b){return n&&b.alternate===null&&(b.flags|=2),b}function T(b,V,F,X){return V===null||V.tag!==6?(V=Kh(F,b.mode,X),V.return=b,V):(V=d(V,F),V.return=b,V)}function k(b,V,F,X){var he=F.type;return he===N?K(b,V,F.props.children,X,F.key):V!==null&&(V.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ut&&Cp(he)===V.type)?(X=d(V,F.props),X.ref=fa(b,V,F),X.return=b,X):(X=pu(F.type,F.key,F.props,null,b.mode,X),X.ref=fa(b,V,F),X.return=b,X)}function U(b,V,F,X){return V===null||V.tag!==4||V.stateNode.containerInfo!==F.containerInfo||V.stateNode.implementation!==F.implementation?(V=Qh(F,b.mode,X),V.return=b,V):(V=d(V,F.children||[]),V.return=b,V)}function K(b,V,F,X,he){return V===null||V.tag!==7?(V=ss(F,b.mode,X,he),V.return=b,V):(V=d(V,F),V.return=b,V)}function Q(b,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Kh(""+V,b.mode,F),V.return=b,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case $e:return F=pu(V.type,V.key,V.props,null,b.mode,F),F.ref=fa(b,null,V),F.return=b,F;case Ne:return V=Qh(V,b.mode,F),V.return=b,V;case ut:var X=V._init;return Q(b,X(V._payload),F)}if(st(V)||de(V))return V=ss(V,b.mode,F,null),V.return=b,V;ql(b,V)}return null}function G(b,V,F,X){var he=V!==null?V.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:T(b,V,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case $e:return F.key===he?k(b,V,F,X):null;case Ne:return F.key===he?U(b,V,F,X):null;case ut:return he=F._init,G(b,V,he(F._payload),X)}if(st(F)||de(F))return he!==null?null:K(b,V,F,X,null);ql(b,F)}return null}function se(b,V,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return b=b.get(F)||null,T(V,b,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $e:return b=b.get(X.key===null?F:X.key)||null,k(V,b,X,he);case Ne:return b=b.get(X.key===null?F:X.key)||null,U(V,b,X,he);case ut:var pe=X._init;return se(b,V,F,pe(X._payload),he)}if(st(X)||de(X))return b=b.get(F)||null,K(V,b,X,he,null);ql(V,X)}return null}function ue(b,V,F,X){for(var he=null,pe=null,me=V,Ee=V=0,Tt=null;me!==null&&Ee<F.length;Ee++){me.index>Ee?(Tt=me,me=null):Tt=me.sibling;var Ue=G(b,me,F[Ee],X);if(Ue===null){me===null&&(me=Tt);break}n&&me&&Ue.alternate===null&&r(b,me),V=f(Ue,V,Ee),pe===null?he=Ue:pe.sibling=Ue,pe=Ue,me=Tt}if(Ee===F.length)return a(b,me),Je&&Xi(b,Ee),he;if(me===null){for(;Ee<F.length;Ee++)me=Q(b,F[Ee],X),me!==null&&(V=f(me,V,Ee),pe===null?he=me:pe.sibling=me,pe=me);return Je&&Xi(b,Ee),he}for(me=c(b,me);Ee<F.length;Ee++)Tt=se(me,b,Ee,F[Ee],X),Tt!==null&&(n&&Tt.alternate!==null&&me.delete(Tt.key===null?Ee:Tt.key),V=f(Tt,V,Ee),pe===null?he=Tt:pe.sibling=Tt,pe=Tt);return n&&me.forEach(function(ui){return r(b,ui)}),Je&&Xi(b,Ee),he}function ce(b,V,F,X){var he=de(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var pe=he=null,me=V,Ee=V=0,Tt=null,Ue=F.next();me!==null&&!Ue.done;Ee++,Ue=F.next()){me.index>Ee?(Tt=me,me=null):Tt=me.sibling;var ui=G(b,me,Ue.value,X);if(ui===null){me===null&&(me=Tt);break}n&&me&&ui.alternate===null&&r(b,me),V=f(ui,V,Ee),pe===null?he=ui:pe.sibling=ui,pe=ui,me=Tt}if(Ue.done)return a(b,me),Je&&Xi(b,Ee),he;if(me===null){for(;!Ue.done;Ee++,Ue=F.next())Ue=Q(b,Ue.value,X),Ue!==null&&(V=f(Ue,V,Ee),pe===null?he=Ue:pe.sibling=Ue,pe=Ue);return Je&&Xi(b,Ee),he}for(me=c(b,me);!Ue.done;Ee++,Ue=F.next())Ue=se(me,b,Ee,Ue.value,X),Ue!==null&&(n&&Ue.alternate!==null&&me.delete(Ue.key===null?Ee:Ue.key),V=f(Ue,V,Ee),pe===null?he=Ue:pe.sibling=Ue,pe=Ue);return n&&me.forEach(function(fE){return r(b,fE)}),Je&&Xi(b,Ee),he}function at(b,V,F,X){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case $e:e:{for(var he=F.key,pe=V;pe!==null;){if(pe.key===he){if(he=F.type,he===N){if(pe.tag===7){a(b,pe.sibling),V=d(pe,F.props.children),V.return=b,b=V;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ut&&Cp(he)===pe.type){a(b,pe.sibling),V=d(pe,F.props),V.ref=fa(b,pe,F),V.return=b,b=V;break e}a(b,pe);break}else r(b,pe);pe=pe.sibling}F.type===N?(V=ss(F.props.children,b.mode,X,F.key),V.return=b,b=V):(X=pu(F.type,F.key,F.props,null,b.mode,X),X.ref=fa(b,V,F),X.return=b,b=X)}return v(b);case Ne:e:{for(pe=F.key;V!==null;){if(V.key===pe)if(V.tag===4&&V.stateNode.containerInfo===F.containerInfo&&V.stateNode.implementation===F.implementation){a(b,V.sibling),V=d(V,F.children||[]),V.return=b,b=V;break e}else{a(b,V);break}else r(b,V);V=V.sibling}V=Qh(F,b.mode,X),V.return=b,b=V}return v(b);case ut:return pe=F._init,at(b,V,pe(F._payload),X)}if(st(F))return ue(b,V,F,X);if(de(F))return ce(b,V,F,X);ql(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,V!==null&&V.tag===6?(a(b,V.sibling),V=d(V,F),V.return=b,b=V):(a(b,V),V=Kh(F,b.mode,X),V.return=b,b=V),v(b)):a(b,V)}return at}var Ys=Rp(!0),kp=Rp(!1),Hl=Jr(null),Wl=null,Xs=null,ih=null;function sh(){ih=Xs=Wl=null}function oh(n){var r=Hl.current;Ye(Hl),n._currentValue=r}function ah(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Js(n,r){Wl=n,ih=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(ih!==n)if(n={context:n,memoizedValue:r,next:null},Xs===null){if(Wl===null)throw Error(t(308));Xs=n,Wl.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return r}var Ji=null;function lh(n){Ji===null?Ji=[n]:Ji.push(n)}function Pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,lh(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ti=!1;function uh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ni(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Fe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,lh(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function Gl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ko(n,a)}}function Np(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Kl(n,r,a,c){var d=n.updateQueue;ti=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var k=T,U=k.next;k.next=null,v===null?f=U:v.next=U,v=k;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==v&&(T===null?K.firstBaseUpdate=U:T.next=U,K.lastBaseUpdate=k))}if(f!==null){var Q=d.baseState;v=0,K=U=k=null,T=f;do{var G=T.lane,se=T.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:se,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ue=n,ce=T;switch(G=r,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Q=ue.call(se,Q,G);break e}Q=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,G=typeof ue=="function"?ue.call(se,Q,G):ue,G==null)break e;Q=ne({},Q,G);break e;case 2:ti=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[T]:G.push(T))}else se={eventTime:se,lane:G,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(U=K=se,k=Q):K=K.next=se,v|=G;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;G=T,T=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(k=Q),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);ts|=v,n.lanes=v,n.memoizedState=Q}}function Dp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pa={},Xn=Jr(pa),ma=Jr(pa),ga=Jr(pa);function Zi(n){if(n===pa)throw Error(t(174));return n}function ch(n,r){switch(We(ga,r),We(ma,n),We(Xn,pa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Es(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Es(r,n)}Ye(Xn),We(Xn,r)}function Zs(){Ye(Xn),Ye(ma),Ye(ga)}function Vp(n){Zi(ga.current);var r=Zi(Xn.current),a=Es(r,n.type);r!==a&&(We(ma,n),We(Xn,a))}function hh(n){ma.current===n&&(Ye(Xn),Ye(ma))}var Ze=Jr(0);function Ql(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var dh=[];function fh(){for(var n=0;n<dh.length;n++)dh[n]._workInProgressVersionPrimary=null;dh.length=0}var Yl=xe.ReactCurrentDispatcher,ph=xe.ReactCurrentBatchConfig,es=0,et=null,gt=null,Et=null,Xl=!1,ya=!1,_a=0,L0=0;function Mt(){throw Error(t(321))}function mh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Sn(n[a],r[a]))return!1;return!0}function gh(n,r,a,c,d,f){if(es=f,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yl.current=n===null||n.memoizedState===null?U0:j0,n=a(c,d),ya){f=0;do{if(ya=!1,_a=0,25<=f)throw Error(t(301));f+=1,Et=gt=null,r.updateQueue=null,Yl.current=z0,n=a(c,d)}while(ya)}if(Yl.current=eu,r=gt!==null&&gt.next!==null,es=0,Et=gt=et=null,Xl=!1,r)throw Error(t(300));return n}function yh(){var n=_a!==0;return _a=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?et.memoizedState=Et=n:Et=Et.next=n,Et}function gn(){if(gt===null){var n=et.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var r=Et===null?et.memoizedState:Et.next;if(r!==null)Et=r,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?et.memoizedState=Et=n:Et=Et.next=n}return Et}function va(n,r){return typeof r=="function"?r(n):r}function _h(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var T=v=null,k=null,U=f;do{var K=U.lane;if((es&K)===K)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(T=k=Q,v=c):k=k.next=Q,et.lanes|=K,ts|=K}U=U.next}while(U!==null&&U!==f);k===null?v=c:k.next=T,Sn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,et.lanes|=f,ts|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function vh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Sn(f,r.memoizedState)||(Kt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Op(){}function Lp(n,r){var a=et,c=gn(),d=r(),f=!Sn(c.memoizedState,d);if(f&&(c.memoizedState=d,Kt=!0),c=c.queue,Eh(Fp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Mp.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(es&30)!==0||bp(a,r,d)}return d}function bp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Mp(n,r,a,c){r.value=a,r.getSnapshot=c,Up(r)&&jp(n)}function Fp(n,r,a){return a(function(){Up(r)&&jp(n)})}function Up(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Sn(n,a)}catch{return!0}}function jp(n){var r=Tr(n,1);r!==null&&Pn(r,n,1,-1)}function zp(n){var r=Jn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},r.queue=n,n=n.dispatch=F0.bind(null,et,n),[r.memoizedState,n]}function Ea(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Bp(){return gn().memoizedState}function Jl(n,r,a,c){var d=Jn();et.flags|=n,d.memoizedState=Ea(1|r,a,void 0,c===void 0?null:c)}function Zl(n,r,a,c){var d=gn();c=c===void 0?null:c;var f=void 0;if(gt!==null){var v=gt.memoizedState;if(f=v.destroy,c!==null&&mh(c,v.deps)){d.memoizedState=Ea(r,a,f,c);return}}et.flags|=n,d.memoizedState=Ea(1|r,a,f,c)}function $p(n,r){return Jl(8390656,8,n,r)}function Eh(n,r){return Zl(2048,8,n,r)}function qp(n,r){return Zl(4,2,n,r)}function Hp(n,r){return Zl(4,4,n,r)}function Wp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gp(n,r,a){return a=a!=null?a.concat([n]):null,Zl(4,4,Wp.bind(null,r,n),a)}function wh(){}function Kp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&mh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Qp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&mh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Yp(n,r,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Sn(a,r)||(a=Wo(),et.lanes|=a,ts|=a,n.baseState=!0),r)}function b0(n,r){var a=be;be=a!==0&&4>a?a:4,n(!0);var c=ph.transition;ph.transition={};try{n(!1),r()}finally{be=a,ph.transition=c}}function Xp(){return gn().memoizedState}function M0(n,r,a){var c=oi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jp(n))Zp(r,a);else if(a=Pp(n,r,a,c),a!==null){var d=Ht();Pn(a,n,c,d),em(a,r,c)}}function F0(n,r,a){var c=oi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jp(n))Zp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,T=f(v,a);if(d.hasEagerState=!0,d.eagerState=T,Sn(T,v)){var k=r.interleaved;k===null?(d.next=d,lh(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=Pp(n,r,d,c),a!==null&&(d=Ht(),Pn(a,n,c,d),em(a,r,c))}}function Jp(n){var r=n.alternate;return n===et||r!==null&&r===et}function Zp(n,r){ya=Xl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function em(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ko(n,a)}}var eu={readContext:mn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},U0={readContext:mn,useCallback:function(n,r){return Jn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:$p,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Jl(4194308,4,Wp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Jl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Jl(4,2,n,r)},useMemo:function(n,r){var a=Jn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Jn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=M0.bind(null,et,n),[c.memoizedState,n]},useRef:function(n){var r=Jn();return n={current:n},r.memoizedState=n},useState:zp,useDebugValue:wh,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=zp(!1),r=n[0];return n=b0.bind(null,n[1]),Jn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=et,d=Jn();if(Je){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(es&30)!==0||bp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,$p(Fp.bind(null,c,f,n),[n]),c.flags|=2048,Ea(9,Mp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Jn(),r=wt.identifierPrefix;if(Je){var a=wr,c=Er;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=_a++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=L0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},j0={readContext:mn,useCallback:Kp,useContext:mn,useEffect:Eh,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Hp,useMemo:Qp,useReducer:_h,useRef:Bp,useState:function(){return _h(va)},useDebugValue:wh,useDeferredValue:function(n){var r=gn();return Yp(r,gt.memoizedState,n)},useTransition:function(){var n=_h(va)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:Lp,useId:Xp,unstable_isNewReconciler:!1},z0={readContext:mn,useCallback:Kp,useContext:mn,useEffect:Eh,useImperativeHandle:Gp,useInsertionEffect:qp,useLayoutEffect:Hp,useMemo:Qp,useReducer:vh,useRef:Bp,useState:function(){return vh(va)},useDebugValue:wh,useDeferredValue:function(n){var r=gn();return gt===null?r.memoizedState=n:Yp(r,gt.memoizedState,n)},useTransition:function(){var n=vh(va)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:Lp,useId:Xp,unstable_isNewReconciler:!1};function Cn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Th(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tu={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=oi(n),f=Ir(c,d);f.payload=r,a!=null&&(f.callback=a),r=ni(n,f,d),r!==null&&(Pn(r,n,d,c),Gl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=oi(n),f=Ir(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ni(n,f,d),r!==null&&(Pn(r,n,d,c),Gl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=oi(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=ni(n,d,c),r!==null&&(Pn(r,n,c,a),Gl(r,n,c))}};function tm(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!oa(a,c)||!oa(d,f):!0}function nm(n,r,a){var c=!1,d=Zr,f=r.contextType;return typeof f=="object"&&f!==null?f=mn(f):(d=Gt(r)?Qi:bt.current,c=r.contextTypes,f=(c=c!=null)?Ws(n,d):Zr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=tu,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function rm(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&tu.enqueueReplaceState(r,r.state,null)}function Ih(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},uh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=mn(f):(f=Gt(r)?Qi:bt.current,d.context=Ws(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Th(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&tu.enqueueReplaceState(d,d.state,null),Kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,r){try{var a="",c=r;do a+=Re(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function Sh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Ah(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function im(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){lu||(lu=!0,jh=c),Ah(n,r)},a}function sm(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Ah(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){Ah(n,r),typeof c!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function om(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new B0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=nE.bind(null,n,r,a),r.then(n,n))}function am(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function lm(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,ni(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var $0=xe.ReactCurrentOwner,Kt=!1;function qt(n,r,a,c){r.child=n===null?kp(r,null,a,c):Ys(r,n.child,a,c)}function um(n,r,a,c,d){a=a.render;var f=r.ref;return Js(r,d),c=gh(n,r,a,c,f,d),a=yh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Je&&a&&Zc(r),r.flags|=1,qt(n,r,c,d),r.child)}function cm(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Gh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,hm(n,r,f,c,d)):(n=pu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(v,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=li(f,c),n.ref=r.ref,n.return=r,r.child=n}function hm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(oa(f,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return Ch(n,r,a,c,d)}function dm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(no,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,We(no,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,We(no,un),un|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,We(no,un),un|=c;return qt(n,r,d,a),r.child}function fm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ch(n,r,a,c,d){var f=Gt(a)?Qi:bt.current;return f=Ws(r,f),Js(r,d),a=gh(n,r,a,c,f,d),c=yh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Je&&c&&Zc(r),r.flags|=1,qt(n,r,a,d),r.child)}function pm(n,r,a,c,d){if(Gt(a)){var f=!0;Ul(r)}else f=!1;if(Js(r,d),r.stateNode===null)ru(n,r),nm(r,a,c),Ih(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,T=r.memoizedProps;v.props=T;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=mn(U):(U=Gt(a)?Qi:bt.current,U=Ws(r,U));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==c||k!==U)&&rm(r,v,c,U),ti=!1;var G=r.memoizedState;v.state=G,Kl(r,c,v,d),k=r.memoizedState,T!==c||G!==k||Wt.current||ti?(typeof K=="function"&&(Th(r,a,K,c),k=r.memoizedState),(T=ti||tm(r,a,T,c,G,k,U))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),v.props=c,v.state=k,v.context=U,c=T):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,xp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Cn(r.type,T),v.props=U,Q=r.pendingProps,G=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=mn(k):(k=Gt(a)?Qi:bt.current,k=Ws(r,k));var se=a.getDerivedStateFromProps;(K=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(T!==Q||G!==k)&&rm(r,v,c,k),ti=!1,G=r.memoizedState,v.state=G,Kl(r,c,v,d);var ue=r.memoizedState;T!==Q||G!==ue||Wt.current||ti?(typeof se=="function"&&(Th(r,a,se,c),ue=r.memoizedState),(U=ti||tm(r,a,U,c,G,ue,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,k)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ue),v.props=c,v.state=ue,v.context=k,c=U):(typeof v.componentDidUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return Rh(n,r,a,c,f,d)}function Rh(n,r,a,c,d,f){fm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&vp(r,a,!1),Sr(n,r,f);c=r.stateNode,$0.current=r;var T=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Ys(r,n.child,null,f),r.child=Ys(r,null,T,f)):qt(n,r,T,f),r.memoizedState=c.state,d&&vp(r,a,!0),r.child}function mm(n){var r=n.stateNode;r.pendingContext?yp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&yp(n,r.context,!1),ch(n,r.containerInfo)}function gm(n,r,a,c,d){return Qs(),rh(d),r.flags|=256,qt(n,r,a,c),r.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function ym(n,r,a){var c=r.pendingProps,d=Ze.current,f=!1,v=(r.flags&128)!==0,T;if((T=v)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Ze,d&1),n===null)return nh(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=mu(v,c,0,null),n=ss(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Ph(a),r.memoizedState=kh,n):xh(r,v));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return q0(n,r,v,c,T,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,T=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=li(d,k),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?f=li(T,f):(f=ss(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=kh,c}return f=n.child,n=f.sibling,c=li(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function xh(n,r){return r=mu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function nu(n,r,a,c){return c!==null&&rh(c),Ys(r,n.child,null,a),n=xh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function q0(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=Sh(Error(t(422))),nu(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=mu({mode:"visible",children:c.children},d,0,null),f=ss(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Ys(r,n.child,null,v),r.child.memoizedState=Ph(v),r.memoizedState=kh,f);if((r.mode&1)===0)return nu(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,f=Error(t(419)),c=Sh(f,c,void 0),nu(n,r,v,c)}if(T=(v&n.childLanes)!==0,Kt||T){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Tr(n,d),Pn(c,n,d,-1))}return Wh(),c=Sh(Error(t(421))),nu(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=rE.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,ln=Xr(d.nextSibling),an=r,Je=!0,An=null,n!==null&&(fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Yi,Er=n.id,wr=n.overflow,Yi=r),r=xh(r,c.children),r.flags|=4096,r)}function _m(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),ah(n.return,r,a)}function Nh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function vm(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(qt(n,r,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_m(n,a,r);else if(n.tag===19)_m(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Ze,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ql(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Nh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ql(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Nh(r,!0,a,null,f);break;case"together":Nh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ru(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),ts|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=li(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=li(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function H0(n,r,a){switch(r.tag){case 3:mm(r),Qs();break;case 5:Vp(r);break;case 1:Gt(r.type)&&Ul(r);break;case 4:ch(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;We(Hl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?ym(n,r,a):(We(Ze,Ze.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return vm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,dm(n,r,a)}return Sr(n,r,a)}var Em,Dh,wm,Tm;Em=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dh=function(){},wm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Zi(Xn.current);var f=null;switch(a){case"input":d=Or(n,d),c=Or(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=Lo(n,d),c=Lo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bl)}wn(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(v in T)T.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var k=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&k!==T&&(k!=null||T!=null))if(U==="style")if(T){for(v in T)!T.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&T[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(f||(f=[]),f.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,T=T?T.__html:void 0,k!=null&&T!==k&&(f=f||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Qe("scroll",n),f||T===k||(f=[])):(f=f||[]).push(U,k))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},Tm=function(n,r,a,c){a!==c&&(r.flags|=4)};function wa(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ft(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function W0(n,r,a){var c=r.pendingProps;switch(eh(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(r),null;case 1:return Gt(r.type)&&Fl(),Ft(r),null;case 3:return c=r.stateNode,Zs(),Ye(Wt),Ye(bt),fh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&($l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,An!==null&&($h(An),An=null))),Dh(n,r),Ft(r),null;case 5:hh(r);var d=Zi(ga.current);if(a=r.type,n!==null&&r.stateNode!=null)wm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ft(r),null}if(n=Zi(Xn.current),$l(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Yn]=r,c[ha]=f,n=(r.mode&1)!==0,a){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(d=0;d<la.length;d++)Qe(la[d],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Ot(c,f),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Qe("invalid",c);break;case"textarea":bo(c,f),Qe("invalid",c)}wn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var T=f[v];v==="children"?typeof T=="string"?c.textContent!==T&&(f.suppressHydrationWarning!==!0&&Ll(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(f.suppressHydrationWarning!==!0&&Ll(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(v)&&T!=null&&v==="onScroll"&&Qe("scroll",c)}switch(a){case"input":Vr(c),Oo(c,f,!0);break;case"textarea":Vr(c),Lr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=bl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=r,n[ha]=c,Em(n,r,!1,!1),r.stateNode=n;e:{switch(v=Ts(a,c),a){case"dialog":Qe("cancel",n),Qe("close",n),d=c;break;case"iframe":case"object":case"embed":Qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<la.length;d++)Qe(la[d],n);d=c;break;case"source":Qe("error",n),d=c;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),d=c;break;case"details":Qe("toggle",n),d=c;break;case"input":Ot(n,c),d=Or(n,c),Qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Qe("invalid",n);break;case"textarea":bo(n,c),d=Lo(n,c),Qe("invalid",n);break;default:d=c}wn(a,d),T=d;for(f in T)if(T.hasOwnProperty(f)){var k=T[f];f==="style"?ws(n,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ul(n,k)):f==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Oi(n,k):typeof k=="number"&&Oi(n,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?k!=null&&f==="onScroll"&&Qe("scroll",n):k!=null&&we(n,f,k,v))}switch(a){case"input":Vr(n),Oo(n,c,!1);break;case"textarea":Vr(n),Lr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+re(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?En(n,!!c.multiple,f,!1):c.defaultValue!=null&&En(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=bl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ft(r),null;case 6:if(n&&r.stateNode!=null)Tm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Zi(ga.current),Zi(Xn.current),$l(r)){if(c=r.stateNode,a=r.memoizedProps,c[Yn]=r,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Ll(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=r,r.stateNode=c}return Ft(r),null;case 13:if(Ye(Ze),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ap(),Qs(),r.flags|=98560,f=!1;else if(f=$l(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Yn]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ft(r),f=!1}else An!==null&&($h(An),An=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ze.current&1)!==0?yt===0&&(yt=3):Wh())),r.updateQueue!==null&&(r.flags|=4),Ft(r),null);case 4:return Zs(),Dh(n,r),n===null&&ua(r.stateNode.containerInfo),Ft(r),null;case 10:return oh(r.type._context),Ft(r),null;case 17:return Gt(r.type)&&Fl(),Ft(r),null;case 19:if(Ye(Ze),f=r.memoizedState,f===null)return Ft(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)wa(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Ql(n),v!==null){for(r.flags|=128,wa(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ke()>ro&&(r.flags|=128,c=!0,wa(f,!1),r.lanes=4194304)}else{if(!c)if(n=Ql(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),wa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Je)return Ft(r),null}else 2*Ke()-f.renderingStartTime>ro&&a!==1073741824&&(r.flags|=128,c=!0,wa(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ke(),r.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),r):(Ft(r),null);case 22:case 23:return Hh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(Ft(r),r.subtreeFlags&6&&(r.flags|=8192)):Ft(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function G0(n,r){switch(eh(r),r.tag){case 1:return Gt(r.type)&&Fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zs(),Ye(Wt),Ye(bt),fh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return hh(r),null;case 13:if(Ye(Ze),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ye(Ze),null;case 4:return Zs(),null;case 10:return oh(r.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var iu=!1,Ut=!1,K0=typeof WeakSet=="function"?WeakSet:Set,ae=null;function to(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){it(n,r,c)}else a.current=null}function Vh(n,r,a){try{a()}catch(c){it(n,r,c)}}var Im=!1;function Q0(n,r){if(Hc=mr,n=tp(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,k=-1,U=0,K=0,Q=n,G=null;t:for(;;){for(var se;Q!==a||d!==0&&Q.nodeType!==3||(T=v+d),Q!==f||c!==0&&Q.nodeType!==3||(k=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(se=Q.firstChild)!==null;)G=Q,Q=se;for(;;){if(Q===n)break t;if(G===a&&++U===d&&(T=v),G===f&&++K===c&&(k=v),(se=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=se}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wc={focusedElem:n,selectionRange:a},mr=!1,ae=r;ae!==null;)if(r=ae,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ae=n;else for(;ae!==null;){r=ae;try{var ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,at=ue.memoizedState,b=r.stateNode,V=b.getSnapshotBeforeUpdate(r.elementType===r.type?ce:Cn(r.type,ce),at);b.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){it(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ae=n;break}ae=r.return}return ue=Im,Im=!1,ue}function Ta(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Vh(r,a,f)}d=d.next}while(d!==c)}}function su(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Oh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Sm(n){var r=n.alternate;r!==null&&(n.alternate=null,Sm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yn],delete r[ha],delete r[Yc],delete r[N0],delete r[D0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Am(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Am(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=bl));else if(c!==4&&(n=n.child,n!==null))for(Lh(n,r,a),n=n.sibling;n!==null;)Lh(n,r,a),n=n.sibling}function bh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(bh(n,r,a),n=n.sibling;n!==null;)bh(n,r,a),n=n.sibling}var Pt=null,Rn=!1;function ri(n,r,a){for(a=a.child;a!==null;)Rm(n,r,a),a=a.sibling}function Rm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Ut||to(a,r);case 6:var c=Pt,d=Rn;Pt=null,ri(n,r,a),Pt=c,Rn=d,Pt!==null&&(Rn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Rn?(n=Pt,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),Gr(n)):Qc(Pt,a.stateNode));break;case 4:c=Pt,d=Rn,Pt=a.stateNode.containerInfo,Rn=!0,ri(n,r,a),Pt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Ut&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Vh(a,r,v),d=d.next}while(d!==c)}ri(n,r,a);break;case 1:if(!Ut&&(to(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){it(a,r,T)}ri(n,r,a);break;case 21:ri(n,r,a);break;case 22:a.mode&1?(Ut=(c=Ut)||a.memoizedState!==null,ri(n,r,a),Ut=c):ri(n,r,a);break;default:ri(n,r,a)}}function km(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new K0),r.forEach(function(c){var d=iE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function kn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 5:Pt=T.stateNode,Rn=!1;break e;case 3:Pt=T.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=T.stateNode.containerInfo,Rn=!0;break e}T=T.return}if(Pt===null)throw Error(t(160));Rm(f,v,d),Pt=null,Rn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){it(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pm(r,n),r=r.sibling}function Pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(kn(r,n),Zn(n),c&4){try{Ta(3,n,n.return),su(3,n)}catch(ce){it(n,n.return,ce)}try{Ta(5,n,n.return)}catch(ce){it(n,n.return,ce)}}break;case 1:kn(r,n),Zn(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(kn(r,n),Zn(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{Oi(d,"")}catch(ce){it(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,T=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{T==="input"&&f.type==="radio"&&f.name!=null&&vs(d,f),Ts(T,v);var U=Ts(T,f);for(v=0;v<k.length;v+=2){var K=k[v],Q=k[v+1];K==="style"?ws(d,Q):K==="dangerouslySetInnerHTML"?ul(d,Q):K==="children"?Oi(d,Q):we(d,K,Q,U)}switch(T){case"input":Vi(d,f);break;case"textarea":ll(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var se=f.value;se!=null?En(d,!!f.multiple,se,!1):G!==!!f.multiple&&(f.defaultValue!=null?En(d,!!f.multiple,f.defaultValue,!0):En(d,!!f.multiple,f.multiple?[]:"",!1))}d[ha]=f}catch(ce){it(n,n.return,ce)}}break;case 6:if(kn(r,n),Zn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ce){it(n,n.return,ce)}}break;case 3:if(kn(r,n),Zn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Gr(r.containerInfo)}catch(ce){it(n,n.return,ce)}break;case 4:kn(r,n),Zn(n);break;case 13:kn(r,n),Zn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Uh=Ke())),c&4&&km(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ut=(U=Ut)||K,kn(r,n),Ut=U):kn(r,n),Zn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(ae=n,K=n.child;K!==null;){for(Q=ae=K;ae!==null;){switch(G=ae,se=G.child,G.tag){case 0:case 11:case 14:case 15:Ta(4,G,G.return);break;case 1:to(G,G.return);var ue=G.stateNode;if(typeof ue.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,ue.props=r.memoizedProps,ue.state=r.memoizedState,ue.componentWillUnmount()}catch(ce){it(c,a,ce)}}break;case 5:to(G,G.return);break;case 22:if(G.memoizedState!==null){Dm(Q);continue}}se!==null?(se.return=G,ae=se):Dm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(T=Q.stateNode,k=Q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,T.style.display=Fr("display",v))}catch(ce){it(n,n.return,ce)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(ce){it(n,n.return,ce)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:kn(r,n),Zn(n),c&4&&km(n);break;case 21:break;default:kn(r,n),Zn(n)}}function Zn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Am(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Oi(d,""),c.flags&=-33);var f=Cm(n);bh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,T=Cm(n);Lh(n,T,v);break;default:throw Error(t(161))}}catch(k){it(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Y0(n,r,a){ae=n,xm(n)}function xm(n,r,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||iu;if(!v){var T=d.alternate,k=T!==null&&T.memoizedState!==null||Ut;T=iu;var U=Ut;if(iu=v,(Ut=k)&&!U)for(ae=d;ae!==null;)v=ae,k=v.child,v.tag===22&&v.memoizedState!==null?Vm(d):k!==null?(k.return=v,ae=k):Vm(d);for(;f!==null;)ae=f,xm(f),f=f.sibling;ae=d,iu=T,Ut=U}Nm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ae=f):Nm(n)}}function Nm(n){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ut||su(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ut)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Cn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Dp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Dp(r,v,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Gr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ut||r.flags&512&&Oh(r)}catch(G){it(r,r.return,G)}}if(r===n){ae=null;break}if(a=r.sibling,a!==null){a.return=r.return,ae=a;break}ae=r.return}}function Dm(n){for(;ae!==null;){var r=ae;if(r===n){ae=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ae=a;break}ae=r.return}}function Vm(n){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{su(4,r)}catch(k){it(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){it(r,d,k)}}var f=r.return;try{Oh(r)}catch(k){it(r,f,k)}break;case 5:var v=r.return;try{Oh(r)}catch(k){it(r,v,k)}}}catch(k){it(r,r.return,k)}if(r===n){ae=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ae=T;break}ae=r.return}}var X0=Math.ceil,ou=xe.ReactCurrentDispatcher,Mh=xe.ReactCurrentOwner,yn=xe.ReactCurrentBatchConfig,Fe=0,wt=null,dt=null,xt=0,un=0,no=Jr(0),yt=0,Ia=null,ts=0,au=0,Fh=0,Sa=null,Qt=null,Uh=0,ro=1/0,Ar=null,lu=!1,jh=null,ii=null,uu=!1,si=null,cu=0,Aa=0,zh=null,hu=-1,du=0;function Ht(){return(Fe&6)!==0?Ke():hu!==-1?hu:hu=Ke()}function oi(n){return(n.mode&1)===0?1:(Fe&2)!==0&&xt!==0?xt&-xt:O0.transition!==null?(du===0&&(du=Wo()),du):(n=be,n!==0||(n=window.event,n=n===void 0?16:Ds(n.type)),n)}function Pn(n,r,a,c){if(50<Aa)throw Aa=0,zh=null,Error(t(185));$i(n,a,c),((Fe&2)===0||n!==wt)&&(n===wt&&((Fe&2)===0&&(au|=a),yt===4&&ai(n,xt)),Yt(n,c),a===1&&Fe===0&&(r.mode&1)===0&&(ro=Ke()+500,jl&&ei()))}function Yt(n,r){var a=n.callbackNode;Bi(n,r);var c=dr(n,n===wt?xt:0);if(c===0)a!==null&&As(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&As(a),r===1)n.tag===0?V0(Lm.bind(null,n)):Ep(Lm.bind(null,n)),P0(function(){(Fe&6)===0&&ei()}),a=null;else{switch(jn(c)){case 1:a=Cs;break;case 4:a=$o;break;case 16:a=Fi;break;case 536870912:a=Rs;break;default:a=Fi}a=$m(a,Om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Om(n,r){if(hu=-1,du=0,(Fe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(io()&&n.callbackNode!==a)return null;var c=dr(n,n===wt?xt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=fu(n,c);else{r=c;var d=Fe;Fe|=2;var f=Mm();(wt!==n||xt!==r)&&(Ar=null,ro=Ke()+500,rs(n,r));do try{eE();break}catch(T){bm(n,T)}while(!0);sh(),ou.current=f,Fe=d,dt!==null?r=0:(wt=null,xt=0,r=yt)}if(r!==0){if(r===2&&(d=Ho(n),d!==0&&(c=d,r=Bh(n,d))),r===1)throw a=Ia,rs(n,0),ai(n,c),Yt(n,Ke()),a;if(r===6)ai(n,c);else{if(d=n.current.alternate,(c&30)===0&&!J0(d)&&(r=fu(n,c),r===2&&(f=Ho(n),f!==0&&(c=f,r=Bh(n,f))),r===1))throw a=Ia,rs(n,0),ai(n,c),Yt(n,Ke()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:is(n,Qt,Ar);break;case 3:if(ai(n,c),(c&130023424)===c&&(r=Uh+500-Ke(),10<r)){if(dr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Kc(is.bind(null,n,Qt,Ar),r);break}is(n,Qt,Ar);break;case 4:if(ai(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ke()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*X0(c/1960))-c,10<c){n.timeoutHandle=Kc(is.bind(null,n,Qt,Ar),c);break}is(n,Qt,Ar);break;case 5:is(n,Qt,Ar);break;default:throw Error(t(329))}}}return Yt(n,Ke()),n.callbackNode===a?Om.bind(null,n):null}function Bh(n,r){var a=Sa;return n.current.memoizedState.isDehydrated&&(rs(n,r).flags|=256),n=fu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&$h(r)),n}function $h(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function J0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Sn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ai(n,r){for(r&=~Fh,r&=~au,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-tn(r),c=1<<a;n[a]=-1,r&=~c}}function Lm(n){if((Fe&6)!==0)throw Error(t(327));io();var r=dr(n,0);if((r&1)===0)return Yt(n,Ke()),null;var a=fu(n,r);if(n.tag!==0&&a===2){var c=Ho(n);c!==0&&(r=c,a=Bh(n,c))}if(a===1)throw a=Ia,rs(n,0),ai(n,r),Yt(n,Ke()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,is(n,Qt,Ar),Yt(n,Ke()),null}function qh(n,r){var a=Fe;Fe|=1;try{return n(r)}finally{Fe=a,Fe===0&&(ro=Ke()+500,jl&&ei())}}function ns(n){si!==null&&si.tag===0&&(Fe&6)===0&&io();var r=Fe;Fe|=1;var a=yn.transition,c=be;try{if(yn.transition=null,be=1,n)return n()}finally{be=c,yn.transition=a,Fe=r,(Fe&6)===0&&ei()}}function Hh(){un=no.current,Ye(no)}function rs(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,k0(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(eh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fl();break;case 3:Zs(),Ye(Wt),Ye(bt),fh();break;case 5:hh(c);break;case 4:Zs();break;case 13:Ye(Ze);break;case 19:Ye(Ze);break;case 10:oh(c.type._context);break;case 22:case 23:Hh()}a=a.return}if(wt=n,dt=n=li(n.current,null),xt=un=r,yt=0,Ia=null,Fh=au=ts=0,Qt=Sa=null,Ji!==null){for(r=0;r<Ji.length;r++)if(a=Ji[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ji=null}return n}function bm(n,r){do{var a=dt;try{if(sh(),Yl.current=eu,Xl){for(var c=et.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xl=!1}if(es=0,Et=gt=et=null,ya=!1,_a=0,Mh.current=null,a===null||a.return===null){yt=1,Ia=r,dt=null;break}e:{var f=n,v=a.return,T=a,k=r;if(r=xt,T.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var se=am(v);if(se!==null){se.flags&=-257,lm(se,v,T,f,r),se.mode&1&&om(f,U,r),r=se,k=U;var ue=r.updateQueue;if(ue===null){var ce=new Set;ce.add(k),r.updateQueue=ce}else ue.add(k);break e}else{if((r&1)===0){om(f,U,r),Wh();break e}k=Error(t(426))}}else if(Je&&T.mode&1){var at=am(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),lm(at,v,T,f,r),rh(eo(k,T));break e}}f=k=eo(k,T),yt!==4&&(yt=2),Sa===null?Sa=[f]:Sa.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var b=im(f,k,r);Np(f,b);break e;case 1:T=k;var V=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ii===null||!ii.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=sm(f,T,r);Np(f,X);break e}}f=f.return}while(f!==null)}Um(a)}catch(he){r=he,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Mm(){var n=ou.current;return ou.current=eu,n===null?eu:n}function Wh(){(yt===0||yt===3||yt===2)&&(yt=4),wt===null||(ts&268435455)===0&&(au&268435455)===0||ai(wt,xt)}function fu(n,r){var a=Fe;Fe|=2;var c=Mm();(wt!==n||xt!==r)&&(Ar=null,rs(n,r));do try{Z0();break}catch(d){bm(n,d)}while(!0);if(sh(),Fe=a,ou.current=c,dt!==null)throw Error(t(261));return wt=null,xt=0,yt}function Z0(){for(;dt!==null;)Fm(dt)}function eE(){for(;dt!==null&&!Mi();)Fm(dt)}function Fm(n){var r=Bm(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?Um(n):dt=r,Mh.current=null}function Um(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=W0(a,r,un),a!==null){dt=a;return}}else{if(a=G0(a,r),a!==null){a.flags&=32767,dt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,dt=null;return}}if(r=r.sibling,r!==null){dt=r;return}dt=r=n}while(r!==null);yt===0&&(yt=5)}function is(n,r,a){var c=be,d=yn.transition;try{yn.transition=null,be=1,tE(n,r,a,c)}finally{yn.transition=d,be=c}return null}function tE(n,r,a,c){do io();while(si!==null);if((Fe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Dc(n,f),n===wt&&(dt=wt=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||uu||(uu=!0,$m(Fi,function(){return io(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yn.transition,yn.transition=null;var v=be;be=1;var T=Fe;Fe|=4,Mh.current=null,Q0(n,a),Pm(a,n),w0(Wc),mr=!!Hc,Wc=Hc=null,n.current=a,Y0(a),hr(),Fe=T,be=v,yn.transition=f}else n.current=a;if(uu&&(uu=!1,si=n,cu=d),f=n.pendingLanes,f===0&&(ii=null),El(a.stateNode),Yt(n,Ke()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(lu)throw lu=!1,n=jh,jh=null,n;return(cu&1)!==0&&n.tag!==0&&io(),f=n.pendingLanes,(f&1)!==0?n===zh?Aa++:(Aa=0,zh=n):Aa=0,ei(),null}function io(){if(si!==null){var n=jn(cu),r=yn.transition,a=be;try{if(yn.transition=null,be=16>n?16:n,si===null)var c=!1;else{if(n=si,si=null,cu=0,(Fe&6)!==0)throw Error(t(331));var d=Fe;for(Fe|=4,ae=n.current;ae!==null;){var f=ae,v=f.child;if((ae.flags&16)!==0){var T=f.deletions;if(T!==null){for(var k=0;k<T.length;k++){var U=T[k];for(ae=U;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:Ta(8,K,f)}var Q=K.child;if(Q!==null)Q.return=K,ae=Q;else for(;ae!==null;){K=ae;var G=K.sibling,se=K.return;if(Sm(K),K===U){ae=null;break}if(G!==null){G.return=se,ae=G;break}ae=se}}}var ue=f.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var at=ce.sibling;ce.sibling=null,ce=at}while(ce!==null)}}ae=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ae=v;else e:for(;ae!==null;){if(f=ae,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ta(9,f,f.return)}var b=f.sibling;if(b!==null){b.return=f.return,ae=b;break e}ae=f.return}}var V=n.current;for(ae=V;ae!==null;){v=ae;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ae=F;else e:for(v=V;ae!==null;){if(T=ae,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:su(9,T)}}catch(he){it(T,T.return,he)}if(T===v){ae=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,ae=X;break e}ae=T.return}}if(Fe=d,ei(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{be=a,yn.transition=r}}return!1}function jm(n,r,a){r=eo(a,r),r=im(n,r,1),n=ni(n,r,1),r=Ht(),n!==null&&($i(n,1,r),Yt(n,r))}function it(n,r,a){if(n.tag===3)jm(n,n,a);else for(;r!==null;){if(r.tag===3){jm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ii===null||!ii.has(c))){n=eo(a,n),n=sm(r,n,1),r=ni(r,n,1),n=Ht(),r!==null&&($i(r,1,n),Yt(r,n));break}}r=r.return}}function nE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(xt&a)===a&&(yt===4||yt===3&&(xt&130023424)===xt&&500>Ke()-Uh?rs(n,0):Fh|=a),Yt(n,r)}function zm(n,r){r===0&&((n.mode&1)===0?r=1:(r=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var a=Ht();n=Tr(n,r),n!==null&&($i(n,r,a),Yt(n,a))}function rE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),zm(n,a)}function iE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),zm(n,a)}var Bm;Bm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,H0(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Je&&(r.flags&1048576)!==0&&wp(r,Bl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;ru(n,r),n=r.pendingProps;var d=Ws(r,bt.current);Js(r,a),d=gh(null,r,c,n,d,a);var f=yh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(f=!0,Ul(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,uh(r),d.updater=tu,r.stateNode=d,d._reactInternals=r,Ih(r,c,n,a),r=Rh(null,r,c,!0,f,a)):(r.tag=0,Je&&f&&Zc(r),qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(ru(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=oE(c),n=Cn(c,n),d){case 0:r=Ch(null,r,c,n,a);break e;case 1:r=pm(null,r,c,n,a);break e;case 11:r=um(null,r,c,n,a);break e;case 14:r=cm(null,r,c,Cn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Ch(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),pm(n,r,c,d,a);case 3:e:{if(mm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,xp(n,r),Kl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=eo(Error(t(423)),r),r=gm(n,r,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),r),r=gm(n,r,c,a,d);break e}else for(ln=Xr(r.stateNode.containerInfo.firstChild),an=r,Je=!0,An=null,a=kp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),c===d){r=Sr(n,r,a);break e}qt(n,r,c,a)}r=r.child}return r;case 5:return Vp(r),n===null&&nh(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Gc(c,d)?v=null:f!==null&&Gc(c,f)&&(r.flags|=32),fm(n,r),qt(n,r,v,a),r.child;case 6:return n===null&&nh(r),null;case 13:return ym(n,r,a);case 4:return ch(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ys(r,null,c,a):qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),um(n,r,c,d,a);case 7:return qt(n,r,r.pendingProps,a),r.child;case 8:return qt(n,r,r.pendingProps.children,a),r.child;case 12:return qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,We(Hl,c._currentValue),c._currentValue=v,f!==null)if(Sn(f.value,v)){if(f.children===d.children&&!Wt.current){r=Sr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var T=f.dependencies;if(T!==null){v=f.child;for(var k=T.firstContext;k!==null;){if(k.context===c){if(f.tag===1){k=Ir(-1,a&-a),k.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?k.next=k:(k.next=K.next,K.next=k),U.pending=k}}f.lanes|=a,k=f.alternate,k!==null&&(k.lanes|=a),ah(f.return,a,r),T.lanes|=a;break}k=k.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,T=v.alternate,T!==null&&(T.lanes|=a),ah(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Js(r,a),d=mn(d),c=c(d),r.flags|=1,qt(n,r,c,a),r.child;case 14:return c=r.type,d=Cn(c,r.pendingProps),d=Cn(c.type,d),cm(n,r,c,d,a);case 15:return hm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),ru(n,r),r.tag=1,Gt(c)?(n=!0,Ul(r)):n=!1,Js(r,a),nm(r,c,d),Ih(r,c,d,a),Rh(null,r,c,!0,n,a);case 19:return vm(n,r,a);case 22:return dm(n,r,a)}throw Error(t(156,r.tag))};function $m(n,r){return Bo(n,r)}function sE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new sE(n,r,a,c)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oE(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Pe)return 14}return 2}function li(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Gh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return ss(a.children,d,f,r);case I:v=8,d|=8;break;case R:return n=_n(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case S:return n=_n(13,a,r,d),n.elementType=S,n.lanes=f,n;case le:return n=_n(19,a,r,d),n.elementType=le,n.lanes=f,n;case He:return mu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case x:v=9;break e;case L:v=11;break e;case Pe:v=14;break e;case ut:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function ss(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function mu(n,r,a,c){return n=_n(22,n,c,r),n.elementType=He,n.lanes=a,n.stateNode={isHidden:!1},n}function Kh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Qh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function aE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Yh(n,r,a,c,d,f,v,T,k){return n=new aE(n,r,a,T,k),r===1?(r=1,f===!0&&(r|=8)):r=0,f=_n(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uh(f),n}function lE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function qm(n){if(!n)return Zr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return _p(n,a,r)}return r}function Hm(n,r,a,c,d,f,v,T,k){return n=Yh(a,c,!0,n,d,f,v,T,k),n.context=qm(null),a=n.current,c=Ht(),d=oi(a),f=Ir(c,d),f.callback=r??null,ni(a,f,d),n.current.lanes=d,$i(n,d,c),Yt(n,c),n}function gu(n,r,a,c){var d=r.current,f=Ht(),v=oi(d);return a=qm(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ni(d,r,v),n!==null&&(Pn(n,d,v,f),Gl(n,d,v)),v}function yu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Xh(n,r){Wm(n,r),(n=n.alternate)&&Wm(n,r)}function uE(){return null}var Gm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jh(n){this._internalRoot=n}_u.prototype.render=Jh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));gu(n,r,null,null)},_u.prototype.unmount=Jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ns(function(){gu(null,n,null,null)}),r[_r]=null}};function _u(n){this._internalRoot=n}_u.prototype.unstable_scheduleHydration=function(n){if(n){var r=Xo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<nn.length&&r!==0&&r<nn[a].priority;a++);nn.splice(a,0,n),a===0&&xs(n)}};function Zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Km(){}function cE(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=yu(v);f.call(U)}}var v=Hm(r,c,n,0,null,!1,!1,"",Km);return n._reactRootContainer=v,n[_r]=v.current,ua(n.nodeType===8?n.parentNode:n),ns(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=yu(k);T.call(U)}}var k=Yh(n,0,!1,null,null,!1,!1,"",Km);return n._reactRootContainer=k,n[_r]=k.current,ua(n.nodeType===8?n.parentNode:n),ns(function(){gu(r,k,a,c)}),k}function Eu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var T=d;d=function(){var k=yu(v);T.call(k)}}gu(r,v,n,d)}else v=cE(a,r,n,d,c);return yu(v)}Qo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=je(r.pendingLanes);a!==0&&(Ko(r,a|1),Yt(r,Ke()),(Fe&6)===0&&(ro=Ke()+500,ei()))}break;case 13:ns(function(){var c=Tr(n,1);if(c!==null){var d=Ht();Pn(c,n,1,d)}}),Xh(n,1)}},ks=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=Ht();Pn(r,n,134217728,a)}Xh(n,134217728)}},Yo=function(n){if(n.tag===13){var r=oi(n),a=Tr(n,r);if(a!==null){var c=Ht();Pn(a,n,r,c)}Xh(n,r)}},Xo=function(){return be},Jo=function(n,r){var a=be;try{return be=n,r()}finally{be=a}},lr=function(n,r,a){switch(r){case"input":if(Vi(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ml(c);if(!d)throw Error(t(90));Di(c),Vi(c,d)}}}break;case"textarea":ll(n,a);break;case"select":r=a.value,r!=null&&En(n,!!a.multiple,r,!1)}},hl=qh,dl=ns;var hE={usingClientEntryPoint:!1,Events:[da,qs,Ml,jr,zr,qh]},Ca={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dE={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=vl(n),n===null?null:n.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||uE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{Ui=wu.inject(dE),en=wu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hE,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(r))throw Error(t(200));return lE(n,r,null,a)},Xt.createRoot=function(n,r){if(!Zh(n))throw Error(t(299));var a=!1,c="",d=Gm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Yh(n,1,!1,null,null,a,!1,c,d),n[_r]=r.current,ua(n.nodeType===8?n.parentNode:n),new Jh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=vl(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return ns(n)},Xt.hydrate=function(n,r,a){if(!vu(r))throw Error(t(200));return Eu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Gm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Hm(r,null,n,1,a??null,d,!1,f,v),n[_r]=r.current,ua(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new _u(r)},Xt.render=function(n,r,a){if(!vu(r))throw Error(t(200));return Eu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!vu(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){Eu(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Xt.unstable_batchedUpdates=qh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!vu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Eu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var ng;function wE(){if(ng)return nd.exports;ng=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),nd.exports=EE(),nd.exports}var rg;function TE(){if(rg)return Tu;rg=1;var i=wE();return Tu.createRoot=i.createRoot,Tu.hydrateRoot=i.hydrateRoot,Tu}var IE=TE();const SE=Fy(IE);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=tt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>tt.createElement("svg",{ref:y,...CE,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:Uy("lucide",o),...m},[...h.map(([_,w])=>tt.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(i,e)=>{const t=tt.forwardRef(({className:s,...o},u)=>tt.createElement(RE,{ref:u,iconNode:e,className:Uy(`lucide-${AE(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=At("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=At("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=At("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=At("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=At("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=At("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=At("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=At("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=At("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=At("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=At("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=At("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=At("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=At("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=At("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=At("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=At("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=At("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),FE=()=>{};var lg={};/**
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
 */const jy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},UE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},zy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let D=(m&15)<<2|_>>6,B=_&63;y||(B=64,h||(D=64)),s.push(t[w],t[A],t[D],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(jy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):UE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||A==null)throw new jE;const D=u<<2|m>>4;if(s.push(D),_!==64){const B=m<<4&240|_>>2;if(s.push(B),A!==64){const J=_<<6&192|A;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zE=function(i){const e=jy(i);return zy.encodeByteArray(e,!0)},Wu=function(i){return zE(i).replace(/\./g,"")},By=function(i){try{return zy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $E=()=>BE().__FIREBASE_DEFAULTS__,qE=()=>{if(typeof process>"u"||typeof lg>"u")return;const i=lg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},HE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&By(i[1]);return e&&JSON.parse(e)},hc=()=>{try{return FE()||$E()||qE()||HE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},$y=i=>{var e,t;return(t=(e=hc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},WE=i=>{const e=$y(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},qy=()=>{var i;return(i=hc())==null?void 0:i.config},Hy=i=>{var e;return(e=hc())==null?void 0:e[`_${i}`]};/**
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
 */class GE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ao(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function KE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Wu(JSON.stringify(t)),Wu(JSON.stringify(h)),""].join(".")}const Oa={};function QE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Oa))Oa[e]?i.emulator.push(e):i.prod.push(e);return i}function YE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let ug=!1;function Gy(i,e){if(typeof window>"u"||typeof document>"u"||!Ao(window.location.host)||Oa[i]===e||Oa[i]||ug)return;Oa[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=QE().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,B){D.setAttribute("width","24"),D.setAttribute("id",B),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function _(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{ug=!0,h()},D}function w(D,B){D.setAttribute("id",B),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function A(){const D=YE(s),B=t("text"),J=document.getElementById(B)||document.createElement("span"),Y=t("learnmore"),q=document.getElementById(Y)||document.createElement("a"),Te=t("preprendIcon"),ge=document.getElementById(Te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const we=D.element;m(we),w(q,Y);const xe=_();y(ge,Te),we.append(ge,J,q,xe),document.body.appendChild(we)}u?(J.innerText="Preview backend disconnected.",ge.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function JE(){var e;const i=(e=hc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ew(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nw(){const i=$t();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function rw(){return!JE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const ow="FirebaseError";class Dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ow,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?aw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Dr(o,m,s)}}function aw(i,e){return i.replace(lw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const lw=/\{\$([^}]+)}/g;function uw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function us(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(cg(u)&&cg(h)){if(!us(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function cg(i){return i!==null&&typeof i=="object"}/**
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
 */function Xa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function xa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function cw(i,e){const t=new hw(i,e);return t.subscribe.bind(t)}class hw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");dw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=od),o.error===void 0&&(o.error=od),o.complete===void 0&&(o.complete=od);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function od(){}/**
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
 */function St(i){return i&&i._delegate?i._delegate:i}class cs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class fw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new GE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mw(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pw(i){return i===as?void 0:i}function mw(i){return i.instantiationMode==="EAGER"}/**
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
 */class gw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ve||(Ve={}));const yw={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},_w=Ve.INFO,vw={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},Ew=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=vw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gd{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const ww=(i,e)=>e.some(t=>i instanceof t);let hg,dg;function Tw(){return hg||(hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return dg||(dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ky=new WeakMap,vd=new WeakMap,Qy=new WeakMap,ad=new WeakMap,Kd=new WeakMap;function Sw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(gi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ky.set(t,i)}).catch(()=>{}),Kd.set(e,i),e}function Aw(i){if(vd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});vd.set(i,e)}let Ed={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return vd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Qy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Cw(i){Ed=i(Ed)}function Rw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ld(this),e,...t);return Qy.set(s,e.sort?e.sort():[e]),gi(s)}:Iw().includes(i)?function(...e){return i.apply(ld(this),e),gi(Ky.get(this))}:function(...e){return gi(i.apply(ld(this),e))}}function kw(i){return typeof i=="function"?Rw(i):(i instanceof IDBTransaction&&Aw(i),ww(i,Tw())?new Proxy(i,Ed):i)}function gi(i){if(i instanceof IDBRequest)return Sw(i);if(ad.has(i))return ad.get(i);const e=kw(i);return e!==i&&(ad.set(i,e),Kd.set(e,i)),e}const ld=i=>Kd.get(i);function Pw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=gi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(gi(h.result),y.oldVersion,y.newVersion,gi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const xw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],ud=new Map;function fg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ud.get(e))return ud.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Nw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return ud.set(e,u),u}Cw(i=>({...i,get:(e,t,s)=>fg(e,t)||i.get(e,t,s),has:(e,t)=>!!fg(e,t)||i.has(e,t)}));/**
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
 */class Dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Vw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",pg="0.14.6";/**
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
 */const kr=new Gd("@firebase/app"),Ow="@firebase/app-compat",Lw="@firebase/analytics-compat",bw="@firebase/analytics",Mw="@firebase/app-check-compat",Fw="@firebase/app-check",Uw="@firebase/auth",jw="@firebase/auth-compat",zw="@firebase/database",Bw="@firebase/data-connect",$w="@firebase/database-compat",qw="@firebase/functions",Hw="@firebase/functions-compat",Ww="@firebase/installations",Gw="@firebase/installations-compat",Kw="@firebase/messaging",Qw="@firebase/messaging-compat",Yw="@firebase/performance",Xw="@firebase/performance-compat",Jw="@firebase/remote-config",Zw="@firebase/remote-config-compat",eT="@firebase/storage",tT="@firebase/storage-compat",nT="@firebase/firestore",rT="@firebase/ai",iT="@firebase/firestore-compat",sT="firebase",oT="12.6.0";/**
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
 */const Td="[DEFAULT]",aT={[wd]:"fire-core",[Ow]:"fire-core-compat",[bw]:"fire-analytics",[Lw]:"fire-analytics-compat",[Fw]:"fire-app-check",[Mw]:"fire-app-check-compat",[Uw]:"fire-auth",[jw]:"fire-auth-compat",[zw]:"fire-rtdb",[Bw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[qw]:"fire-fn",[Hw]:"fire-fn-compat",[Ww]:"fire-iid",[Gw]:"fire-iid-compat",[Kw]:"fire-fcm",[Qw]:"fire-fcm-compat",[Yw]:"fire-perf",[Xw]:"fire-perf-compat",[Jw]:"fire-rc",[Zw]:"fire-rc-compat",[eT]:"fire-gcs",[tT]:"fire-gcs-compat",[nT]:"fire-fst",[iT]:"fire-fst-compat",[rT]:"fire-vertex","fire-js":"fire-js",[sT]:"fire-js-all"};/**
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
 */const Gu=new Map,lT=new Map,Id=new Map;function mg(i,e){try{i.container.addComponent(e)}catch(t){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function yo(i){const e=i.name;if(Id.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,i);for(const t of Gu.values())mg(t,i);for(const t of lT.values())mg(t,i);return!0}function Qd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function xn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const uT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new Ya("app","Firebase",uT);/**
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
 */class cT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=oT;function Yy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Td,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw yi.create("bad-app-name",{appName:String(o)});if(t||(t=qy()),!t)throw yi.create("no-options");const u=Gu.get(o);if(u){if(us(t,u.options)&&us(s,u.config))return u;throw yi.create("duplicate-app",{appName:o})}const h=new gw(o);for(const y of Id.values())h.addComponent(y);const m=new cT(t,s,h);return Gu.set(o,m),m}function Xy(i=Td){const e=Gu.get(i);if(!e&&i===Td&&qy())return Yy();if(!e)throw yi.create("no-app",{appName:i});return e}function _i(i,e,t){let s=aT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(h.join(" "));return}yo(new cs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hT="firebase-heartbeat-database",dT=1,ja="firebase-heartbeat-store";let cd=null;function Jy(){return cd||(cd=Pw(hT,dT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ja)}catch(t){console.warn(t)}}}}).catch(i=>{throw yi.create("idb-open",{originalErrorMessage:i.message})})),cd}async function fT(i){try{const t=(await Jy()).transaction(ja),s=await t.objectStore(ja).get(Zy(i));return await t.done,s}catch(e){if(e instanceof Dr)kr.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(t.message)}}}async function gg(i,e){try{const s=(await Jy()).transaction(ja,"readwrite");await s.objectStore(ja).put(e,Zy(i)),await s.done}catch(t){if(t instanceof Dr)kr.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kr.warn(s.message)}}}function Zy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const pT=1024,mT=30;class gT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _T(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=yg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>mT){const h=vT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yg(),{heartbeatsToSend:s,unsentEntries:o}=yT(this._heartbeatsCache.heartbeats),u=Wu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return kr.warn(t),""}}}function yg(){return new Date().toISOString().substring(0,10)}function yT(i,e=pT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),_g(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),_g(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _g(i){return Wu(JSON.stringify({version:2,heartbeats:i})).length}function vT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function ET(i){yo(new cs("platform-logger",e=>new Dw(e),"PRIVATE")),yo(new cs("heartbeat",e=>new gT(e),"PRIVATE")),_i(wd,pg,i),_i(wd,pg,"esm2020"),_i("fire-js","")}ET("");var wT="firebase",TT="12.7.0";/**
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
 */_i(wT,TT,"app");var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vi,e_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function R(){}R.prototype=I.prototype,N.F=I.prototype,N.prototype=new R,N.prototype.constructor=N,N.D=function(P,x,L){for(var S=Array(arguments.length-2),le=2;le<arguments.length;le++)S[le-2]=arguments[le];return I.prototype[x].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,R){R||(R=0);const P=Array(16);if(typeof I=="string")for(var x=0;x<16;++x)P[x]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(x=0;x<16;++x)P[x]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=N.g[0],R=N.g[1],x=N.g[2];let L=N.g[3],S;S=I+(L^R&(x^L))+P[0]+3614090360&4294967295,I=R+(S<<7&4294967295|S>>>25),S=L+(x^I&(R^x))+P[1]+3905402710&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(R^L&(I^R))+P[2]+606105819&4294967295,x=L+(S<<17&4294967295|S>>>15),S=R+(I^x&(L^I))+P[3]+3250441966&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(L^R&(x^L))+P[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=L+(x^I&(R^x))+P[5]+1200080426&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(R^L&(I^R))+P[6]+2821735955&4294967295,x=L+(S<<17&4294967295|S>>>15),S=R+(I^x&(L^I))+P[7]+4249261313&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(L^R&(x^L))+P[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=L+(x^I&(R^x))+P[9]+2336552879&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(R^L&(I^R))+P[10]+4294925233&4294967295,x=L+(S<<17&4294967295|S>>>15),S=R+(I^x&(L^I))+P[11]+2304563134&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(L^R&(x^L))+P[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=L+(x^I&(R^x))+P[13]+4254626195&4294967295,L=I+(S<<12&4294967295|S>>>20),S=x+(R^L&(I^R))+P[14]+2792965006&4294967295,x=L+(S<<17&4294967295|S>>>15),S=R+(I^x&(L^I))+P[15]+1236535329&4294967295,R=x+(S<<22&4294967295|S>>>10),S=I+(x^L&(R^x))+P[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=L+(R^x&(I^R))+P[6]+3225465664&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(L^I))+P[11]+643717713&4294967295,x=L+(S<<14&4294967295|S>>>18),S=R+(L^I&(x^L))+P[0]+3921069994&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(x^L&(R^x))+P[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=L+(R^x&(I^R))+P[10]+38016083&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(L^I))+P[15]+3634488961&4294967295,x=L+(S<<14&4294967295|S>>>18),S=R+(L^I&(x^L))+P[4]+3889429448&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(x^L&(R^x))+P[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=L+(R^x&(I^R))+P[14]+3275163606&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(L^I))+P[3]+4107603335&4294967295,x=L+(S<<14&4294967295|S>>>18),S=R+(L^I&(x^L))+P[8]+1163531501&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(x^L&(R^x))+P[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=L+(R^x&(I^R))+P[2]+4243563512&4294967295,L=I+(S<<9&4294967295|S>>>23),S=x+(I^R&(L^I))+P[7]+1735328473&4294967295,x=L+(S<<14&4294967295|S>>>18),S=R+(L^I&(x^L))+P[12]+2368359562&4294967295,R=x+(S<<20&4294967295|S>>>12),S=I+(R^x^L)+P[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=L+(I^R^x)+P[8]+2272392833&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^R)+P[11]+1839030562&4294967295,x=L+(S<<16&4294967295|S>>>16),S=R+(x^L^I)+P[14]+4259657740&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(R^x^L)+P[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=L+(I^R^x)+P[4]+1272893353&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^R)+P[7]+4139469664&4294967295,x=L+(S<<16&4294967295|S>>>16),S=R+(x^L^I)+P[10]+3200236656&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(R^x^L)+P[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=L+(I^R^x)+P[0]+3936430074&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^R)+P[3]+3572445317&4294967295,x=L+(S<<16&4294967295|S>>>16),S=R+(x^L^I)+P[6]+76029189&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(R^x^L)+P[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=L+(I^R^x)+P[12]+3873151461&4294967295,L=I+(S<<11&4294967295|S>>>21),S=x+(L^I^R)+P[15]+530742520&4294967295,x=L+(S<<16&4294967295|S>>>16),S=R+(x^L^I)+P[2]+3299628645&4294967295,R=x+(S<<23&4294967295|S>>>9),S=I+(x^(R|~L))+P[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=L+(R^(I|~x))+P[7]+1126891415&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~R))+P[14]+2878612391&4294967295,x=L+(S<<15&4294967295|S>>>17),S=R+(L^(x|~I))+P[5]+4237533241&4294967295,R=x+(S<<21&4294967295|S>>>11),S=I+(x^(R|~L))+P[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=L+(R^(I|~x))+P[3]+2399980690&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~R))+P[10]+4293915773&4294967295,x=L+(S<<15&4294967295|S>>>17),S=R+(L^(x|~I))+P[1]+2240044497&4294967295,R=x+(S<<21&4294967295|S>>>11),S=I+(x^(R|~L))+P[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=L+(R^(I|~x))+P[15]+4264355552&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~R))+P[6]+2734768916&4294967295,x=L+(S<<15&4294967295|S>>>17),S=R+(L^(x|~I))+P[13]+1309151649&4294967295,R=x+(S<<21&4294967295|S>>>11),S=I+(x^(R|~L))+P[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=L+(R^(I|~x))+P[11]+3174756917&4294967295,L=I+(S<<10&4294967295|S>>>22),S=x+(I^(L|~R))+P[2]+718787259&4294967295,x=L+(S<<15&4294967295|S>>>17),S=R+(L^(x|~I))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.v=function(N,I){I===void 0&&(I=N.length);const R=I-this.blockSize,P=this.C;let x=this.h,L=0;for(;L<I;){if(x==0)for(;L<=R;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<I;)if(P[x++]=N.charCodeAt(L++),x==this.blockSize){o(this,P),x=0;break}}else for(;L<I;)if(P[x++]=N[L++],x==this.blockSize){o(this,P),x=0;break}}this.h=x,this.o+=I},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;I=this.o*8;for(var R=N.length-8;R<N.length;++R)N[R]=I&255,I/=256;for(this.v(N),N=Array(16),I=0,R=0;R<4;++R)for(let P=0;P<32;P+=8)N[I++]=this.g[R]>>>P&255;return N};function u(N,I){var R=m;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=I(N)}function h(N,I){this.h=I;const R=[];let P=!0;for(let x=N.length-1;x>=0;x--){const L=N[x]|0;P&&L==I||(R[x]=L,P=!1)}this.g=R}var m={};function y(N){return-128<=N&&N<128?u(N,function(I){return new h([I|0],I<0?-1:0)}):new h([N|0],N<0?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return A;if(N<0)return q(_(-N));const I=[];let R=1;for(let P=0;N>=R;P++)I[P]=N/R|0,R*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return q(w(N.substring(1),I));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(I,8));let P=A;for(let L=0;L<N.length;L+=8){var x=Math.min(8,N.length-L);const S=parseInt(N.substring(L,L+x),I);x<8?(x=_(Math.pow(I,x)),P=P.j(x).add(_(S))):(P=P.j(R),P=P.add(_(S)))}return P}var A=y(0),D=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-q(this).m();let N=0,I=1;for(let R=0;R<this.g.length;R++){const P=this.i(R);N+=(P>=0?P:4294967296+P)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(J(this))return"0";if(Y(this))return"-"+q(this).toString(N);const I=_(Math.pow(N,6));var R=this;let P="";for(;;){const x=xe(R,I).g;R=Te(R,x.j(I));let L=((R.g.length>0?R.g[0]:R.h)>>>0).toString(N);if(R=x,J(R))return L+P;for(;L.length<6;)L="0"+L;P=L+P}},i.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function J(N){if(N.h!=0)return!1;for(let I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=Te(this,N),Y(N)?-1:J(N)?0:1};function q(N){const I=N.g.length,R=[];for(let P=0;P<I;P++)R[P]=~N.g[P];return new h(R,~N.h).add(D)}i.abs=function(){return Y(this)?q(this):this},i.add=function(N){const I=Math.max(this.g.length,N.g.length),R=[];let P=0;for(let x=0;x<=I;x++){let L=P+(this.i(x)&65535)+(N.i(x)&65535),S=(L>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);P=S>>>16,L&=65535,S&=65535,R[x]=S<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function Te(N,I){return N.add(q(I))}i.j=function(N){if(J(this)||J(N))return A;if(Y(this))return Y(N)?q(this).j(q(N)):q(q(this).j(N));if(Y(N))return q(this.j(q(N)));if(this.l(B)<0&&N.l(B)<0)return _(this.m()*N.m());const I=this.g.length+N.g.length,R=[];for(var P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(let x=0;x<N.g.length;x++){const L=this.i(P)>>>16,S=this.i(P)&65535,le=N.i(x)>>>16,Pe=N.i(x)&65535;R[2*P+2*x]+=S*Pe,ge(R,2*P+2*x),R[2*P+2*x+1]+=L*Pe,ge(R,2*P+2*x+1),R[2*P+2*x+1]+=S*le,ge(R,2*P+2*x+1),R[2*P+2*x+2]+=L*le,ge(R,2*P+2*x+2)}for(N=0;N<I;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=I;N<2*I;N++)R[N]=0;return new h(R,0)};function ge(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function we(N,I){this.g=N,this.h=I}function xe(N,I){if(J(I))throw Error("division by zero");if(J(N))return new we(A,A);if(Y(N))return I=xe(q(N),I),new we(q(I.g),q(I.h));if(Y(I))return I=xe(N,q(I)),new we(q(I.g),I.h);if(N.g.length>30){if(Y(N)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=D,P=I;P.l(N)<=0;)R=$e(R),P=$e(P);var x=Ne(R,1),L=Ne(P,1);for(P=Ne(P,2),R=Ne(R,2);!J(P);){var S=L.add(P);S.l(N)<=0&&(x=x.add(R),L=S),P=Ne(P,1),R=Ne(R,1)}return I=Te(N,x.j(I)),new we(x,I)}for(x=A;N.l(I)>=0;){for(R=Math.max(1,Math.floor(N.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),L=_(R),S=L.j(I);Y(S)||S.l(N)>0;)R-=P,L=_(R),S=L.j(I);J(L)&&(L=D),x=x.add(L),N=Te(N,S)}return new we(x,N)}i.B=function(N){return xe(this,N).h},i.and=function(N){const I=Math.max(this.g.length,N.g.length),R=[];for(let P=0;P<I;P++)R[P]=this.i(P)&N.i(P);return new h(R,this.h&N.h)},i.or=function(N){const I=Math.max(this.g.length,N.g.length),R=[];for(let P=0;P<I;P++)R[P]=this.i(P)|N.i(P);return new h(R,this.h|N.h)},i.xor=function(N){const I=Math.max(this.g.length,N.g.length),R=[];for(let P=0;P<I;P++)R[P]=this.i(P)^N.i(P);return new h(R,this.h^N.h)};function $e(N){const I=N.g.length+1,R=[];for(let P=0;P<I;P++)R[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(R,N.h)}function Ne(N,I){const R=I>>5;I%=32;const P=N.g.length-R,x=[];for(let L=0;L<P;L++)x[L]=I>0?N.i(L+R)>>>I|N.i(L+R+1)<<32-I:N.i(L+R);return new h(x,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,e_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,vi=h}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t_,Na,n_,bu,Sd,r_,i_,s_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function A(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var Z=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)Z[Ae-2]=arguments[Ae];return p.prototype[M].apply(E,Z)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function J(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const j=M.length||0;l.length=g+j;for(let Z=0;Z<j;Z++)l[g+Z]=M[Z]}else l.push(M)}}class Y{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function q(l){h.setTimeout(()=>{throw l},0)}function Te(){var l=N;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ge{constructor(){this.h=this.g=null}add(p,g){const E=we.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var we=new Y(()=>new xe,l=>l.reset());class xe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,Ne=!1,N=new ge,I=()=>{const l=Promise.resolve(void 0);$e=()=>{l.then(R)}};function R(){for(var l;l=Te();){try{l.h.call(l.g)}catch(g){q(g)}var p=we;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ne=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function le(l,p){x.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A(le,x),le.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),ut=0;function He(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++ut,this.da=this.fa=!1}function ee(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function de(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let j=0;j<W.length;j++)g=W[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function ve(l){this.src=l,this.g={},this.h=0}ve.prototype.add=function(l,p,g,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const Z=ke(l,p,E,M);return Z>-1?(p=l[Z],g||(p.fa=!1)):(p=new He(p,this.src,j,!!E,M),p.fa=g,l.push(p)),p};function Re(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(ee(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ke(l,p,g,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==E)return M}return-1}var z="closure_lm_"+(Math.random()*1e6|0),re={};function te(l,p,g,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)te(l,p[j],g,E,M);return null}return g=Oo(g),l&&l[Pe]?l.J(p,g,m(E)?!!E.capture:!1,M):Ct(l,p,g,!1,E,M)}function Ct(l,p,g,E,M,j){if(!p)throw Error("Invalid event type");const Z=m(M)?!!M.capture:!!M;let Ae=vs(l);if(Ae||(l[z]=Ae=new ve(l)),g=Ae.add(p,g,E,Z,j),g.proxy)return g;if(E=Vr(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)L||(M=Z),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(Or(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Vr(){function l(g){return p.call(l.src,l.listener,g)}const p=Ot;return l}function Di(l,p,g,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)Di(l,p[j],g,E,M);else E=m(E)?!!E.capture:!!E,g=Oo(g),l&&l[Pe]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=ke(p,g,E,M),g>-1&&(ee(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=vs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=ke(p,g,E,M)),(g=l>-1?p[l]:null)&&Ln(g))}function Ln(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Pe])Re(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(Or(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=vs(p))?(Re(g,l),g.h==0&&(g.src=null,p[z]=null)):ee(l)}}}function Or(l){return l in re?re[l]:re[l]="on"+l}function Ot(l,p){if(l.da)l=!0;else{p=new le(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Ln(l),l=g.call(E,p)}return l}function vs(l){return l=l[z],l instanceof ve?l:null}var Vi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Oo(l){return typeof l=="function"?l:(l[Vi]||(l[Vi]=function(p){return l.handleEvent(p)}),l[Vi])}function ct(){P.call(this),this.i=new ve(this),this.M=this,this.G=null}A(ct,P),ct.prototype[Pe]=!0,ct.prototype.removeEventListener=function(l,p,g,E){Di(this,l,p,g,E)};function st(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new x(p,l);else if(p instanceof x)p.target=p.target||l;else{var M=p;p=new x(E,l),Se(p,M)}M=!0;let j,Z;if(g)for(Z=g.length-1;Z>=0;Z--)j=p.g=g[Z],M=En(j,E,!0,p)&&M;if(j=p.g=l,M=En(j,E,!0,p)&&M,M=En(j,E,!1,p)&&M,g)for(Z=0;Z<g.length;Z++)j=p.g=g[Z],M=En(j,E,!1,p)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)ee(g[E]);delete l.g[p],l.h--}}this.G=null},ct.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},ct.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function En(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const Z=p[j];if(Z&&!Z.da&&Z.capture==g){const Ae=Z.listener,ot=Z.ha||Z.src;Z.fa&&Re(l.i,Z),M=Ae.call(ot,E)!==!1&&M}}return M&&!E.defaultPrevented}function Lo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function bo(l){l.g=Lo(()=>{l.g=null,l.i&&(l.i=!1,bo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class ll extends P{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:bo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(l){P.call(this),this.h=l,this.g={}}A(Lr,P);var Mo=[];function Es(l){de(l.g,function(p,g){this.g.hasOwnProperty(g)&&Ln(p)},l),l.g={}}Lr.prototype.N=function(){Lr.Z.N.call(this),Es(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=h.JSON.stringify,ul=h.JSON.parse,Oi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Mr(){}function cl(){}var Fr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ws(){x.call(this,"d")}A(ws,x);function Fo(){x.call(this,"c")}A(Fo,x);var wn={},Ts=null;function Ur(){return Ts=Ts||new ct}wn.Ia="serverreachability";function Is(l){x.call(this,wn.Ia,l)}A(Is,x);function lr(l){const p=Ur();st(p,new Is(p))}wn.STAT_EVENT="statevent";function ur(l,p){x.call(this,wn.STAT_EVENT,l),this.stat=p}A(ur,x);function rt(l){const p=Ur();st(p,new ur(p,l))}wn.Ja="timingevent";function Uo(l,p){x.call(this,wn.Ja,l),this.size=p}A(Uo,x);function jr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function zr(){this.g=!0}zr.prototype.ua=function(){this.g=!1};function hl(l,p,g,E,M,j){l.info(function(){if(l.g)if(j){var Z="",Ae=j.split("&");for(let Be=0;Be<Ae.length;Be++){var ot=Ae[Be].split("=");if(ot.length>1){const ht=ot[0];ot=ot[1];const on=ht.split("_");Z=on.length>=2&&on[1]=="type"?Z+(ht+"="+ot+"&"):Z+(ht+"=redacted&")}}}else Z=null;else Z=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+Z})}function dl(l,p,g,E,M,j,Z){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+j+" "+Z})}function bn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Li(l,g)+(E?" "+E:"")})}function fl(l,p){l.info(function(){return"TIMEOUT: "+p})}zr.prototype.info=function(){};function Li(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Z=1;Z<E.length;Z++)E[Z]=""}}}}return br(j)}catch{return p}}var Br={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$r={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},pl;function cr(){}A(cr,Mr),cr.prototype.g=function(){return new XMLHttpRequest},pl=new cr;function Mn(l){return encodeURIComponent(String(l))}function Ss(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function hn(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ml}function ml(){this.i=null,this.g="",this.h=!1}var gl={},jo={};function Tn(l,p,g){l.M=1,l.A=dr(dn(p)),l.u=g,l.R=!0,zo(l,null)}function zo(l,p){l.F=Date.now(),bi(l),l.B=dn(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Xo(g.i,"t",E),l.C=0,g=l.j.L,l.h=new ml,l.g=Cl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new ll(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Mo[0]=M.toString()),M=Mo);for(let j=0;j<M.length;j++){const Z=te(g,M[j],E||p.handleEvent,!1,p.h||p);if(!Z)break;p.g[Z.key]=Z}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),lr(),hl(l.i,l.v,l.B,l.l,l.S,l.u)}hn.prototype.ba=function(l){l=l.target;const p=this.O;p&&qn(l)==3?p.j():this.Y(l)},hn.prototype.Y=function(l){try{if(l==this.g)e:{const Ae=qn(this.g),ot=this.g.ya(),Be=this.g.ca();if(!(Ae<3)&&(Ae!=3||this.g&&(this.h.h||this.g.la()||Sl(this.g)))){this.K||Ae!=4||ot==7||(ot==8||Be<=0?lr(3):lr(2)),As(this);var p=this.g.ca();this.X=p;var g=yl(this);if(this.o=p==200,dl(this.i,this.v,this.B,this.l,this.S,Ae,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var j=E;break t}}j=null}if(l=j)bn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ke(this,l);else{this.o=!1,this.m=3,rt(12),hr(this),Mi(this);break e}}if(this.R){l=!0;let ht;for(;!this.K&&this.C<g.length;)if(ht=vl(this,g),ht==jo){Ae==4&&(this.m=4,rt(14),l=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==gl){this.m=4,rt(15),bn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else bn(this.i,this.l,ht,null),Ke(this,ht);if(_l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||g.length!=0||this.h.h||(this.m=1,rt(16),l=!1),this.o=this.o&&l,!l)bn(this.i,this.l,g,"[Invalid Chunked Response]"),hr(this),Mi(this);else if(g.length>0&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.aa&&!Z.P&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Wi(Z),Z.P=!0,rt(11))}}else bn(this.i,this.l,g,null),Ke(this,g);Ae==4&&hr(this),this.o&&!this.K&&(Ae==4?Ls(this.j,this):(this.o=!1,bi(this)))}else Zo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),hr(this),Mi(this)}}}catch{}finally{}};function yl(l){if(!_l(l))return l.g.la();const p=Sl(l.g);if(p==="")return"";let g="";const E=p.length,M=qn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return hr(l),Mi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function _l(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function vl(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?jo:(g=Number(p.substring(g,E)),isNaN(g)?gl:(E+=1,E+g>p.length?jo:(p=p.slice(E,E+g),l.C=E+g,p)))}hn.prototype.cancel=function(){this.K=!0,hr(this)};function bi(l){l.T=Date.now()+l.H,Bo(l,l.H)}function Bo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=jr(_(l.aa,l),p)}function As(l){l.D&&(h.clearTimeout(l.D),l.D=null)}hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(fl(this.i,this.B),this.M!=2&&(lr(),rt(17)),hr(this),this.m=2,Mi(this)):Bo(this,this.T-l)};function Mi(l){l.j.I==0||l.K||Ls(l.j,l)}function hr(l){As(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,Es(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ke(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||qo(g.h,l))){if(!l.L&&qo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Os(g),rn(g);else break e;Gn(g),rt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=jr(_(g.Va,g),6e3));Fi(g.h)<=1&&g.ta&&(g.ta=void 0)}else sn(g,11)}else if((l.L||g.g==l)&&Os(g),!S(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Be=M[p];const ht=Be[0];if(!(ht<=g.K))if(g.K=ht,Be=Be[1],g.I==2)if(Be[0]=="c"){g.M=Be[1],g.ba=Be[2];const on=Be[3];on!=null&&(g.ka=on,g.j.info("VER="+g.ka));const yr=Be[4];yr!=null&&(g.za=yr,g.j.info("SVER="+g.za));const Kn=Be[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(E=1.5*Kn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Qn=l.g;if(Qn){const Fs=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var j=E.h;j.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Rs(j,j.h),j.h=null))}if(E.G){const na=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(E.wa=na,je(E.J,E.G,na))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var Z=l;if(E.na=ta(E,E.L?E.ba:null,E.W),Z.L){Ui(E.h,Z);var Ae=Z,ot=E.O;ot&&(Ae.H=ot),Ae.D&&(As(Ae),bi(Ae)),E.g=Z}else Lt(E);g.i.length>0&&gr(g)}else Be[0]!="stop"&&Be[0]!="close"||sn(g,7);else g.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?sn(g,7):Ds(g):Be[0]!="noop"&&g.l&&g.l.qa(Be),g.A=0)}}lr(4)}catch{}}var Nc=class{constructor(l,p){this.g=l,this.map=p}};function Cs(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $o(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Fi(l){return l.h?1:l.g?l.g.size:0}function qo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Rs(l,p){l.g?l.g.add(p):l.h=p}function Ui(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Cs.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function en(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return B(l.i)}var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,j=null;E>=0?(M=l[g].substring(0,E),j=l[g].substring(E+1)):M=l[g],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Fn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Fn?(this.l=l.l,ji(this,l.j),this.o=l.o,this.g=l.g,Un(this,l.u),this.h=l.h,qr(this,Jo(l.i)),this.m=l.m):l&&(p=String(l).match(El))?(this.l=!1,ji(this,p[1]||"",!0),this.o=zi(p[2]||""),this.g=zi(p[3]||"",!0),Un(this,p[4]),this.h=zi(p[5]||"",!0),qr(this,p[6]||"",!0),this.m=zi(p[7]||"")):(this.l=!1,this.i=new be(null,this.l))}Fn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Bi(p,Wo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Bi(p,Wo,!0),"@"),l.push(Mn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Bi(g,g.charAt(0)=="/"?$i:Go,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Bi(g,Ko)),l.join("")},Fn.prototype.resolve=function(l){const p=dn(this);let g=!!l.j;g?ji(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)Un(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let Z=0;Z<M.length;){const Ae=M[Z++];Ae=="."?E&&Z==M.length&&j.push(""):Ae==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&Z==M.length&&j.push("")):(j.push(Ae),E=!0)}E=j.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?qr(p,Jo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function dn(l){return new Fn(l)}function ji(l,p,g){l.j=g?zi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Un(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function qr(l,p,g){p instanceof be?(l.i=p,Ps(l.i,l.l)):(g||(p=Bi(p,Dc)),l.i=new be(p,l.l))}function je(l,p,g){l.i.set(p,g)}function dr(l){return je(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function zi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Bi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Ho),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ho(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Wo=/[#\/\?@]/g,Go=/[#\?:]/g,$i=/[#\?]/g,Dc=/[#\?@]/g,Ko=/#/g;function be(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function jn(l){l.g||(l.g=new Map,l.h=0,l.i&&tn(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=be.prototype,i.add=function(l,p){jn(this),this.i=null,l=zn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Qo(l,p){jn(l),p=zn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function ks(l,p){return jn(l),p=zn(l,p),l.g.has(p)}i.forEach=function(l,p){jn(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Yo(l,p){jn(l);let g=[];if(typeof p=="string")ks(l,p)&&(g=g.concat(l.g.get(zn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return jn(this),this.i=null,l=zn(this,l),ks(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Yo(this,l),l.length>0?String(l[0]):p):p};function Xo(l,p,g){Qo(l,p),g.length>0&&(l.i=null,l.g.set(zn(l,p),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=Mn(g);g=Yo(this,g);for(let j=0;j<g.length;j++){let Z=M;g[j]!==""&&(Z+="="+Mn(g[j])),l.push(Z)}}return this.i=l.join("&")};function Jo(l){const p=new be;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function zn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Ps(l,p){p&&!l.j&&(jn(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(Qo(this,E),Xo(this,M,g))},l)),l.j=p}function Bn(l,p){const g=new zr;if(h.Image){const E=new Image;E.onload=w(Rt,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(Rt,g,"TestLoadImage: error",!1,p,E),E.onabort=w(Rt,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(Rt,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function $n(l,p){const g=new zr,E=new AbortController,M=setTimeout(()=>{E.abort(),Rt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Rt(g,"TestPingServer: ok",!0,p):Rt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rt(g,"TestPingServer: error",!1,p)})}function Rt(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function qi(){this.g=new Oi}function fr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(fr,Mr),fr.prototype.g=function(){return new nn(this.i,this.h)};function nn(l,p){ct.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(nn,ct),i=nn.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function wl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Hr(this):In(this),this.readyState==3&&wl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Hr(this))},i.Na=function(l){this.g&&(this.response=l,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,In(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Tl(l){let p="";return de(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function xs(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Tl(g),typeof l=="string"?g!=null&&Mn(g):je(l,p,g))}function qe(l){ct.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(qe,ct);var Il=/^https?$/i,Vc=["POST","PUT"];i=qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():pl.g(),this.g.onreadystatechange=D(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){Wr(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Vc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of g)this.g.setRequestHeader(j,Z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){Wr(this,j)}};function Wr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Gr(l),mr(l)}function Gr(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),mr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?pr(this):this.Xa())},i.Xa=function(){pr(this)};function pr(l){if(l.h&&typeof u<"u"){if(l.v&&qn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),qn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=j===0){let Z=String(l.D).match(El)[1]||null;!Z&&h.self&&h.self.location&&(Z=h.self.location.protocol.slice(0,-1)),E=!Il.test(Z?Z.toLowerCase():"")}g=E}if(g)st(l,"complete"),st(l,"success");else{l.o=6;try{var M=qn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Gr(l)}}finally{mr(l)}}}}function mr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||st(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return qn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ul(p)}};function Sl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(l){const p={};l=(l.g&&qn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=Ss(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[M]||[];p[M]=j,j.push(g)}ne(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ns(l){this.za=0,this.i=[],this.j=new zr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hn("baseRetryDelayMs",5e3,l),this.Za=Hn("retryDelaySeedMs",1e4,l),this.Ta=Hn("forwardChannelMaxRetries",2,l),this.va=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Cs(l&&l.concurrentRequestLimit),this.Ba=new qi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ns.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){rt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=ta(this,null,this.W),gr(this)};function Ds(l){if(Vs(l),l.I==3){var p=l.V++,g=dn(l.J);if(je(g,"SID",l.M),je(g,"RID",p),je(g,"TYPE","terminate"),Wn(l,g),p=new hn(l,l.j,p),p.M=2,p.A=dr(dn(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Cl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),bi(p)}Gi(l)}function rn(l){l.g&&(Wi(l),l.g.cancel(),l.g=null)}function Vs(l){rn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Os(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function gr(l){if(!$o(l.h)&&!l.m){l.m=!0;var p=l.Ea;$e||I(),Ne||($e(),Ne=!0),N.add(p,l),l.D=0}}function Al(l,p){return Fi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=jr(_(l.Ea,l,p),bs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new hn(this,this.j,l);let j=this.o;if(this.U&&(j?(j=O(j),Se(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=ea(this,M,p),g=dn(this.J),je(g,"RID",l),je(g,"CVER",22),this.G&&je(g,"X-HTTP-Session-Id",this.G),Wn(this,g),j&&(this.R?p="headers="+Mn(Tl(j))+"&"+p:this.u&&xs(g,this.u,j)),Rs(this.h,M),this.Ra&&je(g,"TYPE","init"),this.S?(je(g,"$req",p),je(g,"SID","null"),M.U=!0,Tn(M,g,null)):Tn(M,g,p),this.I=2}}else this.I==3&&(l?Hi(this,l):this.i.length==0||$o(this.h)||Hi(this))};function Hi(l,p){var g;p?g=p.l:g=l.V++;const E=dn(l.J);je(E,"SID",l.M),je(E,"RID",g),je(E,"AID",l.K),Wn(l,E),l.u&&l.o&&xs(E,l.u,l.o),g=new hn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ea(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Rs(l.h,g),Tn(g,E,p)}function Wn(l,p){l.H&&de(l.H,function(g,E){je(p,E,g)}),l.l&&de({},function(g,E){je(p,E,g)})}function ea(l,p,g){g=Math.min(l.i.length,g);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ae=-1;for(;;){const ot=["count="+g];Ae==-1?g>0?(Ae=M[0].g,ot.push("ofs="+Ae)):Ae=0:ot.push("ofs="+Ae);let Be=!0;for(let ht=0;ht<g;ht++){var j=M[ht].g;const on=M[ht].map;if(j-=Ae,j<0)Ae=Math.max(0,M[ht].g-100),Be=!1;else try{j="req"+j+"_"||"";try{var Z=on instanceof Map?on:Object.entries(on);for(const[yr,Kn]of Z){let Qn=Kn;m(Kn)&&(Qn=br(Kn)),ot.push(j+yr+"="+encodeURIComponent(Qn))}}catch(yr){throw ot.push(j+"type="+encodeURIComponent("_badmap")),yr}}catch{E&&E(on)}}if(Be){Z=ot.join("&");break e}}Z=void 0}return l=l.i.splice(0,g),p.G=l,Z}function Lt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;$e||I(),Ne||($e(),Ne=!0),N.add(p,l),l.A=0}}function Gn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=jr(_(l.Da,l),bs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Kr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=jr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),rn(this),Kr(this))};function Wi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Kr(l){l.g=new hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=dn(l.na);je(p,"RID","rpc"),je(p,"SID",l.M),je(p,"AID",l.K),je(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&je(p,"TO",l.ia),je(p,"TYPE","xmlhttp"),Wn(l,p),l.u&&l.o&&xs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=dr(dn(p)),g.u=null,g.R=!0,zo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,rn(this),Gn(this),rt(19))};function Os(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ls(l,p){var g=null;if(l.g==p){Os(l),Wi(l),l.g=null;var E=2}else if(qo(l.h,p))g=p.G,Ui(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=Ur(),st(E,new Uo(E,g)),gr(l)}else Lt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Al(l,p)||E==2&&Gn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:sn(l,5);break;case 4:sn(l,10);break;case 3:sn(l,6);break;default:sn(l,2)}}}function bs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function sn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),E=l.Ua;const M=!E;E=new Fn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ji(E,"https"),dr(E),M?Bn(E.toString(),g):$n(E.toString(),g)}else rt(2);l.I=0,l.l&&l.l.pa(p),Gi(l),Vs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Gi(l){if(l.I=0,l.ja=[],l.l){const p=en(l.h);(p.length!=0||l.i.length!=0)&&(J(l.ja,p),J(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function ta(l,p,g){var E=g instanceof Fn?dn(g):new Fn(g);if(E.g!="")p&&(E.g=p+"."+E.g),Un(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Fn(null);E&&ji(j,E),p&&(j.g=p),M&&Un(j,M),g&&(j.h=g),E=j}return g=l.G,p=l.wa,g&&p&&je(E,g,p),je(E,"VER",l.ka),Wn(l,E),E}function Cl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new fr({ab:g})):new qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rl(){}i=Rl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ms(){}Ms.prototype.g=function(l,p){return new kt(l,p)};function kt(l,p){ct.call(this),this.g=new Ns(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Qr(this)}A(kt,ct),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ds(this.g)},kt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=br(l),l=g);p.i.push(new Nc(p.Ya++,l)),p.I==3&&gr(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ds(this.g),delete this.g,kt.Z.N.call(this)};function kl(l){ws.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(kl,ws);function Pl(){Fo.call(this),this.status=1}A(Pl,Fo);function Qr(l){this.g=l}A(Qr,Rl),Qr.prototype.ra=function(){st(this.g,"a")},Qr.prototype.qa=function(l){st(this.g,new kl(l))},Qr.prototype.pa=function(l){st(this.g,new Pl)},Qr.prototype.oa=function(){st(this.g,"b")},Ms.prototype.createWebChannel=Ms.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,s_=function(){return new Ms},i_=function(){return Ur()},r_=wn,Sd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Br.NO_ERROR=0,Br.TIMEOUT=8,Br.HTTP_ERROR=6,bu=Br,$r.COMPLETE="complete",n_=$r,cl.EventType=Fr,Fr.OPEN="a",Fr.CLOSE="b",Fr.ERROR="c",Fr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Na=cl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,t_=qe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore",wg="4.9.3";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let Ro="12.7.0";/**
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
 */const hs=new Gd("@firebase/firestore");function so(){return hs.logLevel}function oe(i,...e){if(hs.logLevel<=Ve.DEBUG){const t=e.map(Yd);hs.debug(`Firestore (${Ro}): ${i}`,...t)}}function Pr(i,...e){if(hs.logLevel<=Ve.ERROR){const t=e.map(Yd);hs.error(`Firestore (${Ro}): ${i}`,...t)}}function _o(i,...e){if(hs.logLevel<=Ve.WARN){const t=e.map(Yd);hs.warn(`Firestore (${Ro}): ${i}`,...t)}}function Yd(i){if(typeof i=="string")return i;try{/**
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
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,o_(i,s,t)}function o_(i,e,t){let s=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Pr(s),new Error(s)}function ze(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||o_(e,o,s)}function Ce(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ei{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class a_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class ST{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class AT{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ei,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ei)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new a_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class CT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new CT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Tg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function PT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=PT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function Ad(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return hd(o)===hd(u)?Oe(o,u):hd(o)?1:-1}return Oe(i.length,e.length)}const xT=55296,NT=57343;function hd(i){const e=i.charCodeAt(0);return e>=xT&&e<=NT}function vo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Ig="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=er.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Oe(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),o=er.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?er.extractNumericId(e).compare(er.extractNumericId(t)):Ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vi.fromString(e.substring(4,e.length-2))}}class Ge extends er{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends er{construct(e,t,s){return new Dt(e,t,s)}static isValidIdentifier(e){return DT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ig}static keyField(){return new Dt([Ig])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
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
 */function l_(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function VT(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Sg(i){if(!fe.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ag(i){if(fe.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function u_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function dc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function ds(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dc(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function mt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ja(i,e){if(!u_(i))throw new ie($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ie($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Cg=-62135596800,Rg=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Rg);return new Xe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Cg)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ja(e,Xe._jsonSchema))return new Xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Xe._jsonSchemaVersion="firestore/timestamp/1.0",Xe._jsonSchema={type:mt("string",Xe._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
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
 */const za=-1;function OT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new Xe(t+1,0):new Xe(t,s));return new Ii(o,fe.empty(),e)}function LT(i){return new Ii(i.readTime,i.key,za)}class Ii{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ii(Ie.min(),fe.empty(),za)}static max(){return new Ii(Ie.max(),fe.empty(),za)}}function bT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
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
 */const MT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ko(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==MT)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function UT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Po(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class fc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fc.ce=-1;/**
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
 */const Jd=-1;function pc(i){return i==null}function Ku(i){return i===0&&1/i==-1/0}function jT(i){return typeof i=="number"&&Number.isInteger(i)&&!Ku(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const c_="";function zT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=kg(e)),e=BT(i.get(t),e);return kg(e)}function BT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case c_:t+="";break;default:t+=u}}return t}function kg(i){return i+c_+""}/**
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
 */function Pg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Pi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function h_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Nt.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Nt.RED,this.left=o??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Nt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Nt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Nt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xg(this.data.getIterator())}getIteratorFrom(e){return new xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new vt(Dt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class d_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new d_("Invalid base64 string: "+u):u}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const $T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Si(i){if(ze(!!i,39018),typeof i=="string"){let e=0;const t=$T.exec(i);if(ze(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(i.seconds),nanos:lt(i.nanos)}}function lt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ai(i){return typeof i=="string"?Vt.fromBase64String(i):Vt.fromUint8Array(i)}/**
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
 */const f_="server_timestamp",p_="__type__",m_="__previous_value__",g_="__local_write_time__";function Zd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[p_])==null?void 0:s.stringValue)===f_}function mc(i){const e=i.mapValue.fields[m_];return Zd(e)?mc(e):e}function Ba(i){const e=Si(i.mapValue.fields[g_].timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class qT{constructor(e,t,s,o,u,h,m,y,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=w}}const Qu="(default)";class $a{constructor(e,t){this.projectId=e,this.database=t||Qu}static empty(){return new $a("","")}get isDefaultDatabase(){return this.database===Qu}isEqual(e){return e instanceof $a&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const y_="__type__",HT="__max__",ku={mapValue:{}},__="__vector__",Yu="value";function Ci(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Zd(i)?4:GT(i)?9007199254740991:WT(i)?10:11:_e(28295,{value:i})}function ar(i,e){if(i===e)return!0;const t=Ci(i);if(t!==Ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ba(i).isEqual(Ba(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Si(o.timestampValue),m=Si(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ai(o.bytesValue).isEqual(Ai(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return lt(o.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return lt(o.integerValue)===lt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=lt(o.doubleValue),m=lt(u.doubleValue);return h===m?Ku(h)===Ku(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return vo(i.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Pg(h)!==Pg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ar(h[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function qa(i,e){return(i.values||[]).find((t=>ar(t,e)))!==void 0}function Eo(i,e){if(i===e)return 0;const t=Ci(i),s=Ci(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=lt(u.integerValue||u.doubleValue),y=lt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Ng(i.timestampValue,e.timestampValue);case 4:return Ng(Ba(i),Ba(e));case 5:return Ad(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ai(u),y=Ai(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=Oe(m[_],y[_]);if(w!==0)return w}return Oe(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Oe(lt(u.latitude),lt(h.latitude));return m!==0?m:Oe(lt(u.longitude),lt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Dg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var D,B,J,Y;const m=u.fields||{},y=h.fields||{},_=(D=m[Yu])==null?void 0:D.arrayValue,w=(B=y[Yu])==null?void 0:B.arrayValue,A=Oe(((J=_==null?void 0:_.values)==null?void 0:J.length)||0,((Y=w==null?void 0:w.values)==null?void 0:Y.length)||0);return A!==0?A:Dg(_,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===ku.mapValue&&h===ku.mapValue)return 0;if(u===ku.mapValue)return 1;if(h===ku.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let A=0;A<y.length&&A<w.length;++A){const D=Ad(y[A],w[A]);if(D!==0)return D;const B=Eo(m[y[A]],_[w[A]]);if(B!==0)return B}return Oe(y.length,w.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Ng(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=Si(i),s=Si(e),o=Oe(t.seconds,s.seconds);return o!==0?o:Oe(t.nanos,s.nanos)}function Dg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Eo(t[o],s[o]);if(u)return u}return Oe(t.length,s.length)}function wo(i){return Cd(i)}function Cd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Si(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ai(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Cd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Cd(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function Mu(i){switch(Ci(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mc(i);return e?16+Mu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ai(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Mu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Pi(s.fields,((u,h)=>{o+=u.length+Mu(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function Vg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Rd(i){return!!i&&"integerValue"in i}function ef(i){return!!i&&"arrayValue"in i}function Og(i){return!!i&&"nullValue"in i}function Lg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Fu(i){return!!i&&"mapValue"in i}function WT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[y_])==null?void 0:s.stringValue)===__}function La(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Pi(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=La(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=La(i.arrayValue.values[t]);return e}return{...i}}function GT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===HT}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(t)}setAll(e){let t=Dt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=La(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Pi(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Zt(La(this.value))}}function v_(i){const e=[];return Pi(i.fields,((t,s)=>{const o=new Dt([t]);if(Fu(s)){const u=v_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new cn(e)}/**
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
 */class Bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xu{constructor(e,t){this.position=e,this.inclusive=t}}function bg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=Eo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Mg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ar(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ha{constructor(e,t="asc"){this.field=e,this.dir=t}}function KT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class E_{}class pt extends E_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new YT(e,t,s):t==="array-contains"?new ZT(e,s):t==="in"?new eI(e,s):t==="not-in"?new tI(e,s):t==="array-contains-any"?new nI(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new XT(e,s):new JT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Eo(t,this.value)):t!==null&&Ci(this.value)===Ci(t)&&this.matchesComparison(Eo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends E_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Vn(e,t)}matches(e){return w_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function w_(i){return i.op==="and"}function T_(i){return QT(i)&&w_(i)}function QT(i){for(const e of i.filters)if(e instanceof Vn)return!1;return!0}function kd(i){if(i instanceof pt)return i.field.canonicalString()+i.op.toString()+wo(i.value);if(T_(i))return i.filters.map((e=>kd(e))).join(",");{const e=i.filters.map((t=>kd(t))).join(",");return`${i.op}(${e})`}}function I_(i,e){return i instanceof pt?(function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)})(i,e):i instanceof Vn?(function(s,o){return o instanceof Vn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&I_(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function S_(i){return i instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${wo(t.value)}`})(i):i instanceof Vn?(function(t){return t.op.toString()+" {"+t.getFilters().map(S_).join(" ,")+"}"})(i):"Filter"}class YT extends pt{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class XT extends pt{constructor(e,t){super(e,"in",t),this.keys=A_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class JT extends pt{constructor(e,t){super(e,"not-in",t),this.keys=A_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function A_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class ZT extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ef(t)&&qa(t.arrayValue,this.value)}}class eI extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qa(this.value.arrayValue,t)}}class tI extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qa(this.value.arrayValue,t)}}class nI extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>qa(this.value.arrayValue,s)))}}/**
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
 */class rI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Fg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new rI(i,e,t,s,o,u,h)}function tf(i){const e=Ce(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>wo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>wo(s))).join(",")),e.Te=t}return e.Te}function nf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!KT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!I_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Mg(i.startAt,e.startAt)&&Mg(i.endAt,e.endAt)}function Pd(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class xo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iI(i,e,t,s,o,u,h,m){return new xo(i,e,t,s,o,u,h,m)}function C_(i){return new xo(i)}function Ug(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function R_(i){return i.collectionGroup!==null}function ba(i){const e=Ce(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Dt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ha(u,s))})),t.has(Dt.keyField().canonicalString())||e.Ie.push(new Ha(Dt.keyField(),s))}return e.Ie}function tr(i){const e=Ce(i);return e.Ee||(e.Ee=sI(e,ba(i))),e.Ee}function sI(i,e){if(i.limitType==="F")return Fg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ha(o.field,u)}));const t=i.endAt?new Xu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Xu(i.startAt.position,i.startAt.inclusive):null;return Fg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function xd(i,e){const t=i.filters.concat([e]);return new xo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Nd(i,e,t){return new xo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function gc(i,e){return nf(tr(i),tr(e))&&i.limitType===e.limitType}function k_(i){return`${tf(tr(i))}|lt:${i.limitType}`}function oo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>S_(o))).join(", ")}]`),pc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>wo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>wo(o))).join(",")),`Target(${s})`})(tr(i))}; limitType=${i.limitType})`}function yc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of ba(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=bg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,ba(s),o)||s.endAt&&!(function(h,m,y){const _=bg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,ba(s),o))})(i,e)}function oI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function P_(i){return(e,t)=>{let s=!1;for(const o of ba(i)){const u=aI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function aI(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?Eo(y,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
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
 */class ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return h_(this.inner)}size(){return this.innerSize}}/**
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
 */const lI=new nt(fe.comparator);function xr(){return lI}const x_=new nt(fe.comparator);function Da(...i){let e=x_;for(const t of i)e=e.insert(t.key,t);return e}function N_(i){let e=x_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ls(){return Ma()}function D_(){return Ma()}function Ma(){return new ms((i=>i.toString()),((i,e)=>i.isEqual(e)))}const uI=new nt(fe.comparator),cI=new vt(fe.comparator);function Le(...i){let e=cI;for(const t of i)e=e.add(t);return e}const hI=new vt(Oe);function dI(){return hI}/**
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
 */function rf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ku(e)?"-0":e}}function V_(i){return{integerValue:""+i}}function fI(i,e){return jT(e)?V_(e):rf(i,e)}/**
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
 */class _c{constructor(){this._=void 0}}function pI(i,e,t){return i instanceof Ju?(function(o,u){const h={fields:{[p_]:{stringValue:f_},[g_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Zd(u)&&(u=mc(u)),u&&(h.fields[m_]=u),{mapValue:h}})(t,e):i instanceof Wa?L_(i,e):i instanceof Ga?b_(i,e):(function(o,u){const h=O_(o,u),m=jg(h)+jg(o.Ae);return Rd(h)&&Rd(o.Ae)?V_(m):rf(o.serializer,m)})(i,e)}function mI(i,e,t){return i instanceof Wa?L_(i,e):i instanceof Ga?b_(i,e):t}function O_(i,e){return i instanceof Zu?(function(s){return Rd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Ju extends _c{}class Wa extends _c{constructor(e){super(),this.elements=e}}function L_(i,e){const t=M_(e);for(const s of i.elements)t.some((o=>ar(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ga extends _c{constructor(e){super(),this.elements=e}}function b_(i,e){let t=M_(e);for(const s of i.elements)t=t.filter((o=>!ar(o,s)));return{arrayValue:{values:t}}}class Zu extends _c{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function jg(i){return lt(i.integerValue||i.doubleValue)}function M_(i){return ef(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function gI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Wa&&o instanceof Wa||s instanceof Ga&&o instanceof Ga?vo(s.elements,o.elements,ar):s instanceof Zu&&o instanceof Zu?ar(s.Ae,o.Ae):s instanceof Ju&&o instanceof Ju})(i.transform,e.transform)}class yI{constructor(e,t){this.version=e,this.transformResults=t}}class Dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class vc{}function F_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new sf(i.key,Dn.none()):new Za(i.key,i.data,Dn.none());{const t=i.data,s=Zt.empty();let o=new vt(Dt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new xi(i.key,s,new cn(o.toArray()),Dn.none())}}function _I(i,e,t){i instanceof Za?(function(o,u,h){const m=o.value.clone(),y=Bg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof xi?(function(o,u,h){if(!Uu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Bg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(U_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Fa(i,e,t,s){return i instanceof Za?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const _=u.value.clone(),w=$g(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof xi?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const _=$g(u.fieldTransforms,y,h),w=h.data;return w.setAll(U_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Uu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function vI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=O_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function zg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&vo(s,o,((u,h)=>gI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Za extends vc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xi extends vc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function U_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Bg(i,e,t){const s=new Map;ze(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,mI(h,m,t[o]))}return s}function $g(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,pI(u,h,e))}return s}class sf extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EI extends vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&_I(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=D_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=F_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Ie.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Le())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,((t,s)=>zg(t,s)))&&vo(this.baseMutations,e.baseMutations,((t,s)=>zg(t,s)))}}class of{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return uI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new of(e,t,s,o)}}/**
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
 */class TI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class II{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Me;function SI(i){switch(i){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function j_(i){if(i===void 0)return Pr("GRPC error has no .code"),$.UNKNOWN;switch(i){case ft.OK:return $.OK;case ft.CANCELLED:return $.CANCELLED;case ft.UNKNOWN:return $.UNKNOWN;case ft.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ft.INTERNAL:return $.INTERNAL;case ft.UNAVAILABLE:return $.UNAVAILABLE;case ft.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ft.NOT_FOUND:return $.NOT_FOUND;case ft.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ft.ABORTED:return $.ABORTED;case ft.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ft.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:i})}}(Me=ft||(ft={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AI(){return new TextEncoder}/**
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
 */const CI=new vi([4294967295,4294967295],0);function qg(i){const e=AI().encode(i),t=new e_;return t.update(e),new Uint8Array(t.digest())}function Hg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vi([t,s],0),new vi([o,u],0)]}class af{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Va(`Invalid padding: ${t}`);if(s<0)throw new Va(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Va(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vi.fromNumber(s)));return o.compare(CI)===1&&(o=new vi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=qg(e),[s,o]=Hg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new af(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=qg(e),[s,o]=Hg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ec(Ie.min(),o,new nt(Oe),xr(),Le())}}class el{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new el(s,t,Le(),Le(),Le())}}/**
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
 */class ju{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class z_{constructor(e,t){this.targetId=e,this.Ce=t}}class B_{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Wg{constructor(){this.ve=0,this.Fe=Gg(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Le(),t=Le(),s=Le();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new el(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Gg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class RI{constructor(e){this.Ge=e,this.ze=new Map,this.je=xr(),this.Je=Pu(),this.He=Pu(),this.Ye=new nt(Oe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new fe(u.path);this.et(t,h,Bt.newNoDocument(h,Ie.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ai(s).toUint8Array()}catch(y){if(y instanceof d_)return _o("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new af(h,o,u)}catch(y){return _o(y instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Pd(m.target)){const y=new fe(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Bt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Le();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Ec(e,t,this.Ye,this.je,s);return this.je=xr(),this.Je=Pu(),this.He=Pu(),this.Ye=new nt(Oe),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Wg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(Oe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(Oe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new nt(fe.comparator)}function Gg(){return new nt(fe.comparator)}const kI={asc:"ASCENDING",desc:"DESCENDING"},PI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xI={and:"AND",or:"OR"};class NI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dd(i,e){return i.useProto3Json||pc(e)?e:{value:e}}function ec(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function DI(i,e){return ec(i,e.toTimestamp())}function nr(i){return ze(!!i,49232),Ie.fromTimestamp((function(t){const s=Si(t);return new Xe(s.seconds,s.nanos)})(i))}function lf(i,e){return Vd(i,e).canonicalString()}function Vd(i,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function q_(i){const e=Ge.fromString(i);return ze(Q_(e),10190,{key:e.toString()}),e}function Od(i,e){return lf(i.databaseId,e.path)}function dd(i,e){const t=q_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(W_(t))}function H_(i,e){return lf(i.databaseId,e)}function VI(i){const e=q_(i);return e.length===4?Ge.emptyPath():W_(e)}function Ld(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function W_(i){return ze(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Kg(i,e,t){return{name:Od(i,e),fields:t.value.mapValue.fields}}function OI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(ze(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?$.UNKNOWN:j_(_.code);return new ie(w,_.message||"")})(h);t=new B_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=dd(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Ie.min(),m=new Zt({mapValue:{fields:s.document.fields}}),y=Bt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new ju(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=dd(i,s.document),u=s.readTime?nr(s.readTime):Ie.min(),h=Bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new ju([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=dd(i,s.document),u=s.removedTargetIds||[];t=new ju([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new II(o,u),m=s.targetId;t=new z_(m,h)}}return t}function LI(i,e){let t;if(e instanceof Za)t={update:Kg(i,e.key,e.value)};else if(e instanceof sf)t={delete:Od(i,e.key)};else if(e instanceof xi)t={update:Kg(i,e.key,e.data),updateMask:qI(e.fieldMask)};else{if(!(e instanceof EI))return _e(16599,{Vt:e.type});t={verify:Od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Ju)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Wa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ga)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Zu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:DI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function bI(i,e){return i&&i.length>0?(ze(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Ie.min())&&(h=nr(u)),new yI(h,o.transformResults||[])})(t,e)))):[]}function MI(i,e){return{documents:[H_(i,e.path)]}}function FI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=H_(i,o);const u=(function(_){if(_.length!==0)return K_(Vn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(D){return{field:ao(D.field),direction:zI(D.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Dd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function UI(i){let e=VI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const D=G_(A);return D instanceof Vn&&T_(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((D=>(function(J){return new Ha(lo(J.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let D;return D=typeof A=="object"?A.value:A,pc(D)?null:D})(t.limit));let y=null;t.startAt&&(y=(function(A){const D=!!A.before,B=A.values||[];return new Xu(B,D)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const D=!A.before,B=A.values||[];return new Xu(B,D)})(t.endAt)),iI(e,o,h,u,m,"F",y,_)}function jI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function G_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=lo(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=lo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=lo(t.unaryFilter.field);return pt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=lo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return pt.create(lo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Vn.create(t.compositeFilter.filters.map((s=>G_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function zI(i){return kI[i]}function BI(i){return PI[i]}function $I(i){return xI[i]}function ao(i){return{fieldPath:i.canonicalString()}}function lo(i){return Dt.fromServerFormat(i.fieldPath)}function K_(i){return i instanceof pt?(function(t){if(t.op==="=="){if(Lg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NAN"}};if(Og(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NAN"}};if(Og(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(t.field),op:BI(t.op),value:t.value}}})(i):i instanceof Vn?(function(t){const s=t.getFilters().map((o=>K_(o)));return s.length===1?s[0]:{compositeFilter:{op:$I(t.op),filters:s}}})(i):_e(54877,{filter:i})}function qI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Q_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class mi{constructor(e,t,s,o,u=Ie.min(),h=Ie.min(),m=Vt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HI{constructor(e){this.yt=e}}function WI(i){const e=UI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
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
 */class GI{constructor(){this.Cn=new KI}addToCollectionParentIndex(e,t){return this.Cn.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(Ii.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class KI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(Ge.comparator)).toArray()}}/**
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
 */const Qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Y_=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(Y_,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */const Yg="LruGarbageCollector",QI=1048576;function Xg([i,e],[t,s]){const o=Oe(i,t);return o===0?Oe(e,s):o}class YI{constructor(e){this.Ir=e,this.buffer=new vt(Xg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Xg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class XI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(Yg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Po(t)?oe(Yg,"Ignoring IndexedDB error during garbage collection: ",t):await ko(t)}await this.Vr(3e5)}))}}class JI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return H.resolve(fc.ce);const s=new YI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Qg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(_=Date.now(),so()<=Ve.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function ZI(i,e){return new JI(i,e)}/**
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
 */class e1{constructor(){this.changes=new ms((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class t1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class n1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Fa(s.mutation,o,cn.empty(),Xe.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Le()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Le()){const o=ls();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Da();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ls();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Le())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=xr();const h=Ma(),m=(function(){return Ma()})();return t.forEach(((y,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof xi)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Fa(w.mutation,_,w.mutation.getFieldMask(),Xe.now())):h.set(_.key,cn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new t1(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Ma();let o=new nt(((h,m)=>h-m)),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||cn.empty();w=m.applyToLocalView(_,w),s.set(y,w);const A=(o.get(m.batchId)||Le()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,A=D_();w.forEach((D=>{if(!u.has(D)){const B=F_(t.get(D),s.get(D));B!==null&&A.set(D,B),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):R_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(ls());let m=za,y=u;return h.next((_=>H.forEach(_,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((D=>{y=y.insert(w,D)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Le()))).next((w=>({batchId:m,changes:N_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Da();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Da();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(y=>{const _=(function(A,D){return new xo(D,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((A,D)=>{h=h.insert(A,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Bt.newInvalidDocument(w)))}));let m=Da();return h.forEach(((y,_)=>{const w=u.get(y);w!==void 0&&Fa(w.mutation,_,cn.empty(),Xe.now()),yc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
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
 */class r1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return H.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:WI(o.bundledQuery),readTime:nr(o.readTime)}})(t)),H.resolve()}}/**
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
 */class i1{constructor(){this.overlays=new nt(fe.comparator),this.qr=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ls();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=ls(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new nt(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=ls(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=ls(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return H.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new TI(t,s));let u=this.qr.get(t);u===void 0&&(u=Le(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class s1{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
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
 */class uf{constructor(){this.Qr=new vt(It.$r),this.Ur=new vt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new fe(new Ge([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new fe(new Ge([])),s=new It(t,e),o=new It(t,e+1);let u=Le();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return fe.comparator(e.key,t.key)||Oe(e.Yr,t.Yr)}static Kr(e,t){return Oe(e.Yr,t.Yr)||fe.comparator(e.key,t.key)}}/**
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
 */class o1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(It.$r)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new wI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?Jd:this.tr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(Oe);return t.forEach((o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),H.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new It(new fe(u),0);let m=new vt(Oe);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),H.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return H.forEach(t.mutations,(o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class a1{constructor(e){this.ri=e,this.docs=(function(){return new nt(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=xr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Bt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=xr();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||bT(LT(w),s)<=0||(o.has(w.key)||yc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ii(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new l1(this)}getSize(e){return H.resolve(this.size)}}class l1 extends e1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class u1{constructor(e){this.persistence=e,this.si=new ms((t=>tf(t)),nf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.oi=0,this._i=new uf,this.targetCount=0,this.ai=To.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),H.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new To(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Pr(t),H.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this._i.containsKey(t))}}/**
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
 */class X_{constructor(e,t){this.ui={},this.overlays={},this.ci=new fc(0),this.li=!1,this.li=!0,this.hi=new s1,this.referenceDelegate=e(this),this.Pi=new u1(this),this.indexManager=new GI,this.remoteDocumentCache=(function(o){return new a1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new HI(t),this.Ii=new r1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new o1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new c1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return H.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class c1 extends FT{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.Ri=new uf,this.Vi=null}static mi(e){return new cf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),H.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.fi,(s=>{const o=fe.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return H.or([()=>H.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class tc{constructor(e,t){this.persistence=e,this.pi=new ms((s=>zT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=ZI(this,t)}static mi(e,t){return new tc(e,t)}Ei(){}di(e){return H.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return H.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?H.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Ie.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),H.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mu(e.data.value)),t}br(e,t,s){return H.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return H.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new hf(e,t.fromCache,s,o)}}/**
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
 */class h1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class d1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rw()?8:UT($t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new h1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(so()<=Ve.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),H.resolve()):(so()<=Ve.DEBUG&&oe("QueryEngine","Query:",oo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(so()<=Ve.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):H.resolve())}ys(e,t){if(Ug(t))return H.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Nd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Le(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Nd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return Ug(t)||o.isEqual(Ie.min())?H.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?H.resolve(null):(so()<=Ve.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(t)),this.vs(e,h,t,OT(o,za)).next((m=>m)))}))}Ds(e,t){let s=new vt(P_(e));return t.forEach(((o,u)=>{yc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return so()<=Ve.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",oo(t)),this.ps.getDocumentsMatchingQuery(e,t,Ii.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const df="LocalStore",f1=3e8;class p1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new nt(Oe),this.xs=new ms((u=>tf(u)),nf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function m1(i,e,t,s){return new p1(i,e,t,s)}async function J_(i,e){const t=Ce(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Le();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function g1(i,e){const t=Ce(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,w){const A=_.batch,D=A.keys();let B=H.resolve();return D.forEach((J=>{B=B.next((()=>w.getEntry(y,J))).next((Y=>{const q=_.docVersions.get(J);ze(q!==null,48541),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,_),Y.isValidDocument()&&(Y.setReadTime(_.commitVersion),w.addEntry(Y)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Le();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Z_(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function y1(i,e){const t=Ce(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((w,A)=>{const D=o.get(A);if(!D)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.Pi.addMatchingKeys(u,w.addedDocuments,A))));let B=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?B=B.withResumeToken(Vt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(A,B),(function(Y,q,Te){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=f1?!0:Te.addedDocuments.size+Te.modifiedDocuments.size+Te.removedDocuments.size>0})(D,B,w)&&m.push(t.Pi.updateTargetData(u,B))}));let y=xr(),_=Le();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(_1(u,h,e.documentUpdates).next((w=>{y=w.ks,_=w.qs}))),!s.isEqual(Ie.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next((A=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function _1(i,e,t){let s=Le(),o=Le();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=xr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ie.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):oe(df,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function v1(i,e){const t=Ce(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Jd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function E1(i,e){const t=Ce(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new mi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function bd(i,e,t){const s=Ce(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Po(h))throw h;oe(df,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Jg(i,e,t){const s=Ce(i);let o=Ie.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,w){const A=Ce(y),D=A.xs.get(w);return D!==void 0?H.resolve(A.Ms.get(D)):A.Pi.getTargetData(_,w)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?u:Le()))).next((m=>(w1(s,oI(e),m),{documents:m,Qs:u})))))}function w1(i,e,t){let s=i.Os.get(e)||Ie.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Zg{constructor(){this.activeTargetIds=dI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T1{constructor(){this.Mo=new Zg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Zg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class I1{Oo(e){}shutdown(){}}/**
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
 */const ey="ConnectivityMonitor";class ty{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){oe(ey,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){oe(ey,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xu=null;function Md(){return xu===null?xu=(function(){return 268435456+Math.round(2147483648*Math.random())})():xu++,"0x"+xu.toString(16)}/**
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
 */const fd="RestConnection",S1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Qu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Md(),m=this.zo(e,t.toUriEncodedString());oe(fd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),w=Ao(_);return this.Jo(e,m,y,s,w).then((A=>(oe(fd,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw _o(fd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ro})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=S1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class C1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const jt="WebChannelConnection";class R1 extends A1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Md();return new Promise(((m,y)=>{const _=new t_;_.setWithCredentials(!0),_.listenOnce(n_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case bu.NO_ERROR:const A=_.getResponseJson();oe(jt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case bu.TIMEOUT:oe(jt,`RPC '${e}' ${h} timed out`),y(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const D=_.getStatus();if(oe(jt,`RPC '${e}' ${h} failed with status:`,D,"response text:",_.getResponseText()),D>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const J=B==null?void 0:B.error;if(J&&J.status&&J.message){const Y=(function(Te){const ge=Te.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(ge)>=0?ge:$.UNKNOWN})(J.status);y(new ie(Y,J.message))}else y(new ie($.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ie($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{oe(jt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);oe(jt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Md(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=s_(),m=i_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");oe(jt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const A=h.createWebChannel(w,y);this.I_(A);let D=!1,B=!1;const J=new C1({Yo:q=>{B?oe(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(D||(oe(jt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),D=!0),oe(jt,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Zo:()=>A.close()}),Y=(q,Te,ge)=>{q.listen(Te,(we=>{try{ge(we)}catch(xe){setTimeout((()=>{throw xe}),0)}}))};return Y(A,Na.EventType.OPEN,(()=>{B||(oe(jt,`RPC '${e}' stream ${o} transport opened.`),J.o_())})),Y(A,Na.EventType.CLOSE,(()=>{B||(B=!0,oe(jt,`RPC '${e}' stream ${o} transport closed`),J.a_(),this.E_(A))})),Y(A,Na.EventType.ERROR,(q=>{B||(B=!0,_o(jt,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),J.a_(new ie($.UNAVAILABLE,"The operation could not be completed")))})),Y(A,Na.EventType.MESSAGE,(q=>{var Te;if(!B){const ge=q.data[0];ze(!!ge,16349);const we=ge,xe=(we==null?void 0:we.error)||((Te=we[0])==null?void 0:Te.error);if(xe){oe(jt,`RPC '${e}' stream ${o} received error:`,xe);const $e=xe.status;let Ne=(function(R){const P=ft[R];if(P!==void 0)return j_(P)})($e),N=xe.message;Ne===void 0&&(Ne=$.INTERNAL,N="Unknown error status: "+$e+" with message "+xe.message),B=!0,J.a_(new ie(Ne,N)),A.close()}else oe(jt,`RPC '${e}' stream ${o} received:`,ge),J.u_(ge)}})),Y(m,r_.STAT_EVENT,(q=>{q.stat===Sd.PROXY?oe(jt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===Sd.NOPROXY&&oe(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function pd(){return typeof document<"u"?document:null}/**
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
 */function wc(i){return new NI(i,!0)}/**
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
 */class ev{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ny="PersistentStream";class tv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ev(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Pr(t.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(oe(ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class k1 extends tv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=OI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ie.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?nr(h.readTime):Ie.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ld(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Pd(y)?{documents:MI(u,y)}:{query:FI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=$_(u,h.resumeToken);const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Ie.min())>0){m.readTime=ec(u,h.snapshotVersion.toTimestamp());const _=Dd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=jI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ld(this.serializer),t.removeTarget=e,this.q_(t)}}class P1 extends tv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=bI(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ld(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>LI(this.serializer,s)))};this.q_(t)}}/**
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
 */class x1{}class N1 extends x1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Vd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Vd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class D1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fs="RemoteStore";class V1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{gs(this)&&(oe(fs,"Restarting streams for network reachability change."),await(async function(y){const _=Ce(y);_.Ea.add(4),await tl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Tc(_)})(this))}))})),this.Ra=new D1(s,o)}}async function Tc(i){if(gs(i))for(const e of i.da)await e(!0)}async function tl(i){for(const e of i.da)await e(!1)}function nv(i,e){const t=Ce(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),gf(t)?mf(t):No(t).O_()&&pf(t,e))}function ff(i,e){const t=Ce(i),s=No(t);t.Ia.delete(e),s.O_()&&rv(t,e),t.Ia.size===0&&(s.O_()?s.L_():gs(t)&&t.Ra.set("Unknown"))}function pf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(i).Y_(e)}function rv(i,e){i.Va.Ue(e),No(i).Z_(e)}function mf(i){i.Va=new RI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),No(i).start(),i.Ra.ua()}function gf(i){return gs(i)&&!No(i).x_()&&i.Ia.size>0}function gs(i){return Ce(i).Ea.size===0}function iv(i){i.Va=void 0}async function O1(i){i.Ra.set("Online")}async function L1(i){i.Ia.forEach(((e,t)=>{pf(i,e)}))}async function b1(i,e){iv(i),gf(i)?(i.Ra.ha(e),mf(i)):i.Ra.set("Unknown")}async function M1(i,e,t){if(i.Ra.set("Online"),e instanceof B_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){oe(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nc(i,s)}else if(e instanceof ju?i.Va.Ze(e):e instanceof z_?i.Va.st(e):i.Va.tt(e),!t.isEqual(Ie.min()))try{const s=await Z_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),rv(u,y);const A=new mi(w.target,y,_,w.sequenceNumber);pf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){oe(fs,"Failed to raise snapshot:",s),await nc(i,s)}}async function nc(i,e,t){if(!Po(e))throw e;i.Ea.add(1),await tl(i),i.Ra.set("Offline"),t||(t=()=>Z_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{oe(fs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Tc(i)}))}function sv(i,e){return e().catch((t=>nc(i,t,e)))}async function Ic(i){const e=Ce(i),t=Ri(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jd;for(;F1(e);)try{const o=await v1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,U1(e,o)}catch(o){await nc(e,o)}ov(e)&&av(e)}function F1(i){return gs(i)&&i.Ta.length<10}function U1(i,e){i.Ta.push(e);const t=Ri(i);t.O_()&&t.X_&&t.ea(e.mutations)}function ov(i){return gs(i)&&!Ri(i).x_()&&i.Ta.length>0}function av(i){Ri(i).start()}async function j1(i){Ri(i).ra()}async function z1(i){const e=Ri(i);for(const t of i.Ta)e.ea(t.mutations)}async function B1(i,e,t){const s=i.Ta.shift(),o=of.from(s,e,t);await sv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Ic(i)}async function $1(i,e){e&&Ri(i).X_&&await(async function(s,o){if((function(h){return SI(h)&&h!==$.ABORTED})(o.code)){const u=s.Ta.shift();Ri(s).B_(),await sv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ic(s)}})(i,e),ov(i)&&av(i)}async function ry(i,e){const t=Ce(i);t.asyncQueue.verifyOperationInProgress(),oe(fs,"RemoteStore received new credentials");const s=gs(t);t.Ea.add(3),await tl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Tc(t)}async function q1(i,e){const t=Ce(i);e?(t.Ea.delete(2),await Tc(t)):e||(t.Ea.add(2),await tl(t),t.Ra.set("Unknown"))}function No(i){return i.ma||(i.ma=(function(t,s,o){const u=Ce(t);return u.sa(),new k1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:O1.bind(null,i),t_:L1.bind(null,i),r_:b1.bind(null,i),H_:M1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),gf(i)?mf(i):i.Ra.set("Unknown")):(await i.ma.stop(),iv(i))}))),i.ma}function Ri(i){return i.fa||(i.fa=(function(t,s,o){const u=Ce(t);return u.sa(),new P1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:j1.bind(null,i),r_:$1.bind(null,i),ta:z1.bind(null,i),na:B1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await Ic(i)):(await i.fa.stop(),i.Ta.length>0&&(oe(fs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class yf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new yf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(i,e){if(Pr("AsyncQueue",`${e}: ${i}`),Po(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Da(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class iy{constructor(){this.ga=new nt(fe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Io{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Io(e,t,co.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class H1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class W1{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ce(t),u=o.queries;o.queries=sy(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new ie($.ABORTED,"Firestore shutting down"))}}function sy(){return new ms((i=>k_(i)),gc)}async function G1(i,e){const t=Ce(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new H1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=_f(h,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&vf(t)}async function K1(i,e){const t=Ce(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Q1(i,e){const t=Ce(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&vf(t)}function Y1(i,e,t){const s=Ce(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function vf(i){i.Ca.forEach((e=>{e.next()}))}var Fd,oy;(oy=Fd||(Fd={})).Ma="default",oy.Cache="cache";class X1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fd.Cache}}/**
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
 */class lv{constructor(e){this.key=e}}class uv{constructor(e){this.key=e}}class J1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Le(),this.mutatedKeys=Le(),this.eu=P_(e),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new iy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const D=o.get(w),B=yc(this.query,A)?A:null,J=!!D&&this.mutatedKeys.has(D.key),Y=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;D&&B?D.data.isEqual(B.data)?J!==Y&&(s.track({type:3,doc:B}),q=!0):this.su(D,B)||(s.track({type:2,doc:B}),q=!0,(y&&this.eu(B,y)>0||_&&this.eu(B,_)<0)&&(m=!0)):!D&&B?(s.track({type:0,doc:B}),q=!0):D&&!B&&(s.track({type:1,doc:D}),q=!0,(y||_)&&(m=!0)),q&&(B?(h=h.add(B),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(B,J){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:q})}};return Y(B)-Y(J)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new Io(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Le(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new uv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new lv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Le();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Io.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ef="SyncEngine";class Z1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eS{constructor(e){this.key=e,this.hu=!1}}class tS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ms((m=>k_(m)),gc),this.Iu=new Map,this.Eu=new Set,this.du=new nt(fe.comparator),this.Au=new Map,this.Ru=new uf,this.Vu={},this.mu=new Map,this.fu=To.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nS(i,e,t=!0){const s=mv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await cv(s,e,t,!0),o}async function rS(i,e){const t=mv(i);await cv(t,e,!0,!1)}async function cv(i,e,t,s){const o=await E1(i.localStore,tr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await iS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&nv(i.remoteStore,o),m}async function iS(i,e,t,s,o){i.pu=(A,D,B)=>(async function(Y,q,Te,ge){let we=q.view.ru(Te);we.Cs&&(we=await Jg(Y.localStore,q.query,!1).then((({documents:N})=>q.view.ru(N,we))));const xe=ge&&ge.targetChanges.get(q.targetId),$e=ge&&ge.targetMismatches.get(q.targetId)!=null,Ne=q.view.applyChanges(we,Y.isPrimaryClient,xe,$e);return ly(Y,q.targetId,Ne.au),Ne.snapshot})(i,A,D,B);const u=await Jg(i.localStore,e,!0),h=new J1(e,u.Qs),m=h.ru(u.documents),y=el.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);ly(i,t,_.au);const w=new Z1(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function sS(i,e,t){const s=Ce(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!gc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await bd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&ff(s.remoteStore,o.targetId),Ud(s,o.targetId)})).catch(ko)):(Ud(s,o.targetId),await bd(s.localStore,o.targetId,!0))}async function oS(i,e){const t=Ce(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ff(t.remoteStore,s.targetId))}async function aS(i,e,t){const s=pS(i);try{const o=await(function(h,m){const y=Ce(h),_=Xe.now(),w=m.reduce(((B,J)=>B.add(J.key)),Le());let A,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let J=xr(),Y=Le();return y.Ns.getEntries(B,w).next((q=>{J=q,J.forEach(((Te,ge)=>{ge.isValidDocument()||(Y=Y.add(Te))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,J))).next((q=>{A=q;const Te=[];for(const ge of m){const we=vI(ge,A.get(ge.key).overlayedDocument);we!=null&&Te.push(new xi(ge.key,we,v_(we.value.mapValue),Dn.exists(!0)))}return y.mutationQueue.addMutationBatch(B,_,Te,m)})).next((q=>{D=q;const Te=q.applyToLocalDocumentSet(A,Y);return y.documentOverlayCache.saveOverlays(B,q.batchId,Te)}))})).then((()=>({batchId:D.batchId,changes:N_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new nt(Oe)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await nl(s,o.changes),await Ic(s.remoteStore)}catch(o){const u=_f(o,"Failed to persist write");t.reject(u)}}async function hv(i,e){const t=Ce(i);try{const s=await y1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await nl(t,s,e)}catch(s){await ko(s)}}function ay(i,e,t){const s=Ce(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Ce(h);y.onlineState=m;let _=!1;y.queries.forEach(((w,A)=>{for(const D of A.Sa)D.va(m)&&(_=!0)})),_&&vf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lS(i,e,t){const s=Ce(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new nt(fe.comparator);h=h.insert(u,Bt.newNoDocument(u,Ie.min()));const m=Le().add(u),y=new Ec(Ie.min(),new Map,new nt(Oe),h,m);await hv(s,y),s.du=s.du.remove(u),s.Au.delete(e),wf(s)}else await bd(s.localStore,e,!1).then((()=>Ud(s,e,t))).catch(ko)}async function uS(i,e){const t=Ce(i),s=e.batch.batchId;try{const o=await g1(t.localStore,e);fv(t,s,null),dv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await nl(t,o)}catch(o){await ko(o)}}async function cS(i,e,t){const s=Ce(i);try{const o=await(function(h,m){const y=Ce(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return y.mutationQueue.lookupMutationBatch(_,m).next((A=>(ze(A!==null,37113),w=A.keys(),y.mutationQueue.removeMutationBatch(_,A)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>y.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);fv(s,e,t),dv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await nl(s,o)}catch(o){await ko(o)}}function dv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function fv(i,e,t){const s=Ce(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Ud(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||pv(i,s)}))}function pv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(ff(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),wf(i))}function ly(i,e,t){for(const s of t)s instanceof lv?(i.Ru.addReference(s.key,e),hS(i,s)):s instanceof uv?(oe(Ef,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||pv(i,s.key)):_e(19791,{wu:s})}function hS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(oe(Ef,"New document in limbo: "+t),i.Eu.add(s),wf(i))}function wf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new fe(Ge.fromString(e)),s=i.fu.next();i.Au.set(s,new eS(t)),i.du=i.du.insert(t,s),nv(i.remoteStore,new mi(tr(C_(t.path)),s,"TargetPurposeLimboResolution",fc.ce))}}async function nl(i,e,t){const s=Ce(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const A=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(_){o.push(_);const A=hf.As(y.targetId,_);u.push(A)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const w=Ce(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>H.forEach(_,(D=>H.forEach(D.Es,(B=>w.persistence.referenceDelegate.addReference(A,D.targetId,B))).next((()=>H.forEach(D.ds,(B=>w.persistence.referenceDelegate.removeReference(A,D.targetId,B)))))))))}catch(A){if(!Po(A))throw A;oe(df,"Failed to update sequence numbers: "+A)}for(const A of _){const D=A.targetId;if(!A.fromCache){const B=w.Ms.get(D),J=B.snapshotVersion,Y=B.withLastLimboFreeSnapshotVersion(J);w.Ms=w.Ms.insert(D,Y)}}})(s.localStore,u))}async function dS(i,e){const t=Ce(i);if(!t.currentUser.isEqual(e)){oe(Ef,"User change. New user:",e.toKey());const s=await J_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new ie($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nl(t,s.Ls)}}function fS(i,e){const t=Ce(i),s=t.Au.get(e);if(s&&s.hu)return Le().add(s.key);{let o=Le();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function mv(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=hv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lS.bind(null,e),e.Pu.H_=Q1.bind(null,e.eventManager),e.Pu.yu=Y1.bind(null,e.eventManager),e}function pS(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cS.bind(null,e),e}class rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return m1(this.persistence,new d1,e.initialUser,this.serializer)}Cu(e){return new X_(cf.mi,this.serializer)}Du(e){return new T1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rc.provider={build:()=>new rc};class mS extends rc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof tc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new XI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new X_((s=>tc.mi(s,t)),this.serializer)}}class jd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ay(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dS.bind(null,this.syncEngine),await q1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new W1})()}createDatastore(e){const t=wc(e.databaseInfo.databaseId),s=(function(u){return new R1(u)})(e.databaseInfo);return(function(u,h,m,y){return new N1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new V1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>ay(this.syncEngine,t,0)),(function(){return ty.v()?new ty:new I1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,w){const A=new tS(o,u,h,m,y,_);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ce(o);oe(fs,"RemoteStore shutting down."),u.Ea.add(5),await tl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}jd.provider={build:()=>new jd};/**
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
 */class gS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const ki="FirestoreClient";class yS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{oe(ki,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe(ki,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ei;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=_f(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function md(i,e){i.asyncQueue.verifyOperationInProgress(),oe(ki,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await J_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function uy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await _S(i);oe(ki,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ry(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ry(e.remoteStore,o))),i._onlineComponents=e}async function _S(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(ki,"Using user provided OfflineComponentProvider");try{await md(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;_o("Error using user provided cache. Falling back to memory cache: "+t),await md(i,new rc)}}else oe(ki,"Using default OfflineComponentProvider"),await md(i,new mS(void 0));return i._offlineComponents}async function gv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(ki,"Using user provided OnlineComponentProvider"),await uy(i,i._uninitializedComponentsProvider._online)):(oe(ki,"Using default OnlineComponentProvider"),await uy(i,new jd))),i._onlineComponents}function vS(i){return gv(i).then((e=>e.syncEngine))}async function ES(i){const e=await gv(i),t=e.eventManager;return t.onListen=nS.bind(null,e.syncEngine),t.onUnlisten=sS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oS.bind(null,e.syncEngine),t}function wS(i,e,t={}){const s=new Ei;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const w=new gS({next:D=>{w.Nu(),h.enqueueAndForget((()=>K1(u,A))),D.fromCache&&y.source==="server"?_.reject(new ie($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(D)},error:D=>_.reject(D)}),A=new X1(m,w,{includeMetadataChanges:!0,qa:!0});return G1(u,A)})(await ES(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function yv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const cy=new Map;/**
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
 */const _v="firestore.googleapis.com",hy=!0;class dy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_v,this.ssl=hy}else this.host=e.host,this.ssl=e.ssl??hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Y_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QI)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new IT;switch(s.type){case"firstParty":return new RT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=cy.get(t);s&&(oe("ComponentProvider","Removing Datastore"),cy.delete(t),s.terminate())})(this),Promise.resolve()}}function TS(i,e,t,s={}){var _;i=ds(i,Sc);const o=Ao(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Wy(`https://${m}`),Gy("Firestore",!0)),u.host!==_v&&u.host!==m&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!us(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=zt.MOCK_USER;else{w=KE(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new zt(D)}i._authCredentials=new ST(new a_(w,A))}}/**
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
 */class ys{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class _t{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ja(t,_t._jsonSchema))return new _t(e,s||null,new fe(Ge.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:mt("string",_t._jsonSchemaVersion),referencePath:mt("string")};class wi extends ys{constructor(e,t,s){super(e,t,C_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new fe(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function ka(i,e,...t){if(i=St(i),l_("collection","path",e),i instanceof Sc){const s=Ge.fromString(e,...t);return Ag(s),new wi(i,null,s)}{if(!(i instanceof _t||i instanceof wi))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Ag(s),new wi(i.firestore,null,s)}}function zd(i,e,...t){if(i=St(i),arguments.length===1&&(e=Xd.newId()),l_("doc","path",e),i instanceof Sc){const s=Ge.fromString(e,...t);return Sg(s),new _t(i,null,new fe(s))}{if(!(i instanceof _t||i instanceof wi))throw new ie($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Sg(s),new _t(i.firestore,i instanceof wi?i.converter:null,new fe(s))}}/**
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
 */const fy="AsyncQueue";class py{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ev(this,"async_queue_retry"),this._c=()=>{const s=pd();s&&oe(fy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ei;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Po(e))throw e;oe(fy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Pr("INTERNAL UNHANDLED ERROR: ",my(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=yf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:my(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function my(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class rl extends Sc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new py,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function IS(i,e){const t=typeof i=="object"?i:Xy(),s=typeof i=="string"?i:Qu,o=Qd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=WE("firestore");u&&TS(o,...u)}return o}function vv(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||SS(i),i._firestoreClient}function SS(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,_,w){return new qT(m,y,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,yv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new yS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Vt.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ja(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:mt("string",vn._jsonSchemaVersion),bytes:mt("string")};/**
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
 */class Ac{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tf{constructor(e){this._methodName=e}}/**
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
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Ja(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:mt("string",rr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
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
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ja(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new ie($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:mt("string",ir._jsonSchemaVersion),vectorValues:mt("object")};/**
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
 */const AS=/^__.*__$/;class CS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Za(e,this.data,t,this.fieldTransforms)}}class Ev{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new xi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:i})}}class If{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new If({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ic(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wv(this.Ac)&&AS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class RS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||wc(e)}Cc(e,t,s,o=!1){return new If({Ac:e,methodName:t,Dc:s,path:Dt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sf(i){const e=i._freezeSettings(),t=wc(i._databaseId);return new RS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function kS(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Af("Data must be an object, but it was:",h,s);const m=Tv(s,h);let y,_;if(u.merge)y=new cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const D=Bd(e,A,t);if(!h.contains(D))throw new ie($.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);Sv(w,D)||w.push(D)}y=new cn(w),_=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,_=h.fieldTransforms;return new CS(new Zt(m),y,_)}class Cc extends Tf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cc}}function PS(i,e,t,s){const o=i.Cc(1,e,t);Af("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();Pi(s,((y,_)=>{const w=Cf(e,y,t);_=St(_);const A=o.yc(w);if(_ instanceof Cc)u.push(w);else{const D=il(_,A);D!=null&&(u.push(w),h.set(w,D))}}));const m=new cn(u);return new Ev(h,m,o.fieldTransforms)}function xS(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[Bd(e,s,t)],y=[o];if(u.length%2!=0)throw new ie($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)m.push(Bd(e,u[D])),y.push(u[D+1]);const _=[],w=Zt.empty();for(let D=m.length-1;D>=0;--D)if(!Sv(_,m[D])){const B=m[D];let J=y[D];J=St(J);const Y=h.yc(B);if(J instanceof Cc)_.push(B);else{const q=il(J,Y);q!=null&&(_.push(B),w.set(B,q))}}const A=new cn(_);return new Ev(w,A,h.fieldTransforms)}function NS(i,e,t,s=!1){return il(t,i.Cc(s?4:3,e))}function il(i,e){if(Iv(i=St(i)))return Af("Unsupported field value:",e,i),Tv(i,e);if(i instanceof Tf)return(function(s,o){if(!wv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=il(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=St(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return fI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Xe.fromDate(s);return{timestampValue:ec(o.serializer,u)}}if(s instanceof Xe){const u=new Xe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ec(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:$_(o.serializer,s._byteString)};if(s instanceof _t){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:lf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[y_]:{stringValue:__},[Yu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return rf(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${dc(s)}`)})(i,e)}function Tv(i,e){const t={};return h_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(i,((s,o)=>{const u=il(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Iv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Xe||i instanceof rr||i instanceof vn||i instanceof _t||i instanceof Tf||i instanceof ir)}function Af(i,e,t){if(!Iv(t)||!u_(t)){const s=dc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Bd(i,e,t){if((e=St(e))instanceof Ac)return e._internalPath;if(typeof e=="string")return Cf(i,e);throw ic("Field path arguments must be of type string or ",i,!1,void 0,t)}const DS=new RegExp("[~\\*/\\[\\]]");function Cf(i,e,t){if(e.search(DS)>=0)throw ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ac(...e.split("."))._internalPath}catch{throw ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ic(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ie($.INVALID_ARGUMENT,m+i+y)}function Sv(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class Av{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VS extends Av{data(){return super.data()}}function Rf(i,e){return typeof e=="string"?Cf(i,e):e instanceof Ac?e._internalPath:e._delegate._internalPath}/**
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
 */function OS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class Cv extends kf{}function Nu(i,e,...t){let s=[];e instanceof kf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof xf)).length,m=u.filter((y=>y instanceof Pf)).length;if(h>1||h>0&&m>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Pf extends Cv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Pf(e,t,s)}_apply(e){const t=this._parse(e);return Rv(e._query,t),new ys(e.firestore,e.converter,xd(e._query,t))}_parse(e){const t=Sf(e.firestore);return(function(u,h,m,y,_,w,A){let D;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){yy(A,w);const J=[];for(const Y of A)J.push(gy(y,u,Y));D={arrayValue:{values:J}}}else D=gy(y,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||yy(A,w),D=NS(m,h,A,w==="in"||w==="not-in");return pt.create(_,w,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class xf extends kf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Vn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)Rv(h,y),h=xd(h,y)})(e._query,t),new ys(e.firestore,e.converter,xd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Nf extends Cv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Nf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ha(u,h)})(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new xo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Du(i,e="asc"){const t=e,s=Rf("orderBy",i);return Nf._create(s,t)}function gy(i,e,t){if(typeof(t=St(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R_(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!fe.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Vg(i,new fe(s))}if(t instanceof _t)return Vg(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dc(t)}.`)}function yy(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class LS{convertValue(e,t="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Pi(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Yu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>lt(h.doubleValue)));return new ir(t)}convertGeoPoint(e){return new rr(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=mc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const t=Si(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);ze(Q_(s),9688,{name:e});const o=new $a(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||Pr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function bS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Vu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ho extends Av{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ho._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ho._jsonSchemaVersion="firestore/documentSnapshot/1.0",ho._jsonSchema={type:mt("string",ho._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class zu extends ho{data(e={}){return super.data(e)}}class fo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Vu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new zu(this._firestore,this._userDataWriter,s.key,s,new Vu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new zu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new zu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:MS(m.type),doc:y,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}fo._jsonSchemaVersion="firestore/querySnapshot/1.0",fo._jsonSchema={type:mt("string",fo._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};class FS extends LS{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function Ou(i){i=ds(i,ys);const e=ds(i.firestore,rl),t=vv(e),s=new FS(e);return OS(i._query),wS(t,i._query).then((o=>new fo(e,s,i,o)))}function US(i,e,t,...s){i=ds(i,_t);const o=ds(i.firestore,rl),u=Sf(o);let h;return h=typeof(e=St(e))=="string"||e instanceof Ac?xS(u,"updateDoc",i._key,e,t,s):PS(u,"updateDoc",i._key,e),Df(o,[h.toMutation(i._key,Dn.exists(!0))])}function jS(i){return Df(ds(i.firestore,rl),[new sf(i._key,Dn.none())])}function zS(i,e){const t=ds(i.firestore,rl),s=zd(i),o=bS(i.converter,e);return Df(t,[kS(Sf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Dn.exists(!1))]).then((()=>s))}function Df(i,e){return(function(s,o){const u=new Ei;return s.asyncQueue.enqueueAndForget((async()=>aS(await vS(s),o,u))),u.promise})(vv(i),e)}(function(e,t=!0){(function(o){Ro=o})(Co),yo(new cs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new rl(new AT(s.getProvider("auth-internal")),new kT(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $a(_.options.projectId,w)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),_i(Eg,wg,e),_i(Eg,wg,"esm2020")})();function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BS=kv,Pv=new Ya("auth","Firebase",kv());/**
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
 */const sc=new Gd("@firebase/auth");function $S(i,...e){sc.logLevel<=Ve.WARN&&sc.warn(`Auth (${Co}): ${i}`,...e)}function Bu(i,...e){sc.logLevel<=Ve.ERROR&&sc.error(`Auth (${Co}): ${i}`,...e)}/**
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
 */function On(i,...e){throw Vf(i,...e)}function sr(i,...e){return Vf(i,...e)}function xv(i,e,t){const s={...BS(),[e]:t};return new Ya("auth","Firebase",s).create(e,{appName:i.name})}function Ti(i){return xv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Pv.create(i,...e)}function ye(i,e,...t){if(!i)throw Vf(e,...t)}function Cr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Bu(e),new Error(e)}function Nr(i,e){i||Cr(e)}/**
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
 */function $d(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function qS(){return _y()==="http:"||_y()==="https:"}function _y(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qS()||ew()||"connection"in navigator)?navigator.onLine:!0}function WS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class sl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=XE()||tw()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Nv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QS=new sl(3e4,6e4);function _s(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ni(i,e,t,s,o={}){return Dv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Xa({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return ZE()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Ao(i.emulatorConfig.host)&&(_.credentials="include"),Nv.fetch()(await Vv(i,i.config.apiHost,t,m),_)})}async function Dv(i,e,t){i._canInitEmulator=!1;const s={...GS,...e};try{const o=new XS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Lu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Lu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Lu(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw xv(i,w,_);On(i,w)}}catch(o){if(o instanceof Dr)throw o;On(i,"network-request-failed",{message:String(o)})}}async function Rc(i,e,t,s,o={}){const u=await Ni(i,e,t,s,o);return"mfaPendingCredential"in u&&On(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Vv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Of(i.config,o):`${i.config.apiScheme}://${o}`;return KS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function YS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),QS.get())})}}function Lu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(i,e,s);return o.customData._tokenResponse=t,o}function vy(i){return i!==void 0&&i.enterprise!==void 0}class JS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return YS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZS(i,e){return Ni(i,"GET","/v2/recaptchaConfig",_s(i,e))}/**
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
 */async function eA(i,e){return Ni(i,"POST","/v1/accounts:delete",e)}async function oc(i,e){return Ni(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ua(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(i,e=!1){const t=St(i),s=await t.getIdToken(e),o=Lf(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ua(gd(o.auth_time)),issuedAtTime:Ua(gd(o.iat)),expirationTime:Ua(gd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function gd(i){return Number(i)*1e3}function Lf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Bu("JWT malformed, contained fewer than 3 sections"),null;try{const o=By(t);return o?JSON.parse(o):(Bu("Failed to decode base64 JWT payload"),null)}catch(o){return Bu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ey(i){const e=Lf(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ka(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dr&&nA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function nA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ac(i){var A;const e=i.auth,t=await i.getIdToken(),s=await Ka(i,oc(e,{idToken:t}));ye(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(A=o.providerUserInfo)!=null&&A.length?Ov(o.providerUserInfo):[],h=sA(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new qd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,w)}async function iA(i){const e=St(i);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ov(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function oA(i,e){const t=await Dv(i,{},async()=>{const s=Xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Vv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ao(i.emulatorConfig.host)&&(y.credentials="include"),Nv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aA(i,e){return Ni(i,"POST","/v2/accounts:revokeToken",_s(i,e))}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Ey(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await oA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new po;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
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
 */function ci(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ka(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ac(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await Ka(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:D,isAnonymous:B,providerData:J,stsTokenManager:Y}=t;ye(A&&Y,e,"internal-error");const q=po.fromJSON(this.name,Y);ye(typeof A=="string",e,"internal-error"),ci(s,e.name),ci(o,e.name),ye(typeof D=="boolean",e,"internal-error"),ye(typeof B=="boolean",e,"internal-error"),ci(u,e.name),ci(h,e.name),ci(m,e.name),ci(y,e.name),ci(_,e.name),ci(w,e.name);const Te=new Nn({uid:A,auth:e,email:o,emailVerified:D,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:q,createdAt:_,lastLoginAt:w});return J&&Array.isArray(J)&&(Te.providerData=J.map(ge=>({...ge}))),y&&(Te._redirectEventId=y),Te}static async _fromIdTokenResponse(e,t,s=!1){const o=new po;o.updateFromServerResponse(t);const u=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ac(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ov(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new po;m.updateFromIdToken(s);const y=new Nn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const wy=new Map;function Rr(i){Nr(i instanceof Function,"Expected a class definition");let e=wy.get(i);return e?(Nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wy.set(i,e),e)}/**
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
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lv.type="NONE";const Ty=Lv;/**
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
 */function $u(i,e,t){return`firebase:${i}:${e}:${t}`}class mo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=$u(this.userKey,o.apiKey,u),this.fullPersistenceKey=$u("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oc(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new mo(Rr(Ty),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Rr(Ty);const h=$u(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let A;if(typeof w=="string"){const D=await oc(e,{idToken:w}).catch(()=>{});if(!D)break;A=await Nn._fromGetAccountInfoResponse(e,D,w)}else A=Nn._fromJSON(e,w);_!==u&&(m=A),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new mo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new mo(u,e,s))}}/**
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
 */function Iy(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zv(e))return"Blackberry";if(Bv(e))return"Webos";if(Mv(e))return"Safari";if((e.includes("chrome/")||Fv(e))&&!e.includes("edge/"))return"Chrome";if(jv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bv(i=$t()){return/firefox\//i.test(i)}function Mv(i=$t()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fv(i=$t()){return/crios\//i.test(i)}function Uv(i=$t()){return/iemobile/i.test(i)}function jv(i=$t()){return/android/i.test(i)}function zv(i=$t()){return/blackberry/i.test(i)}function Bv(i=$t()){return/webos/i.test(i)}function bf(i=$t()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function lA(i=$t()){var e;return bf(i)&&!!((e=window.navigator)!=null&&e.standalone)}function uA(){return nw()&&document.documentMode===10}function $v(i=$t()){return bf(i)||jv(i)||Bv(i)||zv(i)||/windows phone/i.test(i)||Uv(i)}/**
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
 */function qv(i,e=[]){let t;switch(i){case"Browser":t=Iy($t());break;case"Worker":t=`${Iy($t())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Co}/${s}`}/**
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
 */class cA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function hA(i,e={}){return Ni(i,"GET","/v2/passwordPolicy",_s(i,e))}/**
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
 */const dA=6;class fA{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class pA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sy(this),this.idTokenSubscription=new Sy(this),this.beforeStateQueue=new cA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oc(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(xn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Ti(this));const t=e?St(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),t=new fA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await aA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Rr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$S(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Do(i){return St(i)}class Sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=cw(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(i){kc=i}function Hv(i){return kc.loadJS(i)}function gA(){return kc.recaptchaEnterpriseScript}function yA(){return kc.gapiScript}function _A(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class vA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wA="recaptcha-enterprise",Wv="NO_RECAPTCHA";class TA{constructor(e){this.type=wA,this.auth=Do(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{ZS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new JS(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;vy(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Wv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&vy(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=gA();y.length!==0&&(y+=m),Hv(y).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Ay(i,e,t,s=!1,o=!1){const u=new TA(i);let h;if(o)h=Wv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Cy(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Ay(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Ay(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function IA(i,e){const t=Qd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(us(u,e??{}))return o;On(o,"already-initialized")}return t.initialize({options:e})}function SA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AA(i,e,t){const s=Do(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Gv(e),{host:h,port:m}=CA(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(us(_,s.config.emulator)&&us(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Ao(h)?(Wy(`${u}//${h}${y}`),Gy("Auth",!0)):RA()}function Gv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function CA(i){const e=Gv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ry(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ry(h)}}}function Ry(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function RA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Mf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function kA(i,e){return Ni(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function PA(i,e){return Rc(i,"POST","/v1/accounts:signInWithPassword",_s(i,e))}/**
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
 */async function xA(i,e){return Rc(i,"POST","/v1/accounts:signInWithEmailLink",_s(i,e))}async function NA(i,e){return Rc(i,"POST","/v1/accounts:signInWithEmailLink",_s(i,e))}/**
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
 */class Qa extends Mf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Qa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,t,"signInWithPassword",PA);case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,s,"signUpPassword",kA);case"emailLink":return NA(e,{idToken:t,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function go(i,e){return Rc(i,"POST","/v1/accounts:signInWithIdp",_s(i,e))}/**
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
 */const DA="http://localhost";class ps extends Mf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):On("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new ps(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return go(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,go(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,go(e,t)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xa(t)}return e}}/**
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
 */function VA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(i){const e=Pa(xa(i)).link,t=e?Pa(xa(e)).deep_link_id:null,s=Pa(xa(i)).deep_link_id;return(s?Pa(xa(s)).link:null)||s||t||e||i}class Ff{constructor(e){const t=Pa(xa(e)),s=t.apiKey??null,o=t.oobCode??null,u=VA(t.mode??null);ye(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=OA(e);try{return new Ff(t)}catch{return null}}}/**
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
 */class Vo{constructor(){this.providerId=Vo.PROVIDER_ID}static credential(e,t){return Qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ff.parseLink(t);return ye(s,"argument-error"),Qa._fromEmailAndCode(e,s.code,s.tenantId)}}Vo.PROVIDER_ID="password";Vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Kv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ol extends Kv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hi extends ol{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
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
 */class di extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ps._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class fi extends ol{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class pi extends ol{constructor(){super("twitter.com")}static credential(e,t){return ps._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
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
 */class So{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Nn._fromIdTokenResponse(e,s,o),h=ky(s);return new So({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ky(s);return new So({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ky(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class lc extends Dr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new lc(e,t,s,o)}}function Qv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(i,u,e,s):u})}async function LA(i,e,t=!1){const s=await Ka(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return So._forOperation(i,"link",s)}/**
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
 */async function bA(i,e,t=!1){const{auth:s}=i;if(xn(s.app))return Promise.reject(Ti(s));const o="reauthenticate";try{const u=await Ka(i,Qv(s,o,e,i),t);ye(u.idToken,s,"internal-error");const h=Lf(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),So._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&On(s,"user-mismatch"),u}}/**
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
 */async function Yv(i,e,t=!1){if(xn(i.app))return Promise.reject(Ti(i));const s="signIn",o=await Qv(i,s,e),u=await So._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function MA(i,e){return Yv(Do(i),e)}/**
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
 */async function FA(i){const e=Do(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function UA(i,e,t){return xn(i.app)?Promise.reject(Ti(i)):MA(St(i),Vo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&FA(i),s})}function jA(i,e,t,s){return St(i).onIdTokenChanged(e,t,s)}function zA(i,e,t){return St(i).beforeAuthStateChanged(e,t)}function BA(i,e,t,s){return St(i).onAuthStateChanged(e,t,s)}function $A(i){return St(i).signOut()}const uc="__sak";/**
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
 */class Xv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qA=1e3,HA=10;class Jv extends Xv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);uA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jv.type="LOCAL";const WA=Jv;/**
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
 */class Zv extends Xv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zv.type="SESSION";const e0=Zv;/**
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
 */function GA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await GA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Uf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const D=A;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function or(){return window}function QA(i){or().location.href=i}/**
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
 */function t0(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function JA(){return t0()?self:null}/**
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
 */const n0="firebaseLocalStorageDb",ZA=1,cc="firebaseLocalStorage",r0="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xc(i,e){return i.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function eC(){const i=indexedDB.deleteDatabase(n0);return new al(i).toPromise()}function Hd(){const i=indexedDB.open(n0,ZA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(cc,{keyPath:r0})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(cc)?e(s):(s.close(),await eC(),e(await Hd()))})})}async function Py(i,e,t){const s=xc(i,!0).put({[r0]:e,value:t});return new al(s).toPromise()}async function tC(i,e){const t=xc(i,!1).get(e),s=await new al(t).toPromise();return s===void 0?null:s.value}function xy(i,e){const t=xc(i,!0).delete(e);return new al(t).toPromise()}const nC=800,rC=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hd();return await Py(e,uc,"1"),await xy(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Py(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tC(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=xc(o,!1).getAll();return new al(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const iC=i0;new sl(3e4,6e4);/**
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
 */function sC(i,e){return e?Rr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class jf extends Mf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oC(i){return Yv(i.auth,new jf(i),i.bypassAuthState)}function aC(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),bA(t,new jf(i),i.bypassAuthState)}async function lC(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),LA(t,new jf(i),i.bypassAuthState)}/**
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
 */class s0{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return lC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:On(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uC=new sl(2e3,1e4);class uo extends s0{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uC.get())};e()}}uo.currentPopupAction=null;/**
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
 */const cC="pendingRedirect",qu=new Map;class hC extends s0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=qu.get(this.auth._key());if(!e){try{const s=await dC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}qu.set(this.auth._key(),e)}return this.bypassAuthState||qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dC(i,e){const t=mC(e),s=pC(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function fC(i,e){qu.set(i._key(),e)}function pC(i){return Rr(i._redirectPersistence)}function mC(i){return $u(cC,i.config.apiKey,i.name)}async function gC(i,e,t=!1){if(xn(i.app))return Promise.reject(Ti(i));const s=Do(i),o=sC(s,e),h=await new hC(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const yC=600*1e3;class _C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!o0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ny(e))}saveEventToCache(e){this.cachedEventUids.add(Ny(e)),this.lastProcessedEventTime=Date.now()}}function Ny(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function o0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vC(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(i);default:return!1}}/**
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
 */async function EC(i,e={}){return Ni(i,"GET","/v1/projects",e)}/**
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
 */const wC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TC=/^https?/;async function IC(i){if(i.config.emulator)return;const{authorizedDomains:e}=await EC(i);for(const t of e)try{if(SC(t))return}catch{}On(i,"unauthorized-domain")}function SC(i){const e=$d(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!TC.test(t))return!1;if(wC.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const AC=new sl(3e4,6e4);function Dy(){const i=or().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function CC(i){return new Promise((e,t)=>{var o,u,h;function s(){Dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dy(),t(sr(i,"network-request-failed"))},timeout:AC.get()})}if((u=(o=or().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=or().gapi)!=null&&h.load)s();else{const m=_A("iframefcb");return or()[m]=()=>{gapi.load?s():t(sr(i,"network-request-failed"))},Hv(`${yA()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Hu=null,e})}let Hu=null;function RC(i){return Hu=Hu||CC(i),Hu}/**
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
 */const kC=new sl(5e3,15e3),PC="__/auth/iframe",xC="emulator/auth/iframe",NC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VC(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Of(e,xC):`https://${i.config.authDomain}/${PC}`,s={apiKey:e.apiKey,appName:i.name,v:Co},o=DC.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Xa(s).slice(1)}`}async function OC(i){const e=await RC(i),t=or().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:VC(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=sr(i,"network-request-failed"),m=or().setTimeout(()=>{u(h)},kC.get());function y(){or().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const LC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bC=500,MC=600,FC="_blank",UC="http://localhost";class Vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(i,e,t,s=bC,o=MC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...LC,width:s.toString(),height:o.toString(),top:u,left:h},_=$t().toLowerCase();t&&(m=Fv(_)?FC:t),bv(_)&&(e=e||UC,y.scrollbars="yes");const w=Object.entries(y).reduce((D,[B,J])=>`${D}${B}=${J},`,"");if(lA(_)&&m!=="_self")return zC(e||"",m),new Vy(null);const A=window.open(e||"",m,w);ye(A,i,"popup-blocked");try{A.focus()}catch{}return new Vy(A)}function zC(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const BC="__/auth/handler",$C="emulator/auth/handler",qC=encodeURIComponent("fac");async function Oy(i,e,t,s,o,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Co,eventId:o};if(e instanceof Kv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",uw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof ol){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),_=y?`#${qC}=${encodeURIComponent(y)}`:"";return`${HC(i)}?${Xa(m).slice(1)}${_}`}function HC({config:i}){return i.emulator?Of(i,$C):`https://${i.authDomain}/${BC}`}/**
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
 */const yd="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=gC,this._overrideRedirectResult=fC}async _openPopup(e,t,s,o){var h;Nr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Oy(e,t,s,$d(),o);return jC(e,u,Uf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Oy(e,t,s,$d(),o);return QA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await OC(e),s=new _C(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yd,{type:yd},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[yd];u!==void 0&&t(!!u),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=IC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $v()||Mv()||bf()}}const GC=WC;var Ly="@firebase/auth",by="1.12.0";/**
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
 */class KC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YC(i){yo(new cs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qv(i)},_=new pA(s,o,u,y);return SA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yo(new cs("auth-internal",e=>{const t=Do(e.getProvider("auth").getImmediate());return(s=>new KC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_i(Ly,by,QC(i)),_i(Ly,by,"esm2020")}/**
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
 */const XC=300,JC=Hy("authIdTokenMaxAge")||XC;let My=null;const ZC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JC)return;const o=t==null?void 0:t.token;My!==o&&(My=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function eR(i=Xy()){const e=Qd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=IA(i,{popupRedirectResolver:GC,persistence:[iC,WA,e0]}),s=Hy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=ZC(u.toString());zA(t,h,()=>h(t.currentUser)),jA(t,m=>h(m))}}const o=$y("auth");return o&&AA(t,`http://${o}`),t}function tR(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}mA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=sr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",tR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YC("Browser");const nR={apiKey:"AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",authDomain:"my-portfolio-db-8e7ac.firebaseapp.com",projectId:"my-portfolio-db-8e7ac",storageBucket:"my-portfolio-db-8e7ac.firebasestorage.app",messagingSenderId:"640921515154",appId:"1:640921515154:web:528be384c173cf632e224b"},a0=Yy(nR),os=IS(a0),_d=eR(a0),rR=()=>{const[i,e]=tt.useState("home"),[t,s]=tt.useState(!1),[o,u]=tt.useState(!1),[h,m]=tt.useState([]),[y,_]=tt.useState([]),[w,A]=tt.useState([]),[D,B]=tt.useState([]),[J,Y]=tt.useState(!0),[q,Te]=tt.useState(null),[ge,we]=tt.useState(!1),[xe,$e]=tt.useState(""),[Ne,N]=tt.useState(""),[I,R]=tt.useState(""),[P,x]=tt.useState(null),[L,S]=tt.useState(null),[le,Pe]=tt.useState({}),ut=async()=>{Y(!0);try{const z=Nu(ka(os,"projects"),Du("createdAt","desc")),re=await Ou(z);m(re.docs.map(Ot=>({id:Ot.id,...Ot.data()})));const te=Nu(ka(os,"experiences"),Du("order","asc")),Ct=await Ou(te);_(Ct.docs.map(Ot=>({id:Ot.id,...Ot.data()})));const Vr=Nu(ka(os,"educations"),Du("order","asc")),Di=await Ou(Vr);A(Di.docs.map(Ot=>({id:Ot.id,...Ot.data()})));const Ln=Nu(ka(os,"skills"),Du("order","asc")),Or=await Ou(Ln);B(Or.docs.map(Ot=>({id:Ot.id,...Ot.data()})))}catch(z){console.error("Error fetching data: ",z)}finally{Y(!1)}};tt.useEffect(()=>{ut();const z=()=>u(window.scrollY>50);window.addEventListener("scroll",z);const re=BA(_d,te=>{Te(te)});return()=>{window.removeEventListener("scroll",z),re()}},[]);const He=async z=>{z.preventDefault();try{await UA(_d,xe,Ne),R(""),we(!0)}catch{R("Login failed. Check your email/password.")}},ee=async()=>{await $A(_d),we(!1),W()},de=(z,re=null)=>{z==="project"?Pe(re||{title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""}):z==="experience"?Pe(re||{role:"",company:"",period:"",description:"",details:[]}):z==="education"?Pe(re||{school:"",degree:"",period:"",description:""}):z==="skill"&&Pe(re||{category:"",items:""})},ne=z=>{S(z),x(null),de(z)},O=(z,re)=>{x({type:z,id:re.id}),S(null);let te={...re};z==="skill"&&Array.isArray(re.items)&&(te.items=re.items.join(", ")),z==="experience"&&Array.isArray(re.details)&&(te.detailsStr=re.details.join(`
`)),de(z,te)},W=()=>{S(null),x(null),Pe({})},Se=async z=>{try{let re={...le,createdAt:new Date};re.order||(re.order=Date.now()),z==="skill"&&(re.items=le.items.split(",").map(te=>te.trim()).filter(te=>te)),z==="experience"&&le.detailsStr&&(re.details=le.detailsStr.split(`
`).filter(te=>te.trim()),delete re.detailsStr),P&&P.type===z?(await US(zd(os,`${z}s`,P.id),re),alert("Updated successfully!")):(await zS(ka(os,`${z}s`),re),alert("Added successfully!")),ut(),W()}catch(re){console.error("Error saving document: ",re),alert("Error saving data")}},ve=async(z,re)=>{if(window.confirm("Are you sure you want to delete this item?"))try{await jS(zd(os,`${z}s`,re)),ut()}catch(te){console.error("Error deleting document: ",te)}},Re=z=>{const re=document.getElementById(z);re&&(re.scrollIntoView({behavior:"smooth"}),e(z),s(!1))},ke=z=>{const re=P&&P.type===z;return C.jsxs("div",{className:"bg-slate-800 p-6 rounded-xl border border-slate-600 mb-6 animate-fade-in-up",children:[C.jsx("h4",{className:"text-lg font-bold text-white mb-4",children:re?"Edit Item":"Add New Item"}),C.jsxs("div",{className:"grid gap-4",children:[z==="project"&&C.jsxs(C.Fragment,{children:[C.jsx("input",{className:"input-field",placeholder:"Title",value:le.title||"",onChange:te=>Pe({...le,title:te.target.value})}),C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsxs("select",{className:"input-field",value:le.type||"blog",onChange:te=>Pe({...le,type:te.target.value}),children:[C.jsx("option",{value:"blog",children:"Blog"}),C.jsx("option",{value:"video",children:"Video"}),C.jsx("option",{value:"podcast",children:"Podcast"})]}),C.jsx("input",{className:"input-field",placeholder:"Link Text (e.g. View Blog)",value:le.linkText||"",onChange:te=>Pe({...le,linkText:te.target.value})})]}),C.jsx("textarea",{className:"input-field min-h-[80px]",placeholder:"Description",value:le.description||"",onChange:te=>Pe({...le,description:te.target.value})}),le.type==="video"?C.jsx("input",{className:"input-field",placeholder:"YouTube Video ID",value:le.videoId||"",onChange:te=>Pe({...le,videoId:te.target.value})}):C.jsx("input",{className:"input-field",placeholder:"Link URL",value:le.link||"",onChange:te=>Pe({...le,link:te.target.value})})]}),z==="experience"&&C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx("input",{className:"input-field",placeholder:"Role / Job Title",value:le.role||"",onChange:te=>Pe({...le,role:te.target.value})}),C.jsx("input",{className:"input-field",placeholder:"Company",value:le.company||"",onChange:te=>Pe({...le,company:te.target.value})})]}),C.jsx("input",{className:"input-field",placeholder:"Period (e.g. 2022 - 2024)",value:le.period||"",onChange:te=>Pe({...le,period:te.target.value})}),C.jsx("textarea",{className:"input-field min-h-[120px]",placeholder:"Details (One item per line)",value:le.detailsStr||"",onChange:te=>Pe({...le,detailsStr:te.target.value})})]}),z==="education"&&C.jsxs(C.Fragment,{children:[C.jsx("input",{className:"input-field",placeholder:"School Name",value:le.school||"",onChange:te=>Pe({...le,school:te.target.value})}),C.jsx("input",{className:"input-field",placeholder:"Degree / Major",value:le.degree||"",onChange:te=>Pe({...le,degree:te.target.value})}),C.jsx("input",{className:"input-field",placeholder:"Period / Location",value:le.period||"",onChange:te=>Pe({...le,period:te.target.value})}),C.jsx("textarea",{className:"input-field min-h-[80px]",placeholder:"Description / Coursework",value:le.description||"",onChange:te=>Pe({...le,description:te.target.value})})]}),z==="skill"&&C.jsxs(C.Fragment,{children:[C.jsx("input",{className:"input-field",placeholder:"Category (e.g. Strategy & Data)",value:le.category||"",onChange:te=>Pe({...le,category:te.target.value})}),C.jsx("textarea",{className:"input-field min-h-[80px]",placeholder:"Skills (Comma separated, e.g. Python, SQL, Excel)",value:le.items||"",onChange:te=>Pe({...le,items:te.target.value})})]}),C.jsxs("div",{className:"flex gap-3 mt-2",children:[C.jsxs("button",{onClick:()=>Se(z),className:"btn-primary flex items-center gap-2",children:[C.jsx(bE,{size:16})," Save"]}),C.jsxs("button",{onClick:W,className:"btn-secondary flex items-center gap-2",children:[C.jsx(LE,{size:16})," Cancel"]})]})]})]})};return C.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white relative",children:[C.jsx("div",{className:"fixed bottom-6 right-6 z-[100]",children:q?C.jsxs("div",{className:"flex gap-2 items-center",children:[C.jsx("span",{className:"bg-indigo-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg",children:"Admin Mode"}),C.jsx("button",{onClick:ee,className:"p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all flex items-center justify-center",title:"Logout",children:C.jsx(NE,{size:20})})]}):C.jsx("button",{onClick:()=>we(!ge),className:"p-3 bg-slate-800 rounded-full shadow-lg border border-slate-700 hover:bg-slate-700 transition-all opacity-50 hover:opacity-100 flex items-center justify-center",title:"Admin Login",children:C.jsx(xE,{size:20,className:"text-slate-400"})})}),ge&&!q&&C.jsx("div",{className:"fixed inset-0 bg-black/90 z-[101] flex items-center justify-center p-4",children:C.jsxs("div",{className:"bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-2xl",children:[C.jsxs("div",{className:"flex justify-between items-center mb-6",children:[C.jsx("h2",{className:"text-2xl font-bold text-white",children:"Admin Login"}),C.jsx("button",{onClick:()=>we(!1),children:C.jsx(ag,{className:"text-slate-400 hover:text-white"})})]}),C.jsxs("form",{onSubmit:He,className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Email"}),C.jsx("input",{type:"email",value:xe,onChange:z=>$e(z.target.value),className:"input-field",placeholder:"admin@example.com"})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Password"}),C.jsx("input",{type:"password",value:Ne,onChange:z=>N(z.target.value),className:"input-field",placeholder:"Password"})]}),I&&C.jsx("p",{className:"text-red-400 text-sm",children:I}),C.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors",children:"Login"})]})]})}),C.jsxs("nav",{className:`fixed w-full z-40 transition-all duration-300 ${o?"bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800":"bg-transparent"}`,children:[C.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex justify-between items-center",children:[C.jsxs("div",{onClick:()=>Re("home"),className:"text-2xl font-bold text-slate-100 cursor-pointer hover:text-indigo-400 transition-colors",children:["HK",C.jsx("span",{className:"text-indigo-500",children:"."})]}),C.jsx("div",{className:"hidden md:flex space-x-8",children:["About","Experience","Projects","Skills","Contact"].map(z=>C.jsx("button",{onClick:()=>Re(z.toLowerCase()),className:"text-sm font-medium hover:text-indigo-400 transition-colors",children:z},z))}),C.jsx("div",{className:"md:hidden",children:C.jsx("button",{onClick:()=>s(!t),className:"text-slate-100 focus:outline-none",children:t?C.jsx(ag,{size:24}):C.jsx(DE,{size:24})})})]}),t&&C.jsx("div",{className:"md:hidden bg-slate-800 border-b border-slate-700",children:C.jsx("div",{className:"px-6 py-4 flex flex-col space-y-4",children:["About","Experience","Projects","Skills","Contact"].map(z=>C.jsx("button",{onClick:()=>Re(z.toLowerCase()),className:"text-left text-sm font-medium hover:text-indigo-400 transition-colors",children:z},z))})})]}),C.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden",children:[C.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"}),C.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[C.jsx("h2",{className:"text-indigo-400 font-medium tracking-wider mb-4 animate-fade-in-up",children:"CONTENT STRATEGIST & PRODUCER"}),C.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight animate-fade-in-up delay-100",children:"Hyeongmo Kim"}),C.jsxs("p",{className:"text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200",children:["Connecting creative work with data and tight execution.",C.jsx("br",{}),"Focusing on audience behavior, AI, and data-driven decision-making."]}),C.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300",children:[C.jsxs("button",{onClick:()=>Re("contact"),className:"px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:scale-105 flex items-center justify-center gap-2",children:[C.jsx(og,{size:18})," Get in Touch"]}),C.jsxs("a",{href:"https://www.linkedin.com/in/hmstory0111",target:"_blank",rel:"noreferrer",className:"px-8 py-3 bg-slate-800 text-slate-200 rounded-full font-medium hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center gap-2 border border-slate-700",children:[C.jsx(PE,{size:18})," LinkedIn"]})]})]})]}),C.jsx("section",{id:"about",className:"py-20 px-6 bg-slate-800/50",children:C.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start",children:[C.jsxs("div",{children:[C.jsxs("h2",{className:"text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3",children:[C.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Professional Summary"]}),C.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:"I work across content strategy, production, and operations. My passion lies in bridging the gap between creative storytelling and analytical rigor."}),C.jsxs("p",{className:"text-lg text-slate-400 leading-relaxed",children:["Currently, I am expanding my expertise by pursuing an ",C.jsx("strong",{className:"text-slate-200",children:"M.A. in Digital Innovation"}),", specifically studying how AI and data can inform audience behavior analysis and decision-making processes."]})]}),C.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl relative",children:[C.jsxs("div",{className:"flex items-center justify-between mb-6",children:[C.jsxs("div",{className:"flex items-center gap-3 text-indigo-400",children:[C.jsx(ig,{size:24}),C.jsx("h3",{className:"text-xl font-bold",children:"Education"})]}),q&&C.jsx("button",{onClick:()=>ne("education"),className:"p-1 bg-indigo-600 rounded text-white hover:bg-indigo-700",children:C.jsx(Su,{size:16})})]}),(L==="education"||(P==null?void 0:P.type)==="education")&&ke("education"),C.jsx("div",{className:"space-y-8",children:w.length>0?w.map(z=>C.jsxs("div",{className:"relative pl-6 border-l-2 border-slate-700 group",children:[C.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"}),q&&C.jsxs("div",{className:"absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[C.jsx("button",{onClick:()=>O("education",z),children:C.jsx(Iu,{size:14,className:"text-indigo-400"})}),C.jsx("button",{onClick:()=>ve("education",z.id),children:C.jsx(Au,{size:14,className:"text-red-400"})})]}),C.jsx("h4",{className:"text-lg font-bold text-slate-100",children:z.school}),C.jsxs("p",{className:"text-indigo-400 text-sm mb-2",children:[z.degree," | ",z.period]}),C.jsx("p",{className:"text-slate-400 text-sm",children:z.description})]},z.id)):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"relative pl-6 border-l-2 border-indigo-900",children:[C.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"}),C.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University - Graduate School"}),C.jsx("p",{className:"text-indigo-400 text-sm mb-2",children:"M.A. Digital Innovation (Expected 2027) | Seoul, Korea"}),C.jsx("p",{className:"text-slate-400 text-sm",children:"Focus: Audience Behavior, AI Data-driven decision-making"})]}),C.jsxs("div",{className:"relative pl-6 border-l-2 border-slate-700",children:[C.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"}),C.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University"}),C.jsx("p",{className:"text-slate-400 text-sm mb-1",children:"B.A. International Relations & Psychology | 2005 - 2013"})]})]})})]})]})}),C.jsx("section",{id:"experience",className:"py-20 px-6",children:C.jsxs("div",{className:"max-w-4xl mx-auto",children:[C.jsxs("div",{className:"flex items-center justify-center gap-4 mb-12 relative",children:[C.jsx("h2",{className:"text-3xl font-bold text-slate-100 text-center",children:"Professional Experience"}),q&&C.jsx("button",{onClick:()=>ne("experience"),className:"absolute right-0 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700",children:C.jsx(Su,{size:20})})]}),(L==="experience"||(P==null?void 0:P.type)==="experience")&&ke("experience"),C.jsx("div",{className:"space-y-12",children:y.length>0?y.map(z=>C.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[q&&C.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",children:[C.jsx("button",{onClick:()=>O("experience",z),className:"p-2 bg-indigo-600/80 rounded-full text-white",children:C.jsx(Iu,{size:16})}),C.jsx("button",{onClick:()=>ve("experience",z.id),className:"p-2 bg-red-600/80 rounded-full text-white",children:C.jsx(Au,{size:16})})]}),C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100",children:z.role}),C.jsx("p",{className:"text-slate-400",children:z.company})]}),C.jsx("span",{className:"px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30",children:z.period})]}),C.jsx("ul",{className:"space-y-3 text-slate-400",children:z.details&&z.details.map((re,te)=>C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(sd,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),C.jsx("span",{children:re})]},te))})]},z.id)):C.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100",children:"Podcast & Video Producer"}),C.jsx("p",{className:"text-slate-400",children:"Krafton - Publishing Platform Division (PPD)"})]}),C.jsx("span",{className:"px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30",children:"2025 - Present"})]}),C.jsxs("ul",{className:"space-y-3 text-slate-400",children:[C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(sd,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),C.jsx("span",{children:"Produced internal podcasts and videos for 200+ staff."})]}),C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(sd,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),C.jsx("span",{children:"Handled full production cycle (script, host, record, edit)."})]})]}),C.jsx("div",{className:"text-center mt-4 text-sm text-slate-500",children:"* Admin: Add your experiences to replace this placeholder."})]})})]})}),C.jsx("section",{id:"projects",className:"py-20 px-6 bg-slate-800/30",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-12 relative",children:[C.jsxs("h2",{className:"text-3xl font-bold text-slate-100 flex items-center gap-3",children:[C.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Selected Works"]}),q&&C.jsx("button",{onClick:()=>ne("project"),className:"p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 ml-4",children:C.jsx(Su,{size:20})})]}),(L==="project"||(P==null?void 0:P.type)==="project")&&ke("project"),C.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map(z=>C.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[q&&C.jsxs("div",{className:"absolute top-2 right-2 z-20 flex gap-2",children:[C.jsx("button",{onClick:()=>O("project",z),className:"p-2 bg-indigo-600/80 rounded-full text-white hover:bg-indigo-700",children:C.jsx(Iu,{size:16})}),C.jsx("button",{onClick:()=>ve("project",z.id),className:"p-2 bg-red-600/80 rounded-full text-white hover:bg-red-700",children:C.jsx(Au,{size:16})})]}),C.jsx("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:z.type==="video"&&z.videoId?C.jsx("img",{src:`https://img.youtube.com/vi/${z.videoId}/hqdefault.jpg`,alt:z.title,className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"}):C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900"}),z.type==="podcast"?C.jsx(VE,{size:48,className:"text-slate-600 group-hover:text-purple-400 z-10"}):C.jsx(ig,{size:48,className:"text-slate-600 group-hover:text-indigo-400 z-10"})]})}),C.jsxs("div",{className:"p-8",children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:z.title}),C.jsx("p",{className:"text-slate-400 mb-6 text-sm line-clamp-3",children:z.description}),C.jsxs("a",{href:z.type==="video"?`https://youtu.be/${z.videoId}`:z.link,target:"_blank",rel:"noreferrer",className:`font-medium flex items-center gap-2 transition-colors ${z.type==="video"?"text-red-400 hover:text-red-300":z.type==="podcast"?"text-purple-400 hover:text-purple-300":"text-indigo-400 hover:text-indigo-300"}`,children:[z.linkText||"View Detail"," ",z.type==="video"?C.jsx(OE,{size:16}):C.jsx(kE,{size:16})]})]})]},z.id))})]})}),C.jsx("section",{id:"skills",className:"py-20 px-6",children:C.jsxs("div",{className:"max-w-4xl mx-auto",children:[C.jsxs("div",{className:"flex items-center justify-center gap-4 mb-12 relative",children:[C.jsx("h2",{className:"text-3xl font-bold text-slate-100 text-center",children:"Skills & Expertise"}),q&&C.jsx("button",{onClick:()=>ne("skill"),className:"absolute right-0 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700",children:C.jsx(Su,{size:20})})]}),(L==="skill"||(P==null?void 0:P.type)==="skill")&&ke("skill"),C.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:D.length>0?D.map(z=>C.jsxs("div",{className:"relative group",children:[q&&C.jsxs("div",{className:"absolute -top-3 -right-3 z-20 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:[C.jsx("button",{onClick:()=>O("skill",z),className:"p-1 bg-indigo-600 rounded text-white",children:C.jsx(Iu,{size:14})}),C.jsx("button",{onClick:()=>ve("skill",z.id),className:"p-1 bg-red-600 rounded text-white",children:C.jsx(Au,{size:14})})]}),C.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[C.jsx(sg,{className:"text-indigo-500"}),C.jsx("h3",{className:"text-xl font-bold text-slate-200",children:z.category})]}),C.jsx("div",{className:"flex flex-wrap gap-3",children:z.items&&z.items.map((re,te)=>C.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:re},te))})]},z.id)):C.jsxs(C.Fragment,{children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[C.jsx(sg,{className:"text-indigo-500"}),C.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Strategy & Data"})]}),C.jsx("div",{className:"flex flex-wrap gap-3",children:["Audience Insights","Content Analytics","Roadmapping"].map(z=>C.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:z},z))})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[C.jsx(ME,{className:"text-indigo-500"}),C.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Production & Tools"})]}),C.jsx("div",{className:"flex flex-wrap gap-3",children:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"].map(z=>C.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:z},z))})]})]})})]})}),C.jsx("section",{id:"contact",className:"py-20 px-6 bg-indigo-900/20",children:C.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[C.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-6",children:"Let's Connect"}),C.jsx("div",{className:"flex flex-col md:flex-row justify-center gap-6",children:C.jsxs("a",{href:"mailto:hmstory0111@gmail.com",className:"flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700",children:[C.jsx(og,{size:20,className:"text-indigo-400"}),"hmstory0111@gmail.com"]})}),C.jsx("div",{className:"mt-20 pt-10 border-t border-slate-800 text-slate-500 text-sm",children:C.jsx("p",{children:"© 2025 Hyeongmo Kim. All rights reserved. (Updated)"})})]})}),C.jsx("style",{children:`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; }
        .input-field { width: 100%; background: #0f172a; border: 1px solid #334155; border-radius: 0.5rem; padding: 0.75rem; color: white; outline: none; transition: border-color 0.2s; }
        .input-field:focus { border-color: #6366f1; }
        .btn-primary { background: #4f46e5; color: white; padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: bold; transition: background 0.2s; }
        .btn-primary:hover { background: #4338ca; }
        .btn-secondary { background: #475569; color: white; padding: 0.5rem 1.5rem; border-radius: 0.5rem; font-weight: bold; transition: background 0.2s; }
        .btn-secondary:hover { background: #334155; }
      `})]})};SE.createRoot(document.getElementById("root")).render(C.jsx(yE.StrictMode,{children:C.jsx(rR,{})}));
