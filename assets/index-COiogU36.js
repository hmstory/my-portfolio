(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Uy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kh={exports:{}},Aa={},Qh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function mE(){if(Wm)return Re;Wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function N(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,X={};function W(O,H,Te){this.props=O,this.context=H,this.refs=X,this.updater=Te||B}W.prototype.isReactComponent={},W.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ge(){}ge.prototype=W.prototype;function de(O,H,Te){this.props=O,this.context=H,this.refs=X,this.updater=Te||B}var _e=de.prototype=new ge;_e.constructor=de,Z(_e,W.prototype),_e.isPureReactComponent=!0;var Ae=Array.isArray,ze=Object.prototype.hasOwnProperty,Ie={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(O,H,Te){var ve,Se={},Ce=null,Me=null;if(H!=null)for(ve in H.ref!==void 0&&(Me=H.ref),H.key!==void 0&&(Ce=""+H.key),H)ze.call(H,ve)&&!k.hasOwnProperty(ve)&&(Se[ve]=H[ve]);var Ve=arguments.length-2;if(Ve===1)Se.children=Te;else if(1<Ve){for(var $e=Array(Ve),Bt=0;Bt<Ve;Bt++)$e[Bt]=arguments[Bt+2];Se.children=$e}if(O&&O.defaultProps)for(ve in Ve=O.defaultProps,Ve)Se[ve]===void 0&&(Se[ve]=Ve[ve]);return{$$typeof:i,type:O,key:Ce,ref:Me,props:Se,_owner:Ie.current}}function R(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function x(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Te){return H[Te]})}var b=/\/+/g;function S(O,H){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):H.toString(36)}function Be(O,H,Te,ve,Se){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Ce){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case i:case e:Me=!0}}if(Me)return Me=O,Se=Se(Me),O=ve===""?"."+S(Me,0):ve,Ae(Se)?(Te="",O!=null&&(Te=O.replace(b,"$&/")+"/"),Be(Se,H,Te,"",function(Bt){return Bt})):Se!=null&&(V(Se)&&(Se=R(Se,Te+(!Se.key||Me&&Me.key===Se.key?"":(""+Se.key).replace(b,"$&/")+"/")+O)),H.push(Se)),1;if(Me=0,ve=ve===""?".":ve+":",Ae(O))for(var Ve=0;Ve<O.length;Ve++){Ce=O[Ve];var $e=ve+S(Ce,Ve);Me+=Be(Ce,H,Te,$e,Se)}else if($e=N(O),typeof $e=="function")for(O=$e.call(O),Ve=0;!(Ce=O.next()).done;)Ce=Ce.value,$e=ve+S(Ce,Ve++),Me+=Be(Ce,H,Te,$e,Se);else if(Ce==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Me}function at(O,H,Te){if(O==null)return O;var ve=[],Se=0;return Be(O,ve,"","",function(Ce){return H.call(Te,Ce,Se++)}),ve}function mt(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(Te){(O._status===0||O._status===-1)&&(O._status=1,O._result=Te)},function(Te){(O._status===0||O._status===-1)&&(O._status=2,O._result=Te)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},te={transition:null},z={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:te,ReactCurrentOwner:Ie};function J(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:at,forEach:function(O,H,Te){at(O,function(){H.apply(this,arguments)},Te)},count:function(O){var H=0;return at(O,function(){H++}),H},toArray:function(O){return at(O,function(H){return H})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=W,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=de,Re.StrictMode=s,Re.Suspense=y,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,Re.act=J,Re.cloneElement=function(O,H,Te){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ve=Z({},O.props),Se=O.key,Ce=O.ref,Me=O._owner;if(H!=null){if(H.ref!==void 0&&(Ce=H.ref,Me=Ie.current),H.key!==void 0&&(Se=""+H.key),O.type&&O.type.defaultProps)var Ve=O.type.defaultProps;for($e in H)ze.call(H,$e)&&!k.hasOwnProperty($e)&&(ve[$e]=H[$e]===void 0&&Ve!==void 0?Ve[$e]:H[$e])}var $e=arguments.length-2;if($e===1)ve.children=Te;else if(1<$e){Ve=Array($e);for(var Bt=0;Bt<$e;Bt++)Ve[Bt]=arguments[Bt+2];ve.children=Ve}return{$$typeof:i,type:O.type,key:Se,ref:Ce,props:ve,_owner:Me}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Re.createElement=T,Re.createFactory=function(O){var H=T.bind(null,O);return H.type=O,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:m,render:O}},Re.isValidElement=V,Re.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:mt}},Re.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},Re.startTransition=function(O){var H=te.transition;te.transition={};try{O()}finally{te.transition=H}},Re.unstable_act=J,Re.useCallback=function(O,H){return Ue.current.useCallback(O,H)},Re.useContext=function(O){return Ue.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Re.useEffect=function(O,H){return Ue.current.useEffect(O,H)},Re.useId=function(){return Ue.current.useId()},Re.useImperativeHandle=function(O,H,Te){return Ue.current.useImperativeHandle(O,H,Te)},Re.useInsertionEffect=function(O,H){return Ue.current.useInsertionEffect(O,H)},Re.useLayoutEffect=function(O,H){return Ue.current.useLayoutEffect(O,H)},Re.useMemo=function(O,H){return Ue.current.useMemo(O,H)},Re.useReducer=function(O,H,Te){return Ue.current.useReducer(O,H,Te)},Re.useRef=function(O){return Ue.current.useRef(O)},Re.useState=function(O){return Ue.current.useState(O)},Re.useSyncExternalStore=function(O,H,Te){return Ue.current.useSyncExternalStore(O,H,Te)},Re.useTransition=function(){return Ue.current.useTransition()},Re.version="18.3.1",Re}var Gm;function $d(){return Gm||(Gm=1,Qh.exports=mE()),Qh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function gE(){if(Km)return Aa;Km=1;var i=$d(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var w,A={},N=null,B=null;_!==void 0&&(N=""+_),y.key!==void 0&&(N=""+y.key),y.ref!==void 0&&(B=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(A[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)A[w]===void 0&&(A[w]=y[w]);return{$$typeof:e,type:m,key:N,ref:B,props:A,_owner:o.current}}return Aa.Fragment=t,Aa.jsx=h,Aa.jsxs=h,Aa}var Qm;function yE(){return Qm||(Qm=1,Kh.exports=gE()),Kh.exports}var C=yE(),dt=$d();const _E=Uy(dt);var wu={},Yh={exports:{}},Yt={},Xh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function vE(){return Ym||(Ym=1,(function(i){function e(te,z){var J=te.length;te.push(z);e:for(;0<J;){var O=J-1>>>1,H=te[O];if(0<o(H,z))te[O]=z,te[J]=H,J=O;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var z=te[0],J=te.pop();if(J!==z){te[0]=J;e:for(var O=0,H=te.length,Te=H>>>1;O<Te;){var ve=2*(O+1)-1,Se=te[ve],Ce=ve+1,Me=te[Ce];if(0>o(Se,J))Ce<H&&0>o(Me,Se)?(te[O]=Me,te[Ce]=J,O=Ce):(te[O]=Se,te[ve]=J,O=ve);else if(Ce<H&&0>o(Me,J))te[O]=Me,te[Ce]=J,O=Ce;else break e}}return z}function o(te,z){var J=te.sortIndex-z.sortIndex;return J!==0?J:te.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],w=1,A=null,N=3,B=!1,Z=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(te){for(var z=t(_);z!==null;){if(z.callback===null)s(_);else if(z.startTime<=te)s(_),z.sortIndex=z.expirationTime,e(y,z);else break;z=t(_)}}function Ae(te){if(X=!1,_e(te),!Z)if(t(y)!==null)Z=!0,mt(ze);else{var z=t(_);z!==null&&Ue(Ae,z.startTime-te)}}function ze(te,z){Z=!1,X&&(X=!1,ge(T),T=-1),B=!0;var J=N;try{for(_e(z),A=t(y);A!==null&&(!(A.expirationTime>z)||te&&!x());){var O=A.callback;if(typeof O=="function"){A.callback=null,N=A.priorityLevel;var H=O(A.expirationTime<=z);z=i.unstable_now(),typeof H=="function"?A.callback=H:A===t(y)&&s(y),_e(z)}else s(y);A=t(y)}if(A!==null)var Te=!0;else{var ve=t(_);ve!==null&&Ue(Ae,ve.startTime-z),Te=!1}return Te}finally{A=null,N=J,B=!1}}var Ie=!1,k=null,T=-1,R=5,V=-1;function x(){return!(i.unstable_now()-V<R)}function b(){if(k!==null){var te=i.unstable_now();V=te;var z=!0;try{z=k(!0,te)}finally{z?S():(Ie=!1,k=null)}}else Ie=!1}var S;if(typeof de=="function")S=function(){de(b)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,at=Be.port2;Be.port1.onmessage=b,S=function(){at.postMessage(null)}}else S=function(){W(b,0)};function mt(te){k=te,Ie||(Ie=!0,S())}function Ue(te,z){T=W(function(){te(i.unstable_now())},z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(te){te.callback=null},i.unstable_continueExecution=function(){Z||B||(Z=!0,mt(ze))},i.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<te?Math.floor(1e3/te):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(te){switch(N){case 1:case 2:case 3:var z=3;break;default:z=N}var J=N;N=z;try{return te()}finally{N=J}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(te,z){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var J=N;N=te;try{return z()}finally{N=J}},i.unstable_scheduleCallback=function(te,z,J){var O=i.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?O+J:O):J=O,te){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=J+H,te={id:w++,callback:z,priorityLevel:te,startTime:J,expirationTime:H,sortIndex:-1},J>O?(te.sortIndex=J,e(_,te),t(y)===null&&te===t(_)&&(X?(ge(T),T=-1):X=!0,Ue(Ae,J-O))):(te.sortIndex=H,e(y,te),Z||B||(Z=!0,mt(ze))),te},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(te){var z=N;return function(){var J=N;N=z;try{return te.apply(this,arguments)}finally{N=J}}}})(Jh)),Jh}var Xm;function EE(){return Xm||(Xm=1,Xh.exports=vE()),Xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function wE(){if(Jm)return Yt;Jm=1;var i=$d(),e=EE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function N(n){return y.call(A,n)?!0:y.call(w,n)?!1:_.test(n)?A[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Z(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ge,de);W[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ge,de);W[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ge,de);W[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function _e(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Z(r,a,d,c)&&(a=null),c||d===null?N(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ae=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),te=Symbol.iterator;function z(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Te=!1;function ve(n,r){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,I=f.length-1;1<=v&&0<=I&&d[v]!==f[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==f[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==f[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Se(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=ve(n.type,!1),n;case 11:return n=ve(n.type.render,!1),n;case 1:return n=ve(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ie:return"Portal";case R:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case b:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case at:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case mt:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Bt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ps(n){n._valueTracker||(n._valueTracker=Bt(n))}function No(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Nr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ms(n,r){var a=r.checked;return J({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ol(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ve(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gs(n,r){r=r.checked,r!=null&&_e(n,"checked",r,!1)}function ki(n,r){gs(n,r);var a=Ve(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?lt(n,r.type,a):r.hasOwnProperty("defaultValue")&&lt(n,r.type,Ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Do(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function lt(n,r,a){(r!=="number"||Nr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rt=Array.isArray;function vn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Vo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Oo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rt(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ve(a)}}function al(n,r){var a=Ve(r.value),c=Ve(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Dr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function bo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?bo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,ll=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xi(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ul=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(n){ul.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Or[r]=Or[n]})});function br(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Or.hasOwnProperty(n)&&Or[n]?(""+r).trim():r+"px"}function _s(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=br(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function En(n,r){if(r){if(Lo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lr=null;function Es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var or=null,ar=null,tt=null;function Mo(n){if(n=ca(n)){if(typeof or!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ll(r),or(n.stateNode,n.type,r))}}function Mr(n){ar?tt?tt.push(n):tt=[n]:ar=n}function Fr(){if(ar){var n=ar,r=tt;if(tt=ar=null,Mo(n),r)for(n=0;n<r.length;n++)Mo(r[n])}}function cl(n,r){return n(r)}function hl(){}var On=!1;function dl(n,r,a){if(On)return n(r,a);On=!0;try{return cl(n,r,a)}finally{On=!1,(ar!==null||tt!==null)&&(hl(),Fr())}}function Ni(n,r){var a=n.stateNode;if(a===null)return null;var c=Ll(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Ur=!1;if(m)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Ur=!1}function fl(n,r,a,c,d,f,v,I,P){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var lr=!1,bn=null,ws=!1,cn=null,pl={onError:function(n){lr=!0,bn=n}};function ml(n,r,a,c,d,f,v,I,P){lr=!1,bn=null,fl.apply(pl,arguments)}function Fo(n,r,a,c,d,f,v,I,P){if(ml.apply(this,arguments),lr){if(lr){var U=bn;lr=!1,bn=null}else throw Error(t(198));ws||(ws=!0,cn=U)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Uo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function gl(n){if(wn(n)!==n)throw Error(t(188))}function yl(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return gl(d),n;if(f===c)return gl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=f;break}if(I===c){v=!0,c=d,a=f;break}I=I.sibling}if(!v){for(I=f.child;I;){if(I===a){v=!0,a=f,c=d;break}if(I===c){v=!0,c=f,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function _l(n){return n=yl(n),n!==null?Di(n):null}function Di(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Di(n);if(r!==null)return r;n=n.sibling}return null}var jo=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Vi=e.unstable_shouldYield,ur=e.unstable_requestPaint,Ge=e.unstable_now,Ac=e.unstable_getCurrentPriorityLevel,Is=e.unstable_ImmediatePriority,zo=e.unstable_UserBlockingPriority,Oi=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,Ss=e.unstable_IdlePriority,bi=null,Zt=null;function vl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Li,Ln=Math.log,hn=Math.LN2;function Li(n){return n>>>=0,n===0?32:31-(Ln(n)/hn|0)|0}var Mn=64,zr=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Le(I):(f&=v,f!==0&&(c=Le(f)))}else v=a&~d,v!==0?c=Le(v):f!==0&&(c=Le(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-en(r),d=1<<a,c|=n[a],r&=~d;return c}function Mi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-en(f),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Mi(I,r)):P<=r&&(n.expiredLanes|=I),f&=~I}}function $o(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qo(){var n=Mn;return Mn<<=1,(Mn&4194240)===0&&(Mn=64),n}function Ho(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Ui(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-en(r),n[r]=a}function Rc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-en(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Wo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-en(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ne=0;function Fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Go,As,Ko,Qo,Yo,Un=!1,Rs=[],jn=null,zn=null,Rt=null,ji=new Map,hr=new Map,tn=[],El="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Br(n,r){switch(n){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(r.pointerId)}}function Tn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ca(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function wl(n,r,a,c,d){switch(r){case"focusin":return jn=Tn(jn,n,r,a,c,d),!0;case"dragenter":return zn=Tn(zn,n,r,a,c,d),!0;case"mouseover":return Rt=Tn(Rt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,Tn(ji.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,hr.set(f,Tn(hr.get(f)||null,n,r,a,c,d)),!0}return!1}function Cs(n){var r=qi(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Uo(a),r!==null){n.blockedOn=r,Yo(n.priority,function(){Ko(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Lr=c,a.target.dispatchEvent(c),Lr=null}else return r=ca(a),r!==null&&As(r),n.blockedOn=a,!1;r.shift()}return!0}function Tl(n,r,a){qe(n)&&a.delete(r)}function Cc(){Un=!1,jn!==null&&qe(jn)&&(jn=null),zn!==null&&qe(zn)&&(zn=null),Rt!==null&&qe(Rt)&&(Rt=null),ji.forEach(Tl),hr.forEach(Tl)}function $r(n,r){n.blockedOn===r&&(n.blockedOn=null,Un||(Un=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cc)))}function qr(n){function r(d){return $r(d,n)}if(0<Rs.length){$r(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(jn!==null&&$r(jn,n),zn!==null&&$r(zn,n),Rt!==null&&$r(Rt,n),ji.forEach(r),hr.forEach(r),a=0;a<tn.length;a++)c=tn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(a=tn[0],a.blockedOn===null);)Cs(a),a.blockedOn===null&&tn.shift()}var dr=Ae.ReactCurrentBatchConfig,fr=!0;function Bn(n,r,a,c){var d=Ne,f=dr.transition;dr.transition=null;try{Ne=1,Xo(n,r,a,c)}finally{Ne=d,dr.transition=f}}function Il(n,r,a,c){var d=Ne,f=dr.transition;dr.transition=null;try{Ne=4,Xo(n,r,a,c)}finally{Ne=d,dr.transition=f}}function Xo(n,r,a,c){if(fr){var d=Ps(n,r,a,c);if(d===null)Fc(n,r,c,$n,a),Br(n,c);else if(wl(d,n,r,a,c))c.stopPropagation();else if(Br(n,c),r&4&&-1<El.indexOf(n)){for(;d!==null;){var f=ca(d);if(f!==null&&Go(f),f=Ps(n,r,a,c),f===null&&Fc(n,r,c,$n,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Fc(n,r,c,null,a)}}var $n=null;function Ps(n,r,a,c){if($n=null,n=Es(c),n=qi(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Uo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return $n=n,null}function ks(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ac()){case Is:return 1;case zo:return 4;case Oi:case Bo:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var nn=null,xs=null,pr=null;function Sl(){if(pr)return pr;var n,r=xs,a=r.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return pr=d.slice(n,1<c?1-c:void 0)}function zi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function Jo(){return!1}function Vt(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qn:Jo,this.isPropagationStopped=Jo,this}return J(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),r}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Vt(Hn),Hr=J({},Hn,{view:0,detail:0}),Ns=Vt(Hr),Ds,Vs,rn,$i=J({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Ds=n.screenX-rn.screenX,Vs=n.screenY-rn.screenY):Vs=Ds=0,rn=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Zo=Vt($i),Al=J({},$i,{dataTransfer:0}),Rl=Vt(Al),Os=J({},Hr,{relatedTarget:0}),Ct=Vt(Os),Cl=J({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pl=Vt(Cl),Wr=J({},Hn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Vt(Wr),p=J({},Hn,{data:0}),g=Vt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function Ee(){return ee}var it=J({},Hr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=zi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(n){return n.type==="keypress"?zi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=Vt(it),ut=J({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Vt(ut),mr=J({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),Wn=Vt(mr),Gn=J({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bs=Vt(Gn),ea=J({},$i,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=Vt(ea),c0=[9,13,27,32],Pc=m&&"CompositionEvent"in window,ta=null;m&&"documentMode"in document&&(ta=document.documentMode);var h0=m&&"TextEvent"in window&&!ta,Ff=m&&(!Pc||ta&&8<ta&&11>=ta),Uf=" ",jf=!1;function zf(n,r){switch(n){case"keyup":return c0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function d0(n,r){switch(n){case"compositionend":return Bf(r);case"keypress":return r.which!==32?null:(jf=!0,Uf);case"textInput":return n=r.data,n===Uf&&jf?null:n;default:return null}}function f0(n,r){if(Ls)return n==="compositionend"||!Pc&&zf(n,r)?(n=Sl(),pr=xs=nn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ff&&r.locale!=="ko"?null:r.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!p0[n.type]:r==="textarea"}function qf(n,r,a,c){Mr(c),r=Vl(r,"onChange"),0<r.length&&(a=new Bi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var na=null,ra=null;function m0(n){lp(n,0)}function kl(n){var r=zs(n);if(No(r))return n}function g0(n,r){if(n==="change")return r}var Hf=!1;if(m){var kc;if(m){var xc="oninput"in document;if(!xc){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),xc=typeof Wf.oninput=="function"}kc=xc}else kc=!1;Hf=kc&&(!document.documentMode||9<document.documentMode)}function Gf(){na&&(na.detachEvent("onpropertychange",Kf),ra=na=null)}function Kf(n){if(n.propertyName==="value"&&kl(ra)){var r=[];qf(r,ra,n,Es(n)),dl(m0,r)}}function y0(n,r,a){n==="focusin"?(Gf(),na=r,ra=a,na.attachEvent("onpropertychange",Kf)):n==="focusout"&&Gf()}function _0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(ra)}function v0(n,r){if(n==="click")return kl(r)}function E0(n,r){if(n==="input"||n==="change")return kl(r)}function w0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var In=typeof Object.is=="function"?Object.is:w0;function ia(n,r){if(In(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!In(n[d],r[d]))return!1}return!0}function Qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yf(n,r){var a=Qf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qf(a)}}function Xf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Xf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jf(){for(var n=window,r=Nr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Nr(n.document)}return r}function Nc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function T0(n){var r=Jf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Xf(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=Yf(a,f);var v=Yf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var I0=m&&"documentMode"in document&&11>=document.documentMode,Ms=null,Dc=null,sa=null,Vc=!1;function Zf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||Ms==null||Ms!==Nr(c)||(c=Ms,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ia(sa,c)||(sa=c,c=Vl(Dc,"onSelect"),0<c.length&&(r=new Bi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ms)))}function xl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Fs={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Oc={},ep={};m&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Nl(n){if(Oc[n])return Oc[n];if(!Fs[n])return n;var r=Fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ep)return Oc[n]=r[a];return n}var tp=Nl("animationend"),np=Nl("animationiteration"),rp=Nl("animationstart"),ip=Nl("transitionend"),sp=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,r){sp.set(n,r),u(r,[n])}for(var bc=0;bc<op.length;bc++){var Lc=op[bc],S0=Lc.toLowerCase(),A0=Lc[0].toUpperCase()+Lc.slice(1);Gr(S0,"on"+A0)}Gr(tp,"onAnimationEnd"),Gr(np,"onAnimationIteration"),Gr(rp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(ip,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function ap(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Fo(c,r,void 0,n),n.currentTarget=null}function lp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,U=I.currentTarget;if(I=I.listener,P!==f&&d.isPropagationStopped())break e;ap(d,I,U),f=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,U=I.currentTarget,I=I.listener,P!==f&&d.isPropagationStopped())break e;ap(d,I,U),f=P}}}if(ws)throw n=cn,ws=!1,cn=null,n}function Ke(n,r){var a=r[qc];a===void 0&&(a=r[qc]=new Set);var c=n+"__bubble";a.has(c)||(up(r,n,2,!1),a.add(c))}function Mc(n,r,a){var c=0;r&&(c|=4),up(a,n,c,r)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function aa(n){if(!n[Dl]){n[Dl]=!0,s.forEach(function(a){a!=="selectionchange"&&(R0.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Dl]||(r[Dl]=!0,Mc("selectionchange",!1,r))}}function up(n,r,a,c){switch(ks(r)){case 1:var d=Bn;break;case 4:d=Il;break;default:d=Xo}a=d.bind(null,r,a,n),d=void 0,!Ur||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Fc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=qi(I),v===null)return;if(P=v.tag,P===5||P===6){c=f=v;continue e}I=I.parentNode}}c=c.return}dl(function(){var U=f,K=Es(a),Q=[];e:{var G=sp.get(n);if(G!==void 0){var re=Bi,oe=n;switch(n){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":re=je;break;case"focusin":oe="focus",re=Ct;break;case"focusout":oe="blur",re=Ct;break;case"beforeblur":case"afterblur":re=Ct;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=Wn;break;case tp:case np:case rp:re=Pl;break;case ip:re=bs;break;case"scroll":re=Ns;break;case"wheel":re=u0;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=sn}var ae=(r&4)!==0,st=!ae&&n==="scroll",L=ae?G!==null?G+"Capture":null:G;ae=[];for(var D=U,F;D!==null;){F=D;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,L!==null&&(Y=Ni(D,L),Y!=null&&ae.push(la(D,Y,F)))),st)break;D=D.return}0<ae.length&&(G=new re(G,oe,null,a,K),Q.push({event:G,listeners:ae}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Lr&&(oe=a.relatedTarget||a.fromElement)&&(qi(oe)||oe[gr]))break e;if((re||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,re?(oe=a.relatedTarget||a.toElement,re=U,oe=oe?qi(oe):null,oe!==null&&(st=wn(oe),oe!==st||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=U),re!==oe)){if(ae=Zo,Y="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ae=sn,Y="onPointerLeave",L="onPointerEnter",D="pointer"),st=re==null?G:zs(re),F=oe==null?G:zs(oe),G=new ae(Y,D+"leave",re,a,K),G.target=st,G.relatedTarget=F,Y=null,qi(K)===U&&(ae=new ae(L,D+"enter",oe,a,K),ae.target=F,ae.relatedTarget=st,Y=ae),st=Y,re&&oe)t:{for(ae=re,L=oe,D=0,F=ae;F;F=Us(F))D++;for(F=0,Y=L;Y;Y=Us(Y))F++;for(;0<D-F;)ae=Us(ae),D--;for(;0<F-D;)L=Us(L),F--;for(;D--;){if(ae===L||L!==null&&ae===L.alternate)break t;ae=Us(ae),L=Us(L)}ae=null}else ae=null;re!==null&&cp(Q,G,re,ae,!1),oe!==null&&st!==null&&cp(Q,st,oe,ae,!0)}}e:{if(G=U?zs(U):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var le=g0;else if($f(G))if(Hf)le=E0;else{le=_0;var ce=y0}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(le=v0);if(le&&(le=le(n,U))){qf(Q,le,a,K);break e}ce&&ce(n,G,U),n==="focusout"&&(ce=G._wrapperState)&&ce.controlled&&G.type==="number"&&lt(G,"number",G.value)}switch(ce=U?zs(U):window,n){case"focusin":($f(ce)||ce.contentEditable==="true")&&(Ms=ce,Dc=U,sa=null);break;case"focusout":sa=Dc=Ms=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Zf(Q,a,K);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":Zf(Q,a,K)}var he;if(Pc)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Ls?zf(n,a)&&(me="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Ff&&a.locale!=="ko"&&(Ls||me!=="onCompositionStart"?me==="onCompositionEnd"&&Ls&&(he=Sl()):(nn=K,xs="value"in nn?nn.value:nn.textContent,Ls=!0)),ce=Vl(U,me),0<ce.length&&(me=new g(me,n,null,a,K),Q.push({event:me,listeners:ce}),he?me.data=he:(he=Bf(a),he!==null&&(me.data=he)))),(he=h0?d0(n,a):f0(n,a))&&(U=Vl(U,"onBeforeInput"),0<U.length&&(K=new g("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:U}),K.data=he))}lp(Q,r)})}function la(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Vl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ni(n,a),f!=null&&c.unshift(la(n,f,d)),f=Ni(n,r),f!=null&&c.push(la(n,f,d))),n=n.return}return c}function Us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,U=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&U!==null&&(I=U,d?(P=Ni(a,f),P!=null&&v.unshift(la(a,P,I))):d||(P=Ni(a,f),P!=null&&v.push(la(a,P,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var C0=/\r\n?/g,P0=/\u0000|\uFFFD/g;function hp(n){return(typeof n=="string"?n:""+n).replace(C0,`
`).replace(P0,"")}function Ol(n,r,a){if(r=hp(r),hp(n)!==r&&a)throw Error(t(425))}function bl(){}var Uc=null,jc=null;function zc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,x0=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(n){return dp.resolve(null).then(n).catch(N0)}:Bc;function N0(n){setTimeout(function(){throw n})}function $c(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),qr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);qr(r)}function Kr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),Kn="__reactFiber$"+js,ua="__reactProps$"+js,gr="__reactContainer$"+js,qc="__reactEvents$"+js,D0="__reactListeners$"+js,V0="__reactHandles$"+js;function qi(n){var r=n[Kn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[gr]||a[Kn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=fp(n);n!==null;){if(a=n[Kn])return a;n=fp(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[Kn]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ll(n){return n[ua]||null}var Hc=[],Bs=-1;function Qr(n){return{current:n}}function Qe(n){0>Bs||(n.current=Hc[Bs],Hc[Bs]=null,Bs--)}function He(n,r){Bs++,Hc[Bs]=n.current,n.current=r}var Yr={},Ot=Qr(Yr),Ht=Qr(!1),Hi=Yr;function $s(n,r){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Ml(){Qe(Ht),Qe(Ot)}function pp(n,r,a){if(Ot.current!==Yr)throw Error(t(168));He(Ot,r),He(Ht,a)}function mp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return J({},a,c)}function Fl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,Hi=Ot.current,He(Ot,n),He(Ht,Ht.current),!0}function gp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=mp(n,r,Hi),c.__reactInternalMemoizedMergedChildContext=n,Qe(Ht),Qe(Ot),He(Ot,n)):Qe(Ht),He(Ht,a)}var yr=null,Ul=!1,Wc=!1;function yp(n){yr===null?yr=[n]:yr.push(n)}function O0(n){Ul=!0,yp(n)}function Xr(){if(!Wc&&yr!==null){Wc=!0;var n=0,r=Ne;try{var a=yr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,Ul=!1}catch(d){throw yr!==null&&(yr=yr.slice(n+1)),jo(Is,Xr),d}finally{Ne=r,Wc=!1}}return null}var qs=[],Hs=0,jl=null,zl=0,dn=[],fn=0,Wi=null,_r=1,vr="";function Gi(n,r){qs[Hs++]=zl,qs[Hs++]=jl,jl=n,zl=r}function _p(n,r,a){dn[fn++]=_r,dn[fn++]=vr,dn[fn++]=Wi,Wi=n;var c=_r;n=vr;var d=32-en(c)-1;c&=~(1<<d),a+=1;var f=32-en(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,_r=1<<32-en(r)+d|a<<d|c,vr=f+n}else _r=1<<f|a<<d|c,vr=n}function Gc(n){n.return!==null&&(Gi(n,1),_p(n,1,0))}function Kc(n){for(;n===jl;)jl=qs[--Hs],qs[Hs]=null,zl=qs[--Hs],qs[Hs]=null;for(;n===Wi;)Wi=dn[--fn],dn[fn]=null,vr=dn[--fn],dn[fn]=null,_r=dn[--fn],dn[fn]=null}var on=null,an=null,Xe=!1,Sn=null;function vp(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Ep(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=Kr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Wi!==null?{id:_r,overflow:vr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yc(n){if(Xe){var r=an;if(r){var a=r;if(!Ep(n,r)){if(Qc(n))throw Error(t(418));r=Kr(a.nextSibling);var c=on;r&&Ep(n,r)?vp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,on=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,on=n}}}function wp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Bl(n){if(n!==on)return!1;if(!Xe)return wp(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!zc(n.type,n.memoizedProps)),r&&(r=an)){if(Qc(n))throw Tp(),Error(t(418));for(;r;)vp(n,r),r=Kr(r.nextSibling)}if(wp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){an=Kr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?Kr(n.stateNode.nextSibling):null;return!0}function Tp(){for(var n=an;n;)n=Kr(n.nextSibling)}function Ws(){an=on=null,Xe=!1}function Xc(n){Sn===null?Sn=[n]:Sn.push(n)}var b0=Ae.ReactCurrentBatchConfig;function ha(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var I=d.refs;v===null?delete I[f]:I[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $l(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ip(n){var r=n._init;return r(n._payload)}function Sp(n){function r(L,D){if(n){var F=L.deletions;F===null?(L.deletions=[D],L.flags|=16):F.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)r(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=si(L,D),L.index=0,L.sibling=null,L}function f(L,D,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<D?(L.flags|=2,D):F):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,D,F,Y){return D===null||D.tag!==6?(D=Bh(F,L.mode,Y),D.return=L,D):(D=d(D,F),D.return=L,D)}function P(L,D,F,Y){var le=F.type;return le===k?K(L,D,F.props.children,Y,F.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===mt&&Ip(le)===D.type)?(Y=d(D,F.props),Y.ref=ha(L,D,F),Y.return=L,Y):(Y=fu(F.type,F.key,F.props,null,L.mode,Y),Y.ref=ha(L,D,F),Y.return=L,Y)}function U(L,D,F,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=$h(F,L.mode,Y),D.return=L,D):(D=d(D,F.children||[]),D.return=L,D)}function K(L,D,F,Y,le){return D===null||D.tag!==7?(D=ts(F,L.mode,Y,le),D.return=L,D):(D=d(D,F),D.return=L,D)}function Q(L,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Bh(""+D,L.mode,F),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ze:return F=fu(D.type,D.key,D.props,null,L.mode,F),F.ref=ha(L,null,D),F.return=L,F;case Ie:return D=$h(D,L.mode,F),D.return=L,D;case mt:var Y=D._init;return Q(L,Y(D._payload),F)}if(rt(D)||z(D))return D=ts(D,L.mode,F,null),D.return=L,D;$l(L,D)}return null}function G(L,D,F,Y){var le=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return le!==null?null:I(L,D,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:return F.key===le?P(L,D,F,Y):null;case Ie:return F.key===le?U(L,D,F,Y):null;case mt:return le=F._init,G(L,D,le(F._payload),Y)}if(rt(F)||z(F))return le!==null?null:K(L,D,F,Y,null);$l(L,F)}return null}function re(L,D,F,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(F)||null,I(D,L,""+Y,le);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ze:return L=L.get(Y.key===null?F:Y.key)||null,P(D,L,Y,le);case Ie:return L=L.get(Y.key===null?F:Y.key)||null,U(D,L,Y,le);case mt:var ce=Y._init;return re(L,D,F,ce(Y._payload),le)}if(rt(Y)||z(Y))return L=L.get(F)||null,K(D,L,Y,le,null);$l(D,Y)}return null}function oe(L,D,F,Y){for(var le=null,ce=null,he=D,me=D=0,Tt=null;he!==null&&me<F.length;me++){he.index>me?(Tt=he,he=null):Tt=he.sibling;var be=G(L,he,F[me],Y);if(be===null){he===null&&(he=Tt);break}n&&he&&be.alternate===null&&r(L,he),D=f(be,D,me),ce===null?le=be:ce.sibling=be,ce=be,he=Tt}if(me===F.length)return a(L,he),Xe&&Gi(L,me),le;if(he===null){for(;me<F.length;me++)he=Q(L,F[me],Y),he!==null&&(D=f(he,D,me),ce===null?le=he:ce.sibling=he,ce=he);return Xe&&Gi(L,me),le}for(he=c(L,he);me<F.length;me++)Tt=re(he,L,me,F[me],Y),Tt!==null&&(n&&Tt.alternate!==null&&he.delete(Tt.key===null?me:Tt.key),D=f(Tt,D,me),ce===null?le=Tt:ce.sibling=Tt,ce=Tt);return n&&he.forEach(function(oi){return r(L,oi)}),Xe&&Gi(L,me),le}function ae(L,D,F,Y){var le=z(F);if(typeof le!="function")throw Error(t(150));if(F=le.call(F),F==null)throw Error(t(151));for(var ce=le=null,he=D,me=D=0,Tt=null,be=F.next();he!==null&&!be.done;me++,be=F.next()){he.index>me?(Tt=he,he=null):Tt=he.sibling;var oi=G(L,he,be.value,Y);if(oi===null){he===null&&(he=Tt);break}n&&he&&oi.alternate===null&&r(L,he),D=f(oi,D,me),ce===null?le=oi:ce.sibling=oi,ce=oi,he=Tt}if(be.done)return a(L,he),Xe&&Gi(L,me),le;if(he===null){for(;!be.done;me++,be=F.next())be=Q(L,be.value,Y),be!==null&&(D=f(be,D,me),ce===null?le=be:ce.sibling=be,ce=be);return Xe&&Gi(L,me),le}for(he=c(L,he);!be.done;me++,be=F.next())be=re(he,L,me,be.value,Y),be!==null&&(n&&be.alternate!==null&&he.delete(be.key===null?me:be.key),D=f(be,D,me),ce===null?le=be:ce.sibling=be,ce=be);return n&&he.forEach(function(pE){return r(L,pE)}),Xe&&Gi(L,me),le}function st(L,D,F,Y){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:e:{for(var le=F.key,ce=D;ce!==null;){if(ce.key===le){if(le=F.type,le===k){if(ce.tag===7){a(L,ce.sibling),D=d(ce,F.props.children),D.return=L,L=D;break e}}else if(ce.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===mt&&Ip(le)===ce.type){a(L,ce.sibling),D=d(ce,F.props),D.ref=ha(L,ce,F),D.return=L,L=D;break e}a(L,ce);break}else r(L,ce);ce=ce.sibling}F.type===k?(D=ts(F.props.children,L.mode,Y,F.key),D.return=L,L=D):(Y=fu(F.type,F.key,F.props,null,L.mode,Y),Y.ref=ha(L,D,F),Y.return=L,L=Y)}return v(L);case Ie:e:{for(ce=F.key;D!==null;){if(D.key===ce)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(L,D.sibling),D=d(D,F.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else r(L,D);D=D.sibling}D=$h(F,L.mode,Y),D.return=L,L=D}return v(L);case mt:return ce=F._init,st(L,D,ce(F._payload),Y)}if(rt(F))return oe(L,D,F,Y);if(z(F))return ae(L,D,F,Y);$l(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,F),D.return=L,L=D):(a(L,D),D=Bh(F,L.mode,Y),D.return=L,L=D),v(L)):a(L,D)}return st}var Gs=Sp(!0),Ap=Sp(!1),ql=Qr(null),Hl=null,Ks=null,Jc=null;function Zc(){Jc=Ks=Hl=null}function eh(n){var r=ql.current;Qe(ql),n._currentValue=r}function th(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Qs(n,r){Hl=n,Jc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(Hl===null)throw Error(t(308));Ks=n,Hl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var Ki=null;function nh(n){Ki===null?Ki=[n]:Ki.push(n)}function Rp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,nh(r)):(a.next=d.next,d.next=a),r.interleaved=a,Er(n,c)}function Er(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function rh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Er(n,a)}return d=c.interleaved,d===null?(r.next=r,nh(c)):(r.next=d.next,d.next=r),c.interleaved=r,Er(n,a)}function Wl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Wo(n,a)}}function Pp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Gl(n,r,a,c){var d=n.updateQueue;Jr=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,U=P.next;P.next=null,v===null?f=U:v.next=U,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=U:I.next=U,K.lastBaseUpdate=P))}if(f!==null){var Q=d.baseState;v=0,K=U=P=null,I=f;do{var G=I.lane,re=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:re,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,ae=I;switch(G=r,re=a,ae.tag){case 1:if(oe=ae.payload,typeof oe=="function"){Q=oe.call(re,Q,G);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ae.payload,G=typeof oe=="function"?oe.call(re,Q,G):oe,G==null)break e;Q=J({},Q,G);break e;case 2:Jr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else re={eventTime:re,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(U=K=re,P=Q):K=K.next=re,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Xi|=v,n.lanes=v,n.memoizedState=Q}}function kp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var da={},Qn=Qr(da),fa=Qr(da),pa=Qr(da);function Qi(n){if(n===da)throw Error(t(174));return n}function ih(n,r){switch(He(pa,r),He(fa,n),He(Qn,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ys(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ys(r,n)}Qe(Qn),He(Qn,r)}function Ys(){Qe(Qn),Qe(fa),Qe(pa)}function xp(n){Qi(pa.current);var r=Qi(Qn.current),a=ys(r,n.type);r!==a&&(He(fa,n),He(Qn,a))}function sh(n){fa.current===n&&(Qe(Qn),Qe(fa))}var Je=Qr(0);function Kl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var oh=[];function ah(){for(var n=0;n<oh.length;n++)oh[n]._workInProgressVersionPrimary=null;oh.length=0}var Ql=Ae.ReactCurrentDispatcher,lh=Ae.ReactCurrentBatchConfig,Yi=0,Ze=null,gt=null,Et=null,Yl=!1,ma=!1,ga=0,L0=0;function bt(){throw Error(t(321))}function uh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!In(n[a],r[a]))return!1;return!0}function ch(n,r,a,c,d,f){if(Yi=f,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ql.current=n===null||n.memoizedState===null?j0:z0,n=a(c,d),ma){f=0;do{if(ma=!1,ga=0,25<=f)throw Error(t(301));f+=1,Et=gt=null,r.updateQueue=null,Ql.current=B0,n=a(c,d)}while(ma)}if(Ql.current=Zl,r=gt!==null&&gt.next!==null,Yi=0,Et=gt=Ze=null,Yl=!1,r)throw Error(t(300));return n}function hh(){var n=ga!==0;return ga=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Ze.memoizedState=Et=n:Et=Et.next=n,Et}function mn(){if(gt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=gt.next;var r=Et===null?Ze.memoizedState:Et.next;if(r!==null)Et=r,gt=n;else{if(n===null)throw Error(t(310));gt=n,n={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?Ze.memoizedState=Et=n:Et=Et.next=n}return Et}function ya(n,r){return typeof r=="function"?r(n):r}function dh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=gt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var I=v=null,P=null,U=f;do{var K=U.lane;if((Yi&K)===K)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(I=P=Q,v=c):P=P.next=Q,Ze.lanes|=K,Xi|=K}U=U.next}while(U!==null&&U!==f);P===null?v=c:P.next=I,In(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,Xi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function fh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);In(f,r.memoizedState)||(Gt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Np(){}function Dp(n,r){var a=Ze,c=mn(),d=r(),f=!In(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,ph(bp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,_a(9,Op.bind(null,a,c,d,r),void 0,null),wt===null)throw Error(t(349));(Yi&30)!==0||Vp(a,r,d)}return d}function Vp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Op(n,r,a,c){r.value=a,r.getSnapshot=c,Lp(r)&&Mp(n)}function bp(n,r,a){return a(function(){Lp(r)&&Mp(n)})}function Lp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!In(n,a)}catch{return!0}}function Mp(n){var r=Er(n,1);r!==null&&Pn(r,n,1,-1)}function Fp(n){var r=Yn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},r.queue=n,n=n.dispatch=U0.bind(null,Ze,n),[r.memoizedState,n]}function _a(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Up(){return mn().memoizedState}function Xl(n,r,a,c){var d=Yn();Ze.flags|=n,d.memoizedState=_a(1|r,a,void 0,c===void 0?null:c)}function Jl(n,r,a,c){var d=mn();c=c===void 0?null:c;var f=void 0;if(gt!==null){var v=gt.memoizedState;if(f=v.destroy,c!==null&&uh(c,v.deps)){d.memoizedState=_a(r,a,f,c);return}}Ze.flags|=n,d.memoizedState=_a(1|r,a,f,c)}function jp(n,r){return Xl(8390656,8,n,r)}function ph(n,r){return Jl(2048,8,n,r)}function zp(n,r){return Jl(4,2,n,r)}function Bp(n,r){return Jl(4,4,n,r)}function $p(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function qp(n,r,a){return a=a!=null?a.concat([n]):null,Jl(4,4,$p.bind(null,r,n),a)}function mh(){}function Hp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&uh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Wp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&uh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Gp(n,r,a){return(Yi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(In(a,r)||(a=qo(),Ze.lanes|=a,Xi|=a,n.baseState=!0),r)}function M0(n,r){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=lh.transition;lh.transition={};try{n(!1),r()}finally{Ne=a,lh.transition=c}}function Kp(){return mn().memoizedState}function F0(n,r,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Qp(n))Yp(r,a);else if(a=Rp(n,r,a,c),a!==null){var d=qt();Pn(a,n,c,d),Xp(a,r,c)}}function U0(n,r,a){var c=ri(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qp(n))Yp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,I=f(v,a);if(d.hasEagerState=!0,d.eagerState=I,In(I,v)){var P=r.interleaved;P===null?(d.next=d,nh(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=Rp(n,r,d,c),a!==null&&(d=qt(),Pn(a,n,c,d),Xp(a,r,c))}}function Qp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Yp(n,r){ma=Yl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Xp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Wo(n,a)}}var Zl={readContext:pn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},j0={readContext:pn,useCallback:function(n,r){return Yn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:jp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Xl(4194308,4,$p.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Xl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Xl(4,2,n,r)},useMemo:function(n,r){var a=Yn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Yn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=F0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Yn();return n={current:n},r.memoizedState=n},useState:Fp,useDebugValue:mh,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Fp(!1),r=n[0];return n=M0.bind(null,n[1]),Yn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Yn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),wt===null)throw Error(t(349));(Yi&30)!==0||Vp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,jp(bp.bind(null,c,f,n),[n]),c.flags|=2048,_a(9,Op.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Yn(),r=wt.identifierPrefix;if(Xe){var a=vr,c=_r;a=(c&~(1<<32-en(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ga++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=L0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},z0={readContext:pn,useCallback:Hp,useContext:pn,useEffect:ph,useImperativeHandle:qp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Wp,useReducer:dh,useRef:Up,useState:function(){return dh(ya)},useDebugValue:mh,useDeferredValue:function(n){var r=mn();return Gp(r,gt.memoizedState,n)},useTransition:function(){var n=dh(ya)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Np,useSyncExternalStore:Dp,useId:Kp,unstable_isNewReconciler:!1},B0={readContext:pn,useCallback:Hp,useContext:pn,useEffect:ph,useImperativeHandle:qp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Wp,useReducer:fh,useRef:Up,useState:function(){return fh(ya)},useDebugValue:mh,useDeferredValue:function(n){var r=mn();return gt===null?r.memoizedState=n:Gp(r,gt.memoizedState,n)},useTransition:function(){var n=fh(ya)[0],r=mn().memoizedState;return[n,r]},useMutableSource:Np,useSyncExternalStore:Dp,useId:Kp,unstable_isNewReconciler:!1};function An(n,r){if(n&&n.defaultProps){r=J({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function gh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:J({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var eu={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=qt(),d=ri(n),f=wr(c,d);f.payload=r,a!=null&&(f.callback=a),r=Zr(n,f,d),r!==null&&(Pn(r,n,d,c),Wl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=qt(),d=ri(n),f=wr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=Zr(n,f,d),r!==null&&(Pn(r,n,d,c),Wl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=qt(),c=ri(n),d=wr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Zr(n,d,c),r!==null&&(Pn(r,n,c,a),Wl(r,n,c))}};function Jp(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!ia(a,c)||!ia(d,f):!0}function Zp(n,r,a){var c=!1,d=Yr,f=r.contextType;return typeof f=="object"&&f!==null?f=pn(f):(d=Wt(r)?Hi:Ot.current,c=r.contextTypes,f=(c=c!=null)?$s(n,d):Yr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=eu,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function em(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&eu.enqueueReplaceState(r,r.state,null)}function yh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},rh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=pn(f):(f=Wt(r)?Hi:Ot.current,d.context=$s(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(gh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&eu.enqueueReplaceState(d,d.state,null),Gl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function _h(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function vh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function tm(n,r,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){au||(au=!0,Oh=c),vh(n,r)},a}function nm(n,r,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){vh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){vh(n,r),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function rm(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new $0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=rE.bind(null,n,r,a),r.then(n,n))}function im(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function sm(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=wr(-1,1),r.tag=2,Zr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var q0=Ae.ReactCurrentOwner,Gt=!1;function $t(n,r,a,c){r.child=n===null?Ap(r,null,a,c):Gs(r,n.child,a,c)}function om(n,r,a,c,d){a=a.render;var f=r.ref;return Qs(r,d),c=ch(n,r,a,c,f,d),a=hh(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Tr(n,r,d)):(Xe&&a&&Gc(r),r.flags|=1,$t(n,r,c,d),r.child)}function am(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!zh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,lm(n,r,f,c,d)):(n=fu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(v,c)&&n.ref===r.ref)return Tr(n,r,d)}return r.flags|=1,n=si(f,c),n.ref=r.ref,n.return=r,r.child=n}function lm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ia(f,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return r.lanes=n.lanes,Tr(n,r,d)}return Eh(n,r,a,c,d)}function um(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Zs,ln),ln|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Zs,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(Zs,ln),ln|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,He(Zs,ln),ln|=c;return $t(n,r,d,a),r.child}function cm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Eh(n,r,a,c,d){var f=Wt(a)?Hi:Ot.current;return f=$s(r,f),Qs(r,d),a=ch(n,r,a,c,f,d),c=hh(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Tr(n,r,d)):(Xe&&c&&Gc(r),r.flags|=1,$t(n,r,a,d),r.child)}function hm(n,r,a,c,d){if(Wt(a)){var f=!0;Fl(r)}else f=!1;if(Qs(r,d),r.stateNode===null)nu(n,r),Zp(r,a,c),yh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var P=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=pn(U):(U=Wt(a)?Hi:Ot.current,U=$s(r,U));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==U)&&em(r,v,c,U),Jr=!1;var G=r.memoizedState;v.state=G,Gl(r,c,v,d),P=r.memoizedState,I!==c||G!==P||Ht.current||Jr?(typeof K=="function"&&(gh(r,a,K,c),P=r.memoizedState),(I=Jr||Jp(r,a,I,c,G,P,U))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=U,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Cp(n,r),I=r.memoizedProps,U=r.type===r.elementType?I:An(r.type,I),v.props=U,Q=r.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Wt(a)?Hi:Ot.current,P=$s(r,P));var re=a.getDerivedStateFromProps;(K=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||G!==P)&&em(r,v,c,P),Jr=!1,G=r.memoizedState,v.state=G,Gl(r,c,v,d);var oe=r.memoizedState;I!==Q||G!==oe||Ht.current||Jr?(typeof re=="function"&&(gh(r,a,re,c),oe=r.memoizedState),(U=Jr||Jp(r,a,U,c,G,oe,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),v.props=c,v.state=oe,v.context=P,c=U):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return wh(n,r,a,c,f,d)}function wh(n,r,a,c,d,f){cm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&gp(r,a,!1),Tr(n,r,f);c=r.stateNode,q0.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,I,f)):$t(n,r,I,f),r.memoizedState=c.state,d&&gp(r,a,!0),r.child}function dm(n){var r=n.stateNode;r.pendingContext?pp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&pp(n,r.context,!1),ih(n,r.containerInfo)}function fm(n,r,a,c,d){return Ws(),Xc(d),r.flags|=256,$t(n,r,a,c),r.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ih(n){return{baseLanes:n,cachePool:null,transitions:null}}function pm(n,r,a){var c=r.pendingProps,d=Je.current,f=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return Yc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=pu(v,c,0,null),n=ts(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Ih(a),r.memoizedState=Th,n):Sh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return H0(n,r,v,c,I,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=si(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?f=si(I,f):(f=ts(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Ih(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=Th,c}return f=n.child,n=f.sibling,c=si(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Sh(n,r){return r=pu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function tu(n,r,a,c){return c!==null&&Xc(c),Gs(r,n.child,null,a),n=Sh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function H0(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=_h(Error(t(422))),tu(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=pu({mode:"visible",children:c.children},d,0,null),f=ts(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,v),r.child.memoizedState=Ih(v),r.memoizedState=Th,f);if((r.mode&1)===0)return tu(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(t(419)),c=_h(f,c,void 0),tu(n,r,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Er(n,d),Pn(c,n,d,-1))}return jh(),c=_h(Error(t(421))),tu(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=iE.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,an=Kr(d.nextSibling),on=r,Xe=!0,Sn=null,n!==null&&(dn[fn++]=_r,dn[fn++]=vr,dn[fn++]=Wi,_r=n.id,vr=n.overflow,Wi=r),r=Sh(r,c.children),r.flags|=4096,r)}function mm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),th(n.return,r,a)}function Ah(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function gm(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if($t(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mm(n,a,r);else if(n.tag===19)mm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Kl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Ah(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Kl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ah(r,!0,a,null,f);break;case"together":Ah(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function nu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Tr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Xi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=si(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function W0(n,r,a){switch(r.tag){case 3:dm(r),Ws();break;case 5:xp(r);break;case 1:Wt(r.type)&&Fl(r);break;case 4:ih(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(ql,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?pm(n,r,a):(He(Je,Je.current&1),n=Tr(n,r,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return gm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,um(n,r,a)}return Tr(n,r,a)}var ym,Rh,_m,vm;ym=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Rh=function(){},_m=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Qi(Qn.current);var f=null;switch(a){case"input":d=ms(n,d),c=ms(n,c),f=[];break;case"select":d=J({},d,{value:void 0}),c=J({},c,{value:void 0}),f=[];break;case"textarea":d=Vo(n,d),c=Vo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bl)}En(a,c);var v;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(I=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==I&&(P!=null||I!=null))if(U==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ke("scroll",n),f||I===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},vm=function(n,r,a,c){a!==c&&(r.flags|=4)};function va(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function G0(n,r,a){var c=r.pendingProps;switch(Kc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return Wt(r.type)&&Ml(),Lt(r),null;case 3:return c=r.stateNode,Ys(),Qe(Ht),Qe(Ot),ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sn!==null&&(Mh(Sn),Sn=null))),Rh(n,r),Lt(r),null;case 5:sh(r);var d=Qi(pa.current);if(a=r.type,n!==null&&r.stateNode!=null)_m(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Lt(r),null}if(n=Qi(Qn.current),Bl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Kn]=r,c[ua]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<oa.length;d++)Ke(oa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":ol(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Oo(c,f),Ke("invalid",c)}En(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var I=f[v];v==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&Ol(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&Ol(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":ps(c),Do(c,f,!0);break;case"textarea":ps(c),Dr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=bl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=r,n[ua]=c,ym(n,r,!1,!1),r.stateNode=n;e:{switch(v=vs(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<oa.length;d++)Ke(oa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":ol(n,c),d=ms(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=J({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Oo(n,c),d=Vo(n,c),Ke("invalid",n);break;default:d=c}En(a,d),I=d;for(f in I)if(I.hasOwnProperty(f)){var P=I[f];f==="style"?_s(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ll(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&xi(n,P):typeof P=="number"&&xi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ke("scroll",n):P!=null&&_e(n,f,P,v))}switch(a){case"input":ps(n),Do(n,c,!1);break;case"textarea":ps(n),Dr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?vn(n,!!c.multiple,f,!1):c.defaultValue!=null&&vn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=bl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)vm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Qi(pa.current),Qi(Qn.current),Bl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Kn]=r,(f=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Ol(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ol(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=r,r.stateNode=c}return Lt(r),null;case 13:if(Qe(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Tp(),Ws(),r.flags|=98560,f=!1;else if(f=Bl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Kn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),f=!1}else Sn!==null&&(Mh(Sn),Sn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?yt===0&&(yt=3):jh())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return Ys(),Rh(n,r),n===null&&aa(r.stateNode.containerInfo),Lt(r),null;case 10:return eh(r.type._context),Lt(r),null;case 17:return Wt(r.type)&&Ml(),Lt(r),null;case 19:if(Qe(Je),f=r.memoizedState,f===null)return Lt(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)va(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Kl(n),v!==null){for(r.flags|=128,va(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>eo&&(r.flags|=128,c=!0,va(f,!1),r.lanes=4194304)}else{if(!c)if(n=Kl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),va(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(r),null}else 2*Ge()-f.renderingStartTime>eo&&a!==1073741824&&(r.flags|=128,c=!0,va(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),r):(Lt(r),null);case 22:case 23:return Uh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function K0(n,r){switch(Kc(r),r.tag){case 1:return Wt(r.type)&&Ml(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),Qe(Ht),Qe(Ot),ah(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return sh(r),null;case 13:if(Qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Je),null;case 4:return Ys(),null;case 10:return eh(r.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var ru=!1,Mt=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,se=null;function Js(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,r,c)}else a.current=null}function Ch(n,r,a){try{a()}catch(c){nt(n,r,c)}}var Em=!1;function Y0(n,r){if(Uc=fr,n=Jf(),Nc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,U=0,K=0,Q=n,G=null;t:for(;;){for(var re;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==f||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(re=Q.firstChild)!==null;)G=Q,Q=re;for(;;){if(Q===n)break t;if(G===a&&++U===d&&(I=v),G===f&&++K===c&&(P=v),(re=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=re}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},fr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var ae=oe.memoizedProps,st=oe.memoizedState,L=r.stateNode,D=L.getSnapshotBeforeUpdate(r.elementType===r.type?ae:An(r.type,ae),st);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){nt(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=Em,Em=!1,oe}function Ea(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Ch(r,a,f)}d=d.next}while(d!==c)}}function iu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Ph(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function wm(n){var r=n.alternate;r!==null&&(n.alternate=null,wm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Kn],delete r[ua],delete r[qc],delete r[D0],delete r[V0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tm(n){return n.tag===5||n.tag===3||n.tag===4}function Im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=bl));else if(c!==4&&(n=n.child,n!==null))for(kh(n,r,a),n=n.sibling;n!==null;)kh(n,r,a),n=n.sibling}function xh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xh(n,r,a),n=n.sibling;n!==null;)xh(n,r,a),n=n.sibling}var Pt=null,Rn=!1;function ei(n,r,a){for(a=a.child;a!==null;)Sm(n,r,a),a=a.sibling}function Sm(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(bi,a)}catch{}switch(a.tag){case 5:Mt||Js(a,r);case 6:var c=Pt,d=Rn;Pt=null,ei(n,r,a),Pt=c,Rn=d,Pt!==null&&(Rn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Rn?(n=Pt,a=a.stateNode,n.nodeType===8?$c(n.parentNode,a):n.nodeType===1&&$c(n,a),qr(n)):$c(Pt,a.stateNode));break;case 4:c=Pt,d=Rn,Pt=a.stateNode.containerInfo,Rn=!0,ei(n,r,a),Pt=c,Rn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Ch(a,r,v),d=d.next}while(d!==c)}ei(n,r,a);break;case 1:if(!Mt&&(Js(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){nt(a,r,I)}ei(n,r,a);break;case 21:ei(n,r,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ei(n,r,a),Mt=c):ei(n,r,a);break;default:ei(n,r,a)}}function Am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Q0),r.forEach(function(c){var d=sE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Cn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Pt=I.stateNode,Rn=!1;break e;case 3:Pt=I.stateNode.containerInfo,Rn=!0;break e;case 4:Pt=I.stateNode.containerInfo,Rn=!0;break e}I=I.return}if(Pt===null)throw Error(t(160));Sm(f,v,d),Pt=null,Rn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){nt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Rm(r,n),r=r.sibling}function Rm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(r,n),Xn(n),c&4){try{Ea(3,n,n.return),iu(3,n)}catch(ae){nt(n,n.return,ae)}try{Ea(5,n,n.return)}catch(ae){nt(n,n.return,ae)}}break;case 1:Cn(r,n),Xn(n),c&512&&a!==null&&Js(a,a.return);break;case 5:if(Cn(r,n),Xn(n),c&512&&a!==null&&Js(a,a.return),n.flags&32){var d=n.stateNode;try{xi(d,"")}catch(ae){nt(n,n.return,ae)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&gs(d,f),vs(I,v);var U=vs(I,f);for(v=0;v<P.length;v+=2){var K=P[v],Q=P[v+1];K==="style"?_s(d,Q):K==="dangerouslySetInnerHTML"?ll(d,Q):K==="children"?xi(d,Q):_e(d,K,Q,U)}switch(I){case"input":ki(d,f);break;case"textarea":al(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?vn(d,!!f.multiple,re,!1):G!==!!f.multiple&&(f.defaultValue!=null?vn(d,!!f.multiple,f.defaultValue,!0):vn(d,!!f.multiple,f.multiple?[]:"",!1))}d[ua]=f}catch(ae){nt(n,n.return,ae)}}break;case 6:if(Cn(r,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ae){nt(n,n.return,ae)}}break;case 3:if(Cn(r,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{qr(r.containerInfo)}catch(ae){nt(n,n.return,ae)}break;case 4:Cn(r,n),Xn(n);break;case 13:Cn(r,n),Xn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Vh=Ge())),c&4&&Am(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(U=Mt)||K,Cn(r,n),Mt=U):Cn(r,n),Xn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Q=se=K;se!==null;){switch(G=se,re=G.child,G.tag){case 0:case 11:case 14:case 15:Ea(4,G,G.return);break;case 1:Js(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(ae){nt(c,a,ae)}}break;case 5:Js(G,G.return);break;case 22:if(G.memoizedState!==null){km(Q);continue}}re!==null?(re.return=G,se=re):km(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=br("display",v))}catch(ae){nt(n,n.return,ae)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(ae){nt(n,n.return,ae)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Cn(r,n),Xn(n),c&4&&Am(n);break;case 21:break;default:Cn(r,n),Xn(n)}}function Xn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Tm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xi(d,""),c.flags&=-33);var f=Im(n);xh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Im(n);kh(n,I,v);break;default:throw Error(t(161))}}catch(P){nt(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function X0(n,r,a){se=n,Cm(n)}function Cm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ru;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Mt;I=ru;var U=Mt;if(ru=v,(Mt=P)&&!U)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?xm(d):P!==null?(P.return=v,se=P):xm(d);for(;f!==null;)se=f,Cm(f),f=f.sibling;se=d,ru=I,Mt=U}Pm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,se=f):Pm(n)}}function Pm(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mt||iu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:An(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&kp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}kp(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&qr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||r.flags&512&&Ph(r)}catch(G){nt(r,r.return,G)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function km(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function xm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{iu(4,r)}catch(P){nt(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){nt(r,d,P)}}var f=r.return;try{Ph(r)}catch(P){nt(r,f,P)}break;case 5:var v=r.return;try{Ph(r)}catch(P){nt(r,v,P)}}}catch(P){nt(r,r.return,P)}if(r===n){se=null;break}var I=r.sibling;if(I!==null){I.return=r.return,se=I;break}se=r.return}}var J0=Math.ceil,su=Ae.ReactCurrentDispatcher,Nh=Ae.ReactCurrentOwner,gn=Ae.ReactCurrentBatchConfig,Oe=0,wt=null,ct=null,kt=0,ln=0,Zs=Qr(0),yt=0,wa=null,Xi=0,ou=0,Dh=0,Ta=null,Kt=null,Vh=0,eo=1/0,Ir=null,au=!1,Oh=null,ti=null,lu=!1,ni=null,uu=0,Ia=0,bh=null,cu=-1,hu=0;function qt(){return(Oe&6)!==0?Ge():cu!==-1?cu:cu=Ge()}function ri(n){return(n.mode&1)===0?1:(Oe&2)!==0&&kt!==0?kt&-kt:b0.transition!==null?(hu===0&&(hu=qo()),hu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:ks(n.type)),n)}function Pn(n,r,a,c){if(50<Ia)throw Ia=0,bh=null,Error(t(185));Ui(n,a,c),((Oe&2)===0||n!==wt)&&(n===wt&&((Oe&2)===0&&(ou|=a),yt===4&&ii(n,kt)),Qt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(eo=Ge()+500,Ul&&Xr()))}function Qt(n,r){var a=n.callbackNode;Fi(n,r);var c=cr(n,n===wt?kt:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ts(a),r===1)n.tag===0?O0(Dm.bind(null,n)):yp(Dm.bind(null,n)),x0(function(){(Oe&6)===0&&Xr()}),a=null;else{switch(Fn(c)){case 1:a=Is;break;case 4:a=zo;break;case 16:a=Oi;break;case 536870912:a=Ss;break;default:a=Oi}a=jm(a,Nm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Nm(n,r){if(cu=-1,hu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(to()&&n.callbackNode!==a)return null;var c=cr(n,n===wt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=du(n,c);else{r=c;var d=Oe;Oe|=2;var f=Om();(wt!==n||kt!==r)&&(Ir=null,eo=Ge()+500,Zi(n,r));do try{tE();break}catch(I){Vm(n,I)}while(!0);Zc(),su.current=f,Oe=d,ct!==null?r=0:(wt=null,kt=0,r=yt)}if(r!==0){if(r===2&&(d=$o(n),d!==0&&(c=d,r=Lh(n,d))),r===1)throw a=wa,Zi(n,0),ii(n,c),Qt(n,Ge()),a;if(r===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Z0(d)&&(r=du(n,c),r===2&&(f=$o(n),f!==0&&(c=f,r=Lh(n,f))),r===1))throw a=wa,Zi(n,0),ii(n,c),Qt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:es(n,Kt,Ir);break;case 3:if(ii(n,c),(c&130023424)===c&&(r=Vh+500-Ge(),10<r)){if(cr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Bc(es.bind(null,n,Kt,Ir),r);break}es(n,Kt,Ir);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-en(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*J0(c/1960))-c,10<c){n.timeoutHandle=Bc(es.bind(null,n,Kt,Ir),c);break}es(n,Kt,Ir);break;case 5:es(n,Kt,Ir);break;default:throw Error(t(329))}}}return Qt(n,Ge()),n.callbackNode===a?Nm.bind(null,n):null}function Lh(n,r){var a=Ta;return n.current.memoizedState.isDehydrated&&(Zi(n,r).flags|=256),n=du(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&Mh(r)),n}function Mh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function Z0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!In(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ii(n,r){for(r&=~Dh,r&=~ou,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-en(r),c=1<<a;n[a]=-1,r&=~c}}function Dm(n){if((Oe&6)!==0)throw Error(t(327));to();var r=cr(n,0);if((r&1)===0)return Qt(n,Ge()),null;var a=du(n,r);if(n.tag!==0&&a===2){var c=$o(n);c!==0&&(r=c,a=Lh(n,c))}if(a===1)throw a=wa,Zi(n,0),ii(n,r),Qt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Kt,Ir),Qt(n,Ge()),null}function Fh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(eo=Ge()+500,Ul&&Xr())}}function Ji(n){ni!==null&&ni.tag===0&&(Oe&6)===0&&to();var r=Oe;Oe|=1;var a=gn.transition,c=Ne;try{if(gn.transition=null,Ne=1,n)return n()}finally{Ne=c,gn.transition=a,Oe=r,(Oe&6)===0&&Xr()}}function Uh(){ln=Zs.current,Qe(Zs)}function Zi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,k0(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(Kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ml();break;case 3:Ys(),Qe(Ht),Qe(Ot),ah();break;case 5:sh(c);break;case 4:Ys();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:eh(c.type._context);break;case 22:case 23:Uh()}a=a.return}if(wt=n,ct=n=si(n.current,null),kt=ln=r,yt=0,wa=null,Dh=ou=Xi=0,Kt=Ta=null,Ki!==null){for(r=0;r<Ki.length;r++)if(a=Ki[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Ki=null}return n}function Vm(n,r){do{var a=ct;try{if(Zc(),Ql.current=Zl,Yl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Yl=!1}if(Yi=0,Et=gt=Ze=null,ma=!1,ga=0,Nh.current=null,a===null||a.return===null){yt=1,wa=r,ct=null;break}e:{var f=n,v=a.return,I=a,P=r;if(r=kt,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var re=im(v);if(re!==null){re.flags&=-257,sm(re,v,I,f,r),re.mode&1&&rm(f,U,r),r=re,P=U;var oe=r.updateQueue;if(oe===null){var ae=new Set;ae.add(P),r.updateQueue=ae}else oe.add(P);break e}else{if((r&1)===0){rm(f,U,r),jh();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var st=im(v);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),sm(st,v,I,f,r),Xc(Xs(P,I));break e}}f=P=Xs(P,I),yt!==4&&(yt=2),Ta===null?Ta=[f]:Ta.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=tm(f,P,r);Pp(f,L);break e;case 1:I=P;var D=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ti===null||!ti.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var Y=nm(f,I,r);Pp(f,Y);break e}}f=f.return}while(f!==null)}Lm(a)}catch(le){r=le,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function Om(){var n=su.current;return su.current=Zl,n===null?Zl:n}function jh(){(yt===0||yt===3||yt===2)&&(yt=4),wt===null||(Xi&268435455)===0&&(ou&268435455)===0||ii(wt,kt)}function du(n,r){var a=Oe;Oe|=2;var c=Om();(wt!==n||kt!==r)&&(Ir=null,Zi(n,r));do try{eE();break}catch(d){Vm(n,d)}while(!0);if(Zc(),Oe=a,su.current=c,ct!==null)throw Error(t(261));return wt=null,kt=0,yt}function eE(){for(;ct!==null;)bm(ct)}function tE(){for(;ct!==null&&!Vi();)bm(ct)}function bm(n){var r=Um(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?Lm(n):ct=r,Nh.current=null}function Lm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=G0(a,r,ln),a!==null){ct=a;return}}else{if(a=K0(a,r),a!==null){a.flags&=32767,ct=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yt=6,ct=null;return}}if(r=r.sibling,r!==null){ct=r;return}ct=r=n}while(r!==null);yt===0&&(yt=5)}function es(n,r,a){var c=Ne,d=gn.transition;try{gn.transition=null,Ne=1,nE(n,r,a,c)}finally{gn.transition=d,Ne=c}return null}function nE(n,r,a,c){do to();while(ni!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Rc(n,f),n===wt&&(ct=wt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||lu||(lu=!0,jm(Oi,function(){return to(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=gn.transition,gn.transition=null;var v=Ne;Ne=1;var I=Oe;Oe|=4,Nh.current=null,Y0(n,a),Rm(a,n),T0(jc),fr=!!Uc,jc=Uc=null,n.current=a,X0(a),ur(),Oe=I,Ne=v,gn.transition=f}else n.current=a;if(lu&&(lu=!1,ni=n,uu=d),f=n.pendingLanes,f===0&&(ti=null),vl(a.stateNode),Qt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(au)throw au=!1,n=Oh,Oh=null,n;return(uu&1)!==0&&n.tag!==0&&to(),f=n.pendingLanes,(f&1)!==0?n===bh?Ia++:(Ia=0,bh=n):Ia=0,Xr(),null}function to(){if(ni!==null){var n=Fn(uu),r=gn.transition,a=Ne;try{if(gn.transition=null,Ne=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,uu=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var f=se,v=f.child;if((se.flags&16)!==0){var I=f.deletions;if(I!==null){for(var P=0;P<I.length;P++){var U=I[P];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:Ea(8,K,f)}var Q=K.child;if(Q!==null)Q.return=K,se=Q;else for(;se!==null;){K=se;var G=K.sibling,re=K.return;if(wm(K),K===U){se=null;break}if(G!==null){G.return=re,se=G;break}se=re}}}var oe=f.alternate;if(oe!==null){var ae=oe.child;if(ae!==null){oe.child=null;do{var st=ae.sibling;ae.sibling=null,ae=st}while(ae!==null)}}se=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,se=v;else e:for(;se!==null;){if(f=se,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ea(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,se=L;break e}se=f.return}}var D=n.current;for(se=D;se!==null;){v=se;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,se=F;else e:for(v=D;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:iu(9,I)}}catch(le){nt(I,I.return,le)}if(I===v){se=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,se=Y;break e}se=I.return}}if(Oe=d,Xr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{Ne=a,gn.transition=r}}return!1}function Mm(n,r,a){r=Xs(a,r),r=tm(n,r,1),n=Zr(n,r,1),r=qt(),n!==null&&(Ui(n,1,r),Qt(n,r))}function nt(n,r,a){if(n.tag===3)Mm(n,n,a);else for(;r!==null;){if(r.tag===3){Mm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=Xs(a,n),n=nm(r,n,1),r=Zr(r,n,1),n=qt(),r!==null&&(Ui(r,1,n),Qt(r,n));break}}r=r.return}}function rE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=qt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(kt&a)===a&&(yt===4||yt===3&&(kt&130023424)===kt&&500>Ge()-Vh?Zi(n,0):Dh|=a),Qt(n,r)}function Fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var a=qt();n=Er(n,r),n!==null&&(Ui(n,r,a),Qt(n,a))}function iE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Fm(n,a)}function sE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Fm(n,a)}var Um;Um=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Gt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Gt=!1,W0(n,r,a);Gt=(n.flags&131072)!==0}else Gt=!1,Xe&&(r.flags&1048576)!==0&&_p(r,zl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;nu(n,r),n=r.pendingProps;var d=$s(r,Ot.current);Qs(r,a),d=ch(null,r,c,n,d,a);var f=hh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(f=!0,Fl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rh(r),d.updater=eu,r.stateNode=d,d._reactInternals=r,yh(r,c,n,a),r=wh(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&Gc(r),$t(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(nu(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=aE(c),n=An(c,n),d){case 0:r=Eh(null,r,c,n,a);break e;case 1:r=hm(null,r,c,n,a);break e;case 11:r=om(null,r,c,n,a);break e;case 14:r=am(null,r,c,An(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),Eh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),hm(n,r,c,d,a);case 3:e:{if(dm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,Cp(n,r),Gl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Xs(Error(t(423)),r),r=fm(n,r,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),r),r=fm(n,r,c,a,d);break e}else for(an=Kr(r.stateNode.containerInfo.firstChild),on=r,Xe=!0,Sn=null,a=Ap(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=Tr(n,r,a);break e}$t(n,r,c,a)}r=r.child}return r;case 5:return xp(r),n===null&&Yc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,zc(c,d)?v=null:f!==null&&zc(c,f)&&(r.flags|=32),cm(n,r),$t(n,r,v,a),r.child;case 6:return n===null&&Yc(r),null;case 13:return pm(n,r,a);case 4:return ih(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,a):$t(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),om(n,r,c,d,a);case 7:return $t(n,r,r.pendingProps,a),r.child;case 8:return $t(n,r,r.pendingProps.children,a),r.child;case 12:return $t(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,He(ql,c._currentValue),c._currentValue=v,f!==null)if(In(f.value,v)){if(f.children===d.children&&!Ht.current){r=Tr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var I=f.dependencies;if(I!==null){v=f.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=wr(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?P.next=P:(P.next=K.next,K.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),th(f.return,a,r),I.lanes|=a;break}P=P.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),th(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}$t(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,a),d=pn(d),c=c(d),r.flags|=1,$t(n,r,c,a),r.child;case 14:return c=r.type,d=An(c,r.pendingProps),d=An(c.type,d),am(n,r,c,d,a);case 15:return lm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),nu(n,r),r.tag=1,Wt(c)?(n=!0,Fl(r)):n=!1,Qs(r,a),Zp(r,c,d),yh(r,c,d,a),wh(null,r,c,!0,n,a);case 19:return gm(n,r,a);case 22:return um(n,r,a)}throw Error(t(156,r.tag))};function jm(n,r){return jo(n,r)}function oE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new oE(n,r,a,c)}function zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aE(n){if(typeof n=="function")return zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===at)return 14}return 2}function si(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")zh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case k:return ts(a.children,d,f,r);case T:v=8,d|=8;break;case R:return n=yn(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case S:return n=yn(13,a,r,d),n.elementType=S,n.lanes=f,n;case Be:return n=yn(19,a,r,d),n.elementType=Be,n.lanes=f,n;case Ue:return pu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:v=10;break e;case x:v=9;break e;case b:v=11;break e;case at:v=14;break e;case mt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function ts(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function pu(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Bh(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function $h(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function lE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function qh(n,r,a,c,d,f,v,I,P){return n=new lE(n,r,a,I,P),r===1?(r=1,f===!0&&(r|=8)):r=0,f=yn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(f),n}function uE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function zm(n){if(!n)return Yr;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return mp(n,a,r)}return r}function Bm(n,r,a,c,d,f,v,I,P){return n=qh(a,c,!0,n,d,f,v,I,P),n.context=zm(null),a=n.current,c=qt(),d=ri(a),f=wr(c,d),f.callback=r??null,Zr(a,f,d),n.current.lanes=d,Ui(n,d,c),Qt(n,c),n}function mu(n,r,a,c){var d=r.current,f=qt(),v=ri(d);return a=zm(a),r.context===null?r.context=a:r.pendingContext=a,r=wr(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Zr(d,r,v),n!==null&&(Pn(n,d,v,f),Wl(n,d,v)),v}function gu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $m(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Hh(n,r){$m(n,r),(n=n.alternate)&&$m(n,r)}function cE(){return null}var qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wh(n){this._internalRoot=n}yu.prototype.render=Wh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));mu(n,r,null,null)},yu.prototype.unmount=Wh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){mu(null,n,null,null)}),r[gr]=null}};function yu(n){this._internalRoot=n}yu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Qo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<tn.length&&r!==0&&r<tn[a].priority;a++);tn.splice(a,0,n),a===0&&Cs(n)}};function Gh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function hE(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=gu(v);f.call(U)}}var v=Bm(r,c,n,0,null,!1,!1,"",Hm);return n._reactRootContainer=v,n[gr]=v.current,aa(n.nodeType===8?n.parentNode:n),Ji(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=gu(P);I.call(U)}}var P=qh(n,0,!1,null,null,!1,!1,"",Hm);return n._reactRootContainer=P,n[gr]=P.current,aa(n.nodeType===8?n.parentNode:n),Ji(function(){mu(r,P,a,c)}),P}function vu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var I=d;d=function(){var P=gu(v);I.call(P)}}mu(r,v,n,d)}else v=hE(a,r,n,d,c);return gu(v)}Go=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Le(r.pendingLanes);a!==0&&(Wo(r,a|1),Qt(r,Ge()),(Oe&6)===0&&(eo=Ge()+500,Xr()))}break;case 13:Ji(function(){var c=Er(n,1);if(c!==null){var d=qt();Pn(c,n,1,d)}}),Hh(n,1)}},As=function(n){if(n.tag===13){var r=Er(n,134217728);if(r!==null){var a=qt();Pn(r,n,134217728,a)}Hh(n,134217728)}},Ko=function(n){if(n.tag===13){var r=ri(n),a=Er(n,r);if(a!==null){var c=qt();Pn(a,n,r,c)}Hh(n,r)}},Qo=function(){return Ne},Yo=function(n,r){var a=Ne;try{return Ne=n,r()}finally{Ne=a}},or=function(n,r,a){switch(r){case"input":if(ki(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Ll(c);if(!d)throw Error(t(90));No(c),ki(c,d)}}}break;case"textarea":al(n,a);break;case"select":r=a.value,r!=null&&vn(n,!!a.multiple,r,!1)}},cl=Fh,hl=Ji;var dE={usingClientEntryPoint:!1,Events:[ca,zs,Ll,Mr,Fr,Fh]},Sa={findFiberByHostInstance:qi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_l(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||cE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{bi=Eu.inject(fE),Zt=Eu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(r))throw Error(t(200));return uE(n,r,null,a)},Yt.createRoot=function(n,r){if(!Gh(n))throw Error(t(299));var a=!1,c="",d=qm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=qh(n,1,!1,null,null,a,!1,c,d),n[gr]=r.current,aa(n.nodeType===8?n.parentNode:n),new Wh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_l(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Ji(n)},Yt.hydrate=function(n,r,a){if(!_u(r))throw Error(t(200));return vu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Gh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=qm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Bm(r,null,n,1,a??null,d,!1,f,v),n[gr]=r.current,aa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new yu(r)},Yt.render=function(n,r,a){if(!_u(r))throw Error(t(200));return vu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!_u(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){vu(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Fh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!_u(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Zm;function TE(){if(Zm)return Yh.exports;Zm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Yh.exports=wE(),Yh.exports}var eg;function IE(){if(eg)return wu;eg=1;var i=TE();return wu.createRoot=i.createRoot,wu.hydrateRoot=i.hydrateRoot,wu}var SE=IE();const AE=Uy(SE);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=dt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>dt.createElement("svg",{ref:y,...CE,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:jy("lucide",o),...m},[...h.map(([_,w])=>dt.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(i,e)=>{const t=dt.forwardRef(({className:s,...o},u)=>dt.createElement(PE,{ref:u,iconNode:e,className:jy(`lucide-${RE(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=At("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=At("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=At("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=At("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=At("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=At("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=At("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=At("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=At("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=At("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=At("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=At("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=At("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=At("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=At("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=At("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=At("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=At("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),FE=()=>{};var og={};/**
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
 */const zy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},UE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},By={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let N=(m&15)<<2|_>>6,B=_&63;y||(B=64,h||(N=64)),s.push(t[w],t[A],t[N],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(zy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):UE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||A==null)throw new jE;const N=u<<2|m>>4;if(s.push(N),_!==64){const B=m<<4&240|_>>2;if(s.push(B),A!==64){const Z=_<<6&192|A;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zE=function(i){const e=zy(i);return By.encodeByteArray(e,!0)},ju=function(i){return zE(i).replace(/\./g,"")},$y=function(i){try{return By.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const $E=()=>BE().__FIREBASE_DEFAULTS__,qE=()=>{if(typeof process>"u"||typeof og>"u")return;const i=og.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},HE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&$y(i[1]);return e&&JSON.parse(e)},sc=()=>{try{return FE()||$E()||qE()||HE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},qy=i=>{var e,t;return(t=(e=sc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},WE=i=>{const e=qy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Hy=()=>{var i;return(i=sc())==null?void 0:i.config},Wy=i=>{var e;return(e=sc())==null?void 0:e[`_${i}`]};/**
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
 */function To(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function KE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ju(JSON.stringify(t)),ju(JSON.stringify(h)),""].join(".")}const Da={};function QE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Da))Da[e]?i.emulator.push(e):i.prod.push(e);return i}function YE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let ag=!1;function Ky(i,e){if(typeof window>"u"||typeof document>"u"||!To(window.location.host)||Da[i]===e||Da[i]||ag)return;Da[i]=e;function t(N){return`__firebase__banner__${N}`}const s="__firebase__banner",u=QE().prod.length>0;function h(){const N=document.getElementById(s);N&&N.remove()}function m(N){N.style.display="flex",N.style.background="#7faaf0",N.style.position="fixed",N.style.bottom="5px",N.style.left="5px",N.style.padding=".5em",N.style.borderRadius="5px",N.style.alignItems="center"}function y(N,B){N.setAttribute("width","24"),N.setAttribute("id",B),N.setAttribute("height","24"),N.setAttribute("viewBox","0 0 24 24"),N.setAttribute("fill","none"),N.style.marginLeft="-6px"}function _(){const N=document.createElement("span");return N.style.cursor="pointer",N.style.marginLeft="16px",N.style.fontSize="24px",N.innerHTML=" &times;",N.onclick=()=>{ag=!0,h()},N}function w(N,B){N.setAttribute("id",B),N.innerText="Learn more",N.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",N.setAttribute("target","__blank"),N.style.paddingLeft="5px",N.style.textDecoration="underline"}function A(){const N=YE(s),B=t("text"),Z=document.getElementById(B)||document.createElement("span"),X=t("learnmore"),W=document.getElementById(X)||document.createElement("a"),ge=t("preprendIcon"),de=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(N.created){const _e=N.element;m(_e),w(W,X);const Ae=_();y(de,ge),_e.append(de,Z,W,Ae),document.body.appendChild(_e)}u?(Z.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function JE(){var e;const i=(e=sc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ew(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nw(){const i=zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function rw(){return!JE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const ow="FirebaseError";class xr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ow,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?aw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new xr(o,m,s)}}function aw(i,e){return i.replace(lw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const lw=/\{\$([^}]+)}/g;function uw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function is(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(lg(u)&&lg(h)){if(!is(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function lg(i){return i!==null&&typeof i=="object"}/**
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
 */function Qa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ca(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Pa(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function cw(i,e){const t=new hw(i,e);return t.subscribe.bind(t)}class hw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");dw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=nd),o.error===void 0&&(o.error=nd),o.complete===void 0&&(o.complete=nd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function nd(){}/**
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
 */function St(i){return i&&i._delegate?i._delegate:i}class ss{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class fw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new GE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mw(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pw(i){return i===ns?void 0:i}function mw(i){return i.instantiationMode==="EAGER"}/**
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
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const yw={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},_w=Pe.INFO,vw={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},Ew=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=vw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=_w,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const ww=(i,e)=>e.some(t=>i instanceof t);let ug,cg;function Tw(){return ug||(ug=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Iw(){return cg||(cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qy=new WeakMap,gd=new WeakMap,Yy=new WeakMap,rd=new WeakMap,Hd=new WeakMap;function Sw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(fi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Qy.set(t,i)}).catch(()=>{}),Hd.set(e,i),e}function Aw(i){if(gd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});gd.set(i,e)}let yd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return gd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Yy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Rw(i){yd=i(yd)}function Cw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(id(this),e,...t);return Yy.set(s,e.sort?e.sort():[e]),fi(s)}:Iw().includes(i)?function(...e){return i.apply(id(this),e),fi(Qy.get(this))}:function(...e){return fi(i.apply(id(this),e))}}function Pw(i){return typeof i=="function"?Cw(i):(i instanceof IDBTransaction&&Aw(i),ww(i,Tw())?new Proxy(i,yd):i)}function fi(i){if(i instanceof IDBRequest)return Sw(i);if(rd.has(i))return rd.get(i);const e=Pw(i);return e!==i&&(rd.set(i,e),Hd.set(e,i)),e}const id=i=>Hd.get(i);function kw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=fi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(fi(h.result),y.oldVersion,y.newVersion,fi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const xw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],sd=new Map;function hg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Nw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return sd.set(e,u),u}Rw(i=>({...i,get:(e,t,s)=>hg(e,t)||i.get(e,t,s),has:(e,t)=>!!hg(e,t)||i.has(e,t)}));/**
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
 */class Dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Vw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",dg="0.14.6";/**
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
 */const Rr=new qd("@firebase/app"),Ow="@firebase/app-compat",bw="@firebase/analytics-compat",Lw="@firebase/analytics",Mw="@firebase/app-check-compat",Fw="@firebase/app-check",Uw="@firebase/auth",jw="@firebase/auth-compat",zw="@firebase/database",Bw="@firebase/data-connect",$w="@firebase/database-compat",qw="@firebase/functions",Hw="@firebase/functions-compat",Ww="@firebase/installations",Gw="@firebase/installations-compat",Kw="@firebase/messaging",Qw="@firebase/messaging-compat",Yw="@firebase/performance",Xw="@firebase/performance-compat",Jw="@firebase/remote-config",Zw="@firebase/remote-config-compat",eT="@firebase/storage",tT="@firebase/storage-compat",nT="@firebase/firestore",rT="@firebase/ai",iT="@firebase/firestore-compat",sT="firebase",oT="12.6.0";/**
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
 */const vd="[DEFAULT]",aT={[_d]:"fire-core",[Ow]:"fire-core-compat",[Lw]:"fire-analytics",[bw]:"fire-analytics-compat",[Fw]:"fire-app-check",[Mw]:"fire-app-check-compat",[Uw]:"fire-auth",[jw]:"fire-auth-compat",[zw]:"fire-rtdb",[Bw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[qw]:"fire-fn",[Hw]:"fire-fn-compat",[Ww]:"fire-iid",[Gw]:"fire-iid-compat",[Kw]:"fire-fcm",[Qw]:"fire-fcm-compat",[Yw]:"fire-perf",[Xw]:"fire-perf-compat",[Jw]:"fire-rc",[Zw]:"fire-rc-compat",[eT]:"fire-gcs",[tT]:"fire-gcs-compat",[nT]:"fire-fst",[iT]:"fire-fst-compat",[rT]:"fire-vertex","fire-js":"fire-js",[sT]:"fire-js-all"};/**
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
 */const zu=new Map,lT=new Map,Ed=new Map;function fg(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function po(i){const e=i.name;if(Ed.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,i);for(const t of zu.values())fg(t,i);for(const t of lT.values())fg(t,i);return!0}function Wd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function kn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const uT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new Ka("app","Firebase",uT);/**
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
 */class cT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Io=oT;function Xy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:vd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=Hy()),!t)throw pi.create("no-options");const u=zu.get(o);if(u){if(is(t,u.options)&&is(s,u.config))return u;throw pi.create("duplicate-app",{appName:o})}const h=new gw(o);for(const y of Ed.values())h.addComponent(y);const m=new cT(t,s,h);return zu.set(o,m),m}function Jy(i=vd){const e=zu.get(i);if(!e&&i===vd&&Hy())return Xy();if(!e)throw pi.create("no-app",{appName:i});return e}function mi(i,e,t){let s=aT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(h.join(" "));return}po(new ss(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hT="firebase-heartbeat-database",dT=1,Fa="firebase-heartbeat-store";let od=null;function Zy(){return od||(od=kw(hT,dT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Fa)}catch(t){console.warn(t)}}}}).catch(i=>{throw pi.create("idb-open",{originalErrorMessage:i.message})})),od}async function fT(i){try{const t=(await Zy()).transaction(Fa),s=await t.objectStore(Fa).get(e_(i));return await t.done,s}catch(e){if(e instanceof xr)Rr.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function pg(i,e){try{const s=(await Zy()).transaction(Fa,"readwrite");await s.objectStore(Fa).put(e,e_(i)),await s.done}catch(t){if(t instanceof xr)Rr.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function e_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const pT=1024,mT=30;class gT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _T(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=mg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>mT){const h=vT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mg(),{heartbeatsToSend:s,unsentEntries:o}=yT(this._heartbeatsCache.heartbeats),u=ju(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function mg(){return new Date().toISOString().substring(0,10)}function yT(i,e=pT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),gg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),gg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gg(i){return ju(JSON.stringify({version:2,heartbeats:i})).length}function vT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function ET(i){po(new ss("platform-logger",e=>new Dw(e),"PRIVATE")),po(new ss("heartbeat",e=>new gT(e),"PRIVATE")),mi(_d,dg,i),mi(_d,dg,"esm2020"),mi("fire-js","")}ET("");var wT="firebase",TT="12.7.0";/**
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
 */mi(wT,TT,"app");var yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,t_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,T){function R(){}R.prototype=T.prototype,k.F=T.prototype,k.prototype=new R,k.prototype.constructor=k,k.D=function(V,x,b){for(var S=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)S[Be-2]=arguments[Be];return T.prototype[x].apply(V,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,T,R){R||(R=0);const V=Array(16);if(typeof T=="string")for(var x=0;x<16;++x)V[x]=T.charCodeAt(R++)|T.charCodeAt(R++)<<8|T.charCodeAt(R++)<<16|T.charCodeAt(R++)<<24;else for(x=0;x<16;++x)V[x]=T[R++]|T[R++]<<8|T[R++]<<16|T[R++]<<24;T=k.g[0],R=k.g[1],x=k.g[2];let b=k.g[3],S;S=T+(b^R&(x^b))+V[0]+3614090360&4294967295,T=R+(S<<7&4294967295|S>>>25),S=b+(x^T&(R^x))+V[1]+3905402710&4294967295,b=T+(S<<12&4294967295|S>>>20),S=x+(R^b&(T^R))+V[2]+606105819&4294967295,x=b+(S<<17&4294967295|S>>>15),S=R+(T^x&(b^T))+V[3]+3250441966&4294967295,R=x+(S<<22&4294967295|S>>>10),S=T+(b^R&(x^b))+V[4]+4118548399&4294967295,T=R+(S<<7&4294967295|S>>>25),S=b+(x^T&(R^x))+V[5]+1200080426&4294967295,b=T+(S<<12&4294967295|S>>>20),S=x+(R^b&(T^R))+V[6]+2821735955&4294967295,x=b+(S<<17&4294967295|S>>>15),S=R+(T^x&(b^T))+V[7]+4249261313&4294967295,R=x+(S<<22&4294967295|S>>>10),S=T+(b^R&(x^b))+V[8]+1770035416&4294967295,T=R+(S<<7&4294967295|S>>>25),S=b+(x^T&(R^x))+V[9]+2336552879&4294967295,b=T+(S<<12&4294967295|S>>>20),S=x+(R^b&(T^R))+V[10]+4294925233&4294967295,x=b+(S<<17&4294967295|S>>>15),S=R+(T^x&(b^T))+V[11]+2304563134&4294967295,R=x+(S<<22&4294967295|S>>>10),S=T+(b^R&(x^b))+V[12]+1804603682&4294967295,T=R+(S<<7&4294967295|S>>>25),S=b+(x^T&(R^x))+V[13]+4254626195&4294967295,b=T+(S<<12&4294967295|S>>>20),S=x+(R^b&(T^R))+V[14]+2792965006&4294967295,x=b+(S<<17&4294967295|S>>>15),S=R+(T^x&(b^T))+V[15]+1236535329&4294967295,R=x+(S<<22&4294967295|S>>>10),S=T+(x^b&(R^x))+V[1]+4129170786&4294967295,T=R+(S<<5&4294967295|S>>>27),S=b+(R^x&(T^R))+V[6]+3225465664&4294967295,b=T+(S<<9&4294967295|S>>>23),S=x+(T^R&(b^T))+V[11]+643717713&4294967295,x=b+(S<<14&4294967295|S>>>18),S=R+(b^T&(x^b))+V[0]+3921069994&4294967295,R=x+(S<<20&4294967295|S>>>12),S=T+(x^b&(R^x))+V[5]+3593408605&4294967295,T=R+(S<<5&4294967295|S>>>27),S=b+(R^x&(T^R))+V[10]+38016083&4294967295,b=T+(S<<9&4294967295|S>>>23),S=x+(T^R&(b^T))+V[15]+3634488961&4294967295,x=b+(S<<14&4294967295|S>>>18),S=R+(b^T&(x^b))+V[4]+3889429448&4294967295,R=x+(S<<20&4294967295|S>>>12),S=T+(x^b&(R^x))+V[9]+568446438&4294967295,T=R+(S<<5&4294967295|S>>>27),S=b+(R^x&(T^R))+V[14]+3275163606&4294967295,b=T+(S<<9&4294967295|S>>>23),S=x+(T^R&(b^T))+V[3]+4107603335&4294967295,x=b+(S<<14&4294967295|S>>>18),S=R+(b^T&(x^b))+V[8]+1163531501&4294967295,R=x+(S<<20&4294967295|S>>>12),S=T+(x^b&(R^x))+V[13]+2850285829&4294967295,T=R+(S<<5&4294967295|S>>>27),S=b+(R^x&(T^R))+V[2]+4243563512&4294967295,b=T+(S<<9&4294967295|S>>>23),S=x+(T^R&(b^T))+V[7]+1735328473&4294967295,x=b+(S<<14&4294967295|S>>>18),S=R+(b^T&(x^b))+V[12]+2368359562&4294967295,R=x+(S<<20&4294967295|S>>>12),S=T+(R^x^b)+V[5]+4294588738&4294967295,T=R+(S<<4&4294967295|S>>>28),S=b+(T^R^x)+V[8]+2272392833&4294967295,b=T+(S<<11&4294967295|S>>>21),S=x+(b^T^R)+V[11]+1839030562&4294967295,x=b+(S<<16&4294967295|S>>>16),S=R+(x^b^T)+V[14]+4259657740&4294967295,R=x+(S<<23&4294967295|S>>>9),S=T+(R^x^b)+V[1]+2763975236&4294967295,T=R+(S<<4&4294967295|S>>>28),S=b+(T^R^x)+V[4]+1272893353&4294967295,b=T+(S<<11&4294967295|S>>>21),S=x+(b^T^R)+V[7]+4139469664&4294967295,x=b+(S<<16&4294967295|S>>>16),S=R+(x^b^T)+V[10]+3200236656&4294967295,R=x+(S<<23&4294967295|S>>>9),S=T+(R^x^b)+V[13]+681279174&4294967295,T=R+(S<<4&4294967295|S>>>28),S=b+(T^R^x)+V[0]+3936430074&4294967295,b=T+(S<<11&4294967295|S>>>21),S=x+(b^T^R)+V[3]+3572445317&4294967295,x=b+(S<<16&4294967295|S>>>16),S=R+(x^b^T)+V[6]+76029189&4294967295,R=x+(S<<23&4294967295|S>>>9),S=T+(R^x^b)+V[9]+3654602809&4294967295,T=R+(S<<4&4294967295|S>>>28),S=b+(T^R^x)+V[12]+3873151461&4294967295,b=T+(S<<11&4294967295|S>>>21),S=x+(b^T^R)+V[15]+530742520&4294967295,x=b+(S<<16&4294967295|S>>>16),S=R+(x^b^T)+V[2]+3299628645&4294967295,R=x+(S<<23&4294967295|S>>>9),S=T+(x^(R|~b))+V[0]+4096336452&4294967295,T=R+(S<<6&4294967295|S>>>26),S=b+(R^(T|~x))+V[7]+1126891415&4294967295,b=T+(S<<10&4294967295|S>>>22),S=x+(T^(b|~R))+V[14]+2878612391&4294967295,x=b+(S<<15&4294967295|S>>>17),S=R+(b^(x|~T))+V[5]+4237533241&4294967295,R=x+(S<<21&4294967295|S>>>11),S=T+(x^(R|~b))+V[12]+1700485571&4294967295,T=R+(S<<6&4294967295|S>>>26),S=b+(R^(T|~x))+V[3]+2399980690&4294967295,b=T+(S<<10&4294967295|S>>>22),S=x+(T^(b|~R))+V[10]+4293915773&4294967295,x=b+(S<<15&4294967295|S>>>17),S=R+(b^(x|~T))+V[1]+2240044497&4294967295,R=x+(S<<21&4294967295|S>>>11),S=T+(x^(R|~b))+V[8]+1873313359&4294967295,T=R+(S<<6&4294967295|S>>>26),S=b+(R^(T|~x))+V[15]+4264355552&4294967295,b=T+(S<<10&4294967295|S>>>22),S=x+(T^(b|~R))+V[6]+2734768916&4294967295,x=b+(S<<15&4294967295|S>>>17),S=R+(b^(x|~T))+V[13]+1309151649&4294967295,R=x+(S<<21&4294967295|S>>>11),S=T+(x^(R|~b))+V[4]+4149444226&4294967295,T=R+(S<<6&4294967295|S>>>26),S=b+(R^(T|~x))+V[11]+3174756917&4294967295,b=T+(S<<10&4294967295|S>>>22),S=x+(T^(b|~R))+V[2]+718787259&4294967295,x=b+(S<<15&4294967295|S>>>17),S=R+(b^(x|~T))+V[9]+3951481745&4294967295,k.g[0]=k.g[0]+T&4294967295,k.g[1]=k.g[1]+(x+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+b&4294967295}s.prototype.v=function(k,T){T===void 0&&(T=k.length);const R=T-this.blockSize,V=this.C;let x=this.h,b=0;for(;b<T;){if(x==0)for(;b<=R;)o(this,k,b),b+=this.blockSize;if(typeof k=="string"){for(;b<T;)if(V[x++]=k.charCodeAt(b++),x==this.blockSize){o(this,V),x=0;break}}else for(;b<T;)if(V[x++]=k[b++],x==this.blockSize){o(this,V),x=0;break}}this.h=x,this.o+=T},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var T=1;T<k.length-8;++T)k[T]=0;T=this.o*8;for(var R=k.length-8;R<k.length;++R)k[R]=T&255,T/=256;for(this.v(k),k=Array(16),T=0,R=0;R<4;++R)for(let V=0;V<32;V+=8)k[T++]=this.g[R]>>>V&255;return k};function u(k,T){var R=m;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=T(k)}function h(k,T){this.h=T;const R=[];let V=!0;for(let x=k.length-1;x>=0;x--){const b=k[x]|0;V&&b==T||(R[x]=b,V=!1)}this.g=R}var m={};function y(k){return-128<=k&&k<128?u(k,function(T){return new h([T|0],T<0?-1:0)}):new h([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return A;if(k<0)return W(_(-k));const T=[];let R=1;for(let V=0;k>=R;V++)T[V]=k/R|0,R*=4294967296;return new h(T,0)}function w(k,T){if(k.length==0)throw Error("number format error: empty string");if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(k.charAt(0)=="-")return W(w(k.substring(1),T));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(T,8));let V=A;for(let b=0;b<k.length;b+=8){var x=Math.min(8,k.length-b);const S=parseInt(k.substring(b,b+x),T);x<8?(x=_(Math.pow(T,x)),V=V.j(x).add(_(S))):(V=V.j(R),V=V.add(_(S)))}return V}var A=y(0),N=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(X(this))return-W(this).m();let k=0,T=1;for(let R=0;R<this.g.length;R++){const V=this.i(R);k+=(V>=0?V:4294967296+V)*T,T*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(Z(this))return"0";if(X(this))return"-"+W(this).toString(k);const T=_(Math.pow(k,6));var R=this;let V="";for(;;){const x=Ae(R,T).g;R=ge(R,x.j(T));let b=((R.g.length>0?R.g[0]:R.h)>>>0).toString(k);if(R=x,Z(R))return b+V;for(;b.length<6;)b="0"+b;V=b+V}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function Z(k){if(k.h!=0)return!1;for(let T=0;T<k.g.length;T++)if(k.g[T]!=0)return!1;return!0}function X(k){return k.h==-1}i.l=function(k){return k=ge(this,k),X(k)?-1:Z(k)?0:1};function W(k){const T=k.g.length,R=[];for(let V=0;V<T;V++)R[V]=~k.g[V];return new h(R,~k.h).add(N)}i.abs=function(){return X(this)?W(this):this},i.add=function(k){const T=Math.max(this.g.length,k.g.length),R=[];let V=0;for(let x=0;x<=T;x++){let b=V+(this.i(x)&65535)+(k.i(x)&65535),S=(b>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);V=S>>>16,b&=65535,S&=65535,R[x]=S<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ge(k,T){return k.add(W(T))}i.j=function(k){if(Z(this)||Z(k))return A;if(X(this))return X(k)?W(this).j(W(k)):W(W(this).j(k));if(X(k))return W(this.j(W(k)));if(this.l(B)<0&&k.l(B)<0)return _(this.m()*k.m());const T=this.g.length+k.g.length,R=[];for(var V=0;V<2*T;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(let x=0;x<k.g.length;x++){const b=this.i(V)>>>16,S=this.i(V)&65535,Be=k.i(x)>>>16,at=k.i(x)&65535;R[2*V+2*x]+=S*at,de(R,2*V+2*x),R[2*V+2*x+1]+=b*at,de(R,2*V+2*x+1),R[2*V+2*x+1]+=S*Be,de(R,2*V+2*x+1),R[2*V+2*x+2]+=b*Be,de(R,2*V+2*x+2)}for(k=0;k<T;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=T;k<2*T;k++)R[k]=0;return new h(R,0)};function de(k,T){for(;(k[T]&65535)!=k[T];)k[T+1]+=k[T]>>>16,k[T]&=65535,T++}function _e(k,T){this.g=k,this.h=T}function Ae(k,T){if(Z(T))throw Error("division by zero");if(Z(k))return new _e(A,A);if(X(k))return T=Ae(W(k),T),new _e(W(T.g),W(T.h));if(X(T))return T=Ae(k,W(T)),new _e(W(T.g),T.h);if(k.g.length>30){if(X(k)||X(T))throw Error("slowDivide_ only works with positive integers.");for(var R=N,V=T;V.l(k)<=0;)R=ze(R),V=ze(V);var x=Ie(R,1),b=Ie(V,1);for(V=Ie(V,2),R=Ie(R,2);!Z(V);){var S=b.add(V);S.l(k)<=0&&(x=x.add(R),b=S),V=Ie(V,1),R=Ie(R,1)}return T=ge(k,x.j(T)),new _e(x,T)}for(x=A;k.l(T)>=0;){for(R=Math.max(1,Math.floor(k.m()/T.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),b=_(R),S=b.j(T);X(S)||S.l(k)>0;)R-=V,b=_(R),S=b.j(T);Z(b)&&(b=N),x=x.add(b),k=ge(k,S)}return new _e(x,k)}i.B=function(k){return Ae(this,k).h},i.and=function(k){const T=Math.max(this.g.length,k.g.length),R=[];for(let V=0;V<T;V++)R[V]=this.i(V)&k.i(V);return new h(R,this.h&k.h)},i.or=function(k){const T=Math.max(this.g.length,k.g.length),R=[];for(let V=0;V<T;V++)R[V]=this.i(V)|k.i(V);return new h(R,this.h|k.h)},i.xor=function(k){const T=Math.max(this.g.length,k.g.length),R=[];for(let V=0;V<T;V++)R[V]=this.i(V)^k.i(V);return new h(R,this.h^k.h)};function ze(k){const T=k.g.length+1,R=[];for(let V=0;V<T;V++)R[V]=k.i(V)<<1|k.i(V-1)>>>31;return new h(R,k.h)}function Ie(k,T){const R=T>>5;T%=32;const V=k.g.length-R,x=[];for(let b=0;b<V;b++)x[b]=T>0?k.i(b+R)>>>T|k.i(b+R+1)<<32-T:k.i(b+R);return new h(x,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,t_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,gi=h}).apply(typeof yg<"u"?yg:typeof self<"u"?self:typeof window<"u"?window:{});var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var n_,ka,r_,xu,wd,i_,s_,o_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Iu=="object"&&Iu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function A(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var ee=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)ee[Ee-2]=arguments[Ee];return p.prototype[M].apply(E,ee)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function Z(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const j=M.length||0;l.length=g+j;for(let ee=0;ee<j;ee++)l[g+ee]=M[ee]}else l.push(M)}}class X{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function W(l){h.setTimeout(()=>{throw l},0)}function ge(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class de{constructor(){this.h=this.g=null}add(p,g){const E=_e.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var _e=new X(()=>new Ae,l=>l.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,Ie=!1,k=new de,T=()=>{const l=Promise.resolve(void 0);ze=()=>{l.then(R)}};function R(){for(var l;l=ge();){try{l.h.call(l.g)}catch(g){W(g)}var p=_e;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ie=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function Be(l,p){x.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}A(Be,x),Be.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var at="closure_listenable_"+(Math.random()*1e6|0),mt=0;function Ue(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++mt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function z(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function J(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let j=0;j<H.length;j++)g=H[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function ve(l){this.src=l,this.g={},this.h=0}ve.prototype.add=function(l,p,g,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const ee=Ce(l,p,E,M);return ee>-1?(p=l[ee],g||(p.fa=!1)):(p=new Ue(p,this.src,j,!!E,M),p.fa=g,l.push(p)),p};function Se(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(te(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ce(l,p,g,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Ve={};function $e(l,p,g,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)$e(l,p[j],g,E,M);return null}return g=Do(g),l&&l[at]?l.J(p,g,m(E)?!!E.capture:!1,M):Bt(l,p,g,!1,E,M)}function Bt(l,p,g,E,M,j){if(!p)throw Error("Invalid event type");const ee=m(M)?!!M.capture:!!M;let Ee=gs(l);if(Ee||(l[Me]=Ee=new ve(l)),g=Ee.add(p,g,E,ee,j),g.proxy)return g;if(E=ps(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)b||(M=ee),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ms(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ps(){function l(g){return p.call(l.src,l.listener,g)}const p=ol;return l}function No(l,p,g,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)No(l,p[j],g,E,M);else E=m(E)?!!E.capture:!!E,g=Do(g),l&&l[at]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=Ce(p,g,E,M),g>-1&&(te(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=gs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ce(p,g,E,M)),(g=l>-1?p[l]:null)&&Nr(g))}function Nr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[at])Se(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(ms(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=gs(p))?(Se(g,l),g.h==0&&(g.src=null,p[Me]=null)):te(l)}}}function ms(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function ol(l,p){if(l.da)l=!0;else{p=new Be(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Nr(l),l=g.call(E,p)}return l}function gs(l){return l=l[Me],l instanceof ve?l:null}var ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function Do(l){return typeof l=="function"?l:(l[ki]||(l[ki]=function(p){return l.handleEvent(p)}),l[ki])}function lt(){V.call(this),this.i=new ve(this),this.M=this,this.G=null}A(lt,V),lt.prototype[at]=!0,lt.prototype.removeEventListener=function(l,p,g,E){No(this,l,p,g,E)};function rt(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new x(p,l);else if(p instanceof x)p.target=p.target||l;else{var M=p;p=new x(E,l),Te(p,M)}M=!0;let j,ee;if(g)for(ee=g.length-1;ee>=0;ee--)j=p.g=g[ee],M=vn(j,E,!0,p)&&M;if(j=p.g=l,M=vn(j,E,!0,p)&&M,M=vn(j,E,!1,p)&&M,g)for(ee=0;ee<g.length;ee++)j=p.g=g[ee],M=vn(j,E,!1,p)&&M}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)te(g[E]);delete l.g[p],l.h--}}this.G=null},lt.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},lt.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function vn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const ee=p[j];if(ee&&!ee.da&&ee.capture==g){const Ee=ee.listener,it=ee.ha||ee.src;ee.fa&&Se(l.i,ee),M=Ee.call(it,E)!==!1&&M}}return M&&!E.defaultPrevented}function Vo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Oo(l){l.g=Vo(()=>{l.g=null,l.i&&(l.i=!1,Oo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class al extends V{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(l){V.call(this),this.h=l,this.g={}}A(Dr,V);var bo=[];function ys(l){z(l.g,function(p,g){this.g.hasOwnProperty(g)&&Nr(p)},l),l.g={}}Dr.prototype.N=function(){Dr.Z.N.call(this),ys(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=h.JSON.stringify,ll=h.JSON.parse,xi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Or(){}function ul(){}var br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){x.call(this,"d")}A(_s,x);function Lo(){x.call(this,"c")}A(Lo,x);var En={},vs=null;function Lr(){return vs=vs||new lt}En.Ia="serverreachability";function Es(l){x.call(this,En.Ia,l)}A(Es,x);function or(l){const p=Lr();rt(p,new Es(p))}En.STAT_EVENT="statevent";function ar(l,p){x.call(this,En.STAT_EVENT,l),this.stat=p}A(ar,x);function tt(l){const p=Lr();rt(p,new ar(p,l))}En.Ja="timingevent";function Mo(l,p){x.call(this,En.Ja,l),this.size=p}A(Mo,x);function Mr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Fr(){this.g=!0}Fr.prototype.ua=function(){this.g=!1};function cl(l,p,g,E,M,j){l.info(function(){if(l.g)if(j){var ee="",Ee=j.split("&");for(let je=0;je<Ee.length;je++){var it=Ee[je].split("=");if(it.length>1){const ut=it[0];it=it[1];const sn=ut.split("_");ee=sn.length>=2&&sn[1]=="type"?ee+(ut+"="+it+"&"):ee+(ut+"=redacted&")}}}else ee=null;else ee=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+ee})}function hl(l,p,g,E,M,j,ee){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+j+" "+ee})}function On(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ni(l,g)+(E?" "+E:"")})}function dl(l,p){l.info(function(){return"TIMEOUT: "+p})}Fr.prototype.info=function(){};function Ni(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<E.length;ee++)E[ee]=""}}}}return Vr(j)}catch{return p}}var Ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fl;function lr(){}A(lr,Or),lr.prototype.g=function(){return new XMLHttpRequest},fl=new lr;function bn(l){return encodeURIComponent(String(l))}function ws(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function cn(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Dr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var ml={},Fo={};function wn(l,p,g){l.M=1,l.A=cr(hn(p)),l.u=g,l.R=!0,Uo(l,null)}function Uo(l,p){l.F=Date.now(),Di(l),l.B=hn(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Qo(g.i,"t",E),l.C=0,g=l.j.L,l.h=new pl,l.g=Al(l.j,g?p:null,!l.u),l.P>0&&(l.O=new al(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(bo[0]=M.toString()),M=bo);for(let j=0;j<M.length;j++){const ee=$e(g,M[j],E||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),or(),cl(l.i,l.v,l.B,l.l,l.S,l.u)}cn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Bn(l)==3?p.j():this.Y(l)},cn.prototype.Y=function(l){try{if(l==this.g)e:{const Ee=Bn(this.g),it=this.g.ya(),je=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||Il(this.g)))){this.K||Ee!=4||it==7||(it==8||je<=0?or(3):or(2)),Ts(this);var p=this.g.ca();this.X=p;var g=gl(this);if(this.o=p==200,hl(this.i,this.v,this.B,this.l,this.S,Ee,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(E)){var j=E;break t}}j=null}if(l=j)On(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,tt(12),ur(this),Vi(this);break e}}if(this.R){l=!0;let ut;for(;!this.K&&this.C<g.length;)if(ut=_l(this,g),ut==Fo){Ee==4&&(this.m=4,tt(14),l=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==ml){this.m=4,tt(15),On(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else On(this.i,this.l,ut,null),Ge(this,ut);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||g.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)On(this.i,this.l,g,"[Invalid Chunked Response]"),ur(this),Vi(this);else if(g.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Bi(ee),ee.P=!0,tt(11))}}else On(this.i,this.l,g,null),Ge(this,g);Ee==4&&ur(this),this.o&&!this.K&&(Ee==4?Ds(this.j,this):(this.o=!1,Di(this)))}else Xo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),ur(this),Vi(this)}}}catch{}finally{}};function gl(l){if(!yl(l))return l.g.la();const p=Il(l.g);if(p==="")return"";let g="";const E=p.length,M=Bn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ur(l),Vi(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function yl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function _l(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?Fo:(g=Number(p.substring(g,E)),isNaN(g)?ml:(E+=1,E+g>p.length?Fo:(p=p.slice(E,E+g),l.C=E+g,p)))}cn.prototype.cancel=function(){this.K=!0,ur(this)};function Di(l){l.T=Date.now()+l.H,jo(l,l.H)}function jo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Mr(_(l.aa,l),p)}function Ts(l){l.D&&(h.clearTimeout(l.D),l.D=null)}cn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(dl(this.i,this.B),this.M!=2&&(or(),tt(17)),ur(this),this.m=2,Vi(this)):jo(this,this.T-l)};function Vi(l){l.j.I==0||l.K||Ds(l.j,l)}function ur(l){Ts(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ys(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Bo(g.h,l))){if(!l.L&&Bo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Ns(g),nn(g);else break e;Hn(g),tt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Mr(_(g.Va,g),6e3));Oi(g.h)<=1&&g.ta&&(g.ta=void 0)}else rn(g,11)}else if((l.L||g.g==l)&&Ns(g),!S(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let je=M[p];const ut=je[0];if(!(ut<=g.K))if(g.K=ut,je=je[1],g.I==2)if(je[0]=="c"){g.M=je[1],g.ba=je[2];const sn=je[3];sn!=null&&(g.ka=sn,g.j.info("VER="+g.ka));const mr=je[4];mr!=null&&(g.za=mr,g.j.info("SVER="+g.za));const Wn=je[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(E=1.5*Wn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Gn=l.g;if(Gn){const bs=Gn.g?Gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var j=E.h;j.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ss(j,j.h),j.h=null))}if(E.G){const ea=Gn.g?Gn.g.getResponseHeader("X-HTTP-Session-Id"):null;ea&&(E.wa=ea,Le(E.J,E.G,ea))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var ee=l;if(E.na=Zo(E,E.L?E.ba:null,E.W),ee.L){bi(E.h,ee);var Ee=ee,it=E.O;it&&(Ee.H=it),Ee.D&&(Ts(Ee),Di(Ee)),E.g=ee}else Vt(E);g.i.length>0&&pr(g)}else je[0]!="stop"&&je[0]!="close"||rn(g,7);else g.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?rn(g,7):ks(g):je[0]!="noop"&&g.l&&g.l.qa(je),g.A=0)}}or(4)}catch{}}var Ac=class{constructor(l,p){this.g=l,this.map=p}};function Is(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Oi(l){return l.h?1:l.g?l.g.size:0}function Bo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ss(l,p){l.g?l.g.add(p):l.h=p}function bi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Is.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Zt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return B(l.i)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,j=null;E>=0?(M=l[g].substring(0,E),j=l[g].substring(E+1)):M=l[g],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ln?(this.l=l.l,Li(this,l.j),this.o=l.o,this.g=l.g,Mn(this,l.u),this.h=l.h,zr(this,Yo(l.i)),this.m=l.m):l&&(p=String(l).match(vl))?(this.l=!1,Li(this,p[1]||"",!0),this.o=Mi(p[2]||""),this.g=Mi(p[3]||"",!0),Mn(this,p[4]),this.h=Mi(p[5]||"",!0),zr(this,p[6]||"",!0),this.m=Mi(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}Ln.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Fi(p,qo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Fi(p,qo,!0),"@"),l.push(bn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Fi(g,g.charAt(0)=="/"?Ui:Ho,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Fi(g,Wo)),l.join("")},Ln.prototype.resolve=function(l){const p=hn(this);let g=!!l.j;g?Li(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)Mn(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let ee=0;ee<M.length;){const Ee=M[ee++];Ee=="."?E&&ee==M.length&&j.push(""):Ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&ee==M.length&&j.push("")):(j.push(Ee),E=!0)}E=j.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?zr(p,Yo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function hn(l){return new Ln(l)}function Li(l,p,g){l.j=g?Mi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Mn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function zr(l,p,g){p instanceof Ne?(l.i=p,Rs(l.i,l.l)):(g||(p=Fi(p,Rc)),l.i=new Ne(p,l.l))}function Le(l,p,g){l.i.set(p,g)}function cr(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Mi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,$o),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $o(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var qo=/[#\/\?@]/g,Ho=/[#\?:]/g,Ui=/[#\?]/g,Rc=/[#\?@]/g,Wo=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&en(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Ne.prototype,i.add=function(l,p){Fn(this),this.i=null,l=Un(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Go(l,p){Fn(l),p=Un(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function As(l,p){return Fn(l),p=Un(l,p),l.g.has(p)}i.forEach=function(l,p){Fn(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Ko(l,p){Fn(l);let g=[];if(typeof p=="string")As(l,p)&&(g=g.concat(l.g.get(Un(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Fn(this),this.i=null,l=Un(this,l),As(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Ko(this,l),l.length>0?String(l[0]):p):p};function Qo(l,p,g){Go(l,p),g.length>0&&(l.i=null,l.g.set(Un(l,p),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=bn(g);g=Ko(this,g);for(let j=0;j<g.length;j++){let ee=M;g[j]!==""&&(ee+="="+bn(g[j])),l.push(ee)}}return this.i=l.join("&")};function Yo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Un(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(Go(this,E),Qo(this,M,g))},l)),l.j=p}function jn(l,p){const g=new Fr;if(h.Image){const E=new Image;E.onload=w(Rt,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(Rt,g,"TestLoadImage: error",!1,p,E),E.onabort=w(Rt,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(Rt,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function zn(l,p){const g=new Fr,E=new AbortController,M=setTimeout(()=>{E.abort(),Rt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?Rt(g,"TestPingServer: ok",!0,p):Rt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rt(g,"TestPingServer: error",!1,p)})}function Rt(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function ji(){this.g=new xi}function hr(l){this.i=l.Sb||null,this.h=l.ab||!1}A(hr,Or),hr.prototype.g=function(){return new tn(this.i,this.h)};function tn(l,p){lt.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(tn,lt),i=tn.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Tn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;El(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function El(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Br(this):Tn(this),this.readyState==3&&El(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Br(this))},i.Na=function(l){this.g&&(this.response=l,Br(this))},i.ga=function(){this.g&&Br(this)};function Br(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Tn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function Tn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function wl(l){let p="";return z(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Cs(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=wl(g),typeof l=="string"?g!=null&&bn(g):Le(l,p,g))}function qe(l){lt.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(qe,lt);var Tl=/^https?$/i,Cc=["POST","PUT"];i=qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fl.g(),this.g.onreadystatechange=N(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){$r(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Cc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of g)this.g.setRequestHeader(j,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){$r(this,j)}};function $r(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,qr(l),fr(l)}function qr(l){l.A||(l.A=!0,rt(l,"complete"),rt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,rt(this,"complete"),rt(this,"abort"),fr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?dr(this):this.Xa())},i.Xa=function(){dr(this)};function dr(l){if(l.h&&typeof u<"u"){if(l.v&&Bn(l)==4)setTimeout(l.Ca.bind(l),0);else if(rt(l,"readystatechange"),Bn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=j===0){let ee=String(l.D).match(vl)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),E=!Tl.test(ee?ee.toLowerCase():"")}g=E}if(g)rt(l,"complete"),rt(l,"success");else{l.o=6;try{var M=Bn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",qr(l)}}finally{fr(l)}}}}function fr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||rt(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Bn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),ll(p)}};function Il(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Xo(l){const p={};l=(l.g&&Bn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(S(l[E]))continue;var g=ws(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[M]||[];p[M]=j,j.push(g)}J(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ps(l){this.za=0,this.i=[],this.j=new Fr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$n("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$n("baseRetryDelayMs",5e3,l),this.Za=$n("retryDelaySeedMs",1e4,l),this.Ta=$n("forwardChannelMaxRetries",2,l),this.va=$n("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Is(l&&l.concurrentRequestLimit),this.Ba=new ji,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ps.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){tt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Zo(this,null,this.W),pr(this)};function ks(l){if(xs(l),l.I==3){var p=l.V++,g=hn(l.J);if(Le(g,"SID",l.M),Le(g,"RID",p),Le(g,"TYPE","terminate"),qn(l,g),p=new cn(l,l.j,p),p.M=2,p.A=cr(hn(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Al(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Di(p)}$i(l)}function nn(l){l.g&&(Bi(l),l.g.cancel(),l.g=null)}function xs(l){nn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ns(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function pr(l){if(!zo(l.h)&&!l.m){l.m=!0;var p=l.Ea;ze||T(),Ie||(ze(),Ie=!0),k.add(p,l),l.D=0}}function Sl(l,p){return Oi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Mr(_(l.Ea,l,p),Vs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new cn(this,this.j,l);let j=this.o;if(this.U&&(j?(j=O(j),Te(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Jo(this,M,p),g=hn(this.J),Le(g,"RID",l),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),qn(this,g),j&&(this.R?p="headers="+bn(wl(j))+"&"+p:this.u&&Cs(g,this.u,j)),Ss(this.h,M),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",p),Le(g,"SID","null"),M.U=!0,wn(M,g,null)):wn(M,g,p),this.I=2}}else this.I==3&&(l?zi(this,l):this.i.length==0||zo(this.h)||zi(this))};function zi(l,p){var g;p?g=p.l:g=l.V++;const E=hn(l.J);Le(E,"SID",l.M),Le(E,"RID",g),Le(E,"AID",l.K),qn(l,E),l.u&&l.o&&Cs(E,l.u,l.o),g=new cn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Jo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ss(l.h,g),wn(g,E,p)}function qn(l,p){l.H&&z(l.H,function(g,E){Le(p,E,g)}),l.l&&z({},function(g,E){Le(p,E,g)})}function Jo(l,p,g){g=Math.min(l.i.length,g);const E=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ee=-1;for(;;){const it=["count="+g];Ee==-1?g>0?(Ee=M[0].g,it.push("ofs="+Ee)):Ee=0:it.push("ofs="+Ee);let je=!0;for(let ut=0;ut<g;ut++){var j=M[ut].g;const sn=M[ut].map;if(j-=Ee,j<0)Ee=Math.max(0,M[ut].g-100),je=!1;else try{j="req"+j+"_"||"";try{var ee=sn instanceof Map?sn:Object.entries(sn);for(const[mr,Wn]of ee){let Gn=Wn;m(Wn)&&(Gn=Vr(Wn)),it.push(j+mr+"="+encodeURIComponent(Gn))}}catch(mr){throw it.push(j+"type="+encodeURIComponent("_badmap")),mr}}catch{E&&E(sn)}}if(je){ee=it.join("&");break e}}ee=void 0}return l=l.i.splice(0,g),p.G=l,ee}function Vt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;ze||T(),Ie||(ze(),Ie=!0),k.add(p,l),l.A=0}}function Hn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Mr(_(l.Da,l),Vs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Hr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Mr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),nn(this),Hr(this))};function Bi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Hr(l){l.g=new cn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=hn(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),qn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=cr(hn(p)),g.u=null,g.R=!0,Uo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,nn(this),Hn(this),tt(19))};function Ns(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ds(l,p){var g=null;if(l.g==p){Ns(l),Bi(l),l.g=null;var E=2}else if(Bo(l.h,p))g=p.G,bi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=Lr(),rt(E,new Mo(E,g)),pr(l)}else Vt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&Sl(l,p)||E==2&&Hn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:rn(l,5);break;case 4:rn(l,10);break;case 3:rn(l,6);break;default:rn(l,2)}}}function Vs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function rn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),E=l.Ua;const M=!E;E=new Ln(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Li(E,"https"),cr(E),M?jn(E.toString(),g):zn(E.toString(),g)}else tt(2);l.I=0,l.l&&l.l.pa(p),$i(l),xs(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function $i(l){if(l.I=0,l.ja=[],l.l){const p=Zt(l.h);(p.length!=0||l.i.length!=0)&&(Z(l.ja,p),Z(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function Zo(l,p,g){var E=g instanceof Ln?hn(g):new Ln(g);if(E.g!="")p&&(E.g=p+"."+E.g),Mn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Ln(null);E&&Li(j,E),p&&(j.g=p),M&&Mn(j,M),g&&(j.h=g),E=j}return g=l.G,p=l.wa,g&&p&&Le(E,g,p),Le(E,"VER",l.ka),qn(l,E),E}function Al(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new hr({ab:g})):new qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rl(){}i=Rl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Os(){}Os.prototype.g=function(l,p){return new Ct(l,p)};function Ct(l,p){lt.call(this),this.g=new Ps(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Wr(this)}A(Ct,lt),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){ks(this.g)},Ct.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Vr(l),l=g);p.i.push(new Ac(p.Ya++,l)),p.I==3&&pr(p)},Ct.prototype.N=function(){this.g.l=null,delete this.j,ks(this.g),delete this.g,Ct.Z.N.call(this)};function Cl(l){_s.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}A(Cl,_s);function Pl(){Lo.call(this),this.status=1}A(Pl,Lo);function Wr(l){this.g=l}A(Wr,Rl),Wr.prototype.ra=function(){rt(this.g,"a")},Wr.prototype.qa=function(l){rt(this.g,new Cl(l))},Wr.prototype.pa=function(l){rt(this.g,new Pl)},Wr.prototype.oa=function(){rt(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,o_=function(){return new Os},s_=function(){return Lr()},i_=En,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,xu=Ur,jr.COMPLETE="complete",r_=jr,ul.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",lt.prototype.listen=lt.prototype.J,ka=ul,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,n_=qe}).apply(typeof Iu<"u"?Iu:typeof self<"u"?self:typeof window<"u"?window:{});const _g="@firebase/firestore",vg="4.9.3";/**
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
 */let So="12.7.0";/**
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
 */const os=new qd("@firebase/firestore");function no(){return os.logLevel}function ie(i,...e){if(os.logLevel<=Pe.DEBUG){const t=e.map(Gd);os.debug(`Firestore (${So}): ${i}`,...t)}}function Cr(i,...e){if(os.logLevel<=Pe.ERROR){const t=e.map(Gd);os.error(`Firestore (${So}): ${i}`,...t)}}function mo(i,...e){if(os.logLevel<=Pe.WARN){const t=e.map(Gd);os.warn(`Firestore (${So}): ${i}`,...t)}}function Gd(i){if(typeof i=="string")return i;try{/**
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
 */function pe(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,a_(i,s,t)}function a_(i,e,t){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Cr(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||a_(e,o,s)}function we(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class l_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class ST{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class AT{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new yi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new yi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new yi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new l_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class RT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new RT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Eg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Eg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Eg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Kd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=kT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function Td(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return ad(o)===ad(u)?ke(o,u):ad(o)?1:-1}return ke(i.length,e.length)}const xT=55296,NT=57343;function ad(i){const e=i.charCodeAt(0);return e>=xT&&e<=NT}function go(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const wg="__name__";class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Jn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const s=Jn.isNumericId(e),o=Jn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Jn.extractNumericId(e).compare(Jn.extractNumericId(t)):Td(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class We extends Jn{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Jn{construct(e,t,s){return new Nt(e,t,s)}static isValidIdentifier(e){return DT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wg}static keyField(){return new Nt([wg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(We.fromString(e))}static fromName(e){return new ue(We.fromString(e).popFirst(5))}static empty(){return new ue(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new We(e.slice()))}}/**
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
 */function u_(i,e,t){if(!t)throw new ne($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function VT(i,e,t,s){if(e===!0&&s===!0)throw new ne($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Tg(i){if(!ue.isDocumentKey(i))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ig(i){if(ue.isDocumentKey(i))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function c_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function oc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe(12329,{type:typeof i})}function as(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oc(i);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function pt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ya(i,e){if(!c_(i))throw new ne($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ne($.INVALID_ARGUMENT,t);return!0}/**
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
 */const Sg=-62135596800,Ag=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ag);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sg)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ag}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ya(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:pt("string",Ye._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Ye(0,0))}static max(){return new ye(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ua=-1;function OT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ye.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ei(o,ue.empty(),e)}function bT(i){return new Ei(i.readTime,i.key,Ua)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(ye.min(),ue.empty(),Ua)}static max(){return new Ei(ye.max(),ue.empty(),Ua)}}function LT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
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
 */async function Ao(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==MT)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new q(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function UT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ac{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ac.ce=-1;/**
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
 */const Qd=-1;function lc(i){return i==null}function Bu(i){return i===0&&1/i==-1/0}function jT(i){return typeof i=="number"&&Number.isInteger(i)&&!Bu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const h_="";function zT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Rg(e)),e=BT(i.get(t),e);return Rg(e)}function BT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case h_:t+="";break;default:t+=u}}return t}function Rg(i){return i+h_+""}/**
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
 */function Cg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ri(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function d_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Su(this.root,e,this.comparator,!1)}getReverseIterator(){return new Su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Su(this.root,e,this.comparator,!0)}}class Su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??xt.RED,this.left=o??xt.EMPTY,this.right=u??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new xt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new un([])}unionWith(e){let t=new vt(Nt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return go(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class f_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new f_("Invalid base64 string: "+u):u}})(e);return new Dt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const $T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=$T.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?Dt.fromBase64String(i):Dt.fromUint8Array(i)}/**
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
 */const p_="server_timestamp",m_="__type__",g_="__previous_value__",y_="__local_write_time__";function Yd(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[m_])==null?void 0:s.stringValue)===p_}function uc(i){const e=i.mapValue.fields[g_];return Yd(e)?uc(e):e}function ja(i){const e=wi(i.mapValue.fields[y_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class qT{constructor(e,t,s,o,u,h,m,y,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=w}}const $u="(default)";class za{constructor(e,t){this.projectId=e,this.database=t||$u}static empty(){return new za("","")}get isDefaultDatabase(){return this.database===$u}isEqual(e){return e instanceof za&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const __="__type__",HT="__max__",Au={mapValue:{}},v_="__vector__",qu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Yd(i)?4:GT(i)?9007199254740991:WT(i)?10:11:pe(28295,{value:i})}function sr(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return ja(i).isEqual(ja(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=wi(o.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?Bu(h)===Bu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return go(i.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Cg(h)!==Cg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!sr(h[y],m[y])))return!1;return!0})(i,e);default:return pe(52216,{left:i})}}function Ba(i,e){return(i.values||[]).find((t=>sr(t,e)))!==void 0}function yo(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ot(u.integerValue||u.doubleValue),y=ot(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return kg(i.timestampValue,e.timestampValue);case 4:return kg(ja(i),ja(e));case 5:return Td(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const w=ke(m[_],y[_]);if(w!==0)return w}return ke(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=ke(ot(u.latitude),ot(h.latitude));return m!==0?m:ke(ot(u.longitude),ot(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return xg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var N,B,Z,X;const m=u.fields||{},y=h.fields||{},_=(N=m[qu])==null?void 0:N.arrayValue,w=(B=y[qu])==null?void 0:B.arrayValue,A=ke(((Z=_==null?void 0:_.values)==null?void 0:Z.length)||0,((X=w==null?void 0:w.values)==null?void 0:X.length)||0);return A!==0?A:xg(_,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Au.mapValue&&h===Au.mapValue)return 0;if(u===Au.mapValue)return 1;if(h===Au.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},w=Object.keys(_);y.sort(),w.sort();for(let A=0;A<y.length&&A<w.length;++A){const N=Td(y[A],w[A]);if(N!==0)return N;const B=yo(m[y[A]],_[w[A]]);if(B!==0)return B}return ke(y.length,w.length)})(i.mapValue,e.mapValue);default:throw pe(23264,{he:t})}}function kg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=wi(i),s=wi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function xg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=yo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function _o(i){return Id(i)}function Id(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Id(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Id(t.fields[h])}`;return o+"}"})(i.mapValue):pe(61005,{value:i})}function Nu(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(i);return e?16+Nu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Nu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ri(s.fields,((u,h)=>{o+=u.length+Nu(h)})),o})(i.mapValue);default:throw pe(13486,{value:i})}}function Ng(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Sd(i){return!!i&&"integerValue"in i}function Xd(i){return!!i&&"arrayValue"in i}function Dg(i){return!!i&&"nullValue"in i}function Vg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Du(i){return!!i&&"mapValue"in i}function WT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[__])==null?void 0:s.stringValue)===v_}function Va(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ri(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Va(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Va(i.arrayValue.values[t]);return e}return{...i}}function GT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===HT}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(t)}setAll(e){let t=Nt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Va(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ri(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Jt(Va(this.value))}}function E_(i){const e=[];return Ri(i.fields,((t,s)=>{const o=new Nt([t]);if(Du(s)){const u=E_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
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
 */class jt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new jt(e,0,ye.min(),ye.min(),ye.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,ye.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,ye.min(),ye.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,ye.min(),ye.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function Og(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=yo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function bg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!sr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class $a{constructor(e,t="asc"){this.field=e,this.dir=t}}function KT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class w_{}class ft extends w_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new YT(e,t,s):t==="array-contains"?new ZT(e,s):t==="in"?new eI(e,s):t==="not-in"?new tI(e,s):t==="array-contains-any"?new nI(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new XT(e,s):new JT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yo(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends w_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Dn(e,t)}matches(e){return T_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function T_(i){return i.op==="and"}function I_(i){return QT(i)&&T_(i)}function QT(i){for(const e of i.filters)if(e instanceof Dn)return!1;return!0}function Ad(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+_o(i.value);if(I_(i))return i.filters.map((e=>Ad(e))).join(",");{const e=i.filters.map((t=>Ad(t))).join(",");return`${i.op}(${e})`}}function S_(i,e){return i instanceof ft?(function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(i,e):i instanceof Dn?(function(s,o){return o instanceof Dn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&S_(h,o.filters[m])),!0):!1})(i,e):void pe(19439)}function A_(i){return i instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${_o(t.value)}`})(i):i instanceof Dn?(function(t){return t.op.toString()+" {"+t.getFilters().map(A_).join(" ,")+"}"})(i):"Filter"}class YT extends ft{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class XT extends ft{constructor(e,t){super(e,"in",t),this.keys=R_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class JT extends ft{constructor(e,t){super(e,"not-in",t),this.keys=R_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function R_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class ZT extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xd(t)&&Ba(t.arrayValue,this.value)}}class eI extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ba(this.value.arrayValue,t)}}class tI extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ba(this.value.arrayValue,t)}}class nI extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ba(this.value.arrayValue,s)))}}/**
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
 */class rI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Lg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new rI(i,e,t,s,o,u,h)}function Jd(i){const e=we(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Ad(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),lc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>_o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>_o(s))).join(",")),e.Te=t}return e.Te}function Zd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!KT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!S_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!bg(i.startAt,e.startAt)&&bg(i.endAt,e.endAt)}function Rd(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Co{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iI(i,e,t,s,o,u,h,m){return new Co(i,e,t,s,o,u,h,m)}function C_(i){return new Co(i)}function Mg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function P_(i){return i.collectionGroup!==null}function Oa(i){const e=we(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new vt(Nt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new $a(u,s))})),t.has(Nt.keyField().canonicalString())||e.Ie.push(new $a(Nt.keyField(),s))}return e.Ie}function Zn(i){const e=we(i);return e.Ee||(e.Ee=sI(e,Oa(i))),e.Ee}function sI(i,e){if(i.limitType==="F")return Lg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new $a(o.field,u)}));const t=i.endAt?new Hu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Hu(i.startAt.position,i.startAt.inclusive):null;return Lg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Cd(i,e){const t=i.filters.concat([e]);return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Pd(i,e,t){return new Co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function cc(i,e){return Zd(Zn(i),Zn(e))&&i.limitType===e.limitType}function k_(i){return`${Jd(Zn(i))}|lt:${i.limitType}`}function ro(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>A_(o))).join(", ")}]`),lc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>_o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>_o(o))).join(",")),`Target(${s})`})(Zn(i))}; limitType=${i.limitType})`}function hc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Oa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=Og(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,Oa(s),o)||s.endAt&&!(function(h,m,y){const _=Og(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,Oa(s),o))})(i,e)}function oI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function x_(i){return(e,t)=>{let s=!1;for(const o of Oa(i)){const u=aI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function aI(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?yo(y,_):pe(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:i.dir})}}/**
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
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return d_(this.inner)}size(){return this.innerSize}}/**
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
 */const lI=new et(ue.comparator);function Pr(){return lI}const N_=new et(ue.comparator);function xa(...i){let e=N_;for(const t of i)e=e.insert(t.key,t);return e}function D_(i){let e=N_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function rs(){return ba()}function V_(){return ba()}function ba(){return new cs((i=>i.toString()),((i,e)=>i.isEqual(e)))}const uI=new et(ue.comparator),cI=new vt(ue.comparator);function xe(...i){let e=cI;for(const t of i)e=e.add(t);return e}const hI=new vt(ke);function dI(){return hI}/**
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
 */function ef(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(e)?"-0":e}}function O_(i){return{integerValue:""+i}}function fI(i,e){return jT(e)?O_(e):ef(i,e)}/**
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
 */class dc{constructor(){this._=void 0}}function pI(i,e,t){return i instanceof Wu?(function(o,u){const h={fields:{[m_]:{stringValue:p_},[y_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Yd(u)&&(u=uc(u)),u&&(h.fields[g_]=u),{mapValue:h}})(t,e):i instanceof qa?L_(i,e):i instanceof Ha?M_(i,e):(function(o,u){const h=b_(o,u),m=Fg(h)+Fg(o.Ae);return Sd(h)&&Sd(o.Ae)?O_(m):ef(o.serializer,m)})(i,e)}function mI(i,e,t){return i instanceof qa?L_(i,e):i instanceof Ha?M_(i,e):t}function b_(i,e){return i instanceof Gu?(function(s){return Sd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Wu extends dc{}class qa extends dc{constructor(e){super(),this.elements=e}}function L_(i,e){const t=F_(e);for(const s of i.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ha extends dc{constructor(e){super(),this.elements=e}}function M_(i,e){let t=F_(e);for(const s of i.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class Gu extends dc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Fg(i){return ot(i.integerValue||i.doubleValue)}function F_(i){return Xd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function gI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof qa&&o instanceof qa||s instanceof Ha&&o instanceof Ha?go(s.elements,o.elements,sr):s instanceof Gu&&o instanceof Gu?sr(s.Ae,o.Ae):s instanceof Wu&&o instanceof Wu})(i.transform,e.transform)}class yI{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class fc{}function U_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new tf(i.key,Nn.none()):new Xa(i.key,i.data,Nn.none());{const t=i.data,s=Jt.empty();let o=new vt(Nt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ci(i.key,s,new un(o.toArray()),Nn.none())}}function _I(i,e,t){i instanceof Xa?(function(o,u,h){const m=o.value.clone(),y=jg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Ci?(function(o,u,h){if(!Vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=jg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(j_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function La(i,e,t,s){return i instanceof Xa?(function(u,h,m,y){if(!Vu(u.precondition,h))return m;const _=u.value.clone(),w=zg(u.fieldTransforms,y,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ci?(function(u,h,m,y){if(!Vu(u.precondition,h))return m;const _=zg(u.fieldTransforms,y,h),w=h.data;return w.setAll(j_(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((A=>A.field)))})(i,e,t,s):(function(u,h,m){return Vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function vI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=b_(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function Ug(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&go(s,o,((u,h)=>gI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Xa extends fc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ci extends fc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function j_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function jg(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,mI(h,m,t[o]))}return s}function zg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,pI(u,h,e))}return s}class tf extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EI extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&_I(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=La(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=V_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=U_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&go(this.mutations,e.mutations,((t,s)=>Ug(t,s)))&&go(this.baseMutations,e.baseMutations,((t,s)=>Ug(t,s)))}}class nf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return uI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new nf(e,t,s,o)}}/**
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
 */var ht,De;function SI(i){switch(i){case $.OK:return pe(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return pe(15467,{code:i})}}function z_(i){if(i===void 0)return Cr("GRPC error has no .code"),$.UNKNOWN;switch(i){case ht.OK:return $.OK;case ht.CANCELLED:return $.CANCELLED;case ht.UNKNOWN:return $.UNKNOWN;case ht.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ht.INTERNAL:return $.INTERNAL;case ht.UNAVAILABLE:return $.UNAVAILABLE;case ht.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ht.NOT_FOUND:return $.NOT_FOUND;case ht.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ht.ABORTED:return $.ABORTED;case ht.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ht.DATA_LOSS:return $.DATA_LOSS;default:return pe(39323,{code:i})}}(De=ht||(ht={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const RI=new gi([4294967295,4294967295],0);function Bg(i){const e=AI().encode(i),t=new t_;return t.update(e),new Uint8Array(t.digest())}function $g(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new gi([t,s],0),new gi([o,u],0)]}class rf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(s<0)throw new Na(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(gi.fromNumber(s)));return o.compare(RI)===1&&(o=new gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Bg(e),[s,o]=$g(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new rf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Bg(e),[s,o]=$g(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ja.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new pc(ye.min(),o,new et(ke),Pr(),xe())}}class Ja{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ja(s,t,xe(),xe(),xe())}}/**
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
 */class Ou{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class B_{constructor(e,t){this.targetId=e,this.Ce=t}}class $_{constructor(e,t,s=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class qg{constructor(){this.ve=0,this.Fe=Hg(),this.Me=Dt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),s=xe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe(38017,{changeType:u})}})),new Ja(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Hg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class CI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=Ru(),this.He=Ru(),this.Ye=new et(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:pe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Rd(u))if(s===0){const h=new ue(u.path);this.et(t,h,jt.newNoDocument(h,ye.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof f_)return mo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new rf(h,o,u)}catch(y){return mo(y instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Rd(m.target)){const y=new ue(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,jt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=xe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new pc(e,t,this.Ye,this.je,s);return this.je=Pr(),this.Je=Ru(),this.He=Ru(),this.Ye=new et(ke),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new qg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new vt(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new vt(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new et(ue.comparator)}function Hg(){return new et(ue.comparator)}const PI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xI={and:"AND",or:"OR"};class NI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kd(i,e){return i.useProto3Json||lc(e)?e:{value:e}}function Ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function q_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function DI(i,e){return Ku(i,e.toTimestamp())}function er(i){return Fe(!!i,49232),ye.fromTimestamp((function(t){const s=wi(t);return new Ye(s.seconds,s.nanos)})(i))}function sf(i,e){return xd(i,e).canonicalString()}function xd(i,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function H_(i){const e=We.fromString(i);return Fe(Y_(e),10190,{key:e.toString()}),e}function Nd(i,e){return sf(i.databaseId,e.path)}function ld(i,e){const t=H_(e);if(t.get(1)!==i.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(G_(t))}function W_(i,e){return sf(i.databaseId,e)}function VI(i){const e=H_(i);return e.length===4?We.emptyPath():G_(e)}function Dd(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function G_(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Wg(i,e,t){return{name:Nd(i,e),fields:t.value.mapValue.fields}}function OI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:pe(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),Dt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Dt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?$.UNKNOWN:z_(_.code);return new ne(w,_.message||"")})(h);t=new $_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=ld(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):ye.min(),m=new Jt({mapValue:{fields:s.document.fields}}),y=jt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Ou(_,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=ld(i,s.document),u=s.readTime?er(s.readTime):ye.min(),h=jt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ou([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=ld(i,s.document),u=s.removedTargetIds||[];t=new Ou([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new II(o,u),m=s.targetId;t=new B_(m,h)}}return t}function bI(i,e){let t;if(e instanceof Xa)t={update:Wg(i,e.key,e.value)};else if(e instanceof tf)t={delete:Nd(i,e.key)};else if(e instanceof Ci)t={update:Wg(i,e.key,e.data),updateMask:qI(e.fieldMask)};else{if(!(e instanceof EI))return pe(16599,{Vt:e.type});t={verify:Nd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Wu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Gu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw pe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:DI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)})(i,e.precondition)),t}function LI(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(ye.min())&&(h=er(u)),new yI(h,o.transformResults||[])})(t,e)))):[]}function MI(i,e){return{documents:[W_(i,e.path)]}}function FI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=W_(i,o);const u=(function(_){if(_.length!==0)return Q_(Dn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(N){return{field:io(N.field),direction:zI(N.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=kd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function UI(i){let e=VI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(A){const N=K_(A);return N instanceof Dn&&I_(N)?N.getFilters():[N]})(t.where));let h=[];t.orderBy&&(h=(function(A){return A.map((N=>(function(Z){return new $a(so(Z.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(N)))})(t.orderBy));let m=null;t.limit&&(m=(function(A){let N;return N=typeof A=="object"?A.value:A,lc(N)?null:N})(t.limit));let y=null;t.startAt&&(y=(function(A){const N=!!A.before,B=A.values||[];return new Hu(B,N)})(t.startAt));let _=null;return t.endAt&&(_=(function(A){const N=!A.before,B=A.values||[];return new Hu(B,N)})(t.endAt)),iI(e,o,h,u,m,"F",y,_)}function jI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function K_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=so(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=so(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=so(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ft.create(so(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Dn.create(t.compositeFilter.filters.map((s=>K_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}})(t.compositeFilter.op))})(i):pe(30097,{filter:i})}function zI(i){return PI[i]}function BI(i){return kI[i]}function $I(i){return xI[i]}function io(i){return{fieldPath:i.canonicalString()}}function so(i){return Nt.fromServerFormat(i.fieldPath)}function Q_(i){return i instanceof ft?(function(t){if(t.op==="=="){if(Vg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NAN"}};if(Dg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NAN"}};if(Dg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(t.field),op:BI(t.op),value:t.value}}})(i):i instanceof Dn?(function(t){const s=t.getFilters().map((o=>Q_(o)));return s.length===1?s[0]:{compositeFilter:{op:$I(t.op),filters:s}}})(i):pe(54877,{filter:i})}function qI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Y_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class di{constructor(e,t,s,o,u=ye.min(),h=ye.min(),m=Dt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class HI{constructor(e){this.yt=e}}function WI(i){const e=UI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Pd(e,e.limit,"L"):e}/**
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
 */class GI{constructor(){this.Cn=new KI}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ei.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class KI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new vt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new vt(We.comparator)).toArray()}}/**
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
 */const Gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X_=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(X_,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class vo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new vo(0)}static cr(){return new vo(-1)}}/**
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
 */const Kg="LruGarbageCollector",QI=1048576;function Qg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class YI{constructor(e){this.Ir=e,this.buffer=new vt(Qg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Qg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class XI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Kg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?ie(Kg,"Ignoring IndexedDB error during garbage collection: ",t):await Ao(t)}await this.Vr(3e5)}))}}class JI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(ac.ce);const s=new YI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Gg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o)))).next((A=>(s=A,m=Date.now(),this.removeTargets(e,s,t)))).next((A=>(u=A,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((A=>(_=Date.now(),no()<=Pe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${A} documents in `+(_-y)+`ms
Total Duration: ${_-w}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A}))))}}function ZI(i,e){return new JI(i,e)}/**
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
 */class e1{constructor(){this.changes=new cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class n1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&La(s.mutation,o,un.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=rs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=xa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=rs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Pr();const h=ba(),m=(function(){return ba()})();return t.forEach(((y,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof Ci)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),La(w.mutation,_,w.mutation.getFieldMask(),Ye.now())):h.set(_.key,un.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>m.set(_,new t1(w,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=ba();let o=new et(((h,m)=>h-m)),u=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let w=s.get(y)||un.empty();w=m.applyToLocalView(_,w),s.set(y,w);const A=(o.get(m.batchId)||xe()).add(y);o=o.insert(m.batchId,A)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,w=y.value,A=V_();w.forEach((N=>{if(!u.has(N)){const B=U_(t.get(N),s.get(N));B!==null&&A.set(N,B),u=u.add(N)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,A))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):P_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):q.resolve(rs());let m=Ua,y=u;return h.next((_=>q.forEach(_,((w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?q.resolve():this.remoteDocumentCache.getEntry(e,w).next((N=>{y=y.insert(w,N)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,xe()))).next((w=>({batchId:m,changes:D_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let o=xa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=xa();return this.indexManager.getCollectionParents(e,u).next((m=>q.forEach(m,(y=>{const _=(function(A,N){return new Co(N,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((A,N)=>{h=h.insert(A,N)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,jt.newInvalidDocument(w)))}));let m=xa();return h.forEach(((y,_)=>{const w=u.get(y);w!==void 0&&La(w.mutation,_,un.empty(),Ye.now()),hc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
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
 */class r1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:WI(o.bundledQuery),readTime:er(o.readTime)}})(t)),q.resolve()}}/**
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
 */class i1{constructor(){this.overlays=new et(ue.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=rs();return q.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=rs(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=rs(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=rs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return q.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new TI(t,s));let u=this.qr.get(t);u===void 0&&(u=xe(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class s1{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
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
 */class of{constructor(){this.Qr=new vt(It.$r),this.Ur=new vt(It.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new It(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new ue(new We([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ue(new We([])),s=new It(t,e),o=new It(t,e+1);let u=xe();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new It(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ue.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||ue.comparator(e.key,t.key)}}/**
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
 */class o1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new vt(It.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new wI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Qd:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new vt(ke);return t.forEach((o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new It(new ue(u),0);let m=new vt(ke);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),q.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(t.mutations,(o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new It(t,0),o=this.Zr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class a1{constructor(e){this.ri=e,this.docs=(function(){return new et(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=Pr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():jt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Pr();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:w}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||LT(bT(w),s)<=0||(o.has(w.key)||hc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return q.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe(9500)}ii(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new l1(this)}getSize(e){return q.resolve(this.size)}}class l1 extends e1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class u1{constructor(e){this.persistence=e,this.si=new cs((t=>Jd(t)),Zd),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.oi=0,this._i=new of,this.targetCount=0,this.ai=vo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),q.waitFor(u).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
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
 */class J_{constructor(e,t){this.ui={},this.overlays={},this.ci=new ac(0),this.li=!1,this.li=!0,this.hi=new s1,this.referenceDelegate=e(this),this.Pi=new u1(this),this.indexManager=new GI,this.remoteDocumentCache=(function(o){return new a1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new HI(t),this.Ii=new r1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new o1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new c1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return q.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class c1 extends FT{constructor(e){super(),this.currentSequenceNumber=e}}class af{constructor(e){this.persistence=e,this.Ri=new of,this.Vi=null}static mi(e){return new af(e)}get fi(){if(this.Vi)return this.Vi;throw pe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(s=>{const o=ue.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,ye.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Qu{constructor(e,t){this.persistence=e,this.pi=new cs((s=>zT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=ZI(this,t)}static mi(e,t){return new Qu(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ye.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nu(e.data.value)),t}br(e,t,s){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=xe(),o=xe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new lf(e,t.fromCache,s,o)}}/**
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
 */class d1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return rw()?8:UT(zt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new h1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(no()<=Pe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(no()<=Pe.DEBUG&&ie("QueryEngine","Query:",ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(no()<=Pe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(t))):q.resolve())}ys(e,t){if(Mg(t))return q.resolve(null);let s=Zn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Pd(t,null,"F"),s=Zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=xe(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Pd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return Mg(t)||o.isEqual(ye.min())?q.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?q.resolve(null):(no()<=Pe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ro(t)),this.vs(e,h,t,OT(o,Ua)).next((m=>m)))}))}Ds(e,t){let s=new vt(x_(e));return t.forEach(((o,u)=>{hc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return no()<=Pe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ro(t)),this.ps.getDocumentsMatchingQuery(e,t,Ei.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const uf="LocalStore",f1=3e8;class p1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new et(ke),this.xs=new cs((u=>Jd(u)),Zd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function m1(i,e,t,s){return new p1(i,e,t,s)}async function Z_(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=xe();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function g1(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,w){const A=_.batch,N=A.keys();let B=q.resolve();return N.forEach((Z=>{B=B.next((()=>w.getEntry(y,Z))).next((X=>{const W=_.docVersions.get(Z);Fe(W!==null,48541),X.version.compareTo(W)<0&&(A.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),w.addEntry(X)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,A)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=xe();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function ev(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function y1(i,e){const t=we(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((w,A)=>{const N=o.get(A);if(!N)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,A).next((()=>t.Pi.addMatchingKeys(u,w.addedDocuments,A))));let B=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?B=B.withResumeToken(Dt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(A,B),(function(X,W,ge){return X.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=f1?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0})(N,B,w)&&m.push(t.Pi.updateTargetData(u,B))}));let y=Pr(),_=xe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(_1(u,h,e.documentUpdates).next((w=>{y=w.ks,_=w.qs}))),!s.isEqual(ye.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next((A=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return q.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function _1(i,e,t){let s=xe(),o=xe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Pr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ye.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie(uf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function v1(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Qd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function E1(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,q.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Vd(i,e,t){const s=we(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;ie(uf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Yg(i,e,t){const s=we(i);let o=ye.min(),u=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,w){const A=we(y),N=A.xs.get(w);return N!==void 0?q.resolve(A.Ms.get(N)):A.Pi.getTargetData(_,w)})(s,h,Zn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:ye.min(),t?u:xe()))).next((m=>(w1(s,oI(e),m),{documents:m,Qs:u})))))}function w1(i,e,t){let s=i.Os.get(e)||ye.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class Xg{constructor(){this.activeTargetIds=dI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T1{constructor(){this.Mo=new Xg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const Jg="ConnectivityMonitor";class Zg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(Jg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(Jg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cu=null;function Od(){return Cu===null?Cu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Cu++,"0x"+Cu.toString(16)}/**
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
 */const ud="RestConnection",S1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===$u?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Od(),m=this.zo(e,t.toUriEncodedString());ie(ud,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),w=To(_);return this.Jo(e,m,y,s,w).then((A=>(ie(ud,`Received RPC '${e}' ${h}: `,A),A)),(A=>{throw mo(ud,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=S1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class R1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ft="WebChannelConnection";class C1 extends A1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Od();return new Promise(((m,y)=>{const _=new n_;_.setWithCredentials(!0),_.listenOnce(r_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case xu.NO_ERROR:const A=_.getResponseJson();ie(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case xu.TIMEOUT:ie(Ft,`RPC '${e}' ${h} timed out`),y(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case xu.HTTP_ERROR:const N=_.getStatus();if(ie(Ft,`RPC '${e}' ${h} failed with status:`,N,"response text:",_.getResponseText()),N>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const Z=B==null?void 0:B.error;if(Z&&Z.status&&Z.message){const X=(function(ge){const de=ge.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(de)>=0?de:$.UNKNOWN})(Z.status);y(new ne(X,Z.message))}else y(new ne($.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ne($.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ie(Ft,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ie(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Od(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=o_(),m=s_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ie(Ft,`Creating RPC '${e}' stream ${o}: ${w}`,y);const A=h.createWebChannel(w,y);this.I_(A);let N=!1,B=!1;const Z=new R1({Yo:W=>{B?ie(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(N||(ie(Ft,`Opening RPC '${e}' stream ${o} transport.`),A.open(),N=!0),ie(Ft,`RPC '${e}' stream ${o} sending:`,W),A.send(W))},Zo:()=>A.close()}),X=(W,ge,de)=>{W.listen(ge,(_e=>{try{de(_e)}catch(Ae){setTimeout((()=>{throw Ae}),0)}}))};return X(A,ka.EventType.OPEN,(()=>{B||(ie(Ft,`RPC '${e}' stream ${o} transport opened.`),Z.o_())})),X(A,ka.EventType.CLOSE,(()=>{B||(B=!0,ie(Ft,`RPC '${e}' stream ${o} transport closed`),Z.a_(),this.E_(A))})),X(A,ka.EventType.ERROR,(W=>{B||(B=!0,mo(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Z.a_(new ne($.UNAVAILABLE,"The operation could not be completed")))})),X(A,ka.EventType.MESSAGE,(W=>{var ge;if(!B){const de=W.data[0];Fe(!!de,16349);const _e=de,Ae=(_e==null?void 0:_e.error)||((ge=_e[0])==null?void 0:ge.error);if(Ae){ie(Ft,`RPC '${e}' stream ${o} received error:`,Ae);const ze=Ae.status;let Ie=(function(R){const V=ht[R];if(V!==void 0)return z_(V)})(ze),k=Ae.message;Ie===void 0&&(Ie=$.INTERNAL,k="Unknown error status: "+ze+" with message "+Ae.message),B=!0,Z.a_(new ne(Ie,k)),A.close()}else ie(Ft,`RPC '${e}' stream ${o} received:`,de),Z.u_(de)}})),X(m,i_.STAT_EVENT,(W=>{W.stat===wd.PROXY?ie(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===wd.NOPROXY&&ie(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Z.__()}),0),Z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function cd(){return typeof document<"u"?document:null}/**
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
 */function mc(i){return new NI(i,!0)}/**
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
 */class tv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ey="PersistentStream";class nv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Cr(t.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new ne($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(ey,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(ey,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class P1 extends nv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=OI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?er(h.readTime):ye.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Dd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Rd(y)?{documents:MI(u,y)}:{query:FI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=q_(u,h.resumeToken);const _=kd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Ku(u,h.snapshotVersion.toTimestamp());const _=kd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=jI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Dd(this.serializer),t.removeTarget=e,this.q_(t)}}class k1 extends nv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=LI(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Dd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>bI(this.serializer,s)))};this.q_(t)}}/**
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
 */class x1{}class N1 extends x1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,xd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne($.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,xd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ne($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class D1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ls="RemoteStore";class V1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{hs(this)&&(ie(ls,"Restarting streams for network reachability change."),await(async function(y){const _=we(y);_.Ea.add(4),await Za(_),_.Ra.set("Unknown"),_.Ea.delete(4),await gc(_)})(this))}))})),this.Ra=new D1(s,o)}}async function gc(i){if(hs(i))for(const e of i.da)await e(!0)}async function Za(i){for(const e of i.da)await e(!1)}function rv(i,e){const t=we(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ff(t)?df(t):Po(t).O_()&&hf(t,e))}function cf(i,e){const t=we(i),s=Po(t);t.Ia.delete(e),s.O_()&&iv(t,e),t.Ia.size===0&&(s.O_()?s.L_():hs(t)&&t.Ra.set("Unknown"))}function hf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Po(i).Y_(e)}function iv(i,e){i.Va.Ue(e),Po(i).Z_(e)}function df(i){i.Va=new CI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Po(i).start(),i.Ra.ua()}function ff(i){return hs(i)&&!Po(i).x_()&&i.Ia.size>0}function hs(i){return we(i).Ea.size===0}function sv(i){i.Va=void 0}async function O1(i){i.Ra.set("Online")}async function b1(i){i.Ia.forEach(((e,t)=>{hf(i,e)}))}async function L1(i,e){sv(i),ff(i)?(i.Ra.ha(e),df(i)):i.Ra.set("Unknown")}async function M1(i,e,t){if(i.Ra.set("Online"),e instanceof $_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){ie(ls,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yu(i,s)}else if(e instanceof Ou?i.Va.Ze(e):e instanceof B_?i.Va.st(e):i.Va.tt(e),!t.isEqual(ye.min()))try{const s=await ev(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(_);w&&u.Ia.set(_,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(Dt.EMPTY_BYTE_STRING,w.snapshotVersion)),iv(u,y);const A=new di(w.target,y,_,w.sequenceNumber);hf(u,A)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ie(ls,"Failed to raise snapshot:",s),await Yu(i,s)}}async function Yu(i,e,t){if(!Ro(e))throw e;i.Ea.add(1),await Za(i),i.Ra.set("Offline"),t||(t=()=>ev(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(ls,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await gc(i)}))}function ov(i,e){return e().catch((t=>Yu(i,t,e)))}async function yc(i){const e=we(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qd;for(;F1(e);)try{const o=await v1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,U1(e,o)}catch(o){await Yu(e,o)}av(e)&&lv(e)}function F1(i){return hs(i)&&i.Ta.length<10}function U1(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.X_&&t.ea(e.mutations)}function av(i){return hs(i)&&!Si(i).x_()&&i.Ta.length>0}function lv(i){Si(i).start()}async function j1(i){Si(i).ra()}async function z1(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function B1(i,e,t){const s=i.Ta.shift(),o=nf.from(s,e,t);await ov(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await yc(i)}async function $1(i,e){e&&Si(i).X_&&await(async function(s,o){if((function(h){return SI(h)&&h!==$.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await ov(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await yc(s)}})(i,e),av(i)&&lv(i)}async function ty(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),ie(ls,"RemoteStore received new credentials");const s=hs(t);t.Ea.add(3),await Za(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await gc(t)}async function q1(i,e){const t=we(i);e?(t.Ea.delete(2),await gc(t)):e||(t.Ea.add(2),await Za(t),t.Ra.set("Unknown"))}function Po(i){return i.ma||(i.ma=(function(t,s,o){const u=we(t);return u.sa(),new P1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:O1.bind(null,i),t_:b1.bind(null,i),r_:L1.bind(null,i),H_:M1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),ff(i)?df(i):i.Ra.set("Unknown")):(await i.ma.stop(),sv(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const u=we(t);return u.sa(),new k1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:j1.bind(null,i),r_:$1.bind(null,i),ta:z1.bind(null,i),na:B1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await yc(i)):(await i.fa.stop(),i.Ta.length>0&&(ie(ls,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class pf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new pf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mf(i,e){if(Cr("AsyncQueue",`${e}: ${i}`),Ro(i))return new ne($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class ao{static emptySet(e){return new ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=xa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class ny{constructor(){this.ga=new et(ue.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):pe(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Eo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new Eo(e,t,ao.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class H1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class W1{constructor(){this.queries=ry(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=ry(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new ne($.ABORTED,"Firestore shutting down"))}}function ry(){return new cs((i=>k_(i)),cc)}async function G1(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new H1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=mf(h,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&gf(t)}async function K1(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Q1(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&gf(t)}function Y1(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function gf(i){i.Ca.forEach((e=>{e.next()}))}var bd,iy;(iy=bd||(bd={})).Ma="default",iy.Cache="cache";class X1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Eo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==bd.Cache}}/**
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
 */class uv{constructor(e){this.key=e}}class cv{constructor(e){this.key=e}}class J1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=x_(e),this.tu=new ao(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new ny,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,A)=>{const N=o.get(w),B=hc(this.query,A)?A:null,Z=!!N&&this.mutatedKeys.has(N.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;N&&B?N.data.isEqual(B.data)?Z!==X&&(s.track({type:3,doc:B}),W=!0):this.su(N,B)||(s.track({type:2,doc:B}),W=!0,(y&&this.eu(B,y)>0||_&&this.eu(B,_)<0)&&(m=!0)):!N&&B?(s.track({type:0,doc:B}),W=!0):N&&!B&&(s.track({type:1,doc:N}),W=!0,(y||_)&&(m=!0)),W&&(B?(h=h.add(B),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,A)=>(function(B,Z){const X=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Rt:W})}};return X(B)-X(Z)})(w.type,A.type)||this.eu(w.doc,A.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new Eo(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ny,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new cv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new uv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yf="SyncEngine";class Z1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eS{constructor(e){this.key=e,this.hu=!1}}class tS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new cs((m=>k_(m)),cc),this.Iu=new Map,this.Eu=new Set,this.du=new et(ue.comparator),this.Au=new Map,this.Ru=new of,this.Vu={},this.mu=new Map,this.fu=vo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nS(i,e,t=!0){const s=gv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await hv(s,e,t,!0),o}async function rS(i,e){const t=gv(i);await hv(t,e,!0,!1)}async function hv(i,e,t,s){const o=await E1(i.localStore,Zn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await iS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&rv(i.remoteStore,o),m}async function iS(i,e,t,s,o){i.pu=(A,N,B)=>(async function(X,W,ge,de){let _e=W.view.ru(ge);_e.Cs&&(_e=await Yg(X.localStore,W.query,!1).then((({documents:k})=>W.view.ru(k,_e))));const Ae=de&&de.targetChanges.get(W.targetId),ze=de&&de.targetMismatches.get(W.targetId)!=null,Ie=W.view.applyChanges(_e,X.isPrimaryClient,Ae,ze);return oy(X,W.targetId,Ie.au),Ie.snapshot})(i,A,N,B);const u=await Yg(i.localStore,e,!0),h=new J1(e,u.Qs),m=h.ru(u.documents),y=Ja.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);oy(i,t,_.au);const w=new Z1(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function sS(i,e,t){const s=we(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!cc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Vd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&cf(s.remoteStore,o.targetId),Ld(s,o.targetId)})).catch(Ao)):(Ld(s,o.targetId),await Vd(s.localStore,o.targetId,!0))}async function oS(i,e){const t=we(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),cf(t.remoteStore,s.targetId))}async function aS(i,e,t){const s=pS(i);try{const o=await(function(h,m){const y=we(h),_=Ye.now(),w=m.reduce(((B,Z)=>B.add(Z.key)),xe());let A,N;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Z=Pr(),X=xe();return y.Ns.getEntries(B,w).next((W=>{Z=W,Z.forEach(((ge,de)=>{de.isValidDocument()||(X=X.add(ge))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,Z))).next((W=>{A=W;const ge=[];for(const de of m){const _e=vI(de,A.get(de.key).overlayedDocument);_e!=null&&ge.push(new Ci(de.key,_e,E_(_e.value.mapValue),Nn.exists(!0)))}return y.mutationQueue.addMutationBatch(B,_,ge,m)})).next((W=>{N=W;const ge=W.applyToLocalDocumentSet(A,X);return y.documentOverlayCache.saveOverlays(B,W.batchId,ge)}))})).then((()=>({batchId:N.batchId,changes:D_(A)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new et(ke)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await el(s,o.changes),await yc(s.remoteStore)}catch(o){const u=mf(o,"Failed to persist write");t.reject(u)}}async function dv(i,e){const t=we(i);try{const s=await y1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await el(t,s,e)}catch(s){await Ao(s)}}function sy(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=we(h);y.onlineState=m;let _=!1;y.queries.forEach(((w,A)=>{for(const N of A.Sa)N.va(m)&&(_=!0)})),_&&gf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lS(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new et(ue.comparator);h=h.insert(u,jt.newNoDocument(u,ye.min()));const m=xe().add(u),y=new pc(ye.min(),new Map,new et(ke),h,m);await dv(s,y),s.du=s.du.remove(u),s.Au.delete(e),_f(s)}else await Vd(s.localStore,e,!1).then((()=>Ld(s,e,t))).catch(Ao)}async function uS(i,e){const t=we(i),s=e.batch.batchId;try{const o=await g1(t.localStore,e);pv(t,s,null),fv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await el(t,o)}catch(o){await Ao(o)}}async function cS(i,e,t){const s=we(i);try{const o=await(function(h,m){const y=we(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return y.mutationQueue.lookupMutationBatch(_,m).next((A=>(Fe(A!==null,37113),w=A.keys(),y.mutationQueue.removeMutationBatch(_,A)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>y.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);pv(s,e,t),fv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await el(s,o)}catch(o){await Ao(o)}}function fv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function pv(i,e,t){const s=we(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Ld(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||mv(i,s)}))}function mv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(cf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),_f(i))}function oy(i,e,t){for(const s of t)s instanceof uv?(i.Ru.addReference(s.key,e),hS(i,s)):s instanceof cv?(ie(yf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||mv(i,s.key)):pe(19791,{wu:s})}function hS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ie(yf,"New document in limbo: "+t),i.Eu.add(s),_f(i))}function _f(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new ue(We.fromString(e)),s=i.fu.next();i.Au.set(s,new eS(t)),i.du=i.du.insert(t,s),rv(i.remoteStore,new di(Zn(C_(t.path)),s,"TargetPurposeLimboResolution",ac.ce))}}async function el(i,e,t){const s=we(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const A=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,A?"current":"not-current")}if(_){o.push(_);const A=lf.As(y.targetId,_);u.push(A)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const w=we(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>q.forEach(_,(N=>q.forEach(N.Es,(B=>w.persistence.referenceDelegate.addReference(A,N.targetId,B))).next((()=>q.forEach(N.ds,(B=>w.persistence.referenceDelegate.removeReference(A,N.targetId,B)))))))))}catch(A){if(!Ro(A))throw A;ie(uf,"Failed to update sequence numbers: "+A)}for(const A of _){const N=A.targetId;if(!A.fromCache){const B=w.Ms.get(N),Z=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(Z);w.Ms=w.Ms.insert(N,X)}}})(s.localStore,u))}async function dS(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){ie(yf,"User change. New user:",e.toKey());const s=await Z_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new ne($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await el(t,s.Ls)}}function fS(i,e){const t=we(i),s=t.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let o=xe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function gv(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=dv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lS.bind(null,e),e.Pu.H_=Q1.bind(null,e.eventManager),e.Pu.yu=Y1.bind(null,e.eventManager),e}function pS(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cS.bind(null,e),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return m1(this.persistence,new d1,e.initialUser,this.serializer)}Cu(e){return new J_(af.mi,this.serializer)}Du(e){return new T1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class mS extends Xu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof Qu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new XI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new J_((s=>Qu.mi(s,t)),this.serializer)}}class Md{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dS.bind(null,this.syncEngine),await q1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new W1})()}createDatastore(e){const t=mc(e.databaseInfo.databaseId),s=(function(u){return new C1(u)})(e.databaseInfo);return(function(u,h,m,y){return new N1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new V1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>sy(this.syncEngine,t,0)),(function(){return Zg.v()?new Zg:new I1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,w){const A=new tS(o,u,h,m,y,_);return w&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);ie(ls,"RemoteStore shutting down."),u.Ea.add(5),await Za(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Md.provider={build:()=>new Md};/**
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
 */class gS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ai="FirestoreClient";class yS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=Kd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=mf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function hd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Z_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function ay(i,e){i.asyncQueue.verifyOperationInProgress();const t=await _S(i);ie(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>ty(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>ty(e.remoteStore,o))),i._onlineComponents=e}async function _S(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(Ai,"Using user provided OfflineComponentProvider");try{await hd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;mo("Error using user provided cache. Falling back to memory cache: "+t),await hd(i,new Xu)}}else ie(Ai,"Using default OfflineComponentProvider"),await hd(i,new mS(void 0));return i._offlineComponents}async function yv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(Ai,"Using user provided OnlineComponentProvider"),await ay(i,i._uninitializedComponentsProvider._online)):(ie(Ai,"Using default OnlineComponentProvider"),await ay(i,new Md))),i._onlineComponents}function vS(i){return yv(i).then((e=>e.syncEngine))}async function ES(i){const e=await yv(i),t=e.eventManager;return t.onListen=nS.bind(null,e.syncEngine),t.onUnlisten=sS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oS.bind(null,e.syncEngine),t}function wS(i,e,t={}){const s=new yi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const w=new gS({next:N=>{w.Nu(),h.enqueueAndForget((()=>K1(u,A))),N.fromCache&&y.source==="server"?_.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(N)},error:N=>_.reject(N)}),A=new X1(m,w,{includeMetadataChanges:!0,qa:!0});return G1(u,A)})(await ES(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function _v(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const ly=new Map;/**
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
 */const vv="firestore.googleapis.com",uy=!0;class cy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vv,this.ssl=uy}else this.host=e.host,this.ssl=e.ssl??uy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QI)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_v(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new IT;switch(s.type){case"firstParty":return new CT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ly.get(t);s&&(ie("ComponentProvider","Removing Datastore"),ly.delete(t),s.terminate())})(this),Promise.resolve()}}function TS(i,e,t,s={}){var _;i=as(i,_c);const o=To(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Gy(`https://${m}`),Ky("Firestore",!0)),u.host!==vv&&u.host!==m&&mo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!is(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Ut.MOCK_USER;else{w=KE(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const N=s.mockUserToken.sub||s.mockUserToken.user_id;if(!N)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ut(N)}i._authCredentials=new ST(new l_(w,A))}}/**
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
 */class ds{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class _t{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ya(t,_t._jsonSchema))return new _t(e,s||null,new ue(We.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:pt("string",_t._jsonSchemaVersion),referencePath:pt("string")};class _i extends ds{constructor(e,t,s){super(e,t,C_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new ue(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function dd(i,e,...t){if(i=St(i),u_("collection","path",e),i instanceof _c){const s=We.fromString(e,...t);return Ig(s),new _i(i,null,s)}{if(!(i instanceof _t||i instanceof _i))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Ig(s),new _i(i.firestore,null,s)}}function Fd(i,e,...t){if(i=St(i),arguments.length===1&&(e=Kd.newId()),u_("doc","path",e),i instanceof _c){const s=We.fromString(e,...t);return Tg(s),new _t(i,null,new ue(s))}{if(!(i instanceof _t||i instanceof _i))throw new ne($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Tg(s),new _t(i.firestore,i instanceof _i?i.converter:null,new ue(s))}}/**
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
 */const hy="AsyncQueue";class dy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tv(this,"async_queue_retry"),this._c=()=>{const s=cd();s&&ie(hy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new yi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;ie(hy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Cr("INTERNAL UNHANDLED ERROR: ",fy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=pf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&pe(47125,{Pc:fy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function fy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class tl extends _c{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new dy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dy(e),this._firestoreClient=void 0,await e}}}function IS(i,e){const t=typeof i=="object"?i:Jy(),s=typeof i=="string"?i:$u,o=Wd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=WE("firestore");u&&TS(o,...u)}return o}function Ev(i){if(i._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||SS(i),i._firestoreClient}function SS(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,_,w){return new qT(m,y,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,_v(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new yS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Dt.fromBase64String(e))}catch(t){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ya(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:pt("string",_n._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vf{constructor(e){this._methodName=e}}/**
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
 */class tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(Ya(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:pt("string",tr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class nr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ya(e,nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new nr(e.vectorValues);throw new ne($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nr._jsonSchemaVersion="firestore/vectorValue/1.0",nr._jsonSchema={type:pt("string",nr._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const AS=/^__.*__$/;class RS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}class wv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Tv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ac:i})}}class Ef{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ef({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ju(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Tv(this.Ac)&&AS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class CS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||mc(e)}Cc(e,t,s,o=!1){return new Ef({Ac:e,methodName:t,Dc:s,path:Nt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wf(i){const e=i._freezeSettings(),t=mc(i._databaseId);return new CS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function PS(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Tf("Data must be an object, but it was:",h,s);const m=Iv(s,h);let y,_;if(u.merge)y=new un(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const N=Ud(e,A,t);if(!h.contains(N))throw new ne($.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);Av(w,N)||w.push(N)}y=new un(w),_=h.fieldTransforms.filter((A=>y.covers(A.field)))}else y=null,_=h.fieldTransforms;return new RS(new Jt(m),y,_)}class Ec extends vf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ec}}function kS(i,e,t,s){const o=i.Cc(1,e,t);Tf("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();Ri(s,((y,_)=>{const w=If(e,y,t);_=St(_);const A=o.yc(w);if(_ instanceof Ec)u.push(w);else{const N=nl(_,A);N!=null&&(u.push(w),h.set(w,N))}}));const m=new un(u);return new wv(h,m,o.fieldTransforms)}function xS(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[Ud(e,s,t)],y=[o];if(u.length%2!=0)throw new ne($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<u.length;N+=2)m.push(Ud(e,u[N])),y.push(u[N+1]);const _=[],w=Jt.empty();for(let N=m.length-1;N>=0;--N)if(!Av(_,m[N])){const B=m[N];let Z=y[N];Z=St(Z);const X=h.yc(B);if(Z instanceof Ec)_.push(B);else{const W=nl(Z,X);W!=null&&(_.push(B),w.set(B,W))}}const A=new un(_);return new wv(w,A,h.fieldTransforms)}function NS(i,e,t,s=!1){return nl(t,i.Cc(s?4:3,e))}function nl(i,e){if(Sv(i=St(i)))return Tf("Unsupported field value:",e,i),Iv(i,e);if(i instanceof vf)return(function(s,o){if(!Tv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=nl(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=St(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return fI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:Ku(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(o.serializer,u)}}if(s instanceof tr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:q_(o.serializer,s._byteString)};if(s instanceof _t){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:sf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof nr)return(function(h,m){return{mapValue:{fields:{[__]:{stringValue:v_},[qu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return ef(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${oc(s)}`)})(i,e)}function Iv(i,e){const t={};return d_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(i,((s,o)=>{const u=nl(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Sv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof tr||i instanceof _n||i instanceof _t||i instanceof vf||i instanceof nr)}function Tf(i,e,t){if(!Sv(t)||!c_(t)){const s=oc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Ud(i,e,t){if((e=St(e))instanceof vc)return e._internalPath;if(typeof e=="string")return If(i,e);throw Ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const DS=new RegExp("[~\\*/\\[\\]]");function If(i,e,t){if(e.search(DS)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new vc(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ne($.INVALID_ARGUMENT,m+i+y)}function Av(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class Rv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VS extends Rv{data(){return super.data()}}function Sf(i,e){return typeof e=="string"?If(i,e):e instanceof vc?e._internalPath:e._delegate._internalPath}/**
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
 */function OS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Af{}class Cv extends Af{}function py(i,e,...t){let s=[];e instanceof Af&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof Cf)).length,m=u.filter((y=>y instanceof Rf)).length;if(h>1||h>0&&m>0)throw new ne($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Rf extends Cv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Rf(e,t,s)}_apply(e){const t=this._parse(e);return Pv(e._query,t),new ds(e.firestore,e.converter,Cd(e._query,t))}_parse(e){const t=wf(e.firestore);return(function(u,h,m,y,_,w,A){let N;if(_.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ne($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){yy(A,w);const Z=[];for(const X of A)Z.push(gy(y,u,X));N={arrayValue:{values:Z}}}else N=gy(y,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||yy(A,w),N=NS(m,h,A,w==="in"||w==="not-in");return ft.create(_,w,N)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Cf extends Af{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)Pv(h,y),h=Cd(h,y)})(e._query,t),new ds(e.firestore,e.converter,Cd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pf extends Cv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $a(u,h)})(e._query,this._field,this._direction);return new ds(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Co(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function my(i,e="asc"){const t=e,s=Sf("orderBy",i);return Pf._create(s,t)}function gy(i,e,t){if(typeof(t=St(t))=="string"){if(t==="")throw new ne($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P_(e)&&t.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!ue.isDocumentKey(s))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ng(i,new ue(s))}if(t instanceof _t)return Ng(i,t._key);throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oc(t)}.`)}function yy(i,e){if(!Array.isArray(i)||i.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bS{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ri(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[qu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ot(h.doubleValue)));return new nr(t)}convertGeoPoint(e){return new tr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=uc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Fe(Y_(s),9688,{name:e});const o=new za(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function LS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Pu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lo extends Rv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Sf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=lo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}lo._jsonSchemaVersion="firestore/documentSnapshot/1.0",lo._jsonSchema={type:pt("string",lo._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class bu extends lo{data(e={}){return super.data(e)}}class uo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Pu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new bu(this._firestore,this._userDataWriter,s.key,s,new Pu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Pu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:MS(m.type),doc:y,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:i})}}uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:pt("string",uo._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class FS extends bS{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function _y(i){i=as(i,ds);const e=as(i.firestore,tl),t=Ev(e),s=new FS(e);return OS(i._query),wS(t,i._query).then((o=>new uo(e,s,i,o)))}function US(i,e,t,...s){i=as(i,_t);const o=as(i.firestore,tl),u=wf(o);let h;return h=typeof(e=St(e))=="string"||e instanceof vc?xS(u,"updateDoc",i._key,e,t,s):kS(u,"updateDoc",i._key,e),kf(o,[h.toMutation(i._key,Nn.exists(!0))])}function jS(i){return kf(as(i.firestore,tl),[new tf(i._key,Nn.none())])}function zS(i,e){const t=as(i.firestore,tl),s=Fd(i),o=LS(i.converter,e);return kf(t,[PS(wf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Nn.exists(!1))]).then((()=>s))}function kf(i,e){return(function(s,o){const u=new yi;return s.asyncQueue.enqueueAndForget((async()=>aS(await vS(s),o,u))),u.promise})(Ev(i),e)}(function(e,t=!0){(function(o){So=o})(Io),po(new ss("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new tl(new AT(s.getProvider("auth-internal")),new PT(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new za(_.options.projectId,w)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),mi(_g,vg,e),mi(_g,vg,"esm2020")})();function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BS=kv,xv=new Ka("auth","Firebase",kv());/**
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
 */const Zu=new qd("@firebase/auth");function $S(i,...e){Zu.logLevel<=Pe.WARN&&Zu.warn(`Auth (${Io}): ${i}`,...e)}function Lu(i,...e){Zu.logLevel<=Pe.ERROR&&Zu.error(`Auth (${Io}): ${i}`,...e)}/**
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
 */function Vn(i,...e){throw xf(i,...e)}function rr(i,...e){return xf(i,...e)}function Nv(i,e,t){const s={...BS(),[e]:t};return new Ka("auth","Firebase",s).create(e,{appName:i.name})}function vi(i){return Nv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return xv.create(i,...e)}function fe(i,e,...t){if(!i)throw xf(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Lu(e),new Error(e)}function kr(i,e){i||Sr(e)}/**
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
 */function jd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function qS(){return vy()==="http:"||vy()==="https:"}function vy(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */class rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=XE()||tw()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nf(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Dv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QS=new rl(3e4,6e4);function fs(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Pi(i,e,t,s,o={}){return Vv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Qa({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return ZE()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&To(i.emulatorConfig.host)&&(_.credentials="include"),Dv.fetch()(await Ov(i,i.config.apiHost,t,m),_)})}async function Vv(i,e,t){i._canInitEmulator=!1;const s={...GS,...e};try{const o=new XS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw ku(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw ku(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw ku(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw ku(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Nv(i,w,_);Vn(i,w)}}catch(o){if(o instanceof xr)throw o;Vn(i,"network-request-failed",{message:String(o)})}}async function wc(i,e,t,s,o={}){const u=await Pi(i,e,t,s,o);return"mfaPendingCredential"in u&&Vn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ov(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Nf(i.config,o):`${i.config.apiScheme}://${o}`;return KS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function YS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(rr(this.auth,"network-request-failed")),QS.get())})}}function ku(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=rr(i,e,s);return o.customData._tokenResponse=t,o}function Ey(i){return i!==void 0&&i.enterprise!==void 0}class JS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return YS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZS(i,e){return Pi(i,"GET","/v2/recaptchaConfig",fs(i,e))}/**
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
 */async function eA(i,e){return Pi(i,"POST","/v1/accounts:delete",e)}async function ec(i,e){return Pi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ma(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(i,e=!1){const t=St(i),s=await t.getIdToken(e),o=Df(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ma(fd(o.auth_time)),issuedAtTime:Ma(fd(o.iat)),expirationTime:Ma(fd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function fd(i){return Number(i)*1e3}function Df(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=$y(t);return o?JSON.parse(o):(Lu("Failed to decode base64 JWT payload"),null)}catch(o){return Lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function wy(i){const e=Df(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof xr&&nA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function nA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tc(i){var A;const e=i.auth,t=await i.getIdToken(),s=await Wa(i,ec(e,{idToken:t}));fe(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(A=o.providerUserInfo)!=null&&A.length?bv(o.providerUserInfo):[],h=sA(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new zd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,w)}async function iA(i){const e=St(i);await tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function bv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function oA(i,e){const t=await Vv(i,{},async()=>{const s=Qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Ov(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&To(i.emulatorConfig.host)&&(y.credentials="include"),Dv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aA(i,e){return Pi(i,"POST","/v2/accounts:revokeToken",fs(i,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=wy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await oA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new co;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function ai(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class xn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new zd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Wa(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await tc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Wa(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:A,emailVerified:N,isAnonymous:B,providerData:Z,stsTokenManager:X}=t;fe(A&&X,e,"internal-error");const W=co.fromJSON(this.name,X);fe(typeof A=="string",e,"internal-error"),ai(s,e.name),ai(o,e.name),fe(typeof N=="boolean",e,"internal-error"),fe(typeof B=="boolean",e,"internal-error"),ai(u,e.name),ai(h,e.name),ai(m,e.name),ai(y,e.name),ai(_,e.name),ai(w,e.name);const ge=new xn({uid:A,auth:e,email:o,emailVerified:N,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:W,createdAt:_,lastLoginAt:w});return Z&&Array.isArray(Z)&&(ge.providerData=Z.map(de=>({...de}))),y&&(ge._redirectEventId=y),ge}static async _fromIdTokenResponse(e,t,s=!1){const o=new co;o.updateFromServerResponse(t);const u=new xn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await tc(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?bv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new co;m.updateFromIdToken(s);const y=new xn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new zd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
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
 */const Ty=new Map;function Ar(i){kr(i instanceof Function,"Expected a class definition");let e=Ty.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ty.set(i,e),e)}/**
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
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lv.type="NONE";const Iy=Lv;/**
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
 */function Mu(i,e,t){return`firebase:${i}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Mu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Mu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ec(this.auth,{idToken:e}).catch(()=>{});return t?xn._fromGetAccountInfoResponse(this.auth,t,e):null}return xn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Ar(Iy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Ar(Iy);const h=Mu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let A;if(typeof w=="string"){const N=await ec(e,{idToken:w}).catch(()=>{});if(!N)break;A=await xn._fromGetAccountInfoResponse(e,N,w)}else A=xn._fromJSON(e,w);_!==u&&(m=A),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new ho(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new ho(u,e,s))}}/**
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
 */function Sy(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bv(e))return"Blackberry";if($v(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||Uv(e))&&!e.includes("edge/"))return"Chrome";if(zv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mv(i=zt()){return/firefox\//i.test(i)}function Fv(i=zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uv(i=zt()){return/crios\//i.test(i)}function jv(i=zt()){return/iemobile/i.test(i)}function zv(i=zt()){return/android/i.test(i)}function Bv(i=zt()){return/blackberry/i.test(i)}function $v(i=zt()){return/webos/i.test(i)}function Vf(i=zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function lA(i=zt()){var e;return Vf(i)&&!!((e=window.navigator)!=null&&e.standalone)}function uA(){return nw()&&document.documentMode===10}function qv(i=zt()){return Vf(i)||zv(i)||$v(i)||Bv(i)||/windows phone/i.test(i)||jv(i)}/**
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
 */function Hv(i,e=[]){let t;switch(i){case"Browser":t=Sy(zt());break;case"Worker":t=`${Sy(zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Io}/${s}`}/**
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
 */async function hA(i,e={}){return Pi(i,"GET","/v2/passwordPolicy",fs(i,e))}/**
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
 */class pA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new cA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ec(this,{idToken:e}),s=await xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(vi(this));const t=e?St(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),t=new fA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ka("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await aA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$S(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ko(i){return St(i)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=cw(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(i){Tc=i}function Wv(i){return Tc.loadJS(i)}function gA(){return Tc.recaptchaEnterpriseScript}function yA(){return Tc.gapiScript}function _A(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class vA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wA="recaptcha-enterprise",Gv="NO_RECAPTCHA";class TA{constructor(e){this.type=wA,this.auth=ko(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{ZS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new JS(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;Ey(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Gv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ey(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=gA();y.length!==0&&(y+=m),Wv(y).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Ry(i,e,t,s=!1,o=!1){const u=new TA(i);let h;if(o)h=Gv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Cy(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Ry(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Ry(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function IA(i,e){const t=Wd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(is(u,e??{}))return o;Vn(o,"already-initialized")}return t.initialize({options:e})}function SA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AA(i,e,t){const s=ko(i);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Kv(e),{host:h,port:m}=RA(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(is(_,s.config.emulator)&&is(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,To(h)?(Gy(`${u}//${h}${y}`),Ky("Auth",!0)):CA()}function Kv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function RA(i){const e=Kv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Py(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Py(h)}}}function Py(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function CA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function PA(i,e){return Pi(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function kA(i,e){return wc(i,"POST","/v1/accounts:signInWithPassword",fs(i,e))}/**
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
 */async function xA(i,e){return wc(i,"POST","/v1/accounts:signInWithEmailLink",fs(i,e))}async function NA(i,e){return wc(i,"POST","/v1/accounts:signInWithEmailLink",fs(i,e))}/**
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
 */class Ga extends Of{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ga(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ga(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,t,"signInWithPassword",kA);case"emailLink":return xA(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cy(e,s,"signUpPassword",PA);case"emailLink":return NA(e,{idToken:t,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fo(i,e){return wc(i,"POST","/v1/accounts:signInWithIdp",fs(i,e))}/**
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
 */const DA="http://localhost";class us extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new us(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qa(t)}return e}}/**
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
 */function VA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OA(i){const e=Ca(Pa(i)).link,t=e?Ca(Pa(e)).deep_link_id:null,s=Ca(Pa(i)).deep_link_id;return(s?Ca(Pa(s)).link:null)||s||t||e||i}class bf{constructor(e){const t=Ca(Pa(e)),s=t.apiKey??null,o=t.oobCode??null,u=VA(t.mode??null);fe(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=OA(e);try{return new bf(t)}catch{return null}}}/**
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
 */class xo{constructor(){this.providerId=xo.PROVIDER_ID}static credential(e,t){return Ga._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=bf.parseLink(t);return fe(s,"argument-error"),Ga._fromEmailAndCode(e,s.code,s.tenantId)}}xo.PROVIDER_ID="password";xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends Qv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends il{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class ui extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class ci extends il{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
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
 */class hi extends il{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
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
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await xn._fromIdTokenResponse(e,s,o),h=ky(s);return new wo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ky(s);return new wo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ky(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class nc extends xr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,nc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new nc(e,t,s,o)}}function Yv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?nc._fromErrorAndOperation(i,u,e,s):u})}async function bA(i,e,t=!1){const s=await Wa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return wo._forOperation(i,"link",s)}/**
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
 */async function LA(i,e,t=!1){const{auth:s}=i;if(kn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const u=await Wa(i,Yv(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=Df(u.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),wo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Vn(s,"user-mismatch"),u}}/**
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
 */async function Xv(i,e,t=!1){if(kn(i.app))return Promise.reject(vi(i));const s="signIn",o=await Yv(i,s,e),u=await wo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function MA(i,e){return Xv(ko(i),e)}/**
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
 */async function FA(i){const e=ko(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function UA(i,e,t){return kn(i.app)?Promise.reject(vi(i)):MA(St(i),xo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&FA(i),s})}function jA(i,e,t,s){return St(i).onIdTokenChanged(e,t,s)}function zA(i,e,t){return St(i).beforeAuthStateChanged(e,t)}function BA(i,e,t,s){return St(i).onAuthStateChanged(e,t,s)}function $A(i){return St(i).signOut()}const rc="__sak";/**
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
 */class Jv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rc,"1"),this.storage.removeItem(rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qA=1e3,HA=10;class Zv extends Jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);uA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zv.type="LOCAL";const WA=Zv;/**
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
 */class e0 extends Jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e0.type="SESSION";const t0=e0;/**
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
 */class Ic{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ic(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await GA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ic.receivers=[];/**
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
 */function Lf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Lf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const N=A;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(N.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ir(){return window}function QA(i){ir().location.href=i}/**
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
 */function n0(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function JA(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",ZA=1,ic="firebaseLocalStorage",i0="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sc(i,e){return i.transaction([ic],e?"readwrite":"readonly").objectStore(ic)}function eR(){const i=indexedDB.deleteDatabase(r0);return new sl(i).toPromise()}function Bd(){const i=indexedDB.open(r0,ZA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ic,{keyPath:i0})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ic)?e(s):(s.close(),await eR(),e(await Bd()))})})}async function xy(i,e,t){const s=Sc(i,!0).put({[i0]:e,value:t});return new sl(s).toPromise()}async function tR(i,e){const t=Sc(i,!1).get(e),s=await new sl(t).toPromise();return s===void 0?null:s.value}function Ny(i,e){const t=Sc(i,!0).delete(e);return new sl(t).toPromise()}const nR=800,rR=3;class s0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ic._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await xy(e,rc,"1"),await Ny(e,rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>xy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Sc(o,!1).getAll();return new sl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s0.type="LOCAL";const iR=s0;new rl(3e4,6e4);/**
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
 */function sR(i,e){return e?Ar(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Mf extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oR(i){return Xv(i.auth,new Mf(i),i.bypassAuthState)}function aR(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),LA(t,new Mf(i),i.bypassAuthState)}async function lR(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),bA(t,new Mf(i),i.bypassAuthState)}/**
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
 */class o0{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return lR;case"reauthViaPopup":case"reauthViaRedirect":return aR;default:Vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uR=new rl(2e3,1e4);class oo extends o0{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}oo.currentPopupAction=null;/**
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
 */const cR="pendingRedirect",Fu=new Map;class hR extends o0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Fu.get(this.auth._key());if(!e){try{const s=await dR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Fu.set(this.auth._key(),e)}return this.bypassAuthState||Fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dR(i,e){const t=mR(e),s=pR(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function fR(i,e){Fu.set(i._key(),e)}function pR(i){return Ar(i._redirectPersistence)}function mR(i){return Mu(cR,i.config.apiKey,i.name)}async function gR(i,e,t=!1){if(kn(i.app))return Promise.reject(vi(i));const s=ko(i),o=sR(s,e),h=await new hR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const yR=600*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!a0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function a0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(i);default:return!1}}/**
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
 */async function ER(i,e={}){return Pi(i,"GET","/v1/projects",e)}/**
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
 */const wR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function IR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ER(i);for(const t of e)try{if(SR(t))return}catch{}Vn(i,"unauthorized-domain")}function SR(i){const e=jd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!TR.test(t))return!1;if(wR.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const AR=new rl(3e4,6e4);function Vy(){const i=ir().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function RR(i){return new Promise((e,t)=>{var o,u,h;function s(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),t(rr(i,"network-request-failed"))},timeout:AR.get()})}if((u=(o=ir().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=ir().gapi)!=null&&h.load)s();else{const m=_A("iframefcb");return ir()[m]=()=>{gapi.load?s():t(rr(i,"network-request-failed"))},Wv(`${yA()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function CR(i){return Uu=Uu||RR(i),Uu}/**
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
 */const PR=new rl(5e3,15e3),kR="__/auth/iframe",xR="emulator/auth/iframe",NR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VR(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Nf(e,xR):`https://${i.config.authDomain}/${kR}`,s={apiKey:e.apiKey,appName:i.name,v:Io},o=DR.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Qa(s).slice(1)}`}async function OR(i){const e=await CR(i),t=ir().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:VR(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=rr(i,"network-request-failed"),m=ir().setTimeout(()=>{u(h)},PR.get());function y(){ir().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const bR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LR=500,MR=600,FR="_blank",UR="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jR(i,e,t,s=LR,o=MR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...bR,width:s.toString(),height:o.toString(),top:u,left:h},_=zt().toLowerCase();t&&(m=Uv(_)?FR:t),Mv(_)&&(e=e||UR,y.scrollbars="yes");const w=Object.entries(y).reduce((N,[B,Z])=>`${N}${B}=${Z},`,"");if(lA(_)&&m!=="_self")return zR(e||"",m),new Oy(null);const A=window.open(e||"",m,w);fe(A,i,"popup-blocked");try{A.focus()}catch{}return new Oy(A)}function zR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const BR="__/auth/handler",$R="emulator/auth/handler",qR=encodeURIComponent("fac");async function by(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Io,eventId:o};if(e instanceof Qv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",uw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof il){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),_=y?`#${qR}=${encodeURIComponent(y)}`:"";return`${HR(i)}?${Qa(m).slice(1)}${_}`}function HR({config:i}){return i.emulator?Nf(i,$R):`https://${i.authDomain}/${BR}`}/**
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
 */const pd="webStorageSupport";class WR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=gR,this._overrideRedirectResult=fR}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await by(e,t,s,jd(),o);return jR(e,u,Lf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await by(e,t,s,jd(),o);return QA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await OR(e),s=new _R(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pd,{type:pd},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[pd];u!==void 0&&t(!!u),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=IR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qv()||Fv()||Vf()}}const GR=WR;var Ly="@firebase/auth",My="1.12.0";/**
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
 */class KR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YR(i){po(new ss("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hv(i)},_=new pA(s,o,u,y);return SA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),po(new ss("auth-internal",e=>{const t=ko(e.getProvider("auth").getImmediate());return(s=>new KR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Ly,My,QR(i)),mi(Ly,My,"esm2020")}/**
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
 */const XR=300,JR=Wy("authIdTokenMaxAge")||XR;let Fy=null;const ZR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>JR)return;const o=t==null?void 0:t.token;Fy!==o&&(Fy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function eC(i=Jy()){const e=Wd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=IA(i,{popupRedirectResolver:GR,persistence:[iR,WA,t0]}),s=Wy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=ZR(u.toString());zA(t,h,()=>h(t.currentUser)),jA(t,m=>h(m))}}const o=qy("auth");return o&&AA(t,`http://${o}`),t}function tC(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}mA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=rr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",tC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YR("Browser");const nC={apiKey:"AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",authDomain:"my-portfolio-db-8e7ac.firebaseapp.com",projectId:"my-portfolio-db-8e7ac",storageBucket:"my-portfolio-db-8e7ac.firebasestorage.app",messagingSenderId:"640921515154",appId:"1:640921515154:web:528be384c173cf632e224b"},l0=Xy(nC),Ra=IS(l0),md=eC(l0),rC=()=>{const[i,e]=dt.useState("home"),[t,s]=dt.useState(!1),[o,u]=dt.useState(!1),[h,m]=dt.useState([]),[y,_]=dt.useState(!0),[w,A]=dt.useState(null),[N,B]=dt.useState(!1),[Z,X]=dt.useState(""),[W,ge]=dt.useState(""),[de,_e]=dt.useState(""),[Ae,ze]=dt.useState(!1),[Ie,k]=dt.useState(null),[T,R]=dt.useState({title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""});dt.useEffect(()=>{(async()=>{try{const H=py(dd(Ra,"projects"),my("createdAt","desc")),ve=(await _y(H)).docs.map(Se=>({id:Se.id,...Se.data()}));m(ve)}catch(H){console.error("Error fetching data: ",H)}finally{_(!1)}})();const J=()=>u(window.scrollY>50);window.addEventListener("scroll",J);const O=BA(md,H=>{A(H)});return()=>{window.removeEventListener("scroll",J),O()}},[]);const V=async z=>{z.preventDefault();try{await UA(md,Z,W),_e(""),B(!0)}catch{_e("Login failed. Check your email/password.")}},x=async()=>{await $A(md),B(!1),Ue()},b=async()=>{if(!T.title)return alert("Title is required!");try{await zS(dd(Ra,"projects"),{...T,createdAt:new Date});const z=py(dd(Ra,"projects"),my("createdAt","desc")),J=await _y(z);m(J.docs.map(O=>({id:O.id,...O.data()}))),mt(),alert("Project added!")}catch(z){console.error("Error adding document: ",z)}},S=z=>{ze(!0),k(z.id),R({title:z.title,description:z.description,link:z.link||"",linkText:z.linkText||"View Project",type:z.type||"blog",videoId:z.videoId||""});const J=document.getElementById("admin-form");J&&J.scrollIntoView({behavior:"smooth"})},Be=async()=>{if(!T.title)return alert("Title is required!");try{const z=Fd(Ra,"projects",Ie);await US(z,{...T,updatedAt:new Date}),m(h.map(J=>J.id===Ie?{...J,...T}:J)),alert("Project updated!"),Ue()}catch(z){console.error("Error updating document: ",z),alert("Error updating project")}},at=async z=>{if(window.confirm("Are you sure you want to delete this project?"))try{await jS(Fd(Ra,"projects",z)),m(h.filter(J=>J.id!==z)),Ie===z&&Ue()}catch(J){console.error("Error deleting document: ",J)}},mt=()=>{R({title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""})},Ue=()=>{ze(!1),k(null),mt()},te=z=>{const J=document.getElementById(z);J&&(J.scrollIntoView({behavior:"smooth"}),e(z),s(!1))};return C.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white relative",children:[C.jsx("div",{className:"fixed bottom-6 right-6 z-[100]",children:w?C.jsxs("div",{className:"flex gap-2 items-center",children:[C.jsx("span",{className:"bg-indigo-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg",children:"Admin Mode"}),C.jsx("button",{onClick:x,className:"p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all flex items-center justify-center",title:"Logout",children:C.jsx(VE,{size:20})})]}):C.jsx("button",{onClick:()=>B(!N),className:"p-3 bg-slate-800 rounded-full shadow-lg border border-slate-700 hover:bg-slate-700 transition-all opacity-50 hover:opacity-100 flex items-center justify-center",title:"Admin Login",children:C.jsx(DE,{size:20,className:"text-slate-400"})})}),N&&!w&&C.jsx("div",{className:"fixed inset-0 bg-black/90 z-[101] flex items-center justify-center p-4",children:C.jsxs("div",{className:"bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-2xl",children:[C.jsxs("div",{className:"flex justify-between items-center mb-6",children:[C.jsx("h2",{className:"text-2xl font-bold text-white",children:"Admin Login"}),C.jsx("button",{onClick:()=>B(!1),children:C.jsx(sg,{className:"text-slate-400 hover:text-white"})})]}),C.jsxs("form",{onSubmit:V,className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Email"}),C.jsx("input",{type:"email",value:Z,onChange:z=>X(z.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"admin@example.com"})]}),C.jsxs("div",{children:[C.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Password"}),C.jsx("input",{type:"password",value:W,onChange:z=>ge(z.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"Password"})]}),de&&C.jsx("p",{className:"text-red-400 text-sm",children:de}),C.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors",children:"Login"})]})]})}),C.jsxs("nav",{className:`fixed w-full z-40 transition-all duration-300 ${o?"bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800":"bg-transparent"}`,children:[C.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex justify-between items-center",children:[C.jsxs("div",{onClick:()=>te("home"),className:"text-2xl font-bold text-slate-100 cursor-pointer hover:text-indigo-400 transition-colors",children:["HK",C.jsx("span",{className:"text-indigo-500",children:"."})]}),C.jsx("div",{className:"hidden md:flex space-x-8",children:["About","Experience","Projects","Skills","Contact"].map(z=>C.jsx("button",{onClick:()=>te(z.toLowerCase()),className:"text-sm font-medium hover:text-indigo-400 transition-colors",children:z},z))}),C.jsx("div",{className:"md:hidden",children:C.jsx("button",{onClick:()=>s(!t),className:"text-slate-100 focus:outline-none",children:t?C.jsx(sg,{size:24}):C.jsx(OE,{size:24})})})]}),t&&C.jsx("div",{className:"md:hidden bg-slate-800 border-b border-slate-700",children:C.jsx("div",{className:"px-6 py-4 flex flex-col space-y-4",children:["About","Experience","Projects","Skills","Contact"].map(z=>C.jsx("button",{onClick:()=>te(z.toLowerCase()),className:"text-left text-sm font-medium hover:text-indigo-400 transition-colors",children:z},z))})})]}),C.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden",children:[C.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"}),C.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[C.jsx("h2",{className:"text-indigo-400 font-medium tracking-wider mb-4 animate-fade-in-up",children:"CONTENT STRATEGIST & PRODUCER"}),C.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight animate-fade-in-up delay-100",children:"Hyeongmo Kim"}),C.jsxs("p",{className:"text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200",children:["Connecting creative work with data and tight execution.",C.jsx("br",{}),"Focusing on audience behavior, AI, and data-driven decision-making."]}),C.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300",children:[C.jsxs("button",{onClick:()=>te("contact"),className:"px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:scale-105 flex items-center justify-center gap-2",children:[C.jsx(ng,{size:18})," Get in Touch"]}),C.jsxs("a",{href:"https://www.linkedin.com/in/hmstory0111",target:"_blank",rel:"noreferrer",className:"px-8 py-3 bg-slate-800 text-slate-200 rounded-full font-medium hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center gap-2 border border-slate-700",children:[C.jsx(NE,{size:18})," LinkedIn"]})]})]})]}),C.jsx("section",{id:"about",className:"py-20 px-6 bg-slate-800/50",children:C.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[C.jsxs("div",{children:[C.jsxs("h2",{className:"text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3",children:[C.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Professional Summary"]}),C.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:"I work across content strategy, production, and operations. My passion lies in bridging the gap between creative storytelling and analytical rigor."}),C.jsxs("p",{className:"text-lg text-slate-400 leading-relaxed",children:["Currently, I am expanding my expertise by pursuing an ",C.jsx("strong",{className:"text-slate-200",children:"M.A. in Digital Innovation"}),", specifically studying how AI and data can inform audience behavior analysis and decision-making processes."]})]}),C.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl",children:[C.jsxs("div",{className:"flex items-center gap-3 mb-6 text-indigo-400",children:[C.jsx(Zh,{size:24}),C.jsx("h3",{className:"text-xl font-bold",children:"Education"})]}),C.jsxs("div",{className:"space-y-8",children:[C.jsxs("div",{className:"relative pl-6 border-l-2 border-indigo-900",children:[C.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"}),C.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University - Graduate School"}),C.jsx("p",{className:"text-indigo-400 text-sm mb-2",children:"M.A. Digital Innovation (Expected 2027) | Seoul, Korea"}),C.jsx("p",{className:"text-slate-400 text-sm",children:"Focus: Audience Behavior, AI Data-driven decision-making"}),C.jsx("p",{className:"text-slate-500 text-xs mt-2 italic",children:"Relevant Coursework: Advanced Data Analytics, Consumer Psychology, AI & Human Behavior"})]}),C.jsxs("div",{className:"relative pl-6 border-l-2 border-slate-700",children:[C.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"}),C.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University"}),C.jsx("p",{className:"text-slate-400 text-sm mb-1",children:"B.A. International Relations & Psychology | 2005 - 2013"})]})]})]})]})}),C.jsx("section",{id:"experience",className:"py-20 px-6",children:C.jsxs("div",{className:"max-w-4xl mx-auto",children:[C.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-12 text-center",children:"Professional Experience"}),C.jsxs("div",{className:"space-y-12",children:[C.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100",children:"Podcast & Video Producer"}),C.jsx("p",{className:"text-slate-400",children:"Krafton - Publishing Platform Division (PPD)"})]}),C.jsx("span",{className:"px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30",children:"2025 - Present"})]}),C.jsxs("ul",{className:"space-y-3 text-slate-400",children:[C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(Tu,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),C.jsx("span",{children:"Produced internal podcasts and videos for 200+ staff."})]}),C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(Tu,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),C.jsx("span",{children:"Handled full production cycle (script, host, record, edit)."})]})]})]}),C.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100",children:"Content Strategy & Operations"}),C.jsx("p",{className:"text-slate-400",children:"Krafton - Deep Learning Division"})]}),C.jsx("span",{className:"px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600",children:"2022 - 2024"})]}),C.jsx("ul",{className:"space-y-3 text-slate-400",children:C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(Tu,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),C.jsx("span",{children:"Led content strategy for AI voice platform."})]})})]}),C.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100",children:"Producer & Writer"}),C.jsx("p",{className:"text-slate-400",children:"Radio & Podcast Production"})]}),C.jsx("span",{className:"px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600",children:"2015 - 2021"})]}),C.jsx("div",{className:"mb-4 flex flex-wrap gap-2",children:C.jsxs("span",{className:"flex items-center gap-1 px-3 py-1 bg-yellow-900/30 text-yellow-500 text-xs rounded-full border border-yellow-700/50",children:[C.jsx(kE,{size:12})," 2017 Korean PD Award"]})}),C.jsx("ul",{className:"space-y-3 text-slate-400",children:C.jsxs("li",{className:"flex items-start gap-3",children:[C.jsx(Tu,{size:16,className:"mt-1 text-indigo-500"}),C.jsx("span",{children:"Directed daily interview programs."})]})})]})]})]})}),C.jsx("section",{id:"projects",className:"py-20 px-6 bg-slate-800/30",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsxs("h2",{className:"text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3",children:[C.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Selected Works"]}),w&&C.jsxs("div",{id:"admin-form",className:"mb-12 bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/50 transition-all",children:[C.jsx("h3",{className:"text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2",children:Ae?C.jsxs(C.Fragment,{children:[C.jsx(ed,{size:20})," Edit Project"]}):C.jsxs(C.Fragment,{children:[C.jsx(ig,{size:20})," Add New Project"]})}),C.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[C.jsx("input",{type:"text",placeholder:"Title",className:"bg-slate-900 p-3 rounded border border-slate-700 text-white",value:T.title,onChange:z=>R({...T,title:z.target.value})}),C.jsxs("select",{className:"bg-slate-900 p-3 rounded border border-slate-700 text-white",value:T.type,onChange:z=>R({...T,type:z.target.value}),children:[C.jsx("option",{value:"blog",children:"Blog (Link)"}),C.jsx("option",{value:"video",children:"YouTube Video"}),C.jsx("option",{value:"podcast",children:"Podcast"})]}),C.jsx("input",{type:"text",placeholder:"Description",className:"bg-slate-900 p-3 rounded border border-slate-700 md:col-span-2 text-white",value:T.description,onChange:z=>R({...T,description:z.target.value})}),T.type==="video"?C.jsx("input",{type:"text",placeholder:"YouTube Video ID (e.g. kcb8OI46uTA)",className:"bg-slate-900 p-3 rounded border border-slate-700 md:col-span-2 text-white",value:T.videoId,onChange:z=>R({...T,videoId:z.target.value})}):C.jsx("input",{type:"text",placeholder:"External Link URL",className:"bg-slate-900 p-3 rounded border border-slate-700 md:col-span-2 text-white",value:T.link,onChange:z=>R({...T,link:z.target.value})})]}),C.jsx("div",{className:"flex gap-3",children:Ae?C.jsxs(C.Fragment,{children:[C.jsxs("button",{onClick:Be,className:"bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-bold flex items-center gap-2",children:[C.jsx(ed,{size:16})," Update"]}),C.jsxs("button",{onClick:Ue,className:"bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 font-bold flex items-center gap-2",children:[C.jsx(bE,{size:16})," Cancel"]})]}):C.jsxs("button",{onClick:b,className:"bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-bold flex items-center gap-2",children:[C.jsx(ig,{size:16})," Add"]})})]}),C.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[C.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[C.jsxs("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900"}),C.jsx(Zh,{size:48,className:"text-slate-600 group-hover:text-indigo-400 transition-colors z-10"})]}),C.jsxs("div",{className:"p-8",children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"Film Review Blog"}),C.jsx("p",{className:"text-slate-400 mb-6 text-sm",children:"A comprehensive film review platform written in English, analyzing cinematic techniques and storytelling structures."}),C.jsxs("a",{href:"https://medium.com/@hmstory0111",target:"_blank",rel:"noreferrer",className:"text-indigo-400 font-medium flex items-center gap-2 hover:text-indigo-300 transition-colors",children:["View Blog ",C.jsx(tg,{size:16})]})]})]}),C.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[C.jsxs("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900"}),C.jsx(rg,{size:48,className:"text-slate-600 group-hover:text-purple-400 transition-colors z-10"})]}),C.jsxs("div",{className:"p-8",children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"Film Review Podcast"}),C.jsx("p",{className:"text-slate-400 mb-6 text-sm",children:"Proof of concept audio series exploring film narratives. Produced, hosted, and edited entirely solo."}),C.jsxs("a",{href:"https://youtu.com/ZafaT7ibW9I",target:"_blank",rel:"noreferrer",className:"text-purple-400 font-medium flex items-center gap-2 hover:text-purple-300 transition-colors",children:["Listen on YouTube ",C.jsx(td,{size:16})]})]})]}),C.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[C.jsx("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:C.jsx("img",{src:"https://img.youtube.com/vi/kcb8OI46uTA/hqdefault.jpg",alt:"AI Video Thumbnail",className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"})}),C.jsxs("div",{className:"p-8",children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"AI Creative Video"}),C.jsx("p",{className:"text-slate-400 mb-6 text-sm",children:"Experimental video content created using Generative AI tools. Explored new visual storytelling."}),C.jsxs("a",{href:"https://youtu.com/kcb8OI46uTA",target:"_blank",rel:"noreferrer",className:"text-red-400 font-medium flex items-center gap-2 hover:text-red-300 transition-colors",children:["Watch on YouTube ",C.jsx(td,{size:16})]})]})]}),h.map(z=>C.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[w&&C.jsxs("div",{className:"absolute top-2 right-2 z-20 flex gap-2",children:[C.jsx("button",{onClick:()=>S(z),className:"p-2 bg-indigo-600/80 rounded-full text-white hover:bg-indigo-700",title:"Edit",children:C.jsx(ed,{size:16})}),C.jsx("button",{onClick:()=>at(z.id),className:"p-2 bg-red-600/80 rounded-full text-white hover:bg-red-700",title:"Delete",children:C.jsx(LE,{size:16})})]}),C.jsx("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:z.type==="video"&&z.videoId?C.jsx("img",{src:`https://img.youtube.com/vi/${z.videoId}/hqdefault.jpg`,alt:z.title,className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"}):C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900"}),z.type==="podcast"?C.jsx(rg,{size:48,className:"text-slate-600 group-hover:text-purple-400 z-10"}):C.jsx(Zh,{size:48,className:"text-slate-600 group-hover:text-indigo-400 z-10"})]})}),C.jsxs("div",{className:"p-8",children:[C.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:z.title}),C.jsx("p",{className:"text-slate-400 mb-6 text-sm line-clamp-3",children:z.description}),C.jsxs("a",{href:z.type==="video"?`https://youtu.be/${z.videoId}`:z.link,target:"_blank",rel:"noreferrer",className:`font-medium flex items-center gap-2 transition-colors ${z.type==="video"?"text-red-400 hover:text-red-300":z.type==="podcast"?"text-purple-400 hover:text-purple-300":"text-indigo-400 hover:text-indigo-300"}`,children:[z.linkText||"View Detail"," ",z.type==="video"?C.jsx(td,{size:16}):C.jsx(tg,{size:16})]})]})]},z.id))]})]})}),C.jsx("section",{id:"skills",className:"py-20 px-6",children:C.jsxs("div",{className:"max-w-4xl mx-auto",children:[C.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-12 text-center",children:"Skills & Expertise"}),C.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[C.jsx(xE,{className:"text-indigo-500"}),C.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Strategy & Data"})]}),C.jsx("div",{className:"flex flex-wrap gap-3",children:["Audience Insights","Content Analytics","Roadmapping","Cross-functional Ops"].map(z=>C.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:z},z))})]}),C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[C.jsx(ME,{className:"text-indigo-500"}),C.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Production & Tools"})]}),C.jsx("div",{className:"flex flex-wrap gap-3",children:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"].map(z=>C.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:z},z))})]})]})]})}),C.jsx("section",{id:"contact",className:"py-20 px-6 bg-indigo-900/20",children:C.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[C.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-6",children:"Let's Connect"}),C.jsx("div",{className:"flex flex-col md:flex-row justify-center gap-6",children:C.jsxs("a",{href:"mailto:hmstory0111@gmail.com",className:"flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700",children:[C.jsx(ng,{size:20,className:"text-indigo-400"}),"hmstory0111@gmail.com"]})}),C.jsx("div",{className:"mt-20 pt-10 border-t border-slate-800 text-slate-500 text-sm",children:C.jsx("p",{children:"© 2025 Hyeongmo Kim. All rights reserved. (Updated)"})})]})}),C.jsx("style",{children:`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; }
      `})]})};AE.createRoot(document.getElementById("root")).render(C.jsx(_E.StrictMode,{children:C.jsx(rC,{})}));
