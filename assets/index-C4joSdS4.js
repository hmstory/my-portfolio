(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Uy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var td={exports:{}},xa={},nd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function gw(){if(Ym)return ke;Ym=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),x=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function W(O,H,ve){this.props=O,this.context=H,this.refs=J,this.updater=ve||B}W.prototype.isReactComponent={},W.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},W.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _e(){}_e.prototype=W.prototype;function me(O,H,ve){this.props=O,this.context=H,this.refs=J,this.updater=ve||B}var Ae=me.prototype=new _e;Ae.constructor=me,Y(Ae,W.prototype),Ae.isPureReactComponent=!0;var Ce=Array.isArray,Be=Object.prototype.hasOwnProperty,Re={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(O,H,ve){var Ee,xe={},z=null,se=null;if(H!=null)for(Ee in H.ref!==void 0&&(se=H.ref),H.key!==void 0&&(z=""+H.key),H)Be.call(H,Ee)&&!P.hasOwnProperty(Ee)&&(xe[Ee]=H[Ee]);var Z=arguments.length-2;if(Z===1)xe.children=ve;else if(1<Z){for(var Ue=Array(Z),Ct=0;Ct<Z;Ct++)Ue[Ct]=arguments[Ct+2];xe.children=Ue}if(O&&O.defaultProps)for(Ee in Z=O.defaultProps,Z)xe[Ee]===void 0&&(xe[Ee]=Z[Ee]);return{$$typeof:i,type:O,key:z,ref:se,props:xe,_owner:Re.current}}function C(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return H[ve]})}var k=/\/+/g;function S(O,H){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):H.toString(36)}function je(O,H,ve,Ee,xe){var z=typeof O;(z==="undefined"||z==="boolean")&&(O=null);var se=!1;if(O===null)se=!0;else switch(z){case"string":case"number":se=!0;break;case"object":switch(O.$$typeof){case i:case e:se=!0}}if(se)return se=O,xe=xe(se),O=Ee===""?"."+S(se,0):Ee,Ce(xe)?(ve="",O!=null&&(ve=O.replace(k,"$&/")+"/"),je(xe,H,ve,"",function(Ct){return Ct})):xe!=null&&(V(xe)&&(xe=C(xe,ve+(!xe.key||se&&se.key===xe.key?"":(""+xe.key).replace(k,"$&/")+"/")+O)),H.push(xe)),1;if(se=0,Ee=Ee===""?".":Ee+":",Ce(O))for(var Z=0;Z<O.length;Z++){z=O[Z];var Ue=Ee+S(z,Z);se+=je(z,H,ve,Ue,xe)}else if(Ue=D(O),typeof Ue=="function")for(O=Ue.call(O),Z=0;!(z=O.next()).done;)z=z.value,Ue=Ee+S(z,Z++),se+=je(z,H,ve,Ue,xe);else if(z==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return se}function lt(O,H,ve){if(O==null)return O;var Ee=[],xe=0;return je(O,Ee,"","",function(z){return H.call(ve,z,xe++)}),Ee}function vt(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var $e={current:null},te={transition:null},he={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:te,ReactCurrentOwner:Re};function ne(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:lt,forEach:function(O,H,ve){lt(O,function(){H.apply(this,arguments)},ve)},count:function(O){var H=0;return lt(O,function(){H++}),H},toArray:function(O){return lt(O,function(H){return H})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ke.Component=W,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=me,ke.StrictMode=s,ke.Suspense=y,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,ke.act=ne,ke.cloneElement=function(O,H,ve){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=Y({},O.props),xe=O.key,z=O.ref,se=O._owner;if(H!=null){if(H.ref!==void 0&&(z=H.ref,se=Re.current),H.key!==void 0&&(xe=""+H.key),O.type&&O.type.defaultProps)var Z=O.type.defaultProps;for(Ue in H)Be.call(H,Ue)&&!P.hasOwnProperty(Ue)&&(Ee[Ue]=H[Ue]===void 0&&Z!==void 0?Z[Ue]:H[Ue])}var Ue=arguments.length-2;if(Ue===1)Ee.children=ve;else if(1<Ue){Z=Array(Ue);for(var Ct=0;Ct<Ue;Ct++)Z[Ct]=arguments[Ct+2];Ee.children=Z}return{$$typeof:i,type:O.type,key:xe,ref:z,props:Ee,_owner:se}},ke.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},ke.createElement=I,ke.createFactory=function(O){var H=I.bind(null,O);return H.type=O,H},ke.createRef=function(){return{current:null}},ke.forwardRef=function(O){return{$$typeof:m,render:O}},ke.isValidElement=V,ke.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:vt}},ke.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},ke.startTransition=function(O){var H=te.transition;te.transition={};try{O()}finally{te.transition=H}},ke.unstable_act=ne,ke.useCallback=function(O,H){return $e.current.useCallback(O,H)},ke.useContext=function(O){return $e.current.useContext(O)},ke.useDebugValue=function(){},ke.useDeferredValue=function(O){return $e.current.useDeferredValue(O)},ke.useEffect=function(O,H){return $e.current.useEffect(O,H)},ke.useId=function(){return $e.current.useId()},ke.useImperativeHandle=function(O,H,ve){return $e.current.useImperativeHandle(O,H,ve)},ke.useInsertionEffect=function(O,H){return $e.current.useInsertionEffect(O,H)},ke.useLayoutEffect=function(O,H){return $e.current.useLayoutEffect(O,H)},ke.useMemo=function(O,H){return $e.current.useMemo(O,H)},ke.useReducer=function(O,H,ve){return $e.current.useReducer(O,H,ve)},ke.useRef=function(O){return $e.current.useRef(O)},ke.useState=function(O){return $e.current.useState(O)},ke.useSyncExternalStore=function(O,H,ve){return $e.current.useSyncExternalStore(O,H,ve)},ke.useTransition=function(){return $e.current.useTransition()},ke.version="18.3.1",ke}var Xm;function Gd(){return Xm||(Xm=1,nd.exports=gw()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function yw(){if(Jm)return xa;Jm=1;var i=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var T,x={},D=null,B=null;_!==void 0&&(D=""+_),y.key!==void 0&&(D=""+y.key),y.ref!==void 0&&(B=y.ref);for(T in y)s.call(y,T)&&!u.hasOwnProperty(T)&&(x[T]=y[T]);if(m&&m.defaultProps)for(T in y=m.defaultProps,y)x[T]===void 0&&(x[T]=y[T]);return{$$typeof:e,type:m,key:D,ref:B,props:x,_owner:o.current}}return xa.Fragment=t,xa.jsx=h,xa.jsxs=h,xa}var Zm;function _w(){return Zm||(Zm=1,td.exports=yw()),td.exports}var E=_w(),rt=Gd();const vw=Uy(rt);var Su={},rd={exports:{}},Xt={},id={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Ew(){return eg||(eg=1,(function(i){function e(te,he){var ne=te.length;te.push(he);e:for(;0<ne;){var O=ne-1>>>1,H=te[O];if(0<o(H,he))te[O]=he,te[ne]=H,ne=O;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var he=te[0],ne=te.pop();if(ne!==he){te[0]=ne;e:for(var O=0,H=te.length,ve=H>>>1;O<ve;){var Ee=2*(O+1)-1,xe=te[Ee],z=Ee+1,se=te[z];if(0>o(xe,ne))z<H&&0>o(se,xe)?(te[O]=se,te[z]=ne,O=z):(te[O]=xe,te[Ee]=ne,O=Ee);else if(z<H&&0>o(se,ne))te[O]=se,te[z]=ne,O=z;else break e}}return he}function o(te,he){var ne=te.sortIndex-he.sortIndex;return ne!==0?ne:te.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],_=[],T=1,x=null,D=3,B=!1,Y=!1,J=!1,W=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ae(te){for(var he=t(_);he!==null;){if(he.callback===null)s(_);else if(he.startTime<=te)s(_),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(_)}}function Ce(te){if(J=!1,Ae(te),!Y)if(t(y)!==null)Y=!0,vt(Be);else{var he=t(_);he!==null&&$e(Ce,he.startTime-te)}}function Be(te,he){Y=!1,J&&(J=!1,_e(I),I=-1),B=!0;var ne=D;try{for(Ae(he),x=t(y);x!==null&&(!(x.expirationTime>he)||te&&!N());){var O=x.callback;if(typeof O=="function"){x.callback=null,D=x.priorityLevel;var H=O(x.expirationTime<=he);he=i.unstable_now(),typeof H=="function"?x.callback=H:x===t(y)&&s(y),Ae(he)}else s(y);x=t(y)}if(x!==null)var ve=!0;else{var Ee=t(_);Ee!==null&&$e(Ce,Ee.startTime-he),ve=!1}return ve}finally{x=null,D=ne,B=!1}}var Re=!1,P=null,I=-1,C=5,V=-1;function N(){return!(i.unstable_now()-V<C)}function k(){if(P!==null){var te=i.unstable_now();V=te;var he=!0;try{he=P(!0,te)}finally{he?S():(Re=!1,P=null)}}else Re=!1}var S;if(typeof me=="function")S=function(){me(k)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,lt=je.port2;je.port1.onmessage=k,S=function(){lt.postMessage(null)}}else S=function(){W(k,0)};function vt(te){P=te,Re||(Re=!0,S())}function $e(te,he){I=W(function(){te(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(te){te.callback=null},i.unstable_continueExecution=function(){Y||B||(Y=!0,vt(Be))},i.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<te?Math.floor(1e3/te):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(te){switch(D){case 1:case 2:case 3:var he=3;break;default:he=D}var ne=D;D=he;try{return te()}finally{D=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(te,he){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ne=D;D=te;try{return he()}finally{D=ne}},i.unstable_scheduleCallback=function(te,he,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,te){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,te={id:T++,callback:he,priorityLevel:te,startTime:ne,expirationTime:H,sortIndex:-1},ne>O?(te.sortIndex=ne,e(_,te),t(y)===null&&te===t(_)&&(J?(_e(I),I=-1):J=!0,$e(Ce,ne-O))):(te.sortIndex=H,e(y,te),Y||B||(Y=!0,vt(Be))),te},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(te){var he=D;return function(){var ne=D;D=he;try{return te.apply(this,arguments)}finally{D=ne}}}})(sd)),sd}var tg;function ww(){return tg||(tg=1,id.exports=Ew()),id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Tw(){if(ng)return Xt;ng=1;var i=Gd(),e=ww();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},x={};function D(n){return y.call(x,n)?!0:y.call(T,n)?!1:_.test(n)?x[n]=!0:(T[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,f,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=v}var W={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){W[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];W[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){W[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){W[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){W[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){W[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){W[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){W[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){W[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function me(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_e,me);W[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_e,me);W[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_e,me);W[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),W.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){W[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ae(n,r,a,c){var d=W.hasOwnProperty(r)?W[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ce=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),Re=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),N=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),te=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ve=!1;function Ee(n,r){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,A=f.length-1;1<=v&&0<=A&&d[v]!==f[A];)A--;for(;1<=v&&0<=A;v--,A--)if(d[v]!==f[A]){if(v!==1||A!==1)do if(v--,A--,0>A||d[v]!==f[A]){var R=`
`+d[v].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=v&&0<=A);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function xe(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function z(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case Re:return"Portal";case C:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case je:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case k:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lt:return r=n.displayName||null,r!==null?r:z(n.type)||"Memo";case vt:r=n._payload,n=n._init;try{return z(n(r))}catch{}}return null}function se(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return z(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Z(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ct(n){var r=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Vr(n){n._valueTracker||(n._valueTracker=Ct(n))}function Ni(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function On(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ul(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Z(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _s(n,r){r=r.checked,r!=null&&Ae(n,"checked",r,!1)}function Di(n,r){_s(n,r);var a=Z(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&ut(n,r.type,Z(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Vo(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ut(n,r,a){(r!=="number"||On(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var it=Array.isArray;function En(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Z(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function bo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Oo(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(it(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Z(a)}}function cl(n,r){var a=Z(r.value),c=Z(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function br(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Lo(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Lo(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Or,hl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Or=Or||document.createElement("div"),Or.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Vi(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Lr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dl=["Webkit","ms","Moz","O"];Object.keys(Lr).forEach(function(n){dl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Lr[r]=Lr[n]})});function Mr(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Lr.hasOwnProperty(n)&&Lr[n]?(""+r).trim():r+"px"}function Es(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Mr(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Mo=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wn(n,r){if(r){if(Mo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ws(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Ts(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lr=null,ur=null,tt=null;function jo(n){if(n=ha(n)){if(typeof lr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Fl(r),lr(n.stateNode,n.type,r))}}function Fr(n){ur?tt?tt.push(n):tt=[n]:ur=n}function Ur(){if(ur){var n=ur,r=tt;if(tt=ur=null,jo(n),r)for(n=0;n<r.length;n++)jo(r[n])}}function fl(n,r){return n(r)}function pl(){}var Ln=!1;function ml(n,r,a){if(Ln)return n(r,a);Ln=!0;try{return fl(n,r,a)}finally{Ln=!1,(ur!==null||tt!==null)&&(pl(),Ur())}}function bi(n,r){var a=n.stateNode;if(a===null)return null;var c=Fl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var zr=!1;if(m)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){zr=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{zr=!1}function gl(n,r,a,c,d,f,v,A,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var cr=!1,Mn=null,Is=!1,hn=null,yl={onError:function(n){cr=!0,Mn=n}};function _l(n,r,a,c,d,f,v,A,R){cr=!1,Mn=null,gl.apply(yl,arguments)}function Fo(n,r,a,c,d,f,v,A,R){if(_l.apply(this,arguments),cr){if(cr){var F=Mn;cr=!1,Mn=null}else throw Error(t(198));Is||(Is=!0,hn=F)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Uo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function vl(n){if(Tn(n)!==n)throw Error(t(188))}function El(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return vl(d),n;if(f===c)return vl(d),r;f=f.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=f;else{for(var v=!1,A=d.child;A;){if(A===a){v=!0,a=d,c=f;break}if(A===c){v=!0,c=d,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,c=d;break}if(A===c){v=!0,c=f,a=d;break}A=A.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function wl(n){return n=El(n),n!==null?Oi(n):null}function Oi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Oi(n);if(r!==null)return r;n=n.sibling}return null}var zo=e.unstable_scheduleCallback,Ss=e.unstable_cancelCallback,Li=e.unstable_shouldYield,hr=e.unstable_requestPaint,Ge=e.unstable_now,Dc=e.unstable_getCurrentPriorityLevel,As=e.unstable_ImmediatePriority,Bo=e.unstable_UserBlockingPriority,Mi=e.unstable_NormalPriority,$o=e.unstable_LowPriority,xs=e.unstable_IdlePriority,ji=null,en=null;function Tl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(ji,n,void 0,(n.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Fi,jn=Math.log,dn=Math.LN2;function Fi(n){return n>>>=0,n===0?32:31-(jn(n)/dn|0)|0}var Fn=64,$r=4194304;function Me(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function dr(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,v=a&268435455;if(v!==0){var A=v&~d;A!==0?c=Me(A):(f&=v,f!==0&&(c=Me(f)))}else v=a&~d,v!==0?c=Me(v):f!==0&&(c=Me(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-tn(r),d=1<<a,c|=n[a],r&=~d;return c}function Ui(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zi(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var v=31-tn(f),A=1<<v,R=d[v];R===-1?((A&a)===0||(A&c)!==0)&&(d[v]=Ui(A,r)):R<=r&&(n.expiredLanes|=A),f&=~A}}function qo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ho(){var n=Fn;return Fn<<=1,(Fn&4194240)===0&&(Fn=64),n}function Wo(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Bi(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-tn(r),n[r]=a}function Vc(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tn(a),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~f}}function Go(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-tn(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ve=0;function Un(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ko,Cs,Qo,Yo,Xo,zn=!1,Rs=[],Bn=null,$n=null,Rt=null,$i=new Map,fr=new Map,nn=[],Il="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qr(n,r){switch(n){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":$i.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(r.pointerId)}}function In(n,r,a,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=ha(r),r!==null&&Cs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Sl(n,r,a,c,d){switch(r){case"focusin":return Bn=In(Bn,n,r,a,c,d),!0;case"dragenter":return $n=In($n,n,r,a,c,d),!0;case"mouseover":return Rt=In(Rt,n,r,a,c,d),!0;case"pointerover":var f=d.pointerId;return $i.set(f,In($i.get(f)||null,n,r,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,fr.set(f,In(fr.get(f)||null,n,r,a,c,d)),!0}return!1}function ks(n){var r=Gi(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Uo(a),r!==null){n.blockedOn=r,Xo(n.priority,function(){Qo(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qe(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);jr=c,a.target.dispatchEvent(c),jr=null}else return r=ha(a),r!==null&&Cs(r),n.blockedOn=a,!1;r.shift()}return!0}function Al(n,r,a){qe(n)&&a.delete(r)}function bc(){zn=!1,Bn!==null&&qe(Bn)&&(Bn=null),$n!==null&&qe($n)&&($n=null),Rt!==null&&qe(Rt)&&(Rt=null),$i.forEach(Al),fr.forEach(Al)}function Hr(n,r){n.blockedOn===r&&(n.blockedOn=null,zn||(zn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bc)))}function Wr(n){function r(d){return Hr(d,n)}if(0<Rs.length){Hr(Rs[0],n);for(var a=1;a<Rs.length;a++){var c=Rs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bn!==null&&Hr(Bn,n),$n!==null&&Hr($n,n),Rt!==null&&Hr(Rt,n),$i.forEach(r),fr.forEach(r),a=0;a<nn.length;a++)c=nn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)ks(a),a.blockedOn===null&&nn.shift()}var pr=Ce.ReactCurrentBatchConfig,mr=!0;function qn(n,r,a,c){var d=Ve,f=pr.transition;pr.transition=null;try{Ve=1,Jo(n,r,a,c)}finally{Ve=d,pr.transition=f}}function xl(n,r,a,c){var d=Ve,f=pr.transition;pr.transition=null;try{Ve=4,Jo(n,r,a,c)}finally{Ve=d,pr.transition=f}}function Jo(n,r,a,c){if(mr){var d=Ps(n,r,a,c);if(d===null)Hc(n,r,c,Hn,a),qr(n,c);else if(Sl(d,n,r,a,c))c.stopPropagation();else if(qr(n,c),r&4&&-1<Il.indexOf(n)){for(;d!==null;){var f=ha(d);if(f!==null&&Ko(f),f=Ps(n,r,a,c),f===null&&Hc(n,r,c,Hn,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Hc(n,r,c,null,a)}}var Hn=null;function Ps(n,r,a,c){if(Hn=null,n=Ts(c),n=Gi(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Uo(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Hn=n,null}function Ns(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dc()){case As:return 1;case Bo:return 4;case Mi:case $o:return 16;case xs:return 536870912;default:return 16}default:return 16}}var rn=null,Ds=null,gr=null;function Cl(){if(gr)return gr;var n,r=Ds,a=r.length,c,d="value"in rn?rn.value:rn.textContent,f=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[f-c];c++);return gr=d.slice(n,1<c?1-c:void 0)}function qi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function Zo(){return!1}function Ot(n){function r(a,c,d,f,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in n)n.hasOwnProperty(A)&&(a=n[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:Zo,this.isPropagationStopped=Zo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),r}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Ot(Gn),Gr=ne({},Gn,{view:0,detail:0}),Vs=Ot(Gr),bs,Os,sn,Wi=ne({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ie,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sn&&(sn&&n.type==="mousemove"?(bs=n.screenX-sn.screenX,Os=n.screenY-sn.screenY):Os=bs=0,sn=n),bs)},movementY:function(n){return"movementY"in n?n.movementY:Os}}),ea=Ot(Wi),Rl=ne({},Wi,{dataTransfer:0}),kl=Ot(Rl),Ls=ne({},Gr,{relatedTarget:0}),kt=Ot(Ls),Pl=ne({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nl=Ot(Pl),Kr=ne({},Gn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Ot(Kr),p=ne({},Gn,{data:0}),g=Ot(p),w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ee(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function Ie(){return ee}var st=ne({},Gr,{key:function(n){if(n.key){var r=w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=qi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ie,charCode:function(n){return n.type==="keypress"?qi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ze=Ot(st),ct=ne({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Ot(ct),yr=ne({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ie}),Kn=Ot(yr),Qn=ne({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ms=Ot(Qn),ta=ne({},Wi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cE=Ot(ta),hE=[9,13,27,32],Oc=m&&"CompositionEvent"in window,na=null;m&&"documentMode"in document&&(na=document.documentMode);var dE=m&&"TextEvent"in window&&!na,Bf=m&&(!Oc||na&&8<na&&11>=na),$f=" ",qf=!1;function Hf(n,r){switch(n){case"keyup":return hE.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function fE(n,r){switch(n){case"compositionend":return Wf(r);case"keypress":return r.which!==32?null:(qf=!0,$f);case"textInput":return n=r.data,n===$f&&qf?null:n;default:return null}}function pE(n,r){if(js)return n==="compositionend"||!Oc&&Hf(n,r)?(n=Cl(),gr=Ds=rn=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bf&&r.locale!=="ko"?null:r.data;default:return null}}var mE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!mE[n.type]:r==="textarea"}function Kf(n,r,a,c){Fr(c),r=Ll(r,"onChange"),0<r.length&&(a=new Hi("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var ra=null,ia=null;function gE(n){dp(n,0)}function Dl(n){var r=$s(n);if(Ni(r))return n}function yE(n,r){if(n==="change")return r}var Qf=!1;if(m){var Lc;if(m){var Mc="oninput"in document;if(!Mc){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Mc=typeof Yf.oninput=="function"}Lc=Mc}else Lc=!1;Qf=Lc&&(!document.documentMode||9<document.documentMode)}function Xf(){ra&&(ra.detachEvent("onpropertychange",Jf),ia=ra=null)}function Jf(n){if(n.propertyName==="value"&&Dl(ia)){var r=[];Kf(r,ia,n,Ts(n)),ml(gE,r)}}function _E(n,r,a){n==="focusin"?(Xf(),ra=r,ia=a,ra.attachEvent("onpropertychange",Jf)):n==="focusout"&&Xf()}function vE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(ia)}function EE(n,r){if(n==="click")return Dl(r)}function wE(n,r){if(n==="input"||n==="change")return Dl(r)}function TE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Sn=typeof Object.is=="function"?Object.is:TE;function sa(n,r){if(Sn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Sn(n[d],r[d]))return!1}return!0}function Zf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ep(n,r){var a=Zf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function tp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?tp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function np(){for(var n=window,r=On();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=On(n.document)}return r}function jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function IE(n){var r=np(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&tp(a.ownerDocument.documentElement,a)){if(c!==null&&jc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=ep(a,f);var v=ep(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var SE=m&&"documentMode"in document&&11>=document.documentMode,Fs=null,Fc=null,oa=null,Uc=!1;function rp(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Fs==null||Fs!==On(c)||(c=Fs,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),oa&&sa(oa,c)||(oa=c,c=Ll(Fc,"onSelect"),0<c.length&&(r=new Hi("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Fs)))}function Vl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Us={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},zc={},ip={};m&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function bl(n){if(zc[n])return zc[n];if(!Us[n])return n;var r=Us[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ip)return zc[n]=r[a];return n}var sp=bl("animationend"),op=bl("animationiteration"),ap=bl("animationstart"),lp=bl("transitionend"),up=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,r){up.set(n,r),u(r,[n])}for(var Bc=0;Bc<cp.length;Bc++){var $c=cp[Bc],AE=$c.toLowerCase(),xE=$c[0].toUpperCase()+$c.slice(1);Qr(AE,"on"+xE)}Qr(sp,"onAnimationEnd"),Qr(op,"onAnimationIteration"),Qr(ap,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(lp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CE=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function hp(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Fo(c,r,void 0,n),n.currentTarget=null}function dp(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var v=c.length-1;0<=v;v--){var A=c[v],R=A.instance,F=A.currentTarget;if(A=A.listener,R!==f&&d.isPropagationStopped())break e;hp(d,A,F),f=R}else for(v=0;v<c.length;v++){if(A=c[v],R=A.instance,F=A.currentTarget,A=A.listener,R!==f&&d.isPropagationStopped())break e;hp(d,A,F),f=R}}}if(Is)throw n=hn,Is=!1,hn=null,n}function Ke(n,r){var a=r[Xc];a===void 0&&(a=r[Xc]=new Set);var c=n+"__bubble";a.has(c)||(fp(r,n,2,!1),a.add(c))}function qc(n,r,a){var c=0;r&&(c|=4),fp(a,n,c,r)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function la(n){if(!n[Ol]){n[Ol]=!0,s.forEach(function(a){a!=="selectionchange"&&(CE.has(a)||qc(a,!1,n),qc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ol]||(r[Ol]=!0,qc("selectionchange",!1,r))}}function fp(n,r,a,c){switch(Ns(r)){case 1:var d=qn;break;case 4:d=xl;break;default:d=Jo}a=d.bind(null,r,a,n),d=void 0,!zr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Hc(n,r,a,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var R=v.tag;if((R===3||R===4)&&(R=v.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;v=v.return}for(;A!==null;){if(v=Gi(A),v===null)return;if(R=v.tag,R===5||R===6){c=f=v;continue e}A=A.parentNode}}c=c.return}ml(function(){var F=f,K=Ts(a),Q=[];e:{var G=up.get(n);if(G!==void 0){var ie=Hi,le=n;switch(n){case"keypress":if(qi(a)===0)break e;case"keydown":case"keyup":ie=ze;break;case"focusin":le="focus",ie=kt;break;case"focusout":le="blur",ie=kt;break;case"beforeblur":case"afterblur":ie=kt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ea;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=Kn;break;case sp:case op:case ap:ie=Nl;break;case lp:ie=Ms;break;case"scroll":ie=Vs;break;case"wheel":ie=cE;break;case"copy":case"cut":case"paste":ie=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=on}var ue=(r&4)!==0,ot=!ue&&n==="scroll",L=ue?G!==null?G+"Capture":null:G;ue=[];for(var b=F,j;b!==null;){j=b;var X=j.stateNode;if(j.tag===5&&X!==null&&(j=X,L!==null&&(X=bi(b,L),X!=null&&ue.push(ua(b,X,j)))),ot)break;b=b.return}0<ue.length&&(G=new ie(G,le,null,a,K),Q.push({event:G,listeners:ue}))}}if((r&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",G&&a!==jr&&(le=a.relatedTarget||a.fromElement)&&(Gi(le)||le[_r]))break e;if((ie||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ie?(le=a.relatedTarget||a.toElement,ie=F,le=le?Gi(le):null,le!==null&&(ot=Tn(le),le!==ot||le.tag!==5&&le.tag!==6)&&(le=null)):(ie=null,le=F),ie!==le)){if(ue=ea,X="onMouseLeave",L="onMouseEnter",b="mouse",(n==="pointerout"||n==="pointerover")&&(ue=on,X="onPointerLeave",L="onPointerEnter",b="pointer"),ot=ie==null?G:$s(ie),j=le==null?G:$s(le),G=new ue(X,b+"leave",ie,a,K),G.target=ot,G.relatedTarget=j,X=null,Gi(K)===F&&(ue=new ue(L,b+"enter",le,a,K),ue.target=j,ue.relatedTarget=ot,X=ue),ot=X,ie&&le)t:{for(ue=ie,L=le,b=0,j=ue;j;j=zs(j))b++;for(j=0,X=L;X;X=zs(X))j++;for(;0<b-j;)ue=zs(ue),b--;for(;0<j-b;)L=zs(L),j--;for(;b--;){if(ue===L||L!==null&&ue===L.alternate)break t;ue=zs(ue),L=zs(L)}ue=null}else ue=null;ie!==null&&pp(Q,G,ie,ue,!1),le!==null&&ot!==null&&pp(Q,ot,le,ue,!0)}}e:{if(G=F?$s(F):window,ie=G.nodeName&&G.nodeName.toLowerCase(),ie==="select"||ie==="input"&&G.type==="file")var ce=yE;else if(Gf(G))if(Qf)ce=wE;else{ce=vE;var fe=_E}else(ie=G.nodeName)&&ie.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ce=EE);if(ce&&(ce=ce(n,F))){Kf(Q,ce,a,K);break e}fe&&fe(n,G,F),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&ut(G,"number",G.value)}switch(fe=F?$s(F):window,n){case"focusin":(Gf(fe)||fe.contentEditable==="true")&&(Fs=fe,Fc=F,oa=null);break;case"focusout":oa=Fc=Fs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,rp(Q,a,K);break;case"selectionchange":if(SE)break;case"keydown":case"keyup":rp(Q,a,K)}var pe;if(Oc)e:{switch(n){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else js?Hf(n,a)&&(we="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Bf&&a.locale!=="ko"&&(js||we!=="onCompositionStart"?we==="onCompositionEnd"&&js&&(pe=Cl()):(rn=K,Ds="value"in rn?rn.value:rn.textContent,js=!0)),fe=Ll(F,we),0<fe.length&&(we=new g(we,n,null,a,K),Q.push({event:we,listeners:fe}),pe?we.data=pe:(pe=Wf(a),pe!==null&&(we.data=pe)))),(pe=dE?fE(n,a):pE(n,a))&&(F=Ll(F,"onBeforeInput"),0<F.length&&(K=new g("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=pe))}dp(Q,r)})}function ua(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ll(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=bi(n,a),f!=null&&c.unshift(ua(n,f,d)),f=bi(n,r),f!=null&&c.push(ua(n,f,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,r,a,c,d){for(var f=r._reactName,v=[];a!==null&&a!==c;){var A=a,R=A.alternate,F=A.stateNode;if(R!==null&&R===c)break;A.tag===5&&F!==null&&(A=F,d?(R=bi(a,f),R!=null&&v.unshift(ua(a,R,A))):d||(R=bi(a,f),R!=null&&v.push(ua(a,R,A)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var RE=/\r\n?/g,kE=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(RE,`
`).replace(kE,"")}function Ml(n,r,a){if(r=mp(r),mp(n)!==r&&a)throw Error(t(425))}function jl(){}var Wc=null,Gc=null;function Kc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,PE=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(DE)}:Qc;function DE(n){setTimeout(function(){throw n})}function Yc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Wr(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Wr(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function yp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Bs,ca="__reactProps$"+Bs,_r="__reactContainer$"+Bs,Xc="__reactEvents$"+Bs,VE="__reactListeners$"+Bs,bE="__reactHandles$"+Bs;function Gi(n){var r=n[Yn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[_r]||a[Yn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=yp(n);n!==null;){if(a=n[Yn])return a;n=yp(n)}return r}n=a,a=n.parentNode}return null}function ha(n){return n=n[Yn]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fl(n){return n[ca]||null}var Jc=[],qs=-1;function Xr(n){return{current:n}}function Qe(n){0>qs||(n.current=Jc[qs],Jc[qs]=null,qs--)}function He(n,r){qs++,Jc[qs]=n.current,n.current=r}var Jr={},Lt=Xr(Jr),Wt=Xr(!1),Ki=Jr;function Hs(n,r){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Ul(){Qe(Wt),Qe(Lt)}function _p(n,r,a){if(Lt.current!==Jr)throw Error(t(168));He(Lt,r),He(Wt,a)}function vp(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,se(n)||"Unknown",d));return ne({},a,c)}function zl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Ki=Lt.current,He(Lt,n),He(Wt,Wt.current),!0}function Ep(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vp(n,r,Ki),c.__reactInternalMemoizedMergedChildContext=n,Qe(Wt),Qe(Lt),He(Lt,n)):Qe(Wt),He(Wt,a)}var vr=null,Bl=!1,Zc=!1;function wp(n){vr===null?vr=[n]:vr.push(n)}function OE(n){Bl=!0,wp(n)}function Zr(){if(!Zc&&vr!==null){Zc=!0;var n=0,r=Ve;try{var a=vr;for(Ve=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}vr=null,Bl=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),zo(As,Zr),d}finally{Ve=r,Zc=!1}}return null}var Ws=[],Gs=0,$l=null,ql=0,fn=[],pn=0,Qi=null,Er=1,wr="";function Yi(n,r){Ws[Gs++]=ql,Ws[Gs++]=$l,$l=n,ql=r}function Tp(n,r,a){fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Qi,Qi=n;var c=Er;n=wr;var d=32-tn(c)-1;c&=~(1<<d),a+=1;var f=32-tn(r)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Er=1<<32-tn(r)+d|a<<d|c,wr=f+n}else Er=1<<f|a<<d|c,wr=n}function eh(n){n.return!==null&&(Yi(n,1),Tp(n,1,0))}function th(n){for(;n===$l;)$l=Ws[--Gs],Ws[Gs]=null,ql=Ws[--Gs],Ws[Gs]=null;for(;n===Qi;)Qi=fn[--pn],fn[pn]=null,wr=fn[--pn],fn[pn]=null,Er=fn[--pn],fn[pn]=null}var an=null,ln=null,Xe=!1,An=null;function Ip(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Sp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,an=n,ln=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,an=n,ln=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Qi!==null?{id:Er,overflow:wr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,an=n,ln=null,!0):!1;default:return!1}}function nh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function rh(n){if(Xe){var r=ln;if(r){var a=r;if(!Sp(n,r)){if(nh(n))throw Error(t(418));r=Yr(a.nextSibling);var c=an;r&&Sp(n,r)?Ip(c,a):(n.flags=n.flags&-4097|2,Xe=!1,an=n)}}else{if(nh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,an=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Hl(n){if(n!==an)return!1;if(!Xe)return Ap(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Kc(n.type,n.memoizedProps)),r&&(r=ln)){if(nh(n))throw xp(),Error(t(418));for(;r;)Ip(n,r),r=Yr(r.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ln=Yr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ln=null}}else ln=an?Yr(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=ln;n;)n=Yr(n.nextSibling)}function Ks(){ln=an=null,Xe=!1}function ih(n){An===null?An=[n]:An.push(n)}var LE=Ce.ReactCurrentBatchConfig;function da(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(v){var A=d.refs;v===null?delete A[f]:A[f]=v},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Cp(n){var r=n._init;return r(n._payload)}function Rp(n){function r(L,b){if(n){var j=L.deletions;j===null?(L.deletions=[b],L.flags|=16):j.push(b)}}function a(L,b){if(!n)return null;for(;b!==null;)r(L,b),b=b.sibling;return null}function c(L,b){for(L=new Map;b!==null;)b.key!==null?L.set(b.key,b):L.set(b.index,b),b=b.sibling;return L}function d(L,b){return L=ai(L,b),L.index=0,L.sibling=null,L}function f(L,b,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<b?(L.flags|=2,b):j):(L.flags|=2,b)):(L.flags|=1048576,b)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function A(L,b,j,X){return b===null||b.tag!==6?(b=Qh(j,L.mode,X),b.return=L,b):(b=d(b,j),b.return=L,b)}function R(L,b,j,X){var ce=j.type;return ce===P?K(L,b,j.props.children,X,j.key):b!==null&&(b.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===vt&&Cp(ce)===b.type)?(X=d(b,j.props),X.ref=da(L,b,j),X.return=L,X):(X=gu(j.type,j.key,j.props,null,L.mode,X),X.ref=da(L,b,j),X.return=L,X)}function F(L,b,j,X){return b===null||b.tag!==4||b.stateNode.containerInfo!==j.containerInfo||b.stateNode.implementation!==j.implementation?(b=Yh(j,L.mode,X),b.return=L,b):(b=d(b,j.children||[]),b.return=L,b)}function K(L,b,j,X,ce){return b===null||b.tag!==7?(b=is(j,L.mode,X,ce),b.return=L,b):(b=d(b,j),b.return=L,b)}function Q(L,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Qh(""+b,L.mode,j),b.return=L,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Be:return j=gu(b.type,b.key,b.props,null,L.mode,j),j.ref=da(L,null,b),j.return=L,j;case Re:return b=Yh(b,L.mode,j),b.return=L,b;case vt:var X=b._init;return Q(L,X(b._payload),j)}if(it(b)||he(b))return b=is(b,L.mode,j,null),b.return=L,b;Wl(L,b)}return null}function G(L,b,j,X){var ce=b!==null?b.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ce!==null?null:A(L,b,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Be:return j.key===ce?R(L,b,j,X):null;case Re:return j.key===ce?F(L,b,j,X):null;case vt:return ce=j._init,G(L,b,ce(j._payload),X)}if(it(j)||he(j))return ce!==null?null:K(L,b,j,X,null);Wl(L,j)}return null}function ie(L,b,j,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number")return L=L.get(j)||null,A(b,L,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Be:return L=L.get(X.key===null?j:X.key)||null,R(b,L,X,ce);case Re:return L=L.get(X.key===null?j:X.key)||null,F(b,L,X,ce);case vt:var fe=X._init;return ie(L,b,j,fe(X._payload),ce)}if(it(X)||he(X))return L=L.get(j)||null,K(b,L,X,ce,null);Wl(b,X)}return null}function le(L,b,j,X){for(var ce=null,fe=null,pe=b,we=b=0,It=null;pe!==null&&we<j.length;we++){pe.index>we?(It=pe,pe=null):It=pe.sibling;var Le=G(L,pe,j[we],X);if(Le===null){pe===null&&(pe=It);break}n&&pe&&Le.alternate===null&&r(L,pe),b=f(Le,b,we),fe===null?ce=Le:fe.sibling=Le,fe=Le,pe=It}if(we===j.length)return a(L,pe),Xe&&Yi(L,we),ce;if(pe===null){for(;we<j.length;we++)pe=Q(L,j[we],X),pe!==null&&(b=f(pe,b,we),fe===null?ce=pe:fe.sibling=pe,fe=pe);return Xe&&Yi(L,we),ce}for(pe=c(L,pe);we<j.length;we++)It=ie(pe,L,we,j[we],X),It!==null&&(n&&It.alternate!==null&&pe.delete(It.key===null?we:It.key),b=f(It,b,we),fe===null?ce=It:fe.sibling=It,fe=It);return n&&pe.forEach(function(li){return r(L,li)}),Xe&&Yi(L,we),ce}function ue(L,b,j,X){var ce=he(j);if(typeof ce!="function")throw Error(t(150));if(j=ce.call(j),j==null)throw Error(t(151));for(var fe=ce=null,pe=b,we=b=0,It=null,Le=j.next();pe!==null&&!Le.done;we++,Le=j.next()){pe.index>we?(It=pe,pe=null):It=pe.sibling;var li=G(L,pe,Le.value,X);if(li===null){pe===null&&(pe=It);break}n&&pe&&li.alternate===null&&r(L,pe),b=f(li,b,we),fe===null?ce=li:fe.sibling=li,fe=li,pe=It}if(Le.done)return a(L,pe),Xe&&Yi(L,we),ce;if(pe===null){for(;!Le.done;we++,Le=j.next())Le=Q(L,Le.value,X),Le!==null&&(b=f(Le,b,we),fe===null?ce=Le:fe.sibling=Le,fe=Le);return Xe&&Yi(L,we),ce}for(pe=c(L,pe);!Le.done;we++,Le=j.next())Le=ie(pe,L,we,Le.value,X),Le!==null&&(n&&Le.alternate!==null&&pe.delete(Le.key===null?we:Le.key),b=f(Le,b,we),fe===null?ce=Le:fe.sibling=Le,fe=Le);return n&&pe.forEach(function(mw){return r(L,mw)}),Xe&&Yi(L,we),ce}function ot(L,b,j,X){if(typeof j=="object"&&j!==null&&j.type===P&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Be:e:{for(var ce=j.key,fe=b;fe!==null;){if(fe.key===ce){if(ce=j.type,ce===P){if(fe.tag===7){a(L,fe.sibling),b=d(fe,j.props.children),b.return=L,L=b;break e}}else if(fe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===vt&&Cp(ce)===fe.type){a(L,fe.sibling),b=d(fe,j.props),b.ref=da(L,fe,j),b.return=L,L=b;break e}a(L,fe);break}else r(L,fe);fe=fe.sibling}j.type===P?(b=is(j.props.children,L.mode,X,j.key),b.return=L,L=b):(X=gu(j.type,j.key,j.props,null,L.mode,X),X.ref=da(L,b,j),X.return=L,L=X)}return v(L);case Re:e:{for(fe=j.key;b!==null;){if(b.key===fe)if(b.tag===4&&b.stateNode.containerInfo===j.containerInfo&&b.stateNode.implementation===j.implementation){a(L,b.sibling),b=d(b,j.children||[]),b.return=L,L=b;break e}else{a(L,b);break}else r(L,b);b=b.sibling}b=Yh(j,L.mode,X),b.return=L,L=b}return v(L);case vt:return fe=j._init,ot(L,b,fe(j._payload),X)}if(it(j))return le(L,b,j,X);if(he(j))return ue(L,b,j,X);Wl(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,b!==null&&b.tag===6?(a(L,b.sibling),b=d(b,j),b.return=L,L=b):(a(L,b),b=Qh(j,L.mode,X),b.return=L,L=b),v(L)):a(L,b)}return ot}var Qs=Rp(!0),kp=Rp(!1),Gl=Xr(null),Kl=null,Ys=null,sh=null;function oh(){sh=Ys=Kl=null}function ah(n){var r=Gl.current;Qe(Gl),n._currentValue=r}function lh(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Xs(n,r){Kl=n,sh=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(sh!==n)if(n={context:n,memoizedValue:r,next:null},Ys===null){if(Kl===null)throw Error(t(308));Ys=n,Kl.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return r}var Xi=null;function uh(n){Xi===null?Xi=[n]:Xi.push(n)}function Pp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,uh(r)):(a.next=d.next,d.next=a),r.interleaved=a,Tr(n,c)}function Tr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ti(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,Tr(n,a)}return d=c.interleaved,d===null?(r.next=r,uh(c)):(r.next=d.next,d.next=r),c.interleaved=r,Tr(n,a)}function Ql(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Go(n,a)}}function Dp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?d=f=r:f=f.next=r}else d=f=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Yl(n,r,a,c){var d=n.updateQueue;ei=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var R=A,F=R.next;R.next=null,v===null?f=F:v.next=F,v=R;var K=n.alternate;K!==null&&(K=K.updateQueue,A=K.lastBaseUpdate,A!==v&&(A===null?K.firstBaseUpdate=F:A.next=F,K.lastBaseUpdate=R))}if(f!==null){var Q=d.baseState;v=0,K=F=R=null,A=f;do{var G=A.lane,ie=A.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var le=n,ue=A;switch(G=r,ie=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){Q=le.call(ie,Q,G);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,G=typeof le=="function"?le.call(ie,Q,G):le,G==null)break e;Q=ne({},Q,G);break e;case 2:ei=!0}}A.callback!==null&&A.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[A]:G.push(A))}else ie={eventTime:ie,lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},K===null?(F=K=ie,R=Q):K=K.next=ie,v|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;G=A,A=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(R=Q),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);es|=v,n.lanes=v,n.memoizedState=Q}}function Vp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var fa={},Xn=Xr(fa),pa=Xr(fa),ma=Xr(fa);function Ji(n){if(n===fa)throw Error(t(174));return n}function hh(n,r){switch(He(ma,r),He(pa,n),He(Xn,fa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:vs(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=vs(r,n)}Qe(Xn),He(Xn,r)}function Js(){Qe(Xn),Qe(pa),Qe(ma)}function bp(n){Ji(ma.current);var r=Ji(Xn.current),a=vs(r,n.type);r!==a&&(He(pa,n),He(Xn,a))}function dh(n){pa.current===n&&(Qe(Xn),Qe(pa))}var Je=Xr(0);function Xl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var fh=[];function ph(){for(var n=0;n<fh.length;n++)fh[n]._workInProgressVersionPrimary=null;fh.length=0}var Jl=Ce.ReactCurrentDispatcher,mh=Ce.ReactCurrentBatchConfig,Zi=0,Ze=null,mt=null,wt=null,Zl=!1,ga=!1,ya=0,ME=0;function Mt(){throw Error(t(321))}function gh(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Sn(n[a],r[a]))return!1;return!0}function yh(n,r,a,c,d,f){if(Zi=f,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Jl.current=n===null||n.memoizedState===null?zE:BE,n=a(c,d),ga){f=0;do{if(ga=!1,ya=0,25<=f)throw Error(t(301));f+=1,wt=mt=null,r.updateQueue=null,Jl.current=$E,n=a(c,d)}while(ga)}if(Jl.current=nu,r=mt!==null&&mt.next!==null,Zi=0,wt=mt=Ze=null,Zl=!1,r)throw Error(t(300));return n}function _h(){var n=ya!==0;return ya=0,n}function Jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=n:wt=wt.next=n,wt}function gn(){if(mt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var r=wt===null?Ze.memoizedState:wt.next;if(r!==null)wt=r,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?Ze.memoizedState=wt=n:wt=wt.next=n}return wt}function _a(n,r){return typeof r=="function"?r(n):r}function vh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var A=v=null,R=null,F=f;do{var K=F.lane;if((Zi&K)===K)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(A=R=Q,v=c):R=R.next=Q,Ze.lanes|=K,es|=K}F=F.next}while(F!==null&&F!==f);R===null?v=c:R.next=A,Sn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,es|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Eh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,f=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do f=n(f,v.action),v=v.next;while(v!==d);Sn(f,r.memoizedState)||(Kt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Op(){}function Lp(n,r){var a=Ze,c=gn(),d=r(),f=!Sn(c.memoizedState,d);if(f&&(c.memoizedState=d,Kt=!0),c=c.queue,wh(Fp.bind(null,a,c,n),[n]),c.getSnapshot!==r||f||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,va(9,jp.bind(null,a,c,d,r),void 0,null),Tt===null)throw Error(t(349));(Zi&30)!==0||Mp(a,r,d)}return d}function Mp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function jp(n,r,a,c){r.value=a,r.getSnapshot=c,Up(r)&&zp(n)}function Fp(n,r,a){return a(function(){Up(r)&&zp(n)})}function Up(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Sn(n,a)}catch{return!0}}function zp(n){var r=Tr(n,1);r!==null&&kn(r,n,1,-1)}function Bp(n){var r=Jn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},r.queue=n,n=n.dispatch=UE.bind(null,Ze,n),[r.memoizedState,n]}function va(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function $p(){return gn().memoizedState}function eu(n,r,a,c){var d=Jn();Ze.flags|=n,d.memoizedState=va(1|r,a,void 0,c===void 0?null:c)}function tu(n,r,a,c){var d=gn();c=c===void 0?null:c;var f=void 0;if(mt!==null){var v=mt.memoizedState;if(f=v.destroy,c!==null&&gh(c,v.deps)){d.memoizedState=va(r,a,f,c);return}}Ze.flags|=n,d.memoizedState=va(1|r,a,f,c)}function qp(n,r){return eu(8390656,8,n,r)}function wh(n,r){return tu(2048,8,n,r)}function Hp(n,r){return tu(4,2,n,r)}function Wp(n,r){return tu(4,4,n,r)}function Gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kp(n,r,a){return a=a!=null?a.concat([n]):null,tu(4,4,Gp.bind(null,r,n),a)}function Th(){}function Qp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&gh(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Yp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&gh(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Xp(n,r,a){return(Zi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Sn(a,r)||(a=Ho(),Ze.lanes|=a,es|=a,n.baseState=!0),r)}function jE(n,r){var a=Ve;Ve=a!==0&&4>a?a:4,n(!0);var c=mh.transition;mh.transition={};try{n(!1),r()}finally{Ve=a,mh.transition=c}}function Jp(){return gn().memoizedState}function FE(n,r,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zp(n))em(r,a);else if(a=Pp(n,r,a,c),a!==null){var d=Ht();kn(a,n,c,d),tm(a,r,c)}}function UE(n,r,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zp(n))em(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var v=r.lastRenderedState,A=f(v,a);if(d.hasEagerState=!0,d.eagerState=A,Sn(A,v)){var R=r.interleaved;R===null?(d.next=d,uh(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=Pp(n,r,d,c),a!==null&&(d=Ht(),kn(a,n,c,d),tm(a,r,c))}}function Zp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function em(n,r){ga=Zl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function tm(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Go(n,a)}}var nu={readContext:mn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},zE={readContext:mn,useCallback:function(n,r){return Jn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:qp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,eu(4194308,4,Gp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return eu(4194308,4,n,r)},useInsertionEffect:function(n,r){return eu(4,2,n,r)},useMemo:function(n,r){var a=Jn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Jn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=FE.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Jn();return n={current:n},r.memoizedState=n},useState:Bp,useDebugValue:Th,useDeferredValue:function(n){return Jn().memoizedState=n},useTransition:function(){var n=Bp(!1),r=n[0];return n=jE.bind(null,n[1]),Jn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Jn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Tt===null)throw Error(t(349));(Zi&30)!==0||Mp(c,r,a)}d.memoizedState=a;var f={value:a,getSnapshot:r};return d.queue=f,qp(Fp.bind(null,c,f,n),[n]),c.flags|=2048,va(9,jp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var n=Jn(),r=Tt.identifierPrefix;if(Xe){var a=wr,c=Er;a=(c&~(1<<32-tn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ya++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=ME++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},BE={readContext:mn,useCallback:Qp,useContext:mn,useEffect:wh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Yp,useReducer:vh,useRef:$p,useState:function(){return vh(_a)},useDebugValue:Th,useDeferredValue:function(n){var r=gn();return Xp(r,mt.memoizedState,n)},useTransition:function(){var n=vh(_a)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:Lp,useId:Jp,unstable_isNewReconciler:!1},$E={readContext:mn,useCallback:Qp,useContext:mn,useEffect:wh,useImperativeHandle:Kp,useInsertionEffect:Hp,useLayoutEffect:Wp,useMemo:Yp,useReducer:Eh,useRef:$p,useState:function(){return Eh(_a)},useDebugValue:Th,useDeferredValue:function(n){var r=gn();return mt===null?r.memoizedState=n:Xp(r,mt.memoizedState,n)},useTransition:function(){var n=Eh(_a)[0],r=gn().memoizedState;return[n,r]},useMutableSource:Op,useSyncExternalStore:Lp,useId:Jp,unstable_isNewReconciler:!1};function xn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Ih(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ru={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=si(n),f=Ir(c,d);f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(kn(r,n,d,c),Ql(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Ht(),d=si(n),f=Ir(c,d);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=ti(n,f,d),r!==null&&(kn(r,n,d,c),Ql(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Ht(),c=si(n),d=Ir(a,c);d.tag=2,r!=null&&(d.callback=r),r=ti(n,d,c),r!==null&&(kn(r,n,c,a),Ql(r,n,c))}};function nm(n,r,a,c,d,f,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,v):r.prototype&&r.prototype.isPureReactComponent?!sa(a,c)||!sa(d,f):!0}function rm(n,r,a){var c=!1,d=Jr,f=r.contextType;return typeof f=="object"&&f!==null?f=mn(f):(d=Gt(r)?Ki:Lt.current,c=r.contextTypes,f=(c=c!=null)?Hs(n,d):Jr),r=new r(a,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ru,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function im(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ru.enqueueReplaceState(r,r.state,null)}function Sh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ch(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=mn(f):(f=Gt(r)?Ki:Lt.current,d.context=Hs(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(Ih(n,r,f,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ru.enqueueReplaceState(d,d.state,null),Yl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,r){try{var a="",c=r;do a+=xe(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function Ah(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function xh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var qE=typeof WeakMap=="function"?WeakMap:Map;function sm(n,r,a){a=Ir(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){cu||(cu=!0,zh=c),xh(n,r)},a}function om(n,r,a){a=Ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){xh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){xh(n,r),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function am(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new qE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=iw.bind(null,n,r,a),r.then(n,n))}function lm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function um(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ir(-1,1),r.tag=2,ti(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var HE=Ce.ReactCurrentOwner,Kt=!1;function qt(n,r,a,c){r.child=n===null?kp(r,null,a,c):Qs(r,n.child,a,c)}function cm(n,r,a,c,d){a=a.render;var f=r.ref;return Xs(r,d),c=yh(n,r,a,c,f,d),a=_h(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Xe&&a&&eh(r),r.flags|=1,qt(n,r,c,d),r.child)}function hm(n,r,a,c,d){if(n===null){var f=a.type;return typeof f=="function"&&!Kh(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,dm(n,r,f,c,d)):(n=gu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:sa,a(v,c)&&n.ref===r.ref)return Sr(n,r,d)}return r.flags|=1,n=ai(f,c),n.ref=r.ref,n.return=r,r.child=n}function dm(n,r,a,c,d){if(n!==null){var f=n.memoizedProps;if(sa(f,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,Sr(n,r,d)}return Ch(n,r,a,c,d)}function fm(n,r,a){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(to,un),un|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,He(to,un),un|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,He(to,un),un|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,He(to,un),un|=c;return qt(n,r,d,a),r.child}function pm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ch(n,r,a,c,d){var f=Gt(a)?Ki:Lt.current;return f=Hs(r,f),Xs(r,d),a=yh(n,r,a,c,f,d),c=_h(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Sr(n,r,d)):(Xe&&c&&eh(r),r.flags|=1,qt(n,r,a,d),r.child)}function mm(n,r,a,c,d){if(Gt(a)){var f=!0;zl(r)}else f=!1;if(Xs(r,d),r.stateNode===null)su(n,r),rm(r,a,c),Sh(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,A=r.memoizedProps;v.props=A;var R=v.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=Gt(a)?Ki:Lt.current,F=Hs(r,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==c||R!==F)&&im(r,v,c,F),ei=!1;var G=r.memoizedState;v.state=G,Yl(r,c,v,d),R=r.memoizedState,A!==c||G!==R||Wt.current||ei?(typeof K=="function"&&(Ih(r,a,K,c),R=r.memoizedState),(A=ei||nm(r,a,A,c,G,R,F))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),v.props=c,v.state=R,v.context=F,c=A):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Np(n,r),A=r.memoizedProps,F=r.type===r.elementType?A:xn(r.type,A),v.props=F,Q=r.pendingProps,G=v.context,R=a.contextType,typeof R=="object"&&R!==null?R=mn(R):(R=Gt(a)?Ki:Lt.current,R=Hs(r,R));var ie=a.getDerivedStateFromProps;(K=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(A!==Q||G!==R)&&im(r,v,c,R),ei=!1,G=r.memoizedState,v.state=G,Yl(r,c,v,d);var le=r.memoizedState;A!==Q||G!==le||Wt.current||ei?(typeof ie=="function"&&(Ih(r,a,ie,c),le=r.memoizedState),(F=ei||nm(r,a,F,c,G,le,R)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,R),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,R)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=le),v.props=c,v.state=le,v.context=R,c=F):(typeof v.componentDidUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&G===n.memoizedState||(r.flags|=1024),c=!1)}return Rh(n,r,a,c,f,d)}function Rh(n,r,a,c,d,f){pm(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&Ep(r,a,!1),Sr(n,r,f);c=r.stateNode,HE.current=r;var A=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Qs(r,n.child,null,f),r.child=Qs(r,null,A,f)):qt(n,r,A,f),r.memoizedState=c.state,d&&Ep(r,a,!0),r.child}function gm(n){var r=n.stateNode;r.pendingContext?_p(n,r.pendingContext,r.pendingContext!==r.context):r.context&&_p(n,r.context,!1),hh(n,r.containerInfo)}function ym(n,r,a,c,d){return Ks(),ih(d),r.flags|=256,qt(n,r,a,c),r.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function _m(n,r,a){var c=r.pendingProps,d=Je.current,f=!1,v=(r.flags&128)!==0,A;if((A=v)||(A=n!==null&&n.memoizedState===null?!1:(d&2)!==0),A?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Je,d&1),n===null)return rh(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,f?(c=r.mode,f=r.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=yu(v,c,0,null),n=is(n,c,a,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=Ph(a),r.memoizedState=kh,n):Nh(r,v));if(d=n.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return WE(n,r,v,c,A,d,a);if(f){f=c.fallback,v=r.mode,d=n.child,A=d.sibling;var R={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=ai(d,R),c.subtreeFlags=d.subtreeFlags&14680064),A!==null?f=ai(A,f):(f=is(f,v,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,v=n.child.memoizedState,v=v===null?Ph(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=n.childLanes&~a,r.memoizedState=kh,c}return f=n.child,n=f.sibling,c=ai(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Nh(n,r){return r=yu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function iu(n,r,a,c){return c!==null&&ih(c),Qs(r,n.child,null,a),n=Nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function WE(n,r,a,c,d,f,v){if(a)return r.flags&256?(r.flags&=-257,c=Ah(Error(t(422))),iu(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=yu({mode:"visible",children:c.children},d,0,null),f=is(f,d,v,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Qs(r,n.child,null,v),r.child.memoizedState=Ph(v),r.memoizedState=kh,f);if((r.mode&1)===0)return iu(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var A=c.dgst;return c=A,f=Error(t(419)),c=Ah(f,c,void 0),iu(n,r,v,c)}if(A=(v&n.childLanes)!==0,Kt||A){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Tr(n,d),kn(c,n,d,-1))}return Gh(),c=Ah(Error(t(421))),iu(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=sw.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,ln=Yr(d.nextSibling),an=r,Xe=!0,An=null,n!==null&&(fn[pn++]=Er,fn[pn++]=wr,fn[pn++]=Qi,Er=n.id,wr=n.overflow,Qi=r),r=Nh(r,c.children),r.flags|=4096,r)}function vm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),lh(n.return,r,a)}function Dh(n,r,a,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function Em(n,r,a){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(qt(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vm(n,a,r);else if(n.tag===19)vm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Dh(r,!1,d,a,f);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Dh(r,!0,a,null,f);break;case"together":Dh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function su(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),es|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ai(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function GE(n,r,a){switch(r.tag){case 3:gm(r),Ks();break;case 5:bp(r);break;case 1:Gt(r.type)&&zl(r);break;case 4:hh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;He(Gl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?_m(n,r,a):(He(Je,Je.current&1),n=Sr(n,r,a),n!==null?n.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Em(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,fm(n,r,a)}return Sr(n,r,a)}var wm,Vh,Tm,Im;wm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Vh=function(){},Tm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Ji(Xn.current);var f=null;switch(a){case"input":d=Et(n,d),c=Et(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=bo(n,d),c=bo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=jl)}wn(a,c);var v;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var A=d[F];for(v in A)A.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in c){var R=c[F];if(A=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==A&&(R!=null||A!=null))if(F==="style")if(A){for(v in A)!A.hasOwnProperty(v)||R&&R.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in R)R.hasOwnProperty(v)&&A[v]!==R[v]&&(a||(a={}),a[v]=R[v])}else a||(f||(f=[]),f.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,A=A?A.__html:void 0,R!=null&&A!==R&&(f=f||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(f=f||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&Ke("scroll",n),f||A===R||(f=[])):(f=f||[]).push(F,R))}a&&(f=f||[]).push("style",a);var F=f;(r.updateQueue=F)&&(r.flags|=4)}},Im=function(n,r,a,c){a!==c&&(r.flags|=4)};function Ea(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function KE(n,r,a){var c=r.pendingProps;switch(th(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(r),null;case 1:return Gt(r.type)&&Ul(),jt(r),null;case 3:return c=r.stateNode,Js(),Qe(Wt),Qe(Lt),ph(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Hl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,An!==null&&(qh(An),An=null))),Vh(n,r),jt(r),null;case 5:dh(r);var d=Ji(ma.current);if(a=r.type,n!==null&&r.stateNode!=null)Tm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return jt(r),null}if(n=Ji(Xn.current),Hl(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[Yn]=r,c[ca]=f,n=(r.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<aa.length;d++)Ke(aa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":ul(c,f),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ke("invalid",c);break;case"textarea":Oo(c,f),Ke("invalid",c)}wn(a,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var A=f[v];v==="children"?typeof A=="string"?c.textContent!==A&&(f.suppressHydrationWarning!==!0&&Ml(c.textContent,A,n),d=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(f.suppressHydrationWarning!==!0&&Ml(c.textContent,A,n),d=["children",""+A]):o.hasOwnProperty(v)&&A!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":Vr(c),Vo(c,f,!0);break;case"textarea":Vr(c),br(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=jl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lo(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Yn]=r,n[ca]=c,wm(n,r,!1,!1),r.stateNode=n;e:{switch(v=ws(a,c),a){case"dialog":Ke("cancel",n),Ke("close",n),d=c;break;case"iframe":case"object":case"embed":Ke("load",n),d=c;break;case"video":case"audio":for(d=0;d<aa.length;d++)Ke(aa[d],n);d=c;break;case"source":Ke("error",n),d=c;break;case"img":case"image":case"link":Ke("error",n),Ke("load",n),d=c;break;case"details":Ke("toggle",n),d=c;break;case"input":ul(n,c),d=Et(n,c),Ke("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),Ke("invalid",n);break;case"textarea":Oo(n,c),d=bo(n,c),Ke("invalid",n);break;default:d=c}wn(a,d),A=d;for(f in A)if(A.hasOwnProperty(f)){var R=A[f];f==="style"?Es(n,R):f==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&hl(n,R)):f==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Vi(n,R):typeof R=="number"&&Vi(n,""+R):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?R!=null&&f==="onScroll"&&Ke("scroll",n):R!=null&&Ae(n,f,R,v))}switch(a){case"input":Vr(n),Vo(n,c,!1);break;case"textarea":Vr(n),br(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Z(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?En(n,!!c.multiple,f,!1):c.defaultValue!=null&&En(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return jt(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Ji(ma.current),Ji(Xn.current),Hl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Yn]=r,(f=c.nodeValue!==a)&&(n=an,n!==null))switch(n.tag){case 3:Ml(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ml(c.nodeValue,a,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yn]=r,r.stateNode=c}return jt(r),null;case 13:if(Qe(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&ln!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xp(),Ks(),r.flags|=98560,f=!1;else if(f=Hl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Yn]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;jt(r),f=!1}else An!==null&&(qh(An),An=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?gt===0&&(gt=3):Gh())),r.updateQueue!==null&&(r.flags|=4),jt(r),null);case 4:return Js(),Vh(n,r),n===null&&la(r.stateNode.containerInfo),jt(r),null;case 10:return ah(r.type._context),jt(r),null;case 17:return Gt(r.type)&&Ul(),jt(r),null;case 19:if(Qe(Je),f=r.memoizedState,f===null)return jt(r),null;if(c=(r.flags&128)!==0,v=f.rendering,v===null)if(c)Ea(f,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Xl(n),v!==null){for(r.flags|=128,Ea(f,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,n=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,n=v.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ge()>no&&(r.flags|=128,c=!0,Ea(f,!1),r.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ea(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Xe)return jt(r),null}else 2*Ge()-f.renderingStartTime>no&&a!==1073741824&&(r.flags|=128,c=!0,Ea(f,!1),r.lanes=4194304);f.isBackwards?(v.sibling=r.child,r.child=v):(a=f.last,a!==null?a.sibling=v:r.child=v,f.last=v)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ge(),r.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),r):(jt(r),null);case 22:case 23:return Wh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(un&1073741824)!==0&&(jt(r),r.subtreeFlags&6&&(r.flags|=8192)):jt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function QE(n,r){switch(th(r),r.tag){case 1:return Gt(r.type)&&Ul(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Js(),Qe(Wt),Qe(Lt),ph(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return dh(r),null;case 13:if(Qe(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Qe(Je),null;case 4:return Js(),null;case 10:return ah(r.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var ou=!1,Ft=!1,YE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function eo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(n,r,c)}else a.current=null}function bh(n,r,a){try{a()}catch(c){nt(n,r,c)}}var Sm=!1;function XE(n,r){if(Wc=mr,n=np(),jc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,R=-1,F=0,K=0,Q=n,G=null;t:for(;;){for(var ie;Q!==a||d!==0&&Q.nodeType!==3||(A=v+d),Q!==f||c!==0&&Q.nodeType!==3||(R=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ie=Q.firstChild)!==null;)G=Q,Q=ie;for(;;){if(Q===n)break t;if(G===a&&++F===d&&(A=v),G===f&&++K===c&&(R=v),(ie=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=ie}a=A===-1||R===-1?null:{start:A,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:n,selectionRange:a},mr=!1,ae=r;ae!==null;)if(r=ae,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ae=n;else for(;ae!==null;){r=ae;try{var le=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,ot=le.memoizedState,L=r.stateNode,b=L.getSnapshotBeforeUpdate(r.elementType===r.type?ue:xn(r.type,ue),ot);L.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var j=r.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){nt(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,ae=n;break}ae=r.return}return le=Sm,Sm=!1,le}function wa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&bh(r,a,f)}d=d.next}while(d!==c)}}function au(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Oh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Am(n){var r=n.alternate;r!==null&&(n.alternate=null,Am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yn],delete r[ca],delete r[Xc],delete r[VE],delete r[bE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=jl));else if(c!==4&&(n=n.child,n!==null))for(Lh(n,r,a),n=n.sibling;n!==null;)Lh(n,r,a),n=n.sibling}function Mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mh(n,r,a),n=n.sibling;n!==null;)Mh(n,r,a),n=n.sibling}var Pt=null,Cn=!1;function ni(n,r,a){for(a=a.child;a!==null;)Rm(n,r,a),a=a.sibling}function Rm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(ji,a)}catch{}switch(a.tag){case 5:Ft||eo(a,r);case 6:var c=Pt,d=Cn;Pt=null,ni(n,r,a),Pt=c,Cn=d,Pt!==null&&(Cn?(n=Pt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Cn?(n=Pt,a=a.stateNode,n.nodeType===8?Yc(n.parentNode,a):n.nodeType===1&&Yc(n,a),Wr(n)):Yc(Pt,a.stateNode));break;case 4:c=Pt,d=Cn,Pt=a.stateNode.containerInfo,Cn=!0,ni(n,r,a),Pt=c,Cn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&bh(a,r,v),d=d.next}while(d!==c)}ni(n,r,a);break;case 1:if(!Ft&&(eo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){nt(a,r,A)}ni(n,r,a);break;case 21:ni(n,r,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ni(n,r,a),Ft=c):ni(n,r,a);break;default:ni(n,r,a)}}function km(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new YE),r.forEach(function(c){var d=ow.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Rn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=n,v=r,A=v;e:for(;A!==null;){switch(A.tag){case 5:Pt=A.stateNode,Cn=!1;break e;case 3:Pt=A.stateNode.containerInfo,Cn=!0;break e;case 4:Pt=A.stateNode.containerInfo,Cn=!0;break e}A=A.return}if(Pt===null)throw Error(t(160));Rm(f,v,d),Pt=null,Cn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){nt(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Pm(r,n),r=r.sibling}function Pm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(r,n),Zn(n),c&4){try{wa(3,n,n.return),au(3,n)}catch(ue){nt(n,n.return,ue)}try{wa(5,n,n.return)}catch(ue){nt(n,n.return,ue)}}break;case 1:Rn(r,n),Zn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(Rn(r,n),Zn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{Vi(d,"")}catch(ue){nt(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,v=a!==null?a.memoizedProps:f,A=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{A==="input"&&f.type==="radio"&&f.name!=null&&_s(d,f),ws(A,v);var F=ws(A,f);for(v=0;v<R.length;v+=2){var K=R[v],Q=R[v+1];K==="style"?Es(d,Q):K==="dangerouslySetInnerHTML"?hl(d,Q):K==="children"?Vi(d,Q):Ae(d,K,Q,F)}switch(A){case"input":Di(d,f);break;case"textarea":cl(d,f);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ie=f.value;ie!=null?En(d,!!f.multiple,ie,!1):G!==!!f.multiple&&(f.defaultValue!=null?En(d,!!f.multiple,f.defaultValue,!0):En(d,!!f.multiple,f.multiple?[]:"",!1))}d[ca]=f}catch(ue){nt(n,n.return,ue)}}break;case 6:if(Rn(r,n),Zn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(ue){nt(n,n.return,ue)}}break;case 3:if(Rn(r,n),Zn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Wr(r.containerInfo)}catch(ue){nt(n,n.return,ue)}break;case 4:Rn(r,n),Zn(n);break;case 13:Rn(r,n),Zn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Uh=Ge())),c&4&&km(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Ft=(F=Ft)||K,Rn(r,n),Ft=F):Rn(r,n),Zn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(ae=n,K=n.child;K!==null;){for(Q=ae=K;ae!==null;){switch(G=ae,ie=G.child,G.tag){case 0:case 11:case 14:case 15:wa(4,G,G.return);break;case 1:eo(G,G.return);var le=G.stateNode;if(typeof le.componentWillUnmount=="function"){c=G,a=G.return;try{r=c,le.props=r.memoizedProps,le.state=r.memoizedState,le.componentWillUnmount()}catch(ue){nt(c,a,ue)}}break;case 5:eo(G,G.return);break;case 22:if(G.memoizedState!==null){Vm(Q);continue}}ie!==null?(ie.return=G,ae=ie):Vm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(A=Q.stateNode,R=Q.memoizedProps.style,v=R!=null&&R.hasOwnProperty("display")?R.display:null,A.style.display=Mr("display",v))}catch(ue){nt(n,n.return,ue)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ue){nt(n,n.return,ue)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Rn(r,n),Zn(n),c&4&&km(n);break;case 21:break;default:Rn(r,n),Zn(n)}}function Zn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vi(d,""),c.flags&=-33);var f=Cm(n);Mh(n,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,A=Cm(n);Lh(n,A,v);break;default:throw Error(t(161))}}catch(R){nt(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function JE(n,r,a){ae=n,Nm(n)}function Nm(n,r,a){for(var c=(n.mode&1)!==0;ae!==null;){var d=ae,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ou;if(!v){var A=d.alternate,R=A!==null&&A.memoizedState!==null||Ft;A=ou;var F=Ft;if(ou=v,(Ft=R)&&!F)for(ae=d;ae!==null;)v=ae,R=v.child,v.tag===22&&v.memoizedState!==null?bm(d):R!==null?(R.return=v,ae=R):bm(d);for(;f!==null;)ae=f,Nm(f),f=f.sibling;ae=d,ou=A,Ft=F}Dm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,ae=f):Dm(n)}}function Dm(n){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ft||au(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:xn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Vp(r,f,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Vp(r,v,a)}break;case 5:var A=r.stateNode;if(a===null&&r.flags&4){a=A;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Wr(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||r.flags&512&&Oh(r)}catch(G){nt(r,r.return,G)}}if(r===n){ae=null;break}if(a=r.sibling,a!==null){a.return=r.return,ae=a;break}ae=r.return}}function Vm(n){for(;ae!==null;){var r=ae;if(r===n){ae=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ae=a;break}ae=r.return}}function bm(n){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{au(4,r)}catch(R){nt(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){nt(r,d,R)}}var f=r.return;try{Oh(r)}catch(R){nt(r,f,R)}break;case 5:var v=r.return;try{Oh(r)}catch(R){nt(r,v,R)}}}catch(R){nt(r,r.return,R)}if(r===n){ae=null;break}var A=r.sibling;if(A!==null){A.return=r.return,ae=A;break}ae=r.return}}var ZE=Math.ceil,lu=Ce.ReactCurrentDispatcher,jh=Ce.ReactCurrentOwner,yn=Ce.ReactCurrentBatchConfig,Oe=0,Tt=null,ht=null,Nt=0,un=0,to=Xr(0),gt=0,Ta=null,es=0,uu=0,Fh=0,Ia=null,Qt=null,Uh=0,no=1/0,Ar=null,cu=!1,zh=null,ri=null,hu=!1,ii=null,du=0,Sa=0,Bh=null,fu=-1,pu=0;function Ht(){return(Oe&6)!==0?Ge():fu!==-1?fu:fu=Ge()}function si(n){return(n.mode&1)===0?1:(Oe&2)!==0&&Nt!==0?Nt&-Nt:LE.transition!==null?(pu===0&&(pu=Ho()),pu):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Ns(n.type)),n)}function kn(n,r,a,c){if(50<Sa)throw Sa=0,Bh=null,Error(t(185));Bi(n,a,c),((Oe&2)===0||n!==Tt)&&(n===Tt&&((Oe&2)===0&&(uu|=a),gt===4&&oi(n,Nt)),Yt(n,c),a===1&&Oe===0&&(r.mode&1)===0&&(no=Ge()+500,Bl&&Zr()))}function Yt(n,r){var a=n.callbackNode;zi(n,r);var c=dr(n,n===Tt?Nt:0);if(c===0)a!==null&&Ss(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Ss(a),r===1)n.tag===0?OE(Lm.bind(null,n)):wp(Lm.bind(null,n)),NE(function(){(Oe&6)===0&&Zr()}),a=null;else{switch(Un(c)){case 1:a=As;break;case 4:a=Bo;break;case 16:a=Mi;break;case 536870912:a=xs;break;default:a=Mi}a=qm(a,Om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Om(n,r){if(fu=-1,pu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=dr(n,n===Tt?Nt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=mu(n,c);else{r=c;var d=Oe;Oe|=2;var f=jm();(Tt!==n||Nt!==r)&&(Ar=null,no=Ge()+500,ns(n,r));do try{nw();break}catch(A){Mm(n,A)}while(!0);oh(),lu.current=f,Oe=d,ht!==null?r=0:(Tt=null,Nt=0,r=gt)}if(r!==0){if(r===2&&(d=qo(n),d!==0&&(c=d,r=$h(n,d))),r===1)throw a=Ta,ns(n,0),oi(n,c),Yt(n,Ge()),a;if(r===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!ew(d)&&(r=mu(n,c),r===2&&(f=qo(n),f!==0&&(c=f,r=$h(n,f))),r===1))throw a=Ta,ns(n,0),oi(n,c),Yt(n,Ge()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:rs(n,Qt,Ar);break;case 3:if(oi(n,c),(c&130023424)===c&&(r=Uh+500-Ge(),10<r)){if(dr(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Qc(rs.bind(null,n,Qt,Ar),r);break}rs(n,Qt,Ar);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-tn(c);f=1<<v,v=r[v],v>d&&(d=v),c&=~f}if(c=d,c=Ge()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ZE(c/1960))-c,10<c){n.timeoutHandle=Qc(rs.bind(null,n,Qt,Ar),c);break}rs(n,Qt,Ar);break;case 5:rs(n,Qt,Ar);break;default:throw Error(t(329))}}}return Yt(n,Ge()),n.callbackNode===a?Om.bind(null,n):null}function $h(n,r){var a=Ia;return n.current.memoizedState.isDehydrated&&(ns(n,r).flags|=256),n=mu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&qh(r)),n}function qh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function ew(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Sn(f(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function oi(n,r){for(r&=~Fh,r&=~uu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-tn(r),c=1<<a;n[a]=-1,r&=~c}}function Lm(n){if((Oe&6)!==0)throw Error(t(327));ro();var r=dr(n,0);if((r&1)===0)return Yt(n,Ge()),null;var a=mu(n,r);if(n.tag!==0&&a===2){var c=qo(n);c!==0&&(r=c,a=$h(n,c))}if(a===1)throw a=Ta,ns(n,0),oi(n,r),Yt(n,Ge()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,rs(n,Qt,Ar),Yt(n,Ge()),null}function Hh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(no=Ge()+500,Bl&&Zr())}}function ts(n){ii!==null&&ii.tag===0&&(Oe&6)===0&&ro();var r=Oe;Oe|=1;var a=yn.transition,c=Ve;try{if(yn.transition=null,Ve=1,n)return n()}finally{Ve=c,yn.transition=a,Oe=r,(Oe&6)===0&&Zr()}}function Wh(){un=to.current,Qe(to)}function ns(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,PE(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ul();break;case 3:Js(),Qe(Wt),Qe(Lt),ph();break;case 5:dh(c);break;case 4:Js();break;case 13:Qe(Je);break;case 19:Qe(Je);break;case 10:ah(c.type._context);break;case 22:case 23:Wh()}a=a.return}if(Tt=n,ht=n=ai(n.current,null),Nt=un=r,gt=0,Ta=null,Fh=uu=es=0,Qt=Ia=null,Xi!==null){for(r=0;r<Xi.length;r++)if(a=Xi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}a.pending=c}Xi=null}return n}function Mm(n,r){do{var a=ht;try{if(oh(),Jl.current=nu,Zl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Zl=!1}if(Zi=0,wt=mt=Ze=null,ga=!1,ya=0,jh.current=null,a===null||a.return===null){gt=1,Ta=r,ht=null;break}e:{var f=n,v=a.return,A=a,R=r;if(r=Nt,A.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,K=A,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ie=lm(v);if(ie!==null){ie.flags&=-257,um(ie,v,A,f,r),ie.mode&1&&am(f,F,r),r=ie,R=F;var le=r.updateQueue;if(le===null){var ue=new Set;ue.add(R),r.updateQueue=ue}else le.add(R);break e}else{if((r&1)===0){am(f,F,r),Gh();break e}R=Error(t(426))}}else if(Xe&&A.mode&1){var ot=lm(v);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),um(ot,v,A,f,r),ih(Zs(R,A));break e}}f=R=Zs(R,A),gt!==4&&(gt=2),Ia===null?Ia=[f]:Ia.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=sm(f,R,r);Dp(f,L);break e;case 1:A=R;var b=f.type,j=f.stateNode;if((f.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(ri===null||!ri.has(j)))){f.flags|=65536,r&=-r,f.lanes|=r;var X=om(f,A,r);Dp(f,X);break e}}f=f.return}while(f!==null)}Um(a)}catch(ce){r=ce,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function jm(){var n=lu.current;return lu.current=nu,n===null?nu:n}function Gh(){(gt===0||gt===3||gt===2)&&(gt=4),Tt===null||(es&268435455)===0&&(uu&268435455)===0||oi(Tt,Nt)}function mu(n,r){var a=Oe;Oe|=2;var c=jm();(Tt!==n||Nt!==r)&&(Ar=null,ns(n,r));do try{tw();break}catch(d){Mm(n,d)}while(!0);if(oh(),Oe=a,lu.current=c,ht!==null)throw Error(t(261));return Tt=null,Nt=0,gt}function tw(){for(;ht!==null;)Fm(ht)}function nw(){for(;ht!==null&&!Li();)Fm(ht)}function Fm(n){var r=$m(n.alternate,n,un);n.memoizedProps=n.pendingProps,r===null?Um(n):ht=r,jh.current=null}function Um(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=KE(a,r,un),a!==null){ht=a;return}}else{if(a=QE(a,r),a!==null){a.flags&=32767,ht=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ht=null;return}}if(r=r.sibling,r!==null){ht=r;return}ht=r=n}while(r!==null);gt===0&&(gt=5)}function rs(n,r,a){var c=Ve,d=yn.transition;try{yn.transition=null,Ve=1,rw(n,r,a,c)}finally{yn.transition=d,Ve=c}return null}function rw(n,r,a,c){do ro();while(ii!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Vc(n,f),n===Tt&&(ht=Tt=null,Nt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||hu||(hu=!0,qm(Mi,function(){return ro(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=yn.transition,yn.transition=null;var v=Ve;Ve=1;var A=Oe;Oe|=4,jh.current=null,XE(n,a),Pm(a,n),IE(Gc),mr=!!Wc,Gc=Wc=null,n.current=a,JE(a),hr(),Oe=A,Ve=v,yn.transition=f}else n.current=a;if(hu&&(hu=!1,ii=n,du=d),f=n.pendingLanes,f===0&&(ri=null),Tl(a.stateNode),Yt(n,Ge()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(cu)throw cu=!1,n=zh,zh=null,n;return(du&1)!==0&&n.tag!==0&&ro(),f=n.pendingLanes,(f&1)!==0?n===Bh?Sa++:(Sa=0,Bh=n):Sa=0,Zr(),null}function ro(){if(ii!==null){var n=Un(du),r=yn.transition,a=Ve;try{if(yn.transition=null,Ve=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,du=0,(Oe&6)!==0)throw Error(t(331));var d=Oe;for(Oe|=4,ae=n.current;ae!==null;){var f=ae,v=f.child;if((ae.flags&16)!==0){var A=f.deletions;if(A!==null){for(var R=0;R<A.length;R++){var F=A[R];for(ae=F;ae!==null;){var K=ae;switch(K.tag){case 0:case 11:case 15:wa(8,K,f)}var Q=K.child;if(Q!==null)Q.return=K,ae=Q;else for(;ae!==null;){K=ae;var G=K.sibling,ie=K.return;if(Am(K),K===F){ae=null;break}if(G!==null){G.return=ie,ae=G;break}ae=ie}}}var le=f.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var ot=ue.sibling;ue.sibling=null,ue=ot}while(ue!==null)}}ae=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,ae=v;else e:for(;ae!==null;){if(f=ae,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:wa(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,ae=L;break e}ae=f.return}}var b=n.current;for(ae=b;ae!==null;){v=ae;var j=v.child;if((v.subtreeFlags&2064)!==0&&j!==null)j.return=v,ae=j;else e:for(v=b;ae!==null;){if(A=ae,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:au(9,A)}}catch(ce){nt(A,A.return,ce)}if(A===v){ae=null;break e}var X=A.sibling;if(X!==null){X.return=A.return,ae=X;break e}ae=A.return}}if(Oe=d,Zr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(ji,n)}catch{}c=!0}return c}finally{Ve=a,yn.transition=r}}return!1}function zm(n,r,a){r=Zs(a,r),r=sm(n,r,1),n=ti(n,r,1),r=Ht(),n!==null&&(Bi(n,1,r),Yt(n,r))}function nt(n,r,a){if(n.tag===3)zm(n,n,a);else for(;r!==null;){if(r.tag===3){zm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=Zs(a,n),n=om(r,n,1),r=ti(r,n,1),n=Ht(),r!==null&&(Bi(r,1,n),Yt(r,n));break}}r=r.return}}function iw(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(Nt&a)===a&&(gt===4||gt===3&&(Nt&130023424)===Nt&&500>Ge()-Uh?ns(n,0):Fh|=a),Yt(n,r)}function Bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var a=Ht();n=Tr(n,r),n!==null&&(Bi(n,r,a),Yt(n,a))}function sw(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Bm(n,a)}function ow(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Bm(n,a)}var $m;$m=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,GE(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Xe&&(r.flags&1048576)!==0&&Tp(r,ql,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;su(n,r),n=r.pendingProps;var d=Hs(r,Lt.current);Xs(r,a),d=yh(null,r,c,n,d,a);var f=_h();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gt(c)?(f=!0,zl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ch(r),d.updater=ru,r.stateNode=d,d._reactInternals=r,Sh(r,c,n,a),r=Rh(null,r,c,!0,f,a)):(r.tag=0,Xe&&f&&eh(r),qt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(su(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=lw(c),n=xn(c,n),d){case 0:r=Ch(null,r,c,n,a);break e;case 1:r=mm(null,r,c,n,a);break e;case 11:r=cm(null,r,c,n,a);break e;case 14:r=hm(null,r,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),Ch(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),mm(n,r,c,d,a);case 3:e:{if(gm(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,Np(n,r),Yl(r,c,null,a);var v=r.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Zs(Error(t(423)),r),r=ym(n,r,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),r),r=ym(n,r,c,a,d);break e}else for(ln=Yr(r.stateNode.containerInfo.firstChild),an=r,Xe=!0,An=null,a=kp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ks(),c===d){r=Sr(n,r,a);break e}qt(n,r,c,a)}r=r.child}return r;case 5:return bp(r),n===null&&rh(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,v=d.children,Kc(c,d)?v=null:f!==null&&Kc(c,f)&&(r.flags|=32),pm(n,r),qt(n,r,v,a),r.child;case 6:return n===null&&rh(r),null;case 13:return _m(n,r,a);case 4:return hh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Qs(r,null,c,a):qt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),cm(n,r,c,d,a);case 7:return qt(n,r,r.pendingProps,a),r.child;case 8:return qt(n,r,r.pendingProps.children,a),r.child;case 12:return qt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,v=d.value,He(Gl,c._currentValue),c._currentValue=v,f!==null)if(Sn(f.value,v)){if(f.children===d.children&&!Wt.current){r=Sr(n,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var A=f.dependencies;if(A!==null){v=f.child;for(var R=A.firstContext;R!==null;){if(R.context===c){if(f.tag===1){R=Ir(-1,a&-a),R.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?R.next=R:(R.next=K.next,K.next=R),F.pending=R}}f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),lh(f.return,a,r),A.lanes|=a;break}R=R.next}}else if(f.tag===10)v=f.type===r.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(t(341));v.lanes|=a,A=v.alternate,A!==null&&(A.lanes|=a),lh(v,a,r),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===r){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}qt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Xs(r,a),d=mn(d),c=c(d),r.flags|=1,qt(n,r,c,a),r.child;case 14:return c=r.type,d=xn(c,r.pendingProps),d=xn(c.type,d),hm(n,r,c,d,a);case 15:return dm(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:xn(c,d),su(n,r),r.tag=1,Gt(c)?(n=!0,zl(r)):n=!1,Xs(r,a),rm(r,c,d),Sh(r,c,d,a),Rh(null,r,c,!0,n,a);case 19:return Em(n,r,a);case 22:return fm(n,r,a)}throw Error(t(156,r.tag))};function qm(n,r){return zo(n,r)}function aw(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new aw(n,r,a,c)}function Kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lw(n){if(typeof n=="function")return Kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===k)return 11;if(n===lt)return 14}return 2}function ai(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gu(n,r,a,c,d,f){var v=2;if(c=n,typeof n=="function")Kh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case P:return is(a.children,d,f,r);case I:v=8,d|=8;break;case C:return n=_n(12,a,r,d|2),n.elementType=C,n.lanes=f,n;case S:return n=_n(13,a,r,d),n.elementType=S,n.lanes=f,n;case je:return n=_n(19,a,r,d),n.elementType=je,n.lanes=f,n;case $e:return yu(a,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:v=10;break e;case N:v=9;break e;case k:v=11;break e;case lt:v=14;break e;case vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(v,a,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function is(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function yu(n,r,a,c){return n=_n(22,n,c,r),n.elementType=$e,n.lanes=a,n.stateNode={isHidden:!1},n}function Qh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Yh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function uw(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xh(n,r,a,c,d,f,v,A,R){return n=new uw(n,r,a,A,R),r===1?(r=1,f===!0&&(r|=8)):r=0,f=_n(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(f),n}function cw(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Hm(n){if(!n)return Jr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return vp(n,a,r)}return r}function Wm(n,r,a,c,d,f,v,A,R){return n=Xh(a,c,!0,n,d,f,v,A,R),n.context=Hm(null),a=n.current,c=Ht(),d=si(a),f=Ir(c,d),f.callback=r??null,ti(a,f,d),n.current.lanes=d,Bi(n,d,c),Yt(n,c),n}function _u(n,r,a,c){var d=r.current,f=Ht(),v=si(d);return a=Hm(a),r.context===null?r.context=a:r.pendingContext=a,r=Ir(f,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ti(d,r,v),n!==null&&(kn(n,d,v,f),Ql(n,d,v)),v}function vu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Jh(n,r){Gm(n,r),(n=n.alternate)&&Gm(n,r)}function hw(){return null}var Km=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zh(n){this._internalRoot=n}Eu.prototype.render=Zh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_u(n,r,null,null)},Eu.prototype.unmount=Zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ts(function(){_u(null,n,null,null)}),r[_r]=null}};function Eu(n){this._internalRoot=n}Eu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Yo();n={blockedOn:null,target:n,priority:r};for(var a=0;a<nn.length&&r!==0&&r<nn[a].priority;a++);nn.splice(a,0,n),a===0&&ks(n)}};function ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function dw(n,r,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var F=vu(v);f.call(F)}}var v=Wm(r,c,n,0,null,!1,!1,"",Qm);return n._reactRootContainer=v,n[_r]=v.current,la(n.nodeType===8?n.parentNode:n),ts(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var A=c;c=function(){var F=vu(R);A.call(F)}}var R=Xh(n,0,!1,null,null,!1,!1,"",Qm);return n._reactRootContainer=R,n[_r]=R.current,la(n.nodeType===8?n.parentNode:n),ts(function(){_u(r,R,a,c)}),R}function Tu(n,r,a,c,d){var f=a._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var A=d;d=function(){var R=vu(v);A.call(R)}}_u(r,v,n,d)}else v=dw(a,r,n,d,c);return vu(v)}Ko=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Me(r.pendingLanes);a!==0&&(Go(r,a|1),Yt(r,Ge()),(Oe&6)===0&&(no=Ge()+500,Zr()))}break;case 13:ts(function(){var c=Tr(n,1);if(c!==null){var d=Ht();kn(c,n,1,d)}}),Jh(n,1)}},Cs=function(n){if(n.tag===13){var r=Tr(n,134217728);if(r!==null){var a=Ht();kn(r,n,134217728,a)}Jh(n,134217728)}},Qo=function(n){if(n.tag===13){var r=si(n),a=Tr(n,r);if(a!==null){var c=Ht();kn(a,n,r,c)}Jh(n,r)}},Yo=function(){return Ve},Xo=function(n,r){var a=Ve;try{return Ve=n,r()}finally{Ve=a}},lr=function(n,r,a){switch(r){case"input":if(Di(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Fl(c);if(!d)throw Error(t(90));Ni(c),Di(c,d)}}}break;case"textarea":cl(n,a);break;case"select":r=a.value,r!=null&&En(n,!!a.multiple,r,!1)}},fl=Hh,pl=ts;var fw={usingClientEntryPoint:!1,Events:[ha,$s,Fl,Fr,Ur,Hh]},Aa={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pw={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wl(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{ji=Iu.inject(pw),en=Iu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(r))throw Error(t(200));return cw(n,r,null,a)},Xt.createRoot=function(n,r){if(!ed(n))throw Error(t(299));var a=!1,c="",d=Km;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Xh(n,1,!1,null,null,a,!1,c,d),n[_r]=r.current,la(n.nodeType===8?n.parentNode:n),new Zh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wl(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return ts(n)},Xt.hydrate=function(n,r,a){if(!wu(r))throw Error(t(200));return Tu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!ed(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",v=Km;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=Wm(r,null,n,1,a??null,d,!1,f,v),n[_r]=r.current,la(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Eu(r)},Xt.render=function(n,r,a){if(!wu(r))throw Error(t(200));return Tu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!wu(n))throw Error(t(40));return n._reactRootContainer?(ts(function(){Tu(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},Xt.unstable_batchedUpdates=Hh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!wu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var rg;function Iw(){if(rg)return rd.exports;rg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rd.exports=Tw(),rd.exports}var ig;function Sw(){if(ig)return Su;ig=1;var i=Iw();return Su.createRoot=i.createRoot,Su.hydrateRoot=i.hydrateRoot,Su}var Aw=Sw();const xw=Uy(Aw);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zy=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=rt.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},y)=>rt.createElement("svg",{ref:y,...Rw,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:zy("lucide",o),...m},[...h.map(([_,T])=>rt.createElement(_,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(i,e)=>{const t=rt.forwardRef(({className:s,...o},u)=>rt.createElement(kw,{ref:u,iconNode:e,className:zy(`lucide-${Cw(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=xt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=xt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=xt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=xt("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=xt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=xt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=xt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=xt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=xt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=xt("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=xt("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=xt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=xt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=xt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=xt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=xt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=xt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=xt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jw=()=>{};var cg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Fw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},$y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,_=y?i[o+2]:0,T=u>>2,x=(u&3)<<4|m>>4;let D=(m&15)<<2|_>>6,B=_&63;y||(B=64,h||(D=64)),s.push(t[T],t[x],t[D],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(By(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Fw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const x=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||x==null)throw new Uw;const D=u<<2|m>>4;if(s.push(D),_!==64){const B=m<<4&240|_>>2;if(s.push(B),x!==64){const Y=_<<6&192|x;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Uw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zw=function(i){const e=By(i);return $y.encodeByteArray(e,!0)},Gu=function(i){return zw(i).replace(/\./g,"")},qy=function(i){try{return $y.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $w=()=>Bw().__FIREBASE_DEFAULTS__,qw=()=>{if(typeof process>"u"||typeof cg>"u")return;const i=cg.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Hw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qy(i[1]);return e&&JSON.parse(e)},dc=()=>{try{return jw()||$w()||qw()||Hw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Hy=i=>{var e,t;return(t=(e=dc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},Ww=i=>{const e=Hy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Wy=()=>{var i;return(i=dc())==null?void 0:i.config},Gy=i=>{var e;return(e=dc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function So(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ky(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Kw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Gu(JSON.stringify(t)),Gu(JSON.stringify(h)),""].join(".")}const Oa={};function Qw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Oa))Oa[e]?i.emulator.push(e):i.prod.push(e);return i}function Yw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let hg=!1;function Qy(i,e){if(typeof window>"u"||typeof document>"u"||!So(window.location.host)||Oa[i]===e||Oa[i]||hg)return;Oa[i]=e;function t(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=Qw().prod.length>0;function h(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function y(D,B){D.setAttribute("width","24"),D.setAttribute("id",B),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function _(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{hg=!0,h()},D}function T(D,B){D.setAttribute("id",B),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function x(){const D=Yw(s),B=t("text"),Y=document.getElementById(B)||document.createElement("span"),J=t("learnmore"),W=document.getElementById(J)||document.createElement("a"),_e=t("preprendIcon"),me=document.getElementById(_e)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const Ae=D.element;m(Ae),T(W,J);const Ce=_();y(me,_e),Ae.append(me,Y,W,Ce),document.body.appendChild(Ae)}u?(Y.innerText="Preview backend disconnected.",me.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(me.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function Jw(){var e;const i=(e=dc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const i=$t();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function r0(){return!Jw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function i0(){try{return typeof indexedDB=="object"}catch{return!1}}function s0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="FirebaseError";class Dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=o0,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?a0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Dr(o,m,s)}}function a0(i,e){return i.replace(l0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const l0=/\{\$([^}]+)}/g;function u0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ls(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(dg(u)&&dg(h)){if(!ls(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function dg(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Na(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function c0(i,e){const t=new h0(i,e);return t.subscribe.bind(t)}class h0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");d0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ad),o.error===void 0&&(o.error=ad),o.complete===void 0&&(o.complete=ad);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function ad(){}/**
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
 */function At(i){return i&&i._delegate?i._delegate:i}class us{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const os="[DEFAULT]";/**
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
 */class f0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Gw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m0(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:p0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p0(i){return i===os?void 0:i}function m0(i){return i.instantiationMode==="EAGER"}/**
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
 */class g0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new f0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const y0={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},_0=Pe.INFO,v0={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},E0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=v0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=_0,this._logHandler=E0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const w0=(i,e)=>e.some(t=>i instanceof t);let fg,pg;function T0(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I0(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yy=new WeakMap,Ed=new WeakMap,Xy=new WeakMap,ld=new WeakMap,Qd=new WeakMap;function S0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(mi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Yy.set(t,i)}).catch(()=>{}),Qd.set(e,i),e}function A0(i){if(Ed.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Ed.set(i,e)}let wd={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Ed.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Xy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function x0(i){wd=i(wd)}function C0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(ud(this),e,...t);return Xy.set(s,e.sort?e.sort():[e]),mi(s)}:I0().includes(i)?function(...e){return i.apply(ud(this),e),mi(Yy.get(this))}:function(...e){return mi(i.apply(ud(this),e))}}function R0(i){return typeof i=="function"?C0(i):(i instanceof IDBTransaction&&A0(i),w0(i,T0())?new Proxy(i,wd):i)}function mi(i){if(i instanceof IDBRequest)return S0(i);if(ld.has(i))return ld.get(i);const e=R0(i);return e!==i&&(ld.set(i,e),Qd.set(e,i)),e}const ud=i=>Qd.get(i);function k0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=mi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(mi(h.result),y.oldVersion,y.newVersion,mi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const P0=["get","getKey","getAll","getAllKeys","count"],N0=["put","add","delete","clear"],cd=new Map;function mg(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=N0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||P0.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&y.done]))[0]};return cd.set(e,u),u}x0(i=>({...i,get:(e,t,s)=>mg(e,t)||i.get(e,t,s),has:(e,t)=>!!mg(e,t)||i.has(e,t)}));/**
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
 */class D0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(V0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function V0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",gg="0.14.6";/**
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
 */const Rr=new Kd("@firebase/app"),b0="@firebase/app-compat",O0="@firebase/analytics-compat",L0="@firebase/analytics",M0="@firebase/app-check-compat",j0="@firebase/app-check",F0="@firebase/auth",U0="@firebase/auth-compat",z0="@firebase/database",B0="@firebase/data-connect",$0="@firebase/database-compat",q0="@firebase/functions",H0="@firebase/functions-compat",W0="@firebase/installations",G0="@firebase/installations-compat",K0="@firebase/messaging",Q0="@firebase/messaging-compat",Y0="@firebase/performance",X0="@firebase/performance-compat",J0="@firebase/remote-config",Z0="@firebase/remote-config-compat",eT="@firebase/storage",tT="@firebase/storage-compat",nT="@firebase/firestore",rT="@firebase/ai",iT="@firebase/firestore-compat",sT="firebase",oT="12.6.0";/**
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
 */const Id="[DEFAULT]",aT={[Td]:"fire-core",[b0]:"fire-core-compat",[L0]:"fire-analytics",[O0]:"fire-analytics-compat",[j0]:"fire-app-check",[M0]:"fire-app-check-compat",[F0]:"fire-auth",[U0]:"fire-auth-compat",[z0]:"fire-rtdb",[B0]:"fire-data-connect",[$0]:"fire-rtdb-compat",[q0]:"fire-fn",[H0]:"fire-fn-compat",[W0]:"fire-iid",[G0]:"fire-iid-compat",[K0]:"fire-fcm",[Q0]:"fire-fcm-compat",[Y0]:"fire-perf",[X0]:"fire-perf-compat",[J0]:"fire-rc",[Z0]:"fire-rc-compat",[eT]:"fire-gcs",[tT]:"fire-gcs-compat",[nT]:"fire-fst",[iT]:"fire-fst-compat",[rT]:"fire-vertex","fire-js":"fire-js",[sT]:"fire-js-all"};/**
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
 */const Ku=new Map,lT=new Map,Sd=new Map;function yg(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function go(i){const e=i.name;if(Sd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,i);for(const t of Ku.values())yg(t,i);for(const t of lT.values())yg(t,i);return!0}function Yd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Pn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const uT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new Xa("app","Firebase",uT);/**
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
 */class cT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=oT;function Jy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:Id,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=Wy()),!t)throw gi.create("no-options");const u=Ku.get(o);if(u){if(ls(t,u.options)&&ls(s,u.config))return u;throw gi.create("duplicate-app",{appName:o})}const h=new g0(o);for(const y of Sd.values())h.addComponent(y);const m=new cT(t,s,h);return Ku.set(o,m),m}function Zy(i=Id){const e=Ku.get(i);if(!e&&i===Id&&Wy())return Jy();if(!e)throw gi.create("no-app",{appName:i});return e}function yi(i,e,t){let s=aT[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(h.join(" "));return}go(new us(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hT="firebase-heartbeat-database",dT=1,za="firebase-heartbeat-store";let hd=null;function e_(){return hd||(hd=k0(hT,dT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(za)}catch(t){console.warn(t)}}}}).catch(i=>{throw gi.create("idb-open",{originalErrorMessage:i.message})})),hd}async function fT(i){try{const t=(await e_()).transaction(za),s=await t.objectStore(za).get(t_(i));return await t.done,s}catch(e){if(e instanceof Dr)Rr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function _g(i,e){try{const s=(await e_()).transaction(za,"readwrite");await s.objectStore(za).put(e,t_(i)),await s.done}catch(t){if(t instanceof Dr)Rr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function t_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const pT=1024,mT=30;class gT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _T(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=vg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>mT){const h=vT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vg(),{heartbeatsToSend:s,unsentEntries:o}=yT(this._heartbeatsCache.heartbeats),u=Gu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function vg(){return new Date().toISOString().substring(0,10)}function yT(i,e=pT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Eg(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class _T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return i0()?s0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _g(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eg(i){return Gu(JSON.stringify({version:2,heartbeats:i})).length}function vT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function ET(i){go(new us("platform-logger",e=>new D0(e),"PRIVATE")),go(new us("heartbeat",e=>new gT(e),"PRIVATE")),yi(Td,gg,i),yi(Td,gg,"esm2020"),yi("fire-js","")}ET("");var wT="firebase",TT="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi(wT,TT,"app");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,n_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function C(){}C.prototype=I.prototype,P.F=I.prototype,P.prototype=new C,P.prototype.constructor=P,P.D=function(V,N,k){for(var S=Array(arguments.length-2),je=2;je<arguments.length;je++)S[je-2]=arguments[je];return I.prototype[N].apply(V,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,C){C||(C=0);const V=Array(16);if(typeof I=="string")for(var N=0;N<16;++N)V[N]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(N=0;N<16;++N)V[N]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=P.g[0],C=P.g[1],N=P.g[2];let k=P.g[3],S;S=I+(k^C&(N^k))+V[0]+3614090360&4294967295,I=C+(S<<7&4294967295|S>>>25),S=k+(N^I&(C^N))+V[1]+3905402710&4294967295,k=I+(S<<12&4294967295|S>>>20),S=N+(C^k&(I^C))+V[2]+606105819&4294967295,N=k+(S<<17&4294967295|S>>>15),S=C+(I^N&(k^I))+V[3]+3250441966&4294967295,C=N+(S<<22&4294967295|S>>>10),S=I+(k^C&(N^k))+V[4]+4118548399&4294967295,I=C+(S<<7&4294967295|S>>>25),S=k+(N^I&(C^N))+V[5]+1200080426&4294967295,k=I+(S<<12&4294967295|S>>>20),S=N+(C^k&(I^C))+V[6]+2821735955&4294967295,N=k+(S<<17&4294967295|S>>>15),S=C+(I^N&(k^I))+V[7]+4249261313&4294967295,C=N+(S<<22&4294967295|S>>>10),S=I+(k^C&(N^k))+V[8]+1770035416&4294967295,I=C+(S<<7&4294967295|S>>>25),S=k+(N^I&(C^N))+V[9]+2336552879&4294967295,k=I+(S<<12&4294967295|S>>>20),S=N+(C^k&(I^C))+V[10]+4294925233&4294967295,N=k+(S<<17&4294967295|S>>>15),S=C+(I^N&(k^I))+V[11]+2304563134&4294967295,C=N+(S<<22&4294967295|S>>>10),S=I+(k^C&(N^k))+V[12]+1804603682&4294967295,I=C+(S<<7&4294967295|S>>>25),S=k+(N^I&(C^N))+V[13]+4254626195&4294967295,k=I+(S<<12&4294967295|S>>>20),S=N+(C^k&(I^C))+V[14]+2792965006&4294967295,N=k+(S<<17&4294967295|S>>>15),S=C+(I^N&(k^I))+V[15]+1236535329&4294967295,C=N+(S<<22&4294967295|S>>>10),S=I+(N^k&(C^N))+V[1]+4129170786&4294967295,I=C+(S<<5&4294967295|S>>>27),S=k+(C^N&(I^C))+V[6]+3225465664&4294967295,k=I+(S<<9&4294967295|S>>>23),S=N+(I^C&(k^I))+V[11]+643717713&4294967295,N=k+(S<<14&4294967295|S>>>18),S=C+(k^I&(N^k))+V[0]+3921069994&4294967295,C=N+(S<<20&4294967295|S>>>12),S=I+(N^k&(C^N))+V[5]+3593408605&4294967295,I=C+(S<<5&4294967295|S>>>27),S=k+(C^N&(I^C))+V[10]+38016083&4294967295,k=I+(S<<9&4294967295|S>>>23),S=N+(I^C&(k^I))+V[15]+3634488961&4294967295,N=k+(S<<14&4294967295|S>>>18),S=C+(k^I&(N^k))+V[4]+3889429448&4294967295,C=N+(S<<20&4294967295|S>>>12),S=I+(N^k&(C^N))+V[9]+568446438&4294967295,I=C+(S<<5&4294967295|S>>>27),S=k+(C^N&(I^C))+V[14]+3275163606&4294967295,k=I+(S<<9&4294967295|S>>>23),S=N+(I^C&(k^I))+V[3]+4107603335&4294967295,N=k+(S<<14&4294967295|S>>>18),S=C+(k^I&(N^k))+V[8]+1163531501&4294967295,C=N+(S<<20&4294967295|S>>>12),S=I+(N^k&(C^N))+V[13]+2850285829&4294967295,I=C+(S<<5&4294967295|S>>>27),S=k+(C^N&(I^C))+V[2]+4243563512&4294967295,k=I+(S<<9&4294967295|S>>>23),S=N+(I^C&(k^I))+V[7]+1735328473&4294967295,N=k+(S<<14&4294967295|S>>>18),S=C+(k^I&(N^k))+V[12]+2368359562&4294967295,C=N+(S<<20&4294967295|S>>>12),S=I+(C^N^k)+V[5]+4294588738&4294967295,I=C+(S<<4&4294967295|S>>>28),S=k+(I^C^N)+V[8]+2272392833&4294967295,k=I+(S<<11&4294967295|S>>>21),S=N+(k^I^C)+V[11]+1839030562&4294967295,N=k+(S<<16&4294967295|S>>>16),S=C+(N^k^I)+V[14]+4259657740&4294967295,C=N+(S<<23&4294967295|S>>>9),S=I+(C^N^k)+V[1]+2763975236&4294967295,I=C+(S<<4&4294967295|S>>>28),S=k+(I^C^N)+V[4]+1272893353&4294967295,k=I+(S<<11&4294967295|S>>>21),S=N+(k^I^C)+V[7]+4139469664&4294967295,N=k+(S<<16&4294967295|S>>>16),S=C+(N^k^I)+V[10]+3200236656&4294967295,C=N+(S<<23&4294967295|S>>>9),S=I+(C^N^k)+V[13]+681279174&4294967295,I=C+(S<<4&4294967295|S>>>28),S=k+(I^C^N)+V[0]+3936430074&4294967295,k=I+(S<<11&4294967295|S>>>21),S=N+(k^I^C)+V[3]+3572445317&4294967295,N=k+(S<<16&4294967295|S>>>16),S=C+(N^k^I)+V[6]+76029189&4294967295,C=N+(S<<23&4294967295|S>>>9),S=I+(C^N^k)+V[9]+3654602809&4294967295,I=C+(S<<4&4294967295|S>>>28),S=k+(I^C^N)+V[12]+3873151461&4294967295,k=I+(S<<11&4294967295|S>>>21),S=N+(k^I^C)+V[15]+530742520&4294967295,N=k+(S<<16&4294967295|S>>>16),S=C+(N^k^I)+V[2]+3299628645&4294967295,C=N+(S<<23&4294967295|S>>>9),S=I+(N^(C|~k))+V[0]+4096336452&4294967295,I=C+(S<<6&4294967295|S>>>26),S=k+(C^(I|~N))+V[7]+1126891415&4294967295,k=I+(S<<10&4294967295|S>>>22),S=N+(I^(k|~C))+V[14]+2878612391&4294967295,N=k+(S<<15&4294967295|S>>>17),S=C+(k^(N|~I))+V[5]+4237533241&4294967295,C=N+(S<<21&4294967295|S>>>11),S=I+(N^(C|~k))+V[12]+1700485571&4294967295,I=C+(S<<6&4294967295|S>>>26),S=k+(C^(I|~N))+V[3]+2399980690&4294967295,k=I+(S<<10&4294967295|S>>>22),S=N+(I^(k|~C))+V[10]+4293915773&4294967295,N=k+(S<<15&4294967295|S>>>17),S=C+(k^(N|~I))+V[1]+2240044497&4294967295,C=N+(S<<21&4294967295|S>>>11),S=I+(N^(C|~k))+V[8]+1873313359&4294967295,I=C+(S<<6&4294967295|S>>>26),S=k+(C^(I|~N))+V[15]+4264355552&4294967295,k=I+(S<<10&4294967295|S>>>22),S=N+(I^(k|~C))+V[6]+2734768916&4294967295,N=k+(S<<15&4294967295|S>>>17),S=C+(k^(N|~I))+V[13]+1309151649&4294967295,C=N+(S<<21&4294967295|S>>>11),S=I+(N^(C|~k))+V[4]+4149444226&4294967295,I=C+(S<<6&4294967295|S>>>26),S=k+(C^(I|~N))+V[11]+3174756917&4294967295,k=I+(S<<10&4294967295|S>>>22),S=N+(I^(k|~C))+V[2]+718787259&4294967295,N=k+(S<<15&4294967295|S>>>17),S=C+(k^(N|~I))+V[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(N+(S<<21&4294967295|S>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+k&4294967295}s.prototype.v=function(P,I){I===void 0&&(I=P.length);const C=I-this.blockSize,V=this.C;let N=this.h,k=0;for(;k<I;){if(N==0)for(;k<=C;)o(this,P,k),k+=this.blockSize;if(typeof P=="string"){for(;k<I;)if(V[N++]=P.charCodeAt(k++),N==this.blockSize){o(this,V),N=0;break}}else for(;k<I;)if(V[N++]=P[k++],N==this.blockSize){o(this,V),N=0;break}}this.h=N,this.o+=I},s.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;I=this.o*8;for(var C=P.length-8;C<P.length;++C)P[C]=I&255,I/=256;for(this.v(P),P=Array(16),I=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)P[I++]=this.g[C]>>>V&255;return P};function u(P,I){var C=m;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=I(P)}function h(P,I){this.h=I;const C=[];let V=!0;for(let N=P.length-1;N>=0;N--){const k=P[N]|0;V&&k==I||(C[N]=k,V=!1)}this.g=C}var m={};function y(P){return-128<=P&&P<128?u(P,function(I){return new h([I|0],I<0?-1:0)}):new h([P|0],P<0?-1:0)}function _(P){if(isNaN(P)||!isFinite(P))return x;if(P<0)return W(_(-P));const I=[];let C=1;for(let V=0;P>=C;V++)I[V]=P/C|0,C*=4294967296;return new h(I,0)}function T(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return W(T(P.substring(1),I));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=_(Math.pow(I,8));let V=x;for(let k=0;k<P.length;k+=8){var N=Math.min(8,P.length-k);const S=parseInt(P.substring(k,k+N),I);N<8?(N=_(Math.pow(I,N)),V=V.j(N).add(_(S))):(V=V.j(C),V=V.add(_(S)))}return V}var x=y(0),D=y(1),B=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-W(this).m();let P=0,I=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);P+=(V>=0?V:4294967296+V)*I,I*=4294967296}return P},i.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(Y(this))return"0";if(J(this))return"-"+W(this).toString(P);const I=_(Math.pow(P,6));var C=this;let V="";for(;;){const N=Ce(C,I).g;C=_e(C,N.j(I));let k=((C.g.length>0?C.g[0]:C.h)>>>0).toString(P);if(C=N,Y(C))return k+V;for(;k.length<6;)k="0"+k;V=k+V}},i.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function Y(P){if(P.h!=0)return!1;for(let I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function J(P){return P.h==-1}i.l=function(P){return P=_e(this,P),J(P)?-1:Y(P)?0:1};function W(P){const I=P.g.length,C=[];for(let V=0;V<I;V++)C[V]=~P.g[V];return new h(C,~P.h).add(D)}i.abs=function(){return J(this)?W(this):this},i.add=function(P){const I=Math.max(this.g.length,P.g.length),C=[];let V=0;for(let N=0;N<=I;N++){let k=V+(this.i(N)&65535)+(P.i(N)&65535),S=(k>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);V=S>>>16,k&=65535,S&=65535,C[N]=S<<16|k}return new h(C,C[C.length-1]&-2147483648?-1:0)};function _e(P,I){return P.add(W(I))}i.j=function(P){if(Y(this)||Y(P))return x;if(J(this))return J(P)?W(this).j(W(P)):W(W(this).j(P));if(J(P))return W(this.j(W(P)));if(this.l(B)<0&&P.l(B)<0)return _(this.m()*P.m());const I=this.g.length+P.g.length,C=[];for(var V=0;V<2*I;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let N=0;N<P.g.length;N++){const k=this.i(V)>>>16,S=this.i(V)&65535,je=P.i(N)>>>16,lt=P.i(N)&65535;C[2*V+2*N]+=S*lt,me(C,2*V+2*N),C[2*V+2*N+1]+=k*lt,me(C,2*V+2*N+1),C[2*V+2*N+1]+=S*je,me(C,2*V+2*N+1),C[2*V+2*N+2]+=k*je,me(C,2*V+2*N+2)}for(P=0;P<I;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=I;P<2*I;P++)C[P]=0;return new h(C,0)};function me(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function Ae(P,I){this.g=P,this.h=I}function Ce(P,I){if(Y(I))throw Error("division by zero");if(Y(P))return new Ae(x,x);if(J(P))return I=Ce(W(P),I),new Ae(W(I.g),W(I.h));if(J(I))return I=Ce(P,W(I)),new Ae(W(I.g),I.h);if(P.g.length>30){if(J(P)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var C=D,V=I;V.l(P)<=0;)C=Be(C),V=Be(V);var N=Re(C,1),k=Re(V,1);for(V=Re(V,2),C=Re(C,2);!Y(V);){var S=k.add(V);S.l(P)<=0&&(N=N.add(C),k=S),V=Re(V,1),C=Re(C,1)}return I=_e(P,N.j(I)),new Ae(N,I)}for(N=x;P.l(I)>=0;){for(C=Math.max(1,Math.floor(P.m()/I.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),k=_(C),S=k.j(I);J(S)||S.l(P)>0;)C-=V,k=_(C),S=k.j(I);Y(k)&&(k=D),N=N.add(k),P=_e(P,S)}return new Ae(N,P)}i.B=function(P){return Ce(this,P).h},i.and=function(P){const I=Math.max(this.g.length,P.g.length),C=[];for(let V=0;V<I;V++)C[V]=this.i(V)&P.i(V);return new h(C,this.h&P.h)},i.or=function(P){const I=Math.max(this.g.length,P.g.length),C=[];for(let V=0;V<I;V++)C[V]=this.i(V)|P.i(V);return new h(C,this.h|P.h)},i.xor=function(P){const I=Math.max(this.g.length,P.g.length),C=[];for(let V=0;V<I;V++)C[V]=this.i(V)^P.i(V);return new h(C,this.h^P.h)};function Be(P){const I=P.g.length+1,C=[];for(let V=0;V<I;V++)C[V]=P.i(V)<<1|P.i(V-1)>>>31;return new h(C,P.h)}function Re(P,I){const C=I>>5;I%=32;const V=P.g.length-C,N=[];for(let k=0;k<V;k++)N[k]=I>0?P.i(k+C)>>>I|P.i(k+C+1)<<32-I:P.i(k+C);return new h(N,P.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,n_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=T,_i=h}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r_,Da,i_,Mu,Ad,s_,o_,a_;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cu=="object"&&Cu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in g))break e;g=g[M]}l=l[l.length-1],w=g[l],p=p(w),p!=w&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}o("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(l){return l||function(p){var g=[],w;for(w in p)Object.prototype.hasOwnProperty.call(p,w)&&g.push([w,p[w]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function _(l,p,g){return _=y,_.apply(null,arguments)}function T(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function x(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(w,M,U){for(var ee=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)ee[Ie-2]=arguments[Ie];return p.prototype[M].apply(w,ee)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function B(l){const p=l.length;if(p>0){const g=Array(p);for(let w=0;w<p;w++)g[w]=l[w];return g}return[]}function Y(l,p){for(let w=1;w<arguments.length;w++){const M=arguments[w];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const U=M.length||0;l.length=g+U;for(let ee=0;ee<U;ee++)l[g+ee]=M[ee]}else l.push(M)}}class J{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function W(l){h.setTimeout(()=>{throw l},0)}function _e(){var l=P;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class me{constructor(){this.h=this.g=null}add(p,g){const w=Ae.get();w.set(p,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Ae=new J(()=>new Ce,l=>l.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,Re=!1,P=new me,I=()=>{const l=Promise.resolve(void 0);Be=()=>{l.then(C)}};function C(){for(var l;l=_e();){try{l.h.call(l.g)}catch(g){W(g)}var p=Ae;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Re=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function S(l){return/^[\s\xa0]*$/.test(l)}function je(l,p){N.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}x(je,N),je.prototype.init=function(l,p){const g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var lt="closure_listenable_"+(Math.random()*1e6|0),vt=0;function $e(l,p,g,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!w,this.ha=M,this.key=++vt,this.da=this.fa=!1}function te(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function he(l,p,g){for(const w in l)p.call(g,l[w],w,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(l,p){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)l[g]=w[g];for(let U=0;U<H.length;U++)g=H[U],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,p,g,w,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const ee=z(l,p,w,M);return ee>-1?(p=l[ee],g||(p.fa=!1)):(p=new $e(p,this.src,U,!!w,M),p.fa=g,l.push(p)),p};function xe(l,p){const g=p.type;if(g in l.g){var w=l.g[g],M=Array.prototype.indexOf.call(w,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(w,M,1),U&&(te(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function z(l,p,g,w){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==w)return M}return-1}var se="closure_lm_"+(Math.random()*1e6|0),Z={};function Ue(l,p,g,w,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)Ue(l,p[U],g,w,M);return null}return g=Vo(g),l&&l[lt]?l.J(p,g,m(w)?!!w.capture:!1,M):Ct(l,p,g,!1,w,M)}function Ct(l,p,g,w,M,U){if(!p)throw Error("Invalid event type");const ee=m(M)?!!M.capture:!!M;let Ie=_s(l);if(Ie||(l[se]=Ie=new Ee(l)),g=Ie.add(p,g,w,ee,U),g.proxy)return g;if(w=Vr(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)k||(M=ee),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(Et(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Vr(){function l(g){return p.call(l.src,l.listener,g)}const p=ul;return l}function Ni(l,p,g,w,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)Ni(l,p[U],g,w,M);else w=m(w)?!!w.capture:!!w,g=Vo(g),l&&l[lt]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=z(p,g,w,M),g>-1&&(te(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=_s(l))&&(p=l.g[p.toString()],l=-1,p&&(l=z(p,g,w,M)),(g=l>-1?p[l]:null)&&On(g))}function On(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[lt])xe(p.i,l);else{var g=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(g,w,l.capture):p.detachEvent?p.detachEvent(Et(g),w):p.addListener&&p.removeListener&&p.removeListener(w),(g=_s(p))?(xe(g,l),g.h==0&&(g.src=null,p[se]=null)):te(l)}}}function Et(l){return l in Z?Z[l]:Z[l]="on"+l}function ul(l,p){if(l.da)l=!0;else{p=new je(p,this);const g=l.listener,w=l.ha||l.src;l.fa&&On(l),l=g.call(w,p)}return l}function _s(l){return l=l[se],l instanceof Ee?l:null}var Di="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vo(l){return typeof l=="function"?l:(l[Di]||(l[Di]=function(p){return l.handleEvent(p)}),l[Di])}function ut(){V.call(this),this.i=new Ee(this),this.M=this,this.G=null}x(ut,V),ut.prototype[lt]=!0,ut.prototype.removeEventListener=function(l,p,g,w){Ni(this,l,p,g,w)};function it(l,p){var g,w=l.G;if(w)for(g=[];w;w=w.G)g.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new N(p,l);else if(p instanceof N)p.target=p.target||l;else{var M=p;p=new N(w,l),ve(p,M)}M=!0;let U,ee;if(g)for(ee=g.length-1;ee>=0;ee--)U=p.g=g[ee],M=En(U,w,!0,p)&&M;if(U=p.g=l,M=En(U,w,!0,p)&&M,M=En(U,w,!1,p)&&M,g)for(ee=0;ee<g.length;ee++)U=p.g=g[ee],M=En(U,w,!1,p)&&M}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let w=0;w<g.length;w++)te(g[w]);delete l.g[p],l.h--}}this.G=null},ut.prototype.J=function(l,p,g,w){return this.i.add(String(l),p,!1,g,w)},ut.prototype.K=function(l,p,g,w){return this.i.add(String(l),p,!0,g,w)};function En(l,p,g,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const ee=p[U];if(ee&&!ee.da&&ee.capture==g){const Ie=ee.listener,st=ee.ha||ee.src;ee.fa&&xe(l.i,ee),M=Ie.call(st,w)!==!1&&M}}return M&&!w.defaultPrevented}function bo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Oo(l){l.g=bo(()=>{l.g=null,l.i&&(l.i=!1,Oo(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class cl extends V{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Oo(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function br(l){V.call(this),this.h=l,this.g={}}x(br,V);var Lo=[];function vs(l){he(l.g,function(p,g){this.g.hasOwnProperty(g)&&On(p)},l),l.g={}}br.prototype.N=function(){br.Z.N.call(this),vs(this)},br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=h.JSON.stringify,hl=h.JSON.parse,Vi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function Lr(){}function dl(){}var Mr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Es(){N.call(this,"d")}x(Es,N);function Mo(){N.call(this,"c")}x(Mo,N);var wn={},ws=null;function jr(){return ws=ws||new ut}wn.Ia="serverreachability";function Ts(l){N.call(this,wn.Ia,l)}x(Ts,N);function lr(l){const p=jr();it(p,new Ts(p))}wn.STAT_EVENT="statevent";function ur(l,p){N.call(this,wn.STAT_EVENT,l),this.stat=p}x(ur,N);function tt(l){const p=jr();it(p,new ur(p,l))}wn.Ja="timingevent";function jo(l,p){N.call(this,wn.Ja,l),this.size=p}x(jo,N);function Fr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Ur(){this.g=!0}Ur.prototype.ua=function(){this.g=!1};function fl(l,p,g,w,M,U){l.info(function(){if(l.g)if(U){var ee="",Ie=U.split("&");for(let ze=0;ze<Ie.length;ze++){var st=Ie[ze].split("=");if(st.length>1){const ct=st[0];st=st[1];const on=ct.split("_");ee=on.length>=2&&on[1]=="type"?ee+(ct+"="+st+"&"):ee+(ct+"=redacted&")}}}else ee=null;else ee=U;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+g+`
`+ee})}function pl(l,p,g,w,M,U,ee){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+g+`
`+U+" "+ee})}function Ln(l,p,g,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+bi(l,g)+(w?" "+w:"")})}function ml(l,p){l.info(function(){return"TIMEOUT: "+p})}Ur.prototype.info=function(){};function bi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var w=g[1];if(Array.isArray(w)&&!(w.length<1)){var M=w[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ee=1;ee<w.length;ee++)w[ee]=""}}}}return Or(U)}catch{return p}}var zr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Br={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gl;function cr(){}x(cr,Lr),cr.prototype.g=function(){return new XMLHttpRequest},gl=new cr;function Mn(l){return encodeURIComponent(String(l))}function Is(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function hn(l,p,g,w){this.j=l,this.i=p,this.l=g,this.S=w||1,this.V=new br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var _l={},Fo={};function Tn(l,p,g){l.M=1,l.A=dr(dn(p)),l.u=g,l.R=!0,Uo(l,null)}function Uo(l,p){l.F=Date.now(),Oi(l),l.B=dn(l.A);var g=l.B,w=l.S;Array.isArray(w)||(w=[String(w)]),Yo(g.i,"t",w),l.C=0,g=l.j.L,l.h=new yl,l.g=Rl(l.j,g?p:null,!l.u),l.P>0&&(l.O=new cl(_(l.Y,l,l.g),l.P)),p=l.V,g=l.g,w=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(Lo[0]=M.toString()),M=Lo);for(let U=0;U<M.length;U++){const ee=Ue(g,M[U],w||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),lr(),fl(l.i,l.v,l.B,l.l,l.S,l.u)}hn.prototype.ba=function(l){l=l.target;const p=this.O;p&&qn(l)==3?p.j():this.Y(l)},hn.prototype.Y=function(l){try{if(l==this.g)e:{const Ie=qn(this.g),st=this.g.ya(),ze=this.g.ca();if(!(Ie<3)&&(Ie!=3||this.g&&(this.h.h||this.g.la()||xl(this.g)))){this.K||Ie!=4||st==7||(st==8||ze<=0?lr(3):lr(2)),Ss(this);var p=this.g.ca();this.X=p;var g=vl(this);if(this.o=p==200,pl(this.i,this.v,this.B,this.l,this.S,Ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var w,M=this.g;if((w=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(w)){var U=w;break t}}U=null}if(l=U)Ln(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,l);else{this.o=!1,this.m=3,tt(12),hr(this),Li(this);break e}}if(this.R){l=!0;let ct;for(;!this.K&&this.C<g.length;)if(ct=wl(this,g),ct==Fo){Ie==4&&(this.m=4,tt(14),l=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==_l){this.m=4,tt(15),Ln(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Ln(this.i,this.l,ct,null),Ge(this,ct);if(El(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||g.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)Ln(this.i,this.l,g,"[Invalid Chunked Response]"),hr(this),Li(this);else if(g.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Hi(ee),ee.P=!0,tt(11))}}else Ln(this.i,this.l,g,null),Ge(this,g);Ie==4&&hr(this),this.o&&!this.K&&(Ie==4?bs(this.j,this):(this.o=!1,Oi(this)))}else Jo(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),hr(this),Li(this)}}}catch{}finally{}};function vl(l){if(!El(l))return l.g.la();const p=xl(l.g);if(p==="")return"";let g="";const w=p.length,M=qn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return hr(l),Li(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<w;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(M&&U==w-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function El(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function wl(l,p){var g=l.C,w=p.indexOf(`
`,g);return w==-1?Fo:(g=Number(p.substring(g,w)),isNaN(g)?_l:(w+=1,w+g>p.length?Fo:(p=p.slice(w,w+g),l.C=w+g,p)))}hn.prototype.cancel=function(){this.K=!0,hr(this)};function Oi(l){l.T=Date.now()+l.H,zo(l,l.H)}function zo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Fr(_(l.aa,l),p)}function Ss(l){l.D&&(h.clearTimeout(l.D),l.D=null)}hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(ml(this.i,this.B),this.M!=2&&(lr(),tt(17)),hr(this),this.m=2,Li(this)):zo(this,this.T-l)};function Li(l){l.j.I==0||l.K||bs(l.j,l)}function hr(l){Ss(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,vs(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function Ge(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||$o(g.h,l))){if(!l.L&&$o(g.h,l)&&g.I==3){try{var w=g.Ba.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Vs(g),rn(g);else break e;Gn(g),tt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Fr(_(g.Va,g),6e3));Mi(g.h)<=1&&g.ta&&(g.ta=void 0)}else sn(g,11)}else if((l.L||g.g==l)&&Vs(g),!S(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let ze=M[p];const ct=ze[0];if(!(ct<=g.K))if(g.K=ct,ze=ze[1],g.I==2)if(ze[0]=="c"){g.M=ze[1],g.ba=ze[2];const on=ze[3];on!=null&&(g.ka=on,g.j.info("VER="+g.ka));const yr=ze[4];yr!=null&&(g.za=yr,g.j.info("SVER="+g.za));const Kn=ze[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(w=1.5*Kn,g.O=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const Qn=l.g;if(Qn){const Ms=Qn.g?Qn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var U=w.h;U.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(xs(U,U.h),U.h=null))}if(w.G){const ta=Qn.g?Qn.g.getResponseHeader("X-HTTP-Session-Id"):null;ta&&(w.wa=ta,Me(w.J,w.G,ta))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),w=g;var ee=l;if(w.na=ea(w,w.L?w.ba:null,w.W),ee.L){ji(w.h,ee);var Ie=ee,st=w.O;st&&(Ie.H=st),Ie.D&&(Ss(Ie),Oi(Ie)),w.g=ee}else Ot(w);g.i.length>0&&gr(g)}else ze[0]!="stop"&&ze[0]!="close"||sn(g,7);else g.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?sn(g,7):Ns(g):ze[0]!="noop"&&g.l&&g.l.qa(ze),g.A=0)}}lr(4)}catch{}}var Dc=class{constructor(l,p){this.g=l,this.map=p}};function As(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Mi(l){return l.h?1:l.g?l.g.size:0}function $o(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function xs(l,p){l.g?l.g.add(p):l.h=p}function ji(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}As.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function en(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return B(l.i)}var Tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const w=l[g].indexOf("=");let M,U=null;w>=0?(M=l[g].substring(0,w),U=l[g].substring(w+1)):M=l[g],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function jn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof jn?(this.l=l.l,Fi(this,l.j),this.o=l.o,this.g=l.g,Fn(this,l.u),this.h=l.h,$r(this,Xo(l.i)),this.m=l.m):l&&(p=String(l).match(Tl))?(this.l=!1,Fi(this,p[1]||"",!0),this.o=Ui(p[2]||""),this.g=Ui(p[3]||"",!0),Fn(this,p[4]),this.h=Ui(p[5]||"",!0),$r(this,p[6]||"",!0),this.m=Ui(p[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}jn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(zi(p,Ho,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(zi(p,Ho,!0),"@"),l.push(Mn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(zi(g,g.charAt(0)=="/"?Bi:Wo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",zi(g,Go)),l.join("")},jn.prototype.resolve=function(l){const p=dn(this);let g=!!l.j;g?Fi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var w=l.h;if(g)Fn(p,l.u);else if(g=!!l.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var M=p.h.lastIndexOf("/");M!=-1&&(w=p.h.slice(0,M+1)+w)}if(M=w,M==".."||M==".")w="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){w=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let ee=0;ee<M.length;){const Ie=M[ee++];Ie=="."?w&&ee==M.length&&U.push(""):Ie==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),w&&ee==M.length&&U.push("")):(U.push(Ie),w=!0)}w=U.join("/")}else w=M}return g?p.h=w:g=l.i.toString()!=="",g?$r(p,Xo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function dn(l){return new jn(l)}function Fi(l,p,g){l.j=g?Ui(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function Fn(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function $r(l,p,g){p instanceof Ve?(l.i=p,Rs(l.i,l.l)):(g||(p=zi(p,Vc)),l.i=new Ve(p,l.l))}function Me(l,p,g){l.i.set(p,g)}function dr(l){return Me(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Ui(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,qo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function qo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ho=/[#\/\?@]/g,Wo=/[#\?:]/g,Bi=/[#\?]/g,Vc=/[#\?@]/g,Go=/#/g;function Ve(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Un(l){l.g||(l.g=new Map,l.h=0,l.i&&tn(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Ve.prototype,i.add=function(l,p){Un(this),this.i=null,l=zn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function Ko(l,p){Un(l),p=zn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Cs(l,p){return Un(l),p=zn(l,p),l.g.has(p)}i.forEach=function(l,p){Un(this),this.g.forEach(function(g,w){g.forEach(function(M){l.call(p,M,w,this)},this)},this)};function Qo(l,p){Un(l);let g=[];if(typeof p=="string")Cs(l,p)&&(g=g.concat(l.g.get(zn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Un(this),this.i=null,l=zn(this,l),Cs(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=Qo(this,l),l.length>0?String(l[0]):p):p};function Yo(l,p,g){Ko(l,p),g.length>0&&(l.i=null,l.g.set(zn(l,p),B(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let w=0;w<p.length;w++){var g=p[w];const M=Mn(g);g=Qo(this,g);for(let U=0;U<g.length;U++){let ee=M;g[U]!==""&&(ee+="="+Mn(g[U])),l.push(ee)}}return this.i=l.join("&")};function Xo(l){const p=new Ve;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function zn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Rs(l,p){p&&!l.j&&(Un(l),l.i=null,l.g.forEach(function(g,w){const M=w.toLowerCase();w!=M&&(Ko(this,w),Yo(this,M,g))},l)),l.j=p}function Bn(l,p){const g=new Ur;if(h.Image){const w=new Image;w.onload=T(Rt,g,"TestLoadImage: loaded",!0,p,w),w.onerror=T(Rt,g,"TestLoadImage: error",!1,p,w),w.onabort=T(Rt,g,"TestLoadImage: abort",!1,p,w),w.ontimeout=T(Rt,g,"TestLoadImage: timeout",!1,p,w),h.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function $n(l,p){const g=new Ur,w=new AbortController,M=setTimeout(()=>{w.abort(),Rt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(U=>{clearTimeout(M),U.ok?Rt(g,"TestPingServer: ok",!0,p):Rt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Rt(g,"TestPingServer: error",!1,p)})}function Rt(l,p,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function $i(){this.g=new Vi}function fr(l){this.i=l.Sb||null,this.h=l.ab||!1}x(fr,Lr),fr.prototype.g=function(){return new nn(this.i,this.h)};function nn(l,p){ut.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}x(nn,ut),i=nn.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,In(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Il(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Il(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?qr(this):In(this),this.readyState==3&&Il(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,qr(this))},i.Na=function(l){this.g&&(this.response=l,qr(this))},i.ga=function(){this.g&&qr(this)};function qr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,In(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function In(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Sl(l){let p="";return he(l,function(g,w){p+=w,p+=":",p+=g,p+=`\r
`}),p}function ks(l,p,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=Sl(g),typeof l=="string"?g!=null&&Mn(g):Me(l,p,g))}function qe(l){ut.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}x(qe,ut);var Al=/^https?$/i,bc=["POST","PUT"];i=qe.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gl.g(),this.g.onreadystatechange=D(_(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Hr(this,U);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const U of w.keys())g.set(U,w.get(U));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(bc,p,void 0)>=0)||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ee]of g)this.g.setRequestHeader(U,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){Hr(this,U)}};function Hr(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,Wr(l),mr(l)}function Wr(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),mr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),qe.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?pr(this):this.Xa())},i.Xa=function(){pr(this)};function pr(l){if(l.h&&typeof u<"u"){if(l.v&&qn(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),qn(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var w;if(w=U===0){let ee=String(l.D).match(Tl)[1]||null;!ee&&h.self&&h.self.location&&(ee=h.self.location.protocol.slice(0,-1)),w=!Al.test(ee?ee.toLowerCase():"")}g=w}if(g)it(l,"complete"),it(l,"success");else{l.o=6;try{var M=qn(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",Wr(l)}}finally{mr(l)}}}}function mr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||it(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}i.ca=function(){try{return qn(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),hl(p)}};function xl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Jo(l){const p={};l=(l.g&&qn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(S(l[w]))continue;var g=Is(l[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[M]||[];p[M]=U,U.push(g)}ne(p,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Ps(l){this.za=0,this.i=[],this.j=new Ur,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hn("baseRetryDelayMs",5e3,l),this.Za=Hn("retryDelaySeedMs",1e4,l),this.Ta=Hn("forwardChannelMaxRetries",2,l),this.va=Hn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new As(l&&l.concurrentRequestLimit),this.Ba=new $i,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ps.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,w){tt(0),this.W=l,this.H=p||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.J=ea(this,null,this.W),gr(this)};function Ns(l){if(Ds(l),l.I==3){var p=l.V++,g=dn(l.J);if(Me(g,"SID",l.M),Me(g,"RID",p),Me(g,"TYPE","terminate"),Wn(l,g),p=new hn(l,l.j,p),p.M=2,p.A=dr(dn(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=Rl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Oi(p)}Wi(l)}function rn(l){l.g&&(Hi(l),l.g.cancel(),l.g=null)}function Ds(l){rn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Vs(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function gr(l){if(!Bo(l.h)&&!l.m){l.m=!0;var p=l.Ea;Be||I(),Re||(Be(),Re=!0),P.add(p,l),l.D=0}}function Cl(l,p){return Mi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Fr(_(l.Ea,l,p),Os(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new hn(this,this.j,l);let U=this.o;if(this.U&&(U?(U=O(U),ve(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Zo(this,M,p),g=dn(this.J),Me(g,"RID",l),Me(g,"CVER",22),this.G&&Me(g,"X-HTTP-Session-Id",this.G),Wn(this,g),U&&(this.R?p="headers="+Mn(Sl(U))+"&"+p:this.u&&ks(g,this.u,U)),xs(this.h,M),this.Ra&&Me(g,"TYPE","init"),this.S?(Me(g,"$req",p),Me(g,"SID","null"),M.U=!0,Tn(M,g,null)):Tn(M,g,p),this.I=2}}else this.I==3&&(l?qi(this,l):this.i.length==0||Bo(this.h)||qi(this))};function qi(l,p){var g;p?g=p.l:g=l.V++;const w=dn(l.J);Me(w,"SID",l.M),Me(w,"RID",g),Me(w,"AID",l.K),Wn(l,w),l.u&&l.o&&ks(w,l.u,l.o),g=new hn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Zo(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),xs(l.h,g),Tn(g,w,p)}function Wn(l,p){l.H&&he(l.H,function(g,w){Me(p,w,g)}),l.l&&he({},function(g,w){Me(p,w,g)})}function Zo(l,p,g){g=Math.min(l.i.length,g);const w=l.l?_(l.l.Ka,l.l,l):null;e:{var M=l.i;let Ie=-1;for(;;){const st=["count="+g];Ie==-1?g>0?(Ie=M[0].g,st.push("ofs="+Ie)):Ie=0:st.push("ofs="+Ie);let ze=!0;for(let ct=0;ct<g;ct++){var U=M[ct].g;const on=M[ct].map;if(U-=Ie,U<0)Ie=Math.max(0,M[ct].g-100),ze=!1;else try{U="req"+U+"_"||"";try{var ee=on instanceof Map?on:Object.entries(on);for(const[yr,Kn]of ee){let Qn=Kn;m(Kn)&&(Qn=Or(Kn)),st.push(U+yr+"="+encodeURIComponent(Qn))}}catch(yr){throw st.push(U+"type="+encodeURIComponent("_badmap")),yr}}catch{w&&w(on)}}if(ze){ee=st.join("&");break e}}ee=void 0}return l=l.i.splice(0,g),p.G=l,ee}function Ot(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;Be||I(),Re||(Be(),Re=!0),P.add(p,l),l.A=0}}function Gn(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Fr(_(l.Da,l),Os(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Gr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Fr(_(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),rn(this),Gr(this))};function Hi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Gr(l){l.g=new hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=dn(l.na);Me(p,"RID","rpc"),Me(p,"SID",l.M),Me(p,"AID",l.K),Me(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Me(p,"TO",l.ia),Me(p,"TYPE","xmlhttp"),Wn(l,p),l.u&&l.o&&ks(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=dr(dn(p)),g.u=null,g.R=!0,Uo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,rn(this),Gn(this),tt(19))};function Vs(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function bs(l,p){var g=null;if(l.g==p){Vs(l),Hi(l),l.g=null;var w=2}else if($o(l.h,p))g=p.G,ji(l.h,p),w=1;else return;if(l.I!=0){if(p.o)if(w==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;w=jr(),it(w,new jo(w,g)),gr(l)}else Ot(l);else if(M=p.m,M==3||M==0&&p.X>0||!(w==1&&Cl(l,p)||w==2&&Gn(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:sn(l,5);break;case 4:sn(l,10);break;case 3:sn(l,6);break;default:sn(l,2)}}}function Os(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function sn(l,p){if(l.j.info("Error code "+p),p==2){var g=_(l.bb,l),w=l.Ua;const M=!w;w=new jn(w||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Fi(w,"https"),dr(w),M?Bn(w.toString(),g):$n(w.toString(),g)}else tt(2);l.I=0,l.l&&l.l.pa(p),Wi(l),Ds(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Wi(l){if(l.I=0,l.ja=[],l.l){const p=en(l.h);(p.length!=0||l.i.length!=0)&&(Y(l.ja,p),Y(l.ja,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.oa()}}function ea(l,p,g){var w=g instanceof jn?dn(g):new jn(g);if(w.g!="")p&&(w.g=p+"."+w.g),Fn(w,w.u);else{var M=h.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new jn(null);w&&Fi(U,w),p&&(U.g=p),M&&Fn(U,M),g&&(U.h=g),w=U}return g=l.G,p=l.wa,g&&p&&Me(w,g,p),Me(w,"VER",l.ka),Wn(l,w),w}function Rl(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new qe(new fr({ab:g})):new qe(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}i=kl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ls(){}Ls.prototype.g=function(l,p){return new kt(l,p)};function kt(l,p){ut.call(this),this.g=new Ps(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!S(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!S(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Kr(this)}x(kt,ut),kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ns(this.g)},kt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Or(l),l=g);p.i.push(new Dc(p.Ya++,l)),p.I==3&&gr(p)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ns(this.g),delete this.g,kt.Z.N.call(this)};function Pl(l){Es.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}x(Pl,Es);function Nl(){Mo.call(this),this.status=1}x(Nl,Mo);function Kr(l){this.g=l}x(Kr,kl),Kr.prototype.ra=function(){it(this.g,"a")},Kr.prototype.qa=function(l){it(this.g,new Pl(l))},Kr.prototype.pa=function(l){it(this.g,new Nl)},Kr.prototype.oa=function(){it(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,a_=function(){return new Ls},o_=function(){return jr()},s_=wn,Ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zr.NO_ERROR=0,zr.TIMEOUT=8,zr.HTTP_ERROR=6,Mu=zr,Br.COMPLETE="complete",i_=Br,dl.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",ut.prototype.listen=ut.prototype.J,Da=dl,qe.prototype.listenOnce=qe.prototype.K,qe.prototype.getLastError=qe.prototype.Ha,qe.prototype.getLastErrorCode=qe.prototype.ya,qe.prototype.getStatus=qe.prototype.ca,qe.prototype.getResponseJson=qe.prototype.La,qe.prototype.getResponseText=qe.prototype.la,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Fa,r_=qe}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});const Tg="@firebase/firestore",Ig="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let xo="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Kd("@firebase/firestore");function io(){return cs.logLevel}function oe(i,...e){if(cs.logLevel<=Pe.DEBUG){const t=e.map(Xd);cs.debug(`Firestore (${xo}): ${i}`,...t)}}function kr(i,...e){if(cs.logLevel<=Pe.ERROR){const t=e.map(Xd);cs.error(`Firestore (${xo}): ${i}`,...t)}}function yo(i,...e){if(cs.logLevel<=Pe.WARN){const t=e.map(Xd);cs.warn(`Firestore (${xo}): ${i}`,...t)}}function Xd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,l_(i,s,t)}function l_(i,e,t){let s=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw kr(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||l_(e,o,s)}function Se(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zt.UNAUTHENTICATED)))}shutdown(){}}class ST{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class AT{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new vi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new vi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new u_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class xT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new xT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Sg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Sg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Sg(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=kT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ne(i,e){return i<e?-1:i>e?1:0}function xd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return dd(o)===dd(u)?Ne(o,u):dd(o)?1:-1}return Ne(i.length,e.length)}const PT=55296,NT=57343;function dd(i){const e=i.charCodeAt(0);return e>=PT&&e<=NT}function _o(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__name__";class er{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ye(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return er.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof er?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=er.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ne(e.length,t.length)}static compareSegments(e,t){const s=er.isNumericId(e),o=er.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?er.extractNumericId(e).compare(er.extractNumericId(t)):xd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class We extends er{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends er{construct(e,t,s){return new Vt(e,t,s)}static isValidIdentifier(e){return DT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ag}static keyField(){return new Vt([Ag])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(We.fromString(e))}static fromName(e){return new de(We.fromString(e).popFirst(5))}static empty(){return new de(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(i,e,t){if(!t)throw new re($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function VT(i,e,t,s){if(e===!0&&s===!0)throw new re($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function xg(i){if(!de.isDocumentKey(i))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Cg(i){if(de.isDocumentKey(i))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function h_(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function fc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye(12329,{type:typeof i})}function hs(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fc(i);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function pt(i,e){const t={typeString:i};return e&&(t.value=e),t}function Za(i,e){if(!h_(i))throw new re($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new re($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=-62135596800,kg=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*kg);return new Ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rg)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kg}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Za(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:pt("string",Ye._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new Ye(0,0))}static max(){return new Te(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ba=-1;function bT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new Ye(t+1,0):new Ye(t,s));return new Ti(o,de.empty(),e)}function OT(i){return new Ti(i.readTime,i.key,Ba)}class Ti{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ti(Te.min(),de.empty(),Ba)}static max(){return new Ti(Te.max(),de.empty(),Ba)}}function LT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Ne(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==MT)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;t(e[_]).next((T=>{h[_]=T,++m,m===u&&s(h)}),(T=>o(T)))}}))}static doWhile(e,t){return new q(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function FT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ro(i){return i.name==="IndexedDbTransactionError"}/**
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
 */const Zd=-1;function mc(i){return i==null}function Qu(i){return i===0&&1/i==-1/0}function UT(i){return typeof i=="number"&&Number.isInteger(i)&&!Qu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="";function zT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Pg(e)),e=BT(i.get(t),e);return Pg(e)}function BT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case d_:t+="";break;default:t+=u}}return t}function Pg(i){return i+d_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=u??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dg(this.data.getIterator())}getIteratorFrom(e){return new Dg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _t(this.comparator);return t.data=e,t}}class Dg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new cn([])}unionWith(e){let t=new _t(Vt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new cn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new p_("Invalid base64 string: "+u):u}})(e);return new bt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const $T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=$T.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:at(i.seconds),nanos:at(i.nanos)}}function at(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Si(i){return typeof i=="string"?bt.fromBase64String(i):bt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="server_timestamp",g_="__type__",y_="__previous_value__",__="__local_write_time__";function ef(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[g_])==null?void 0:s.stringValue)===m_}function gc(i){const e=i.mapValue.fields[y_];return ef(e)?gc(e):e}function $a(i){const e=Ii(i.mapValue.fields[__].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t,s,o,u,h,m,y,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_,this.isUsingEmulator=T}}const Yu="(default)";class qa{constructor(e,t){this.projectId=e,this.database=t||Yu}static empty(){return new qa("","")}get isDefaultDatabase(){return this.database===Yu}isEqual(e){return e instanceof qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="__type__",HT="__max__",ku={mapValue:{}},E_="__vector__",Xu="value";function Ai(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?ef(i)?4:GT(i)?9007199254740991:WT(i)?10:11:ye(28295,{value:i})}function ar(i,e){if(i===e)return!0;const t=Ai(i);if(t!==Ai(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return $a(i).isEqual($a(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ii(o.timestampValue),m=Ii(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Si(o.bytesValue).isEqual(Si(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return at(o.geoPointValue.latitude)===at(u.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return at(o.integerValue)===at(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=at(o.doubleValue),m=at(u.doubleValue);return h===m?Qu(h)===Qu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return _o(i.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ng(h)!==Ng(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!ar(h[y],m[y])))return!1;return!0})(i,e);default:return ye(52216,{left:i})}}function Ha(i,e){return(i.values||[]).find((t=>ar(t,e)))!==void 0}function vo(i,e){if(i===e)return 0;const t=Ai(i),s=Ai(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=at(u.integerValue||u.doubleValue),y=at(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Vg(i.timestampValue,e.timestampValue);case 4:return Vg($a(i),$a(e));case 5:return xd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Si(u),y=Si(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const T=Ne(m[_],y[_]);if(T!==0)return T}return Ne(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Ne(at(u.latitude),at(h.latitude));return m!==0?m:Ne(at(u.longitude),at(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return bg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var D,B,Y,J;const m=u.fields||{},y=h.fields||{},_=(D=m[Xu])==null?void 0:D.arrayValue,T=(B=y[Xu])==null?void 0:B.arrayValue,x=Ne(((Y=_==null?void 0:_.values)==null?void 0:Y.length)||0,((J=T==null?void 0:T.values)==null?void 0:J.length)||0);return x!==0?x:bg(_,T)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===ku.mapValue&&h===ku.mapValue)return 0;if(u===ku.mapValue)return 1;if(h===ku.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},T=Object.keys(_);y.sort(),T.sort();for(let x=0;x<y.length&&x<T.length;++x){const D=xd(y[x],T[x]);if(D!==0)return D;const B=vo(m[y[x]],_[T[x]]);if(B!==0)return B}return Ne(y.length,T.length)})(i.mapValue,e.mapValue);default:throw ye(23264,{he:t})}}function Vg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ne(i,e);const t=Ii(i),s=Ii(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function bg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=vo(t[o],s[o]);if(u)return u}return Ne(t.length,s.length)}function Eo(i){return Cd(i)}function Cd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ii(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Si(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return de.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Cd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Cd(t.fields[h])}`;return o+"}"})(i.mapValue):ye(61005,{value:i})}function ju(i){switch(Ai(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(i);return e?16+ju(e):16;case 5:return 2*i.stringValue.length;case 6:return Si(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+ju(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ri(s.fields,((u,h)=>{o+=u.length+ju(h)})),o})(i.mapValue);default:throw ye(13486,{value:i})}}function Og(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Rd(i){return!!i&&"integerValue"in i}function tf(i){return!!i&&"arrayValue"in i}function Lg(i){return!!i&&"nullValue"in i}function Mg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Fu(i){return!!i&&"mapValue"in i}function WT(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[v_])==null?void 0:s.stringValue)===E_}function La(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ri(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=La(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=La(i.arrayValue.values[t]);return e}return{...i}}function GT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===HT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(t)}setAll(e){let t=Vt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=La(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ri(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Zt(La(this.value))}}function w_(i){const e=[];return Ri(i.fields,((t,s)=>{const o=new Vt([t]);if(Fu(s)){const u=w_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Bt(e,0,Te.min(),Te.min(),Te.min(),Zt.empty(),0)}static newFoundDocument(e,t,s,o){return new Bt(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Te.min(),Te.min(),Zt.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Te.min(),Te.min(),Zt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ju{constructor(e,t){this.position=e,this.inclusive=t}}function jg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=vo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ar(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Wa{constructor(e,t="asc"){this.field=e,this.dir=t}}function KT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class T_{}class ft extends T_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new YT(e,t,s):t==="array-contains"?new ZT(e,s):t==="in"?new eI(e,s):t==="not-in"?new tI(e,s):t==="array-contains-any"?new nI(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new XT(e,s):new JT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vo(t,this.value)):t!==null&&Ai(this.value)===Ai(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends T_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Vn(e,t)}matches(e){return I_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function I_(i){return i.op==="and"}function S_(i){return QT(i)&&I_(i)}function QT(i){for(const e of i.filters)if(e instanceof Vn)return!1;return!0}function kd(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+Eo(i.value);if(S_(i))return i.filters.map((e=>kd(e))).join(",");{const e=i.filters.map((t=>kd(t))).join(",");return`${i.op}(${e})`}}function A_(i,e){return i instanceof ft?(function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)})(i,e):i instanceof Vn?(function(s,o){return o instanceof Vn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&A_(h,o.filters[m])),!0):!1})(i,e):void ye(19439)}function x_(i){return i instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`})(i):i instanceof Vn?(function(t){return t.op.toString()+" {"+t.getFilters().map(x_).join(" ,")+"}"})(i):"Filter"}class YT extends ft{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class XT extends ft{constructor(e,t){super(e,"in",t),this.keys=C_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class JT extends ft{constructor(e,t){super(e,"not-in",t),this.keys=C_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function C_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>de.fromName(s.referenceValue)))}class ZT extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tf(t)&&Ha(t.arrayValue,this.value)}}class eI extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ha(this.value.arrayValue,t)}}class tI extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ha(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ha(this.value.arrayValue,t)}}class nI extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ha(this.value.arrayValue,s)))}}/**
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
 */class rI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function Ug(i,e=null,t=[],s=[],o=null,u=null,h=null){return new rI(i,e,t,s,o,u,h)}function nf(i){const e=Se(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>kd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),mc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Eo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Eo(s))).join(",")),e.Te=t}return e.Te}function rf(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!KT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!A_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Fg(i.startAt,e.startAt)&&Fg(i.endAt,e.endAt)}function Pd(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function iI(i,e,t,s,o,u,h,m){return new ko(i,e,t,s,o,u,h,m)}function R_(i){return new ko(i)}function zg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function k_(i){return i.collectionGroup!==null}function Ma(i){const e=Se(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(Vt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Wa(u,s))})),t.has(Vt.keyField().canonicalString())||e.Ie.push(new Wa(Vt.keyField(),s))}return e.Ie}function tr(i){const e=Se(i);return e.Ee||(e.Ee=sI(e,Ma(i))),e.Ee}function sI(i,e){if(i.limitType==="F")return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Wa(o.field,u)}));const t=i.endAt?new Ju(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ju(i.startAt.position,i.startAt.inclusive):null;return Ug(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Nd(i,e){const t=i.filters.concat([e]);return new ko(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Dd(i,e,t){return new ko(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function yc(i,e){return rf(tr(i),tr(e))&&i.limitType===e.limitType}function P_(i){return`${nf(tr(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>x_(o))).join(", ")}]`),mc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Eo(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Eo(o))).join(",")),`Target(${s})`})(tr(i))}; limitType=${i.limitType})`}function _c(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Ma(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const _=jg(h,m,y);return h.inclusive?_<=0:_<0})(s.startAt,Ma(s),o)||s.endAt&&!(function(h,m,y){const _=jg(h,m,y);return h.inclusive?_>=0:_>0})(s.endAt,Ma(s),o))})(i,e)}function oI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function N_(i){return(e,t)=>{let s=!1;for(const o of Ma(i)){const u=aI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function aI(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?vo(y,_):ye(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new et(de.comparator);function Pr(){return lI}const D_=new et(de.comparator);function Va(...i){let e=D_;for(const t of i)e=e.insert(t.key,t);return e}function V_(i){let e=D_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function as(){return ja()}function b_(){return ja()}function ja(){return new ps((i=>i.toString()),((i,e)=>i.isEqual(e)))}const uI=new et(de.comparator),cI=new _t(de.comparator);function De(...i){let e=cI;for(const t of i)e=e.add(t);return e}const hI=new _t(Ne);function dI(){return hI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function O_(i){return{integerValue:""+i}}function fI(i,e){return UT(e)?O_(e):sf(i,e)}/**
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
 */class vc{constructor(){this._=void 0}}function pI(i,e,t){return i instanceof Zu?(function(o,u){const h={fields:{[g_]:{stringValue:m_},[__]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&ef(u)&&(u=gc(u)),u&&(h.fields[y_]=u),{mapValue:h}})(t,e):i instanceof Ga?M_(i,e):i instanceof Ka?j_(i,e):(function(o,u){const h=L_(o,u),m=Bg(h)+Bg(o.Ae);return Rd(h)&&Rd(o.Ae)?O_(m):sf(o.serializer,m)})(i,e)}function mI(i,e,t){return i instanceof Ga?M_(i,e):i instanceof Ka?j_(i,e):t}function L_(i,e){return i instanceof ec?(function(s){return Rd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Zu extends vc{}class Ga extends vc{constructor(e){super(),this.elements=e}}function M_(i,e){const t=F_(e);for(const s of i.elements)t.some((o=>ar(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ka extends vc{constructor(e){super(),this.elements=e}}function j_(i,e){let t=F_(e);for(const s of i.elements)t=t.filter((o=>!ar(o,s)));return{arrayValue:{values:t}}}class ec extends vc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bg(i){return at(i.integerValue||i.doubleValue)}function F_(i){return tf(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function gI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ga&&o instanceof Ga||s instanceof Ka&&o instanceof Ka?_o(s.elements,o.elements,ar):s instanceof ec&&o instanceof ec?ar(s.Ae,o.Ae):s instanceof Zu&&o instanceof Zu})(i.transform,e.transform)}class yI{constructor(e,t){this.version=e,this.transformResults=t}}class Dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ec{}function U_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new of(i.key,Dn.none()):new el(i.key,i.data,Dn.none());{const t=i.data,s=Zt.empty();let o=new _t(Vt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ki(i.key,s,new cn(o.toArray()),Dn.none())}}function _I(i,e,t){i instanceof el?(function(o,u,h){const m=o.value.clone(),y=qg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof ki?(function(o,u,h){if(!Uu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=qg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(z_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Fa(i,e,t,s){return i instanceof el?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const _=u.value.clone(),T=Hg(u.fieldTransforms,y,h);return _.setAll(T),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof ki?(function(u,h,m,y){if(!Uu(u.precondition,h))return m;const _=Hg(u.fieldTransforms,y,h),T=h.data;return T.setAll(z_(u)),T.setAll(_),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((x=>x.field)))})(i,e,t,s):(function(u,h,m){return Uu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function vI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=L_(s.transform,o||null);u!=null&&(t===null&&(t=Zt.empty()),t.set(s.field,u))}return t||null}function $g(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&_o(s,o,((u,h)=>gI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class el extends Ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ki extends Ec{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function z_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function qg(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,mI(h,m,t[o]))}return s}function Hg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,pI(u,h,e))}return s}class of extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EI extends Ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&_I(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=b_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=U_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,((t,s)=>$g(t,s)))&&_o(this.baseMutations,e.baseMutations,((t,s)=>$g(t,s)))}}class af{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return uI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new af(e,t,s,o)}}/**
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
 */var dt,be;function SI(i){switch(i){case $.OK:return ye(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ye(15467,{code:i})}}function B_(i){if(i===void 0)return kr("GRPC error has no .code"),$.UNKNOWN;switch(i){case dt.OK:return $.OK;case dt.CANCELLED:return $.CANCELLED;case dt.UNKNOWN:return $.UNKNOWN;case dt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case dt.INTERNAL:return $.INTERNAL;case dt.UNAVAILABLE:return $.UNAVAILABLE;case dt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case dt.NOT_FOUND:return $.NOT_FOUND;case dt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case dt.ABORTED:return $.ABORTED;case dt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case dt.DATA_LOSS:return $.DATA_LOSS;default:return ye(39323,{code:i})}}(be=dt||(dt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xI=new _i([4294967295,4294967295],0);function Wg(i){const e=AI().encode(i),t=new n_;return t.update(e),new Uint8Array(t.digest())}function Gg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new _i([t,s],0),new _i([o,u],0)]}class lf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ba(`Invalid padding: ${t}`);if(s<0)throw new ba(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ba(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=_i.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(_i.fromNumber(s)));return o.compare(xI)===1&&(o=new _i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new lf(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=Wg(e),[s,o]=Gg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new wc(Te.min(),o,new et(Ne),Pr(),De())}}class tl{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class $_{constructor(e,t){this.targetId=e,this.Ce=t}}class q_{constructor(e,t,s=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Kg{constructor(){this.ve=0,this.Fe=Qg(),this.Me=bt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=De(),t=De(),s=De();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye(38017,{changeType:u})}})),new tl(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=Qg()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class CI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=Pu(),this.He=Pu(),this.Ye=new et(Ne)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ye(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Pd(u))if(s===0){const h=new de(u.path);this.et(t,h,Bt.newNoDocument(h,Te.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Si(s).toUint8Array()}catch(y){if(y instanceof p_)return yo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new lf(h,o,u)}catch(y){return yo(y instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&Pd(m.target)){const y=new de(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Bt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.qe())}}));let s=De();this.He.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const _=this.ot(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const o=new wc(e,t,this.Ye,this.je,s);return this.je=Pr(),this.Je=Pu(),this.He=Pu(),this.Ye=new et(Ne),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kg,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new _t(Ne),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new _t(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new et(de.comparator)}function Qg(){return new et(de.comparator)}const RI={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PI={and:"AND",or:"OR"};class NI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vd(i,e){return i.useProto3Json||mc(e)?e:{value:e}}function tc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function DI(i,e){return tc(i,e.toTimestamp())}function nr(i){return Fe(!!i,49232),Te.fromTimestamp((function(t){const s=Ii(t);return new Ye(s.seconds,s.nanos)})(i))}function uf(i,e){return bd(i,e).canonicalString()}function bd(i,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function W_(i){const e=We.fromString(i);return Fe(X_(e),10190,{key:e.toString()}),e}function Od(i,e){return uf(i.databaseId,e.path)}function fd(i,e){const t=W_(e);if(t.get(1)!==i.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(K_(t))}function G_(i,e){return uf(i.databaseId,e)}function VI(i){const e=W_(i);return e.length===4?We.emptyPath():K_(e)}function Ld(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function K_(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Yg(i,e,t){return{name:Od(i,e),fields:t.value.mapValue.fields}}function bI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ye(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,T){return _.useProto3Json?(Fe(T===void 0||typeof T=="string",58123),bt.fromBase64String(T||"")):(Fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),bt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const T=_.code===void 0?$.UNKNOWN:B_(_.code);return new re(T,_.message||"")})(h);t=new q_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=fd(i,s.document.name),u=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Te.min(),m=new Zt({mapValue:{fields:s.document.fields}}),y=Bt.newFoundDocument(o,u,h,m),_=s.targetIds||[],T=s.removedTargetIds||[];t=new zu(_,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=fd(i,s.document),u=s.readTime?nr(s.readTime):Te.min(),h=Bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new zu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=fd(i,s.document),u=s.removedTargetIds||[];t=new zu([],u,o,null)}else{if(!("filter"in e))return ye(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new II(o,u),m=s.targetId;t=new $_(m,h)}}return t}function OI(i,e){let t;if(e instanceof el)t={update:Yg(i,e.key,e.value)};else if(e instanceof of)t={delete:Od(i,e.key)};else if(e instanceof ki)t={update:Yg(i,e.key,e.data),updateMask:qI(e.fieldMask)};else{if(!(e instanceof EI))return ye(16599,{Vt:e.type});t={verify:Od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Zu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ga)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ka)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ec)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw ye(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:DI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye(27497)})(i,e.precondition)),t}function LI(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?nr(o.updateTime):nr(u);return h.isEqual(Te.min())&&(h=nr(u)),new yI(h,o.transformResults||[])})(t,e)))):[]}function MI(i,e){return{documents:[G_(i,e.path)]}}function jI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=G_(i,o);const u=(function(_){if(_.length!==0)return Y_(Vn.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((T=>(function(D){return{field:oo(D.field),direction:zI(D.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Vd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function FI(i){let e=VI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const T=t.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(x){const D=Q_(x);return D instanceof Vn&&S_(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(x){return x.map((D=>(function(Y){return new Wa(ao(Y.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(x){let D;return D=typeof x=="object"?x.value:x,mc(D)?null:D})(t.limit));let y=null;t.startAt&&(y=(function(x){const D=!!x.before,B=x.values||[];return new Ju(B,D)})(t.startAt));let _=null;return t.endAt&&(_=(function(x){const D=!x.before,B=x.values||[];return new Ju(B,D)})(t.endAt)),iI(e,o,h,u,m,"F",y,_)}function UI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Q_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ao(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ao(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ft.create(ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Vn.create(t.compositeFilter.filters.map((s=>Q_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye(1026)}})(t.compositeFilter.op))})(i):ye(30097,{filter:i})}function zI(i){return RI[i]}function BI(i){return kI[i]}function $I(i){return PI[i]}function oo(i){return{fieldPath:i.canonicalString()}}function ao(i){return Vt.fromServerFormat(i.fieldPath)}function Y_(i){return i instanceof ft?(function(t){if(t.op==="=="){if(Mg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NAN"}};if(Lg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NAN"}};if(Lg(t.value))return{unaryFilter:{field:oo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(t.field),op:BI(t.op),value:t.value}}})(i):i instanceof Vn?(function(t){const s=t.getFilters().map((o=>Y_(o)));return s.length===1?s[0]:{compositeFilter:{op:$I(t.op),filters:s}}})(i):ye(54877,{filter:i})}function qI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function X_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,u=Te.min(),h=Te.min(),m=bt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.yt=e}}function WI(i){const e=FI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
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
 */class GI{constructor(){this.Cn=new KI}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ti.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ti.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class KI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new _t(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new _t(We.comparator)).toArray()}}/**
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
 */class wo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new wo(0)}static cr(){return new wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="LruGarbageCollector",QI=1048576;function Zg([i,e],[t,s]){const o=Ne(i,t);return o===0?Ne(e,s):o}class YI{constructor(e){this.Ir=e,this.buffer=new _t(Zg),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Zg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class XI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){oe(Jg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ro(t)?oe(Jg,"Ignoring IndexedDB error during garbage collection: ",t):await Co(t)}await this.Vr(3e5)}))}}class JI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(pc.ce);const s=new YI(t);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Xg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xg):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,h,m,y,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,h=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(s=x,m=Date.now(),this.removeTargets(e,s,t)))).next((x=>(u=x,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(_=Date.now(),io()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${x} documents in `+(_-y)+`ms
Total Duration: ${_-T}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:x}))))}}function ZI(i,e){return new JI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(){this.changes=new ps((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Fa(s.mutation,o,cn.empty(),Ye.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,De()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=De()){const o=as();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Va();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=as();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,De())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Pr();const h=ja(),m=(function(){return ja()})();return t.forEach(((y,_)=>{const T=s.get(_.key);o.has(_.key)&&(T===void 0||T.mutation instanceof ki)?u=u.insert(_.key,_):T!==void 0?(h.set(_.key,T.mutation.getFieldMask()),Fa(T.mutation,_,T.mutation.getFieldMask(),Ye.now())):h.set(_.key,cn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((_,T)=>h.set(_,T))),t.forEach(((_,T)=>m.set(_,new t1(T,h.get(_)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=ja();let o=new et(((h,m)=>h-m)),u=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const _=t.get(y);if(_===null)return;let T=s.get(y)||cn.empty();T=m.applyToLocalView(_,T),s.set(y,T);const x=(o.get(m.batchId)||De()).add(y);o=o.insert(m.batchId,x)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,T=y.value,x=b_();T.forEach((D=>{if(!u.has(D)){const B=U_(t.get(D),s.get(D));B!==null&&x.set(D,B),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,x))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):k_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):q.resolve(as());let m=Ba,y=u;return h.next((_=>q.forEach(_,((T,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),u.get(T)?q.resolve():this.remoteDocumentCache.getEntry(e,T).next((D=>{y=y.insert(T,D)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,y,_,De()))).next((T=>({batchId:m,changes:V_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,u).next((m=>q.forEach(m,(y=>{const _=(function(x,D){return new ko(D,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((T=>{T.forEach(((x,D)=>{h=h.insert(x,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,_)=>{const T=_.getKey();h.get(T)===null&&(h=h.insert(T,Bt.newInvalidDocument(T)))}));let m=Va();return h.forEach(((y,_)=>{const T=u.get(y);T!==void 0&&Fa(T.mutation,_,cn.empty(),Ye.now()),_c(t,_)&&(m=m.insert(y,_))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:WI(o.bundledQuery),readTime:nr(o.readTime)}})(t)),q.resolve()}}/**
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
 */class i1{constructor(){this.overlays=new et(de.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=as();return q.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=as(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,T)=>_-T));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let T=u.get(_.largestBatchId);T===null&&(T=as(),u=u.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const m=as(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((_,T)=>m.set(_,T))),!(m.size()>=o)););return q.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new TI(t,s));let u=this.qr.get(t);u===void 0&&(u=De(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
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
 */class s1{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Qr=new _t(St.$r),this.Ur=new _t(St.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Gr(new St(e,t))}zr(e,t){e.forEach((s=>this.removeReference(s,t)))}jr(e){const t=new de(new We([])),s=new St(t,e),o=new St(t,e+1),u=[];return this.Ur.forEachInRange([s,o],(h=>{this.Gr(h),u.push(h.key)})),u}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new We([])),s=new St(t,e),o=new St(t,e+1);let u=De();return this.Ur.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new St(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ne(e.Yr,t.Yr)}static Kr(e,t){return Ne(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new _t(St.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new wI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Zr=this.Zr.add(new St(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Zd:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],(h=>{const m=this.Xr(h.Yr);u.push(m)})),q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _t(Ne);return t.forEach((o=>{const u=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,h],(m=>{s=s.add(m.Yr)}))})),q.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new St(new de(u),0);let m=new _t(Ne);return this.Zr.forEachWhile((y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(y.Yr)),!0)}),h),q.resolve(this.ti(m))}ti(e){const t=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return q.forEach(t.mutations,(o=>{const u=new St(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,t){const s=new St(t,0),o=this.Zr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.ri=e,this.docs=(function(){return new et(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=Pr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Bt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Pr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:T}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||LT(OT(T),s)<=0||(o.has(T.key)||_c(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return q.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye(9500)}ii(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new l1(this)}getSize(e){return q.resolve(this.size)}}class l1 extends e1{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.persistence=e,this.si=new ps((t=>nf(t)),rf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.oi=0,this._i=new cf,this.targetCount=0,this.ai=wo.ur()}forEachTarget(e,t){return this.si.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new wo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),q.waitFor(u).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t){this.ui={},this.overlays={},this.ci=new pc(0),this.li=!1,this.li=!0,this.hi=new s1,this.referenceDelegate=e(this),this.Pi=new u1(this),this.indexManager=new GI,this.remoteDocumentCache=(function(o){return new a1(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new HI(t),this.Ii=new r1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new o1(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new c1(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(e,t){return q.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,t))))}}class c1 extends jT{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new cf,this.Vi=null}static mi(e){return new hf(e)}get fi(){if(this.Vi)return this.Vi;throw ye(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(s=>{const o=de.fromPath(s);return this.gi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class nc{constructor(e,t){this.persistence=e,this.pi=new ps((s=>zT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=ZI(this,t)}static mi(e,t){return new nc(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}wr(e){let t=0;return this.pr(e,(s=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((s,o)=>this.br(e,s,o).next((u=>u?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,(h=>this.br(e,h,t).next((m=>{m||(s++,u.removeEntry(h,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}br(e,t,s){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=De(),o=De();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new df(e,t.fromCache,s,o)}}/**
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
 */class d1{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return r0()?8:FT($t())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ws(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new h1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.Vs)return this.bs(e,t,h,m.size)}))})).next((()=>u.result))}bs(e,t,s,o){return s.documentReadCount<this.fs?(io()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",so(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(io()<=Pe.DEBUG&&oe("QueryEngine","Query:",so(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(io()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",so(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):q.resolve())}ys(e,t){if(zg(t))return q.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Dd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=De(...u);return this.ps.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const _=this.Ds(t,m);return this.Cs(t,_,h,y.readTime)?this.ys(e,Dd(t,null,"F")):this.vs(e,_,t,y)}))))})))))}ws(e,t,s,o){return zg(t)||o.isEqual(Te.min())?q.resolve(null):this.ps.getDocuments(e,s).next((u=>{const h=this.Ds(t,u);return this.Cs(t,h,s,o)?q.resolve(null):(io()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(t)),this.vs(e,h,t,bT(o,Ba)).next((m=>m)))}))}Ds(e,t){let s=new _t(N_(e));return t.forEach(((o,u)=>{_c(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return io()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",so(t)),this.ps.getDocumentsMatchingQuery(e,t,Ti.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="LocalStore",f1=3e8;class p1{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new et(Ne),this.xs=new ps((u=>nf(u)),rf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n1(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function m1(i,e,t,s){return new p1(i,e,t,s)}async function ev(i,e){const t=Se(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=De();for(const _ of o){h.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}for(const _ of u){m.push(_.batchId);for(const T of _.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(s,y).next((_=>({Ls:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function g1(i,e){const t=Se(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,y,_,T){const x=_.batch,D=x.keys();let B=q.resolve();return D.forEach((Y=>{B=B.next((()=>T.getEntry(y,Y))).next((J=>{const W=_.docVersions.get(Y);Fe(W!==null,48541),J.version.compareTo(W)<0&&(x.applyToRemoteDocument(J,_),J.isValidDocument()&&(J.setReadTime(_.commitVersion),T.addEntry(J)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(y,x)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=De();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function tv(i){const e=Se(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function y1(i,e){const t=Se(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach(((T,x)=>{const D=o.get(x);if(!D)return;m.push(t.Pi.removeMatchingKeys(u,T.removedDocuments,x).next((()=>t.Pi.addMatchingKeys(u,T.addedDocuments,x))));let B=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(x)!==null?B=B.withResumeToken(bt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):T.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(T.resumeToken,s)),o=o.insert(x,B),(function(J,W,_e){return J.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=f1?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0})(D,B,T)&&m.push(t.Pi.updateTargetData(u,B))}));let y=Pr(),_=De();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(_1(u,h,e.documentUpdates).next((T=>{y=T.ks,_=T.qs}))),!s.isEqual(Te.min())){const T=t.Pi.getLastRemoteSnapshotVersion(u).next((x=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return q.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,_))).next((()=>y))})).then((u=>(t.Ms=o,u)))}function _1(i,e,t){let s=De(),o=De();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Pr();return t.forEach(((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Te.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):oe(ff,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)})),{ks:h,qs:o}}))}function v1(i,e){const t=Se(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Zd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function E1(i,e){const t=Se(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Pi.getTargetData(s,e).next((u=>u?(o=u,q.resolve(o)):t.Pi.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s}))}async function Md(i,e,t){const s=Se(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ro(h))throw h;oe(ff,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function ey(i,e,t){const s=Se(i);let o=Te.min(),u=De();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,_,T){const x=Se(y),D=x.xs.get(T);return D!==void 0?q.resolve(x.Ms.get(D)):x.Pi.getTargetData(_,T)})(s,h,tr(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Fs.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?u:De()))).next((m=>(w1(s,oI(e),m),{documents:m,Qs:u})))))}function w1(i,e,t){let s=i.Os.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Os.set(e,s)}class ty{constructor(){this.activeTargetIds=dI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T1{constructor(){this.Mo=new ty,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ty,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const pd="RestConnection",S1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Yu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const h=jd(),m=this.zo(e,t.toUriEncodedString());oe(pd,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:_}=new URL(m),T=So(_);return this.Jo(e,m,y,s,T).then((x=>(oe(pd,`Received RPC '${e}' ${h}: `,x),x)),(x=>{throw yo(pd,`RPC '${e}' ${h} failed with error: `,x,"url: ",m,"request:",s),x}))}Ho(e,t,s,o,u,h){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}zo(e,t){const s=S1[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class C1 extends A1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=jd();return new Promise(((m,y)=>{const _=new r_;_.setWithCredentials(!0),_.listenOnce(i_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Mu.NO_ERROR:const x=_.getResponseJson();oe(Ut,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(x)),m(x);break;case Mu.TIMEOUT:oe(Ut,`RPC '${e}' ${h} timed out`),y(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case Mu.HTTP_ERROR:const D=_.getStatus();if(oe(Ut,`RPC '${e}' ${h} failed with status:`,D,"response text:",_.getResponseText()),D>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const Y=B==null?void 0:B.error;if(Y&&Y.status&&Y.message){const J=(function(_e){const me=_e.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(me)>=0?me:$.UNKNOWN})(Y.status);y(new re(J,Y.message))}else y(new re($.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new re($.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{l_:e,streamId:h,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{oe(Ut,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(o);oe(Ut,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",T,s,15)}))}T_(e,t,s){const o=jd(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=a_(),m=o_(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const T=u.join("");oe(Ut,`Creating RPC '${e}' stream ${o}: ${T}`,y);const x=h.createWebChannel(T,y);this.I_(x);let D=!1,B=!1;const Y=new x1({Yo:W=>{B?oe(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(D||(oe(Ut,`Opening RPC '${e}' stream ${o} transport.`),x.open(),D=!0),oe(Ut,`RPC '${e}' stream ${o} sending:`,W),x.send(W))},Zo:()=>x.close()}),J=(W,_e,me)=>{W.listen(_e,(Ae=>{try{me(Ae)}catch(Ce){setTimeout((()=>{throw Ce}),0)}}))};return J(x,Da.EventType.OPEN,(()=>{B||(oe(Ut,`RPC '${e}' stream ${o} transport opened.`),Y.o_())})),J(x,Da.EventType.CLOSE,(()=>{B||(B=!0,oe(Ut,`RPC '${e}' stream ${o} transport closed`),Y.a_(),this.E_(x))})),J(x,Da.EventType.ERROR,(W=>{B||(B=!0,yo(Ut,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),Y.a_(new re($.UNAVAILABLE,"The operation could not be completed")))})),J(x,Da.EventType.MESSAGE,(W=>{var _e;if(!B){const me=W.data[0];Fe(!!me,16349);const Ae=me,Ce=(Ae==null?void 0:Ae.error)||((_e=Ae[0])==null?void 0:_e.error);if(Ce){oe(Ut,`RPC '${e}' stream ${o} received error:`,Ce);const Be=Ce.status;let Re=(function(C){const V=dt[C];if(V!==void 0)return B_(V)})(Be),P=Ce.message;Re===void 0&&(Re=$.INTERNAL,P="Unknown error status: "+Be+" with message "+Ce.message),B=!0,Y.a_(new re(Re,P)),x.close()}else oe(Ut,`RPC '${e}' stream ${o} received:`,me),Y.u_(me)}})),J(m,s_.STAT_EVENT,(W=>{W.stat===Ad.PROXY?oe(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):W.stat===Ad.NOPROXY&&oe(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.__()}),0),Y}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){return new NI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const iy="PersistentStream";class rv{constructor(e,t,s,o,u,h,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(kr(t.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new re($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(iy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(oe(iy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class R1 extends rv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=bI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?nr(h.readTime):Te.min()})(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=Ld(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Pd(y)?{documents:MI(u,y)}:{query:jI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=H_(u,h.resumeToken);const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){m.readTime=tc(u,h.snapshotVersion.toTimestamp());const _=Vd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=UI(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=Ld(this.serializer),t.removeTarget=e,this.q_(t)}}class k1 extends rv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=LI(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Ld(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>OI(this.serializer,s)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{}class N1 extends P1{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Go(e,bd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new re($.UNKNOWN,u.toString())}))}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Ho(e,bd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re($.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class D1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="RemoteStore";class V1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((h=>{s.enqueueAndForget((async()=>{ms(this)&&(oe(ds,"Restarting streams for network reachability change."),await(async function(y){const _=Se(y);_.Ea.add(4),await nl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Ic(_)})(this))}))})),this.Ra=new D1(s,o)}}async function Ic(i){if(ms(i))for(const e of i.da)await e(!0)}async function nl(i){for(const e of i.da)await e(!1)}function iv(i,e){const t=Se(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),yf(t)?gf(t):Po(t).O_()&&mf(t,e))}function pf(i,e){const t=Se(i),s=Po(t);t.Ia.delete(e),s.O_()&&sv(t,e),t.Ia.size===0&&(s.O_()?s.L_():ms(t)&&t.Ra.set("Unknown"))}function mf(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Po(i).Y_(e)}function sv(i,e){i.Va.Ue(e),Po(i).Z_(e)}function gf(i){i.Va=new CI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Po(i).start(),i.Ra.ua()}function yf(i){return ms(i)&&!Po(i).x_()&&i.Ia.size>0}function ms(i){return Se(i).Ea.size===0}function ov(i){i.Va=void 0}async function b1(i){i.Ra.set("Online")}async function O1(i){i.Ia.forEach(((e,t)=>{mf(i,e)}))}async function L1(i,e){ov(i),yf(i)?(i.Ra.ha(e),gf(i)):i.Ra.set("Unknown")}async function M1(i,e,t){if(i.Ra.set("Online"),e instanceof q_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ia.delete(m),o.Va.removeTarget(m))})(i,e)}catch(s){oe(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rc(i,s)}else if(e instanceof zu?i.Va.Ze(e):e instanceof $_?i.Va.st(e):i.Va.tt(e),!t.isEqual(Te.min()))try{const s=await tv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Va.Tt(h);return m.targetChanges.forEach(((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(_);T&&u.Ia.set(_,T.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,_)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(bt.EMPTY_BYTE_STRING,T.snapshotVersion)),sv(u,y);const x=new pi(T.target,y,_,T.sequenceNumber);mf(u,x)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){oe(ds,"Failed to raise snapshot:",s),await rc(i,s)}}async function rc(i,e,t){if(!Ro(e))throw e;i.Ea.add(1),await nl(i),i.Ra.set("Offline"),t||(t=()=>tv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{oe(ds,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Ic(i)}))}function av(i,e){return e().catch((t=>rc(i,t,e)))}async function Sc(i){const e=Se(i),t=xi(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zd;for(;j1(e);)try{const o=await v1(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,F1(e,o)}catch(o){await rc(e,o)}lv(e)&&uv(e)}function j1(i){return ms(i)&&i.Ta.length<10}function F1(i,e){i.Ta.push(e);const t=xi(i);t.O_()&&t.X_&&t.ea(e.mutations)}function lv(i){return ms(i)&&!xi(i).x_()&&i.Ta.length>0}function uv(i){xi(i).start()}async function U1(i){xi(i).ra()}async function z1(i){const e=xi(i);for(const t of i.Ta)e.ea(t.mutations)}async function B1(i,e,t){const s=i.Ta.shift(),o=af.from(s,e,t);await av(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Sc(i)}async function $1(i,e){e&&xi(i).X_&&await(async function(s,o){if((function(h){return SI(h)&&h!==$.ABORTED})(o.code)){const u=s.Ta.shift();xi(s).B_(),await av(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Sc(s)}})(i,e),lv(i)&&uv(i)}async function sy(i,e){const t=Se(i);t.asyncQueue.verifyOperationInProgress(),oe(ds,"RemoteStore received new credentials");const s=ms(t);t.Ea.add(3),await nl(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ic(t)}async function q1(i,e){const t=Se(i);e?(t.Ea.delete(2),await Ic(t)):e||(t.Ea.add(2),await nl(t),t.Ra.set("Unknown"))}function Po(i){return i.ma||(i.ma=(function(t,s,o){const u=Se(t);return u.sa(),new R1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:b1.bind(null,i),t_:O1.bind(null,i),r_:L1.bind(null,i),H_:M1.bind(null,i)}),i.da.push((async e=>{e?(i.ma.B_(),yf(i)?gf(i):i.Ra.set("Unknown")):(await i.ma.stop(),ov(i))}))),i.ma}function xi(i){return i.fa||(i.fa=(function(t,s,o){const u=Se(t);return u.sa(),new k1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Xo:()=>Promise.resolve(),t_:U1.bind(null,i),r_:$1.bind(null,i),ta:z1.bind(null,i),na:B1.bind(null,i)}),i.da.push((async e=>{e?(i.fa.B_(),await Sc(i)):(await i.fa.stop(),i.Ta.length>0&&(oe(ds,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new _f(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vf(i,e){if(kr("AsyncQueue",`${e}: ${i}`),Ro(i))return new re($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{static emptySet(e){return new uo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new uo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.ga=new et(de.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ye(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class To{constructor(e,t,s,o,u,h,m,y,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new To(e,t,uo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class W1{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Se(t),u=o.queries;o.queries=ay(),u.forEach(((h,m)=>{for(const y of m.Sa)y.onError(s)}))})(this,new re($.ABORTED,"Firestore shutting down"))}}function ay(){return new ps((i=>P_(i)),yc)}async function G1(i,e){const t=Se(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new H1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=vf(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Ef(t)}async function K1(i,e){const t=Se(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Q1(i,e){const t=Se(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Fa(o)&&(s=!0);h.wa=o}}s&&Ef(t)}function Y1(i,e,t){const s=Se(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Ef(i){i.Ca.forEach((e=>{e.next()}))}var Fd,ly;(ly=Fd||(Fd={})).Ma="default",ly.Cache="cache";class X1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.key=e}}class hv{constructor(e){this.key=e}}class J1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=De(),this.mutatedKeys=De(),this.eu=N_(e),this.tu=new uo(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new oy,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((T,x)=>{const D=o.get(T),B=_c(this.query,x)?x:null,Y=!!D&&this.mutatedKeys.has(D.key),J=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;D&&B?D.data.isEqual(B.data)?Y!==J&&(s.track({type:3,doc:B}),W=!0):this.su(D,B)||(s.track({type:2,doc:B}),W=!0,(y&&this.eu(B,y)>0||_&&this.eu(B,_)<0)&&(m=!0)):!D&&B?(s.track({type:0,doc:B}),W=!0):D&&!B&&(s.track({type:1,doc:D}),W=!0,(y||_)&&(m=!0)),W&&(B?(h=h.add(B),u=J?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:h,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,x)=>(function(B,Y){const J=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Rt:W})}};return J(B)-J(Y)})(T.type,x.type)||this.eu(T.doc,x.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,_=y!==this.Za;return this.Za=y,h.length!==0||_?{snapshot:new To(this.query,e.tu,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new oy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=De(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const t=[];return e.forEach((s=>{this.Xa.has(s)||t.push(new hv(s))})),this.Xa.forEach((s=>{e.has(s)||t.push(new cv(s))})),t}cu(e){this.Ya=e.Qs,this.Xa=De();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return To.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const wf="SyncEngine";class Z1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class eS{constructor(e){this.key=e,this.hu=!1}}class tS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ps((m=>P_(m)),yc),this.Iu=new Map,this.Eu=new Set,this.du=new et(de.comparator),this.Au=new Map,this.Ru=new cf,this.Vu={},this.mu=new Map,this.fu=wo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nS(i,e,t=!0){const s=yv(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await dv(s,e,t,!0),o}async function rS(i,e){const t=yv(i);await dv(t,e,!0,!1)}async function dv(i,e,t,s){const o=await E1(i.localStore,tr(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await iS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&iv(i.remoteStore,o),m}async function iS(i,e,t,s,o){i.pu=(x,D,B)=>(async function(J,W,_e,me){let Ae=W.view.ru(_e);Ae.Cs&&(Ae=await ey(J.localStore,W.query,!1).then((({documents:P})=>W.view.ru(P,Ae))));const Ce=me&&me.targetChanges.get(W.targetId),Be=me&&me.targetMismatches.get(W.targetId)!=null,Re=W.view.applyChanges(Ae,J.isPrimaryClient,Ce,Be);return cy(J,W.targetId,Re.au),Re.snapshot})(i,x,D,B);const u=await ey(i.localStore,e,!0),h=new J1(e,u.Qs),m=h.ru(u.documents),y=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,y);cy(i,t,_.au);const T=new Z1(e,t,h);return i.Tu.set(e,T),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),_.snapshot}async function sS(i,e,t){const s=Se(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((h=>!yc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Md(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&pf(s.remoteStore,o.targetId),Ud(s,o.targetId)})).catch(Co)):(Ud(s,o.targetId),await Md(s.localStore,o.targetId,!0))}async function oS(i,e){const t=Se(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),pf(t.remoteStore,s.targetId))}async function aS(i,e,t){const s=pS(i);try{const o=await(function(h,m){const y=Se(h),_=Ye.now(),T=m.reduce(((B,Y)=>B.add(Y.key)),De());let x,D;return y.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Y=Pr(),J=De();return y.Ns.getEntries(B,T).next((W=>{Y=W,Y.forEach(((_e,me)=>{me.isValidDocument()||(J=J.add(_e))}))})).next((()=>y.localDocuments.getOverlayedDocuments(B,Y))).next((W=>{x=W;const _e=[];for(const me of m){const Ae=vI(me,x.get(me.key).overlayedDocument);Ae!=null&&_e.push(new ki(me.key,Ae,w_(Ae.value.mapValue),Dn.exists(!0)))}return y.mutationQueue.addMutationBatch(B,_,_e,m)})).next((W=>{D=W;const _e=W.applyToLocalDocumentSet(x,J);return y.documentOverlayCache.saveOverlays(B,W.batchId,_e)}))})).then((()=>({batchId:D.batchId,changes:V_(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let _=h.Vu[h.currentUser.toKey()];_||(_=new et(Ne)),_=_.insert(m,y),h.Vu[h.currentUser.toKey()]=_})(s,o.batchId,t),await rl(s,o.changes),await Sc(s.remoteStore)}catch(o){const u=vf(o,"Failed to persist write");t.reject(u)}}async function fv(i,e){const t=Se(i);try{const s=await y1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Au.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?Fe(h.hu,14607):o.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await rl(t,s,e)}catch(s){await Co(s)}}function uy(i,e,t){const s=Se(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=Se(h);y.onlineState=m;let _=!1;y.queries.forEach(((T,x)=>{for(const D of x.Sa)D.va(m)&&(_=!0)})),_&&Ef(y)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lS(i,e,t){const s=Se(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let h=new et(de.comparator);h=h.insert(u,Bt.newNoDocument(u,Te.min()));const m=De().add(u),y=new wc(Te.min(),new Map,new et(Ne),h,m);await fv(s,y),s.du=s.du.remove(u),s.Au.delete(e),Tf(s)}else await Md(s.localStore,e,!1).then((()=>Ud(s,e,t))).catch(Co)}async function uS(i,e){const t=Se(i),s=e.batch.batchId;try{const o=await g1(t.localStore,e);mv(t,s,null),pv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await Co(o)}}async function cS(i,e,t){const s=Se(i);try{const o=await(function(h,m){const y=Se(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return y.mutationQueue.lookupMutationBatch(_,m).next((x=>(Fe(x!==null,37113),T=x.keys(),y.mutationQueue.removeMutationBatch(_,x)))).next((()=>y.mutationQueue.performConsistencyCheck(_))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(_,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>y.localDocuments.getDocuments(_,T)))}))})(s.localStore,e);mv(s,e,t),pv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await Co(o)}}function pv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function mv(i,e,t){const s=Se(i);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function Ud(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach((s=>{i.Ru.containsKey(s)||gv(i,s)}))}function gv(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(pf(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Tf(i))}function cy(i,e,t){for(const s of t)s instanceof cv?(i.Ru.addReference(s.key,e),hS(i,s)):s instanceof hv?(oe(wf,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||gv(i,s.key)):ye(19791,{wu:s})}function hS(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(oe(wf,"New document in limbo: "+t),i.Eu.add(s),Tf(i))}function Tf(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new de(We.fromString(e)),s=i.fu.next();i.Au.set(s,new eS(t)),i.du=i.du.insert(t,s),iv(i.remoteStore,new pi(tr(R_(t.path)),s,"TargetPurposeLimboResolution",pc.ce))}}async function rl(i,e,t){const s=Se(i),o=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((_=>{var T;if((_||t)&&s.isPrimaryClient){const x=_?!_.fromCache:(T=t==null?void 0:t.targetChanges.get(y.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,x?"current":"not-current")}if(_){o.push(_);const x=df.As(y.targetId,_);u.push(x)}})))})),await Promise.all(h),s.Pu.H_(o),await(async function(y,_){const T=Se(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>q.forEach(_,(D=>q.forEach(D.Es,(B=>T.persistence.referenceDelegate.addReference(x,D.targetId,B))).next((()=>q.forEach(D.ds,(B=>T.persistence.referenceDelegate.removeReference(x,D.targetId,B)))))))))}catch(x){if(!Ro(x))throw x;oe(ff,"Failed to update sequence numbers: "+x)}for(const x of _){const D=x.targetId;if(!x.fromCache){const B=T.Ms.get(D),Y=B.snapshotVersion,J=B.withLastLimboFreeSnapshotVersion(Y);T.Ms=T.Ms.insert(D,J)}}})(s.localStore,u))}async function dS(i,e){const t=Se(i);if(!t.currentUser.isEqual(e)){oe(wf,"User change. New user:",e.toKey());const s=await ev(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new re($.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Ls)}}function fS(i,e){const t=Se(i),s=t.Au.get(e);if(s&&s.hu)return De().add(s.key);{let o=De();const u=t.Iu.get(e);if(!u)return o;for(const h of u){const m=t.Tu.get(h);o=o.unionWith(m.view.nu)}return o}}function yv(i){const e=Se(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=fv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lS.bind(null,e),e.Pu.H_=Q1.bind(null,e.eventManager),e.Pu.yu=Y1.bind(null,e.eventManager),e}function pS(i){const e=Se(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cS.bind(null,e),e}class ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return m1(this.persistence,new d1,e.initialUser,this.serializer)}Cu(e){return new Z_(hf.mi,this.serializer)}Du(e){return new T1}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ic.provider={build:()=>new ic};class mS extends ic{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof nc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new XI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Z_((s=>nc.mi(s,t)),this.serializer)}}class zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dS.bind(null,this.syncEngine),await q1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new W1})()}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),s=(function(u){return new C1(u)})(e.databaseInfo);return(function(u,h,m,y){return new N1(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new V1(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>uy(this.syncEngine,t,0)),(function(){return ry.v()?new ry:new I1})())}createSyncEngine(e,t){return(function(o,u,h,m,y,_,T){const x=new tS(o,u,h,m,y,_);return T&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Se(o);oe(ds,"RemoteStore shutting down."),u.Ea.add(5),await nl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}zd.provider={build:()=>new zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="FirestoreClient";class yS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{oe(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=vf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function gd(i,e){i.asyncQueue.verifyOperationInProgress(),oe(Ci,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await ev(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function hy(i,e){i.asyncQueue.verifyOperationInProgress();const t=await _S(i);oe(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>sy(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>sy(e.remoteStore,o))),i._onlineComponents=e}async function _S(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(Ci,"Using user provided OfflineComponentProvider");try{await gd(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;yo("Error using user provided cache. Falling back to memory cache: "+t),await gd(i,new ic)}}else oe(Ci,"Using default OfflineComponentProvider"),await gd(i,new mS(void 0));return i._offlineComponents}async function _v(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(Ci,"Using user provided OnlineComponentProvider"),await hy(i,i._uninitializedComponentsProvider._online)):(oe(Ci,"Using default OnlineComponentProvider"),await hy(i,new zd))),i._onlineComponents}function vS(i){return _v(i).then((e=>e.syncEngine))}async function ES(i){const e=await _v(i),t=e.eventManager;return t.onListen=nS.bind(null,e.syncEngine),t.onUnlisten=sS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oS.bind(null,e.syncEngine),t}function wS(i,e,t={}){const s=new vi;return i.asyncQueue.enqueueAndForget((async()=>(function(u,h,m,y,_){const T=new gS({next:D=>{T.Nu(),h.enqueueAndForget((()=>K1(u,x))),D.fromCache&&y.source==="server"?_.reject(new re($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(D)},error:D=>_.reject(D)}),x=new X1(m,T,{includeMetadataChanges:!0,qa:!0});return G1(u,x)})(await ES(i),i.asyncQueue,e,t,s))),s.promise}/**
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
 */const Ev="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ev,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=J_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QI)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vv(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new IT;switch(s.type){case"firstParty":return new CT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=dy.get(t);s&&(oe("ComponentProvider","Removing Datastore"),dy.delete(t),s.terminate())})(this),Promise.resolve()}}function TS(i,e,t,s={}){var _;i=hs(i,Ac);const o=So(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(Ky(`https://${m}`),Qy("Firestore",!0)),u.host!==Ev&&u.host!==m&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!ls(y,h)&&(i._setSettings(y),s.mockUserToken)){let T,x;if(typeof s.mockUserToken=="string")T=s.mockUserToken,x=zt.MOCK_USER;else{T=Kw(s.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new zt(D)}i._authCredentials=new ST(new u_(T,x))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class yt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}toJSON(){return{type:yt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Za(t,yt._jsonSchema))return new yt(e,s||null,new de(We.fromString(t.referencePath)))}}yt._jsonSchemaVersion="firestore/documentReference/1.0",yt._jsonSchema={type:pt("string",yt._jsonSchemaVersion),referencePath:pt("string")};class Ei extends gs{constructor(e,t,s){super(e,t,R_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new de(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function ka(i,e,...t){if(i=At(i),c_("collection","path",e),i instanceof Ac){const s=We.fromString(e,...t);return Cg(s),new Ei(i,null,s)}{if(!(i instanceof yt||i instanceof Ei))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Cg(s),new Ei(i.firestore,null,s)}}function Bd(i,e,...t){if(i=At(i),arguments.length===1&&(e=Jd.newId()),c_("doc","path",e),i instanceof Ac){const s=We.fromString(e,...t);return xg(s),new yt(i,null,new de(s))}{if(!(i instanceof yt||i instanceof Ei))throw new re($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return xg(s),new yt(i.firestore,i instanceof Ei?i.converter:null,new de(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="AsyncQueue";class gy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nv(this,"async_queue_retry"),this._c=()=>{const s=md();s&&oe(my,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new vi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;oe(my,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,kr("INTERNAL UNHANDLED ERROR: ",yy(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=_f.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&ye(47125,{Pc:yy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yy(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class il extends Ac{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new gy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gy(e),this._firestoreClient=void 0,await e}}}function IS(i,e){const t=typeof i=="object"?i:Zy(),s=typeof i=="string"?i:Yu,o=Yd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Ww("firestore");u&&TS(o,...u)}return o}function wv(i){if(i._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||SS(i),i._firestoreClient}function SS(i){var s,o,u;const e=i._freezeSettings(),t=(function(m,y,_,T){return new qT(m,y,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,vv(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new yS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(bt.fromBase64String(e))}catch(t){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Za(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:pt("string",vn._jsonSchemaVersion),bytes:pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rr._jsonSchemaVersion}}static fromJSON(e){if(Za(e,rr._jsonSchema))return new rr(e.latitude,e.longitude)}}rr._jsonSchemaVersion="firestore/geoPoint/1.0",rr._jsonSchema={type:pt("string",rr._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class ir{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ir._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Za(e,ir._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ir(e.vectorValues);throw new re($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ir._jsonSchemaVersion="firestore/vectorValue/1.0",ir._jsonSchema={type:pt("string",ir._jsonSchemaVersion),vectorValues:pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=/^__.*__$/;class xS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ki(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}class Tv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ki(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Iv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ac:i})}}class Sf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Sf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return sc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Iv(this.Ac)&&AS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class CS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Tc(e)}Cc(e,t,s,o=!1){return new Sf({Ac:e,methodName:t,Dc:s,path:Vt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Af(i){const e=i._freezeSettings(),t=Tc(i._databaseId);return new CS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function RS(i,e,t,s,o,u={}){const h=i.Cc(u.merge||u.mergeFields?2:0,e,t,o);xf("Data must be an object, but it was:",h,s);const m=Sv(s,h);let y,_;if(u.merge)y=new cn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const x of u.mergeFields){const D=$d(e,x,t);if(!h.contains(D))throw new re($.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);xv(T,D)||T.push(D)}y=new cn(T),_=h.fieldTransforms.filter((x=>y.covers(x.field)))}else y=null,_=h.fieldTransforms;return new xS(new Zt(m),y,_)}class Cc extends If{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cc}}function kS(i,e,t,s){const o=i.Cc(1,e,t);xf("Data must be an object, but it was:",o,s);const u=[],h=Zt.empty();Ri(s,((y,_)=>{const T=Cf(e,y,t);_=At(_);const x=o.yc(T);if(_ instanceof Cc)u.push(T);else{const D=sl(_,x);D!=null&&(u.push(T),h.set(T,D))}}));const m=new cn(u);return new Tv(h,m,o.fieldTransforms)}function PS(i,e,t,s,o,u){const h=i.Cc(1,e,t),m=[$d(e,s,t)],y=[o];if(u.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)m.push($d(e,u[D])),y.push(u[D+1]);const _=[],T=Zt.empty();for(let D=m.length-1;D>=0;--D)if(!xv(_,m[D])){const B=m[D];let Y=y[D];Y=At(Y);const J=h.yc(B);if(Y instanceof Cc)_.push(B);else{const W=sl(Y,J);W!=null&&(_.push(B),T.set(B,W))}}const x=new cn(_);return new Tv(T,x,h.fieldTransforms)}function NS(i,e,t,s=!1){return sl(t,i.Cc(s?4:3,e))}function sl(i,e){if(Av(i=At(i)))return xf("Unsupported field value:",e,i),Sv(i,e);if(i instanceof If)return(function(s,o){if(!Iv(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=sl(m,o.wc(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return fI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Ye.fromDate(s);return{timestampValue:tc(o.serializer,u)}}if(s instanceof Ye){const u=new Ye(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tc(o.serializer,u)}}if(s instanceof rr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:H_(o.serializer,s._byteString)};if(s instanceof yt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Sc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:uf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ir)return(function(h,m){return{mapValue:{fields:{[v_]:{stringValue:E_},[Xu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.Sc("VectorValues must only contain numeric values.");return sf(m.serializer,_)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${fc(s)}`)})(i,e)}function Sv(i,e){const t={};return f_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(i,((s,o)=>{const u=sl(o,e.mc(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Av(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ye||i instanceof rr||i instanceof vn||i instanceof yt||i instanceof If||i instanceof ir)}function xf(i,e,t){if(!Av(t)||!h_(t)){const s=fc(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}function $d(i,e,t){if((e=At(e))instanceof xc)return e._internalPath;if(typeof e=="string")return Cf(i,e);throw sc("Field path arguments must be of type string or ",i,!1,void 0,t)}const DS=new RegExp("[~\\*/\\[\\]]");function Cf(i,e,t){if(e.search(DS)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new xc(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function sc(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new re($.INVALID_ARGUMENT,m+i+y)}function xv(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VS extends Cv{data(){return super.data()}}function Rf(i,e){return typeof e=="string"?Cf(i,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kf{}class Rv extends kf{}function Du(i,e,...t){let s=[];e instanceof kf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof Nf)).length,m=u.filter((y=>y instanceof Pf)).length;if(h>1||h>0&&m>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Pf extends Rv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Pf(e,t,s)}_apply(e){const t=this._parse(e);return kv(e._query,t),new gs(e.firestore,e.converter,Nd(e._query,t))}_parse(e){const t=Af(e.firestore);return(function(u,h,m,y,_,T,x){let D;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){vy(x,T);const Y=[];for(const J of x)Y.push(_y(y,u,J));D={arrayValue:{values:Y}}}else D=_y(y,u,x)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||vy(x,T),D=NS(m,h,x,T==="in"||T==="not-in");return ft.create(_,T,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Nf extends kf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Vn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)kv(h,y),h=Nd(h,y)})(e._query,t),new gs(e.firestore,e.converter,Nd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Df extends Rv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Df(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wa(u,h)})(e._query,this._field,this._direction);return new gs(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new ko(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function Vu(i,e="asc"){const t=e,s=Rf("orderBy",i);return Df._create(s,t)}function _y(i,e,t){if(typeof(t=At(t))=="string"){if(t==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k_(e)&&t.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!de.isDocumentKey(s))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Og(i,new de(s))}if(t instanceof yt)return Og(i,t._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(t)}.`)}function vy(i,e){if(!Array.isArray(i)||i.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class OS{convertValue(e,t="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ri(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Xu].arrayValue)==null?void 0:o.values)==null?void 0:u.map((h=>at(h.doubleValue)));return new ir(t)}convertGeoPoint(e){return new rr(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=gc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new Ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Fe(X_(s),9688,{name:e});const o=new qa(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||kr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class bu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class co extends Cv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Rf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=co._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}co._jsonSchemaVersion="firestore/documentSnapshot/1.0",co._jsonSchema={type:pt("string",co._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Bu extends co{data(e={}){return super.data(e)}}class ho{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new bu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Bu(this._firestore,this._userDataWriter,s.key,s,new bu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new bu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new Bu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new bu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,T=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:MS(m.type),doc:y,oldIndex:_,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new re($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ho._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:i})}}ho._jsonSchemaVersion="firestore/querySnapshot/1.0",ho._jsonSchema={type:pt("string",ho._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class jS extends OS{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function Ou(i){i=hs(i,gs);const e=hs(i.firestore,il),t=wv(e),s=new jS(e);return bS(i._query),wS(t,i._query).then((o=>new ho(e,s,i,o)))}function FS(i,e,t,...s){i=hs(i,yt);const o=hs(i.firestore,il),u=Af(o);let h;return h=typeof(e=At(e))=="string"||e instanceof xc?PS(u,"updateDoc",i._key,e,t,s):kS(u,"updateDoc",i._key,e),Vf(o,[h.toMutation(i._key,Dn.exists(!0))])}function US(i){return Vf(hs(i.firestore,il),[new of(i._key,Dn.none())])}function zS(i,e){const t=hs(i.firestore,il),s=Bd(i),o=LS(i.converter,e);return Vf(t,[RS(Af(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Dn.exists(!1))]).then((()=>s))}function Vf(i,e){return(function(s,o){const u=new vi;return s.asyncQueue.enqueueAndForget((async()=>aS(await vS(s),o,u))),u.promise})(wv(i),e)}(function(e,t=!0){(function(o){xo=o})(Ao),go(new us("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new il(new AT(s.getProvider("auth-internal")),new RT(h,s.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qa(_.options.projectId,T)})(h,o),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),yi(Tg,Ig,e),yi(Tg,Ig,"esm2020")})();function Pv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BS=Pv,Nv=new Xa("auth","Firebase",Pv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Kd("@firebase/auth");function $S(i,...e){oc.logLevel<=Pe.WARN&&oc.warn(`Auth (${Ao}): ${i}`,...e)}function $u(i,...e){oc.logLevel<=Pe.ERROR&&oc.error(`Auth (${Ao}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(i,...e){throw bf(i,...e)}function sr(i,...e){return bf(i,...e)}function Dv(i,e,t){const s={...BS(),[e]:t};return new Xa("auth","Firebase",s).create(e,{appName:i.name})}function wi(i){return Dv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Nv.create(i,...e)}function ge(i,e,...t){if(!i)throw bf(e,...t)}function xr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw $u(e),new Error(e)}function Nr(i,e){i||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function qS(){return Ey()==="http:"||Ey()==="https:"}function Ey(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qS()||e0()||"connection"in navigator)?navigator.onLine:!0}function WS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nr(t>e,"Short delay should be less than long delay!"),this.isMobile=Xw()||t0()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const KS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QS=new ol(3e4,6e4);function ys(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Pi(i,e,t,s,o={}){return bv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ja({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:y,...u};return Zw()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&So(i.emulatorConfig.host)&&(_.credentials="include"),Vv.fetch()(await Ov(i,i.config.apiHost,t,m),_)})}async function bv(i,e,t){i._canInitEmulator=!1;const s={...GS,...e};try{const o=new XS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Lu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,_]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw Lu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw Lu(i,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Dv(i,T,_);bn(i,T)}}catch(o){if(o instanceof Dr)throw o;bn(i,"network-request-failed",{message:String(o)})}}async function Rc(i,e,t,s,o={}){const u=await Pi(i,e,t,s,o);return"mfaPendingCredential"in u&&bn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ov(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Of(i.config,o):`${i.config.apiScheme}://${o}`;return KS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function YS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sr(this.auth,"network-request-failed")),QS.get())})}}function Lu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=sr(i,e,s);return o.customData._tokenResponse=t,o}function wy(i){return i!==void 0&&i.enterprise!==void 0}class JS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return YS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZS(i,e){return Pi(i,"GET","/v2/recaptchaConfig",ys(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(i,e){return Pi(i,"POST","/v1/accounts:delete",e)}async function ac(i,e){return Pi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(i,e=!1){const t=At(i),s=await t.getIdToken(e),o=Lf(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ua(yd(o.auth_time)),issuedAtTime:Ua(yd(o.iat)),expirationTime:Ua(yd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function yd(i){return Number(i)*1e3}function Lf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return $u("JWT malformed, contained fewer than 3 sections"),null;try{const o=qy(t);return o?JSON.parse(o):($u("Failed to decode base64 JWT payload"),null)}catch(o){return $u("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ty(i){const e=Lf(i);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dr&&nA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function nA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(i){var x;const e=i.auth,t=await i.getIdToken(),s=await Qa(i,ac(e,{idToken:t}));ge(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(x=o.providerUserInfo)!=null&&x.length?Lv(o.providerUserInfo):[],h=sA(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(h!=null&&h.length),_=m?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Hd(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,T)}async function iA(i){const e=At(i);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Lv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(i,e){const t=await bv(i,{},async()=>{const s=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await Ov(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&So(i.emulatorConfig.host)&&(y.credentials="include"),Vv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aA(i,e){return Pi(i,"POST","/v2/accounts:revokeToken",ys(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await oA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new fo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i,e){ge(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Nn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Hd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await Qa(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,_=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:x,emailVerified:D,isAnonymous:B,providerData:Y,stsTokenManager:J}=t;ge(x&&J,e,"internal-error");const W=fo.fromJSON(this.name,J);ge(typeof x=="string",e,"internal-error"),ui(s,e.name),ui(o,e.name),ge(typeof D=="boolean",e,"internal-error"),ge(typeof B=="boolean",e,"internal-error"),ui(u,e.name),ui(h,e.name),ui(m,e.name),ui(y,e.name),ui(_,e.name),ui(T,e.name);const _e=new Nn({uid:x,auth:e,email:o,emailVerified:D,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:W,createdAt:_,lastLoginAt:T});return Y&&Array.isArray(Y)&&(_e.providerData=Y.map(me=>({...me}))),y&&(_e._redirectEventId=y),_e}static async _fromIdTokenResponse(e,t,s=!1){const o=new fo;o.updateFromServerResponse(t);const u=new Nn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await lc(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Lv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new fo;m.updateFromIdToken(s);const y=new Nn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Hd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,_),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;function Cr(i){Nr(i instanceof Function,"Expected a class definition");let e=Iy.get(i);return e?(Nr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Iy.set(i,e),e)}/**
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
 */function qu(i,e,t){return`firebase:${i}:${e}:${t}`}class po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=qu(this.userKey,o.apiKey,u),this.fullPersistenceKey=qu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ac(this.auth,{idToken:e}).catch(()=>{});return t?Nn._fromGetAccountInfoResponse(this.auth,t,e):null}return Nn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new po(Cr(Sy),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Cr(Sy);const h=qu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const T=await _._get(h);if(T){let x;if(typeof T=="string"){const D=await ac(e,{idToken:T}).catch(()=>{});if(!D)break;x=await Nn._fromGetAccountInfoResponse(e,D,T)}else x=Nn._fromJSON(e,T);_!==u&&(m=x),u=_;break}}catch{}const y=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new po(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new po(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($v(e))return"Blackberry";if(qv(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||Uv(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function jv(i=$t()){return/firefox\//i.test(i)}function Fv(i=$t()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uv(i=$t()){return/crios\//i.test(i)}function zv(i=$t()){return/iemobile/i.test(i)}function Bv(i=$t()){return/android/i.test(i)}function $v(i=$t()){return/blackberry/i.test(i)}function qv(i=$t()){return/webos/i.test(i)}function Mf(i=$t()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function lA(i=$t()){var e;return Mf(i)&&!!((e=window.navigator)!=null&&e.standalone)}function uA(){return n0()&&document.documentMode===10}function Hv(i=$t()){return Mf(i)||Bv(i)||qv(i)||$v(i)||/windows phone/i.test(i)||zv(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(i,e=[]){let t;switch(i){case"Browser":t=Ay($t());break;case"Worker":t=`${Ay($t())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${s}`}/**
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
 */async function hA(i,e={}){return Pi(i,"GET","/v2/passwordPolicy",ys(i,e))}/**
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
 */class pA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new cA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await po.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ac(this,{idToken:e}),s=await Nn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Pn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(wi(this));const t=e?At(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),t=new fA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await aA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$S(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function No(i){return At(i)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=c0(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(i){kc=i}function Gv(i){return kc.loadJS(i)}function gA(){return kc.recaptchaEnterpriseScript}function yA(){return kc.gapiScript}function _A(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class vA{constructor(){this.enterprise=new EA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class EA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const wA="recaptcha-enterprise",Kv="NO_RECAPTCHA";class TA{constructor(e){this.type=wA,this.auth=No(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{ZS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const _=new JS(y);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(y=>{m(y)})})}function o(u,h,m){const y=window.grecaptcha;wy(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(Kv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&wy(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=gA();y.length!==0&&(y+=m),Gv(y).then(()=>{o(m,u,h)}).catch(_=>{h(_)})}}).catch(m=>{h(m)})})}}async function Cy(i,e,t,s=!1,o=!1){const u=new TA(i);let h;if(o)h=Kv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,_=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ry(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Cy(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Cy(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(i,e){const t=Yd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ls(u,e??{}))return o;bn(o,"already-initialized")}return t.initialize({options:e})}function SA(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AA(i,e,t){const s=No(i);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Qv(e),{host:h,port:m}=xA(e),y=m===null?"":`:${m}`,_={url:`${u}//${h}${y}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(ls(_,s.config.emulator)&&ls(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,So(h)?(Ky(`${u}//${h}${y}`),Qy("Auth",!0)):CA()}function Qv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function xA(i){const e=Qv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ky(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ky(h)}}}function ky(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function CA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function RA(i,e){return Pi(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(i,e){return Rc(i,"POST","/v1/accounts:signInWithPassword",ys(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(i,e){return Rc(i,"POST","/v1/accounts:signInWithEmailLink",ys(i,e))}async function NA(i,e){return Rc(i,"POST","/v1/accounts:signInWithEmailLink",ys(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends jf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ya(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ya(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ry(e,t,"signInWithPassword",kA);case"emailLink":return PA(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ry(e,s,"signUpPassword",RA);case"emailLink":return NA(e,{idToken:t,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(i,e){return Rc(i,"POST","/v1/accounts:signInWithIdp",ys(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="http://localhost";class fs extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const h=new fs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return mo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,mo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mo(e,t)}buildRequest(){const e={requestUri:DA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bA(i){const e=Pa(Na(i)).link,t=e?Pa(Na(e)).deep_link_id:null,s=Pa(Na(i)).deep_link_id;return(s?Pa(Na(s)).link:null)||s||t||e||i}class Ff{constructor(e){const t=Pa(Na(e)),s=t.apiKey??null,o=t.oobCode??null,u=VA(t.mode??null);ge(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=bA(e);try{return new Ff(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,t){return Ya._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ff.parseLink(t);return ge(s,"argument-error"),Ya._fromEmailAndCode(e,s.code,s.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class al extends Yv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends al{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends al{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends al{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Nn._fromIdTokenResponse(e,s,o),h=Py(s);return new Io({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Py(s);return new Io({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Py(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends Dr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new uc(e,t,s,o)}}function Xv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(i,u,e,s):u})}async function OA(i,e,t=!1){const s=await Qa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Io._forOperation(i,"link",s)}/**
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
 */async function LA(i,e,t=!1){const{auth:s}=i;if(Pn(s.app))return Promise.reject(wi(s));const o="reauthenticate";try{const u=await Qa(i,Xv(s,o,e,i),t);ge(u.idToken,s,"internal-error");const h=Lf(u.idToken);ge(h,s,"internal-error");const{sub:m}=h;return ge(i.uid===m,s,"user-mismatch"),Io._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(i,e,t=!1){if(Pn(i.app))return Promise.reject(wi(i));const s="signIn",o=await Xv(i,s,e),u=await Io._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function MA(i,e){return Jv(No(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(i){const e=No(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function FA(i,e,t){return Pn(i.app)?Promise.reject(wi(i)):MA(At(i),Do.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&jA(i),s})}function UA(i,e,t,s){return At(i).onIdTokenChanged(e,t,s)}function zA(i,e,t){return At(i).beforeAuthStateChanged(e,t)}function BA(i,e,t,s){return At(i).onAuthStateChanged(e,t,s)}function $A(i){return At(i).signOut()}const cc="__sak";/**
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
 */const qA=1e3,HA=10;class eE extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);uA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eE.type="LOCAL";const WA=eE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tE.type="SESSION";const nE=tE;/**
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
 */class KA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const _=Uf("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(x){const D=x;if(D.data.eventId===_)switch(D.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function rE(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function YA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function JA(){return rE()?self:null}/**
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
 */const iE="firebaseLocalStorageDb",ZA=1,hc="firebaseLocalStorage",sE="fbase_key";class ll{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nc(i,e){return i.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function ex(){const i=indexedDB.deleteDatabase(iE);return new ll(i).toPromise()}function Wd(){const i=indexedDB.open(iE,ZA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(hc,{keyPath:sE})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(hc)?e(s):(s.close(),await ex(),e(await Wd()))})})}async function Ny(i,e,t){const s=Nc(i,!0).put({[sE]:e,value:t});return new ll(s).toPromise()}async function tx(i,e){const t=Nc(i,!1).get(e),s=await new ll(t).toPromise();return s===void 0?null:s.value}function Dy(i,e){const t=Nc(i,!0).delete(e);return new ll(t).toPromise()}const nx=800,rx=3;class oE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>rx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(JA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await YA(),!this.activeServiceWorker)return;this.sender=new KA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wd();return await Ny(e,cc,"1"),await Dy(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ny(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>tx(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Nc(o,!1).getAll();return new ll(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oE.type="LOCAL";const ix=oE;new ol(3e4,6e4);/**
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
 */function sx(i,e){return e?Cr(e):(ge(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class zf extends jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ox(i){return Jv(i.auth,new zf(i),i.bypassAuthState)}function ax(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),LA(t,new zf(i),i.bypassAuthState)}async function lx(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),OA(t,new zf(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ox;case"linkViaPopup":case"linkViaRedirect":return lx;case"reauthViaPopup":case"reauthViaRedirect":return ax;default:bn(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new ol(2e3,1e4);class lo extends aE{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ux.get())};e()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="pendingRedirect",Hu=new Map;class hx extends aE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Hu.get(this.auth._key());if(!e){try{const s=await dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Hu.set(this.auth._key(),e)}return this.bypassAuthState||Hu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dx(i,e){const t=mx(e),s=px(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function fx(i,e){Hu.set(i._key(),e)}function px(i){return Cr(i._redirectPersistence)}function mx(i){return qu(cx,i.config.apiKey,i.name)}async function gx(i,e,t=!1){if(Pn(i.app))return Promise.reject(wi(i));const s=No(i),o=sx(s,e),h=await new hx(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=600*1e3;class _x{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!lE(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vy(e))}saveEventToCache(e){this.cachedEventUids.add(Vy(e)),this.lastProcessedEventTime=Date.now()}}function Vy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function lE({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vx(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(i,e={}){return Pi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tx=/^https?/;async function Ix(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Ex(i);for(const t of e)try{if(Sx(t))return}catch{}bn(i,"unauthorized-domain")}function Sx(i){const e=qd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!Tx.test(t))return!1;if(wx.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const Ax=new ol(3e4,6e4);function by(){const i=or().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function xx(i){return new Promise((e,t)=>{var o,u,h;function s(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),t(sr(i,"network-request-failed"))},timeout:Ax.get()})}if((u=(o=or().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((h=or().gapi)!=null&&h.load)s();else{const m=_A("iframefcb");return or()[m]=()=>{gapi.load?s():t(sr(i,"network-request-failed"))},Gv(`${yA()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function Cx(i){return Wu=Wu||xx(i),Wu}/**
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
 */const Rx=new ol(5e3,15e3),kx="__/auth/iframe",Px="emulator/auth/iframe",Nx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vx(i){const e=i.config;ge(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Of(e,Px):`https://${i.config.authDomain}/${kx}`,s={apiKey:e.apiKey,appName:i.name,v:Ao},o=Dx.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ja(s).slice(1)}`}async function bx(i){const e=await Cx(i),t=or().gapi;return ge(t,i,"internal-error"),e.open({where:document.body,url:Vx(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nx,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=sr(i,"network-request-failed"),m=or().setTimeout(()=>{u(h)},Rx.get());function y(){or().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const Ox={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lx=500,Mx=600,jx="_blank",Fx="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ux(i,e,t,s=Lx,o=Mx){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...Ox,width:s.toString(),height:o.toString(),top:u,left:h},_=$t().toLowerCase();t&&(m=Uv(_)?jx:t),jv(_)&&(e=e||Fx,y.scrollbars="yes");const T=Object.entries(y).reduce((D,[B,Y])=>`${D}${B}=${Y},`,"");if(lA(_)&&m!=="_self")return zx(e||"",m),new Oy(null);const x=window.open(e||"",m,T);ge(x,i,"popup-blocked");try{x.focus()}catch{}return new Oy(x)}function zx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Bx="__/auth/handler",$x="emulator/auth/handler",qx=encodeURIComponent("fac");async function Ly(i,e,t,s,o,u){ge(i.config.authDomain,i,"auth-domain-config-required"),ge(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ao,eventId:o};if(e instanceof Yv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",u0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,x]of Object.entries({}))h[T]=x}if(e instanceof al){const T=e.getScopes().filter(x=>x!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),_=y?`#${qx}=${encodeURIComponent(y)}`:"";return`${Hx(i)}?${Ja(m).slice(1)}${_}`}function Hx({config:i}){return i.emulator?Of(i,$x):`https://${i.authDomain}/${Bx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="webStorageSupport";class Wx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nE,this._completeRedirectFn=gx,this._overrideRedirectResult=fx}async _openPopup(e,t,s,o){var h;Nr((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const u=await Ly(e,t,s,qd(),o);return Ux(e,u,Uf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Ly(e,t,s,qd(),o);return QA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Nr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await bx(e),s=new _x(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_d,{type:_d},o=>{var h;const u=(h=o==null?void 0:o[0])==null?void 0:h[_d];u!==void 0&&t(!!u),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ix(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hv()||Fv()||Mf()}}const Gx=Wx;var My="@firebase/auth",jy="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yx(i){go(new us("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(i)},_=new pA(s,o,u,y);return SA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),go(new us("auth-internal",e=>{const t=No(e.getProvider("auth").getImmediate());return(s=>new Kx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(My,jy,Qx(i)),yi(My,jy,"esm2020")}/**
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
 */const Xx=300,Jx=Gy("authIdTokenMaxAge")||Xx;let Fy=null;const Zx=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Jx)return;const o=t==null?void 0:t.token;Fy!==o&&(Fy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function eC(i=Zy()){const e=Yd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=IA(i,{popupRedirectResolver:Gx,persistence:[ix,WA,nE]}),s=Gy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=Zx(u.toString());zA(t,h,()=>h(t.currentUser)),UA(t,m=>h(m))}}const o=Hy("auth");return o&&AA(t,`http://${o}`),t}function tC(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}mA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=sr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",tC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yx("Browser");const nC={apiKey:"AIzaSyBNVnhGUlYw6z-mjapdJuj9Hp3l5z_ESCY",authDomain:"my-portfolio-db-8e7ac.firebaseapp.com",projectId:"my-portfolio-db-8e7ac",storageBucket:"my-portfolio-db-8e7ac.firebasestorage.app",messagingSenderId:"640921515154",appId:"1:640921515154:web:528be384c173cf632e224b"},uE=Jy(nC),ss=IS(uE),vd=eC(uE),rC=()=>{const[i,e]=rt.useState(!1),[t,s]=rt.useState(!1),[o,u]=rt.useState([]),[h,m]=rt.useState([]),[y,_]=rt.useState([]),[T,x]=rt.useState([]),[D,B]=rt.useState(!0),[Y,J]=rt.useState(null),[W,_e]=rt.useState(!1),[me,Ae]=rt.useState(""),[Ce,Be]=rt.useState(""),[Re,P]=rt.useState(""),[I,C]=rt.useState(null),[V,N]=rt.useState(null),[k,S]=rt.useState({}),je=async()=>{B(!0);try{const z=Du(ka(ss,"projects"),Vu("createdAt","desc")),se=await Ou(z);u(se.docs.map(Et=>({id:Et.id,...Et.data()})));const Z=Du(ka(ss,"experiences"),Vu("order","asc")),Ue=await Ou(Z);m(Ue.docs.map(Et=>({id:Et.id,...Et.data()})));const Ct=Du(ka(ss,"educations"),Vu("order","asc")),Vr=await Ou(Ct);_(Vr.docs.map(Et=>({id:Et.id,...Et.data()})));const Ni=Du(ka(ss,"skills"),Vu("order","asc")),On=await Ou(Ni);x(On.docs.map(Et=>({id:Et.id,...Et.data()})))}catch(z){console.error("Error fetching data: ",z)}finally{B(!1)}};rt.useEffect(()=>{je();const z=()=>s(window.scrollY>50);window.addEventListener("scroll",z);const se=BA(vd,Z=>J(Z));return()=>{window.removeEventListener("scroll",z),se()}},[]);const lt=async z=>{z.preventDefault();try{await FA(vd,me,Ce),P(""),_e(!0)}catch{P("Login failed. Check your email/password.")}},vt=async()=>{await $A(vd),_e(!1),ne()},$e=(z,se=null)=>{z==="project"?S(se||{title:"",description:"",link:"",linkText:"View Project",type:"blog",videoId:""}):z==="experience"?S(se||{role:"",company:"",period:"",description:"",details:[]}):z==="education"?S(se||{school:"",degree:"",period:"",description:""}):z==="skill"&&S(se||{category:"",items:""})},te=z=>{N(z),C(null),$e(z)},he=(z,se)=>{C({type:z,id:se.id}),N(null);let Z={...se};z==="skill"&&Array.isArray(se.items)&&(Z.items=se.items.join(", ")),z==="experience"&&Array.isArray(se.details)&&(Z.detailsStr=se.details.join(`
`)),$e(z,Z)},ne=()=>{N(null),C(null),S({})},O=async z=>{try{let se={...k,createdAt:new Date};se.order||(se.order=Date.now()),z==="skill"&&(se.items=k.items.split(",").map(Z=>Z.trim()).filter(Z=>Z)),z==="experience"&&k.detailsStr&&(se.details=k.detailsStr.split(`
`).filter(Z=>Z.trim()),delete se.detailsStr),I&&I.type===z?await FS(Bd(ss,`${z}s`,I.id),se):await zS(ka(ss,`${z}s`),se),je(),ne()}catch(se){console.error("Error saving document: ",se)}},H=async(z,se)=>{if(window.confirm("Are you sure you want to delete this item?"))try{await US(Bd(ss,`${z}s`,se)),je()}catch(Z){console.error("Error deleting document: ",Z)}},ve=z=>{const se=document.getElementById(z);se&&(se.scrollIntoView({behavior:"smooth"}),e(!1))},Ee=z=>{const se=I&&I.type===z;return E.jsxs("div",{className:"glass-panel p-6 rounded-2xl mb-8 animate-fade-in-up border-primary/30 ring-1 ring-primary/20",children:[E.jsxs("h4",{className:"text-lg font-bold text-foreground mb-6 flex items-center gap-2 font-display",children:[se?E.jsx(Ca,{size:20,className:"text-primary"}):E.jsx(Ra,{size:20,className:"text-primary"}),se?"Edit Item":"Add New Item"]}),E.jsxs("div",{className:"grid gap-5",children:[z==="project"&&E.jsxs(E.Fragment,{children:[E.jsx("input",{className:"input-field",placeholder:"Title",value:k.title||"",onChange:Z=>S({...k,title:Z.target.value})}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("select",{className:"input-field",value:k.type||"blog",onChange:Z=>S({...k,type:Z.target.value}),children:[E.jsx("option",{value:"blog",children:"Blog"}),E.jsx("option",{value:"video",children:"Video"}),E.jsx("option",{value:"podcast",children:"Podcast"})]}),E.jsx("input",{className:"input-field",placeholder:"Link Text",value:k.linkText||"",onChange:Z=>S({...k,linkText:Z.target.value})})]}),E.jsx("textarea",{className:"input-field min-h-[100px]",placeholder:"Description",value:k.description||"",onChange:Z=>S({...k,description:Z.target.value})}),k.type==="video"?E.jsx("input",{className:"input-field",placeholder:"YouTube Video ID",value:k.videoId||"",onChange:Z=>S({...k,videoId:Z.target.value})}):E.jsx("input",{className:"input-field",placeholder:"Link URL",value:k.link||"",onChange:Z=>S({...k,link:Z.target.value})})]}),z==="experience"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[E.jsx("input",{className:"input-field",placeholder:"Role / Job Title",value:k.role||"",onChange:Z=>S({...k,role:Z.target.value})}),E.jsx("input",{className:"input-field",placeholder:"Company",value:k.company||"",onChange:Z=>S({...k,company:Z.target.value})})]}),E.jsx("input",{className:"input-field",placeholder:"Period (e.g. 2022 - 2024)",value:k.period||"",onChange:Z=>S({...k,period:Z.target.value})}),E.jsx("textarea",{className:"input-field min-h-[150px]",placeholder:"Details (One item per line)",value:k.detailsStr||"",onChange:Z=>S({...k,detailsStr:Z.target.value})})]}),z==="education"&&E.jsxs(E.Fragment,{children:[E.jsx("input",{className:"input-field",placeholder:"School Name",value:k.school||"",onChange:Z=>S({...k,school:Z.target.value})}),E.jsx("input",{className:"input-field",placeholder:"Degree / Major",value:k.degree||"",onChange:Z=>S({...k,degree:Z.target.value})}),E.jsx("input",{className:"input-field",placeholder:"Period / Location",value:k.period||"",onChange:Z=>S({...k,period:Z.target.value})}),E.jsx("textarea",{className:"input-field min-h-[100px]",placeholder:"Description",value:k.description||"",onChange:Z=>S({...k,description:Z.target.value})})]}),z==="skill"&&E.jsxs(E.Fragment,{children:[E.jsx("input",{className:"input-field",placeholder:"Category",value:k.category||"",onChange:Z=>S({...k,category:Z.target.value})}),E.jsx("textarea",{className:"input-field min-h-[100px]",placeholder:"Skills (Comma separated)",value:k.items||"",onChange:Z=>S({...k,items:Z.target.value})})]}),E.jsxs("div",{className:"flex gap-3 pt-2",children:[E.jsxs("button",{onClick:()=>O(z),className:"btn-primary px-6 py-3 flex items-center gap-2",children:[E.jsx(Ow,{size:18})," Save"]}),E.jsxs("button",{onClick:ne,className:"btn-secondary px-6 py-3 flex items-center gap-2",children:[E.jsx(bw,{size:18})," Cancel"]})]})]})]})},xe=["About","Experience","Projects","Skills","Contact"];return E.jsxs("div",{className:"min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden",children:[E.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none overflow-hidden",children:[E.jsx("div",{className:"absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] animate-pulse-glow"}),E.jsx("div",{className:"absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[120px]"}),E.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/30 rounded-full blur-[200px]"})]}),E.jsx("div",{className:"fixed bottom-8 right-8 z-[100]",children:Y?E.jsxs("div",{className:"flex gap-3 items-center animate-fade-in-up",children:[E.jsx("span",{className:"bg-primary/90 backdrop-blur text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg",children:"Admin Mode"}),E.jsx("button",{onClick:vt,className:"p-4 bg-destructive/90 backdrop-blur-xl text-destructive-foreground rounded-full shadow-2xl hover:bg-destructive hover:scale-110 transition-all duration-300",title:"Logout",children:E.jsx(Dw,{size:20})})]}):E.jsx("button",{onClick:()=>_e(!W),className:"p-4 bg-card/90 backdrop-blur-xl rounded-full shadow-2xl border border-border hover:bg-secondary hover:scale-110 transition-all duration-300 group",title:"Admin Login",children:E.jsx(Nw,{size:20,className:"text-muted-foreground group-hover:text-foreground"})})}),W&&!Y&&E.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-[101] flex items-center justify-center p-4 animate-fade-in",children:E.jsxs("div",{className:"glass-panel p-8 rounded-3xl w-full max-w-md shadow-2xl",children:[E.jsxs("div",{className:"flex justify-between items-center mb-8",children:[E.jsx("h2",{className:"text-2xl font-bold text-foreground font-display",children:"Admin Login"}),E.jsx("button",{onClick:()=>_e(!1),className:"p-2 hover:bg-secondary rounded-full transition-colors",children:E.jsx(ug,{className:"text-muted-foreground hover:text-foreground"})})]}),E.jsxs("form",{onSubmit:lt,className:"space-y-5",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-muted-foreground mb-2",children:"Email"}),E.jsx("input",{type:"email",value:me,onChange:z=>Ae(z.target.value),className:"input-field",placeholder:"admin@example.com"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-sm font-medium text-muted-foreground mb-2",children:"Password"}),E.jsx("input",{type:"password",value:Ce,onChange:z=>Be(z.target.value),className:"input-field",placeholder:"••••••••"})]}),Re&&E.jsx("div",{className:"p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm text-center",children:Re}),E.jsx("button",{type:"submit",className:"w-full btn-primary py-4 text-base",children:"Access Dashboard"})]})]})}),E.jsxs("nav",{className:`fixed w-full z-40 transition-all duration-500 ${t?"bg-background/80 backdrop-blur-xl border-b border-border shadow-lg":"bg-transparent py-2"}`,children:[E.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex justify-between items-center",children:[E.jsxs("div",{onClick:()=>ve("home"),className:"text-2xl font-black text-foreground cursor-pointer hover:text-primary transition-colors font-display",children:["HK",E.jsx("span",{className:"text-primary",children:"."})]}),E.jsx("div",{className:"hidden md:flex items-center gap-1",children:xe.map(z=>E.jsx("button",{onClick:()=>ve(z.toLowerCase()),className:"px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all",children:z},z))}),E.jsx("div",{className:"md:hidden",children:E.jsx("button",{onClick:()=>e(!i),className:"text-foreground p-2 hover:bg-secondary rounded-lg transition-colors",children:i?E.jsx(ug,{size:24}):E.jsx(Vw,{size:24})})})]}),i&&E.jsx("div",{className:"md:hidden bg-card/95 backdrop-blur-xl border-b border-border animate-slide-down absolute w-full",children:E.jsx("div",{className:"px-6 py-4 flex flex-col space-y-2",children:xe.map(z=>E.jsx("button",{onClick:()=>ve(z.toLowerCase()),className:"text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all",children:z},z))})})]}),E.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center px-6 relative pt-20",children:E.jsxs("div",{className:"max-w-5xl mx-auto text-center relative z-10",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold animate-fade-in-up",children:[E.jsx(Lw,{size:16}),"Content Strategist & Producer"]}),E.jsxs("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-[0.95] tracking-tight animate-fade-in-up delay-100 font-display",children:["Hyeongmo"," ",E.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400",children:"Kim"})]}),E.jsxs("p",{className:"text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200",children:["Combining ",E.jsx("span",{className:"text-foreground font-medium",children:"Content"}),","," ",E.jsx("span",{className:"text-foreground font-medium",children:"AI"}),", and"," ",E.jsx("span",{className:"text-foreground font-medium",children:"Psychology"})," to create impactful digital experiences."]}),E.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up delay-300",children:[E.jsxs("button",{onClick:()=>ve("contact"),className:"btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3",children:[E.jsx(ag,{size:20})," Get in Touch"]}),E.jsxs("a",{href:"https://www.linkedin.com/in/hmstory0111",target:"_blank",rel:"noreferrer",className:"btn-secondary py-4 px-8 text-lg flex items-center justify-center gap-3",children:[E.jsx(Pw,{size:20})," LinkedIn"]})]}),E.jsx("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 animate-float",children:E.jsx("div",{className:"w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2",children:E.jsx("div",{className:"w-1.5 h-3 bg-primary rounded-full animate-bounce"})})})]})}),E.jsx("section",{id:"about",className:"py-32 px-6",children:E.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start",children:[E.jsxs("div",{className:"animate-fade-in-up",children:[E.jsx("h2",{className:"section-title mb-8",children:"Professional Summary"}),E.jsxs("div",{className:"space-y-6 text-lg text-muted-foreground leading-relaxed",children:[E.jsxs("p",{children:["I am a multidisciplinary professional working across"," ",E.jsx("span",{className:"text-foreground font-medium",children:"content strategy, production, and operations"}),". My passion lies in bridging the gap between creative storytelling and analytical rigor."]}),E.jsxs("p",{children:["Currently, I am expanding my expertise by pursuing an"," ",E.jsx("span",{className:"text-primary font-semibold",children:"M.A. in Digital Innovation"}),", specifically studying how AI and data can inform audience behavior analysis and decision-making processes."]})]})]}),E.jsxs("div",{className:"glass-panel p-8 rounded-3xl shadow-xl relative animate-fade-in-up delay-200",children:[E.jsxs("div",{className:"flex items-center justify-between mb-8 pb-6 border-b border-border",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("div",{className:"p-3 bg-primary/10 rounded-xl text-primary",children:E.jsx(od,{size:28})}),E.jsx("h3",{className:"text-2xl font-bold text-foreground font-display",children:"Education"})]}),Y&&E.jsx("button",{onClick:()=>te("education"),className:"icon-btn-add",children:E.jsx(Ra,{size:20})})]}),(V==="education"||(I==null?void 0:I.type)==="education")&&Ee("education"),E.jsx("div",{className:"space-y-8",children:y.length>0?y.map(z=>E.jsxs("div",{className:"relative pl-8 border-l-2 border-border group hover:border-primary/50 transition-colors",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background group-hover:bg-primary transition-colors"}),Y&&E.jsxs("div",{className:"absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-all",children:[E.jsx("button",{onClick:()=>he("education",z),className:"icon-btn-edit",children:E.jsx(Ca,{size:14})}),E.jsx("button",{onClick:()=>H("education",z.id),className:"icon-btn-delete",children:E.jsx(xu,{size:14})})]}),E.jsx("h4",{className:"text-xl font-bold text-foreground mb-1 font-display",children:z.school}),E.jsxs("p",{className:"text-primary font-medium text-sm mb-3 uppercase tracking-wide",children:[z.degree," • ",z.period]}),E.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed bg-secondary/30 p-4 rounded-xl",children:z.description})]},z.id)):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"relative pl-8 border-l-2 border-primary/30",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"}),E.jsx("h4",{className:"text-xl font-bold text-foreground mb-1 font-display",children:"Yonsei University - Graduate School"}),E.jsxs("div",{className:"flex items-center gap-3 text-primary font-medium text-sm mb-3",children:[E.jsx(sg,{size:14}),E.jsx("span",{children:"M.A. Digital Innovation (Expected 2027)"})]}),E.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:"Focus: Audience Behavior, AI Data-driven decision-making"})]}),E.jsxs("div",{className:"relative pl-8 border-l-2 border-border",children:[E.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-border"}),E.jsx("h4",{className:"text-xl font-bold text-foreground mb-1 font-display",children:"Yonsei University"}),E.jsxs("div",{className:"flex items-center gap-3 text-muted-foreground text-sm mb-3",children:[E.jsx(sg,{size:14}),E.jsx("span",{children:"B.A. International Relations & Psychology • 2005 - 2013"})]})]})]})})]})]})}),E.jsxs("section",{id:"experience",className:"py-32 px-6 relative",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none"}),E.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[E.jsxs("div",{className:"flex items-center justify-between mb-16",children:[E.jsx("h2",{className:"section-title",children:"Professional Experience"}),Y&&E.jsxs("button",{onClick:()=>te("experience"),className:"btn-primary py-3 px-5 text-sm flex items-center gap-2",children:[E.jsx(Ra,{size:18})," Add"]})]}),(V==="experience"||(I==null?void 0:I.type)==="experience")&&Ee("experience"),E.jsx("div",{className:"space-y-8",children:h.length>0?h.map(z=>E.jsxs("div",{className:"glass-card p-8 rounded-3xl group relative",children:[Y&&E.jsxs("div",{className:"absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all",children:[E.jsx("button",{onClick:()=>he("experience",z),className:"icon-btn-edit",children:E.jsx(Ca,{size:16})}),E.jsx("button",{onClick:()=>H("experience",z.id),className:"icon-btn-delete",children:E.jsx(xu,{size:16})})]}),E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display",children:z.role}),E.jsx("p",{className:"text-lg text-muted-foreground font-medium",children:z.company})]}),E.jsx("span",{className:"px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border",children:z.period})]}),E.jsx("ul",{className:"space-y-3",children:z.details&&z.details.map((se,Z)=>E.jsxs("li",{className:"flex items-start gap-3 text-muted-foreground leading-relaxed group-hover:text-secondary-foreground transition-colors",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:se})]},Z))})]},z.id)):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"glass-card p-8 rounded-3xl group",children:[E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display",children:"Podcast & Video Producer"}),E.jsx("p",{className:"text-lg text-muted-foreground font-medium",children:"Krafton - Publishing Platform Division"})]}),E.jsx("span",{className:"px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20",children:"2025 - Present"})]}),E.jsxs("ul",{className:"space-y-3 text-muted-foreground",children:[E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Produced internal podcasts and videos for 200+ staff"})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Full production cycle: script, host, record, film, edit"})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Used AI tools for faster editing and new storytelling"})]})]})]}),E.jsxs("div",{className:"glass-card p-8 rounded-3xl group",children:[E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display",children:"Content Strategy & Operations"}),E.jsx("p",{className:"text-lg text-muted-foreground font-medium",children:"Krafton - Deep Learning Division (AUDIC)"})]}),E.jsx("span",{className:"px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border",children:"2022 - 2024"})]}),E.jsxs("ul",{className:"space-y-3 text-muted-foreground",children:[E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Led content strategy for AI-based voice UGC platform"})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Analyzed user data to guide programming and growth"})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Onboarded 4 creator communities; sustained WAU ≈ 3,000"})]})]})]}),E.jsxs("div",{className:"glass-card p-8 rounded-3xl group",children:[E.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-display",children:"Producer & Writer"}),E.jsx("p",{className:"text-lg text-muted-foreground font-medium",children:"Radio & Podcast (TBS, EBS, Gugak FM)"})]}),E.jsx("span",{className:"px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border",children:"2015 - 2021"})]}),E.jsxs("ul",{className:"space-y-3 text-muted-foreground",children:[E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Won 2017 Korean PD Award (TBS)"})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Won 2018 Program of the Month Award (EBS)"})]}),E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"}),E.jsx("span",{children:"Directed 200+ guest interviews per year"})]})]})]})]})})]})]}),E.jsx("section",{id:"projects",className:"py-32 px-6",children:E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"flex items-center justify-between mb-16",children:[E.jsx("h2",{className:"section-title",children:"Selected Works"}),Y&&E.jsxs("button",{onClick:()=>te("project"),className:"btn-primary py-3 px-5 text-sm flex items-center gap-2",children:[E.jsx(Ra,{size:18})," Add"]})]}),(V==="project"||(I==null?void 0:I.type)==="project")&&Ee("project"),E.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[E.jsxs("div",{className:"glass-card rounded-2xl overflow-hidden group flex flex-col",children:[E.jsxs("div",{className:"h-56 bg-secondary flex items-center justify-center relative overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/20 transition-colors"}),E.jsx(od,{size:56,className:"text-muted-foreground group-hover:text-primary transition-colors z-10 group-hover:scale-110 transition-transform duration-500"})]}),E.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[E.jsx("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display",children:"Film Review Blog"}),E.jsx("p",{className:"text-muted-foreground mb-6 text-sm leading-relaxed flex-1",children:"A comprehensive film review platform analyzing cinematic techniques and storytelling structures."}),E.jsxs("a",{href:"https://medium.com/@hmstory0111",target:"_blank",rel:"noreferrer",className:"mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link",children:["View Blog ",E.jsx(Au,{size:16,className:"group-hover/link:translate-x-1 transition-transform"})]})]})]}),E.jsxs("div",{className:"glass-card rounded-2xl overflow-hidden group flex flex-col",children:[E.jsxs("div",{className:"h-56 bg-secondary flex items-center justify-center relative overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent group-hover:from-purple-500/20 transition-colors"}),E.jsx(lg,{size:56,className:"text-muted-foreground group-hover:text-purple-400 transition-colors z-10 group-hover:scale-110 transition-transform duration-500"})]}),E.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[E.jsx("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors font-display",children:"Film Review Podcast"}),E.jsx("p",{className:"text-muted-foreground mb-6 text-sm leading-relaxed flex-1",children:"Proof of concept audio series exploring film narratives. Produced, hosted, and edited solo."}),E.jsxs("a",{href:"https://youtu.be/ZafaT7ibW9I",target:"_blank",rel:"noreferrer",className:"mt-auto inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group/link",children:["Listen on YouTube"," ",E.jsx(Au,{size:16,className:"group-hover/link:translate-x-1 transition-transform"})]})]})]}),E.jsxs("div",{className:"glass-card rounded-2xl overflow-hidden group flex flex-col",children:[E.jsx("div",{className:"h-56 bg-secondary flex items-center justify-center relative overflow-hidden",children:E.jsx("img",{src:"https://img.youtube.com/vi/kcb8OI46uTA/hqdefault.jpg",alt:"AI Video",className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"})}),E.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[E.jsx("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-red-400 transition-colors font-display",children:"AI Creative Video"}),E.jsx("p",{className:"text-muted-foreground mb-6 text-sm leading-relaxed flex-1",children:"Experimental video content created using Generative AI tools for new visual storytelling."}),E.jsxs("a",{href:"https://youtu.be/kcb8OI46uTA",target:"_blank",rel:"noreferrer",className:"mt-auto inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors group/link",children:["Watch on YouTube"," ",E.jsx(Au,{size:16,className:"group-hover/link:translate-x-1 transition-transform"})]})]})]}),o.map(z=>E.jsxs("div",{className:"glass-card rounded-2xl overflow-hidden group relative flex flex-col",children:[Y&&E.jsxs("div",{className:"absolute top-3 right-3 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all bg-background/50 p-1.5 rounded-full backdrop-blur-md",children:[E.jsx("button",{onClick:()=>he("project",z),className:"icon-btn-edit",children:E.jsx(Ca,{size:14})}),E.jsx("button",{onClick:()=>H("project",z.id),className:"icon-btn-delete",children:E.jsx(xu,{size:14})})]}),E.jsx("div",{className:"h-56 bg-secondary flex items-center justify-center relative overflow-hidden",children:z.type==="video"&&z.videoId?E.jsx("img",{src:`https://img.youtube.com/vi/${z.videoId}/hqdefault.jpg`,alt:z.title,className:"w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"}):E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"}),z.type==="podcast"?E.jsx(lg,{size:56,className:"text-muted-foreground group-hover:text-purple-400 z-10"}):E.jsx(od,{size:56,className:"text-muted-foreground group-hover:text-primary z-10"})]})}),E.jsxs("div",{className:"p-8 flex-1 flex flex-col",children:[E.jsx("h3",{className:"text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-display",children:z.title}),E.jsx("p",{className:"text-muted-foreground mb-6 text-sm line-clamp-3 leading-relaxed flex-1",children:z.description}),E.jsxs("a",{href:z.type==="video"?`https://youtu.be/${z.videoId}`:z.link,target:"_blank",rel:"noreferrer",className:"mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link",children:[z.linkText||"View Detail"," ",E.jsx(Au,{size:16,className:"group-hover/link:translate-x-1 transition-transform"})]})]})]},z.id))]})]})}),E.jsxs("section",{id:"skills",className:"py-32 px-6 relative",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20 pointer-events-none"}),E.jsxs("div",{className:"max-w-5xl mx-auto relative z-10",children:[E.jsxs("div",{className:"flex items-center justify-center gap-4 mb-16 relative",children:[E.jsx("h2",{className:"section-title text-center",children:"Skills & Expertise"}),Y&&E.jsx("button",{onClick:()=>te("skill"),className:"absolute right-0 top-1 btn-primary py-2 px-3 text-xs",children:E.jsx(Ra,{size:16})})]}),(V==="skill"||(I==null?void 0:I.type)==="skill")&&Ee("skill"),E.jsx("div",{className:"grid md:grid-cols-2 gap-10",children:T.length>0?T.map(z=>E.jsxs("div",{className:"relative group",children:[Y&&E.jsxs("div",{className:"absolute -top-2 -right-2 z-20 flex gap-1 opacity-0 group-hover:opacity-100 transition-all",children:[E.jsx("button",{onClick:()=>he("skill",z),className:"icon-btn-edit",children:E.jsx(Ca,{size:12})}),E.jsx("button",{onClick:()=>H("skill",z.id),className:"icon-btn-delete",children:E.jsx(xu,{size:12})})]}),E.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[E.jsx("div",{className:"p-2 bg-primary/10 rounded-lg text-primary",children:E.jsx(og,{size:24})}),E.jsx("h3",{className:"text-xl font-bold text-foreground font-display",children:z.category})]}),E.jsx("div",{className:"flex flex-wrap gap-3",children:z.items&&z.items.map((se,Z)=>E.jsx("span",{className:"px-4 py-2 bg-secondary hover:bg-muted text-secondary-foreground rounded-lg text-sm border border-border hover:border-primary/30 transition-all cursor-default",children:se},Z))})]},z.id)):E.jsxs(E.Fragment,{children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[E.jsx("div",{className:"p-2 bg-primary/10 rounded-lg text-primary",children:E.jsx(og,{size:24})}),E.jsx("h3",{className:"text-xl font-bold text-foreground font-display",children:"Strategy & Data"})]}),E.jsx("div",{className:"flex flex-wrap gap-3",children:["Audience Insights","Content Analytics","Roadmapping","Cross-functional Ops"].map(z=>E.jsx("span",{className:"px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm border border-border hover:border-primary/30 transition-all",children:z},z))})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[E.jsx("div",{className:"p-2 bg-primary/10 rounded-lg text-primary",children:E.jsx(Mw,{size:24})}),E.jsx("h3",{className:"text-xl font-bold text-foreground font-display",children:"Production & Tools"})]}),E.jsx("div",{className:"flex flex-wrap gap-3",children:["Pro Tools","Premiere Pro","Final Cut Pro","AI Editing Tools"].map(z=>E.jsx("span",{className:"px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm border border-border hover:border-primary/30 transition-all",children:z},z))})]})]})})]})]}),E.jsx("section",{id:"contact",className:"py-32 px-6",children:E.jsxs("div",{className:"max-w-3xl mx-auto text-center glass-panel p-12 rounded-3xl shadow-2xl relative overflow-hidden",children:[E.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-amber-400 to-primary"}),E.jsx("div",{className:"absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"}),E.jsx("div",{className:"absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"}),E.jsx("h2",{className:"text-4xl font-bold text-foreground mb-8 font-display relative z-10",children:"Ready to Collaborate?"}),E.jsx("p",{className:"text-muted-foreground mb-10 text-lg relative z-10",children:"I'm always open to discussing content strategy, AI applications in media, or production opportunities."}),E.jsx("div",{className:"flex flex-col sm:flex-row justify-center gap-6 relative z-10",children:E.jsxs("a",{href:"mailto:hmstory0111@gmail.com",className:"btn-primary py-4 px-8 text-lg flex items-center justify-center gap-3 w-full sm:w-auto",children:[E.jsx(ag,{size:22})," hmstory0111@gmail.com"]})}),E.jsx("div",{className:"mt-16 pt-8 border-t border-border text-muted-foreground text-sm font-medium relative z-10",children:E.jsx("p",{children:"© 2025 Hyeongmo Kim. All rights reserved."})})]})})]})};xw.createRoot(document.getElementById("root")).render(E.jsx(vw.StrictMode,{children:E.jsx(rC,{})}));
