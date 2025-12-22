(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function By(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var id={exports:{}},Na={},sd={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function Sw(){if(Zm)return Ve;Zm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function W(O,H,Ie){this.props=O,this.context=H,this.refs=J,this.updater=Ie||z}W.prototype.isReactComponent={},W.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function we(){}we.prototype=W.prototype;function ae(O,H,Ie){this.props=O,this.context=H,this.refs=J,this.updater=Ie||z}var Re=ae.prototype=new we;Re.constructor=ae,Y(Re,W.prototype),Re.isPureReactComponent=!0;var Pe=Array.isArray,qe=Object.prototype.hasOwnProperty,Ne={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function S(O,H,Ie){var Se,xe={},ke=null,be=null;if(H!=null)for(Se in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(ke=""+H.key),H)qe.call(H,Se)&&!P.hasOwnProperty(Se)&&(xe[Se]=H[Se]);var De=arguments.length-2;if(De===1)xe.children=Ie;else if(1<De){for(var We=Array(De),gt=0;gt<De;gt++)We[gt]=arguments[gt+2];xe.children=We}if(O&&O.defaultProps)for(Se in De=O.defaultProps,De)xe[Se]===void 0&&(xe[Se]=De[Se]);return{$$typeof:i,type:O,key:ke,ref:be,props:xe,_owner:Ne.current}}function R(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return H[Ie]})}var b=/\/+/g;function A(O,H){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):H.toString(36)}function Ue(O,H,Ie,Se,xe){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(ke){case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case i:case e:be=!0}}if(be)return be=O,xe=xe(be),O=Se===""?"."+A(be,0):Se,Pe(xe)?(Ie="",O!=null&&(Ie=O.replace(b,"$&/")+"/"),Ue(xe,H,Ie,"",function(gt){return gt})):xe!=null&&(V(xe)&&(xe=R(xe,Ie+(!xe.key||be&&be.key===xe.key?"":(""+xe.key).replace(b,"$&/")+"/")+O)),H.push(xe)),1;if(be=0,Se=Se===""?".":Se+":",Pe(O))for(var De=0;De<O.length;De++){ke=O[De];var We=Se+A(ke,De);be+=Ue(ke,H,Ie,We,xe)}else if(We=x(O),typeof We=="function")for(O=We.call(O),De=0;!(ke=O.next()).done;)ke=ke.value,We=Se+A(ke,De++),be+=Ue(ke,H,Ie,We,xe);else if(ke==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function lt(O,H,Ie){if(O==null)return O;var Se=[],xe=0;return Ue(O,Se,"","",function(ke){return H.call(Ie,ke,xe++)}),Se}function ce(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var ge={current:null},Z={transition:null},he={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ne};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:lt,forEach:function(O,H,Ie){lt(O,function(){H.apply(this,arguments)},Ie)},count:function(O){var H=0;return lt(O,function(){H++}),H},toArray:function(O){return lt(O,function(H){return H})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ve.Component=W,Ve.Fragment=t,Ve.Profiler=o,Ve.PureComponent=ae,Ve.StrictMode=s,Ve.Suspense=y,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Ve.act=ne,Ve.cloneElement=function(O,H,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=Y({},O.props),xe=O.key,ke=O.ref,be=O._owner;if(H!=null){if(H.ref!==void 0&&(ke=H.ref,be=Ne.current),H.key!==void 0&&(xe=""+H.key),O.type&&O.type.defaultProps)var De=O.type.defaultProps;for(We in H)qe.call(H,We)&&!P.hasOwnProperty(We)&&(Se[We]=H[We]===void 0&&De!==void 0?De[We]:H[We])}var We=arguments.length-2;if(We===1)Se.children=Ie;else if(1<We){De=Array(We);for(var gt=0;gt<We;gt++)De[gt]=arguments[gt+2];Se.children=De}return{$$typeof:i,type:O.type,key:xe,ref:ke,props:Se,_owner:be}},Ve.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ve.createElement=S,Ve.createFactory=function(O){var H=S.bind(null,O);return H.type=O,H},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(O){return{$$typeof:m,render:O}},Ve.isValidElement=V,Ve.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:ce}},Ve.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},Ve.startTransition=function(O){var H=Z.transition;Z.transition={};try{O()}finally{Z.transition=H}},Ve.unstable_act=ne,Ve.useCallback=function(O,H){return ge.current.useCallback(O,H)},Ve.useContext=function(O){return ge.current.useContext(O)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(O){return ge.current.useDeferredValue(O)},Ve.useEffect=function(O,H){return ge.current.useEffect(O,H)},Ve.useId=function(){return ge.current.useId()},Ve.useImperativeHandle=function(O,H,Ie){return ge.current.useImperativeHandle(O,H,Ie)},Ve.useInsertionEffect=function(O,H){return ge.current.useInsertionEffect(O,H)},Ve.useLayoutEffect=function(O,H){return ge.current.useLayoutEffect(O,H)},Ve.useMemo=function(O,H){return ge.current.useMemo(O,H)},Ve.useReducer=function(O,H,Ie){return ge.current.useReducer(O,H,Ie)},Ve.useRef=function(O){return ge.current.useRef(O)},Ve.useState=function(O){return ge.current.useState(O)},Ve.useSyncExternalStore=function(O,H,Ie){return ge.current.useSyncExternalStore(O,H,Ie)},Ve.useTransition=function(){return ge.current.useTransition()},Ve.version="18.3.1",Ve}var eg;function Yd(){return eg||(eg=1,sd.exports=Sw()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Aw(){if(tg)return Na;tg=1;var i=Yd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var T,C={},x=null,z=null;_!==void 0&&(x=""+_),y.key!==void 0&&(x=""+y.key),y.ref!==void 0&&(z=y.ref);for(T in y)s.call(y,T)&&!u.hasOwnProperty(T)&&(C[T]=y[T]);if(m&&m.defaultProps)for(T in y=m.defaultProps,y)C[T]===void 0&&(C[T]=y[T]);return{$$typeof:e,type:m,key:x,ref:z,props:C,_owner:o.current}}return Na.Fragment=t,Na.jsx=h,Na.jsxs=h,Na}var ng;function Cw(){return ng||(ng=1,id.exports=Aw()),id.exports}var E=Cw(),Ye=Yd();const Rw=By(Ye);var Cu={},od={exports:{}},nn={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function kw(){return rg||(rg=1,(function(i){function e(Z,he){var ne=Z.length;Z.push(he);e:for(;0<ne;){var O=ne-1>>>1,H=Z[O];if(0<o(H,he))Z[O]=he,Z[ne]=H,ne=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var he=Z[0],ne=Z.pop();if(ne!==he){Z[0]=ne;e:for(var O=0,H=Z.length,Ie=H>>>1;O<Ie;){var Se=2*(O+1)-1,xe=Z[Se],ke=Se+1,be=Z[ke];if(0>o(xe,ne))ke<H&&0>o(be,xe)?(Z[O]=be,Z[ke]=ne,O=ke):(Z[O]=xe,Z[Se]=ne,O=Se);else if(ke<H&&0>o(be,ne))Z[O]=be,Z[ke]=ne,O=ke;else break e}}return he}function o(Z,he){var ne=Z.sortIndex-he.sortIndex;return ne!==0?ne:Z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],T=1,C=null,x=3,z=!1,Y=!1,J=!1,W=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Re(Z){for(var he=t(_);he!==null;){if(he.callback===null)s(_);else if(he.startTime<=Z)s(_),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(_)}}function Pe(Z){if(J=!1,Re(Z),!Y)if(t(y)!==null)Y=!0,ce(qe);else{var he=t(_);he!==null&&ge(Pe,he.startTime-Z)}}function qe(Z,he){Y=!1,J&&(J=!1,we(S),S=-1),z=!0;var ne=x;try{for(Re(he),C=t(y);C!==null&&(!(C.expirationTime>he)||Z&&!N());){var O=C.callback;if(typeof O=="function"){C.callback=null,x=C.priorityLevel;var H=O(C.expirationTime<=he);he=i.unstable_now(),typeof H=="function"?C.callback=H:C===t(y)&&s(y),Re(he)}else s(y);C=t(y)}if(C!==null)var Ie=!0;else{var Se=t(_);Se!==null&&ge(Pe,Se.startTime-he),Ie=!1}return Ie}finally{C=null,x=ne,z=!1}}var Ne=!1,P=null,S=-1,R=5,V=-1;function N(){return!(i.unstable_now()-V<R)}function b(){if(P!==null){var Z=i.unstable_now();V=Z;var he=!0;try{he=P(!0,Z)}finally{he?A():(Ne=!1,P=null)}}else Ne=!1}var A;if(typeof ae=="function")A=function(){ae(b)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,lt=Ue.port2;Ue.port1.onmessage=b,A=function(){lt.postMessage(null)}}else A=function(){W(b,0)};function ce(Z){P=Z,Ne||(Ne=!0,A())}function ge(Z,he){S=W(function(){Z(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){Y||z||(Y=!0,ce(qe))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var ne=x;x=he;try{return Z()}finally{x=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,he){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=x;x=Z;try{return he()}finally{x=ne}},i.unstable_scheduleCallback=function(Z,he,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,Z={id:T++,callback:he,priorityLevel:Z,startTime:ne,expirationTime:H,sortIndex:-1},ne>O?(Z.sortIndex=ne,e(_,Z),t(y)===null&&Z===t(_)&&(J?(we(S),S=-1):J=!0,ge(Pe,ne-O))):(Z.sortIndex=H,e(y,Z),Y||z||(Y=!0,ce(qe))),Z},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Z){var he=x;return function(){var ne=x;x=he;try{return Z.apply(this,arguments)}finally{x=ne}}}})(ld)),ld}var ig;function xw(){return ig||(ig=1,ad.exports=kw()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Pw(){if(sg)return nn;sg=1;var i=Yd(),e=xw();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},C={};function x(n){return y.call(C,n)?!0:y.call(T,n)?!1:_.test(n)?C[n]=!0:(T[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var we=/[\-:]([a-z])/g;function ae(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(we,ae);W[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(we,ae);W[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(we,ae);W[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Re(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Pe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Ne=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),N=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),Z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Ie=!1;function Se(n,r){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,I=f.length-1;1<=v&&0<=I&&d[v]!==f[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==f[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==f[I]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function xe(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case Ne:return"Portal";case R:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case Ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case b:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lt:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case ce:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function We(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=We(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Rn(n){n._valueTracker||(n._valueTracker=gt(n))}function kn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=We(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function $(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function me(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ke(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=De(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ee(n,r){r=r.checked,r!=null&&Re(n,"checked",r,!1)}function gr(n,r){Ee(n,r);var a=De(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&ut(n,r.type,De(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Fi(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,r,a){(r!=="number"||$(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function on(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+De(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Nt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Uo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:De(a)}}function dl(n,r){var a=De(r.value),c=De(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function $r(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function zo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function As(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?zo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qr,fl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ui(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pl=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(n){pl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Hr[r]=Hr[n]})});function Wr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Hr.hasOwnProperty(n)&&Hr[n]?(""+r).trim():r+"px"}function Cs(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Wr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(n,r){if(r){if(Bo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Rs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function ks(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yr=null,_r=null,ct=null;function $o(n){if(n=ga(n)){if(typeof yr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=zl(r),yr(n.stateNode,n.type,r))}}function Kr(n){_r?ct?ct.push(n):ct=[n]:_r=n}function Qr(){if(_r){var n=_r,r=ct;if(ct=_r=null,$o(n),r)for(n=0;n<r.length;n++)$o(r[n])}}function ml(n,r){return n(r)}function gl(){}var $n=!1;function yl(n,r,a){if($n)return n(r,a);$n=!0;try{return ml(n,r,a)}finally{$n=!1,(_r!==null||ct!==null)&&(gl(),Qr())}}function zi(n,r){var a=n.stateNode;if(a===null)return null;var c=zl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Yr=!1;if(m)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Yr=!1}function _l(n,r,a,c,d,f,v,I,k){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var vr=!1,qn=null,xs=!1,yn=null,vl={onError:function(n){vr=!0,qn=n}};function wl(n,r,a,c,d,f,v,I,k){vr=!1,qn=null,_l.apply(vl,arguments)}function qo(n,r,a,c,d,f,v,I,k){if(wl.apply(this,arguments),vr){if(vr){var F=qn;vr=!1,qn=null}else throw Error(t(198));xs||(xs=!0,yn=F)}}function Pn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ho(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function El(n){if(Pn(n)!==n)throw Error(t(188))}function Tl(n){var r=n.alternate;if(!r){if(r=Pn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return El(d),n;if(f===c)return El(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=f;break}if(I===c){v=!0,c=d,a=f;break}I=I.sibling}if(!v){for(I=f.child;I;){if(I===a){v=!0,a=f,c=d;break}if(I===c){v=!0,c=f,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Il(n){return n=Tl(n),n!==null?Bi(n):null}function Bi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Bi(n);if(r!==null)return r;n=n.sibling}return null}var Wo=e.unstable_scheduleCallback,Ps=e.unstable_cancelCallback,$i=e.unstable_shouldYield,wr=e.unstable_requestPaint,Ze=e.unstable_now,Oc=e.unstable_getCurrentPriorityLevel,Ns=e.unstable_ImmediatePriority,Go=e.unstable_UserBlockingPriority,qi=e.unstable_NormalPriority,Ko=e.unstable_LowPriority,Ds=e.unstable_IdlePriority,Hi=null,an=null;function Sl(n){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Hi,n,void 0,(n.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Wi,Hn=Math.log,_n=Math.LN2;function Wi(n){return n>>>=0,n===0?32:31-(Hn(n)/_n|0)|0}var Wn=64,Jr=4194304;function $e(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Er(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=$e(I):(f&=v,f!==0&&(c=$e(f)))}else v=a&~d,v!==0?c=$e(v):f!==0&&(c=$e(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-ln(r),d=1<<a,c|=n[a],r&=~d;return c}function Gi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-ln(f),I=1<<v,k=d[v];k===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Gi(I,r)):k<=r&&(n.expiredLanes|=I),f&=~I}}function Qo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yo(){var n=Wn;return Wn<<=1,(Wn&4194240)===0&&(Wn=64),n}function Xo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Qi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ln(r),n[r]=a}function Lc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ln(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Jo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-ln(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var je=0;function Gn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zo,Vs,ea,ta,na,Kn=!1,bs=[],Qn=null,Yn=null,Dt=null,Yi=new Map,Tr=new Map,un=[],Al="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zr(n,r){switch(n){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Yi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(r.pointerId)}}function Nn(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ga(r),r!==null&&Vs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Cl(n,r,a,c,d){switch(r){case"focusin":return Qn=Nn(Qn,n,r,a,c,d),!0;case"dragenter":return Yn=Nn(Yn,n,r,a,c,d),!0;case"mouseover":return Dt=Nn(Dt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return Yi.set(f,Nn(Yi.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,Tr.set(f,Nn(Tr.get(f)||null,n,r,a,c,d)),!0}return!1}function Os(n){var r=es(n.target);if(r!==null){var a=Pn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ho(a),r!==null){n.blockedOn=r,na(n.priority,function(){ea(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ls(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Gr=c,a.target.dispatchEvent(c),Gr=null}else return r=ga(a),r!==null&&Vs(r),n.blockedOn=a,!1;r.shift()}return!0}function Rl(n,r,a){Qe(n)&&a.delete(r)}function Mc(){Kn=!1,Qn!==null&&Qe(Qn)&&(Qn=null),Yn!==null&&Qe(Yn)&&(Yn=null),Dt!==null&&Qe(Dt)&&(Dt=null),Yi.forEach(Rl),Tr.forEach(Rl)}function ei(n,r){n.blockedOn===r&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mc)))}function ti(n){function r(d){return ei(d,n)}if(0<bs.length){ei(bs[0],n);for(var a=1;a<bs.length;a++){var c=bs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Qn!==null&&ei(Qn,n),Yn!==null&&ei(Yn,n),Dt!==null&&ei(Dt,n),Yi.forEach(r),Tr.forEach(r),a=0;a<un.length;a++)c=un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<un.length&&(a=un[0],a.blockedOn===null);)Os(a),a.blockedOn===null&&un.shift()}var Ir=Pe.ReactCurrentBatchConfig,Sr=!0;function Xn(n,r,a,c){var d=je,f=Ir.transition;Ir.transition=null;try{je=1,ra(n,r,a,c)}finally{je=d,Ir.transition=f}}function kl(n,r,a,c){var d=je,f=Ir.transition;Ir.transition=null;try{je=4,ra(n,r,a,c)}finally{je=d,Ir.transition=f}}function ra(n,r,a,c){if(Sr){var d=Ls(n,r,a,c);if(d===null)Kc(n,r,c,Jn,a),Zr(n,c);else if(Cl(d,n,r,a,c))c.stopPropagation();else if(Zr(n,c),r&4&&-1<Al.indexOf(n)){for(;d!==null;){var f=ga(d);if(f!==null&&Zo(f),f=Ls(n,r,a,c),f===null&&Kc(n,r,c,Jn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Kc(n,r,c,null,a)}}var Jn=null;function Ls(n,r,a,c){if(Jn=null,n=ks(c),n=es(n),n!==null)if(r=Pn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ho(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Jn=n,null}function Ms(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oc()){case Ns:return 1;case Go:return 4;case qi:case Ko:return 16;case Ds:return 536870912;default:return 16}default:return 16}}var cn=null,js=null,Ar=null;function xl(){if(Ar)return Ar;var n,r=js,a=r.length,c,d="value"in cn?cn.value:cn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return Ar=d.slice(n,1<c?1-c:void 0)}function Xi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function ia(){return!1}function Ft(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zn:ia,this.isPropagationStopped=ia,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),r}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Ft(er),ni=ne({},er,{view:0,detail:0}),Fs=Ft(ni),Us,zs,hn,Zi=ne({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ae,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hn&&(hn&&n.type==="mousemove"?(Us=n.screenX-hn.screenX,zs=n.screenY-hn.screenY):zs=Us=0,hn=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:zs}}),sa=Ft(Zi),Pl=ne({},Zi,{dataTransfer:0}),Nl=Ft(Pl),Bs=ne({},ni,{relatedTarget:0}),Vt=Ft(Bs),Dl=ne({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Vl=Ft(Dl),ri=ne({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Ft(ri),p=ne({},er,{data:0}),g=Ft(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function Ae(){return ee}var dt=ne({},ni,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Xi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ae,charCode:function(n){return n.type==="keypress"?Xi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Xi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ge=Ft(dt),yt=ne({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dn=Ft(yt),Cr=ne({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ae}),tr=Ft(Cr),nr=ne({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),$s=Ft(nr),oa=ne({},Zi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Ft(oa),v0=[9,13,27,32],jc=m&&"CompositionEvent"in window,aa=null;m&&"documentMode"in document&&(aa=document.documentMode);var w0=m&&"TextEvent"in window&&!aa,Hf=m&&(!jc||aa&&8<aa&&11>=aa),Wf=" ",Gf=!1;function Kf(n,r){switch(n){case"keyup":return v0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function E0(n,r){switch(n){case"compositionend":return Qf(r);case"keypress":return r.which!==32?null:(Gf=!0,Wf);case"textInput":return n=r.data,n===Wf&&Gf?null:n;default:return null}}function T0(n,r){if(qs)return n==="compositionend"||!jc&&Kf(n,r)?(n=xl(),Ar=js=cn=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Hf&&r.locale!=="ko"?null:r.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!I0[n.type]:r==="textarea"}function Xf(n,r,a,c){Kr(c),r=jl(r,"onChange"),0<r.length&&(a=new Ji("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var la=null,ua=null;function S0(n){mp(n,0)}function bl(n){var r=Qs(n);if(kn(r))return n}function A0(n,r){if(n==="change")return r}var Jf=!1;if(m){var Fc;if(m){var Uc="oninput"in document;if(!Uc){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),Uc=typeof Zf.oninput=="function"}Fc=Uc}else Fc=!1;Jf=Fc&&(!document.documentMode||9<document.documentMode)}function ep(){la&&(la.detachEvent("onpropertychange",tp),ua=la=null)}function tp(n){if(n.propertyName==="value"&&bl(ua)){var r=[];Xf(r,ua,n,ks(n)),yl(S0,r)}}function C0(n,r,a){n==="focusin"?(ep(),la=r,ua=a,la.attachEvent("onpropertychange",tp)):n==="focusout"&&ep()}function R0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bl(ua)}function k0(n,r){if(n==="click")return bl(r)}function x0(n,r){if(n==="input"||n==="change")return bl(r)}function P0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Dn=typeof Object.is=="function"?Object.is:P0;function ca(n,r){if(Dn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Dn(n[d],r[d]))return!1}return!0}function np(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rp(n,r){var a=np(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=np(a)}}function ip(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ip(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function sp(){for(var n=window,r=$();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=$(n.document)}return r}function zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function N0(n){var r=sp(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&ip(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=rp(a,f);var v=rp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var D0=m&&"documentMode"in document&&11>=document.documentMode,Hs=null,Bc=null,ha=null,$c=!1;function op(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Hs==null||Hs!==$(c)||(c=Hs,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ha&&ca(ha,c)||(ha=c,c=jl(Bc,"onSelect"),0<c.length&&(r=new Ji("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Hs)))}function Ol(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ws={animationend:Ol("Animation","AnimationEnd"),animationiteration:Ol("Animation","AnimationIteration"),animationstart:Ol("Animation","AnimationStart"),transitionend:Ol("Transition","TransitionEnd")},qc={},ap={};m&&(ap=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Ll(n){if(qc[n])return qc[n];if(!Ws[n])return n;var r=Ws[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ap)return qc[n]=r[a];return n}var lp=Ll("animationend"),up=Ll("animationiteration"),cp=Ll("animationstart"),hp=Ll("transitionend"),dp=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(n,r){dp.set(n,r),u(r,[n])}for(var Hc=0;Hc<fp.length;Hc++){var Wc=fp[Hc],V0=Wc.toLowerCase(),b0=Wc[0].toUpperCase()+Wc.slice(1);ii(V0,"on"+b0)}ii(lp,"onAnimationEnd"),ii(up,"onAnimationIteration"),ii(cp,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(hp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function pp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,qo(c,r,void 0,n),n.currentTarget=null}function mp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],k=I.instance,F=I.currentTarget;if(I=I.listener,k!==f&&d.isPropagationStopped())break e;pp(d,I,F),f=k}else for(v=0;v<c.length;v++){if(I=c[v],k=I.instance,F=I.currentTarget,I=I.listener,k!==f&&d.isPropagationStopped())break e;pp(d,I,F),f=k}}}if(xs)throw n=yn,xs=!1,yn=null,n}function et(n,r){var a=r[eh];a===void 0&&(a=r[eh]=new Set);var c=n+"__bubble";a.has(c)||(gp(r,n,2,!1),a.add(c))}function Gc(n,r,a){var c=0;r&&(c|=4),gp(a,n,c,r)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function fa(n){if(!n[Ml]){n[Ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(O0.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ml]||(r[Ml]=!0,Gc("selectionchange",!1,r))}}function gp(n,r,a,c){switch(Ms(r)){case 1:var d=Xn;break;case 4:d=kl;break;default:d=ra}a=d.bind(null,r,a,n),d=void 0,!Yr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Kc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;I!==null;){if(v=es(I),v===null)return;if(k=v.tag,k===5||k===6){c=f=v;continue e}I=I.parentNode}}c=c.return}yl(function(){var F=f,K=ks(a),Q=[];e:{var G=dp.get(n);if(G!==void 0){var re=Ji,oe=n;switch(n){case"keypress":if(Xi(a)===0)break e;case"keydown":case"keyup":re=Ge;break;case"focusin":oe="focus",re=Vt;break;case"focusout":oe="blur",re=Vt;break;case"beforeblur":case"afterblur":re=Vt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=tr;break;case lp:case up:case cp:re=Vl;break;case hp:re=$s;break;case"scroll":re=Fs;break;case"wheel":re=_0;break;case"copy":case"cut":case"paste":re=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=dn}var le=(r&4)!==0,ft=!le&&n==="scroll",L=le?G!==null?G+"Capture":null:G;le=[];for(var D=F,j;D!==null;){j=D;var X=j.stateNode;if(j.tag===5&&X!==null&&(j=X,L!==null&&(X=zi(D,L),X!=null&&le.push(pa(D,X,j)))),ft)break;D=D.return}0<le.length&&(G=new re(G,oe,null,a,K),Q.push({event:G,listeners:le}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",G&&a!==Gr&&(oe=a.relatedTarget||a.fromElement)&&(es(oe)||oe[Rr]))break e;if((re||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,re?(oe=a.relatedTarget||a.toElement,re=F,oe=oe?es(oe):null,oe!==null&&(ft=Pn(oe),oe!==ft||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(re=null,oe=F),re!==oe)){if(le=sa,X="onMouseLeave",L="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(le=dn,X="onPointerLeave",L="onPointerEnter",D="pointer"),ft=re==null?G:Qs(re),j=oe==null?G:Qs(oe),G=new le(X,D+"leave",re,a,K),G.target=ft,G.relatedTarget=j,X=null,es(K)===F&&(le=new le(L,D+"enter",oe,a,K),le.target=j,le.relatedTarget=ft,X=le),ft=X,re&&oe)t:{for(le=re,L=oe,D=0,j=le;j;j=Gs(j))D++;for(j=0,X=L;X;X=Gs(X))j++;for(;0<D-j;)le=Gs(le),D--;for(;0<j-D;)L=Gs(L),j--;for(;D--;){if(le===L||L!==null&&le===L.alternate)break t;le=Gs(le),L=Gs(L)}le=null}else le=null;re!==null&&yp(Q,G,re,le,!1),oe!==null&&ft!==null&&yp(Q,ft,oe,le,!0)}}e:{if(G=F?Qs(F):window,re=G.nodeName&&G.nodeName.toLowerCase(),re==="select"||re==="input"&&G.type==="file")var ue=A0;else if(Yf(G))if(Jf)ue=x0;else{ue=R0;var fe=C0}else(re=G.nodeName)&&re.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ue=k0);if(ue&&(ue=ue(n,F))){Xf(Q,ue,a,K);break e}fe&&fe(n,G,F),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&ut(G,"number",G.value)}switch(fe=F?Qs(F):window,n){case"focusin":(Yf(fe)||fe.contentEditable==="true")&&(Hs=fe,Bc=F,ha=null);break;case"focusout":ha=Bc=Hs=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,op(Q,a,K);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":op(Q,a,K)}var pe;if(jc)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else qs?Kf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hf&&a.locale!=="ko"&&(qs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&qs&&(pe=xl()):(cn=K,js="value"in cn?cn.value:cn.textContent,qs=!0)),fe=jl(F,ve),0<fe.length&&(ve=new g(ve,n,null,a,K),Q.push({event:ve,listeners:fe}),pe?ve.data=pe:(pe=Qf(a),pe!==null&&(ve.data=pe)))),(pe=w0?E0(n,a):T0(n,a))&&(F=jl(F,"onBeforeInput"),0<F.length&&(K=new g("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=pe))}mp(Q,r)})}function pa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function jl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=zi(n,a),f!=null&&c.unshift(pa(n,f,d)),f=zi(n,r),f!=null&&c.push(pa(n,f,d))),n=n.return}return c}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var I=a,k=I.alternate,F=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&F!==null&&(I=F,d?(k=zi(a,f),k!=null&&v.unshift(pa(a,k,I))):d||(k=zi(a,f),k!=null&&v.push(pa(a,k,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var L0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function _p(n){return(typeof n=="string"?n:""+n).replace(L0,`
`).replace(M0,"")}function Fl(n,r,a){if(r=_p(r),_p(n)!==r&&a)throw Error(t(425))}function Ul(){}var Qc=null,Yc=null;function Xc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(n){return vp.resolve(null).then(n).catch(U0)}:Jc;function U0(n){setTimeout(function(){throw n})}function Zc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ti(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ti(r)}function si(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function wp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),rr="__reactFiber$"+Ks,ma="__reactProps$"+Ks,Rr="__reactContainer$"+Ks,eh="__reactEvents$"+Ks,z0="__reactListeners$"+Ks,B0="__reactHandles$"+Ks;function es(n){var r=n[rr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Rr]||a[rr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=wp(n);n!==null;){if(a=n[rr])return a;n=wp(n)}return r}n=a,a=n.parentNode}return null}function ga(n){return n=n[rr]||n[Rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[ma]||null}var th=[],Ys=-1;function oi(n){return{current:n}}function tt(n){0>Ys||(n.current=th[Ys],th[Ys]=null,Ys--)}function Xe(n,r){Ys++,th[Ys]=n.current,n.current=r}var ai={},Ut=oi(ai),Xt=oi(!1),ts=ai;function Xs(n,r){var a=n.type.contextTypes;if(!a)return ai;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(n){return n=n.childContextTypes,n!=null}function Bl(){tt(Xt),tt(Ut)}function Ep(n,r,a){if(Ut.current!==ai)throw Error(t(168));Xe(Ut,r),Xe(Xt,a)}function Tp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,be(n)||"Unknown",d));return ne({},a,c)}function $l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ai,ts=Ut.current,Xe(Ut,n),Xe(Xt,Xt.current),!0}function Ip(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Tp(n,r,ts),c.__reactInternalMemoizedMergedChildContext=n,tt(Xt),tt(Ut),Xe(Ut,n)):tt(Xt),Xe(Xt,a)}var kr=null,ql=!1,nh=!1;function Sp(n){kr===null?kr=[n]:kr.push(n)}function $0(n){ql=!0,Sp(n)}function li(){if(!nh&&kr!==null){nh=!0;var n=0,r=je;try{var a=kr;for(je=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}kr=null,ql=!1}catch(d){throw kr!==null&&(kr=kr.slice(n+1)),Wo(Ns,li),d}finally{je=r,nh=!1}}return null}var Js=[],Zs=0,Hl=null,Wl=0,vn=[],wn=0,ns=null,xr=1,Pr="";function rs(n,r){Js[Zs++]=Wl,Js[Zs++]=Hl,Hl=n,Wl=r}function Ap(n,r,a){vn[wn++]=xr,vn[wn++]=Pr,vn[wn++]=ns,ns=n;var c=xr;n=Pr;var d=32-ln(c)-1;c&=~(1<<d),a+=1;var f=32-ln(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,xr=1<<32-ln(r)+d|a<<d|c,Pr=f+n}else xr=1<<f|a<<d|c,Pr=n}function rh(n){n.return!==null&&(rs(n,1),Ap(n,1,0))}function ih(n){for(;n===Hl;)Hl=Js[--Zs],Js[Zs]=null,Wl=Js[--Zs],Js[Zs]=null;for(;n===ns;)ns=vn[--wn],vn[wn]=null,Pr=vn[--wn],vn[wn]=null,xr=vn[--wn],vn[wn]=null}var fn=null,pn=null,rt=!1,Vn=null;function Cp(n,r){var a=Sn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Rp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,fn=n,pn=si(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,fn=n,pn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ns!==null?{id:xr,overflow:Pr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Sn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,fn=n,pn=null,!0):!1;default:return!1}}function sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oh(n){if(rt){var r=pn;if(r){var a=r;if(!Rp(n,r)){if(sh(n))throw Error(t(418));r=si(a.nextSibling);var c=fn;r&&Rp(n,r)?Cp(c,a):(n.flags=n.flags&-4097|2,rt=!1,fn=n)}}else{if(sh(n))throw Error(t(418));n.flags=n.flags&-4097|2,rt=!1,fn=n}}}function kp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fn=n}function Gl(n){if(n!==fn)return!1;if(!rt)return kp(n),rt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Xc(n.type,n.memoizedProps)),r&&(r=pn)){if(sh(n))throw xp(),Error(t(418));for(;r;)Cp(n,r),r=si(r.nextSibling)}if(kp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){pn=si(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}pn=null}}else pn=fn?si(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=pn;n;)n=si(n.nextSibling)}function eo(){pn=fn=null,rt=!1}function ah(n){Vn===null?Vn=[n]:Vn.push(n)}var q0=Pe.ReactCurrentBatchConfig;function ya(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var I=d.refs;v===null?delete I[f]:I[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Kl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Pp(n){var r=n._init;return r(n._payload)}function Np(n){function r(L,D){if(n){var j=L.deletions;j===null?(L.deletions=[D],L.flags|=16):j.push(D)}}function a(L,D){if(!n)return null;for(;D!==null;)r(L,D),D=D.sibling;return null}function c(L,D){for(L=new Map;D!==null;)D.key!==null?L.set(D.key,D):L.set(D.index,D),D=D.sibling;return L}function d(L,D){return L=gi(L,D),L.index=0,L.sibling=null,L}function f(L,D,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<D?(L.flags|=2,D):j):(L.flags|=2,D)):(L.flags|=1048576,D)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,D,j,X){return D===null||D.tag!==6?(D=Jh(j,L.mode,X),D.return=L,D):(D=d(D,j),D.return=L,D)}function k(L,D,j,X){var ue=j.type;return ue===P?K(L,D,j.props.children,X,j.key):D!==null&&(D.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ce&&Pp(ue)===D.type)?(X=d(D,j.props),X.ref=ya(L,D,j),X.return=L,X):(X=_u(j.type,j.key,j.props,null,L.mode,X),X.ref=ya(L,D,j),X.return=L,X)}function F(L,D,j,X){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=Zh(j,L.mode,X),D.return=L,D):(D=d(D,j.children||[]),D.return=L,D)}function K(L,D,j,X,ue){return D===null||D.tag!==7?(D=hs(j,L.mode,X,ue),D.return=L,D):(D=d(D,j),D.return=L,D)}function Q(L,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Jh(""+D,L.mode,j),D.return=L,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case qe:return j=_u(D.type,D.key,D.props,null,L.mode,j),j.ref=ya(L,null,D),j.return=L,j;case Ne:return D=Zh(D,L.mode,j),D.return=L,D;case ce:var X=D._init;return Q(L,X(D._payload),j)}if(it(D)||he(D))return D=hs(D,L.mode,j,null),D.return=L,D;Kl(L,D)}return null}function G(L,D,j,X){var ue=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ue!==null?null:I(L,D,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case qe:return j.key===ue?k(L,D,j,X):null;case Ne:return j.key===ue?F(L,D,j,X):null;case ce:return ue=j._init,G(L,D,ue(j._payload),X)}if(it(j)||he(j))return ue!==null?null:K(L,D,j,X,null);Kl(L,j)}return null}function re(L,D,j,X,ue){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(j)||null,I(D,L,""+X,ue);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case qe:return L=L.get(X.key===null?j:X.key)||null,k(D,L,X,ue);case Ne:return L=L.get(X.key===null?j:X.key)||null,F(D,L,X,ue);case ce:var fe=X._init;return re(L,D,j,fe(X._payload),ue)}if(it(X)||he(X))return L=L.get(j)||null,K(D,L,X,ue,null);Kl(D,X)}return null}function oe(L,D,j,X){for(var ue=null,fe=null,pe=D,ve=D=0,kt=null;pe!==null&&ve<j.length;ve++){pe.index>ve?(kt=pe,pe=null):kt=pe.sibling;var Be=G(L,pe,j[ve],X);if(Be===null){pe===null&&(pe=kt);break}n&&pe&&Be.alternate===null&&r(L,pe),D=f(Be,D,ve),fe===null?ue=Be:fe.sibling=Be,fe=Be,pe=kt}if(ve===j.length)return a(L,pe),rt&&rs(L,ve),ue;if(pe===null){for(;ve<j.length;ve++)pe=Q(L,j[ve],X),pe!==null&&(D=f(pe,D,ve),fe===null?ue=pe:fe.sibling=pe,fe=pe);return rt&&rs(L,ve),ue}for(pe=c(L,pe);ve<j.length;ve++)kt=re(pe,L,ve,j[ve],X),kt!==null&&(n&&kt.alternate!==null&&pe.delete(kt.key===null?ve:kt.key),D=f(kt,D,ve),fe===null?ue=kt:fe.sibling=kt,fe=kt);return n&&pe.forEach(function(yi){return r(L,yi)}),rt&&rs(L,ve),ue}function le(L,D,j,X){var ue=he(j);if(typeof ue!="function")throw Error(t(150));if(j=ue.call(j),j==null)throw Error(t(151));for(var fe=ue=null,pe=D,ve=D=0,kt=null,Be=j.next();pe!==null&&!Be.done;ve++,Be=j.next()){pe.index>ve?(kt=pe,pe=null):kt=pe.sibling;var yi=G(L,pe,Be.value,X);if(yi===null){pe===null&&(pe=kt);break}n&&pe&&yi.alternate===null&&r(L,pe),D=f(yi,D,ve),fe===null?ue=yi:fe.sibling=yi,fe=yi,pe=kt}if(Be.done)return a(L,pe),rt&&rs(L,ve),ue;if(pe===null){for(;!Be.done;ve++,Be=j.next())Be=Q(L,Be.value,X),Be!==null&&(D=f(Be,D,ve),fe===null?ue=Be:fe.sibling=Be,fe=Be);return rt&&rs(L,ve),ue}for(pe=c(L,pe);!Be.done;ve++,Be=j.next())Be=re(pe,L,ve,Be.value,X),Be!==null&&(n&&Be.alternate!==null&&pe.delete(Be.key===null?ve:Be.key),D=f(Be,D,ve),fe===null?ue=Be:fe.sibling=Be,fe=Be);return n&&pe.forEach(function(Iw){return r(L,Iw)}),rt&&rs(L,ve),ue}function ft(L,D,j,X){if(typeof j=="object"&&j!==null&&j.type===P&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case qe:e:{for(var ue=j.key,fe=D;fe!==null;){if(fe.key===ue){if(ue=j.type,ue===P){if(fe.tag===7){a(L,fe.sibling),D=d(fe,j.props.children),D.return=L,L=D;break e}}else if(fe.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ce&&Pp(ue)===fe.type){a(L,fe.sibling),D=d(fe,j.props),D.ref=ya(L,fe,j),D.return=L,L=D;break e}a(L,fe);break}else r(L,fe);fe=fe.sibling}j.type===P?(D=hs(j.props.children,L.mode,X,j.key),D.return=L,L=D):(X=_u(j.type,j.key,j.props,null,L.mode,X),X.ref=ya(L,D,j),X.return=L,L=X)}return v(L);case Ne:e:{for(fe=j.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(L,D.sibling),D=d(D,j.children||[]),D.return=L,L=D;break e}else{a(L,D);break}else r(L,D);D=D.sibling}D=Zh(j,L.mode,X),D.return=L,L=D}return v(L);case ce:return fe=j._init,ft(L,D,fe(j._payload),X)}if(it(j))return oe(L,D,j,X);if(he(j))return le(L,D,j,X);Kl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(L,D.sibling),D=d(D,j),D.return=L,L=D):(a(L,D),D=Jh(j,L.mode,X),D.return=L,L=D),v(L)):a(L,D)}return ft}var to=Np(!0),Dp=Np(!1),Ql=oi(null),Yl=null,no=null,lh=null;function uh(){lh=no=Yl=null}function ch(n){var r=Ql.current;tt(Ql),n._currentValue=r}function hh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function ro(n,r){Yl=n,lh=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Zt=!0),n.firstContext=null)}function En(n){var r=n._currentValue;if(lh!==n)if(n={context:n,memoizedValue:r,next:null},no===null){if(Yl===null)throw Error(t(308));no=n,Yl.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return r}var is=null;function dh(n){is===null?is=[n]:is.push(n)}function Vp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,dh(r)):(a.next=d.next,d.next=a),r.interleaved=a,Nr(n,c)}function Nr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ui=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ci(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Nr(n,a)}return d=c.interleaved,d===null?(r.next=r,dh(c)):(r.next=d.next,d.next=r),c.interleaved=r,Nr(n,a)}function Xl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Jo(n,a)}}function Op(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Jl(n,r,a,c){var d=n.updateQueue;ui=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,F=k.next;k.next=null,v===null?f=F:v.next=F,v=k;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=k))}if(f!==null){var Q=d.baseState;v=0,K=F=k=null,I=f;do{var G=I.lane,re=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:re,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var oe=n,le=I;switch(G=r,re=a,le.tag){case 1:if(oe=le.payload,typeof oe=="function"){Q=oe.call(re,Q,G);break e}Q=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=le.payload,G=typeof oe=="function"?oe.call(re,Q,G):oe,G==null)break e;Q=ne({},Q,G);break e;case 2:ui=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else re={eventTime:re,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=re,k=Q):K=K.next=re,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(k=Q),d.baseState=k,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);as|=v,n.lanes=v,n.memoizedState=Q}}function Lp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var _a={},ir=oi(_a),va=oi(_a),wa=oi(_a);function ss(n){if(n===_a)throw Error(t(174));return n}function ph(n,r){switch(Xe(wa,r),Xe(va,n),Xe(ir,_a),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:As(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=As(r,n)}tt(ir),Xe(ir,r)}function io(){tt(ir),tt(va),tt(wa)}function Mp(n){ss(wa.current);var r=ss(ir.current),a=As(r,n.type);r!==a&&(Xe(va,n),Xe(ir,a))}function mh(n){va.current===n&&(tt(ir),tt(va))}var st=oi(0);function Zl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var gh=[];function yh(){for(var n=0;n<gh.length;n++)gh[n]._workInProgressVersionPrimary=null;gh.length=0}var eu=Pe.ReactCurrentDispatcher,_h=Pe.ReactCurrentBatchConfig,os=0,ot=null,Tt=null,Ct=null,tu=!1,Ea=!1,Ta=0,H0=0;function zt(){throw Error(t(321))}function vh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Dn(n[a],r[a]))return!1;return!0}function wh(n,r,a,c,d,f){if(os=f,ot=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,eu.current=n===null||n.memoizedState===null?Q0:Y0,n=a(c,d),Ea){f=0;do{if(Ea=!1,Ta=0,25<=f)throw Error(t(301));f+=1,Ct=Tt=null,r.updateQueue=null,eu.current=X0,n=a(c,d)}while(Ea)}if(eu.current=iu,r=Tt!==null&&Tt.next!==null,os=0,Ct=Tt=ot=null,tu=!1,r)throw Error(t(300));return n}function Eh(){var n=Ta!==0;return Ta=0,n}function sr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ot.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function Tn(){if(Tt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=Tt.next;var r=Ct===null?ot.memoizedState:Ct.next;if(r!==null)Ct=r,Tt=n;else{if(n===null)throw Error(t(310));Tt=n,n={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ct===null?ot.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function Ia(n,r){return typeof r=="function"?r(n):r}function Th(n){var r=Tn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var I=v=null,k=null,F=f;do{var K=F.lane;if((os&K)===K)k!==null&&(k=k.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};k===null?(I=k=Q,v=c):k=k.next=Q,ot.lanes|=K,as|=K}F=F.next}while(F!==null&&F!==f);k===null?v=c:k.next=I,Dn(c,r.memoizedState)||(Zt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,ot.lanes|=f,as|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Ih(n){var r=Tn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Dn(f,r.memoizedState)||(Zt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function jp(){}function Fp(n,r){var a=ot,c=Tn(),d=r(),f=!Dn(c.memoizedState,d);if(f&&(c.memoizedState=d,Zt=!0),c=c.queue,Sh(Bp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,Sa(9,zp.bind(null,a,c,d,r),void 0,null),Rt===null)throw Error(t(349));(os&30)!==0||Up(a,r,d)}return d}function Up(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=ot.updateQueue,r===null?(r={lastEffect:null,stores:null},ot.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function zp(n,r,a,c){r.value=a,r.getSnapshot=c,$p(r)&&qp(n)}function Bp(n,r,a){return a(function(){$p(r)&&qp(n)})}function $p(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Dn(n,a)}catch{return!0}}function qp(n){var r=Nr(n,1);r!==null&&Mn(r,n,1,-1)}function Hp(n){var r=sr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},r.queue=n,n=n.dispatch=K0.bind(null,ot,n),[r.memoizedState,n]}function Sa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=ot.updateQueue,r===null?(r={lastEffect:null,stores:null},ot.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Wp(){return Tn().memoizedState}function nu(n,r,a,c){var d=sr();ot.flags|=n,d.memoizedState=Sa(1|r,a,void 0,c===void 0?null:c)}function ru(n,r,a,c){var d=Tn();c=c===void 0?null:c;var f=void 0;if(Tt!==null){var v=Tt.memoizedState;if(f=v.destroy,c!==null&&vh(c,v.deps)){d.memoizedState=Sa(r,a,f,c);return}}ot.flags|=n,d.memoizedState=Sa(1|r,a,f,c)}function Gp(n,r){return nu(8390656,8,n,r)}function Sh(n,r){return ru(2048,8,n,r)}function Kp(n,r){return ru(4,2,n,r)}function Qp(n,r){return ru(4,4,n,r)}function Yp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Xp(n,r,a){return a=a!=null?a.concat([n]):null,ru(4,4,Yp.bind(null,r,n),a)}function Ah(){}function Jp(n,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&vh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Zp(n,r){var a=Tn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&vh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function em(n,r,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,Zt=!0),n.memoizedState=a):(Dn(a,r)||(a=Yo(),ot.lanes|=a,as|=a,n.baseState=!0),r)}function W0(n,r){var a=je;je=a!==0&&4>a?a:4,n(!0);var c=_h.transition;_h.transition={};try{n(!1),r()}finally{je=a,_h.transition=c}}function tm(){return Tn().memoizedState}function G0(n,r,a){var c=pi(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},nm(n))rm(r,a);else if(a=Vp(n,r,a,c),a!==null){var d=Qt();Mn(a,n,c,d),im(a,r,c)}}function K0(n,r,a){var c=pi(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(nm(n))rm(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,I=f(v,a);if(d.hasEagerState=!0,d.eagerState=I,Dn(I,v)){var k=r.interleaved;k===null?(d.next=d,dh(r)):(d.next=k.next,k.next=d),r.interleaved=d;return}}catch{}finally{}a=Vp(n,r,d,c),a!==null&&(d=Qt(),Mn(a,n,c,d),im(a,r,c))}}function nm(n){var r=n.alternate;return n===ot||r!==null&&r===ot}function rm(n,r){Ea=tu=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function im(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Jo(n,a)}}var iu={readContext:En,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},Q0={readContext:En,useCallback:function(n,r){return sr().memoizedState=[n,r===void 0?null:r],n},useContext:En,useEffect:Gp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,nu(4194308,4,Yp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return nu(4194308,4,n,r)},useInsertionEffect:function(n,r){return nu(4,2,n,r)},useMemo:function(n,r){var a=sr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=sr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=G0.bind(null,ot,n),[c.memoizedState,n]},useRef:function(n){var r=sr();return n={current:n},r.memoizedState=n},useState:Hp,useDebugValue:Ah,useDeferredValue:function(n){return sr().memoizedState=n},useTransition:function(){var n=Hp(!1),r=n[0];return n=W0.bind(null,n[1]),sr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=ot,d=sr();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Rt===null)throw Error(t(349));(os&30)!==0||Up(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,Gp(Bp.bind(null,c,f,n),[n]),c.flags|=2048,Sa(9,zp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=sr(),r=Rt.identifierPrefix;if(rt){var a=Pr,c=xr;a=(c&~(1<<32-ln(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ta++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=H0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Y0={readContext:En,useCallback:Jp,useContext:En,useEffect:Sh,useImperativeHandle:Xp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:Zp,useReducer:Th,useRef:Wp,useState:function(){return Th(Ia)},useDebugValue:Ah,useDeferredValue:function(n){var r=Tn();return em(r,Tt.memoizedState,n)},useTransition:function(){var n=Th(Ia)[0],r=Tn().memoizedState;return[n,r]},useMutableSource:jp,useSyncExternalStore:Fp,useId:tm,unstable_isNewReconciler:!1},X0={readContext:En,useCallback:Jp,useContext:En,useEffect:Sh,useImperativeHandle:Xp,useInsertionEffect:Kp,useLayoutEffect:Qp,useMemo:Zp,useReducer:Ih,useRef:Wp,useState:function(){return Ih(Ia)},useDebugValue:Ah,useDeferredValue:function(n){var r=Tn();return Tt===null?r.memoizedState=n:em(r,Tt.memoizedState,n)},useTransition:function(){var n=Ih(Ia)[0],r=Tn().memoizedState;return[n,r]},useMutableSource:jp,useSyncExternalStore:Fp,useId:tm,unstable_isNewReconciler:!1};function bn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Ch(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var su={isMounted:function(n){return(n=n._reactInternals)?Pn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Qt(),d=pi(n),f=Dr(c,d);f.payload=r,a!=null&&(f.callback=a),r=ci(n,f,d),r!==null&&(Mn(r,n,d,c),Xl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Qt(),d=pi(n),f=Dr(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ci(n,f,d),r!==null&&(Mn(r,n,d,c),Xl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Qt(),c=pi(n),d=Dr(a,c);d.tag=2,r!=null&&(d.callback=r),r=ci(n,d,c),r!==null&&(Mn(r,n,c,a),Xl(r,n,c))}};function sm(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!ca(a,c)||!ca(d,f):!0}function om(n,r,a){var c=!1,d=ai,f=r.contextType;return typeof f=="object"&&f!==null?f=En(f):(d=Jt(r)?ts:Ut.current,c=r.contextTypes,f=(c=c!=null)?Xs(n,d):ai),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=su,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function am(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&su.enqueueReplaceState(r,r.state,null)}function Rh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},fh(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=En(f):(f=Jt(r)?ts:Ut.current,d.context=Xs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Ch(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&su.enqueueReplaceState(d,d.state,null),Jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,r){try{var a="",c=r;do a+=xe(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function kh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function xh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var J0=typeof WeakMap=="function"?WeakMap:Map;function lm(n,r,a){a=Dr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){du||(du=!0,qh=c),xh(n,r)},a}function um(n,r,a){a=Dr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){xh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){xh(n,r),typeof c!="function"&&(di===null?di=new Set([this]):di.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function cm(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new J0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=dw.bind(null,n,r,a),r.then(n,n))}function hm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function dm(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Dr(-1,1),r.tag=2,ci(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Z0=Pe.ReactCurrentOwner,Zt=!1;function Kt(n,r,a,c){r.child=n===null?Dp(r,null,a,c):to(r,n.child,a,c)}function fm(n,r,a,c,d){a=a.render;var f=r.ref;return ro(r,d),c=wh(n,r,a,c,f,d),a=Eh(),n!==null&&!Zt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Vr(n,r,d)):(rt&&a&&rh(r),r.flags|=1,Kt(n,r,c,d),r.child)}function pm(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Xh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,mm(n,r,f,c,d)):(n=_u(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ca,a(v,c)&&n.ref===r.ref)return Vr(n,r,d)}return r.flags|=1,n=gi(f,c),n.ref=r.ref,n.return=r,r.child=n}function mm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(ca(f,c)&&n.ref===r.ref)if(Zt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Zt=!0);else return r.lanes=n.lanes,Vr(n,r,d)}return Ph(n,r,a,c,d)}function gm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(ao,mn),mn|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xe(ao,mn),mn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Xe(ao,mn),mn|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,Xe(ao,mn),mn|=c;return Kt(n,r,d,a),r.child}function ym(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ph(n,r,a,c,d){var f=Jt(a)?ts:Ut.current;return f=Xs(r,f),ro(r,d),a=wh(n,r,a,c,f,d),c=Eh(),n!==null&&!Zt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Vr(n,r,d)):(rt&&c&&rh(r),r.flags|=1,Kt(n,r,a,d),r.child)}function _m(n,r,a,c,d){if(Jt(a)){var f=!0;$l(r)}else f=!1;if(ro(r,d),r.stateNode===null)au(n,r),om(r,a,c),Rh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var k=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=En(F):(F=Jt(a)?ts:Ut.current,F=Xs(r,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||k!==F)&&am(r,v,c,F),ui=!1;var G=r.memoizedState;v.state=G,Jl(r,c,v,d),k=r.memoizedState,I!==c||G!==k||Xt.current||ui?(typeof K=="function"&&(Ch(r,a,K,c),k=r.memoizedState),(I=ui||sm(r,a,I,c,G,k,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),v.props=c,v.state=k,v.context=F,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,bp(n,r),I=r.memoizedProps,F=r.type===r.elementType?I:bn(r.type,I),v.props=F,Q=r.pendingProps,G=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=En(k):(k=Jt(a)?ts:Ut.current,k=Xs(r,k));var re=a.getDerivedStateFromProps;(K=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||G!==k)&&am(r,v,c,k),ui=!1,G=r.memoizedState,v.state=G,Jl(r,c,v,d);var oe=r.memoizedState;I!==Q||G!==oe||Xt.current||ui?(typeof re=="function"&&(Ch(r,a,re,c),oe=r.memoizedState),(F=ui||sm(r,a,F,c,G,oe,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,oe,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,oe,k)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=oe),v.props=c,v.state=oe,v.context=k,c=F):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return Nh(n,r,a,c,f,d)}function Nh(n,r,a,c,d,f){ym(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Ip(r,a,!1),Vr(n,r,f);c=r.stateNode,Z0.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=to(r,n.child,null,f),r.child=to(r,null,I,f)):Kt(n,r,I,f),r.memoizedState=c.state,d&&Ip(r,a,!0),r.child}function vm(n){var r=n.stateNode;r.pendingContext?Ep(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Ep(n,r.context,!1),ph(n,r.containerInfo)}function wm(n,r,a,c,d){return eo(),ah(d),r.flags|=256,Kt(n,r,a,c),r.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,r,a){var c=r.pendingProps,d=st.current,f=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xe(st,d&1),n===null)return oh(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=vu(v,c,0,null),n=hs(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Vh(a),r.memoizedState=Dh,n):bh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return ew(n,r,v,c,I,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=gi(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?f=gi(I,f):(f=hs(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Vh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=Dh,c}return f=n.child,n=f.sibling,c=gi(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function bh(n,r){return r=vu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ou(n,r,a,c){return c!==null&&ah(c),to(r,n.child,null,a),n=bh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ew(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=kh(Error(t(422))),ou(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=vu({mode:"visible",children:c.children},d,0,null),f=hs(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&to(r,n.child,null,v),r.child.memoizedState=Vh(v),r.memoizedState=Dh,f);if((r.mode&1)===0)return ou(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(t(419)),c=kh(f,c,void 0),ou(n,r,v,c)}if(I=(v&n.childLanes)!==0,Zt||I){if(c=Rt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Nr(n,d),Mn(c,n,d,-1))}return Yh(),c=kh(Error(t(421))),ou(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=fw.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,pn=si(d.nextSibling),fn=r,rt=!0,Vn=null,n!==null&&(vn[wn++]=xr,vn[wn++]=Pr,vn[wn++]=ns,xr=n.id,Pr=n.overflow,ns=r),r=bh(r,c.children),r.flags|=4096,r)}function Tm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),hh(n.return,r,a)}function Oh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Im(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(Kt(n,r,c.children,a),c=st.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tm(n,a,r);else if(n.tag===19)Tm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xe(st,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Zl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Oh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Oh(r,!0,a,null,f);break;case"together":Oh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function au(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Vr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),as|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=gi(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=gi(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function tw(n,r,a){switch(r.tag){case 3:vm(r),eo();break;case 5:Mp(r);break;case 1:Jt(r.type)&&$l(r);break;case 4:ph(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Xe(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Xe(st,st.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Em(n,r,a):(Xe(st,st.current&1),n=Vr(n,r,a),n!==null?n.sibling:null);Xe(st,st.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Im(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xe(st,st.current),c)break;return null;case 22:case 23:return r.lanes=0,gm(n,r,a)}return Vr(n,r,a)}var Sm,Lh,Am,Cm;Sm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lh=function(){},Am=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,ss(ir.current);var f=null;switch(a){case"input":d=me(n,d),c=me(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=Nt(n,d),c=Nt(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ul)}xn(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var k=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&k!==I&&(k!=null||I!=null))if(F==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(f||(f=[]),f.push(F,a)),a=k;else F==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(f=f||[]).push(F,k)):F==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push(F,""+k):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(k!=null&&F==="onScroll"&&et("scroll",n),f||I===k||(f=[])):(f=f||[]).push(F,k))}a&&(f=f||[]).push("style",a);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},Cm=function(n,r,a,c){a!==c&&(r.flags|=4)};function Aa(n,r){if(!rt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function nw(n,r,a){var c=r.pendingProps;switch(ih(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(r),null;case 1:return Jt(r.type)&&Bl(),Bt(r),null;case 3:return c=r.stateNode,io(),tt(Xt),tt(Ut),yh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vn!==null&&(Gh(Vn),Vn=null))),Lh(n,r),Bt(r),null;case 5:mh(r);var d=ss(wa.current);if(a=r.type,n!==null&&r.stateNode!=null)Am(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Bt(r),null}if(n=ss(ir.current),Gl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[rr]=r,c[ma]=f,n=(r.mode&1)!==0,a){case"dialog":et("cancel",c),et("close",c);break;case"iframe":case"object":case"embed":et("load",c);break;case"video":case"audio":for(d=0;d<da.length;d++)et(da[d],c);break;case"source":et("error",c);break;case"img":case"image":case"link":et("error",c),et("load",c);break;case"details":et("toggle",c);break;case"input":Ke(c,f),et("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},et("invalid",c);break;case"textarea":Uo(c,f),et("invalid",c)}xn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var I=f[v];v==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&Fl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&et("scroll",c)}switch(a){case"input":Rn(c),Fi(c,f,!0);break;case"textarea":Rn(c),$r(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Ul)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=zo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[rr]=r,n[ma]=c,Sm(n,r,!1,!1),r.stateNode=n;e:{switch(v=Rs(a,c),a){case"dialog":et("cancel",n),et("close",n),d=c;break;case"iframe":case"object":case"embed":et("load",n),d=c;break;case"video":case"audio":for(d=0;d<da.length;d++)et(da[d],n);d=c;break;case"source":et("error",n),d=c;break;case"img":case"image":case"link":et("error",n),et("load",n),d=c;break;case"details":et("toggle",n),d=c;break;case"input":Ke(n,c),d=me(n,c),et("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),et("invalid",n);break;case"textarea":Uo(n,c),d=Nt(n,c),et("invalid",n);break;default:d=c}xn(a,d),I=d;for(f in I)if(I.hasOwnProperty(f)){var k=I[f];f==="style"?Cs(n,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&fl(n,k)):f==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ui(n,k):typeof k=="number"&&Ui(n,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?k!=null&&f==="onScroll"&&et("scroll",n):k!=null&&Re(n,f,k,v))}switch(a){case"input":Rn(n),Fi(n,c,!1);break;case"textarea":Rn(n),$r(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?on(n,!!c.multiple,f,!1):c.defaultValue!=null&&on(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ul)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Bt(r),null;case 6:if(n&&r.stateNode!=null)Cm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=ss(wa.current),ss(ir.current),Gl(r)){if(c=r.stateNode,a=r.memoizedProps,c[rr]=r,(f=c.nodeValue!==a)&&(n=fn,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[rr]=r,r.stateNode=c}return Bt(r),null;case 13:if(tt(st),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rt&&pn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xp(),eo(),r.flags|=98560,f=!1;else if(f=Gl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[rr]=r}else eo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Bt(r),f=!1}else Vn!==null&&(Gh(Vn),Vn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(st.current&1)!==0?It===0&&(It=3):Yh())),r.updateQueue!==null&&(r.flags|=4),Bt(r),null);case 4:return io(),Lh(n,r),n===null&&fa(r.stateNode.containerInfo),Bt(r),null;case 10:return ch(r.type._context),Bt(r),null;case 17:return Jt(r.type)&&Bl(),Bt(r),null;case 19:if(tt(st),f=r.memoizedState,f===null)return Bt(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)Aa(f,!1);else{if(It!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Zl(n),v!==null){for(r.flags|=128,Aa(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xe(st,st.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ze()>lo&&(r.flags|=128,c=!0,Aa(f,!1),r.lanes=4194304)}else{if(!c)if(n=Zl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Aa(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!rt)return Bt(r),null}else 2*Ze()-f.renderingStartTime>lo&&a!==1073741824&&(r.flags|=128,c=!0,Aa(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ze(),r.sibling=null,a=st.current,Xe(st,c?a&1|2:a&1),r):(Bt(r),null);case 22:case 23:return Qh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(mn&1073741824)!==0&&(Bt(r),r.subtreeFlags&6&&(r.flags|=8192)):Bt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function rw(n,r){switch(ih(r),r.tag){case 1:return Jt(r.type)&&Bl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return io(),tt(Xt),tt(Ut),yh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return mh(r),null;case 13:if(tt(st),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));eo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return tt(st),null;case 4:return io(),null;case 10:return ch(r.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var lu=!1,$t=!1,iw=typeof WeakSet=="function"?WeakSet:Set,se=null;function oo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ht(n,r,c)}else a.current=null}function Mh(n,r,a){try{a()}catch(c){ht(n,r,c)}}var Rm=!1;function sw(n,r){if(Qc=Sr,n=sp(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,I=-1,k=-1,F=0,K=0,Q=n,G=null;t:for(;;){for(var re;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==f||c!==0&&Q.nodeType!==3||(k=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(re=Q.firstChild)!==null;)G=Q,Q=re;for(;;){if(Q===n)break t;if(G===a&&++F===d&&(I=v),G===f&&++K===c&&(k=v),(re=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=re}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},Sr=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var oe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var le=oe.memoizedProps,ft=oe.memoizedState,L=r.stateNode,D=L.getSnapshotBeforeUpdate(r.elementType===r.type?le:bn(r.type,le),ft);L.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){ht(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return oe=Rm,Rm=!1,oe}function Ca(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&Mh(r,a,f)}d=d.next}while(d!==c)}}function uu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function jh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function km(n){var r=n.alternate;r!==null&&(n.alternate=null,km(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[rr],delete r[ma],delete r[eh],delete r[z0],delete r[B0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Ul));else if(c!==4&&(n=n.child,n!==null))for(Fh(n,r,a),n=n.sibling;n!==null;)Fh(n,r,a),n=n.sibling}function Uh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uh(n,r,a),n=n.sibling;n!==null;)Uh(n,r,a),n=n.sibling}var bt=null,On=!1;function hi(n,r,a){for(a=a.child;a!==null;)Nm(n,r,a),a=a.sibling}function Nm(n,r,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:$t||oo(a,r);case 6:var c=bt,d=On;bt=null,hi(n,r,a),bt=c,On=d,bt!==null&&(On?(n=bt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(On?(n=bt,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),ti(n)):Zc(bt,a.stateNode));break;case 4:c=bt,d=On,bt=a.stateNode.containerInfo,On=!0,hi(n,r,a),bt=c,On=d;break;case 0:case 11:case 14:case 15:if(!$t&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Mh(a,r,v),d=d.next}while(d!==c)}hi(n,r,a);break;case 1:if(!$t&&(oo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){ht(a,r,I)}hi(n,r,a);break;case 21:hi(n,r,a);break;case 22:a.mode&1?($t=(c=$t)||a.memoizedState!==null,hi(n,r,a),$t=c):hi(n,r,a);break;default:hi(n,r,a)}}function Dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new iw),r.forEach(function(c){var d=pw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:bt=I.stateNode,On=!1;break e;case 3:bt=I.stateNode.containerInfo,On=!0;break e;case 4:bt=I.stateNode.containerInfo,On=!0;break e}I=I.return}if(bt===null)throw Error(t(160));Nm(f,v,d),bt=null,On=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(F){ht(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Vm(r,n),r=r.sibling}function Vm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(r,n),or(n),c&4){try{Ca(3,n,n.return),uu(3,n)}catch(le){ht(n,n.return,le)}try{Ca(5,n,n.return)}catch(le){ht(n,n.return,le)}}break;case 1:Ln(r,n),or(n),c&512&&a!==null&&oo(a,a.return);break;case 5:if(Ln(r,n),or(n),c&512&&a!==null&&oo(a,a.return),n.flags&32){var d=n.stateNode;try{Ui(d,"")}catch(le){ht(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&Ee(d,f),Rs(I,v);var F=Rs(I,f);for(v=0;v<k.length;v+=2){var K=k[v],Q=k[v+1];K==="style"?Cs(d,Q):K==="dangerouslySetInnerHTML"?fl(d,Q):K==="children"?Ui(d,Q):Re(d,K,Q,F)}switch(I){case"input":gr(d,f);break;case"textarea":dl(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var re=f.value;re!=null?on(d,!!f.multiple,re,!1):G!==!!f.multiple&&(f.defaultValue!=null?on(d,!!f.multiple,f.defaultValue,!0):on(d,!!f.multiple,f.multiple?[]:"",!1))}d[ma]=f}catch(le){ht(n,n.return,le)}}break;case 6:if(Ln(r,n),or(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(le){ht(n,n.return,le)}}break;case 3:if(Ln(r,n),or(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ti(r.containerInfo)}catch(le){ht(n,n.return,le)}break;case 4:Ln(r,n),or(n);break;case 13:Ln(r,n),or(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||($h=Ze())),c&4&&Dm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?($t=(F=$t)||K,Ln(r,n),$t=F):Ln(r,n),or(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Q=se=K;se!==null;){switch(G=se,re=G.child,G.tag){case 0:case 11:case 14:case 15:Ca(4,G,G.return);break;case 1:oo(G,G.return);var oe=G.stateNode;if(typeof oe.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,oe.props=r.memoizedProps,oe.state=r.memoizedState,oe.componentWillUnmount()}catch(le){ht(c,a,le)}}break;case 5:oo(G,G.return);break;case 22:if(G.memoizedState!==null){Lm(Q);continue}}re!==null?(re.return=G,se=re):Lm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=Q.stateNode,k=Q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Wr("display",v))}catch(le){ht(n,n.return,le)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(le){ht(n,n.return,le)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Ln(r,n),or(n),c&4&&Dm(n);break;case 21:break;default:Ln(r,n),or(n)}}function or(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ui(d,""),c.flags&=-33);var f=Pm(n);Uh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Pm(n);Fh(n,I,v);break;default:throw Error(t(161))}}catch(k){ht(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function ow(n,r,a){se=n,bm(n)}function bm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||lu;if(!v){var I=d.alternate,k=I!==null&&I.memoizedState!==null||$t;I=lu;var F=$t;if(lu=v,($t=k)&&!F)for(se=d;se!==null;)v=se,k=v.child,v.tag===22&&v.memoizedState!==null?Mm(d):k!==null?(k.return=v,se=k):Mm(d);for(;f!==null;)se=f,bm(f),f=f.sibling;se=d,lu=I,$t=F}Om(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,se=f):Om(n)}}function Om(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:$t||uu(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!$t)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:bn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Lp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Lp(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&ti(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$t||r.flags&512&&jh(r)}catch(G){ht(r,r.return,G)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function Lm(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function Mm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{uu(4,r)}catch(k){ht(r,a,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(k){ht(r,d,k)}}var f=r.return;try{jh(r)}catch(k){ht(r,f,k)}break;case 5:var v=r.return;try{jh(r)}catch(k){ht(r,v,k)}}}catch(k){ht(r,r.return,k)}if(r===n){se=null;break}var I=r.sibling;if(I!==null){I.return=r.return,se=I;break}se=r.return}}var aw=Math.ceil,cu=Pe.ReactCurrentDispatcher,zh=Pe.ReactCurrentOwner,In=Pe.ReactCurrentBatchConfig,ze=0,Rt=null,_t=null,Ot=0,mn=0,ao=oi(0),It=0,Ra=null,as=0,hu=0,Bh=0,ka=null,en=null,$h=0,lo=1/0,br=null,du=!1,qh=null,di=null,fu=!1,fi=null,pu=0,xa=0,Hh=null,mu=-1,gu=0;function Qt(){return(ze&6)!==0?Ze():mu!==-1?mu:mu=Ze()}function pi(n){return(n.mode&1)===0?1:(ze&2)!==0&&Ot!==0?Ot&-Ot:q0.transition!==null?(gu===0&&(gu=Yo()),gu):(n=je,n!==0||(n=window.event,n=n===void 0?16:Ms(n.type)),n)}function Mn(n,r,a,c){if(50<xa)throw xa=0,Hh=null,Error(t(185));Qi(n,a,c),((ze&2)===0||n!==Rt)&&(n===Rt&&((ze&2)===0&&(hu|=a),It===4&&mi(n,Ot)),tn(n,c),a===1&&ze===0&&(r.mode&1)===0&&(lo=Ze()+500,ql&&li()))}function tn(n,r){var a=n.callbackNode;Ki(n,r);var c=Er(n,n===Rt?Ot:0);if(c===0)a!==null&&Ps(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ps(a),r===1)n.tag===0?$0(Fm.bind(null,n)):Sp(Fm.bind(null,n)),F0(function(){(ze&6)===0&&li()}),a=null;else{switch(Gn(c)){case 1:a=Ns;break;case 4:a=Go;break;case 16:a=qi;break;case 536870912:a=Ds;break;default:a=qi}a=Gm(a,jm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function jm(n,r){if(mu=-1,gu=0,(ze&6)!==0)throw Error(t(327));var a=n.callbackNode;if(uo()&&n.callbackNode!==a)return null;var c=Er(n,n===Rt?Ot:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=yu(n,c);else{r=c;var d=ze;ze|=2;var f=zm();(Rt!==n||Ot!==r)&&(br=null,lo=Ze()+500,us(n,r));do try{cw();break}catch(I){Um(n,I)}while(!0);uh(),cu.current=f,ze=d,_t!==null?r=0:(Rt=null,Ot=0,r=It)}if(r!==0){if(r===2&&(d=Qo(n),d!==0&&(c=d,r=Wh(n,d))),r===1)throw a=Ra,us(n,0),mi(n,c),tn(n,Ze()),a;if(r===6)mi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!lw(d)&&(r=yu(n,c),r===2&&(f=Qo(n),f!==0&&(c=f,r=Wh(n,f))),r===1))throw a=Ra,us(n,0),mi(n,c),tn(n,Ze()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:cs(n,en,br);break;case 3:if(mi(n,c),(c&130023424)===c&&(r=$h+500-Ze(),10<r)){if(Er(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Jc(cs.bind(null,n,en,br),r);break}cs(n,en,br);break;case 4:if(mi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-ln(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*aw(c/1960))-c,10<c){n.timeoutHandle=Jc(cs.bind(null,n,en,br),c);break}cs(n,en,br);break;case 5:cs(n,en,br);break;default:throw Error(t(329))}}}return tn(n,Ze()),n.callbackNode===a?jm.bind(null,n):null}function Wh(n,r){var a=ka;return n.current.memoizedState.isDehydrated&&(us(n,r).flags|=256),n=yu(n,r),n!==2&&(r=en,en=a,r!==null&&Gh(r)),n}function Gh(n){en===null?en=n:en.push.apply(en,n)}function lw(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Dn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function mi(n,r){for(r&=~Bh,r&=~hu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ln(r),c=1<<a;n[a]=-1,r&=~c}}function Fm(n){if((ze&6)!==0)throw Error(t(327));uo();var r=Er(n,0);if((r&1)===0)return tn(n,Ze()),null;var a=yu(n,r);if(n.tag!==0&&a===2){var c=Qo(n);c!==0&&(r=c,a=Wh(n,c))}if(a===1)throw a=Ra,us(n,0),mi(n,r),tn(n,Ze()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,cs(n,en,br),tn(n,Ze()),null}function Kh(n,r){var a=ze;ze|=1;try{return n(r)}finally{ze=a,ze===0&&(lo=Ze()+500,ql&&li())}}function ls(n){fi!==null&&fi.tag===0&&(ze&6)===0&&uo();var r=ze;ze|=1;var a=In.transition,c=je;try{if(In.transition=null,je=1,n)return n()}finally{je=c,In.transition=a,ze=r,(ze&6)===0&&li()}}function Qh(){mn=ao.current,tt(ao)}function us(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,j0(a)),_t!==null)for(a=_t.return;a!==null;){var c=a;switch(ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bl();break;case 3:io(),tt(Xt),tt(Ut),yh();break;case 5:mh(c);break;case 4:io();break;case 13:tt(st);break;case 19:tt(st);break;case 10:ch(c.type._context);break;case 22:case 23:Qh()}a=a.return}if(Rt=n,_t=n=gi(n.current,null),Ot=mn=r,It=0,Ra=null,Bh=hu=as=0,en=ka=null,is!==null){for(r=0;r<is.length;r++)if(a=is[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}is=null}return n}function Um(n,r){do{var a=_t;try{if(uh(),eu.current=iu,tu){for(var c=ot.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}tu=!1}if(os=0,Ct=Tt=ot=null,Ea=!1,Ta=0,zh.current=null,a===null||a.return===null){It=1,Ra=r,_t=null;break}e:{var f=n,v=a.return,I=a,k=r;if(r=Ot,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var F=k,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var re=hm(v);if(re!==null){re.flags&=-257,dm(re,v,I,f,r),re.mode&1&&cm(f,F,r),r=re,k=F;var oe=r.updateQueue;if(oe===null){var le=new Set;le.add(k),r.updateQueue=le}else oe.add(k);break e}else{if((r&1)===0){cm(f,F,r),Yh();break e}k=Error(t(426))}}else if(rt&&I.mode&1){var ft=hm(v);if(ft!==null){(ft.flags&65536)===0&&(ft.flags|=256),dm(ft,v,I,f,r),ah(so(k,I));break e}}f=k=so(k,I),It!==4&&(It=2),ka===null?ka=[f]:ka.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=lm(f,k,r);Op(f,L);break e;case 1:I=k;var D=f.type,j=f.stateNode;if((f.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(di===null||!di.has(j)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=um(f,I,r);Op(f,X);break e}}f=f.return}while(f!==null)}$m(a)}catch(ue){r=ue,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function zm(){var n=cu.current;return cu.current=iu,n===null?iu:n}function Yh(){(It===0||It===3||It===2)&&(It=4),Rt===null||(as&268435455)===0&&(hu&268435455)===0||mi(Rt,Ot)}function yu(n,r){var a=ze;ze|=2;var c=zm();(Rt!==n||Ot!==r)&&(br=null,us(n,r));do try{uw();break}catch(d){Um(n,d)}while(!0);if(uh(),ze=a,cu.current=c,_t!==null)throw Error(t(261));return Rt=null,Ot=0,It}function uw(){for(;_t!==null;)Bm(_t)}function cw(){for(;_t!==null&&!$i();)Bm(_t)}function Bm(n){var r=Wm(n.alternate,n,mn);n.memoizedProps=n.pendingProps,r===null?$m(n):_t=r,zh.current=null}function $m(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=nw(a,r,mn),a!==null){_t=a;return}}else{if(a=rw(a,r),a!==null){a.flags&=32767,_t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{It=6,_t=null;return}}if(r=r.sibling,r!==null){_t=r;return}_t=r=n}while(r!==null);It===0&&(It=5)}function cs(n,r,a){var c=je,d=In.transition;try{In.transition=null,je=1,hw(n,r,a,c)}finally{In.transition=d,je=c}return null}function hw(n,r,a,c){do uo();while(fi!==null);if((ze&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Lc(n,f),n===Rt&&(_t=Rt=null,Ot=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fu||(fu=!0,Gm(qi,function(){return uo(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=In.transition,In.transition=null;var v=je;je=1;var I=ze;ze|=4,zh.current=null,sw(n,a),Vm(a,n),N0(Yc),Sr=!!Qc,Yc=Qc=null,n.current=a,ow(a),wr(),ze=I,je=v,In.transition=f}else n.current=a;if(fu&&(fu=!1,fi=n,pu=d),f=n.pendingLanes,f===0&&(di=null),Sl(a.stateNode),tn(n,Ze()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(du)throw du=!1,n=qh,qh=null,n;return(pu&1)!==0&&n.tag!==0&&uo(),f=n.pendingLanes,(f&1)!==0?n===Hh?xa++:(xa=0,Hh=n):xa=0,li(),null}function uo(){if(fi!==null){var n=Gn(pu),r=In.transition,a=je;try{if(In.transition=null,je=16>n?16:n,fi===null)var c=!1;else{if(n=fi,fi=null,pu=0,(ze&6)!==0)throw Error(t(331));var d=ze;for(ze|=4,se=n.current;se!==null;){var f=se,v=f.child;if((se.flags&16)!==0){var I=f.deletions;if(I!==null){for(var k=0;k<I.length;k++){var F=I[k];for(se=F;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:Ca(8,K,f)}var Q=K.child;if(Q!==null)Q.return=K,se=Q;else for(;se!==null;){K=se;var G=K.sibling,re=K.return;if(km(K),K===F){se=null;break}if(G!==null){G.return=re,se=G;break}se=re}}}var oe=f.alternate;if(oe!==null){var le=oe.child;if(le!==null){oe.child=null;do{var ft=le.sibling;le.sibling=null,le=ft}while(le!==null)}}se=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,se=v;else e:for(;se!==null;){if(f=se,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Ca(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,se=L;break e}se=f.return}}var D=n.current;for(se=D;se!==null;){v=se;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,se=j;else e:for(v=D;se!==null;){if(I=se,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:uu(9,I)}}catch(ue){ht(I,I.return,ue)}if(I===v){se=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,se=X;break e}se=I.return}}if(ze=d,li(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Hi,n)}catch{}c=!0}return c}finally{je=a,In.transition=r}}return!1}function qm(n,r,a){r=so(a,r),r=lm(n,r,1),n=ci(n,r,1),r=Qt(),n!==null&&(Qi(n,1,r),tn(n,r))}function ht(n,r,a){if(n.tag===3)qm(n,n,a);else for(;r!==null;){if(r.tag===3){qm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(di===null||!di.has(c))){n=so(a,n),n=um(r,n,1),r=ci(r,n,1),n=Qt(),r!==null&&(Qi(r,1,n),tn(r,n));break}}r=r.return}}function dw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Qt(),n.pingedLanes|=n.suspendedLanes&a,Rt===n&&(Ot&a)===a&&(It===4||It===3&&(Ot&130023424)===Ot&&500>Ze()-$h?us(n,0):Bh|=a),tn(n,r)}function Hm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Jr,Jr<<=1,(Jr&130023424)===0&&(Jr=4194304)));var a=Qt();n=Nr(n,r),n!==null&&(Qi(n,r,a),tn(n,a))}function fw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Hm(n,a)}function pw(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Hm(n,a)}var Wm;Wm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Xt.current)Zt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Zt=!1,tw(n,r,a);Zt=(n.flags&131072)!==0}else Zt=!1,rt&&(r.flags&1048576)!==0&&Ap(r,Wl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;au(n,r),n=r.pendingProps;var d=Xs(r,Ut.current);ro(r,a),d=wh(null,r,c,n,d,a);var f=Eh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Jt(c)?(f=!0,$l(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fh(r),d.updater=su,r.stateNode=d,d._reactInternals=r,Rh(r,c,n,a),r=Nh(null,r,c,!0,f,a)):(r.tag=0,rt&&f&&rh(r),Kt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(au(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=gw(c),n=bn(c,n),d){case 0:r=Ph(null,r,c,n,a);break e;case 1:r=_m(null,r,c,n,a);break e;case 11:r=fm(null,r,c,n,a);break e;case 14:r=pm(null,r,c,bn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:bn(c,d),Ph(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:bn(c,d),_m(n,r,c,d,a);case 3:e:{if(vm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,bp(n,r),Jl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=so(Error(t(423)),r),r=wm(n,r,c,a,d);break e}else if(c!==d){d=so(Error(t(424)),r),r=wm(n,r,c,a,d);break e}else for(pn=si(r.stateNode.containerInfo.firstChild),fn=r,rt=!0,Vn=null,a=Dp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),c===d){r=Vr(n,r,a);break e}Kt(n,r,c,a)}r=r.child}return r;case 5:return Mp(r),n===null&&oh(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Xc(c,d)?v=null:f!==null&&Xc(c,f)&&(r.flags|=32),ym(n,r),Kt(n,r,v,a),r.child;case 6:return n===null&&oh(r),null;case 13:return Em(n,r,a);case 4:return ph(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=to(r,null,c,a):Kt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:bn(c,d),fm(n,r,c,d,a);case 7:return Kt(n,r,r.pendingProps,a),r.child;case 8:return Kt(n,r,r.pendingProps.children,a),r.child;case 12:return Kt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,Xe(Ql,c._currentValue),c._currentValue=v,f!==null)if(Dn(f.value,v)){if(f.children===d.children&&!Xt.current){r=Vr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var I=f.dependencies;if(I!==null){v=f.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(f.tag===1){k=Dr(-1,a&-a),k.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?k.next=k:(k.next=K.next,K.next=k),F.pending=k}}f.lanes|=a,k=f.alternate,k!==null&&(k.lanes|=a),hh(f.return,a,r),I.lanes|=a;break}k=k.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),hh(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}Kt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,ro(r,a),d=En(d),c=c(d),r.flags|=1,Kt(n,r,c,a),r.child;case 14:return c=r.type,d=bn(c,r.pendingProps),d=bn(c.type,d),pm(n,r,c,d,a);case 15:return mm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:bn(c,d),au(n,r),r.tag=1,Jt(c)?(n=!0,$l(r)):n=!1,ro(r,a),om(r,c,d),Rh(r,c,d,a),Nh(null,r,c,!0,n,a);case 19:return Im(n,r,a);case 22:return gm(n,r,a)}throw Error(t(156,r.tag))};function Gm(n,r){return Wo(n,r)}function mw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(n,r,a,c){return new mw(n,r,a,c)}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gw(n){if(typeof n=="function")return Xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===lt)return 14}return 2}function gi(n,r){var a=n.alternate;return a===null?(a=Sn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _u(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Xh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return hs(a.children,d,f,r);case S:v=8,d|=8;break;case R:return n=Sn(12,a,r,d|2),n.elementType=R,n.lanes=f,n;case A:return n=Sn(13,a,r,d),n.elementType=A,n.lanes=f,n;case Ue:return n=Sn(19,a,r,d),n.elementType=Ue,n.lanes=f,n;case ge:return vu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:v=10;break e;case N:v=9;break e;case b:v=11;break e;case lt:v=14;break e;case ce:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Sn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function hs(n,r,a,c){return n=Sn(7,n,c,r),n.lanes=a,n}function vu(n,r,a,c){return n=Sn(22,n,c,r),n.elementType=ge,n.lanes=a,n.stateNode={isHidden:!1},n}function Jh(n,r,a){return n=Sn(6,n,null,r),n.lanes=a,n}function Zh(n,r,a){return r=Sn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function yw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ed(n,r,a,c,d,f,v,I,k){return n=new yw(n,r,a,I,k),r===1?(r=1,f===!0&&(r|=8)):r=0,f=Sn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(f),n}function _w(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ne,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Km(n){if(!n)return ai;n=n._reactInternals;e:{if(Pn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Jt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Jt(a))return Tp(n,a,r)}return r}function Qm(n,r,a,c,d,f,v,I,k){return n=ed(a,c,!0,n,d,f,v,I,k),n.context=Km(null),a=n.current,c=Qt(),d=pi(a),f=Dr(c,d),f.callback=r??null,ci(a,f,d),n.current.lanes=d,Qi(n,d,c),tn(n,c),n}function wu(n,r,a,c){var d=r.current,f=Qt(),v=pi(d);return a=Km(a),r.context===null?r.context=a:r.pendingContext=a,r=Dr(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ci(d,r,v),n!==null&&(Mn(n,d,v,f),Xl(n,d,v)),v}function Eu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ym(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function td(n,r){Ym(n,r),(n=n.alternate)&&Ym(n,r)}function vw(){return null}var Xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}Tu.prototype.render=nd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));wu(n,r,null,null)},Tu.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ls(function(){wu(null,n,null,null)}),r[Rr]=null}};function Tu(n){this._internalRoot=n}Tu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ta();n={blockedOn:null,target:n,priority:r};for(var a=0;a<un.length&&r!==0&&r<un[a].priority;a++);un.splice(a,0,n),a===0&&Os(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jm(){}function ww(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=Eu(v);f.call(F)}}var v=Qm(r,c,n,0,null,!1,!1,"",Jm);return n._reactRootContainer=v,n[Rr]=v.current,fa(n.nodeType===8?n.parentNode:n),ls(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=Eu(k);I.call(F)}}var k=ed(n,0,!1,null,null,!1,!1,"",Jm);return n._reactRootContainer=k,n[Rr]=k.current,fa(n.nodeType===8?n.parentNode:n),ls(function(){wu(r,k,a,c)}),k}function Su(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var I=d;d=function(){var k=Eu(v);I.call(k)}}wu(r,v,n,d)}else v=ww(a,r,n,d,c);return Eu(v)}Zo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=$e(r.pendingLanes);a!==0&&(Jo(r,a|1),tn(r,Ze()),(ze&6)===0&&(lo=Ze()+500,li()))}break;case 13:ls(function(){var c=Nr(n,1);if(c!==null){var d=Qt();Mn(c,n,1,d)}}),td(n,1)}},Vs=function(n){if(n.tag===13){var r=Nr(n,134217728);if(r!==null){var a=Qt();Mn(r,n,134217728,a)}td(n,134217728)}},ea=function(n){if(n.tag===13){var r=pi(n),a=Nr(n,r);if(a!==null){var c=Qt();Mn(a,n,r,c)}td(n,r)}},ta=function(){return je},na=function(n,r){var a=je;try{return je=n,r()}finally{je=a}},yr=function(n,r,a){switch(r){case"input":if(gr(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=zl(c);if(!d)throw Error(t(90));kn(c),gr(c,d)}}}break;case"textarea":dl(n,a);break;case"select":r=a.value,r!=null&&on(n,!!a.multiple,r,!1)}},ml=Kh,gl=ls;var Ew={usingClientEntryPoint:!1,Events:[ga,Qs,zl,Kr,Qr,Kh]},Pa={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tw={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Il(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{Hi=Au.inject(Tw),an=Au}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew,nn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(r))throw Error(t(200));return _w(n,r,null,a)},nn.createRoot=function(n,r){if(!rd(n))throw Error(t(299));var a=!1,c="",d=Xm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=ed(n,1,!1,null,null,a,!1,c,d),n[Rr]=r.current,fa(n.nodeType===8?n.parentNode:n),new nd(r)},nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Il(r),n=n===null?null:n.stateNode,n},nn.flushSync=function(n){return ls(n)},nn.hydrate=function(n,r,a){if(!Iu(r))throw Error(t(200));return Su(null,n,r,!0,a)},nn.hydrateRoot=function(n,r,a){if(!rd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Xm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Qm(r,null,n,1,a??null,d,!1,f,v),n[Rr]=r.current,fa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Tu(r)},nn.render=function(n,r,a){if(!Iu(r))throw Error(t(200));return Su(null,n,r,!1,a)},nn.unmountComponentAtNode=function(n){if(!Iu(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Su(null,null,n,!1,function(){n._reactRootContainer=null,n[Rr]=null})}),!0):!1},nn.unstable_batchedUpdates=Kh,nn.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Iu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Su(n,r,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var og;function Nw(){if(og)return od.exports;og=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),od.exports=Pw(),od.exports}var ag;function Dw(){if(ag)return Cu;ag=1;var i=Nw();return Cu.createRoot=i.createRoot,Cu.hydrateRoot=i.hydrateRoot,Cu}var Vw=Dw();const bw=By(Vw);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$y=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Ye.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>Ye.createElement("svg",{ref:y,...Lw,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:$y("lucide",o),...m},[...h.map(([_,T])=>Ye.createElement(_,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(i,e)=>{const t=Ye.forwardRef(({className:s,...o},u)=>Ye.createElement(Mw,{ref:u,iconNode:e,className:$y(`lucide-${Ow(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=At("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=At("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=At("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=At("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=At("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=At("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=At("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=At("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=At("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=At("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=At("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=At("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=At("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=At("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=At("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=At("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=At("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=At("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=At("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qw=()=>{};var hg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Yw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Hy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,T=u>>2,C=(u&3)<<4|m>>4;let x=(m&15)<<2|_>>6,z=_&63;y||(z=64,h||(x=64)),s.push(t[T],t[C],t[x],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(qy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Yw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||C==null)throw new Xw;const x=u<<2|m>>4;if(s.push(x),_!==64){const z=m<<4&240|_>>2;if(s.push(z),C!==64){const Y=_<<6&192|C;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jw=function(i){const e=qy(i);return Hy.encodeByteArray(e,!0)},Ku=function(i){return Jw(i).replace(/\./g,"")},Wy=function(i){try{return Hy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eE=()=>Zw().__FIREBASE_DEFAULTS__,tE=()=>{if(typeof process>"u"||typeof hg>"u")return;const i=hg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},nE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Wy(i[1]);return e&&JSON.parse(e)},fc=()=>{try{return Qw()||eE()||tE()||nE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Gy=i=>{var e,t;return(t=(e=fc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},rE=i=>{const e=Gy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ky=()=>{var i;return(i=fc())==null?void 0:i.config},Qy=i=>{var e;return(e=fc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function No(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function sE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Ku(JSON.stringify(t)),Ku(JSON.stringify(h)),""].join(".")}const Fa={};function oE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Fa))Fa[e]?i.emulator.push(e):i.prod.push(e);return i}function aE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let dg=!1;function Xy(i,e){if(typeof window>"u"||typeof document>"u"||!No(window.location.host)||Fa[i]===e||Fa[i]||dg)return;Fa[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=oE().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function y(x,z){x.setAttribute("width","24"),x.setAttribute("id",z),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function _(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{dg=!0,h()},x}function T(x,z){x.setAttribute("id",z),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function C(){const x=aE(s),z=t("text"),Y=document.getElementById(z)||document.createElement("span"),J=t("learnmore"),W=document.getElementById(J)||document.createElement("a"),we=t("preprendIcon"),ae=document.getElementById(we)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const Re=x.element;m(Re),T(W,J);const Pe=_();y(ae,we),Re.append(ae,Y,W,Pe),document.body.appendChild(Re)}u?(Y.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function uE(){var e;const i=(e=fc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function dE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fE(){const i=Gt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function pE(){return!uE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function gE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="FirebaseError";class Br extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=yE,Object.setPrototypeOf(this,Br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?_E(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Br(o,m,s)}}function _E(i,e){return i.replace(vE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const vE=/\{\$([^}]+)}/g;function wE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ms(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(fg(u)&&fg(h)){if(!ms(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function fg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Va(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ba(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function EE(i,e){const t=new TE(i,e);return t.subscribe.bind(t)}class TE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");IE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=hd),o.error===void 0&&(o.error=hd),o.complete===void 0&&(o.complete=hd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function hd(){}/**
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
 */function Pt(i){return i&&i._delegate?i._delegate:i}class gs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class SE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new iE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CE(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AE(i){return i===ds?void 0:i}function CE(i){return i.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new SE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Oe||(Oe={}));const kE={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},xE=Oe.INFO,PE={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},NE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=PE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=xE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const DE=(i,e)=>e.some(t=>i instanceof t);let pg,mg;function VE(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bE(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jy=new WeakMap,Sd=new WeakMap,Zy=new WeakMap,dd=new WeakMap,Jd=new WeakMap;function OE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(Si(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Jy.set(t,i)}).catch(()=>{}),Jd.set(e,i),e}function LE(i){if(Sd.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Sd.set(i,e)}let Ad={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Sd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Zy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Si(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ME(i){Ad=i(Ad)}function jE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(fd(this),e,...t);return Zy.set(s,e.sort?e.sort():[e]),Si(s)}:bE().includes(i)?function(...e){return i.apply(fd(this),e),Si(Jy.get(this))}:function(...e){return Si(i.apply(fd(this),e))}}function FE(i){return typeof i=="function"?jE(i):(i instanceof IDBTransaction&&LE(i),DE(i,VE())?new Proxy(i,Ad):i)}function Si(i){if(i instanceof IDBRequest)return OE(i);if(dd.has(i))return dd.get(i);const e=FE(i);return e!==i&&(dd.set(i,e),Jd.set(e,i)),e}const fd=i=>Jd.get(i);function UE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=Si(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Si(h.result),y.oldVersion,y.newVersion,Si(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const zE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],pd=new Map;function gg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(pd.get(e))return pd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=BE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||zE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return pd.set(e,u),u}ME(i=>({...i,get:(e,t,s)=>gg(e,t)||i.get(e,t,s),has:(e,t)=>!!gg(e,t)||i.has(e,t)}));/**
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
 */class $E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function qE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cd="@firebase/app",yg="0.14.6";/**
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
 */const jr=new Xd("@firebase/app"),HE="@firebase/app-compat",WE="@firebase/analytics-compat",GE="@firebase/analytics",KE="@firebase/app-check-compat",QE="@firebase/app-check",YE="@firebase/auth",XE="@firebase/auth-compat",JE="@firebase/database",ZE="@firebase/data-connect",eT="@firebase/database-compat",tT="@firebase/functions",nT="@firebase/functions-compat",rT="@firebase/installations",iT="@firebase/installations-compat",sT="@firebase/messaging",oT="@firebase/messaging-compat",aT="@firebase/performance",lT="@firebase/performance-compat",uT="@firebase/remote-config",cT="@firebase/remote-config-compat",hT="@firebase/storage",dT="@firebase/storage-compat",fT="@firebase/firestore",pT="@firebase/ai",mT="@firebase/firestore-compat",gT="firebase",yT="12.6.0";/**
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
 */const Rd="[DEFAULT]",_T={[Cd]:"fire-core",[HE]:"fire-core-compat",[GE]:"fire-analytics",[WE]:"fire-analytics-compat",[QE]:"fire-app-check",[KE]:"fire-app-check-compat",[YE]:"fire-auth",[XE]:"fire-auth-compat",[JE]:"fire-rtdb",[ZE]:"fire-data-connect",[eT]:"fire-rtdb-compat",[tT]:"fire-fn",[nT]:"fire-fn-compat",[rT]:"fire-iid",[iT]:"fire-iid-compat",[sT]:"fire-fcm",[oT]:"fire-fcm-compat",[aT]:"fire-perf",[lT]:"fire-perf-compat",[uT]:"fire-rc",[cT]:"fire-rc-compat",[hT]:"fire-gcs",[dT]:"fire-gcs-compat",[fT]:"fire-fst",[mT]:"fire-fst-compat",[pT]:"fire-vertex","fire-js":"fire-js",[gT]:"fire-js-all"};/**
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
 */const Qu=new Map,vT=new Map,kd=new Map;function _g(i,e){try{i.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Io(i){const e=i.name;if(kd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,i);for(const t of Qu.values())_g(t,i);for(const t of vT.values())_g(t,i);return!0}function Zd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function jn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const wT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new tl("app","Firebase",wT);/**
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
 */class ET{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
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
 */const Do=yT;function e_(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Rd,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ai.create("bad-app-name",{appName:String(o)});if(t||(t=Ky()),!t)throw Ai.create("no-options");const u=Qu.get(o);if(u){if(ms(t,u.options)&&ms(s,u.config))return u;throw Ai.create("duplicate-app",{appName:o})}const h=new RE(o);for(const y of kd.values())h.addComponent(y);const m=new ET(t,s,h);return Qu.set(o,m),m}function t_(i=Rd){const e=Qu.get(i);if(!e&&i===Rd&&Ky())return e_();if(!e)throw Ai.create("no-app",{appName:i});return e}function Ci(i,e,t){let s=_T[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(h.join(" "));return}Io(new gs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const TT="firebase-heartbeat-database",IT=1,Ha="firebase-heartbeat-store";let md=null;function n_(){return md||(md=UE(TT,IT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ha)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ai.create("idb-open",{originalErrorMessage:i.message})})),md}async function ST(i){try{const t=(await n_()).transaction(Ha),s=await t.objectStore(Ha).get(r_(i));return await t.done,s}catch(e){if(e instanceof Br)jr.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function vg(i,e){try{const s=(await n_()).transaction(Ha,"readwrite");await s.objectStore(Ha).put(e,r_(i)),await s.done}catch(t){if(t instanceof Br)jr.warn(t.message);else{const s=Ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(s.message)}}}function r_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const AT=1024,CT=30;class RT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=wg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>CT){const h=PT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){jr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wg(),{heartbeatsToSend:s,unsentEntries:o}=kT(this._heartbeatsCache.heartbeats),u=Ku(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return jr.warn(t),""}}}function wg(){return new Date().toISOString().substring(0,10)}function kT(i,e=AT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Eg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ST(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eg(i){return Ku(JSON.stringify({version:2,heartbeats:i})).length}function PT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function NT(i){Io(new gs("platform-logger",e=>new $E(e),"PRIVATE")),Io(new gs("heartbeat",e=>new RT(e),"PRIVATE")),Ci(Cd,yg,i),Ci(Cd,yg,"esm2020"),Ci("fire-js","")}NT("");var DT="firebase",VT="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ci(DT,VT,"app");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,i_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,S){function R(){}R.prototype=S.prototype,P.F=S.prototype,P.prototype=new R,P.prototype.constructor=P,P.D=function(V,N,b){for(var A=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)A[Ue-2]=arguments[Ue];return S.prototype[N].apply(V,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,S,R){R||(R=0);const V=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)V[N]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(N=0;N<16;++N)V[N]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=P.g[0],R=P.g[1],N=P.g[2];let b=P.g[3],A;A=S+(b^R&(N^b))+V[0]+3614090360&4294967295,S=R+(A<<7&4294967295|A>>>25),A=b+(N^S&(R^N))+V[1]+3905402710&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(R^b&(S^R))+V[2]+606105819&4294967295,N=b+(A<<17&4294967295|A>>>15),A=R+(S^N&(b^S))+V[3]+3250441966&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(b^R&(N^b))+V[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=b+(N^S&(R^N))+V[5]+1200080426&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(R^b&(S^R))+V[6]+2821735955&4294967295,N=b+(A<<17&4294967295|A>>>15),A=R+(S^N&(b^S))+V[7]+4249261313&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(b^R&(N^b))+V[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=b+(N^S&(R^N))+V[9]+2336552879&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(R^b&(S^R))+V[10]+4294925233&4294967295,N=b+(A<<17&4294967295|A>>>15),A=R+(S^N&(b^S))+V[11]+2304563134&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(b^R&(N^b))+V[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=b+(N^S&(R^N))+V[13]+4254626195&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(R^b&(S^R))+V[14]+2792965006&4294967295,N=b+(A<<17&4294967295|A>>>15),A=R+(S^N&(b^S))+V[15]+1236535329&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(N^b&(R^N))+V[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=b+(R^N&(S^R))+V[6]+3225465664&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(b^S))+V[11]+643717713&4294967295,N=b+(A<<14&4294967295|A>>>18),A=R+(b^S&(N^b))+V[0]+3921069994&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^b&(R^N))+V[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=b+(R^N&(S^R))+V[10]+38016083&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(b^S))+V[15]+3634488961&4294967295,N=b+(A<<14&4294967295|A>>>18),A=R+(b^S&(N^b))+V[4]+3889429448&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^b&(R^N))+V[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=b+(R^N&(S^R))+V[14]+3275163606&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(b^S))+V[3]+4107603335&4294967295,N=b+(A<<14&4294967295|A>>>18),A=R+(b^S&(N^b))+V[8]+1163531501&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^b&(R^N))+V[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=b+(R^N&(S^R))+V[2]+4243563512&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(b^S))+V[7]+1735328473&4294967295,N=b+(A<<14&4294967295|A>>>18),A=R+(b^S&(N^b))+V[12]+2368359562&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(R^N^b)+V[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=b+(S^R^N)+V[8]+2272392833&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^R)+V[11]+1839030562&4294967295,N=b+(A<<16&4294967295|A>>>16),A=R+(N^b^S)+V[14]+4259657740&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^b)+V[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=b+(S^R^N)+V[4]+1272893353&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^R)+V[7]+4139469664&4294967295,N=b+(A<<16&4294967295|A>>>16),A=R+(N^b^S)+V[10]+3200236656&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^b)+V[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=b+(S^R^N)+V[0]+3936430074&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^R)+V[3]+3572445317&4294967295,N=b+(A<<16&4294967295|A>>>16),A=R+(N^b^S)+V[6]+76029189&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^b)+V[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=b+(S^R^N)+V[12]+3873151461&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^R)+V[15]+530742520&4294967295,N=b+(A<<16&4294967295|A>>>16),A=R+(N^b^S)+V[2]+3299628645&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(N^(R|~b))+V[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=b+(R^(S|~N))+V[7]+1126891415&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~R))+V[14]+2878612391&4294967295,N=b+(A<<15&4294967295|A>>>17),A=R+(b^(N|~S))+V[5]+4237533241&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~b))+V[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=b+(R^(S|~N))+V[3]+2399980690&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~R))+V[10]+4293915773&4294967295,N=b+(A<<15&4294967295|A>>>17),A=R+(b^(N|~S))+V[1]+2240044497&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~b))+V[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=b+(R^(S|~N))+V[15]+4264355552&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~R))+V[6]+2734768916&4294967295,N=b+(A<<15&4294967295|A>>>17),A=R+(b^(N|~S))+V[13]+1309151649&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~b))+V[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=b+(R^(S|~N))+V[11]+3174756917&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~R))+V[2]+718787259&4294967295,N=b+(A<<15&4294967295|A>>>17),A=R+(b^(N|~S))+V[9]+3951481745&4294967295,P.g[0]=P.g[0]+S&4294967295,P.g[1]=P.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+b&4294967295}s.prototype.v=function(P,S){S===void 0&&(S=P.length);const R=S-this.blockSize,V=this.C;let N=this.h,b=0;for(;b<S;){if(N==0)for(;b<=R;)o(this,P,b),b+=this.blockSize;if(typeof P=="string"){for(;b<S;)if(V[N++]=P.charCodeAt(b++),N==this.blockSize){o(this,V),N=0;break}}else for(;b<S;)if(V[N++]=P[b++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=S},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var S=1;S<P.length-8;++S)P[S]=0;S=this.o*8;for(var R=P.length-8;R<P.length;++R)P[R]=S&255,S/=256;for(this.v(P),P=Array(16),S=0,R=0;R<4;++R)for(let V=0;V<32;V+=8)P[S++]=this.g[R]>>>V&255;return P};function u(P,S){var R=m;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=S(P)}function h(P,S){this.h=S;const R=[];let V=!0;for(let N=P.length-1;N>=0;N--){const b=P[N]|0;V&&b==S||(R[N]=b,V=!1)}this.g=R}var m={};function y(P){return-128<=P&&P<128?u(P,function(S){return new h([S|0],S<0?-1:0)}):new h([P|0],P<0?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return C;if(P<0)return W(_(-P));const S=[];let R=1;for(let V=0;P>=R;V++)S[V]=P/R|0,R*=4294967296;return new h(S,0)}function T(P,S){if(P.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(P.charAt(0)=="-")return W(T(P.substring(1),S));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(S,8));let V=C;for(let b=0;b<P.length;b+=8){var N=Math.min(8,P.length-b);const A=parseInt(P.substring(b,b+N),S);N<8?(N=_(Math.pow(S,N)),V=V.j(N).add(_(A))):(V=V.j(R),V=V.add(_(A)))}return V}var C=y(0),x=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-W(this).m();let P=0,S=1;for(let R=0;R<this.g.length;R++){const V=this.i(R);P+=(V>=0?V:4294967296+V)*S,S*=4294967296}return P},i.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(Y(this))return"0";if(J(this))return"-"+W(this).toString(P);const S=_(Math.pow(P,6));var R=this;let V="";for(;;){const N=Pe(R,S).g;R=we(R,N.j(S));let b=((R.g.length>0?R.g[0]:R.h)>>>0).toString(P);if(R=N,Y(R))return b+V;for(;b.length<6;)b="0"+b;V=b+V}},i.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function Y(P){if(P.h!=0)return!1;for(let S=0;S<P.g.length;S++)if(P.g[S]!=0)return!1;return!0}function J(P){return P.h==-1}i.l=function(P){return P=we(this,P),J(P)?-1:Y(P)?0:1};function W(P){const S=P.g.length,R=[];for(let V=0;V<S;V++)R[V]=~P.g[V];return new h(R,~P.h).add(x)}i.abs=function(){return J(this)?W(this):this},i.add=function(P){const S=Math.max(this.g.length,P.g.length),R=[];let V=0;for(let N=0;N<=S;N++){let b=V+(this.i(N)&65535)+(P.i(N)&65535),A=(b>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);V=A>>>16,b&=65535,A&=65535,R[N]=A<<16|b}return new h(R,R[R.length-1]&-2147483648?-1:0)};function we(P,S){return P.add(W(S))}i.j=function(P){if(Y(this)||Y(P))return C;if(J(this))return J(P)?W(this).j(W(P)):W(W(this).j(P));if(J(P))return W(this.j(W(P)));if(this.l(z)<0&&P.l(z)<0)return _(this.m()*P.m());const S=this.g.length+P.g.length,R=[];for(var V=0;V<2*S;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<P.g.length;N++){const b=this.i(V)>>>16,A=this.i(V)&65535,Ue=P.i(N)>>>16,lt=P.i(N)&65535;R[2*V+2*N]+=A*lt,ae(R,2*V+2*N),R[2*V+2*N+1]+=b*lt,ae(R,2*V+2*N+1),R[2*V+2*N+1]+=A*Ue,ae(R,2*V+2*N+1),R[2*V+2*N+2]+=b*Ue,ae(R,2*V+2*N+2)}for(P=0;P<S;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=S;P<2*S;P++)R[P]=0;return new h(R,0)};function ae(P,S){for(;(P[S]&65535)!=P[S];)P[S+1]+=P[S]>>>16,P[S]&=65535,S++}function Re(P,S){this.g=P,this.h=S}function Pe(P,S){if(Y(S))throw Error("division by zero");if(Y(P))return new Re(C,C);if(J(P))return S=Pe(W(P),S),new Re(W(S.g),W(S.h));if(J(S))return S=Pe(P,W(S)),new Re(W(S.g),S.h);if(P.g.length>30){if(J(P)||J(S))throw Error("slowDivide_ only works with positive integers.");for(var R=x,V=S;V.l(P)<=0;)R=qe(R),V=qe(V);var N=Ne(R,1),b=Ne(V,1);for(V=Ne(V,2),R=Ne(R,2);!Y(V);){var A=b.add(V);A.l(P)<=0&&(N=N.add(R),b=A),V=Ne(V,1),R=Ne(R,1)}return S=we(P,N.j(S)),new Re(N,S)}for(N=C;P.l(S)>=0;){for(R=Math.max(1,Math.floor(P.m()/S.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),b=_(R),A=b.j(S);J(A)||A.l(P)>0;)R-=V,b=_(R),A=b.j(S);Y(b)&&(b=x),N=N.add(b),P=we(P,A)}return new Re(N,P)}i.B=function(P){return Pe(this,P).h},i.and=function(P){const S=Math.max(this.g.length,P.g.length),R=[];for(let V=0;V<S;V++)R[V]=this.i(V)&P.i(V);return new h(R,this.h&P.h)},i.or=function(P){const S=Math.max(this.g.length,P.g.length),R=[];for(let V=0;V<S;V++)R[V]=this.i(V)|P.i(V);return new h(R,this.h|P.h)},i.xor=function(P){const S=Math.max(this.g.length,P.g.length),R=[];for(let V=0;V<S;V++)R[V]=this.i(V)^P.i(V);return new h(R,this.h^P.h)};function qe(P){const S=P.g.length+1,R=[];for(let V=0;V<S;V++)R[V]=P.i(V)<<1|P.i(V-1)>>>31;return new h(R,P.h)}function Ne(P,S){const R=S>>5;S%=32;const V=P.g.length-R,N=[];for(let b=0;b<V;b++)N[b]=S>0?P.i(b+R)>>>S|P.i(b+R+1)<<32-S:P.i(b+R);return new h(N,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,Ri=h}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var s_,Oa,o_,ju,xd,a_,l_,u_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof xu=="object"&&xu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in g))break e;g=g[M]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function T(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function C(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,M,U){for(var ee=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)ee[Ae-2]=arguments[Ae];return p.prototype[M].apply(w,ee)}}var x=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function Y(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const U=M.length||0;l.length=g+U;for(let ee=0;ee<U;ee++)l[g+ee]=M[ee]}else l.push(M)}}class J{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function W(l){h.setTimeout(()=>{throw l},0)}function we(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class ae{constructor(){this.h=this.g=null}add(p,g){const w=Re.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Re=new J(()=>new Pe,l=>l.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,Ne=!1,P=new ae,S=()=>{const l=Promise.resolve(void 0);qe=()=>{l.then(R)}};function R(){for(var l;l=we();){try{l.h.call(l.g)}catch(g){W(g)}var p=Re;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Ne=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function Ue(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}C(Ue,N),Ue.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var lt="closure_listenable_"+(Math.random()*1e6|0),ce=0;function ge(l,p,g,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=M,this.key=++ce,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function he(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ie(l,p){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)l[g]=w[g];for(let U=0;U<H.length;U++)g=H[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function Se(l){this.src=l,this.g={},this.h=0}Se.prototype.add=function(l,p,g,w,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const ee=ke(l,p,w,M);return ee>-1?(p=l[ee],g||(p.fa=!1)):(p=new ge(p,this.src,U,!!w,M),p.fa=g,l.push(p)),p};function xe(l,p){const g=p.type;if(g in l.g){var w=l.g[g],M=Array.prototype.indexOf.call(w,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(w,M,1),U&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ke(l,p,g,w){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==w)return M}return-1}var be="closure_lm_"+(Math.random()*1e6|0),De={};function We(l,p,g,w,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)We(l,p[U],g,w,M);return null}return g=Fi(g),l&&l[lt]?l.J(p,g,m(w)?!!w.capture:!1,M):gt(l,p,g,!1,w,M)}function gt(l,p,g,w,M,U){if(!p)throw Error("Invalid event type");const ee=m(M)?!!M.capture:!!M;let Ae=Ee(l);if(Ae||(l[be]=Ae=new Se(l)),g=Ae.add(p,g,w,ee,U),g.proxy)return g;if(w=Rn(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)b||(M=ee),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(me(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Rn(){function l(g){return p.call(l.src,l.listener,g)}const p=Ke;return l}function kn(l,p,g,w,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)kn(l,p[U],g,w,M);else w=m(w)?!!w.capture:!!w,g=Fi(g),l&&l[lt]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=ke(p,g,w,M),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=Ee(l))&&(p=l.g[p.toString()],l=-1,p&&(l=ke(p,g,w,M)),(g=l>-1?p[l]:null)&&$(g))}function $(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[lt])xe(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(me(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=Ee(p))?(xe(g,l),g.h==0&&(g.src=null,p[be]=null)):Z(l)}}}function me(l){return l in De?De[l]:De[l]="on"+l}function Ke(l,p){if(l.da)l=!0;else{p=new Ue(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&$(l),l=g.call(w,p)}return l}function Ee(l){return l=l[be],l instanceof Se?l:null}var gr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fi(l){return typeof l=="function"?l:(l[gr]||(l[gr]=function(p){return l.handleEvent(p)}),l[gr])}function ut(){V.call(this),this.i=new Se(this),this.M=this,this.G=null}C(ut,V),ut.prototype[lt]=!0,ut.prototype.removeEventListener=function(l,p,g,w){kn(this,l,p,g,w)};function it(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(w,l),Ie(p,M)}M=!0;let U,ee;if(g)for(ee=g.length-1;ee>=0;ee--)U=p.g=g[ee],M=on(U,w,!0,p)&&M;if(U=p.g=l,M=on(U,w,!0,p)&&M,M=on(U,w,!1,p)&&M,g)for(ee=0;ee<g.length;ee++)U=p.g=g[ee],M=on(U,w,!1,p)&&M}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)Z(g[w]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},ut.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function on(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const ee=p[U];if(ee&&!ee.da&&ee.capture==g){const Ae=ee.listener,dt=ee.ha||ee.src;ee.fa&&xe(l.i,ee),M=Ae.call(dt,w)!==!1&&M}}return M&&!w.defaultPrevented}function Nt(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Uo(l){l.g=Nt(()=>{l.g=null,l.i&&(l.i=!1,Uo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class dl extends V{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Uo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(l){V.call(this),this.h=l,this.g={}}C($r,V);var zo=[];function As(l){he(l.g,function(p,g){this.g.hasOwnProperty(g)&&$(p)},l),l.g={}}$r.prototype.N=function(){$r.Z.N.call(this),As(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=h.JSON.stringify,fl=h.JSON.parse,Ui=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Hr(){}function pl(){}var Wr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cs(){N.call(this,"d")}C(Cs,N);function Bo(){N.call(this,"c")}C(Bo,N);var xn={},Rs=null;function Gr(){return Rs=Rs||new ut}xn.Ia="serverreachability";function ks(l){N.call(this,xn.Ia,l)}C(ks,N);function yr(l){const p=Gr();it(p,new ks(p))}xn.STAT_EVENT="statevent";function _r(l,p){N.call(this,xn.STAT_EVENT,l),this.stat=p}C(_r,N);function ct(l){const p=Gr();it(p,new _r(p,l))}xn.Ja="timingevent";function $o(l,p){N.call(this,xn.Ja,l),this.size=p}C($o,N);function Kr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Qr(){this.g=!0}Qr.prototype.ua=function(){this.g=!1};function ml(l,p,g,w,M,U){l.info(function(){if(l.g)if(U){var ee="",Ae=U.split("&");for(let Ge=0;Ge<Ae.length;Ge++){var dt=Ae[Ge].split("=");if(dt.length>1){const yt=dt[0];dt=dt[1];const dn=yt.split("_");ee=dn.length>=2&&dn[1]=="type"?ee+(yt+"="+dt+"&"):ee+(yt+"=redacted&")}}}else ee=null;else ee=U;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+g+`
`+ee})}function gl(l,p,g,w,M,U,ee){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+g+`
`+U+" "+ee})}function $n(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+zi(l,g)+(w?" "+w:"")})}function yl(l,p){l.info(function(){return"TIMEOUT: "+p})}Qr.prototype.info=function(){};function zi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<w.length;ee++)w[ee]=""}}}}return qr(U)}catch{return p}}var Yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_l;function vr(){}C(vr,Hr),vr.prototype.g=function(){return new XMLHttpRequest},_l=new vr;function qn(l){return encodeURIComponent(String(l))}function xs(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function yn(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new $r(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vl}function vl(){this.i=null,this.g="",this.h=!1}var wl={},qo={};function Pn(l,p,g){l.M=1,l.A=Er(_n(p)),l.u=g,l.R=!0,Ho(l,null)}function Ho(l,p){l.F=Date.now(),Bi(l),l.B=_n(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),ta(g.i,"t",w),l.C=0,g=l.j.L,l.h=new vl,l.g=Pl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new dl(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(zo[0]=M.toString()),M=zo);for(let U=0;U<M.length;U++){const ee=We(g,M[U],w||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),yr(),ml(l.i,l.v,l.B,l.l,l.S,l.u)}yn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Xn(l)==3?p.j():this.Y(l)},yn.prototype.Y=function(l){try{if(l==this.g)e:{const Ae=Xn(this.g),dt=this.g.ya(),Ge=this.g.ca();if(!(Ae<3)&&(Ae!=3||this.g&&(this.h.h||this.g.la()||kl(this.g)))){this.K||Ae!=4||dt==7||(dt==8||Ge<=0?yr(3):yr(2)),Ps(this);var p=this.g.ca();this.X=p;var g=El(this);if(this.o=p==200,gl(this.i,this.v,this.B,this.l,this.S,Ae,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(w)){var U=w;break t}}U=null}if(l=U)$n(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ze(this,l);else{this.o=!1,this.m=3,ct(12),wr(this),$i(this);break e}}if(this.R){l=!0;let yt;for(;!this.K&&this.C<g.length;)if(yt=Il(this,g),yt==qo){Ae==4&&(this.m=4,ct(14),l=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==wl){this.m=4,ct(15),$n(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else $n(this.i,this.l,yt,null),Ze(this,yt);if(Tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||g.length!=0||this.h.h||(this.m=1,ct(16),l=!1),this.o=this.o&&l,!l)$n(this.i,this.l,g,"[Invalid Chunked Response]"),wr(this),$i(this);else if(g.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Ji(ee),ee.P=!0,ct(11))}}else $n(this.i,this.l,g,null),Ze(this,g);Ae==4&&wr(this),this.o&&!this.K&&(Ae==4?Us(this.j,this):(this.o=!1,Bi(this)))}else ra(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),wr(this),$i(this)}}}catch{}finally{}};function El(l){if(!Tl(l))return l.g.la();const p=kl(l.g);if(p==="")return"";let g="";const w=p.length,M=Xn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return wr(l),$i(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<w;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(M&&U==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function Tl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Il(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?qo:(g=Number(p.substring(g,w)),isNaN(g)?wl:(w+=1,w+g>p.length?qo:(p=p.slice(w,w+g),l.C=w+g,p)))}yn.prototype.cancel=function(){this.K=!0,wr(this)};function Bi(l){l.T=Date.now()+l.H,Wo(l,l.H)}function Wo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Kr(_(l.aa,l),p)}function Ps(l){l.D&&(h.clearTimeout(l.D),l.D=null)}yn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(yl(this.i,this.B),this.M!=2&&(yr(),ct(17)),wr(this),this.m=2,$i(this)):Wo(this,this.T-l)};function $i(l){l.j.I==0||l.K||Us(l.j,l)}function wr(l){Ps(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,As(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ze(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Ko(g.h,l))){if(!l.L&&Ko(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Fs(g),cn(g);else break e;er(g),ct(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Kr(_(g.Va,g),6e3));qi(g.h)<=1&&g.ta&&(g.ta=void 0)}else hn(g,11)}else if((l.L||g.g==l)&&Fs(g),!A(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let Ge=M[p];const yt=Ge[0];if(!(yt<=g.K))if(g.K=yt,Ge=Ge[1],g.I==2)if(Ge[0]=="c"){g.M=Ge[1],g.ba=Ge[2];const dn=Ge[3];dn!=null&&(g.ka=dn,g.j.info("VER="+g.ka));const Cr=Ge[4];Cr!=null&&(g.za=Cr,g.j.info("SVER="+g.za));const tr=Ge[5];tr!=null&&typeof tr=="number"&&tr>0&&(w=1.5*tr,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const nr=l.g;if(nr){const $s=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($s){var U=w.h;U.g||$s.indexOf("spdy")==-1&&$s.indexOf("quic")==-1&&$s.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ds(U,U.h),U.h=null))}if(w.G){const oa=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(w.wa=oa,$e(w.J,w.G,oa))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var ee=l;if(w.na=sa(w,w.L?w.ba:null,w.W),ee.L){Hi(w.h,ee);var Ae=ee,dt=w.O;dt&&(Ae.H=dt),Ae.D&&(Ps(Ae),Bi(Ae)),w.g=ee}else Ft(w);g.i.length>0&&Ar(g)}else Ge[0]!="stop"&&Ge[0]!="close"||hn(g,7);else g.I==3&&(Ge[0]=="stop"||Ge[0]=="close"?Ge[0]=="stop"?hn(g,7):Ms(g):Ge[0]!="noop"&&g.l&&g.l.qa(Ge),g.A=0)}}yr(4)}catch{}}var Oc=class{constructor(l,p){this.g=l,this.map=p}};function Ns(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Go(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function qi(l){return l.h?1:l.g?l.g.size:0}function Ko(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ds(l,p){l.g?l.g.add(p):l.h=p}function Hi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ns.prototype.cancel=function(){if(this.i=an(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function an(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var Sl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ln(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let M,U=null;w>=0?(M=l[g].substring(0,w),U=l[g].substring(w+1)):M=l[g],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Hn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof Hn?(this.l=l.l,Wi(this,l.j),this.o=l.o,this.g=l.g,Wn(this,l.u),this.h=l.h,Jr(this,na(l.i)),this.m=l.m):l&&(p=String(l).match(Sl))?(this.l=!1,Wi(this,p[1]||"",!0),this.o=Gi(p[2]||""),this.g=Gi(p[3]||"",!0),Wn(this,p[4]),this.h=Gi(p[5]||"",!0),Jr(this,p[6]||"",!0),this.m=Gi(p[7]||"")):(this.l=!1,this.i=new je(null,this.l))}Hn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Ki(p,Yo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Ki(p,Yo,!0),"@"),l.push(qn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Ki(g,g.charAt(0)=="/"?Qi:Xo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Ki(g,Jo)),l.join("")},Hn.prototype.resolve=function(l){const p=_n(this);let g=!!l.j;g?Wi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)Wn(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let ee=0;ee<M.length;){const Ae=M[ee++];Ae=="."?w&&ee==M.length&&U.push(""):Ae==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),w&&ee==M.length&&U.push("")):(U.push(Ae),w=!0)}w=U.join("/")}else w=M}return g?p.h=w:g=l.i.toString()!=="",g?Jr(p,na(l.i)):g=!!l.m,g&&(p.m=l.m),p};function _n(l){return new Hn(l)}function Wi(l,p,g){l.j=g?Gi(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Wn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function Jr(l,p,g){p instanceof je?(l.i=p,bs(l.i,l.l)):(g||(p=Ki(p,Lc)),l.i=new je(p,l.l))}function $e(l,p,g){l.i.set(p,g)}function Er(l){return $e(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Gi(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ki(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,Qo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Qo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Yo=/[#\/\?@]/g,Xo=/[#\?:]/g,Qi=/[#\?]/g,Lc=/[#\?@]/g,Jo=/#/g;function je(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Gn(l){l.g||(l.g=new Map,l.h=0,l.i&&ln(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=je.prototype,i.add=function(l,p){Gn(this),this.i=null,l=Kn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Zo(l,p){Gn(l),p=Kn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Vs(l,p){return Gn(l),p=Kn(l,p),l.g.has(p)}i.forEach=function(l,p){Gn(this),this.g.forEach(function(g,w){g.forEach(function(M){l.call(p,M,w,this)},this)},this)};function ea(l,p){Gn(l);let g=[];if(typeof p=="string")Vs(l,p)&&(g=g.concat(l.g.get(Kn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Gn(this),this.i=null,l=Kn(this,l),Vs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=ea(this,l),l.length>0?String(l[0]):p):p};function ta(l,p,g){Zo(l,p),g.length>0&&(l.i=null,l.g.set(Kn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const M=qn(g);g=ea(this,g);for(let U=0;U<g.length;U++){let ee=M;g[U]!==""&&(ee+="="+qn(g[U])),l.push(ee)}}return this.i=l.join("&")};function na(l){const p=new je;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Kn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function bs(l,p){p&&!l.j&&(Gn(l),l.i=null,l.g.forEach(function(g,w){const M=w.toLowerCase();w!=M&&(Zo(this,w),ta(this,M,g))},l)),l.j=p}function Qn(l,p){const g=new Qr;if(h.Image){const w=new Image;w.onload=T(Dt,g,"TestLoadImage: loaded",!0,p,w),w.onerror=T(Dt,g,"TestLoadImage: error",!1,p,w),w.onabort=T(Dt,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=T(Dt,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function Yn(l,p){const g=new Qr,w=new AbortController,M=setTimeout(()=>{w.abort(),Dt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(M),U.ok?Dt(g,"TestPingServer: ok",!0,p):Dt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Dt(g,"TestPingServer: error",!1,p)})}function Dt(l,p,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function Yi(){this.g=new Ui}function Tr(l){this.i=l.Sb||null,this.h=l.ab||!1}C(Tr,Hr),Tr.prototype.g=function(){return new un(this.i,this.h)};function un(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(un,ut),i=un.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Nn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Al(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Al(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Zr(this):Nn(this),this.readyState==3&&Al(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Zr(this))},i.Na=function(l){this.g&&(this.response=l,Zr(this))},i.ga=function(){this.g&&Zr(this)};function Zr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Nn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function Nn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Cl(l){let p="";return he(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function Os(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Cl(g),typeof l=="string"?g!=null&&qn(g):$e(l,p,g))}function Qe(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(Qe,ut);var Rl=/^https?$/i,Mc=["POST","PUT"];i=Qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_l.g(),this.g.onreadystatechange=x(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){ei(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(Mc,p,void 0)>=0)||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of g)this.g.setRequestHeader(U,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){ei(this,U)}};function ei(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,ti(l),Sr(l)}function ti(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),Sr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),Qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Ir(this):this.Xa())},i.Xa=function(){Ir(this)};function Ir(l){if(l.h&&typeof u<"u"){if(l.v&&Xn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),Xn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=U===0){let ee=String(l.D).match(Sl)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),w=!Rl.test(ee?ee.toLowerCase():"")}g=w}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var M=Xn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",ti(l)}}finally{Sr(l)}}}}function Sr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Xn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Xn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),fl(p)}};function kl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ra(l){const p={};l=(l.g&&Xn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(A(l[w]))continue;var g=xs(l[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[M]||[];p[M]=U,U.push(g)}ne(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ls(l){this.za=0,this.i=[],this.j=new Qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,l),this.Za=Jn("retryDelaySeedMs",1e4,l),this.Ta=Jn("forwardChannelMaxRetries",2,l),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ns(l&&l.concurrentRequestLimit),this.Ba=new Yi,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ls.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){ct(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=sa(this,null,this.W),Ar(this)};function Ms(l){if(js(l),l.I==3){var p=l.V++,g=_n(l.J);if($e(g,"SID",l.M),$e(g,"RID",p),$e(g,"TYPE","terminate"),Zn(l,g),p=new yn(l,l.j,p),p.M=2,p.A=Er(_n(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Pl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Bi(p)}Zi(l)}function cn(l){l.g&&(Ji(l),l.g.cancel(),l.g=null)}function js(l){cn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Fs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function Ar(l){if(!Go(l.h)&&!l.m){l.m=!0;var p=l.Ea;qe||S(),Ne||(qe(),Ne=!0),P.add(p,l),l.D=0}}function xl(l,p){return qi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Kr(_(l.Ea,l,p),zs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new yn(this,this.j,l);let U=this.o;if(this.U&&(U?(U=O(U),Ie(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=ia(this,M,p),g=_n(this.J),$e(g,"RID",l),$e(g,"CVER",22),this.G&&$e(g,"X-HTTP-Session-Id",this.G),Zn(this,g),U&&(this.R?p="headers="+qn(Cl(U))+"&"+p:this.u&&Os(g,this.u,U)),Ds(this.h,M),this.Ra&&$e(g,"TYPE","init"),this.S?($e(g,"$req",p),$e(g,"SID","null"),M.U=!0,Pn(M,g,null)):Pn(M,g,p),this.I=2}}else this.I==3&&(l?Xi(this,l):this.i.length==0||Go(this.h)||Xi(this))};function Xi(l,p){var g;p?g=p.l:g=l.V++;const w=_n(l.J);$e(w,"SID",l.M),$e(w,"RID",g),$e(w,"AID",l.K),Zn(l,w),l.u&&l.o&&Os(w,l.u,l.o),g=new yn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=ia(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ds(l.h,g),Pn(g,w,p)}function Zn(l,p){l.H&&he(l.H,function(g,w){$e(p,w,g)}),l.l&&he({},function(g,w){$e(p,w,g)})}function ia(l,p,g){g=Math.min(l.i.length,g);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ae=-1;for(;;){const dt=["count="+g];Ae==-1?g>0?(Ae=M[0].g,dt.push("ofs="+Ae)):Ae=0:dt.push("ofs="+Ae);let Ge=!0;for(let yt=0;yt<g;yt++){var U=M[yt].g;const dn=M[yt].map;if(U-=Ae,U<0)Ae=Math.max(0,M[yt].g-100),Ge=!1;else try{U="req"+U+"_"||"";try{var ee=dn instanceof Map?dn:Object.entries(dn);for(const[Cr,tr]of ee){let nr=tr;m(tr)&&(nr=qr(tr)),dt.push(U+Cr+"="+encodeURIComponent(nr))}}catch(Cr){throw dt.push(U+"type="+encodeURIComponent("_badmap")),Cr}}catch{w&&w(dn)}}if(Ge){ee=dt.join("&");break e}}ee=void 0}return l=l.i.splice(0,g),p.G=l,ee}function Ft(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;qe||S(),Ne||(qe(),Ne=!0),P.add(p,l),l.A=0}}function er(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Kr(_(l.Da,l),zs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,ni(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Kr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),cn(this),ni(this))};function Ji(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function ni(l){l.g=new yn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=_n(l.na);$e(p,"RID","rpc"),$e(p,"SID",l.M),$e(p,"AID",l.K),$e(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&$e(p,"TO",l.ia),$e(p,"TYPE","xmlhttp"),Zn(l,p),l.u&&l.o&&Os(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=Er(_n(p)),g.u=null,g.R=!0,Ho(g,l)}i.Va=function(){this.C!=null&&(this.C=null,cn(this),er(this),ct(19))};function Fs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Us(l,p){var g=null;if(l.g==p){Fs(l),Ji(l),l.g=null;var w=2}else if(Ko(l.h,p))g=p.G,Hi(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=Gr(),it(w,new $o(w,g)),Ar(l)}else Ft(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&xl(l,p)||w==2&&er(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:hn(l,5);break;case 4:hn(l,10);break;case 3:hn(l,6);break;default:hn(l,2)}}}function zs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function hn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),w=l.Ua;const M=!w;w=new Hn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Wi(w,"https"),Er(w),M?Qn(w.toString(),g):Yn(w.toString(),g)}else ct(2);l.I=0,l.l&&l.l.pa(p),Zi(l),js(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Zi(l){if(l.I=0,l.ja=[],l.l){const p=an(l.h);(p.length!=0||l.i.length!=0)&&(Y(l.ja,p),Y(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function sa(l,p,g){var w=g instanceof Hn?_n(g):new Hn(g);if(w.g!="")p&&(w.g=p+"."+w.g),Wn(w,w.u);else{var M=h.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new Hn(null);w&&Wi(U,w),p&&(U.g=p),M&&Wn(U,M),g&&(U.h=g),w=U}return g=l.G,p=l.wa,g&&p&&$e(w,g,p),$e(w,"VER",l.ka),Zn(l,w),w}function Pl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new Qe(new Tr({ab:g})):new Qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nl(){}i=Nl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Bs(){}Bs.prototype.g=function(l,p){return new Vt(l,p)};function Vt(l,p){ut.call(this),this.g=new Ls(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new ri(this)}C(Vt,ut),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ms(this.g)},Vt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=qr(l),l=g);p.i.push(new Oc(p.Ya++,l)),p.I==3&&Ar(p)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ms(this.g),delete this.g,Vt.Z.N.call(this)};function Dl(l){Cs.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}C(Dl,Cs);function Vl(){Bo.call(this),this.status=1}C(Vl,Bo);function ri(l){this.g=l}C(ri,Nl),ri.prototype.ra=function(){it(this.g,"a")},ri.prototype.qa=function(l){it(this.g,new Dl(l))},ri.prototype.pa=function(l){it(this.g,new Vl)},ri.prototype.oa=function(){it(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,u_=function(){return new Bs},l_=function(){return Gr()},a_=xn,xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,ju=Yr,Xr.COMPLETE="complete",o_=Xr,pl.EventType=Wr,Wr.OPEN="a",Wr.CLOSE="b",Wr.ERROR="c",Wr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Oa=pl,Qe.prototype.listenOnce=Qe.prototype.K,Qe.prototype.getLastError=Qe.prototype.Ha,Qe.prototype.getLastErrorCode=Qe.prototype.ya,Qe.prototype.getStatus=Qe.prototype.ca,Qe.prototype.getResponseJson=Qe.prototype.La,Qe.prototype.getResponseText=Qe.prototype.la,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Fa,s_=Qe}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore",Sg="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Xd("@firebase/firestore");function ho(){return ys.logLevel}function ie(i,...e){if(ys.logLevel<=Oe.DEBUG){const t=e.map(ef);ys.debug(`Firestore (${Vo}): ${i}`,...t)}}function Fr(i,...e){if(ys.logLevel<=Oe.ERROR){const t=e.map(ef);ys.error(`Firestore (${Vo}): ${i}`,...t)}}function So(i,...e){if(ys.logLevel<=Oe.WARN){const t=e.map(ef);ys.warn(`Firestore (${Vo}): ${i}`,...t)}}function ef(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,c_(i,s,t)}function c_(i,e,t){let s=`FIRESTORE (${Vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Fr(s),new Error(s)}function He(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||c_(e,o,s)}function Ce(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Br{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ht.UNAUTHENTICATED)))}shutdown(){}}class OT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class LT{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){He(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Mr,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Mr)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new h_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class MT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class jT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new MT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){He(this.o===void 0,3512);const s=u=>{u.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ag(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(He(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ag(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=UT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Le(i,e){return i<e?-1:i>e?1:0}function Pd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return gd(o)===gd(u)?Le(o,u):gd(o)?1:-1}return Le(i.length,e.length)}const zT=55296,BT=57343;function gd(i){const e=i.charCodeAt(0);return e>=zT&&e<=BT}function Ao(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="__name__";class lr{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=lr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Le(e.length,t.length)}static compareSegments(e,t){const s=lr.isNumericId(e),o=lr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?lr.extractNumericId(e).compare(lr.extractNumericId(t)):Pd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Je extends lr{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const $T=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends lr{construct(e,t,s){return new Mt(e,t,s)}static isValidIdentifier(e){return $T.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cg}static keyField(){return new Mt([Cg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Je.fromString(e))}static fromName(e){return new de(Je.fromString(e).popFirst(5))}static empty(){return new de(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(i,e,t){if(!t)throw new te(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function qT(i,e,t,s){if(e===!0&&s===!0)throw new te(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Rg(i){if(!de.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function kg(i){if(de.isDocumentKey(i))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function f_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function pc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Un(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pc(i);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function Et(i,e){const t={typeString:i};return e&&(t.value=e),t}function rl(i,e){if(!f_(i))throw new te(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new te(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=-62135596800,Pg=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Pg);return new nt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xg)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pg}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rl(e,nt._jsonSchema))return new nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nt._jsonSchemaVersion="firestore/timestamp/1.0",nt._jsonSchema={type:Et("string",nt._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new nt(0,0))}static max(){return new Te(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wa=-1;function HT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new nt(t+1,0):new nt(t,s));return new Pi(o,de.empty(),e)}function WT(i){return new Pi(i.readTime,i.key,Wa)}class Pi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Pi(Te.min(),de.empty(),Wa)}static max(){return new Pi(Te.max(),de.empty(),Wa)}}function GT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Le(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==KT)throw i;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((T=>{h[_]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new q(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function YT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=-1;function gc(i){return i==null}function Yu(i){return i===0&&1/i==-1/0}function XT(i){return typeof i=="number"&&Number.isInteger(i)&&!Yu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="";function JT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Ng(e)),e=ZT(i.get(t),e);return Ng(e)}function ZT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case p_:t+="";break;default:t+=u}}return t}function Ng(i){return i+p_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Li(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function m_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Lt.RED,this.left=o??Lt.EMPTY,this.right=u??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Lt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vg(this.data.getIterator())}getIteratorFrom(e){return new Vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class Vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new St(Mt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ao(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class g_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new g_("Invalid base64 string: "+u):u}})(e);return new jt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const eI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(i){if(He(!!i,39018),typeof i=="string"){let e=0;const t=eI.exec(i);if(He(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pt(i.seconds),nanos:pt(i.nanos)}}function pt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Di(i){return typeof i=="string"?jt.fromBase64String(i):jt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="server_timestamp",__="__type__",v_="__previous_value__",w_="__local_write_time__";function rf(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[__])==null?void 0:s.stringValue)===y_}function yc(i){const e=i.mapValue.fields[v_];return rf(e)?yc(e):e}function Ga(i){const e=Ni(i.mapValue.fields[w_].timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,s,o,u,h,m,y,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=T}}const Xu="(default)";class Ka{constructor(e,t){this.projectId=e,this.database=t||Xu}static empty(){return new Ka("","")}get isDefaultDatabase(){return this.database===Xu}isEqual(e){return e instanceof Ka&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="__type__",nI="__max__",Nu={mapValue:{}},T_="__vector__",Ju="value";function Vi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?rf(i)?4:iI(i)?9007199254740991:rI(i)?10:11:_e(28295,{value:i})}function mr(i,e){if(i===e)return!0;const t=Vi(i);if(t!==Vi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ga(i).isEqual(Ga(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ni(o.timestampValue),m=Ni(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Di(o.bytesValue).isEqual(Di(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return pt(o.geoPointValue.latitude)===pt(u.geoPointValue.latitude)&&pt(o.geoPointValue.longitude)===pt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return pt(o.integerValue)===pt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=pt(o.doubleValue),m=pt(u.doubleValue);return h===m?Yu(h)===Yu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return Ao(i.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Dg(h)!==Dg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!mr(h[y],m[y])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Qa(i,e){return(i.values||[]).find((t=>mr(t,e)))!==void 0}function Co(i,e){if(i===e)return 0;const t=Vi(i),s=Vi(e);if(t!==s)return Le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=pt(u.integerValue||u.doubleValue),y=pt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return bg(i.timestampValue,e.timestampValue);case 4:return bg(Ga(i),Ga(e));case 5:return Pd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Di(u),y=Di(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const T=Le(m[_],y[_]);if(T!==0)return T}return Le(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Le(pt(u.latitude),pt(h.latitude));return m!==0?m:Le(pt(u.longitude),pt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Og(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var x,z,Y,J;const m=u.fields||{},y=h.fields||{},_=(x=m[Ju])==null?void 0:x.arrayValue,T=(z=y[Ju])==null?void 0:z.arrayValue,C=Le(((Y=_==null?void 0:_.values)==null?void 0:Y.length)||0,((J=T==null?void 0:T.values)==null?void 0:J.length)||0);return C!==0?C:Og(_,T)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===Nu.mapValue&&h===Nu.mapValue)return 0;if(u===Nu.mapValue)return 1;if(h===Nu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},T=Object.keys(_);y.sort(),T.sort();for(let C=0;C<y.length&&C<T.length;++C){const x=Pd(y[C],T[C]);if(x!==0)return x;const z=Co(m[y[C]],_[T[C]]);if(z!==0)return z}return Le(y.length,T.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function bg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Le(i,e);const t=Ni(i),s=Ni(e),o=Le(t.seconds,s.seconds);return o!==0?o:Le(t.nanos,s.nanos)}function Og(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Co(t[o],s[o]);if(u)return u}return Le(t.length,s.length)}function Ro(i){return Nd(i)}function Nd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ni(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Di(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Nd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Nd(t.fields[h])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function Fu(i){switch(Vi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(i);return e?16+Fu(e):16;case 5:return 2*i.stringValue.length;case 6:return Di(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+Fu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Li(s.fields,((u,h)=>{o+=u.length+Fu(h)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function Lg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Dd(i){return!!i&&"integerValue"in i}function sf(i){return!!i&&"arrayValue"in i}function Mg(i){return!!i&&"nullValue"in i}function jg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Uu(i){return!!i&&"mapValue"in i}function rI(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[E_])==null?void 0:s.stringValue)===T_}function Ua(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Li(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ua(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(i.arrayValue.values[t]);return e}return{...i}}function iI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===nI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Uu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Mt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ua(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Uu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Uu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Li(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new sn(Ua(this.value))}}function I_(i){const e=[];return Li(i.fields,((t,s)=>{const o=new Mt([t]);if(Uu(s)){const u=I_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Wt(e,0,Te.min(),Te.min(),Te.min(),sn.empty(),0)}static newFoundDocument(e,t,s,o){return new Wt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Te.min(),Te.min(),sn.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Te.min(),Te.min(),sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zu{constructor(e,t){this.position=e,this.inclusive=t}}function Fg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=Co(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ug(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!mr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ya{constructor(e,t="asc"){this.field=e,this.dir=t}}function sI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class S_{}class wt extends S_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new aI(e,t,s):t==="array-contains"?new cI(e,s):t==="in"?new hI(e,s):t==="not-in"?new dI(e,s):t==="array-contains-any"?new fI(e,s):new wt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lI(e,s):new uI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Co(t,this.value)):t!==null&&Vi(this.value)===Vi(t)&&this.matchesComparison(Co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends S_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new zn(e,t)}matches(e){return A_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function A_(i){return i.op==="and"}function C_(i){return oI(i)&&A_(i)}function oI(i){for(const e of i.filters)if(e instanceof zn)return!1;return!0}function Vd(i){if(i instanceof wt)return i.field.canonicalString()+i.op.toString()+Ro(i.value);if(C_(i))return i.filters.map((e=>Vd(e))).join(",");{const e=i.filters.map((t=>Vd(t))).join(",");return`${i.op}(${e})`}}function R_(i,e){return i instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&mr(s.value,o.value)})(i,e):i instanceof zn?(function(s,o){return o instanceof zn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&R_(h,o.filters[m])),!0):!1})(i,e):void _e(19439)}function k_(i){return i instanceof wt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ro(t.value)}`})(i):i instanceof zn?(function(t){return t.op.toString()+" {"+t.getFilters().map(k_).join(" ,")+"}"})(i):"Filter"}class aI extends wt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class lI extends wt{constructor(e,t){super(e,"in",t),this.keys=x_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uI extends wt{constructor(e,t){super(e,"not-in",t),this.keys=x_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function x_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class cI extends wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sf(t)&&Qa(t.arrayValue,this.value)}}class hI extends wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class dI extends wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qa(this.value.arrayValue,t)}}class fI extends wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qa(this.value.arrayValue,s)))}}/**
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
 */class pI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function zg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new pI(i,e,t,s,o,u,h)}function of(i){const e=Ce(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Vd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),gc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ro(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ro(s))).join(",")),e.Te=t}return e.Te}function af(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!sI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!R_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Ug(i.startAt,e.startAt)&&Ug(i.endAt,e.endAt)}function bd(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mI(i,e,t,s,o,u,h,m){return new Lo(i,e,t,s,o,u,h,m)}function lf(i){return new Lo(i)}function Bg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function P_(i){return i.collectionGroup!==null}function za(i){const e=Ce(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new St(Mt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ya(u,s))})),t.has(Mt.keyField().canonicalString())||e.Ie.push(new Ya(Mt.keyField(),s))}return e.Ie}function ur(i){const e=Ce(i);return e.Ee||(e.Ee=gI(e,za(i))),e.Ee}function gI(i,e){if(i.limitType==="F")return zg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ya(o.field,u)}));const t=i.endAt?new Zu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Zu(i.startAt.position,i.startAt.inclusive):null;return zg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Od(i,e){const t=i.filters.concat([e]);return new Lo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Ld(i,e,t){return new Lo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function _c(i,e){return af(ur(i),ur(e))&&i.limitType===e.limitType}function N_(i){return`${of(ur(i))}|lt:${i.limitType}`}function fo(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>k_(o))).join(", ")}]`),gc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Ro(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Ro(o))).join(",")),`Target(${s})`})(ur(i))}; limitType=${i.limitType})`}function vc(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of za(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=Fg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,za(s),o)||s.endAt&&!(function(h,m,y){const _=Fg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,za(s),o))})(i,e)}function yI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function D_(i){return(e,t)=>{let s=!1;for(const o of za(i)){const u=_I(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function _I(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?Co(y,_):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return m_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new at(de.comparator);function Ur(){return vI}const V_=new at(de.comparator);function La(...i){let e=V_;for(const t of i)e=e.insert(t.key,t);return e}function b_(i){let e=V_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function fs(){return Ba()}function O_(){return Ba()}function Ba(){return new ws((i=>i.toString()),((i,e)=>i.isEqual(e)))}const wI=new at(de.comparator),EI=new St(de.comparator);function Me(...i){let e=EI;for(const t of i)e=e.add(t);return e}const TI=new St(Le);function II(){return TI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function L_(i){return{integerValue:""+i}}function SI(i,e){return XT(e)?L_(e):uf(i,e)}/**
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
 */class wc{constructor(){this._=void 0}}function AI(i,e,t){return i instanceof ec?(function(o,u){const h={fields:{[__]:{stringValue:y_},[w_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&rf(u)&&(u=yc(u)),u&&(h.fields[v_]=u),{mapValue:h}})(t,e):i instanceof Xa?j_(i,e):i instanceof Ja?F_(i,e):(function(o,u){const h=M_(o,u),m=$g(h)+$g(o.Ae);return Dd(h)&&Dd(o.Ae)?L_(m):uf(o.serializer,m)})(i,e)}function CI(i,e,t){return i instanceof Xa?j_(i,e):i instanceof Ja?F_(i,e):t}function M_(i,e){return i instanceof tc?(function(s){return Dd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class ec extends wc{}class Xa extends wc{constructor(e){super(),this.elements=e}}function j_(i,e){const t=U_(e);for(const s of i.elements)t.some((o=>mr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ja extends wc{constructor(e){super(),this.elements=e}}function F_(i,e){let t=U_(e);for(const s of i.elements)t=t.filter((o=>!mr(o,s)));return{arrayValue:{values:t}}}class tc extends wc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $g(i){return pt(i.integerValue||i.doubleValue)}function U_(i){return sf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function RI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Xa&&o instanceof Xa||s instanceof Ja&&o instanceof Ja?Ao(s.elements,o.elements,mr):s instanceof tc&&o instanceof tc?mr(s.Ae,o.Ae):s instanceof ec&&o instanceof ec})(i.transform,e.transform)}class kI{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ec{}function z_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new cf(i.key,Cn.none()):new il(i.key,i.data,Cn.none());{const t=i.data,s=sn.empty();let o=new St(Mt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Mi(i.key,s,new gn(o.toArray()),Cn.none())}}function xI(i,e,t){i instanceof il?(function(o,u,h){const m=o.value.clone(),y=Hg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Mi?(function(o,u,h){if(!zu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Hg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(B_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function $a(i,e,t,s){return i instanceof il?(function(u,h,m,y){if(!zu(u.precondition,h))return m;const _=u.value.clone(),T=Wg(u.fieldTransforms,y,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof Mi?(function(u,h,m,y){if(!zu(u.precondition,h))return m;const _=Wg(u.fieldTransforms,y,h),T=h.data;return T.setAll(B_(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((C=>C.field)))})(i,e,t,s):(function(u,h,m){return zu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function PI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=M_(s.transform,o||null);u!=null&&(t===null&&(t=sn.empty()),t.set(s.field,u))}return t||null}function qg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ao(s,o,((u,h)=>RI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class il extends Ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Mi extends Ec{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function B_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Hg(i,e,t){const s=new Map;He(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,CI(h,m,t[o]))}return s}function Wg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,AI(u,h,e))}return s}class cf extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NI extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&xI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=$a(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=$a(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=O_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=z_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Me())}isEqual(e){return this.batchId===e.batchId&&Ao(this.mutations,e.mutations,((t,s)=>qg(t,s)))&&Ao(this.baseMutations,e.baseMutations,((t,s)=>qg(t,s)))}}class hf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return wI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new hf(e,t,s,o)}}/**
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
 */class VI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Fe;function OI(i){switch(i){case B.OK:return _e(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function $_(i){if(i===void 0)return Fr("GRPC error has no .code"),B.UNKNOWN;switch(i){case vt.OK:return B.OK;case vt.CANCELLED:return B.CANCELLED;case vt.UNKNOWN:return B.UNKNOWN;case vt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case vt.INTERNAL:return B.INTERNAL;case vt.UNAVAILABLE:return B.UNAVAILABLE;case vt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case vt.NOT_FOUND:return B.NOT_FOUND;case vt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case vt.ABORTED:return B.ABORTED;case vt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case vt.DATA_LOSS:return B.DATA_LOSS;default:return _e(39323,{code:i})}}(Fe=vt||(vt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LI(){return new TextEncoder}/**
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
 */const MI=new Ri([4294967295,4294967295],0);function Gg(i){const e=LI().encode(i),t=new i_;return t.update(e),new Uint8Array(t.digest())}function Kg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ri([t,s],0),new Ri([o,u],0)]}class df{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ma(`Invalid padding: ${t}`);if(s<0)throw new Ma(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ri.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Ri.fromNumber(s)));return o.compare(MI)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gg(e),[s,o]=Kg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new df(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Gg(e),[s,o]=Kg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,sl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Tc(Te.min(),o,new at(Le),Ur(),Me())}}class sl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new sl(s,t,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class q_{constructor(e,t){this.targetId=e,this.Ce=t}}class H_{constructor(e,t,s=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Qg{constructor(){this.ve=0,this.Fe=Yg(),this.Me=jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Me(),t=Me(),s=Me();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new sl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Yg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class jI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.Je=Du(),this.He=Du(),this.Ye=new at(Le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(bd(u))if(s===0){const h=new de(u.path);this.et(t,h,Wt.newNoDocument(h,Te.min()))}else He(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Di(s).toUint8Array()}catch(y){if(y instanceof g_)return So("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new df(h,o,u)}catch(y){return So(y instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&bd(m.target)){const y=new de(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Wt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=Me();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new Tc(e,t,this.Ye,this.je,s);return this.je=Ur(),this.Je=Du(),this.He=Du(),this.Ye=new at(Le),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Qg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new St(Le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new St(Le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Du(){return new at(de.comparator)}function Yg(){return new at(de.comparator)}const FI={asc:"ASCENDING",desc:"DESCENDING"},UI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zI={and:"AND",or:"OR"};class BI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Md(i,e){return i.useProto3Json||gc(e)?e:{value:e}}function nc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function $I(i,e){return nc(i,e.toTimestamp())}function cr(i){return He(!!i,49232),Te.fromTimestamp((function(t){const s=Ni(t);return new nt(s.seconds,s.nanos)})(i))}function ff(i,e){return jd(i,e).canonicalString()}function jd(i,e){const t=(function(o){return new Je(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function G_(i){const e=Je.fromString(i);return He(J_(e),10190,{key:e.toString()}),e}function Fd(i,e){return ff(i.databaseId,e.path)}function yd(i,e){const t=G_(e);if(t.get(1)!==i.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(Q_(t))}function K_(i,e){return ff(i.databaseId,e)}function qI(i){const e=G_(i);return e.length===4?Je.emptyPath():Q_(e)}function Ud(i){return new Je(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Q_(i){return He(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Xg(i,e,t){return{name:Fd(i,e),fields:t.value.mapValue.fields}}function HI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(He(T===void 0||typeof T=="string",58123),jt.fromBase64String(T||"")):(He(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),jt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const T=_.code===void 0?B.UNKNOWN:$_(_.code);return new te(T,_.message||"")})(h);t=new H_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=yd(i,s.document.name),u=cr(s.document.updateTime),h=s.document.createTime?cr(s.document.createTime):Te.min(),m=new sn({mapValue:{fields:s.document.fields}}),y=Wt.newFoundDocument(o,u,h,m),_=s.targetIds||[],T=s.removedTargetIds||[];t=new Bu(_,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=yd(i,s.document),u=s.readTime?cr(s.readTime):Te.min(),h=Wt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Bu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=yd(i,s.document),u=s.removedTargetIds||[];t=new Bu([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new bI(o,u),m=s.targetId;t=new q_(m,h)}}return t}function WI(i,e){let t;if(e instanceof il)t={update:Xg(i,e.key,e.value)};else if(e instanceof cf)t={delete:Fd(i,e.key)};else if(e instanceof Mi)t={update:Xg(i,e.key,e.data),updateMask:t1(e.fieldMask)};else{if(!(e instanceof NI))return _e(16599,{Vt:e.type});t={verify:Fd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof ec)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof tc)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:$I(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function GI(i,e){return i&&i.length>0?(He(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?cr(o.updateTime):cr(u);return h.isEqual(Te.min())&&(h=cr(u)),new kI(h,o.transformResults||[])})(t,e)))):[]}function KI(i,e){return{documents:[K_(i,e.path)]}}function QI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=K_(i,o);const u=(function(_){if(_.length!==0)return X_(zn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(x){return{field:po(x.field),direction:JI(x.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Md(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function YI(i){let e=qI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){He(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(C){const x=Y_(C);return x instanceof zn&&C_(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(C){return C.map((x=>(function(Y){return new Ya(mo(Y.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(C){let x;return x=typeof C=="object"?C.value:C,gc(x)?null:x})(t.limit));let y=null;t.startAt&&(y=(function(C){const x=!!C.before,z=C.values||[];return new Zu(z,x)})(t.startAt));let _=null;return t.endAt&&(_=(function(C){const x=!C.before,z=C.values||[];return new Zu(z,x)})(t.endAt)),mI(e,o,h,u,m,"F",y,_)}function XI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Y_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=mo(t.unaryFilter.field);return wt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return wt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return wt.create(mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return zn.create(t.compositeFilter.filters.map((s=>Y_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function JI(i){return FI[i]}function ZI(i){return UI[i]}function e1(i){return zI[i]}function po(i){return{fieldPath:i.canonicalString()}}function mo(i){return Mt.fromServerFormat(i.fieldPath)}function X_(i){return i instanceof wt?(function(t){if(t.op==="=="){if(jg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(Mg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(Mg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:ZI(t.op),value:t.value}}})(i):i instanceof zn?(function(t){const s=t.getFilters().map((o=>X_(o)));return s.length===1?s[0]:{compositeFilter:{op:e1(t.op),filters:s}}})(i):_e(54877,{filter:i})}function t1(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function J_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,s,o,u=Te.min(),h=Te.min(),m=jt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.yt=e}}function r1(i){const e=YI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Ld(e,e.limit,"L"):e}/**
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
 */class i1{constructor(){this.Cn=new s1}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Pi.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Pi.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class s1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new St(Je.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new St(Je.comparator)).toArray()}}/**
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
 */const Jg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Z_=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(Z_,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ko(0)}static cr(){return new ko(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="LruGarbageCollector",o1=1048576;function ey([i,e],[t,s]){const o=Le(i,t);return o===0?Le(e,s):o}class a1{constructor(e){this.Ir=e,this.buffer=new St(ey),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ey(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class l1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ie(Zg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oo(t)?ie(Zg,"Ignoring IndexedDB error during garbage collection: ",t):await bo(t)}await this.Vr(3e5)}))}}class u1{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(mc.ce);const s=new a1(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Jg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o)))).next((C=>(s=C,m=Date.now(),this.removeTargets(e,s,t)))).next((C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(_=Date.now(),ho()<=Oe.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(_-y)+`ms
Total Duration: ${_-T}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C}))))}}function c1(i,e){return new u1(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.changes=new ws((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class d1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&$a(s.mutation,o,gn.empty(),nt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Me()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Me()){const o=fs();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=La();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=fs();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Me())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ur();const h=Ba(),m=(function(){return Ba()})();return t.forEach(((y,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof Mi)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),$a(T.mutation,_,T.mutation.getFieldMask(),nt.now())):h.set(_.key,gn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>m.set(_,new d1(T,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Ba();let o=new at(((h,m)=>h-m)),u=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let T=s.get(y)||gn.empty();T=m.applyToLocalView(_,T),s.set(y,T);const C=(o.get(m.batchId)||Me()).add(y);o=o.insert(m.batchId,C)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,T=y.value,C=O_();T.forEach((x=>{if(!u.has(x)){const z=z_(t.get(x),s.get(x));z!==null&&C.set(x,z),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,C))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):P_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):q.resolve(fs());let m=Wa,y=u;return h.next((_=>q.forEach(_,((T,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(T)?q.resolve():this.remoteDocumentCache.getEntry(e,T).next((x=>{y=y.insert(T,x)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,Me()))).next((T=>({batchId:m,changes:b_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=La();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=La();return this.indexManager.getCollectionParents(e,u).next((m=>q.forEach(m,(y=>{const _=(function(C,x){return new Lo(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((T=>{T.forEach(((C,x)=>{h=h.insert(C,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,Wt.newInvalidDocument(T)))}));let m=La();return h.forEach(((y,_)=>{const T=u.get(y);T!==void 0&&$a(T.mutation,_,gn.empty(),nt.now()),vc(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:r1(o.bundledQuery),readTime:cr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class m1{constructor(){this.overlays=new at(de.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fs();return q.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=fs(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new at(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=fs(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=fs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,T)=>m.set(_,T))),!(m.size()>=o)););return q.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new VI(t,s));let u=this.qr.get(t);u===void 0&&(u=Me(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class g1{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Qr=new St(xt.$r),this.Ur=new St(xt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new xt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new xt(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new Je([])),s=new xt(t,e),o=new xt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new Je([])),s=new xt(t,e),o=new xt(t,e+1);let u=Me();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new xt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class xt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Le(e.Yr,t.Yr)}static Kr(e,t){return Le(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new St(xt.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new DI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new xt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?nf:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new St(Le);return t.forEach((o=>{const u=new xt(o,0),h=new xt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new xt(new de(u),0);let m=new St(Le);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),q.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){He(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(t.mutations,(o=>{const u=new xt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new xt(t,0),o=this.Zr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.ri=e,this.docs=(function(){return new at(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let s=Ur();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Wt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ur();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:T}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||GT(WT(T),s)<=0||(o.has(T.key)||vc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return q.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ii(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new v1(this)}getSize(e){return q.resolve(this.size)}}class v1 extends h1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.persistence=e,this.si=new ws((t=>of(t)),af),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new pf,this.targetCount=0,this.ai=ko.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),q.waitFor(u).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.ui={},this.overlays={},this.ci=new mc(0),this.li=!1,this.li=!0,this.hi=new g1,this.referenceDelegate=e(this),this.Pi=new w1(this),this.indexManager=new i1,this.remoteDocumentCache=(function(o){return new _1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new n1(t),this.Ii=new p1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new m1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new y1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new E1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return q.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class E1 extends QT{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Ri=new pf,this.Vi=null}static mi(e){return new mf(e)}get fi(){if(this.Vi)return this.Vi;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(s=>{const o=de.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class rc{constructor(e,t){this.persistence=e,this.pi=new ws((s=>JT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=c1(this,t)}static mi(e,t){return new rc(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}br(e,t,s){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Me(),o=Me();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new gf(e,t.fromCache,s,o)}}/**
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
 */class T1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class I1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return pE()?8:YT(Gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new T1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(ho()<=Oe.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(ho()<=Oe.DEBUG&&ie("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(ho()<=Oe.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(t))):q.resolve())}ys(e,t){if(Bg(t))return q.resolve(null);let s=ur(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Ld(t,null,"F"),s=ur(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Me(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Ld(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return Bg(t)||o.isEqual(Te.min())?q.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?q.resolve(null):(ho()<=Oe.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.vs(e,h,t,HT(o,Wa)).next((m=>m)))}))}Ds(e,t){let s=new St(D_(e));return t.forEach(((o,u)=>{vc(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return ho()<=Oe.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",fo(t)),this.ps.getDocumentsMatchingQuery(e,t,Pi.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="LocalStore",S1=3e8;class A1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new at(Le),this.xs=new ws((u=>of(u)),af),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new f1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function C1(i,e,t,s){return new A1(i,e,t,s)}async function tv(i,e){const t=Ce(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Me();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function R1(i,e){const t=Ce(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,T){const C=_.batch,x=C.keys();let z=q.resolve();return x.forEach((Y=>{z=z.next((()=>T.getEntry(y,Y))).next((J=>{const W=_.docVersions.get(Y);He(W!==null,48541),J.version.compareTo(W)<0&&(C.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),T.addEntry(J)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,C)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Me();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function nv(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function k1(i,e){const t=Ce(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((T,C)=>{const x=o.get(C);if(!x)return;m.push(t.Pi.removeMatchingKeys(u,T.removedDocuments,C).next((()=>t.Pi.addMatchingKeys(u,T.addedDocuments,C))));let z=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?z=z.withResumeToken(jt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,s)),o=o.insert(C,z),(function(J,W,we){return J.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=S1?!0:we.addedDocuments.size+we.modifiedDocuments.size+we.removedDocuments.size>0})(x,z,T)&&m.push(t.Pi.updateTargetData(u,z))}));let y=Ur(),_=Me();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(x1(u,h,e.documentUpdates).next((T=>{y=T.ks,_=T.qs}))),!s.isEqual(Te.min())){const T=t.Pi.getLastRemoteSnapshotVersion(u).next((C=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return q.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function x1(i,e,t){let s=Me(),o=Me();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ur();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Te.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ie(yf,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function P1(i,e){const t=Ce(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function N1(i,e){const t=Ce(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,q.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new Ii(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function zd(i,e,t){const s=Ce(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Oo(h))throw h;ie(yf,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function ty(i,e,t){const s=Ce(i);let o=Te.min(),u=Me();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,T){const C=Ce(y),x=C.xs.get(T);return x!==void 0?q.resolve(C.Ms.get(x)):C.Pi.getTargetData(_,T)})(s,h,ur(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:Me()))).next((m=>(D1(s,yI(e),m),{documents:m,Qs:u})))))}function D1(i,e,t){let s=i.Os.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class ny{constructor(){this.activeTargetIds=II()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V1{constructor(){this.Mo=new ny,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ny,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class b1{Oo(e){}shutdown(){}}/**
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
 */const ry="ConnectivityMonitor";class iy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(ry,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ie(ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vu=null;function Bd(){return Vu===null?Vu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vu++,"0x"+Vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="RestConnection",O1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class L1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Xu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=Bd(),m=this.zo(e,t.toUriEncodedString());ie(_d,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),T=No(_);return this.Jo(e,m,y,s,T).then((C=>(ie(_d,`Received RPC '${e}' ${h}: `,C),C)),(C=>{throw So(_d,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=O1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class j1 extends L1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Bd();return new Promise(((m,y)=>{const _=new s_;_.setWithCredentials(!0),_.listenOnce(o_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case ju.NO_ERROR:const C=_.getResponseJson();ie(qt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case ju.TIMEOUT:ie(qt,`RPC '${e}' ${h} timed out`),y(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case ju.HTTP_ERROR:const x=_.getStatus();if(ie(qt,`RPC '${e}' ${h} failed with status:`,x,"response text:",_.getResponseText()),x>0){let z=_.getResponseJson();Array.isArray(z)&&(z=z[0]);const Y=z==null?void 0:z.error;if(Y&&Y.status&&Y.message){const J=(function(we){const ae=we.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(ae)>=0?ae:B.UNKNOWN})(Y.status);y(new te(J,Y.message))}else y(new te(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new te(B.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ie(qt,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);ie(qt,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,s,15)}))}T_(e,t,s){const o=Bd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=u_(),m=l_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const T=u.join("");ie(qt,`Creating RPC '${e}' stream ${o}: ${T}`,y);const C=h.createWebChannel(T,y);this.I_(C);let x=!1,z=!1;const Y=new M1({Yo:W=>{z?ie(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(x||(ie(qt,`Opening RPC '${e}' stream ${o} transport.`),C.open(),x=!0),ie(qt,`RPC '${e}' stream ${o} sending:`,W),C.send(W))},Zo:()=>C.close()}),J=(W,we,ae)=>{W.listen(we,(Re=>{try{ae(Re)}catch(Pe){setTimeout((()=>{throw Pe}),0)}}))};return J(C,Oa.EventType.OPEN,(()=>{z||(ie(qt,`RPC '${e}' stream ${o} transport opened.`),Y.o_())})),J(C,Oa.EventType.CLOSE,(()=>{z||(z=!0,ie(qt,`RPC '${e}' stream ${o} transport closed`),Y.a_(),this.E_(C))})),J(C,Oa.EventType.ERROR,(W=>{z||(z=!0,So(qt,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Y.a_(new te(B.UNAVAILABLE,"The operation could not be completed")))})),J(C,Oa.EventType.MESSAGE,(W=>{var we;if(!z){const ae=W.data[0];He(!!ae,16349);const Re=ae,Pe=(Re==null?void 0:Re.error)||((we=Re[0])==null?void 0:we.error);if(Pe){ie(qt,`RPC '${e}' stream ${o} received error:`,Pe);const qe=Pe.status;let Ne=(function(R){const V=vt[R];if(V!==void 0)return $_(V)})(qe),P=Pe.message;Ne===void 0&&(Ne=B.INTERNAL,P="Unknown error status: "+qe+" with message "+Pe.message),z=!0,Y.a_(new te(Ne,P)),C.close()}else ie(qt,`RPC '${e}' stream ${o} received:`,ae),Y.u_(ae)}})),J(m,a_.STAT_EVENT,(W=>{W.stat===xd.PROXY?ie(qt,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===xd.NOPROXY&&ie(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.__()}),0),Y}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(i){return new BI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="PersistentStream";class iv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new te(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ie(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ie(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class F1 extends iv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=HI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?cr(h.readTime):Te.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ud(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=bd(y)?{documents:KI(u,y)}:{query:QI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=W_(u,h.resumeToken);const _=Md(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=nc(u,h.snapshotVersion.toTimestamp());const _=Md(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=XI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ud(this.serializer),t.removeTarget=e,this.q_(t)}}class U1 extends iv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=GI(e.writeResults,e.commitTime),s=cr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ud(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>WI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{}class B1 extends z1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,jd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(B.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,jd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(B.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class $1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fr(t),this.aa=!1):ie("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="RemoteStore";class q1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{Es(this)&&(ie(_s,"Restarting streams for network reachability change."),await(async function(y){const _=Ce(y);_.Ea.add(4),await ol(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Sc(_)})(this))}))})),this.Ra=new $1(s,o)}}async function Sc(i){if(Es(i))for(const e of i.da)await e(!0)}async function ol(i){for(const e of i.da)await e(!1)}function sv(i,e){const t=Ce(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ef(t)?wf(t):Mo(t).O_()&&vf(t,e))}function _f(i,e){const t=Ce(i),s=Mo(t);t.Ia.delete(e),s.O_()&&ov(t,e),t.Ia.size===0&&(s.O_()?s.L_():Es(t)&&t.Ra.set("Unknown"))}function vf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mo(i).Y_(e)}function ov(i,e){i.Va.Ue(e),Mo(i).Z_(e)}function wf(i){i.Va=new jI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Mo(i).start(),i.Ra.ua()}function Ef(i){return Es(i)&&!Mo(i).x_()&&i.Ia.size>0}function Es(i){return Ce(i).Ea.size===0}function av(i){i.Va=void 0}async function H1(i){i.Ra.set("Online")}async function W1(i){i.Ia.forEach(((e,t)=>{vf(i,e)}))}async function G1(i,e){av(i),Ef(i)?(i.Ra.ha(e),wf(i)):i.Ra.set("Unknown")}async function K1(i,e,t){if(i.Ra.set("Online"),e instanceof H_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){ie(_s,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ic(i,s)}else if(e instanceof Bu?i.Va.Ze(e):e instanceof q_?i.Va.st(e):i.Va.tt(e),!t.isEqual(Te.min()))try{const s=await nv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(_);T&&u.Ia.set(_,T.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(jt.EMPTY_BYTE_STRING,T.snapshotVersion)),ov(u,y);const C=new Ii(T.target,y,_,T.sequenceNumber);vf(u,C)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ie(_s,"Failed to raise snapshot:",s),await ic(i,s)}}async function ic(i,e,t){if(!Oo(e))throw e;i.Ea.add(1),await ol(i),i.Ra.set("Offline"),t||(t=()=>nv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ie(_s,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Sc(i)}))}function lv(i,e){return e().catch((t=>ic(i,t,e)))}async function Ac(i){const e=Ce(i),t=bi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:nf;for(;Q1(e);)try{const o=await P1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,Y1(e,o)}catch(o){await ic(e,o)}uv(e)&&cv(e)}function Q1(i){return Es(i)&&i.Ta.length<10}function Y1(i,e){i.Ta.push(e);const t=bi(i);t.O_()&&t.X_&&t.ea(e.mutations)}function uv(i){return Es(i)&&!bi(i).x_()&&i.Ta.length>0}function cv(i){bi(i).start()}async function X1(i){bi(i).ra()}async function J1(i){const e=bi(i);for(const t of i.Ta)e.ea(t.mutations)}async function Z1(i,e,t){const s=i.Ta.shift(),o=hf.from(s,e,t);await lv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Ac(i)}async function eS(i,e){e&&bi(i).X_&&await(async function(s,o){if((function(h){return OI(h)&&h!==B.ABORTED})(o.code)){const u=s.Ta.shift();bi(s).B_(),await lv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Ac(s)}})(i,e),uv(i)&&cv(i)}async function oy(i,e){const t=Ce(i);t.asyncQueue.verifyOperationInProgress(),ie(_s,"RemoteStore received new credentials");const s=Es(t);t.Ea.add(3),await ol(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Sc(t)}async function tS(i,e){const t=Ce(i);e?(t.Ea.delete(2),await Sc(t)):e||(t.Ea.add(2),await ol(t),t.Ra.set("Unknown"))}function Mo(i){return i.ma||(i.ma=(function(t,s,o){const u=Ce(t);return u.sa(),new F1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:H1.bind(null,i),t_:W1.bind(null,i),r_:G1.bind(null,i),H_:K1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),Ef(i)?wf(i):i.Ra.set("Unknown")):(await i.ma.stop(),av(i))}))),i.ma}function bi(i){return i.fa||(i.fa=(function(t,s,o){const u=Ce(t);return u.sa(),new U1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:X1.bind(null,i),r_:eS.bind(null,i),ta:J1.bind(null,i),na:Z1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await Ac(i)):(await i.fa.stop(),i.Ta.length>0&&(ie(_s,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Tf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(i,e){if(Fr("AsyncQueue",`${e}: ${i}`),Oo(i))return new te(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=La(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new _o;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.ga=new at(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class xo{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new xo(e,t,_o.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class rS{constructor(){this.queries=ly(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ce(t),u=o.queries;o.queries=ly(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new te(B.ABORTED,"Firestore shutting down"))}}function ly(){return new ws((i=>N_(i)),_c)}async function hv(i,e){const t=Ce(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new nS,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=If(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Sf(t)}async function dv(i,e){const t=Ce(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function iS(i,e){const t=Ce(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&Sf(t)}function sS(i,e,t){const s=Ce(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Sf(i){i.Ca.forEach((e=>{e.next()}))}var $d,uy;(uy=$d||($d={})).Ma="default",uy.Cache="cache";class fv{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new xo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.key=e}}class mv{constructor(e){this.key=e}}class oS{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Me(),this.mutatedKeys=Me(),this.eu=D_(e),this.tu=new _o(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new ay,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,C)=>{const x=o.get(T),z=vc(this.query,C)?C:null,Y=!!x&&this.mutatedKeys.has(x.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let W=!1;x&&z?x.data.isEqual(z.data)?Y!==J&&(s.track({type:3,doc:z}),W=!0):this.su(x,z)||(s.track({type:2,doc:z}),W=!0,(y&&this.eu(z,y)>0||_&&this.eu(z,_)<0)&&(m=!0)):!x&&z?(s.track({type:0,doc:z}),W=!0):x&&!z&&(s.track({type:1,doc:x}),W=!0,(y||_)&&(m=!0)),W&&(z?(h=h.add(z),u=J?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,C)=>(function(z,Y){const J=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Rt:W})}};return J(z)-J(Y)})(T.type,C.type)||this.eu(T.doc,C.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new xo(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ay,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Me(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new mv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new pv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=Me();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return xo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Af="SyncEngine";class aS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class lS{constructor(e){this.key=e,this.hu=!1}}class uS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ws((m=>N_(m)),_c),this.Iu=new Map,this.Eu=new Set,this.du=new at(de.comparator),this.Au=new Map,this.Ru=new pf,this.Vu={},this.mu=new Map,this.fu=ko.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cS(i,e,t=!0){const s=Ev(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await gv(s,e,t,!0),o}async function hS(i,e){const t=Ev(i);await gv(t,e,!0,!1)}async function gv(i,e,t,s){const o=await N1(i.localStore,ur(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await dS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&sv(i.remoteStore,o),m}async function dS(i,e,t,s,o){i.pu=(C,x,z)=>(async function(J,W,we,ae){let Re=W.view.ru(we);Re.Cs&&(Re=await ty(J.localStore,W.query,!1).then((({documents:P})=>W.view.ru(P,Re))));const Pe=ae&&ae.targetChanges.get(W.targetId),qe=ae&&ae.targetMismatches.get(W.targetId)!=null,Ne=W.view.applyChanges(Re,J.isPrimaryClient,Pe,qe);return hy(J,W.targetId,Ne.au),Ne.snapshot})(i,C,x,z);const u=await ty(i.localStore,e,!0),h=new oS(e,u.Qs),m=h.ru(u.documents),y=sl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);hy(i,t,_.au);const T=new aS(e,t,h);return i.Tu.set(e,T),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function fS(i,e,t){const s=Ce(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!_c(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await zd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&_f(s.remoteStore,o.targetId),qd(s,o.targetId)})).catch(bo)):(qd(s,o.targetId),await zd(s.localStore,o.targetId,!0))}async function pS(i,e){const t=Ce(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_f(t.remoteStore,s.targetId))}async function mS(i,e,t){const s=TS(i);try{const o=await(function(h,m){const y=Ce(h),_=nt.now(),T=m.reduce(((z,Y)=>z.add(Y.key)),Me());let C,x;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Y=Ur(),J=Me();return y.Ns.getEntries(z,T).next((W=>{Y=W,Y.forEach(((we,ae)=>{ae.isValidDocument()||(J=J.add(we))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Y))).next((W=>{C=W;const we=[];for(const ae of m){const Re=PI(ae,C.get(ae.key).overlayedDocument);Re!=null&&we.push(new Mi(ae.key,Re,I_(Re.value.mapValue),Cn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,_,we,m)})).next((W=>{x=W;const we=W.applyToLocalDocumentSet(C,J);return y.documentOverlayCache.saveOverlays(z,W.batchId,we)}))})).then((()=>({batchId:x.batchId,changes:b_(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new at(Le)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await al(s,o.changes),await Ac(s.remoteStore)}catch(o){const u=If(o,"Failed to persist write");t.reject(u)}}async function yv(i,e){const t=Ce(i);try{const s=await k1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?He(h.hu,14607):o.removedDocuments.size>0&&(He(h.hu,42227),h.hu=!1))})),await al(t,s,e)}catch(s){await bo(s)}}function cy(i,e,t){const s=Ce(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Ce(h);y.onlineState=m;let _=!1;y.queries.forEach(((T,C)=>{for(const x of C.Sa)x.va(m)&&(_=!0)})),_&&Sf(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gS(i,e,t){const s=Ce(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new at(de.comparator);h=h.insert(u,Wt.newNoDocument(u,Te.min()));const m=Me().add(u),y=new Tc(Te.min(),new Map,new at(Le),h,m);await yv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Cf(s)}else await zd(s.localStore,e,!1).then((()=>qd(s,e,t))).catch(bo)}async function yS(i,e){const t=Ce(i),s=e.batch.batchId;try{const o=await R1(t.localStore,e);vv(t,s,null),_v(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await al(t,o)}catch(o){await bo(o)}}async function _S(i,e,t){const s=Ce(i);try{const o=await(function(h,m){const y=Ce(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return y.mutationQueue.lookupMutationBatch(_,m).next((C=>(He(C!==null,37113),T=C.keys(),y.mutationQueue.removeMutationBatch(_,C)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>y.localDocuments.getDocuments(_,T)))}))})(s.localStore,e);vv(s,e,t),_v(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await al(s,o)}catch(o){await bo(o)}}function _v(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function vv(i,e,t){const s=Ce(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function qd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||wv(i,s)}))}function wv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(_f(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Cf(i))}function hy(i,e,t){for(const s of t)s instanceof pv?(i.Ru.addReference(s.key,e),vS(i,s)):s instanceof mv?(ie(Af,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||wv(i,s.key)):_e(19791,{wu:s})}function vS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(ie(Af,"New document in limbo: "+t),i.Eu.add(s),Cf(i))}function Cf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new de(Je.fromString(e)),s=i.fu.next();i.Au.set(s,new lS(t)),i.du=i.du.insert(t,s),sv(i.remoteStore,new Ii(ur(lf(t.path)),s,"TargetPurposeLimboResolution",mc.ce))}}async function al(i,e,t){const s=Ce(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var T;if((_||t)&&s.isPrimaryClient){const C=_?!_.fromCache:(T=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,C?"current":"not-current")}if(_){o.push(_);const C=gf.As(y.targetId,_);u.push(C)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const T=Ce(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>q.forEach(_,(x=>q.forEach(x.Es,(z=>T.persistence.referenceDelegate.addReference(C,x.targetId,z))).next((()=>q.forEach(x.ds,(z=>T.persistence.referenceDelegate.removeReference(C,x.targetId,z)))))))))}catch(C){if(!Oo(C))throw C;ie(yf,"Failed to update sequence numbers: "+C)}for(const C of _){const x=C.targetId;if(!C.fromCache){const z=T.Ms.get(x),Y=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(Y);T.Ms=T.Ms.insert(x,J)}}})(s.localStore,u))}async function wS(i,e){const t=Ce(i);if(!t.currentUser.isEqual(e)){ie(Af,"User change. New user:",e.toKey());const s=await tv(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new te(B.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await al(t,s.Ls)}}function ES(i,e){const t=Ce(i),s=t.Au.get(e);if(s&&s.hu)return Me().add(s.key);{let o=Me();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function Ev(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=yv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ES.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gS.bind(null,e),e.Pu.H_=iS.bind(null,e.eventManager),e.Pu.yu=sS.bind(null,e.eventManager),e}function TS(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_S.bind(null,e),e}class sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return C1(this.persistence,new I1,e.initialUser,this.serializer)}Cu(e){return new ev(mf.mi,this.serializer)}Du(e){return new V1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sc.provider={build:()=>new sc};class IS extends sc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){He(this.persistence.referenceDelegate instanceof rc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new l1(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new ev((s=>rc.mi(s,t)),this.serializer)}}class Hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wS.bind(null,this.syncEngine),await tS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rS})()}createDatastore(e){const t=Ic(e.databaseInfo.databaseId),s=(function(u){return new j1(u)})(e.databaseInfo);return(function(u,h,m,y){return new B1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new q1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>cy(this.syncEngine,t,0)),(function(){return iy.v()?new iy:new b1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,T){const C=new uS(o,u,h,m,y,_);return T&&(C.gu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ce(o);ie(_s,"RemoteStore shutting down."),u.Ea.add(5),await ol(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Hd.provider={build:()=>new Hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="FirestoreClient";class SS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ie(Oi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ie(Oi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=If(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function wd(i,e){i.asyncQueue.verifyOperationInProgress(),ie(Oi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await tv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function dy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await AS(i);ie(Oi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>oy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>oy(e.remoteStore,o))),i._onlineComponents=e}async function AS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ie(Oi,"Using user provided OfflineComponentProvider");try{await wd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;So("Error using user provided cache. Falling back to memory cache: "+t),await wd(i,new sc)}}else ie(Oi,"Using default OfflineComponentProvider"),await wd(i,new IS(void 0));return i._offlineComponents}async function Iv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ie(Oi,"Using user provided OnlineComponentProvider"),await dy(i,i._uninitializedComponentsProvider._online)):(ie(Oi,"Using default OnlineComponentProvider"),await dy(i,new Hd))),i._onlineComponents}function CS(i){return Iv(i).then((e=>e.syncEngine))}async function Sv(i){const e=await Iv(i),t=e.eventManager;return t.onListen=cS.bind(null,e.syncEngine),t.onUnlisten=fS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pS.bind(null,e.syncEngine),t}function RS(i,e,t={}){const s=new Mr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const T=new Tv({next:x=>{T.Nu(),h.enqueueAndForget((()=>dv(u,C)));const z=x.docs.has(m);!z&&x.fromCache?_.reject(new te(B.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&x.fromCache&&y&&y.source==="server"?_.reject(new te(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(x)},error:x=>_.reject(x)}),C=new fv(lf(m.path),T,{includeMetadataChanges:!0,qa:!0});return hv(u,C)})(await Sv(i),i.asyncQueue,e,t,s))),s.promise}function kS(i,e,t={}){const s=new Mr;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const T=new Tv({next:x=>{T.Nu(),h.enqueueAndForget((()=>dv(u,C))),x.fromCache&&y.source==="server"?_.reject(new te(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(x)},error:x=>_.reject(x)}),C=new fv(m,T,{includeMetadataChanges:!0,qa:!0});return hv(u,C)})(await Sv(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */function Av(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="firestore.googleapis.com",py=!0;class my{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cv,this.ssl=py}else this.host=e.host,this.ssl=e.ssl??py;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Z_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<o1)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Av(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new bT;switch(s.type){case"firstParty":return new jT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=fy.get(t);s&&(ie("ComponentProvider","Removing Datastore"),fy.delete(t),s.terminate())})(this),Promise.resolve()}}function xS(i,e,t,s={}){var _;i=Un(i,Cc);const o=No(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Yy(`https://${m}`),Xy("Firestore",!0)),u.host!==Cv&&u.host!==m&&So("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!ms(y,h)&&(i._setSettings(y),s.mockUserToken)){let T,C;if(typeof s.mockUserToken=="string")T=s.mockUserToken,C=Ht.MOCK_USER;else{T=sE(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Ht(x)}i._authCredentials=new OT(new h_(T,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ts(this.firestore,e,this._query)}}class mt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rl(t,mt._jsonSchema))return new mt(e,s||null,new de(Je.fromString(t.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:Et("string",mt._jsonSchemaVersion),referencePath:Et("string")};class ki extends Ts{constructor(e,t,s){super(e,t,lf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new de(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function ar(i,e,...t){if(i=Pt(i),d_("collection","path",e),i instanceof Cc){const s=Je.fromString(e,...t);return kg(s),new ki(i,null,s)}{if(!(i instanceof mt||i instanceof ki))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return kg(s),new ki(i.firestore,null,s)}}function go(i,e,...t){if(i=Pt(i),arguments.length===1&&(e=tf.newId()),d_("doc","path",e),i instanceof Cc){const s=Je.fromString(e,...t);return Rg(s),new mt(i,null,new de(s))}{if(!(i instanceof mt||i instanceof ki))throw new te(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...t));return Rg(s),new mt(i.firestore,i instanceof ki?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="AsyncQueue";class yy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rv(this,"async_queue_retry"),this._c=()=>{const s=vd();s&&ie(gy,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=vd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=vd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Mr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Oo(e))throw e;ie(gy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Fr("INTERNAL UNHANDLED ERROR: ",_y(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Tf.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:_y(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _y(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Is extends Cc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yy(e),this._firestoreClient=void 0,await e}}}function PS(i,e){const t=typeof i=="object"?i:t_(),s=typeof i=="string"?i:Xu,o=Zd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=rE("firestore");u&&xS(o,...u)}return o}function Rf(i){if(i._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||NS(i),i._firestoreClient}function NS(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,_,T){return new tI(m,y,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,Av(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new SS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(jt.fromBase64String(e))}catch(t){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new An(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rl(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:Et("string",An._jsonSchemaVersion),bytes:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(rl(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:Et("string",hr._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
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
 */class dr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rl(e,dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new dr(e.vectorValues);throw new te(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dr._jsonSchemaVersion="firestore/vectorValue/1.0",dr._jsonSchema={type:Et("string",dr._jsonSchemaVersion),vectorValues:Et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=/^__.*__$/;class VS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms):new il(e,this.data,t,this.fieldTransforms)}}class Rv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Mi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{Ac:i})}}class xf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new xf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return oc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(kv(this.Ac)&&DS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class bS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ic(e)}Cc(e,t,s,o=!1){return new xf({Ac:e,methodName:t,Dc:s,path:Mt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kc(i){const e=i._freezeSettings(),t=Ic(i._databaseId);return new bS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function xv(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);Pf("Data must be an object, but it was:",h,s);const m=Pv(s,h);let y,_;if(u.merge)y=new gn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const C of u.mergeFields){const x=Wd(e,C,t);if(!h.contains(x))throw new te(B.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Dv(T,x)||T.push(x)}y=new gn(T),_=h.fieldTransforms.filter((C=>y.covers(C.field)))}else y=null,_=h.fieldTransforms;return new VS(new sn(m),y,_)}class xc extends kf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xc}}function OS(i,e,t,s){const o=i.Cc(1,e,t);Pf("Data must be an object, but it was:",o,s);const u=[],h=sn.empty();Li(s,((y,_)=>{const T=Nf(e,y,t);_=Pt(_);const C=o.yc(T);if(_ instanceof xc)u.push(T);else{const x=ll(_,C);x!=null&&(u.push(T),h.set(T,x))}}));const m=new gn(u);return new Rv(h,m,o.fieldTransforms)}function LS(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[Wd(e,s,t)],y=[o];if(u.length%2!=0)throw new te(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let x=0;x<u.length;x+=2)m.push(Wd(e,u[x])),y.push(u[x+1]);const _=[],T=sn.empty();for(let x=m.length-1;x>=0;--x)if(!Dv(_,m[x])){const z=m[x];let Y=y[x];Y=Pt(Y);const J=h.yc(z);if(Y instanceof xc)_.push(z);else{const W=ll(Y,J);W!=null&&(_.push(z),T.set(z,W))}}const C=new gn(_);return new Rv(T,C,h.fieldTransforms)}function MS(i,e,t,s=!1){return ll(t,i.Cc(s?4:3,e))}function ll(i,e){if(Nv(i=Pt(i)))return Pf("Unsupported field value:",e,i),Pv(i,e);if(i instanceof kf)return(function(s,o){if(!kv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=ll(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Pt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return SI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=nt.fromDate(s);return{timestampValue:nc(o.serializer,u)}}if(s instanceof nt){const u=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:nc(o.serializer,u)}}if(s instanceof hr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof An)return{bytesValue:W_(o.serializer,s._byteString)};if(s instanceof mt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ff(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof dr)return(function(h,m){return{mapValue:{fields:{[E_]:{stringValue:T_},[Ju]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return uf(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${pc(s)}`)})(i,e)}function Pv(i,e){const t={};return m_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(i,((s,o)=>{const u=ll(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Nv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof nt||i instanceof hr||i instanceof An||i instanceof mt||i instanceof kf||i instanceof dr)}function Pf(i,e,t){if(!Nv(t)||!f_(t)){const s=pc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function Wd(i,e,t){if((e=Pt(e))instanceof Rc)return e._internalPath;if(typeof e=="string")return Nf(i,e);throw oc("Field path arguments must be of type string or ",i,!1,void 0,t)}const jS=new RegExp("[~\\*/\\[\\]]");function Nf(i,e,t){if(e.search(jS)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Rc(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function oc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new te(B.INVALID_ARGUMENT,m+i+y)}function Dv(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Df("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FS extends Vv{data(){return super.data()}}function Df(i,e){return typeof e=="string"?Nf(i,e):e instanceof Rc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class bv extends Vf{}function bu(i,e,...t){let s=[];e instanceof Vf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof Of)).length,m=u.filter((y=>y instanceof bf)).length;if(h>1||h>0&&m>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class bf extends bv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new bf(e,t,s)}_apply(e){const t=this._parse(e);return Ov(e._query,t),new Ts(e.firestore,e.converter,Od(e._query,t))}_parse(e){const t=kc(e.firestore);return(function(u,h,m,y,_,T,C){let x;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){wy(C,T);const Y=[];for(const J of C)Y.push(vy(y,u,J));x={arrayValue:{values:Y}}}else x=vy(y,u,C)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||wy(C,T),x=MS(m,h,C,T==="in"||T==="not-in");return wt.create(_,T,x)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Of extends Vf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Of(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)Ov(h,y),h=Od(h,y)})(e._query,t),new Ts(e.firestore,e.converter,Od(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lf extends bv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Lf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new te(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(u,h)})(e._query,this._field,this._direction);return new Ts(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new Lo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Ou(i,e="asc"){const t=e,s=Df("orderBy",i);return Lf._create(s,t)}function vy(i,e,t){if(typeof(t=Pt(t))=="string"){if(t==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!P_(e)&&t.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Je.fromString(t));if(!de.isDocumentKey(s))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Lg(i,new de(s))}if(t instanceof mt)return Lg(i,t._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(t)}.`)}function wy(i,e){if(!Array.isArray(i)||i.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ov(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class zS{convertValue(e,t="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Li(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Ju].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>pt(h.doubleValue)));return new dr(t)}convertGeoPoint(e){return new hr(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=yc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new nt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);He(J_(s),9688,{name:e});const o=new Ka(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Fr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends Vv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Df("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:Et("string",ps._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class $u extends ps{data(e={}){return super.data(e)}}class vo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ja(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new $u(this._firestore,this._userDataWriter,s.key,s,new ja(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new $u(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ja(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new $u(o._firestore,o._userDataWriter,m.doc.key,m.doc,new ja(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:BS(m.type),doc:y,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function BS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(i){i=Un(i,mt);const e=Un(i.firestore,Is);return RS(Rf(e),i._key).then((t=>WS(e,i,t)))}vo._jsonSchemaVersion="firestore/querySnapshot/1.0",vo._jsonSchema={type:Et("string",vo._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};class Mv extends zS{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function Lu(i){i=Un(i,Ts);const e=Un(i.firestore,Is),t=Rf(e),s=new Mv(e);return US(i._query),kS(t,i._query).then((o=>new vo(e,s,i,o)))}function Ey(i,e,t){i=Un(i,mt);const s=Un(i.firestore,Is),o=Lv(i.converter,e);return Pc(s,[xv(kc(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Cn.none())])}function qS(i,e,t,...s){i=Un(i,mt);const o=Un(i.firestore,Is),u=kc(o);let h;return h=typeof(e=Pt(e))=="string"||e instanceof Rc?LS(u,"updateDoc",i._key,e,t,s):OS(u,"updateDoc",i._key,e),Pc(o,[h.toMutation(i._key,Cn.exists(!0))])}function HS(i){return Pc(Un(i.firestore,Is),[new cf(i._key,Cn.none())])}function co(i,e){const t=Un(i.firestore,Is),s=go(i),o=Lv(i.converter,e);return Pc(t,[xv(kc(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Cn.exists(!1))]).then((()=>s))}function Pc(i,e){return(function(s,o){const u=new Mr;return s.asyncQueue.enqueueAndForget((async()=>mS(await CS(s),o,u))),u.promise})(Rf(i),e)}function WS(i,e,t){const s=t.docs.get(e._key),o=new Mv(i);return new ps(i,o,e._key,s,new ja(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Vo=o})(Do),Io(new gs("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Is(new LT(s.getProvider("auth-internal")),new FT(h,s.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ka(_.options.projectId,T)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Ci(Ig,Sg,e),Ci(Ig,Sg,"esm2020")})();function jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GS=jv,Fv=new tl("auth","Firebase",jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Xd("@firebase/auth");function KS(i,...e){ac.logLevel<=Oe.WARN&&ac.warn(`Auth (${Do}): ${i}`,...e)}function qu(i,...e){ac.logLevel<=Oe.ERROR&&ac.error(`Auth (${Do}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(i,...e){throw Mf(i,...e)}function fr(i,...e){return Mf(i,...e)}function Uv(i,e,t){const s={...GS(),[e]:t};return new tl("auth","Firebase",s).create(e,{appName:i.name})}function xi(i){return Uv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Fv.create(i,...e)}function ye(i,e,...t){if(!i)throw Mf(e,...t)}function Or(i){const e="INTERNAL ASSERTION FAILED: "+i;throw qu(e),new Error(e)}function zr(i,e){i||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function QS(){return Ty()==="http:"||Ty()==="https:"}function Ty(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QS()||hE()||"connection"in navigator)?navigator.onLine:!0}function XS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=lE()||dE()}get(){return YS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(i,e){zr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eA=new ul(3e4,6e4);function Ss(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ji(i,e,t,s,o={}){return Bv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=nl({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return cE()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&No(i.emulatorConfig.host)&&(_.credentials="include"),zv.fetch()(await $v(i,i.config.apiHost,t,m),_)})}async function Bv(i,e,t){i._canInitEmulator=!1;const s={...JS,...e};try{const o=new nA(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Mu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Mu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Mu(i,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Uv(i,T,_);Bn(i,T)}}catch(o){if(o instanceof Br)throw o;Bn(i,"network-request-failed",{message:String(o)})}}async function Nc(i,e,t,s,o={}){const u=await ji(i,e,t,s,o);return"mfaPendingCredential"in u&&Bn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function $v(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?jf(i.config,o):`${i.config.apiScheme}://${o}`;return ZS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function tA(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(fr(this.auth,"network-request-failed")),eA.get())})}}function Mu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=fr(i,e,s);return o.customData._tokenResponse=t,o}function Iy(i){return i!==void 0&&i.enterprise!==void 0}class rA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iA(i,e){return ji(i,"GET","/v2/recaptchaConfig",Ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(i,e){return ji(i,"POST","/v1/accounts:delete",e)}async function lc(i,e){return ji(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oA(i,e=!1){const t=Pt(i),s=await t.getIdToken(e),o=Ff(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:qa(Ed(o.auth_time)),issuedAtTime:qa(Ed(o.iat)),expirationTime:qa(Ed(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ed(i){return Number(i)*1e3}function Ff(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wy(t);return o?JSON.parse(o):(qu("Failed to decode base64 JWT payload"),null)}catch(o){return qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Sy(i){const e=Ff(i);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Br&&aA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function aA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uc(i){var C;const e=i.auth,t=await i.getIdToken(),s=await Za(i,lc(e,{idToken:t}));ye(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(C=o.providerUserInfo)!=null&&C.length?qv(o.providerUserInfo):[],h=cA(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,T)}async function uA(i){const e=Pt(i);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function qv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(i,e){const t=await Bv(i,{},async()=>{const s=nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await $v(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&No(i.emulatorConfig.host)&&(y.credentials="include"),zv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dA(i,e){return ji(i,"POST","/v2/accounts:revokeToken",Ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Sy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await hA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new wo;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(i,e){ye(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Fn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new lA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Kd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Za(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oA(this,e)}reload(){return uA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(xi(this.auth));const e=await this.getIdToken();return await Za(this,sA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:C,emailVerified:x,isAnonymous:z,providerData:Y,stsTokenManager:J}=t;ye(C&&J,e,"internal-error");const W=wo.fromJSON(this.name,J);ye(typeof C=="string",e,"internal-error"),_i(s,e.name),_i(o,e.name),ye(typeof x=="boolean",e,"internal-error"),ye(typeof z=="boolean",e,"internal-error"),_i(u,e.name),_i(h,e.name),_i(m,e.name),_i(y,e.name),_i(_,e.name),_i(T,e.name);const we=new Fn({uid:C,auth:e,email:o,emailVerified:x,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:W,createdAt:_,lastLoginAt:T});return Y&&Array.isArray(Y)&&(we.providerData=Y.map(ae=>({...ae}))),y&&(we._redirectEventId=y),we}static async _fromIdTokenResponse(e,t,s=!1){const o=new wo;o.updateFromServerResponse(t);const u=new Fn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await uc(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?qv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new wo;m.updateFromIdToken(s);const y=new Fn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;function Lr(i){zr(i instanceof Function,"Expected a class definition");let e=Ay.get(i);return e?(zr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ay.set(i,e),e)}/**
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
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hv.type="NONE";const Cy=Hv;/**
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
 */function Hu(i,e,t){return`firebase:${i}:${e}:${t}`}class Eo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Hu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Hu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lc(this.auth,{idToken:e}).catch(()=>{});return t?Fn._fromGetAccountInfoResponse(this.auth,t,e):null}return Fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Eo(Lr(Cy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Lr(Cy);const h=Hu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const T=await _._get(h);if(T){let C;if(typeof T=="string"){const x=await lc(e,{idToken:T}).catch(()=>{});if(!x)break;C=await Fn._fromGetAccountInfoResponse(e,x,T)}else C=Fn._fromJSON(e,T);_!==u&&(m=C),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Eo(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new Eo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xv(e))return"Blackberry";if(Jv(e))return"Webos";if(Gv(e))return"Safari";if((e.includes("chrome/")||Kv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wv(i=Gt()){return/firefox\//i.test(i)}function Gv(i=Gt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kv(i=Gt()){return/crios\//i.test(i)}function Qv(i=Gt()){return/iemobile/i.test(i)}function Yv(i=Gt()){return/android/i.test(i)}function Xv(i=Gt()){return/blackberry/i.test(i)}function Jv(i=Gt()){return/webos/i.test(i)}function Uf(i=Gt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function fA(i=Gt()){var e;return Uf(i)&&!!((e=window.navigator)!=null&&e.standalone)}function pA(){return fE()&&document.documentMode===10}function Zv(i=Gt()){return Uf(i)||Yv(i)||Jv(i)||Xv(i)||/windows phone/i.test(i)||Qv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(i,e=[]){let t;switch(i){case"Browser":t=Ry(Gt());break;case"Worker":t=`${Ry(Gt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Do}/${s}`}/**
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
 */class mA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function gA(i,e={}){return ji(i,"GET","/v2/passwordPolicy",Ss(i,e))}/**
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
 */const yA=6;class _A{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??yA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ky(this),this.idTokenSubscription=new ky(this),this.beforeStateQueue=new mA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Eo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lc(this,{idToken:e}),s=await Fn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(xi(this));const t=e?Pt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gA(this),t=new _A(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await dA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await Eo.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&KS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function jo(i){return Pt(i)}class ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=EE(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wA(i){Dc=i}function t0(i){return Dc.loadJS(i)}function EA(){return Dc.recaptchaEnterpriseScript}function TA(){return Dc.gapiScript}function IA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class SA{constructor(){this.enterprise=new AA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class AA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CA="recaptcha-enterprise",n0="NO_RECAPTCHA";class RA{constructor(e){this.type=CA,this.auth=jo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{iA(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new rA(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;Iy(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(n0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new SA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Iy(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=EA();y.length!==0&&(y+=m),t0(y).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function xy(i,e,t,s=!1,o=!1){const u=new RA(i);let h;if(o)h=n0;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Py(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await xy(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await xy(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(i,e){const t=Zd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ms(u,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function xA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Lr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function PA(i,e,t){const s=jo(i);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=r0(e),{host:h,port:m}=NA(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(ms(_,s.config.emulator)&&ms(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,No(h)?(Yy(`${u}//${h}${y}`),Xy("Auth",!0)):DA()}function r0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function NA(i){const e=r0(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Ny(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Ny(h)}}}function Ny(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function DA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function VA(i,e){return ji(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(i,e){return Nc(i,"POST","/v1/accounts:signInWithPassword",Ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(i,e){return Nc(i,"POST","/v1/accounts:signInWithEmailLink",Ss(i,e))}async function LA(i,e){return Nc(i,"POST","/v1/accounts:signInWithEmailLink",Ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends zf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new el(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new el(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Py(e,t,"signInWithPassword",bA);case"emailLink":return OA(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Py(e,s,"signUpPassword",VA);case"emailLink":return LA(e,{idToken:t,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(i,e){return Nc(i,"POST","/v1/accounts:signInWithIdp",Ss(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="http://localhost";class vs extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new vs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return To(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,To(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,To(e,t)}buildRequest(){const e={requestUri:MA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FA(i){const e=Va(ba(i)).link,t=e?Va(ba(e)).deep_link_id:null,s=Va(ba(i)).deep_link_id;return(s?Va(ba(s)).link:null)||s||t||e||i}class Bf{constructor(e){const t=Va(ba(e)),s=t.apiKey??null,o=t.oobCode??null,u=jA(t.mode??null);ye(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=FA(e);try{return new Bf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return el._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Bf.parseLink(t);return ye(s,"argument-error"),el._fromEmailAndCode(e,s.code,s.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cl extends i0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends cl{constructor(){super("facebook.com")}static credential(e){return vs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.FACEBOOK_SIGN_IN_METHOD="facebook.com";vi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vs._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return wi.credential(t,s)}catch{return null}}}wi.GOOGLE_SIGN_IN_METHOD="google.com";wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends cl{constructor(){super("github.com")}static credential(e){return vs._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com";Ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends cl{constructor(){super("twitter.com")}static credential(e,t){return vs._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ti.credential(t,s)}catch{return null}}}Ti.TWITTER_SIGN_IN_METHOD="twitter.com";Ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Fn._fromIdTokenResponse(e,s,o),h=Dy(s);return new Po({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Dy(s);return new Po({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Dy(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Br{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new cc(e,t,s,o)}}function s0(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(i,u,e,s):u})}async function UA(i,e,t=!1){const s=await Za(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Po._forOperation(i,"link",s)}/**
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
 */async function zA(i,e,t=!1){const{auth:s}=i;if(jn(s.app))return Promise.reject(xi(s));const o="reauthenticate";try{const u=await Za(i,s0(s,o,e,i),t);ye(u.idToken,s,"internal-error");const h=Ff(u.idToken);ye(h,s,"internal-error");const{sub:m}=h;return ye(i.uid===m,s,"user-mismatch"),Po._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Bn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(i,e,t=!1){if(jn(i.app))return Promise.reject(xi(i));const s="signIn",o=await s0(i,s,e),u=await Po._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function BA(i,e){return o0(jo(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(i){const e=jo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function qA(i,e,t){return jn(i.app)?Promise.reject(xi(i)):BA(Pt(i),Fo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$A(i),s})}function HA(i,e,t,s){return Pt(i).onIdTokenChanged(e,t,s)}function WA(i,e,t){return Pt(i).beforeAuthStateChanged(e,t)}function GA(i,e,t,s){return Pt(i).onAuthStateChanged(e,t,s)}function KA(i){return Pt(i).signOut()}const hc="__sak";/**
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
 */class a0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=1e3,YA=10;class l0 extends a0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);pA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,YA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},QA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}l0.type="LOCAL";const XA=l0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0 extends a0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}u0.type="SESSION";const c0=u0;/**
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
 */function JA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Vc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),y=await JA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class ZA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=$f("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const x=C;if(x.data.eventId===_)switch(x.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return window}function eC(i){pr().location.href=i}/**
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
 */function h0(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function tC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function rC(){return h0()?self:null}/**
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
 */const d0="firebaseLocalStorageDb",iC=1,dc="firebaseLocalStorage",f0="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bc(i,e){return i.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function sC(){const i=indexedDB.deleteDatabase(d0);return new hl(i).toPromise()}function Qd(){const i=indexedDB.open(d0,iC);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(dc,{keyPath:f0})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(dc)?e(s):(s.close(),await sC(),e(await Qd()))})})}async function Vy(i,e,t){const s=bc(i,!0).put({[f0]:e,value:t});return new hl(s).toPromise()}async function oC(i,e){const t=bc(i,!1).get(e),s=await new hl(t).toPromise();return s===void 0?null:s.value}function by(i,e){const t=bc(i,!0).delete(e);return new hl(t).toPromise()}const aC=800,lC=3;class p0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>lC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new ZA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Vy(e,hc,"1"),await by(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>oC(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>by(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=bc(o,!1).getAll();return new hl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p0.type="LOCAL";const uC=p0;new ul(3e4,6e4);/**
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
 */function cC(i,e){return e?Lr(e):(ye(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class qf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,t){return To(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hC(i){return o0(i.auth,new qf(i),i.bypassAuthState)}function dC(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),zA(t,new qf(i),i.bypassAuthState)}async function fC(i){const{auth:e,user:t}=i;return ye(t,e,"internal-error"),UA(t,new qf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hC;case"linkViaPopup":case"linkViaRedirect":return fC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:Bn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new ul(2e3,1e4);class yo extends m0{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,yo.currentPopupAction&&yo.currentPopupAction.cancel(),yo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}yo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="pendingRedirect",Wu=new Map;class gC extends m0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wu.get(this.auth._key());if(!e){try{const s=await yC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wu.set(this.auth._key(),e)}return this.bypassAuthState||Wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yC(i,e){const t=wC(e),s=vC(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function _C(i,e){Wu.set(i._key(),e)}function vC(i){return Lr(i._redirectPersistence)}function wC(i){return Hu(mC,i.config.apiKey,i.name)}async function EC(i,e,t=!1){if(jn(i.app))return Promise.reject(xi(i));const s=jo(i),o=cC(s,e),h=await new gC(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=600*1e3;class IC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!g0(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(fr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oy(e))}saveEventToCache(e){this.cachedEventUids.add(Oy(e)),this.lastProcessedEventTime=Date.now()}}function Oy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function g0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SC(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(i,e={}){return ji(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RC=/^https?/;async function kC(i){if(i.config.emulator)return;const{authorizedDomains:e}=await AC(i);for(const t of e)try{if(xC(t))return}catch{}Bn(i,"unauthorized-domain")}function xC(i){const e=Gd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!RC.test(t))return!1;if(CC.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const PC=new ul(3e4,6e4);function Ly(){const i=pr().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function NC(i){return new Promise((e,t)=>{var o,u,h;function s(){Ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ly(),t(fr(i,"network-request-failed"))},timeout:PC.get()})}if((u=(o=pr().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=pr().gapi)!=null&&h.load)s();else{const m=IA("iframefcb");return pr()[m]=()=>{gapi.load?s():t(fr(i,"network-request-failed"))},t0(`${TA()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function DC(i){return Gu=Gu||NC(i),Gu}/**
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
 */const VC=new ul(5e3,15e3),bC="__/auth/iframe",OC="emulator/auth/iframe",LC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jC(i){const e=i.config;ye(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?jf(e,OC):`https://${i.config.authDomain}/${bC}`,s={apiKey:e.apiKey,appName:i.name,v:Do},o=MC.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${nl(s).slice(1)}`}async function FC(i){const e=await DC(i),t=pr().gapi;return ye(t,i,"internal-error"),e.open({where:document.body,url:jC(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=fr(i,"network-request-failed"),m=pr().setTimeout(()=>{u(h)},VC.get());function y(){pr().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zC=500,BC=600,$C="_blank",qC="http://localhost";class My{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HC(i,e,t,s=zC,o=BC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...UC,width:s.toString(),height:o.toString(),top:u,left:h},_=Gt().toLowerCase();t&&(m=Kv(_)?$C:t),Wv(_)&&(e=e||qC,y.scrollbars="yes");const T=Object.entries(y).reduce((x,[z,Y])=>`${x}${z}=${Y},`,"");if(fA(_)&&m!=="_self")return WC(e||"",m),new My(null);const C=window.open(e||"",m,T);ye(C,i,"popup-blocked");try{C.focus()}catch{}return new My(C)}function WC(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const GC="__/auth/handler",KC="emulator/auth/handler",QC=encodeURIComponent("fac");async function jy(i,e,t,s,o,u){ye(i.config.authDomain,i,"auth-domain-config-required"),ye(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Do,eventId:o};if(e instanceof i0){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",wE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,C]of Object.entries({}))h[T]=C}if(e instanceof cl){const T=e.getScopes().filter(C=>C!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),_=y?`#${QC}=${encodeURIComponent(y)}`:"";return`${YC(i)}?${nl(m).slice(1)}${_}`}function YC({config:i}){return i.emulator?jf(i,KC):`https://${i.authDomain}/${GC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="webStorageSupport";class XC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c0,this._completeRedirectFn=EC,this._overrideRedirectResult=_C}async _openPopup(e,t,s,o){var h;zr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await jy(e,t,s,Gd(),o);return HC(e,u,$f())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await jy(e,t,s,Gd(),o);return eC(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(zr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await FC(e),s=new IC(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Td,{type:Td},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[Td];u!==void 0&&t(!!u),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zv()||Gv()||Uf()}}const JC=XC;var Fy="@firebase/auth",Uy="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tR(i){Io(new gs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e0(i)},_=new vA(s,o,u,y);return xA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Io(new gs("auth-internal",e=>{const t=jo(e.getProvider("auth").getImmediate());return(s=>new ZC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ci(Fy,Uy,eR(i)),Ci(Fy,Uy,"esm2020")}/**
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
 */const nR=300,rR=Qy("authIdTokenMaxAge")||nR;let zy=null;const iR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>rR)return;const o=t==null?void 0:t.token;zy!==o&&(zy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sR(i=t_()){const e=Zd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=kA(i,{popupRedirectResolver:JC,persistence:[uC,XA,c0]}),s=Qy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=iR(u.toString());WA(t,h,()=>h(t.currentUser)),HA(t,m=>h(m))}}const o=Gy("auth");return o&&PA(t,`http://${o}`),t}function oR(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}wA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=fr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",oR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tR("Browser");const aR={apiKey:"AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",authDomain:"my-portfolio-db-8e7ac.firebaseapp.com",projectId:"my-portfolio-db-8e7ac",storageBucket:"my-portfolio-db-8e7ac.firebasestorage.app",messagingSenderId:"640921515154",appId:"1:640921515154:web:528be384c173cf632e224b"},y0=e_(aR),Yt=PS(y0),Id=sR(y0),lR=()=>{const[i,e]=Ye.useState("home"),[t,s]=Ye.useState(!1),[o,u]=Ye.useState(!1),[h,m]=Ye.useState([]),[y,_]=Ye.useState([]),[T,C]=Ye.useState([]),[x,z]=Ye.useState([]),[Y,J]=Ye.useState(null),[W,we]=Ye.useState(!0),[ae,Re]=Ye.useState(null),[Pe,qe]=Ye.useState(!1),[Ne,P]=Ye.useState(""),[S,R]=Ye.useState(""),[V,N]=Ye.useState(""),[b,A]=Ye.useState(null),[Ue,lt]=Ye.useState(null),[ce,ge]=Ye.useState({}),[Z,he]=Ye.useState(!1),ne=Ye.useRef(null),O=async()=>{we(!0);try{const $=await $S(go(Yt,"profile","main"));$.exists()&&J($.data());const me=bu(ar(Yt,"projects"),Ou("createdAt","desc")),Ke=await Lu(me);m(Ke.docs.map(Nt=>({id:Nt.id,...Nt.data()})));const Ee=bu(ar(Yt,"experiences"),Ou("order","asc")),gr=await Lu(Ee);_(gr.docs.map(Nt=>({id:Nt.id,...Nt.data()})));const Fi=bu(ar(Yt,"educations"),Ou("order","asc")),ut=await Lu(Fi);C(ut.docs.map(Nt=>({id:Nt.id,...Nt.data()})));const it=bu(ar(Yt,"skills"),Ou("order","asc")),on=await Lu(it);z(on.docs.map(Nt=>({id:Nt.id,...Nt.data()})))}catch($){console.error("Error fetching data: ",$)}finally{we(!1)}};Ye.useEffect(()=>{O();const $=()=>he(window.innerWidth<768);$(),window.addEventListener("resize",$);const me=()=>u(window.scrollY>50);window.addEventListener("scroll",me);const Ke=GA(Id,Ee=>{Re(Ee)});return()=>{window.removeEventListener("scroll",me),window.removeEventListener("resize",$),Ke()}},[]),Ye.useEffect(()=>{(Ue||b)&&ne.current&&!Z&&setTimeout(()=>{ne.current.scrollIntoView({behavior:"smooth",block:"center"})},100)},[Ue,b,Z]);const H=async $=>{$.preventDefault();try{await qA(Id,Ne,S),N(""),qe(!0)}catch{N("로그인 실패. 이메일과 비밀번호를 확인해주세요.")}},Ie=async()=>{await KA(Id),qe(!1),De()},Se=async()=>{if(window.confirm(`기존 하드코딩된 데이터를 Firebase로 이동하시겠습니까?
(이미 데이터가 있으면 건너뜁니다)`))try{Y||await Ey(go(Yt,"profile","main"),{summary1:"I work across content strategy, production, and operations. My passion lies in bridging the gap between creative storytelling and analytical rigor.",summary2:"Currently, I am expanding my expertise by pursuing an M.A. in Digital Innovation, specifically studying how AI and data can inform audience behavior analysis and decision-making processes."}),T.length===0&&(await co(ar(Yt,"educations"),{school:"Yonsei University - Graduate School",degree:"M.A. Digital Innovation (Expected 2027)",period:"Seoul, Korea",description:"Focus: Audience Behavior, AI Data-driven decision-making",order:1}),await co(ar(Yt,"educations"),{school:"Yonsei University",degree:"B.A. International Relations & Psychology",period:"2005 - 2013",description:"",order:2})),y.length===0&&await co(ar(Yt,"experiences"),{role:"Podcast & Video Producer",company:"Krafton - Publishing Platform Division (PPD)",period:"2025 - Present",details:["Produced internal podcasts and videos for 200+ staff.","Handled full production cycle (script, host, record, edit)."],order:1}),x.length===0&&(await co(ar(Yt,"skills"),{category:"Strategy & Data",items:["Audience Insights","Content Analytics","Roadmapping"],order:1}),await co(ar(Yt,"skills"),{category:"Production & Tools",items:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"],order:2})),alert("데이터 마이그레이션 완료!"),O()}catch($){console.error("Migration error: ",$),alert("마이그레이션 중 오류 발생")}},xe=($,me=null)=>{$==="profile"?ge(me||{summary1:"",summary2:""}):$==="project"?ge(me||{title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""}):$==="experience"?ge(me||{role:"",company:"",period:"",description:"",details:[]}):$==="education"?ge(me||{school:"",degree:"",period:"",description:""}):$==="skill"&&ge(me||{category:"",items:""})},ke=$=>{lt($),A(null),xe($)},be=($,me)=>{A({type:$,id:(me==null?void 0:me.id)||"main"}),lt(null);let Ke={...me};$==="skill"&&Array.isArray(me.items)&&(Ke.items=me.items.join(", ")),$==="experience"&&Array.isArray(me.details)&&(Ke.detailsStr=me.details.join(`
`)),xe($,Ke)},De=()=>{lt(null),A(null),ge({})},We=async $=>{try{let me={...ce};$==="profile"?(await Ey(go(Yt,"profile","main"),me),alert("프로필 수정 완료!")):(me.createdAt=new Date,me.order||(me.order=Date.now()),$==="skill"&&(me.items=ce.items.split(",").map(Ke=>Ke.trim()).filter(Ke=>Ke)),$==="experience"&&ce.detailsStr&&(me.details=ce.detailsStr.split(`
`).filter(Ke=>Ke.trim()),delete me.detailsStr),b&&b.type===$?(await qS(go(Yt,`${$}s`,b.id),me),alert("수정 완료!")):(await co(ar(Yt,`${$}s`),me),alert("추가 완료!"))),O(),De()}catch(me){console.error("Error saving document: ",me),alert("저장 중 오류가 발생했습니다")}},gt=async($,me)=>{if(window.confirm("정말 삭제하시겠습니까?"))try{await HS(go(Yt,`${$}s`,me)),alert("삭제 완료!"),O()}catch(Ke){console.error("Error deleting document: ",Ke),alert("삭제 중 오류가 발생했습니다")}},Rn=$=>{const me=document.getElementById($);me&&(me.scrollIntoView({behavior:"smooth"}),e($),s(!1))},kn=$=>{const me=b&&b.type===$,Ke=E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{className:"flex items-center justify-between mb-4",children:[E.jsx("h4",{className:"text-xl font-bold text-white",children:$==="profile"?"프로필 수정":me?"수정하기":"새로 추가하기"}),Z&&E.jsx("button",{onClick:De,className:"p-2 text-slate-400 hover:text-white",children:E.jsx(cd,{size:24})})]}),$==="profile"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"첫 번째 문단"}),E.jsx("textarea",{className:"input-field-mobile min-h-[100px]",placeholder:"I work across content strategy...",value:ce.summary1||"",onChange:Ee=>ge({...ce,summary1:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"두 번째 문단"}),E.jsx("textarea",{className:"input-field-mobile min-h-[100px]",placeholder:"Currently, I am expanding my expertise...",value:ce.summary2||"",onChange:Ee=>ge({...ce,summary2:Ee.target.value})})]})]}),$==="project"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"프로젝트 제목"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: 크래프톤 팟캐스트 기획",value:ce.title||"",onChange:Ee=>ge({...ce,title:Ee.target.value})})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"타입"}),E.jsxs("select",{className:"input-field-mobile",value:ce.type||"blog",onChange:Ee=>ge({...ce,type:Ee.target.value}),children:[E.jsx("option",{value:"blog",children:"블로그"}),E.jsx("option",{value:"video",children:"비디오"}),E.jsx("option",{value:"podcast",children:"팟캐스트"})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"링크 텍스트"}),E.jsx("input",{className:"input-field-mobile",placeholder:"View Blog",value:ce.linkText||"",onChange:Ee=>ge({...ce,linkText:Ee.target.value})})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"설명"}),E.jsx("textarea",{className:"input-field-mobile min-h-[100px]",placeholder:"프로젝트 설명을 입력하세요",value:ce.description||"",onChange:Ee=>ge({...ce,description:Ee.target.value})})]}),ce.type==="video"?E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"YouTube 비디오 ID"}),E.jsx("input",{className:"input-field-mobile",placeholder:"dQw4w9WgXcQ",value:ce.videoId||"",onChange:Ee=>ge({...ce,videoId:Ee.target.value})})]}):E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"링크 URL"}),E.jsx("input",{className:"input-field-mobile",placeholder:"https://...",value:ce.link||"",onChange:Ee=>ge({...ce,link:Ee.target.value})})]})]}),$==="experience"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"직책/역할"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: Podcast Producer",value:ce.role||"",onChange:Ee=>ge({...ce,role:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"회사명"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: Krafton",value:ce.company||"",onChange:Ee=>ge({...ce,company:Ee.target.value})})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"기간"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: 2022 - 2024",value:ce.period||"",onChange:Ee=>ge({...ce,period:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"주요 업무 (한 줄에 하나씩)"}),E.jsx("textarea",{className:"input-field-mobile min-h-[150px]",placeholder:`첫 번째 업무
두 번째 업무
세 번째 업무`,value:ce.detailsStr||"",onChange:Ee=>ge({...ce,detailsStr:Ee.target.value})})]})]}),$==="education"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"학교명"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: 연세대학교",value:ce.school||"",onChange:Ee=>ge({...ce,school:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"학위/전공"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: M.A. Digital Innovation",value:ce.degree||"",onChange:Ee=>ge({...ce,degree:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"기간/위치"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: 2024 - 2027 | Seoul",value:ce.period||"",onChange:Ee=>ge({...ce,period:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"설명"}),E.jsx("textarea",{className:"input-field-mobile min-h-[100px]",placeholder:"Focus: AI, Data Analytics",value:ce.description||"",onChange:Ee=>ge({...ce,description:Ee.target.value})})]})]}),$==="skill"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"카테고리"}),E.jsx("input",{className:"input-field-mobile",placeholder:"예: Strategy & Data",value:ce.category||"",onChange:Ee=>ge({...ce,category:Ee.target.value})})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-300 mb-2 font-medium",children:"스킬 (쉼표로 구분)"}),E.jsx("textarea",{className:"input-field-mobile min-h-[100px]",placeholder:"Python, SQL, Excel, Power BI",value:ce.items||"",onChange:Ee=>ge({...ce,items:Ee.target.value})})]})]}),E.jsxs("div",{className:"flex gap-3 mt-6",children:[E.jsxs("button",{onClick:()=>We($),className:"btn-primary-mobile flex-1 flex items-center justify-center gap-2",children:[E.jsx(Gw,{size:20})," 저장하기"]}),!Z&&E.jsxs("button",{onClick:De,className:"btn-secondary-mobile flex items-center justify-center gap-2",children:[E.jsx(Ww,{size:20})," 취소"]})]})]});return Z?E.jsx("div",{className:"fixed inset-0 bg-slate-900 z-[200] overflow-y-auto",children:E.jsx("div",{className:"min-h-screen p-6 pb-24",children:Ke})}):E.jsx("div",{ref:ne,className:"bg-slate-800 p-6 rounded-xl border border-slate-600 mb-6 animate-fade-in-up",children:Ke})};return E.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-indigo-500 selection:text-white relative",children:[E.jsxs("div",{className:"fixed bottom-6 right-6 z-[100] flex flex-col gap-3",children:[ae&&E.jsx("button",{onClick:Se,className:"p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all",title:"데이터 마이그레이션",children:E.jsx(jw,{size:24})}),ae?E.jsxs("div",{className:"flex gap-2 items-center",children:[E.jsx("span",{className:"bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg",children:"관리자"}),E.jsx("button",{onClick:Ie,className:"p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all flex items-center justify-center",title:"로그아웃",children:E.jsx(Bw,{size:24})})]}):E.jsx("button",{onClick:()=>qe(!Pe),className:"p-4 bg-slate-800 rounded-full shadow-lg border border-slate-700 hover:bg-slate-700 transition-all opacity-50 hover:opacity-100 flex items-center justify-center",title:"관리자 로그인",children:E.jsx(zw,{size:24,className:"text-slate-400"})})]}),Pe&&!ae&&E.jsx("div",{className:"fixed inset-0 bg-black/90 z-[101] flex items-center justify-center p-4",children:E.jsxs("div",{className:"bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-700 shadow-2xl",children:[E.jsxs("div",{className:"flex justify-between items-center mb-6",children:[E.jsx("h2",{className:"text-2xl font-bold text-white",children:"관리자 로그인"}),E.jsx("button",{onClick:()=>qe(!1),children:E.jsx(cd,{className:"text-slate-400 hover:text-white",size:24})})]}),E.jsxs("form",{onSubmit:H,className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-400 mb-2",children:"이메일"}),E.jsx("input",{type:"email",value:Ne,onChange:$=>P($.target.value),className:"input-field-mobile",placeholder:"admin@example.com"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm text-slate-400 mb-2",children:"비밀번호"}),E.jsx("input",{type:"password",value:S,onChange:$=>R($.target.value),className:"input-field-mobile",placeholder:"비밀번호"})]}),V&&E.jsx("p",{className:"text-red-400 text-sm",children:V}),E.jsx("button",{type:"submit",className:"w-full bg-indigo-600 text-white py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors text-lg",children:"로그인"})]})]})}),E.jsxs("nav",{className:`fixed w-full z-40 transition-all duration-300 ${o?"bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800":"bg-transparent"}`,children:[E.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex justify-between items-center",children:[E.jsxs("div",{onClick:()=>Rn("home"),className:"text-2xl font-bold text-slate-100 cursor-pointer hover:text-indigo-400 transition-colors",children:["HK",E.jsx("span",{className:"text-indigo-500",children:"."})]}),E.jsx("div",{className:"hidden md:flex space-x-8",children:["About","Experience","Projects","Skills","Contact"].map($=>E.jsx("button",{onClick:()=>Rn($.toLowerCase()),className:"text-sm font-medium hover:text-indigo-400 transition-colors",children:$},$))}),E.jsx("div",{className:"md:hidden",children:E.jsx("button",{onClick:()=>s(!t),className:"text-slate-100 focus:outline-none p-2",children:t?E.jsx(cd,{size:28}):E.jsx($w,{size:28})})})]}),t&&E.jsx("div",{className:"md:hidden bg-slate-800 border-b border-slate-700",children:E.jsx("div",{className:"px-6 py-4 flex flex-col space-y-4",children:["About","Experience","Projects","Skills","Contact"].map($=>E.jsx("button",{onClick:()=>Rn($.toLowerCase()),className:"text-left text-base font-medium hover:text-indigo-400 transition-colors py-2",children:$},$))})})]}),E.jsxs("section",{id:"home",className:"min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden",children:[E.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"}),E.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"}),E.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[E.jsx("h2",{className:"text-indigo-400 font-medium tracking-wider mb-4 animate-fade-in-up",children:"CONTENT STRATEGIST & PRODUCER"}),E.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight animate-fade-in-up delay-100",children:"Hyeongmo Kim"}),E.jsxs("p",{className:"text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200",children:["Connecting creative work with data and tight execution.",E.jsx("br",{}),"Focusing on audience behavior, AI, and data-driven decision-making."]}),E.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300",children:[E.jsxs("button",{onClick:()=>Rn("contact"),className:"px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg",children:[E.jsx(cg,{size:20})," Get in Touch"]}),E.jsxs("a",{href:"https://www.linkedin.com/in/hmstory0111",target:"_blank",rel:"noreferrer",className:"px-8 py-4 bg-slate-800 text-slate-200 rounded-full font-medium hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center gap-2 border border-slate-700 text-lg",children:[E.jsx(Uw,{size:20})," LinkedIn"]})]})]})]}),E.jsx("section",{id:"about",className:"py-20 px-6 bg-slate-800/50",children:E.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start",children:[E.jsxs("div",{className:"relative",children:[E.jsxs("div",{className:"flex items-center justify-between mb-6",children:[E.jsxs("h2",{className:"text-3xl font-bold text-slate-100 flex items-center gap-3",children:[E.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Professional Summary"]}),ae&&E.jsx("button",{onClick:()=>be("profile",Y||{summary1:"",summary2:""}),className:"p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-all",children:E.jsx(Da,{size:18})})]}),(b==null?void 0:b.type)==="profile"&&kn("profile"),Y?E.jsxs(E.Fragment,{children:[E.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:Y.summary1}),E.jsx("p",{className:"text-lg text-slate-400 leading-relaxed",children:Y.summary2})]}):E.jsxs(E.Fragment,{children:[E.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:"I work across content strategy, production, and operations. My passion lies in bridging the gap between creative storytelling and analytical rigor."}),E.jsxs("p",{className:"text-lg text-slate-400 leading-relaxed",children:["Currently, I am expanding my expertise by pursuing an ",E.jsx("strong",{className:"text-slate-200",children:"M.A. in Digital Innovation"}),", specifically studying how AI and data can inform audience behavior analysis and decision-making processes."]})]})]}),E.jsxs("div",{className:"bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl relative",children:[E.jsxs("div",{className:"flex items-center justify-between mb-6",children:[E.jsxs("div",{className:"flex items-center gap-3 text-indigo-400",children:[E.jsx(lg,{size:24}),E.jsx("h3",{className:"text-xl font-bold",children:"Education"})]}),ae&&E.jsx("button",{onClick:()=>ke("education"),className:"p-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-all",children:E.jsx(Ru,{size:20})})]}),(Ue==="education"||(b==null?void 0:b.type)==="education")&&kn("education"),E.jsx("div",{className:"space-y-8",children:T.length>0?T.map($=>E.jsxs("div",{className:"relative pl-6 border-l-2 border-slate-700 group",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"}),E.jsxs("div",{className:"flex justify-between items-start",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h4",{className:"text-lg font-bold text-slate-100",children:$.school}),E.jsxs("p",{className:"text-indigo-400 text-sm mb-2",children:[$.degree," | ",$.period]}),E.jsx("p",{className:"text-slate-400 text-sm",children:$.description})]}),ae&&E.jsxs("div",{className:"flex gap-2 ml-4",children:[E.jsx("button",{onClick:()=>be("education",$),className:"p-2 bg-indigo-600/90 rounded-full hover:bg-indigo-600",children:E.jsx(Da,{size:14,className:"text-white"})}),E.jsx("button",{onClick:()=>gt("education",$.id),className:"p-2 bg-red-600/90 rounded-full hover:bg-red-600",children:E.jsx(ku,{size:14,className:"text-white"})})]})]})]},$.id)):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"relative pl-6 border-l-2 border-indigo-900",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"}),E.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University - Graduate School"}),E.jsx("p",{className:"text-indigo-400 text-sm mb-2",children:"M.A. Digital Innovation (Expected 2027) | Seoul, Korea"}),E.jsx("p",{className:"text-slate-400 text-sm",children:"Focus: Audience Behavior, AI Data-driven decision-making"})]}),E.jsxs("div",{className:"relative pl-6 border-l-2 border-slate-700",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-600"}),E.jsx("h4",{className:"text-lg font-bold text-slate-100",children:"Yonsei University"}),E.jsx("p",{className:"text-slate-400 text-sm mb-1",children:"B.A. International Relations & Psychology | 2005 - 2013"})]}),ae&&E.jsx("div",{className:"text-center mt-4 text-sm text-slate-500",children:"* 관리자: 녹색 버튼으로 데이터 마이그레이션 하세요"})]})})]})]})}),E.jsx("section",{id:"experience",className:"py-20 px-6",children:E.jsxs("div",{className:"max-w-4xl mx-auto",children:[E.jsxs("div",{className:"flex items-center justify-center gap-4 mb-12 relative",children:[E.jsx("h2",{className:"text-3xl font-bold text-slate-100 text-center",children:"Professional Experience"}),ae&&E.jsx("button",{onClick:()=>ke("experience"),className:"absolute right-0 p-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-all shadow-lg",children:E.jsx(Ru,{size:24})})]}),(Ue==="experience"||(b==null?void 0:b.type)==="experience")&&kn("experience"),E.jsx("div",{className:"space-y-12",children:y.length>0?y.map($=>E.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"text-xl font-bold text-slate-100",children:$.role}),E.jsx("p",{className:"text-slate-400",children:$.company})]}),E.jsxs("div",{className:"flex items-center gap-3 mt-2 md:mt-0",children:[E.jsx("span",{className:"px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30",children:$.period}),ae&&E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{onClick:()=>be("experience",$),className:"p-2 bg-indigo-600/90 rounded-full text-white hover:bg-indigo-600",children:E.jsx(Da,{size:16})}),E.jsx("button",{onClick:()=>gt("experience",$.id),className:"p-2 bg-red-600/90 rounded-full text-white hover:bg-red-600",children:E.jsx(ku,{size:16})})]})]})]}),E.jsx("ul",{className:"space-y-3 text-slate-400",children:$.details&&$.details.map((me,Ke)=>E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx(ud,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),E.jsx("span",{children:me})]},Ke))})]},$.id)):E.jsxs("div",{className:"group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all",children:[E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start mb-4",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-xl font-bold text-slate-100",children:"Podcast & Video Producer"}),E.jsx("p",{className:"text-slate-400",children:"Krafton - Publishing Platform Division (PPD)"})]}),E.jsx("span",{className:"px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30",children:"2025 - Present"})]}),E.jsxs("ul",{className:"space-y-3 text-slate-400",children:[E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx(ud,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),E.jsx("span",{children:"Produced internal podcasts and videos for 200+ staff."})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx(ud,{size:16,className:"mt-1 text-indigo-500 flex-shrink-0"}),E.jsx("span",{children:"Handled full production cycle (script, host, record, edit)."})]})]}),ae&&E.jsx("div",{className:"text-center mt-4 text-sm text-slate-500",children:"* 관리자: 녹색 버튼으로 데이터 마이그레이션 하세요"})]})})]})}),E.jsx("section",{id:"projects",className:"py-20 px-6 bg-slate-800/30",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"flex items-center gap-3 mb-12 relative",children:[E.jsxs("h2",{className:"text-3xl font-bold text-slate-100 flex items-center gap-3",children:[E.jsx("span",{className:"w-12 h-1 bg-indigo-500 rounded-full"}),"Selected Works"]}),ae&&E.jsx("button",{onClick:()=>ke("project"),className:"p-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 ml-4 transition-all shadow-lg",children:E.jsx(Ru,{size:24})})]}),(Ue==="project"||(b==null?void 0:b.type)==="project")&&kn("project"),E.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map($=>E.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all group relative",children:[ae&&E.jsxs("div",{className:"absolute top-3 right-3 z-20 flex gap-2",children:[E.jsx("button",{onClick:()=>be("project",$),className:"p-3 bg-indigo-600/90 rounded-full text-white hover:bg-indigo-600 shadow-lg",children:E.jsx(Da,{size:18})}),E.jsx("button",{onClick:()=>gt("project",$.id),className:"p-3 bg-red-600/90 rounded-full text-white hover:bg-red-600 shadow-lg",children:E.jsx(ku,{size:18})})]}),E.jsx("div",{className:"h-48 bg-slate-800 flex items-center justify-center border-b border-slate-700 relative overflow-hidden",children:$.type==="video"&&$.videoId?E.jsx("img",{src:`https://img.youtube.com/vi/${$.videoId}/hqdefault.jpg`,alt:$.title,className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"}):E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900"}),$.type==="podcast"?E.jsx(qw,{size:48,className:"text-slate-600 group-hover:text-purple-400 z-10"}):E.jsx(lg,{size:48,className:"text-slate-600 group-hover:text-indigo-400 z-10"})]})}),E.jsxs("div",{className:"p-8",children:[E.jsx("h3",{className:"text-xl font-bold text-slate-100 mb-2",children:$.title}),E.jsx("p",{className:"text-slate-400 mb-6 text-sm line-clamp-3",children:$.description}),E.jsxs("a",{href:$.type==="video"?`https://youtu.be/${$.videoId}`:$.link,target:"_blank",rel:"noreferrer",className:`font-medium flex items-center gap-2 transition-colors ${$.type==="video"?"text-red-400 hover:text-red-300":$.type==="podcast"?"text-purple-400 hover:text-purple-300":"text-indigo-400 hover:text-indigo-300"}`,children:[$.linkText||"View Detail",$.type==="video"?E.jsx(Hw,{size:16}):E.jsx(Fw,{size:16})]})]})]},$.id))})]})}),E.jsx("section",{id:"skills",className:"py-20 px-6",children:E.jsxs("div",{className:"max-w-4xl mx-auto",children:[E.jsxs("div",{className:"flex items-center justify-center gap-4 mb-12 relative",children:[E.jsx("h2",{className:"text-3xl font-bold text-slate-100 text-center",children:"Skills & Expertise"}),ae&&E.jsx("button",{onClick:()=>ke("skill"),className:"absolute right-0 p-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-all shadow-lg",children:E.jsx(Ru,{size:24})})]}),(Ue==="skill"||(b==null?void 0:b.type)==="skill")&&kn("skill"),E.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:x.length>0?x.map($=>E.jsxs("div",{className:"relative group",children:[E.jsxs("div",{className:"flex items-center justify-between mb-6",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx(ug,{className:"text-indigo-500"}),E.jsx("h3",{className:"text-xl font-bold text-slate-200",children:$.category})]}),ae&&E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{onClick:()=>be("skill",$),className:"p-2 bg-indigo-600/90 rounded-full text-white hover:bg-indigo-600",children:E.jsx(Da,{size:14})}),E.jsx("button",{onClick:()=>gt("skill",$.id),className:"p-2 bg-red-600/90 rounded-full text-white hover:bg-red-600",children:E.jsx(ku,{size:14})})]})]}),E.jsx("div",{className:"flex flex-wrap gap-3",children:$.items&&$.items.map((me,Ke)=>E.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:me},Ke))})]},$.id)):E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[E.jsx(ug,{className:"text-indigo-500"}),E.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Strategy & Data"})]}),E.jsx("div",{className:"flex flex-wrap gap-3",children:["Audience Insights","Content Analytics","Roadmapping"].map($=>E.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:$},$))})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[E.jsx(Kw,{className:"text-indigo-500"}),E.jsx("h3",{className:"text-xl font-bold text-slate-200",children:"Production & Tools"})]}),E.jsx("div",{className:"flex flex-wrap gap-3",children:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"].map($=>E.jsx("span",{className:"px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700",children:$},$))})]}),ae&&E.jsx("div",{className:"text-center mt-4 text-sm text-slate-500 col-span-2",children:"* 관리자: 녹색 버튼으로 데이터 마이그레이션 하세요"})]})})]})}),E.jsx("section",{id:"contact",className:"py-20 px-6 bg-indigo-900/20",children:E.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[E.jsx("h2",{className:"text-3xl font-bold text-slate-100 mb-6",children:"Let's Connect"}),E.jsx("div",{className:"flex flex-col md:flex-row justify-center gap-6",children:E.jsxs("a",{href:"mailto:hmstory0111@gmail.com",className:"flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-slate-200 rounded-xl hover:bg-slate-700 transition-colors border border-slate-700",children:[E.jsx(cg,{size:20,className:"text-indigo-400"}),"hmstory0111@gmail.com"]})}),E.jsx("div",{className:"mt-20 pt-10 border-t border-slate-800 text-slate-500 text-sm",children:E.jsx("p",{children:"© 2025 Hyeongmo Kim. All rights reserved. (Full Admin Version)"})})]})}),E.jsx("style",{children:`
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; } 
        .delay-200 { animation-delay: 0.2s; } 
        .delay-300 { animation-delay: 0.3s; }
        
        .input-field-mobile { 
          width: 100%; 
          background: #0f172a; 
          border: 2px solid #334155; 
          border-radius: 0.75rem; 
          padding: 1rem; 
          color: white; 
          outline: none; 
          transition: border-color 0.2s;
          font-size: 16px;
        }
        .input-field-mobile:focus { 
          border-color: #6366f1; 
          background: #1e293b;
        }
        
        .btn-primary-mobile { 
          background: #4f46e5; 
          color: white; 
          padding: 1rem 2rem; 
          border-radius: 0.75rem; 
          font-weight: bold; 
          transition: background 0.2s;
          font-size: 1.125rem;
        }
        .btn-primary-mobile:hover { 
          background: #4338ca; 
        }
        
        .btn-secondary-mobile { 
          background: #475569; 
          color: white; 
          padding: 1rem 2rem; 
          border-radius: 0.75rem; 
          font-weight: bold; 
          transition: background 0.2s;
          font-size: 1.125rem;
        }
        .btn-secondary-mobile:hover { 
          background: #334155; 
        }

        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
          }
        }
      `})]})};bw.createRoot(document.getElementById("root")).render(E.jsx(Rw.StrictMode,{children:E.jsx(lR,{})}));
