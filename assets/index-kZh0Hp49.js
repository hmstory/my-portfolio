(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function ky(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var qh={exports:{}},Sa={},Hh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function uE(){if(bm)return Se;bm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function D(L){return L===null||typeof L!="object"?null:(L=R&&L[R]||L["@@iterator"],typeof L=="function"?L:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Y={};function W(L,q,Te){this.props=L,this.context=q,this.refs=Y,this.updater=Te||z}W.prototype.isReactComponent={},W.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},W.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function ye(){}ye.prototype=W.prototype;function de(L,q,Te){this.props=L,this.context=q,this.refs=Y,this.updater=Te||z}var ve=de.prototype=new ye;ve.constructor=de,J(ve,W.prototype),ve.isPureReactComponent=!0;var fe=Array.isArray,Le=Object.prototype.hasOwnProperty,Ae={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(L,q,Te){var Ie,Re={},Ce=null,Ue=null;if(q!=null)for(Ie in q.ref!==void 0&&(Ue=q.ref),q.key!==void 0&&(Ce=""+q.key),q)Le.call(q,Ie)&&!k.hasOwnProperty(Ie)&&(Re[Ie]=q[Ie]);var Ve=arguments.length-2;if(Ve===1)Re.children=Te;else if(1<Ve){for(var $e=Array(Ve),jt=0;jt<Ve;jt++)$e[jt]=arguments[jt+2];Re.children=$e}if(L&&L.defaultProps)for(Ie in Ve=L.defaultProps,Ve)Re[Ie]===void 0&&(Re[Ie]=Ve[Ie]);return{$$typeof:i,type:L,key:Ce,ref:Ue,props:Re,_owner:Ae.current}}function C(L,q){return{$$typeof:i,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function x(L){return typeof L=="object"&&L!==null&&L.$$typeof===i}function T(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Te){return q[Te]})}var V=/\/+/g;function A(L,q){return typeof L=="object"&&L!==null&&L.key!=null?T(""+L.key):q.toString(36)}function be(L,q,Te,Ie,Re){var Ce=typeof L;(Ce==="undefined"||Ce==="boolean")&&(L=null);var Ue=!1;if(L===null)Ue=!0;else switch(Ce){case"string":case"number":Ue=!0;break;case"object":switch(L.$$typeof){case i:case e:Ue=!0}}if(Ue)return Ue=L,Re=Re(Ue),L=Ie===""?"."+A(Ue,0):Ie,fe(Re)?(Te="",L!=null&&(Te=L.replace(V,"$&/")+"/"),be(Re,q,Te,"",function(jt){return jt})):Re!=null&&(x(Re)&&(Re=C(Re,Te+(!Re.key||Ue&&Ue.key===Re.key?"":(""+Re.key).replace(V,"$&/")+"/")+L)),q.push(Re)),1;if(Ue=0,Ie=Ie===""?".":Ie+":",fe(L))for(var Ve=0;Ve<L.length;Ve++){Ce=L[Ve];var $e=Ie+A(Ce,Ve);Ue+=be(Ce,q,Te,$e,Re)}else if($e=D(L),typeof $e=="function")for(L=$e.call(L),Ve=0;!(Ce=L.next()).done;)Ce=Ce.value,$e=Ie+A(Ce,Ve++),Ue+=be(Ce,q,Te,$e,Re);else if(Ce==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Ue}function ft(L,q,Te){if(L==null)return L;var Ie=[],Re=0;return be(L,Ie,"","",function(Ce){return q.call(Te,Ce,Re++)}),Ie}function yt(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(Te){(L._status===0||L._status===-1)&&(L._status=1,L._result=Te)},function(Te){(L._status===0||L._status===-1)&&(L._status=2,L._result=Te)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var Be={current:null},Z={transition:null},ue={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ae};function re(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ft,forEach:function(L,q,Te){ft(L,function(){q.apply(this,arguments)},Te)},count:function(L){var q=0;return ft(L,function(){q++}),q},toArray:function(L){return ft(L,function(q){return q})||[]},only:function(L){if(!x(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Se.Component=W,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=de,Se.StrictMode=s,Se.Suspense=y,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Se.act=re,Se.cloneElement=function(L,q,Te){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ie=J({},L.props),Re=L.key,Ce=L.ref,Ue=L._owner;if(q!=null){if(q.ref!==void 0&&(Ce=q.ref,Ue=Ae.current),q.key!==void 0&&(Re=""+q.key),L.type&&L.type.defaultProps)var Ve=L.type.defaultProps;for($e in q)Le.call(q,$e)&&!k.hasOwnProperty($e)&&(Ie[$e]=q[$e]===void 0&&Ve!==void 0?Ve[$e]:q[$e])}var $e=arguments.length-2;if($e===1)Ie.children=Te;else if(1<$e){Ve=Array($e);for(var jt=0;jt<$e;jt++)Ve[jt]=arguments[jt+2];Ie.children=Ve}return{$$typeof:i,type:L.type,key:Re,ref:Ce,props:Ie,_owner:Ue}},Se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:u,_context:L},L.Consumer=L},Se.createElement=S,Se.createFactory=function(L){var q=S.bind(null,L);return q.type=L,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(L){return{$$typeof:m,render:L}},Se.isValidElement=x,Se.lazy=function(L){return{$$typeof:w,_payload:{_status:-1,_result:L},_init:yt}},Se.memo=function(L,q){return{$$typeof:v,type:L,compare:q===void 0?null:q}},Se.startTransition=function(L){var q=Z.transition;Z.transition={};try{L()}finally{Z.transition=q}},Se.unstable_act=re,Se.useCallback=function(L,q){return Be.current.useCallback(L,q)},Se.useContext=function(L){return Be.current.useContext(L)},Se.useDebugValue=function(){},Se.useDeferredValue=function(L){return Be.current.useDeferredValue(L)},Se.useEffect=function(L,q){return Be.current.useEffect(L,q)},Se.useId=function(){return Be.current.useId()},Se.useImperativeHandle=function(L,q,Te){return Be.current.useImperativeHandle(L,q,Te)},Se.useInsertionEffect=function(L,q){return Be.current.useInsertionEffect(L,q)},Se.useLayoutEffect=function(L,q){return Be.current.useLayoutEffect(L,q)},Se.useMemo=function(L,q){return Be.current.useMemo(L,q)},Se.useReducer=function(L,q,Te){return Be.current.useReducer(L,q,Te)},Se.useRef=function(L){return Be.current.useRef(L)},Se.useState=function(L){return Be.current.useState(L)},Se.useSyncExternalStore=function(L,q,Te){return Be.current.useSyncExternalStore(L,q,Te)},Se.useTransition=function(){return Be.current.useTransition()},Se.version="18.3.1",Se}var Mm;function bd(){return Mm||(Mm=1,Hh.exports=uE()),Hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function cE(){if(Fm)return Sa;Fm=1;var i=bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,R={},D=null,z=null;v!==void 0&&(D=""+v),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(R[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)R[w]===void 0&&(R[w]=y[w]);return{$$typeof:e,type:m,key:D,ref:z,props:R,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=h,Sa.jsxs=h,Sa}var Um;function hE(){return Um||(Um=1,qh.exports=cE()),qh.exports}var O=hE(),wt=bd();const dE=ky(wt);var _u={},Wh={exports:{}},Yt={},Gh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function fE(){return jm||(jm=1,(function(i){function e(Z,ue){var re=Z.length;Z.push(ue);e:for(;0<re;){var L=re-1>>>1,q=Z[L];if(0<o(q,ue))Z[L]=ue,Z[re]=q,re=L;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ue=Z[0],re=Z.pop();if(re!==ue){Z[0]=re;e:for(var L=0,q=Z.length,Te=q>>>1;L<Te;){var Ie=2*(L+1)-1,Re=Z[Ie],Ce=Ie+1,Ue=Z[Ce];if(0>o(Re,re))Ce<q&&0>o(Ue,Re)?(Z[L]=Ue,Z[Ce]=re,L=Ce):(Z[L]=Re,Z[Ie]=re,L=Ie);else if(Ce<q&&0>o(Ue,re))Z[L]=Ue,Z[Ce]=re,L=Ce;else break e}}return ue}function o(Z,ue){var re=Z.sortIndex-ue.sortIndex;return re!==0?re:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,R=null,D=3,z=!1,J=!1,Y=!1,W=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(Z){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=Z)s(v),ue.sortIndex=ue.expirationTime,e(y,ue);else break;ue=t(v)}}function fe(Z){if(Y=!1,ve(Z),!J)if(t(y)!==null)J=!0,yt(Le);else{var ue=t(v);ue!==null&&Be(fe,ue.startTime-Z)}}function Le(Z,ue){J=!1,Y&&(Y=!1,ye(S),S=-1),z=!0;var re=D;try{for(ve(ue),R=t(y);R!==null&&(!(R.expirationTime>ue)||Z&&!T());){var L=R.callback;if(typeof L=="function"){R.callback=null,D=R.priorityLevel;var q=L(R.expirationTime<=ue);ue=i.unstable_now(),typeof q=="function"?R.callback=q:R===t(y)&&s(y),ve(ue)}else s(y);R=t(y)}if(R!==null)var Te=!0;else{var Ie=t(v);Ie!==null&&Be(fe,Ie.startTime-ue),Te=!1}return Te}finally{R=null,D=re,z=!1}}var Ae=!1,k=null,S=-1,C=5,x=-1;function T(){return!(i.unstable_now()-x<C)}function V(){if(k!==null){var Z=i.unstable_now();x=Z;var ue=!0;try{ue=k(!0,Z)}finally{ue?A():(Ae=!1,k=null)}}else Ae=!1}var A;if(typeof de=="function")A=function(){de(V)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,ft=be.port2;be.port1.onmessage=V,A=function(){ft.postMessage(null)}}else A=function(){W(V,0)};function yt(Z){k=Z,Ae||(Ae=!0,A())}function Be(Z,ue){S=W(function(){Z(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){J||z||(J=!0,yt(Le))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(D){case 1:case 2:case 3:var ue=3;break;default:ue=D}var re=D;D=ue;try{return Z()}finally{D=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=D;D=Z;try{return ue()}finally{D=re}},i.unstable_scheduleCallback=function(Z,ue,re){var L=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?L+re:L):re=L,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=re+q,Z={id:w++,callback:ue,priorityLevel:Z,startTime:re,expirationTime:q,sortIndex:-1},re>L?(Z.sortIndex=re,e(v,Z),t(y)===null&&Z===t(v)&&(Y?(ye(S),S=-1):Y=!0,Be(fe,re-L))):(Z.sortIndex=q,e(y,Z),J||z||(J=!0,yt(Le))),Z},i.unstable_shouldYield=T,i.unstable_wrapCallback=function(Z){var ue=D;return function(){var re=D;D=ue;try{return Z.apply(this,arguments)}finally{D=re}}}})(Kh)),Kh}var zm;function pE(){return zm||(zm=1,Gh.exports=fE()),Gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function mE(){if(Bm)return Yt;Bm=1;var i=bd(),e=pE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function D(n){return y.call(R,n)?!0:y.call(w,n)?!1:v.test(n)?R[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ye,de);W[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ye,de);W[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ye,de);W[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ve(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(J(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var fe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),T=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,L;function q(n){if(L===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);L=r&&r[1]||""}return`
`+L+n}var Te=!1;function Ie(n,r){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),f=c.stack.split(`
`),_=d.length-1,I=f.length-1;1<=_&&0<=I&&d[_]!==f[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==f[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==f[I]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=I);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Re(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case Ae:return"Portal";case C:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case T:return(n.displayName||"Context")+".Consumer";case x:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ft:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case yt:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function Ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function fs(n){n._valueTracker||(n._valueTracker=jt(n))}function xo(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Nr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ps(n,r){var a=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rl(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ve(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ms(n,r){r=r.checked,r!=null&&ve(n,"checked",r,!1)}function Ci(n,r){ms(n,r);var a=Ve(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?at(n,r.type,a):r.hasOwnProperty("defaultValue")&&at(n,r.type,Ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function No(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function at(n,r,a){(r!=="number"||Nr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rt=Array.isArray;function _n(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Do(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Vo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(rt(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ve(a)}}function il(n,r){var a=Ve(r.value),c=Ve(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Dr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Oo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Oo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,sl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pi(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ol=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(n){ol.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Or[r]=Or[n]})});function Lr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Or.hasOwnProperty(n)&&Or[n]?(""+r).trim():r+"px"}function ys(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Lr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Lo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vn(n,r){if(r){if(Lo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function _s(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var br=null;function vs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var or=null,ar=null,tt=null;function bo(n){if(n=ua(n)){if(typeof or!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Vl(r),or(n.stateNode,n.type,r))}}function Mr(n){ar?tt?tt.push(n):tt=[n]:ar=n}function Fr(){if(ar){var n=ar,r=tt;if(tt=ar=null,bo(n),r)for(n=0;n<r.length;n++)bo(r[n])}}function al(n,r){return n(r)}function ll(){}var Vn=!1;function ul(n,r,a){if(Vn)return n(r,a);Vn=!0;try{return al(n,r,a)}finally{Vn=!1,(ar!==null||tt!==null)&&(ll(),Fr())}}function ki(n,r){var a=n.stateNode;if(a===null)return null;var c=Vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Ur=!1;if(m)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{Ur=!1}function cl(n,r,a,c,d,f,_,I,P){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(G){this.onError(G)}}var lr=!1,On=null,Es=!1,ln=null,hl={onError:function(n){lr=!0,On=n}};function dl(n,r,a,c,d,f,_,I,P){lr=!1,On=null,cl.apply(hl,arguments)}function Mo(n,r,a,c,d,f,_,I,P){if(dl.apply(this,arguments),lr){if(lr){var U=On;lr=!1,On=null}else throw Error(t(198));Es||(Es=!0,ln=U)}}function En(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Fo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function fl(n){if(En(n)!==n)throw Error(t(188))}function pl(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return fl(d),n;if(f===c)return fl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=f;break}if(I===c){_=!0,c=d,a=f;break}I=I.sibling}if(!_){for(I=f.child;I;){if(I===a){_=!0,a=f,c=d;break}if(I===c){_=!0,c=f,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function ml(n){return n=pl(n),n!==null?xi(n):null}function xi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=xi(n);if(r!==null)return r;n=n.sibling}return null}var Uo=e.unstable_scheduleCallback,ws=e.unstable_cancelCallback,Ni=e.unstable_shouldYield,ur=e.unstable_requestPaint,Ge=e.unstable_now,wc=e.unstable_getCurrentPriorityLevel,Ts=e.unstable_ImmediatePriority,jo=e.unstable_UserBlockingPriority,Di=e.unstable_NormalPriority,zo=e.unstable_LowPriority,Is=e.unstable_IdlePriority,Vi=null,Jt=null;function gl(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Vi,n,void 0,(n.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Oi,Ln=Math.log,un=Math.LN2;function Oi(n){return n>>>=0,n===0?32:31-(Ln(n)/un|0)|0}var bn=64,zr=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Fe(I):(f&=_,f!==0&&(c=Fe(f)))}else _=a&~d,_!==0?c=Fe(_):f!==0&&(c=Fe(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Zt(r),d=1<<a,c|=n[a],r&=~d;return c}function Li(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-Zt(f),I=1<<_,P=d[_];P===-1?((I&a)===0||(I&c)!==0)&&(d[_]=Li(I,r)):P<=r&&(n.expiredLanes|=I),f&=~I}}function Bo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $o(){var n=bn;return bn<<=1,(bn&4194240)===0&&(bn=64),n}function qo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Zt(r),n[r]=a}function Tc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Zt(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Ho(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Zt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ne=0;function Mn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wo,Ss,Go,Ko,Qo,Fn=!1,As=[],Un=null,jn=null,St=null,Fi=new Map,hr=new Map,en=[],yl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Br(n,r){switch(n){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":Fi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(r.pointerId)}}function wn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ua(r),r!==null&&Ss(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function _l(n,r,a,c,d){switch(r){case"focusin":return Un=wn(Un,n,r,a,c,d),!0;case"dragenter":return jn=wn(jn,n,r,a,c,d),!0;case"mouseover":return St=wn(St,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return Fi.set(f,wn(Fi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,hr.set(f,wn(hr.get(f)||null,n,r,a,c,d)),!0}return!1}function Rs(n){var r=Bi(n.target);if(r!==null){var a=En(r);if(a!==null){if(r=a.tag,r===13){if(r=Fo(a),r!==null){n.blockedOn=r,Qo(n.priority,function(){Go(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Cs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);br=c,a.target.dispatchEvent(c),br=null}else return r=ua(a),r!==null&&Ss(r),n.blockedOn=a,!1;r.shift()}return!0}function vl(n,r,a){qe(n)&&a.delete(r)}function Ic(){Fn=!1,Un!==null&&qe(Un)&&(Un=null),jn!==null&&qe(jn)&&(jn=null),St!==null&&qe(St)&&(St=null),Fi.forEach(vl),hr.forEach(vl)}function $r(n,r){n.blockedOn===r&&(n.blockedOn=null,Fn||(Fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ic)))}function qr(n){function r(d){return $r(d,n)}if(0<As.length){$r(As[0],n);for(var a=1;a<As.length;a++){var c=As[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Un!==null&&$r(Un,n),jn!==null&&$r(jn,n),St!==null&&$r(St,n),Fi.forEach(r),hr.forEach(r),a=0;a<en.length;a++)c=en[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<en.length&&(a=en[0],a.blockedOn===null);)Rs(a),a.blockedOn===null&&en.shift()}var dr=fe.ReactCurrentBatchConfig,fr=!0;function zn(n,r,a,c){var d=Ne,f=dr.transition;dr.transition=null;try{Ne=1,Yo(n,r,a,c)}finally{Ne=d,dr.transition=f}}function El(n,r,a,c){var d=Ne,f=dr.transition;dr.transition=null;try{Ne=4,Yo(n,r,a,c)}finally{Ne=d,dr.transition=f}}function Yo(n,r,a,c){if(fr){var d=Cs(n,r,a,c);if(d===null)Oc(n,r,c,Bn,a),Br(n,c);else if(_l(d,n,r,a,c))c.stopPropagation();else if(Br(n,c),r&4&&-1<yl.indexOf(n)){for(;d!==null;){var f=ua(d);if(f!==null&&Wo(f),f=Cs(n,r,a,c),f===null&&Oc(n,r,c,Bn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Oc(n,r,c,null,a)}}var Bn=null;function Cs(n,r,a,c){if(Bn=null,n=vs(c),n=Bi(n),n!==null)if(r=En(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Fo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Bn=n,null}function Ps(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wc()){case Ts:return 1;case jo:return 4;case Di:case zo:return 16;case Is:return 536870912;default:return 16}default:return 16}}var tn=null,ks=null,pr=null;function wl(){if(pr)return pr;var n,r=ks,a=r.length,c,d="value"in tn?tn.value:tn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[f-c];c++);return pr=d.slice(n,1<c?1-c:void 0)}function Ui(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Xo(){return!1}function Nt(n){function r(a,c,d,f,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$n:Xo,this.isPropagationStopped=Xo,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=Nt(qn),Hr=re({},qn,{view:0,detail:0}),xs=Nt(Hr),Ns,Ds,nn,zi=re({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ee,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==nn&&(nn&&n.type==="mousemove"?(Ns=n.screenX-nn.screenX,Ds=n.screenY-nn.screenY):Ds=Ns=0,nn=n),Ns)},movementY:function(n){return"movementY"in n?n.movementY:Ds}}),Jo=Nt(zi),Tl=re({},zi,{dataTransfer:0}),Il=Nt(Tl),Vs=re({},Hr,{relatedTarget:0}),At=Nt(Vs),Sl=re({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Al=Nt(Sl),Wr=re({},qn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Nt(Wr),p=re({},qn,{data:0}),g=Nt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=j[n])?!!r[n]:!1}function Ee(){return X}var it=re({},Hr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ui(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ee,charCode:function(n){return n.type==="keypress"?Ui(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ui(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Nt(it),lt=re({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rn=Nt(lt),mr=re({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ee}),Hn=Nt(mr),Wn=re({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Os=Nt(Wn),Zo=re({},zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=Nt(Zo),i0=[9,13,27,32],Sc=m&&"CompositionEvent"in window,ea=null;m&&"documentMode"in document&&(ea=document.documentMode);var s0=m&&"TextEvent"in window&&!ea,Pf=m&&(!Sc||ea&&8<ea&&11>=ea),kf=" ",xf=!1;function Nf(n,r){switch(n){case"keyup":return i0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function o0(n,r){switch(n){case"compositionend":return Df(r);case"keypress":return r.which!==32?null:(xf=!0,kf);case"textInput":return n=r.data,n===kf&&xf?null:n;default:return null}}function a0(n,r){if(Ls)return n==="compositionend"||!Sc&&Nf(n,r)?(n=wl(),pr=ks=tn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pf&&r.locale!=="ko"?null:r.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!l0[n.type]:r==="textarea"}function Of(n,r,a,c){Mr(c),r=xl(r,"onChange"),0<r.length&&(a=new ji("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ta=null,na=null;function u0(n){Jf(n,0)}function Rl(n){var r=js(n);if(xo(r))return n}function c0(n,r){if(n==="change")return r}var Lf=!1;if(m){var Ac;if(m){var Rc="oninput"in document;if(!Rc){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Rc=typeof bf.oninput=="function"}Ac=Rc}else Ac=!1;Lf=Ac&&(!document.documentMode||9<document.documentMode)}function Mf(){ta&&(ta.detachEvent("onpropertychange",Ff),na=ta=null)}function Ff(n){if(n.propertyName==="value"&&Rl(na)){var r=[];Of(r,na,n,vs(n)),ul(u0,r)}}function h0(n,r,a){n==="focusin"?(Mf(),ta=r,na=a,ta.attachEvent("onpropertychange",Ff)):n==="focusout"&&Mf()}function d0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(na)}function f0(n,r){if(n==="click")return Rl(r)}function p0(n,r){if(n==="input"||n==="change")return Rl(r)}function m0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Tn=typeof Object.is=="function"?Object.is:m0;function ra(n,r){if(Tn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Tn(n[d],r[d]))return!1}return!0}function Uf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jf(n,r){var a=Uf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uf(a)}}function zf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?zf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Bf(){for(var n=window,r=Nr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Nr(n.document)}return r}function Cc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function g0(n){var r=Bf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&zf(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=jf(a,f);var _=jf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var y0=m&&"documentMode"in document&&11>=document.documentMode,bs=null,Pc=null,ia=null,kc=!1;function $f(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||bs==null||bs!==Nr(c)||(c=bs,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&ra(ia,c)||(ia=c,c=xl(Pc,"onSelect"),0<c.length&&(r=new ji("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=bs)))}function Cl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ms={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},xc={},qf={};m&&(qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Pl(n){if(xc[n])return xc[n];if(!Ms[n])return n;var r=Ms[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in qf)return xc[n]=r[a];return n}var Hf=Pl("animationend"),Wf=Pl("animationiteration"),Gf=Pl("animationstart"),Kf=Pl("transitionend"),Qf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,r){Qf.set(n,r),u(r,[n])}for(var Nc=0;Nc<Yf.length;Nc++){var Dc=Yf[Nc],_0=Dc.toLowerCase(),v0=Dc[0].toUpperCase()+Dc.slice(1);Gr(_0,"on"+v0)}Gr(Hf,"onAnimationEnd"),Gr(Wf,"onAnimationIteration"),Gr(Gf,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Kf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Xf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Mo(c,r,void 0,n),n.currentTarget=null}function Jf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],P=I.instance,U=I.currentTarget;if(I=I.listener,P!==f&&d.isPropagationStopped())break e;Xf(d,I,U),f=P}else for(_=0;_<c.length;_++){if(I=c[_],P=I.instance,U=I.currentTarget,I=I.listener,P!==f&&d.isPropagationStopped())break e;Xf(d,I,U),f=P}}}if(Es)throw n=ln,Es=!1,ln=null,n}function Ke(n,r){var a=r[jc];a===void 0&&(a=r[jc]=new Set);var c=n+"__bubble";a.has(c)||(Zf(r,n,2,!1),a.add(c))}function Vc(n,r,a){var c=0;r&&(c|=4),Zf(a,n,c,r)}var kl="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[kl]){n[kl]=!0,s.forEach(function(a){a!=="selectionchange"&&(E0.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[kl]||(r[kl]=!0,Vc("selectionchange",!1,r))}}function Zf(n,r,a,c){switch(Ps(r)){case 1:var d=zn;break;case 4:d=El;break;default:d=Yo}a=d.bind(null,r,a,n),d=void 0,!Ur||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Oc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Bi(I),_===null)return;if(P=_.tag,P===5||P===6){c=f=_;continue e}I=I.parentNode}}c=c.return}ul(function(){var U=f,G=vs(a),K=[];e:{var H=Qf.get(n);if(H!==void 0){var ee=ji,se=n;switch(n){case"keypress":if(Ui(a)===0)break e;case"keydown":case"keyup":ee=ze;break;case"focusin":se="focus",ee=At;break;case"focusout":se="blur",ee=At;break;case"beforeblur":case"afterblur":ee=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Hn;break;case Hf:case Wf:case Gf:ee=Al;break;case Kf:ee=Os;break;case"scroll":ee=xs;break;case"wheel":ee=r0;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=rn}var oe=(r&4)!==0,st=!oe&&n==="scroll",b=oe?H!==null?H+"Capture":null:H;oe=[];for(var N=U,F;N!==null;){F=N;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,b!==null&&(Q=ki(N,b),Q!=null&&oe.push(aa(N,Q,F)))),st)break;N=N.return}0<oe.length&&(H=new ee(H,se,null,a,G),K.push({event:H,listeners:oe}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",H&&a!==br&&(se=a.relatedTarget||a.fromElement)&&(Bi(se)||se[gr]))break e;if((ee||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=U,se=se?Bi(se):null,se!==null&&(st=En(se),se!==st||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=U),ee!==se)){if(oe=Jo,Q="onMouseLeave",b="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=rn,Q="onPointerLeave",b="onPointerEnter",N="pointer"),st=ee==null?H:js(ee),F=se==null?H:js(se),H=new oe(Q,N+"leave",ee,a,G),H.target=st,H.relatedTarget=F,Q=null,Bi(G)===U&&(oe=new oe(b,N+"enter",se,a,G),oe.target=F,oe.relatedTarget=st,Q=oe),st=Q,ee&&se)t:{for(oe=ee,b=se,N=0,F=oe;F;F=Fs(F))N++;for(F=0,Q=b;Q;Q=Fs(Q))F++;for(;0<N-F;)oe=Fs(oe),N--;for(;0<F-N;)b=Fs(b),F--;for(;N--;){if(oe===b||b!==null&&oe===b.alternate)break t;oe=Fs(oe),b=Fs(b)}oe=null}else oe=null;ee!==null&&ep(K,H,ee,oe,!1),se!==null&&st!==null&&ep(K,st,se,oe,!0)}}e:{if(H=U?js(U):window,ee=H.nodeName&&H.nodeName.toLowerCase(),ee==="select"||ee==="input"&&H.type==="file")var ae=c0;else if(Vf(H))if(Lf)ae=p0;else{ae=d0;var ce=h0}else(ee=H.nodeName)&&ee.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ae=f0);if(ae&&(ae=ae(n,U))){Of(K,ae,a,G);break e}ce&&ce(n,H,U),n==="focusout"&&(ce=H._wrapperState)&&ce.controlled&&H.type==="number"&&at(H,"number",H.value)}switch(ce=U?js(U):window,n){case"focusin":(Vf(ce)||ce.contentEditable==="true")&&(bs=ce,Pc=U,ia=null);break;case"focusout":ia=Pc=bs=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,$f(K,a,G);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":$f(K,a,G)}var he;if(Sc)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ls?Nf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Pf&&a.locale!=="ko"&&(Ls||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ls&&(he=wl()):(tn=G,ks="value"in tn?tn.value:tn.textContent,Ls=!0)),ce=xl(U,ge),0<ce.length&&(ge=new g(ge,n,null,a,G),K.push({event:ge,listeners:ce}),he?ge.data=he:(he=Df(a),he!==null&&(ge.data=he)))),(he=s0?o0(n,a):a0(n,a))&&(U=xl(U,"onBeforeInput"),0<U.length&&(G=new g("onBeforeInput","beforeinput",null,a,G),K.push({event:G,listeners:U}),G.data=he))}Jf(K,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function xl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=ki(n,a),f!=null&&c.unshift(aa(n,f,d)),f=ki(n,r),f!=null&&c.push(aa(n,f,d))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ep(n,r,a,c,d){for(var f=r._reactName,_=[];a!==null&&a!==c;){var I=a,P=I.alternate,U=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&U!==null&&(I=U,d?(P=ki(a,f),P!=null&&_.unshift(aa(a,P,I))):d||(P=ki(a,f),P!=null&&_.push(aa(a,P,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var w0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function tp(n){return(typeof n=="string"?n:""+n).replace(w0,`
`).replace(T0,"")}function Nl(n,r,a){if(r=tp(r),tp(n)!==r&&a)throw Error(t(425))}function Dl(){}var Lc=null,bc=null;function Mc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,I0=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(n){return np.resolve(null).then(n).catch(A0)}:Fc;function A0(n){setTimeout(function(){throw n})}function Uc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),qr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);qr(r)}function Kr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Us,la="__reactProps$"+Us,gr="__reactContainer$"+Us,jc="__reactEvents$"+Us,R0="__reactListeners$"+Us,C0="__reactHandles$"+Us;function Bi(n){var r=n[Gn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[gr]||a[Gn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=rp(n);n!==null;){if(a=n[Gn])return a;n=rp(n)}return r}n=a,a=n.parentNode}return null}function ua(n){return n=n[Gn]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vl(n){return n[la]||null}var zc=[],zs=-1;function Qr(n){return{current:n}}function Qe(n){0>zs||(n.current=zc[zs],zc[zs]=null,zs--)}function He(n,r){zs++,zc[zs]=n.current,n.current=r}var Yr={},Dt=Qr(Yr),Ht=Qr(!1),$i=Yr;function Bs(n,r){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Ol(){Qe(Ht),Qe(Dt)}function ip(n,r,a){if(Dt.current!==Yr)throw Error(t(168));He(Dt,r),He(Ht,a)}function sp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Ue(n)||"Unknown",d));return re({},a,c)}function Ll(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,$i=Dt.current,He(Dt,n),He(Ht,Ht.current),!0}function op(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=sp(n,r,$i),c.__reactInternalMemoizedMergedChildContext=n,Qe(Ht),Qe(Dt),He(Dt,n)):Qe(Ht),He(Ht,a)}var yr=null,bl=!1,Bc=!1;function ap(n){yr===null?yr=[n]:yr.push(n)}function P0(n){bl=!0,ap(n)}function Xr(){if(!Bc&&yr!==null){Bc=!0;var n=0,r=Ne;try{var a=yr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,bl=!1}catch(d){throw yr!==null&&(yr=yr.slice(n+1)),Uo(Ts,Xr),d}finally{Ne=r,Bc=!1}}return null}var $s=[],qs=0,Ml=null,Fl=0,cn=[],hn=0,qi=null,_r=1,vr="";function Hi(n,r){$s[qs++]=Fl,$s[qs++]=Ml,Ml=n,Fl=r}function lp(n,r,a){cn[hn++]=_r,cn[hn++]=vr,cn[hn++]=qi,qi=n;var c=_r;n=vr;var d=32-Zt(c)-1;c&=~(1<<d),a+=1;var f=32-Zt(r)+d;if(30<f){var _=d-d%5;f=(c&(1<<_)-1).toString(32),c>>=_,d-=_,_r=1<<32-Zt(r)+d|a<<d|c,vr=f+n}else _r=1<<f|a<<d|c,vr=n}function $c(n){n.return!==null&&(Hi(n,1),lp(n,1,0))}function qc(n){for(;n===Ml;)Ml=$s[--qs],$s[qs]=null,Fl=$s[--qs],$s[qs]=null;for(;n===qi;)qi=cn[--hn],cn[hn]=null,vr=cn[--hn],cn[hn]=null,_r=cn[--hn],cn[hn]=null}var sn=null,on=null,Xe=!1,In=null;function up(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function cp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=Kr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=qi!==null?{id:_r,overflow:vr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(Xe){var r=on;if(r){var a=r;if(!cp(n,r)){if(Hc(n))throw Error(t(418));r=Kr(a.nextSibling);var c=sn;r&&cp(n,r)?up(c,a):(n.flags=n.flags&-4097|2,Xe=!1,sn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,sn=n}}}function hp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ul(n){if(n!==sn)return!1;if(!Xe)return hp(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Mc(n.type,n.memoizedProps)),r&&(r=on)){if(Hc(n))throw dp(),Error(t(418));for(;r;)up(n,r),r=Kr(r.nextSibling)}if(hp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=Kr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?Kr(n.stateNode.nextSibling):null;return!0}function dp(){for(var n=on;n;)n=Kr(n.nextSibling)}function Hs(){on=sn=null,Xe=!1}function Gc(n){In===null?In=[n]:In.push(n)}var k0=fe.ReactCurrentBatchConfig;function ca(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var I=d.refs;_===null?delete I[f]:I[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function jl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function fp(n){var r=n._init;return r(n._payload)}function pp(n){function r(b,N){if(n){var F=b.deletions;F===null?(b.deletions=[N],b.flags|=16):F.push(N)}}function a(b,N){if(!n)return null;for(;N!==null;)r(b,N),N=N.sibling;return null}function c(b,N){for(b=new Map;N!==null;)N.key!==null?b.set(N.key,N):b.set(N.index,N),N=N.sibling;return b}function d(b,N){return b=si(b,N),b.index=0,b.sibling=null,b}function f(b,N,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<N?(b.flags|=2,N):F):(b.flags|=2,N)):(b.flags|=1048576,N)}function _(b){return n&&b.alternate===null&&(b.flags|=2),b}function I(b,N,F,Q){return N===null||N.tag!==6?(N=Fh(F,b.mode,Q),N.return=b,N):(N=d(N,F),N.return=b,N)}function P(b,N,F,Q){var ae=F.type;return ae===k?G(b,N,F.props.children,Q,F.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===yt&&fp(ae)===N.type)?(Q=d(N,F.props),Q.ref=ca(b,N,F),Q.return=b,Q):(Q=cu(F.type,F.key,F.props,null,b.mode,Q),Q.ref=ca(b,N,F),Q.return=b,Q)}function U(b,N,F,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Uh(F,b.mode,Q),N.return=b,N):(N=d(N,F.children||[]),N.return=b,N)}function G(b,N,F,Q,ae){return N===null||N.tag!==7?(N=Zi(F,b.mode,Q,ae),N.return=b,N):(N=d(N,F),N.return=b,N)}function K(b,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Fh(""+N,b.mode,F),N.return=b,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Le:return F=cu(N.type,N.key,N.props,null,b.mode,F),F.ref=ca(b,null,N),F.return=b,F;case Ae:return N=Uh(N,b.mode,F),N.return=b,N;case yt:var Q=N._init;return K(b,Q(N._payload),F)}if(rt(N)||ue(N))return N=Zi(N,b.mode,F,null),N.return=b,N;jl(b,N)}return null}function H(b,N,F,Q){var ae=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ae!==null?null:I(b,N,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Le:return F.key===ae?P(b,N,F,Q):null;case Ae:return F.key===ae?U(b,N,F,Q):null;case yt:return ae=F._init,H(b,N,ae(F._payload),Q)}if(rt(F)||ue(F))return ae!==null?null:G(b,N,F,Q,null);jl(b,F)}return null}function ee(b,N,F,Q,ae){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return b=b.get(F)||null,I(N,b,""+Q,ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Le:return b=b.get(Q.key===null?F:Q.key)||null,P(N,b,Q,ae);case Ae:return b=b.get(Q.key===null?F:Q.key)||null,U(N,b,Q,ae);case yt:var ce=Q._init;return ee(b,N,F,ce(Q._payload),ae)}if(rt(Q)||ue(Q))return b=b.get(F)||null,G(N,b,Q,ae,null);jl(N,Q)}return null}function se(b,N,F,Q){for(var ae=null,ce=null,he=N,ge=N=0,Et=null;he!==null&&ge<F.length;ge++){he.index>ge?(Et=he,he=null):Et=he.sibling;var Me=H(b,he,F[ge],Q);if(Me===null){he===null&&(he=Et);break}n&&he&&Me.alternate===null&&r(b,he),N=f(Me,N,ge),ce===null?ae=Me:ce.sibling=Me,ce=Me,he=Et}if(ge===F.length)return a(b,he),Xe&&Hi(b,ge),ae;if(he===null){for(;ge<F.length;ge++)he=K(b,F[ge],Q),he!==null&&(N=f(he,N,ge),ce===null?ae=he:ce.sibling=he,ce=he);return Xe&&Hi(b,ge),ae}for(he=c(b,he);ge<F.length;ge++)Et=ee(he,b,ge,F[ge],Q),Et!==null&&(n&&Et.alternate!==null&&he.delete(Et.key===null?ge:Et.key),N=f(Et,N,ge),ce===null?ae=Et:ce.sibling=Et,ce=Et);return n&&he.forEach(function(oi){return r(b,oi)}),Xe&&Hi(b,ge),ae}function oe(b,N,F,Q){var ae=ue(F);if(typeof ae!="function")throw Error(t(150));if(F=ae.call(F),F==null)throw Error(t(151));for(var ce=ae=null,he=N,ge=N=0,Et=null,Me=F.next();he!==null&&!Me.done;ge++,Me=F.next()){he.index>ge?(Et=he,he=null):Et=he.sibling;var oi=H(b,he,Me.value,Q);if(oi===null){he===null&&(he=Et);break}n&&he&&oi.alternate===null&&r(b,he),N=f(oi,N,ge),ce===null?ae=oi:ce.sibling=oi,ce=oi,he=Et}if(Me.done)return a(b,he),Xe&&Hi(b,ge),ae;if(he===null){for(;!Me.done;ge++,Me=F.next())Me=K(b,Me.value,Q),Me!==null&&(N=f(Me,N,ge),ce===null?ae=Me:ce.sibling=Me,ce=Me);return Xe&&Hi(b,ge),ae}for(he=c(b,he);!Me.done;ge++,Me=F.next())Me=ee(he,b,ge,Me.value,Q),Me!==null&&(n&&Me.alternate!==null&&he.delete(Me.key===null?ge:Me.key),N=f(Me,N,ge),ce===null?ae=Me:ce.sibling=Me,ce=Me);return n&&he.forEach(function(lE){return r(b,lE)}),Xe&&Hi(b,ge),ae}function st(b,N,F,Q){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Le:e:{for(var ae=F.key,ce=N;ce!==null;){if(ce.key===ae){if(ae=F.type,ae===k){if(ce.tag===7){a(b,ce.sibling),N=d(ce,F.props.children),N.return=b,b=N;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===yt&&fp(ae)===ce.type){a(b,ce.sibling),N=d(ce,F.props),N.ref=ca(b,ce,F),N.return=b,b=N;break e}a(b,ce);break}else r(b,ce);ce=ce.sibling}F.type===k?(N=Zi(F.props.children,b.mode,Q,F.key),N.return=b,b=N):(Q=cu(F.type,F.key,F.props,null,b.mode,Q),Q.ref=ca(b,N,F),Q.return=b,b=Q)}return _(b);case Ae:e:{for(ce=F.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(b,N.sibling),N=d(N,F.children||[]),N.return=b,b=N;break e}else{a(b,N);break}else r(b,N);N=N.sibling}N=Uh(F,b.mode,Q),N.return=b,b=N}return _(b);case yt:return ce=F._init,st(b,N,ce(F._payload),Q)}if(rt(F))return se(b,N,F,Q);if(ue(F))return oe(b,N,F,Q);jl(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(b,N.sibling),N=d(N,F),N.return=b,b=N):(a(b,N),N=Fh(F,b.mode,Q),N.return=b,b=N),_(b)):a(b,N)}return st}var Ws=pp(!0),mp=pp(!1),zl=Qr(null),Bl=null,Gs=null,Kc=null;function Qc(){Kc=Gs=Bl=null}function Yc(n){var r=zl.current;Qe(zl),n._currentValue=r}function Xc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Ks(n,r){Bl=n,Kc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(Bl===null)throw Error(t(308));Gs=n,Bl.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var Wi=null;function Jc(n){Wi===null?Wi=[n]:Wi.push(n)}function gp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Jc(r)):(a.next=d.next,d.next=a),r.interleaved=a,Er(n,c)}function Er(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function Zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Er(n,a)}return d=c.interleaved,d===null?(r.next=r,Jc(c)):(r.next=d.next,d.next=r),c.interleaved=r,Er(n,a)}function $l(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ho(n,a)}}function _p(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function ql(n,r,a,c){var d=n.updateQueue;Jr=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,U=P.next;P.next=null,_===null?f=U:_.next=U,_=P;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==_&&(I===null?G.firstBaseUpdate=U:I.next=U,G.lastBaseUpdate=P))}if(f!==null){var K=d.baseState;_=0,G=U=P=null,I=f;do{var H=I.lane,ee=I.eventTime;if((c&H)===H){G!==null&&(G=G.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(H=r,ee=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){K=se.call(ee,K,H);break e}K=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,H=typeof se=="function"?se.call(ee,K,H):se,H==null)break e;K=re({},K,H);break e;case 2:Jr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[I]:H.push(I))}else ee={eventTime:ee,lane:H,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(U=G=ee,P=K):G=G.next=ee,_|=H;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;H=I,I=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(G===null&&(P=K),d.baseState=P,d.firstBaseUpdate=U,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Qi|=_,n.lanes=_,n.memoizedState=K}}function vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ha={},Kn=Qr(ha),da=Qr(ha),fa=Qr(ha);function Gi(n){if(n===ha)throw Error(t(174));return n}function eh(n,r){switch(He(fa,r),He(da,n),He(Kn,ha),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:gs(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=gs(r,n)}Qe(Kn),He(Kn,r)}function Qs(){Qe(Kn),Qe(da),Qe(fa)}function Ep(n){Gi(fa.current);var r=Gi(Kn.current),a=gs(r,n.type);r!==a&&(He(da,n),He(Kn,a))}function th(n){da.current===n&&(Qe(Kn),Qe(da))}var Je=Qr(0);function Hl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nh=[];function rh(){for(var n=0;n<nh.length;n++)nh[n]._workInProgressVersionPrimary=null;nh.length=0}var Wl=fe.ReactCurrentDispatcher,ih=fe.ReactCurrentBatchConfig,Ki=0,Ze=null,pt=null,_t=null,Gl=!1,pa=!1,ma=0,x0=0;function Vt(){throw Error(t(321))}function sh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Tn(n[a],r[a]))return!1;return!0}function oh(n,r,a,c,d,f){if(Ki=f,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Wl.current=n===null||n.memoizedState===null?O0:L0,n=a(c,d),pa){f=0;do{if(pa=!1,ma=0,25<=f)throw Error(t(301));f+=1,_t=pt=null,r.updateQueue=null,Wl.current=b0,n=a(c,d)}while(pa)}if(Wl.current=Yl,r=pt!==null&&pt.next!==null,Ki=0,_t=pt=Ze=null,Gl=!1,r)throw Error(t(300));return n}function ah(){var n=ma!==0;return ma=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ze.memoizedState=_t=n:_t=_t.next=n,_t}function fn(){if(pt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=pt.next;var r=_t===null?Ze.memoizedState:_t.next;if(r!==null)_t=r,pt=n;else{if(n===null)throw Error(t(310));pt=n,n={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},_t===null?Ze.memoizedState=_t=n:_t=_t.next=n}return _t}function ga(n,r){return typeof r=="function"?r(n):r}function lh(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=pt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var I=_=null,P=null,U=f;do{var G=U.lane;if((Ki&G)===G)P!==null&&(P=P.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};P===null?(I=P=K,_=c):P=P.next=K,Ze.lanes|=G,Qi|=G}U=U.next}while(U!==null&&U!==f);P===null?_=c:P.next=I,Tn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,Qi|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function uh(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);Tn(f,r.memoizedState)||(Gt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function wp(){}function Tp(n,r){var a=Ze,c=fn(),d=r(),f=!Tn(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,ch(Ap.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ya(9,Sp.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));(Ki&30)!==0||Ip(a,r,d)}return d}function Ip(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Sp(n,r,a,c){r.value=a,r.getSnapshot=c,Rp(r)&&Cp(n)}function Ap(n,r,a){return a(function(){Rp(r)&&Cp(n)})}function Rp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Tn(n,a)}catch{return!0}}function Cp(n){var r=Er(n,1);r!==null&&Cn(r,n,1,-1)}function Pp(n){var r=Qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=V0.bind(null,Ze,n),[r.memoizedState,n]}function ya(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function kp(){return fn().memoizedState}function Kl(n,r,a,c){var d=Qn();Ze.flags|=n,d.memoizedState=ya(1|r,a,void 0,c===void 0?null:c)}function Ql(n,r,a,c){var d=fn();c=c===void 0?null:c;var f=void 0;if(pt!==null){var _=pt.memoizedState;if(f=_.destroy,c!==null&&sh(c,_.deps)){d.memoizedState=ya(r,a,f,c);return}}Ze.flags|=n,d.memoizedState=ya(1|r,a,f,c)}function xp(n,r){return Kl(8390656,8,n,r)}function ch(n,r){return Ql(2048,8,n,r)}function Np(n,r){return Ql(4,2,n,r)}function Dp(n,r){return Ql(4,4,n,r)}function Vp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Op(n,r,a){return a=a!=null?a.concat([n]):null,Ql(4,4,Vp.bind(null,r,n),a)}function hh(){}function Lp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&sh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function bp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&sh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Mp(n,r,a){return(Ki&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(Tn(a,r)||(a=$o(),Ze.lanes|=a,Qi|=a,n.baseState=!0),r)}function N0(n,r){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=ih.transition;ih.transition={};try{n(!1),r()}finally{Ne=a,ih.transition=c}}function Fp(){return fn().memoizedState}function D0(n,r,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Up(n))jp(r,a);else if(a=gp(n,r,a,c),a!==null){var d=Bt();Cn(a,n,c,d),zp(a,r,c)}}function V0(n,r,a){var c=ri(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Up(n))jp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,I=f(_,a);if(d.hasEagerState=!0,d.eagerState=I,Tn(I,_)){var P=r.interleaved;P===null?(d.next=d,Jc(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=gp(n,r,d,c),a!==null&&(d=Bt(),Cn(a,n,c,d),zp(a,r,c))}}function Up(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function jp(n,r){pa=Gl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function zp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Ho(n,a)}}var Yl={readContext:dn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},O0={readContext:dn,useCallback:function(n,r){return Qn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:xp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Kl(4194308,4,Vp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Kl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Kl(4,2,n,r)},useMemo:function(n,r){var a=Qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=D0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Qn();return n={current:n},r.memoizedState=n},useState:Pp,useDebugValue:hh,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=Pp(!1),r=n[0];return n=N0.bind(null,n[1]),Qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Qn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));(Ki&30)!==0||Ip(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,xp(Ap.bind(null,c,f,n),[n]),c.flags|=2048,ya(9,Sp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Qn(),r=vt.identifierPrefix;if(Xe){var a=vr,c=_r;a=(c&~(1<<32-Zt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=x0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},L0={readContext:dn,useCallback:Lp,useContext:dn,useEffect:ch,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Dp,useMemo:bp,useReducer:lh,useRef:kp,useState:function(){return lh(ga)},useDebugValue:hh,useDeferredValue:function(n){var r=fn();return Mp(r,pt.memoizedState,n)},useTransition:function(){var n=lh(ga)[0],r=fn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1},b0={readContext:dn,useCallback:Lp,useContext:dn,useEffect:ch,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Dp,useMemo:bp,useReducer:uh,useRef:kp,useState:function(){return uh(ga)},useDebugValue:hh,useDeferredValue:function(n){var r=fn();return pt===null?r.memoizedState=n:Mp(r,pt.memoizedState,n)},useTransition:function(){var n=uh(ga)[0],r=fn().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1};function Sn(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function dh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:re({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=ri(n),f=wr(c,d);f.payload=r,a!=null&&(f.callback=a),r=Zr(n,f,d),r!==null&&(Cn(r,n,d,c),$l(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=ri(n),f=wr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=Zr(n,f,d),r!==null&&(Cn(r,n,d,c),$l(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=ri(n),d=wr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Zr(n,d,c),r!==null&&(Cn(r,n,c,a),$l(r,n,c))}};function Bp(n,r,a,c,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,_):r.prototype&&r.prototype.isPureReactComponent?!ra(a,c)||!ra(d,f):!0}function $p(n,r,a){var c=!1,d=Yr,f=r.contextType;return typeof f=="object"&&f!==null?f=dn(f):(d=Wt(r)?$i:Dt.current,c=r.contextTypes,f=(c=c!=null)?Bs(n,d):Yr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Xl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function qp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Xl.enqueueReplaceState(r,r.state,null)}function fh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Zc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=dn(f):(f=Wt(r)?$i:Dt.current,d.context=Bs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(dh(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Xl.enqueueReplaceState(d,d.state,null),ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,r){try{var a="",c=r;do a+=Re(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function ph(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function mh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function Hp(n,r,a){a=wr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){iu||(iu=!0,xh=c),mh(n,r)},a}function Wp(n,r,a){a=wr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){mh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){mh(n,r),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Gp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new M0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=X0.bind(null,n,r,a),r.then(n,n))}function Kp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=wr(-1,1),r.tag=2,Zr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var F0=fe.ReactCurrentOwner,Gt=!1;function zt(n,r,a,c){r.child=n===null?mp(r,null,a,c):Ws(r,n.child,a,c)}function Yp(n,r,a,c,d){a=a.render;var f=r.ref;return Ks(r,d),c=oh(n,r,a,c,f,d),a=ah(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Tr(n,r,d)):(Xe&&a&&$c(r),r.flags|=1,zt(n,r,c,d),r.child)}function Xp(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Mh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,Jp(n,r,f,c,d)):(n=cu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(_,c)&&n.ref===r.ref)return Tr(n,r,d)}return r.flags|=1,n=si(f,c),n.ref=r.ref,n.return=r,r.child=n}function Jp(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ra(f,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return r.lanes=n.lanes,Tr(n,r,d)}return gh(n,r,a,c,d)}function Zp(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Js,an),an|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(Js,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(Js,an),an|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,He(Js,an),an|=c;return zt(n,r,d,a),r.child}function em(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function gh(n,r,a,c,d){var f=Wt(a)?$i:Dt.current;return f=Bs(r,f),Ks(r,d),a=oh(n,r,a,c,f,d),c=ah(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Tr(n,r,d)):(Xe&&c&&$c(r),r.flags|=1,zt(n,r,a,d),r.child)}function tm(n,r,a,c,d){if(Wt(a)){var f=!0;Ll(r)}else f=!1;if(Ks(r,d),r.stateNode===null)Zl(n,r),$p(r,a,c),fh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var P=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=dn(U):(U=Wt(a)?$i:Dt.current,U=Bs(r,U));var G=a.getDerivedStateFromProps,K=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||P!==U)&&qp(r,_,c,U),Jr=!1;var H=r.memoizedState;_.state=H,ql(r,c,_,d),P=r.memoizedState,I!==c||H!==P||Ht.current||Jr?(typeof G=="function"&&(dh(r,a,G,c),P=r.memoizedState),(I=Jr||Bp(r,a,I,c,H,P,U))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),_.props=c,_.state=P,_.context=U,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,yp(n,r),I=r.memoizedProps,U=r.type===r.elementType?I:Sn(r.type,I),_.props=U,K=r.pendingProps,H=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=dn(P):(P=Wt(a)?$i:Dt.current,P=Bs(r,P));var ee=a.getDerivedStateFromProps;(G=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==K||H!==P)&&qp(r,_,c,P),Jr=!1,H=r.memoizedState,_.state=H,ql(r,c,_,d);var se=r.memoizedState;I!==K||H!==se||Ht.current||Jr?(typeof ee=="function"&&(dh(r,a,ee,c),se=r.memoizedState),(U=Jr||Bp(r,a,U,c,H,se,P)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),_.props=c,_.state=se,_.context=P,c=U):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return yh(n,r,a,c,f,d)}function yh(n,r,a,c,d,f){em(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&op(r,a,!1),Tr(n,r,f);c=r.stateNode,F0.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Ws(r,n.child,null,f),r.child=Ws(r,null,I,f)):zt(n,r,I,f),r.memoizedState=c.state,d&&op(r,a,!0),r.child}function nm(n){var r=n.stateNode;r.pendingContext?ip(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ip(n,r.context,!1),eh(n,r.containerInfo)}function rm(n,r,a,c,d){return Hs(),Gc(d),r.flags|=256,zt(n,r,a,c),r.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,r,a){var c=r.pendingProps,d=Je.current,f=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return Wc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,f?(c=r.mode,f=r.child,_={mode:"hidden",children:_},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=hu(_,c,0,null),n=Zi(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=vh(a),r.memoizedState=_h,n):Eh(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return U0(n,r,_,c,I,d,a);if(f){f=c.fallback,_=r.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=si(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?f=si(I,f):(f=Zi(f,_,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,_=n.child.memoizedState,_=_===null?vh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~a,r.memoizedState=_h,c}return f=n.child,n=f.sibling,c=si(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Eh(n,r){return r=hu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Jl(n,r,a,c){return c!==null&&Gc(c),Ws(r,n.child,null,a),n=Eh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function U0(n,r,a,c,d,f,_){if(a)return r.flags&256?(r.flags&=-257,c=ph(Error(t(422))),Jl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=hu({mode:"visible",children:c.children},d,0,null),f=Zi(f,d,_,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Ws(r,n.child,null,_),r.child.memoizedState=vh(_),r.memoizedState=_h,f);if((r.mode&1)===0)return Jl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(t(419)),c=ph(f,c,void 0),Jl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Gt||I){if(c=vt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Er(n,d),Cn(c,n,d,-1))}return bh(),c=ph(Error(t(421))),Jl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=J0.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,on=Kr(d.nextSibling),sn=r,Xe=!0,In=null,n!==null&&(cn[hn++]=_r,cn[hn++]=vr,cn[hn++]=qi,_r=n.id,vr=n.overflow,qi=r),r=Eh(r,c.children),r.flags|=4096,r)}function sm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Xc(n.return,r,a)}function wh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function om(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&sm(n,a,r);else if(n.tag===19)sm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Hl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),wh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Hl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}wh(r,!0,a,null,f);break;case"together":wh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Zl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Tr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Qi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=si(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function j0(n,r,a){switch(r.tag){case 3:nm(r),Hs();break;case 5:Ep(r);break;case 1:Wt(r.type)&&Ll(r);break;case 4:eh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(zl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?im(n,r,a):(He(Je,Je.current&1),n=Tr(n,r,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return om(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,Zp(n,r,a)}return Tr(n,r,a)}var am,Th,lm,um;am=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Th=function(){},lm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Gi(Kn.current);var f=null;switch(a){case"input":d=ps(n,d),c=ps(n,c),f=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),f=[];break;case"textarea":d=Do(n,d),c=Do(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Dl)}vn(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?f||(f=[]):(f=f||[]).push(U,null));for(U in c){var P=c[U];if(I=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&P!==I&&(P!=null||I!=null))if(U==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&I[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(f||(f=[]),f.push(U,a)),a=P;else U==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(f=f||[]).push(U,P)):U==="children"?typeof P!="string"&&typeof P!="number"||(f=f||[]).push(U,""+P):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(P!=null&&U==="onScroll"&&Ke("scroll",n),f||I===P||(f=[])):(f=f||[]).push(U,P))}a&&(f=f||[]).push("style",a);var U=f;(r.updateQueue=U)&&(r.flags|=4)}},um=function(n,r,a,c){a!==c&&(r.flags|=4)};function _a(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function z0(n,r,a){var c=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Wt(r.type)&&Ol(),Ot(r),null;case 3:return c=r.stateNode,Qs(),Qe(Ht),Qe(Dt),rh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,In!==null&&(Vh(In),In=null))),Th(n,r),Ot(r),null;case 5:th(r);var d=Gi(fa.current);if(a=r.type,n!==null&&r.stateNode!=null)lm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Gi(Kn.current),Ul(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Gn]=r,c[la]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<sa.length;d++)Ke(sa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":rl(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Vo(c,f),Ke("invalid",c)}vn(a,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var I=f[_];_==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&Nl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&Nl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&Ke("scroll",c)}switch(a){case"input":fs(c),No(c,f,!0);break;case"textarea":fs(c),Dr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Dl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Gn]=r,n[la]=c,am(n,r,!1,!1),r.stateNode=n;e:{switch(_=_s(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<sa.length;d++)Ke(sa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":rl(n,c),d=ps(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Vo(n,c),d=Do(n,c),Ke("invalid",n);break;default:d=c}vn(a,d),I=d;for(f in I)if(I.hasOwnProperty(f)){var P=I[f];f==="style"?ys(n,P):f==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&sl(n,P)):f==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Pi(n,P):typeof P=="number"&&Pi(n,""+P):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?P!=null&&f==="onScroll"&&Ke("scroll",n):P!=null&&ve(n,f,P,_))}switch(a){case"input":fs(n),No(n,c,!1);break;case"textarea":fs(n),Dr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?_n(n,!!c.multiple,f,!1):c.defaultValue!=null&&_n(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Dl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)um(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Gi(fa.current),Gi(Kn.current),Ul(r)){if(c=r.stateNode,a=r.memoizedProps,c[Gn]=r,(f=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Nl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Nl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Qe(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)dp(),Hs(),r.flags|=98560,f=!1;else if(f=Ul(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Gn]=r}else Hs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),f=!1}else In!==null&&(Vh(In),In=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?mt===0&&(mt=3):bh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Qs(),Th(n,r),n===null&&oa(r.stateNode.containerInfo),Ot(r),null;case 10:return Yc(r.type._context),Ot(r),null;case 17:return Wt(r.type)&&Ol(),Ot(r),null;case 19:if(Qe(Je),f=r.memoizedState,f===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=f.rendering,_===null)if(c)_a(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Hl(n),_!==null){for(r.flags|=128,_a(f,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>Zs&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304)}else{if(!c)if(n=Hl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),_a(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Xe)return Ot(r),null}else 2*Ge()-f.renderingStartTime>Zs&&a!==1073741824&&(r.flags|=128,c=!0,_a(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(a=f.last,a!==null?a.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Lh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function B0(n,r){switch(qc(r),r.tag){case 1:return Wt(r.type)&&Ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),Qe(Ht),Qe(Dt),rh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return th(r),null;case 13:if(Qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Hs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Je),null;case 4:return Qs(),null;case 10:return Yc(r.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var eu=!1,Lt=!1,$0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Xs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,r,c)}else a.current=null}function Ih(n,r,a){try{a()}catch(c){nt(n,r,c)}}var cm=!1;function q0(n,r){if(Lc=fr,n=Bf(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,I=-1,P=-1,U=0,G=0,K=n,H=null;t:for(;;){for(var ee;K!==a||d!==0&&K.nodeType!==3||(I=_+d),K!==f||c!==0&&K.nodeType!==3||(P=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(ee=K.firstChild)!==null;)H=K,K=ee;for(;;){if(K===n)break t;if(H===a&&++U===d&&(I=_),H===f&&++G===c&&(P=_),(ee=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=ee}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:n,selectionRange:a},fr=!1,ie=r;ie!==null;)if(r=ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ie=n;else for(;ie!==null;){r=ie;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,st=se.memoizedState,b=r.stateNode,N=b.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Sn(r.type,oe),st);b.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){nt(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,ie=n;break}ie=r.return}return se=cm,cm=!1,se}function va(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Ih(r,a,f)}d=d.next}while(d!==c)}}function tu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Sh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function hm(n){var r=n.alternate;r!==null&&(n.alternate=null,hm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gn],delete r[la],delete r[jc],delete r[R0],delete r[C0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ah(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Dl));else if(c!==4&&(n=n.child,n!==null))for(Ah(n,r,a),n=n.sibling;n!==null;)Ah(n,r,a),n=n.sibling}function Rh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rh(n,r,a),n=n.sibling;n!==null;)Rh(n,r,a),n=n.sibling}var Rt=null,An=!1;function ei(n,r,a){for(a=a.child;a!==null;)pm(n,r,a),a=a.sibling}function pm(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Vi,a)}catch{}switch(a.tag){case 5:Lt||Xs(a,r);case 6:var c=Rt,d=An;Rt=null,ei(n,r,a),Rt=c,An=d,Rt!==null&&(An?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(An?(n=Rt,a=a.stateNode,n.nodeType===8?Uc(n.parentNode,a):n.nodeType===1&&Uc(n,a),qr(n)):Uc(Rt,a.stateNode));break;case 4:c=Rt,d=An,Rt=a.stateNode.containerInfo,An=!0,ei(n,r,a),Rt=c,An=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&Ih(a,r,_),d=d.next}while(d!==c)}ei(n,r,a);break;case 1:if(!Lt&&(Xs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){nt(a,r,I)}ei(n,r,a);break;case 21:ei(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,ei(n,r,a),Lt=c):ei(n,r,a);break;default:ei(n,r,a)}}function mm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new $0),r.forEach(function(c){var d=Z0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Rn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,An=!1;break e;case 3:Rt=I.stateNode.containerInfo,An=!0;break e;case 4:Rt=I.stateNode.containerInfo,An=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));pm(f,_,d),Rt=null,An=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(U){nt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)gm(r,n),r=r.sibling}function gm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(r,n),Yn(n),c&4){try{va(3,n,n.return),tu(3,n)}catch(oe){nt(n,n.return,oe)}try{va(5,n,n.return)}catch(oe){nt(n,n.return,oe)}}break;case 1:Rn(r,n),Yn(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Rn(r,n),Yn(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{Pi(d,"")}catch(oe){nt(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=a!==null?a.memoizedProps:f,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&ms(d,f),_s(I,_);var U=_s(I,f);for(_=0;_<P.length;_+=2){var G=P[_],K=P[_+1];G==="style"?ys(d,K):G==="dangerouslySetInnerHTML"?sl(d,K):G==="children"?Pi(d,K):ve(d,G,K,U)}switch(I){case"input":Ci(d,f);break;case"textarea":il(d,f);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?_n(d,!!f.multiple,ee,!1):H!==!!f.multiple&&(f.defaultValue!=null?_n(d,!!f.multiple,f.defaultValue,!0):_n(d,!!f.multiple,f.multiple?[]:"",!1))}d[la]=f}catch(oe){nt(n,n.return,oe)}}break;case 6:if(Rn(r,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(oe){nt(n,n.return,oe)}}break;case 3:if(Rn(r,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{qr(r.containerInfo)}catch(oe){nt(n,n.return,oe)}break;case 4:Rn(r,n),Yn(n);break;case 13:Rn(r,n),Yn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(kh=Ge())),c&4&&mm(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||G,Rn(r,n),Lt=U):Rn(r,n),Yn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&(n.mode&1)!==0)for(ie=n,G=n.child;G!==null;){for(K=ie=G;ie!==null;){switch(H=ie,ee=H.child,H.tag){case 0:case 11:case 14:case 15:va(4,H,H.return);break;case 1:Xs(H,H.return);var se=H.stateNode;if(typeof se.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){nt(c,a,oe)}}break;case 5:Xs(H,H.return);break;case 22:if(H.memoizedState!==null){vm(K);continue}}ee!==null?(ee.return=H,ie=ee):vm(K)}G=G.sibling}e:for(G=null,K=n;;){if(K.tag===5){if(G===null){G=K;try{d=K.stateNode,U?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=K.stateNode,P=K.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Lr("display",_))}catch(oe){nt(n,n.return,oe)}}}else if(K.tag===6){if(G===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(oe){nt(n,n.return,oe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;G===K&&(G=null),K=K.return}G===K&&(G=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Rn(r,n),Yn(n),c&4&&mm(n);break;case 21:break;default:Rn(r,n),Yn(n)}}function Yn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(dm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Pi(d,""),c.flags&=-33);var f=fm(n);Rh(n,f,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=fm(n);Ah(n,I,_);break;default:throw Error(t(161))}}catch(P){nt(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function H0(n,r,a){ie=n,ym(n)}function ym(n,r,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,f=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||eu;if(!_){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Lt;I=eu;var U=Lt;if(eu=_,(Lt=P)&&!U)for(ie=d;ie!==null;)_=ie,P=_.child,_.tag===22&&_.memoizedState!==null?Em(d):P!==null?(P.return=_,ie=P):Em(d);for(;f!==null;)ie=f,ym(f),f=f.sibling;ie=d,eu=I,Lt=U}_m(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ie=f):_m(n)}}function _m(n){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||tu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Sn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&vp(r,f,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}vp(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var K=G.dehydrated;K!==null&&qr(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&Sh(r)}catch(H){nt(r,r.return,H)}}if(r===n){ie=null;break}if(a=r.sibling,a!==null){a.return=r.return,ie=a;break}ie=r.return}}function vm(n){for(;ie!==null;){var r=ie;if(r===n){ie=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ie=a;break}ie=r.return}}function Em(n){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{tu(4,r)}catch(P){nt(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){nt(r,d,P)}}var f=r.return;try{Sh(r)}catch(P){nt(r,f,P)}break;case 5:var _=r.return;try{Sh(r)}catch(P){nt(r,_,P)}}}catch(P){nt(r,r.return,P)}if(r===n){ie=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ie=I;break}ie=r.return}}var W0=Math.ceil,nu=fe.ReactCurrentDispatcher,Ch=fe.ReactCurrentOwner,pn=fe.ReactCurrentBatchConfig,Oe=0,vt=null,ut=null,Ct=0,an=0,Js=Qr(0),mt=0,Ea=null,Qi=0,ru=0,Ph=0,wa=null,Kt=null,kh=0,Zs=1/0,Ir=null,iu=!1,xh=null,ti=null,su=!1,ni=null,ou=0,Ta=0,Nh=null,au=-1,lu=0;function Bt(){return(Oe&6)!==0?Ge():au!==-1?au:au=Ge()}function ri(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Ct!==0?Ct&-Ct:k0.transition!==null?(lu===0&&(lu=$o()),lu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:Ps(n.type)),n)}function Cn(n,r,a,c){if(50<Ta)throw Ta=0,Nh=null,Error(t(185));Mi(n,a,c),((Oe&2)===0||n!==vt)&&(n===vt&&((Oe&2)===0&&(ru|=a),mt===4&&ii(n,Ct)),Qt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(Zs=Ge()+500,bl&&Xr()))}function Qt(n,r){var a=n.callbackNode;bi(n,r);var c=cr(n,n===vt?Ct:0);if(c===0)a!==null&&ws(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&ws(a),r===1)n.tag===0?P0(Tm.bind(null,n)):ap(Tm.bind(null,n)),S0(function(){(Oe&6)===0&&Xr()}),a=null;else{switch(Mn(c)){case 1:a=Ts;break;case 4:a=jo;break;case 16:a=Di;break;case 536870912:a=Is;break;default:a=Di}a=xm(a,wm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function wm(n,r){if(au=-1,lu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(eo()&&n.callbackNode!==a)return null;var c=cr(n,n===vt?Ct:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=uu(n,c);else{r=c;var d=Oe;Oe|=2;var f=Sm();(vt!==n||Ct!==r)&&(Ir=null,Zs=Ge()+500,Xi(n,r));do try{Q0();break}catch(I){Im(n,I)}while(!0);Qc(),nu.current=f,Oe=d,ut!==null?r=0:(vt=null,Ct=0,r=mt)}if(r!==0){if(r===2&&(d=Bo(n),d!==0&&(c=d,r=Dh(n,d))),r===1)throw a=Ea,Xi(n,0),ii(n,c),Qt(n,Ge()),a;if(r===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!G0(d)&&(r=uu(n,c),r===2&&(f=Bo(n),f!==0&&(c=f,r=Dh(n,f))),r===1))throw a=Ea,Xi(n,0),ii(n,c),Qt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ji(n,Kt,Ir);break;case 3:if(ii(n,c),(c&130023424)===c&&(r=kh+500-Ge(),10<r)){if(cr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Fc(Ji.bind(null,n,Kt,Ir),r);break}Ji(n,Kt,Ir);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Zt(c);f=1<<_,_=r[_],_>d&&(d=_),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*W0(c/1960))-c,10<c){n.timeoutHandle=Fc(Ji.bind(null,n,Kt,Ir),c);break}Ji(n,Kt,Ir);break;case 5:Ji(n,Kt,Ir);break;default:throw Error(t(329))}}}return Qt(n,Ge()),n.callbackNode===a?wm.bind(null,n):null}function Dh(n,r){var a=wa;return n.current.memoizedState.isDehydrated&&(Xi(n,r).flags|=256),n=uu(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&Vh(r)),n}function Vh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function G0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Tn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ii(n,r){for(r&=~Ph,r&=~ru,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Zt(r),c=1<<a;n[a]=-1,r&=~c}}function Tm(n){if((Oe&6)!==0)throw Error(t(327));eo();var r=cr(n,0);if((r&1)===0)return Qt(n,Ge()),null;var a=uu(n,r);if(n.tag!==0&&a===2){var c=Bo(n);c!==0&&(r=c,a=Dh(n,c))}if(a===1)throw a=Ea,Xi(n,0),ii(n,r),Qt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ji(n,Kt,Ir),Qt(n,Ge()),null}function Oh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(Zs=Ge()+500,bl&&Xr())}}function Yi(n){ni!==null&&ni.tag===0&&(Oe&6)===0&&eo();var r=Oe;Oe|=1;var a=pn.transition,c=Ne;try{if(pn.transition=null,Ne=1,n)return n()}finally{Ne=c,pn.transition=a,Oe=r,(Oe&6)===0&&Xr()}}function Lh(){an=Js.current,Qe(Js)}function Xi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,I0(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ol();break;case 3:Qs(),Qe(Ht),Qe(Dt),rh();break;case 5:th(c);break;case 4:Qs();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:Yc(c.type._context);break;case 22:case 23:Lh()}a=a.return}if(vt=n,ut=n=si(n.current,null),Ct=an=r,mt=0,Ea=null,Ph=ru=Qi=0,Kt=wa=null,Wi!==null){for(r=0;r<Wi.length;r++)if(a=Wi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var _=f.next;f.next=d,c.next=_}a.pending=c}Wi=null}return n}function Im(n,r){do{var a=ut;try{if(Qc(),Wl.current=Yl,Gl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Gl=!1}if(Ki=0,_t=pt=Ze=null,pa=!1,ma=0,Ch.current=null,a===null||a.return===null){mt=1,Ea=r,ut=null;break}e:{var f=n,_=a.return,I=a,P=r;if(r=Ct,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var U=P,G=I,K=G.tag;if((G.mode&1)===0&&(K===0||K===11||K===15)){var H=G.alternate;H?(G.updateQueue=H.updateQueue,G.memoizedState=H.memoizedState,G.lanes=H.lanes):(G.updateQueue=null,G.memoizedState=null)}var ee=Kp(_);if(ee!==null){ee.flags&=-257,Qp(ee,_,I,f,r),ee.mode&1&&Gp(f,U,r),r=ee,P=U;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(P),r.updateQueue=oe}else se.add(P);break e}else{if((r&1)===0){Gp(f,U,r),bh();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var st=Kp(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Qp(st,_,I,f,r),Gc(Ys(P,I));break e}}f=P=Ys(P,I),mt!==4&&(mt=2),wa===null?wa=[f]:wa.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var b=Hp(f,P,r);_p(f,b);break e;case 1:I=P;var N=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ti===null||!ti.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var Q=Wp(f,I,r);_p(f,Q);break e}}f=f.return}while(f!==null)}Rm(a)}catch(ae){r=ae,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function Sm(){var n=nu.current;return nu.current=Yl,n===null?Yl:n}function bh(){(mt===0||mt===3||mt===2)&&(mt=4),vt===null||(Qi&268435455)===0&&(ru&268435455)===0||ii(vt,Ct)}function uu(n,r){var a=Oe;Oe|=2;var c=Sm();(vt!==n||Ct!==r)&&(Ir=null,Xi(n,r));do try{K0();break}catch(d){Im(n,d)}while(!0);if(Qc(),Oe=a,nu.current=c,ut!==null)throw Error(t(261));return vt=null,Ct=0,mt}function K0(){for(;ut!==null;)Am(ut)}function Q0(){for(;ut!==null&&!Ni();)Am(ut)}function Am(n){var r=km(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?Rm(n):ut=r,Ch.current=null}function Rm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=z0(a,r,an),a!==null){ut=a;return}}else{if(a=B0(a,r),a!==null){a.flags&=32767,ut=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mt=6,ut=null;return}}if(r=r.sibling,r!==null){ut=r;return}ut=r=n}while(r!==null);mt===0&&(mt=5)}function Ji(n,r,a){var c=Ne,d=pn.transition;try{pn.transition=null,Ne=1,Y0(n,r,a,c)}finally{pn.transition=d,Ne=c}return null}function Y0(n,r,a,c){do eo();while(ni!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Tc(n,f),n===vt&&(ut=vt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||su||(su=!0,xm(Di,function(){return eo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=pn.transition,pn.transition=null;var _=Ne;Ne=1;var I=Oe;Oe|=4,Ch.current=null,q0(n,a),gm(a,n),g0(bc),fr=!!Lc,bc=Lc=null,n.current=a,H0(a),ur(),Oe=I,Ne=_,pn.transition=f}else n.current=a;if(su&&(su=!1,ni=n,ou=d),f=n.pendingLanes,f===0&&(ti=null),gl(a.stateNode),Qt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(iu)throw iu=!1,n=xh,xh=null,n;return(ou&1)!==0&&n.tag!==0&&eo(),f=n.pendingLanes,(f&1)!==0?n===Nh?Ta++:(Ta=0,Nh=n):Ta=0,Xr(),null}function eo(){if(ni!==null){var n=Mn(ou),r=pn.transition,a=Ne;try{if(pn.transition=null,Ne=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,ou=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ie=n.current;ie!==null;){var f=ie,_=f.child;if((ie.flags&16)!==0){var I=f.deletions;if(I!==null){for(var P=0;P<I.length;P++){var U=I[P];for(ie=U;ie!==null;){var G=ie;switch(G.tag){case 0:case 11:case 15:va(8,G,f)}var K=G.child;if(K!==null)K.return=G,ie=K;else for(;ie!==null;){G=ie;var H=G.sibling,ee=G.return;if(hm(G),G===U){ie=null;break}if(H!==null){H.return=ee,ie=H;break}ie=ee}}}var se=f.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var st=oe.sibling;oe.sibling=null,oe=st}while(oe!==null)}}ie=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,ie=_;else e:for(;ie!==null;){if(f=ie,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:va(9,f,f.return)}var b=f.sibling;if(b!==null){b.return=f.return,ie=b;break e}ie=f.return}}var N=n.current;for(ie=N;ie!==null;){_=ie;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,ie=F;else e:for(_=N;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:tu(9,I)}}catch(ae){nt(I,I.return,ae)}if(I===_){ie=null;break e}var Q=I.sibling;if(Q!==null){Q.return=I.return,ie=Q;break e}ie=I.return}}if(Oe=d,Xr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Vi,n)}catch{}c=!0}return c}finally{Ne=a,pn.transition=r}}return!1}function Cm(n,r,a){r=Ys(a,r),r=Hp(n,r,1),n=Zr(n,r,1),r=Bt(),n!==null&&(Mi(n,1,r),Qt(n,r))}function nt(n,r,a){if(n.tag===3)Cm(n,n,a);else for(;r!==null;){if(r.tag===3){Cm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=Ys(a,n),n=Wp(r,n,1),r=Zr(r,n,1),n=Bt(),r!==null&&(Mi(r,1,n),Qt(r,n));break}}r=r.return}}function X0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>Ge()-kh?Xi(n,0):Ph|=a),Qt(n,r)}function Pm(n,r){r===0&&((n.mode&1)===0?r=1:(r=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var a=Bt();n=Er(n,r),n!==null&&(Mi(n,r,a),Qt(n,a))}function J0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Pm(n,a)}function Z0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Pm(n,a)}var km;km=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Gt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Gt=!1,j0(n,r,a);Gt=(n.flags&131072)!==0}else Gt=!1,Xe&&(r.flags&1048576)!==0&&lp(r,Fl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Zl(n,r),n=r.pendingProps;var d=Bs(r,Dt.current);Ks(r,a),d=oh(null,r,c,n,d,a);var f=ah();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(f=!0,Ll(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Zc(r),d.updater=Xl,r.stateNode=d,d._reactInternals=r,fh(r,c,n,a),r=yh(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&$c(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Zl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=tE(c),n=Sn(c,n),d){case 0:r=gh(null,r,c,n,a);break e;case 1:r=tm(null,r,c,n,a);break e;case 11:r=Yp(null,r,c,n,a);break e;case 14:r=Xp(null,r,c,Sn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),gh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),tm(n,r,c,d,a);case 3:e:{if(nm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,yp(n,r),ql(r,c,null,a);var _=r.memoizedState;if(c=_.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Ys(Error(t(423)),r),r=rm(n,r,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),r),r=rm(n,r,c,a,d);break e}else for(on=Kr(r.stateNode.containerInfo.firstChild),sn=r,Xe=!0,In=null,a=mp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){r=Tr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Ep(r),n===null&&Wc(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,Mc(c,d)?_=null:f!==null&&Mc(c,f)&&(r.flags|=32),em(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Wc(r),null;case 13:return im(n,r,a);case 4:return eh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ws(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),Yp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,He(zl,c._currentValue),c._currentValue=_,f!==null)if(Tn(f.value,_)){if(f.children===d.children&&!Ht.current){r=Tr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var I=f.dependencies;if(I!==null){_=f.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(f.tag===1){P=wr(-1,a&-a),P.tag=2;var U=f.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?P.next=P:(P.next=G.next,G.next=P),U.pending=P}}f.lanes|=a,P=f.alternate,P!==null&&(P.lanes|=a),Xc(f.return,a,r),I.lanes|=a;break}P=P.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Xc(_,a,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Ks(r,a),d=dn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Sn(c,r.pendingProps),d=Sn(c.type,d),Xp(n,r,c,d,a);case 15:return Jp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Sn(c,d),Zl(n,r),r.tag=1,Wt(c)?(n=!0,Ll(r)):n=!1,Ks(r,a),$p(r,c,d),fh(r,c,d,a),yh(null,r,c,!0,n,a);case 19:return om(n,r,a);case 22:return Zp(n,r,a)}throw Error(t(156,r.tag))};function xm(n,r){return Uo(n,r)}function eE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new eE(n,r,a,c)}function Mh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function tE(n){if(typeof n=="function")return Mh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===ft)return 14}return 2}function si(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cu(n,r,a,c,d,f){var _=2;if(c=n,typeof n=="function")Mh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case k:return Zi(a.children,d,f,r);case S:_=8,d|=8;break;case C:return n=mn(12,a,r,d|2),n.elementType=C,n.lanes=f,n;case A:return n=mn(13,a,r,d),n.elementType=A,n.lanes=f,n;case be:return n=mn(19,a,r,d),n.elementType=be,n.lanes=f,n;case Be:return hu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:_=10;break e;case T:_=9;break e;case V:_=11;break e;case ft:_=14;break e;case yt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function Zi(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function hu(n,r,a,c){return n=mn(22,n,c,r),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function Fh(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function Uh(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function nE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function jh(n,r,a,c,d,f,_,I,P){return n=new nE(n,r,a,I,P),r===1?(r=1,f===!0&&(r|=8)):r=0,f=mn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(f),n}function rE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Nm(n){if(!n)return Yr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return sp(n,a,r)}return r}function Dm(n,r,a,c,d,f,_,I,P){return n=jh(a,c,!0,n,d,f,_,I,P),n.context=Nm(null),a=n.current,c=Bt(),d=ri(a),f=wr(c,d),f.callback=r??null,Zr(a,f,d),n.current.lanes=d,Mi(n,d,c),Qt(n,c),n}function du(n,r,a,c){var d=r.current,f=Bt(),_=ri(d);return a=Nm(a),r.context===null?r.context=a:r.pendingContext=a,r=wr(f,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Zr(d,r,_),n!==null&&(Cn(n,d,_,f),$l(n,d,_)),_}function fu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function zh(n,r){Vm(n,r),(n=n.alternate)&&Vm(n,r)}function iE(){return null}var Om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bh(n){this._internalRoot=n}pu.prototype.render=Bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));du(n,r,null,null)},pu.prototype.unmount=Bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Yi(function(){du(null,n,null,null)}),r[gr]=null}};function pu(n){this._internalRoot=n}pu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ko();n={blockedOn:null,target:n,priority:r};for(var a=0;a<en.length&&r!==0&&r<en[a].priority;a++);en.splice(a,0,n),a===0&&Rs(n)}};function $h(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function sE(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var U=fu(_);f.call(U)}}var _=Dm(r,c,n,0,null,!1,!1,"",Lm);return n._reactRootContainer=_,n[gr]=_.current,oa(n.nodeType===8?n.parentNode:n),Yi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=fu(P);I.call(U)}}var P=jh(n,0,!1,null,null,!1,!1,"",Lm);return n._reactRootContainer=P,n[gr]=P.current,oa(n.nodeType===8?n.parentNode:n),Yi(function(){du(r,P,a,c)}),P}function gu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var I=d;d=function(){var P=fu(_);I.call(P)}}du(r,_,n,d)}else _=sE(a,r,n,d,c);return fu(_)}Wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Fe(r.pendingLanes);a!==0&&(Ho(r,a|1),Qt(r,Ge()),(Oe&6)===0&&(Zs=Ge()+500,Xr()))}break;case 13:Yi(function(){var c=Er(n,1);if(c!==null){var d=Bt();Cn(c,n,1,d)}}),zh(n,1)}},Ss=function(n){if(n.tag===13){var r=Er(n,134217728);if(r!==null){var a=Bt();Cn(r,n,134217728,a)}zh(n,134217728)}},Go=function(n){if(n.tag===13){var r=ri(n),a=Er(n,r);if(a!==null){var c=Bt();Cn(a,n,r,c)}zh(n,r)}},Ko=function(){return Ne},Qo=function(n,r){var a=Ne;try{return Ne=n,r()}finally{Ne=a}},or=function(n,r,a){switch(r){case"input":if(Ci(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Vl(c);if(!d)throw Error(t(90));xo(c),Ci(c,d)}}}break;case"textarea":il(n,a);break;case"select":r=a.value,r!=null&&_n(n,!!a.multiple,r,!1)}},al=Oh,ll=Yi;var oE={usingClientEntryPoint:!1,Events:[ua,js,Vl,Mr,Fr,Oh]},Ia={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aE={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ml(n),n===null?null:n.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||iE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Vi=yu.inject(aE),Jt=yu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$h(r))throw Error(t(200));return rE(n,r,null,a)},Yt.createRoot=function(n,r){if(!$h(n))throw Error(t(299));var a=!1,c="",d=Om;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=jh(n,1,!1,null,null,a,!1,c,d),n[gr]=r.current,oa(n.nodeType===8?n.parentNode:n),new Bh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ml(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Yi(n)},Yt.hydrate=function(n,r,a){if(!mu(r))throw Error(t(200));return gu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!$h(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",_=Om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=Dm(r,null,n,1,a??null,d,!1,f,_),n[gr]=r.current,oa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new pu(r)},Yt.render=function(n,r,a){if(!mu(r))throw Error(t(200));return gu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!mu(n))throw Error(t(40));return n._reactRootContainer?(Yi(function(){gu(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Oh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!mu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var $m;function gE(){if($m)return Wh.exports;$m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Wh.exports=mE(),Wh.exports}var qm;function yE(){if(qm)return _u;qm=1;var i=gE();return _u.createRoot=i.createRoot,_u.hydrateRoot=i.hydrateRoot,_u}var _E=yE();const vE=ky(_E);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=wt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>wt.createElement("svg",{ref:y,...wE,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:xy("lucide",o),...m},[...h.map(([v,w])=>wt.createElement(v,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(i,e)=>{const t=wt.forwardRef(({className:s,...o},u)=>wt.createElement(TE,{ref:u,iconNode:e,className:xy(`lucide-${EE(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=qt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=qt("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=qt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=qt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=qt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=qt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=qt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=qt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=qt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=qt("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=qt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=qt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=qt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=qt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=qt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),NE=()=>{};var Ym={};/**
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
 */const Ny=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},DE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Dy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let D=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(D=64)),s.push(t[w],t[R],t[D],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ny(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):DE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const R=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||R==null)throw new VE;const D=u<<2|m>>4;if(s.push(D),v!==64){const z=m<<4&240|v>>2;if(s.push(z),R!==64){const J=v<<6&192|R;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class VE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OE=function(i){const e=Ny(i);return Dy.encodeByteArray(e,!0)},Mu=function(i){return OE(i).replace(/\./g,"")},Vy=function(i){try{return Dy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bE=()=>LE().__FIREBASE_DEFAULTS__,ME=()=>{if(typeof process>"u"||typeof Ym>"u")return;const i=Ym.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},FE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Vy(i[1]);return e&&JSON.parse(e)},nc=()=>{try{return NE()||bE()||ME()||FE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Oy=i=>{var e,t;return(t=(e=nc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},UE=i=>{const e=Oy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ly=()=>{var i;return(i=nc())==null?void 0:i.config},by=i=>{var e;return(e=nc())==null?void 0:e[`_${i}`]};/**
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
 */class jE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function wo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function My(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function zE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Mu(JSON.stringify(t)),Mu(JSON.stringify(h)),""].join(".")}const xa={};function BE(){const i={prod:[],emulator:[]};for(const e of Object.keys(xa))xa[e]?i.emulator.push(e):i.prod.push(e);return i}function $E(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Xm=!1;function Fy(i,e){if(typeof window>"u"||typeof document>"u"||!wo(window.location.host)||xa[i]===e||xa[i]||Xm)return;xa[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=BE().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,z){D.setAttribute("width","24"),D.setAttribute("id",z),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function v(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{Xm=!0,h()},D}function w(D,z){D.setAttribute("id",z),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function R(){const D=$E(s),z=t("text"),J=document.getElementById(z)||document.createElement("span"),Y=t("learnmore"),W=document.getElementById(Y)||document.createElement("a"),ye=t("preprendIcon"),de=document.getElementById(ye)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const ve=D.element;m(ve),w(W,Y);const fe=v();y(de,ye),ve.append(de,J,W,fe),document.body.appendChild(ve)}u?(J.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",R):R()}/**
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
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function HE(){var e;const i=(e=nc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function KE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function YE(){return!HE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const ZE="FirebaseError";class xr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ZE,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ga.prototype.create)}}class Ga{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?ew(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new xr(o,m,s)}}function ew(i,e){return i.replace(tw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const tw=/\{\$([^}]+)}/g;function nw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ns(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Jm(u)&&Jm(h)){if(!ns(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Jm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ka(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Aa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ra(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function rw(i,e){const t=new iw(i,e);return t.subscribe.bind(t)}class iw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");sw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Xh(){}/**
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
 */function $t(i){return i&&i._delegate?i._delegate:i}class rs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class ow{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new jE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lw(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aw(i){return i===es?void 0:i}function lw(i){return i.instantiationMode==="EAGER"}/**
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
 */class uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ow(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const cw={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},hw=Pe.INFO,dw={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},fw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=dw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Md{constructor(e){this.name=e,this._logLevel=hw,this._logHandler=fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const pw=(i,e)=>e.some(t=>i instanceof t);let Zm,eg;function mw(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gw(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uy=new WeakMap,hd=new WeakMap,jy=new WeakMap,Jh=new WeakMap,Fd=new WeakMap;function yw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(fi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Uy.set(t,i)}).catch(()=>{}),Fd.set(e,i),e}function _w(i){if(hd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});hd.set(i,e)}let dd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return hd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||jy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function vw(i){dd=i(dd)}function Ew(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Zh(this),e,...t);return jy.set(s,e.sort?e.sort():[e]),fi(s)}:gw().includes(i)?function(...e){return i.apply(Zh(this),e),fi(Uy.get(this))}:function(...e){return fi(i.apply(Zh(this),e))}}function ww(i){return typeof i=="function"?Ew(i):(i instanceof IDBTransaction&&_w(i),pw(i,mw())?new Proxy(i,dd):i)}function fi(i){if(i instanceof IDBRequest)return yw(i);if(Jh.has(i))return Jh.get(i);const e=ww(i);return e!==i&&(Jh.set(i,e),Fd.set(e,i)),e}const Zh=i=>Fd.get(i);function Tw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=fi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(fi(h.result),y.oldVersion,y.newVersion,fi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Iw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],ed=new Map;function tg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Sw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Iw.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return ed.set(e,u),u}vw(i=>({...i,get:(e,t,s)=>tg(e,t)||i.get(e,t,s),has:(e,t)=>!!tg(e,t)||i.has(e,t)}));/**
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
 */class Aw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fd="@firebase/app",ng="0.14.6";/**
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
 */const Rr=new Md("@firebase/app"),Cw="@firebase/app-compat",Pw="@firebase/analytics-compat",kw="@firebase/analytics",xw="@firebase/app-check-compat",Nw="@firebase/app-check",Dw="@firebase/auth",Vw="@firebase/auth-compat",Ow="@firebase/database",Lw="@firebase/data-connect",bw="@firebase/database-compat",Mw="@firebase/functions",Fw="@firebase/functions-compat",Uw="@firebase/installations",jw="@firebase/installations-compat",zw="@firebase/messaging",Bw="@firebase/messaging-compat",$w="@firebase/performance",qw="@firebase/performance-compat",Hw="@firebase/remote-config",Ww="@firebase/remote-config-compat",Gw="@firebase/storage",Kw="@firebase/storage-compat",Qw="@firebase/firestore",Yw="@firebase/ai",Xw="@firebase/firestore-compat",Jw="firebase",Zw="12.6.0";/**
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
 */const pd="[DEFAULT]",eT={[fd]:"fire-core",[Cw]:"fire-core-compat",[kw]:"fire-analytics",[Pw]:"fire-analytics-compat",[Nw]:"fire-app-check",[xw]:"fire-app-check-compat",[Dw]:"fire-auth",[Vw]:"fire-auth-compat",[Ow]:"fire-rtdb",[Lw]:"fire-data-connect",[bw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Fw]:"fire-fn-compat",[Uw]:"fire-iid",[jw]:"fire-iid-compat",[zw]:"fire-fcm",[Bw]:"fire-fcm-compat",[$w]:"fire-perf",[qw]:"fire-perf-compat",[Hw]:"fire-rc",[Ww]:"fire-rc-compat",[Gw]:"fire-gcs",[Kw]:"fire-gcs-compat",[Qw]:"fire-fst",[Xw]:"fire-fst-compat",[Yw]:"fire-vertex","fire-js":"fire-js",[Jw]:"fire-js-all"};/**
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
 */const Fu=new Map,tT=new Map,md=new Map;function rg(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function fo(i){const e=i.name;if(md.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;md.set(e,i);for(const t of Fu.values())rg(t,i);for(const t of tT.values())rg(t,i);return!0}function Ud(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Pn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const nT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new Ga("app","Firebase",nT);/**
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
 */class rT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const To=Zw;function zy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:pd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=Ly()),!t)throw pi.create("no-options");const u=Fu.get(o);if(u){if(ns(t,u.options)&&ns(s,u.config))return u;throw pi.create("duplicate-app",{appName:o})}const h=new uw(o);for(const y of md.values())h.addComponent(y);const m=new rT(t,s,h);return Fu.set(o,m),m}function By(i=pd){const e=Fu.get(i);if(!e&&i===pd&&Ly())return zy();if(!e)throw pi.create("no-app",{appName:i});return e}function mi(i,e,t){let s=eT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(h.join(" "));return}fo(new rs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iT="firebase-heartbeat-database",sT=1,ba="firebase-heartbeat-store";let td=null;function $y(){return td||(td=Tw(iT,sT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ba)}catch(t){console.warn(t)}}}}).catch(i=>{throw pi.create("idb-open",{originalErrorMessage:i.message})})),td}async function oT(i){try{const t=(await $y()).transaction(ba),s=await t.objectStore(ba).get(qy(i));return await t.done,s}catch(e){if(e instanceof xr)Rr.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function ig(i,e){try{const s=(await $y()).transaction(ba,"readwrite");await s.objectStore(ba).put(e,qy(i)),await s.done}catch(t){if(t instanceof xr)Rr.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function qy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const aT=1024,lT=30;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=sg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>lT){const h=dT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sg(),{heartbeatsToSend:s,unsentEntries:o}=cT(this._heartbeatsCache.heartbeats),u=Mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function sg(){return new Date().toISOString().substring(0,10)}function cT(i,e=aT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),og(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),og(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?JE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ig(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function og(i){return Mu(JSON.stringify({version:2,heartbeats:i})).length}function dT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function fT(i){fo(new rs("platform-logger",e=>new Aw(e),"PRIVATE")),fo(new rs("heartbeat",e=>new uT(e),"PRIVATE")),mi(fd,ng,i),mi(fd,ng,"esm2020"),mi("fire-js","")}fT("");var pT="firebase",mT="12.7.0";/**
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
 */mi(pT,mT,"app");var ag=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,Hy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.F=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(x,T,V){for(var A=Array(arguments.length-2),be=2;be<arguments.length;be++)A[be-2]=arguments[be];return S.prototype[T].apply(x,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);const x=Array(16);if(typeof S=="string")for(var T=0;T<16;++T)x[T]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(T=0;T<16;++T)x[T]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],T=k.g[2];let V=k.g[3],A;A=S+(V^C&(T^V))+x[0]+3614090360&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(T^S&(C^T))+x[1]+3905402710&4294967295,V=S+(A<<12&4294967295|A>>>20),A=T+(C^V&(S^C))+x[2]+606105819&4294967295,T=V+(A<<17&4294967295|A>>>15),A=C+(S^T&(V^S))+x[3]+3250441966&4294967295,C=T+(A<<22&4294967295|A>>>10),A=S+(V^C&(T^V))+x[4]+4118548399&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(T^S&(C^T))+x[5]+1200080426&4294967295,V=S+(A<<12&4294967295|A>>>20),A=T+(C^V&(S^C))+x[6]+2821735955&4294967295,T=V+(A<<17&4294967295|A>>>15),A=C+(S^T&(V^S))+x[7]+4249261313&4294967295,C=T+(A<<22&4294967295|A>>>10),A=S+(V^C&(T^V))+x[8]+1770035416&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(T^S&(C^T))+x[9]+2336552879&4294967295,V=S+(A<<12&4294967295|A>>>20),A=T+(C^V&(S^C))+x[10]+4294925233&4294967295,T=V+(A<<17&4294967295|A>>>15),A=C+(S^T&(V^S))+x[11]+2304563134&4294967295,C=T+(A<<22&4294967295|A>>>10),A=S+(V^C&(T^V))+x[12]+1804603682&4294967295,S=C+(A<<7&4294967295|A>>>25),A=V+(T^S&(C^T))+x[13]+4254626195&4294967295,V=S+(A<<12&4294967295|A>>>20),A=T+(C^V&(S^C))+x[14]+2792965006&4294967295,T=V+(A<<17&4294967295|A>>>15),A=C+(S^T&(V^S))+x[15]+1236535329&4294967295,C=T+(A<<22&4294967295|A>>>10),A=S+(T^V&(C^T))+x[1]+4129170786&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^T&(S^C))+x[6]+3225465664&4294967295,V=S+(A<<9&4294967295|A>>>23),A=T+(S^C&(V^S))+x[11]+643717713&4294967295,T=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(T^V))+x[0]+3921069994&4294967295,C=T+(A<<20&4294967295|A>>>12),A=S+(T^V&(C^T))+x[5]+3593408605&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^T&(S^C))+x[10]+38016083&4294967295,V=S+(A<<9&4294967295|A>>>23),A=T+(S^C&(V^S))+x[15]+3634488961&4294967295,T=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(T^V))+x[4]+3889429448&4294967295,C=T+(A<<20&4294967295|A>>>12),A=S+(T^V&(C^T))+x[9]+568446438&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^T&(S^C))+x[14]+3275163606&4294967295,V=S+(A<<9&4294967295|A>>>23),A=T+(S^C&(V^S))+x[3]+4107603335&4294967295,T=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(T^V))+x[8]+1163531501&4294967295,C=T+(A<<20&4294967295|A>>>12),A=S+(T^V&(C^T))+x[13]+2850285829&4294967295,S=C+(A<<5&4294967295|A>>>27),A=V+(C^T&(S^C))+x[2]+4243563512&4294967295,V=S+(A<<9&4294967295|A>>>23),A=T+(S^C&(V^S))+x[7]+1735328473&4294967295,T=V+(A<<14&4294967295|A>>>18),A=C+(V^S&(T^V))+x[12]+2368359562&4294967295,C=T+(A<<20&4294967295|A>>>12),A=S+(C^T^V)+x[5]+4294588738&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^T)+x[8]+2272392833&4294967295,V=S+(A<<11&4294967295|A>>>21),A=T+(V^S^C)+x[11]+1839030562&4294967295,T=V+(A<<16&4294967295|A>>>16),A=C+(T^V^S)+x[14]+4259657740&4294967295,C=T+(A<<23&4294967295|A>>>9),A=S+(C^T^V)+x[1]+2763975236&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^T)+x[4]+1272893353&4294967295,V=S+(A<<11&4294967295|A>>>21),A=T+(V^S^C)+x[7]+4139469664&4294967295,T=V+(A<<16&4294967295|A>>>16),A=C+(T^V^S)+x[10]+3200236656&4294967295,C=T+(A<<23&4294967295|A>>>9),A=S+(C^T^V)+x[13]+681279174&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^T)+x[0]+3936430074&4294967295,V=S+(A<<11&4294967295|A>>>21),A=T+(V^S^C)+x[3]+3572445317&4294967295,T=V+(A<<16&4294967295|A>>>16),A=C+(T^V^S)+x[6]+76029189&4294967295,C=T+(A<<23&4294967295|A>>>9),A=S+(C^T^V)+x[9]+3654602809&4294967295,S=C+(A<<4&4294967295|A>>>28),A=V+(S^C^T)+x[12]+3873151461&4294967295,V=S+(A<<11&4294967295|A>>>21),A=T+(V^S^C)+x[15]+530742520&4294967295,T=V+(A<<16&4294967295|A>>>16),A=C+(T^V^S)+x[2]+3299628645&4294967295,C=T+(A<<23&4294967295|A>>>9),A=S+(T^(C|~V))+x[0]+4096336452&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~T))+x[7]+1126891415&4294967295,V=S+(A<<10&4294967295|A>>>22),A=T+(S^(V|~C))+x[14]+2878612391&4294967295,T=V+(A<<15&4294967295|A>>>17),A=C+(V^(T|~S))+x[5]+4237533241&4294967295,C=T+(A<<21&4294967295|A>>>11),A=S+(T^(C|~V))+x[12]+1700485571&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~T))+x[3]+2399980690&4294967295,V=S+(A<<10&4294967295|A>>>22),A=T+(S^(V|~C))+x[10]+4293915773&4294967295,T=V+(A<<15&4294967295|A>>>17),A=C+(V^(T|~S))+x[1]+2240044497&4294967295,C=T+(A<<21&4294967295|A>>>11),A=S+(T^(C|~V))+x[8]+1873313359&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~T))+x[15]+4264355552&4294967295,V=S+(A<<10&4294967295|A>>>22),A=T+(S^(V|~C))+x[6]+2734768916&4294967295,T=V+(A<<15&4294967295|A>>>17),A=C+(V^(T|~S))+x[13]+1309151649&4294967295,C=T+(A<<21&4294967295|A>>>11),A=S+(T^(C|~V))+x[4]+4149444226&4294967295,S=C+(A<<6&4294967295|A>>>26),A=V+(C^(S|~T))+x[11]+3174756917&4294967295,V=S+(A<<10&4294967295|A>>>22),A=T+(S^(V|~C))+x[2]+718787259&4294967295,T=V+(A<<15&4294967295|A>>>17),A=C+(V^(T|~S))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(T+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+T&4294967295,k.g[3]=k.g[3]+V&4294967295}s.prototype.v=function(k,S){S===void 0&&(S=k.length);const C=S-this.blockSize,x=this.C;let T=this.h,V=0;for(;V<S;){if(T==0)for(;V<=C;)o(this,k,V),V+=this.blockSize;if(typeof k=="string"){for(;V<S;)if(x[T++]=k.charCodeAt(V++),T==this.blockSize){o(this,x),T=0;break}}else for(;V<S;)if(x[T++]=k[V++],T==this.blockSize){o(this,x),T=0;break}}this.h=T,this.o+=S},s.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,C=0;C<4;++C)for(let x=0;x<32;x+=8)k[S++]=this.g[C]>>>x&255;return k};function u(k,S){var C=m;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function h(k,S){this.h=S;const C=[];let x=!0;for(let T=k.length-1;T>=0;T--){const V=k[T]|0;x&&V==S||(C[T]=V,x=!1)}this.g=C}var m={};function y(k){return-128<=k&&k<128?u(k,function(S){return new h([S|0],S<0?-1:0)}):new h([k|0],k<0?-1:0)}function v(k){if(isNaN(k)||!isFinite(k))return R;if(k<0)return W(v(-k));const S=[];let C=1;for(let x=0;k>=C;x++)S[x]=k/C|0,C*=4294967296;return new h(S,0)}function w(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return W(w(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=v(Math.pow(S,8));let x=R;for(let V=0;V<k.length;V+=8){var T=Math.min(8,k.length-V);const A=parseInt(k.substring(V,V+T),S);T<8?(T=v(Math.pow(S,T)),x=x.j(T).add(v(A))):(x=x.j(C),x=x.add(v(A)))}return x}var R=y(0),D=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-W(this).m();let k=0,S=1;for(let C=0;C<this.g.length;C++){const x=this.i(C);k+=(x>=0?x:4294967296+x)*S,S*=4294967296}return k},i.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(J(this))return"0";if(Y(this))return"-"+W(this).toString(k);const S=v(Math.pow(k,6));var C=this;let x="";for(;;){const T=fe(C,S).g;C=ye(C,T.j(S));let V=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=T,J(C))return V+x;for(;V.length<6;)V="0"+V;x=V+x}},i.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function J(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function Y(k){return k.h==-1}i.l=function(k){return k=ye(this,k),Y(k)?-1:J(k)?0:1};function W(k){const S=k.g.length,C=[];for(let x=0;x<S;x++)C[x]=~k.g[x];return new h(C,~k.h).add(D)}i.abs=function(){return Y(this)?W(this):this},i.add=function(k){const S=Math.max(this.g.length,k.g.length),C=[];let x=0;for(let T=0;T<=S;T++){let V=x+(this.i(T)&65535)+(k.i(T)&65535),A=(V>>>16)+(this.i(T)>>>16)+(k.i(T)>>>16);x=A>>>16,V&=65535,A&=65535,C[T]=A<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function ye(k,S){return k.add(W(S))}i.j=function(k){if(J(this)||J(k))return R;if(Y(this))return Y(k)?W(this).j(W(k)):W(W(this).j(k));if(Y(k))return W(this.j(W(k)));if(this.l(z)<0&&k.l(z)<0)return v(this.m()*k.m());const S=this.g.length+k.g.length,C=[];for(var x=0;x<2*S;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(let T=0;T<k.g.length;T++){const V=this.i(x)>>>16,A=this.i(x)&65535,be=k.i(T)>>>16,ft=k.i(T)&65535;C[2*x+2*T]+=A*ft,de(C,2*x+2*T),C[2*x+2*T+1]+=V*ft,de(C,2*x+2*T+1),C[2*x+2*T+1]+=A*be,de(C,2*x+2*T+1),C[2*x+2*T+2]+=V*be,de(C,2*x+2*T+2)}for(k=0;k<S;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=S;k<2*S;k++)C[k]=0;return new h(C,0)};function de(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function ve(k,S){this.g=k,this.h=S}function fe(k,S){if(J(S))throw Error("division by zero");if(J(k))return new ve(R,R);if(Y(k))return S=fe(W(k),S),new ve(W(S.g),W(S.h));if(Y(S))return S=fe(k,W(S)),new ve(W(S.g),S.h);if(k.g.length>30){if(Y(k)||Y(S))throw Error("slowDivide_ only works with positive integers.");for(var C=D,x=S;x.l(k)<=0;)C=Le(C),x=Le(x);var T=Ae(C,1),V=Ae(x,1);for(x=Ae(x,2),C=Ae(C,2);!J(x);){var A=V.add(x);A.l(k)<=0&&(T=T.add(C),V=A),x=Ae(x,1),C=Ae(C,1)}return S=ye(k,T.j(S)),new ve(T,S)}for(T=R;k.l(S)>=0;){for(C=Math.max(1,Math.floor(k.m()/S.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),V=v(C),A=V.j(S);Y(A)||A.l(k)>0;)C-=x,V=v(C),A=V.j(S);J(V)&&(V=D),T=T.add(V),k=ye(k,A)}return new ve(T,k)}i.B=function(k){return fe(this,k).h},i.and=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<S;x++)C[x]=this.i(x)&k.i(x);return new h(C,this.h&k.h)},i.or=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<S;x++)C[x]=this.i(x)|k.i(x);return new h(C,this.h|k.h)},i.xor=function(k){const S=Math.max(this.g.length,k.g.length),C=[];for(let x=0;x<S;x++)C[x]=this.i(x)^k.i(x);return new h(C,this.h^k.h)};function Le(k){const S=k.g.length+1,C=[];for(let x=0;x<S;x++)C[x]=k.i(x)<<1|k.i(x-1)>>>31;return new h(C,k.h)}function Ae(k,S){const C=S>>5;S%=32;const x=k.g.length-C,T=[];for(let V=0;V<x;V++)T[V]=S>0?k.i(V+C)>>>S|k.i(V+C+1)<<32-S:k.i(V+C);return new h(T,k.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Hy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,gi=h}).apply(typeof ag<"u"?ag:typeof self<"u"?self:typeof window<"u"?window:{});var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wy,Ca,Gy,Cu,gd,Ky,Qy,Yy;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof vu=="object"&&vu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function w(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function R(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,j){for(var X=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)X[Ee-2]=arguments[Ee];return p.prototype[M].apply(E,X)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function J(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const j=M.length||0;l.length=g+j;for(let X=0;X<j;X++)l[g+X]=M[X]}else l.push(M)}}class Y{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function W(l){h.setTimeout(()=>{throw l},0)}function ye(){var l=k;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class de{constructor(){this.h=this.g=null}add(p,g){const E=ve.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new Y(()=>new fe,l=>l.reset());class fe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Ae=!1,k=new de,S=()=>{const l=Promise.resolve(void 0);Le=()=>{l.then(C)}};function C(){for(var l;l=ye();){try{l.h.call(l.g)}catch(g){W(g)}var p=ve;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ae=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function be(l,p){T.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}R(be,T),be.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&be.Z.h.call(this)},be.prototype.h=function(){be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),yt=0;function Be(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++yt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function re(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function L(l){const p={};for(const g in l)p[g]=l[g];return p}const q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let j=0;j<q.length;j++)g=q[j],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,p,g,E,M){const j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);const X=Ce(l,p,E,M);return X>-1?(p=l[X],g||(p.fa=!1)):(p=new Be(p,this.src,j,!!E,M),p.fa=g,l.push(p)),p};function Re(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),j;(j=M>=0)&&Array.prototype.splice.call(E,M,1),j&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Ce(l,p,g,E){for(let M=0;M<l.length;++M){const j=l[M];if(!j.da&&j.listener==p&&j.capture==!!g&&j.ha==E)return M}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Ve={};function $e(l,p,g,E,M){if(Array.isArray(p)){for(let j=0;j<p.length;j++)$e(l,p[j],g,E,M);return null}return g=No(g),l&&l[ft]?l.J(p,g,m(E)?!!E.capture:!1,M):jt(l,p,g,!1,E,M)}function jt(l,p,g,E,M,j){if(!p)throw Error("Invalid event type");const X=m(M)?!!M.capture:!!M;let Ee=ms(l);if(Ee||(l[Ue]=Ee=new Ie(l)),g=Ee.add(p,g,E,X,j),g.proxy)return g;if(E=fs(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)V||(M=X),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ps(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function fs(){function l(g){return p.call(l.src,l.listener,g)}const p=rl;return l}function xo(l,p,g,E,M){if(Array.isArray(p))for(var j=0;j<p.length;j++)xo(l,p[j],g,E,M);else E=m(E)?!!E.capture:!!E,g=No(g),l&&l[ft]?(l=l.i,j=String(p).toString(),j in l.g&&(p=l.g[j],g=Ce(p,g,E,M),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[j],l.h--)))):l&&(l=ms(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ce(p,g,E,M)),(g=l>-1?p[l]:null)&&Nr(g))}function Nr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[ft])Re(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(ps(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=ms(p))?(Re(g,l),g.h==0&&(g.src=null,p[Ue]=null)):Z(l)}}}function ps(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function rl(l,p){if(l.da)l=!0;else{p=new be(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Nr(l),l=g.call(E,p)}return l}function ms(l){return l=l[Ue],l instanceof Ie?l:null}var Ci="__closure_events_fn_"+(Math.random()*1e9>>>0);function No(l){return typeof l=="function"?l:(l[Ci]||(l[Ci]=function(p){return l.handleEvent(p)}),l[Ci])}function at(){x.call(this),this.i=new Ie(this),this.M=this,this.G=null}R(at,x),at.prototype[ft]=!0,at.prototype.removeEventListener=function(l,p,g,E){xo(this,l,p,g,E)};function rt(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new T(p,l);else if(p instanceof T)p.target=p.target||l;else{var M=p;p=new T(E,l),Te(p,M)}M=!0;let j,X;if(g)for(X=g.length-1;X>=0;X--)j=p.g=g[X],M=_n(j,E,!0,p)&&M;if(j=p.g=l,M=_n(j,E,!0,p)&&M,M=_n(j,E,!1,p)&&M,g)for(X=0;X<g.length;X++)j=p.g=g[X],M=_n(j,E,!1,p)&&M}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)Z(g[E]);delete l.g[p],l.h--}}this.G=null},at.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},at.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function _n(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let j=0;j<p.length;++j){const X=p[j];if(X&&!X.da&&X.capture==g){const Ee=X.listener,it=X.ha||X.src;X.fa&&Re(l.i,X),M=Ee.call(it,E)!==!1&&M}}return M&&!E.defaultPrevented}function Do(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Vo(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class il extends x{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Vo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(l){x.call(this),this.h=l,this.g={}}R(Dr,x);var Oo=[];function gs(l){ue(l.g,function(p,g){this.g.hasOwnProperty(g)&&Nr(p)},l),l.g={}}Dr.prototype.N=function(){Dr.Z.N.call(this),gs(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=h.JSON.stringify,sl=h.JSON.parse,Pi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Or(){}function ol(){}var Lr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ys(){T.call(this,"d")}R(ys,T);function Lo(){T.call(this,"c")}R(Lo,T);var vn={},_s=null;function br(){return _s=_s||new at}vn.Ia="serverreachability";function vs(l){T.call(this,vn.Ia,l)}R(vs,T);function or(l){const p=br();rt(p,new vs(p))}vn.STAT_EVENT="statevent";function ar(l,p){T.call(this,vn.STAT_EVENT,l),this.stat=p}R(ar,T);function tt(l){const p=br();rt(p,new ar(p,l))}vn.Ja="timingevent";function bo(l,p){T.call(this,vn.Ja,l),this.size=p}R(bo,T);function Mr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Fr(){this.g=!0}Fr.prototype.ua=function(){this.g=!1};function al(l,p,g,E,M,j){l.info(function(){if(l.g)if(j){var X="",Ee=j.split("&");for(let ze=0;ze<Ee.length;ze++){var it=Ee[ze].split("=");if(it.length>1){const lt=it[0];it=it[1];const rn=lt.split("_");X=rn.length>=2&&rn[1]=="type"?X+(lt+"="+it+"&"):X+(lt+"=redacted&")}}}else X=null;else X=j;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+X})}function ll(l,p,g,E,M,j,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+j+" "+X})}function Vn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+ki(l,g)+(E?" "+E:"")})}function ul(l,p){l.info(function(){return"TIMEOUT: "+p})}Fr.prototype.info=function(){};function ki(l,p){if(!l.g)return p;if(!p)return null;try{const j=JSON.parse(p);if(j){for(l=0;l<j.length;l++)if(Array.isArray(j[l])){var g=j[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let X=1;X<E.length;X++)E[X]=""}}}}return Vr(j)}catch{return p}}var Ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},cl;function lr(){}R(lr,Or),lr.prototype.g=function(){return new XMLHttpRequest},cl=new lr;function On(l){return encodeURIComponent(String(l))}function Es(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function ln(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Dr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hl}function hl(){this.i=null,this.g="",this.h=!1}var dl={},Mo={};function En(l,p,g){l.M=1,l.A=cr(un(p)),l.u=g,l.R=!0,Fo(l,null)}function Fo(l,p){l.F=Date.now(),xi(l),l.B=un(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Ko(g.i,"t",E),l.C=0,g=l.j.L,l.h=new hl,l.g=Tl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new il(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Oo[0]=M.toString()),M=Oo);for(let j=0;j<M.length;j++){const X=$e(g,M[j],E||p.handleEvent,!1,p.h||p);if(!X)break;p.g[X.key]=X}p=l.J?L(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),or(),al(l.i,l.v,l.B,l.l,l.S,l.u)}ln.prototype.ba=function(l){l=l.target;const p=this.O;p&&zn(l)==3?p.j():this.Y(l)},ln.prototype.Y=function(l){try{if(l==this.g)e:{const Ee=zn(this.g),it=this.g.ya(),ze=this.g.ca();if(!(Ee<3)&&(Ee!=3||this.g&&(this.h.h||this.g.la()||El(this.g)))){this.K||Ee!=4||it==7||(it==8||ze<=0?or(3):or(2)),ws(this);var p=this.g.ca();this.X=p;var g=fl(this);if(this.o=p==200,ll(this.i,this.v,this.B,this.l,this.S,Ee,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(E)){var j=E;break t}}j=null}if(l=j)Vn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,tt(12),ur(this),Ni(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=ml(this,g),lt==Mo){Ee==4&&(this.m=4,tt(14),l=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==dl){this.m=4,tt(15),Vn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Vn(this.i,this.l,lt,null),Ge(this,lt);if(pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||g.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)Vn(this.i,this.l,g,"[Invalid Chunked Response]"),ur(this),Ni(this);else if(g.length>0&&!this.W){this.W=!0;var X=this.j;X.g==this&&X.aa&&!X.P&&(X.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),ji(X),X.P=!0,tt(11))}}else Vn(this.i,this.l,g,null),Ge(this,g);Ee==4&&ur(this),this.o&&!this.K&&(Ee==4?Ns(this.j,this):(this.o=!1,xi(this)))}else Yo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),ur(this),Ni(this)}}}catch{}finally{}};function fl(l){if(!pl(l))return l.g.la();const p=El(l.g);if(p==="")return"";let g="";const E=p.length,M=zn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return ur(l),Ni(l),"";l.h.i=new h.TextDecoder}for(let j=0;j<E;j++)l.h.h=!0,g+=l.h.i.decode(p[j],{stream:!(M&&j==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function pl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ml(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?Mo:(g=Number(p.substring(g,E)),isNaN(g)?dl:(E+=1,E+g>p.length?Mo:(p=p.slice(E,E+g),l.C=E+g,p)))}ln.prototype.cancel=function(){this.K=!0,ur(this)};function xi(l){l.T=Date.now()+l.H,Uo(l,l.H)}function Uo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Mr(v(l.aa,l),p)}function ws(l){l.D&&(h.clearTimeout(l.D),l.D=null)}ln.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(ul(this.i,this.B),this.M!=2&&(or(),tt(17)),ur(this),this.m=2,Ni(this)):Uo(this,this.T-l)};function Ni(l){l.j.I==0||l.K||Ns(l.j,l)}function ur(l){ws(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,gs(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||zo(g.h,l))){if(!l.L&&zo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)xs(g),tn(g);else break e;qn(g),tt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Mr(v(g.Va,g),6e3));Di(g.h)<=1&&g.ta&&(g.ta=void 0)}else nn(g,11)}else if((l.L||g.g==l)&&xs(g),!A(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let ze=M[p];const lt=ze[0];if(!(lt<=g.K))if(g.K=lt,ze=ze[1],g.I==2)if(ze[0]=="c"){g.M=ze[1],g.ba=ze[2];const rn=ze[3];rn!=null&&(g.ka=rn,g.j.info("VER="+g.ka));const mr=ze[4];mr!=null&&(g.za=mr,g.j.info("SVER="+g.za));const Hn=ze[5];Hn!=null&&typeof Hn=="number"&&Hn>0&&(E=1.5*Hn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Wn=l.g;if(Wn){const Os=Wn.g?Wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var j=E.h;j.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Is(j,j.h),j.h=null))}if(E.G){const Zo=Wn.g?Wn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zo&&(E.wa=Zo,Fe(E.J,E.G,Zo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var X=l;if(E.na=Jo(E,E.L?E.ba:null,E.W),X.L){Vi(E.h,X);var Ee=X,it=E.O;it&&(Ee.H=it),Ee.D&&(ws(Ee),xi(Ee)),E.g=X}else Nt(E);g.i.length>0&&pr(g)}else ze[0]!="stop"&&ze[0]!="close"||nn(g,7);else g.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?nn(g,7):Ps(g):ze[0]!="noop"&&g.l&&g.l.qa(ze),g.A=0)}}or(4)}catch{}}var wc=class{constructor(l,p){this.g=l,this.map=p}};function Ts(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function jo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Di(l){return l.h?1:l.g?l.g.size:0}function zo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Is(l,p){l.g?l.g.add(p):l.h=p}function Vi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ts.prototype.cancel=function(){if(this.i=Jt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zt(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,j=null;E>=0?(M=l[g].substring(0,E),j=l[g].substring(E+1)):M=l[g],p(M,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Ln?(this.l=l.l,Oi(this,l.j),this.o=l.o,this.g=l.g,bn(this,l.u),this.h=l.h,zr(this,Qo(l.i)),this.m=l.m):l&&(p=String(l).match(gl))?(this.l=!1,Oi(this,p[1]||"",!0),this.o=Li(p[2]||""),this.g=Li(p[3]||"",!0),bn(this,p[4]),this.h=Li(p[5]||"",!0),zr(this,p[6]||"",!0),this.m=Li(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}Ln.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(bi(p,$o,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(bi(p,$o,!0),"@"),l.push(On(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(bi(g,g.charAt(0)=="/"?Mi:qo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",bi(g,Ho)),l.join("")},Ln.prototype.resolve=function(l){const p=un(this);let g=!!l.j;g?Oi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)bn(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const j=[];for(let X=0;X<M.length;){const Ee=M[X++];Ee=="."?E&&X==M.length&&j.push(""):Ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),E&&X==M.length&&j.push("")):(j.push(Ee),E=!0)}E=j.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?zr(p,Qo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function un(l){return new Ln(l)}function Oi(l,p,g){l.j=g?Li(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function bn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function zr(l,p,g){p instanceof Ne?(l.i=p,As(l.i,l.l)):(g||(p=bi(p,Tc)),l.i=new Ne(p,l.l))}function Fe(l,p,g){l.i.set(p,g)}function cr(l){return Fe(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Li(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function bi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Bo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Bo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $o=/[#\/\?@]/g,qo=/[#\?:]/g,Mi=/[#\?]/g,Tc=/[#\?@]/g,Ho=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&Zt(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Ne.prototype,i.add=function(l,p){Mn(this),this.i=null,l=Fn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Wo(l,p){Mn(l),p=Fn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Ss(l,p){return Mn(l),p=Fn(l,p),l.g.has(p)}i.forEach=function(l,p){Mn(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function Go(l,p){Mn(l);let g=[];if(typeof p=="string")Ss(l,p)&&(g=g.concat(l.g.get(Fn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Mn(this),this.i=null,l=Fn(this,l),Ss(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Go(this,l),l.length>0?String(l[0]):p):p};function Ko(l,p,g){Wo(l,p),g.length>0&&(l.i=null,l.g.set(Fn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=On(g);g=Go(this,g);for(let j=0;j<g.length;j++){let X=M;g[j]!==""&&(X+="="+On(g[j])),l.push(X)}}return this.i=l.join("&")};function Qo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Fn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function As(l,p){p&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&(Wo(this,E),Ko(this,M,g))},l)),l.j=p}function Un(l,p){const g=new Fr;if(h.Image){const E=new Image;E.onload=w(St,g,"TestLoadImage: loaded",!0,p,E),E.onerror=w(St,g,"TestLoadImage: error",!1,p,E),E.onabort=w(St,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=w(St,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function jn(l,p){const g=new Fr,E=new AbortController,M=setTimeout(()=>{E.abort(),St(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(j=>{clearTimeout(M),j.ok?St(g,"TestPingServer: ok",!0,p):St(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),St(g,"TestPingServer: error",!1,p)})}function St(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function Fi(){this.g=new Pi}function hr(l){this.i=l.Sb||null,this.h=l.ab||!1}R(hr,Or),hr.prototype.g=function(){return new en(this.i,this.h)};function en(l,p){at.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}R(en,at),i=en.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,wn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function yl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Br(this):wn(this),this.readyState==3&&yl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Br(this))},i.Na=function(l){this.g&&(this.response=l,Br(this))},i.ga=function(){this.g&&Br(this)};function Br(l){l.readyState=4,l.l=null,l.j=null,l.B=null,wn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function wn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(en.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function _l(l){let p="";return ue(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Rs(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=_l(g),typeof l=="string"?g!=null&&On(g):Fe(l,p,g))}function qe(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}R(qe,at);var vl=/^https?$/i,Ic=["POST","PUT"];i=qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():cl.g(),this.g.onreadystatechange=D(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(j){$r(this,j);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())g.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Ic,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of g)this.g.setRequestHeader(j,X);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(j){$r(this,j)}};function $r(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,qr(l),fr(l)}function qr(l){l.A||(l.A=!0,rt(l,"complete"),rt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,rt(this,"complete"),rt(this,"abort"),fr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?dr(this):this.Xa())},i.Xa=function(){dr(this)};function dr(l){if(l.h&&typeof u<"u"){if(l.v&&zn(l)==4)setTimeout(l.Ca.bind(l),0);else if(rt(l,"readystatechange"),zn(l)==4){l.h=!1;try{const j=l.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=j===0){let X=String(l.D).match(gl)[1]||null;!X&&h.self&&h.self.location&&(X=h.self.location.protocol.slice(0,-1)),E=!vl.test(X?X.toLowerCase():"")}g=E}if(g)rt(l,"complete"),rt(l,"success");else{l.o=6;try{var M=zn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",qr(l)}}finally{fr(l)}}}}function fr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||rt(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function zn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),sl(p)}};function El(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Yo(l){const p={};l=(l.g&&zn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(A(l[E]))continue;var g=Es(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=p[M]||[];p[M]=j,j.push(g)}re(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Cs(l){this.za=0,this.i=[],this.j=new Fr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bn("baseRetryDelayMs",5e3,l),this.Za=Bn("retryDelaySeedMs",1e4,l),this.Ta=Bn("forwardChannelMaxRetries",2,l),this.va=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ts(l&&l.concurrentRequestLimit),this.Ba=new Fi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Cs.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){tt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Jo(this,null,this.W),pr(this)};function Ps(l){if(ks(l),l.I==3){var p=l.V++,g=un(l.J);if(Fe(g,"SID",l.M),Fe(g,"RID",p),Fe(g,"TYPE","terminate"),$n(l,g),p=new ln(l,l.j,p),p.M=2,p.A=cr(un(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Tl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),xi(p)}zi(l)}function tn(l){l.g&&(ji(l),l.g.cancel(),l.g=null)}function ks(l){tn(l),l.v&&(h.clearTimeout(l.v),l.v=null),xs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function pr(l){if(!jo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Le||S(),Ae||(Le(),Ae=!0),k.add(p,l),l.D=0}}function wl(l,p){return Di(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Mr(v(l.Ea,l,p),Ds(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new ln(this,this.j,l);let j=this.o;if(this.U&&(j?(j=L(j),Te(j,this.U)):j=this.U),this.u!==null||this.R||(M.J=j,j=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Xo(this,M,p),g=un(this.J),Fe(g,"RID",l),Fe(g,"CVER",22),this.G&&Fe(g,"X-HTTP-Session-Id",this.G),$n(this,g),j&&(this.R?p="headers="+On(_l(j))+"&"+p:this.u&&Rs(g,this.u,j)),Is(this.h,M),this.Ra&&Fe(g,"TYPE","init"),this.S?(Fe(g,"$req",p),Fe(g,"SID","null"),M.U=!0,En(M,g,null)):En(M,g,p),this.I=2}}else this.I==3&&(l?Ui(this,l):this.i.length==0||jo(this.h)||Ui(this))};function Ui(l,p){var g;p?g=p.l:g=l.V++;const E=un(l.J);Fe(E,"SID",l.M),Fe(E,"RID",g),Fe(E,"AID",l.K),$n(l,E),l.u&&l.o&&Rs(E,l.u,l.o),g=new ln(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Xo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Is(l.h,g),En(g,E,p)}function $n(l,p){l.H&&ue(l.H,function(g,E){Fe(p,E,g)}),l.l&&ue({},function(g,E){Fe(p,E,g)})}function Xo(l,p,g){g=Math.min(l.i.length,g);const E=l.l?v(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ee=-1;for(;;){const it=["count="+g];Ee==-1?g>0?(Ee=M[0].g,it.push("ofs="+Ee)):Ee=0:it.push("ofs="+Ee);let ze=!0;for(let lt=0;lt<g;lt++){var j=M[lt].g;const rn=M[lt].map;if(j-=Ee,j<0)Ee=Math.max(0,M[lt].g-100),ze=!1;else try{j="req"+j+"_"||"";try{var X=rn instanceof Map?rn:Object.entries(rn);for(const[mr,Hn]of X){let Wn=Hn;m(Hn)&&(Wn=Vr(Hn)),it.push(j+mr+"="+encodeURIComponent(Wn))}}catch(mr){throw it.push(j+"type="+encodeURIComponent("_badmap")),mr}}catch{E&&E(rn)}}if(ze){X=it.join("&");break e}}X=void 0}return l=l.i.splice(0,g),p.G=l,X}function Nt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Le||S(),Ae||(Le(),Ae=!0),k.add(p,l),l.A=0}}function qn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Mr(v(l.Da,l),Ds(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Hr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Mr(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),tn(this),Hr(this))};function ji(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Hr(l){l.g=new ln(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=un(l.na);Fe(p,"RID","rpc"),Fe(p,"SID",l.M),Fe(p,"AID",l.K),Fe(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Fe(p,"TO",l.ia),Fe(p,"TYPE","xmlhttp"),$n(l,p),l.u&&l.o&&Rs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=cr(un(p)),g.u=null,g.R=!0,Fo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,tn(this),qn(this),tt(19))};function xs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ns(l,p){var g=null;if(l.g==p){xs(l),ji(l),l.g=null;var E=2}else if(zo(l.h,p))g=p.G,Vi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=br(),rt(E,new bo(E,g)),pr(l)}else Nt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&wl(l,p)||E==2&&qn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:nn(l,5);break;case 4:nn(l,10);break;case 3:nn(l,6);break;default:nn(l,2)}}}function Ds(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function nn(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),E=l.Ua;const M=!E;E=new Ln(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Oi(E,"https"),cr(E),M?Un(E.toString(),g):jn(E.toString(),g)}else tt(2);l.I=0,l.l&&l.l.pa(p),zi(l),ks(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function zi(l){if(l.I=0,l.ja=[],l.l){const p=Jt(l.h);(p.length!=0||l.i.length!=0)&&(J(l.ja,p),J(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Jo(l,p,g){var E=g instanceof Ln?un(g):new Ln(g);if(E.g!="")p&&(E.g=p+"."+E.g),bn(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const j=new Ln(null);E&&Oi(j,E),p&&(j.g=p),M&&bn(j,M),g&&(j.h=g),E=j}return g=l.G,p=l.wa,g&&p&&Fe(E,g,p),Fe(E,"VER",l.ka),$n(l,E),E}function Tl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new hr({ab:g})):new qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}i=Il.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Vs(){}Vs.prototype.g=function(l,p){return new At(l,p)};function At(l,p){at.call(this),this.g=new Cs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Wr(this)}R(At,at),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ps(this.g)},At.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Vr(l),l=g);p.i.push(new wc(p.Ya++,l)),p.I==3&&pr(p)},At.prototype.N=function(){this.g.l=null,delete this.j,Ps(this.g),delete this.g,At.Z.N.call(this)};function Sl(l){ys.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}R(Sl,ys);function Al(){Lo.call(this),this.status=1}R(Al,Lo);function Wr(l){this.g=l}R(Wr,Il),Wr.prototype.ra=function(){rt(this.g,"a")},Wr.prototype.qa=function(l){rt(this.g,new Sl(l))},Wr.prototype.pa=function(l){rt(this.g,new Al)},Wr.prototype.oa=function(){rt(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Yy=function(){return new Vs},Qy=function(){return br()},Ky=vn,gd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,Cu=Ur,jr.COMPLETE="complete",Gy=jr,ol.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",at.prototype.listen=at.prototype.J,Ca=ol,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,Wy=qe}).apply(typeof vu<"u"?vu:typeof self<"u"?self:typeof window<"u"?window:{});const lg="@firebase/firestore",ug="4.9.3";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Io="12.7.0";/**
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
 */const is=new Md("@firebase/firestore");function to(){return is.logLevel}function ne(i,...e){if(is.logLevel<=Pe.DEBUG){const t=e.map(jd);is.debug(`Firestore (${Io}): ${i}`,...t)}}function Cr(i,...e){if(is.logLevel<=Pe.ERROR){const t=e.map(jd);is.error(`Firestore (${Io}): ${i}`,...t)}}function po(i,...e){if(is.logLevel<=Pe.WARN){const t=e.map(jd);is.warn(`Firestore (${Io}): ${i}`,...t)}}function jd(i){if(typeof i=="string")return i;try{/**
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
 */function me(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Xy(i,s,t)}function Xy(i,e,t){let s=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Cr(s),new Error(s)}function je(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Xy(e,o,s)}function we(i,e){return i}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends xr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Mt.UNAUTHENTICATED)))}shutdown(){}}class yT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _T{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new yi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new yi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new yi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(je(typeof s.accessToken=="string",31837,{l:s}),new Jy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class vT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ET{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new vT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){je(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(je(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new cg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class zd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=TT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function yd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return nd(o)===nd(u)?ke(o,u):nd(o)?1:-1}return ke(i.length,e.length)}const IT=55296,ST=57343;function nd(i){const e=i.charCodeAt(0);return e>=IT&&e<=ST}function mo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const hg="__name__";class Xn{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&me(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Xn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ke(e.length,t.length)}static compareSegments(e,t){const s=Xn.isNumericId(e),o=Xn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Xn.extractNumericId(e).compare(Xn.extractNumericId(t)):yd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class We extends Xn{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const AT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Xn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return AT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hg}static keyField(){return new kt([hg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(We.fromString(e))}static fromName(e){return new le(We.fromString(e).popFirst(5))}static empty(){return new le(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new We(e.slice()))}}/**
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
 */function Zy(i,e,t){if(!t)throw new te(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function RT(i,e,t,s){if(e===!0&&s===!0)throw new te(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function dg(i){if(!le.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function fg(i){if(le.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function e_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function rc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":me(12329,{type:typeof i})}function Ma(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rc(i);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function dt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Qa(i,e){if(!e_(i))throw new te(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new te(B.INVALID_ARGUMENT,t);return!0}/**
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
 */const pg=-62135596800,mg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*mg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pg)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mg}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qa(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:dt("string",Ye._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Ye(0,0))}static max(){return new _e(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fa=-1;function CT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ei(o,le.empty(),e)}function PT(i){return new Ei(i.readTime,i.key,Fa)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(_e.min(),le.empty(),Fa)}static max(){return new Ei(_e.max(),le.empty(),Fa)}}function kT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
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
 */const xT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function So(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==xT)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function DT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ao(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ic.ce=-1;/**
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
 */const Bd=-1;function sc(i){return i==null}function Uu(i){return i===0&&1/i==-1/0}function VT(i){return typeof i=="number"&&Number.isInteger(i)&&!Uu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const t_="";function OT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=gg(e)),e=LT(i.get(t),e);return gg(e)}function LT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case t_:t+="";break;default:t+=u}}return t}function gg(i){return i+t_+""}/**
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
 */function yg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function as(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function n_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=u??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new kn([])}unionWith(e){let t=new gt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new kn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class r_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new r_("Invalid base64 string: "+u):u}})(e);return new xt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const bT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(i){if(je(!!i,39018),typeof i=="string"){let e=0;const t=bT.exec(i);if(je(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ti(i){return typeof i=="string"?xt.fromBase64String(i):xt.fromUint8Array(i)}/**
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
 */const i_="server_timestamp",s_="__type__",o_="__previous_value__",a_="__local_write_time__";function $d(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[s_])==null?void 0:s.stringValue)===i_}function oc(i){const e=i.mapValue.fields[o_];return $d(e)?oc(e):e}function Ua(i){const e=wi(i.mapValue.fields[a_].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class MT{constructor(e,t,s,o,u,h,m,y,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w}}const ju="(default)";class ja{constructor(e,t){this.projectId=e,this.database=t||ju}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const l_="__type__",FT="__max__",wu={mapValue:{}},u_="__vector__",zu="value";function Ii(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?$d(i)?4:jT(i)?9007199254740991:UT(i)?10:11:me(28295,{value:i})}function sr(i,e){if(i===e)return!0;const t=Ii(i);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ua(i).isEqual(Ua(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=wi(o.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ti(o.bytesValue).isEqual(Ti(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return ot(o.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(o.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return ot(o.integerValue)===ot(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=ot(o.doubleValue),m=ot(u.doubleValue);return h===m?Uu(h)===Uu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return mo(i.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(yg(h)!==yg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!sr(h[y],m[y])))return!1;return!0})(i,e);default:return me(52216,{left:i})}}function za(i,e){return(i.values||[]).find((t=>sr(t,e)))!==void 0}function go(i,e){if(i===e)return 0;const t=Ii(i),s=Ii(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ot(u.integerValue||u.doubleValue),y=ot(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return vg(i.timestampValue,e.timestampValue);case 4:return vg(Ua(i),Ua(e));case 5:return yd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ti(u),y=Ti(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=ke(m[v],y[v]);if(w!==0)return w}return ke(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=ke(ot(u.latitude),ot(h.latitude));return m!==0?m:ke(ot(u.longitude),ot(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Eg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var D,z,J,Y;const m=u.fields||{},y=h.fields||{},v=(D=m[zu])==null?void 0:D.arrayValue,w=(z=y[zu])==null?void 0:z.arrayValue,R=ke(((J=v==null?void 0:v.values)==null?void 0:J.length)||0,((Y=w==null?void 0:w.values)==null?void 0:Y.length)||0);return R!==0?R:Eg(v,w)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===wu.mapValue&&h===wu.mapValue)return 0;if(u===wu.mapValue)return 1;if(h===wu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let R=0;R<y.length&&R<w.length;++R){const D=yd(y[R],w[R]);if(D!==0)return D;const z=go(m[y[R]],v[w[R]]);if(z!==0)return z}return ke(y.length,w.length)})(i.mapValue,e.mapValue);default:throw me(23264,{he:t})}}function vg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=wi(i),s=wi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function Eg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=go(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function yo(i){return _d(i)}function _d(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ti(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return le.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=_d(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${_d(t.fields[h])}`;return o+"}"})(i.mapValue):me(61005,{value:i})}function Pu(i){switch(Ii(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(i);return e?16+Pu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ti(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Pu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return as(s.fields,((u,h)=>{o+=u.length+Pu(h)})),o})(i.mapValue);default:throw me(13486,{value:i})}}function wg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function vd(i){return!!i&&"integerValue"in i}function qd(i){return!!i&&"arrayValue"in i}function Tg(i){return!!i&&"nullValue"in i}function Ig(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ku(i){return!!i&&"mapValue"in i}function UT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[l_])==null?void 0:s.stringValue)===u_}function Na(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return as(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Na(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Na(i.arrayValue.values[t]);return e}return{...i}}function jT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===FT}/**
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
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ku(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Na(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());ku(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ku(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){as(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new gn(Na(this.value))}}function c_(i){const e=[];return as(i.fields,((t,s)=>{const o=new kt([t]);if(ku(s)){const u=c_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new kn(e)}/**
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
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,_e.min(),_e.min(),_e.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,_e.min(),_e.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,_e.min(),_e.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,t){this.position=e,this.inclusive=t}}function Sg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ag(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!sr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ba{constructor(e,t="asc"){this.field=e,this.dir=t}}function zT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class h_{}class ht extends h_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $T(e,t,s):t==="array-contains"?new WT(e,s):t==="in"?new GT(e,s):t==="not-in"?new KT(e,s):t==="array-contains-any"?new QT(e,s):new ht(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new qT(e,s):new HT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(go(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends h_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Nn(e,t)}matches(e){return d_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function d_(i){return i.op==="and"}function f_(i){return BT(i)&&d_(i)}function BT(i){for(const e of i.filters)if(e instanceof Nn)return!1;return!0}function Ed(i){if(i instanceof ht)return i.field.canonicalString()+i.op.toString()+yo(i.value);if(f_(i))return i.filters.map((e=>Ed(e))).join(",");{const e=i.filters.map((t=>Ed(t))).join(",");return`${i.op}(${e})`}}function p_(i,e){return i instanceof ht?(function(s,o){return o instanceof ht&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)})(i,e):i instanceof Nn?(function(s,o){return o instanceof Nn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&p_(h,o.filters[m])),!0):!1})(i,e):void me(19439)}function m_(i){return i instanceof ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`})(i):i instanceof Nn?(function(t){return t.op.toString()+" {"+t.getFilters().map(m_).join(" ,")+"}"})(i):"Filter"}class $T extends ht{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class qT extends ht{constructor(e,t){super(e,"in",t),this.keys=g_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class HT extends ht{constructor(e,t){super(e,"not-in",t),this.keys=g_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function g_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>le.fromName(s.referenceValue)))}class WT extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&za(t.arrayValue,this.value)}}class GT extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&za(this.value.arrayValue,t)}}class KT extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!za(this.value.arrayValue,t)}}class QT extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>za(this.value.arrayValue,s)))}}/**
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
 */class YT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Rg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new YT(i,e,t,s,o,u,h)}function Hd(i){const e=we(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Ed(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),sc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>yo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>yo(s))).join(",")),e.Te=t}return e.Te}function Wd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!zT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!p_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Ag(i.startAt,e.startAt)&&Ag(i.endAt,e.endAt)}function wd(i){return le.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Ro{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function XT(i,e,t,s,o,u,h,m){return new Ro(i,e,t,s,o,u,h,m)}function y_(i){return new Ro(i)}function Cg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function __(i){return i.collectionGroup!==null}function Da(i){const e=we(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new gt(kt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ba(u,s))})),t.has(kt.keyField().canonicalString())||e.Ie.push(new Ba(kt.keyField(),s))}return e.Ie}function Jn(i){const e=we(i);return e.Ee||(e.Ee=JT(e,Da(i))),e.Ee}function JT(i,e){if(i.limitType==="F")return Rg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ba(o.field,u)}));const t=i.endAt?new Bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Bu(i.startAt.position,i.startAt.inclusive):null;return Rg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Td(i,e){const t=i.filters.concat([e]);return new Ro(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Id(i,e,t){return new Ro(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function ac(i,e){return Wd(Jn(i),Jn(e))&&i.limitType===e.limitType}function v_(i){return`${Hd(Jn(i))}|lt:${i.limitType}`}function no(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>m_(o))).join(", ")}]`),sc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>yo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>yo(o))).join(",")),`Target(${s})`})(Jn(i))}; limitType=${i.limitType})`}function lc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):le.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Da(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=Sg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,Da(s),o)||s.endAt&&!(function(h,m,y){const v=Sg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,Da(s),o))})(i,e)}function ZT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function E_(i){return(e,t)=>{let s=!1;for(const o of Da(i)){const u=eI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function eI(i,e,t){const s=i.field.isKeyField()?le.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?go(y,v):me(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:i.dir})}}/**
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
 */class ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return n_(this.inner)}size(){return this.innerSize}}/**
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
 */const tI=new et(le.comparator);function Pr(){return tI}const w_=new et(le.comparator);function Pa(...i){let e=w_;for(const t of i)e=e.insert(t.key,t);return e}function T_(i){let e=w_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ts(){return Va()}function I_(){return Va()}function Va(){return new ls((i=>i.toString()),((i,e)=>i.isEqual(e)))}const nI=new et(le.comparator),rI=new gt(le.comparator);function xe(...i){let e=rI;for(const t of i)e=e.add(t);return e}const iI=new gt(ke);function sI(){return iI}/**
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
 */function Gd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function S_(i){return{integerValue:""+i}}function oI(i,e){return VT(e)?S_(e):Gd(i,e)}/**
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
 */class uc{constructor(){this._=void 0}}function aI(i,e,t){return i instanceof $u?(function(o,u){const h={fields:{[s_]:{stringValue:i_},[a_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&$d(u)&&(u=oc(u)),u&&(h.fields[o_]=u),{mapValue:h}})(t,e):i instanceof $a?R_(i,e):i instanceof qa?C_(i,e):(function(o,u){const h=A_(o,u),m=Pg(h)+Pg(o.Ae);return vd(h)&&vd(o.Ae)?S_(m):Gd(o.serializer,m)})(i,e)}function lI(i,e,t){return i instanceof $a?R_(i,e):i instanceof qa?C_(i,e):t}function A_(i,e){return i instanceof qu?(function(s){return vd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class $u extends uc{}class $a extends uc{constructor(e){super(),this.elements=e}}function R_(i,e){const t=P_(e);for(const s of i.elements)t.some((o=>sr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class qa extends uc{constructor(e){super(),this.elements=e}}function C_(i,e){let t=P_(e);for(const s of i.elements)t=t.filter((o=>!sr(o,s)));return{arrayValue:{values:t}}}class qu extends uc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Pg(i){return ot(i.integerValue||i.doubleValue)}function P_(i){return qd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function uI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof $a&&o instanceof $a||s instanceof qa&&o instanceof qa?mo(s.elements,o.elements,sr):s instanceof qu&&o instanceof qu?sr(s.Ae,o.Ae):s instanceof $u&&o instanceof $u})(i.transform,e.transform)}class cI{constructor(e,t){this.version=e,this.transformResults=t}}class Zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class cc{}function k_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Kd(i.key,Zn.none()):new Ya(i.key,i.data,Zn.none());{const t=i.data,s=gn.empty();let o=new gt(kt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new us(i.key,s,new kn(o.toArray()),Zn.none())}}function hI(i,e,t){i instanceof Ya?(function(o,u,h){const m=o.value.clone(),y=xg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof us?(function(o,u,h){if(!xu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=xg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(x_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Oa(i,e,t,s){return i instanceof Ya?(function(u,h,m,y){if(!xu(u.precondition,h))return m;const v=u.value.clone(),w=Ng(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof us?(function(u,h,m,y){if(!xu(u.precondition,h))return m;const v=Ng(u.fieldTransforms,y,h),w=h.data;return w.setAll(x_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((R=>R.field)))})(i,e,t,s):(function(u,h,m){return xu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function dI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=A_(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function kg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&mo(s,o,((u,h)=>uI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ya extends cc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class us extends cc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function x_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function xg(i,e,t){const s=new Map;je(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,lI(h,m,t[o]))}return s}function Ng(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,aI(u,h,e))}return s}class Kd extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fI extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&hI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Oa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=I_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=k_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,((t,s)=>kg(t,s)))&&mo(this.baseMutations,e.baseMutations,((t,s)=>kg(t,s)))}}class Qd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){je(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return nI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Qd(e,t,s,o)}}/**
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
 */class mI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,De;function yI(i){switch(i){case B.OK:return me(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return me(15467,{code:i})}}function N_(i){if(i===void 0)return Cr("GRPC error has no .code"),B.UNKNOWN;switch(i){case ct.OK:return B.OK;case ct.CANCELLED:return B.CANCELLED;case ct.UNKNOWN:return B.UNKNOWN;case ct.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ct.INTERNAL:return B.INTERNAL;case ct.UNAVAILABLE:return B.UNAVAILABLE;case ct.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ct.NOT_FOUND:return B.NOT_FOUND;case ct.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ct.ABORTED:return B.ABORTED;case ct.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ct.DATA_LOSS:return B.DATA_LOSS;default:return me(39323,{code:i})}}(De=ct||(ct={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _I(){return new TextEncoder}/**
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
 */const vI=new gi([4294967295,4294967295],0);function Dg(i){const e=_I().encode(i),t=new Hy;return t.update(e),new Uint8Array(t.digest())}function Vg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new gi([t,s],0),new gi([o,u],0)]}class Yd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ka(`Invalid padding: ${t}`);if(s<0)throw new ka(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ka(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ka(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gi.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(gi.fromNumber(s)));return o.compare(vI)===1&&(o=new gi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Dg(e),[s,o]=Vg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Yd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Dg(e),[s,o]=Vg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Xa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new hc(_e.min(),o,new et(ke),Pr(),xe())}}class Xa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Xa(s,t,xe(),xe(),xe())}}/**
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
 */class Nu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class D_{constructor(e,t){this.targetId=e,this.Ce=t}}class V_{constructor(e,t,s=xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Og{constructor(){this.ve=0,this.Fe=Lg(),this.Me=xt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),s=xe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me(38017,{changeType:u})}})),new Xa(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Lg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=Tu(),this.He=Tu(),this.Ye=new et(ke)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(wd(u))if(s===0){const h=new le(u.path);this.et(t,h,Ft.newNoDocument(h,_e.min()))}else je(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ti(s).toUint8Array()}catch(y){if(y instanceof r_)return po("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Yd(h,o,u)}catch(y){return po(y instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&wd(m.target)){const y=new le(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Ft.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=xe();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new hc(e,t,this.Ye,this.je,s);return this.je=Pr(),this.Je=Tu(),this.He=Tu(),this.Ye=new et(ke),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Og,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new gt(ke),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new gt(ke),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Og),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Tu(){return new et(le.comparator)}function Lg(){return new et(le.comparator)}const wI={asc:"ASCENDING",desc:"DESCENDING"},TI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},II={and:"AND",or:"OR"};class SI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sd(i,e){return i.useProto3Json||sc(e)?e:{value:e}}function Hu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function AI(i,e){return Hu(i,e.toTimestamp())}function er(i){return je(!!i,49232),_e.fromTimestamp((function(t){const s=wi(t);return new Ye(s.seconds,s.nanos)})(i))}function Xd(i,e){return Ad(i,e).canonicalString()}function Ad(i,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function L_(i){const e=We.fromString(i);return je(j_(e),10190,{key:e.toString()}),e}function Rd(i,e){return Xd(i.databaseId,e.path)}function rd(i,e){const t=L_(e);if(t.get(1)!==i.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new le(M_(t))}function b_(i,e){return Xd(i.databaseId,e)}function RI(i){const e=L_(i);return e.length===4?We.emptyPath():M_(e)}function Cd(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function M_(i){return je(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function bg(i,e,t){return{name:Rd(i,e),fields:t.value.mapValue.fields}}function CI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(je(w===void 0||typeof w=="string",58123),xt.fromBase64String(w||"")):(je(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),xt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?B.UNKNOWN:N_(v.code);return new te(w,v.message||"")})(h);t=new V_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=rd(i,s.document.name),u=er(s.document.updateTime),h=s.document.createTime?er(s.document.createTime):_e.min(),m=new gn({mapValue:{fields:s.document.fields}}),y=Ft.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Nu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=rd(i,s.document),u=s.readTime?er(s.readTime):_e.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=rd(i,s.document),u=s.removedTargetIds||[];t=new Nu([],u,o,null)}else{if(!("filter"in e))return me(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new gI(o,u),m=s.targetId;t=new D_(m,h)}}return t}function PI(i,e){let t;if(e instanceof Ya)t={update:bg(i,e.key,e.value)};else if(e instanceof Kd)t={delete:Rd(i,e.key)};else if(e instanceof us)t={update:bg(i,e.key,e.data),updateMask:MI(e.fieldMask)};else{if(!(e instanceof fI))return me(16599,{Vt:e.type});t={verify:Rd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof $u)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $a)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof qa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof qu)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw me(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:AI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me(27497)})(i,e.precondition)),t}function kI(i,e){return i&&i.length>0?(je(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?er(o.updateTime):er(u);return h.isEqual(_e.min())&&(h=er(u)),new cI(h,o.transformResults||[])})(t,e)))):[]}function xI(i,e){return{documents:[b_(i,e.path)]}}function NI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=b_(i,o);const u=(function(v){if(v.length!==0)return U_(Nn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(D){return{field:ro(D.field),direction:OI(D.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Sd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function DI(i){let e=RI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){je(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(R){const D=F_(R);return D instanceof Nn&&f_(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(R){return R.map((D=>(function(J){return new Ba(io(J.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(R){let D;return D=typeof R=="object"?R.value:R,sc(D)?null:D})(t.limit));let y=null;t.startAt&&(y=(function(R){const D=!!R.before,z=R.values||[];return new Bu(z,D)})(t.startAt));let v=null;return t.endAt&&(v=(function(R){const D=!R.before,z=R.values||[];return new Bu(z,D)})(t.endAt)),XT(e,o,h,u,m,"F",y,v)}function VI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function F_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=io(t.unaryFilter.field);return ht.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=io(t.unaryFilter.field);return ht.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=io(t.unaryFilter.field);return ht.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=io(t.unaryFilter.field);return ht.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ht.create(io(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Nn.create(t.compositeFilter.filters.map((s=>F_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(t.compositeFilter.op))})(i):me(30097,{filter:i})}function OI(i){return wI[i]}function LI(i){return TI[i]}function bI(i){return II[i]}function ro(i){return{fieldPath:i.canonicalString()}}function io(i){return kt.fromServerFormat(i.fieldPath)}function U_(i){return i instanceof ht?(function(t){if(t.op==="=="){if(Ig(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NAN"}};if(Tg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ig(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NAN"}};if(Tg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(t.field),op:LI(t.op),value:t.value}}})(i):i instanceof Nn?(function(t){const s=t.getFilters().map((o=>U_(o)));return s.length===1?s[0]:{compositeFilter:{op:bI(t.op),filters:s}}})(i):me(54877,{filter:i})}function MI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function j_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class di{constructor(e,t,s,o,u=_e.min(),h=_e.min(),m=xt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FI{constructor(e){this.yt=e}}function UI(i){const e=DI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
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
 */class jI{constructor(){this.Cn=new zI}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ei.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class zI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(We.comparator)).toArray()}}/**
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
 */const Mg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},z_=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(z_,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class _o{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new _o(0)}static cr(){return new _o(-1)}}/**
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
 */const Fg="LruGarbageCollector",BI=1048576;function Ug([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class $I{constructor(e){this.Ir=e,this.buffer=new gt(Ug),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ug(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Fg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ao(t)?ne(Fg,"Ignoring IndexedDB error during garbage collection: ",t):await So(t)}await this.Vr(3e5)}))}}class HI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(ic.ce);const s=new $I(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Mg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((R=>(R>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o)))).next((R=>(s=R,m=Date.now(),this.removeTargets(e,s,t)))).next((R=>(u=R,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((R=>(v=Date.now(),to()<=Pe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R}))))}}function WI(i,e){return new HI(i,e)}/**
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
 */class GI{constructor(){this.changes=new ls((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class QI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Oa(s.mutation,o,kn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const o=ts();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Pa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ts();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Pr();const h=Va(),m=(function(){return Va()})();return t.forEach(((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof us)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Oa(w.mutation,v,w.mutation.getFieldMask(),Ye.now())):h.set(v.key,kn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>m.set(v,new KI(w,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Va();let o=new et(((h,m)=>h-m)),u=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||kn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const R=(o.get(m.batchId)||xe()).add(y);o=o.insert(m.batchId,R)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,R=I_();w.forEach((D=>{if(!u.has(D)){const z=k_(t.get(D),s.get(D));z!==null&&R.set(D,z),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,R))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return le.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):__(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(ts());let m=Fa,y=u;return h.next((v=>$.forEach(v,((w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((D=>{y=y.insert(w,D)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,xe()))).next((w=>({batchId:m,changes:T_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((s=>{let o=Pa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Pa();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(y=>{const v=(function(R,D){return new Ro(D,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((R,D)=>{h=h.insert(R,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Ft.newInvalidDocument(w)))}));let m=Pa();return h.forEach(((y,v)=>{const w=u.get(y);w!==void 0&&Oa(w.mutation,v,kn.empty(),Ye.now()),lc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class YI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return $.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:UI(o.bundledQuery),readTime:er(o.readTime)}})(t)),$.resolve()}}/**
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
 */class XI{constructor(){this.overlays=new et(le.comparator),this.qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ts();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=ts(),u=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=ts(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=ts(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new mI(t,s));let u=this.qr.get(t);u===void 0&&(u=xe(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class JI{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class Jd{constructor(){this.Qr=new gt(Tt.$r),this.Ur=new gt(Tt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new Tt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new le(new We([])),s=new Tt(t,e),o=new Tt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new le(new We([])),s=new Tt(t,e),o=new Tt(t,e+1);let u=xe();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Tt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return le.comparator(e.key,t.key)||ke(e.Yr,t.Yr)}static Kr(e,t){return ke(e.Yr,t.Yr)||le.comparator(e.key,t.key)}}/**
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
 */class ZI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new gt(Tt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new pI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new Tt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Bd:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(ke);return t.forEach((o=>{const u=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),$.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;le.isDocumentKey(u)||(u=u.child(""));const h=new Tt(new le(u),0);let m=new gt(ke);return this.Zr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.Yr)),!0)}),h),$.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){je(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return $.forEach(t.mutations,(o=>{const u=new Tt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new Tt(t,0),o=this.Zr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class e1{constructor(e){this.ri=e,this.docs=(function(){return new et(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Pr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Pr();const h=t.path,m=new le(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||kT(PT(w),s)<=0||(o.has(w.key)||lc(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me(9500)}ii(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new t1(this)}getSize(e){return $.resolve(this.size)}}class t1 extends GI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class n1{constructor(e){this.persistence=e,this.si=new ls((t=>Hd(t)),Wd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.oi=0,this._i=new Jd,this.targetCount=0,this.ai=_o.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),$.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new _o(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Pr(t),$.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this._i.containsKey(t))}}/**
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
 */class B_{constructor(e,t){this.ui={},this.overlays={},this.ci=new ic(0),this.li=!1,this.li=!0,this.hi=new JI,this.referenceDelegate=e(this),this.Pi=new n1(this),this.indexManager=new jI,this.remoteDocumentCache=(function(o){return new e1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new FI(t),this.Ii=new YI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new ZI(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new r1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return $.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class r1 extends NT{constructor(e){super(),this.currentSequenceNumber=e}}class Zd{constructor(e){this.persistence=e,this.Ri=new Jd,this.Vi=null}static mi(e){return new Zd(e)}get fi(){if(this.Vi)return this.Vi;throw me(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(s=>{const o=le.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,_e.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Wu{constructor(e,t){this.persistence=e,this.pi=new ls((s=>OT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=WI(this,t)}static mi(e,t){return new Wu(e,t)}Ei(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return $.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,_e.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),$.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pu(e.data.value)),t}br(e,t,s){return $.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ef{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=xe(),o=xe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ef(e,t.fromCache,s,o)}}/**
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
 */class i1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class s1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return YE()?8:DT(Ut())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new i1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(to()<=Pe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(to()<=Pe.DEBUG&&ne("QueryEngine","Query:",no(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(to()<=Pe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(t))):$.resolve())}ys(e,t){if(Cg(t))return $.resolve(null);let s=Jn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Id(t,null,"F"),s=Jn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=xe(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.Ds(t,m);return this.Cs(t,v,h,y.readTime)?this.ys(e,Id(t,null,"F")):this.vs(e,v,t,y)}))))})))))}ws(e,t,s,o){return Cg(t)||o.isEqual(_e.min())?$.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(to()<=Pe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),no(t)),this.vs(e,h,t,CT(o,Fa)).next((m=>m)))}))}Ds(e,t){let s=new gt(E_(e));return t.forEach(((o,u)=>{lc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return to()<=Pe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",no(t)),this.ps.getDocumentsMatchingQuery(e,t,Ei.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const tf="LocalStore",o1=3e8;class a1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new et(ke),this.xs=new ls((u=>Hd(u)),Wd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function l1(i,e,t,s){return new a1(i,e,t,s)}async function $_(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=xe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ls:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function u1(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,w){const R=v.batch,D=R.keys();let z=$.resolve();return D.forEach((J=>{z=z.next((()=>w.getEntry(y,J))).next((Y=>{const W=v.docVersions.get(J);je(W!==null,48541),Y.version.compareTo(W)<0&&(R.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,R)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=xe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function q_(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function c1(i,e){const t=we(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((w,R)=>{const D=o.get(R);if(!D)return;m.push(t.Pi.removeMatchingKeys(u,w.removedDocuments,R).next((()=>t.Pi.addMatchingKeys(u,w.addedDocuments,R))));let z=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?z=z.withResumeToken(xt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(R,z),(function(Y,W,ye){return Y.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=o1?!0:ye.addedDocuments.size+ye.modifiedDocuments.size+ye.removedDocuments.size>0})(D,z,w)&&m.push(t.Pi.updateTargetData(u,z))}));let y=Pr(),v=xe();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(h1(u,h,e.documentUpdates).next((w=>{y=w.ks,v=w.qs}))),!s.isEqual(_e.min())){const w=t.Pi.getLastRemoteSnapshotVersion(u).next((R=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function h1(i,e,t){let s=xe(),o=xe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Pr();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(_e.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(tf,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function d1(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Bd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function f1(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Pd(i,e,t){const s=we(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ao(h))throw h;ne(tf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function jg(i,e,t){const s=we(i);let o=_e.min(),u=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const R=we(y),D=R.xs.get(w);return D!==void 0?$.resolve(R.Ms.get(D)):R.Pi.getTargetData(v,w)})(s,h,Jn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:xe()))).next((m=>(p1(s,ZT(e),m),{documents:m,Qs:u})))))}function p1(i,e,t){let s=i.Os.get(e)||_e.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class zg{constructor(){this.activeTargetIds=sI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m1{constructor(){this.Mo=new zg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new zg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g1{Oo(e){}shutdown(){}}/**
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
 */const Bg="ConnectivityMonitor";class $g{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(Bg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(Bg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function kd(){return Iu===null?Iu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Iu++,"0x"+Iu.toString(16)}/**
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
 */const id="RestConnection",y1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===ju?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=kd(),m=this.zo(e,t.toUriEncodedString());ne(id,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:v}=new URL(m),w=wo(v);return this.Jo(e,m,y,s,w).then((R=>(ne(id,`Received RPC '${e}' ${h}: `,R),R)),(R=>{throw po(id,`RPC '${e}' ${h} failed with error: `,R,"url: ",m,"request:",s),R}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Io})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=y1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
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
 */class v1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const bt="WebChannelConnection";class E1 extends _1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=kd();return new Promise(((m,y)=>{const v=new Wy;v.setWithCredentials(!0),v.listenOnce(Gy.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Cu.NO_ERROR:const R=v.getResponseJson();ne(bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(R)),m(R);break;case Cu.TIMEOUT:ne(bt,`RPC '${e}' ${h} timed out`),y(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case Cu.HTTP_ERROR:const D=v.getStatus();if(ne(bt,`RPC '${e}' ${h} failed with status:`,D,"response text:",v.getResponseText()),D>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const J=z==null?void 0:z.error;if(J&&J.status&&J.message){const Y=(function(ye){const de=ye.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(de)>=0?de:B.UNKNOWN})(J.status);y(new te(Y,J.message))}else y(new te(B.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new te(B.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{ne(bt,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(bt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=kd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Yy(),m=Qy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");ne(bt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const R=h.createWebChannel(w,y);this.I_(R);let D=!1,z=!1;const J=new v1({Yo:W=>{z?ne(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(D||(ne(bt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),D=!0),ne(bt,`RPC '${e}' stream ${o} sending:`,W),R.send(W))},Zo:()=>R.close()}),Y=(W,ye,de)=>{W.listen(ye,(ve=>{try{de(ve)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return Y(R,Ca.EventType.OPEN,(()=>{z||(ne(bt,`RPC '${e}' stream ${o} transport opened.`),J.o_())})),Y(R,Ca.EventType.CLOSE,(()=>{z||(z=!0,ne(bt,`RPC '${e}' stream ${o} transport closed`),J.a_(),this.E_(R))})),Y(R,Ca.EventType.ERROR,(W=>{z||(z=!0,po(bt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),J.a_(new te(B.UNAVAILABLE,"The operation could not be completed")))})),Y(R,Ca.EventType.MESSAGE,(W=>{var ye;if(!z){const de=W.data[0];je(!!de,16349);const ve=de,fe=(ve==null?void 0:ve.error)||((ye=ve[0])==null?void 0:ye.error);if(fe){ne(bt,`RPC '${e}' stream ${o} received error:`,fe);const Le=fe.status;let Ae=(function(C){const x=ct[C];if(x!==void 0)return N_(x)})(Le),k=fe.message;Ae===void 0&&(Ae=B.INTERNAL,k="Unknown error status: "+Le+" with message "+fe.message),z=!0,J.a_(new te(Ae,k)),R.close()}else ne(bt,`RPC '${e}' stream ${o} received:`,de),J.u_(de)}})),Y(m,Ky.STAT_EVENT,(W=>{W.stat===gd.PROXY?ne(bt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===gd.NOPROXY&&ne(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function sd(){return typeof document<"u"?document:null}/**
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
 */function dc(i){return new SI(i,!0)}/**
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
 */class H_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const qg="PersistentStream";class W_{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new H_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Cr(t.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new te(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ne(qg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(qg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class w1 extends W_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=CI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?er(h.readTime):_e.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Cd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=wd(y)?{documents:xI(u,y)}:{query:NI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=O_(u,h.resumeToken);const v=Sd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=Hu(u,h.snapshotVersion.toTimestamp());const v=Sd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=VI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Cd(this.serializer),t.removeTarget=e,this.q_(t)}}class T1 extends W_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kI(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Cd(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>PI(this.serializer,s)))};this.q_(t)}}/**
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
 */class I1{}class S1 extends I1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,Ad(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(B.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,Ad(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class A1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cr(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ss="RemoteStore";class R1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{cs(this)&&(ne(ss,"Restarting streams for network reachability change."),await(async function(y){const v=we(y);v.Ea.add(4),await Ja(v),v.Ra.set("Unknown"),v.Ea.delete(4),await fc(v)})(this))}))})),this.Ra=new A1(s,o)}}async function fc(i){if(cs(i))for(const e of i.da)await e(!0)}async function Ja(i){for(const e of i.da)await e(!1)}function G_(i,e){const t=we(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),of(t)?sf(t):Co(t).O_()&&rf(t,e))}function nf(i,e){const t=we(i),s=Co(t);t.Ia.delete(e),s.O_()&&K_(t,e),t.Ia.size===0&&(s.O_()?s.L_():cs(t)&&t.Ra.set("Unknown"))}function rf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).Y_(e)}function K_(i,e){i.Va.Ue(e),Co(i).Z_(e)}function sf(i){i.Va=new EI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Ra.ua()}function of(i){return cs(i)&&!Co(i).x_()&&i.Ia.size>0}function cs(i){return we(i).Ea.size===0}function Q_(i){i.Va=void 0}async function C1(i){i.Ra.set("Online")}async function P1(i){i.Ia.forEach(((e,t)=>{rf(i,e)}))}async function k1(i,e){Q_(i),of(i)?(i.Ra.ha(e),sf(i)):i.Ra.set("Unknown")}async function x1(i,e,t){if(i.Ra.set("Online"),e instanceof V_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){ne(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gu(i,s)}else if(e instanceof Nu?i.Va.Ze(e):e instanceof D_?i.Va.st(e):i.Va.tt(e),!t.isEqual(_e.min()))try{const s=await q_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.Ia.get(v);w&&u.Ia.set(v,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const w=u.Ia.get(y);if(!w)return;u.Ia.set(y,w.withResumeToken(xt.EMPTY_BYTE_STRING,w.snapshotVersion)),K_(u,y);const R=new di(w.target,y,v,w.sequenceNumber);rf(u,R)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(ss,"Failed to raise snapshot:",s),await Gu(i,s)}}async function Gu(i,e,t){if(!Ao(e))throw e;i.Ea.add(1),await Ja(i),i.Ra.set("Offline"),t||(t=()=>q_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(ss,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await fc(i)}))}function Y_(i,e){return e().catch((t=>Gu(i,t,e)))}async function pc(i){const e=we(i),t=Si(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bd;for(;N1(e);)try{const o=await d1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,D1(e,o)}catch(o){await Gu(e,o)}X_(e)&&J_(e)}function N1(i){return cs(i)&&i.Ta.length<10}function D1(i,e){i.Ta.push(e);const t=Si(i);t.O_()&&t.X_&&t.ea(e.mutations)}function X_(i){return cs(i)&&!Si(i).x_()&&i.Ta.length>0}function J_(i){Si(i).start()}async function V1(i){Si(i).ra()}async function O1(i){const e=Si(i);for(const t of i.Ta)e.ea(t.mutations)}async function L1(i,e,t){const s=i.Ta.shift(),o=Qd.from(s,e,t);await Y_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await pc(i)}async function b1(i,e){e&&Si(i).X_&&await(async function(s,o){if((function(h){return yI(h)&&h!==B.ABORTED})(o.code)){const u=s.Ta.shift();Si(s).B_(),await Y_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await pc(s)}})(i,e),X_(i)&&J_(i)}async function Hg(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),ne(ss,"RemoteStore received new credentials");const s=cs(t);t.Ea.add(3),await Ja(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await fc(t)}async function M1(i,e){const t=we(i);e?(t.Ea.delete(2),await fc(t)):e||(t.Ea.add(2),await Ja(t),t.Ra.set("Unknown"))}function Co(i){return i.ma||(i.ma=(function(t,s,o){const u=we(t);return u.sa(),new w1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:C1.bind(null,i),t_:P1.bind(null,i),r_:k1.bind(null,i),H_:x1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),of(i)?sf(i):i.Ra.set("Unknown")):(await i.ma.stop(),Q_(i))}))),i.ma}function Si(i){return i.fa||(i.fa=(function(t,s,o){const u=we(t);return u.sa(),new T1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:V1.bind(null,i),r_:b1.bind(null,i),ta:O1.bind(null,i),na:L1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await pc(i)):(await i.fa.stop(),i.Ta.length>0&&(ne(ss,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class af{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new af(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(i,e){if(Cr("AsyncQueue",`${e}: ${i}`),Ao(i))return new te(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=Pa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Wg{constructor(){this.ga=new et(le.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):me(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class vo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new vo(e,t,oo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class F1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class U1{constructor(){this.queries=Gg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=Gg(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new te(B.ABORTED,"Firestore shutting down"))}}function Gg(){return new ls((i=>v_(i)),ac)}async function j1(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new F1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=lf(h,`Initialization of query '${no(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&uf(t)}async function z1(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function B1(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&uf(t)}function $1(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function uf(i){i.Ca.forEach((e=>{e.next()}))}var xd,Kg;(Kg=xd||(xd={})).Ma="default",Kg.Cache="cache";class q1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xd.Cache}}/**
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
 */class Z_{constructor(e){this.key=e}}class ev{constructor(e){this.key=e}}class H1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xe(),this.mutatedKeys=xe(),this.eu=E_(e),this.tu=new oo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new Wg,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,R)=>{const D=o.get(w),z=lc(this.query,R)?R:null,J=!!D&&this.mutatedKeys.has(D.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;D&&z?D.data.isEqual(z.data)?J!==Y&&(s.track({type:3,doc:z}),W=!0):this.su(D,z)||(s.track({type:2,doc:z}),W=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!D&&z?(s.track({type:0,doc:z}),W=!0):D&&!z&&(s.track({type:1,doc:D}),W=!0,(y||v)&&(m=!0)),W&&(z?(h=h.add(z),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,R)=>(function(z,J){const Y=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Rt:W})}};return Y(z)-Y(J)})(w.type,R.type)||this.eu(w.doc,R.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,v=y!==this.Za;return this.Za=y,h.length!==0||v?{snapshot:new vo(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new ev(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new Z_(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const cf="SyncEngine";class W1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class G1{constructor(e){this.key=e,this.hu=!1}}class K1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ls((m=>v_(m)),ac),this.Iu=new Map,this.Eu=new Set,this.du=new et(le.comparator),this.Au=new Map,this.Ru=new Jd,this.Vu={},this.mu=new Map,this.fu=_o.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Q1(i,e,t=!0){const s=ov(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await tv(s,e,t,!0),o}async function Y1(i,e){const t=ov(i);await tv(t,e,!0,!1)}async function tv(i,e,t,s){const o=await f1(i.localStore,Jn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await X1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&G_(i.remoteStore,o),m}async function X1(i,e,t,s,o){i.pu=(R,D,z)=>(async function(Y,W,ye,de){let ve=W.view.ru(ye);ve.Cs&&(ve=await jg(Y.localStore,W.query,!1).then((({documents:k})=>W.view.ru(k,ve))));const fe=de&&de.targetChanges.get(W.targetId),Le=de&&de.targetMismatches.get(W.targetId)!=null,Ae=W.view.applyChanges(ve,Y.isPrimaryClient,fe,Le);return Yg(Y,W.targetId,Ae.au),Ae.snapshot})(i,R,D,z);const u=await jg(i.localStore,e,!0),h=new H1(e,u.Qs),m=h.ru(u.documents),y=Xa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Yg(i,t,v.au);const w=new W1(e,t,h);return i.Tu.set(e,w),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function J1(i,e,t){const s=we(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!ac(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Pd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&nf(s.remoteStore,o.targetId),Nd(s,o.targetId)})).catch(So)):(Nd(s,o.targetId),await Pd(s.localStore,o.targetId,!0))}async function Z1(i,e){const t=we(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),nf(t.remoteStore,s.targetId))}async function eS(i,e,t){const s=aS(i);try{const o=await(function(h,m){const y=we(h),v=Ye.now(),w=m.reduce(((z,J)=>z.add(J.key)),xe());let R,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let J=Pr(),Y=xe();return y.Ns.getEntries(z,w).next((W=>{J=W,J.forEach(((ye,de)=>{de.isValidDocument()||(Y=Y.add(ye))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,J))).next((W=>{R=W;const ye=[];for(const de of m){const ve=dI(de,R.get(de.key).overlayedDocument);ve!=null&&ye.push(new us(de.key,ve,c_(ve.value.mapValue),Zn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,ye,m)})).next((W=>{D=W;const ye=W.applyToLocalDocumentSet(R,Y);return y.documentOverlayCache.saveOverlays(z,W.batchId,ye)}))})).then((()=>({batchId:D.batchId,changes:T_(R)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Vu[h.currentUser.toKey()];v||(v=new et(ke)),v=v.insert(m,y),h.Vu[h.currentUser.toKey()]=v})(s,o.batchId,t),await Za(s,o.changes),await pc(s.remoteStore)}catch(o){const u=lf(o,"Failed to persist write");t.reject(u)}}async function nv(i,e){const t=we(i);try{const s=await c1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?je(h.hu,14607):o.removedDocuments.size>0&&(je(h.hu,42227),h.hu=!1))})),await Za(t,s,e)}catch(s){await So(s)}}function Qg(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=we(h);y.onlineState=m;let v=!1;y.queries.forEach(((w,R)=>{for(const D of R.Sa)D.va(m)&&(v=!0)})),v&&uf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tS(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new et(le.comparator);h=h.insert(u,Ft.newNoDocument(u,_e.min()));const m=xe().add(u),y=new hc(_e.min(),new Map,new et(ke),h,m);await nv(s,y),s.du=s.du.remove(u),s.Au.delete(e),hf(s)}else await Pd(s.localStore,e,!1).then((()=>Nd(s,e,t))).catch(So)}async function nS(i,e){const t=we(i),s=e.batch.batchId;try{const o=await u1(t.localStore,e);iv(t,s,null),rv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Za(t,o)}catch(o){await So(o)}}async function rS(i,e,t){const s=we(i);try{const o=await(function(h,m){const y=we(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next((R=>(je(R!==null,37113),w=R.keys(),y.mutationQueue.removeMutationBatch(v,R)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);iv(s,e,t),rv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Za(s,o)}catch(o){await So(o)}}function rv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function iv(i,e,t){const s=we(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Nd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||sv(i,s)}))}function sv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(nf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),hf(i))}function Yg(i,e,t){for(const s of t)s instanceof Z_?(i.Ru.addReference(s.key,e),iS(i,s)):s instanceof ev?(ne(cf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||sv(i,s.key)):me(19791,{wu:s})}function iS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ne(cf,"New document in limbo: "+t),i.Eu.add(s),hf(i))}function hf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new le(We.fromString(e)),s=i.fu.next();i.Au.set(s,new G1(t)),i.du=i.du.insert(t,s),G_(i.remoteStore,new di(Jn(y_(t.path)),s,"TargetPurposeLimboResolution",ic.ce))}}async function Za(i,e,t){const s=we(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const R=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,R?"current":"not-current")}if(v){o.push(v);const R=ef.As(y.targetId,v);u.push(R)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,v){const w=we(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(R=>$.forEach(v,(D=>$.forEach(D.Es,(z=>w.persistence.referenceDelegate.addReference(R,D.targetId,z))).next((()=>$.forEach(D.ds,(z=>w.persistence.referenceDelegate.removeReference(R,D.targetId,z)))))))))}catch(R){if(!Ao(R))throw R;ne(tf,"Failed to update sequence numbers: "+R)}for(const R of v){const D=R.targetId;if(!R.fromCache){const z=w.Ms.get(D),J=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(J);w.Ms=w.Ms.insert(D,Y)}}})(s.localStore,u))}async function sS(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){ne(cf,"User change. New user:",e.toKey());const s=await $_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new te(B.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Za(t,s.Ls)}}function oS(i,e){const t=we(i),s=t.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let o=xe();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function ov(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=nv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tS.bind(null,e),e.Pu.H_=B1.bind(null,e.eventManager),e.Pu.yu=$1.bind(null,e.eventManager),e}function aS(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rS.bind(null,e),e}class Ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return l1(this.persistence,new s1,e.initialUser,this.serializer)}Cu(e){return new B_(Zd.mi,this.serializer)}Du(e){return new m1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ku.provider={build:()=>new Ku};class lS extends Ku{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){je(this.persistence.referenceDelegate instanceof Wu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new qI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new B_((s=>Wu.mi(s,t)),this.serializer)}}class Dd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Qg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sS.bind(null,this.syncEngine),await M1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new U1})()}createDatastore(e){const t=dc(e.databaseInfo.databaseId),s=(function(u){return new E1(u)})(e.databaseInfo);return(function(u,h,m,y){return new S1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new R1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Qg(this.syncEngine,t,0)),(function(){return $g.v()?new $g:new g1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,w){const R=new K1(o,u,h,m,y,v);return w&&(R.gu=!0),R})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=we(o);ne(ss,"RemoteStore shutting down."),u.Ea.add(5),await Ja(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Dd.provider={build:()=>new Dd};/**
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
 */class uS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ai="FirestoreClient";class cS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=zd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ne(Ai,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ai,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=lf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function od(i,e){i.asyncQueue.verifyOperationInProgress(),ne(Ai,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await $_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Xg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await hS(i);ne(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Hg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Hg(e.remoteStore,o))),i._onlineComponents=e}async function hS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(Ai,"Using user provided OfflineComponentProvider");try{await od(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;po("Error using user provided cache. Falling back to memory cache: "+t),await od(i,new Ku)}}else ne(Ai,"Using default OfflineComponentProvider"),await od(i,new lS(void 0));return i._offlineComponents}async function av(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(Ai,"Using user provided OnlineComponentProvider"),await Xg(i,i._uninitializedComponentsProvider._online)):(ne(Ai,"Using default OnlineComponentProvider"),await Xg(i,new Dd))),i._onlineComponents}function dS(i){return av(i).then((e=>e.syncEngine))}async function fS(i){const e=await av(i),t=e.eventManager;return t.onListen=Q1.bind(null,e.syncEngine),t.onUnlisten=J1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Y1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Z1.bind(null,e.syncEngine),t}function pS(i,e,t={}){const s=new yi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,v){const w=new uS({next:D=>{w.Nu(),h.enqueueAndForget((()=>z1(u,R))),D.fromCache&&y.source==="server"?v.reject(new te(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(D)},error:D=>v.reject(D)}),R=new q1(m,w,{includeMetadataChanges:!0,qa:!0});return j1(u,R)})(await fS(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function lv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Jg=new Map;/**
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
 */const uv="firestore.googleapis.com",Zg=!0;class ey{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uv,this.ssl=Zg}else this.host=e.host,this.ssl=e.ssl??Zg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=z_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BI)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ey({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ey(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new gT;switch(s.type){case"firstParty":return new ET(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Jg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Jg.delete(t),s.terminate())})(this),Promise.resolve()}}function mS(i,e,t,s={}){var v;i=Ma(i,mc);const o=wo(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(My(`https://${m}`),Fy("Firestore",!0)),u.host!==uv&&u.host!==m&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!ns(y,h)&&(i._setSettings(y),s.mockUserToken)){let w,R;if(typeof s.mockUserToken=="string")w=s.mockUserToken,R=Mt.MOCK_USER;else{w=zE(s.mockUserToken,(v=i._app)==null?void 0:v.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new Mt(D)}i._authCredentials=new yT(new Jy(w,R))}}/**
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
 */class hs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new hs(this.firestore,e,this._query)}}class It{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Qa(t,It._jsonSchema))return new It(e,s||null,new le(We.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:dt("string",It._jsonSchemaVersion),referencePath:dt("string")};class _i extends hs{constructor(e,t,s){super(e,t,y_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new le(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function ad(i,e,...t){if(i=$t(i),Zy("collection","path",e),i instanceof mc){const s=We.fromString(e,...t);return fg(s),new _i(i,null,s)}{if(!(i instanceof It||i instanceof _i))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return fg(s),new _i(i.firestore,null,s)}}function cv(i,e,...t){if(i=$t(i),arguments.length===1&&(e=zd.newId()),Zy("doc","path",e),i instanceof mc){const s=We.fromString(e,...t);return dg(s),new It(i,null,new le(s))}{if(!(i instanceof It||i instanceof _i))throw new te(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return dg(s),new It(i.firestore,i instanceof _i?i.converter:null,new le(s))}}/**
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
 */const ty="AsyncQueue";class ny{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new H_(this,"async_queue_retry"),this._c=()=>{const s=sd();s&&ne(ty,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=sd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new yi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;ne(ty,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Cr("INTERNAL UNHANDLED ERROR: ",ry(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=af.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&me(47125,{Pc:ry(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ry(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class gc extends mc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ny,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ny(e),this._firestoreClient=void 0,await e}}}function gS(i,e){const t=typeof i=="object"?i:By(),s=typeof i=="string"?i:ju,o=Ud(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=UE("firestore");u&&mS(o,...u)}return o}function hv(i){if(i._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||yS(i),i._firestoreClient}function yS(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,v,w){return new MT(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,lv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new cS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(xt.fromBase64String(e))}catch(t){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qa(e,yn._jsonSchema))return yn.fromBase64String(e.bytes)}}yn._jsonSchemaVersion="firestore/bytes/1.0",yn._jsonSchema={type:dt("string",yn._jsonSchemaVersion),bytes:dt("string")};/**
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
 */class df{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class dv{constructor(e){this._methodName=e}}/**
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
 */class tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(Qa(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:dt("string",tr._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
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
 */class nr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qa(e,nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new nr(e.vectorValues);throw new te(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nr._jsonSchemaVersion="firestore/vectorValue/1.0",nr._jsonSchema={type:dt("string",nr._jsonSchemaVersion),vectorValues:dt("object")};/**
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
 */const _S=/^__.*__$/;class vS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ya(e,this.data,t,this.fieldTransforms)}}function fv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ac:i})}}class ff{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Qu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fv(this.Ac)&&_S.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ES{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||dc(e)}Cc(e,t,s,o=!1){return new ff({Ac:e,methodName:t,Dc:s,path:kt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pv(i){const e=i._freezeSettings(),t=dc(i._databaseId);return new ES(i._databaseId,!!e.ignoreUndefinedProperties,t)}function wS(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);yv("Data must be an object, but it was:",h,s);const m=mv(s,h);let y,v;if(u.merge)y=new kn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const D=IS(e,R,t);if(!h.contains(D))throw new te(B.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);AS(w,D)||w.push(D)}y=new kn(w),v=h.fieldTransforms.filter((R=>y.covers(R.field)))}else y=null,v=h.fieldTransforms;return new vS(new gn(m),y,v)}function TS(i,e,t,s=!1){return pf(t,i.Cc(s?4:3,e))}function pf(i,e){if(gv(i=$t(i)))return yv("Unsupported field value:",e,i),mv(i,e);if(i instanceof dv)return(function(s,o){if(!fv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=pf(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=$t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:Hu(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Hu(o.serializer,u)}}if(s instanceof tr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof yn)return{bytesValue:O_(o.serializer,s._byteString)};if(s instanceof It){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Xd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof nr)return(function(h,m){return{mapValue:{fields:{[l_]:{stringValue:u_},[zu]:{arrayValue:{values:h.toArray().map((v=>{if(typeof v!="number")throw m.Sc("VectorValues must only contain numeric values.");return Gd(m.serializer,v)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${rc(s)}`)})(i,e)}function mv(i,e){const t={};return n_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(i,((s,o)=>{const u=pf(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function gv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof tr||i instanceof yn||i instanceof It||i instanceof dv||i instanceof nr)}function yv(i,e,t){if(!gv(t)||!e_(t)){const s=rc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function IS(i,e,t){if((e=$t(e))instanceof df)return e._internalPath;if(typeof e=="string")return _v(i,e);throw Qu("Field path arguments must be of type string or ",i,!1,void 0,t)}const SS=new RegExp("[~\\*/\\[\\]]");function _v(i,e,t){if(e.search(SS)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new df(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Qu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new te(B.INVALID_ARGUMENT,m+i+y)}function AS(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class vv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RS extends vv{data(){return super.data()}}function mf(i,e){return typeof e=="string"?_v(i,e):e instanceof df?e._internalPath:e._delegate._internalPath}/**
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
 */function CS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gf{}class Ev extends gf{}function iy(i,e,...t){let s=[];e instanceof gf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof _f)).length,m=u.filter((y=>y instanceof yf)).length;if(h>1||h>0&&m>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class yf extends Ev{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new yf(e,t,s)}_apply(e){const t=this._parse(e);return wv(e._query,t),new hs(e.firestore,e.converter,Td(e._query,t))}_parse(e){const t=pv(e.firestore);return(function(u,h,m,y,v,w,R){let D;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){ay(R,w);const J=[];for(const Y of R)J.push(oy(y,u,Y));D={arrayValue:{values:J}}}else D=oy(y,u,R)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||ay(R,w),D=TS(m,h,R,w==="in"||w==="not-in");return ht.create(v,w,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class _f extends gf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _f(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Nn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)wv(h,y),h=Td(h,y)})(e._query,t),new hs(e.firestore,e.converter,Td(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vf extends Ev{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ba(u,h)})(e._query,this._field,this._direction);return new hs(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Ro(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function sy(i,e="asc"){const t=e,s=mf("orderBy",i);return vf._create(s,t)}function oy(i,e,t){if(typeof(t=$t(t))=="string"){if(t==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__(e)&&t.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!le.isDocumentKey(s))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wg(i,new le(s))}if(t instanceof It)return wg(i,t._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rc(t)}.`)}function ay(i,e){if(!Array.isArray(i)||i.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class PS{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return as(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[zu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>ot(h.doubleValue)));return new nr(t)}convertGeoPoint(e){return new tr(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=oc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ua(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);je(j_(s),9688,{name:e});const o=new ja(s.get(1),s.get(3)),u=new le(s.popFirst(5));return o.isEqual(t)||Cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function kS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Su{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ao extends vv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(mf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ao._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ao._jsonSchemaVersion="firestore/documentSnapshot/1.0",ao._jsonSchema={type:dt("string",ao._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Du extends ao{data(e={}){return super.data(e)}}class lo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Su(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Du(this._firestore,this._userDataWriter,s.key,s,new Su(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Su(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Du(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Su(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:xS(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:i})}}lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:dt("string",lo._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class NS extends PS{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function ly(i){i=Ma(i,hs);const e=Ma(i.firestore,gc),t=hv(e),s=new NS(e);return CS(i._query),pS(t,i._query).then((o=>new lo(e,s,i,o)))}function DS(i){return Tv(Ma(i.firestore,gc),[new Kd(i._key,Zn.none())])}function VS(i,e){const t=Ma(i.firestore,gc),s=cv(i),o=kS(i.converter,e);return Tv(t,[wS(pv(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Zn.exists(!1))]).then((()=>s))}function Tv(i,e){return(function(s,o){const u=new yi;return s.asyncQueue.enqueueAndForget((async()=>eS(await dS(s),o,u))),u.promise})(hv(i),e)}(function(e,t=!0){(function(o){Io=o})(To),fo(new rs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new gc(new _T(s.getProvider("auth-internal")),new wT(h,s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(v.options.projectId,w)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),mi(lg,ug,e),mi(lg,ug,"esm2020")})();function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OS=Iv,Sv=new Ga("auth","Firebase",Iv());/**
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
 */const Yu=new Md("@firebase/auth");function LS(i,...e){Yu.logLevel<=Pe.WARN&&Yu.warn(`Auth (${To}): ${i}`,...e)}function Vu(i,...e){Yu.logLevel<=Pe.ERROR&&Yu.error(`Auth (${To}): ${i}`,...e)}/**
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
 */function Dn(i,...e){throw Ef(i,...e)}function rr(i,...e){return Ef(i,...e)}function Av(i,e,t){const s={...OS(),[e]:t};return new Ga("auth","Firebase",s).create(e,{appName:i.name})}function vi(i){return Av(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ef(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Sv.create(i,...e)}function pe(i,e,...t){if(!i)throw Ef(e,...t)}function Sr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Vu(e),new Error(e)}function kr(i,e){i||Sr(e)}/**
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
 */function Vd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function bS(){return uy()==="http:"||uy()==="https:"}function uy(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function MS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bS()||GE()||"connection"in navigator)?navigator.onLine:!0}function FS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class el{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=qE()||KE()}get(){return MS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wf(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Rv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const US={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zS=new el(3e4,6e4);function ds(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ri(i,e,t,s,o={}){return Cv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ka({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return WE()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&wo(i.emulatorConfig.host)&&(v.credentials="include"),Rv.fetch()(await Pv(i,i.config.apiHost,t,m),v)})}async function Cv(i,e,t){i._canInitEmulator=!1;const s={...US,...e};try{const o=new $S(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Au(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Au(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Au(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Au(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Av(i,w,v);Dn(i,w)}}catch(o){if(o instanceof xr)throw o;Dn(i,"network-request-failed",{message:String(o)})}}async function yc(i,e,t,s,o={}){const u=await Ri(i,e,t,s,o);return"mfaPendingCredential"in u&&Dn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Pv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?wf(i.config,o):`${i.config.apiScheme}://${o}`;return jS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function BS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $S{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(rr(this.auth,"network-request-failed")),zS.get())})}}function Au(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=rr(i,e,s);return o.customData._tokenResponse=t,o}function cy(i){return i!==void 0&&i.enterprise!==void 0}class qS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return BS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HS(i,e){return Ri(i,"GET","/v2/recaptchaConfig",ds(i,e))}/**
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
 */async function WS(i,e){return Ri(i,"POST","/v1/accounts:delete",e)}async function Xu(i,e){return Ri(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function La(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GS(i,e=!1){const t=$t(i),s=await t.getIdToken(e),o=Tf(s);pe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:La(ld(o.auth_time)),issuedAtTime:La(ld(o.iat)),expirationTime:La(ld(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ld(i){return Number(i)*1e3}function Tf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Vy(t);return o?JSON.parse(o):(Vu("Failed to decode base64 JWT payload"),null)}catch(o){return Vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hy(i){const e=Tf(i);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ha(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof xr&&KS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function KS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class QS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Od{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(i){var R;const e=i.auth,t=await i.getIdToken(),s=await Ha(i,Xu(e,{idToken:t}));pe(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(R=o.providerUserInfo)!=null&&R.length?kv(o.providerUserInfo):[],h=XS(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),v=m?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Od(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function YS(i){const e=$t(i);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function kv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function JS(i,e){const t=await Cv(i,{},async()=>{const s=Ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Pv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&wo(i.emulatorConfig.host)&&(y.credentials="include"),Rv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZS(i,e){return Ri(i,"POST","/v2/accounts:revokeToken",ds(i,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=hy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await JS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(pe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(pe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function ai(i,e){pe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class xn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new QS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Od(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ha(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return GS(this,e)}reload(){return YS(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Ha(this,WS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:R,emailVerified:D,isAnonymous:z,providerData:J,stsTokenManager:Y}=t;pe(R&&Y,e,"internal-error");const W=uo.fromJSON(this.name,Y);pe(typeof R=="string",e,"internal-error"),ai(s,e.name),ai(o,e.name),pe(typeof D=="boolean",e,"internal-error"),pe(typeof z=="boolean",e,"internal-error"),ai(u,e.name),ai(h,e.name),ai(m,e.name),ai(y,e.name),ai(v,e.name),ai(w,e.name);const ye=new xn({uid:R,auth:e,email:o,emailVerified:D,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:W,createdAt:v,lastLoginAt:w});return J&&Array.isArray(J)&&(ye.providerData=J.map(de=>({...de}))),y&&(ye._redirectEventId=y),ye}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new xn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ju(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];pe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?kv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(s);const y=new xn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Od(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
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
 */const dy=new Map;function Ar(i){kr(i instanceof Function,"Expected a class definition");let e=dy.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,dy.set(i,e),e)}/**
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
 */class xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xv.type="NONE";const fy=xv;/**
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
 */function Ou(i,e,t){return`firebase:${i}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Ou(this.userKey,o.apiKey,u),this.fullPersistenceKey=Ou("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xu(this.auth,{idToken:e}).catch(()=>{});return t?xn._fromGetAccountInfoResponse(this.auth,t,e):null}return xn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Ar(fy),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ar(fy);const h=Ou(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let R;if(typeof w=="string"){const D=await Xu(e,{idToken:w}).catch(()=>{});if(!D)break;R=await xn._fromGetAccountInfoResponse(e,D,w)}else R=xn._fromJSON(e,w);v!==u&&(m=R),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new co(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function py(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bv(e))return"Blackberry";if(Mv(e))return"Webos";if(Dv(e))return"Safari";if((e.includes("chrome/")||Vv(e))&&!e.includes("edge/"))return"Chrome";if(Lv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Nv(i=Ut()){return/firefox\//i.test(i)}function Dv(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vv(i=Ut()){return/crios\//i.test(i)}function Ov(i=Ut()){return/iemobile/i.test(i)}function Lv(i=Ut()){return/android/i.test(i)}function bv(i=Ut()){return/blackberry/i.test(i)}function Mv(i=Ut()){return/webos/i.test(i)}function If(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function eA(i=Ut()){var e;return If(i)&&!!((e=window.navigator)!=null&&e.standalone)}function tA(){return QE()&&document.documentMode===10}function Fv(i=Ut()){return If(i)||Lv(i)||Mv(i)||bv(i)||/windows phone/i.test(i)||Ov(i)}/**
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
 */function Uv(i,e=[]){let t;switch(i){case"Browser":t=py(Ut());break;case"Worker":t=`${py(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${To}/${s}`}/**
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
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function rA(i,e={}){return Ri(i,"GET","/v2/passwordPolicy",ds(i,e))}/**
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
 */const iA=6;class sA{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??iA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class oA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new my(this),this.idTokenSubscription=new my(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ar(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xu(this,{idToken:e}),s=await xn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(vi(this));const t=e?$t(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),t=new sA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ga("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ZS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ar(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&LS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Po(i){return $t(i)}class my{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aA(i){_c=i}function jv(i){return _c.loadJS(i)}function lA(){return _c.recaptchaEnterpriseScript}function uA(){return _c.gapiScript}function cA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class hA{constructor(){this.enterprise=new dA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fA="recaptcha-enterprise",zv="NO_RECAPTCHA";class pA{constructor(e){this.type=fA,this.auth=Po(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{HS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new qS(y);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;cy(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(zv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&cy(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=lA();y.length!==0&&(y+=m),jv(y).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function gy(i,e,t,s=!1,o=!1){const u=new pA(i);let h;if(o)h=zv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function yy(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await gy(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await gy(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function mA(i,e){const t=Ud(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ns(u,e??{}))return o;Dn(o,"already-initialized")}return t.initialize({options:e})}function gA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ar);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function yA(i,e,t){const s=Po(i);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Bv(e),{host:h,port:m}=_A(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(ns(v,s.config.emulator)&&ns(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,wo(h)?(My(`${u}//${h}${y}`),Fy("Auth",!0)):vA()}function Bv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function _A(i){const e=Bv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:_y(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:_y(h)}}}function _y(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function vA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Sf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function EA(i,e){return Ri(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wA(i,e){return yc(i,"POST","/v1/accounts:signInWithPassword",ds(i,e))}/**
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
 */async function TA(i,e){return yc(i,"POST","/v1/accounts:signInWithEmailLink",ds(i,e))}async function IA(i,e){return yc(i,"POST","/v1/accounts:signInWithEmailLink",ds(i,e))}/**
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
 */class Wa extends Sf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Wa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Wa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yy(e,t,"signInWithPassword",wA);case"emailLink":return TA(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yy(e,s,"signUpPassword",EA);case"emailLink":return IA(e,{idToken:t,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ho(i,e){return yc(i,"POST","/v1/accounts:signInWithIdp",ds(i,e))}/**
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
 */const SA="http://localhost";class os extends Sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new os(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:SA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ka(t)}return e}}/**
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
 */function AA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RA(i){const e=Aa(Ra(i)).link,t=e?Aa(Ra(e)).deep_link_id:null,s=Aa(Ra(i)).deep_link_id;return(s?Aa(Ra(s)).link:null)||s||t||e||i}class Af{constructor(e){const t=Aa(Ra(e)),s=t.apiKey??null,o=t.oobCode??null,u=AA(t.mode??null);pe(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=RA(e);try{return new Af(t)}catch{return null}}}/**
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
 */class ko{constructor(){this.providerId=ko.PROVIDER_ID}static credential(e,t){return Wa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Af.parseLink(t);return pe(s,"argument-error"),Wa._fromEmailAndCode(e,s.code,s.tenantId)}}ko.PROVIDER_ID="password";ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $v{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tl extends $v{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends tl{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class ui extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class ci extends tl{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
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
 */class hi extends tl{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
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
 */class Eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await xn._fromIdTokenResponse(e,s,o),h=vy(s);return new Eo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=vy(s);return new Eo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function vy(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Zu extends xr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Zu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Zu(e,t,s,o)}}function qv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Zu._fromErrorAndOperation(i,u,e,s):u})}async function CA(i,e,t=!1){const s=await Ha(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Eo._forOperation(i,"link",s)}/**
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
 */async function PA(i,e,t=!1){const{auth:s}=i;if(Pn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const u=await Ha(i,qv(s,o,e,i),t);pe(u.idToken,s,"internal-error");const h=Tf(u.idToken);pe(h,s,"internal-error");const{sub:m}=h;return pe(i.uid===m,s,"user-mismatch"),Eo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Dn(s,"user-mismatch"),u}}/**
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
 */async function Hv(i,e,t=!1){if(Pn(i.app))return Promise.reject(vi(i));const s="signIn",o=await qv(i,s,e),u=await Eo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function kA(i,e){return Hv(Po(i),e)}/**
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
 */async function xA(i){const e=Po(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function NA(i,e,t){return Pn(i.app)?Promise.reject(vi(i)):kA($t(i),ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xA(i),s})}function DA(i,e,t,s){return $t(i).onIdTokenChanged(e,t,s)}function VA(i,e,t){return $t(i).beforeAuthStateChanged(e,t)}function OA(i,e,t,s){return $t(i).onAuthStateChanged(e,t,s)}function LA(i){return $t(i).signOut()}const ec="__sak";/**
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
 */class Wv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bA=1e3,MA=10;class Gv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);tA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,MA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const FA=Gv;/**
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
 */class Kv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kv.type="SESSION";const Qv=Kv;/**
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
 */function UA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await UA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
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
 */function Rf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class jA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=Rf("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const D=R;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ir(){return window}function zA(i){ir().location.href=i}/**
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
 */function Yv(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function BA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $A(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function qA(){return Yv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",HA=1,tc="firebaseLocalStorage",Jv="fbase_key";class nl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ec(i,e){return i.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function WA(){const i=indexedDB.deleteDatabase(Xv);return new nl(i).toPromise()}function Ld(){const i=indexedDB.open(Xv,HA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(tc,{keyPath:Jv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(tc)?e(s):(s.close(),await WA(),e(await Ld()))})})}async function Ey(i,e,t){const s=Ec(i,!0).put({[Jv]:e,value:t});return new nl(s).toPromise()}async function GA(i,e){const t=Ec(i,!1).get(e),s=await new nl(t).toPromise();return s===void 0?null:s.value}function wy(i,e){const t=Ec(i,!0).delete(e);return new nl(t).toPromise()}const KA=800,QA=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>QA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(qA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await BA(),!this.activeServiceWorker)return;this.sender=new jA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await Ey(e,ec,"1"),await wy(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ey(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>GA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ec(o,!1).getAll();return new nl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const YA=Zv;new el(3e4,6e4);/**
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
 */function XA(i,e){return e?Ar(e):(pe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Cf extends Sf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JA(i){return Hv(i.auth,new Cf(i),i.bypassAuthState)}function ZA(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),PA(t,new Cf(i),i.bypassAuthState)}async function eR(i){const{auth:e,user:t}=i;return pe(t,e,"internal-error"),CA(t,new Cf(i),i.bypassAuthState)}/**
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
 */class e0{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JA;case"linkViaPopup":case"linkViaRedirect":return eR;case"reauthViaPopup":case"reauthViaRedirect":return ZA;default:Dn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tR=new el(2e3,1e4);class so extends e0{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,so.currentPopupAction&&so.currentPopupAction.cancel(),so.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,so.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tR.get())};e()}}so.currentPopupAction=null;/**
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
 */const nR="pendingRedirect",Lu=new Map;class rR extends e0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Lu.get(this.auth._key());if(!e){try{const s=await iR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Lu.set(this.auth._key(),e)}return this.bypassAuthState||Lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iR(i,e){const t=aR(e),s=oR(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function sR(i,e){Lu.set(i._key(),e)}function oR(i){return Ar(i._redirectPersistence)}function aR(i){return Ou(nR,i.config.apiKey,i.name)}async function lR(i,e,t=!1){if(Pn(i.app))return Promise.reject(vi(i));const s=Po(i),o=XA(s,e),h=await new rR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const uR=600*1e3;class cR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!t0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ty(e))}saveEventToCache(e){this.cachedEventUids.add(Ty(e)),this.lastProcessedEventTime=Date.now()}}function Ty(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function t0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hR(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t0(i);default:return!1}}/**
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
 */async function dR(i,e={}){return Ri(i,"GET","/v1/projects",e)}/**
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
 */const fR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pR=/^https?/;async function mR(i){if(i.config.emulator)return;const{authorizedDomains:e}=await dR(i);for(const t of e)try{if(gR(t))return}catch{}Dn(i,"unauthorized-domain")}function gR(i){const e=Vd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!pR.test(t))return!1;if(fR.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const yR=new el(3e4,6e4);function Iy(){const i=ir().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function _R(i){return new Promise((e,t)=>{var o,u,h;function s(){Iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iy(),t(rr(i,"network-request-failed"))},timeout:yR.get()})}if((u=(o=ir().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=ir().gapi)!=null&&h.load)s();else{const m=cA("iframefcb");return ir()[m]=()=>{gapi.load?s():t(rr(i,"network-request-failed"))},jv(`${uA()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw bu=null,e})}let bu=null;function vR(i){return bu=bu||_R(i),bu}/**
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
 */const ER=new el(5e3,15e3),wR="__/auth/iframe",TR="emulator/auth/iframe",IR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AR(i){const e=i.config;pe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?wf(e,TR):`https://${i.config.authDomain}/${wR}`,s={apiKey:e.apiKey,appName:i.name,v:To},o=SR.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ka(s).slice(1)}`}async function RR(i){const e=await vR(i),t=ir().gapi;return pe(t,i,"internal-error"),e.open({where:document.body,url:AR(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=rr(i,"network-request-failed"),m=ir().setTimeout(()=>{u(h)},ER.get());function y(){ir().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const CR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PR=500,kR=600,xR="_blank",NR="http://localhost";class Sy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(i,e,t,s=PR,o=kR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...CR,width:s.toString(),height:o.toString(),top:u,left:h},v=Ut().toLowerCase();t&&(m=Vv(v)?xR:t),Nv(v)&&(e=e||NR,y.scrollbars="yes");const w=Object.entries(y).reduce((D,[z,J])=>`${D}${z}=${J},`,"");if(eA(v)&&m!=="_self")return VR(e||"",m),new Sy(null);const R=window.open(e||"",m,w);pe(R,i,"popup-blocked");try{R.focus()}catch{}return new Sy(R)}function VR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const OR="__/auth/handler",LR="emulator/auth/handler",bR=encodeURIComponent("fac");async function Ay(i,e,t,s,o,u){pe(i.config.authDomain,i,"auth-domain-config-required"),pe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:To,eventId:o};if(e instanceof $v){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",nw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof tl){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${bR}=${encodeURIComponent(y)}`:"";return`${MR(i)}?${Ka(m).slice(1)}${v}`}function MR({config:i}){return i.emulator?wf(i,LR):`https://${i.authDomain}/${OR}`}/**
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
 */const ud="webStorageSupport";class FR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qv,this._completeRedirectFn=lR,this._overrideRedirectResult=sR}async _openPopup(e,t,s,o){var h;kr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Ay(e,t,s,Vd(),o);return DR(e,u,Rf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ay(e,t,s,Vd(),o);return zA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await RR(e),s=new cR(e);return t.register("authEvent",o=>(pe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ud,{type:ud},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[ud];u!==void 0&&t(!!u),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fv()||Dv()||If()}}const UR=FR;var Ry="@firebase/auth",Cy="1.12.0";/**
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
 */class jR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BR(i){fo(new rs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;pe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uv(i)},v=new oA(s,o,u,y);return gA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),fo(new rs("auth-internal",e=>{const t=Po(e.getProvider("auth").getImmediate());return(s=>new jR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(Ry,Cy,zR(i)),mi(Ry,Cy,"esm2020")}/**
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
 */const $R=300,qR=by("authIdTokenMaxAge")||$R;let Py=null;const HR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>qR)return;const o=t==null?void 0:t.token;Py!==o&&(Py=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function WR(i=By()){const e=Ud(i,"auth");if(e.isInitialized())return e.getImmediate();const t=mA(i,{popupRedirectResolver:UR,persistence:[YA,FA,Qv]}),s=by("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=HR(u.toString());VA(t,h,()=>h(t.currentUser)),DA(t,m=>h(m))}}const o=Oy("auth");return o&&yA(t,`http://${o}`),t}function GR(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}aA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=rr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",GR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BR("Browser");const KR={apiKey:"AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",authDomain:"my-portfolio-db-8e7ac.firebaseapp.com",projectId:"my-portfolio-db-8e7ac",storageBucket:"my-portfolio-db-8e7ac.firebasestorage.app",messagingSenderId:"640921515154",appId:"1:640921515154:web:528be384c173cf632e224b"},n0=zy(KR),Ru=gS(n0),cd=WR(n0),QR=()=>{const[i,e]=wt.useState("home"),[t,s]=wt.useState(!1),[o,u]=wt.useState(!1),[h,m]=wt.useState([]),[y,v]=wt.useState(!0),[w,R]=wt.useState(null),[D,z]=wt.useState(!1),[J,Y]=wt.useState(""),[W,ye]=wt.useState(""),[de,ve]=wt.useState(""),[fe,Le]=wt.useState({title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""});wt.useEffect(()=>{(async()=>{try{const be=iy(ad(Ru,"projects"),sy("createdAt","desc")),yt=(await ly(be)).docs.map(Be=>({id:Be.id,...Be.data()}));m(yt)}catch(be){console.error("Error fetching data: ",be)}finally{v(!1)}})();const V=()=>u(window.scrollY>50);window.addEventListener("scroll",V);const A=OA(cd,be=>{R(be)});return()=>{window.removeEventListener("scroll",V),A()}},[]);const Ae=async T=>{T.preventDefault();try{await NA(cd,J,W),ve(""),z(!0)}catch{ve("Login failed. Check your email/password.")}},k=async()=>{await LA(cd),z(!1)},S=async()=>{if(!fe.title)return alert("Title is required!");try{await VS(ad(Ru,"projects"),{...fe,createdAt:new Date});const T=iy(ad(Ru,"projects"),sy("createdAt","desc")),V=await ly(T);m(V.docs.map(A=>({id:A.id,...A.data()}))),Le({title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""}),alert("Project added!")}catch(T){console.error("Error adding document: ",T)}},C=async T=>{if(window.confirm("Are you sure you want to delete this project?"))try{await DS(cv(Ru,"projects",T)),m(h.filter(V=>V.id!==T))}catch(V){console.error("Error deleting document: ",V)}},x=T=>{const V=document.getElementById(T);V&&(V.scrollIntoView({behavior:"smooth"}),e(T),s(!1))};return O.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white relative",children:[O.jsx("div",{className:"fixed bottom-6 right-6 z-[100]",children:w?O.jsxs("div",{className:"flex gap-2 items-center",children:[O.jsx("span",{className:"bg-indigo-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg",children:"Admin Mode"}),O.jsx("button",{onClick:k,className:"p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all flex items-center justify-center",title:"Logout",children:O.jsx(RE,{size:20})})]}):O.jsx("button",{onClick:()=>z(!D),className:"p-3 bg-slate-800 rounded-full shadow-lg border border-slate-700 hover:bg-slate-700 transition-all opacity-50 hover:opacity-100 flex items-center justify-center",title:"Admin Login",children:O.jsx(AE,{size:20,className:"text-slate-400"})})}),D&&!w&&O.jsx("div",{className:"fixed inset-0 bg-black/90 z-[101] flex items-center justify-center p-4",children:O.jsxs("div",{className:"bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-2xl",children:[O.jsxs("div",{className:"flex justify-between items-center mb-6",children:[O.jsx("h2",{className:"text-2xl font-bold text-white",children:"Admin Login"}),O.jsx("button",{onClick:()=>z(!1),children:O.jsx(Qm,{className:"text-slate-400 hover:text-white"})})]}),O.jsxs("form",{onSubmit:Ae,className:"space-y-4",children:[O.jsxs("div",{children:[O.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Email"}),O.jsx("input",{type:"email",value:J,onChange:T=>Y(T.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"admin@example.com"})]}),O.jsxs("div",{children:[O.jsx("label",{className:"block text-sm text-slate-400 mb-1",children:"Password"}),O.jsx("input",{type:"password",value:W,onChange:T=>ye(T.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none",placeholder:"Password"})]}),de&&O.jsx("p",{className:"text-red-400 text-sm",children:de}),O.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors",children:"Login"})]})]})}),O.jsxs("nav",{className:`fixed w-full z-40 transition-all duration-300 ${o?"bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800":"bg-transparent"}`,children:[O.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex justify-between items-center",children:[O.jsxs("div",{onClick:()=>x("home"),className:"text-2xl font-bold text-slate-100 cursor-pointer hover:text-indigo-400 transition-colors",children:["HK",O.jsx("span",{className:"text-indigo-500",children:"."})]}),O.jsx("div",{className:"hidden md:flex space-x-8",children:["About","Experience","Projects","Skills","Contact"].map(T=>O.jsx("button",{onClick:()=>x(T.toLowerCase()),className:"text-sm font-medium hover:text-indigo-400 transition-colors",children:T},T))}),O.jsx("div",{className:"md:hidden",children:O.jsx("button",{onClick:()=>s(!t),className:"text-slate-100 focus:outline-none",children:t?O.jsx(Qm,{size:24}):O.jsx(CE,{size:24})})})]}),t&&O.jsx("div",{className:"md:hidden bg-slate-800 border-b border-slate-700",children:O.jsx("div",{className:"px-6 py-4 flex flex-col space-y-4",children:["About","Experience","Projects","Skills","Contact"].map(T=>O.jsx("button",{onClick:()=>x(T.toLowerCase()),className:"text-left text-sm font-medium hover:text-indigo-400 transition-colors",children:T},T))})})]}),O.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden",children:[O.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"}),O.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"}),O.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[O.jsx("h2",{className:"text-indigo-400 font-medium tracking-wider mb-4 animate-fade-in-up",children:"CONTENT STRATEGIST & PRODUCER"}),O.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight animate-fade-in-up delay-100",children:"Hyeongmo Kim"}),O.jsxs("p",{className:"text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200",children:["Connecting creative work with data and tight execution.",O.jsx("br",{}),"Focusing on audience behavior, AI, and data-driven decision-making."]}),O.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300",children:[O.jsxs("button",{onClick:()=>x("contact"),className:"px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:scale-105 flex items-center justify-center gap-2",children:[O.jsx(Gm,{size:18})," Get in Touch"]}),O.jsxs("a",{href:"https://www.linkedin.com/in/hmstory0111",target:"_blank",rel:"noreferrer",className:"px-8 py-3 bg-slate-800 text-slate-200 rounded-full font-medium hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center gap-2 border border-slate-700",children:[O.jsx(SE,{size:18})," LinkedIn"]})]})]})]}),O.jsx("section",{id:"about",className:"py-20 px-6 bg-slate-800/50",children:O.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[O.jsxs("div",{children:[O.jsxs("h2",{className:"text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3",children:[O.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Professional Summary"]}),O.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:"I work across content strategy, production, and operations. My passion lies in bridging the gap between creative storytelling and analytical rigor."}),O.jsx("p",{className:"text-lg text-slate-400 leading-relaxed",children:"Currently, I am expanding my expertise by pursuing an M.S. in Digital Innovation, specifically studying how AI and data can inform audience behavior analysis and decision-making processes."})]}),O.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl",children:[O.jsxs("div",{className:"flex items-center gap-3 mb-6 text-indigo-400",children:[O.jsx(Qh,{size:24}),O.jsx("h3",{className:"text-xl font-bold",children:"Education"})]}),O.jsxs("div",{className:"space-y-8",children:[O.jsxs("div",{className:"relative pl-6 border-l-2 border-indigo-900",children:[O.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"}),O.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University - Graduate School"}),O.jsx("p",{className:"text-indigo-400 text-sm mb-2",children:"M.S. Digital Innovation (Expected 2027) | Seoul, Korea"})]}),O.jsxs("div",{className:"relative pl-6 border-l-2 border-slate-700",children:[O.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"}),O.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University"}),O.jsx("p",{className:"text-slate-400 text-sm mb-1",children:"B.A. International Relations & Psychology | 2005 - 2013"})]})]})]})]})}),O.jsx("section",{id:"experience",className:"py-20 px-6",children:O.jsxs("div",{className:"max-w-4xl mx-auto",children:[O.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-12 text-center",children:"Professional Experience"}),O.jsx("div",{className:"space-y-12",children:O.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[O.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-xl font-bold text-slate-100",children:"Podcast & Video Producer"}),O.jsx("p",{className:"text-slate-400",children:"Krafton - Publishing Platform Division (PPD)"})]}),O.jsx("span",{className:"px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30",children:"2025 - Present"})]}),O.jsxs("ul",{className:"space-y-3 text-slate-400",children:[O.jsxs("li",{className:"flex items-start gap-3",children:[O.jsx(Hm,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),O.jsx("span",{children:"Produced internal podcasts and videos for 200+ staff."})]}),O.jsxs("li",{className:"flex items-start gap-3",children:[O.jsx(Hm,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),O.jsx("span",{children:"Handled full production cycle (script, host, record, edit)."})]})]})]})})]})}),O.jsx("section",{id:"projects",className:"py-20 px-6 bg-slate-800/30",children:O.jsxs("div",{className:"max-w-6xl mx-auto",children:[O.jsxs("h2",{className:"text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3",children:[O.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Selected Works"]}),w&&O.jsxs("div",{className:"mb-12 bg-indigo-900/20 p-6 rounded-xl border border-indigo-500/50",children:[O.jsxs("h3",{className:"text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2",children:[O.jsx(PE,{size:20})," Add New Project"]}),O.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mb-4",children:[O.jsx("input",{type:"text",placeholder:"Title",className:"bg-slate-900 p-3 rounded border border-slate-700 text-white",value:fe.title,onChange:T=>Le({...fe,title:T.target.value})}),O.jsxs("select",{className:"bg-slate-900 p-3 rounded border border-slate-700 text-white",value:fe.type,onChange:T=>Le({...fe,type:T.target.value}),children:[O.jsx("option",{value:"blog",children:"Blog (Link)"}),O.jsx("option",{value:"video",children:"YouTube Video"}),O.jsx("option",{value:"podcast",children:"Podcast"})]}),O.jsx("input",{type:"text",placeholder:"Description",className:"bg-slate-900 p-3 rounded border border-slate-700 md:col-span-2 text-white",value:fe.description,onChange:T=>Le({...fe,description:T.target.value})}),fe.type==="video"?O.jsx("input",{type:"text",placeholder:"YouTube Video ID (e.g. kcb8OI46uTA)",className:"bg-slate-900 p-3 rounded border border-slate-700 md:col-span-2 text-white",value:fe.videoId,onChange:T=>Le({...fe,videoId:T.target.value})}):O.jsx("input",{type:"text",placeholder:"External Link URL",className:"bg-slate-900 p-3 rounded border border-slate-700 md:col-span-2 text-white",value:fe.link,onChange:T=>Le({...fe,link:T.target.value})})]}),O.jsx("button",{onClick:S,className:"bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-bold",children:"Add Project"})]}),O.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[O.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[O.jsxs("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900"}),O.jsx(Qh,{size:48,className:"text-slate-600 group-hover:text-indigo-400 transition-colors z-10"})]}),O.jsxs("div",{className:"p-8",children:[O.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"Film Review Blog"}),O.jsx("p",{className:"text-slate-400 mb-6 text-sm",children:"A comprehensive film review platform written in English, analyzing cinematic techniques and storytelling structures."}),O.jsxs("a",{href:"https://medium.com/@hmstory0111",target:"_blank",rel:"noreferrer",className:"text-indigo-400 font-medium flex items-center gap-2 hover:text-indigo-300 transition-colors",children:["View Blog ",O.jsx(Wm,{size:16})]})]})]}),O.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[O.jsxs("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900"}),O.jsx(Km,{size:48,className:"text-slate-600 group-hover:text-purple-400 transition-colors z-10"})]}),O.jsxs("div",{className:"p-8",children:[O.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"Film Review Podcast"}),O.jsx("p",{className:"text-slate-400 mb-6 text-sm",children:"Proof of concept audio series exploring film narratives. Produced, hosted, and edited entirely solo."}),O.jsxs("a",{href:"https://youtu.com/ZafaT7ibW9I",target:"_blank",rel:"noreferrer",className:"text-purple-400 font-medium flex items-center gap-2 hover:text-purple-300 transition-colors",children:["Listen on YouTube ",O.jsx(Yh,{size:16})]})]})]}),O.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[O.jsx("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:O.jsx("img",{src:"https://img.youtube.com/vi/kcb8OI46uTA/hqdefault.jpg",alt:"AI Video Thumbnail",className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"})}),O.jsxs("div",{className:"p-8",children:[O.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:"AI Creative Video"}),O.jsx("p",{className:"text-slate-400 mb-6 text-sm",children:"Experimental video content created using Generative AI tools. Explored new visual storytelling."}),O.jsxs("a",{href:"https://youtu.com/kcb8OI46uTA",target:"_blank",rel:"noreferrer",className:"text-red-400 font-medium flex items-center gap-2 hover:text-red-300 transition-colors",children:["Watch on YouTube ",O.jsx(Yh,{size:16})]})]})]}),h.map(T=>O.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[w&&O.jsx("button",{onClick:()=>C(T.id),className:"absolute top-2 right-2 z-20 p-2 bg-red-600/80 rounded-full text-white hover:bg-red-700",children:O.jsx(kE,{size:16})}),O.jsx("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:T.type==="video"&&T.videoId?O.jsx("img",{src:`https://img.youtube.com/vi/${T.videoId}/hqdefault.jpg`,alt:T.title,className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"}):O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900"}),T.type==="podcast"?O.jsx(Km,{size:48,className:"text-slate-600 group-hover:text-purple-400 z-10"}):O.jsx(Qh,{size:48,className:"text-slate-600 group-hover:text-indigo-400 z-10"})]})}),O.jsxs("div",{className:"p-8",children:[O.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:T.title}),O.jsx("p",{className:"text-slate-400 mb-6 text-sm line-clamp-3",children:T.description}),O.jsxs("a",{href:T.type==="video"?`https://youtu.be/${T.videoId}`:T.link,target:"_blank",rel:"noreferrer",className:`font-medium flex items-center gap-2 transition-colors ${T.type==="video"?"text-red-400 hover:text-red-300":T.type==="podcast"?"text-purple-400 hover:text-purple-300":"text-indigo-400 hover:text-indigo-300"}`,children:[T.linkText||"View Detail"," ",T.type==="video"?O.jsx(Yh,{size:16}):O.jsx(Wm,{size:16})]})]})]},T.id))]})]})}),O.jsx("section",{id:"skills",className:"py-20 px-6",children:O.jsxs("div",{className:"max-w-4xl mx-auto",children:[O.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-12 text-center",children:"Skills & Expertise"}),O.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[O.jsxs("div",{children:[O.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[O.jsx(IE,{className:"text-indigo-500"}),O.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Strategy & Data"})]}),O.jsx("div",{className:"flex flex-wrap gap-3",children:["Audience Insights","Content Analytics","Roadmapping","Cross-functional Ops"].map(T=>O.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:T},T))})]}),O.jsxs("div",{children:[O.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[O.jsx(xE,{className:"text-indigo-500"}),O.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Production & Tools"})]}),O.jsx("div",{className:"flex flex-wrap gap-3",children:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"].map(T=>O.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:T},T))})]})]})]})}),O.jsx("section",{id:"contact",className:"py-20 px-6 bg-indigo-900/20",children:O.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[O.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-6",children:"Let's Connect"}),O.jsx("div",{className:"flex flex-col md:flex-row justify-center gap-6",children:O.jsxs("a",{href:"mailto:hmstory0111@gmail.com",className:"flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700",children:[O.jsx(Gm,{size:20,className:"text-indigo-400"}),"hmstory0111@gmail.com"]})}),O.jsx("div",{className:"mt-20 pt-10 border-t border-slate-800 text-slate-500 text-sm",children:O.jsx("p",{children:"© 2025 Hyeongmo Kim. All rights reserved. (Updated)"})})]})}),O.jsx("style",{children:`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; } .delay-200 { animation-delay: 0.2s; } .delay-300 { animation-delay: 0.3s; }
      `})]})};vE.createRoot(document.getElementById("root")).render(O.jsx(dE.StrictMode,{children:O.jsx(QR,{})}));
