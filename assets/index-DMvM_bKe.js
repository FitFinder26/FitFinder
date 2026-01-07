(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();function sT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hh={exports:{}},Ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function lT(){if(Rv)return Ls;Rv=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(o,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var m in l)m!=="key"&&(u[m]=l[m])}else u=l;return l=u.ref,{$$typeof:e,type:o,key:d,ref:l!==void 0?l:null,props:u}}return Ls.Fragment=a,Ls.jsx=r,Ls.jsxs=r,Ls}var Mv;function cT(){return Mv||(Mv=1,hh.exports=lT()),hh.exports}var h=cT(),mh={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function uT(){if(Dv)return _e;Dv=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),b=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,j={};function C(k,K,te){this.props=k,this.context=K,this.refs=j,this.updater=te||T}C.prototype.isReactComponent={},C.prototype.setState=function(k,K){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,K,"setState")},C.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function z(){}z.prototype=C.prototype;function N(k,K,te){this.props=k,this.context=K,this.refs=j,this.updater=te||T}var q=N.prototype=new z;q.constructor=N,M(q,C.prototype),q.isPureReactComponent=!0;var H=Array.isArray;function A(){}var $={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function X(k,K,te){var le=te.ref;return{$$typeof:e,type:k,key:K,ref:le!==void 0?le:null,props:te}}function se(k,K){return X(k.type,K,k.props)}function pe(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function Ne(k){var K={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(te){return K[te]})}var de=/\/+/g;function ge(k,K){return typeof k=="object"&&k!==null&&k.key!=null?Ne(""+k.key):K.toString(36)}function ze(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(A,A):(k.status="pending",k.then(function(K){k.status==="pending"&&(k.status="fulfilled",k.value=K)},function(K){k.status==="pending"&&(k.status="rejected",k.reason=K)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function D(k,K,te,le,ye){var Ee=typeof k;(Ee==="undefined"||Ee==="boolean")&&(k=null);var ne=!1;if(k===null)ne=!0;else switch(Ee){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(k.$$typeof){case e:case a:ne=!0;break;case y:return ne=k._init,D(ne(k._payload),K,te,le,ye)}}if(ne)return ye=ye(k),ne=le===""?"."+ge(k,0):le,H(ye)?(te="",ne!=null&&(te=ne.replace(de,"$&/")+"/"),D(ye,K,te,"",function(he){return he})):ye!=null&&(pe(ye)&&(ye=se(ye,te+(ye.key==null||k&&k.key===ye.key?"":(""+ye.key).replace(de,"$&/")+"/")+ne)),K.push(ye)),1;ne=0;var re=le===""?".":le+":";if(H(k))for(var ae=0;ae<k.length;ae++)le=k[ae],Ee=re+ge(le,ae),ne+=D(le,K,te,Ee,ye);else if(ae=S(k),typeof ae=="function")for(k=ae.call(k),ae=0;!(le=k.next()).done;)le=le.value,Ee=re+ge(le,ae++),ne+=D(le,K,te,Ee,ye);else if(Ee==="object"){if(typeof k.then=="function")return D(ze(k),K,te,le,ye);throw K=String(k),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ne}function _(k,K,te){if(k==null)return k;var le=[],ye=0;return D(k,le,"","",function(Ee){return K.call(te,Ee,ye++)}),le}function I(k){if(k._status===-1){var K=k._result;K=K(),K.then(function(te){(k._status===0||k._status===-1)&&(k._status=1,k._result=te)},function(te){(k._status===0||k._status===-1)&&(k._status=2,k._result=te)}),k._status===-1&&(k._status=0,k._result=K)}if(k._status===1)return k._result.default;throw k._result}var oe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},ue={map:_,forEach:function(k,K,te){_(k,function(){K.apply(this,arguments)},te)},count:function(k){var K=0;return _(k,function(){K++}),K},toArray:function(k){return _(k,function(K){return K})||[]},only:function(k){if(!pe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return _e.Activity=v,_e.Children=ue,_e.Component=C,_e.Fragment=r,_e.Profiler=l,_e.PureComponent=N,_e.StrictMode=o,_e.Suspense=p,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,_e.__COMPILER_RUNTIME={__proto__:null,c:function(k){return $.H.useMemoCache(k)}},_e.cache=function(k){return function(){return k.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(k,K,te){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var le=M({},k.props),ye=k.key;if(K!=null)for(Ee in K.key!==void 0&&(ye=""+K.key),K)!P.call(K,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&K.ref===void 0||(le[Ee]=K[Ee]);var Ee=arguments.length-2;if(Ee===1)le.children=te;else if(1<Ee){for(var ne=Array(Ee),re=0;re<Ee;re++)ne[re]=arguments[re+2];le.children=ne}return X(k.type,ye,le)},_e.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:u,_context:k},k},_e.createElement=function(k,K,te){var le,ye={},Ee=null;if(K!=null)for(le in K.key!==void 0&&(Ee=""+K.key),K)P.call(K,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(ye[le]=K[le]);var ne=arguments.length-2;if(ne===1)ye.children=te;else if(1<ne){for(var re=Array(ne),ae=0;ae<ne;ae++)re[ae]=arguments[ae+2];ye.children=re}if(k&&k.defaultProps)for(le in ne=k.defaultProps,ne)ye[le]===void 0&&(ye[le]=ne[le]);return X(k,Ee,ye)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(k){return{$$typeof:m,render:k}},_e.isValidElement=pe,_e.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:I}},_e.memo=function(k,K){return{$$typeof:g,type:k,compare:K===void 0?null:K}},_e.startTransition=function(k){var K=$.T,te={};$.T=te;try{var le=k(),ye=$.S;ye!==null&&ye(te,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(A,oe)}catch(Ee){oe(Ee)}finally{K!==null&&te.types!==null&&(K.types=te.types),$.T=K}},_e.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},_e.use=function(k){return $.H.use(k)},_e.useActionState=function(k,K,te){return $.H.useActionState(k,K,te)},_e.useCallback=function(k,K){return $.H.useCallback(k,K)},_e.useContext=function(k){return $.H.useContext(k)},_e.useDebugValue=function(){},_e.useDeferredValue=function(k,K){return $.H.useDeferredValue(k,K)},_e.useEffect=function(k,K){return $.H.useEffect(k,K)},_e.useEffectEvent=function(k){return $.H.useEffectEvent(k)},_e.useId=function(){return $.H.useId()},_e.useImperativeHandle=function(k,K,te){return $.H.useImperativeHandle(k,K,te)},_e.useInsertionEffect=function(k,K){return $.H.useInsertionEffect(k,K)},_e.useLayoutEffect=function(k,K){return $.H.useLayoutEffect(k,K)},_e.useMemo=function(k,K){return $.H.useMemo(k,K)},_e.useOptimistic=function(k,K){return $.H.useOptimistic(k,K)},_e.useReducer=function(k,K,te){return $.H.useReducer(k,K,te)},_e.useRef=function(k){return $.H.useRef(k)},_e.useState=function(k){return $.H.useState(k)},_e.useSyncExternalStore=function(k,K,te){return $.H.useSyncExternalStore(k,K,te)},_e.useTransition=function(){return $.H.useTransition()},_e.version="19.2.0",_e}var zv;function Bm(){return zv||(zv=1,mh.exports=uT()),mh.exports}var w=Bm();const We=sT(w);var ph={exports:{}},Ns={},gh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function dT(){return Ov||(Ov=1,(function(e){function a(D,_){var I=D.length;D.push(_);e:for(;0<I;){var oe=I-1>>>1,ue=D[oe];if(0<l(ue,_))D[oe]=_,D[I]=ue,I=oe;else break e}}function r(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var _=D[0],I=D.pop();if(I!==_){D[0]=I;e:for(var oe=0,ue=D.length,k=ue>>>1;oe<k;){var K=2*(oe+1)-1,te=D[K],le=K+1,ye=D[le];if(0>l(te,I))le<ue&&0>l(ye,te)?(D[oe]=ye,D[le]=I,oe=le):(D[oe]=te,D[K]=I,oe=K);else if(le<ue&&0>l(ye,I))D[oe]=ye,D[le]=I,oe=le;else break e}}return _}function l(D,_){var I=D.sortIndex-_.sortIndex;return I!==0?I:D.id-_.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();e.unstable_now=function(){return d.now()-m}}var p=[],g=[],y=1,v=null,b=3,S=!1,T=!1,M=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function q(D){for(var _=r(g);_!==null;){if(_.callback===null)o(g);else if(_.startTime<=D)o(g),_.sortIndex=_.expirationTime,a(p,_);else break;_=r(g)}}function H(D){if(M=!1,q(D),!T)if(r(p)!==null)T=!0,A||(A=!0,Ne());else{var _=r(g);_!==null&&ze(H,_.startTime-D)}}var A=!1,$=-1,P=5,X=-1;function se(){return j?!0:!(e.unstable_now()-X<P)}function pe(){if(j=!1,A){var D=e.unstable_now();X=D;var _=!0;try{e:{T=!1,M&&(M=!1,z($),$=-1),S=!0;var I=b;try{t:{for(q(D),v=r(p);v!==null&&!(v.expirationTime>D&&se());){var oe=v.callback;if(typeof oe=="function"){v.callback=null,b=v.priorityLevel;var ue=oe(v.expirationTime<=D);if(D=e.unstable_now(),typeof ue=="function"){v.callback=ue,q(D),_=!0;break t}v===r(p)&&o(p),q(D)}else o(p);v=r(p)}if(v!==null)_=!0;else{var k=r(g);k!==null&&ze(H,k.startTime-D),_=!1}}break e}finally{v=null,b=I,S=!1}_=void 0}}finally{_?Ne():A=!1}}}var Ne;if(typeof N=="function")Ne=function(){N(pe)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=pe,Ne=function(){ge.postMessage(null)}}else Ne=function(){C(pe,0)};function ze(D,_){$=C(function(){D(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(D){switch(b){case 1:case 2:case 3:var _=3;break;default:_=b}var I=b;b=_;try{return D()}finally{b=I}},e.unstable_requestPaint=function(){j=!0},e.unstable_runWithPriority=function(D,_){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=b;b=D;try{return _()}finally{b=I}},e.unstable_scheduleCallback=function(D,_,I){var oe=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?oe+I:oe):I=oe,D){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=I+ue,D={id:y++,callback:_,priorityLevel:D,startTime:I,expirationTime:ue,sortIndex:-1},I>oe?(D.sortIndex=I,a(g,D),r(p)===null&&D===r(g)&&(M?(z($),$=-1):M=!0,ze(H,I-oe))):(D.sortIndex=ue,a(p,D),T||S||(T=!0,A||(A=!0,Ne()))),D},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(D){var _=b;return function(){var I=b;b=_;try{return D.apply(this,arguments)}finally{b=I}}}})(yh)),yh}var kv;function fT(){return kv||(kv=1,gh.exports=dT()),gh.exports}var vh={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function hT(){if(Lv)return en;Lv=1;var e=Bm();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:g,implementation:y}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,en.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return u(p,g,null,y)},en.flushSync=function(p){var g=d.T,y=o.p;try{if(d.T=null,o.p=2,p)return p()}finally{d.T=g,o.p=y,o.d.f()}},en.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(p,g))},en.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},en.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,v=m(y,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?o.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:b,fetchPriority:S}):y==="script"&&o.d.X(p,{crossOrigin:v,integrity:b,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},en.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);o.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(p)},en.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=m(y,g.crossOrigin);o.d.L(p,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},en.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=m(g.as,g.crossOrigin);o.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(p)},en.requestFormReset=function(p){o.d.r(p)},en.unstable_batchedUpdates=function(p,g){return p(g)},en.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},en.useFormStatus=function(){return d.H.useHostTransitionStatus()},en.version="19.2.0",en}var Nv;function jb(){if(Nv)return vh.exports;Nv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),vh.exports=hT(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function mT(){if(_v)return Ns;_v=1;var e=fT(),a=Bm(),r=jb();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(o(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(o(188));return n!==t?null:t}for(var i=t,s=n;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(o(188))}if(i.return!==s.return)i=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===i){x=!0,i=c,s=f;break}if(E===s){x=!0,s=c,i=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===i){x=!0,i=f,s=c;break}if(E===s){x=!0,s=f,i=c;break}E=E.sibling}if(!x)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Ne(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case C:return"Profiler";case j:return"StrictMode";case H:return"Suspense";case A:return"SuspenseList";case X:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case N:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var ze=Array.isArray,D=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},oe=[],ue=-1;function k(t){return{current:t}}function K(t){0>ue||(t.current=oe[ue],oe[ue]=null,ue--)}function te(t,n){ue++,oe[ue]=t.current,t.current=n}var le=k(null),ye=k(null),Ee=k(null),ne=k(null);function re(t,n){switch(te(Ee,n),te(ye,t),te(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zy(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zy(n),t=Wy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(le),te(le,t)}function ae(){K(le),K(ye),K(Ee)}function he(t){t.memoizedState!==null&&te(ne,t);var n=le.current,i=Wy(n,t.type);n!==i&&(te(ye,t),te(le,i))}function Oe(t){ye.current===t&&(K(le),K(ye)),ne.current===t&&(K(ne),Ds._currentValue=I)}var Ae,ke;function Me(t){if(Ae===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Ae=n&&n[1]||"",ke=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ae+t+ke}var ut=!1;function Tt(t,n){if(!t||ut)return"";ut=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(Z){var G=Z}Reflect.construct(t,[],ee)}else{try{ee.call()}catch(Z){G=Z}t.call(ee.prototype)}}else{try{throw Error()}catch(Z){G=Z}(ee=t())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(Z){if(Z&&G&&typeof Z.stack=="string")return[Z.stack,G.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var O=x.split(`
`),Y=E.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===Y.length)for(s=O.length-1,c=Y.length-1;1<=s&&0<=c&&O[s]!==Y[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==Y[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==Y[c]){var W=`
`+O[s].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=s&&0<=c);break}}}finally{ut=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Me(i):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Tt(t.type,!1);case 11:return Tt(t.type.render,!1);case 1:return Tt(t.type,!0);case 31:return Me("Activity");default:return""}}function Ct(t){try{var n="",i=null;do n+=nn(t,i),i=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var jt=Object.prototype.hasOwnProperty,an=e.unstable_scheduleCallback,wn=e.unstable_cancelCallback,aa=e.unstable_shouldYield,ma=e.unstable_requestPaint,De=e.unstable_now,dt=e.unstable_getCurrentPriorityLevel,Ht=e.unstable_ImmediatePriority,gt=e.unstable_UserBlockingPriority,pa=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,si=e.unstable_IdlePriority,Go=e.log,Xt=e.unstable_setDisableYieldValue,zn=null,$t=null;function ia(t){if(typeof Go=="function"&&Xt(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(zn,t)}catch{}}var rn=Math.clz32?Math.clz32:Nl,Ll=Math.log,Nr=Math.LN2;function Nl(t){return t>>>=0,t===0?32:31-(Ll(t)/Nr|0)|0}var li=256,_r=262144,Ki=4194304;function Ma(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qi(t,n,i){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Ma(s):(x&=E,x!==0?c=Ma(x):i||(i=E&~t,i!==0&&(c=Ma(i))))):(E=s&~f,E!==0?c=Ma(E):x!==0?c=Ma(x):i||(i=s&~t,i!==0&&(c=Ma(i)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,i=n&-n,f>=i||f===32&&(i&4194048)!==0)?n:c}function ga(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ur(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(){var t=Ki;return Ki<<=1,(Ki&62914560)===0&&(Ki=4194304),t}function Xo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function L(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function B(t,n,i,s,c,f){var x=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,Y=t.hiddenUpdates;for(i=x&~i;0<i;){var W=31-rn(i),ee=1<<W;E[W]=0,O[W]=-1;var G=Y[W];if(G!==null)for(Y[W]=null,W=0;W<G.length;W++){var Z=G[W];Z!==null&&(Z.lane&=-536870913)}i&=~ee}s!==0&&Q(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Q(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-rn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function ie(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-rn(i),c=1<<s;c&n|t[s]&n&&(t[s]|=n),i&=~c}}function ce(t,n){var i=n&-n;return i=(i&42)!==0?1:we(i),(i&(t.suspendedLanes|n))!==0?0:i}function we(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Se(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=_.p;return t!==0?t:(t=window.event,t===void 0?32:wv(t.type))}function Te(t,n){var i=_.p;try{return _.p=t,n()}finally{_.p=i}}var Ce=Math.random().toString(36).slice(2),fe="__reactFiber$"+Ce,me="__reactProps$"+Ce,Be="__reactContainer$"+Ce,nt="__reactEvents$"+Ce,Dt="__reactListeners$"+Ce,qt="__reactHandles$"+Ce,lt="__reactResources$"+Ce,Qe="__reactMarker$"+Ce;function ra(t){delete t[fe],delete t[me],delete t[nt],delete t[Dt],delete t[qt]}function On(t){var n=t[fe];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Be]||i[fe]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=rv(t);t!==null;){if(i=t[fe])return i;t=rv(t)}return n}t=i,i=t.parentNode}return null}function on(t){if(t=t[fe]||t[Be]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Jt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function ya(t){var n=t[lt];return n||(n=t[lt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(t){t[Qe]=!0}var va=new Set,Zi={};function kn(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(Zi[t]=n,t=0;t<n.length;t++)va.add(n[t])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Da={},xa={};function At(t){return jt.call(xa,t)?!0:jt.call(Da,t)?!1:Pt.test(t)?xa[t]=!0:(Da[t]=!0,!1)}function za(t,n,i){if(At(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function Wi(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function oa(t,n,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+s)}}function Ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function e5(t,n,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){i=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(x){i=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function rd(t){if(!t._valueTracker){var n=Fp(t)?"checked":"value";t._valueTracker=e5(t,n,""+t[n])}}function Yp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=Fp(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var t5=/[\n"\\]/g;function Nn(t){return t.replace(t5,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function od(t,n,i,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ln(n)):t.value!==""+Ln(n)&&(t.value=""+Ln(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?sd(t,x,Ln(n)):i!=null?sd(t,x,Ln(i)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ln(E):t.removeAttribute("name")}function Gp(t,n,i,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||i!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){rd(t);return}i=i!=null?""+Ln(i):"",n=n!=null?""+Ln(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),rd(t)}function sd(t,n,i){n==="number"&&Ul(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Vr(t,n,i,s){if(t=t.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<t.length;i++)c=n.hasOwnProperty("$"+t[i].value),t[i].selected!==c&&(t[i].selected=c),c&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Ln(i),n=null,c=0;c<t.length;c++){if(t[c].value===i){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Xp(t,n,i){if(n!=null&&(n=""+Ln(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Ln(i):""}function qp(t,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(o(92));if(ze(s)){if(1<s.length)throw Error(o(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=Ln(n),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),rd(t)}function Br(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var n5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ip(t,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,i):typeof i!="number"||i===0||n5.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Kp(t,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&i[c]!==s&&Ip(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ip(t,f,n[f])}function ld(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(t){return i5.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oa(){}var cd=null;function ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,$r=null;function Qp(t){var n=on(t);if(n&&(t=n.stateNode)){var i=t[me]||null;e:switch(t=n.stateNode,n.type){case"input":if(od(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Nn(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var c=s[me]||null;if(!c)throw Error(o(90));od(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===t.form&&Yp(s)}break e;case"textarea":Xp(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Vr(t,!!i.multiple,n,!1)}}}var dd=!1;function Zp(t,n,i){if(dd)return t(n,i);dd=!0;try{var s=t(n);return s}finally{if(dd=!1,(Hr!==null||$r!==null)&&(Cc(),Hr&&(n=Hr,t=$r,$r=Hr=null,Qp(n),t)))for(n=0;n<t.length;n++)Qp(t[n])}}function qo(t,n){var i=t.stateNode;if(i===null)return null;var s=i[me]||null;if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=!1;if(ka)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){fd=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{fd=!1}var ci=null,hd=null,Bl=null;function Wp(){if(Bl)return Bl;var t,n=hd,i=n.length,s,c="value"in ci?ci.value:ci.textContent,f=c.length;for(t=0;t<i&&n[t]===c[t];t++);var x=i-t;for(s=1;s<=x&&n[i-s]===c[f-s];s++);return Bl=c.slice(t,1<s?1-s:void 0)}function Hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Jp(){return!1}function un(t){function n(i,s,c,f,x){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$l:Jp,this.isPropagationStopped=Jp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),n}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=un(Ji),Ko=v({},Ji,{view:0,detail:0}),r5=un(Ko),md,pd,Qo,Fl=v({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(md=t.screenX-Qo.screenX,pd=t.screenY-Qo.screenY):pd=md=0,Qo=t),md)},movementY:function(t){return"movementY"in t?t.movementY:pd}}),e0=un(Fl),o5=v({},Fl,{dataTransfer:0}),s5=un(o5),l5=v({},Ko,{relatedTarget:0}),gd=un(l5),c5=v({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),u5=un(c5),d5=v({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f5=un(d5),h5=v({},Ji,{data:0}),t0=un(h5),m5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y5(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=g5[t])?!!n[t]:!1}function yd(){return y5}var v5=v({},Ko,{key:function(t){if(t.key){var n=m5[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x5=un(v5),b5=v({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=un(b5),w5=v({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),S5=un(w5),E5=v({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),T5=un(E5),C5=v({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j5=un(C5),A5=v({},Ji,{newState:0,oldState:0}),R5=un(A5),M5=[9,13,27,32],vd=ka&&"CompositionEvent"in window,Zo=null;ka&&"documentMode"in document&&(Zo=document.documentMode);var D5=ka&&"TextEvent"in window&&!Zo,a0=ka&&(!vd||Zo&&8<Zo&&11>=Zo),i0=" ",r0=!1;function o0(t,n){switch(t){case"keyup":return M5.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function z5(t,n){switch(t){case"compositionend":return s0(n);case"keypress":return n.which!==32?null:(r0=!0,i0);case"textInput":return t=n.data,t===i0&&r0?null:t;default:return null}}function O5(t,n){if(Pr)return t==="compositionend"||!vd&&o0(t,n)?(t=Wp(),Bl=hd=ci=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return a0&&n.locale!=="ko"?null:n.data;default:return null}}var k5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!k5[t.type]:n==="textarea"}function c0(t,n,i,s){Hr?$r?$r.push(s):$r=[s]:Hr=s,n=Oc(n,"onChange"),0<n.length&&(i=new Pl("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var Wo=null,Jo=null;function L5(t){Gy(t,0)}function Yl(t){var n=Jt(t);if(Yp(n))return t}function u0(t,n){if(t==="change")return n}var d0=!1;if(ka){var xd;if(ka){var bd="oninput"in document;if(!bd){var f0=document.createElement("div");f0.setAttribute("oninput","return;"),bd=typeof f0.oninput=="function"}xd=bd}else xd=!1;d0=xd&&(!document.documentMode||9<document.documentMode)}function h0(){Wo&&(Wo.detachEvent("onpropertychange",m0),Jo=Wo=null)}function m0(t){if(t.propertyName==="value"&&Yl(Jo)){var n=[];c0(n,Jo,t,ud(t)),Zp(L5,n)}}function N5(t,n,i){t==="focusin"?(h0(),Wo=n,Jo=i,Wo.attachEvent("onpropertychange",m0)):t==="focusout"&&h0()}function _5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Jo)}function U5(t,n){if(t==="click")return Yl(n)}function V5(t,n){if(t==="input"||t==="change")return Yl(n)}function B5(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Sn=typeof Object.is=="function"?Object.is:B5;function es(t,n){if(Sn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!jt.call(n,c)||!Sn(t[c],n[c]))return!1}return!0}function p0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g0(t,n){var i=p0(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=p0(i)}}function y0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?y0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function v0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ul(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Ul(t.document)}return n}function wd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var H5=ka&&"documentMode"in document&&11>=document.documentMode,Fr=null,Sd=null,ts=null,Ed=!1;function x0(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ed||Fr==null||Fr!==Ul(s)||(s=Fr,"selectionStart"in s&&wd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ts&&es(ts,s)||(ts=s,s=Oc(Sd,"onSelect"),0<s.length&&(n=new Pl("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=Fr)))}function er(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Yr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Td={},b0={};ka&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function tr(t){if(Td[t])return Td[t];if(!Yr[t])return t;var n=Yr[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in b0)return Td[t]=n[i];return t}var w0=tr("animationend"),S0=tr("animationiteration"),E0=tr("animationstart"),$5=tr("transitionrun"),P5=tr("transitionstart"),F5=tr("transitioncancel"),T0=tr("transitionend"),C0=new Map,Cd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cd.push("scrollEnd");function sa(t,n){C0.set(t,n),kn(n,[t])}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_n=[],Gr=0,jd=0;function Xl(){for(var t=Gr,n=jd=Gr=0;n<t;){var i=_n[n];_n[n++]=null;var s=_n[n];_n[n++]=null;var c=_n[n];_n[n++]=null;var f=_n[n];if(_n[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&j0(i,c,f)}}function ql(t,n,i,s){_n[Gr++]=t,_n[Gr++]=n,_n[Gr++]=i,_n[Gr++]=s,jd|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Ad(t,n,i,s){return ql(t,n,i,s),Il(t)}function nr(t,n){return ql(t,null,null,n),Il(t)}function j0(t,n,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var c=!1,f=t.return;f!==null;)f.childLanes|=i,s=f.alternate,s!==null&&(s.childLanes|=i),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-rn(i),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=i|536870912),f):null}function Il(t){if(50<Es)throw Es=0,Uf=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function Y5(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,n,i,s){return new Y5(t,n,i,s)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function La(t,n){var i=t.alternate;return i===null?(i=En(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function A0(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Kl(t,n,i,s,c,f){var x=0;if(s=t,typeof t=="function")Rd(t)&&(x=1);else if(typeof t=="string")x=KE(t,i,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case X:return t=En(31,i,n,c),t.elementType=X,t.lanes=f,t;case M:return ar(i.children,c,f,n);case j:x=8,c|=24;break;case C:return t=En(12,i,n,c|2),t.elementType=C,t.lanes=f,t;case H:return t=En(13,i,n,c),t.elementType=H,t.lanes=f,t;case A:return t=En(19,i,n,c),t.elementType=A,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break e;case z:x=9;break e;case q:x=11;break e;case $:x=14;break e;case P:x=16,s=null;break e}x=29,i=Error(o(130,t===null?"null":typeof t,"")),s=null}return n=En(x,i,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ar(t,n,i,s){return t=En(7,t,s,n),t.lanes=i,t}function Md(t,n,i){return t=En(6,t,null,n),t.lanes=i,t}function R0(t){var n=En(18,null,null,0);return n.stateNode=t,n}function Dd(t,n,i){return n=En(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var M0=new WeakMap;function Un(t,n){if(typeof t=="object"&&t!==null){var i=M0.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Ct(n)},M0.set(t,n),n)}return{value:t,source:n,stack:Ct(n)}}var qr=[],Ir=0,Ql=null,ns=0,Vn=[],Bn=0,ui=null,ba=1,wa="";function Na(t,n){qr[Ir++]=ns,qr[Ir++]=Ql,Ql=t,ns=n}function D0(t,n,i){Vn[Bn++]=ba,Vn[Bn++]=wa,Vn[Bn++]=ui,ui=t;var s=ba;t=wa;var c=32-rn(s)-1;s&=~(1<<c),i+=1;var f=32-rn(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,ba=1<<32-rn(n)+c|i<<c|s,wa=f+t}else ba=1<<f|i<<c|s,wa=t}function zd(t){t.return!==null&&(Na(t,1),D0(t,1,0))}function Od(t){for(;t===Ql;)Ql=qr[--Ir],qr[Ir]=null,ns=qr[--Ir],qr[Ir]=null;for(;t===ui;)ui=Vn[--Bn],Vn[Bn]=null,wa=Vn[--Bn],Vn[Bn]=null,ba=Vn[--Bn],Vn[Bn]=null}function z0(t,n){Vn[Bn++]=ba,Vn[Bn++]=wa,Vn[Bn++]=ui,ba=n.id,wa=n.overflow,ui=t}var It=null,ft=null,qe=!1,di=null,Hn=!1,kd=Error(o(519));function fi(t){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw as(Un(n,t)),kd}function O0(t){var n=t.stateNode,i=t.type,s=t.memoizedProps;switch(n[fe]=t,n[me]=s,i){case"dialog":Ye("cancel",n),Ye("close",n);break;case"iframe":case"object":case"embed":Ye("load",n);break;case"video":case"audio":for(i=0;i<Cs.length;i++)Ye(Cs[i],n);break;case"source":Ye("error",n);break;case"img":case"image":case"link":Ye("error",n),Ye("load",n);break;case"details":Ye("toggle",n);break;case"input":Ye("invalid",n),Gp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ye("invalid",n);break;case"textarea":Ye("invalid",n),qp(n,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||Ky(n.textContent,i)?(s.popover!=null&&(Ye("beforetoggle",n),Ye("toggle",n)),s.onScroll!=null&&Ye("scroll",n),s.onScrollEnd!=null&&Ye("scrollend",n),s.onClick!=null&&(n.onclick=Oa),n=!0):n=!1,n||fi(t,!0)}function k0(t){for(It=t.return;It;)switch(It.tag){case 5:case 31:case 13:Hn=!1;return;case 27:case 3:Hn=!0;return;default:It=It.return}}function Kr(t){if(t!==It)return!1;if(!qe)return k0(t),qe=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Wf(t.type,t.memoizedProps)),i=!i),i&&ft&&fi(t),k0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));ft=iv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));ft=iv(t)}else n===27?(n=ft,ji(t.type)?(t=ah,ah=null,ft=t):ft=n):ft=It?Pn(t.stateNode.nextSibling):null;return!0}function ir(){ft=It=null,qe=!1}function Ld(){var t=di;return t!==null&&(mn===null?mn=t:mn.push.apply(mn,t),di=null),t}function as(t){di===null?di=[t]:di.push(t)}var Nd=k(null),rr=null,_a=null;function hi(t,n,i){te(Nd,n._currentValue),n._currentValue=i}function Ua(t){t._currentValue=Nd.current,K(Nd)}function _d(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function Ud(t,n,i,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var O=0;O<n.length;O++)if(E.context===n[O]){f.lanes|=i,E=f.alternate,E!==null&&(E.lanes|=i),_d(f.return,i,t),s||(x=null);break e}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(o(341));x.lanes|=i,f=x.alternate,f!==null&&(f.lanes|=i),_d(x,i,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Qr(t,n,i,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(o(387));if(x=x.memoizedProps,x!==null){var E=c.type;Sn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===ne.current){if(x=c.alternate,x===null)throw Error(o(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ds):t=[Ds])}c=c.return}t!==null&&Ud(n,t,i,s),n.flags|=262144}function Zl(t){for(t=t.firstContext;t!==null;){if(!Sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function or(t){rr=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return L0(rr,t)}function Wl(t,n){return rr===null&&or(t),L0(t,n)}function L0(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},_a===null){if(t===null)throw Error(o(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return i}var G5=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},X5=e.unstable_scheduleCallback,q5=e.unstable_NormalPriority,zt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vd(){return{controller:new G5,data:new Map,refCount:0}}function is(t){t.refCount--,t.refCount===0&&X5(q5,function(){t.controller.abort()})}var rs=null,Bd=0,Zr=0,Wr=null;function I5(t,n){if(rs===null){var i=rs=[];Bd=0,Zr=Ff(),Wr={status:"pending",value:void 0,then:function(s){i.push(s)}}}return Bd++,n.then(N0,N0),n}function N0(){if(--Bd===0&&rs!==null){Wr!==null&&(Wr.status="fulfilled");var t=rs;rs=null,Zr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function K5(t,n){var i=[],s={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<i.length;c++)(0,i[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),s}var _0=D.S;D.S=function(t,n){xy=De(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I5(t,n),_0!==null&&_0(t,n)};var sr=k(null);function Hd(){var t=sr.current;return t!==null?t:ot.pooledCache}function Jl(t,n){n===null?te(sr,sr.current):te(sr,n.pool)}function U0(){var t=Hd();return t===null?null:{parent:zt._currentValue,pool:t}}var Jr=Error(o(460)),$d=Error(o(474)),ec=Error(o(542)),tc={then:function(){}};function V0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function B0(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Oa,Oa),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$0(t),t;default:if(typeof n.status=="string")n.then(Oa,Oa);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$0(t),t}throw cr=n,Jr}}function lr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(cr=i,Jr):i}}var cr=null;function H0(){if(cr===null)throw Error(o(459));var t=cr;return cr=null,t}function $0(t){if(t===Jr||t===ec)throw Error(o(483))}var eo=null,os=0;function nc(t){var n=os;return os+=1,eo===null&&(eo=[]),B0(eo,t,n)}function ss(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ac(t,n){throw n.$$typeof===b?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function P0(t){function n(V,U){if(t){var F=V.deletions;F===null?(V.deletions=[U],V.flags|=16):F.push(U)}}function i(V,U){if(!t)return null;for(;U!==null;)n(V,U),U=U.sibling;return null}function s(V){for(var U=new Map;V!==null;)V.key!==null?U.set(V.key,V):U.set(V.index,V),V=V.sibling;return U}function c(V,U){return V=La(V,U),V.index=0,V.sibling=null,V}function f(V,U,F){return V.index=F,t?(F=V.alternate,F!==null?(F=F.index,F<U?(V.flags|=67108866,U):F):(V.flags|=67108866,U)):(V.flags|=1048576,U)}function x(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function E(V,U,F,J){return U===null||U.tag!==6?(U=Md(F,V.mode,J),U.return=V,U):(U=c(U,F),U.return=V,U)}function O(V,U,F,J){var je=F.type;return je===M?W(V,U,F.props.children,J,F.key):U!==null&&(U.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===P&&lr(je)===U.type)?(U=c(U,F.props),ss(U,F),U.return=V,U):(U=Kl(F.type,F.key,F.props,null,V.mode,J),ss(U,F),U.return=V,U)}function Y(V,U,F,J){return U===null||U.tag!==4||U.stateNode.containerInfo!==F.containerInfo||U.stateNode.implementation!==F.implementation?(U=Dd(F,V.mode,J),U.return=V,U):(U=c(U,F.children||[]),U.return=V,U)}function W(V,U,F,J,je){return U===null||U.tag!==7?(U=ar(F,V.mode,J,je),U.return=V,U):(U=c(U,F),U.return=V,U)}function ee(V,U,F){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Md(""+U,V.mode,F),U.return=V,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return F=Kl(U.type,U.key,U.props,null,V.mode,F),ss(F,U),F.return=V,F;case T:return U=Dd(U,V.mode,F),U.return=V,U;case P:return U=lr(U),ee(V,U,F)}if(ze(U)||Ne(U))return U=ar(U,V.mode,F,null),U.return=V,U;if(typeof U.then=="function")return ee(V,nc(U),F);if(U.$$typeof===N)return ee(V,Wl(V,U),F);ac(V,U)}return null}function G(V,U,F,J){var je=U!==null?U.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return je!==null?null:E(V,U,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===je?O(V,U,F,J):null;case T:return F.key===je?Y(V,U,F,J):null;case P:return F=lr(F),G(V,U,F,J)}if(ze(F)||Ne(F))return je!==null?null:W(V,U,F,J,null);if(typeof F.then=="function")return G(V,U,nc(F),J);if(F.$$typeof===N)return G(V,U,Wl(V,F),J);ac(V,F)}return null}function Z(V,U,F,J,je){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return V=V.get(F)||null,E(U,V,""+J,je);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return V=V.get(J.key===null?F:J.key)||null,O(U,V,J,je);case T:return V=V.get(J.key===null?F:J.key)||null,Y(U,V,J,je);case P:return J=lr(J),Z(V,U,F,J,je)}if(ze(J)||Ne(J))return V=V.get(F)||null,W(U,V,J,je,null);if(typeof J.then=="function")return Z(V,U,F,nc(J),je);if(J.$$typeof===N)return Z(V,U,F,Wl(U,J),je);ac(U,J)}return null}function ve(V,U,F,J){for(var je=null,Ie=null,be=U,Ve=U=0,Xe=null;be!==null&&Ve<F.length;Ve++){be.index>Ve?(Xe=be,be=null):Xe=be.sibling;var Ke=G(V,be,F[Ve],J);if(Ke===null){be===null&&(be=Xe);break}t&&be&&Ke.alternate===null&&n(V,be),U=f(Ke,U,Ve),Ie===null?je=Ke:Ie.sibling=Ke,Ie=Ke,be=Xe}if(Ve===F.length)return i(V,be),qe&&Na(V,Ve),je;if(be===null){for(;Ve<F.length;Ve++)be=ee(V,F[Ve],J),be!==null&&(U=f(be,U,Ve),Ie===null?je=be:Ie.sibling=be,Ie=be);return qe&&Na(V,Ve),je}for(be=s(be);Ve<F.length;Ve++)Xe=Z(be,V,Ve,F[Ve],J),Xe!==null&&(t&&Xe.alternate!==null&&be.delete(Xe.key===null?Ve:Xe.key),U=f(Xe,U,Ve),Ie===null?je=Xe:Ie.sibling=Xe,Ie=Xe);return t&&be.forEach(function(zi){return n(V,zi)}),qe&&Na(V,Ve),je}function Re(V,U,F,J){if(F==null)throw Error(o(151));for(var je=null,Ie=null,be=U,Ve=U=0,Xe=null,Ke=F.next();be!==null&&!Ke.done;Ve++,Ke=F.next()){be.index>Ve?(Xe=be,be=null):Xe=be.sibling;var zi=G(V,be,Ke.value,J);if(zi===null){be===null&&(be=Xe);break}t&&be&&zi.alternate===null&&n(V,be),U=f(zi,U,Ve),Ie===null?je=zi:Ie.sibling=zi,Ie=zi,be=Xe}if(Ke.done)return i(V,be),qe&&Na(V,Ve),je;if(be===null){for(;!Ke.done;Ve++,Ke=F.next())Ke=ee(V,Ke.value,J),Ke!==null&&(U=f(Ke,U,Ve),Ie===null?je=Ke:Ie.sibling=Ke,Ie=Ke);return qe&&Na(V,Ve),je}for(be=s(be);!Ke.done;Ve++,Ke=F.next())Ke=Z(be,V,Ve,Ke.value,J),Ke!==null&&(t&&Ke.alternate!==null&&be.delete(Ke.key===null?Ve:Ke.key),U=f(Ke,U,Ve),Ie===null?je=Ke:Ie.sibling=Ke,Ie=Ke);return t&&be.forEach(function(oT){return n(V,oT)}),qe&&Na(V,Ve),je}function rt(V,U,F,J){if(typeof F=="object"&&F!==null&&F.type===M&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var je=F.key;U!==null;){if(U.key===je){if(je=F.type,je===M){if(U.tag===7){i(V,U.sibling),J=c(U,F.props.children),J.return=V,V=J;break e}}else if(U.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===P&&lr(je)===U.type){i(V,U.sibling),J=c(U,F.props),ss(J,F),J.return=V,V=J;break e}i(V,U);break}else n(V,U);U=U.sibling}F.type===M?(J=ar(F.props.children,V.mode,J,F.key),J.return=V,V=J):(J=Kl(F.type,F.key,F.props,null,V.mode,J),ss(J,F),J.return=V,V=J)}return x(V);case T:e:{for(je=F.key;U!==null;){if(U.key===je)if(U.tag===4&&U.stateNode.containerInfo===F.containerInfo&&U.stateNode.implementation===F.implementation){i(V,U.sibling),J=c(U,F.children||[]),J.return=V,V=J;break e}else{i(V,U);break}else n(V,U);U=U.sibling}J=Dd(F,V.mode,J),J.return=V,V=J}return x(V);case P:return F=lr(F),rt(V,U,F,J)}if(ze(F))return ve(V,U,F,J);if(Ne(F)){if(je=Ne(F),typeof je!="function")throw Error(o(150));return F=je.call(F),Re(V,U,F,J)}if(typeof F.then=="function")return rt(V,U,nc(F),J);if(F.$$typeof===N)return rt(V,U,Wl(V,F),J);ac(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,U!==null&&U.tag===6?(i(V,U.sibling),J=c(U,F),J.return=V,V=J):(i(V,U),J=Md(F,V.mode,J),J.return=V,V=J),x(V)):i(V,U)}return function(V,U,F,J){try{os=0;var je=rt(V,U,F,J);return eo=null,je}catch(be){if(be===Jr||be===ec)throw be;var Ie=En(29,be,null,V.mode);return Ie.lanes=J,Ie.return=V,Ie}finally{}}}var ur=P0(!0),F0=P0(!1),mi=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function gi(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ze&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Il(t),j0(t,null,i),n}return ql(t,s,n,i),Il(t)}function ls(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,ie(t,i)}}function Yd(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var x={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,i=i.next}while(i!==null);f===null?c=f=n:f=f.next=n}else c=f=n;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var Gd=!1;function cs(){if(Gd){var t=Wr;if(t!==null)throw t}}function us(t,n,i,s){Gd=!1;var c=t.updateQueue;mi=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var O=E,Y=O.next;O.next=null,x===null?f=Y:x.next=Y,x=O;var W=t.alternate;W!==null&&(W=W.updateQueue,E=W.lastBaseUpdate,E!==x&&(E===null?W.firstBaseUpdate=Y:E.next=Y,W.lastBaseUpdate=O))}if(f!==null){var ee=c.baseState;x=0,W=Y=O=null,E=f;do{var G=E.lane&-536870913,Z=G!==E.lane;if(Z?(Ge&G)===G:(s&G)===G){G!==0&&G===Zr&&(Gd=!0),W!==null&&(W=W.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ve=t,Re=E;G=n;var rt=i;switch(Re.tag){case 1:if(ve=Re.payload,typeof ve=="function"){ee=ve.call(rt,ee,G);break e}ee=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Re.payload,G=typeof ve=="function"?ve.call(rt,ee,G):ve,G==null)break e;ee=v({},ee,G);break e;case 2:mi=!0}}G=E.callback,G!==null&&(t.flags|=64,Z&&(t.flags|=8192),Z=c.callbacks,Z===null?c.callbacks=[G]:Z.push(G))}else Z={lane:G,tag:E.tag,payload:E.payload,callback:E.callback,next:null},W===null?(Y=W=Z,O=ee):W=W.next=Z,x|=G;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;Z=E,E=Z.next,Z.next=null,c.lastBaseUpdate=Z,c.shared.pending=null}}while(!0);W===null&&(O=ee),c.baseState=O,c.firstBaseUpdate=Y,c.lastBaseUpdate=W,f===null&&(c.shared.lanes=0),wi|=x,t.lanes=x,t.memoizedState=ee}}function Y0(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function G0(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Y0(i[t],n)}var to=k(null),ic=k(0);function X0(t,n){t=Xa,te(ic,t),te(to,n),Xa=t|n.baseLanes}function Xd(){te(ic,Xa),te(to,to.current)}function qd(){Xa=ic.current,K(to),K(ic)}var Tn=k(null),$n=null;function yi(t){var n=t.alternate;te(Rt,Rt.current&1),te(Tn,t),$n===null&&(n===null||to.current!==null||n.memoizedState!==null)&&($n=t)}function Id(t){te(Rt,Rt.current),te(Tn,t),$n===null&&($n=t)}function q0(t){t.tag===22?(te(Rt,Rt.current),te(Tn,t),$n===null&&($n=t)):vi()}function vi(){te(Rt,Rt.current),te(Tn,Tn.current)}function Cn(t){K(Tn),$n===t&&($n=null),K(Rt)}var Rt=k(0);function rc(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||th(i)||nh(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Va=0,Ue=null,at=null,Ot=null,oc=!1,no=!1,dr=!1,sc=0,ds=0,ao=null,Q5=0;function bt(){throw Error(o(321))}function Kd(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Sn(t[i],n[i]))return!1;return!0}function Qd(t,n,i,s,c,f){return Va=f,Ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Dg:ff,dr=!1,f=i(s,c),dr=!1,no&&(f=K0(n,i,s,c)),I0(t),f}function I0(t){D.H=ms;var n=at!==null&&at.next!==null;if(Va=0,Ot=at=Ue=null,oc=!1,ds=0,ao=null,n)throw Error(o(300));t===null||kt||(t=t.dependencies,t!==null&&Zl(t)&&(kt=!0))}function K0(t,n,i,s){Ue=t;var c=0;do{if(no&&(ao=null),ds=0,no=!1,25<=c)throw Error(o(301));if(c+=1,Ot=at=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=zg,f=n(i,s)}while(no);return f}function Z5(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?fs(n):n,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(Ue.flags|=1024),n}function Zd(){var t=sc!==0;return sc=0,t}function Wd(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Jd(t){if(oc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}oc=!1}Va=0,Ot=at=Ue=null,no=!1,ds=sc=0,ao=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Ue.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Mt(){if(at===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var n=Ot===null?Ue.memoizedState:Ot.next;if(n!==null)Ot=n,at=t;else{if(t===null)throw Ue.alternate===null?Error(o(467)):Error(o(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Ot===null?Ue.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(t){var n=ds;return ds+=1,ao===null&&(ao=[]),t=B0(ao,t,n),n=Ue,(Ot===null?n.memoizedState:Ot.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Dg:ff),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fs(t);if(t.$$typeof===N)return Kt(t)}throw Error(o(438,String(t)))}function ef(t){var n=null,i=Ue.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=Ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=lc(),Ue.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),s=0;s<t;s++)i[s]=se;return n.index++,i}function Ba(t,n){return typeof n=="function"?n(t):n}function uc(t){var n=Mt();return tf(n,at,t)}function tf(t,n,i){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=i;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,O=null,Y=n,W=!1;do{var ee=Y.lane&-536870913;if(ee!==Y.lane?(Ge&ee)===ee:(Va&ee)===ee){var G=Y.revertLane;if(G===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),ee===Zr&&(W=!0);else if((Va&G)===G){Y=Y.next,G===Zr&&(W=!0);continue}else ee={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},O===null?(E=O=ee,x=f):O=O.next=ee,Ue.lanes|=G,wi|=G;ee=Y.action,dr&&i(f,ee),f=Y.hasEagerState?Y.eagerState:i(f,ee)}else G={lane:ee,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},O===null?(E=O=G,x=f):O=O.next=G,Ue.lanes|=ee,wi|=ee;Y=Y.next}while(Y!==null&&Y!==n);if(O===null?x=f:O.next=E,!Sn(f,t.memoizedState)&&(kt=!0,W&&(i=Wr,i!==null)))throw i;t.memoizedState=f,t.baseState=x,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function nf(t){var n=Mt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=i.dispatch,c=i.pending,f=n.memoizedState;if(c!==null){i.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Sn(f,n.memoizedState)||(kt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,s]}function Q0(t,n,i){var s=Ue,c=Mt(),f=qe;if(f){if(i===void 0)throw Error(o(407));i=i()}else i=n();var x=!Sn((at||c).memoizedState,i);if(x&&(c.memoizedState=i,kt=!0),c=c.queue,of(J0.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||Ot!==null&&Ot.memoizedState.tag&1){if(s.flags|=2048,io(9,{destroy:void 0},W0.bind(null,s,c,i,n),null),ot===null)throw Error(o(349));f||(Va&127)!==0||Z0(s,n,i)}return i}function Z0(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=Ue.updateQueue,n===null?(n=lc(),Ue.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function W0(t,n,i,s){n.value=i,n.getSnapshot=s,eg(n)&&tg(t)}function J0(t,n,i){return i(function(){eg(n)&&tg(t)})}function eg(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Sn(t,i)}catch{return!0}}function tg(t){var n=nr(t,2);n!==null&&pn(n,t,2)}function af(t){var n=sn();if(typeof t=="function"){var i=t;if(t=i(),dr){ia(!0);try{i()}finally{ia(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},n}function ng(t,n,i,s){return t.baseState=i,tf(t,at,typeof s=="function"?s:Ba)}function W5(t,n,i,s,c){if(hc(t))throw Error(o(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};D.T!==null?i(!0):f.isTransition=!1,s(f),i=n.pending,i===null?(f.next=n.pending=f,ag(n,f)):(f.next=i.next,n.pending=i.next=f)}}function ag(t,n){var i=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=D.T,x={};D.T=x;try{var E=i(c,s),O=D.S;O!==null&&O(x,E),ig(t,n,E)}catch(Y){rf(t,n,Y)}finally{f!==null&&x.types!==null&&(f.types=x.types),D.T=f}}else try{f=i(c,s),ig(t,n,f)}catch(Y){rf(t,n,Y)}}function ig(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){rg(t,n,s)},function(s){return rf(t,n,s)}):rg(t,n,i)}function rg(t,n,i){n.status="fulfilled",n.value=i,og(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,ag(t,i)))}function rf(t,n,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,og(n),n=n.next;while(n!==s)}t.action=null}function og(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function sg(t,n){return n}function lg(t,n){if(qe){var i=ot.formState;if(i!==null){e:{var s=Ue;if(qe){if(ft){t:{for(var c=ft,f=Hn;c.nodeType!==8;){if(!f){c=null;break t}if(c=Pn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ft=Pn(c.nextSibling),s=c.data==="F!";break e}}fi(s)}s=!1}s&&(n=i[0])}}return i=sn(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sg,lastRenderedState:n},i.queue=s,i=Ag.bind(null,Ue,s),s.dispatch=i,s=af(!1),f=df.bind(null,Ue,!1,s.queue),s=sn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,i=W5.bind(null,Ue,c,f,i),c.dispatch=i,s.memoizedState=t,[n,i,!1]}function cg(t){var n=Mt();return ug(n,at,t)}function ug(t,n,i){if(n=tf(t,n,sg)[0],t=uc(Ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=fs(n)}catch(x){throw x===Jr?ec:x}else s=n;n=Mt();var c=n.queue,f=c.dispatch;return i!==n.memoizedState&&(Ue.flags|=2048,io(9,{destroy:void 0},J5.bind(null,c,i),null)),[s,f,t]}function J5(t,n){t.action=n}function dg(t){var n=Mt(),i=at;if(i!==null)return ug(n,i,t);Mt(),n=n.memoizedState,i=Mt();var s=i.queue.dispatch;return i.memoizedState=t,[n,s,!1]}function io(t,n,i,s){return t={tag:t,create:i,deps:s,inst:n,next:null},n=Ue.updateQueue,n===null&&(n=lc(),Ue.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t),t}function fg(){return Mt().memoizedState}function dc(t,n,i,s){var c=sn();Ue.flags|=t,c.memoizedState=io(1|n,{destroy:void 0},i,s===void 0?null:s)}function fc(t,n,i,s){var c=Mt();s=s===void 0?null:s;var f=c.memoizedState.inst;at!==null&&s!==null&&Kd(s,at.memoizedState.deps)?c.memoizedState=io(n,f,i,s):(Ue.flags|=t,c.memoizedState=io(1|n,f,i,s))}function hg(t,n){dc(8390656,8,t,n)}function of(t,n){fc(2048,8,t,n)}function eE(t){Ue.flags|=4;var n=Ue.updateQueue;if(n===null)n=lc(),Ue.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function mg(t){var n=Mt().memoizedState;return eE({ref:n,nextImpl:t}),function(){if((Ze&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function pg(t,n){return fc(4,2,t,n)}function gg(t,n){return fc(4,4,t,n)}function yg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function vg(t,n,i){i=i!=null?i.concat([t]):null,fc(4,4,yg.bind(null,n,t),i)}function sf(){}function xg(t,n){var i=Mt();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&Kd(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function bg(t,n){var i=Mt();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&Kd(n,s[1]))return s[0];if(s=t(),dr){ia(!0);try{t()}finally{ia(!1)}}return i.memoizedState=[s,n],s}function lf(t,n,i){return i===void 0||(Va&1073741824)!==0&&(Ge&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=wy(),Ue.lanes|=t,wi|=t,i)}function wg(t,n,i,s){return Sn(i,n)?i:to.current!==null?(t=lf(t,i,s),Sn(t,n)||(kt=!0),t):(Va&42)===0||(Va&1073741824)!==0&&(Ge&261930)===0?(kt=!0,t.memoizedState=i):(t=wy(),Ue.lanes|=t,wi|=t,n)}function Sg(t,n,i,s,c){var f=_.p;_.p=f!==0&&8>f?f:8;var x=D.T,E={};D.T=E,df(t,!1,n,i);try{var O=c(),Y=D.S;if(Y!==null&&Y(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=K5(O,s);hs(t,n,W,Rn(t))}else hs(t,n,s,Rn(t))}catch(ee){hs(t,n,{then:function(){},status:"rejected",reason:ee},Rn())}finally{_.p=f,x!==null&&E.types!==null&&(x.types=E.types),D.T=x}}function tE(){}function cf(t,n,i,s){if(t.tag!==5)throw Error(o(476));var c=Eg(t).queue;Sg(t,c,n,I,i===null?tE:function(){return Tg(t),i(s)})}function Eg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:I},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Tg(t){var n=Eg(t);n.next===null&&(n=t.alternate.memoizedState),hs(t,n.next.queue,{},Rn())}function uf(){return Kt(Ds)}function Cg(){return Mt().memoizedState}function jg(){return Mt().memoizedState}function nE(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=Rn();t=pi(i);var s=gi(n,t,i);s!==null&&(pn(s,n,i),ls(s,n,i)),n={cache:Vd()},t.payload=n;return}n=n.return}}function aE(t,n,i){var s=Rn();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hc(t)?Rg(n,i):(i=Ad(t,n,i,s),i!==null&&(pn(i,t,s),Mg(i,n,s)))}function Ag(t,n,i){var s=Rn();hs(t,n,i,s)}function hs(t,n,i,s){var c={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(hc(t))Rg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,i);if(c.hasEagerState=!0,c.eagerState=E,Sn(E,x))return ql(t,n,c,0),ot===null&&Xl(),!1}catch{}finally{}if(i=Ad(t,n,c,s),i!==null)return pn(i,t,s),Mg(i,n,s),!0}return!1}function df(t,n,i,s){if(s={lane:2,revertLane:Ff(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(n)throw Error(o(479))}else n=Ad(t,i,s,2),n!==null&&pn(n,t,2)}function hc(t){var n=t.alternate;return t===Ue||n!==null&&n===Ue}function Rg(t,n){no=oc=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Mg(t,n,i){if((i&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,ie(t,i)}}var ms={readContext:Kt,use:cc,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};ms.useEffectEvent=bt;var Dg={readContext:Kt,use:cc,useCallback:function(t,n){return sn().memoizedState=[t,n===void 0?null:n],t},useContext:Kt,useEffect:hg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,dc(4194308,4,yg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return dc(4194308,4,t,n)},useInsertionEffect:function(t,n){dc(4,2,t,n)},useMemo:function(t,n){var i=sn();n=n===void 0?null:n;var s=t();if(dr){ia(!0);try{t()}finally{ia(!1)}}return i.memoizedState=[s,n],s},useReducer:function(t,n,i){var s=sn();if(i!==void 0){var c=i(n);if(dr){ia(!0);try{i(n)}finally{ia(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=aE.bind(null,Ue,t),[s.memoizedState,t]},useRef:function(t){var n=sn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,i=Ag.bind(null,Ue,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:sf,useDeferredValue:function(t,n){var i=sn();return lf(i,t,n)},useTransition:function(){var t=af(!1);return t=Sg.bind(null,Ue,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var s=Ue,c=sn();if(qe){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),ot===null)throw Error(o(349));(Ge&127)!==0||Z0(s,n,i)}c.memoizedState=i;var f={value:i,getSnapshot:n};return c.queue=f,hg(J0.bind(null,s,f,t),[t]),s.flags|=2048,io(9,{destroy:void 0},W0.bind(null,s,f,i,n),null),i},useId:function(){var t=sn(),n=ot.identifierPrefix;if(qe){var i=wa,s=ba;i=(s&~(1<<32-rn(s)-1)).toString(32)+i,n="_"+n+"R_"+i,i=sc++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Q5++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:lg,useActionState:lg,useOptimistic:function(t){var n=sn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=df.bind(null,Ue,!0,i),i.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return sn().memoizedState=nE.bind(null,Ue)},useEffectEvent:function(t){var n=sn(),i={impl:t};return n.memoizedState=i,function(){if((Ze&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},ff={readContext:Kt,use:cc,useCallback:xg,useContext:Kt,useEffect:of,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:gg,useMemo:bg,useReducer:uc,useRef:fg,useState:function(){return uc(Ba)},useDebugValue:sf,useDeferredValue:function(t,n){var i=Mt();return wg(i,at.memoizedState,t,n)},useTransition:function(){var t=uc(Ba)[0],n=Mt().memoizedState;return[typeof t=="boolean"?t:fs(t),n]},useSyncExternalStore:Q0,useId:Cg,useHostTransitionStatus:uf,useFormState:cg,useActionState:cg,useOptimistic:function(t,n){var i=Mt();return ng(i,at,t,n)},useMemoCache:ef,useCacheRefresh:jg};ff.useEffectEvent=mg;var zg={readContext:Kt,use:cc,useCallback:xg,useContext:Kt,useEffect:of,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:gg,useMemo:bg,useReducer:nf,useRef:fg,useState:function(){return nf(Ba)},useDebugValue:sf,useDeferredValue:function(t,n){var i=Mt();return at===null?lf(i,t,n):wg(i,at.memoizedState,t,n)},useTransition:function(){var t=nf(Ba)[0],n=Mt().memoizedState;return[typeof t=="boolean"?t:fs(t),n]},useSyncExternalStore:Q0,useId:Cg,useHostTransitionStatus:uf,useFormState:dg,useActionState:dg,useOptimistic:function(t,n){var i=Mt();return at!==null?ng(i,at,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:ef,useCacheRefresh:jg};zg.useEffectEvent=mg;function hf(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:v({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var mf={enqueueSetState:function(t,n,i){t=t._reactInternals;var s=Rn(),c=pi(s);c.payload=n,i!=null&&(c.callback=i),n=gi(t,c,s),n!==null&&(pn(n,t,s),ls(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=Rn(),c=pi(s);c.tag=1,c.payload=n,i!=null&&(c.callback=i),n=gi(t,c,s),n!==null&&(pn(n,t,s),ls(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=Rn(),s=pi(i);s.tag=2,n!=null&&(s.callback=n),n=gi(t,s,i),n!==null&&(pn(n,t,i),ls(n,t,i))}};function Og(t,n,i,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!es(i,s)||!es(c,f):!0}function kg(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&mf.enqueueReplaceState(n,n.state,null)}function fr(t,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(t=t.defaultProps){i===n&&(i=v({},i));for(var c in t)i[c]===void 0&&(i[c]=t[c])}return i}function Lg(t){Gl(t)}function Ng(t){console.error(t)}function _g(t){Gl(t)}function mc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ug(t,n,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function pf(t,n,i){return i=pi(i),i.tag=3,i.payload={element:null},i.callback=function(){mc(t,n)},i}function Vg(t){return t=pi(t),t.tag=3,t}function Bg(t,n,i,s){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Ug(n,i,s)}}var x=i.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Ug(n,i,s),typeof c!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function iE(t,n,i,s,c){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&Qr(n,i,c,!0),i=Tn.current,i!==null){switch(i.tag){case 31:case 13:return $n===null?jc():i.alternate===null&&wt===0&&(wt=3),i.flags&=-257,i.flags|=65536,i.lanes=c,s===tc?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),Hf(t,s,c)),!1;case 22:return i.flags|=65536,s===tc?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),Hf(t,s,c)),!1}throw Error(o(435,i.tag))}return Hf(t,s,c),jc(),!1}if(qe)return n=Tn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==kd&&(t=Error(o(422),{cause:s}),as(Un(t,i)))):(s!==kd&&(n=Error(o(423),{cause:s}),as(Un(n,i))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Un(s,i),c=pf(t.stateNode,s,c),Yd(t,c),wt!==4&&(wt=2)),!1;var f=Error(o(520),{cause:s});if(f=Un(f,i),Ss===null?Ss=[f]:Ss.push(f),wt!==4&&(wt=2),n===null)return!0;s=Un(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=c&-c,i.lanes|=t,t=pf(i.stateNode,s,t),Yd(i,t),!1;case 1:if(n=i.type,f=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Si===null||!Si.has(f))))return i.flags|=65536,c&=-c,i.lanes|=c,c=Vg(c),Bg(c,t,i,s),Yd(i,c),!1}i=i.return}while(i!==null);return!1}var gf=Error(o(461)),kt=!1;function Qt(t,n,i,s){n.child=t===null?F0(n,null,i,s):ur(n,t.child,i,s)}function Hg(t,n,i,s,c){i=i.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return or(n),s=Qd(t,n,i,x,f,c),E=Zd(),t!==null&&!kt?(Wd(t,n,c),Ha(t,n,c)):(qe&&E&&zd(n),n.flags|=1,Qt(t,n,s,c),n.child)}function $g(t,n,i,s,c){if(t===null){var f=i.type;return typeof f=="function"&&!Rd(f)&&f.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=f,Pg(t,n,f,s,c)):(t=Kl(i.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Tf(t,c)){var x=f.memoizedProps;if(i=i.compare,i=i!==null?i:es,i(x,s)&&t.ref===n.ref)return Ha(t,n,c)}return n.flags|=1,t=La(f,s),t.ref=n.ref,t.return=n,n.child=t}function Pg(t,n,i,s,c){if(t!==null){var f=t.memoizedProps;if(es(f,s)&&t.ref===n.ref)if(kt=!1,n.pendingProps=s=f,Tf(t,c))(t.flags&131072)!==0&&(kt=!0);else return n.lanes=t.lanes,Ha(t,n,c)}return yf(t,n,i,s,c)}function Fg(t,n,i,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|i:i,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Yg(t,n,f,i,s)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(n,f!==null?f.cachePool:null),f!==null?X0(n,f):Xd(),q0(n);else return s=n.lanes=536870912,Yg(t,n,f!==null?f.baseLanes|i:i,i,s)}else f!==null?(Jl(n,f.cachePool),X0(n,f),vi(),n.memoizedState=null):(t!==null&&Jl(n,null),Xd(),vi());return Qt(t,n,c,i),n.child}function ps(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yg(t,n,i,s,c){var f=Hd();return f=f===null?null:{parent:zt._currentValue,pool:f},n.memoizedState={baseLanes:i,cachePool:f},t!==null&&Jl(n,null),Xd(),q0(n),t!==null&&Qr(t,n,s,!0),n.childLanes=c,null}function pc(t,n){return n=yc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Gg(t,n,i){return ur(n,t.child,null,i),t=pc(n,n.pendingProps),t.flags|=2,Cn(n),n.memoizedState=null,t}function rE(t,n,i){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(qe){if(s.mode==="hidden")return t=pc(n,s),n.lanes=536870912,ps(null,t);if(Id(n),(t=ft)?(t=av(t,Hn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ui!==null?{id:ba,overflow:wa}:null,retryLane:536870912,hydrationErrors:null},i=R0(t),i.return=n,n.child=i,It=n,ft=null)):t=null,t===null)throw fi(n);return n.lanes=536870912,null}return pc(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Id(n),c)if(n.flags&256)n.flags&=-257,n=Gg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(o(558));else if(kt||Qr(t,n,i,!1),c=(i&t.childLanes)!==0,kt||c){if(s=ot,s!==null&&(x=ce(s,i),x!==0&&x!==f.retryLane))throw f.retryLane=x,nr(t,x),pn(s,t,x),gf;jc(),n=Gg(t,n,i)}else t=f.treeContext,ft=Pn(x.nextSibling),It=n,qe=!0,di=null,Hn=!1,t!==null&&z0(n,t),n=pc(n,s),n.flags|=4096;return n}return t=La(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gc(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function yf(t,n,i,s,c){return or(n),i=Qd(t,n,i,s,void 0,c),s=Zd(),t!==null&&!kt?(Wd(t,n,c),Ha(t,n,c)):(qe&&s&&zd(n),n.flags|=1,Qt(t,n,i,c),n.child)}function Xg(t,n,i,s,c,f){return or(n),n.updateQueue=null,i=K0(n,s,i,c),I0(t),s=Zd(),t!==null&&!kt?(Wd(t,n,f),Ha(t,n,f)):(qe&&s&&zd(n),n.flags|=1,Qt(t,n,i,f),n.child)}function qg(t,n,i,s,c){if(or(n),n.stateNode===null){var f=Xr,x=i.contextType;typeof x=="object"&&x!==null&&(f=Kt(x)),f=new i(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=mf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pd(n),x=i.contextType,f.context=typeof x=="object"&&x!==null?Kt(x):Xr,f.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(hf(n,i,x,s),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&mf.enqueueReplaceState(f,f.state,null),us(n,s,f,c),cs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,O=fr(i,E);f.props=O;var Y=f.context,W=i.contextType;x=Xr,typeof W=="object"&&W!==null&&(x=Kt(W));var ee=i.getDerivedStateFromProps;W=typeof ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,W||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Y!==x)&&kg(n,f,s,x),mi=!1;var G=n.memoizedState;f.state=G,us(n,s,f,c),cs(),Y=n.memoizedState,E||G!==Y||mi?(typeof ee=="function"&&(hf(n,i,ee,s),Y=n.memoizedState),(O=mi||Og(n,i,O,s,G,Y,x))?(W||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Y),f.props=s,f.state=Y,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Fd(t,n),x=n.memoizedProps,W=fr(i,x),f.props=W,ee=n.pendingProps,G=f.context,Y=i.contextType,O=Xr,typeof Y=="object"&&Y!==null&&(O=Kt(Y)),E=i.getDerivedStateFromProps,(Y=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ee||G!==O)&&kg(n,f,s,O),mi=!1,G=n.memoizedState,f.state=G,us(n,s,f,c),cs();var Z=n.memoizedState;x!==ee||G!==Z||mi||t!==null&&t.dependencies!==null&&Zl(t.dependencies)?(typeof E=="function"&&(hf(n,i,E,s),Z=n.memoizedState),(W=mi||Og(n,i,W,s,G,Z,O)||t!==null&&t.dependencies!==null&&Zl(t.dependencies))?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,Z,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,Z,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&G===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&G===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=O,s=W):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&G===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&G===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,gc(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ur(n,t.child,null,c),n.child=ur(n,null,i,c)):Qt(t,n,i,c),n.memoizedState=f.state,t=n.child):t=Ha(t,n,c),t}function Ig(t,n,i,s){return ir(),n.flags|=256,Qt(t,n,i,s),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:U0()}}function bf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=An),t}function Kg(t,n,i){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(Rt.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(qe){if(c?yi(n):vi(),(t=ft)?(t=av(t,Hn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ui!==null?{id:ba,overflow:wa}:null,retryLane:536870912,hydrationErrors:null},i=R0(t),i.return=n,n.child=i,It=n,ft=null)):t=null,t===null)throw fi(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(vi(),c=n.mode,E=yc({mode:"hidden",children:E},c),s=ar(s,c,i,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=xf(i),s.childLanes=bf(t,x,i),n.memoizedState=vf,ps(null,s)):(yi(n),wf(n,E))}var O=t.memoizedState;if(O!==null&&(E=O.dehydrated,E!==null)){if(f)n.flags&256?(yi(n),n.flags&=-257,n=Sf(t,n,i)):n.memoizedState!==null?(vi(),n.child=t.child,n.flags|=128,n=null):(vi(),E=s.fallback,c=n.mode,s=yc({mode:"visible",children:s.children},c),E=ar(E,c,i,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ur(n,t.child,null,i),s=n.child,s.memoizedState=xf(i),s.childLanes=bf(t,x,i),n.memoizedState=vf,n=ps(null,s));else if(yi(n),nh(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Y=x.dgst;x=Y,s=Error(o(419)),s.stack="",s.digest=x,as({value:s,source:null,stack:null}),n=Sf(t,n,i)}else if(kt||Qr(t,n,i,!1),x=(i&t.childLanes)!==0,kt||x){if(x=ot,x!==null&&(s=ce(x,i),s!==0&&s!==O.retryLane))throw O.retryLane=s,nr(t,s),pn(x,t,s),gf;th(E)||jc(),n=Sf(t,n,i)}else th(E)?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,ft=Pn(E.nextSibling),It=n,qe=!0,di=null,Hn=!1,t!==null&&z0(n,t),n=wf(n,s.children),n.flags|=4096);return n}return c?(vi(),E=s.fallback,c=n.mode,O=t.child,Y=O.sibling,s=La(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,Y!==null?E=La(Y,E):(E=ar(E,c,i,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,ps(null,s),s=n.child,E=t.child.memoizedState,E===null?E=xf(i):(c=E.cachePool,c!==null?(O=zt._currentValue,c=c.parent!==O?{parent:O,pool:O}:c):c=U0(),E={baseLanes:E.baseLanes|i,cachePool:c}),s.memoizedState=E,s.childLanes=bf(t,x,i),n.memoizedState=vf,ps(t.child,s)):(yi(n),i=t.child,t=i.sibling,i=La(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=i,n.memoizedState=null,i)}function wf(t,n){return n=yc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yc(t,n){return t=En(22,t,null,n),t.lanes=0,t}function Sf(t,n,i){return ur(n,t.child,null,i),t=wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qg(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),_d(t.return,n,i)}function Ef(t,n,i,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=i,x.tailMode=c,x.treeForkCount=f)}function Zg(t,n,i){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=Rt.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,te(Rt,x),Qt(t,n,s,i),s=qe?ns:0,!E&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qg(t,i,n);else if(t.tag===19)Qg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(i=n.child,c=null;i!==null;)t=i.alternate,t!==null&&rc(t)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),Ef(n,!1,c,i,f,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&rc(t)===null){n.child=c;break}t=c.sibling,c.sibling=i,i=c,c=t}Ef(n,!0,i,null,f,s);break;case"together":Ef(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ha(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),wi|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Qr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,i=La(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=La(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zl(t)))}function oE(t,n,i){switch(n.tag){case 3:re(n,n.stateNode.containerInfo),hi(n,zt,t.memoizedState.cache),ir();break;case 27:case 5:he(n);break;case 4:re(n,n.stateNode.containerInfo);break;case 10:hi(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Id(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(yi(n),n.flags|=128,null):(i&n.child.childLanes)!==0?Kg(t,n,i):(yi(n),t=Ha(t,n,i),t!==null?t.sibling:null);yi(n);break;case 19:var c=(t.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(Qr(t,n,i,!1),s=(i&n.childLanes)!==0),c){if(s)return Zg(t,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),te(Rt,Rt.current),s)break;return null;case 22:return n.lanes=0,Fg(t,n,i,n.pendingProps);case 24:hi(n,zt,t.memoizedState.cache)}return Ha(t,n,i)}function Wg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)kt=!0;else{if(!Tf(t,i)&&(n.flags&128)===0)return kt=!1,oE(t,n,i);kt=(t.flags&131072)!==0}else kt=!1,qe&&(n.flags&1048576)!==0&&D0(n,ns,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=lr(n.elementType),n.type=t,typeof t=="function")Rd(t)?(s=fr(t,s),n.tag=1,n=qg(null,n,t,s,i)):(n.tag=0,n=yf(null,n,t,s,i));else{if(t!=null){var c=t.$$typeof;if(c===q){n.tag=11,n=Hg(null,n,t,s,i);break e}else if(c===$){n.tag=14,n=$g(null,n,t,s,i);break e}}throw n=ge(t)||t,Error(o(306,n,""))}}return n;case 0:return yf(t,n,n.type,n.pendingProps,i);case 1:return s=n.type,c=fr(s,n.pendingProps),qg(t,n,s,c,i);case 3:e:{if(re(n,n.stateNode.containerInfo),t===null)throw Error(o(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Fd(t,n),us(n,s,null,i);var x=n.memoizedState;if(s=x.cache,hi(n,zt,s),s!==f.cache&&Ud(n,[zt],i,!0),cs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ig(t,n,s,i);break e}else if(s!==c){c=Un(Error(o(424)),n),as(c),n=Ig(t,n,s,i);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ft=Pn(t.firstChild),It=n,qe=!0,di=null,Hn=!0,i=F0(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(ir(),s===c){n=Ha(t,n,i);break e}Qt(t,n,s,i)}n=n.child}return n;case 26:return gc(t,n),t===null?(i=cv(n.type,null,n.pendingProps,null))?n.memoizedState=i:qe||(i=n.type,t=n.pendingProps,s=kc(Ee.current).createElement(i),s[fe]=n,s[me]=t,Zt(s,i,t),yt(s),n.stateNode=s):n.memoizedState=cv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return he(n),t===null&&qe&&(s=n.stateNode=ov(n.type,n.pendingProps,Ee.current),It=n,Hn=!0,c=ft,ji(n.type)?(ah=c,ft=Pn(s.firstChild)):ft=c),Qt(t,n,n.pendingProps.children,i),gc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&qe&&((c=s=ft)&&(s=_E(s,n.type,n.pendingProps,Hn),s!==null?(n.stateNode=s,It=n,ft=Pn(s.firstChild),Hn=!1,c=!0):c=!1),c||fi(n)),he(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Wf(c,f)?s=null:x!==null&&Wf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Qd(t,n,Z5,null,null,i),Ds._currentValue=c),gc(t,n),Qt(t,n,s,i),n.child;case 6:return t===null&&qe&&((t=i=ft)&&(i=UE(i,n.pendingProps,Hn),i!==null?(n.stateNode=i,It=n,ft=null,t=!0):t=!1),t||fi(n)),null;case 13:return Kg(t,n,i);case 4:return re(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ur(n,null,s,i):Qt(t,n,s,i),n.child;case 11:return Hg(t,n,n.type,n.pendingProps,i);case 7:return Qt(t,n,n.pendingProps,i),n.child;case 8:return Qt(t,n,n.pendingProps.children,i),n.child;case 12:return Qt(t,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,hi(n,n.type,s.value),Qt(t,n,s.children,i),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,or(n),c=Kt(c),s=s(c),n.flags|=1,Qt(t,n,s,i),n.child;case 14:return $g(t,n,n.type,n.pendingProps,i);case 15:return Pg(t,n,n.type,n.pendingProps,i);case 19:return Zg(t,n,i);case 31:return rE(t,n,i);case 22:return Fg(t,n,i,n.pendingProps);case 24:return or(n),s=Kt(zt),t===null?(c=Hd(),c===null&&(c=ot,f=Vd(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=i),c=f),n.memoizedState={parent:s,cache:c},Pd(n),hi(n,zt,c)):((t.lanes&i)!==0&&(Fd(t,n),us(n,null,null,i),cs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),hi(n,zt,s)):(s=f.cache,hi(n,zt,s),s!==c.cache&&Ud(n,[zt],i,!0))),Qt(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function $a(t){t.flags|=4}function Cf(t,n,i,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Cy())t.flags|=8192;else throw cr=tc,$d}else t.flags&=-16777217}function Jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mv(n))if(Cy())t.flags|=8192;else throw cr=tc,$d}function vc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_l():536870912,t.lanes|=n,lo|=n)}function gs(t,n){if(!qe)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ht(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var c=t.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function sE(t,n,i){var s=n.pendingProps;switch(Od(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(n),null;case 1:return ht(n),null;case 3:return i=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(zt),ae(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Kr(n)?$a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ld())),ht(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?($a(n),f!==null?(ht(n),Jg(n,f)):(ht(n),Cf(n,c,null,s,i))):f?f!==t.memoizedState?($a(n),ht(n),Jg(n,f)):(ht(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&$a(n),ht(n),Cf(n,c,t,s,i)),null;case 27:if(Oe(n),i=Ee.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&$a(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return ht(n),null}t=le.current,Kr(n)?O0(n):(t=ov(c,s,i),n.stateNode=t,$a(n))}return ht(n),null;case 5:if(Oe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&$a(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return ht(n),null}if(f=le.current,Kr(n))O0(n);else{var x=kc(Ee.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[fe]=n,f[me]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Zt(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&$a(n)}}return ht(n),Cf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&$a(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(o(166));if(t=Ee.current,Kr(n)){if(t=n.stateNode,i=n.memoizedProps,s=null,c=It,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[fe]=n,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Ky(t.nodeValue,i)),t||fi(n,!0)}else t=kc(t).createTextNode(s),t[fe]=n,n.stateNode=t}return ht(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(s=Kr(n),i!==null){if(t===null){if(!s)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[fe]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),t=!1}else i=Ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(Cn(n),n):(Cn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return ht(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(o(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[fe]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),c=!1}else c=Ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Cn(n),n):(Cn(n),null)}return Cn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),vc(n,n.updateQueue),ht(n),null);case 4:return ae(),t===null&&qf(n.stateNode.containerInfo),ht(n),null;case 10:return Ua(n.type),ht(n),null;case 19:if(K(Rt),s=n.memoizedState,s===null)return ht(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)gs(s,!1);else{if(wt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=rc(t),f!==null){for(n.flags|=128,gs(s,!1),t=f.updateQueue,n.updateQueue=t,vc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)A0(i,t),i=i.sibling;return te(Rt,Rt.current&1|2),qe&&Na(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&De()>Ec&&(n.flags|=128,c=!0,gs(s,!1),n.lanes=4194304)}else{if(!c)if(t=rc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,vc(n,t),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!qe)return ht(n),null}else 2*De()-s.renderingStartTime>Ec&&i!==536870912&&(n.flags|=128,c=!0,gs(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,i=Rt.current,te(Rt,c?i&1|2:i&1),qe&&Na(n,s.treeForkCount),t):(ht(n),null);case 22:case 23:return Cn(n),qd(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(ht(n),n.subtreeFlags&6&&(n.flags|=8192)):ht(n),i=n.updateQueue,i!==null&&vc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),t!==null&&K(sr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Ua(zt),ht(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function lE(t,n){switch(Od(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(zt),ae(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 31:if(n.memoizedState!==null){if(Cn(n),n.alternate===null)throw Error(o(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Cn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(Rt),null;case 4:return ae(),null;case 10:return Ua(n.type),null;case 22:case 23:return Cn(n),qd(),t!==null&&K(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(zt),null;case 25:return null;default:return null}}function ey(t,n){switch(Od(n),n.tag){case 3:Ua(zt),ae();break;case 26:case 27:case 5:Oe(n);break;case 4:ae();break;case 31:n.memoizedState!==null&&Cn(n);break;case 13:Cn(n);break;case 19:K(Rt);break;case 10:Ua(n.type);break;case 22:case 23:Cn(n),qd(),t!==null&&K(sr);break;case 24:Ua(zt)}}function ys(t,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&t)===t){s=void 0;var f=i.create,x=i.inst;s=f(),x.destroy=s}i=i.next}while(i!==c)}}catch(E){tt(n,n.return,E)}}function xi(t,n,i){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var O=i,Y=E;try{Y()}catch(W){tt(c,O,W)}}}s=s.next}while(s!==f)}}catch(W){tt(n,n.return,W)}}function ty(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{G0(n,i)}catch(s){tt(t,t.return,s)}}}function ny(t,n,i){i.props=fr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){tt(t,n,s)}}function vs(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(c){tt(t,n,c)}}function Sa(t,n){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(c){tt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){tt(t,n,c)}else i.current=null}function ay(t){var n=t.type,i=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(c){tt(t,t.return,c)}}function jf(t,n,i){try{var s=t.stateNode;DE(s,t.type,i,n),s[me]=n}catch(c){tt(t,t.return,c)}}function iy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ji(t.type)||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ji(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Oa));else if(s!==4&&(s===27&&ji(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,i),t=t.sibling;t!==null;)Rf(t,n,i),t=t.sibling}function xc(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(s!==4&&(s===27&&ji(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(xc(t,n,i),t=t.sibling;t!==null;)xc(t,n,i),t=t.sibling}function ry(t){var n=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Zt(n,s,i),n[fe]=t,n[me]=i}catch(f){tt(t,t.return,f)}}var Pa=!1,Lt=!1,Mf=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function cE(t,n){if(t=t.containerInfo,Qf=Hc,t=v0(t),wd(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var x=0,E=-1,O=-1,Y=0,W=0,ee=t,G=null;t:for(;;){for(var Z;ee!==i||c!==0&&ee.nodeType!==3||(E=x+c),ee!==f||s!==0&&ee.nodeType!==3||(O=x+s),ee.nodeType===3&&(x+=ee.nodeValue.length),(Z=ee.firstChild)!==null;)G=ee,ee=Z;for(;;){if(ee===t)break t;if(G===i&&++Y===c&&(E=x),G===f&&++W===s&&(O=x),(Z=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=Z}i=E===-1||O===-1?null:{start:E,end:O}}else i=null}i=i||{start:0,end:0}}else i=null;for(Zf={focusedElem:t,selectionRange:i},Hc=!1,Ft=n;Ft!==null;)if(n=Ft,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Ft=t;else for(;Ft!==null;){switch(n=Ft,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)c=t[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,i=n,c=f.memoizedProps,f=f.memoizedState,s=i.stateNode;try{var ve=fr(i.type,c);t=s.getSnapshotBeforeUpdate(ve,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Re){tt(i,i.return,Re)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)eh(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Ft=t;break}Ft=n.return}}function sy(t,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Ya(t,i),s&4&&ys(5,i);break;case 1:if(Ya(t,i),s&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(x){tt(i,i.return,x)}else{var c=fr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){tt(i,i.return,x)}}s&64&&ty(i),s&512&&vs(i,i.return);break;case 3:if(Ya(t,i),s&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{G0(t,n)}catch(x){tt(i,i.return,x)}}break;case 27:n===null&&s&4&&ry(i);case 26:case 5:Ya(t,i),n===null&&s&4&&ay(i),s&512&&vs(i,i.return);break;case 12:Ya(t,i);break;case 31:Ya(t,i),s&4&&uy(t,i);break;case 13:Ya(t,i),s&4&&dy(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=vE.bind(null,i),VE(t,i))));break;case 22:if(s=i.memoizedState!==null||Pa,!s){n=n!==null&&n.memoizedState!==null||Lt,c=Pa;var f=Lt;Pa=s,(Lt=n)&&!f?Ga(t,i,(i.subtreeFlags&8772)!==0):Ya(t,i),Pa=c,Lt=f}break;case 30:break;default:Ya(t,i)}}function ly(t){var n=t.alternate;n!==null&&(t.alternate=null,ly(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,dn=!1;function Fa(t,n,i){for(i=i.child;i!==null;)cy(t,n,i),i=i.sibling}function cy(t,n,i){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(zn,i)}catch{}switch(i.tag){case 26:Lt||Sa(i,n),Fa(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Lt||Sa(i,n);var s=vt,c=dn;ji(i.type)&&(vt=i.stateNode,dn=!1),Fa(t,n,i),As(i.stateNode),vt=s,dn=c;break;case 5:Lt||Sa(i,n);case 6:if(s=vt,c=dn,vt=null,Fa(t,n,i),vt=s,dn=c,vt!==null)if(dn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(i.stateNode)}catch(f){tt(i,n,f)}else try{vt.removeChild(i.stateNode)}catch(f){tt(i,n,f)}break;case 18:vt!==null&&(dn?(t=vt,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),yo(t)):tv(vt,i.stateNode));break;case 4:s=vt,c=dn,vt=i.stateNode.containerInfo,dn=!0,Fa(t,n,i),vt=s,dn=c;break;case 0:case 11:case 14:case 15:xi(2,i,n),Lt||xi(4,i,n),Fa(t,n,i);break;case 1:Lt||(Sa(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&ny(i,n,s)),Fa(t,n,i);break;case 21:Fa(t,n,i);break;case 22:Lt=(s=Lt)||i.memoizedState!==null,Fa(t,n,i),Lt=s;break;default:Fa(t,n,i)}}function uy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{yo(t)}catch(i){tt(n,n.return,i)}}}function dy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yo(t)}catch(i){tt(n,n.return,i)}}function uE(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new oy),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new oy),n;default:throw Error(o(435,t.tag))}}function bc(t,n){var i=uE(t);n.forEach(function(s){if(!i.has(s)){i.add(s);var c=xE.bind(null,t,s);s.then(c,c)}})}function fn(t,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s],f=t,x=n,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(ji(E.type)){vt=E.stateNode,dn=!1;break e}break;case 5:vt=E.stateNode,dn=!1;break e;case 3:case 4:vt=E.stateNode.containerInfo,dn=!0;break e}E=E.return}if(vt===null)throw Error(o(160));cy(f,x,c),vt=null,dn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)fy(n,t),n=n.sibling}var la=null;function fy(t,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fn(n,t),hn(t),s&4&&(xi(3,t,t.return),ys(3,t),xi(5,t,t.return));break;case 1:fn(n,t),hn(t),s&512&&(Lt||i===null||Sa(i,i.return)),s&64&&Pa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var c=la;if(fn(n,t),hn(t),s&512&&(Lt||i===null||Sa(i,i.return)),s&4){var f=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){e:{s=t.type,i=t.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qe]||f[fe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Zt(f,s,i),f[fe]=t,yt(f),s=f;break e;case"link":var x=fv("link","href",c).get(s+(i.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&f.getAttribute("rel")===(i.rel==null?null:i.rel)&&f.getAttribute("title")===(i.title==null?null:i.title)&&f.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){x.splice(E,1);break t}}f=c.createElement(s),Zt(f,s,i),c.head.appendChild(f);break;case"meta":if(x=fv("meta","content",c).get(s+(i.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(i.content==null?null:""+i.content)&&f.getAttribute("name")===(i.name==null?null:i.name)&&f.getAttribute("property")===(i.property==null?null:i.property)&&f.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&f.getAttribute("charset")===(i.charSet==null?null:i.charSet)){x.splice(E,1);break t}}f=c.createElement(s),Zt(f,s,i),c.head.appendChild(f);break;default:throw Error(o(468,s))}f[fe]=t,yt(f),s=f}t.stateNode=s}else hv(c,t.type,t.stateNode);else t.stateNode=dv(c,s,t.memoizedProps);else f!==s?(f===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):f.count--,s===null?hv(c,t.type,t.stateNode):dv(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&jf(t,t.memoizedProps,i.memoizedProps)}break;case 27:fn(n,t),hn(t),s&512&&(Lt||i===null||Sa(i,i.return)),i!==null&&s&4&&jf(t,t.memoizedProps,i.memoizedProps);break;case 5:if(fn(n,t),hn(t),s&512&&(Lt||i===null||Sa(i,i.return)),t.flags&32){c=t.stateNode;try{Br(c,"")}catch(ve){tt(t,t.return,ve)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,jf(t,c,i!==null?i.memoizedProps:c)),s&1024&&(Mf=!0);break;case 6:if(fn(n,t),hn(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(ve){tt(t,t.return,ve)}}break;case 3:if(_c=null,c=la,la=Lc(n.containerInfo),fn(n,t),la=c,hn(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(ve){tt(t,t.return,ve)}Mf&&(Mf=!1,hy(t));break;case 4:s=la,la=Lc(t.stateNode.containerInfo),fn(n,t),hn(t),la=s;break;case 12:fn(n,t),hn(t);break;case 31:fn(n,t),hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bc(t,s)));break;case 13:fn(n,t),hn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Sc=De()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bc(t,s)));break;case 22:c=t.memoizedState!==null;var O=i!==null&&i.memoizedState!==null,Y=Pa,W=Lt;if(Pa=Y||c,Lt=W||O,fn(n,t),Lt=W,Pa=Y,hn(t),s&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(i===null||O||Pa||Lt||hr(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){O=i=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=O.stateNode;var ee=O.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;E.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ve){tt(O,O.return,ve)}}}else if(n.tag===6){if(i===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(ve){tt(O,O.return,ve)}}}else if(n.tag===18){if(i===null){O=n;try{var Z=O.stateNode;c?nv(Z,!0):nv(O.stateNode,!1)}catch(ve){tt(O,O.return,ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,bc(t,i))));break;case 19:fn(n,t),hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bc(t,s)));break;case 30:break;case 21:break;default:fn(n,t),hn(t)}}function hn(t){var n=t.flags;if(n&2){try{for(var i,s=t.return;s!==null;){if(iy(s)){i=s;break}s=s.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var c=i.stateNode,f=Af(t);xc(t,f,c);break;case 5:var x=i.stateNode;i.flags&32&&(Br(x,""),i.flags&=-33);var E=Af(t);xc(t,E,x);break;case 3:case 4:var O=i.stateNode.containerInfo,Y=Af(t);Rf(t,Y,O);break;default:throw Error(o(161))}}catch(W){tt(t,t.return,W)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function hy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;hy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ya(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sy(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xi(4,n,n.return),hr(n);break;case 1:Sa(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&ny(n,n.return,i),hr(n);break;case 27:As(n.stateNode);case 26:case 5:Sa(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Ga(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ga(c,f,i),ys(4,f);break;case 1:if(Ga(c,f,i),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Y){tt(s,s.return,Y)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Y0(O[c],E)}catch(Y){tt(s,s.return,Y)}}i&&x&64&&ty(f),vs(f,f.return);break;case 27:ry(f);case 26:case 5:Ga(c,f,i),i&&s===null&&x&4&&ay(f),vs(f,f.return);break;case 12:Ga(c,f,i);break;case 31:Ga(c,f,i),i&&x&4&&uy(c,f);break;case 13:Ga(c,f,i),i&&x&4&&dy(c,f);break;case 22:f.memoizedState===null&&Ga(c,f,i),vs(f,f.return);break;case 30:break;default:Ga(c,f,i)}n=n.sibling}}function Df(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&is(i))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&is(t))}function ca(t,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)my(t,n,i,s),n=n.sibling}function my(t,n,i,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ca(t,n,i,s),c&2048&&ys(9,n);break;case 1:ca(t,n,i,s);break;case 3:ca(t,n,i,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&is(t)));break;case 12:if(c&2048){ca(t,n,i,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){tt(n,n.return,O)}}else ca(t,n,i,s);break;case 31:ca(t,n,i,s);break;case 13:ca(t,n,i,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?ca(t,n,i,s):xs(t,n):f._visibility&2?ca(t,n,i,s):(f._visibility|=2,ro(t,n,i,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Df(x,n);break;case 24:ca(t,n,i,s),c&2048&&zf(n.alternate,n);break;default:ca(t,n,i,s)}}function ro(t,n,i,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=i,O=s,Y=x.flags;switch(x.tag){case 0:case 11:case 15:ro(f,x,E,O,c),ys(8,x);break;case 23:break;case 22:var W=x.stateNode;x.memoizedState!==null?W._visibility&2?ro(f,x,E,O,c):xs(f,x):(W._visibility|=2,ro(f,x,E,O,c)),c&&Y&2048&&Df(x.alternate,x);break;case 24:ro(f,x,E,O,c),c&&Y&2048&&zf(x.alternate,x);break;default:ro(f,x,E,O,c)}n=n.sibling}}function xs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,s=n,c=s.flags;switch(s.tag){case 22:xs(i,s),c&2048&&Df(s.alternate,s);break;case 24:xs(i,s),c&2048&&zf(s.alternate,s);break;default:xs(i,s)}n=n.sibling}}var bs=8192;function oo(t,n,i){if(t.subtreeFlags&bs)for(t=t.child;t!==null;)py(t,n,i),t=t.sibling}function py(t,n,i){switch(t.tag){case 26:oo(t,n,i),t.flags&bs&&t.memoizedState!==null&&QE(i,la,t.memoizedState,t.memoizedProps);break;case 5:oo(t,n,i);break;case 3:case 4:var s=la;la=Lc(t.stateNode.containerInfo),oo(t,n,i),la=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=bs,bs=16777216,oo(t,n,i),bs=s):oo(t,n,i));break;default:oo(t,n,i)}}function gy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ws(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Ft=s,vy(s,t)}gy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yy(t),t=t.sibling}function yy(t){switch(t.tag){case 0:case 11:case 15:ws(t),t.flags&2048&&xi(9,t,t.return);break;case 3:ws(t);break;case 12:ws(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,wc(t)):ws(t);break;default:ws(t)}}function wc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Ft=s,vy(s,t)}gy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xi(8,n,n.return),wc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,wc(n));break;default:wc(n)}t=t.sibling}}function vy(t,n){for(;Ft!==null;){var i=Ft;switch(i.tag){case 0:case 11:case 15:xi(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:is(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Ft=s;else e:for(i=t;Ft!==null;){s=Ft;var c=s.sibling,f=s.return;if(ly(s),s===i){Ft=null;break e}if(c!==null){c.return=f,Ft=c;break e}Ft=f}}}var dE={getCacheForType:function(t){var n=Kt(zt),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Kt(zt).controller.signal}},fE=typeof WeakMap=="function"?WeakMap:Map,Ze=0,ot=null,Fe=null,Ge=0,et=0,jn=null,bi=!1,so=!1,Of=!1,Xa=0,wt=0,wi=0,mr=0,kf=0,An=0,lo=0,Ss=null,mn=null,Lf=!1,Sc=0,xy=0,Ec=1/0,Tc=null,Si=null,Bt=0,Ei=null,co=null,qa=0,Nf=0,_f=null,by=null,Es=0,Uf=null;function Rn(){return(Ze&2)!==0&&Ge!==0?Ge&-Ge:D.T!==null?Ff():xe()}function wy(){if(An===0)if((Ge&536870912)===0||qe){var t=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),An=t}else An=536870912;return t=Tn.current,t!==null&&(t.flags|=32),An}function pn(t,n,i){(t===ot&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(uo(t,0),Ti(t,Ge,An,!1)),L(t,i),((Ze&2)===0||t!==ot)&&(t===ot&&((Ze&2)===0&&(mr|=i),wt===4&&Ti(t,Ge,An,!1)),Ea(t))}function Sy(t,n,i){if((Ze&6)!==0)throw Error(o(327));var s=!i&&(n&127)===0&&(n&t.expiredLanes)===0||ga(t,n),c=s?pE(t,n):Bf(t,n,!0),f=s;do{if(c===0){so&&!s&&Ti(t,n,0,!1);break}else{if(i=t.current.alternate,f&&!hE(i)){c=Bf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var E=t;c=Ss;var O=E.current.memoizedState.isDehydrated;if(O&&(uo(E,x).flags|=256),x=Bf(E,x,!1),x!==2){if(Of&&!O){E.errorRecoveryDisabledLanes|=f,mr|=f,c=4;break e}f=mn,mn=c,f!==null&&(mn===null?mn=f:mn.push.apply(mn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){uo(t,0),Ti(t,n,0,!0);break}e:{switch(s=t,f=c,f){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ti(s,n,An,!bi);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(c=Sc+300-De(),10<c)){if(Ti(s,n,An,!bi),Qi(s,0,!0)!==0)break e;qa=n,s.timeoutHandle=Jy(Ey.bind(null,s,i,mn,Tc,Lf,n,An,mr,lo,bi,f,"Throttled",-0,0),c);break e}Ey(s,i,mn,Tc,Lf,n,An,mr,lo,bi,f,null,-0,0)}}break}while(!0);Ea(t)}function Ey(t,n,i,s,c,f,x,E,O,Y,W,ee,G,Z){if(t.timeoutHandle=-1,ee=n.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oa},py(n,f,ee);var ve=(f&62914560)===f?Sc-De():(f&4194048)===f?xy-De():0;if(ve=ZE(ee,ve),ve!==null){qa=f,t.cancelPendingCommit=ve(zy.bind(null,t,n,f,i,s,c,x,E,O,W,ee,null,G,Z)),Ti(t,f,x,!Y);return}}zy(t,n,f,i,s,c,x,E,O)}function hE(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var c=i[s],f=c.getSnapshot;c=c.value;try{if(!Sn(f(),c))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ti(t,n,i,s){n&=~kf,n&=~mr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-rn(c),x=1<<f;s[f]=-1,c&=~x}i!==0&&Q(t,i,n)}function Cc(){return(Ze&6)===0?(Ts(0),!1):!0}function Vf(){if(Fe!==null){if(et===0)var t=Fe.return;else t=Fe,_a=rr=null,Jd(t),eo=null,os=0,t=Fe;for(;t!==null;)ey(t.alternate,t),t=t.return;Fe=null}}function uo(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,kE(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),qa=0,Vf(),ot=t,Fe=i=La(t.current,null),Ge=n,et=0,jn=null,bi=!1,so=ga(t,n),Of=!1,lo=An=kf=mr=wi=wt=0,mn=Ss=null,Lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-rn(s),f=1<<c;n|=t[c],s&=~f}return Xa=n,Xl(),i}function Ty(t,n){Ue=null,D.H=ms,n===Jr||n===ec?(n=H0(),et=3):n===$d?(n=H0(),et=4):et=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,Fe===null&&(wt=1,mc(t,Un(n,t.current)))}function Cy(){var t=Tn.current;return t===null?!0:(Ge&4194048)===Ge?$n===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?t===$n:!1}function jy(){var t=D.H;return D.H=ms,t===null?ms:t}function Ay(){var t=D.A;return D.A=dE,t}function jc(){wt=4,bi||(Ge&4194048)!==Ge&&Tn.current!==null||(so=!0),(wi&134217727)===0&&(mr&134217727)===0||ot===null||Ti(ot,Ge,An,!1)}function Bf(t,n,i){var s=Ze;Ze|=2;var c=jy(),f=Ay();(ot!==t||Ge!==n)&&(Tc=null,uo(t,n)),n=!1;var x=wt;e:do try{if(et!==0&&Fe!==null){var E=Fe,O=jn;switch(et){case 8:Vf(),x=6;break e;case 3:case 2:case 9:case 6:Tn.current===null&&(n=!0);var Y=et;if(et=0,jn=null,fo(t,E,O,Y),i&&so){x=0;break e}break;default:Y=et,et=0,jn=null,fo(t,E,O,Y)}}mE(),x=wt;break}catch(W){Ty(t,W)}while(!0);return n&&t.shellSuspendCounter++,_a=rr=null,Ze=s,D.H=c,D.A=f,Fe===null&&(ot=null,Ge=0,Xl()),x}function mE(){for(;Fe!==null;)Ry(Fe)}function pE(t,n){var i=Ze;Ze|=2;var s=jy(),c=Ay();ot!==t||Ge!==n?(Tc=null,Ec=De()+500,uo(t,n)):so=ga(t,n);e:do try{if(et!==0&&Fe!==null){n=Fe;var f=jn;t:switch(et){case 1:et=0,jn=null,fo(t,n,f,1);break;case 2:case 9:if(V0(f)){et=0,jn=null,My(n);break}n=function(){et!==2&&et!==9||ot!==t||(et=7),Ea(t)},f.then(n,n);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:V0(f)?(et=0,jn=null,My(n)):(et=0,jn=null,fo(t,n,f,7));break;case 5:var x=null;switch(Fe.tag){case 26:x=Fe.memoizedState;case 5:case 27:var E=Fe;if(x?mv(x):E.stateNode.complete){et=0,jn=null;var O=E.sibling;if(O!==null)Fe=O;else{var Y=E.return;Y!==null?(Fe=Y,Ac(Y)):Fe=null}break t}}et=0,jn=null,fo(t,n,f,5);break;case 6:et=0,jn=null,fo(t,n,f,6);break;case 8:Vf(),wt=6;break e;default:throw Error(o(462))}}gE();break}catch(W){Ty(t,W)}while(!0);return _a=rr=null,D.H=s,D.A=c,Ze=i,Fe!==null?0:(ot=null,Ge=0,Xl(),wt)}function gE(){for(;Fe!==null&&!aa();)Ry(Fe)}function Ry(t){var n=Wg(t.alternate,t,Xa);t.memoizedProps=t.pendingProps,n===null?Ac(t):Fe=n}function My(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=Xg(i,n,n.pendingProps,n.type,void 0,Ge);break;case 11:n=Xg(i,n,n.pendingProps,n.type.render,n.ref,Ge);break;case 5:Jd(n);default:ey(i,n),n=Fe=A0(n,Xa),n=Wg(i,n,Xa)}t.memoizedProps=t.pendingProps,n===null?Ac(t):Fe=n}function fo(t,n,i,s){_a=rr=null,Jd(n),eo=null,os=0;var c=n.return;try{if(iE(t,c,n,i,Ge)){wt=1,mc(t,Un(i,t.current)),Fe=null;return}}catch(f){if(c!==null)throw Fe=c,f;wt=1,mc(t,Un(i,t.current)),Fe=null;return}n.flags&32768?(qe||s===1?t=!0:so||(Ge&536870912)!==0?t=!1:(bi=t=!0,(s===2||s===9||s===3||s===6)&&(s=Tn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Dy(n,t)):Ac(n)}function Ac(t){var n=t;do{if((n.flags&32768)!==0){Dy(n,bi);return}t=n.return;var i=sE(n.alternate,n,Xa);if(i!==null){Fe=i;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=t}while(n!==null);wt===0&&(wt=5)}function Dy(t,n){do{var i=lE(t.alternate,t);if(i!==null){i.flags&=32767,Fe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){Fe=t;return}Fe=t=i}while(t!==null);wt=6,Fe=null}function zy(t,n,i,s,c,f,x,E,O){t.cancelPendingCommit=null;do Rc();while(Bt!==0);if((Ze&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(f=n.lanes|n.childLanes,f|=jd,B(t,i,f,x,E,O),t===ot&&(Fe=ot=null,Ge=0),co=n,Ei=t,qa=i,Nf=f,_f=c,by=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bE(pa,function(){return _y(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=D.T,D.T=null,c=_.p,_.p=2,x=Ze,Ze|=4;try{cE(t,n,i)}finally{Ze=x,_.p=c,D.T=s}}Bt=1,Oy(),ky(),Ly()}}function Oy(){if(Bt===1){Bt=0;var t=Ei,n=co,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=D.T,D.T=null;var s=_.p;_.p=2;var c=Ze;Ze|=4;try{fy(n,t);var f=Zf,x=v0(t.containerInfo),E=f.focusedElem,O=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&y0(E.ownerDocument.documentElement,E)){if(O!==null&&wd(E)){var Y=O.start,W=O.end;if(W===void 0&&(W=Y),"selectionStart"in E)E.selectionStart=Y,E.selectionEnd=Math.min(W,E.value.length);else{var ee=E.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var Z=G.getSelection(),ve=E.textContent.length,Re=Math.min(O.start,ve),rt=O.end===void 0?Re:Math.min(O.end,ve);!Z.extend&&Re>rt&&(x=rt,rt=Re,Re=x);var V=g0(E,Re),U=g0(E,rt);if(V&&U&&(Z.rangeCount!==1||Z.anchorNode!==V.node||Z.anchorOffset!==V.offset||Z.focusNode!==U.node||Z.focusOffset!==U.offset)){var F=ee.createRange();F.setStart(V.node,V.offset),Z.removeAllRanges(),Re>rt?(Z.addRange(F),Z.extend(U.node,U.offset)):(F.setEnd(U.node,U.offset),Z.addRange(F))}}}}for(ee=[],Z=E;Z=Z.parentNode;)Z.nodeType===1&&ee.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ee.length;E++){var J=ee[E];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Hc=!!Qf,Zf=Qf=null}finally{Ze=c,_.p=s,D.T=i}}t.current=n,Bt=2}}function ky(){if(Bt===2){Bt=0;var t=Ei,n=co,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=D.T,D.T=null;var s=_.p;_.p=2;var c=Ze;Ze|=4;try{sy(t,n.alternate,n)}finally{Ze=c,_.p=s,D.T=i}}Bt=3}}function Ly(){if(Bt===4||Bt===3){Bt=0,ma();var t=Ei,n=co,i=qa,s=by;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Bt=5:(Bt=0,co=Ei=null,Ny(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Si=null),Se(i),n=n.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(zn,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=D.T,c=_.p,_.p=2,D.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{D.T=n,_.p=c}}(qa&3)!==0&&Rc(),Ea(t),c=t.pendingLanes,(i&261930)!==0&&(c&42)!==0?t===Uf?Es++:(Es=0,Uf=t):Es=0,Ts(0)}}function Ny(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,is(n)))}function Rc(){return Oy(),ky(),Ly(),_y()}function _y(){if(Bt!==5)return!1;var t=Ei,n=Nf;Nf=0;var i=Se(qa),s=D.T,c=_.p;try{_.p=32>i?32:i,D.T=null,i=_f,_f=null;var f=Ei,x=qa;if(Bt=0,co=Ei=null,qa=0,(Ze&6)!==0)throw Error(o(331));var E=Ze;if(Ze|=4,yy(f.current),my(f,f.current,x,i),Ze=E,Ts(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(zn,f)}catch{}return!0}finally{_.p=c,D.T=s,Ny(t,n)}}function Uy(t,n,i){n=Un(i,n),n=pf(t.stateNode,n,2),t=gi(t,n,2),t!==null&&(L(t,2),Ea(t))}function tt(t,n,i){if(t.tag===3)Uy(t,t,i);else for(;n!==null;){if(n.tag===3){Uy(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Si===null||!Si.has(s))){t=Un(i,t),i=Vg(2),s=gi(n,i,2),s!==null&&(Bg(i,s,n,t),L(s,2),Ea(s));break}}n=n.return}}function Hf(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new fE;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(i)||(Of=!0,c.add(i),t=yE.bind(null,t,n,i),n.then(t,t))}function yE(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,ot===t&&(Ge&i)===i&&(wt===4||wt===3&&(Ge&62914560)===Ge&&300>De()-Sc?(Ze&2)===0&&uo(t,0):kf|=i,lo===Ge&&(lo=0)),Ea(t)}function Vy(t,n){n===0&&(n=_l()),t=nr(t,n),t!==null&&(L(t,n),Ea(t))}function vE(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Vy(t,i)}function xE(t,n){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(n),Vy(t,i)}function bE(t,n){return an(t,n)}var Mc=null,ho=null,$f=!1,Dc=!1,Pf=!1,Ci=0;function Ea(t){t!==ho&&t.next===null&&(ho===null?Mc=ho=t:ho=ho.next=t),Dc=!0,$f||($f=!0,SE())}function Ts(t,n){if(!Pf&&Dc){Pf=!0;do for(var i=!1,s=Mc;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-rn(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(i=!0,Py(s,f))}else f=Ge,f=Qi(s,s===ot?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ga(s,f)||(i=!0,Py(s,f));s=s.next}while(i);Pf=!1}}function wE(){By()}function By(){Dc=$f=!1;var t=0;Ci!==0&&OE()&&(t=Ci);for(var n=De(),i=null,s=Mc;s!==null;){var c=s.next,f=Hy(s,n);f===0?(s.next=null,i===null?Mc=c:i.next=c,c===null&&(ho=i)):(i=s,(t!==0||(f&3)!==0)&&(Dc=!0)),s=c}Bt!==0&&Bt!==5||Ts(t),Ci!==0&&(Ci=0)}function Hy(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-rn(f),E=1<<x,O=c[x];O===-1?((E&i)===0||(E&s)!==0)&&(c[x]=Ur(E,n)):O<=n&&(t.expiredLanes|=E),f&=~E}if(n=ot,i=Ge,i=Qi(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===n&&(et===2||et===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&wn(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||ga(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(s!==null&&wn(s),Se(i)){case 2:case 8:i=gt;break;case 32:i=pa;break;case 268435456:i=si;break;default:i=pa}return s=$y.bind(null,t),i=an(i,s),t.callbackPriority=n,t.callbackNode=i,n}return s!==null&&s!==null&&wn(s),t.callbackPriority=2,t.callbackNode=null,2}function $y(t,n){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Rc()&&t.callbackNode!==i)return null;var s=Ge;return s=Qi(t,t===ot?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Sy(t,s,n),Hy(t,De()),t.callbackNode!=null&&t.callbackNode===i?$y.bind(null,t):null)}function Py(t,n){if(Rc())return null;Sy(t,n,!0)}function SE(){LE(function(){(Ze&6)!==0?an(Ht,wE):By()})}function Ff(){if(Ci===0){var t=Zr;t===0&&(t=li,li<<=1,(li&261888)===0&&(li=256)),Ci=t}return Ci}function Fy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vl(""+t)}function Yy(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function EE(t,n,i,s,c){if(n==="submit"&&i&&i.stateNode===c){var f=Fy((c[me]||null).action),x=s.submitter;x&&(n=(n=x[me]||null)?Fy(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Pl("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ci!==0){var O=x?Yy(c,x):new FormData(c);cf(i,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(E.preventDefault(),O=x?Yy(c,x):new FormData(c),cf(i,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var Yf=0;Yf<Cd.length;Yf++){var Gf=Cd[Yf],TE=Gf.toLowerCase(),CE=Gf[0].toUpperCase()+Gf.slice(1);sa(TE,"on"+CE)}sa(w0,"onAnimationEnd"),sa(S0,"onAnimationIteration"),sa(E0,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa($5,"onTransitionRun"),sa(P5,"onTransitionStart"),sa(F5,"onTransitionCancel"),sa(T0,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cs));function Gy(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],O=E.instance,Y=E.currentTarget;if(E=E.listener,O!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Y;try{f(c)}catch(W){Gl(W)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(E=s[x],O=E.instance,Y=E.currentTarget,E=E.listener,O!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Y;try{f(c)}catch(W){Gl(W)}c.currentTarget=null,f=O}}}}function Ye(t,n){var i=n[nt];i===void 0&&(i=n[nt]=new Set);var s=t+"__bubble";i.has(s)||(Xy(n,t,2,!1),i.add(s))}function Xf(t,n,i){var s=0;n&&(s|=4),Xy(i,t,s,n)}var zc="_reactListening"+Math.random().toString(36).slice(2);function qf(t){if(!t[zc]){t[zc]=!0,va.forEach(function(i){i!=="selectionchange"&&(jE.has(i)||Xf(i,!1,t),Xf(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zc]||(n[zc]=!0,Xf("selectionchange",!1,n))}}function Xy(t,n,i,s){switch(wv(n)){case 2:var c=eT;break;case 8:c=tT;break;default:c=lh}i=c.bind(null,n,i,t),c=void 0,!fd||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,i,{capture:!0,passive:c}):t.addEventListener(n,i,!0):c!==void 0?t.addEventListener(n,i,{passive:c}):t.addEventListener(n,i,!1)}function If(t,n,i,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=On(E),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue e}E=E.parentNode}}s=s.return}Zp(function(){var Y=f,W=ud(i),ee=[];e:{var G=C0.get(t);if(G!==void 0){var Z=Pl,ve=t;switch(t){case"keypress":if(Hl(i)===0)break e;case"keydown":case"keyup":Z=x5;break;case"focusin":ve="focus",Z=gd;break;case"focusout":ve="blur",Z=gd;break;case"beforeblur":case"afterblur":Z=gd;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=s5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=S5;break;case w0:case S0:case E0:Z=u5;break;case T0:Z=T5;break;case"scroll":case"scrollend":Z=r5;break;case"wheel":Z=j5;break;case"copy":case"cut":case"paste":Z=f5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=n0;break;case"toggle":case"beforetoggle":Z=R5}var Re=(n&4)!==0,rt=!Re&&(t==="scroll"||t==="scrollend"),V=Re?G!==null?G+"Capture":null:G;Re=[];for(var U=Y,F;U!==null;){var J=U;if(F=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||F===null||V===null||(J=qo(U,V),J!=null&&Re.push(js(U,J,F))),rt)break;U=U.return}0<Re.length&&(G=new Z(G,ve,null,i,W),ee.push({event:G,listeners:Re}))}}if((n&7)===0){e:{if(G=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",G&&i!==cd&&(ve=i.relatedTarget||i.fromElement)&&(On(ve)||ve[Be]))break e;if((Z||G)&&(G=W.window===W?W:(G=W.ownerDocument)?G.defaultView||G.parentWindow:window,Z?(ve=i.relatedTarget||i.toElement,Z=Y,ve=ve?On(ve):null,ve!==null&&(rt=u(ve),Re=ve.tag,ve!==rt||Re!==5&&Re!==27&&Re!==6)&&(ve=null)):(Z=null,ve=Y),Z!==ve)){if(Re=e0,J="onMouseLeave",V="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(Re=n0,J="onPointerLeave",V="onPointerEnter",U="pointer"),rt=Z==null?G:Jt(Z),F=ve==null?G:Jt(ve),G=new Re(J,U+"leave",Z,i,W),G.target=rt,G.relatedTarget=F,J=null,On(W)===Y&&(Re=new Re(V,U+"enter",ve,i,W),Re.target=F,Re.relatedTarget=rt,J=Re),rt=J,Z&&ve)t:{for(Re=AE,V=Z,U=ve,F=0,J=V;J;J=Re(J))F++;J=0;for(var je=U;je;je=Re(je))J++;for(;0<F-J;)V=Re(V),F--;for(;0<J-F;)U=Re(U),J--;for(;F--;){if(V===U||U!==null&&V===U.alternate){Re=V;break t}V=Re(V),U=Re(U)}Re=null}else Re=null;Z!==null&&qy(ee,G,Z,Re,!1),ve!==null&&rt!==null&&qy(ee,rt,ve,Re,!0)}}e:{if(G=Y?Jt(Y):window,Z=G.nodeName&&G.nodeName.toLowerCase(),Z==="select"||Z==="input"&&G.type==="file")var Ie=u0;else if(l0(G))if(d0)Ie=V5;else{Ie=_5;var be=N5}else Z=G.nodeName,!Z||Z.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Y&&ld(Y.elementType)&&(Ie=u0):Ie=U5;if(Ie&&(Ie=Ie(t,Y))){c0(ee,Ie,i,W);break e}be&&be(t,G,Y),t==="focusout"&&Y&&G.type==="number"&&Y.memoizedProps.value!=null&&sd(G,"number",G.value)}switch(be=Y?Jt(Y):window,t){case"focusin":(l0(be)||be.contentEditable==="true")&&(Fr=be,Sd=Y,ts=null);break;case"focusout":ts=Sd=Fr=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,x0(ee,i,W);break;case"selectionchange":if(H5)break;case"keydown":case"keyup":x0(ee,i,W)}var Ve;if(vd)e:{switch(t){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else Pr?o0(t,i)&&(Xe="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Xe="onCompositionStart");Xe&&(a0&&i.locale!=="ko"&&(Pr||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&Pr&&(Ve=Wp()):(ci=W,hd="value"in ci?ci.value:ci.textContent,Pr=!0)),be=Oc(Y,Xe),0<be.length&&(Xe=new t0(Xe,t,null,i,W),ee.push({event:Xe,listeners:be}),Ve?Xe.data=Ve:(Ve=s0(i),Ve!==null&&(Xe.data=Ve)))),(Ve=D5?z5(t,i):O5(t,i))&&(Xe=Oc(Y,"onBeforeInput"),0<Xe.length&&(be=new t0("onBeforeInput","beforeinput",null,i,W),ee.push({event:be,listeners:Xe}),be.data=Ve)),EE(ee,t,Y,i,W)}Gy(ee,n)})}function js(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Oc(t,n){for(var i=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=qo(t,i),c!=null&&s.unshift(js(t,c,f)),c=qo(t,n),c!=null&&s.push(js(t,c,f))),t.tag===3)return s;t=t.return}return[]}function AE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qy(t,n,i,s,c){for(var f=n._reactName,x=[];i!==null&&i!==s;){var E=i,O=E.alternate,Y=E.stateNode;if(E=E.tag,O!==null&&O===s)break;E!==5&&E!==26&&E!==27||Y===null||(O=Y,c?(Y=qo(i,f),Y!=null&&x.unshift(js(i,Y,O))):c||(Y=qo(i,f),Y!=null&&x.push(js(i,Y,O)))),i=i.return}x.length!==0&&t.push({event:n,listeners:x})}var RE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function Iy(t){return(typeof t=="string"?t:""+t).replace(RE,`
`).replace(ME,"")}function Ky(t,n){return n=Iy(n),Iy(t)===n}function it(t,n,i,s,c,f){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Br(t,""+s);break;case"className":Wi(t,"class",s);break;case"tabIndex":Wi(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(t,i,s);break;case"style":Kp(t,s,f);break;case"data":if(n!=="object"){Wi(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Vl(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(i==="formAction"?(n!=="input"&&it(t,n,"name",c.name,c,null),it(t,n,"formEncType",c.formEncType,c,null),it(t,n,"formMethod",c.formMethod,c,null),it(t,n,"formTarget",c.formTarget,c,null)):(it(t,n,"encType",c.encType,c,null),it(t,n,"method",c.method,c,null),it(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Vl(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=Oa);break;case"onScroll":s!=null&&Ye("scroll",t);break;case"onScrollEnd":s!=null&&Ye("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Vl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":Ye("beforetoggle",t),Ye("toggle",t),za(t,"popover",s);break;case"xlinkActuate":oa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":oa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":oa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":oa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":oa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":oa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":oa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":oa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":oa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":za(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=a5.get(i)||i,za(t,i,s))}}function Kf(t,n,i,s,c,f){switch(i){case"style":Kp(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof s=="string"?Br(t,s):(typeof s=="number"||typeof s=="bigint")&&Br(t,""+s);break;case"onScroll":s!=null&&Ye("scroll",t);break;case"onScrollEnd":s!=null&&Ye("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zi.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),n=i.slice(2,c?i.length-7:void 0),f=t[me]||null,f=f!=null?f[i]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,s,c);break e}i in t?t[i]=s:s===!0?t.setAttribute(i,""):za(t,i,s)}}}function Zt(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",t),Ye("load",t);var s=!1,c=!1,f;for(f in i)if(i.hasOwnProperty(f)){var x=i[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:it(t,n,f,x,i,null)}}c&&it(t,n,"srcSet",i.srcSet,i,null),s&&it(t,n,"src",i.src,i,null);return;case"input":Ye("invalid",t);var E=f=x=c=null,O=null,Y=null;for(s in i)if(i.hasOwnProperty(s)){var W=i[s];if(W!=null)switch(s){case"name":c=W;break;case"type":x=W;break;case"checked":O=W;break;case"defaultChecked":Y=W;break;case"value":f=W;break;case"defaultValue":E=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(o(137,n));break;default:it(t,n,s,W,i,null)}}Gp(t,f,E,O,Y,x,c,!1);return;case"select":Ye("invalid",t),s=x=f=null;for(c in i)if(i.hasOwnProperty(c)&&(E=i[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:it(t,n,c,E,i,null)}n=f,i=x,t.multiple=!!s,n!=null?Vr(t,!!s,n,!1):i!=null&&Vr(t,!!s,i,!0);return;case"textarea":Ye("invalid",t),f=c=s=null;for(x in i)if(i.hasOwnProperty(x)&&(E=i[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(91));break;default:it(t,n,x,E,i,null)}qp(t,s,c,f);return;case"option":for(O in i)if(i.hasOwnProperty(O)&&(s=i[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:it(t,n,O,s,i,null)}return;case"dialog":Ye("beforetoggle",t),Ye("toggle",t),Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":Ye("load",t);break;case"video":case"audio":for(s=0;s<Cs.length;s++)Ye(Cs[s],t);break;case"image":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"embed":case"source":case"link":Ye("error",t),Ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(s=i[Y],s!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:it(t,n,Y,s,i,null)}return;default:if(ld(n)){for(W in i)i.hasOwnProperty(W)&&(s=i[W],s!==void 0&&Kf(t,n,W,s,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(s=i[E],s!=null&&it(t,n,E,s,i,null))}function DE(t,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,O=null,Y=null,W=null;for(Z in i){var ee=i[Z];if(i.hasOwnProperty(Z)&&ee!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":O=ee;default:s.hasOwnProperty(Z)||it(t,n,Z,null,s,ee)}}for(var G in s){var Z=s[G];if(ee=i[G],s.hasOwnProperty(G)&&(Z!=null||ee!=null))switch(G){case"type":f=Z;break;case"name":c=Z;break;case"checked":Y=Z;break;case"defaultChecked":W=Z;break;case"value":x=Z;break;case"defaultValue":E=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(o(137,n));break;default:Z!==ee&&it(t,n,G,Z,s,ee)}}od(t,x,E,O,Y,W,f,c);return;case"select":Z=x=E=G=null;for(f in i)if(O=i[f],i.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":Z=O;default:s.hasOwnProperty(f)||it(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=i[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":G=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==O&&it(t,n,c,f,s,O)}n=E,i=x,s=Z,G!=null?Vr(t,!!i,G,!1):!!s!=!!i&&(n!=null?Vr(t,!!i,n,!0):Vr(t,!!i,i?[]:"",!1));return;case"textarea":Z=G=null;for(E in i)if(c=i[E],i.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:it(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=i[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":G=c;break;case"defaultValue":Z=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==f&&it(t,n,x,c,s,f)}Xp(t,G,Z);return;case"option":for(var ve in i)if(G=i[ve],i.hasOwnProperty(ve)&&G!=null&&!s.hasOwnProperty(ve))switch(ve){case"selected":t.selected=!1;break;default:it(t,n,ve,null,s,G)}for(O in s)if(G=s[O],Z=i[O],s.hasOwnProperty(O)&&G!==Z&&(G!=null||Z!=null))switch(O){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(t,n,O,G,s,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in i)G=i[Re],i.hasOwnProperty(Re)&&G!=null&&!s.hasOwnProperty(Re)&&it(t,n,Re,null,s,G);for(Y in s)if(G=s[Y],Z=i[Y],s.hasOwnProperty(Y)&&G!==Z&&(G!=null||Z!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(o(137,n));break;default:it(t,n,Y,G,s,Z)}return;default:if(ld(n)){for(var rt in i)G=i[rt],i.hasOwnProperty(rt)&&G!==void 0&&!s.hasOwnProperty(rt)&&Kf(t,n,rt,void 0,s,G);for(W in s)G=s[W],Z=i[W],!s.hasOwnProperty(W)||G===Z||G===void 0&&Z===void 0||Kf(t,n,W,G,s,Z);return}}for(var V in i)G=i[V],i.hasOwnProperty(V)&&G!=null&&!s.hasOwnProperty(V)&&it(t,n,V,null,s,G);for(ee in s)G=s[ee],Z=i[ee],!s.hasOwnProperty(ee)||G===Z||G==null&&Z==null||it(t,n,ee,G,s,Z)}function Qy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var c=i[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Qy(x)){for(x=0,E=c.responseEnd,s+=1;s<i.length;s++){var O=i[s],Y=O.startTime;if(Y>E)break;var W=O.transferSize,ee=O.initiatorType;W&&Qy(ee)&&(O=O.responseEnd,x+=W*(O<E?1:(E-Y)/(O-Y)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qf=null,Zf=null;function kc(t){return t.nodeType===9?t:t.ownerDocument}function Zy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function OE(){var t=window.event;return t&&t.type==="popstate"?t===Jf?!1:(Jf=t,!0):(Jf=null,!1)}var Jy=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(NE)}:Jy;function NE(t){setTimeout(function(){throw t})}function ji(t){return t==="head"}function tv(t,n){var i=n,s=0;do{var c=i.nextSibling;if(t.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(c),yo(n);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")As(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,As(i);for(var f=i.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Qe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||i.removeChild(f),f=x}}else i==="body"&&As(t.ownerDocument.body);i=c}while(i);yo(n)}function nv(t,n){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":eh(i),ra(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function _E(t,n,i,s){for(;t.nodeType===1;){var c=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Pn(t.nextSibling),t===null)break}return null}function UE(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Pn(t.nextSibling),t===null))return null;return t}function av(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Pn(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VE(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Pn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ah=null;function iv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return Pn(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function rv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function ov(t,n,i){switch(n=kc(i),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function As(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ra(t)}var Fn=new Map,sv=new Set;function Lc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ia=_.d;_.d={f:BE,r:HE,D:$E,C:PE,L:FE,m:YE,X:XE,S:GE,M:qE};function BE(){var t=Ia.f(),n=Cc();return t||n}function HE(t){var n=on(t);n!==null&&n.tag===5&&n.type==="form"?Tg(n):Ia.r(t)}var mo=typeof document>"u"?null:document;function lv(t,n,i){var s=mo;if(s&&typeof n=="string"&&n){var c=Nn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),sv.has(c)||(sv.add(c),t={rel:t,crossOrigin:i,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Zt(n,"link",t),yt(n),s.head.appendChild(n)))}}function $E(t){Ia.D(t),lv("dns-prefetch",t,null)}function PE(t,n){Ia.C(t,n),lv("preconnect",t,n)}function FE(t,n,i){Ia.L(t,n,i);var s=mo;if(s&&t&&n){var c='link[rel="preload"][as="'+Nn(n)+'"]';n==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+Nn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+Nn(i.imageSizes)+'"]')):c+='[href="'+Nn(t)+'"]';var f=c;switch(n){case"style":f=po(t);break;case"script":f=go(t)}Fn.has(f)||(t=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Fn.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Rs(f))||n==="script"&&s.querySelector(Ms(f))||(n=s.createElement("link"),Zt(n,"link",t),yt(n),s.head.appendChild(n)))}}function YE(t,n){Ia.m(t,n);var i=mo;if(i&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Nn(s)+'"][href="'+Nn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=go(t)}if(!Fn.has(f)&&(t=v({rel:"modulepreload",href:t},n),Fn.set(f,t),i.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ms(f)))return}s=i.createElement("link"),Zt(s,"link",t),yt(s),i.head.appendChild(s)}}}function GE(t,n,i){Ia.S(t,n,i);var s=mo;if(s&&t){var c=ya(s).hoistableStyles,f=po(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(Rs(f)))E.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Fn.get(f))&&ih(t,i);var O=x=s.createElement("link");yt(O),Zt(O,"link",t),O._p=new Promise(function(Y,W){O.onload=Y,O.onerror=W}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nc(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function XE(t,n){Ia.X(t,n);var i=mo;if(i&&t){var s=ya(i).hoistableScripts,c=go(t),f=s.get(c);f||(f=i.querySelector(Ms(c)),f||(t=v({src:t,async:!0},n),(n=Fn.get(c))&&rh(t,n),f=i.createElement("script"),yt(f),Zt(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function qE(t,n){Ia.M(t,n);var i=mo;if(i&&t){var s=ya(i).hoistableScripts,c=go(t),f=s.get(c);f||(f=i.querySelector(Ms(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=Fn.get(c))&&rh(t,n),f=i.createElement("script"),yt(f),Zt(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function cv(t,n,i,s){var c=(c=Ee.current)?Lc(c):null;if(!c)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=po(i.href),i=ya(c).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=po(i.href);var f=ya(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(Rs(t)))&&!f._p&&(x.instance=f,x.state.loading=5),Fn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Fn.set(t,i),f||IE(c,t,i,x.state))),n&&s===null)throw Error(o(528,""));return x}if(n&&s!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=go(i),i=ya(c).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function po(t){return'href="'+Nn(t)+'"'}function Rs(t){return'link[rel="stylesheet"]['+t+"]"}function uv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function IE(t,n,i,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Zt(n,"link",i),yt(n),t.head.appendChild(n))}function go(t){return'[src="'+Nn(t)+'"]'}function Ms(t){return"script[async]"+t}function dv(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Nn(i.href)+'"]');if(s)return n.instance=s,yt(s),s;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),yt(s),Zt(s,"style",c),Nc(s,i.precedence,t),n.instance=s;case"stylesheet":c=po(i.href);var f=t.querySelector(Rs(c));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;s=uv(i),(c=Fn.get(c))&&ih(s,c),f=(t.ownerDocument||t).createElement("link"),yt(f);var x=f;return x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Zt(f,"link",s),n.state.loading|=4,Nc(f,i.precedence,t),n.instance=f;case"script":return f=go(i.src),(c=t.querySelector(Ms(f)))?(n.instance=c,yt(c),c):(s=i,(c=Fn.get(f))&&(s=v({},i),rh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),yt(c),Zt(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Nc(s,i.precedence,t));return n.instance}function Nc(t,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function ih(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var _c=null;function fv(t,n,i){if(_c===null){var s=new Map,c=_c=new Map;c.set(i,s)}else c=_c,s=c.get(i),s||(s=new Map,c.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),c=0;c<i.length;c++){var f=i[c];if(!(f[Qe]||f[fe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function hv(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function KE(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function QE(t,n,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=po(s.href),f=n.querySelector(Rs(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Uc.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=f,yt(f);return}f=n.ownerDocument||n,s=uv(s),(c=Fn.get(c))&&ih(s,c),f=f.createElement("link"),yt(f);var x=f;x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Zt(f,"link",s),i.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Uc.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var oh=0;function ZE(t,n){return t.stylesheets&&t.count===0&&Bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&oh===0&&(oh=62500*zE());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>oh?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function Bc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,n.forEach(WE,t),Vc=null,Uc.call(t))}function WE(t,n){if(!(n.state.loading&4)){var i=Vc.get(t);if(i)var s=i.get(null);else{i=new Map,Vc.set(t,i);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(i.set(x.dataset.precedence,x),s=x)}s&&i.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=i.get(x)||s,f===s&&i.set(null,c),i.set(x,c),this.count++,s=Uc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ds={$$typeof:N,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function JE(t,n,i,s,c,f,x,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.hiddenUpdates=Xo(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function pv(t,n,i,s,c,f,x,E,O,Y,W,ee){return t=new JE(t,n,i,x,O,Y,W,ee,E),n=1,f===!0&&(n|=24),f=En(3,null,null,n),t.current=f,f.stateNode=t,n=Vd(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:i,cache:n},Pd(f),t}function gv(t){return t?(t=Xr,t):Xr}function yv(t,n,i,s,c,f){c=gv(c),s.context===null?s.context=c:s.pendingContext=c,s=pi(n),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=gi(t,s,n),i!==null&&(pn(i,t,n),ls(i,t,n))}function vv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function sh(t,n){vv(t,n),(t=t.alternate)&&vv(t,n)}function xv(t){if(t.tag===13||t.tag===31){var n=nr(t,67108864);n!==null&&pn(n,t,67108864),sh(t,67108864)}}function bv(t){if(t.tag===13||t.tag===31){var n=Rn();n=we(n);var i=nr(t,n);i!==null&&pn(i,t,n),sh(t,n)}}var Hc=!0;function eT(t,n,i,s){var c=D.T;D.T=null;var f=_.p;try{_.p=2,lh(t,n,i,s)}finally{_.p=f,D.T=c}}function tT(t,n,i,s){var c=D.T;D.T=null;var f=_.p;try{_.p=8,lh(t,n,i,s)}finally{_.p=f,D.T=c}}function lh(t,n,i,s){if(Hc){var c=ch(s);if(c===null)If(t,n,s,$c,i),Sv(t,s);else if(aT(c,t,n,i,s))s.stopPropagation();else if(Sv(t,s),n&4&&-1<nT.indexOf(t)){for(;c!==null;){var f=on(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ma(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var O=1<<31-rn(x);E.entanglements[1]|=O,x&=~O}Ea(f),(Ze&6)===0&&(Ec=De()+500,Ts(0))}}break;case 31:case 13:E=nr(f,2),E!==null&&pn(E,f,2),Cc(),sh(f,2)}if(f=ch(s),f===null&&If(t,n,s,$c,i),f===c)break;c=f}c!==null&&s.stopPropagation()}else If(t,n,s,null,i)}}function ch(t){return t=ud(t),uh(t)}var $c=null;function uh(t){if($c=null,t=On(t),t!==null){var n=u(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=d(n),t!==null)return t;t=null}else if(i===31){if(t=m(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return $c=t,null}function wv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case Ht:return 2;case gt:return 8;case pa:case Yo:return 32;case si:return 268435456;default:return 32}default:return 32}}var dh=!1,Ai=null,Ri=null,Mi=null,zs=new Map,Os=new Map,Di=[],nT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sv(t,n){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Mi=null;break;case"pointerover":case"pointerout":zs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(n.pointerId)}}function ks(t,n,i,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=on(n),n!==null&&xv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function aT(t,n,i,s,c){switch(n){case"focusin":return Ai=ks(Ai,t,n,i,s,c),!0;case"dragenter":return Ri=ks(Ri,t,n,i,s,c),!0;case"mouseover":return Mi=ks(Mi,t,n,i,s,c),!0;case"pointerover":var f=c.pointerId;return zs.set(f,ks(zs.get(f)||null,t,n,i,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Os.set(f,ks(Os.get(f)||null,t,n,i,s,c)),!0}return!1}function Ev(t){var n=On(t.target);if(n!==null){var i=u(n);if(i!==null){if(n=i.tag,n===13){if(n=d(i),n!==null){t.blockedOn=n,Te(t.priority,function(){bv(i)});return}}else if(n===31){if(n=m(i),n!==null){t.blockedOn=n,Te(t.priority,function(){bv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=ch(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);cd=s,i.target.dispatchEvent(s),cd=null}else return n=on(i),n!==null&&xv(n),t.blockedOn=i,!1;n.shift()}return!0}function Tv(t,n,i){Pc(t)&&i.delete(n)}function iT(){dh=!1,Ai!==null&&Pc(Ai)&&(Ai=null),Ri!==null&&Pc(Ri)&&(Ri=null),Mi!==null&&Pc(Mi)&&(Mi=null),zs.forEach(Tv),Os.forEach(Tv)}function Fc(t,n){t.blockedOn===n&&(t.blockedOn=null,dh||(dh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iT)))}var Yc=null;function Cv(t){Yc!==t&&(Yc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Yc===t&&(Yc=null);for(var n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(uh(s||i)===null)continue;break}var f=on(i);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:c,method:i.method,action:s},s,c))}}))}function yo(t){function n(O){return Fc(O,t)}Ai!==null&&Fc(Ai,t),Ri!==null&&Fc(Ri,t),Mi!==null&&Fc(Mi,t),zs.forEach(n),Os.forEach(n);for(var i=0;i<Di.length;i++){var s=Di[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Di.length&&(i=Di[0],i.blockedOn===null);)Ev(i),i.blockedOn===null&&Di.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var c=i[s],f=i[s+1],x=c[me]||null;if(typeof f=="function")x||Cv(i);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[me]||null)E=x.formAction;else if(uh(c)!==null)continue}else E=x.action;typeof E=="function"?i[s+1]=E:(i.splice(s,3),s-=3),Cv(i)}}}function jv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function fh(t){this._internalRoot=t}Gc.prototype.render=fh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,s=Rn();yv(i,s,t,n,null,null)},Gc.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yv(t.current,2,null,t,null,null),Cc(),n[Be]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Di.length&&n!==0&&n<Di[i].priority;i++);Di.splice(i,0,t),i===0&&Ev(t)}};var Av=a.version;if(Av!=="19.2.0")throw Error(o(527,Av,"19.2.0"));_.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=g(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var rT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{zn=Xc.inject(rT),$t=Xc}catch{}}return Ns.createRoot=function(t,n){if(!l(t))throw Error(o(299));var i=!1,s="",c=Lg,f=Ng,x=_g;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=pv(t,1,!1,null,null,i,s,null,c,f,x,jv),t[Be]=n.current,qf(t),new fh(n)},Ns.hydrateRoot=function(t,n,i){if(!l(t))throw Error(o(299));var s=!1,c="",f=Lg,x=Ng,E=_g,O=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(x=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(O=i.formState)),n=pv(t,1,!0,n,i??null,s,c,O,f,x,E,jv),n.context=gv(null),i=n.current,s=Rn(),s=we(s),c=pi(s),c.callback=null,gi(i,c,s),i=s,n.current.lanes=i,L(n,i),Ea(n),t[Be]=n.current,qf(t),new Gc(n)},Ns.version="19.2.0",Ns}var Uv;function pT(){if(Uv)return ph.exports;Uv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),ph.exports=mT(),ph.exports}var gT=pT();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ab=e=>{throw TypeError(e)},yT=(e,a,r)=>a.has(e)||Ab("Cannot "+r),xh=(e,a,r)=>(yT(e,a,"read from private field"),r?r.call(e):a.get(e)),vT=(e,a,r)=>a.has(e)?Ab("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,r),Vv="popstate";function xT(e={}){function a(o,l){let{pathname:u,search:d,hash:m}=o.location;return sl("",{pathname:u,search:d,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:Yi(l)}return wT(a,r,null,e)}function Pe(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Vt(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function bT(){return Math.random().toString(36).substring(2,10)}function Bv(e,a){return{usr:e.state,key:e.key,idx:a}}function sl(e,a,r=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?Xi(a):a,state:r,key:a&&a.key||o||bT()}}function Yi({pathname:e="/",search:a="",hash:r=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xi(e){let a={};if(e){let r=e.indexOf("#");r>=0&&(a.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(a.search=e.substring(o),e=e.substring(0,o)),e&&(a.pathname=e)}return a}function wT(e,a,r,o={}){let{window:l=document.defaultView,v5Compat:u=!1}=o,d=l.history,m="POP",p=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function v(){m="POP";let j=y(),C=j==null?null:j-g;g=j,p&&p({action:m,location:M.location,delta:C})}function b(j,C){m="PUSH";let z=sl(M.location,j,C);g=y()+1;let N=Bv(z,g),q=M.createHref(z);try{d.pushState(N,"",q)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(q)}u&&p&&p({action:m,location:M.location,delta:1})}function S(j,C){m="REPLACE";let z=sl(M.location,j,C);g=y();let N=Bv(z,g),q=M.createHref(z);d.replaceState(N,"",q),u&&p&&p({action:m,location:M.location,delta:0})}function T(j){return Rb(j)}let M={get action(){return m},get location(){return e(l,d)},listen(j){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Vv,v),p=j,()=>{l.removeEventListener(Vv,v),p=null}},createHref(j){return a(l,j)},createURL:T,encodeLocation(j){let C=T(j);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:b,replace:S,go(j){return d.go(j)}};return M}function Rb(e,a=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Yi(e);return o=o.replace(/ $/,"%20"),!a&&o.startsWith("//")&&(o=r+o),new URL(o,r)}var Is,Hv=class{constructor(e){if(vT(this,Is,new Map),e)for(let[a,r]of e)this.set(a,r)}get(e){if(xh(this,Is).has(e))return xh(this,Is).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,a){xh(this,Is).set(e,a)}};Is=new WeakMap;var ST=new Set(["lazy","caseSensitive","path","id","index","children"]);function ET(e){return ST.has(e)}var TT=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function CT(e){return TT.has(e)}function jT(e){return e.index===!0}function ll(e,a,r=[],o={},l=!1){return e.map((u,d)=>{let m=[...r,String(d)],p=typeof u.id=="string"?u.id:m.join("-");if(Pe(u.index!==!0||!u.children,"Cannot specify children on an index route"),Pe(l||!o[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),jT(u)){let g={...u,...a(u),id:p};return o[p]=g,g}else{let g={...u,...a(u),id:p,children:void 0};return o[p]=g,u.children&&(g.children=ll(u.children,a,m,o,l)),g}})}function Hi(e,a,r="/"){return uu(e,a,r,!1)}function uu(e,a,r,o){let l=typeof a=="string"?Xi(a):a,u=ea(l.pathname||"/",r);if(u==null)return null;let d=Mb(e);RT(d);let m=null;for(let p=0;m==null&&p<d.length;++p){let g=BT(u);m=UT(d[p],g,o)}return m}function AT(e,a){let{route:r,pathname:o,params:l}=e;return{id:r.id,pathname:o,params:l,data:a[r.id],loaderData:a[r.id],handle:r.handle}}function Mb(e,a=[],r=[],o="",l=!1){let u=(d,m,p=l,g)=>{let y={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&p)return;Pe(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let v=ja([o,y.relativePath]),b=r.concat(y);d.children&&d.children.length>0&&(Pe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Mb(d.children,a,b,v,p)),!(d.path==null&&!d.index)&&a.push({path:v,score:NT(v,d.index),routesMeta:b})};return e.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))u(d,m);else for(let p of Db(d.path))u(d,m,!0,p)}),a}function Db(e){let a=e.split("/");if(a.length===0)return[];let[r,...o]=a,l=r.endsWith("?"),u=r.replace(/\?$/,"");if(o.length===0)return l?[u,""]:[u];let d=Db(o.join("/")),m=[];return m.push(...d.map(p=>p===""?u:[u,p].join("/"))),l&&m.push(...d),m.map(p=>e.startsWith("/")&&p===""?"/":p)}function RT(e){e.sort((a,r)=>a.score!==r.score?r.score-a.score:_T(a.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var MT=/^:[\w-]+$/,DT=3,zT=2,OT=1,kT=10,LT=-2,$v=e=>e==="*";function NT(e,a){let r=e.split("/"),o=r.length;return r.some($v)&&(o+=LT),a&&(o+=zT),r.filter(l=>!$v(l)).reduce((l,u)=>l+(MT.test(u)?DT:u===""?OT:kT),o)}function _T(e,a){return e.length===a.length&&e.slice(0,-1).every((o,l)=>o===a[l])?e[e.length-1]-a[a.length-1]:0}function UT(e,a,r=!1){let{routesMeta:o}=e,l={},u="/",d=[];for(let m=0;m<o.length;++m){let p=o[m],g=m===o.length-1,y=u==="/"?a:a.slice(u.length)||"/",v=Cu({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),b=p.route;if(!v&&g&&r&&!o[o.length-1].route.index&&(v=Cu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!v)return null;Object.assign(l,v.params),d.push({params:l,pathname:ja([u,v.pathname]),pathnameBase:FT(ja([u,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(u=ja([u,v.pathnameBase]))}return d}function Cu(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=VT(e.path,e.caseSensitive,e.end),l=a.match(r);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:o.reduce((g,{paramName:y,isOptional:v},b)=>{if(y==="*"){let T=m[b]||"";d=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const S=m[b];return v&&!S?g[y]=void 0:g[y]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:d,pattern:e}}function VT(e,a=!1,r=!0){Vt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,m,p)=>(o.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,a?void 0:"i"),o]}function BT(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Vt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function ea(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let r=a.endsWith("/")?a.length-1:a.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function HT({basename:e,pathname:a}){return a==="/"?e:ja([e,a])}function $T(e,a="/"){let{pathname:r,search:o="",hash:l=""}=typeof e=="string"?Xi(e):e;return{pathname:r?r.startsWith("/")?r:PT(r,a):a,search:YT(o),hash:GT(l)}}function PT(e,a){let r=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function bh(e,a,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zb(e){return e.filter((a,r)=>r===0||a.route.path&&a.route.path.length>0)}function Hm(e){let a=zb(e);return a.map((r,o)=>o===a.length-1?r.pathname:r.pathnameBase)}function $m(e,a,r,o=!1){let l;typeof e=="string"?l=Xi(e):(l={...e},Pe(!l.pathname||!l.pathname.includes("?"),bh("?","pathname","search",l)),Pe(!l.pathname||!l.pathname.includes("#"),bh("#","pathname","hash",l)),Pe(!l.search||!l.search.includes("#"),bh("#","search","hash",l)));let u=e===""||l.pathname==="",d=u?"/":l.pathname,m;if(d==null)m=r;else{let v=a.length-1;if(!o&&d.startsWith("..")){let b=d.split("/");for(;b[0]==="..";)b.shift(),v-=1;l.pathname=b.join("/")}m=v>=0?a[v]:"/"}let p=$T(l,m),g=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var ja=e=>e.join("/").replace(/\/\/+/g,"/"),FT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),YT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ju=class{constructor(e,a,r,o=!1){this.status=e,this.statusText=a||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function cl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ob=["POST","PUT","PATCH","DELETE"],XT=new Set(Ob),qT=["GET",...Ob],IT=new Set(qT),KT=new Set([301,302,303,307,308]),QT=new Set([307,308]),wh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ZT={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_s={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},WT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pm=e=>WT.test(e),JT=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),kb="remix-router-transitions",Lb=Symbol("ResetLoaderData");function eC(e){const a=e.window?e.window:typeof window<"u"?window:void 0,r=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";Pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o=e.hydrationRouteProperties||[],l=e.mapRouteProperties||JT,u={},d=ll(e.routes,l,void 0,u),m,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let g=e.dataStrategy||rC,y={...e.future},v=null,b=new Set,S=null,T=null,M=null,j=e.hydrationData!=null,C=Hi(d,e.history.location,p),z=!1,N=null,q;if(C==null&&!e.patchRoutesOnNavigation){let L=Qn(404,{pathname:e.history.location.pathname}),{matches:B,route:Q}=qc(d);q=!0,C=B,N={[Q.id]:L}}else if(C&&!e.hydrationData&&ga(C,d,e.history.location.pathname).active&&(C=null),C)if(C.some(L=>L.route.lazy))q=!1;else if(!C.some(L=>Fm(L.route)))q=!0;else{let L=e.hydrationData?e.hydrationData.loaderData:null,B=e.hydrationData?e.hydrationData.errors:null;if(B){let Q=C.findIndex(ie=>B[ie.route.id]!==void 0);q=C.slice(0,Q+1).every(ie=>!Wh(ie.route,L,B))}else q=C.every(Q=>!Wh(Q.route,L,B))}else{q=!1,C=[];let L=ga(null,d,e.history.location.pathname);L.active&&L.matches&&(z=!0,C=L.matches)}let H,A={historyAction:e.history.action,location:e.history.location,matches:C,initialized:q,navigation:wh,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||N,fetchers:new Map,blockers:new Map},$="POP",P=!1,X,se=!1,pe=new Map,Ne=null,de=!1,ge=!1,ze=new Set,D=new Map,_=0,I=-1,oe=new Map,ue=new Set,k=new Map,K=new Map,te=new Set,le=new Map,ye,Ee=null;function ne(){if(v=e.history.listen(({action:L,location:B,delta:Q})=>{if(ye){ye(),ye=void 0;return}Vt(le.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=Nl({currentLocation:A.location,nextLocation:B,historyAction:L});if(ie&&Q!=null){let ce=new Promise(we=>{ye=we});e.history.go(Q*-1),Nr(ie,{state:"blocked",location:B,proceed(){Nr(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),ce.then(()=>e.history.go(Q))},reset(){let we=new Map(A.blockers);we.set(ie,_s),he({blockers:we})}});return}return Me(L,B)}),r){bC(a,pe);let L=()=>wC(a,pe);a.addEventListener("pagehide",L),Ne=()=>a.removeEventListener("pagehide",L)}return A.initialized||Me("POP",A.location,{initialHydration:!0}),H}function re(){v&&v(),Ne&&Ne(),b.clear(),X&&X.abort(),A.fetchers.forEach((L,B)=>si(B)),A.blockers.forEach((L,B)=>Ll(B))}function ae(L){return b.add(L),()=>b.delete(L)}function he(L,B={}){L.matches&&(L.matches=L.matches.map(ce=>{let we=u[ce.route.id],Se=ce.route;return Se.element!==we.element||Se.errorElement!==we.errorElement||Se.hydrateFallbackElement!==we.hydrateFallbackElement?{...ce,route:we}:ce})),A={...A,...L};let Q=[],ie=[];A.fetchers.forEach((ce,we)=>{ce.state==="idle"&&(te.has(we)?Q.push(we):ie.push(we))}),te.forEach(ce=>{!A.fetchers.has(ce)&&!D.has(ce)&&Q.push(ce)}),[...b].forEach(ce=>ce(A,{deletedFetchers:Q,viewTransitionOpts:B.viewTransitionOpts,flushSync:B.flushSync===!0})),Q.forEach(ce=>si(ce)),ie.forEach(ce=>A.fetchers.delete(ce))}function Oe(L,B,{flushSync:Q}={}){let ie=A.actionData!=null&&A.navigation.formMethod!=null&&gn(A.navigation.formMethod)&&A.navigation.state==="loading"&&L.state?._isRedirect!==!0,ce;B.actionData?Object.keys(B.actionData).length>0?ce=B.actionData:ce=null:ie?ce=A.actionData:ce=null;let we=B.loaderData?Zv(A.loaderData,B.loaderData,B.matches||[],B.errors):A.loaderData,Se=A.blockers;Se.size>0&&(Se=new Map(Se),Se.forEach((fe,me)=>Se.set(me,_s)));let xe=de?!1:Qi(L,B.matches||A.matches),Te=P===!0||A.navigation.formMethod!=null&&gn(A.navigation.formMethod)&&L.state?._isRedirect!==!0;m&&(d=m,m=void 0),de||$==="POP"||($==="PUSH"?e.history.push(L,L.state):$==="REPLACE"&&e.history.replace(L,L.state));let Ce;if($==="POP"){let fe=pe.get(A.location.pathname);fe&&fe.has(L.pathname)?Ce={currentLocation:A.location,nextLocation:L}:pe.has(L.pathname)&&(Ce={currentLocation:L,nextLocation:A.location})}else if(se){let fe=pe.get(A.location.pathname);fe?fe.add(L.pathname):(fe=new Set([L.pathname]),pe.set(A.location.pathname,fe)),Ce={currentLocation:A.location,nextLocation:L}}he({...B,actionData:ce,loaderData:we,historyAction:$,location:L,initialized:!0,navigation:wh,revalidation:"idle",restoreScrollPosition:xe,preventScrollReset:Te,blockers:Se},{viewTransitionOpts:Ce,flushSync:Q===!0}),$="POP",P=!1,se=!1,de=!1,ge=!1,Ee?.resolve(),Ee=null}async function Ae(L,B){if(typeof L=="number"){e.history.go(L);return}let Q=Zh(A.location,A.matches,p,L,B?.fromRouteId,B?.relative),{path:ie,submission:ce,error:we}=Pv(!1,Q,B),Se=A.location,xe=sl(A.location,ie,B&&B.state);xe={...xe,...e.history.encodeLocation(xe)};let Te=B&&B.replace!=null?B.replace:void 0,Ce="PUSH";Te===!0?Ce="REPLACE":Te===!1||ce!=null&&gn(ce.formMethod)&&ce.formAction===A.location.pathname+A.location.search&&(Ce="REPLACE");let fe=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,me=(B&&B.flushSync)===!0,Be=Nl({currentLocation:Se,nextLocation:xe,historyAction:Ce});if(Be){Nr(Be,{state:"blocked",location:xe,proceed(){Nr(Be,{state:"proceeding",proceed:void 0,reset:void 0,location:xe}),Ae(L,B)},reset(){let nt=new Map(A.blockers);nt.set(Be,_s),he({blockers:nt})}});return}await Me(Ce,xe,{submission:ce,pendingError:we,preventScrollReset:fe,replace:B&&B.replace,enableViewTransition:B&&B.viewTransition,flushSync:me})}function ke(){Ee||(Ee=SC()),dt(),he({revalidation:"loading"});let L=Ee.promise;return A.navigation.state==="submitting"?L:A.navigation.state==="idle"?(Me(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),L):(Me($||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:se===!0}),L)}async function Me(L,B,Q){X&&X.abort(),X=null,$=L,de=(Q&&Q.startUninterruptedRevalidation)===!0,Ma(A.location,A.matches),P=(Q&&Q.preventScrollReset)===!0,se=(Q&&Q.enableViewTransition)===!0;let ie=m||d,ce=Q&&Q.overrideNavigation,we=Q?.initialHydration&&A.matches&&A.matches.length>0&&!z?A.matches:Hi(ie,B,p),Se=(Q&&Q.flushSync)===!0;if(we&&A.initialized&&!ge&&hC(A.location,B)&&!(Q&&Q.submission&&gn(Q.submission.formMethod))){Oe(B,{matches:we},{flushSync:Se});return}let xe=ga(we,ie,B.pathname);if(xe.active&&xe.matches&&(we=xe.matches),!we){let{error:qt,notFoundMatches:lt,route:Qe}=li(B.pathname);Oe(B,{matches:lt,loaderData:{},errors:{[Qe.id]:qt}},{flushSync:Se});return}X=new AbortController;let Te=Eo(e.history,B,X.signal,Q&&Q.submission),Ce=e.getContext?await e.getContext():new Hv,fe;if(Q&&Q.pendingError)fe=[$i(we).route.id,{type:"error",error:Q.pendingError}];else if(Q&&Q.submission&&gn(Q.submission.formMethod)){let qt=await ut(Te,B,Q.submission,we,Ce,xe.active,Q&&Q.initialHydration===!0,{replace:Q.replace,flushSync:Se});if(qt.shortCircuited)return;if(qt.pendingActionResult){let[lt,Qe]=qt.pendingActionResult;if(Dn(Qe)&&cl(Qe.error)&&Qe.error.status===404){X=null,Oe(B,{matches:qt.matches,loaderData:{},errors:{[lt]:Qe.error}});return}}we=qt.matches||we,fe=qt.pendingActionResult,ce=Sh(B,Q.submission),Se=!1,xe.active=!1,Te=Eo(e.history,Te.url,Te.signal)}let{shortCircuited:me,matches:Be,loaderData:nt,errors:Dt}=await Tt(Te,B,we,Ce,xe.active,ce,Q&&Q.submission,Q&&Q.fetcherSubmission,Q&&Q.replace,Q&&Q.initialHydration===!0,Se,fe);me||(X=null,Oe(B,{matches:Be||we,...Wv(fe),loaderData:nt,errors:Dt}))}async function ut(L,B,Q,ie,ce,we,Se,xe={}){dt();let Te=vC(B,Q);if(he({navigation:Te},{flushSync:xe.flushSync===!0}),we){let me=await Ur(ie,B.pathname,L.signal);if(me.type==="aborted")return{shortCircuited:!0};if(me.type==="error"){if(me.partialMatches.length===0){let{matches:nt,route:Dt}=qc(d);return{matches:nt,pendingActionResult:[Dt.id,{type:"error",error:me.error}]}}let Be=$i(me.partialMatches).route.id;return{matches:me.partialMatches,pendingActionResult:[Be,{type:"error",error:me.error}]}}else if(me.matches)ie=me.matches;else{let{notFoundMatches:Be,error:nt,route:Dt}=li(B.pathname);return{matches:Be,pendingActionResult:[Dt.id,{type:"error",error:nt}]}}}let Ce,fe=du(ie,B);if(!fe.route.action&&!fe.route.lazy)Ce={type:"error",error:Qn(405,{method:L.method,pathname:B.pathname,routeId:fe.route.id})};else{let me=Do(l,u,L,ie,fe,Se?[]:o,ce),Be=await ma(L,me,ce,null);if(Ce=Be[fe.route.id],!Ce){for(let nt of ie)if(Be[nt.route.id]){Ce=Be[nt.route.id];break}}if(L.signal.aborted)return{shortCircuited:!0}}if(Tr(Ce)){let me;return xe&&xe.replace!=null?me=xe.replace:me=Iv(Ce.response.headers.get("Location"),new URL(L.url),p)===A.location.pathname+A.location.search,await aa(L,Ce,!0,{submission:Q,replace:me}),{shortCircuited:!0}}if(Dn(Ce)){let me=$i(ie,fe.route.id);return(xe&&xe.replace)!==!0&&($="PUSH"),{matches:ie,pendingActionResult:[me.route.id,Ce,fe.route.id]}}return{matches:ie,pendingActionResult:[fe.route.id,Ce]}}async function Tt(L,B,Q,ie,ce,we,Se,xe,Te,Ce,fe,me){let Be=we||Sh(B,Se),nt=Se||xe||e1(Be),Dt=!de&&!Ce;if(ce){if(Dt){let Pt=nn(me);he({navigation:Be,...Pt!==void 0?{actionData:Pt}:{}},{flushSync:fe})}let He=await Ur(Q,B.pathname,L.signal);if(He.type==="aborted")return{shortCircuited:!0};if(He.type==="error"){if(He.partialMatches.length===0){let{matches:Da,route:xa}=qc(d);return{matches:Da,loaderData:{},errors:{[xa.id]:He.error}}}let Pt=$i(He.partialMatches).route.id;return{matches:He.partialMatches,loaderData:{},errors:{[Pt]:He.error}}}else if(He.matches)Q=He.matches;else{let{error:Pt,notFoundMatches:Da,route:xa}=li(B.pathname);return{matches:Da,loaderData:{},errors:{[xa.id]:Pt}}}}let qt=m||d,{dsMatches:lt,revalidatingFetchers:Qe}=Fv(L,ie,l,u,e.history,A,Q,nt,B,Ce?[]:o,Ce===!0,ge,ze,te,k,ue,qt,p,e.patchRoutesOnNavigation!=null,me);if(I=++_,!e.dataStrategy&&!lt.some(He=>He.shouldLoad)&&!lt.some(He=>He.route.middleware&&He.route.middleware.length>0)&&Qe.length===0){let He=$t();return Oe(B,{matches:Q,loaderData:{},errors:me&&Dn(me[1])?{[me[0]]:me[1].error}:null,...Wv(me),...He?{fetchers:new Map(A.fetchers)}:{}},{flushSync:fe}),{shortCircuited:!0}}if(Dt){let He={};if(!ce){He.navigation=Be;let Pt=nn(me);Pt!==void 0&&(He.actionData=Pt)}Qe.length>0&&(He.fetchers=Ct(Qe)),he(He,{flushSync:fe})}Qe.forEach(He=>{Xt(He.key),He.controller&&D.set(He.key,He.controller)});let ra=()=>Qe.forEach(He=>Xt(He.key));X&&X.signal.addEventListener("abort",ra);let{loaderResults:On,fetcherResults:on}=await De(lt,Qe,L,ie);if(L.signal.aborted)return{shortCircuited:!0};X&&X.signal.removeEventListener("abort",ra),Qe.forEach(He=>D.delete(He.key));let Jt=Ic(On);if(Jt)return await aa(L,Jt.result,!0,{replace:Te}),{shortCircuited:!0};if(Jt=Ic(on),Jt)return ue.add(Jt.key),await aa(L,Jt.result,!0,{replace:Te}),{shortCircuited:!0};let{loaderData:ya,errors:yt}=Qv(A,Q,On,me,Qe,on);Ce&&A.errors&&(yt={...A.errors,...yt});let va=$t(),Zi=ia(I),kn=va||Zi||Qe.length>0;return{matches:Q,loaderData:ya,errors:yt,...kn?{fetchers:new Map(A.fetchers)}:{}}}function nn(L){if(L&&!Dn(L[1]))return{[L[0]]:L[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function Ct(L){return L.forEach(B=>{let Q=A.fetchers.get(B.key),ie=Us(void 0,Q?Q.data:void 0);A.fetchers.set(B.key,ie)}),new Map(A.fetchers)}async function jt(L,B,Q,ie){Xt(L);let ce=(ie&&ie.flushSync)===!0,we=m||d,Se=Zh(A.location,A.matches,p,Q,B,ie?.relative),xe=Hi(we,Se,p),Te=ga(xe,we,Se);if(Te.active&&Te.matches&&(xe=Te.matches),!xe){gt(L,B,Qn(404,{pathname:Se}),{flushSync:ce});return}let{path:Ce,submission:fe,error:me}=Pv(!0,Se,ie);if(me){gt(L,B,me,{flushSync:ce});return}let Be=e.getContext?await e.getContext():new Hv,nt=(ie&&ie.preventScrollReset)===!0;if(fe&&gn(fe.formMethod)){await an(L,B,Ce,xe,Be,Te.active,ce,nt,fe);return}k.set(L,{routeId:B,path:Ce}),await wn(L,B,Ce,xe,Be,Te.active,ce,nt,fe)}async function an(L,B,Q,ie,ce,we,Se,xe,Te){dt(),k.delete(L);let Ce=A.fetchers.get(L);Ht(L,xC(Te,Ce),{flushSync:Se});let fe=new AbortController,me=Eo(e.history,Q,fe.signal,Te);if(we){let At=await Ur(ie,new URL(me.url).pathname,me.signal,L);if(At.type==="aborted")return;if(At.type==="error"){gt(L,B,At.error,{flushSync:Se});return}else if(At.matches)ie=At.matches;else{gt(L,B,Qn(404,{pathname:Q}),{flushSync:Se});return}}let Be=du(ie,Q);if(!Be.route.action&&!Be.route.lazy){let At=Qn(405,{method:Te.formMethod,pathname:Q,routeId:B});gt(L,B,At,{flushSync:Se});return}D.set(L,fe);let nt=_,Dt=Do(l,u,me,ie,Be,o,ce),lt=(await ma(me,Dt,ce,L))[Be.route.id];if(me.signal.aborted){D.get(L)===fe&&D.delete(L);return}if(te.has(L)){if(Tr(lt)||Dn(lt)){Ht(L,Qa(void 0));return}}else{if(Tr(lt))if(D.delete(L),I>nt){Ht(L,Qa(void 0));return}else return ue.add(L),Ht(L,Us(Te)),aa(me,lt,!1,{fetcherSubmission:Te,preventScrollReset:xe});if(Dn(lt)){gt(L,B,lt.error);return}}let Qe=A.navigation.location||A.location,ra=Eo(e.history,Qe,fe.signal),On=m||d,on=A.navigation.state!=="idle"?Hi(On,A.navigation.location,p):A.matches;Pe(on,"Didn't find any matches after fetcher action");let Jt=++_;oe.set(L,Jt);let ya=Us(Te,lt.data);A.fetchers.set(L,ya);let{dsMatches:yt,revalidatingFetchers:va}=Fv(ra,ce,l,u,e.history,A,on,Te,Qe,o,!1,ge,ze,te,k,ue,On,p,e.patchRoutesOnNavigation!=null,[Be.route.id,lt]);va.filter(At=>At.key!==L).forEach(At=>{let za=At.key,Wi=A.fetchers.get(za),oa=Us(void 0,Wi?Wi.data:void 0);A.fetchers.set(za,oa),Xt(za),At.controller&&D.set(za,At.controller)}),he({fetchers:new Map(A.fetchers)});let Zi=()=>va.forEach(At=>Xt(At.key));fe.signal.addEventListener("abort",Zi);let{loaderResults:kn,fetcherResults:He}=await De(yt,va,ra,ce);if(fe.signal.aborted)return;if(fe.signal.removeEventListener("abort",Zi),oe.delete(L),D.delete(L),va.forEach(At=>D.delete(At.key)),A.fetchers.has(L)){let At=Qa(lt.data);A.fetchers.set(L,At)}let Pt=Ic(kn);if(Pt)return aa(ra,Pt.result,!1,{preventScrollReset:xe});if(Pt=Ic(He),Pt)return ue.add(Pt.key),aa(ra,Pt.result,!1,{preventScrollReset:xe});let{loaderData:Da,errors:xa}=Qv(A,on,kn,void 0,va,He);ia(Jt),A.navigation.state==="loading"&&Jt>I?(Pe($,"Expected pending action"),X&&X.abort(),Oe(A.navigation.location,{matches:on,loaderData:Da,errors:xa,fetchers:new Map(A.fetchers)})):(he({errors:xa,loaderData:Zv(A.loaderData,Da,on,xa),fetchers:new Map(A.fetchers)}),ge=!1)}async function wn(L,B,Q,ie,ce,we,Se,xe,Te){let Ce=A.fetchers.get(L);Ht(L,Us(Te,Ce?Ce.data:void 0),{flushSync:Se});let fe=new AbortController,me=Eo(e.history,Q,fe.signal);if(we){let Qe=await Ur(ie,new URL(me.url).pathname,me.signal,L);if(Qe.type==="aborted")return;if(Qe.type==="error"){gt(L,B,Qe.error,{flushSync:Se});return}else if(Qe.matches)ie=Qe.matches;else{gt(L,B,Qn(404,{pathname:Q}),{flushSync:Se});return}}let Be=du(ie,Q);D.set(L,fe);let nt=_,Dt=Do(l,u,me,ie,Be,o,ce),lt=(await ma(me,Dt,ce,L))[Be.route.id];if(D.get(L)===fe&&D.delete(L),!me.signal.aborted){if(te.has(L)){Ht(L,Qa(void 0));return}if(Tr(lt))if(I>nt){Ht(L,Qa(void 0));return}else{ue.add(L),await aa(me,lt,!1,{preventScrollReset:xe});return}if(Dn(lt)){gt(L,B,lt.error);return}Ht(L,Qa(lt.data))}}async function aa(L,B,Q,{submission:ie,fetcherSubmission:ce,preventScrollReset:we,replace:Se}={}){B.response.headers.has("X-Remix-Revalidate")&&(ge=!0);let xe=B.response.headers.get("Location");Pe(xe,"Expected a Location header on the redirect Response"),xe=Iv(xe,new URL(L.url),p);let Te=sl(A.location,xe,{_isRedirect:!0});if(r){let Dt=!1;if(B.response.headers.has("X-Remix-Reload-Document"))Dt=!0;else if(Pm(xe)){const qt=Rb(xe,!0);Dt=qt.origin!==a.location.origin||ea(qt.pathname,p)==null}if(Dt){Se?a.location.replace(xe):a.location.assign(xe);return}}X=null;let Ce=Se===!0||B.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:fe,formAction:me,formEncType:Be}=A.navigation;!ie&&!ce&&fe&&me&&Be&&(ie=e1(A.navigation));let nt=ie||ce;if(QT.has(B.response.status)&&nt&&gn(nt.formMethod))await Me(Ce,Te,{submission:{...nt,formAction:xe},preventScrollReset:we||P,enableViewTransition:Q?se:void 0});else{let Dt=Sh(Te,ie);await Me(Ce,Te,{overrideNavigation:Dt,fetcherSubmission:ce,preventScrollReset:we||P,enableViewTransition:Q?se:void 0})}}async function ma(L,B,Q,ie){let ce,we={};try{ce=await sC(g,L,B,ie,Q,!1)}catch(Se){return B.filter(xe=>xe.shouldLoad).forEach(xe=>{we[xe.route.id]={type:"error",error:Se}}),we}if(L.signal.aborted)return we;for(let[Se,xe]of Object.entries(ce))if(gC(xe)){let Te=xe.result;we[Se]={type:"redirect",response:dC(Te,L,Se,B,p)}}else we[Se]=await uC(xe);return we}async function De(L,B,Q,ie){let ce=ma(Q,L,ie,null),we=Promise.all(B.map(async Te=>{if(Te.matches&&Te.match&&Te.request&&Te.controller){let fe=(await ma(Te.request,Te.matches,ie,Te.key))[Te.match.route.id];return{[Te.key]:fe}}else return Promise.resolve({[Te.key]:{type:"error",error:Qn(404,{pathname:Te.path})}})})),Se=await ce,xe=(await we).reduce((Te,Ce)=>Object.assign(Te,Ce),{});return{loaderResults:Se,fetcherResults:xe}}function dt(){ge=!0,k.forEach((L,B)=>{D.has(B)&&ze.add(B),Xt(B)})}function Ht(L,B,Q={}){A.fetchers.set(L,B),he({fetchers:new Map(A.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function gt(L,B,Q,ie={}){let ce=$i(A.matches,B);si(L),he({errors:{[ce.route.id]:Q},fetchers:new Map(A.fetchers)},{flushSync:(ie&&ie.flushSync)===!0})}function pa(L){return K.set(L,(K.get(L)||0)+1),te.has(L)&&te.delete(L),A.fetchers.get(L)||ZT}function Yo(L,B){Xt(L,B?.reason),Ht(L,Qa(null))}function si(L){let B=A.fetchers.get(L);D.has(L)&&!(B&&B.state==="loading"&&oe.has(L))&&Xt(L),k.delete(L),oe.delete(L),ue.delete(L),te.delete(L),ze.delete(L),A.fetchers.delete(L)}function Go(L){let B=(K.get(L)||0)-1;B<=0?(K.delete(L),te.add(L)):K.set(L,B),he({fetchers:new Map(A.fetchers)})}function Xt(L,B){let Q=D.get(L);Q&&(Q.abort(B),D.delete(L))}function zn(L){for(let B of L){let Q=pa(B),ie=Qa(Q.data);A.fetchers.set(B,ie)}}function $t(){let L=[],B=!1;for(let Q of ue){let ie=A.fetchers.get(Q);Pe(ie,`Expected fetcher: ${Q}`),ie.state==="loading"&&(ue.delete(Q),L.push(Q),B=!0)}return zn(L),B}function ia(L){let B=[];for(let[Q,ie]of oe)if(ie<L){let ce=A.fetchers.get(Q);Pe(ce,`Expected fetcher: ${Q}`),ce.state==="loading"&&(Xt(Q),oe.delete(Q),B.push(Q))}return zn(B),B.length>0}function rn(L,B){let Q=A.blockers.get(L)||_s;return le.get(L)!==B&&le.set(L,B),Q}function Ll(L){A.blockers.delete(L),le.delete(L)}function Nr(L,B){let Q=A.blockers.get(L)||_s;Pe(Q.state==="unblocked"&&B.state==="blocked"||Q.state==="blocked"&&B.state==="blocked"||Q.state==="blocked"&&B.state==="proceeding"||Q.state==="blocked"&&B.state==="unblocked"||Q.state==="proceeding"&&B.state==="unblocked",`Invalid blocker state transition: ${Q.state} -> ${B.state}`);let ie=new Map(A.blockers);ie.set(L,B),he({blockers:ie})}function Nl({currentLocation:L,nextLocation:B,historyAction:Q}){if(le.size===0)return;le.size>1&&Vt(!1,"A router only supports one blocker at a time");let ie=Array.from(le.entries()),[ce,we]=ie[ie.length-1],Se=A.blockers.get(ce);if(!(Se&&Se.state==="proceeding")&&we({currentLocation:L,nextLocation:B,historyAction:Q}))return ce}function li(L){let B=Qn(404,{pathname:L}),Q=m||d,{matches:ie,route:ce}=qc(Q);return{notFoundMatches:ie,route:ce,error:B}}function _r(L,B,Q){if(S=L,M=B,T=Q||null,!j&&A.navigation===wh){j=!0;let ie=Qi(A.location,A.matches);ie!=null&&he({restoreScrollPosition:ie})}return()=>{S=null,M=null,T=null}}function Ki(L,B){return T&&T(L,B.map(ie=>AT(ie,A.loaderData)))||L.key}function Ma(L,B){if(S&&M){let Q=Ki(L,B);S[Q]=M()}}function Qi(L,B){if(S){let Q=Ki(L,B),ie=S[Q];if(typeof ie=="number")return ie}return null}function ga(L,B,Q){if(e.patchRoutesOnNavigation)if(L){if(Object.keys(L[0].params).length>0)return{active:!0,matches:uu(B,Q,p,!0)}}else return{active:!0,matches:uu(B,Q,p,!0)||[]};return{active:!1,matches:null}}async function Ur(L,B,Q,ie){if(!e.patchRoutesOnNavigation)return{type:"success",matches:L};let ce=L;for(;;){let we=m==null,Se=m||d,xe=u;try{await e.patchRoutesOnNavigation({signal:Q,path:B,matches:ce,fetcherKey:ie,patch:(fe,me)=>{Q.aborted||Yv(fe,me,Se,xe,l,!1)}})}catch(fe){return{type:"error",error:fe,partialMatches:ce}}finally{we&&!Q.aborted&&(d=[...d])}if(Q.aborted)return{type:"aborted"};let Te=Hi(Se,B,p);if(Te)return{type:"success",matches:Te};let Ce=uu(Se,B,p,!0);if(!Ce||ce.length===Ce.length&&ce.every((fe,me)=>fe.route.id===Ce[me].route.id))return{type:"success",matches:null};ce=Ce}}function _l(L){u={},m=ll(L,l,void 0,u)}function Xo(L,B,Q=!1){let ie=m==null;Yv(L,B,m||d,u,l,Q),ie&&(d=[...d],he({}))}return H={get basename(){return p},get future(){return y},get state(){return A},get routes(){return d},get window(){return a},initialize:ne,subscribe:ae,enableScrollRestoration:_r,navigate:Ae,fetch:jt,revalidate:ke,createHref:L=>e.history.createHref(L),encodeLocation:L=>e.history.encodeLocation(L),getFetcher:pa,resetFetcher:Yo,deleteFetcher:Go,dispose:re,getBlocker:rn,deleteBlocker:Ll,patchRoutes:Xo,_internalFetchControllers:D,_internalSetRoutes:_l,_internalSetStateDoNotUseOrYouWillBreakYourApp(L){he(L)}},H}function tC(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Zh(e,a,r,o,l,u){let d,m;if(l){d=[];for(let g of a)if(d.push(g),g.route.id===l){m=g;break}}else d=a,m=a[a.length-1];let p=$m(o||".",Hm(d),ea(e.pathname,r)||e.pathname,u==="path");if(o==null&&(p.search=e.search,p.hash=e.hash),(o==null||o===""||o===".")&&m){let g=Ym(p.search);if(m.route.index&&!g)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&g){let y=new URLSearchParams(p.search),v=y.getAll("index");y.delete("index"),v.filter(S=>S).forEach(S=>y.append("index",S));let b=y.toString();p.search=b?`?${b}`:""}}return r!=="/"&&(p.pathname=HT({basename:r,pathname:p.pathname})),Yi(p)}function Pv(e,a,r){if(!r||!tC(r))return{path:a};if(r.formMethod&&!yC(r.formMethod))return{path:a,error:Qn(405,{method:r.formMethod})};let o=()=>({path:a,error:Qn(400,{type:"invalid-body"})}),u=(r.formMethod||"get").toUpperCase(),d=Hb(a);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!gn(u))return o();let v=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,[S,T])=>`${b}${S}=${T}
`,""):String(r.body);return{path:a,submission:{formMethod:u,formAction:d,formEncType:r.formEncType,formData:void 0,json:void 0,text:v}}}else if(r.formEncType==="application/json"){if(!gn(u))return o();try{let v=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:a,submission:{formMethod:u,formAction:d,formEncType:r.formEncType,formData:void 0,json:v,text:void 0}}}catch{return o()}}}Pe(typeof FormData=="function","FormData is not available in this environment");let m,p;if(r.formData)m=em(r.formData),p=r.formData;else if(r.body instanceof FormData)m=em(r.body),p=r.body;else if(r.body instanceof URLSearchParams)m=r.body,p=Kv(m);else if(r.body==null)m=new URLSearchParams,p=new FormData;else try{m=new URLSearchParams(r.body),p=Kv(m)}catch{return o()}let g={formMethod:u,formAction:d,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(gn(g.formMethod))return{path:a,submission:g};let y=Xi(a);return e&&y.search&&Ym(y.search)&&m.append("index",""),y.search=`?${m}`,{path:Yi(y),submission:g}}function Fv(e,a,r,o,l,u,d,m,p,g,y,v,b,S,T,M,j,C,z,N){let q=N?Dn(N[1])?N[1].error:N[1].data:void 0,H=l.createURL(u.location),A=l.createURL(p),$;if(y&&u.errors){let de=Object.keys(u.errors)[0];$=d.findIndex(ge=>ge.route.id===de)}else if(N&&Dn(N[1])){let de=N[0];$=d.findIndex(ge=>ge.route.id===de)-1}let P=N?N[1].statusCode:void 0,X=P&&P>=400,se={currentUrl:H,currentParams:u.matches[0]?.params||{},nextUrl:A,nextParams:d[0].params,...m,actionResult:q,actionStatus:P},pe=d.map((de,ge)=>{let{route:ze}=de,D=null;if($!=null&&ge>$?D=!1:ze.lazy?D=!0:Fm(ze)?y?D=Wh(ze,u.loaderData,u.errors):nC(u.loaderData,u.matches[ge],de)&&(D=!0):D=!1,D!==null)return Jh(r,o,e,de,g,a,D);let _=X?!1:v||H.pathname+H.search===A.pathname+A.search||H.search!==A.search||aC(u.matches[ge],de),I={...se,defaultShouldRevalidate:_},oe=Au(de,I);return Jh(r,o,e,de,g,a,oe,I)}),Ne=[];return T.forEach((de,ge)=>{if(y||!d.some(K=>K.route.id===de.routeId)||S.has(ge))return;let ze=u.fetchers.get(ge),D=ze&&ze.state!=="idle"&&ze.data===void 0,_=Hi(j,de.path,C);if(!_){if(z&&D)return;Ne.push({key:ge,routeId:de.routeId,path:de.path,matches:null,match:null,request:null,controller:null});return}if(M.has(ge))return;let I=du(_,de.path),oe=new AbortController,ue=Eo(l,de.path,oe.signal),k=null;if(b.has(ge))b.delete(ge),k=Do(r,o,ue,_,I,g,a);else if(D)v&&(k=Do(r,o,ue,_,I,g,a));else{let K={...se,defaultShouldRevalidate:X?!1:v};Au(I,K)&&(k=Do(r,o,ue,_,I,g,a,K))}k&&Ne.push({key:ge,routeId:de.routeId,path:de.path,matches:k,match:I,request:ue,controller:oe})}),{dsMatches:pe,revalidatingFetchers:Ne}}function Fm(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function Wh(e,a,r){if(e.lazy)return!0;if(!Fm(e))return!1;let o=a!=null&&e.id in a,l=r!=null&&r[e.id]!==void 0;return!o&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!o&&!l}function nC(e,a,r){let o=!a||r.route.id!==a.route.id,l=!e.hasOwnProperty(r.route.id);return o||l}function aC(e,a){let r=e.route.path;return e.pathname!==a.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==a.params["*"]}function Au(e,a){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(a);if(typeof r=="boolean")return r}return a.defaultShouldRevalidate}function Yv(e,a,r,o,l,u){let d;if(e){let g=o[e];Pe(g,`No route found to patch children into: routeId = ${e}`),g.children||(g.children=[]),d=g.children}else d=r;let m=[],p=[];if(a.forEach(g=>{let y=d.find(v=>Nb(g,v));y?p.push({existingRoute:y,newRoute:g}):m.push(g)}),m.length>0){let g=ll(m,l,[e||"_","patch",String(d?.length||"0")],o);d.push(...g)}if(u&&p.length>0)for(let g=0;g<p.length;g++){let{existingRoute:y,newRoute:v}=p[g],b=y,[S]=ll([v],l,[],{},!0);Object.assign(b,{element:S.element?S.element:b.element,errorElement:S.errorElement?S.errorElement:b.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:b.hydrateFallbackElement})}}function Nb(e,a){return"id"in e&&"id"in a&&e.id===a.id?!0:e.index===a.index&&e.path===a.path&&e.caseSensitive===a.caseSensitive?(!e.children||e.children.length===0)&&(!a.children||a.children.length===0)?!0:e.children.every((r,o)=>a.children?.some(l=>Nb(r,l))):!1}var Gv=new WeakMap,_b=({key:e,route:a,manifest:r,mapRouteProperties:o})=>{let l=r[a.id];if(Pe(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let u=l.lazy[e];if(!u)return;let d=Gv.get(l);d||(d={},Gv.set(l,d));let m=d[e];if(m)return m;let p=(async()=>{let g=ET(e),v=l[e]!==void 0&&e!=="hasErrorBoundary";if(g)Vt(!g,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),d[e]=Promise.resolve();else if(v)Vt(!1,`Route "${l.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let b=await u();b!=null&&(Object.assign(l,{[e]:b}),Object.assign(l,o(l)))}typeof l.lazy=="object"&&(l.lazy[e]=void 0,Object.values(l.lazy).every(b=>b===void 0)&&(l.lazy=void 0))})();return d[e]=p,p},Xv=new WeakMap;function iC(e,a,r,o,l){let u=r[e.id];if(Pe(u,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=Xv.get(u);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let v=(async()=>{Pe(typeof e.lazy=="function","No lazy route function found");let b=await e.lazy(),S={};for(let T in b){let M=b[T];if(M===void 0)continue;let j=CT(T),z=u[T]!==void 0&&T!=="hasErrorBoundary";j?Vt(!j,"Route property "+T+" is not a supported property to be returned from a lazy route function. This property will be ignored."):z?Vt(!z,`Route "${u.id}" has a static property "${T}" defined but its lazy function is also returning a value for this property. The lazy route property "${T}" will be ignored.`):S[T]=M}Object.assign(u,S),Object.assign(u,{...o(u),lazy:void 0})})();return Xv.set(u,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let d=Object.keys(e.lazy),m=[],p;for(let y of d){if(l&&l.includes(y))continue;let v=_b({key:y,route:e,manifest:r,mapRouteProperties:o});v&&(m.push(v),y===a&&(p=v))}let g=m.length>0?Promise.all(m).then(()=>{}):void 0;return g?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:p}}async function qv(e){let a=e.matches.filter(l=>l.shouldLoad),r={};return(await Promise.all(a.map(l=>l.resolve()))).forEach((l,u)=>{r[a[u].route.id]=l}),r}async function rC(e){return e.matches.some(a=>a.route.middleware)?Ub(e,()=>qv(e)):qv(e)}function Ub(e,a){return oC(e,a,o=>o,mC,r);function r(o,l,u){if(u)return Promise.resolve(Object.assign(u.value,{[l]:{type:"error",result:o}}));{let{matches:d}=e,m=Math.min(Math.max(d.findIndex(g=>g.route.id===l),0),Math.max(d.findIndex(g=>g.unstable_shouldCallHandler()),0)),p=$i(d,d[m].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:o}})}}}async function oC(e,a,r,o,l){let{matches:u,request:d,params:m,context:p}=e,g=u.flatMap(v=>v.route.middleware?v.route.middleware.map(b=>[v.route.id,b]):[]);return await Vb({request:d,params:m,context:p},g,a,r,o,l)}async function Vb(e,a,r,o,l,u,d=0){let{request:m}=e;if(m.signal.aborted)throw m.signal.reason??new Error(`Request aborted: ${m.method} ${m.url}`);let p=a[d];if(!p)return await r();let[g,y]=p,v,b=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await Vb(e,a,r,o,l,u,d+1)},v.value}catch(S){return v={value:await u(S,g,v)},v.value}};try{let S=await y(e,b),T=S!=null?o(S):void 0;return l(T)?T:v?T??v.value:(v={value:await b()},v.value)}catch(S){return await u(S,g,v)}}function Bb(e,a,r,o,l){let u=_b({key:"middleware",route:o.route,manifest:a,mapRouteProperties:e}),d=iC(o.route,gn(r.method)?"action":"loader",a,e,l);return{middleware:u,route:d.lazyRoutePromise,handler:d.lazyHandlerPromise}}function Jh(e,a,r,o,l,u,d,m=null){let p=!1,g=Bb(e,a,r,o,l);return{...o,_lazyPromises:g,shouldLoad:d,unstable_shouldRevalidateArgs:m,unstable_shouldCallHandler(y){return p=!0,m?typeof y=="boolean"?Au(o,{...m,defaultShouldRevalidate:y}):Au(o,m):d},resolve(y){let{lazy:v,loader:b,middleware:S}=o.route,T=p||d||y&&!gn(r.method)&&(v||b),M=S&&S.length>0&&!b&&!v;return T&&!M?lC({request:r,match:o,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:y,scopedContext:u}):Promise.resolve({type:"data",result:void 0})}}}function Do(e,a,r,o,l,u,d,m=null){return o.map(p=>p.route.id!==l.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:m,unstable_shouldCallHandler:()=>!1,_lazyPromises:Bb(e,a,r,p,u),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Jh(e,a,r,p,u,d,!0,m))}async function sC(e,a,r,o,l,u){r.some(g=>g._lazyPromises?.middleware)&&await Promise.all(r.map(g=>g._lazyPromises?.middleware));let d={request:a,params:r[0].params,context:l,matches:r},p=await e({...d,fetcherKey:o,runClientMiddleware:g=>{let y=d;return Ub(y,()=>g({...y,fetcherKey:o,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(g=>[g._lazyPromises?.handler,g._lazyPromises?.route]))}catch{}return p}async function lC({request:e,match:a,lazyHandlerPromise:r,lazyRoutePromise:o,handlerOverride:l,scopedContext:u}){let d,m,p=gn(e.method),g=p?"action":"loader",y=v=>{let b,S=new Promise((j,C)=>b=C);m=()=>b(),e.signal.addEventListener("abort",m);let T=j=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${a.route.id}]`)):v({request:e,params:a.params,context:u},...j!==void 0?[j]:[]),M=(async()=>{try{return{type:"data",result:await(l?l(C=>T(C)):T())}}catch(j){return{type:"error",result:j}}})();return Promise.race([M,S])};try{let v=p?a.route.action:a.route.loader;if(r||o)if(v){let b,[S]=await Promise.all([y(v).catch(T=>{b=T}),r,o]);if(b!==void 0)throw b;d=S}else{await r;let b=p?a.route.action:a.route.loader;if(b)[d]=await Promise.all([y(b),o]);else if(g==="action"){let S=new URL(e.url),T=S.pathname+S.search;throw Qn(405,{method:e.method,pathname:T,routeId:a.route.id})}else return{type:"data",result:void 0}}else if(v)d=await y(v);else{let b=new URL(e.url),S=b.pathname+b.search;throw Qn(404,{pathname:S})}}catch(v){return{type:"error",result:v}}finally{m&&e.signal.removeEventListener("abort",m)}return d}async function cC(e){let a=e.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?e.body==null?null:e.json():e.text()}async function uC(e){let{result:a,type:r}=e;if($b(a)){let o;try{o=await cC(a)}catch(l){return{type:"error",error:l}}return r==="error"?{type:"error",error:new ju(a.status,a.statusText,o),statusCode:a.status,headers:a.headers}:{type:"data",data:o,statusCode:a.status,headers:a.headers}}return r==="error"?Jv(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:a.init?.status,headers:a.init?.headers?new Headers(a.init.headers):void 0}:{type:"error",error:new ju(a.init?.status||500,void 0,a.data),statusCode:cl(a)?a.status:void 0,headers:a.init?.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:cl(a)?a.status:void 0}:Jv(a)?{type:"data",data:a.data,statusCode:a.init?.status,headers:a.init?.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function dC(e,a,r,o,l){let u=e.headers.get("Location");if(Pe(u,"Redirects returned/thrown from loaders/actions must have a Location header"),!Pm(u)){let d=o.slice(0,o.findIndex(m=>m.route.id===r)+1);u=Zh(new URL(a.url),d,l,u),e.headers.set("Location",u)}return e}function Iv(e,a,r){if(Pm(e)){let o=e,l=o.startsWith("//")?new URL(a.protocol+o):new URL(o),u=ea(l.pathname,r)!=null;if(l.origin===a.origin&&u)return l.pathname+l.search+l.hash}return e}function Eo(e,a,r,o){let l=e.createURL(Hb(a)).toString(),u={signal:r};if(o&&gn(o.formMethod)){let{formMethod:d,formEncType:m}=o;u.method=d.toUpperCase(),m==="application/json"?(u.headers=new Headers({"Content-Type":m}),u.body=JSON.stringify(o.json)):m==="text/plain"?u.body=o.text:m==="application/x-www-form-urlencoded"&&o.formData?u.body=em(o.formData):u.body=o.formData}return new Request(l,u)}function em(e){let a=new URLSearchParams;for(let[r,o]of e.entries())a.append(r,typeof o=="string"?o:o.name);return a}function Kv(e){let a=new FormData;for(let[r,o]of e.entries())a.append(r,o);return a}function fC(e,a,r,o=!1,l=!1){let u={},d=null,m,p=!1,g={},y=r&&Dn(r[1])?r[1].error:void 0;return e.forEach(v=>{if(!(v.route.id in a))return;let b=v.route.id,S=a[b];if(Pe(!Tr(S),"Cannot handle redirect results in processLoaderData"),Dn(S)){let T=S.error;if(y!==void 0&&(T=y,y=void 0),d=d||{},l)d[b]=T;else{let M=$i(e,b);d[M.route.id]==null&&(d[M.route.id]=T)}o||(u[b]=Lb),p||(p=!0,m=cl(S.error)?S.error.status:500),S.headers&&(g[b]=S.headers)}else u[b]=S.data,S.statusCode&&S.statusCode!==200&&!p&&(m=S.statusCode),S.headers&&(g[b]=S.headers)}),y!==void 0&&r&&(d={[r[0]]:y},r[2]&&(u[r[2]]=void 0)),{loaderData:u,errors:d,statusCode:m||200,loaderHeaders:g}}function Qv(e,a,r,o,l,u){let{loaderData:d,errors:m}=fC(a,r,o);return l.filter(p=>!p.matches||p.matches.some(g=>g.shouldLoad)).forEach(p=>{let{key:g,match:y,controller:v}=p;if(v&&v.signal.aborted)return;let b=u[g];if(Pe(b,"Did not find corresponding fetcher result"),Dn(b)){let S=$i(e.matches,y?.route.id);m&&m[S.route.id]||(m={...m,[S.route.id]:b.error}),e.fetchers.delete(g)}else if(Tr(b))Pe(!1,"Unhandled fetcher revalidation redirect");else{let S=Qa(b.data);e.fetchers.set(g,S)}}),{loaderData:d,errors:m}}function Zv(e,a,r,o){let l=Object.entries(a).filter(([,u])=>u!==Lb).reduce((u,[d,m])=>(u[d]=m,u),{});for(let u of r){let d=u.route.id;if(!a.hasOwnProperty(d)&&e.hasOwnProperty(d)&&u.route.loader&&(l[d]=e[d]),o&&o.hasOwnProperty(d))break}return l}function Wv(e){return e?Dn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function $i(e,a){return(a?e.slice(0,e.findIndex(o=>o.route.id===a)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function qc(e){let a=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function Qn(e,{pathname:a,routeId:r,method:o,type:l,message:u}={}){let d="Unknown Server Error",m="Unknown @remix-run/router error";return e===400?(d="Bad Request",o&&a&&r?m=`You made a ${o} request to "${a}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:l==="invalid-body"&&(m="Unable to encode submission body")):e===403?(d="Forbidden",m=`Route "${r}" does not match URL "${a}"`):e===404?(d="Not Found",m=`No route matches URL "${a}"`):e===405&&(d="Method Not Allowed",o&&a&&r?m=`You made a ${o.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:o&&(m=`Invalid request method "${o.toUpperCase()}"`)),new ju(e||500,d,new Error(m),!0)}function Ic(e){let a=Object.entries(e);for(let r=a.length-1;r>=0;r--){let[o,l]=a[r];if(Tr(l))return{key:o,result:l}}}function Hb(e){let a=typeof e=="string"?Xi(e):e;return Yi({...a,hash:""})}function hC(e,a){return e.pathname!==a.pathname||e.search!==a.search?!1:e.hash===""?a.hash!=="":e.hash===a.hash?!0:a.hash!==""}function mC(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([a,r])=>typeof a=="string"&&pC(r))}function pC(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function gC(e){return $b(e.result)&&KT.has(e.result.status)}function Dn(e){return e.type==="error"}function Tr(e){return(e&&e.type)==="redirect"}function Jv(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function $b(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yC(e){return IT.has(e.toUpperCase())}function gn(e){return XT.has(e.toUpperCase())}function Ym(e){return new URLSearchParams(e).getAll("index").some(a=>a==="")}function du(e,a){let r=typeof a=="string"?Xi(a).search:a.search;if(e[e.length-1].route.index&&Ym(r||""))return e[e.length-1];let o=zb(e);return o[o.length-1]}function e1(e){let{formMethod:a,formAction:r,formEncType:o,text:l,formData:u,json:d}=e;if(!(!a||!r||!o)){if(l!=null)return{formMethod:a,formAction:r,formEncType:o,formData:void 0,json:void 0,text:l};if(u!=null)return{formMethod:a,formAction:r,formEncType:o,formData:u,json:void 0,text:void 0};if(d!==void 0)return{formMethod:a,formAction:r,formEncType:o,formData:void 0,json:d,text:void 0}}}function Sh(e,a){return a?{state:"loading",location:e,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function vC(e,a){return{state:"submitting",location:e,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}}function Us(e,a){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function xC(e,a){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:a?a.data:void 0}}function Qa(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function bC(e,a){try{let r=e.sessionStorage.getItem(kb);if(r){let o=JSON.parse(r);for(let[l,u]of Object.entries(o||{}))u&&Array.isArray(u)&&a.set(l,new Set(u||[]))}}catch{}}function wC(e,a){if(a.size>0){let r={};for(let[o,l]of a)r[o]=[...l];try{e.sessionStorage.setItem(kb,JSON.stringify(r))}catch(o){Vt(!1,`Failed to save applied view transitions in sessionStorage (${o}).`)}}}function SC(){let e,a,r=new Promise((o,l)=>{e=async u=>{o(u);try{await r}catch{}},a=async u=>{l(u);try{await r}catch{}}});return{promise:r,resolve:e,reject:a}}var kr=w.createContext(null);kr.displayName="DataRouter";var Tl=w.createContext(null);Tl.displayName="DataRouterState";w.createContext(!1);var Gm=w.createContext({isTransitioning:!1});Gm.displayName="ViewTransition";var Pb=w.createContext(new Map);Pb.displayName="Fetchers";var EC=w.createContext(null);EC.displayName="Await";var Ra=w.createContext(null);Ra.displayName="Navigation";var Fu=w.createContext(null);Fu.displayName="Location";var ha=w.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Xm=w.createContext(null);Xm.displayName="RouteError";function TC(e,{relative:a}={}){Pe(Cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=w.useContext(Ra),{hash:l,pathname:u,search:d}=jl(e,{relative:a}),m=u;return r!=="/"&&(m=u==="/"?r:ja([r,u])),o.createHref({pathname:m,search:d,hash:l})}function Cl(){return w.useContext(Fu)!=null}function na(){return Pe(Cl(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Fu).location}var Fb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yb(e){w.useContext(Ra).static||w.useLayoutEffect(e)}function xn(){let{isDataRoute:e}=w.useContext(ha);return e?HC():CC()}function CC(){Pe(Cl(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(kr),{basename:a,navigator:r}=w.useContext(Ra),{matches:o}=w.useContext(ha),{pathname:l}=na(),u=JSON.stringify(Hm(o)),d=w.useRef(!1);return Yb(()=>{d.current=!0}),w.useCallback((p,g={})=>{if(Vt(d.current,Fb),!d.current)return;if(typeof p=="number"){r.go(p);return}let y=$m(p,JSON.parse(u),l,g.relative==="path");e==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:ja([a,y.pathname])),(g.replace?r.replace:r.push)(y,g.state,g)},[a,r,u,l,e])}var Gb=w.createContext(null);function jC(){return w.useContext(Gb)}function AC(e){let a=w.useContext(ha).outlet;return w.useMemo(()=>a&&w.createElement(Gb.Provider,{value:e},a),[a,e])}function RC(){let{matches:e}=w.useContext(ha),a=e[e.length-1];return a?a.params:{}}function jl(e,{relative:a}={}){let{matches:r}=w.useContext(ha),{pathname:o}=na(),l=JSON.stringify(Hm(r));return w.useMemo(()=>$m(e,JSON.parse(l),o,a==="path"),[e,l,o,a])}function MC(e,a,r,o,l){Pe(Cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=w.useContext(Ra),{matches:d}=w.useContext(ha),m=d[d.length-1],p=m?m.params:{},g=m?m.pathname:"/",y=m?m.pathnameBase:"/",v=m&&m.route;{let z=v&&v.path||"";Xb(g,!v||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let b=na(),S;S=b;let T=S.pathname||"/",M=T;if(y!=="/"){let z=y.replace(/^\//,"").split("/");M="/"+T.replace(/^\//,"").split("/").slice(z.length).join("/")}let j=Hi(e,{pathname:M});return Vt(v||j!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Vt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),LC(j&&j.map(z=>Object.assign({},z,{params:Object.assign({},p,z.params),pathname:ja([y,u.encodeLocation?u.encodeLocation(z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?y:ja([y,u.encodeLocation?u.encodeLocation(z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),d,r,o,l)}function DC(){let e=BC(),a=cl(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:u},"ErrorBoundary")," or"," ",w.createElement("code",{style:u},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},a),r?w.createElement("pre",{style:l},r):null,d)}var zC=w.createElement(DC,null),OC=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.unstable_onError?this.props.unstable_onError(e,a):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?w.createElement(ha.Provider,{value:this.props.routeContext},w.createElement(Xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function kC({routeContext:e,match:a,children:r}){let o=w.useContext(kr);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),w.createElement(ha.Provider,{value:e},r)}function LC(e,a=[],r=null,o=null,l=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let u=e,d=r?.errors;if(d!=null){let g=u.findIndex(y=>y.route.id&&d?.[y.route.id]!==void 0);Pe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let m=!1,p=-1;if(r)for(let g=0;g<u.length;g++){let y=u[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=g),y.route.id){let{loaderData:v,errors:b}=r,S=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!b||b[y.route.id]===void 0);if(y.route.lazy||S){m=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,y,v)=>{let b,S=!1,T=null,M=null;r&&(b=d&&y.route.id?d[y.route.id]:void 0,T=y.route.errorElement||zC,m&&(p<0&&v===0?(Xb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,M=null):p===v&&(S=!0,M=y.route.hydrateFallbackElement||null)));let j=a.concat(u.slice(0,v+1)),C=()=>{let z;return b?z=T:S?z=M:y.route.Component?z=w.createElement(y.route.Component,null):y.route.element?z=y.route.element:z=g,w.createElement(kC,{match:y,routeContext:{outlet:g,matches:j,isDataRoute:r!=null},children:z})};return r&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?w.createElement(OC,{location:r.location,revalidation:r.revalidation,component:T,error:b,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0},unstable_onError:o}):C()},null)}function qm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NC(e){let a=w.useContext(kr);return Pe(a,qm(e)),a}function _C(e){let a=w.useContext(Tl);return Pe(a,qm(e)),a}function UC(e){let a=w.useContext(ha);return Pe(a,qm(e)),a}function Im(e){let a=UC(e),r=a.matches[a.matches.length-1];return Pe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function VC(){return Im("useRouteId")}function BC(){let e=w.useContext(Xm),a=_C("useRouteError"),r=Im("useRouteError");return e!==void 0?e:a.errors?.[r]}function HC(){let{router:e}=NC("useNavigate"),a=Im("useNavigate"),r=w.useRef(!1);return Yb(()=>{r.current=!0}),w.useCallback(async(l,u={})=>{Vt(r.current,Fb),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:a,...u}))},[e,a])}var t1={};function Xb(e,a,r){!a&&!t1[e]&&(t1[e]=!0,Vt(!1,r))}var n1={};function a1(e,a){!e&&!n1[a]&&(n1[a]=!0,console.warn(a))}function $C(e){let a={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Vt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:w.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Vt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Vt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),a}var PC=["HydrateFallback","hydrateFallbackElement"],FC=class{constructor(){this.status="pending",this.promise=new Promise((e,a)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",a(r))}})}};function YC({router:e,flushSync:a,unstable_onError:r}){let[o,l]=w.useState(e.state),[u,d]=w.useState(),[m,p]=w.useState({isTransitioning:!1}),[g,y]=w.useState(),[v,b]=w.useState(),[S,T]=w.useState(),M=w.useRef(new Map),j=w.useCallback(H=>{l(A=>(H.errors&&r&&Object.entries(H.errors).forEach(([$,P])=>{A.errors?.[$]!==P&&r(P)}),H))},[r]),C=w.useCallback((H,{deletedFetchers:A,flushSync:$,viewTransitionOpts:P})=>{H.fetchers.forEach((se,pe)=>{se.data!==void 0&&M.current.set(pe,se.data)}),A.forEach(se=>M.current.delete(se)),a1($===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let X=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(a1(P==null||X,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!P||!X){a&&$?a(()=>j(H)):w.startTransition(()=>j(H));return}if(a&&$){a(()=>{v&&(g&&g.resolve(),v.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let se=e.window.document.startViewTransition(()=>{a(()=>j(H))});se.finished.finally(()=>{a(()=>{y(void 0),b(void 0),d(void 0),p({isTransitioning:!1})})}),a(()=>b(se));return}v?(g&&g.resolve(),v.skipTransition(),T({state:H,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(d(H),p({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[e.window,a,v,g,j]);w.useLayoutEffect(()=>e.subscribe(C),[e,C]),w.useEffect(()=>{m.isTransitioning&&!m.flushSync&&y(new FC)},[m]),w.useEffect(()=>{if(g&&u&&e.window){let H=u,A=g.promise,$=e.window.document.startViewTransition(async()=>{w.startTransition(()=>j(H)),await A});$.finished.finally(()=>{y(void 0),b(void 0),d(void 0),p({isTransitioning:!1})}),b($)}},[u,g,e.window,j]),w.useEffect(()=>{g&&u&&o.location.key===u.location.key&&g.resolve()},[g,v,o.location,u]),w.useEffect(()=>{!m.isTransitioning&&S&&(d(S.state),p({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),T(void 0))},[m.isTransitioning,S]);let z=w.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:H=>e.navigate(H),push:(H,A,$)=>e.navigate(H,{state:A,preventScrollReset:$?.preventScrollReset}),replace:(H,A,$)=>e.navigate(H,{replace:!0,state:A,preventScrollReset:$?.preventScrollReset})}),[e]),N=e.basename||"/",q=w.useMemo(()=>({router:e,navigator:z,static:!1,basename:N,unstable_onError:r}),[e,z,N,r]);return w.createElement(w.Fragment,null,w.createElement(kr.Provider,{value:q},w.createElement(Tl.Provider,{value:o},w.createElement(Pb.Provider,{value:M.current},w.createElement(Gm.Provider,{value:m},w.createElement(IC,{basename:N,location:o.location,navigationType:o.historyAction,navigator:z},w.createElement(GC,{routes:e.routes,future:e.future,state:o,unstable_onError:r})))))),null)}var GC=w.memo(XC);function XC({routes:e,future:a,state:r,unstable_onError:o}){return MC(e,void 0,r,o,a)}function qC(e){return AC(e.context)}function qn(e){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IC({basename:e="/",children:a=null,location:r,navigationType:o="POP",navigator:l,static:u=!1}){Pe(!Cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof r=="string"&&(r=Xi(r));let{pathname:p="/",search:g="",hash:y="",state:v=null,key:b="default"}=r,S=w.useMemo(()=>{let T=ea(p,d);return T==null?null:{location:{pathname:T,search:g,hash:y,state:v,key:b},navigationType:o}},[d,p,g,y,v,b,o]);return Vt(S!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:w.createElement(Ra.Provider,{value:m},w.createElement(Fu.Provider,{children:a,value:S}))}function tm(e,a=[]){let r=[];return w.Children.forEach(e,(o,l)=>{if(!w.isValidElement(o))return;let u=[...a,l];if(o.type===w.Fragment){r.push.apply(r,tm(o.props.children,u));return}Pe(o.type===qn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=tm(o.props.children,u)),r.push(d)}),r}var KC=tm,fu="get",hu="application/x-www-form-urlencoded";function Yu(e){return e!=null&&typeof e.tagName=="string"}function QC(e){return Yu(e)&&e.tagName.toLowerCase()==="button"}function ZC(e){return Yu(e)&&e.tagName.toLowerCase()==="form"}function WC(e){return Yu(e)&&e.tagName.toLowerCase()==="input"}function JC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ej(e,a){return e.button===0&&(!a||a==="_self")&&!JC(e)}var Kc=null;function tj(){if(Kc===null)try{new FormData(document.createElement("form"),0),Kc=!1}catch{Kc=!0}return Kc}var nj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eh(e){return e!=null&&!nj.has(e)?(Vt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):e}function aj(e,a){let r,o,l,u,d;if(ZC(e)){let m=e.getAttribute("action");o=m?ea(m,a):null,r=e.getAttribute("method")||fu,l=Eh(e.getAttribute("enctype"))||hu,u=new FormData(e)}else if(QC(e)||WC(e)&&(e.type==="submit"||e.type==="image")){let m=e.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||m.getAttribute("action");if(o=p?ea(p,a):null,r=e.getAttribute("formmethod")||m.getAttribute("method")||fu,l=Eh(e.getAttribute("formenctype"))||Eh(m.getAttribute("enctype"))||hu,u=new FormData(m,e),!tj()){let{name:g,type:y,value:v}=e;if(y==="image"){let b=g?`${g}.`:"";u.append(`${b}x`,"0"),u.append(`${b}y`,"0")}else g&&u.append(g,v)}}else{if(Yu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=fu,o=null,l=hu,d=e}return u&&l==="text/plain"&&(d=u,u=void 0),{action:o,method:r.toLowerCase(),encType:l,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Km(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function ij(e,a,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname=`_root.${r}`:a&&ea(o.pathname,a)==="/"?o.pathname=`${a.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function rj(e,a){if(e.id in a)return a[e.id];try{let r=await import(e.module);return a[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function oj(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function sj(e,a,r){let o=await Promise.all(e.map(async l=>{let u=a.routes[l.route.id];if(u){let d=await rj(u,r);return d.links?d.links():[]}return[]}));return dj(o.flat(1).filter(oj).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function i1(e,a,r,o,l,u){let d=(p,g)=>r[g]?p.route.id!==r[g].route.id:!0,m=(p,g)=>r[g].pathname!==p.pathname||r[g].route.path?.endsWith("*")&&r[g].params["*"]!==p.params["*"];return u==="assets"?a.filter((p,g)=>d(p,g)||m(p,g)):u==="data"?a.filter((p,g)=>{let y=o.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function lj(e,a,{includeHydrateFallback:r}={}){return cj(e.map(o=>{let l=a.routes[o.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function cj(e){return[...new Set(e)]}function uj(e){let a={},r=Object.keys(e).sort();for(let o of r)a[o]=e[o];return a}function dj(e,a){let r=new Set;return new Set(a),e.reduce((o,l)=>{let u=JSON.stringify(uj(l));return r.has(u)||(r.add(u),o.push({key:u,link:l})),o},[])}function qb(){let e=w.useContext(kr);return Km(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function fj(){let e=w.useContext(Tl);return Km(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Qm=w.createContext(void 0);Qm.displayName="FrameworkContext";function Ib(){let e=w.useContext(Qm);return Km(e,"You must render this element inside a <HydratedRouter> element"),e}function hj(e,a){let r=w.useContext(Qm),[o,l]=w.useState(!1),[u,d]=w.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=a,b=w.useRef(null);w.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let M=C=>{C.forEach(z=>{d(z.isIntersecting)})},j=new IntersectionObserver(M,{threshold:.5});return b.current&&j.observe(b.current),()=>{j.disconnect()}}},[e]),w.useEffect(()=>{if(o){let M=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(M)}}},[o]);let S=()=>{l(!0)},T=()=>{l(!1),d(!1)};return r?e!=="intent"?[u,b,{}]:[u,b,{onFocus:Vs(m,S),onBlur:Vs(p,T),onMouseEnter:Vs(g,S),onMouseLeave:Vs(y,T),onTouchStart:Vs(v,S)}]:[!1,b,{}]}function Vs(e,a){return r=>{e&&e(r),r.defaultPrevented||a(r)}}function mj({page:e,...a}){let{router:r}=qb(),o=w.useMemo(()=>Hi(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?w.createElement(gj,{page:e,matches:o,...a}):null}function pj(e){let{manifest:a,routeModules:r}=Ib(),[o,l]=w.useState([]);return w.useEffect(()=>{let u=!1;return sj(e,a,r).then(d=>{u||l(d)}),()=>{u=!0}},[e,a,r]),o}function gj({page:e,matches:a,...r}){let o=na(),{manifest:l,routeModules:u}=Ib(),{basename:d}=qb(),{loaderData:m,matches:p}=fj(),g=w.useMemo(()=>i1(e,a,p,l,o,"data"),[e,a,p,l,o]),y=w.useMemo(()=>i1(e,a,p,l,o,"assets"),[e,a,p,l,o]),v=w.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let T=new Set,M=!1;if(a.forEach(C=>{let z=l.routes[C.route.id];!z||!z.hasLoader||(!g.some(N=>N.route.id===C.route.id)&&C.route.id in m&&u[C.route.id]?.shouldRevalidate||z.hasClientLoader?M=!0:T.add(C.route.id))}),T.size===0)return[];let j=ij(e,d,"data");return M&&T.size>0&&j.searchParams.set("_routes",a.filter(C=>T.has(C.route.id)).map(C=>C.route.id).join(",")),[j.pathname+j.search]},[d,m,o,l,g,a,e,u]),b=w.useMemo(()=>lj(y,l),[y,l]),S=pj(y);return w.createElement(w.Fragment,null,v.map(T=>w.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...r})),b.map(T=>w.createElement("link",{key:T,rel:"modulepreload",href:T,...r})),S.map(({key:T,link:M})=>w.createElement("link",{key:T,nonce:r.nonce,...M})))}function yj(...e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}var Kb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kb&&(window.__reactRouterVersion="7.9.3")}catch{}function vj(e,a){return eC({basename:a?.basename,getContext:a?.getContext,future:a?.future,history:xT({window:a?.window}),hydrationData:a?.hydrationData||xj(),routes:e,mapRouteProperties:$C,hydrationRouteProperties:PC,dataStrategy:a?.dataStrategy,patchRoutesOnNavigation:a?.patchRoutesOnNavigation,window:a?.window}).initialize()}function xj(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:bj(e.errors)}),e}function bj(e){if(!e)return null;let a=Object.entries(e),r={};for(let[o,l]of a)if(l&&l.__type==="RouteErrorResponse")r[o]=new ju(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let u=window[l.__subType];if(typeof u=="function")try{let d=new u(l.message);d.stack="",r[o]=d}catch{}}if(r[o]==null){let u=new Error(l.message);u.stack="",r[o]=u}}else r[o]=l;return r}var Qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ja=w.forwardRef(function({onClick:a,discover:r="render",prefetch:o="none",relative:l,reloadDocument:u,replace:d,state:m,target:p,to:g,preventScrollReset:y,viewTransition:v,...b},S){let{basename:T}=w.useContext(Ra),M=typeof g=="string"&&Qb.test(g),j,C=!1;if(typeof g=="string"&&M&&(j=g,Kb))try{let X=new URL(window.location.href),se=g.startsWith("//")?new URL(X.protocol+g):new URL(g),pe=ea(se.pathname,T);se.origin===X.origin&&pe!=null?g=pe+se.search+se.hash:C=!0}catch{Vt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=TC(g,{relative:l}),[N,q,H]=hj(o,b),A=Tj(g,{replace:d,state:m,target:p,preventScrollReset:y,relative:l,viewTransition:v});function $(X){a&&a(X),X.defaultPrevented||A(X)}let P=w.createElement("a",{...b,...H,href:j||z,onClick:C||u?a:$,ref:yj(S,q),target:p,"data-discover":!M&&r==="render"?"true":void 0});return N&&!M?w.createElement(w.Fragment,null,P,w.createElement(mj,{page:z})):P});Ja.displayName="Link";var wj=w.forwardRef(function({"aria-current":a="page",caseSensitive:r=!1,className:o="",end:l=!1,style:u,to:d,viewTransition:m,children:p,...g},y){let v=jl(d,{relative:g.relative}),b=na(),S=w.useContext(Tl),{navigator:T,basename:M}=w.useContext(Ra),j=S!=null&&Mj(v)&&m===!0,C=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,z=b.pathname,N=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(z=z.toLowerCase(),N=N?N.toLowerCase():null,C=C.toLowerCase()),N&&M&&(N=ea(N,M)||N);const q=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let H=z===C||!l&&z.startsWith(C)&&z.charAt(q)==="/",A=N!=null&&(N===C||!l&&N.startsWith(C)&&N.charAt(C.length)==="/"),$={isActive:H,isPending:A,isTransitioning:j},P=H?a:void 0,X;typeof o=="function"?X=o($):X=[o,H?"active":null,A?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let se=typeof u=="function"?u($):u;return w.createElement(Ja,{...g,"aria-current":P,className:X,ref:y,style:se,to:d,viewTransition:m},typeof p=="function"?p($):p)});wj.displayName="NavLink";var Sj=w.forwardRef(({discover:e="render",fetcherKey:a,navigate:r,reloadDocument:o,replace:l,state:u,method:d=fu,action:m,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:v,...b},S)=>{let T=Aj(),M=Rj(m,{relative:g}),j=d.toLowerCase()==="get"?"get":"post",C=typeof m=="string"&&Qb.test(m),z=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let q=N.nativeEvent.submitter,H=q?.getAttribute("formmethod")||d;T(q||N.currentTarget,{fetcherKey:a,method:H,navigate:r,replace:l,state:u,relative:g,preventScrollReset:y,viewTransition:v})};return w.createElement("form",{ref:S,method:j,action:M,onSubmit:o?p:z,...b,"data-discover":!C&&e==="render"?"true":void 0})});Sj.displayName="Form";function Ej(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zb(e){let a=w.useContext(kr);return Pe(a,Ej(e)),a}function Tj(e,{target:a,replace:r,state:o,preventScrollReset:l,relative:u,viewTransition:d}={}){let m=xn(),p=na(),g=jl(e,{relative:u});return w.useCallback(y=>{if(ej(y,a)){y.preventDefault();let v=r!==void 0?r:Yi(p)===Yi(g);m(e,{replace:v,state:o,preventScrollReset:l,relative:u,viewTransition:d})}},[p,m,g,r,o,a,e,l,u,d])}var Cj=0,jj=()=>`__${String(++Cj)}__`;function Aj(){let{router:e}=Zb("useSubmit"),{basename:a}=w.useContext(Ra),r=VC();return w.useCallback(async(o,l={})=>{let{action:u,method:d,encType:m,formData:p,body:g}=aj(o,a);if(l.navigate===!1){let y=l.fetcherKey||jj();await e.fetch(y,r,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:g,formMethod:l.method||d,formEncType:l.encType||m,flushSync:l.flushSync})}else await e.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:g,formMethod:l.method||d,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,a,r])}function Rj(e,{relative:a}={}){let{basename:r}=w.useContext(Ra),o=w.useContext(ha);Pe(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),u={...jl(e||".",{relative:a})},d=na();if(e==null){u.search=d.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(y=>y==="")){m.delete("index"),p.filter(v=>v).forEach(v=>m.append("index",v));let y=m.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:ja([r,u.pathname])),Yi(u)}function Mj(e,{relative:a}={}){let r=w.useContext(Gm);Pe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Zb("useViewTransitionState"),l=jl(e,{relative:a});if(!r.isTransitioning)return!1;let u=ea(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=ea(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Cu(l.pathname,d)!=null||Cu(l.pathname,u)!=null}var In=jb();function Dj(e){return w.createElement(YC,{flushSync:In.flushSync,...e})}var yn=function(){return yn=Object.assign||function(a){for(var r,o=1,l=arguments.length;o<l;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(a[u]=r[u])}return a},yn.apply(this,arguments)};function ul(e,a,r){if(r||arguments.length===2)for(var o=0,l=a.length,u;o<l;o++)(u||!(o in a))&&(u||(u=Array.prototype.slice.call(a,0,o)),u[o]=a[o]);return e.concat(u||Array.prototype.slice.call(a))}var mt="-ms-",Ws="-moz-",Je="-webkit-",Wb="comm",Gu="rule",Zm="decl",zj="@import",Jb="@keyframes",Oj="@layer",ew=Math.abs,Wm=String.fromCharCode,nm=Object.assign;function kj(e,a){return Yt(e,0)^45?(((a<<2^Yt(e,0))<<2^Yt(e,1))<<2^Yt(e,2))<<2^Yt(e,3):0}function tw(e){return e.trim()}function Wa(e,a){return(e=a.exec(e))?e[0]:e}function $e(e,a,r){return e.replace(a,r)}function mu(e,a,r){return e.indexOf(a,r)}function Yt(e,a){return e.charCodeAt(a)|0}function Oo(e,a,r){return e.slice(a,r)}function Ta(e){return e.length}function nw(e){return e.length}function Ks(e,a){return a.push(e),e}function Lj(e,a){return e.map(a).join("")}function r1(e,a){return e.filter(function(r){return!Wa(r,a)})}var Xu=1,ko=1,aw=0,ta=0,_t=0,Bo="";function qu(e,a,r,o,l,u,d,m){return{value:e,root:a,parent:r,type:o,props:l,children:u,line:Xu,column:ko,length:d,return:"",siblings:m}}function Vi(e,a){return nm(qu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function vo(e){for(;e.root;)e=Vi(e.root,{children:[e]});Ks(e,e.siblings)}function Nj(){return _t}function _j(){return _t=ta>0?Yt(Bo,--ta):0,ko--,_t===10&&(ko=1,Xu--),_t}function da(){return _t=ta<aw?Yt(Bo,ta++):0,ko++,_t===10&&(ko=1,Xu++),_t}function Rr(){return Yt(Bo,ta)}function pu(){return ta}function Iu(e,a){return Oo(Bo,e,a)}function am(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Uj(e){return Xu=ko=1,aw=Ta(Bo=e),ta=0,[]}function Vj(e){return Bo="",e}function Th(e){return tw(Iu(ta-1,im(e===91?e+2:e===40?e+1:e)))}function Bj(e){for(;(_t=Rr())&&_t<33;)da();return am(e)>2||am(_t)>3?"":" "}function Hj(e,a){for(;--a&&da()&&!(_t<48||_t>102||_t>57&&_t<65||_t>70&&_t<97););return Iu(e,pu()+(a<6&&Rr()==32&&da()==32))}function im(e){for(;da();)switch(_t){case e:return ta;case 34:case 39:e!==34&&e!==39&&im(_t);break;case 40:e===41&&im(e);break;case 92:da();break}return ta}function $j(e,a){for(;da()&&e+_t!==57;)if(e+_t===84&&Rr()===47)break;return"/*"+Iu(a,ta-1)+"*"+Wm(e===47?e:da())}function Pj(e){for(;!am(Rr());)da();return Iu(e,ta)}function Fj(e){return Vj(gu("",null,null,null,[""],e=Uj(e),0,[0],e))}function gu(e,a,r,o,l,u,d,m,p){for(var g=0,y=0,v=d,b=0,S=0,T=0,M=1,j=1,C=1,z=0,N="",q=l,H=u,A=o,$=N;j;)switch(T=z,z=da()){case 40:if(T!=108&&Yt($,v-1)==58){mu($+=$e(Th(z),"&","&\f"),"&\f",ew(g?m[g-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:$+=Th(z);break;case 9:case 10:case 13:case 32:$+=Bj(T);break;case 92:$+=Hj(pu()-1,7);continue;case 47:switch(Rr()){case 42:case 47:Ks(Yj($j(da(),pu()),a,r,p),p);break;default:$+="/"}break;case 123*M:m[g++]=Ta($)*C;case 125*M:case 59:case 0:switch(z){case 0:case 125:j=0;case 59+y:C==-1&&($=$e($,/\f/g,"")),S>0&&Ta($)-v&&Ks(S>32?s1($+";",o,r,v-1,p):s1($e($," ","")+";",o,r,v-2,p),p);break;case 59:$+=";";default:if(Ks(A=o1($,a,r,g,y,l,m,N,q=[],H=[],v,u),u),z===123)if(y===0)gu($,a,A,A,q,u,v,m,H);else switch(b===99&&Yt($,3)===110?100:b){case 100:case 108:case 109:case 115:gu(e,A,A,o&&Ks(o1(e,A,A,0,0,l,m,N,l,q=[],v,H),H),l,H,v,m,o?q:H);break;default:gu($,A,A,A,[""],H,0,m,H)}}g=y=S=0,M=C=1,N=$="",v=d;break;case 58:v=1+Ta($),S=T;default:if(M<1){if(z==123)--M;else if(z==125&&M++==0&&_j()==125)continue}switch($+=Wm(z),z*M){case 38:C=y>0?1:($+="\f",-1);break;case 44:m[g++]=(Ta($)-1)*C,C=1;break;case 64:Rr()===45&&($+=Th(da())),b=Rr(),y=v=Ta(N=$+=Pj(pu())),z++;break;case 45:T===45&&Ta($)==2&&(M=0)}}return u}function o1(e,a,r,o,l,u,d,m,p,g,y,v){for(var b=l-1,S=l===0?u:[""],T=nw(S),M=0,j=0,C=0;M<o;++M)for(var z=0,N=Oo(e,b+1,b=ew(j=d[M])),q=e;z<T;++z)(q=tw(j>0?S[z]+" "+N:$e(N,/&\f/g,S[z])))&&(p[C++]=q);return qu(e,a,r,l===0?Gu:m,p,g,y,v)}function Yj(e,a,r,o){return qu(e,a,r,Wb,Wm(Nj()),Oo(e,2,-2),0,o)}function s1(e,a,r,o,l){return qu(e,a,r,Zm,Oo(e,0,o),Oo(e,o+1,-1),o,l)}function iw(e,a,r){switch(kj(e,a)){case 5103:return Je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+e+e;case 4789:return Ws+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+e+Ws+e+mt+e+e;case 5936:switch(Yt(e,a+11)){case 114:return Je+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Je+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Je+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Je+e+mt+e+e;case 6165:return Je+e+mt+"flex-"+e+e;case 5187:return Je+e+$e(e,/(\w+).+(:[^]+)/,Je+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return Je+e+mt+"flex-item-"+$e(e,/flex-|-self/g,"")+(Wa(e,/flex-|baseline/)?"":mt+"grid-row-"+$e(e,/flex-|-self/g,""))+e;case 4675:return Je+e+mt+"flex-line-pack"+$e(e,/align-content|flex-|-self/g,"")+e;case 5548:return Je+e+mt+$e(e,"shrink","negative")+e;case 5292:return Je+e+mt+$e(e,"basis","preferred-size")+e;case 6060:return Je+"box-"+$e(e,"-grow","")+Je+e+mt+$e(e,"grow","positive")+e;case 4554:return Je+$e(e,/([^-])(transform)/g,"$1"+Je+"$2")+e;case 6187:return $e($e($e(e,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),e,"")+e;case 5495:case 3959:return $e(e,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return $e($e(e,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+e+e;case 4200:if(!Wa(e,/flex-|baseline/))return mt+"grid-column-align"+Oo(e,a)+e;break;case 2592:case 3360:return mt+$e(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,l){return a=l,Wa(o.props,/grid-\w+-end/)})?~mu(e+(r=r[a].value),"span",0)?e:mt+$e(e,"-start","")+e+mt+"grid-row-span:"+(~mu(r,"span",0)?Wa(r,/\d+/):+Wa(r,/\d+/)-+Wa(e,/\d+/))+";":mt+$e(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Wa(o.props,/grid-\w+-start/)})?e:mt+$e($e(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $e(e,/(.+)-inline(.+)/,Je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ta(e)-1-a>6)switch(Yt(e,a+1)){case 109:if(Yt(e,a+4)!==45)break;case 102:return $e(e,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+Ws+(Yt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~mu(e,"stretch",0)?iw($e(e,"stretch","fill-available"),a,r)+e:e}break;case 5152:case 5920:return $e(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,l,u,d,m,p,g){return mt+l+":"+u+g+(d?mt+l+"-span:"+(m?p:+p-+u)+g:"")+e});case 4949:if(Yt(e,a+6)===121)return $e(e,":",":"+Je)+e;break;case 6444:switch(Yt(e,Yt(e,14)===45?18:11)){case 120:return $e(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(Yt(e,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+mt+"$2box$3")+e;case 100:return $e(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $e(e,"scroll-","scroll-snap-")+e}return e}function Ru(e,a){for(var r="",o=0;o<e.length;o++)r+=a(e[o],o,e,a)||"";return r}function Gj(e,a,r,o){switch(e.type){case Oj:if(e.children.length)break;case zj:case Zm:return e.return=e.return||e.value;case Wb:return"";case Jb:return e.return=e.value+"{"+Ru(e.children,o)+"}";case Gu:if(!Ta(e.value=e.props.join(",")))return""}return Ta(r=Ru(e.children,o))?e.return=e.value+"{"+r+"}":""}function Xj(e){var a=nw(e);return function(r,o,l,u){for(var d="",m=0;m<a;m++)d+=e[m](r,o,l,u)||"";return d}}function qj(e){return function(a){a.root||(a=a.return)&&e(a)}}function Ij(e,a,r,o){if(e.length>-1&&!e.return)switch(e.type){case Zm:e.return=iw(e.value,e.length,r);return;case Jb:return Ru([Vi(e,{value:$e(e.value,"@","@"+Je)})],o);case Gu:if(e.length)return Lj(r=e.props,function(l){switch(Wa(l,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vo(Vi(e,{props:[$e(l,/:(read-\w+)/,":"+Ws+"$1")]})),vo(Vi(e,{props:[l]})),nm(e,{props:r1(r,o)});break;case"::placeholder":vo(Vi(e,{props:[$e(l,/:(plac\w+)/,":"+Je+"input-$1")]})),vo(Vi(e,{props:[$e(l,/:(plac\w+)/,":"+Ws+"$1")]})),vo(Vi(e,{props:[$e(l,/:(plac\w+)/,mt+"input-$1")]})),vo(Vi(e,{props:[l]})),nm(e,{props:r1(r,o)});break}return""})}}var Kj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mn={},Lo=typeof process<"u"&&Mn!==void 0&&(Mn.REACT_APP_SC_ATTR||Mn.SC_ATTR)||"data-styled",rw="active",ow="data-styled-version",Ku="6.1.19",Jm=`/*!sc*/
`,Mu=typeof window<"u"&&typeof document<"u",Qj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==""?Mn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.SC_DISABLE_SPEEDY!==void 0&&Mn.SC_DISABLE_SPEEDY!==""&&Mn.SC_DISABLE_SPEEDY!=="false"&&Mn.SC_DISABLE_SPEEDY),Qu=Object.freeze([]),No=Object.freeze({});function Zj(e,a,r){return r===void 0&&(r=No),e.theme!==r.theme&&e.theme||a||r.theme}var sw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Wj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jj=/(^-|-$)/g;function l1(e){return e.replace(Wj,"-").replace(Jj,"")}var eA=/(a)(d)/gi,Qc=52,c1=function(e){return String.fromCharCode(e+(e>25?39:97))};function rm(e){var a,r="";for(a=Math.abs(e);a>Qc;a=a/Qc|0)r=c1(a%Qc)+r;return(c1(a%Qc)+r).replace(eA,"$1-$2")}var Ch,lw=5381,To=function(e,a){for(var r=a.length;r;)e=33*e^a.charCodeAt(--r);return e},cw=function(e){return To(lw,e)};function uw(e){return rm(cw(e)>>>0)}function tA(e){return e.displayName||e.name||"Component"}function jh(e){return typeof e=="string"&&!0}var dw=typeof Symbol=="function"&&Symbol.for,fw=dw?Symbol.for("react.memo"):60115,nA=dw?Symbol.for("react.forward_ref"):60112,aA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rA=((Ch={})[nA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ch[fw]=hw,Ch);function u1(e){return("type"in(a=e)&&a.type.$$typeof)===fw?hw:"$$typeof"in e?rA[e.$$typeof]:aA;var a}var oA=Object.defineProperty,sA=Object.getOwnPropertyNames,d1=Object.getOwnPropertySymbols,lA=Object.getOwnPropertyDescriptor,cA=Object.getPrototypeOf,f1=Object.prototype;function mw(e,a,r){if(typeof a!="string"){if(f1){var o=cA(a);o&&o!==f1&&mw(e,o,r)}var l=sA(a);d1&&(l=l.concat(d1(a)));for(var u=u1(e),d=u1(a),m=0;m<l.length;++m){var p=l[m];if(!(p in iA||r&&r[p]||d&&p in d||u&&p in u)){var g=lA(a,p);try{oA(e,p,g)}catch{}}}}return e}function _o(e){return typeof e=="function"}function ep(e){return typeof e=="object"&&"styledComponentId"in e}function Cr(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function om(e,a){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=e[o];return r}function dl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sm(e,a,r){if(r===void 0&&(r=!1),!r&&!dl(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)e[o]=sm(e[o],a[o]);else if(dl(a))for(var o in a)e[o]=sm(e[o],a[o]);return e}function tp(e,a){Object.defineProperty(e,"toString",{value:a})}function Al(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var uA=(function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var r=0,o=0;o<a;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var o=this.groupSizes,l=o.length,u=l;a>=u;)if((u<<=1)<0)throw Al(16,"".concat(a));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var d=l;d<u;d++)this.groupSizes[d]=0}for(var m=this.indexOfGroup(a+1),p=(d=0,r.length);d<p;d++)this.tag.insertRule(m,r[d])&&(this.groupSizes[a]++,m++)},e.prototype.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],o=this.indexOfGroup(a),l=o+r;this.groupSizes[a]=0;for(var u=o;u<l;u++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var o=this.groupSizes[a],l=this.indexOfGroup(a),u=l+o,d=l;d<u;d++)r+="".concat(this.tag.getRule(d)).concat(Jm);return r},e})(),yu=new Map,Du=new Map,vu=1,Zc=function(e){if(yu.has(e))return yu.get(e);for(;Du.has(vu);)vu++;var a=vu++;return yu.set(e,a),Du.set(a,e),a},dA=function(e,a){vu=a+1,yu.set(e,a),Du.set(a,e)},fA="style[".concat(Lo,"][").concat(ow,'="').concat(Ku,'"]'),hA=new RegExp("^".concat(Lo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mA=function(e,a,r){for(var o,l=r.split(","),u=0,d=l.length;u<d;u++)(o=l[u])&&e.registerName(a,o)},pA=function(e,a){for(var r,o=((r=a.textContent)!==null&&r!==void 0?r:"").split(Jm),l=[],u=0,d=o.length;u<d;u++){var m=o[u].trim();if(m){var p=m.match(hA);if(p){var g=0|parseInt(p[1],10),y=p[2];g!==0&&(dA(y,g),mA(e,y,p[3]),e.getTag().insertRules(g,l)),l.length=0}else l.push(m)}}},h1=function(e){for(var a=document.querySelectorAll(fA),r=0,o=a.length;r<o;r++){var l=a[r];l&&l.getAttribute(Lo)!==rw&&(pA(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function gA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pw=function(e){var a=document.head,r=e||a,o=document.createElement("style"),l=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(Lo,"]")));return p[p.length-1]})(r),u=l!==void 0?l.nextSibling:null;o.setAttribute(Lo,rw),o.setAttribute(ow,Ku);var d=gA();return d&&o.setAttribute("nonce",d),r.insertBefore(o,u),o},yA=(function(){function e(a){this.element=pw(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,l=0,u=o.length;l<u;l++){var d=o[l];if(d.ownerNode===r)return d}throw Al(17)})(this.element),this.length=0}return e.prototype.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var r=this.sheet.cssRules[a];return r&&r.cssText?r.cssText:""},e})(),vA=(function(){function e(a){this.element=pw(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,r){if(a<=this.length&&a>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e})(),xA=(function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e})(),m1=Mu,bA={isServer:!Mu,useCSSOMInjection:!Qj},gw=(function(){function e(a,r,o){a===void 0&&(a=No),r===void 0&&(r={});var l=this;this.options=yn(yn({},bA),a),this.gs=r,this.names=new Map(o),this.server=!!a.isServer,!this.server&&Mu&&m1&&(m1=!1,h1(this)),tp(this,function(){return(function(u){for(var d=u.getTag(),m=d.length,p="",g=function(v){var b=(function(C){return Du.get(C)})(v);if(b===void 0)return"continue";var S=u.names.get(b),T=d.getGroup(v);if(S===void 0||!S.size||T.length===0)return"continue";var M="".concat(Lo,".g").concat(v,'[id="').concat(b,'"]'),j="";S!==void 0&&S.forEach(function(C){C.length>0&&(j+="".concat(C,","))}),p+="".concat(T).concat(M,'{content:"').concat(j,'"}').concat(Jm)},y=0;y<m;y++)g(y);return p})(l)})}return e.registerId=function(a){return Zc(a)},e.prototype.rehydrate=function(){!this.server&&Mu&&h1(this)},e.prototype.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new e(yn(yn({},this.options),a),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(r){var o=r.useCSSOMInjection,l=r.target;return r.isServer?new xA(l):o?new yA(l):new vA(l)})(this.options),new uA(a)));var a},e.prototype.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},e.prototype.registerName=function(a,r){if(Zc(a),this.names.has(a))this.names.get(a).add(r);else{var o=new Set;o.add(r),this.names.set(a,o)}},e.prototype.insertRules=function(a,r,o){this.registerName(a,r),this.getTag().insertRules(Zc(a),o)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(Zc(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e})(),wA=/&/g,SA=/^\s*\/\/.*$/gm;function yw(e,a){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(a," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(a," ")),r.props=r.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=yw(r.children,a)),r})}function EA(e){var a,r,o,l=No,u=l.options,d=u===void 0?No:u,m=l.plugins,p=m===void 0?Qu:m,g=function(b,S,T){return T.startsWith(r)&&T.endsWith(r)&&T.replaceAll(r,"").length>0?".".concat(a):b},y=p.slice();y.push(function(b){b.type===Gu&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(wA,r).replace(o,g))}),d.prefix&&y.push(Ij),y.push(Gj);var v=function(b,S,T,M){S===void 0&&(S=""),T===void 0&&(T=""),M===void 0&&(M="&"),a=M,r=S,o=new RegExp("\\".concat(r,"\\b"),"g");var j=b.replace(SA,""),C=Fj(T||S?"".concat(T," ").concat(S," { ").concat(j," }"):j);d.namespace&&(C=yw(C,d.namespace));var z=[];return Ru(C,Xj(y.concat(qj(function(N){return z.push(N)})))),z};return v.hash=p.length?p.reduce(function(b,S){return S.name||Al(15),To(b,S.name)},lw).toString():"",v}var TA=new gw,lm=EA(),vw=We.createContext({shouldForwardProp:void 0,styleSheet:TA,stylis:lm});vw.Consumer;We.createContext(void 0);function p1(){return w.useContext(vw)}var xw=(function(){function e(a,r){var o=this;this.inject=function(l,u){u===void 0&&(u=lm);var d=o.name+u.hash;l.hasNameForId(o.id,d)||l.insertRules(o.id,d,u(o.rules,d,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=r,tp(this,function(){throw Al(12,String(o.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=lm),this.name+a.hash},e})(),CA=function(e){return e>="A"&&e<="Z"};function g1(e){for(var a="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;CA(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var bw=function(e){return e==null||e===!1||e===""},ww=function(e){var a,r,o=[];for(var l in e){var u=e[l];e.hasOwnProperty(l)&&!bw(u)&&(Array.isArray(u)&&u.isCss||_o(u)?o.push("".concat(g1(l),":"),u,";"):dl(u)?o.push.apply(o,ul(ul(["".concat(l," {")],ww(u),!1),["}"],!1)):o.push("".concat(g1(l),": ").concat((a=l,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||a in Kj||a.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Mr(e,a,r,o){if(bw(e))return[];if(ep(e))return[".".concat(e.styledComponentId)];if(_o(e)){if(!_o(u=e)||u.prototype&&u.prototype.isReactComponent||!a)return[e];var l=e(a);return Mr(l,a,r,o)}var u;return e instanceof xw?r?(e.inject(r,o),[e.getName(o)]):[e]:dl(e)?ww(e):Array.isArray(e)?Array.prototype.concat.apply(Qu,e.map(function(d){return Mr(d,a,r,o)})):[e.toString()]}function jA(e){for(var a=0;a<e.length;a+=1){var r=e[a];if(_o(r)&&!ep(r))return!1}return!0}var AA=cw(Ku),RA=(function(){function e(a,r,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&jA(a),this.componentId=r,this.baseHash=To(AA,r),this.baseStyle=o,gw.registerId(r)}return e.prototype.generateAndInjectStyles=function(a,r,o){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=Cr(l,this.staticRulesId);else{var u=om(Mr(this.rules,a,r,o)),d=rm(To(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,d)){var m=o(u,".".concat(d),void 0,this.componentId);r.insertRules(this.componentId,d,m)}l=Cr(l,d),this.staticRulesId=d}else{for(var p=To(this.baseHash,o.hash),g="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")g+=v;else if(v){var b=om(Mr(v,a,r,o));p=To(p,b+y),g+=b}}if(g){var S=rm(p>>>0);r.hasNameForId(this.componentId,S)||r.insertRules(this.componentId,S,o(g,".".concat(S),void 0,this.componentId)),l=Cr(l,S)}}return l},e})(),Sw=We.createContext(void 0);Sw.Consumer;var Ah={};function MA(e,a,r){var o=ep(e),l=e,u=!jh(e),d=a.attrs,m=d===void 0?Qu:d,p=a.componentId,g=p===void 0?(function(q,H){var A=typeof q!="string"?"sc":l1(q);Ah[A]=(Ah[A]||0)+1;var $="".concat(A,"-").concat(uw(Ku+A+Ah[A]));return H?"".concat(H,"-").concat($):$})(a.displayName,a.parentComponentId):p,y=a.displayName,v=y===void 0?(function(q){return jh(q)?"styled.".concat(q):"Styled(".concat(tA(q),")")})(e):y,b=a.displayName&&a.componentId?"".concat(l1(a.displayName),"-").concat(a.componentId):a.componentId||g,S=o&&l.attrs?l.attrs.concat(m).filter(Boolean):m,T=a.shouldForwardProp;if(o&&l.shouldForwardProp){var M=l.shouldForwardProp;if(a.shouldForwardProp){var j=a.shouldForwardProp;T=function(q,H){return M(q,H)&&j(q,H)}}else T=M}var C=new RA(r,b,o?l.componentStyle:void 0);function z(q,H){return(function(A,$,P){var X=A.attrs,se=A.componentStyle,pe=A.defaultProps,Ne=A.foldedComponentIds,de=A.styledComponentId,ge=A.target,ze=We.useContext(Sw),D=p1(),_=A.shouldForwardProp||D.shouldForwardProp,I=Zj($,ze,pe)||No,oe=(function(ye,Ee,ne){for(var re,ae=yn(yn({},Ee),{className:void 0,theme:ne}),he=0;he<ye.length;he+=1){var Oe=_o(re=ye[he])?re(ae):re;for(var Ae in Oe)ae[Ae]=Ae==="className"?Cr(ae[Ae],Oe[Ae]):Ae==="style"?yn(yn({},ae[Ae]),Oe[Ae]):Oe[Ae]}return Ee.className&&(ae.className=Cr(ae.className,Ee.className)),ae})(X,$,I),ue=oe.as||ge,k={};for(var K in oe)oe[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&oe.theme===I||(K==="forwardedAs"?k.as=oe.forwardedAs:_&&!_(K,ue)||(k[K]=oe[K]));var te=(function(ye,Ee){var ne=p1(),re=ye.generateAndInjectStyles(Ee,ne.styleSheet,ne.stylis);return re})(se,oe),le=Cr(Ne,de);return te&&(le+=" "+te),oe.className&&(le+=" "+oe.className),k[jh(ue)&&!sw.has(ue)?"class":"className"]=le,P&&(k.ref=P),w.createElement(ue,k)})(N,q,H)}z.displayName=v;var N=We.forwardRef(z);return N.attrs=S,N.componentStyle=C,N.displayName=v,N.shouldForwardProp=T,N.foldedComponentIds=o?Cr(l.foldedComponentIds,l.styledComponentId):"",N.styledComponentId=b,N.target=o?l.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=o?(function(H){for(var A=[],$=1;$<arguments.length;$++)A[$-1]=arguments[$];for(var P=0,X=A;P<X.length;P++)sm(H,X[P],!0);return H})({},l.defaultProps,q):q}}),tp(N,function(){return".".concat(N.styledComponentId)}),u&&mw(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function y1(e,a){for(var r=[e[0]],o=0,l=a.length;o<l;o+=1)r.push(a[o],e[o+1]);return r}var v1=function(e){return Object.assign(e,{isCss:!0})};function Ew(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(_o(e)||dl(e))return v1(Mr(y1(Qu,ul([e],a,!0))));var o=e;return a.length===0&&o.length===1&&typeof o[0]=="string"?Mr(o):v1(Mr(y1(o,a)))}function cm(e,a,r){if(r===void 0&&(r=No),!a)throw Al(1,a);var o=function(l){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return e(a,r,Ew.apply(void 0,ul([l],u,!1)))};return o.attrs=function(l){return cm(e,a,yn(yn({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},o.withConfig=function(l){return cm(e,a,yn(yn({},r),l))},o}var Tw=function(e){return cm(MA,e)},R=Tw;sw.forEach(function(e){R[e]=Tw(e)});function ct(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=om(Ew.apply(void 0,ul([e],a,!1))),l=uw(o);return new xw(l,o)}const DA=()=>h.jsxs(zA,{children:[h.jsx("h1",{children:" 404! This is an empty page"}),h.jsx(Ja,{to:"/",children:"Go Home"})]}),zA=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #f0f0f0; */
  text-align: center;
  margin-top: 4.5rem;
  color: var(--text-color);
`;function Cw({fontSize:e=70,scale:a=1,variant:r=0}){const o=["#19029b","#FFD93D","#6BCB77","#4D96FF","#ae2c2c","#845EC2"],d=w.useRef(null),[m,p]=w.useState({x:0,y:0,width:100,height:100}),g=w.useMemo(()=>{const y=[],v=S=>{let T=Math.sin(S)*1e4;return T-Math.floor(T)};let b=r*1e3;for(let S=0;S<20;S++){const T=S*50;for(let M=0;M<8;M++){b+=1;const j=o[Math.floor(v(b)*o.length)],C=(v(b+1)*2).toFixed(2),z=(1+v(b+2)).toFixed(2),N=(v(b+3)*40-20).toFixed(1);y.push(h.jsx("rect",{x:T,y:M*50,width:"50",height:50,fill:j,children:h.jsx("animateTransform",{attributeName:"transform",type:"translate",values:`0,0; 0,${N}; 0,0`,dur:`${z}s`,repeatCount:"indefinite",begin:`${C}s`})},`${S}-${M}`))}}return y},[r]);return w.useEffect(()=>{if(d.current){const y=d.current.getBBox();p(y)}},[e]),h.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`${m.x} ${m.y} ${m.width} ${m.height}`,preserveAspectRatio:"xMinYMin meet",style:{display:"block",background:"transparent",width:`${m.width*a}px`,height:`${m.height*a}px`},children:[h.jsx("defs",{children:h.jsx("pattern",{id:"slidePattern",patternUnits:"userSpaceOnUse",width:"1000",height:"400",children:g})}),h.jsx("text",{ref:d,x:"0",y:e,fontSize:e,fontFamily:"sans-serif",fill:"url(#slidePattern)",dominantBaseline:"alphabetic",textAnchor:"start",children:"FITFINDER"})]})}const ln={setToken:(e,a)=>{if(e?localStorage.setItem("accessToken",e):localStorage.removeItem("accessToken"),!a){localStorage.removeItem("tokenExpiry"),localStorage.removeItem("TTL");return}let r;typeof a=="number"&&a>Date.now()?r=a:r=Date.now()+Number(a)*1e3,localStorage.setItem("tokenExpiry",String(r));const o=Math.max(0,Math.floor((r-Date.now())/1e3));localStorage.setItem("TTL",String(o))},getToken:()=>localStorage.getItem("accessToken")||null,getTTL:()=>{const e=localStorage.getItem("TTL");if(e!==null&&!Number.isNaN(Number(e)))return Number(e);const a=localStorage.getItem("tokenExpiry");return a?Math.max(0,Math.floor((Number(a)-Date.now())/1e3)):null},clearToken:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("tokenExpiry"),localStorage.removeItem("TTL")},isExpired:()=>{const e=localStorage.getItem("tokenExpiry");return e?Date.now()>=Number(e):!0},getTimeToExpiry:()=>{const e=localStorage.getItem("tokenExpiry");return e?Math.max(0,Number(e)-Date.now()):0}},um="https://telescopic-ungodlily-wilbert.ngrok-free.dev",OA="668166958235-qme7mcbk6ab0v0lin94i1b8pvheidba2.apps.googleusercontent.com",kA=(e,a)=>{try{return new URL(a,e).toString()}catch(r){return console.error("Invalid API base URL",e,r),a}};let Wc=null;const tn=async(e,a={})=>{const{skipAuth:r,...o}=a;!r&&ln.getToken()&&ln.getTimeToExpiry()<3e4&&(Wc||(Wc=Za.refreshAccessToken().catch(m=>{throw console.error("Token refresh failed:",m),ln.clearToken(),m}).finally(()=>{Wc=null})),await Wc);const l=ln.getToken(),u={...o.headers||{},...l&&!r?{Authorization:`Bearer ${l}`}:{},...um?.includes("ngrok")?{"ngrok-skip-browser-warning":"true"}:{}},d=await fetch(kA(um,e),{mode:"cors",credentials:"include",...o,headers:u});if(d.status==452&&!r)throw ln.clearToken(),new Error("Unauthorized — session expired");return d},Za={signup:async(e,a,r)=>{const o=await tn("/api/v1/auth/signup",{method:"POST",body:JSON.stringify({userName:e,email:a,password:r}),skipAuth:!1,headers:{"Content-Type":"application/json"}});if(o.status==201){const l=await o.json(),u=new Date(Date.parse(l.expiresIn.replace("EET","GMT+0200"))),d=new Date(u);ln.setToken(l.accessToken,d.getTime())}return o},login:async(e,a)=>{const r=await tn("/api/v1/auth/login",{method:"POST",body:JSON.stringify({email:e,password:a}),skipAuth:!1,headers:{"Content-Type":"application/json"}});if(r.status==200){const o=await r.json(),l=new Date(Date.parse(o.expiresIn.replace("EET","GMT+0200"))),u=new Date(l);ln.setToken(o.accessToken,u.getTime())}return r},refreshAccessToken:async()=>{const e=await tn("/api/v1/auth/refresh",{method:"POST",skipAuth:!0});if(!e.ok){const o=await e.text().catch(()=>null);throw new Error(`Refresh failed: ${e.status} ${o||""}`)}const a=await e.json().catch(()=>null);if(!a||!a.expiresIn)throw new Error("Refresh response missing required 'expiresIn' value");let r;if(typeof a.expiresIn=="string"){const o=a.expiresIn.includes("EET")?a.expiresIn.replace("EET","GMT+0200"):a.expiresIn;r=Date.parse(o)}else if(typeof a.expiresIn=="number")r=a.expiresIn;else throw new Error("Unknown format for 'expiresIn' in refresh response");if(Number.isNaN(r)||r<=0)throw new Error("Invalid 'expiresIn' value in refresh response");return ln.setToken(a.accessToken,r),e},logout:async()=>{try{await tn("/api/v1/auth/logout",{method:"POST",skipAuth:!0})}catch(e){console.warn("Logout request failed:",e)}finally{ln.clearToken()}},sendCode:async e=>await tn("/api/v1/auth/send-code",{method:"POST",body:JSON.stringify({email:e}),skipAuth:!1,headers:{"Content-Type":"application/json"}}),updatePassword:async(e,a)=>await tn("/api/v1/auth/update-password",{method:"POST",body:JSON.stringify({email:e,newPassword:a}),skipAuth:!1,headers:{"Content-Type":"application/json"}}),updateProfileImage:async e=>{const a=new FormData;return a.append("image",e),await tn("/api/v1/auth/profile/photo",{method:"PUT",body:a,skipAuth:!1})},getProfile:async()=>await tn("/api/v1/auth/profile",{method:"GET",skipAuth:!1})},LA=()=>{const[e,a]=w.useState(ln.getToken()),[r,o]=w.useState(null),l=async(T,M,j)=>{const C=await Za.signup(T,M,j);return a(ln.getToken()),S(),await y(),C},u=async(T,M)=>{const j=await Za.login(T,M);return a(ln.getToken()),S(),await y(),j},d=async()=>{await Za.logout(),a(null),clearTimeout(b)},m=async T=>await Za.sendCode(T),p=async(T,M)=>await Za.updatePassword(T,M),g=()=>!ln.isExpired(),y=async()=>{try{const T=await Za.getProfile();if(T&&T.ok){const M=await T.json();o(M)}else console.error("getProfile failed",T&&T.status),o(null)}catch(T){console.error("getProfile error",T),o(null)}},v=async T=>await Za.updateProfileImage(T);let b;const S=()=>{clearTimeout(b);const T=ln.getTimeToExpiry();T>3e4&&(b=setTimeout(async()=>{try{await Za.refreshAccessToken(),a(ln.getToken()),S()}catch(M){console.error("Background refresh failed:",M),alert("Sorry but your session has expired. Please login again!"),d()}},T-3e4))};return w.useEffect(()=>(e&&S(),()=>clearTimeout(b)),[e]),w.useEffect(()=>{y()},[r]),{signup:l,login:u,logout:d,isAuthenticated:g,sendCode:m,updatePassword:p,updateProfileImage:v,user:r}},jw=w.createContext(),NA=({children:e})=>{const a=LA();return h.jsx(jw.Provider,{value:a,children:e})},Ho=()=>w.useContext(jw);function x1({processImage:e,isDisabled:a,name:r}){return h.jsxs(_A,{onClick:e,$disabled:a,$buttonDisabled:a,children:[r,h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})})]})}const _A=R.button`
  position: relative;
  padding: 12px 35px;
  background: #ffffff;
  font-size: 17px;
  font-weight: 500;
  color: #000000;
  border: 3px solid #0e3a3a;
  border-radius: 8px;
  box-shadow: 0 0 0 #fec1958c;
  transition: all 0.3s ease-in-out;
  cursor: ${e=>!e.$buttonDisabled&&"pointer"};
  opacity: ${e=>e.$buttonDisabled&&"0"};

  div:nth-child(1) {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
  }
  div:nth-child(2) {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  div:nth-child(3) {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  div:nth-child(4) {
    position: absolute;
    top: 20%;
    left: 40%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  div:nth-child(5) {
    position: absolute;
    top: 25%;
    left: 45%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
  }

  div:nth-child(6) {
    position: absolute;
    top: 5%;
    left: 50%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 0 #fffdef);
    z-index: -5;
    transition: all 0.8s ease;
  }

  &:hover {
    background: #0e3a3a;
    color: #ffffff;
    box-shadow: 0 0 25px #0e3a3a;
    border: 3px solid #fff;
  }

  &:hover div:nth-child(1) {
    position: absolute;
    top: -80%;
    left: -30%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  &:hover div:nth-child(2) {
    position: absolute;
    top: -25%;
    left: 10%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  &:hover div:nth-child(3) {
    position: absolute;
    top: 55%;
    left: 25%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  &:hover div:nth-child(4) {
    position: absolute;
    top: 30%;
    left: 80%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  &:hover div:nth-child(5) {
    position: absolute;
    top: 25%;
    left: 115%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  &:hover div:nth-child(6) {
    position: absolute;
    top: 5%;
    left: 60%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
  }

  path {
    fill: #fffdef;
  }
`;var UA={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Aw(e){if(typeof e=="number")return{value:e,unit:"px"};var a,r=(e.match(/^[0-9.]*/)||"").toString();r.includes(".")?a=parseFloat(r):a=parseInt(r,10);var o=(e.match(/[^0-9]*$/)||"").toString();return UA[o]?{value:a,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}function Jc(e){var a=Aw(e);return"".concat(a.value).concat(a.unit)}var b1=function(e,a,r){var o="react-spinners-".concat(e,"-").concat(r);if(typeof window>"u"||!window.document)return o;var l=document.createElement("style");document.head.appendChild(l);var u=l.sheet,d=`
    @keyframes `.concat(o,` {
      `).concat(a,`
    }
  `);return u&&u.insertRule(d,0),o},zu;(function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"})(zu||(zu={}));var VA=function(e,a){if(e.includes("/"))return e.replace("rgb(","rgba(");var r=e.substring(e.startsWith("rgba(")?5:4,e.length-1).trim(),o=r.split(",");return o.length===4?e.replace("rgb(","rgba("):o.length===3?"rgba(".concat(r,", ").concat(a,")"):"rgba(".concat(r," / ").concat(a,")")},BA=function(e,a){if(e.startsWith("rgb"))return VA(e,a);if(Object.keys(zu).includes(e)&&(e=zu[e]),e[0]==="#"&&(e=e.slice(1)),e.length===3){var r="";e.split("").forEach(function(l){r+=l,r+=l}),e=r}var o=(e.match(/.{2}/g)||[]).map(function(l){return parseInt(l,16)}).join(", ");return"rgba(".concat(o,", ").concat(a,")")},Ou=function(){return Ou=Object.assign||function(e){for(var a,r=1,o=arguments.length;r<o;r++){a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Ou.apply(this,arguments)},HA=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)a.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(r[o[l]]=e[o[l]]);return r};function Pi(e){var a=e.loading,r=a===void 0?!0:a,o=e.color,l=o===void 0?"#000000":o,u=e.speedMultiplier,d=u===void 0?1:u,m=e.cssOverride,p=m===void 0?{}:m,g=e.size,y=g===void 0?50:g,v=HA(e,["loading","color","speedMultiplier","cssOverride","size"]),b=Aw(y),S=b.value,T=b.unit,M=Ou({display:"inherit",position:"relative",width:Jc(y),height:Jc(y),transform:"rotate(165deg)"},p),j=S/5,C=(S-j)/2,z=C-j,N=BA(l,.75),q=b1("HashLoader","0% {width: ".concat(j,"px; box-shadow: ").concat(C,"px ").concat(-z,"px ").concat(N,", ").concat(-C,"px ").concat(z,"px ").concat(N,`}
    35% {width: `).concat(Jc(y),"; box-shadow: 0 ").concat(-z,"px ").concat(N,", 0 ").concat(z,"px ").concat(N,`}
    70% {width: `).concat(j,"px; box-shadow: ").concat(-C,"px ").concat(-z,"px ").concat(N,", ").concat(C,"px ").concat(z,"px ").concat(N,`}
    100% {box-shadow: `).concat(C,"px ").concat(-z,"px ").concat(N,", ").concat(-C,"px ").concat(z,"px ").concat(N,"}"),"before"),H=b1("HashLoader","0% {height: ".concat(j,"px; box-shadow: ").concat(z,"px ").concat(C,"px ").concat(l,", ").concat(-z,"px ").concat(-C,"px ").concat(l,`}
    35% {height: `).concat(Jc(y),"; box-shadow: ").concat(z,"px 0 ").concat(l,", ").concat(-z,"px 0 ").concat(l,`}
    70% {height: `).concat(j,"px; box-shadow: ").concat(z,"px ").concat(-C,"px ").concat(l,", ").concat(-z,"px ").concat(C,"px ").concat(l,`}
    100% {box-shadow: `).concat(z,"px ").concat(C,"px ").concat(l,", ").concat(-z,"px ").concat(-C,"px ").concat(l,"}"),"after"),A=function($){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(S/5).concat(T),height:"".concat(S/5).concat(T),borderRadius:"".concat(S/10).concat(T),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat($===1?q:H," ").concat(2/d,"s infinite")}};return r?w.createElement("span",Ou({style:M},v),w.createElement("span",{style:A(1)}),w.createElement("span",{style:A(2)})):null}let $A={data:""},PA=e=>{if(typeof window=="object"){let a=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return a.nonce=window.__nonce__,a.parentNode||(e||document.head).appendChild(a),a.firstChild}return e||$A},FA=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,YA=/\/\*[^]*?\*\/|  +/g,w1=/\n+/g,Fi=(e,a)=>{let r="",o="",l="";for(let u in e){let d=e[u];u[0]=="@"?u[1]=="i"?r=u+" "+d+";":o+=u[1]=="f"?Fi(d,u):u+"{"+Fi(d,u[1]=="k"?"":a)+"}":typeof d=="object"?o+=Fi(d,a?a.replace(/([^,])+/g,m=>u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,m):m?m+" "+p:p)):u):d!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=Fi.p?Fi.p(u,d):u+":"+d+";")}return r+(a&&l?a+"{"+l+"}":l)+o},Ka={},Rw=e=>{if(typeof e=="object"){let a="";for(let r in e)a+=r+Rw(e[r]);return a}return e},GA=(e,a,r,o,l)=>{let u=Rw(e),d=Ka[u]||(Ka[u]=(p=>{let g=0,y=11;for(;g<p.length;)y=101*y+p.charCodeAt(g++)>>>0;return"go"+y})(u));if(!Ka[d]){let p=u!==e?e:(g=>{let y,v,b=[{}];for(;y=FA.exec(g.replace(YA,""));)y[4]?b.shift():y[3]?(v=y[3].replace(w1," ").trim(),b.unshift(b[0][v]=b[0][v]||{})):b[0][y[1]]=y[2].replace(w1," ").trim();return b[0]})(e);Ka[d]=Fi(l?{["@keyframes "+d]:p}:p,r?"":"."+d)}let m=r&&Ka.g?Ka.g:null;return r&&(Ka.g=Ka[d]),((p,g,y,v)=>{v?g.data=g.data.replace(v,p):g.data.indexOf(p)===-1&&(g.data=y?p+g.data:g.data+p)})(Ka[d],a,o,m),d},XA=(e,a,r)=>e.reduce((o,l,u)=>{let d=a[u];if(d&&d.call){let m=d(r),p=m&&m.props&&m.props.className||/^go/.test(m)&&m;d=p?"."+p:m&&typeof m=="object"?m.props?"":Fi(m,""):m===!1?"":m}return o+l+(d??"")},"");function Zu(e){let a=this||{},r=e.call?e(a.p):e;return GA(r.unshift?r.raw?XA(r,[].slice.call(arguments,1),a.p):r.reduce((o,l)=>Object.assign(o,l&&l.call?l(a.p):l),{}):r,PA(a.target),a.g,a.o,a.k)}let Mw,dm,fm;Zu.bind({g:1});let ei=Zu.bind({k:1});function qA(e,a,r,o){Fi.p=a,Mw=e,dm=r,fm=o}function qi(e,a){let r=this||{};return function(){let o=arguments;function l(u,d){let m=Object.assign({},u),p=m.className||l.className;r.p=Object.assign({theme:dm&&dm()},m),r.o=/ *go\d+/.test(p),m.className=Zu.apply(r,o)+(p?" "+p:"");let g=e;return e[0]&&(g=m.as||e,delete m.as),fm&&g[0]&&fm(m),Mw(g,m)}return l}}var IA=e=>typeof e=="function",ku=(e,a)=>IA(e)?e(a):e,KA=(()=>{let e=0;return()=>(++e).toString()})(),Dw=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");e=!a||a.matches}return e}})(),QA=20,np="default",zw=(e,a)=>{let{toastLimit:r}=e.settings;switch(a.type){case 0:return{...e,toasts:[a.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(d=>d.id===a.toast.id?{...d,...a.toast}:d)};case 2:let{toast:o}=a;return zw(e,{type:e.toasts.find(d=>d.id===o.id)?1:0,toast:o});case 3:let{toastId:l}=a;return{...e,toasts:e.toasts.map(d=>d.id===l||l===void 0?{...d,dismissed:!0,visible:!1}:d)};case 4:return a.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(d=>d.id!==a.toastId)};case 5:return{...e,pausedAt:a.time};case 6:let u=a.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(d=>({...d,pauseDuration:d.pauseDuration+u}))}}},xu=[],Ow={toasts:[],pausedAt:void 0,settings:{toastLimit:QA}},Ca={},kw=(e,a=np)=>{Ca[a]=zw(Ca[a]||Ow,e),xu.forEach(([r,o])=>{r===a&&o(Ca[a])})},Lw=e=>Object.keys(Ca).forEach(a=>kw(e,a)),ZA=e=>Object.keys(Ca).find(a=>Ca[a].toasts.some(r=>r.id===e)),Wu=(e=np)=>a=>{kw(a,e)},WA={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},JA=(e={},a=np)=>{let[r,o]=w.useState(Ca[a]||Ow),l=w.useRef(Ca[a]);w.useEffect(()=>(l.current!==Ca[a]&&o(Ca[a]),xu.push([a,o]),()=>{let d=xu.findIndex(([m])=>m===a);d>-1&&xu.splice(d,1)}),[a]);let u=r.toasts.map(d=>{var m,p,g;return{...e,...e[d.type],...d,removeDelay:d.removeDelay||((m=e[d.type])==null?void 0:m.removeDelay)||e?.removeDelay,duration:d.duration||((p=e[d.type])==null?void 0:p.duration)||e?.duration||WA[d.type],style:{...e.style,...(g=e[d.type])==null?void 0:g.style,...d.style}}});return{...r,toasts:u}},e3=(e,a="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||KA()}),Rl=e=>(a,r)=>{let o=e3(a,e,r);return Wu(o.toasterId||ZA(o.id))({type:2,toast:o}),o.id},Ut=(e,a)=>Rl("blank")(e,a);Ut.error=Rl("error");Ut.success=Rl("success");Ut.loading=Rl("loading");Ut.custom=Rl("custom");Ut.dismiss=(e,a)=>{let r={type:3,toastId:e};a?Wu(a)(r):Lw(r)};Ut.dismissAll=e=>Ut.dismiss(void 0,e);Ut.remove=(e,a)=>{let r={type:4,toastId:e};a?Wu(a)(r):Lw(r)};Ut.removeAll=e=>Ut.remove(void 0,e);Ut.promise=(e,a,r)=>{let o=Ut.loading(a.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(l=>{let u=a.success?ku(a.success,l):void 0;return u?Ut.success(u,{id:o,...r,...r?.success}):Ut.dismiss(o),l}).catch(l=>{let u=a.error?ku(a.error,l):void 0;u?Ut.error(u,{id:o,...r,...r?.error}):Ut.dismiss(o)}),e};var t3=1e3,n3=(e,a="default")=>{let{toasts:r,pausedAt:o}=JA(e,a),l=w.useRef(new Map).current,u=w.useCallback((v,b=t3)=>{if(l.has(v))return;let S=setTimeout(()=>{l.delete(v),d({type:4,toastId:v})},b);l.set(v,S)},[]);w.useEffect(()=>{if(o)return;let v=Date.now(),b=r.map(S=>{if(S.duration===1/0)return;let T=(S.duration||0)+S.pauseDuration-(v-S.createdAt);if(T<0){S.visible&&Ut.dismiss(S.id);return}return setTimeout(()=>Ut.dismiss(S.id,a),T)});return()=>{b.forEach(S=>S&&clearTimeout(S))}},[r,o,a]);let d=w.useCallback(Wu(a),[a]),m=w.useCallback(()=>{d({type:5,time:Date.now()})},[d]),p=w.useCallback((v,b)=>{d({type:1,toast:{id:v,height:b}})},[d]),g=w.useCallback(()=>{o&&d({type:6,time:Date.now()})},[o,d]),y=w.useCallback((v,b)=>{let{reverseOrder:S=!1,gutter:T=8,defaultPosition:M}=b||{},j=r.filter(N=>(N.position||M)===(v.position||M)&&N.height),C=j.findIndex(N=>N.id===v.id),z=j.filter((N,q)=>q<C&&N.visible).length;return j.filter(N=>N.visible).slice(...S?[z+1]:[0,z]).reduce((N,q)=>N+(q.height||0)+T,0)},[r]);return w.useEffect(()=>{r.forEach(v=>{if(v.dismissed)u(v.id,v.removeDelay);else{let b=l.get(v.id);b&&(clearTimeout(b),l.delete(v.id))}})},[r,u]),{toasts:r,handlers:{updateHeight:p,startPause:m,endPause:g,calculateOffset:y}}},a3=ei`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,i3=ei`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,r3=ei`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,o3=qi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${a3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${i3} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${r3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,s3=ei`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,l3=qi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${s3} 1s linear infinite;
`,c3=ei`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,u3=ei`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,d3=qi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${c3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${u3} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,f3=qi("div")`
  position: absolute;
`,h3=qi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,m3=ei`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,p3=qi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${m3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,g3=({toast:e})=>{let{icon:a,type:r,iconTheme:o}=e;return a!==void 0?typeof a=="string"?w.createElement(p3,null,a):a:r==="blank"?null:w.createElement(h3,null,w.createElement(l3,{...o}),r!=="loading"&&w.createElement(f3,null,r==="error"?w.createElement(o3,{...o}):w.createElement(d3,{...o})))},y3=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,v3=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,x3="0%{opacity:0;} 100%{opacity:1;}",b3="0%{opacity:1;} 100%{opacity:0;}",w3=qi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,S3=qi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,E3=(e,a)=>{let r=e.includes("top")?1:-1,[o,l]=Dw()?[x3,b3]:[y3(r),v3(r)];return{animation:a?`${ei(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ei(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},T3=w.memo(({toast:e,position:a,style:r,children:o})=>{let l=e.height?E3(e.position||a||"top-center",e.visible):{opacity:0},u=w.createElement(g3,{toast:e}),d=w.createElement(S3,{...e.ariaProps},ku(e.message,e));return w.createElement(w3,{className:e.className,style:{...l,...r,...e.style}},typeof o=="function"?o({icon:u,message:d}):w.createElement(w.Fragment,null,u,d))});qA(w.createElement);var C3=({id:e,className:a,style:r,onHeightUpdate:o,children:l})=>{let u=w.useCallback(d=>{if(d){let m=()=>{let p=d.getBoundingClientRect().height;o(e,p)};m(),new MutationObserver(m).observe(d,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return w.createElement("div",{ref:u,className:a,style:r},l)},j3=(e,a)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Dw()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(r?1:-1)}px)`,...o,...l}},A3=Zu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=16,Nw=({reverseOrder:e,position:a="top-center",toastOptions:r,gutter:o,children:l,toasterId:u,containerStyle:d,containerClassName:m})=>{let{toasts:p,handlers:g}=n3(r,u);return w.createElement("div",{"data-rht-toaster":u||"",style:{position:"fixed",zIndex:9999,top:eu,left:eu,right:eu,bottom:eu,pointerEvents:"none",...d},className:m,onMouseEnter:g.startPause,onMouseLeave:g.endPause},p.map(y=>{let v=y.position||a,b=g.calculateOffset(y,{reverseOrder:e,gutter:o,defaultPosition:a}),S=j3(v,b);return w.createElement(C3,{id:y.id,key:y.id,onHeightUpdate:g.updateHeight,className:y.visible?A3:"",style:S},y.type==="custom"?ku(y.message,y):l?l(y):w.createElement(T3,{toast:y,position:v}))}))};const st={notifySuccess:e=>{Ut.success(e)},notifyError:e=>{Ut.error(e)}};function R3({disabled:e,mode:a,setMode:r}){return h.jsx(O3,{children:h.jsxs(k3,{disabled:e,role:"switch","aria-checked":a==="remove",children:[h.jsx("input",{id:"switch-opt-1",type:"radio",name:"flip-switch",checked:a==="add",onChange:()=>r("add"),disabled:e}),h.jsx("input",{id:"switch-opt-2",type:"radio",name:"flip-switch",checked:a==="remove",onChange:()=>r("remove"),disabled:e}),h.jsxs("label",{htmlFor:"switch-opt-1",title:"Add mask",children:[h.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:h.jsx("path",{d:"M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"})}),h.jsx("span",{children:"Add Mask"})]}),h.jsxs("label",{htmlFor:"switch-opt-2",title:"Remove mask",children:[h.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:h.jsx("path",{d:"M5 11h14v2H5z"})}),h.jsx("span",{children:"Remove Mask"})]}),h.jsxs(hm,{"aria-hidden":"true",children:[h.jsx(L3,{}),h.jsx(N3,{})]})]})})}const M3=ct`
  0% {
    transform: translateX(0%) rotateY(0deg);
  }
  50% {
    transform: translateX(50%) rotateY(90deg) scale(1.05);
  }
  100% {
    transform: translateX(100%) rotateY(180deg) scale(1);
  }  
`,D3=ct`
  0% {
    transform: translateX(100%) rotateY(180deg);
  }
  50% {
    transform: translateX(50%) rotateY(90deg) scale(1.05);
  }
  100% {
    transform: translateX(0%) rotateY(0deg) scale(1);
  }
`,z3=ct`
  from {
    box-shadow: 0 0 5px var(--highlight-color);
  }
  to {
    box-shadow:
      0 0 15px var(--highlight-color),
      0 0 25px var(--highlight-color);
  }
`,O3=R.div`
  --card-width: 110px;
  --card-height: 120px;
  --switch-bg: rgba(255, 255, 255, 0.06);
  --switch-border-color: rgba(255, 255, 255, 0.12);
  --text-color: #ffffff;
  --inactive-text-color: rgba(255, 255, 255, 0.6);
  --icon-shadow-color: rgba(0, 0, 0, 0.3);
  --card-front-bg: linear-gradient(135deg, rgba(255,105,180,0.9), rgba(255,255,255,0.06));
  --card-back-bg: linear-gradient(135deg, rgba(0,150,255,0.9), rgba(255,255,255,0.06));
  --highlight-color: #64ffda;

  display: grid;
  place-content: center;
  min-height: 100%;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`,hm=R.div`
  position: absolute;
  width: var(--card-width);
  height: var(--card-height);
  z-index: 2;
  transform-style: preserve-3d;
  transform-origin: center;
  pointer-events: none;
`,k3=R.div`
  display: flex;
  position: relative;
  width: calc(var(--card-width) * 2);
  height: var(--card-height);
  background: var(--switch-bg);
  border-radius: 16px;
  border: 1px solid var(--switch-border-color);
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.12),
    inset 0 4px 8px rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  perspective: 1000px;
  align-items: center;
  gap: 0;
  

  input[type="radio"] {
    display: none;
  }

  label {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    z-index: 3;
    transition: color 0.2s ease, transform 0.2s ease;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    user-select: none;
  }

  label:hover {
    span, svg{
        transition: all 0.5s;
        color: ${({disabled:e})=>e?"auto":"black"};
    }
  }

  label:hover svg {
    transform: ${({disabled:e})=>e?"none":"translateY(-3px)"};
    filter: ${({disabled:e})=>!e&&"drop-shadow(0 4px 6px var(--icon-shadow-color)) brightness(1.1)"};
  }

  label svg {
    transition: transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), filter 0.24s;
    filter: drop-shadow(0 2px 3px var(--icon-shadow-color));
    width: 24px;
    height: 24px;
    transform: color 1s;
    color: ${({disabled:e})=>e?"#3f3f3f":"var(--inactive-text-color)"};
  }

  label span {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.4px;
    transform: color 1s;
    color: ${({disabled:e})=>e?"#3f3f3f":"var(--inactive-text-color)"};
  }

  /* highlight for checked label */
  input#switch-opt-1:checked ~ label[for="switch-opt-1"],
  input#switch-opt-2:checked ~ label[for="switch-opt-2"] {
    color: var(--text-color);
    text-shadow: 0 0 8px rgba(100, 255, 218, 0.35);
  }

  input#switch-opt-1:checked ~ label[for="switch-opt-1"]::after,
  input#switch-opt-2:checked ~ label[for="switch-opt-2"]::after {
    content: "";
    position: absolute;
    bottom: -6px;
    width: 32px;
    height: 3px;
    background: var(--highlight-color);
    border-radius: 16px;
    animation: ${z3} 1.5s infinite alternate;
  }

  /* dim the inactive label */
  input#switch-opt-2:checked ~ label[for="switch-opt-1"],
  input#switch-opt-1:checked ~ label[for="switch-opt-2"] {
    color: var(--inactive-text-color);
  }

  /* IMPORTANT: interpolate the SwitchCard styled component so styled-components
     uses the actual generated class name rather than a plain selector. */
  /* When opt-2 (remove) is checked -> flip to right */
  input#switch-opt-2:checked ~ ${hm} {
    animation: ${M3} 0.52s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }

  /* When opt-1 (add) is checked -> flip to left (initial state) */
  input#switch-opt-1:checked ~ ${hm} {
    animation: ${D3} 0.52s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }
`,_w=`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 6px 18px rgba(0,0,0,0.16),
    inset 0 2px 6px rgba(255,255,255,0.03);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`,L3=R.div`
  ${_w}
  background: var(--card-front-bg);
  transform: translateZ(0) rotateY(0deg);
`,N3=R.div`
  ${_w}
  background: var(--card-back-bg);
  transform: rotateY(180deg);
`;function _3({imageURL:e,loading:a,setLoading:r,imageObj:o,setImageObj:l,setSelectedSegments:u,setIsBeingCustomized:d,segmentationService:m}){const[p,g]=w.useState([]),[y,v]=w.useState([]),[b,S]=w.useState([]),[T,M]=w.useState([]),[j,C]=w.useState(null),[z,N]=w.useState("add"),[q,H]=w.useState([]),[A,$]=w.useState([]),[P,X]=w.useState(!1),[se,pe]=w.useState([]),[Ne,de]=w.useState("idle"),ge=w.useRef(null);w.useEffect(()=>{m.connect()&&X(!0);const re=ge.current;if(!re)return;const ae=he=>he.preventDefault();return re.addEventListener("contextmenu",ae),()=>re.removeEventListener("contextmenu",ae)},[]);const ze=m.subscribeToMasks(ne=>{if(ne?.error){st.notifyError(`Segmentation failed. Please try again.
${ne.error}`),de("idle"),r(!1);return}else if(ne?.masks&&ne?.boxes){const re=D(ne.masks);pe(ne.boxes),g(re)}else{const re=D(ne.masks);g(re)}de("completed"),r(!1)});w.useEffect(()=>()=>{ze()}),w.useEffect(()=>{if(!e||!ge.current)return;const ne=new Image;ne.src=e,ne.onload=()=>{const re=ge.current;re.width=ne.width,re.height=ne.height;const ae=re.getContext("2d",{willReadFrequently:!0});ae.clearRect(0,0,re.width,re.height),ae.drawImage(ne,0,0,re.width,re.height),l(ne)}},[e]),w.useEffect(()=>{if(!p.length)return;const ne=[],re=[];p.forEach(ae=>{const he=ae.length,Oe=ae[0].length,Ae=document.createElement("canvas");Ae.width=Oe,Ae.height=he;const ke=Ae.getContext("2d",{willReadFrequently:!0}),Me=ke.createImageData(Oe,he);for(let Ct=0;Ct<he;Ct++)for(let jt=0;jt<Oe;jt++){const an=(Ct*Oe+jt)*4;ae[Ct][jt]===1?(Me.data[an]=0,Me.data[an+1]=150,Me.data[an+2]=255,Me.data[an+3]=100):Me.data[an+3]=0}ke.putImageData(Me,0,0),ne.push(Ae);const ut=document.createElement("canvas");ut.width=Oe,ut.height=he;const Tt=ut.getContext("2d",{willReadFrequently:!0}),nn=Tt.createImageData(Oe,he);for(let Ct=0;Ct<he;Ct++)for(let jt=0;jt<Oe;jt++)if(ae[Ct][jt]===1&&[ae[Ct-1]?.[jt]||0,ae[Ct+1]?.[jt]||0,ae[Ct]?.[jt-1]||0,ae[Ct]?.[jt+1]||0].some(wn=>wn===0)){const wn=(Ct*Oe+jt)*4;nn.data[wn]=255,nn.data[wn+1]=105,nn.data[wn+2]=180,nn.data[wn+3]=255}Tt.putImageData(nn,0,0),re.push(ut)}),v(ne),S(re)},[p]);const D=ne=>{if(!Array.isArray(ne)||ne.length===0)return[];const re=ne.length,ae=ne[0].length;let he=0;for(let Ae=0;Ae<re;Ae++)for(let ke=0;ke<ae;ke++)he=Math.max(he,ne[Ae][ke]);const Oe=Array.from({length:he},()=>Array.from({length:re},()=>Array(ae).fill(0)));for(let Ae=0;Ae<re;Ae++)for(let ke=0;ke<ae;ke++){const Me=ne[Ae][ke];Me>0&&(Oe[Me-1][Ae][ke]=1)}return Oe},_=async()=>{if(!e)return;de("uploading"),r(!0);const ne=await fetch(e).then(he=>he.blob()),re=new File([ne],"photo.jpg",{type:ne.type||"image/jpeg"}),ae=new FormData;ae.append("image",re),await m.segment(ae).then(he=>{he?.error?(st.notifyError(`Segmentation failed: ${he.error}`),de("idle"),r(!1)):de("segmenting")}).catch(he=>{st.notifyError(`Segmentation failed. Please try again.
${he}`),r(!1),de("idle")})},I=()=>{let ne=se,re=se,ae=[];return q.length>0&&ne.filter(he=>{q.forEach(Oe=>{if(Oe[0]>he[0]&&Oe[0]<he[2]&&Oe[1]<he[1]&&Oe[1]>he[3])return!0})}),A.length>0&&re.filter(he=>{A.forEach(Oe=>{if(Oe[0]>he[0]&&Oe[0]<he[2]&&Oe[1]<he[1]&&Oe[1]>he[3])return!0})}),ae=ne,re.forEach(he=>{ae.includes(he)||ae.push(he)}),ae};function oe(ne){return ne.map(re=>re.map(ae=>Math.round(ae)))}const ue=async()=>{if(!e)return;if(q.length===0&&A.length===0){st.notifyError("Please provide selected or deselected points for re-segmentation.");return}de("uploading"),r(!0);const ne=await fetch(e).then(ae=>ae.blob());new File([ne],"photo.jpg",{type:ne.type||"image/jpeg"});const re={pos_points:oe(q),neg_points:oe(A),boxes:I()};await m.resegment(re).then(ae=>{if(ae.ok)de("segmenting");else return ae.json()}).then(ae=>{ae&&ae.error&&(st.notifyError(`Segmentation failed: ${ae.error}`),de("idle"),r(!1))}).catch(ae=>{st.notifyError(`Segmentation failed. Please try again.
${ae}`),r(!1),de("idle")})},k=ne=>{const re=ge.current;if(!re||!y.length)return;const ae=re.getBoundingClientRect(),he=(ne.clientX-ae.left)/ae.width*re.width,Oe=(ne.clientY-ae.top)/ae.height*re.height;let Ae=null;for(let ke=y.length-1;ke>=0;ke--){const Me=y[ke].getContext("2d",{willReadFrequently:!0}),ut=Math.floor(he*y[ke].width/re.width),Tt=Math.floor(Oe*y[ke].height/re.height);if(Me.getImageData(ut,Tt,1,1).data[3]>0){Ae=ke;break}}C(Ae)},K=(ne,re)=>{const ae=ge.current;if(!ae||!y.length)return;const he=ae.getBoundingClientRect(),Oe=(ne.clientX-he.left)/he.width*ae.width,Ae=(ne.clientY-he.top)/he.height*ae.height;let ke=null;for(let Me=y.length-1;Me>=0;Me--){const ut=y[Me].getContext("2d",{willReadFrequently:!0}),Tt=Math.floor(Oe*y[Me].width/ae.width),nn=Math.floor(Ae*y[Me].height/ae.height);if(ut.getImageData(Tt,nn,1,1).data[3]>0){ke=Me;break}}ke!==null&&(re==="add"?T.includes(ke)||(M([...T,ke]),u(Me=>[...Me,p[ke]]),H(Me=>[...Me,[Oe,Ae]])):(M(T.filter(Me=>Me!==ke)),u(Me=>Me.filter(ut=>ut!==p[ke])),$(Me=>[...Me,[Oe,Ae]])))},te=ne=>K(ne,"add"),le=ne=>K(ne,"remove"),ye=()=>{const ne=ge.current;if(!ne||!o)return;const re=ne.getContext("2d",{willReadFrequently:!0});re.clearRect(0,0,ne.width,ne.height),re.imageSmoothingEnabled=!1,re.globalAlpha=1,re.drawImage(o,0,0,ne.width,ne.height);const ae=(Ae,ke,Me)=>{const ut=document.createElement("canvas");ut.width=Ae.width,ut.height=Ae.height;const Tt=ut.getContext("2d",{willReadFrequently:!0});Tt.drawImage(Ae,0,0),Tt.globalCompositeOperation="source-in",Tt.fillStyle=ke,Tt.globalAlpha=Me,Tt.fillRect(0,0,ut.width,ut.height),re.drawImage(ut,0,0,ne.width,ne.height)};y.forEach((Ae,ke)=>{!T.includes(ke)&&j!==ke&&ae(Ae,"rgba(0,150,255,1)",.5)}),j!==null&&!T.includes(j)&&ae(y[j],"rgba(255,105,180,1)",.6);let he=["#00ffd5","#fc218f","#ff0000","#4a4902","#ff0000"],Oe=0;T.forEach(Ae=>{ae(y[Ae],he[Oe%he.length],.95);const ke=b[Ae];ke&&re.drawImage(ke,0,0,ne.width,ne.height),Oe++}),q.forEach(([Ae,ke])=>{re.beginPath(),re.arc(Ae,ke,12,0,2*Math.PI),re.fillStyle="rgba(255,105,180,1)",re.fill()}),A.forEach(([Ae,ke])=>{re.beginPath(),re.arc(Ae,ke,12,0,2*Math.PI),re.fillStyle="rgba(0,150,255,1)",re.fill()})};w.useEffect(()=>{ye()},[j,T,y,b,o,q,A]);const Ee=()=>{if(T.length>1){st.notifyError("You must select just one segment to search for!");return}d(!0)};return h.jsxs("div",{style:{position:"relative",width:"100%",textAlign:"center",animation:"fadeIn 0.5s"},children:[P?h.jsxs(S1,{children:[h.jsx(Pi,{size:50,color:"#fff"}),h.jsx("p",{children:"Connecting to segmentation server..."})]}):h.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[h.jsx(U3,{ref:ge,onClick:z==="add"?te:le,onContextMenu:T.length?le:te,onMouseMove:k,onMouseLeave:()=>C(null),$imageURL:e,$loading:a}),a&&h.jsx(S1,{children:h.jsxs(V3,{children:[h.jsx(Pi,{size:50,color:"#fff"}),Ne==="uploading"&&h.jsx("p",{children:"Uploading image..."}),Ne==="segmenting"&&h.jsx("p",{children:"Segmenting image, please wait..."}),h.jsx(E1,{onClick:()=>{r(!1),m.endSession(),de("idle")},$bgColor:"orange",$bgColorHover:"red",children:"Cancel"})]})})]}),h.jsxs("div",{style:{marginTop:10},children:[p.length===0?h.jsx(x1,{processImage:_,isDisabled:!e||a,name:"Segment"}):h.jsx(x1,{processImage:ue,isDisabled:!e||a,name:"Re-segment"}),T.length!==0&&h.jsx(E1,{onClick:Ee,$bgColor:"rgba(255,105,180,1)",$marginLeft:"1rem",children:"Send Selected"})]}),h.jsx("div",{style:{marginTop:10,opacity:p.length===0?"0":"1",transition:"all 1s"},children:h.jsx(R3,{disabled:T.length===0,mode:z,setMode:N})})]})}const Uw=ct`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,U3=R.canvas`
  display: ${e=>e.$imageURL?"block":"none"};
  border: none;
  max-width: 100%;
  filter: ${e=>e.$loading?"blur(20px)":"none"};
  animation: ${Uw} 1.5s;
`,S1=R.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--text-color);
`,E1=R.button`
  background: ${e=>e?.$bgColor||"white"};
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 2rem;
  margin-left: ${e=>e?.$marginLeft||"0rem"};
  animation: ${Uw} 0.5s;

  &:hover {
    background-color: ${e=>e?.$bgColorHover||"#6BCB77"};
  }
`,V3=R.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--linear-gradiant-bg);
  opacity: 75%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
`,Vw=w.createContext({});function ap(e){const a=w.useRef(null);return a.current===null&&(a.current=e()),a.current}const ip=typeof window<"u",Bw=ip?w.useLayoutEffect:w.useEffect,rp=w.createContext(null);function op(e,a){e.indexOf(a)===-1&&e.push(a)}function Ju(e,a){const r=e.indexOf(a);r>-1&&e.splice(r,1)}const ti=(e,a,r)=>r>a?a:r<e?e:r;let sp=()=>{};const ni={},Hw=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function $w(e){return typeof e=="object"&&e!==null}const Pw=e=>/^0[^.\s]+$/u.test(e);function lp(e){let a;return()=>(a===void 0&&(a=e()),a)}const Jn=e=>e,B3=(e,a)=>r=>a(e(r)),Ml=(...e)=>e.reduce(B3),Uo=(e,a,r)=>{const o=a-e;return o===0?1:(r-e)/o};class cp{constructor(){this.subscriptions=[]}add(a){return op(this.subscriptions,a),()=>Ju(this.subscriptions,a)}notify(a,r,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](a,r,o);else for(let u=0;u<l;u++){const d=this.subscriptions[u];d&&d(a,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fa=e=>e*1e3,Wn=e=>e/1e3;function Fw(e,a){return a?e*(1e3/a):0}const H3=(e,a,r)=>{const o=a-e;return((r-e)%o+o)%o+e},Yw=(e,a,r)=>(((1-3*r+3*a)*e+(3*r-6*a))*e+3*a)*e,$3=1e-7,P3=12;function F3(e,a,r,o,l){let u,d,m=0;do d=a+(r-a)/2,u=Yw(d,o,l)-e,u>0?r=d:a=d;while(Math.abs(u)>$3&&++m<P3);return d}function Dl(e,a,r,o){if(e===a&&r===o)return Jn;const l=u=>F3(u,0,1,e,r);return u=>u===0||u===1?u:Yw(l(u),a,o)}const Gw=e=>a=>a<=.5?e(2*a)/2:(2-e(2*(1-a)))/2,Xw=e=>a=>1-e(1-a),qw=Dl(.33,1.53,.69,.99),up=Xw(qw),Iw=Gw(up),Kw=e=>(e*=2)<1?.5*up(e):.5*(2-Math.pow(2,-10*(e-1))),dp=e=>1-Math.sin(Math.acos(e)),Qw=Xw(dp),Zw=Gw(dp),Y3=Dl(.42,0,1,1),G3=Dl(0,0,.58,1),Ww=Dl(.42,0,.58,1),Jw=e=>Array.isArray(e)&&typeof e[0]!="number";function eS(e,a){return Jw(e)?e[H3(0,e.length,a)]:e}const tS=e=>Array.isArray(e)&&typeof e[0]=="number",X3={linear:Jn,easeIn:Y3,easeInOut:Ww,easeOut:G3,circIn:dp,circInOut:Zw,circOut:Qw,backIn:up,backInOut:Iw,backOut:qw,anticipate:Kw},q3=e=>typeof e=="string",T1=e=>{if(tS(e)){sp(e.length===4);const[a,r,o,l]=e;return Dl(a,r,o,l)}else if(q3(e))return X3[e];return e},tu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function I3(e,a){let r=new Set,o=new Set,l=!1,u=!1;const d=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),e()),y(m)}const g={schedule:(y,v=!1,b=!1)=>{const T=b&&l?r:o;return v&&d.add(y),T.has(y)||T.add(y),y},cancel:y=>{o.delete(y),d.delete(y)},process:y=>{if(m=y,l){u=!0;return}l=!0,[r,o]=[o,r],r.forEach(p),r.clear(),l=!1,u&&(u=!1,g.process(y))}};return g}const K3=40;function nS(e,a){let r=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,d=tu.reduce((N,q)=>(N[q]=I3(u),N),{}),{setup:m,read:p,resolveKeyframes:g,preUpdate:y,update:v,preRender:b,render:S,postRender:T}=d,M=()=>{const N=ni.useManualTiming?l.timestamp:performance.now();r=!1,ni.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(N-l.timestamp,K3),1)),l.timestamp=N,l.isProcessing=!0,m.process(l),p.process(l),g.process(l),y.process(l),v.process(l),b.process(l),S.process(l),T.process(l),l.isProcessing=!1,r&&a&&(o=!1,e(M))},j=()=>{r=!0,o=!0,l.isProcessing||e(M)};return{schedule:tu.reduce((N,q)=>{const H=d[q];return N[q]=(A,$=!1,P=!1)=>(r||j(),H.schedule(A,$,P)),N},{}),cancel:N=>{for(let q=0;q<tu.length;q++)d[tu[q]].cancel(N)},state:l,steps:d}}const{schedule:pt,cancel:ai,state:Wt,steps:Rh}=nS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Jn,!0);let bu;function Q3(){bu=void 0}const vn={now:()=>(bu===void 0&&vn.set(Wt.isProcessing||ni.useManualTiming?Wt.timestamp:performance.now()),bu),set:e=>{bu=e,queueMicrotask(Q3)}},aS=e=>a=>typeof a=="string"&&a.startsWith(e),fp=aS("--"),Z3=aS("var(--"),hp=e=>Z3(e)?W3.test(e.split("/*")[0].trim()):!1,W3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$o={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},fl={...$o,transform:e=>ti(0,1,e)},nu={...$o,default:1},Js=e=>Math.round(e*1e5)/1e5,mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function J3(e){return e==null}const eR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pp=(e,a)=>r=>!!(typeof r=="string"&&eR.test(r)&&r.startsWith(e)||a&&!J3(r)&&Object.prototype.hasOwnProperty.call(r,a)),iS=(e,a,r)=>o=>{if(typeof o!="string")return o;const[l,u,d,m]=o.match(mp);return{[e]:parseFloat(l),[a]:parseFloat(u),[r]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},tR=e=>ti(0,255,e),Mh={...$o,transform:e=>Math.round(tR(e))},jr={test:pp("rgb","red"),parse:iS("red","green","blue"),transform:({red:e,green:a,blue:r,alpha:o=1})=>"rgba("+Mh.transform(e)+", "+Mh.transform(a)+", "+Mh.transform(r)+", "+Js(fl.transform(o))+")"};function nR(e){let a="",r="",o="",l="";return e.length>5?(a=e.substring(1,3),r=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(a=e.substring(1,2),r=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),a+=a,r+=r,o+=o,l+=l),{red:parseInt(a,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const mm={test:pp("#"),parse:nR,transform:jr.transform},zl=e=>({test:a=>typeof a=="string"&&a.endsWith(e)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${e}`}),Bi=zl("deg"),Aa=zl("%"),Le=zl("px"),aR=zl("vh"),iR=zl("vw"),C1={...Aa,parse:e=>Aa.parse(e)/100,transform:e=>Aa.transform(e*100)},Co={test:pp("hsl","hue"),parse:iS("hue","saturation","lightness"),transform:({hue:e,saturation:a,lightness:r,alpha:o=1})=>"hsla("+Math.round(e)+", "+Aa.transform(Js(a))+", "+Aa.transform(Js(r))+", "+Js(fl.transform(o))+")"},Nt={test:e=>jr.test(e)||mm.test(e)||Co.test(e),parse:e=>jr.test(e)?jr.parse(e):Co.test(e)?Co.parse(e):mm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?jr.transform(e):Co.transform(e),getAnimatableNone:e=>{const a=Nt.parse(e);return a.alpha=0,Nt.transform(a)}},rR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function oR(e){return isNaN(e)&&typeof e=="string"&&(e.match(mp)?.length||0)+(e.match(rR)?.length||0)>0}const rS="number",oS="color",sR="var",lR="var(",j1="${}",cR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hl(e){const a=e.toString(),r=[],o={color:[],number:[],var:[]},l=[];let u=0;const m=a.replace(cR,p=>(Nt.test(p)?(o.color.push(u),l.push(oS),r.push(Nt.parse(p))):p.startsWith(lR)?(o.var.push(u),l.push(sR),r.push(p)):(o.number.push(u),l.push(rS),r.push(parseFloat(p))),++u,j1)).split(j1);return{values:r,split:m,indexes:o,types:l}}function sS(e){return hl(e).values}function lS(e){const{split:a,types:r}=hl(e),o=a.length;return l=>{let u="";for(let d=0;d<o;d++)if(u+=a[d],l[d]!==void 0){const m=r[d];m===rS?u+=Js(l[d]):m===oS?u+=Nt.transform(l[d]):u+=l[d]}return u}}const uR=e=>typeof e=="number"?0:Nt.test(e)?Nt.getAnimatableNone(e):e;function dR(e){const a=sS(e);return lS(e)(a.map(uR))}const Gi={test:oR,parse:sS,createTransformer:lS,getAnimatableNone:dR};function Dh(e,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(a-e)*6*r:r<1/2?a:r<2/3?e+(a-e)*(2/3-r)*6:e}function fR({hue:e,saturation:a,lightness:r,alpha:o}){e/=360,a/=100,r/=100;let l=0,u=0,d=0;if(!a)l=u=d=r;else{const m=r<.5?r*(1+a):r+a-r*a,p=2*r-m;l=Dh(p,m,e+1/3),u=Dh(p,m,e),d=Dh(p,m,e-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(d*255),alpha:o}}function Lu(e,a){return r=>r>0?a:e}const xt=(e,a,r)=>e+(a-e)*r,zh=(e,a,r)=>{const o=e*e,l=r*(a*a-o)+o;return l<0?0:Math.sqrt(l)},hR=[mm,jr,Co],mR=e=>hR.find(a=>a.test(e));function A1(e){const a=mR(e);if(!a)return!1;let r=a.parse(e);return a===Co&&(r=fR(r)),r}const R1=(e,a)=>{const r=A1(e),o=A1(a);if(!r||!o)return Lu(e,a);const l={...r};return u=>(l.red=zh(r.red,o.red,u),l.green=zh(r.green,o.green,u),l.blue=zh(r.blue,o.blue,u),l.alpha=xt(r.alpha,o.alpha,u),jr.transform(l))},pm=new Set(["none","hidden"]);function pR(e,a){return pm.has(e)?r=>r<=0?e:a:r=>r>=1?a:e}function gR(e,a){return r=>xt(e,a,r)}function gp(e){return typeof e=="number"?gR:typeof e=="string"?hp(e)?Lu:Nt.test(e)?R1:xR:Array.isArray(e)?cS:typeof e=="object"?Nt.test(e)?R1:yR:Lu}function cS(e,a){const r=[...e],o=r.length,l=e.map((u,d)=>gp(u)(u,a[d]));return u=>{for(let d=0;d<o;d++)r[d]=l[d](u);return r}}function yR(e,a){const r={...e,...a},o={};for(const l in r)e[l]!==void 0&&a[l]!==void 0&&(o[l]=gp(e[l])(e[l],a[l]));return l=>{for(const u in o)r[u]=o[u](l);return r}}function vR(e,a){const r=[],o={color:0,var:0,number:0};for(let l=0;l<a.values.length;l++){const u=a.types[l],d=e.indexes[u][o[u]],m=e.values[d]??0;r[l]=m,o[u]++}return r}const xR=(e,a)=>{const r=Gi.createTransformer(a),o=hl(e),l=hl(a);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?pm.has(e)&&!l.values.length||pm.has(a)&&!o.values.length?pR(e,a):Ml(cS(vR(o,l),l.values),r):Lu(e,a)};function uS(e,a,r){return typeof e=="number"&&typeof a=="number"&&typeof r=="number"?xt(e,a,r):gp(e)(e,a)}const bR=e=>{const a=({timestamp:r})=>e(r);return{start:(r=!0)=>pt.update(a,r),stop:()=>ai(a),now:()=>Wt.isProcessing?Wt.timestamp:vn.now()}},dS=(e,a,r=10)=>{let o="";const l=Math.max(Math.round(a/r),2);for(let u=0;u<l;u++)o+=Math.round(e(u/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Nu=2e4;function yp(e){let a=0;const r=50;let o=e.next(a);for(;!o.done&&a<Nu;)a+=r,o=e.next(a);return a>=Nu?1/0:a}function fS(e,a=100,r){const o=r({...e,keyframes:[0,a]}),l=Math.min(yp(o),Nu);return{type:"keyframes",ease:u=>o.next(l*u).value/a,duration:Wn(l)}}const wR=5;function hS(e,a,r){const o=Math.max(a-wR,0);return Fw(r-e(o),a-o)}const Et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Oh=.001;function SR({duration:e=Et.duration,bounce:a=Et.bounce,velocity:r=Et.velocity,mass:o=Et.mass}){let l,u,d=1-a;d=ti(Et.minDamping,Et.maxDamping,d),e=ti(Et.minDuration,Et.maxDuration,Wn(e)),d<1?(l=g=>{const y=g*d,v=y*e,b=y-r,S=gm(g,d),T=Math.exp(-v);return Oh-b/S*T},u=g=>{const v=g*d*e,b=v*r+r,S=Math.pow(d,2)*Math.pow(g,2)*e,T=Math.exp(-v),M=gm(Math.pow(g,2),d);return(-l(g)+Oh>0?-1:1)*((b-S)*T)/M}):(l=g=>{const y=Math.exp(-g*e),v=(g-r)*e+1;return-Oh+y*v},u=g=>{const y=Math.exp(-g*e),v=(r-g)*(e*e);return y*v});const m=5/e,p=TR(l,u,m);if(e=fa(e),isNaN(p))return{stiffness:Et.stiffness,damping:Et.damping,duration:e};{const g=Math.pow(p,2)*o;return{stiffness:g,damping:d*2*Math.sqrt(o*g),duration:e}}}const ER=12;function TR(e,a,r){let o=r;for(let l=1;l<ER;l++)o=o-e(o)/a(o);return o}function gm(e,a){return e*Math.sqrt(1-a*a)}const CR=["duration","bounce"],jR=["stiffness","damping","mass"];function M1(e,a){return a.some(r=>e[r]!==void 0)}function AR(e){let a={velocity:Et.velocity,stiffness:Et.stiffness,damping:Et.damping,mass:Et.mass,isResolvedFromDuration:!1,...e};if(!M1(e,jR)&&M1(e,CR))if(e.visualDuration){const r=e.visualDuration,o=2*Math.PI/(r*1.2),l=o*o,u=2*ti(.05,1,1-(e.bounce||0))*Math.sqrt(l);a={...a,mass:Et.mass,stiffness:l,damping:u}}else{const r=SR(e);a={...a,...r,mass:Et.mass},a.isResolvedFromDuration=!0}return a}function ml(e=Et.visualDuration,a=Et.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:a}:e;let{restSpeed:o,restDelta:l}=r;const u=r.keyframes[0],d=r.keyframes[r.keyframes.length-1],m={done:!1,value:u},{stiffness:p,damping:g,mass:y,duration:v,velocity:b,isResolvedFromDuration:S}=AR({...r,velocity:-Wn(r.velocity||0)}),T=b||0,M=g/(2*Math.sqrt(p*y)),j=d-u,C=Wn(Math.sqrt(p/y)),z=Math.abs(j)<5;o||(o=z?Et.restSpeed.granular:Et.restSpeed.default),l||(l=z?Et.restDelta.granular:Et.restDelta.default);let N;if(M<1){const H=gm(C,M);N=A=>{const $=Math.exp(-M*C*A);return d-$*((T+M*C*j)/H*Math.sin(H*A)+j*Math.cos(H*A))}}else if(M===1)N=H=>d-Math.exp(-C*H)*(j+(T+C*j)*H);else{const H=C*Math.sqrt(M*M-1);N=A=>{const $=Math.exp(-M*C*A),P=Math.min(H*A,300);return d-$*((T+M*C*j)*Math.sinh(P)+H*j*Math.cosh(P))/H}}const q={calculatedDuration:S&&v||null,next:H=>{const A=N(H);if(S)m.done=H>=v;else{let $=H===0?T:0;M<1&&($=H===0?fa(T):hS(N,H,A));const P=Math.abs($)<=o,X=Math.abs(d-A)<=l;m.done=P&&X}return m.value=m.done?d:A,m},toString:()=>{const H=Math.min(yp(q),Nu),A=dS($=>q.next(H*$).value,H,30);return H+"ms "+A},toTransition:()=>{}};return q}ml.applyToOptions=e=>{const a=fS(e,100,ml);return e.ease=a.ease,e.duration=fa(a.duration),e.type="keyframes",e};function ym({keyframes:e,velocity:a=0,power:r=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:d,min:m,max:p,restDelta:g=.5,restSpeed:y}){const v=e[0],b={done:!1,value:v},S=P=>m!==void 0&&P<m||p!==void 0&&P>p,T=P=>m===void 0?p:p===void 0||Math.abs(m-P)<Math.abs(p-P)?m:p;let M=r*a;const j=v+M,C=d===void 0?j:d(j);C!==j&&(M=C-v);const z=P=>-M*Math.exp(-P/o),N=P=>C+z(P),q=P=>{const X=z(P),se=N(P);b.done=Math.abs(X)<=g,b.value=b.done?C:se};let H,A;const $=P=>{S(b.value)&&(H=P,A=ml({keyframes:[b.value,T(b.value)],velocity:hS(N,P,b.value),damping:l,stiffness:u,restDelta:g,restSpeed:y}))};return $(0),{calculatedDuration:null,next:P=>{let X=!1;return!A&&H===void 0&&(X=!0,q(P),$(P)),H!==void 0&&P>=H?A.next(P-H):(!X&&q(P),b)}}}function RR(e,a,r){const o=[],l=r||ni.mix||uS,u=e.length-1;for(let d=0;d<u;d++){let m=l(e[d],e[d+1]);if(a){const p=Array.isArray(a)?a[d]||Jn:a;m=Ml(p,m)}o.push(m)}return o}function mS(e,a,{clamp:r=!0,ease:o,mixer:l}={}){const u=e.length;if(sp(u===a.length),u===1)return()=>a[0];if(u===2&&a[0]===a[1])return()=>a[1];const d=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),a=[...a].reverse());const m=RR(a,o,l),p=m.length,g=y=>{if(d&&y<e[0])return a[0];let v=0;if(p>1)for(;v<e.length-2&&!(y<e[v+1]);v++);const b=Uo(e[v],e[v+1],y);return m[v](b)};return r?y=>g(ti(e[0],e[u-1],y)):g}function pS(e,a){const r=e[e.length-1];for(let o=1;o<=a;o++){const l=Uo(0,a,o);e.push(xt(r,1,l))}}function gS(e){const a=[0];return pS(a,e.length-1),a}function MR(e,a){return e.map(r=>r*a)}function DR(e,a){return e.map(()=>a||Ww).splice(0,e.length-1)}function el({duration:e=300,keyframes:a,times:r,ease:o="easeInOut"}){const l=Jw(o)?o.map(T1):T1(o),u={done:!1,value:a[0]},d=MR(r&&r.length===a.length?r:gS(a),e),m=mS(d,a,{ease:Array.isArray(l)?l:DR(a,l)});return{calculatedDuration:e,next:p=>(u.value=m(p),u.done=p>=e,u)}}const zR=e=>e!==null;function vp(e,{repeat:a,repeatType:r="loop"},o,l=1){const u=e.filter(zR),m=l<0||a&&r!=="loop"&&a%2===1?0:u.length-1;return!m||o===void 0?u[m]:o}const OR={decay:ym,inertia:ym,tween:el,keyframes:el,spring:ml};function yS(e){typeof e.type=="string"&&(e.type=OR[e.type])}class xp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,r){return this.finished.then(a,r)}}const kR=e=>e/100;class bp extends xp{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==vn.now()&&this.tick(vn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;yS(a);const{type:r=el,repeat:o=0,repeatDelay:l=0,repeatType:u,velocity:d=0}=a;let{keyframes:m}=a;const p=r||el;p!==el&&typeof m[0]!="number"&&(this.mixKeyframes=Ml(kR,uS(m[0],m[1])),m=[0,100]);const g=p({...a,keyframes:m});u==="mirror"&&(this.mirroredGenerator=p({...a,keyframes:[...m].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=yp(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=g}updateTime(a){const r=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(a,r=!1){const{generator:o,totalDuration:l,mixKeyframes:u,mirroredGenerator:d,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:b,repeatDelay:S,type:T,onUpdate:M,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-l/this.speed,this.startTime)),r?this.currentTime=a:this.updateTime(a);const C=this.currentTime-g*(this.playbackSpeed>=0?1:-1),z=this.playbackSpeed>=0?C<0:C>l;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let N=this.currentTime,q=o;if(v){const P=Math.min(this.currentTime,l)/m;let X=Math.floor(P),se=P%1;!se&&P>=1&&(se=1),se===1&&X--,X=Math.min(X,v+1),!!(X%2)&&(b==="reverse"?(se=1-se,S&&(se-=S/m)):b==="mirror"&&(q=d)),N=ti(0,1,se)*m}const H=z?{done:!1,value:y[0]}:q.next(N);u&&(H.value=u(H.value));let{done:A}=H;!z&&p!==null&&(A=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return $&&T!==ym&&(H.value=vp(y,this.options,j,this.speed)),M&&M(H.value),$&&this.finish(),H}then(a,r){return this.finished.then(a,r)}get duration(){return Wn(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Wn(a)}get time(){return Wn(this.currentTime)}set time(a){a=fa(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(vn.now());const r=this.playbackSpeed!==a;this.playbackSpeed=a,r&&(this.time=Wn(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=bR,startTime:r}=this.options;this.driver||(this.driver=a(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(vn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function LR(e){for(let a=1;a<e.length;a++)e[a]??(e[a]=e[a-1])}const Ar=e=>e*180/Math.PI,vm=e=>{const a=Ar(Math.atan2(e[1],e[0]));return xm(a)},NR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:vm,rotateZ:vm,skewX:e=>Ar(Math.atan(e[1])),skewY:e=>Ar(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},xm=e=>(e=e%360,e<0&&(e+=360),e),D1=vm,z1=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),O1=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),_R={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:z1,scaleY:O1,scale:e=>(z1(e)+O1(e))/2,rotateX:e=>xm(Ar(Math.atan2(e[6],e[5]))),rotateY:e=>xm(Ar(Math.atan2(-e[2],e[0]))),rotateZ:D1,rotate:D1,skewX:e=>Ar(Math.atan(e[4])),skewY:e=>Ar(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function bm(e){return e.includes("scale")?1:0}function wm(e,a){if(!e||e==="none")return bm(a);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(r)o=_R,l=r;else{const m=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=NR,l=m}if(!l)return bm(a);const u=o[a],d=l[1].split(",").map(VR);return typeof u=="function"?u(d):d[u]}const UR=(e,a)=>{const{transform:r="none"}=getComputedStyle(e);return wm(r,a)};function VR(e){return parseFloat(e.trim())}const Po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fo=new Set(Po),k1=e=>e===$o||e===Le,BR=new Set(["x","y","z"]),HR=Po.filter(e=>!BR.has(e));function $R(e){const a=[];return HR.forEach(r=>{const o=e.getValue(r);o!==void 0&&(a.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),a}const Dr={width:({x:e},{paddingLeft:a="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(a)-parseFloat(r),height:({y:e},{paddingTop:a="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(a)-parseFloat(r),top:(e,{top:a})=>parseFloat(a),left:(e,{left:a})=>parseFloat(a),bottom:({y:e},{top:a})=>parseFloat(a)+(e.max-e.min),right:({x:e},{left:a})=>parseFloat(a)+(e.max-e.min),x:(e,{transform:a})=>wm(a,"x"),y:(e,{transform:a})=>wm(a,"y")};Dr.translateX=Dr.x;Dr.translateY=Dr.y;const zr=new Set;let Sm=!1,Em=!1,Tm=!1;function vS(){if(Em){const e=Array.from(zr).filter(o=>o.needsMeasurement),a=new Set(e.map(o=>o.element)),r=new Map;a.forEach(o=>{const l=$R(o);l.length&&(r.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),a.forEach(o=>{o.render();const l=r.get(o);l&&l.forEach(([u,d])=>{o.getValue(u)?.set(d)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Em=!1,Sm=!1,zr.forEach(e=>e.complete(Tm)),zr.clear()}function xS(){zr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Em=!0)})}function PR(){Tm=!0,xS(),vS(),Tm=!1}class wp{constructor(a,r,o,l,u,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=r,this.name=o,this.motionValue=l,this.element=u,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(zr.add(this),Sm||(Sm=!0,pt.read(xS),pt.resolveKeyframes(vS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:r,element:o,motionValue:l}=this;if(a[0]===null){const u=l?.get(),d=a[a.length-1];if(u!==void 0)a[0]=u;else if(o&&r){const m=o.readValue(r,d);m!=null&&(a[0]=m)}a[0]===void 0&&(a[0]=d),l&&u===void 0&&l.set(a[0])}LR(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),zr.delete(this)}cancel(){this.state==="scheduled"&&(zr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const FR=e=>e.startsWith("--");function YR(e,a,r){FR(a)?e.style.setProperty(a,r):e.style[a]=r}const GR=lp(()=>window.ScrollTimeline!==void 0),XR={};function qR(e,a){const r=lp(e);return()=>XR[a]??r()}const bS=qR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qs=([e,a,r,o])=>`cubic-bezier(${e}, ${a}, ${r}, ${o})`,L1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qs([0,.65,.55,1]),circOut:Qs([.55,0,1,.45]),backIn:Qs([.31,.01,.66,-.59]),backOut:Qs([.33,1.53,.69,.99])};function wS(e,a){if(e)return typeof e=="function"?bS()?dS(e,a):"ease-out":tS(e)?Qs(e):Array.isArray(e)?e.map(r=>wS(r,a)||L1.easeOut):L1[e]}function IR(e,a,r,{delay:o=0,duration:l=300,repeat:u=0,repeatType:d="loop",ease:m="easeOut",times:p}={},g=void 0){const y={[a]:r};p&&(y.offset=p);const v=wS(m,l);Array.isArray(v)&&(y.easing=v);const b={delay:o,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:u+1,direction:d==="reverse"?"alternate":"normal"};return g&&(b.pseudoElement=g),e.animate(y,b)}function Sp(e){return typeof e=="function"&&"applyToOptions"in e}function KR({type:e,...a}){return Sp(e)&&bS()?e.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class QR extends xp{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:r,name:o,keyframes:l,pseudoElement:u,allowFlatten:d=!1,finalKeyframe:m,onComplete:p}=a;this.isPseudoElement=!!u,this.allowFlatten=d,this.options=a,sp(typeof a.type!="string");const g=KR(a);this.animation=IR(r,o,l,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const y=vp(l,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(y):YR(r,o,y),this.animation.cancel()}p?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return Wn(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Wn(a)}get time(){return Wn(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=fa(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&GR()?(this.animation.timeline=a,Jn):r(this)}}const SS={anticipate:Kw,backInOut:Iw,circInOut:Zw};function ZR(e){return e in SS}function WR(e){typeof e.ease=="string"&&ZR(e.ease)&&(e.ease=SS[e.ease])}const N1=10;class JR extends QR{constructor(a){WR(a),yS(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:r,onUpdate:o,onComplete:l,element:u,...d}=this.options;if(!r)return;if(a!==void 0){r.set(a);return}const m=new bp({...d,autoplay:!1}),p=fa(this.finishedTime??this.time);r.setWithVelocity(m.sample(p-N1).value,m.sample(p).value,N1),m.stop()}}const _1=(e,a)=>a==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Gi.test(e)||e==="0")&&!e.startsWith("url("));function e4(e){const a=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==a)return!0}function t4(e,a,r,o){const l=e[0];if(l===null)return!1;if(a==="display"||a==="visibility")return!0;const u=e[e.length-1],d=_1(l,a),m=_1(u,a);return!d||!m?!1:e4(e)||(r==="spring"||Sp(r))&&o}function Cm(e){e.duration=0,e.type="keyframes"}const n4=new Set(["opacity","clipPath","filter","transform"]),a4=lp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function i4(e){const{motionValue:a,name:r,repeatDelay:o,repeatType:l,damping:u,type:d}=e;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:g}=a.owner.getProps();return a4()&&r&&n4.has(r)&&(r!=="transform"||!g)&&!p&&!o&&l!=="mirror"&&u!==0&&d!=="inertia"}const r4=40;class o4 extends xp{constructor({autoplay:a=!0,delay:r=0,type:o="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:d="loop",keyframes:m,name:p,motionValue:g,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=vn.now();const b={autoplay:a,delay:r,type:o,repeat:l,repeatDelay:u,repeatType:d,name:p,motionValue:g,element:y,...v},S=y?.KeyframeResolver||wp;this.keyframeResolver=new S(m,(T,M,j)=>this.onKeyframesResolved(T,M,b,!j),p,g,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,r,o,l){this.keyframeResolver=void 0;const{name:u,type:d,velocity:m,delay:p,isHandoff:g,onUpdate:y}=o;this.resolvedAt=vn.now(),t4(a,u,d,m)||((ni.instantAnimations||!p)&&y?.(vp(a,o,r)),a[0]=a[a.length-1],Cm(o),o.repeat=0);const b={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>r4?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:a},S=!g&&i4(b)?new JR({...b,element:b.motionValue.owner.current}):new bp(b);S.finished.then(()=>this.notifyFinished()).catch(Jn),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(a,r){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),PR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}class s4{constructor(a){this.stop=()=>this.runAll("stop"),this.animations=a.filter(Boolean)}get finished(){return Promise.all(this.animations.map(a=>a.finished))}getAll(a){return this.animations[0][a]}setAll(a,r){for(let o=0;o<this.animations.length;o++)this.animations[o][a]=r}attachTimeline(a){const r=this.animations.map(o=>o.attachTimeline(a));return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(a){this.setAll("time",a)}get speed(){return this.getAll("speed")}set speed(a){this.setAll("speed",a)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return U1(this.animations,"duration")}get iterationDuration(){return U1(this.animations,"iterationDuration")}runAll(a){this.animations.forEach(r=>r[a]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function U1(e,a){let r=0;for(let o=0;o<e.length;o++){const l=e[o][a];l!==null&&l>r&&(r=l)}return r}class l4 extends s4{then(a,r){return this.finished.finally(a).then(()=>{})}}const c4=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function u4(e){const a=c4.exec(e);if(!a)return[,];const[,r,o,l]=a;return[`--${r??o}`,l]}function ES(e,a,r=1){const[o,l]=u4(e);if(!o)return;const u=window.getComputedStyle(a).getPropertyValue(o);if(u){const d=u.trim();return Hw(d)?parseFloat(d):d}return hp(l)?ES(l,a,r+1):l}function Ep(e,a){return e?.[a]??e?.default??e}const TS=new Set(["width","height","top","left","right","bottom",...Po]),d4={test:e=>e==="auto",parse:e=>e},CS=e=>a=>a.test(e),jS=[$o,Le,Aa,Bi,iR,aR,d4],V1=e=>jS.find(CS(e));function f4(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Pw(e):!0}const h4=new Set(["brightness","contrast","saturate","opacity"]);function m4(e){const[a,r]=e.slice(0,-1).split("(");if(a==="drop-shadow")return e;const[o]=r.match(mp)||[];if(!o)return e;const l=r.replace(o,"");let u=h4.has(a)?1:0;return o!==r&&(u*=100),a+"("+u+l+")"}const p4=/\b([a-z-]*)\(.*?\)/gu,jm={...Gi,getAnimatableNone:e=>{const a=e.match(p4);return a?a.map(m4).join(" "):e}},B1={...$o,transform:Math.round},g4={rotate:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scale:nu,scaleX:nu,scaleY:nu,scaleZ:nu,skew:Bi,skewX:Bi,skewY:Bi,distance:Le,translateX:Le,translateY:Le,translateZ:Le,x:Le,y:Le,z:Le,perspective:Le,transformPerspective:Le,opacity:fl,originX:C1,originY:C1,originZ:Le},Tp={borderWidth:Le,borderTopWidth:Le,borderRightWidth:Le,borderBottomWidth:Le,borderLeftWidth:Le,borderRadius:Le,radius:Le,borderTopLeftRadius:Le,borderTopRightRadius:Le,borderBottomRightRadius:Le,borderBottomLeftRadius:Le,width:Le,maxWidth:Le,height:Le,maxHeight:Le,top:Le,right:Le,bottom:Le,left:Le,padding:Le,paddingTop:Le,paddingRight:Le,paddingBottom:Le,paddingLeft:Le,margin:Le,marginTop:Le,marginRight:Le,marginBottom:Le,marginLeft:Le,backgroundPositionX:Le,backgroundPositionY:Le,...g4,zIndex:B1,fillOpacity:fl,strokeOpacity:fl,numOctaves:B1},y4={...Tp,color:Nt,backgroundColor:Nt,outlineColor:Nt,fill:Nt,stroke:Nt,borderColor:Nt,borderTopColor:Nt,borderRightColor:Nt,borderBottomColor:Nt,borderLeftColor:Nt,filter:jm,WebkitFilter:jm},AS=e=>y4[e];function RS(e,a){let r=AS(e);return r!==jm&&(r=Gi),r.getAnimatableNone?r.getAnimatableNone(a):void 0}const v4=new Set(["auto","none","0"]);function x4(e,a,r){let o=0,l;for(;o<e.length&&!l;){const u=e[o];typeof u=="string"&&!v4.has(u)&&hl(u).values.length&&(l=e[o]),o++}if(l&&r)for(const u of a)e[u]=RS(r,l)}class b4 extends wp{constructor(a,r,o,l,u){super(a,r,o,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let p=0;p<a.length;p++){let g=a[p];if(typeof g=="string"&&(g=g.trim(),hp(g))){const y=ES(g,r.current);y!==void 0&&(a[p]=y),p===a.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!TS.has(o)||a.length!==2)return;const[l,u]=a,d=V1(l),m=V1(u);if(d!==m)if(k1(d)&&k1(m))for(let p=0;p<a.length;p++){const g=a[p];typeof g=="string"&&(a[p]=parseFloat(g))}else Dr[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:r}=this,o=[];for(let l=0;l<a.length;l++)(a[l]===null||f4(a[l]))&&o.push(l);o.length&&x4(a,o,r)}measureInitialState(){const{element:a,unresolvedKeyframes:r,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Dr[o](a.measureViewportBox(),window.getComputedStyle(a.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&a.getValue(o,l).jump(l,!1)}measureEndState(){const{element:a,name:r,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const l=a.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,d=o[u];o[u]=Dr[r](a.measureViewportBox(),window.getComputedStyle(a.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,p])=>{a.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function MS(e,a,r){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const l=r?.[e]??o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}const DS=(e,a)=>a&&typeof e=="number"?a.transform(e):e;function w4(e){return $w(e)&&"offsetHeight"in e}const H1=30,S4=e=>!isNaN(parseFloat(e)),tl={current:void 0};class E4{constructor(a,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=vn.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=r.owner}setCurrent(a){this.current=a,this.updatedAt=vn.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=S4(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,r){this.events[a]||(this.events[a]=new cp);const o=this.events[a].add(r);return a==="change"?()=>{o(),pt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,r){this.passiveEffect=a,this.stopPassiveEffect=r}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,r=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return tl.current&&tl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const a=vn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>H1)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,H1);return Fw(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(a){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=a(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Or(e,a){return new E4(e,a)}const{schedule:Cp}=nS(queueMicrotask,!1),ua={x:!1,y:!1};function zS(){return ua.x||ua.y}function T4(e){return e==="x"||e==="y"?ua[e]?null:(ua[e]=!0,()=>{ua[e]=!1}):ua.x||ua.y?null:(ua.x=ua.y=!0,()=>{ua.x=ua.y=!1})}function OS(e,a){const r=MS(e),o=new AbortController,l={passive:!0,...a,signal:o.signal};return[r,l,()=>o.abort()]}function $1(e){return!(e.pointerType==="touch"||zS())}function C4(e,a,r={}){const[o,l,u]=OS(e,r),d=m=>{if(!$1(m))return;const{target:p}=m,g=a(p,m);if(typeof g!="function"||!p)return;const y=v=>{$1(v)&&(g(v),p.removeEventListener("pointerleave",y))};p.addEventListener("pointerleave",y,l)};return o.forEach(m=>{m.addEventListener("pointerenter",d,l)}),u}const kS=(e,a)=>a?e===a?!0:kS(e,a.parentElement):!1,jp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,j4=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function A4(e){return j4.has(e.tagName)||e.tabIndex!==-1}const wu=new WeakSet;function P1(e){return a=>{a.key==="Enter"&&e(a)}}function kh(e,a){e.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const R4=(e,a)=>{const r=e.currentTarget;if(!r)return;const o=P1(()=>{if(wu.has(r))return;kh(r,"down");const l=P1(()=>{kh(r,"up")}),u=()=>kh(r,"cancel");r.addEventListener("keyup",l,a),r.addEventListener("blur",u,a)});r.addEventListener("keydown",o,a),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),a)};function F1(e){return jp(e)&&!zS()}function M4(e,a,r={}){const[o,l,u]=OS(e,r),d=m=>{const p=m.currentTarget;if(!F1(m))return;wu.add(p);const g=a(p,m),y=(S,T)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",b),wu.has(p)&&wu.delete(p),F1(S)&&typeof g=="function"&&g(S,{success:T})},v=S=>{y(S,p===window||p===document||r.useGlobalTarget||kS(p,S.target))},b=S=>{y(S,!1)};window.addEventListener("pointerup",v,l),window.addEventListener("pointercancel",b,l)};return o.forEach(m=>{(r.useGlobalTarget?window:m).addEventListener("pointerdown",d,l),w4(m)&&(m.addEventListener("focus",g=>R4(g,l)),!A4(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),u}function Ap(e){return $w(e)&&"ownerSVGElement"in e}function LS(e){return Ap(e)&&e.tagName==="svg"}function Su(...e){const a=!Array.isArray(e[0]),r=a?0:-1,o=e[0+r],l=e[1+r],u=e[2+r],d=e[3+r],m=mS(l,u,d);return a?m(o):m}const Gt=e=>!!(e&&e.getVelocity),D4=[...jS,Nt,Gi],z4=e=>D4.find(CS(e)),Rp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function O4(e=!0){const a=w.useContext(rp);if(a===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:l}=a,u=w.useId();w.useEffect(()=>{if(e)return l(u)},[e]);const d=w.useCallback(()=>e&&o&&o(u),[u,o,e]);return!r&&o?[!1,d]:[!0]}const NS=w.createContext({strict:!1}),Y1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vo={};for(const e in Y1)Vo[e]={isEnabled:a=>Y1[e].some(r=>!!a[r])};function k4(e){for(const a in e)Vo[a]={...Vo[a],...e[a]}}const L4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function _u(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||L4.has(e)}let _S=e=>!_u(e);function N4(e){typeof e=="function"&&(_S=a=>a.startsWith("on")?!_u(a):e(a))}try{N4(require("@emotion/is-prop-valid").default)}catch{}function _4(e,a,r){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||(_S(l)||r===!0&&_u(l)||!a&&!_u(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}const ed=w.createContext({});function td(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function pl(e){return typeof e=="string"||Array.isArray(e)}const Mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dp=["initial",...Mp];function nd(e){return td(e.animate)||Dp.some(a=>pl(e[a]))}function US(e){return!!(nd(e)||e.variants)}function U4(e,a){if(nd(e)){const{initial:r,animate:o}=e;return{initial:r===!1||pl(r)?r:void 0,animate:pl(o)?o:void 0}}return e.inherit!==!1?a:{}}function V4(e){const{initial:a,animate:r}=U4(e,w.useContext(ed));return w.useMemo(()=>({initial:a,animate:r}),[G1(a),G1(r)])}function G1(e){return Array.isArray(e)?e.join(" "):e}const gl={};function B4(e){for(const a in e)gl[a]=e[a],fp(a)&&(gl[a].isCSSVariable=!0)}function VS(e,{layout:a,layoutId:r}){return Fo.has(e)||e.startsWith("origin")||(a||r!==void 0)&&(!!gl[e]||e==="opacity")}const H4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$4=Po.length;function P4(e,a,r){let o="",l=!0;for(let u=0;u<$4;u++){const d=Po[u],m=e[d];if(m===void 0)continue;let p=!0;if(typeof m=="number"?p=m===(d.startsWith("scale")?1:0):p=parseFloat(m)===0,!p||r){const g=DS(m,Tp[d]);if(!p){l=!1;const y=H4[d]||d;o+=`${y}(${g}) `}r&&(a[d]=g)}}return o=o.trim(),r?o=r(a,l?"":o):l&&(o="none"),o}function zp(e,a,r){const{style:o,vars:l,transformOrigin:u}=e;let d=!1,m=!1;for(const p in a){const g=a[p];if(Fo.has(p)){d=!0;continue}else if(fp(p)){l[p]=g;continue}else{const y=DS(g,Tp[p]);p.startsWith("origin")?(m=!0,u[p]=y):o[p]=y}}if(a.transform||(d||r?o.transform=P4(a,e.transform,r):o.transform&&(o.transform="none")),m){const{originX:p="50%",originY:g="50%",originZ:y=0}=u;o.transformOrigin=`${p} ${g} ${y}`}}const Op=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function BS(e,a,r){for(const o in a)!Gt(a[o])&&!VS(o,r)&&(e[o]=a[o])}function F4({transformTemplate:e},a){return w.useMemo(()=>{const r=Op();return zp(r,a,e),Object.assign({},r.vars,r.style)},[a])}function Y4(e,a){const r=e.style||{},o={};return BS(o,r,e),Object.assign(o,F4(e,a)),o}function G4(e,a){const r={},o=Y4(e,a);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const X4={offset:"stroke-dashoffset",array:"stroke-dasharray"},q4={offset:"strokeDashoffset",array:"strokeDasharray"};function I4(e,a,r=1,o=0,l=!0){e.pathLength=1;const u=l?X4:q4;e[u.offset]=Le.transform(-o);const d=Le.transform(a),m=Le.transform(r);e[u.array]=`${d} ${m}`}function HS(e,{attrX:a,attrY:r,attrScale:o,pathLength:l,pathSpacing:u=1,pathOffset:d=0,...m},p,g,y){if(zp(e,m,g),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:b}=e;v.transform&&(b.transform=v.transform,delete v.transform),(b.transform||v.transformOrigin)&&(b.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),b.transform&&(b.transformBox=y?.transformBox??"fill-box",delete v.transformBox),a!==void 0&&(v.x=a),r!==void 0&&(v.y=r),o!==void 0&&(v.scale=o),l!==void 0&&I4(v,l,u,d,!1)}const $S=()=>({...Op(),attrs:{}}),PS=e=>typeof e=="string"&&e.toLowerCase()==="svg";function K4(e,a,r,o){const l=w.useMemo(()=>{const u=$S();return HS(u,a,PS(o),e.transformTemplate,e.style),{...u.attrs,style:{...u.style}}},[a]);if(e.style){const u={};BS(u,e.style,e),l.style={...u,...l.style}}return l}const Q4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kp(e){return typeof e!="string"||e.includes("-")?!1:!!(Q4.indexOf(e)>-1||/[A-Z]/u.test(e))}function Z4(e,a,r,{latestValues:o},l,u=!1){const m=(kp(e)?K4:G4)(a,o,l,e),p=_4(a,typeof e=="string",u),g=e!==w.Fragment?{...p,...m,ref:r}:{},{children:y}=a,v=w.useMemo(()=>Gt(y)?y.get():y,[y]);return w.createElement(e,{...g,children:v})}function X1(e){const a=[{},{}];return e?.values.forEach((r,o)=>{a[0][o]=r.get(),a[1][o]=r.getVelocity()}),a}function Lp(e,a,r,o){if(typeof a=="function"){const[l,u]=X1(o);a=a(r!==void 0?r:e.custom,l,u)}if(typeof a=="string"&&(a=e.variants&&e.variants[a]),typeof a=="function"){const[l,u]=X1(o);a=a(r!==void 0?r:e.custom,l,u)}return a}function Eu(e){return Gt(e)?e.get():e}function W4({scrapeMotionValuesFromProps:e,createRenderState:a},r,o,l){return{latestValues:J4(r,o,l,e),renderState:a()}}function J4(e,a,r,o){const l={},u=o(e,{});for(const b in u)l[b]=Eu(u[b]);let{initial:d,animate:m}=e;const p=nd(e),g=US(e);a&&g&&!p&&e.inherit!==!1&&(d===void 0&&(d=a.initial),m===void 0&&(m=a.animate));let y=r?r.initial===!1:!1;y=y||d===!1;const v=y?m:d;if(v&&typeof v!="boolean"&&!td(v)){const b=Array.isArray(v)?v:[v];for(let S=0;S<b.length;S++){const T=Lp(e,b[S]);if(T){const{transitionEnd:M,transition:j,...C}=T;for(const z in C){let N=C[z];if(Array.isArray(N)){const q=y?N.length-1:0;N=N[q]}N!==null&&(l[z]=N)}for(const z in M)l[z]=M[z]}}}return l}const FS=e=>(a,r)=>{const o=w.useContext(ed),l=w.useContext(rp),u=()=>W4(e,a,o,l);return r?u():ap(u)};function Np(e,a,r){const{style:o}=e,l={};for(const u in o)(Gt(o[u])||a.style&&Gt(a.style[u])||VS(u,e)||r?.getValue(u)?.liveStyle!==void 0)&&(l[u]=o[u]);return l}const eM=FS({scrapeMotionValuesFromProps:Np,createRenderState:Op});function YS(e,a,r){const o=Np(e,a,r);for(const l in e)if(Gt(e[l])||Gt(a[l])){const u=Po.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[u]=e[l]}return o}const tM=FS({scrapeMotionValuesFromProps:YS,createRenderState:$S}),nM=Symbol.for("motionComponentSymbol");function jo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function aM(e,a,r){return w.useCallback(o=>{o&&e.onMount&&e.onMount(o),a&&(o?a.mount(o):a.unmount()),r&&(typeof r=="function"?r(o):jo(r)&&(r.current=o))},[a])}const _p=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),iM="framerAppearId",GS="data-"+_p(iM),XS=w.createContext({});function rM(e,a,r,o,l){const{visualElement:u}=w.useContext(ed),d=w.useContext(NS),m=w.useContext(rp),p=w.useContext(Rp).reducedMotion,g=w.useRef(null);o=o||d.renderer,!g.current&&o&&(g.current=o(e,{visualState:a,parent:u,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:p}));const y=g.current,v=w.useContext(XS);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&oM(g.current,r,l,v);const b=w.useRef(!1);w.useInsertionEffect(()=>{y&&b.current&&y.update(r,m)});const S=r[GS],T=w.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return Bw(()=>{y&&(b.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),T.current&&y.animationState&&y.animationState.animateChanges())}),w.useEffect(()=>{y&&(!T.current&&y.animationState&&y.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),T.current=!1),y.enteringChildren=void 0)}),y}function oM(e,a,r,o){const{layoutId:l,layout:u,drag:d,dragConstraints:m,layoutScroll:p,layoutRoot:g,layoutCrossfade:y}=a;e.projection=new r(e.latestValues,a["data-framer-portal-id"]?void 0:qS(e.parent)),e.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||m&&jo(m),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:p,layoutRoot:g})}function qS(e){if(e)return e.options.allowProjection!==!1?e.projection:qS(e.parent)}function Lh(e,{forwardMotionProps:a=!1}={},r,o){r&&k4(r);const l=kp(e)?tM:eM;function u(m,p){let g;const y={...w.useContext(Rp),...m,layoutId:sM(m)},{isStatic:v}=y,b=V4(m),S=l(m,v);if(!v&&ip){lM();const T=cM(y);g=T.MeasureLayout,b.visualElement=rM(e,S,y,o,T.ProjectionNode)}return h.jsxs(ed.Provider,{value:b,children:[g&&b.visualElement?h.jsx(g,{visualElement:b.visualElement,...y}):null,Z4(e,m,aM(S,b.visualElement,p),S,v,a)]})}u.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const d=w.forwardRef(u);return d[nM]=e,d}function sM({layoutId:e}){const a=w.useContext(Vw).id;return a&&e!==void 0?a+"-"+e:e}function lM(e,a){w.useContext(NS).strict}function cM(e){const{drag:a,layout:r}=Vo;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a?.isEnabled(e)||r?.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function uM(e,a){if(typeof Proxy>"u")return Lh;const r=new Map,o=(u,d)=>Lh(u,d,e,a),l=(u,d)=>o(u,d);return new Proxy(l,{get:(u,d)=>d==="create"?o:(r.has(d)||r.set(d,Lh(d,void 0,e,a)),r.get(d))})}function IS({top:e,left:a,right:r,bottom:o}){return{x:{min:a,max:r},y:{min:e,max:o}}}function dM({x:e,y:a}){return{top:a.min,right:e.max,bottom:a.max,left:e.min}}function fM(e,a){if(!a)return e;const r=a({x:e.left,y:e.top}),o=a({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function Nh(e){return e===void 0||e===1}function Am({scale:e,scaleX:a,scaleY:r}){return!Nh(e)||!Nh(a)||!Nh(r)}function Er(e){return Am(e)||KS(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function KS(e){return q1(e.x)||q1(e.y)}function q1(e){return e&&e!=="0%"}function Uu(e,a,r){const o=e-r,l=a*o;return r+l}function I1(e,a,r,o,l){return l!==void 0&&(e=Uu(e,l,o)),Uu(e,r,o)+a}function Rm(e,a=0,r=1,o,l){e.min=I1(e.min,a,r,o,l),e.max=I1(e.max,a,r,o,l)}function QS(e,{x:a,y:r}){Rm(e.x,a.translate,a.scale,a.originPoint),Rm(e.y,r.translate,r.scale,r.originPoint)}const K1=.999999999999,Q1=1.0000000000001;function hM(e,a,r,o=!1){const l=r.length;if(!l)return;a.x=a.y=1;let u,d;for(let m=0;m<l;m++){u=r[m],d=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ro(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),d&&(a.x*=d.x.scale,a.y*=d.y.scale,QS(e,d)),o&&Er(u.latestValues)&&Ro(e,u.latestValues))}a.x<Q1&&a.x>K1&&(a.x=1),a.y<Q1&&a.y>K1&&(a.y=1)}function Ao(e,a){e.min=e.min+a,e.max=e.max+a}function Z1(e,a,r,o,l=.5){const u=xt(e.min,e.max,l);Rm(e,a,r,u,o)}function Ro(e,a){Z1(e.x,a.x,a.scaleX,a.scale,a.originX),Z1(e.y,a.y,a.scaleY,a.scale,a.originY)}function ZS(e,a){return IS(fM(e.getBoundingClientRect(),a))}function mM(e,a,r){const o=ZS(e,r),{scroll:l}=a;return l&&(Ao(o.x,l.offset.x),Ao(o.y,l.offset.y)),o}const W1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:W1(),y:W1()}),J1=()=>({min:0,max:0}),St=()=>({x:J1(),y:J1()}),Vu={current:null},Up={current:!1};function WS(){if(Up.current=!0,!!ip)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),a=()=>Vu.current=e.matches;e.addEventListener("change",a),a()}else Vu.current=!1}const yl=new WeakMap;function pM(e,a,r){for(const o in a){const l=a[o],u=r[o];if(Gt(l))e.addValue(o,l);else if(Gt(u))e.addValue(o,Or(l,{owner:e}));else if(u!==l)if(e.hasValue(o)){const d=e.getValue(o);d.liveStyle===!0?d.jump(l):d.hasAnimated||d.set(l)}else{const d=e.getStaticValue(o);e.addValue(o,Or(d!==void 0?d:l,{owner:e}))}}for(const o in r)a[o]===void 0&&e.removeValue(o);return a}const ex=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class JS{scrapeMotionValuesFromProps(a,r,o){return{}}constructor({parent:a,props:r,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:u,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=vn.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,pt.render(this.render,!1,!0))};const{latestValues:p,renderState:g}=d;this.latestValues=p,this.baseTarget={...p},this.initialValues=r.initial?{...p}:{},this.renderState=g,this.parent=a,this.props=r,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=l,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=nd(r),this.isVariantNode=US(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(r,{},this);for(const b in v){const S=v[b];p[b]!==void 0&&Gt(S)&&S.set(p[b])}}mount(a){this.current=a,yl.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),Up.current||WS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vu.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ai(this.notifyUpdate),ai(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,r){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Fo.has(a);o&&this.onBindTransform&&this.onBindTransform();const l=r.on("change",d=>{this.latestValues[a]=d,this.props.onUpdate&&pt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,a,r)),this.valueSubscriptions.set(a,()=>{l(),u&&u(),r.owner&&r.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Vo){const r=Vo[a];if(!r)continue;const{isEnabled:o,Feature:l}=r;if(!this.features[a]&&l&&o(this.props)&&(this.features[a]=new l(this)),this.features[a]){const u=this.features[a];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):St()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,r){this.latestValues[a]=r}update(a,r){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<ex.length;o++){const l=ex[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,d=a[u];d&&(this.propEventSubscriptions[l]=this.on(l,d))}this.prevMotionValues=pM(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(a),()=>r.variantChildren.delete(a)}addValue(a,r){const o=this.values.get(a);r!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,r),this.values.set(a,r),this.latestValues[a]=r.get())}removeValue(a){this.values.delete(a);const r=this.valueSubscriptions.get(a);r&&(r(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,r){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&r!==void 0&&(o=Or(r===null?void 0:r,{owner:this}),this.addValue(a,o)),o}readValue(a,r){let o=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return o!=null&&(typeof o=="string"&&(Hw(o)||Pw(o))?o=parseFloat(o):!z4(o)&&Gi.test(r)&&(o=RS(a,r)),this.setBaseTarget(a,Gt(o)?o.get():o)),Gt(o)?o.get():o}setBaseTarget(a,r){this.baseTarget[a]=r}getBaseTarget(a){const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Lp(this.props,r,this.presenceContext?.custom);u&&(o=u[a])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,a);return l!==void 0&&!Gt(l)?l:this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]}on(a,r){return this.events[a]||(this.events[a]=new cp),this.events[a].add(r)}notify(a,...r){this.events[a]&&this.events[a].notify(...r)}scheduleRenderMicrotask(){Cp.render(this.render)}}class e2 extends JS{constructor(){super(...arguments),this.KeyframeResolver=b4}sortInstanceNodePosition(a,r){return a.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(a,r){return a.style?a.style[r]:void 0}removeValueFromRenderState(a,{vars:r,style:o}){delete r[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;Gt(a)&&(this.childSubscription=a.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function t2(e,{style:a,vars:r},o,l){const u=e.style;let d;for(d in a)u[d]=a[d];l?.applyProjectionStyles(u,o);for(d in r)u.setProperty(d,r[d])}function gM(e){return window.getComputedStyle(e)}class n2 extends e2{constructor(){super(...arguments),this.type="html",this.renderInstance=t2}readValueFromInstance(a,r){if(Fo.has(r))return this.projection?.isProjecting?bm(r):UR(a,r);{const o=gM(a),l=(fp(r)?o.getPropertyValue(r):o[r])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(a,{transformPagePoint:r}){return ZS(a,r)}build(a,r,o){zp(a,r,o.transformTemplate)}scrapeMotionValuesFromProps(a,r,o){return Np(a,r,o)}}const a2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yM(e,a,r,o){t2(e,a,void 0,o);for(const l in a.attrs)e.setAttribute(a2.has(l)?l:_p(l),a.attrs[l])}class i2 extends e2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=St}getBaseTargetFromProps(a,r){return a[r]}readValueFromInstance(a,r){if(Fo.has(r)){const o=AS(r);return o&&o.default||0}return r=a2.has(r)?r:_p(r),a.getAttribute(r)}scrapeMotionValuesFromProps(a,r,o){return YS(a,r,o)}build(a,r,o){HS(a,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(a,r,o,l){yM(a,r,o,l)}mount(a){this.isSVGTag=PS(a.tagName),super.mount(a)}}const vM=(e,a)=>kp(e)?new i2(a):new n2(a,{allowProjection:e!==w.Fragment});function zo(e,a,r){const o=e.getProps();return Lp(o,a,r!==void 0?r:o.custom,e)}const Mm=e=>Array.isArray(e);function xM(e,a,r){e.hasValue(a)?e.getValue(a).set(r):e.addValue(a,Or(r))}function bM(e){return Mm(e)?e[e.length-1]||0:e}function wM(e,a){const r=zo(e,a);let{transitionEnd:o={},transition:l={},...u}=r||{};u={...u,...o};for(const d in u){const m=bM(u[d]);xM(e,d,m)}}function SM(e){return!!(Gt(e)&&e.add)}function Dm(e,a){const r=e.getValue("willChange");if(SM(r))return r.add(a);if(!r&&ni.WillChange){const o=new ni.WillChange("auto");e.addValue("willChange",o),o.add(a)}}function r2(e){return e.props[GS]}const EM=e=>e!==null;function TM(e,{repeat:a,repeatType:r="loop"},o){const l=e.filter(EM),u=a&&r!=="loop"&&a%2===1?0:l.length-1;return l[u]}const CM={type:"spring",stiffness:500,damping:25,restSpeed:10},jM=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),AM={type:"keyframes",duration:.8},RM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},MM=(e,{keyframes:a})=>a.length>2?AM:Fo.has(e)?e.startsWith("scale")?jM(a[1]):CM:RM;function DM({when:e,delay:a,delayChildren:r,staggerChildren:o,staggerDirection:l,repeat:u,repeatType:d,repeatDelay:m,from:p,elapsed:g,...y}){return!!Object.keys(y).length}const Vp=(e,a,r,o={},l,u)=>d=>{const m=Ep(o,e)||{},p=m.delay||o.delay||0;let{elapsed:g=0}=o;g=g-fa(p);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-g,onUpdate:b=>{a.set(b),m.onUpdate&&m.onUpdate(b)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:e,motionValue:a,element:u?void 0:l};DM(m)||Object.assign(y,MM(e,y)),y.duration&&(y.duration=fa(y.duration)),y.repeatDelay&&(y.repeatDelay=fa(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Cm(y),y.delay===0&&(v=!0)),(ni.instantAnimations||ni.skipAnimations)&&(v=!0,Cm(y),y.delay=0),y.allowFlatten=!m.type&&!m.ease,v&&!u&&a.get()!==void 0){const b=TM(y.keyframes,m);if(b!==void 0){pt.update(()=>{y.onUpdate(b),y.onComplete()});return}}return m.isSync?new bp(y):new o4(y)};function zM({protectedKeys:e,needsAnimating:a},r){const o=e.hasOwnProperty(r)&&a[r]!==!0;return a[r]=!1,o}function Bp(e,a,{delay:r=0,transitionOverride:o,type:l}={}){let{transition:u=e.getDefaultTransition(),transitionEnd:d,...m}=a;o&&(u=o);const p=[],g=l&&e.animationState&&e.animationState.getState()[l];for(const y in m){const v=e.getValue(y,e.latestValues[y]??null),b=m[y];if(b===void 0||g&&zM(g,y))continue;const S={delay:r,...Ep(u||{},y)},T=v.get();if(T!==void 0&&!v.isAnimating&&!Array.isArray(b)&&b===T&&!S.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const C=r2(e);if(C){const z=window.MotionHandoffAnimation(C,y,pt);z!==null&&(S.startTime=z,M=!0)}}Dm(e,y),v.start(Vp(y,v,b,e.shouldReduceMotion&&TS.has(y)?{type:!1}:S,e,M));const j=v.animation;j&&p.push(j)}return d&&Promise.all(p).then(()=>{pt.update(()=>{d&&wM(e,d)})}),p}function o2(e,a,r,o=0,l=1){const u=Array.from(e).sort((g,y)=>g.sortNodePosition(y)).indexOf(a),d=e.size,m=(d-1)*o;return typeof r=="function"?r(u,d):l===1?u*o:m-u*o}function zm(e,a,r={}){const o=zo(e,a,r.type==="exit"?e.presenceContext?.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(l=r.transitionOverride);const u=o?()=>Promise.all(Bp(e,o,r)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(p=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:v}=l;return OM(e,a,p,g,y,v,r)}:()=>Promise.resolve(),{when:m}=l;if(m){const[p,g]=m==="beforeChildren"?[u,d]:[d,u];return p().then(()=>g())}else return Promise.all([u(),d(r.delay)])}function OM(e,a,r=0,o=0,l=0,u=1,d){const m=[];for(const p of e.variantChildren)p.notify("AnimationStart",a),m.push(zm(p,a,{...d,delay:r+(typeof o=="function"?0:o)+o2(e.variantChildren,p,o,l,u)}).then(()=>p.notify("AnimationComplete",a)));return Promise.all(m)}function kM(e,a,r={}){e.notify("AnimationStart",a);let o;if(Array.isArray(a)){const l=a.map(u=>zm(e,u,r));o=Promise.all(l)}else if(typeof a=="string")o=zm(e,a,r);else{const l=typeof a=="function"?zo(e,a,r.custom):a;o=Promise.all(Bp(e,l,r))}return o.then(()=>{e.notify("AnimationComplete",a)})}function s2(e,a){if(!Array.isArray(a))return!1;const r=a.length;if(r!==e.length)return!1;for(let o=0;o<r;o++)if(a[o]!==e[o])return!1;return!0}const LM=Dp.length;function l2(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?l2(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const a={};for(let r=0;r<LM;r++){const o=Dp[r],l=e.props[o];(pl(l)||l===!1)&&(a[o]=l)}return a}const NM=[...Mp].reverse(),_M=Mp.length;function UM(e){return a=>Promise.all(a.map(({animation:r,options:o})=>kM(e,r,o)))}function VM(e){let a=UM(e),r=tx(),o=!0;const l=p=>(g,y)=>{const v=zo(e,y,p==="exit"?e.presenceContext?.custom:void 0);if(v){const{transition:b,transitionEnd:S,...T}=v;g={...g,...T,...S}}return g};function u(p){a=p(e)}function d(p){const{props:g}=e,y=l2(e.parent)||{},v=[],b=new Set;let S={},T=1/0;for(let j=0;j<_M;j++){const C=NM[j],z=r[C],N=g[C]!==void 0?g[C]:y[C],q=pl(N),H=C===p?z.isActive:null;H===!1&&(T=j);let A=N===y[C]&&N!==g[C]&&q;if(A&&o&&e.manuallyAnimateOnMount&&(A=!1),z.protectedKeys={...S},!z.isActive&&H===null||!N&&!z.prevProp||td(N)||typeof N=="boolean")continue;const $=BM(z.prevProp,N);let P=$||C===p&&z.isActive&&!A&&q||j>T&&q,X=!1;const se=Array.isArray(N)?N:[N];let pe=se.reduce(l(C),{});H===!1&&(pe={});const{prevResolvedValues:Ne={}}=z,de={...Ne,...pe},ge=_=>{P=!0,b.has(_)&&(X=!0,b.delete(_)),z.needsAnimating[_]=!0;const I=e.getValue(_);I&&(I.liveStyle=!1)};for(const _ in de){const I=pe[_],oe=Ne[_];if(S.hasOwnProperty(_))continue;let ue=!1;Mm(I)&&Mm(oe)?ue=!s2(I,oe):ue=I!==oe,ue?I!=null?ge(_):b.add(_):I!==void 0&&b.has(_)?ge(_):z.protectedKeys[_]=!0}z.prevProp=N,z.prevResolvedValues=pe,z.isActive&&(S={...S,...pe}),o&&e.blockInitialAnimation&&(P=!1);const ze=A&&$;P&&(!ze||X)&&v.push(...se.map(_=>{const I={type:C};if(typeof _=="string"&&o&&!ze&&e.manuallyAnimateOnMount&&e.parent){const{parent:oe}=e,ue=zo(oe,_);if(oe.enteringChildren&&ue){const{delayChildren:k}=ue.transition||{};I.delay=o2(oe.enteringChildren,e,k)}}return{animation:_,options:I}}))}if(b.size){const j={};if(typeof g.initial!="boolean"){const C=zo(e,Array.isArray(g.initial)?g.initial[0]:g.initial);C&&C.transition&&(j.transition=C.transition)}b.forEach(C=>{const z=e.getBaseTarget(C),N=e.getValue(C);N&&(N.liveStyle=!0),j[C]=z??null}),v.push({animation:j})}let M=!!v.length;return o&&(g.initial===!1||g.initial===g.animate)&&!e.manuallyAnimateOnMount&&(M=!1),o=!1,M?a(v):Promise.resolve()}function m(p,g){if(r[p].isActive===g)return Promise.resolve();e.variantChildren?.forEach(v=>v.animationState?.setActive(p,g)),r[p].isActive=g;const y=d(p);for(const v in r)r[v].protectedKeys={};return y}return{animateChanges:d,setActive:m,setAnimateFunction:u,getState:()=>r,reset:()=>{r=tx()}}}function BM(e,a){return typeof a=="string"?a!==e:Array.isArray(a)?!s2(a,e):!1}function pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tx(){return{animate:pr(!0),whileInView:pr(),whileHover:pr(),whileTap:pr(),whileDrag:pr(),whileFocus:pr(),exit:pr()}}class Ii{constructor(a){this.isMounted=!1,this.node=a}update(){}}class HM extends Ii{constructor(a){super(a),a.animationState||(a.animationState=VM(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();td(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:r}=this.node.prevProps||{};a!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let $M=0;class PM extends Ii{constructor(){super(...arguments),this.id=$M++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const l=this.node.animationState.setActive("exit",!a);r&&!a&&l.then(()=>{r(this.id)})}mount(){const{register:a,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const FM={animation:{Feature:HM},exit:{Feature:PM}};function vl(e,a,r,o={passive:!0}){return e.addEventListener(a,r,o),()=>e.removeEventListener(a,r)}function Ol(e){return{point:{x:e.pageX,y:e.pageY}}}const YM=e=>a=>jp(a)&&e(a,Ol(a));function nl(e,a,r,o){return vl(e,a,YM(r),o)}const c2=1e-4,GM=1-c2,XM=1+c2,u2=.01,qM=0-u2,IM=0+u2;function cn(e){return e.max-e.min}function KM(e,a,r){return Math.abs(e-a)<=r}function nx(e,a,r,o=.5){e.origin=o,e.originPoint=xt(a.min,a.max,e.origin),e.scale=cn(r)/cn(a),e.translate=xt(r.min,r.max,e.origin)-e.originPoint,(e.scale>=GM&&e.scale<=XM||isNaN(e.scale))&&(e.scale=1),(e.translate>=qM&&e.translate<=IM||isNaN(e.translate))&&(e.translate=0)}function al(e,a,r,o){nx(e.x,a.x,r.x,o?o.originX:void 0),nx(e.y,a.y,r.y,o?o.originY:void 0)}function ax(e,a,r){e.min=r.min+a.min,e.max=e.min+cn(a)}function QM(e,a,r){ax(e.x,a.x,r.x),ax(e.y,a.y,r.y)}function ix(e,a,r){e.min=a.min-r.min,e.max=e.min+cn(a)}function il(e,a,r){ix(e.x,a.x,r.x),ix(e.y,a.y,r.y)}function Kn(e){return[e("x"),e("y")]}const d2=({current:e})=>e?e.ownerDocument.defaultView:null,rx=(e,a)=>Math.abs(e-a);function ZM(e,a){const r=rx(e.x,a.x),o=rx(e.y,a.y);return Math.sqrt(r**2+o**2)}class f2{constructor(a,r,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:u=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Uh(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,T=ZM(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!T)return;const{point:M}=b,{timestamp:j}=Wt;this.history.push({...M,timestamp:j});const{onStart:C,onMove:z}=this.handlers;S||(C&&C(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,b)},this.handlePointerMove=(b,S)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=_h(S,this.transformPagePoint),pt.update(this.updatePoint,!0)},this.handlePointerUp=(b,S)=>{this.end();const{onEnd:T,onSessionEnd:M,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Uh(b.type==="pointercancel"?this.lastMoveEventInfo:_h(S,this.transformPagePoint),this.history);this.startEvent&&T&&T(b,C),M&&M(b,C)},!jp(a))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=l||window;const m=Ol(a),p=_h(m,this.transformPagePoint),{point:g}=p,{timestamp:y}=Wt;this.history=[{...g,timestamp:y}];const{onSessionStart:v}=r;v&&v(a,Uh(p,this.history)),this.removeListeners=Ml(nl(this.contextWindow,"pointermove",this.handlePointerMove),nl(this.contextWindow,"pointerup",this.handlePointerUp),nl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),ai(this.updatePoint)}}function _h(e,a){return a?{point:a(e.point)}:e}function ox(e,a){return{x:e.x-a.x,y:e.y-a.y}}function Uh({point:e},a){return{point:e,delta:ox(e,h2(a)),offset:ox(e,WM(a)),velocity:JM(a,.1)}}function WM(e){return e[0]}function h2(e){return e[e.length-1]}function JM(e,a){if(e.length<2)return{x:0,y:0};let r=e.length-1,o=null;const l=h2(e);for(;r>=0&&(o=e[r],!(l.timestamp-o.timestamp>fa(a)));)r--;if(!o)return{x:0,y:0};const u=Wn(l.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const d={x:(l.x-o.x)/u,y:(l.y-o.y)/u};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function eD(e,{min:a,max:r},o){return a!==void 0&&e<a?e=o?xt(a,e,o.min):Math.max(e,a):r!==void 0&&e>r&&(e=o?xt(r,e,o.max):Math.min(e,r)),e}function sx(e,a,r){return{min:a!==void 0?e.min+a:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function tD(e,{top:a,left:r,bottom:o,right:l}){return{x:sx(e.x,r,l),y:sx(e.y,a,o)}}function lx(e,a){let r=a.min-e.min,o=a.max-e.max;return a.max-a.min<e.max-e.min&&([r,o]=[o,r]),{min:r,max:o}}function nD(e,a){return{x:lx(e.x,a.x),y:lx(e.y,a.y)}}function aD(e,a){let r=.5;const o=cn(e),l=cn(a);return l>o?r=Uo(a.min,a.max-o,e.min):o>l&&(r=Uo(e.min,e.max-l,a.min)),ti(0,1,r)}function iD(e,a){const r={};return a.min!==void 0&&(r.min=a.min-e.min),a.max!==void 0&&(r.max=a.max-e.min),r}const Om=.35;function rD(e=Om){return e===!1?e=0:e===!0&&(e=Om),{x:cx(e,"left","right"),y:cx(e,"top","bottom")}}function cx(e,a,r){return{min:ux(e,a),max:ux(e,r)}}function ux(e,a){return typeof e=="number"?e:e[a]||0}const oD=new WeakMap;class sD{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=St(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const u=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Ol(v).point)},d=(v,b)=>{const{drag:S,dragPropagation:T,onDragStart:M}=this.getProps();if(S&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=T4(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kn(C=>{let z=this.getAxisMotionValue(C).get()||0;if(Aa.test(z)){const{projection:N}=this.visualElement;if(N&&N.layout){const q=N.layout.layoutBox[C];q&&(z=cn(q)*(parseFloat(z)/100))}}this.originPoint[C]=z}),M&&pt.postRender(()=>M(v,b)),Dm(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},m=(v,b)=>{this.latestPointerEvent=v,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:T,onDirectionLock:M,onDrag:j}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:C}=b;if(T&&this.currentDirection===null){this.currentDirection=lD(C),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",b.point,C),this.updateAxis("y",b.point,C),this.visualElement.render(),j&&j(v,b)},p=(v,b)=>{this.latestPointerEvent=v,this.latestPanInfo=b,this.stop(v,b),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Kn(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new f2(a,{onSessionStart:u,onStart:d,onMove:m,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:o,contextWindow:d2(this.visualElement)})}stop(a,r){const o=a||this.latestPointerEvent,l=r||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!l||!o)return;const{velocity:d}=l;this.startAnimation(d);const{onDragEnd:m}=this.getProps();m&&pt.postRender(()=>m(o,l))}cancel(){this.isDragging=!1;const{projection:a,animationState:r}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(a,r,o){const{drag:l}=this.getProps();if(!o||!au(a,l,this.currentDirection))return;const u=this.getAxisMotionValue(a);let d=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(d=eD(d,this.constraints[a],this.elastic[a])),u.set(d)}resolveConstraints(){const{dragConstraints:a,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;a&&jo(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=tD(o.layoutBox,a):this.constraints=!1,this.elastic=rD(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Kn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=iD(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:r}=this.getProps();if(!a||!jo(a))return!1;const o=a.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=mM(o,l.root,this.visualElement.getTransformPagePoint());let d=nD(l.layout.layoutBox,u);if(r){const m=r(dM(d));this.hasMutatedConstraints=!!m,m&&(d=IS(m))}return d}startAnimation(a){const{drag:r,dragMomentum:o,dragElastic:l,dragTransition:u,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},g=Kn(y=>{if(!au(y,r,this.currentDirection))return;let v=p&&p[y]||{};d&&(v={min:0,max:0});const b=l?200:1e6,S=l?40:1e7,T={type:"inertia",velocity:o?a[y]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...v};return this.startAxisValueAnimation(y,T)});return Promise.all(g).then(m)}startAxisValueAnimation(a,r){const o=this.getAxisMotionValue(a);return Dm(this.visualElement,a),o.start(Vp(a,o,0,r,this.visualElement,!1))}stopAnimation(){Kn(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Kn(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const r=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps(),l=o[r];return l||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){Kn(r=>{const{drag:o}=this.getProps();if(!au(r,o,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(r);if(l&&l.layout){const{min:d,max:m}=l.layout.layoutBox[r];u.set(a[r]-xt(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!jo(r)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Kn(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const p=m.get();l[d]=aD({min:p,max:p},this.constraints[d])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Kn(d=>{if(!au(d,a,null))return;const m=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];m.set(xt(p,g,l[d]))})}addListeners(){if(!this.visualElement.current)return;oD.set(this.visualElement,this);const a=this.visualElement.current,r=nl(a,"pointerdown",p=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();jo(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),pt.read(o);const d=vl(window,"resize",()=>this.scalePositionWithinConstraints()),m=l.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:g})=>{this.isDragging&&g&&(Kn(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=p[y].translate,v.set(v.get()+p[y].translate))}),this.visualElement.render())}));return()=>{d(),r(),u(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:d=Om,dragMomentum:m=!0}=a;return{...a,drag:r,dragDirectionLock:o,dragPropagation:l,dragConstraints:u,dragElastic:d,dragMomentum:m}}}function au(e,a,r){return(a===!0||a===e)&&(r===null||r===e)}function lD(e,a=10){let r=null;return Math.abs(e.y)>a?r="y":Math.abs(e.x)>a&&(r="x"),r}class cD extends Ii{constructor(a){super(a),this.removeGroupControls=Jn,this.removeListeners=Jn,this.controls=new sD(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Jn}unmount(){this.removeGroupControls(),this.removeListeners()}}const dx=e=>(a,r)=>{e&&pt.postRender(()=>e(a,r))};class uD extends Ii{constructor(){super(...arguments),this.removePointerDownListener=Jn}onPointerDown(a){this.session=new f2(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:d2(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:r,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:dx(a),onStart:dx(r),onMove:o,onEnd:(u,d)=>{delete this.session,l&&pt.postRender(()=>l(u,d))}}}mount(){this.removePointerDownListener=nl(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Tu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fx(e,a){return a.max===a.min?0:e/(a.max-a.min)*100}const Bs={correct:(e,a)=>{if(!a.target)return e;if(typeof e=="string")if(Le.test(e))e=parseFloat(e);else return e;const r=fx(e,a.target.x),o=fx(e,a.target.y);return`${r}% ${o}%`}},dD={correct:(e,{treeScale:a,projectionDelta:r})=>{const o=e,l=Gi.parse(e);if(l.length>5)return o;const u=Gi.createTransformer(e),d=typeof l[0]!="number"?1:0,m=r.x.scale*a.x,p=r.y.scale*a.y;l[0+d]/=m,l[1+d]/=p;const g=xt(m,p,.5);return typeof l[2+d]=="number"&&(l[2+d]/=g),typeof l[3+d]=="number"&&(l[3+d]/=g),u(l)}};let Vh=!1;class fD extends w.Component{componentDidMount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o,layoutId:l}=this.props,{projection:u}=a;B4(hD),u&&(r.group&&r.group.add(u),o&&o.register&&l&&o.register(u),Vh&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Tu.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:r,visualElement:o,drag:l,isPresent:u}=this.props,{projection:d}=o;return d&&(d.isPresent=u,Vh=!0,l||a.layoutDependency!==r||r===void 0||a.isPresent!==u?d.willUpdate():this.safeToRemove(),a.isPresent!==u&&(u?d.promote():d.relegate()||pt.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Cp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:l}=a;Vh=!0,l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function m2(e){const[a,r]=O4(),o=w.useContext(Vw);return h.jsx(fD,{...e,layoutGroup:o,switchLayoutGroup:w.useContext(XS),isPresent:a,safeToRemove:r})}const hD={borderRadius:{...Bs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bs,borderTopRightRadius:Bs,borderBottomLeftRadius:Bs,borderBottomRightRadius:Bs,boxShadow:dD};function p2(e,a,r){const o=Gt(e)?e:Or(e);return o.start(Vp("",o,a,r)),o.animation}const mD=(e,a)=>e.depth-a.depth;class pD{constructor(){this.children=[],this.isDirty=!1}add(a){op(this.children,a),this.isDirty=!0}remove(a){Ju(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(mD),this.isDirty=!1,this.children.forEach(a)}}function gD(e,a){const r=vn.now(),o=({timestamp:l})=>{const u=l-r;u>=a&&(ai(o),e(u-a))};return pt.setup(o,!0),()=>ai(o)}const g2=["TopLeft","TopRight","BottomLeft","BottomRight"],yD=g2.length,hx=e=>typeof e=="string"?parseFloat(e):e,mx=e=>typeof e=="number"||Le.test(e);function vD(e,a,r,o,l,u){l?(e.opacity=xt(0,r.opacity??1,xD(o)),e.opacityExit=xt(a.opacity??1,0,bD(o))):u&&(e.opacity=xt(a.opacity??1,r.opacity??1,o));for(let d=0;d<yD;d++){const m=`border${g2[d]}Radius`;let p=px(a,m),g=px(r,m);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||mx(p)===mx(g)?(e[m]=Math.max(xt(hx(p),hx(g),o),0),(Aa.test(g)||Aa.test(p))&&(e[m]+="%")):e[m]=g}(a.rotate||r.rotate)&&(e.rotate=xt(a.rotate||0,r.rotate||0,o))}function px(e,a){return e[a]!==void 0?e[a]:e.borderRadius}const xD=y2(0,.5,Qw),bD=y2(.5,.95,Jn);function y2(e,a,r){return o=>o<e?0:o>a?1:r(Uo(e,a,o))}function gx(e,a){e.min=a.min,e.max=a.max}function Yn(e,a){gx(e.x,a.x),gx(e.y,a.y)}function yx(e,a){e.translate=a.translate,e.scale=a.scale,e.originPoint=a.originPoint,e.origin=a.origin}function vx(e,a,r,o,l){return e-=a,e=Uu(e,1/r,o),l!==void 0&&(e=Uu(e,1/l,o)),e}function wD(e,a=0,r=1,o=.5,l,u=e,d=e){if(Aa.test(a)&&(a=parseFloat(a),a=xt(d.min,d.max,a/100)-d.min),typeof a!="number")return;let m=xt(u.min,u.max,o);e===u&&(m-=a),e.min=vx(e.min,a,r,m,l),e.max=vx(e.max,a,r,m,l)}function xx(e,a,[r,o,l],u,d){wD(e,a[r],a[o],a[l],a.scale,u,d)}const SD=["x","scaleX","originX"],ED=["y","scaleY","originY"];function bx(e,a,r,o){xx(e.x,a,SD,r?r.x:void 0,o?o.x:void 0),xx(e.y,a,ED,r?r.y:void 0,o?o.y:void 0)}function wx(e){return e.translate===0&&e.scale===1}function v2(e){return wx(e.x)&&wx(e.y)}function Sx(e,a){return e.min===a.min&&e.max===a.max}function TD(e,a){return Sx(e.x,a.x)&&Sx(e.y,a.y)}function Ex(e,a){return Math.round(e.min)===Math.round(a.min)&&Math.round(e.max)===Math.round(a.max)}function x2(e,a){return Ex(e.x,a.x)&&Ex(e.y,a.y)}function Tx(e){return cn(e.x)/cn(e.y)}function Cx(e,a){return e.translate===a.translate&&e.scale===a.scale&&e.originPoint===a.originPoint}class CD{constructor(){this.members=[]}add(a){op(this.members,a),a.scheduleRender()}remove(a){if(Ju(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(a){const r=this.members.findIndex(l=>a===l);if(r===0)return!1;let o;for(let l=r;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){o=u;break}}return o?(this.promote(o),!0):!1}promote(a,r){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,r&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:l}=a.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:r,resumingFrom:o}=a;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jD(e,a,r){let o="";const l=e.x.translate/a.x,u=e.y.translate/a.y,d=r?.z||0;if((l||u||d)&&(o=`translate3d(${l}px, ${u}px, ${d}px) `),(a.x!==1||a.y!==1)&&(o+=`scale(${1/a.x}, ${1/a.y}) `),r){const{transformPerspective:g,rotate:y,rotateX:v,rotateY:b,skewX:S,skewY:T}=r;g&&(o=`perspective(${g}px) ${o}`),y&&(o+=`rotate(${y}deg) `),v&&(o+=`rotateX(${v}deg) `),b&&(o+=`rotateY(${b}deg) `),S&&(o+=`skewX(${S}deg) `),T&&(o+=`skewY(${T}deg) `)}const m=e.x.scale*a.x,p=e.y.scale*a.y;return(m!==1||p!==1)&&(o+=`scale(${m}, ${p})`),o||"none"}const Bh=["","X","Y","Z"],AD=1e3;let RD=0;function Hh(e,a,r,o){const{latestValues:l}=a;l[e]&&(r[e]=l[e],a.setStaticValue(e,0),o&&(o[e]=0))}function b2(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:a}=e.options;if(!a)return;const r=r2(a);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",pt,!(l||u))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&b2(o)}function w2({attachResizeListener:e,defaultParent:a,measureScroll:r,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(d={},m=a?.()){this.id=RD++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(zD),this.nodes.forEach(ND),this.nodes.forEach(_D),this.nodes.forEach(OD)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new pD)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new cp),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const p=this.eventHandlers.get(d);p&&p.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Ap(d)&&!LS(d),this.instance=d;const{layoutId:m,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),e){let y,v=0;const b=()=>this.root.updateBlockedByResize=!1;pt.read(()=>{v=window.innerWidth}),e(d,()=>{const S=window.innerWidth;S!==v&&(v=S,this.root.updateBlockedByResize=!0,y&&y(),y=gD(b,250),Tu.hasAnimatedSinceResize&&(Tu.hasAnimatedSinceResize=!1,this.nodes.forEach(Rx)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&g&&(m||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||$D,{onLayoutAnimationStart:M,onLayoutAnimationComplete:j}=g.getProps(),C=!this.targetLayout||!x2(this.targetLayout,S),z=!v&&b;if(this.options.layoutRoot||this.resumeFrom||z||v&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Ep(T,"layout"),onPlay:M,onComplete:j};(g.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(y,z)}else v||Rx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ai(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UD),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&b2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(jx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ax);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(LD),this.nodes.forEach(MD),this.nodes.forEach(DD)):this.nodes.forEach(Ax),this.clearAllSnapshots();const m=vn.now();Wt.delta=ti(0,1e3/60,m-Wt.timestamp),Wt.timestamp=m,Wt.isProcessing=!0,Rh.update.process(Wt),Rh.preRender.process(Wt),Rh.render.process(Wt),Wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(kD),this.sharedNodes.forEach(VD)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!cn(this.snapshot.measuredBox.x)&&!cn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=St(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m&&this.instance){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!v2(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(m||Er(this.latestValues)||y)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return d&&(p=this.removeTransform(p)),PD(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return St();const m=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(FD))){const{scroll:g}=this.root;g&&(Ao(m.x,g.offset.x),Ao(m.y,g.offset.y))}return m}removeElementScroll(d){const m=St();if(Yn(m,d),this.scroll?.wasRoot)return m;for(let p=0;p<this.path.length;p++){const g=this.path[p],{scroll:y,options:v}=g;g!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Yn(m,d),Ao(m.x,y.offset.x),Ao(m.y,y.offset.y))}return m}applyTransform(d,m=!1){const p=St();Yn(p,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!m&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ro(p,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Er(y.latestValues)&&Ro(p,y.latestValues)}return Er(this.latestValues)&&Ro(p,this.latestValues),p}removeTransform(d){const m=St();Yn(m,d);for(let p=0;p<this.path.length;p++){const g=this.path[p];if(!g.instance||!Er(g.latestValues))continue;Am(g.latestValues)&&g.updateSnapshot();const y=St(),v=g.measurePageBox();Yn(y,v),bx(m,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return Er(this.latestValues)&&bx(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Wt.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),il(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),Yn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=St(),this.targetWithTransforms=St()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Yn(this.target,this.layout.layoutBox),QS(this.target,this.targetDelta)):Yn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),il(this.relativeTargetOrigin,this.target,b.target),Yn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Am(this.parent.latestValues)||KS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),m=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Wt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Yn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,b=this.treeScale.y;hM(this.layoutCorrected,this.treeScale,this.path,m),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=St());const{target:S}=d;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yx(this.prevProjectionDelta.x,this.projectionDelta.x),yx(this.prevProjectionDelta.y,this.projectionDelta.y)),al(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==b||!Cx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mo(),this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo()}setAnimationOrigin(d,m=!1){const p=this.snapshot,g=p?p.latestValues:{},y={...this.latestValues},v=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const b=St(),S=p?p.source:void 0,T=this.layout?this.layout.source:void 0,M=S!==T,j=this.getStack(),C=!j||j.members.length<=1,z=!!(M&&!C&&this.options.crossfade===!0&&!this.path.some(HD));this.animationProgress=0;let N;this.mixTargetDelta=q=>{const H=q/1e3;Mx(v.x,d.x,H),Mx(v.y,d.y,H),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(il(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),BD(this.relativeTarget,this.relativeTargetOrigin,b,H),N&&TD(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=St()),Yn(N,this.relativeTarget)),M&&(this.animationValues=y,vD(y,g,this.latestValues,H,z,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ai(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pt.update(()=>{Tu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Or(0)),this.currentAnimation=p2(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(AD),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:p,layout:g,latestValues:y}=d;if(!(!m||!p||!g)){if(this!==d&&this.layout&&g&&S2(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||St();const v=cn(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+v;const b=cn(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+b}Yn(m,p),Ro(m,y),al(this.projectionDeltaWithTransform,this.layoutCorrected,m,y)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new CD),this.sharedNodes.get(d).add(m);const g=m.options.initialPromotionConfig;m.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const g={};p.z&&Hh("z",d,g,this.animationValues);for(let y=0;y<Bh.length;y++)Hh(`rotate${Bh[y]}`,d,g,this.animationValues),Hh(`skew${Bh[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Eu(m?.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Eu(m?.pointerEvents)||""),this.hasProjected&&!Er(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=jD(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),d.transform=v;const{x:b,y:S}=this.projectionDelta;d.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const T in gl){if(y[T]===void 0)continue;const{correct:M,applyTo:j,isCSSVariable:C}=gl[T],z=v==="none"?y[T]:M(y[T],g);if(j){const N=j.length;for(let q=0;q<N;q++)d[j[q]]=z}else C?this.options.visualElement.renderState.vars[T]=z:d[T]=z}this.options.layoutId&&(d.pointerEvents=g===this?Eu(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(jx),this.root.sharedNodes.clear()}}}function MD(e){e.updateLayout()}function DD(e){const a=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&a&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:l}=e.options,u=a.source!==e.layout.source;l==="size"?Kn(y=>{const v=u?a.measuredBox[y]:a.layoutBox[y],b=cn(v);v.min=r[y].min,v.max=v.min+b}):S2(l,a.layoutBox,r)&&Kn(y=>{const v=u?a.measuredBox[y]:a.layoutBox[y],b=cn(r[y]);v.max=v.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+b)});const d=Mo();al(d,r,a.layoutBox);const m=Mo();u?al(m,e.applyTransform(o,!0),a.measuredBox):al(m,r,a.layoutBox);const p=!v2(d);let g=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:b}=y;if(v&&b){const S=St();il(S,a.layoutBox,v.layoutBox);const T=St();il(T,r,b.layoutBox),x2(S,T)||(g=!0),y.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=S,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:a,delta:m,layoutDelta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function zD(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function OD(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function kD(e){e.clearSnapshot()}function jx(e){e.clearMeasurements()}function Ax(e){e.isLayoutDirty=!1}function LD(e){const{visualElement:a}=e.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),e.resetTransform()}function Rx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ND(e){e.resolveTargetDelta()}function _D(e){e.calcProjection()}function UD(e){e.resetSkewAndRotation()}function VD(e){e.removeLeadSnapshot()}function Mx(e,a,r){e.translate=xt(a.translate,0,r),e.scale=xt(a.scale,1,r),e.origin=a.origin,e.originPoint=a.originPoint}function Dx(e,a,r,o){e.min=xt(a.min,r.min,o),e.max=xt(a.max,r.max,o)}function BD(e,a,r,o){Dx(e.x,a.x,r.x,o),Dx(e.y,a.y,r.y,o)}function HD(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const $D={duration:.45,ease:[.4,0,.1,1]},zx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ox=zx("applewebkit/")&&!zx("chrome/")?Math.round:Jn;function kx(e){e.min=Ox(e.min),e.max=Ox(e.max)}function PD(e){kx(e.x),kx(e.y)}function S2(e,a,r){return e==="position"||e==="preserve-aspect"&&!KM(Tx(a),Tx(r),.2)}function FD(e){return e!==e.root&&e.scroll?.wasRoot}const YD=w2({attachResizeListener:(e,a)=>vl(e,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$h={current:void 0},E2=w2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$h.current){const e=new YD({});e.mount(window),e.setOptions({layoutScroll:!0}),$h.current=e}return $h.current},resetTransform:(e,a)=>{e.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),GD={pan:{Feature:uD},drag:{Feature:cD,ProjectionNode:E2,MeasureLayout:m2}};function Lx(e,a,r){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,u=o[l];u&&pt.postRender(()=>u(a,Ol(a)))}class XD extends Ii{mount(){const{current:a}=this.node;a&&(this.unmount=C4(a,(r,o)=>(Lx(this.node,o,"Start"),l=>Lx(this.node,l,"End"))))}unmount(){}}class qD extends Ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ml(vl(this.node.current,"focus",()=>this.onFocus()),vl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nx(e,a,r){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),u=o[l];u&&pt.postRender(()=>u(a,Ol(a)))}class ID extends Ii{mount(){const{current:a}=this.node;a&&(this.unmount=M4(a,(r,o)=>(Nx(this.node,o,"Start"),(l,{success:u})=>Nx(this.node,l,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const km=new WeakMap,Ph=new WeakMap,KD=e=>{const a=km.get(e.target);a&&a(e)},QD=e=>{e.forEach(KD)};function ZD({root:e,...a}){const r=e||document;Ph.has(r)||Ph.set(r,{});const o=Ph.get(r),l=JSON.stringify(a);return o[l]||(o[l]=new IntersectionObserver(QD,{root:e,...a})),o[l]}function WD(e,a,r){const o=ZD(a);return km.set(e,r),o.observe(e),()=>{km.delete(e),o.unobserve(e)}}const JD={some:0,all:1};class e6 extends Ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:r,margin:o,amount:l="some",once:u}=a,d={root:r?r.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:JD[l]},m=p=>{const{isIntersecting:g}=p;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),b=g?y:v;b&&b(p)};return WD(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:r}=this.node;["amount","margin","root"].some(t6(a,r))&&this.startObserver()}unmount(){}}function t6({viewport:e={}},{viewport:a={}}={}){return r=>e[r]!==a[r]}const n6={inView:{Feature:e6},tap:{Feature:ID},focus:{Feature:qD},hover:{Feature:XD}},a6={layout:{ProjectionNode:E2,MeasureLayout:m2}},i6={...FM,...n6,...GD,...a6},ii=uM(i6,vM);function Lm(e){const a=ap(()=>Or(e)),{isStatic:r}=w.useContext(Rp);if(r){const[,o]=w.useState(e);w.useEffect(()=>a.on("change",o),[])}return a}function T2(e,a){const r=Lm(a()),o=()=>r.set(a());return o(),Bw(()=>{const l=()=>pt.preRender(o,!1,!0),u=e.map(d=>d.on("change",l));return()=>{u.forEach(d=>d()),ai(o)}}),r}function r6(e){tl.current=[],e();const a=T2(tl.current,e);return tl.current=void 0,a}function rl(e,a,r,o){if(typeof e=="function")return r6(e);const l=typeof a=="function"?a:Su(a,r,o);return Array.isArray(e)?_x(e,l):_x([e],([u])=>l(u))}function _x(e,a){const r=ap(()=>[]);return T2(e,()=>{r.length=0;const o=e.length;for(let l=0;l<o;l++)r[l]=e[l].get();return a(r)})}function o6(){!Up.current&&WS();const[e]=w.useState(Vu.current);return e}function Hp(e){return typeof e=="object"&&!Array.isArray(e)}function C2(e,a,r,o){return typeof e=="string"&&Hp(a)?MS(e,r,o):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function s6(e,a,r){return e*(a+1)}function Ux(e,a,r,o){return typeof a=="number"?a:a.startsWith("-")||a.startsWith("+")?Math.max(0,e+parseFloat(a)):a==="<"?r:a.startsWith("<")?Math.max(0,r+parseFloat(a.slice(1))):o.get(a)??e}function l6(e,a,r){for(let o=0;o<e.length;o++){const l=e[o];l.at>a&&l.at<r&&(Ju(e,l),o--)}}function c6(e,a,r,o,l,u){l6(e,l,u);for(let d=0;d<a.length;d++)e.push({value:a[d],at:xt(l,u,o[d]),easing:eS(r,d)})}function u6(e,a){for(let r=0;r<e.length;r++)e[r]=e[r]/(a+1)}function d6(e,a){return e.at===a.at?e.value===null?1:a.value===null?-1:0:e.at-a.at}const f6="easeInOut";function h6(e,{defaultTransition:a={},...r}={},o,l){const u=a.duration||.3,d=new Map,m=new Map,p={},g=new Map;let y=0,v=0,b=0;for(let S=0;S<e.length;S++){const T=e[S];if(typeof T=="string"){g.set(T,v);continue}else if(!Array.isArray(T)){g.set(T.name,Ux(v,T.at,y,g));continue}let[M,j,C={}]=T;C.at!==void 0&&(v=Ux(v,C.at,y,g));let z=0;const N=(q,H,A,$=0,P=0)=>{const X=m6(q),{delay:se=0,times:pe=gS(X),type:Ne="keyframes",repeat:de,repeatType:ge,repeatDelay:ze=0,...D}=H;let{ease:_=a.ease||"easeOut",duration:I}=H;const oe=typeof se=="function"?se($,P):se,ue=X.length,k=Sp(Ne)?Ne:l?.[Ne||"keyframes"];if(ue<=2&&k){let ye=100;if(ue===2&&y6(X)){const re=X[1]-X[0];ye=Math.abs(re)}const Ee={...D};I!==void 0&&(Ee.duration=fa(I));const ne=fS(Ee,ye,k);_=ne.ease,I=ne.duration}I??(I=u);const K=v+oe;pe.length===1&&pe[0]===0&&(pe[1]=1);const te=pe.length-X.length;if(te>0&&pS(pe,te),X.length===1&&X.unshift(null),de){I=s6(I,de);const ye=[...X],Ee=[...pe];_=Array.isArray(_)?[..._]:[_];const ne=[..._];for(let re=0;re<de;re++){X.push(...ye);for(let ae=0;ae<ye.length;ae++)pe.push(Ee[ae]+(re+1)),_.push(ae===0?"linear":eS(ne,ae-1))}u6(pe,de)}const le=K+I;c6(A,X,_,pe,K,le),z=Math.max(oe+I,z),b=Math.max(le,b)};if(Gt(M)){const q=Vx(M,m);N(j,C,Bx("default",q))}else{const q=C2(M,j,o,p),H=q.length;for(let A=0;A<H;A++){j=j,C=C;const $=q[A],P=Vx($,m);for(const X in j)N(j[X],p6(C,X),Bx(X,P),A,H)}}y=v,v+=z}return m.forEach((S,T)=>{for(const M in S){const j=S[M];j.sort(d6);const C=[],z=[],N=[];for(let H=0;H<j.length;H++){const{at:A,value:$,easing:P}=j[H];C.push($),z.push(Uo(0,b,A)),N.push(P||"easeOut")}z[0]!==0&&(z.unshift(0),C.unshift(C[0]),N.unshift(f6)),z[z.length-1]!==1&&(z.push(1),C.push(null)),d.has(T)||d.set(T,{keyframes:{},transition:{}});const q=d.get(T);q.keyframes[M]=C,q.transition[M]={...a,duration:b,ease:N,times:z,...r}}}),d}function Vx(e,a){return!a.has(e)&&a.set(e,{}),a.get(e)}function Bx(e,a){return a[e]||(a[e]=[]),a[e]}function m6(e){return Array.isArray(e)?e:[e]}function p6(e,a){return e&&e[a]?{...e,...e[a]}:{...e}}const g6=e=>typeof e=="number",y6=e=>e.every(g6);function v6(e,a){return e in a}class x6 extends JS{constructor(){super(...arguments),this.type="object"}readValueFromInstance(a,r){if(v6(r,a)){const o=a[r];if(typeof o=="string"||typeof o=="number")return o}}getBaseTargetFromProps(){}removeValueFromRenderState(a,r){delete r.output[a]}measureInstanceViewportBox(){return St()}build(a,r){Object.assign(a.output,r)}renderInstance(a,{output:r}){Object.assign(a,r)}sortInstanceNodePosition(){return 0}}function b6(e){const a={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Ap(e)&&!LS(e)?new i2(a):new n2(a);r.mount(e),yl.set(e,r)}function w6(e){const a={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new x6(a);r.mount(e),yl.set(e,r)}function S6(e,a){return Gt(e)||typeof e=="number"||typeof e=="string"&&!Hp(a)}function j2(e,a,r,o){const l=[];if(S6(e,a))l.push(p2(e,Hp(a)&&a.default||a,r&&(r.default||r)));else{const u=C2(e,a,o),d=u.length;for(let m=0;m<d;m++){const p=u[m],g=p instanceof Element?b6:w6;yl.has(p)||g(p);const y=yl.get(p),v={...r};"delay"in v&&typeof v.delay=="function"&&(v.delay=v.delay(m,d)),l.push(...Bp(y,{...a,transition:v},{}))}}return l}function E6(e,a,r){const o=[];return h6(e,a,r,{spring:ml}).forEach(({keyframes:u,transition:d},m)=>{o.push(...j2(m,u,d))}),o}function T6(e){return Array.isArray(e)&&e.some(Array.isArray)}function C6(e){function a(r,o,l){let u=[],d;if(T6(r))u=E6(r,o,e);else{const{onComplete:p,...g}=l||{};typeof p=="function"&&(d=p),u=j2(r,o,g,e)}const m=new l4(u);return d&&m.finished.then(d),m}return a}const iu=C6();function Hx(e,a){let r;return(...o)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...o),a)}}function j6({debounce:e,scroll:a,polyfill:r,offsetSize:o}={debounce:0,scroll:!1,offsetSize:!1}){const l=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!l)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[u,d]=w.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=w.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:u,orientationHandler:null}),p=e?typeof e=="number"?e:e.scroll:null,g=e?typeof e=="number"?e:e.resize:null,y=w.useRef(!1);w.useEffect(()=>(y.current=!0,()=>void(y.current=!1)));const[v,b,S]=w.useMemo(()=>{const C=()=>{if(!m.current.element)return;const{left:z,top:N,width:q,height:H,bottom:A,right:$,x:P,y:X}=m.current.element.getBoundingClientRect(),se={left:z,top:N,width:q,height:H,bottom:A,right:$,x:P,y:X};m.current.element instanceof HTMLElement&&o&&(se.height=m.current.element.offsetHeight,se.width=m.current.element.offsetWidth),Object.freeze(se),y.current&&!D6(m.current.lastBounds,se)&&d(m.current.lastBounds=se)};return[C,g?Hx(C,g):C,p?Hx(C,p):C]},[d,o,p,g]);function T(){m.current.scrollContainers&&(m.current.scrollContainers.forEach(C=>C.removeEventListener("scroll",S,!0)),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null),m.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",m.current.orientationHandler))}function M(){m.current.element&&(m.current.resizeObserver=new l(S),m.current.resizeObserver.observe(m.current.element),a&&m.current.scrollContainers&&m.current.scrollContainers.forEach(C=>C.addEventListener("scroll",S,{capture:!0,passive:!0})),m.current.orientationHandler=()=>{S()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",m.current.orientationHandler))}const j=C=>{!C||C===m.current.element||(T(),m.current.element=C,m.current.scrollContainers=A2(C),M())};return R6(S,!!a),A6(b),w.useEffect(()=>{T(),M()},[a,S,b]),w.useEffect(()=>T,[]),[j,u,v]}function A6(e){w.useEffect(()=>{const a=e;return window.addEventListener("resize",a),()=>void window.removeEventListener("resize",a)},[e])}function R6(e,a){w.useEffect(()=>{if(a){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,a])}function A2(e){const a=[];if(!e||e===document.body)return a;const{overflow:r,overflowX:o,overflowY:l}=window.getComputedStyle(e);return[r,o,l].some(u=>u==="auto"||u==="scroll")&&a.push(e),[...a,...A2(e.parentElement)]}const M6=["x","y","top","bottom","left","right","width","height"],D6=(e,a)=>M6.every(r=>e[r]===a[r]);var R2=w.createContext(void 0);function kl(){const e=w.useContext(R2);if(!e)throw new Error("Sheet context error");return e}var ri={root:{base:{position:"fixed",top:0,bottom:0,left:0,right:0,overflow:"hidden",pointerEvents:"none"},decorative:{}},backdrop:{base:{zIndex:1,position:"fixed",top:0,left:0,width:"100%",height:"100%",touchAction:"none",userSelect:"none"},decorative:{backgroundColor:"rgba(0, 0, 0, 0.2)",border:"none",WebkitTapHighlightColor:"transparent"}},container:{base:{zIndex:2,position:"absolute",left:0,bottom:0,width:"100%",pointerEvents:"auto",display:"flex",flexDirection:"column"},decorative:{backgroundColor:"#fff",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",boxShadow:"0px -2px 16px rgba(0, 0, 0, 0.3)"}},headerWrapper:{base:{width:"100%"},decorative:{}},header:{base:{width:"100%",position:"relative"},decorative:{height:"40px",display:"flex",alignItems:"center",justifyContent:"center"}},indicatorWrapper:{base:{display:"flex"},decorative:{}},indicator:{base:{display:"inline-block"},decorative:{width:"18px",height:"4px",borderRadius:"99px",backgroundColor:"#ddd"}},content:{base:{minHeight:"0px",position:"relative",flexGrow:1,display:"flex",flexDirection:"column"},decorative:{}},scroller:{base:{height:"100%",overflowY:"auto",overscrollBehaviorY:"none"},decorative:{}}},$x="calc(100% - env(safe-area-inset-top) - 34px)",xl=typeof window>"u",z6={ease:"easeOut",duration:.2},O6={ease:"linear",duration:.01},k6=.6,L6=500;function oi(e,a){return a?e.base:{...e.base,...e.decorative}}function N6(e){for(let a=0;a<e.length;a++)if(e[a+1]<e[a])return!1;return!0}function Bu(e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r&&(r.current=a)})}}function $p(e){var a;return typeof window<"u"&&window.navigator!=null?e.test(((a=window.navigator.userAgentData)==null?void 0:a.platform)||window.navigator.platform):!1}function ad(e){let a=null;return()=>(a==null&&(a=e()),a)}var _6=ad(function(){return $p(/^Mac/i)}),U6=ad(function(){return $p(/^iPhone/i)}),V6=ad(function(){return $p(/^iPad/i)||_6()&&navigator.maxTouchPoints>1}),B6=ad(function(){return U6()||V6()});function H6(e,a=50,r=20){return new Promise(o=>{let l=0;const u=setInterval(()=>{const d=document.getElementsByClassName(e)[0];l++,(d||l>=r)&&(clearInterval(u),o(d))},a)})}var $6=e=>!!e.onClick||!!e.onTap,M2=w.forwardRef(({style:e,className:a="",unstyled:r,...o},l)=>{const u=kl(),d=$6(o),m=d?ii.button:ii.div,p=d?"auto":"none",g=r??u.unstyled,y={...oi(ri.backdrop,g),...e,pointerEvents:p};return We.createElement(m,{...o,ref:l,className:`react-modal-sheet-backdrop ${a}`,style:y,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1}})});M2.displayName="SheetBackdrop";var D2=w.forwardRef(({children:e,style:a,className:r="",unstyled:o,...l},u)=>{const d=kl(),m=o??d.unstyled,p={...oi(ri.container,m),...a,y:d.y};return d.detent==="default"&&(p.height=$x),d.detent==="full"&&(p.height="100%",p.maxHeight="100%"),d.detent==="content"&&(p.height="auto",p.maxHeight=$x),We.createElement(ii.div,{...l,ref:Bu([u,d.sheetRef,d.sheetBoundsRef]),className:`react-modal-sheet-container ${r}`,style:p},e)});D2.displayName="SheetContainer";var P6={bottom:0,top:0,left:0,right:0};function z2(){const e=w.useRef(null),a=w.useCallback(()=>P6,[]);return{ref:e,onMeasure:a}}function F6(e={}){const{debounceDelay:a=32,isEnabled:r=!0}=e,[o,l]=w.useState(null),[u,d]=w.useState(void 0);return w.useEffect(()=>{if(!o||!r)return;let m=null;function p(v){const{scrollTop:b,scrollHeight:S,clientHeight:T}=v;if(!(S>T)){u&&d(void 0);return}const j=b<=0,C=Math.ceil(S)-Math.ceil(b)===Math.ceil(T);let z;j?z="top":C?z="bottom":z="middle",z!==u&&d(z)}function g(v){if(v.currentTarget instanceof HTMLElement){const b=v.currentTarget;m&&clearTimeout(m),a===0?p(b):m=setTimeout(()=>p(b),a)}}function y(v){v.currentTarget instanceof HTMLElement&&p(v.currentTarget)}return p(o),o.addEventListener("scroll",g),o.addEventListener("touchstart",y),()=>{m&&clearTimeout(m),o.removeEventListener("scroll",g),o.removeEventListener("touchstart",y)}},[o,r]),{scrollRef:m=>l(m),scrollPosition:u}}var O2=w.forwardRef(({disableScroll:e,disableDrag:a,children:r,style:o,className:l="",scrollClassName:u="",scrollStyle:d,scrollRef:m=null,unstyled:p,...g},y)=>{const v=kl(),b=z2(),S=F6(),T=typeof e=="function"?e({scrollPosition:S.scrollPosition,currentSnap:v.currentSnap}):!!e,M=!T&&S.scrollPosition&&S.scrollPosition!=="top",z=(typeof a=="function"?a({scrollPosition:S.scrollPosition,currentSnap:v.currentSnap}):!!a)||M||v.disableDrag||v.disableDrag?void 0:v.dragProps,N=p??v.unstyled,q={...oi(ri.content,N),...o},H=oi(ri.scroller,N);return v.avoidKeyboard&&(H.paddingBottom="env(keyboard-inset-height, var(--keyboard-inset-height, 0px))"),T&&(H.overflowY="hidden"),We.createElement(ii.div,{...g,ref:Bu([y,b.ref]),className:`react-modal-sheet-content ${l}`,style:q,...z,dragConstraints:b.ref,onMeasureDragConstraints:b.onMeasure},We.createElement(ii.div,{ref:Bu([S.scrollRef,m]),style:{...H,...d},className:`react-modal-sheet-content-scroller ${u}`},r))});O2.displayName="SheetContent";function k2({style:e,className:a="",unstyled:r,...o}){const l=kl(),u=rl(l.indicatorRotation,y=>`translateX(2px) rotate(${y}deg)`),d=rl(l.indicatorRotation,y=>`translateX(-2px) rotate(${-1*y}deg)`),m=r??l.unstyled,p={...oi(ri.indicatorWrapper,m),...e},g=oi(ri.indicator,m);return We.createElement("div",{className:`react-modal-sheet-drag-indicator-container ${a}`,style:p,...o},We.createElement(ii.span,{className:"react-modal-sheet-drag-indicator",style:{...g,transform:u}}),We.createElement(ii.span,{className:"react-modal-sheet-drag-indicator",style:{...g,transform:d}}))}var L2=w.forwardRef(({children:e,style:a,disableDrag:r,unstyled:o,className:l="",...u},d)=>{const m=kl(),p=z2(),g=r||m.disableDrag?void 0:m.dragProps,y=o??m.unstyled,v={...oi(ri.headerWrapper,y),...a},b=oi(ri.header,y);return We.createElement(ii.div,{...u,ref:Bu([d,p.ref]),style:v,className:`react-modal-sheet-header-container ${l}`,...g,dragConstraints:p.ref,onMeasureDragConstraints:p.onMeasure},e||We.createElement("div",{className:"react-modal-sheet-header",style:b},We.createElement(k2,null)))});L2.displayName="SheetHeader";var bl=xl?w.useEffect:w.useLayoutEffect;function Y6(){const[e,a]=w.useState(()=>({windowHeight:xl?0:window.innerHeight,windowWidth:xl?0:window.innerWidth}));return bl(()=>{function r(){a({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),e}function G6(){const[e]=w.useState(()=>{const a={top:0,left:0,right:0,bottom:0};if(xl)return a;const r=document.querySelector(":root");if(!r)return a;r.style.setProperty("--rms-sat","env(safe-area-inset-top)"),r.style.setProperty("--rms-sal","env(safe-area-inset-left)"),r.style.setProperty("--rms-sar","env(safe-area-inset-right)"),r.style.setProperty("--rms-sab","env(safe-area-inset-bottom)");const o=getComputedStyle(r),l=ru(o,"--rms-sat"),u=ru(o,"--rms-sal"),d=ru(o,"--rms-sar"),m=ru(o,"--rms-sab");return r.style.removeProperty("--rms-sat"),r.style.removeProperty("--rms-sal"),r.style.removeProperty("--rms-sar"),r.style.removeProperty("--rms-sab"),{top:l,left:u,right:d,bottom:m}});return e}function ru(e,a){const r=e.getPropertyValue(a).replace("px","").trim();return parseInt(r,10)||0}function X6({y:e,detent:a,rootId:r,sheetHeight:o,snapPoints:l,startThreshold:u}){const d=G6().top;let m=r;m&&a==="full"&&(console.warn('Using "full" detent with modal effect is not supported.'),m=void 0),bl(()=>()=>{m&&Px(m)},[]),bl(()=>{if(!m)return;const p=document.querySelector(`#${m}`);if(!p)return;const g=e.on("animationStart",()=>{q6(m)}),y=e.on("change",T=>{if(!p)return;let M=Math.max(0,1-T/o);const j=l.length>1?l[l.length-2]:void 0;if(j!==void 0){const H=j.snapValueY;T<=H?M=(H-T)/H:M=0}if(u!==void 0){const H=o-Math.min(Math.floor(u*o),o);T<=H?M=(H-T)/H:M=0}M=Math.max(0,Math.min(1,M));const C=window.innerWidth,z=Su(M,[0,1],[0,24+d]),N=Su(M,[0,1],[1,(C-16)/C]),q=Su(M,[0,1],[0,10]);p.style.transform=`scale(${N}) translate3d(0, ${z}px, 0)`,p.style.borderTopRightRadius=`${q}px`,p.style.borderTopLeftRadius=`${q}px`});function v(){e.get()-5>=o&&Px(m)}const b=e.on("animationComplete",v),S=e.on("animationCancel",v);return()=>{g(),y(),b(),S()}},[e,m,d,u,o])}function q6(e){const a=document.querySelector(`#${e}`),r=document.querySelector("body");a&&(r.style.backgroundColor="#000",a.style.overflow="hidden",a.style.transitionTimingFunction="cubic-bezier(0.32, 0.72, 0, 1)",a.style.transitionProperty="transform, border-radius",a.style.transitionDuration="0.5s",a.style.transformOrigin="center top")}function Px(e){const a=document.querySelector(`#${e}`),r=document.querySelector("body");a&&(r.style.removeProperty("background-color"),a.style.removeProperty("overflow"),a.style.removeProperty("transition-timing-function"),a.style.removeProperty("transition-property"),a.style.removeProperty("transition-duration"),a.style.removeProperty("transform-origin"),a.style.removeProperty("transform"),a.style.removeProperty("border-top-right-radius"),a.style.removeProperty("border-top-left-radius"))}var I6=24;function Nm(...e){return(...a)=>{for(const r of e)typeof r=="function"&&r(...a)}}var Fh=typeof document<"u"&&window.visualViewport;function Fx(e,a){if(!e)return!1;const r=window.getComputedStyle(e);let o=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return o&&a&&(o=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),o}function N2(e,a){let r=e;for(Fx(r,a)&&(r=r.parentElement);r&&!Fx(r,a);)r=r.parentElement;return r||document.scrollingElement||document.documentElement}var K6=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),ou=0,su;function Q6(e={}){const{isDisabled:a}=e;bl(()=>{if(!a)return ou++,ou===1&&(B6()?su=W6():su=Z6()),()=>{ou--,ou===0&&su?.()}},[a])}function Z6(){return Nm(ol(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),ol(document.documentElement,"overflow","hidden"))}function W6(){let e,a=0;const r=v=>{var b;const S=(b=v.composedPath())==null?void 0:b[0];e=N2(S,!0),!(e===document.documentElement&&e===document.body)&&(a=v.changedTouches[0].pageY)},o=v=>{if(e===void 0)return;if(!e||e===document.documentElement||e===document.body){v.preventDefault();return}const b=v.changedTouches[0].pageY,S=e.scrollTop,T=e.scrollHeight-e.clientHeight;T!==0&&((S<=0&&b>a||S>=T&&b<a)&&v.preventDefault(),a=b)},l=v=>{var b;const S=(b=v.composedPath())==null?void 0:b[0];Gx(S)&&S!==document.activeElement&&(v.preventDefault(),S.style.transform="translateY(-2000px)",S.focus(),requestAnimationFrame(()=>{S.style.transform=""}))},u=v=>{var b;const S=(b=v.composedPath())==null?void 0:b[0];Gx(S)&&(S.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{S.style.transform="",Fh&&(Fh.height<window.innerHeight?requestAnimationFrame(()=>{Yx(S)}):Fh.addEventListener("resize",()=>Yx(S),{once:!0}))}))},d=()=>{window.scrollTo(0,0)},m=window.pageXOffset,p=window.pageYOffset,g=Nm(ol(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),ol(document.documentElement,"overflow","hidden"),ol(document.body,"marginTop",`-${p}px`));window.scrollTo(0,0);const y=Nm(Hs(document,"touchstart",r,{passive:!1,capture:!0}),Hs(document,"touchmove",o,{passive:!1,capture:!0}),Hs(document,"touchend",l,{passive:!1,capture:!0}),Hs(document,"focus",u,!0),Hs(window,"scroll",d));return()=>{g(),y(),window.scrollTo(m,p)}}function ol(e,a,r){const o=e.style[a];return e.style[a]=r,()=>{e.style[a]=o}}function Hs(e,a,r,o){return e.addEventListener(a,r,o),()=>{e.removeEventListener(a,r,o)}}function Yx(e){const a=document.scrollingElement||document.documentElement;for(;e&&e!==a;){const r=N2(e);if(r!==document.documentElement&&r!==document.body&&r!==e){const o=r.getBoundingClientRect().top,l=e.getBoundingClientRect().top,u=e.getBoundingClientRect().bottom,d=r.getBoundingClientRect().bottom+I6;u>d&&(r.scrollTop+=l-o)}e=r.parentElement}}function Gx(e){return e instanceof HTMLInputElement&&!K6.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function Zn(e){const a=w.useRef(void 0);return bl(()=>{a.current=e}),w.useCallback((...r)=>{const o=a.current;return o?.(...r)},[])}function J6({isOpen:e,onClosed:a,onOpening:r,onOpen:o,onClosing:l}){const[u,d]=w.useState(e?"opening":"closed"),m=Zn(()=>a?.()),p=Zn(()=>r?.()),g=Zn(()=>o?.()),y=Zn(()=>l?.());return w.useEffect(()=>{e&&u==="closed"?d("opening"):!e&&(u==="open"||u==="opening")&&d("closing")},[e,u]),w.useEffect(()=>{async function v(){switch(u){case"closed":await m?.();break;case"opening":await p?.(),d("open");break;case"open":await g?.();break;case"closing":await y?.(),d("closed");break}}v().catch(b=>{console.error("Internal sheet state error:",b)})},[u]),u}function ez(e={}){const{containerRef:a,isEnabled:r=!0,debounceDelay:o=100,includeContentEditable:l=!0,visualViewportThreshold:u=100}=e,[d,m]=w.useState({isVisible:!1,height:0}),p=w.useRef(null),g=w.useRef(null),y=Zn(v=>v?.tagName==="INPUT"||v?.tagName==="TEXTAREA"||l&&v instanceof HTMLElement&&v.isContentEditable);return w.useEffect(()=>{if(!r)return;const v=window.visualViewport,b=navigator.virtualKeyboard;function S(z){const N=a?.current||document.documentElement;window.isSecureContext?N.style.setProperty("--keyboard-inset-height",`env(keyboard-inset-height, ${z}px)`):N.style.setProperty("--keyboard-inset-height",`${z}px`)}function T(z){z.target instanceof HTMLElement&&y(z.target)&&(p.current=z.target,j())}function M(){p.current=null,j()}function j(){g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{const z=p.current;if(!y(z)){S(0),m({isVisible:!1,height:0});return}if(v){const q=window.innerHeight-v.height;q>u?(S(q),m({isVisible:!0,height:q})):(S(0),m({isVisible:!1,height:0}))}},o)}window.addEventListener("focusin",T),window.addEventListener("focusout",M),v&&(v.addEventListener("resize",j),v.addEventListener("scroll",j));let C=!1;return b&&(C=b.overlaysContent,b.overlaysContent=!0),()=>{window.removeEventListener("focusin",T),window.removeEventListener("focusout",M),v&&(v.removeEventListener("resize",j),v.removeEventListener("scroll",j)),b&&(b.overlaysContent=C),g.current&&clearTimeout(g.current)}},[o,l,r,u]),{keyboardHeight:d.height,isKeyboardOpen:d.isVisible}}function tz({snapPointsProp:e,sheetHeight:a}){if(e[0]!==0&&(console.error(`First snap point should be 0 to ensure the sheet can be fully closed. Got: [${e.join(", ")}]`),e.unshift(0)),e[e.length-1]!==1&&(console.error(`Last snap point should be 1 to ensure the sheet can be fully opened. Got: [${e.join(", ")}]`),e.push(1)),a<=0)return console.error(`Sheet height is ${a}, cannot compute snap points. Make sure the sheet is mounted and has a valid height.`),[];const r=e.map(o=>o>0&&o<=1?Math.round(o*a):o<0?a+o:o);return console.assert(N6(r),`Snap points need to be in ascending order got: [${e.join(", ")}]`),r.forEach(o=>{(o<0||o>a)&&console.warn(`Snap point ${o} is outside of the sheet height ${a}. This can cause unexpected behavior. Consider adjusting your snap points.`)}),r.includes(a)||(console.warn("Snap points do not include the sheet height.Please include `1` as the last snap point or it will be included automatically.This is to ensure the sheet can be fully opened."),r.push(a)),r.map((o,l)=>({snapIndex:l,snapValue:o,snapValueY:a-o}))}function nz({snapPoints:e,currentY:a}){return e.reduce((r,o)=>Math.abs(o.snapValueY-a)<Math.abs(r.snapValueY-a)?o:r)}function az({y:e,snapPoints:a,dragDirection:r}){return r==="down"?a.slice().reverse().find(o=>o.snapValueY>e):a.find(o=>o.snapValueY<e)}function iz({dragDirection:e,snapPoints:a}){const r=a[0],o=a[a.length-1];return e==="down"?{yTo:r.snapValueY,snapIndex:r.snapIndex}:{yTo:o.snapValueY,snapIndex:o.snapIndex}}function rz({currentSnapPoint:e,currentY:a,dragDirection:r,snapPoints:o,velocity:l}){const u=nz({snapPoints:o,currentY:a});if(Math.abs(l)<20)return{yTo:u.snapValueY,snapIndex:u.snapIndex};const d=az({y:a,snapPoints:o,dragDirection:r});return d?{yTo:d.snapValueY,snapIndex:d.snapIndex}:{yTo:e.snapValueY,snapIndex:e.snapIndex}}var _2=w.forwardRef(({avoidKeyboard:e=!0,children:a,className:r="",detent:o="default",disableDismiss:l=!1,disableDrag:u=!1,disableScrollLocking:d=!1,dragCloseThreshold:m=k6,dragVelocityThreshold:p=L6,initialSnap:g,isOpen:y,modalEffectRootId:v,modalEffectThreshold:b,mountPoint:S,prefersReducedMotion:T=!1,snapPoints:M,style:j,tweenConfig:C=z6,unstyled:z=!1,onOpenStart:N,onOpenEnd:q,onClose:H,onCloseStart:A,onCloseEnd:$,onSnap:P,onDrag:X,onDragStart:se,onDragEnd:pe,...Ne},de)=>{const[ge,ze]=j6(),D=w.useRef(null),_=Math.round(ze.height),[I,oe]=w.useState(g),ue=M&&_>0?tz({sheetHeight:_,snapPointsProp:M}):[],{windowHeight:k}=Y6(),K=_>0?_:k,te=Lm(K),le=rl(te,De=>Math.max(_-De,0)),ye=Lm(0),Ee=o6(),re={type:"tween",...!!(T||Ee)?O6:C},he=ez({isEnabled:y&&e,containerRef:D}).isKeyboardOpen||u,Oe=rl(te,De=>De+2>=K?-1:j?.zIndex??9999),Ae=rl(te,De=>De+2>=K?"hidden":"visible"),ke=Zn(De=>{oe(De),P?.(De)}),Me=Zn(De=>M&&ue?De<0||De>=ue.length?(console.warn(`Invalid snap index ${De}. Snap points are: [${M.join(", ")}] and their computed values are: [${ue.map(dt=>dt.snapValue).join(", ")}]`),null):ue[De]:null),ut=Zn(async De=>{if(!M){console.warn("Snapping is not possible without `snapPoints` prop.");return}const dt=Me(De);if(dt===null){console.warn(`Invalid snap index ${De}.`);return}if(De===0){H();return}await iu(te,dt.snapValueY,{...re,onComplete:()=>ke(De)})}),Tt=Zn(()=>{const De=document.activeElement;if(!De||!D.current)return;(De.tagName==="INPUT"||De.tagName==="TEXTAREA")&&D.current.contains(De)&&De.blur()}),nn=Zn((De,dt)=>{X?.(De,dt);const Ht=te.get(),gt=te.getVelocity();gt>0&&ye.set(10),gt<0&&ye.set(-10),te.set(Math.max(Ht+dt.delta.y,0))}),Ct=Zn((De,dt)=>{Tt(),se?.(De,dt)}),jt=Zn((De,dt)=>{Tt(),pe?.(De,dt);const Ht=te.get();let gt=0;const pa=I!==void 0?Me(I):null;if(pa){const Yo=dt.offset.y>0?"down":"up",si=dt.velocity.y>0?"down":"up",Go=Math.abs(dt.velocity.y)>p;let Xt;if(Go?Xt=iz({snapPoints:ue,dragDirection:si}):Xt=rz({currentSnapPoint:pa,currentY:Ht,dragDirection:Yo,snapPoints:ue,velocity:dt.velocity.y}),gt=Xt.yTo,l&&gt+1>=_){const zn=ue.find($t=>$t.snapValue>0);zn?(gt=zn.snapValueY,ke(zn.snapIndex)):gt=Ht}else Xt.snapIndex!==void 0&&ke(Xt.snapIndex)}else(dt.velocity.y>p||Ht>_*m)&&(l?gt=0:gt=K);iu(te,gt,re),gt+1>=_&&!l&&H(),ye.set(0)});w.useImperativeHandle(de,()=>({y:te,yInverted:le,height:_,snapTo:ut})),X6({y:te,detent:o,sheetHeight:_,snapPoints:ue,rootId:v,startThreshold:b}),Q6({isDisabled:d||!y});const an=J6({isOpen:y,onOpen:async()=>{N?.(),await H6("react-modal-sheet-container");const De=g!==void 0?Me(g):null,dt=De?.snapValueY??0;await iu(te,dt,re),g!==void 0&&ke(g),q?.()},onClosing:async()=>{A?.(),await iu(te,K,re),$?.()}}),aa={currentSnap:I,detent:o,disableDrag:he,dragProps:{drag:"y",dragElastic:0,dragMomentum:!1,dragPropagation:!1,onDrag:nn,onDragStart:Ct,onDragEnd:jt},indicatorRotation:ye,avoidKeyboard:e,sheetBoundsRef:ge,sheetRef:D,unstyled:z,y:te},ma=We.createElement(R2.Provider,{value:aa},We.createElement(ii.div,{...Ne,ref:de,"data-sheet-state":an,className:`react-modal-sheet-root ${r}`,style:{...oi(ri.root,z),zIndex:Oe,visibility:Ae,...j}},an!=="closed"?a:null));return xl?ma:In.createPortal(ma,S??document.body)});_2.displayName="Sheet";var $s=Object.assign(_2,{Container:D2,Header:L2,DragIndicator:k2,Content:O2,Backdrop:M2});let gr=null,Yh=null,Gn=null,Xx=null,xo=[];const Hu={connect:()=>{Gn=new WebSocket(`${um.replace(/^https/,"wss")}/ws`),Gn.onopen=()=>{console.log("WebSocket Connected")},Gn.onmessage=e=>{try{const a=JSON.parse(e.data);if(a?.sessionId)gr=a.sessionId;else if(a?.masks&&a?.boxes)Xx=a,xo.forEach(r=>r(Xx));else throw xo.forEach(r=>r({error:"Something is wrong with the segementation, please try again."})),new Error("Unknown message format")}catch(a){throw console.error("Something is wrong with the response: ",e.data),console.error(a),xo.forEach(r=>r({error:"Something is wrong with the segementation, please try again."})),a}},Gn.onerror=e=>{console.error("WebSocket error:",e)},Gn.onclose=e=>{console.log("WebSocket closed:",e.code,e.reason)}},endSession:()=>{Gn?(Gn.close(),Gn=null,gr=null,console.log("WebSocket connection closed and session ended.")):console.log("No active WebSocket connection to close.")},getSessionId:()=>gr,subscribeToMasks:e=>(xo.push(e),()=>{xo=xo.filter(a=>a!==e)}),segment:async e=>{(!(()=>Gn&&Gn.readyState===WebSocket.OPEN)||!gr)&&Hu.connect(),e.append("sessionId",gr);let r;return await tn("/segment/upload",{method:"POST",body:e,skipAuth:!1}).then(o=>{if(!o.ok)throw new Error("Segmentation request failed");return o.json()}).then(o=>{o?.job_id&&(Yh=o.job_id),r=o}).catch(o=>{throw console.error("Segmentation error:",o),o}),r},resegment:async e=>((!(()=>Gn&&Gn.readyState===WebSocket.OPEN)||!gr)&&Hu.connect(),e={...e,job_id:Yh},await tn(`/re-segment?sessionId=${gr}`,{method:"POST",body:JSON.stringify(e),skipAuth:!1,headers:{"Content-Type":"application/json"}})),search:async(e,a)=>await tn("/api/v1/items/search",{method:"POST",skipAuth:!1,body:JSON.stringify({job_id:Yh,mask_json:e}),headers:{"Content-Type":"application/json"}})},oz=(e,a)=>{if(!e)return console.error("No imageObj provided!"),null;if(!a||a.length===0)return console.error("No masks provided!"),null;try{const r=document.createElement("canvas");r.width=e.width,r.height=e.height;const o=r.getContext("2d");o.drawImage(e,0,0,r.width,r.height);const l=document.createElement("canvas");l.width=a[0][0].length,l.height=a[0].length;const u=l.getContext("2d"),d=u.createImageData(l.width,l.height);return a.forEach((p,g)=>{for(let y=0;y<p.length;y++)for(let v=0;v<p[0].length;v++){const b=(y*p[0].length+v)*4;p[y][v]&&(d.data[b+3]=255)}}),u.putImageData(d,0,0),o.globalCompositeOperation="destination-in",o.drawImage(l,0,0,r.width,r.height),r.toDataURL()}catch(r){return console.error("Error in cropSelectedSegments:",r),null}};function sz({imageObj:e,selectedSegments:a,setIsBeingCustomized:r,setImageUploaded:o,segmentationService:l,handleCloseSegmentationSheet:u}){const[d,m]=w.useState(null),[p,g]=w.useState([]),[y,v]=w.useState(!1),[b,S]=w.useState(""),T=xn();w.useEffect(()=>{if(!e){console.error("No imageObj!");return}const C=[...a];if(!C.length){console.warn("No masks to crop");return}g(C);try{const z=oz(e,C);if(!z)throw new Error("Cropped segment is empty.");m(z)}catch(z){console.error("Failed to crop segment:",z),st.notifyError("Failed to crop segment: "+z.message)}},[]);const M=C=>{S(C.target.value)},j=async()=>{if(!d){console.warn("Segmented image not ready"),st.notifyError("Segmented image not ready.");return}v(!0),await l.search(p[0],b).then(C=>C.json()).then(C=>{C&&C?.error?st.notifyError(`Search failed: ${C.error}`):(o(!1),l.endSession(),u(),T("/search-result",{state:{products:C,searchingPeice:d}}))}).catch(C=>{console.error("Search failed:",C),st.notifyError(C.message)}),v(!1)};return h.jsxs(cz,{children:[d?h.jsx(uz,{src:d,alt:"cropped segment"}):h.jsx("p",{children:"Loading cropped segment..."}),h.jsx(dz,{value:b,onChange:M,placeholder:"Enter any additional details...",disabled:y}),h.jsxs(fz,{children:[h.jsx(hz,{onClick:()=>r(!1),children:h.jsx("span",{children:"Back"})}),h.jsx(mz,{onClick:j,disabled:y,children:y?h.jsx(Pi,{size:20,color:"#fff"}):"Search"})]}),h.jsx(pz,{children:h.jsxs("p",{children:["Add extra information about the cloth you are looking for"," ",h.jsx("small",{children:"(e.g., black, cutting, linen)"})," and click"," ",h.jsx("strong",{children:"Search"})," to find it online."]})})]})}const wl=ct`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,lz=ct`
  0% { transform: translateX(-150%) rotate(25deg); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateX(150%) rotate(25deg); opacity: 0; }
`,cz=R.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  animation: ${wl} 0.5s;
  padding: 1rem;
`,uz=R.img`
  width: 50%;
  animation: ${wl} 1.5s;
`,dz=R.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  background-color: var(--input-bg-color);
  color: var(--text-color);
  &:focus {
    outline: none;
    border-color: #6bcb77;
    box-shadow: 0 0 0 3px rgba(107, 203, 119, 0.1);
  }

  &:hover {
    border-color: #999;
  }
`,fz=R.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,hz=R.button`
  color: var(--text-color);
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  span::before {
    content: "";
    opacity: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  &:hover span::before {
    content: "< ";
    opacity: 1;
    animation: ${wl} 0.5s ease forwards;
  }
`,mz=R.button`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2rem;

  &:hover {
    background-color: rgba(255, 105, 180, 1);
  }
`,pz=R.div`
  margin-top: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: #f0f8ff72;
  border-radius: 2rem;
  animation: ${wl} 1s;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37),
    inset 0 4px 8px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: var(--text-color);
  &:hover {
    transform: translateY(-5px) scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    opacity: 0;
  }

  &:hover::after {
    animation: ${lz} 1s ease forwards;
  }

  p {
    animation: ${wl} 1s;
    font-family: "Cinzel", "MedievalSharp", serif;
  }
`,U2=w.createContext();function gz({children:e}){const[a,r]=w.useState("desktop");return w.useEffect(()=>{const o=window.getComputedStyle(document.documentElement),l=parseInt(o.getPropertyValue("--mobile")),u=parseInt(o.getPropertyValue("--tablet")),d=()=>{const m=window.innerWidth;m<=l?r("mobile"):m<=u?r("tablet"):r("desktop")};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),h.jsx(U2.Provider,{value:{device:a,setDevice:r},children:e})}const Lr=()=>w.useContext(U2);function V2({imageUploaded:e,setImageUploaded:a,imageURL:r,setImageURL:o}){const[l,u]=w.useState(!1),[d,m]=w.useState(null),[p,g]=w.useState([]),[y,v]=w.useState(!1),b=w.useRef(),{device:S}=Lr();w.useEffect(()=>{b.current&&b.current.scrollTo({top:0,behavior:"smooth"})},[l]),w.useEffect(()=>{g([])},[y]);const T=()=>{a(!1),u(!1),o(null),m(null),g([]),v(!1)},M={borderTopLeftRadius:"2rem",borderTopRightRadius:"2rem",backgroundColor:"transparent",width:S==="mobile"?"100%":"50%",marginLeft:S==="mobile"?"0":"25%",backgroundImage:"repeating-linear-gradient(0deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(90deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.05) 0 2px,rgba(0, 0, 0, 0.05) 2px 4px), linear-gradient(-45deg, var(--bg-color) 0%, #90b9f644 100%)",backgroundSize:"6px 6px, 6px 6px, 12px 12px, cover",backgroundBlendMode:"multiply, multiply, overlay, normal",maskComposite:"intersect"};return h.jsxs($s,{isOpen:e,onClose:T,children:[h.jsxs($s.Container,{style:M,children:[h.jsx($s.Header,{style:{backgroundColor:"rgba(255, 255, 255, 0.527)",borderTopLeftRadius:"2rem",borderTopRightRadius:"2rem"}}),h.jsxs($s.Content,{ref:b,children:[y?h.jsx(sz,{imageObj:d,setIsBeingCustomized:v,selectedSegments:p,setImageUploaded:a,segmentationService:Hu,handleCloseSegmentationSheet:T}):h.jsx(_3,{imageURL:r,loading:l,setLoading:u,imageObj:d,setImageObj:m,setSelectedSegments:g,setIsBeingCustomized:v,segmentationService:Hu}),h.jsx(Nw,{})]})]}),h.jsx($s.Backdrop,{})]})}/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yz=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vz=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,r,o)=>o?o.toUpperCase():r.toLowerCase()),qx=e=>{const a=vz(e);return a.charAt(0).toUpperCase()+a.slice(1)},B2=(...e)=>e.filter((a,r,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===r).join(" ").trim(),xz=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wz=w.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:d,...m},p)=>w.createElement("svg",{ref:p,...bz,width:a,height:a,stroke:e,strokeWidth:o?Number(r)*24/Number(a):r,className:B2("lucide",l),...!u&&!xz(m)&&{"aria-hidden":"true"},...m},[...d.map(([g,y])=>w.createElement(g,y)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=(e,a)=>{const r=w.forwardRef(({className:o,...l},u)=>w.createElement(wz,{ref:u,iconNode:a,className:B2(`lucide-${yz(qx(e))}`,`lucide-${e}`,o),...l}));return r.displayName=qx(e),r};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sz=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],_m=bn("camera",Sz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ez=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],Tz=bn("door-open",Ez);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],Ps=bn("eye-closed",Cz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fs=bn("eye",jz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Az=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],H2=bn("heart",Az);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rz=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Mz=bn("history",Rz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],zz=bn("instagram",Dz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oz=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.72a10 10 0 0 1 2.69 2.7",key:"jiglxs"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.28 17.61a10 10 0 0 1-2.7 2.69",key:"elg7ff"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98",key:"1qsu07"}]],kz=bn("message-circle-dashed",Oz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Nz=bn("message-circle",Lz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _z=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Uz=bn("moon",_z);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Bz=bn("pen",Vz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hz=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],$z=bn("sun",Hz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],$2=bn("upload",Pz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fz=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Yz=bn("user",Fz);function Sl(e){"@babel/helpers - typeof";return Sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Sl(e)}function Gz(e,a){if(Sl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,a);if(Sl(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Xz(e){var a=Gz(e,"string");return Sl(a)=="symbol"?a:a+""}function qz(e,a,r){return(a=Xz(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ys(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?Object(arguments[a]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&o.push.apply(o,Object.getOwnPropertySymbols(r).filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),o.forEach(function(l){qz(e,l,r[l])})}return e}function Um(e,a){return Um=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Um(e,a)}function Iz(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,Um(e,a)}function Xn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ix=20,Gs={root:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},sidebar:{zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},content:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},overlay:{zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},dragHandle:{zIndex:1,position:"fixed",top:0,bottom:0}},P2=(function(e){Iz(a,e);function a(o){var l;return l=e.call(this,o)||this,l.state={sidebarWidth:o.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},l.overlayClicked=l.overlayClicked.bind(Xn(Xn(l))),l.onTouchStart=l.onTouchStart.bind(Xn(Xn(l))),l.onTouchMove=l.onTouchMove.bind(Xn(Xn(l))),l.onTouchEnd=l.onTouchEnd.bind(Xn(Xn(l))),l.onScroll=l.onScroll.bind(Xn(Xn(l))),l.saveSidebarRef=l.saveSidebarRef.bind(Xn(Xn(l))),l}var r=a.prototype;return r.componentDidMount=function(){var l=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:typeof window=="object"&&"ontouchstart"in window&&!l}),this.saveSidebarWidth()},r.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},r.onTouchStart=function(l){if(!this.isTouching()){var u=l.targetTouches[0];this.setState({touchIdentifier:u.identifier,touchStartX:u.clientX,touchCurrentX:u.clientX})}},r.onTouchMove=function(l){if(this.isTouching()){for(var u=0;u<l.targetTouches.length;u++)if(l.targetTouches[u].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:l.targetTouches[u].clientX});break}}},r.onTouchEnd=function(){if(this.isTouching()){var l=this.touchSidebarWidth();(this.props.open&&l<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&l>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},r.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},r.inCancelDistanceOnScroll=function(){var l;return this.props.pullRight?l=Math.abs(this.state.touchCurrentX-this.state.touchStartX)<Ix:l=Math.abs(this.state.touchStartX-this.state.touchCurrentX)<Ix,l},r.isTouching=function(){return this.state.touchIdentifier!==null},r.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},r.saveSidebarWidth=function(){var l=this.sidebar.offsetWidth;l!==this.state.sidebarWidth&&this.setState({sidebarWidth:l})},r.saveSidebarRef=function(l){this.sidebar=l},r.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},r.render=function(){var l=Ys({},Gs.sidebar,this.props.styles.sidebar),u=Ys({},Gs.content,this.props.styles.content),d=Ys({},Gs.overlay,this.props.styles.overlay),m=this.state.dragSupported&&this.props.touch,p=this.isTouching(),g={className:this.props.rootClassName,style:Ys({},Gs.root,this.props.styles.root),role:"navigation",id:this.props.rootId},y,v=this.props.shadow&&(p||this.props.open||this.props.docked);if(this.props.pullRight?(l.right=0,l.transform="translateX(100%)",l.WebkitTransform="translateX(100%)",v&&(l.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(l.left=0,l.transform="translateX(-100%)",l.WebkitTransform="translateX(-100%)",v&&(l.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),p){var b=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(l.transform="translateX("+(1-b)*100+"%)",l.WebkitTransform="translateX("+(1-b)*100+"%)"):(l.transform="translateX(-"+(1-b)*100+"%)",l.WebkitTransform="translateX(-"+(1-b)*100+"%)"),d.opacity=b,d.visibility="visible"}else this.props.docked?(this.state.sidebarWidth!==0&&(l.transform="translateX(0%)",l.WebkitTransform="translateX(0%)"),this.props.pullRight?u.right=this.state.sidebarWidth+"px":u.left=this.state.sidebarWidth+"px"):this.props.open&&(l.transform="translateX(0%)",l.WebkitTransform="translateX(0%)",d.opacity=1,d.visibility="visible");if((p||!this.props.transitions)&&(l.transition="none",l.WebkitTransition="none",u.transition="none",d.transition="none"),m)if(this.props.open)g.onTouchStart=this.onTouchStart,g.onTouchMove=this.onTouchMove,g.onTouchEnd=this.onTouchEnd,g.onTouchCancel=this.onTouchEnd,g.onScroll=this.onScroll;else{var S=Ys({},Gs.dragHandle,this.props.styles.dragHandle);S.width=this.props.touchHandleWidth,this.props.pullRight?S.right=0:S.left=0,y=We.createElement("div",{style:S,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return We.createElement("div",g,We.createElement("div",{className:this.props.sidebarClassName,style:l,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),We.createElement("div",{className:this.props.overlayClassName,style:d,onClick:this.overlayClicked,id:this.props.overlayId}),We.createElement("div",{className:this.props.contentClassName,style:u,id:this.props.contentId},y,this.props.children))},a})(w.Component);P2.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0};var F2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kx=We.createContext&&We.createContext(F2),Kz=["attr","size","title"];function Qz(e,a){if(e==null)return{};var r=Zz(e,a),o,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)o=u[l],!(a.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Zz(e,a){if(e==null)return{};var r={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(a.indexOf(o)>=0)continue;r[o]=e[o]}return r}function $u(){return $u=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},$u.apply(this,arguments)}function Qx(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,o)}return r}function Pu(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Qx(Object(r),!0).forEach(function(o){Wz(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qx(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Wz(e,a,r){return a=Jz(a),a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Jz(e){var a=eO(e,"string");return typeof a=="symbol"?a:a+""}function eO(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,a);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Y2(e){return e&&e.map((a,r)=>We.createElement(a.tag,Pu({key:r},a.attr),Y2(a.child)))}function Pp(e){return a=>We.createElement(tO,$u({attr:Pu({},e.attr)},a),Y2(e.child))}function tO(e){var a=r=>{var{attr:o,size:l,title:u}=e,d=Qz(e,Kz),m=l||r.size||"1em",p;return r.className&&(p=r.className),e.className&&(p=(p?p+" ":"")+e.className),We.createElement("svg",$u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,d,{className:p,style:Pu(Pu({color:e.color||r.color},r.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),u&&We.createElement("title",null,u),e.children)};return Kx!==void 0?We.createElement(Kx.Consumer,null,r=>a(r)):a(F2)}function nO(e){return Pp({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 11H16V13H20V11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z",fill:"currentColor"},child:[]}]})(e)}const G2=w.createContext();function aO({children:e}){const[a,r]=w.useState(()=>localStorage.getItem("theme")||"system");return w.useEffect(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches,l=a==="system"?o?"dark":"light":a;document.documentElement.setAttribute("data-theme",l),localStorage.setItem("theme",a)},[a]),h.jsx(G2.Provider,{value:{theme:a,setTheme:r},children:e})}const iO=()=>w.useContext(G2);function Gh(e){return Pp({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function rO({isOpen:e,setIsOpen:a}){const{logout:r,user:o,updateProfileImage:l}=Ho(),u=xn(),[d,m]=w.useState(!1),[p,g]=w.useState(!1),y=w.useRef(null),{theme:v,setTheme:b}=iO(),[S,T]=w.useState(!1),M="https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";w.useEffect(()=>{m(!1)},[o?.profileImageURL]);const j=()=>{r(),u("/"),a(!1)},C=()=>{u("/history"),a(!1)},z=()=>{u("/favorite"),a(!1)},N=()=>{o&&y.current?.click()},q=async A=>{const $=A.target.files?.[0];if($){g(!0);try{(await l($))?.ok?st.notifySuccess("Profile image changed successfully"):st.notifyError("Profile image upload failed")}catch{st.notifyError("Profile image upload failed")}finally{g(!1),A.target.value=null}}},H=h.jsxs(h.Fragment,{children:[h.jsxs(mO,{children:[h.jsx(oO,{ref:y,type:"file",accept:"image/*",onChange:q}),h.jsxs(sO,{children:[h.jsxs(lO,{children:[h.jsx(cO,{onClick:N,children:o&&o.profileImageURL&&!d?h.jsx(uO,{src:o.profileImageURL,alt:o.userName,onError:()=>m(!0)}):h.jsx(dO,{children:h.jsx(Yz,{size:48})})}),o&&h.jsx(fO,{$theme:v,disabled:p,onClick:N,children:p?"...":h.jsx(Bz,{size:14})})]}),h.jsx(hO,{children:o?.userName||"Guest"})]})]}),h.jsxs(pO,{children:[h.jsxs(Oi,{onClick:C,children:[h.jsx(Mz,{})," Recent Searches"]}),h.jsxs(Oi,{onClick:z,children:[h.jsx(H2,{})," Saved Items"]}),h.jsxs(Oi,{onClick:()=>window.open(M),children:[h.jsx(kz,{})," Send Feedback"]}),h.jsxs(gO,{onClick:()=>T(A=>!A),children:[v==="light"?h.jsx($z,{style:{rotate:S?"90deg":"0deg",transition:"rotate 0.5s ease-in-out"}}):h.jsx(Uz,{style:{rotate:S?"90deg":"0deg",transition:"rotate 0.5s ease-in-out"}}),"Theme"]}),h.jsxs(yO,{$open:S,children:[h.jsxs(Oi,{onClick:()=>b("light"),children:[v==="light"&&h.jsx(Gh,{})," Light"]}),h.jsxs(Oi,{onClick:()=>b("dark"),children:[v==="dark"&&h.jsx(Gh,{})," Dark"]}),h.jsxs(Oi,{onClick:()=>b("system"),children:[v==="system"&&h.jsx(Gh,{})," System"]})]}),h.jsxs(Oi,{children:[h.jsx(nO,{size:20})," Change Password"]}),h.jsxs(Oi,{onClick:j,children:[h.jsx(Tz,{})," Sign out"]})]})]});return h.jsx(P2,{open:e,onSetOpen:a,pullRight:!0,styles:{root:{position:"fixed",inset:0,zIndex:1200,pointerEvents:e?"auto":"none"},sidebar:{pointerEvents:"auto",zIndex:"10",background:v==="light"?"#ffffffa0":"#181818a0",color:v==="light"?"black":"white",transition:"0.5s ease-in-out",width:280},overlay:{pointerEvents:"auto",backgroundColor:"rgba(0,0,0,0.4)"}},sidebar:H})}const oO=R.input`
  display: none;
`,sO=R.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,lO=R.div`
  position: relative;
  margin-bottom: 8px;
`,cO=R.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: solid 2px white;
  }
`,uO=R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,dO=R.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
`,fO=R.button`
  position: absolute;
  right: -8px;
  bottom: -8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: opacity 0.2s ease, transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.1); /* subtle lift + scale */
    background: ${e=>e?.$theme&&e.$theme==="light"?"white":"black"};
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }

  &:hover > svg {
    transform: rotate(360deg);
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`,hO=R.h2`
  margin: 0;
`,mO=R.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.5s ease-in-out;
`,pO=R.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`,Oi=R.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 1rem;
  font-weight: bold;
  font-family: inherit;
  transition: opacity 0.2s ease;
  &:hover {
    color: var(--bg-color);
    background-color: var(--primary-color, 50%);
  }
`,gO=R.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: var(--bg-color);
    background-color: var(--primary-color);
  }
`,yO=R.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  max-height: ${({$open:e})=>e?"200px":"0"};
  opacity: ${({$open:e})=>e?1:0};
  transform: ${({$open:e})=>e?"translateY(0)":"translateY(-4px)"};

  transition: max-height 0.3s ease, opacity 0.25s ease, transform 0.25s ease;
`;function vO({navigationBlocked:e,setIsSideBarOpen:a}){const r=xn(),{isAuthenticated:o}=Ho(),[l,u]=w.useState(!1),[d,m]=w.useState(!1),[p,g]=w.useState(null),[y,v]=w.useState(!1),b=w.useRef(null),S=w.useRef(null),{device:T}=Lr();w.useEffect(()=>{o()?u(!0):u(!1)},[o]),w.useEffect(()=>{d||(b.current&&(b.current.value=""),S.current&&(S.current.value=""))},[d]);const M=N=>{const q=N.target.files[0];q&&(g(URL.createObjectURL(q)),m(!0),v(!1))},j=()=>{T==="desktop"?z():v(!0)},C=()=>{S.current.click()},z=()=>{b.current.click()};return h.jsxs(h.Fragment,{children:[h.jsxs(xO,{children:[T!=="mobile"&&h.jsx("div",{style:{gridColumn:"1",textAlign:"left",cursor:"pointer"},onClick:()=>r("/",{state:{cameFrom:"navbar"}}),children:h.jsx(bO,{src:"/logo.png",alt:"FITFINDER",title:"Home"})}),h.jsxs("div",{style:{gridColumn:"2",textAlign:"center"},children:[h.jsx("input",{type:"file",accept:"image/*",ref:b,style:{display:"none"},onChange:M}),h.jsx("input",{type:"file",accept:"image/*",capture:"camera",ref:S,style:{display:"none"},onChange:M}),h.jsxs(wO,{onClick:j,children:[h.jsx(_m,{width:24,height:24}),h.jsx("label",{style:{marginLeft:"0.5rem",cursor:"pointer"},children:"Search With Image"})]})]}),h.jsx("div",{style:{gridColumn:"3",textAlign:"right",gap:"2rem",display:"flex",justifyContent:"flex-end"},children:l?h.jsx(Zx,{onClick:()=>a(!0),children:"Profile"}):T!=="mobile"&&h.jsxs(h.Fragment,{children:[h.jsx(Zx,{onClick:()=>r("/registration",{state:{form:"login"}}),disabled:e,children:"Login"}),h.jsx(SO,{onClick:()=>r("/registration",{state:{form:"signup"}}),disabled:e,children:"Join"})]})})]}),d&&h.jsx(V2,{imageUploaded:d,setImageUploaded:m,imageURL:p,setImageURL:g}),y&&h.jsx(EO,{onClick:()=>v(!1),children:h.jsxs(TO,{device:T,onClick:N=>N.stopPropagation(),children:[h.jsx(CO,{device:T,children:"Choose Image Source"}),h.jsxs(jO,{device:T,children:[h.jsxs(Wx,{device:T,onClick:C,children:[h.jsx(_m,{size:24}),h.jsx("span",{children:"Take Photo"})]}),h.jsxs(Wx,{device:T,onClick:z,children:[h.jsx($2,{size:24}),h.jsx("span",{children:"Upload from Device"})]})]}),h.jsx(AO,{device:T,onClick:()=>v(!1),children:"Cancel"})]})})]})}const xO=R.nav`
  position: absolute;
  inset: 0;
  z-index: 10;
  padding: 1rem;
  color: var(--text-color);
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 4.5rem;
  /* box-shadow: 0 1px 4px var(--back-drop-shadow-color); */
  align-items: center;
  padding: 0;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--navbar-bg-image);
    background-size: cover;
    background-position: center;
    opacity: 0.4; /* crucial */
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: -2;
  }
`,bO=R.img`
  width: 70px;
  height: 70px;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.3;
  }
`,wO=R.button.attrs({type:"button"})`
  border: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  &:hover {
    border: 2px solid var(--text-color);
  }
`,Zx=R.button.attrs({type:"button"})`
  background: none;
  color: var(--text-color);
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  &:hover {
    border-bottom: 2px solid var(--text-color);
  }
`,SO=R.button.attrs({type:"button"})`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 2rem;
  &:hover {
    background-color: #4d96ff;
  }
`,EO=R.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  backdrop-filter: blur(4px);
`,TO=R.div`
  background-color: var(--bg-color);
  border-radius: 20px;
  padding: ${e=>{switch(e.device){case"mobile":return"2rem 1.5rem";case"tablet":return"2.5rem 2rem";default:return"3rem 2.5rem"}}};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: ${e=>{switch(e.device){case"mobile":return"280px";case"tablet":return"350px";default:return"400px"}}};
  max-width: 90vw;

  @media (max-width: var(--tablet)) {
    padding: 2rem 1.5rem;
    min-width: 280px;
  }

  @media (max-width: var(--mobile)) {
    padding: 1.5rem 1rem;
    min-width: 260px;
  }
`,CO=R.h2`
  font-size: ${e=>{switch(e.device){case"mobile":return"1.3rem";case"tablet":return"1.5rem";default:return"1.75rem"}}};
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  text-align: center;

  @media (max-width: var(--tablet)) {
    font-size: 1.4rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 1.2rem;
  }
`,jO=R.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.device==="mobile"?"0.75rem":"1rem"};

  @media (max-width: var(--mobile)) {
    gap: 0.75rem;
  }
`,Wx=R.button.attrs({type:"button"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.2rem";default:return"1.25rem"}}};
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  border: none;
  border-radius: 12px;
  font-size: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.1rem";default:return"1.15rem"}}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    font-family: inherit;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.1rem;
    font-size: 1.05rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.9rem;
    font-size: 0.95rem;
    gap: 0.75rem;
  }
`,AO=R.button.attrs({type:"button"})`
  padding: ${e=>{switch(e.device){case"mobile":return"0.8rem";case"tablet":return"0.9rem";default:return"1rem"}}};
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--meta-text-color);
  border-radius: 12px;
  font-size: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.05rem";default:return"1.1rem"}}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--meta-text-color);
    color: var(--bg-color);
  }

  @media (max-width: var(--tablet)) {
    padding: 0.85rem;
    font-size: 1rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;function RO({navigationBlocked:e}){const a=(l,u="",d="")=>{const m=`mailto:${l}?subject=${encodeURIComponent(u)}&body=${encodeURIComponent(d)}`;window.location.href=m},r=xn(),{device:o}=Lr();return h.jsxs(DO,{device:o,children:[h.jsxs(zO,{device:o,children:[h.jsxs(OO,{device:o,children:[h.jsx(Cw,{fontSize:o==="mobile"?50:70,scale:.3,variant:2}),h.jsx(kO,{device:o,children:"Your perfect fit, our mission"})]}),h.jsxs(Jx,{device:o,children:[h.jsx(eb,{device:o,children:"Quick Links"}),h.jsxs(tb,{device:o,children:[h.jsx(Xs,{device:o,onClick:()=>r("/"),disabled:e,children:"Home"}),h.jsx(Xs,{device:o,onClick:()=>r("/about-us"),disabled:e,children:"About Us"}),h.jsx(Xs,{device:o,onClick:()=>a("fitfindercsed@gmail.com","Inquiry about FITFINDER","Hello, I would like to know more about your platform..."),disabled:e,children:"Contact"})]})]}),h.jsxs(Jx,{device:o,children:[h.jsx(eb,{device:o,children:"Legal"}),h.jsxs(tb,{device:o,children:[h.jsx(Xs,{device:o,onClick:()=>r("/privacy-policy"),disabled:e,children:"Privacy Policy"}),h.jsx(Xs,{device:o,onClick:()=>r("/terms-of-service"),disabled:e,children:"Terms of Service"})]})]})]}),h.jsx(LO,{device:o,children:h.jsxs(NO,{device:o,children:["© ",new Date().getFullYear()," FitFinder. All rights reserved."]})})]})}const MO=ct`
    from{
        transform: translateY(10%);
    }  
    to{
        transform: translateY(0%);
    }
`,DO=R.footer`
  color: var(--text-color);
  padding: ${e=>{switch(e.device){case"mobile":return"2rem 1.5rem";case"tablet":return"2rem 2rem";default:return"2rem 3rem"}}};

  ${e=>e.device==="mobile"&&"padding-bottom: 4.5rem"};
  width: 100%;
  max-width: 100%;
  bottom: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -2px 5px var(--back-drop-shadow-color);
  animation: ${MO} 1s;
  margin-top: auto;
  box-sizing: border-box;

  @media (max-width: var(--tablet)) {
    padding: 2rem 2rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 2rem 1.5rem;
  }
`,zO=R.div`
  display: grid;
  grid-template-columns: ${e=>{switch(e.device){case"mobile":return"1fr";case"tablet":return"1fr 1fr";default:return"2fr 1fr 1fr"}}};
  gap: ${e=>e.device==="mobile"?"2rem":"3rem"};
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--back-drop-shadow-color);

  @media (max-width: var(--tablet)) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: var(--mobile)) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,OO=R.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.device==="mobile"?"center":"flex-start"};
  gap: 0.5rem;

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`,kO=R.p`
  margin: 0;
  font-size: ${e=>e.device==="mobile"?"0.938rem":"1rem"};
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: var(--text-color);
  opacity: 0.8;
`,Jx=R.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.device==="mobile"?"center":"flex-start"};
  gap: 1rem;

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`,eb=R.h3`
  margin: 0;
  font-size: ${e=>e.device==="mobile"?"1.063rem":"1.125rem"};
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--text-color);
`,tb=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: ${e=>e.device==="mobile"?"center":"flex-start"};

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`,LO=R.div`
  padding-top: 1.5rem;
  text-align: center;
`,Xs=R.a`
  color: var(--links-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.005em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: var(--mobile)) {
    font-size: 0.875rem;
  }
`,NO=R.span`
  font-size: ${e=>{switch(e.device){case"mobile":return"0.813rem";case"tablet":return"0.875rem";default:return"0.875rem"}}};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  opacity: 0.75;

  @media (max-width: var(--tablet)) {
    font-size: 0.875rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 0.813rem;
  }
`;function _O(){const[e,a]=w.useState(!1),[r,o]=w.useState(!1);return h.jsxs(UO,{children:[h.jsx(vO,{navigationBlocked:e,setIsSideBarOpen:o}),h.jsx(rO,{isOpen:r,setIsOpen:o,children:h.jsx("div",{})}),h.jsxs(VO,{children:[h.jsx(qC,{context:{setNavigationBlocked:a}}),h.jsx(RO,{navigationBlocked:e})]})]})}const UO=R.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* full viewport height, not min-height */
  overflow: hidden;
  background-color: var(--bg-color);
  transition: 0.5s ease-in-out;
`,VO=R.main`
  flex: 1;
  overflow-y: auto; /* internal scrolling here */
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;function BO(e={}){const{nonce:a,onScriptLoadSuccess:r,onScriptLoadError:o}=e,[l,u]=w.useState(!1),d=w.useRef(r);d.current=r;const m=w.useRef(o);return m.current=o,w.useEffect(()=>{const p=document.createElement("script");return p.src="https://accounts.google.com/gsi/client",p.async=!0,p.defer=!0,p.nonce=a,p.onload=()=>{var g;u(!0),(g=d.current)===null||g===void 0||g.call(d)},p.onerror=()=>{var g;u(!1),(g=m.current)===null||g===void 0||g.call(m)},document.body.appendChild(p),()=>{document.body.removeChild(p)}},[a]),l}const X2=w.createContext(null);function HO({clientId:e,nonce:a,onScriptLoadSuccess:r,onScriptLoadError:o,children:l}){const u=BO({nonce:a,onScriptLoadSuccess:r,onScriptLoadError:o}),d=w.useMemo(()=>({clientId:e,scriptLoadedSuccessfully:u}),[e,u]);return We.createElement(X2.Provider,{value:d},l)}function $O(){const e=w.useContext(X2);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function PO(e){var a;return(a=e?.clientId)!==null&&a!==void 0?a:e?.client_id}const FO={large:40,medium:32,small:20};function nb({onSuccess:e,onError:a,useOneTap:r,promptMomentNotification:o,type:l="standard",theme:u="outline",size:d="large",text:m,shape:p,logo_alignment:g,width:y,locale:v,click_listener:b,containerProps:S,...T}){const M=w.useRef(null),{clientId:j,scriptLoadedSuccessfully:C}=$O(),z=w.useRef(e);z.current=e;const N=w.useRef(a);N.current=a;const q=w.useRef(o);return q.current=o,w.useEffect(()=>{var H,A,$,P,X,se,pe,Ne,de;if(C)return($=(A=(H=window?.google)===null||H===void 0?void 0:H.accounts)===null||A===void 0?void 0:A.id)===null||$===void 0||$.initialize({client_id:j,callback:ge=>{var ze;if(!ge?.credential)return(ze=N.current)===null||ze===void 0?void 0:ze.call(N);const{credential:D,select_by:_}=ge;z.current({credential:D,clientId:PO(ge),select_by:_})},...T}),(se=(X=(P=window?.google)===null||P===void 0?void 0:P.accounts)===null||X===void 0?void 0:X.id)===null||se===void 0||se.renderButton(M.current,{type:l,theme:u,size:d,text:m,shape:p,logo_alignment:g,width:y,locale:v,click_listener:b}),r&&((de=(Ne=(pe=window?.google)===null||pe===void 0?void 0:pe.accounts)===null||Ne===void 0?void 0:Ne.id)===null||de===void 0||de.prompt(q.current)),()=>{var ge,ze,D;r&&((D=(ze=(ge=window?.google)===null||ge===void 0?void 0:ge.accounts)===null||ze===void 0?void 0:ze.id)===null||D===void 0||D.cancel())}},[j,C,r,l,u,d,m,p,g,y,v]),We.createElement("div",{...S,ref:M,style:{height:FO[d],...S?.style}})}class Zs extends Error{}Zs.prototype.name="InvalidTokenError";function YO(e){return decodeURIComponent(atob(e).replace(/(.)/g,(a,r)=>{let o=r.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}function GO(e){let a=e.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return YO(a)}catch{return atob(a)}}function ab(e,a){if(typeof e!="string")throw new Zs("Invalid token specified: must be a string");a||(a={});const r=a.header===!0?0:1,o=e.split(".")[r];if(typeof o!="string")throw new Zs(`Invalid token specified: missing part #${r+1}`);let l;try{l=GO(o)}catch(u){throw new Zs(`Invalid token specified: invalid base64 for part #${r+1} (${u.message})`)}try{return JSON.parse(l)}catch(u){throw new Zs(`Invalid token specified: invalid json for part #${r+1} (${u.message})`)}}function XO({usedForm:e,setUsedForm:a,setNavigationBlocked:r}){const[o,l]=w.useState({}),[u,d]=w.useState({}),[m,p]=w.useState({}),[g,y]=w.useState(!1),[v,b]=w.useState(!1),[S,T]=w.useState("login"),[M,j]=w.useState(""),[C,z]=w.useState({emailAlreadyExist:!1,wrongPassword:!1,wrongCode:!1}),{login:N,signup:q,sendCode:H,updatePassword:A}=Ho(),$=xn();w.useEffect(()=>{let _=document.getElementById("container"),I;return _&&(I=setTimeout(()=>{e=="login"?_.classList.add("sign-in"):e=="signup"&&_.classList.add("sign-up")},200)),()=>clearTimeout(I)},[]),w.useEffect(()=>{T("login"),P(e)},[e]);const P=_=>{_=="login"?(container.classList.remove("sign-up"),container.classList.add("sign-in")):(container.classList.remove("sign-in"),container.classList.add("sign-up")),a(_)},X=_=>{const{name:I,value:oe}=_.target;l(ue=>({...ue,[I]:oe}))},se=_=>{const{name:I,value:oe}=_.target;d(ue=>({...ue,[I]:oe}))},pe=_=>{const{name:I,value:oe}=_.target;p(ue=>({...ue,[I]:oe}))},Ne=async _=>{_.preventDefault();const I=document.getElementById("password");if(o.password.length==0){I.setCustomValidity("Please enter a password."),I.reportValidity();return}else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]).{8,64}$/.test(o.password)){I.setCustomValidity("Password must follow the below red conditions."),I.reportValidity();return}In.flushSync(()=>{b(!0),r(!0)});try{const oe=await q(o.username,o.email,o.password);if(oe.status==409)z(ue=>({...ue,emailAlreadyExist:!0})),st.notifyError("Email already exists");else if(oe.status==201)$("/",{state:{cameFrom:"signup"}}),st.notifySuccess("Welcome to FitFinder");else throw new Error(oe.status)}catch(oe){st.notifyError("Signup failed: ",oe)}In.flushSync(()=>{b(!1),r(!1)})},de=async _=>{_.preventDefault(),In.flushSync(()=>{b(!0),r(!0)});try{const I=await N(u.email,u.password);if(I.status==422)st.notifyError("Password is not correct"),z(oe=>({...oe,wrongPassword:!0}));else if(I.status==200)st.notifySuccess("Welcome back!"),$("/",{state:{cameFrom:"login"}});else throw new Error(I.status)}catch(I){st.notifyError("Login failed: ",I)}In.flushSync(()=>{b(!1),r(!1)})},ge=async _=>{_.preventDefault(),In.flushSync(()=>{b(!0),r(!0)});try{const I=await H(m.email);if(I.status==200){const oe=I.json();j(oe.code),st.notifySuccess("Verification code sent to your email."),T("verifyCode")}else throw new Error(I.status)}catch(I){st.notifyError("Sending code failed: ",I)}In.flushSync(()=>{b(!1),r(!1)})},ze=async _=>{_.preventDefault(),In.flushSync(()=>{b(!0),r(!0)}),m.code===M?T("updatePassword"):z(I=>({...I,wrongCode:!0})),In.flushSync(()=>{b(!1),r(!1)})},D=async _=>{_.preventDefault(),In.flushSync(()=>{b(!0),r(!0)});try{const I=await A(m.email,m.password);if(I.status==200)st.notifySuccess("Password updated successfully. You can now log in with your new password."),T("login");else throw new Error(I.status)}catch(I){st.notifyError("Updating password failed: ",I)}In.flushSync(()=>{b(!1),r(!1)})};return h.jsxs("div",{id:"container",className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col align-items-center flex-col sign-up",children:h.jsx("div",{className:"form-wrapper align-items-center",children:h.jsxs("form",{onSubmit:Ne,className:"form sign-up",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-lock-alt"}),h.jsx("input",{type:"text",name:"username",placeholder:"Username",pattern:"^[A-Za-z]+[A-Za-z0-9._]+$",minLength:3,maxLength:30,title:"Username can only contain letters, numbers, must start with a letter and of length between 3 to 30 characters",onChange:X,required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{type:"email",name:"email",placeholder:"Email",pattern:"^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[A-Za-z]{2,}$",title:"Please enter a valid email address in the format: username@example.com",onChange:X,style:{border:C.emailAlreadyExist&&"1px solid red"},required:!0}),C.emailAlreadyExist&&h.jsx("p",{style:{color:"red",textAlign:"start"},children:"Email already exists."})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("input",{type:g?"text":"password",name:"password",placeholder:"Password",title:"Must contain 8-64 characters, with at least one uppercase, one lowercase, one number, and one special character.",onChange:X,required:!0}),g?h.jsx(Fs,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)}):h.jsx(Ps,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)})]}),h.jsx("div",{style:{display:(o.password==null||o.password.length==0)&&"none"},children:h.jsxs("ul",{className:"password-requirements",children:[h.jsx("li",{style:{color:/.{8,64}/.test(o.password)?"green":"red"},children:"At least 8 characters and at most 64 characters"}),h.jsx("li",{style:{color:/[A-Z]/.test(o.password)?"green":"red"},children:"At least one uppercase letter (A-Z)"}),h.jsx("li",{style:{color:/[a-z]/.test(o.password)?"green":"red"},children:"At least one lowercase letter (a-z)"}),h.jsx("li",{style:{color:/\d/.test(o.password)?"green":"red"},children:"At least one digit (0-9)"}),h.jsxs("li",{style:{color:/[!@#$%^&*()_+\-=\[\]{};':",.<>\/?\\|]/.test(o.password)?"green":"red"},children:["At least one special character (!@#$%^&*()_+-=[]",`;':",. <>/?\\|)`]})]})}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-lock-alt"}),h.jsx("input",{name:"password",type:g?"text":"password",placeholder:"Confirm Password",pattern:o.password,title:"Your passwords must match",required:!0}),g?h.jsx(Fs,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)}):h.jsx(Ps,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)})]}),h.jsx("button",{className:"signupButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Sign up"}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"or"})}),h.jsx("div",{className:"google-signin",children:h.jsx(nb,{onSuccess:_=>{const I=ab(_.credential);console.log("Google user info:",I),$("/",{state:{cameFrom:"google-signup"}})},onError:()=>{console.log("Google Sign In Failed")}})}),h.jsxs("p",{children:[h.jsx("span",{children:"Already have an account?"}),h.jsx(Ja,{onClick:_=>v?_.preventDefault():P("login"),className:"pointer",children:"  Log in here"})]})]})})}),h.jsxs("div",{className:"col align-items-center flex-col sign-in",children:[h.jsxs("div",{className:"form-wrapper align-items-center",children:[h.jsxs("form",{onSubmit:de,className:"form sign-in",style:{display:S!="login"&&"none",animation:S=="login"&&"fadeIn 0.5s"},children:[h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{name:"email",placeholder:"Email",required:!0,onChange:se})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("input",{type:g?"text":"password",name:"password",placeholder:"Password",onChange:se,style:{border:C.wrongPassword&&"1px solid red"},required:!0}),g?h.jsx(Fs,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)}):h.jsx(Ps,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)})]}),C.wrongPassword&&h.jsxs("p",{style:{color:"red",textAlign:"start"},children:["Entered password is not correct please try again or press"," ",h.jsx("br",{}),h.jsx("strong",{children:"Forgot your Passord"}),"."]}),h.jsx(Ja,{onClick:_=>{_.preventDefault(),T("sendCode")},className:"pointer",children:"Forgot your password?"}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Log in"}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"or"})}),h.jsx("div",{className:"google-signin",children:h.jsx(nb,{onSuccess:_=>{const I=ab(_.credential);console.log("Google user info:",I),$("/home")},onError:()=>{console.log("Google Sign In Failed")}})}),h.jsxs("p",{children:[h.jsx("span",{children:"Don't have an account?"}),h.jsx(Ja,{onClick:_=>v?_.preventDefault():P("signup"),className:"pointer",children:"  Sign up here"})]})]}),h.jsxs("form",{onSubmit:ge,className:"form sign-in send-code-form",style:{display:S!="sendCode"&&"none",animation:S=="sendCode"&&"fadeIn 0.5s"},children:[h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{type:"email",name:"email",placeholder:"Email",required:!0,onChange:pe})]}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Send Code"})]}),h.jsxs("form",{onSubmit:ze,className:"form sign-in send-code-form",style:{display:S!="verifyCode"&&"none",animation:S=="verifyCode"&&"fadeIn 0.5s"},children:[h.jsx("p",{children:"Please copy and past the code sent to your email in the field below."}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{type:"text",name:"code",placeholder:"Code",style:{border:C.wrongCode&&"1px solid red"},onChange:pe,required:!0}),C.wrongCode&&h.jsx("p",{style:{color:"red"},children:"The code doesn't match the one sent to your email, please try again or press resend."})]}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Verify Code"}),h.jsxs("p",{children:[h.jsx(Ja,{onClick:ge,className:"pointer",children:"Resend"}),h.jsx("span",{children:" code."})]})]}),h.jsxs("form",{onSubmit:D,className:"form sign-in",style:{display:S!="updatePassword"&&"none",animation:S=="updatePassword"&&"fadeIn 0.5s"},children:[h.jsxs("div",{className:"input-group",children:[h.jsx("input",{type:g?"text":"password",name:"password",placeholder:"Password",title:"Must contain 8-64 characters, with at least one uppercase, one lowercase, one number, and one special character.",onChange:pe,required:!0}),g?h.jsx(Fs,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)}):h.jsx(Ps,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)})]}),h.jsx("div",{style:{display:(m.password==null||m.password.length==0)&&"none"},children:h.jsxs("ul",{className:"password-requirements",children:[h.jsx("li",{style:{color:/.{8,64}/.test(m.password)?"green":"red"},children:"At least 8 characters and at most 64 characters"}),h.jsx("li",{style:{color:/[A-Z]/.test(m.password)?"green":"red"},children:"At least one uppercase letter (A-Z)"}),h.jsx("li",{style:{color:/[a-z]/.test(m.password)?"green":"red"},children:"At least one lowercase letter (a-z)"}),h.jsx("li",{style:{color:/\d/.test(m.password)?"green":"red"},children:"At least one digit (0-9)"}),h.jsxs("li",{style:{color:/[!@#$%^&*()_+\-=\[\]{};':",.<>\/?\\|]/.test(m.password)?"green":"red"},children:["At least one special character (!@#$%^&*()_+-=[]",`;':",. <>/?\\|)`]})]})}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-lock-alt"}),h.jsx("input",{name:"password",type:g?"text":"password",placeholder:"Confirm Password",pattern:m.password,title:"Your passwords must match",required:!0}),g?h.jsx(Fs,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)}):h.jsx(Ps,{alt:g?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!g)})]}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Update Password"})]})]}),h.jsx("div",{className:"form-wrapper"})]})]}),h.jsxs(qO,{className:"row content-row",children:[h.jsxs("div",{className:"col align-items-center flex-col",children:[h.jsx("div",{className:"text sign-in",children:h.jsx("h2",{children:"Welcome back"})}),h.jsx("div",{className:"img sign-in"})]}),h.jsxs("div",{className:"col align-items-center flex-col",children:[h.jsx("div",{className:"img sign-up"}),h.jsx("div",{className:"text sign-up",children:h.jsx("h2",{children:"Join with us"})})]})]})]})}const qO=R.div`
  @media (max-width: var(--mobile)) {
    .container.sign-in .text.sign-in h2,
    .container.sign-in .text.sign-in p,
    .container.sign-in .img.sign-in img,
    .container.sign-up .text.sign-up h2,
    .container.sign-up .text.sign-up p,
    .container.sign-up .img.sign-up img {
      transform: translateY(150%) !important;
    }
  }
`;function IO(){const e=na(),a=e.state?.form||"signup",[r,o]=w.useState(a),{setNavigationBlocked:l}=jC();return w.useEffect(()=>{o(e.state?.form)},[e.state]),h.jsx("div",{children:h.jsx(XO,{usedForm:r,setUsedForm:o,setNavigationBlocked:l})})}const KO="/FitFinder/assets/noDataFound-CKZsNQN8.svg";function id(e){return Pp({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(e)}function QO({src:e,alt:a}){const[r,o]=w.useState("loading");return h.jsxs(q2,{children:[r==="loading"&&h.jsx(I2,{}),r==="error"&&h.jsx(f8,{children:"No image"}),h.jsx("img",{src:e,alt:a,onLoad:()=>o("loaded"),onError:()=>o("error"),style:{opacity:r==="loaded"?1:0}})]})}function ZO(){const{device:e}=Lr(),[a,r]=w.useState([]),[o,l]=w.useState([]),[u,d]=w.useState("similarity"),[m,p]=w.useState(!0),[g,y]=w.useState([]),[v,b]=w.useState(e!=="mobile"),S=na(),T=xn(),M=S.state?.searchingPeice||null,[j,C]=w.useState({category:new Set,store:new Set});w.useEffect(()=>{b(e!=="mobile")},[e]),w.useEffect(()=>{const P=S.state?.products||[];setTimeout(()=>{const X=JSON.parse(JSON.stringify(P));H(X),z(X),N(X),y(X),p(!1)},500)},[]);const z=P=>{const X=[];P.forEach(se=>{se.category&&!X.includes(se.category)&&X.push(se.category)}),r(X)},N=P=>{const X=[];P.forEach(se=>{X.includes(se.seller)||X.push(se.seller)}),l(X)},q=P=>{const{hostname:X}=new URL(P);return X.replace(/^www\./,"").split(".")[0].replace(/-/g," ")},H=P=>{P.forEach(X=>{X.seller=q(X.itemWebURL)})},A=(P,X)=>{C(se=>{const pe={...se,[P]:new Set(se[P])};return pe[P].has(X)?pe[P].delete(X):pe[P].add(X),pe})},$=g.filter(P=>!(j.store.size&&!j.store.has(P.seller)||j.category.size&&!j.category.has(P.category))).sort((P,X)=>u==="lowest_price"?P.price-X.price:u==="highest_price"?X.price-P.price:0);return h.jsx(WO,{children:h.jsxs(JO,{device:e,children:[h.jsxs(e8,{device:e,children:[h.jsx(t8,{children:M?h.jsx(n8,{src:M}):h.jsx(a8,{children:"Segmented Image"})}),h.jsxs(i8,{children:[h.jsx("h3",{children:"Filters"}),e!=="desktop"&&h.jsx(r8,{onClick:()=>b(P=>!P),children:v?"Hide":"Show"})]}),v&&h.jsxs(o8,{device:e,children:[h.jsxs(ib,{children:[h.jsx("h4",{children:"Category"}),a.map(P=>h.jsxs(rb,{onClick:()=>A("category",P),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:j.category.has(P)}),h.jsx("label",{children:P})]},P))]}),h.jsxs(ib,{children:[h.jsx("h4",{children:"Store"}),o.map(P=>h.jsxs(rb,{onClick:()=>A("store",P),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:j.store.has(P)}),h.jsx("label",{children:P})]},P))]})]})]}),h.jsxs(s8,{children:[h.jsx(l8,{children:h.jsxs(c8,{children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:u,onChange:P=>d(P.target.value),children:[h.jsx("option",{value:"similarity",children:"similarity"}),h.jsx("option",{value:"lowest_price",children:"lowest price"}),h.jsx("option",{value:"highest_price",children:"highest price"})]})]})}),h.jsx(u8,{device:e,children:m?Array.from({length:8}).map((P,X)=>h.jsxs(ob,{children:[h.jsx(q2,{children:h.jsx(I2,{})}),h.jsxs(sb,{children:[h.jsx(lb,{children:"Loading..."}),h.jsxs(cb,{children:[h.jsx(ub,{children:"--"}),h.jsx(db,{children:"--"})]})]})]},X)):$.map(P=>h.jsxs(ob,{onClick:()=>T(`/product/${P.item_id}`,{state:{product:P,similarProducts:$.filter(X=>X.category===P.category)}}),children:[h.jsx(QO,{src:P.imageURL,alt:P.title}),P.favorite&&h.jsx(h8,{"aria-label":"Remove from favorites",title:"Remove from favorites",children:h.jsx(id,{size:25})}),h.jsxs(sb,{children:[h.jsx(lb,{children:P.title}),h.jsxs(cb,{children:[h.jsxs(ub,{children:[P.price," ",P.currency]}),h.jsx(db,{children:P.seller})]})]})]},P.item_id))}),$.length===0&&!m&&h.jsx("img",{src:KO,style:{}})]})]})})}const WO=R.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
`,JO=R.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"260px 1fr":"320px 1fr"};
  gap: ${({device:e})=>e==="mobile"?"1.25rem":"2rem"};
  padding: 0 1rem;
`,e8=R.aside`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: ${({device:e})=>e==="desktop"?"sticky":"static"};
  top: 84px;
  align-self: start;
`,t8=R.div`
  border-radius: 10px;
  padding: 1rem;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color);
  background: var(--card-bg-color);
`,n8=R.img`
  max-width: 100%;
  max-height: 320px;
  object-fit: contain;
`,a8=R.div`
  color: #777;
`,i8=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.25rem;
`,r8=R.button`
  border: 1px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--text-color);
    color: var(--bg-color);
  }
`,o8=R.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`,ib=R.div`
  margin-top: 1rem;
`,rb=R.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`,s8=R.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,l8=R.div`
  display: flex;
  justify-content: flex-end;
`,c8=R.div`
  display: flex;
  gap: 0.5rem;
  select {
    padding: 0.2rem;
    border-radius: 20px;
  }
`,u8=R.div`
  display: grid;
  gap: ${({device:e})=>e==="mobile"?"0.9rem":"1.1rem"};
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"repeat(2, 1fr)":"repeat(4, 1fr)"};
`,ob=R.div`
  position: relative;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  color: var(--text-color);
  box-shadow: 0 0 2px 5px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: scale(1.02);
  }
`,sb=R.div`
  padding: 0.8rem;
`,lb=R.h3`
  font-size: 0.95rem;
  height: 40px;
  overflow: hidden;
`,cb=R.div`
  display: flex;
  justify-content: space-between;
`,ub=R.span`
  font-weight: 700;
`,db=R.span`
  font-size: 0.85rem;
  color: #666;
`,d8=ct`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,q2=R.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
`,I2=R.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${d8} 1.4s infinite;
`,f8=R.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #888;
`,h8=R.button`
  position: absolute;
  top: 0; /* sits over the image */
  right: 0;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #e63946; /* neutral by default */
  margin: 1rem;
  transition:
    color 160ms ease,
    transform 120ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,El={addToFavorite:async e=>{try{return await tn(`/api/v1/favorites/${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"application/json"},skipAuth:!1})}catch(a){throw console.error("favoriteService.addToFavorite error: ",a),a}},removeFromFavorite:async e=>{try{return await tn(`/api/v1/favorites/${encodeURIComponent(e)}`,{method:"DELETE",skipAuth:!1})}catch(a){throw console.error("favoriteService.removeFromFavorite error: ",a),a}},removeFromFavoritesList:async e=>{try{return await tn(`api/v1/favorites/id/${encodeURI(e)}`,{method:"DELETE",skipAuth:!1})}catch(a){throw console.error("favoriteService.removeFromFavoritesList error: ",a),err}},getFavorites:async()=>{try{const e=await tn("/api/v1/favorites",{method:"GET",skipAuth:!1});if(!e.ok){const a=await e.text().catch(()=>null);throw new Error(`Failed to fetch favorites: ${e.status} ${a||""}`)}return await e.json()}catch(e){throw console.error("favoriteService.getFavorites error:",e),e}},toggleFavorite:async(e,a)=>a?await El.addToFavorite(e):await El.removeFromFavorite(e)};function m8(){const{id:e}=RC(),a=na(),r=xn(),o=a.state?.product||{favorite:!1,item_id:e,title:`Product ${e}`,price:"0.00",seller:"Unknown",imageURL:`https://picsum.photos/seed/product-${e}/600/720`,description:"No description available. In a real app fetch product details from the backend using the id."},l=a.state?.similarProducts||[],u=o.description,[d,m]=u.split(" Description "),[p,g]=w.useState(o.favorite),[y,v]=w.useState(!1),{isAuthenticated:b}=Ho(),S=xn(),T=d.split(/[•🔹]|\s{3}/).map(j=>j.trim()).filter(Boolean),M=async()=>{if(!b()){S("/registration",{state:{form:"signup"}});return}try{if(!(await El.toggleFavorite(o.item_id,!p)).ok)throw new Error("Failed to toggle favorite");g(C=>!C),v(!0),setTimeout(()=>v(!1),480)}catch(j){console.error("Something went wrong in setting as favorite: ",j),st.notifyError("Failed to add to favorites")}};return h.jsxs(p8,{children:[h.jsxs(g8,{children:[h.jsx(y8,{children:h.jsxs(v8,{children:[h.jsx(S8,{src:o.imageURL,alt:o.title}),h.jsxs($8,{onClick:M,className:y?"animating":"","aria-label":p?"Unlike":"Like","aria-pressed":p,children:[p?h.jsx(id,{size:25}):h.jsx(H2,{}),h.jsx(w8,{className:y?"burst":"","aria-hidden":!0})]})]})}),h.jsxs(E8,{children:[h.jsxs(T8,{children:[h.jsx("h1",{children:o.title}),h.jsxs(C8,{children:["$",o.price]})]}),h.jsx(j8,{children:h.jsxs("span",{children:["Seller: ",o?.seller||"Unknown"]})}),h.jsxs(A8,{children:[h.jsx(R8,{children:T.map((j,C)=>h.jsx("li",{children:j},C))}),m&&h.jsx(M8,{children:m})]}),h.jsxs(D8,{children:[h.jsx(O8,{onClick:()=>r(-1),children:"Back"}),h.jsx(z8,{onClick:()=>window.open(o.itemWebURL,"_blank","noopener,noreferrer"),children:"Go to Store"})]})]})]}),h.jsxs(k8,{children:[h.jsx(L8,{children:h.jsx("h3",{children:"Similar products"})}),h.jsx(N8,{children:l.map(j=>h.jsxs(_8,{onClick:()=>r(`/product/${j.item_id}`,{state:{product:j,similar:l}}),children:[h.jsx(U8,{src:j.imageURL,alt:j.title}),h.jsxs(V8,{children:[h.jsx(B8,{children:j.title}),h.jsxs(H8,{children:[h.jsxs("span",{children:["$",j.price]}),h.jsxs("small",{children:["Sold by ",j.seller]})]})]})]},j.item_id))})]})]})}const p8=R.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  /* background: #fafafa; */
  color: var(--text-color);
`,g8=R.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,y8=R.div``,v8=R.div`
  position: relative;
  background: var(--bg-color);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 10px 0px 20px var(--back-drop-shadow-color);
  transition: 0.5s ease-in-out;
`,x8=ct`
  0% { transform: scale(1); }
  35% { transform: scale(1.22); }
  55% { transform: scale(0.95); }
  100% { transform: scale(1); }
`,b8=ct`
  0% { transform: scale(0.0); opacity: 0.8; }
  40% { transform: scale(1.05); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
`,w8=R.span`
  position: absolute;
  top: -14px;
  right: -14px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  pointer-events: none;
  transform: scale(0);
  opacity: 0;
  background: radial-gradient(
    circle at center,
    rgba(239, 68, 68, 0.9) 0%,
    rgba(239, 68, 68, 0.15) 40%,
    rgba(239, 68, 68, 0) 60%
  );
  filter: blur(6px);

  &.burst {
    animation: ${b8} 480ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
`,S8=R.img`
  width: 100%;
  max-height: 420px; /* <- reduced from 620px */
  height: auto; /* keep aspect ratio */
  object-fit: contain;
  border-radius: 8px;
`,E8=R.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,T8=R.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h1 {
    margin: 0;
    font-size: 1.3rem;
  }
`,C8=R.span`
  font-weight: 800;
  font-size: 1.2rem;
`,j8=R.div`
  color: var(--meta-text-color);
  font-size: 0.95rem;
  display: flex;
  gap: 1rem;
`,A8=R.div`
  /* background: #ffffff; */
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--text-color);
  color: var(--text-color);
`,R8=R.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.6rem;
    line-height: 1.45;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #6366f1; /* subtle accent */
      font-size: 1.2rem;
      line-height: 1;
    }
  }
`,M8=R.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
`,D8=R.div`
  display: flex;
  gap: 0.75rem;
`,z8=R.button`
  background: #4d96ff;
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    scale: 1.02;
  }
`,O8=R.button`
  background: transparent;
  border: 1px solid #ddd;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-color);
  &:hover {
    background-color: #f3f4f6;
    transform: translateX(-1rem);
    color: var(--hovered-text-color);
  }
`,k8=R.section`
  max-width: 1200px;
  margin: 1rem auto 3rem;
  padding: 0 0.5rem;
`,L8=R.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.6rem;
  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
`,N8=R.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`,_8=R.div`
  position: relative;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  color: var(--text-color);
  box-shadow: 0 0 2px 5px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: scale(1.02);
  }
`,U8=R.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`,V8=R.div`
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,B8=R.h4`
  margin: 0;
  font-size: 0.95rem;
  height: 38px;
  overflow: hidden;
`,H8=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
`,$8=R.button`
  position: absolute;
  top: 10px;
  right: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: white;
  color: #ef4444; /* red */
  padding: 8px;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
  }

  svg {
    width: 22px;
    height: 22px;
    transition:
      transform 180ms ease,
      fill 220ms ease,
      color 220ms ease;
    color: rgba(239, 68, 68, 0.95);
  }

  &.animating svg {
    animation: ${x8} 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }
`,Xh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwklEQVR4nO2Zy28OURjGZ1Gi0WotkBSRiEttWtRfUCRi4bJAiL8AkbgvlI3Lwq0hlqoLOwtxFy3+BlRcEixI7FRc2ib4+pO3eU7zZqh+882YqeR7kknmnM55z3m+816ecxpFVVQxMQEsAa4AH0iODxrbXDSJtcAA6WE21hRFYi7wSQu5BMyvwMZ84LJsmK05/2a1f1/EVS3gWga2rsnW1WxWV/7EK51LzMvA3hzgq2ymczFgGnAU6AOGyvTtQ2lJuPkPlTnnkNZ4BKiPG2kG3pIML4DJGRKZLJtJ8GY042knAomnQDswJZqgAKbItfscmfpI7hRITFgCYxAKZDoi12iPMgCwWP7+QK7yTY+99wIHgUUZzbVKa38SucBOtRvACuBhAv82om0p56yVrUFrjCCFsUnARWBYpj6qQK7T7kzVY+/rgS59g8ZcAGpSzD+CVESA6cAjV1OOWfIoY5wlmOP2S7rdaSyEiHYikHgHLIv9fRawBdijx95nxr5pA947MjVFELnoSDS5/mXAPaDE77C+u8BS932TI3M+VyIK7GG50+hOALuBHzJpmeo6cBY4B9xwStm+2eXGLZeblew9TyIhOx2LkUAETwENfxjXCJxxicGTOaG+3lyIKPugzDPNudMP/aJby7CxTWRsTKv6GoB+2V6YB5Eg7rpcn8WE4VQCO+Zyhjuur1t9B/IgYtXZsN5lp5JioiGBnUbFzM+QzYCNst2TB5FXGjIiM5RWDTfKteFs3dLYTTG3fZkHkXAAqlN7v9qnKyAS3Guv2nVqf82DyJcYkX1qn6mAiKVlwx5X8Q2fi3StmxUQuV2ka/WOEewDSfSSdNqggn1GLNjv50HEzhPx9GuyI5F7AZ0ac/sP6Xd/UQVxqYqbFbltZdjYrm+/Ay2FFESDlKrhuOvbpb5hZaPGMdyp00mUne5vJ5O6VRZE2rSYQS/yRCaIRouZm8pM51QzwvnDdmJHTITaSbXklfE/JyIDdrJDEny262812aEgjuOnMlWL+362k/GdFawjNZEa52Lv4/LbZAew2R2sNoXsFNuJQKKnkIOV00uBzKCk+Lh6S4F90l189BR21I3tzHl3IuxXGt2gG8w6Pc2qE90uO5UU/JlcPgxldB203BXLctCTNLDHuw4KF3QrowxgNcDOE1roC4lMe55bapXIXJDRXKv9BZ3daiNC/9OVaS3wTGs/bB31uggOZOwasjaa2ARWOxKvgxIPsiOQ+Z/w2tYeZ2o702H+luAfPUVgCHhs7jS6E1VUUUUVVVQRpcMvymbfLBmZ5tUAAAAASUVORK5CYII=",fb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrElEQVR4nO1ZTUtUURh+gjGUdHQWFVgQRKZt8vMXlEG06GNhUvQLSoLKbFG6sVpUKoXLykU7F31ZSk71G7KJLNAWCe4yysaBdJx45Tnxdhhz7of3jnAfOHDPmXPee577fp4zQIQIRYt9AB4BmAWQc9hmubYubBJHAKRdELCbyDgcFomdAL5zI/cB7HYhQ9Y8pAyRJTIDxzA38NijnE0AnlDWMALGQWUSu3yQJ5qYp0zPJhYH0AMgBSBToG1fgX8QWYW8M8M9dgOosIVI1Pji0EEnAWz2kYjImnS4h2kd8eKKxHsABwCUonhRStNOKTIrmulRJIqZgI1SReYaVEc04Qdqae+vaSq/2OQ5CaALwF6f3tXKvU9AObZXbbQAeOPAvoVos8d3llHWApRgtygBMAhgmXK+MUEepXa2sMnzMQAPOCfHNfcAxDy8P2f274VIAsBblVN6GTzWgsy5zi9ptFMVFpESReIrgEbr9+0A2gFcYJPnbdYcMa0ZRSYWBpFBRaJajQuhMQDZPH4hY6MAGtT8akXmbtBEWmjfaUsT5wEsUp5EqqcA+gD0A3imKmWZ06HWNdHMsnwOjIiJTr0WCePAtwBU5lknfnBHBQZN5gbHkkERqVXRyTh2I7+yfNFTBcg4TTKypp5jQnyOsmuCIGKKOwmjBmMcE00Uij6ueanGhjh2OQgiSc6XnGCiU5Y+kc+cVkMVfWZJRbMTlD0eBJHPnG/KjHb2xZmdYoRr2yyz/RQEEXMAKme/k/3bcA5jXhfZL2df3rHuRH5aRC6xL9HIKfq5VhKmIM7+jzBN6zmc40WYppVcxdnTDuulBJOgOPtWy9lfBUGkK0/4HXVhXgNcI1qxw29nWAmxgcltmcluLZzh3N8A9oeVEMFKNcdS3KBDlSh9q5hZgpowJco59dtNF2blmUgzN7NgFXkdqmhMMwD0s42o84do4qxVhMpJNWtVxutOBDzZ5ViC71Dj9Sw7lvKU8Uv0CWNO4FpTxg+42IdnIjFlYjN5ym8pO06qg1Wbik5aEzOqLImFQQT0A0NmgaV4IfVWJX0io0iEdtQ1iPFkZ06Ecwyjx3kLWM5WxzwxpKJTlubky+VDxqfroCaVLAtp4y4c+7/XQeaCTq4h/UANzxPjvJSbZ/vI0CrJbo9P7zqkL+i62UltsCvTMgAfuPer4AXwtCLTyknFijJqwpCYUpX4StlhyGykNsW9/4MK3mpPOPijJ4yWAfCO5vRXExEiRIgQIQI84A9V2ClzJr61RQAAAABJRU5ErkJggg==";function Vm({children:e}){const a=w.useRef(null),[r,o]=w.useState(!1);return w.useEffect(()=>{const l=new IntersectionObserver(([u])=>{u.isIntersecting?o(!0):o(!1)},{threshold:.1});return a.current&&l.observe(a.current),()=>l.disconnect()},[]),h.jsx("div",{ref:a,children:r?e:null})}function P8({categoricalProducts:e=null,loading:a=!1}){const r=xn();return h.jsx(Vm,{children:h.jsxs(Y8,{"aria-busy":a,children:[h.jsx(G8,{children:"Most Searched for Items"}),a&&h.jsx(J8,{role:"status",children:"Loading recommendations…"}),h.jsx(X8,{children:a?Array.from({length:6}).map((o,l)=>h.jsxs(Q8,{"aria-hidden":!0,children:[h.jsx(Z8,{}),h.jsx(W8,{})]},l)):Object.entries(e).map(([o,l])=>h.jsxs(q8,{onClick:()=>r("/search-result",{state:{products:e[o],searchingPeice:e[o][0].imageURL}}),children:[h.jsx(I8,{src:l[0].imageURL,alt:o}),h.jsx(K8,{children:o})]},o))})]})})}const F8=ct`
    from{
        opacity: 0.5;
        transform: translateX(10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`,Y8=R.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${F8} 1s;
`,G8=R.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 1rem;
`,X8=R.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  padding: 16px 0;
  overflow-x: scroll;
  scrollbar-width: none;
  width: 100vw;

  &::-webkit-scrollbar {
    display: none;
  }
`,q8=R.div`
  width: 140px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`,I8=R.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 14px;
`,K8=R.span`
  font-size: 14px;
  color: var(--text-color);
`,K2=ct`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,Q8=R.div`
  width: 140px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,Z8=R.div`
  width: 100%;
  height: 140px;
  border-radius: 14px;
  background: var(--skeleton-loader-bg);
  background-size: 200% 100%;
  animation: ${K2} 1.2s linear infinite;
`,W8=R.div`
  width: 70px;
  height: 14px;
  border-radius: 6px;
  background: var(--skeleton-loader-bg);
  background-size: 200% 100%;
  animation: ${K2} 1.2s linear infinite;
`,J8=R.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;function e9({onClose:e}){const[a,r]=w.useState(0),[o,l]=w.useState(!1),u=[{id:1,img:"https://via.placeholder.com/150?text=Style+1"},{id:2,img:"https://via.placeholder.com/150?text=Style+2"},{id:3,img:"https://via.placeholder.com/150?text=Style+3"},{id:4,img:"https://via.placeholder.com/150?text=Style+4"}],d=()=>{a<2?r(a+1):(r(3),setTimeout(()=>m(),1500))},m=()=>{l(!0),setTimeout(()=>e&&e(),400)};return w.useEffect(()=>{const p=setTimeout(()=>{},800);return()=>clearTimeout(p)},[]),h.jsx(a9,{children:h.jsxs(i9,{closing:o,children:[h.jsx("h2",{children:"Hello New user👋, this survey is to gather your preferences for better recommendations."}),a===0&&h.jsxs(h.Fragment,{children:[h.jsx(qh,{children:"Your Gender?"}),h.jsxs(hb,{children:[h.jsx(yr,{onClick:d,children:"Male"}),h.jsx(yr,{onClick:d,children:"Female"}),h.jsx(yr,{onClick:d,children:"Prefer not to say"})]})]}),a===1&&h.jsxs(h.Fragment,{children:[h.jsx(qh,{children:"Your Favorite Color?"}),h.jsxs(hb,{children:[h.jsx(yr,{onClick:d,children:"Red"}),h.jsx(yr,{onClick:d,children:"Blue"}),h.jsx(yr,{onClick:d,children:"Black"}),h.jsx(yr,{onClick:d,children:"White"})]})]}),a===2&&h.jsxs(h.Fragment,{children:[h.jsx(qh,{children:"Your Favorite Style?"}),h.jsx(r9,{children:u.map(p=>h.jsx(o9,{src:p.img,onClick:d},p.id))})]}),a===3&&h.jsxs(l9,{children:["Thank you!",h.jsx(c9,{children:"✔"})]}),a!==3&&h.jsx(s9,{onClick:m,children:"Skip Survey"})]})})}const t9=ct`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,n9=ct`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`,a9=R.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`,i9=R.div`
  width: 400px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${e=>e.closing?n9:t9} 0.4s ease;
`,qh=R.h2`
  margin: 0 0 12px 0;
  font-size: 20px;
  text-align: center;
`,hb=R.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`,yr=R.button`
  width: 100%;
  padding: 10px;
  background: #f1f1f1;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #e1e1e1;
  }
`,r9=R.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 12px;
`,o9=R.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border-color: #999;
  }
`,s9=R.button`
  margin-top: 18px;
  width: 100%;
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  color: #666;
`,l9=R.div`
  text-align: center;
  font-size: 22px;
  padding: 20px 0;
`,c9=R.div`
  font-size: 40px;
  color: green;
  margin-top: 10px;
`,u9={getRandomProducts:()=>tn("/api/v1/items/random",{method:"GET",skipAuth:!0})};function d9(){const e=w.useRef(null),a=w.useRef(null),[r,o]=w.useState(!1),[l,u]=w.useState(null),[d,m]=w.useState({}),[p,g]=w.useState(!0),[y,v]=w.useState(!1),[b,S]=w.useState(!1),M=na().state?.cameFrom||null,j=xn(),{device:C}=Lr(),z="https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog",N="https://www.instagram.com/fitfinder_csed_2026?igsh=ZG5mamtod3lyMWZo&utm_source=ig_contact_invite",q=X=>{const se=X.target.files[0];se&&(u(URL.createObjectURL(se)),o(!0),S(!1))},H=()=>{C==="desktop"?$():S(!0)},A=()=>{a.current.click()},$=()=>{e.current.click()};w.useEffect(()=>{r||(e.current&&(e.current.value=""),a.current&&(a.current.value=""))},[r]),w.useEffect(()=>{(M==="signup"||M==="google-signup")&&v(!0)},[M]),w.useEffect(()=>{g(!0),u9.getRandomProducts().then(X=>{if(X.ok)return X.json();throw new Error("Couldn't fetch random products.")}).then(X=>{m(P(X)),g(!1)}).catch(X=>new Error(X))},[]);const P=(X,{includeNullCategory:se=!1}={})=>{if(!Array.isArray(X))throw new TypeError("Expected an array of products");return X.reduce((pe,Ne)=>{let de=Ne?.category;if(typeof de=="string"&&(de=de.trim()),!de){if(!se)return pe;de="Uncategorized"}return pe[de]||(pe[de]=[]),pe[de].push(Ne),pe},{})};return h.jsxs(S9,{children:[h.jsxs(T9,{device:C,children:[h.jsxs(R9,{device:C,children:[h.jsx(E9,{children:h.jsx("h1",{children:"Welcome to"})}),h.jsx(Cw,{fontSize:C==="mobile"?60:C==="tablet"?100:150}),h.jsx("input",{type:"file",accept:"image/*",ref:e,style:{display:"none"},onChange:q}),h.jsx("input",{type:"file",accept:"image/*",capture:"camera",ref:a,style:{display:"none"},onChange:q}),h.jsxs(C9,{device:C,children:[C==="desktop"?h.jsxs(j9,{device:C,onClick:H,onMouseOver:X=>X.currentTarget.children[0].src=fb,onMouseOut:X=>X.currentTarget.children[0].src=Xh,onFocus:X=>X.currentTarget.children[0].src=fb,onBlur:X=>X.currentTarget.children[0].src=Xh,tabIndex:0,children:[h.jsx("img",{src:Xh,style:{width:"24px",height:"24px",cursor:"pointer"},alt:"Camera Icon"}),h.jsx("label",{style:{marginLeft:"0.5rem",cursor:"pointer"},children:"Search With Image"})]}):h.jsx(O9,{device:C,onClick:()=>j("/registration",{state:{form:"signup"}}),children:"Join"}),h.jsx(A9,{device:C,onClick:()=>j("/about-us"),children:"About us"})]})]}),C==="desktop"&&h.jsx(M9,{device:C,children:h.jsx(v9,{children:h.jsxs(x9,{children:[h.jsxs(b9,{viewBox:"0 0 280 280",preserveAspectRatio:"xMidYMid slice",children:[h.jsx(Ih,{d:"M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z"}),h.jsx(Ih,{d:"M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z"}),h.jsx(Ih,{d:"M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z"}),h.jsx(Kh,{d:"M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z"}),h.jsx(Kh,{d:"M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z"}),h.jsx(Kh,{d:"M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z"}),h.jsx(lu,{cx:"95",cy:"75"}),h.jsx(lu,{cx:"175",cy:"120"}),h.jsx(lu,{cx:"105",cy:"175"}),h.jsx(lu,{cx:"200",cy:"85"})]}),h.jsx(w9,{children:"Click to refine"})]})})})]}),h.jsx(P8,{categoricalProducts:d,loading:p}),h.jsx(Vm,{children:h.jsxs(D9,{children:[h.jsx("h1",{children:"Tell us what you think about FitFinder"}),h.jsxs("p",{style:{display:"flex",alignContent:"center",marginLeft:"1rem"},children:[h.jsx(Nz,{width:C==="mobile"?40:24,height:C==="mobile"?40:24,style:{marginRight:"0.5rem"}}),"Feel free to click ",h.jsx(Ja,{style:{color:"var(--links-color)"},onClick:()=>window.open(z),children:"here"})," and drop us a message."]})]})}),h.jsx(Vm,{children:h.jsxs(z9,{children:[h.jsx("h1",{children:"Follow us on social media"}),h.jsxs("div",{style:{display:"flex",gap:"0.3rem",alignItems:"center"},children:[h.jsx(zz,{width:C==="mobile"?120:60,height:C==="mobile"?120:60}),h.jsxs("p",{children:["Connect with us on Instagram and stay up to date with",C!=="mobile"&&h.jsx("br",{}),"our announcements and future updates.",C!=="mobile"&&h.jsx("br",{}),h.jsx(Ja,{style:{color:"var(--links-color)"},onClick:()=>window.open(N),children:"Follow us"})]})]})]})}),r&&h.jsx(V2,{imageURL:l,setImageURL:u,imageUploaded:r,setImageUploaded:o}),y&&h.jsx(e9,{onClose:()=>v(!1)}),b&&h.jsx(k9,{onClick:()=>S(!1),children:h.jsxs(L9,{device:C,onClick:X=>X.stopPropagation(),children:[h.jsx(N9,{device:C,children:"Choose Image Source"}),h.jsxs(_9,{device:C,children:[h.jsxs(mb,{device:C,onClick:A,children:[h.jsx(_m,{size:24}),h.jsx("span",{children:"Take Photo"})]}),h.jsxs(mb,{device:C,onClick:$,children:[h.jsx($2,{size:24}),h.jsx("span",{children:"Upload from Device"})]})]}),h.jsx(U9,{device:C,onClick:()=>S(!1),children:"Cancel"})]})})]})}const Q2=ct`
    from{
        opacity: 0.5;
        transform: translateX(-10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`,Z2=ct`
    from{
        opacity: 0.5;
        transform: translateX(10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`,f9=ct`
    from{
        opacity: 0.5;
    }
    to{
        opacity: 1;
    }
`,h9=ct`
  0% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    opacity: 0.4;
  }
`,m9=ct`
  0% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
    opacity: 0.8;
  }
`,p9=ct`
  0% {
    r: 3px;
    opacity: 0;
  }
  40% {
    r: 5px;
    opacity: 1;
  }
  100% {
    r: 3px;
    opacity: 0.6;
  }
`,g9=ct`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`,y9=ct`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 150, 255, 0.3), inset 0 0 20px rgba(0, 150, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 150, 255, 0.6), inset 0 0 30px rgba(0, 150, 255, 0.2);
  }
`,v9=R.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,x9=R.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${y9} 3s ease-in-out infinite;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: ${g9} 3s infinite;
    pointer-events: none;
  }
`,b9=R.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 1px rgba(0, 150, 255, 0.3));
`,Ih=R.path`
  fill: rgba(0, 150, 255, 0.35);
  animation: ${h9} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 1.2s;
  }
`,Kh=R.path`
  fill: none;
  stroke: rgba(255, 105, 180, 1);
  stroke-width: 2.5;
  animation: ${m9} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:nth-child(2) {
    animation-delay: 0.9s;
  }

  &:nth-child(3) {
    animation-delay: 1.5s;
  }
`,lu=R.circle`
  fill: rgba(255, 105, 180, 1);
  animation: ${p9} 1.8s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.9s;
  }

  &:nth-child(3) {
    animation-delay: 1.4s;
  }

  &:nth-child(4) {
    animation-delay: 1.9s;
  }
`,w9=R.div`
  position: absolute;
  bottom: 15px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0;
  animation: fadeInText 1s ease-out 0.5s forwards;

  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 0.6;
      transform: translateY(0);
    }
  }
`,S9=R.div`
  width: 100%;
  max-width: 100%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  animation: ${f9} 1s;
  background-color: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
`,E9=R.div`
  text-align: center;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
  }

  @media (max-width: var(--tablet)) {
    font-size: 1.2rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 1rem;
  }
`,T9=R.div`
  width: 100%;
  height: ${e=>{switch(e.device){case"mobile":return"auto";case"tablet":return"65vh";default:return"75vh"}}};
  display: flex;
  flex-direction: ${e=>e.device==="mobile"?"column":"row"};
  justify-content: center;
  align-items: center;
  gap: ${e=>e.device==="mobile"?"2rem":"1rem"};
  background-image: var(--bg-image);
  padding: ${e=>{switch(e.device){case"mobile":return"2.5rem 1rem";case"tablet":return"2rem";default:return"2rem"}}};
  box-sizing: border-box;

  @media (max-width: var(--tablet)) {
    height: auto;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  @media (max-width: var(--mobile)) {
    gap: 1.5rem;
    padding: 1.5rem 0.5rem;
  }
`,C9=R.div`
  display: flex;
  flex-direction: row;
  gap: ${e=>e.device==="mobile"?"0.75rem":"1rem"};
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: var(--tablet)) {
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: var(--mobile)) {
    gap: 0.5rem;
  }
`,j9=R.button`
  border: 2px solid white;
  transition: all 0.5s;
  border-radius: 20px;
  color: white;
  padding: ${e=>{switch(e.device){case"mobile":return"0.6rem 0.8rem";case"tablet":return"0.55rem 1rem";default:return"0.5rem 1rem"}}};
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  font-size: ${e=>{switch(e.device){case"mobile":return"0.85rem";case"tablet":return"0.95rem";default:return"1rem"}}};
  /* width: ${e=>e.device==="mobile"?"100%":"auto"}; */

  &:hover {
    background-color: white;
    color: black;

    img {
      transition: all 0.5s;
      transform: translateX(-200%);
    }

    label {
      transition: all 0.5s;
      transform: translateX(-15%);
      font-size: 1.005rem;
    }
  }

  @media (max-width: var(--tablet)) {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;

    img {
      width: 18px !important;
      height: 18px !important;
    }

    label {
      margin-left: 0.3rem !important;
    }
  }
`,A9=R.button`
  border: 2px solid white;
  transition: all 0.5s;
  border-radius: 20px;
  color: white;
  padding: ${e=>{switch(e.device){case"mobile":return"0.6rem 0.8rem";case"tablet":return"0.55rem 1rem";default:return"0.5rem 1rem"}}};
  background-color: transparent;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  font-size: ${e=>{switch(e.device){case"mobile":return"0.85rem";case"tablet":return"0.95rem";default:return"1rem"}}};
  /* width: ${e=>e.device==="mobile"?"100%":"auto"}; */

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: var(--tablet)) {
    width: 100%;
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
  }
`,R9=R.div`
  animation: ${Q2} 1s;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.2rem";default:return"1rem"}}};
  width: ${e=>{switch(e.device){case"mobile":return"100%";case"tablet":return"55%";default:return"60%"}}};

  @media (max-width: var(--tablet)) {
    width: 100%;
    gap: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: var(--mobile)) {
    gap: 0.8rem;
    padding: 0.5rem;
  }
`,M9=R.div`
  animation: ${Z2} 1s;
  width: ${e=>e.device==="tablet"?"45%":"40%"};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: var(--desktop)) {
    width: 45%;
  }

  @media (max-width: var(--tablet)) {
    display: none;
  }
`,D9=R.div`
  width: 100%;
  padding: 2rem 1rem;
  animation: ${Z2} 1s;
  box-sizing: border-box;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.5rem 1rem;

    h1 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: var(--mobile)) {
    padding: 1rem 0.5rem;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`,z9=R.div`
  width: 100%;
  padding: 2rem 1rem;
  animation: ${Q2} 1s;
  box-sizing: border-box;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.5rem 1rem;

    h1 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.95rem;
    }

    svg {
      width: 40px !important;
      height: 40px !important;
    }
  }

  @media (max-width: var(--mobile)) {
    padding: 1rem 0.5rem;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 0.85rem;
    }

    svg {
      width: 30px !important;
      height: 30px !important;
    }
  }
`,O9=R.button`
  background: #6bcb77;
  color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  padding: ${e=>{switch(e.device){case"mobile":return"0.6rem 0.8rem";case"tablet":return"0.55rem 1rem";default:return"0.5rem 1rem"}}};
  border: none;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
  border-radius: 2rem;
  &:hover {
    background-color: #4d96ff;
  }
`,k9=R.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  /* backdrop-filter: blur(4px); */
`,L9=R.div`
  background-color: var(--bg-color);
  border-radius: 20px;
  padding: ${e=>{switch(e.device){case"mobile":return"2rem 1.5rem";case"tablet":return"2.5rem 2rem";default:return"3rem 2.5rem"}}};
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: ${e=>{switch(e.device){case"mobile":return"280px";case"tablet":return"350px";default:return"400px"}}};
  max-width: 90vw;

  @media (max-width: var(--tablet)) {
    padding: 2rem 1.5rem;
    min-width: 280px;
  }

  @media (max-width: var(--mobile)) {
    padding: 1.5rem 1rem;
    min-width: 260px;
  }
`,N9=R.h2`
  font-size: ${e=>{switch(e.device){case"mobile":return"1.3rem";case"tablet":return"1.5rem";default:return"1.75rem"}}};
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
  text-align: center;

  @media (max-width: var(--tablet)) {
    font-size: 1.4rem;
  }

  @media (max-width: var(--mobile)) {
    font-size: 1.2rem;
  }
`,_9=R.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.device==="mobile"?"0.75rem":"1rem"};

  @media (max-width: var(--mobile)) {
    gap: 0.75rem;
  }
`,mb=R.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.2rem";default:return"1.25rem"}}};
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  border: none;
  border-radius: 12px;
  font-size: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.1rem";default:return"1.15rem"}}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    font-family: inherit;
  }

  @media (max-width: var(--tablet)) {
    padding: 1.1rem;
    font-size: 1.05rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.9rem;
    font-size: 0.95rem;
    gap: 0.75rem;
  }
`,U9=R.button`
  padding: ${e=>{switch(e.device){case"mobile":return"0.8rem";case"tablet":return"0.9rem";default:return"1rem"}}};
  background: transparent;
  color: var(--text-color);
  border: 2px solid var(--meta-text-color);
  border-radius: 12px;
  font-size: ${e=>{switch(e.device){case"mobile":return"1rem";case"tablet":return"1.05rem";default:return"1.1rem"}}};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--meta-text-color);
    color: var(--bg-color);
  }

  @media (max-width: var(--tablet)) {
    padding: 0.85rem;
    font-size: 1rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`,Qh=e=>{const[a,r,o]=e.split("/").map(Number);return new Date(o,r-1,a)},V9=e=>{if(!e)return null;const[a,r,o]=e.split("-");return`${o}/${r}/${a}`};function B9({src:e,alt:a}){const[r,o]=w.useState("loading");return h.jsxs(nk,{children:[r==="loading"&&h.jsx(ak,{}),r==="error"&&h.jsx(ik,{children:"Image unavailable"}),h.jsx("img",{src:e,alt:a,onLoad:()=>o("loaded"),onError:()=>o("error"),style:{opacity:r==="loaded"?1:0}})]})}function H9(){const{device:e}=Lr(),[a,r]=w.useState("most_recent"),[o,l]=w.useState({date:new Set,specificDate:""}),u=xn(),{isAuthenticated:d}=Ho(),[m,p]=w.useState(e!=="mobile");w.useEffect(()=>{d()||u("/registration",{state:{form:"signup"}})},[]);const g=[{imageURL:"https://picsum.photos/200",prompt:"Red t-shirt with vertical black stripes.",date:"20/12/2025",numOfLikes:"5",id:"1"},{imageURL:"https://picsum.photos/201",prompt:"Minimal hoodie design.",date:"18/12/2025",numOfLikes:"12",id:"2"},{imageURL:"https://picsum.photos/202",prompt:"Cyberpunk jacket concept.",date:"10/12/2025",numOfLikes:"7",id:"3"}];w.useEffect(()=>{p(e!=="mobile")},[e]);const y=(b,S)=>{l(T=>{const M={...T,[b]:new Set(T[b])};return M[b].has(S)?M[b].delete(S):M[b].add(S),M})},v=g.filter(b=>{const S=Qh(b.date),T=new Date;let M=!1,j=!1;return o.date.size>0&&(M=[...o.date].some(C=>{const z=(T-S)/864e5;return C==="today"?S.toDateString()===T.toDateString():C==="last_7"?z<=7:C==="last_30"?z<=30:!1})),o.specificDate&&(j=b.date===V9(o.specificDate)),o.date.size===0&&!o.specificDate?!0:M||j}).sort((b,S)=>{const T=Qh(b.date),M=Qh(S.date);return a==="most_recent"?M-T:T-M});return h.jsx(P9,{children:h.jsxs(F9,{device:e,children:[h.jsxs(Y9,{device:e,children:[h.jsx("h1",{style:{marginBottom:"1rem"},children:"History"}),h.jsxs(G9,{children:[h.jsx("h3",{children:"Filters"}),e!=="desktop"&&h.jsx(X9,{onClick:()=>p(b=>!b),children:m?"Hide":"Show"})]}),m&&h.jsx(q9,{device:e,children:h.jsxs(I9,{children:[h.jsx("h4",{children:"Date"}),[{label:"Today",value:"today"},{label:"Last 7 days",value:"last_7"},{label:"Last 30 days",value:"last_30"}].map(b=>h.jsxs(K9,{children:[h.jsx("input",{type:"checkbox",checked:o.date.has(b.value),onChange:()=>y("date",b.value)}),b.label]},b.value)),h.jsxs(Q9,{children:[h.jsx("label",{children:"Specific date"}),h.jsx("input",{type:"date",value:o.specificDate,onChange:b=>l(S=>({...S,specificDate:b.target.value}))})]})]})})]}),h.jsxs(Z9,{children:[h.jsx(W9,{children:h.jsxs(J9,{children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:a,onChange:b=>r(b.target.value),children:[h.jsx("option",{value:"most_recent",children:"Most recent"}),h.jsx("option",{value:"least_recent",children:"Least recent"})]})]})}),h.jsx(ek,{device:e,children:v.map(b=>h.jsxs(tk,{children:[h.jsx(B9,{src:b.imageURL,alt:"segment"}),h.jsxs(rk,{children:[h.jsx(ok,{children:b.prompt}),h.jsxs(sk,{children:[h.jsx(pb,{children:b.date}),h.jsxs(pb,{children:[h.jsx(id,{})," ",b.numOfLikes]})]})]})]},b.id))})]})]})})}const $9=ct`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,P9=R.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  color: var(--text-color);
  transition: 0.5s ease-in-out;
`,F9=R.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"260px 1fr":"320px 1fr"};
  gap: ${({device:e})=>e==="mobile"?"1.25rem":"2rem"};
  padding: 0 1rem;
`,Y9=R.aside`
  position: ${({device:e})=>e==="desktop"?"sticky":"static"};
  top: 84px;
  align-self: start;
`,G9=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,X9=R.button.attrs({type:"button"})`
  border: 1px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--text-color);
    color: var(--bg-color);
  }
`,q9=R.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`,I9=R.div`
  margin-top: 1rem;
`,K9=R.label`
  display: flex;
  gap: 0.6rem;
  margin: 0.4rem 0;
`,Q9=R.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;

  input {
    padding: 0.3rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 20px;
  }
`,Z9=R.section``,W9=R.div`
  display: flex;
  justify-content: flex-end;
`,J9=R.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  select {
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    border-radius: 20px;
  }
`,ek=R.div`
  display: grid;
  gap: ${({device:e})=>e==="mobile"?"0.9rem":"1.1rem"};
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"repeat(2, 1fr)":"repeat(3, 1fr)"};
`,tk=R.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  transition: all 0.25s ease-in-out;
  color: var(--text-color);

  &:hover {
    box-shadow: 0 8px 24px rgba(252, 252, 252, 0.1);
    scale: 1.02;
  }

  @media (min-width: 901px) {
    flex-direction: row;
  }
`,nk=R.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 280px;
  background: #f0f0f0;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.35s ease;
    position: absolute;
    inset: 0;
  }

  @media (min-width: 901px) {
    width: 220px;
    min-width: 200px;
    aspect-ratio: 1 / 1;
    max-height: none;
  }
`,ak=R.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 400px 100%;
  animation: ${$9} 1.4s infinite linear;
`,ik=R.div`
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #666;
`,rk=R.div`
  padding: 0.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,ok=R.h3`
  font-size: 0.95rem;
`,sk=R.div`
  display: flex;
  justify-content: space-between;
`,pb=R.span`
  font-size: 0.85rem;
  color: #666;
`,lk="/FitFinder/assets/noFavorites-Cey5RiO6.svg";function ck({src:e,alt:a}){const[r,o]=w.useState("loading");return h.jsxs(W2,{children:[r==="loading"&&h.jsx(J2,{}),r==="error"&&h.jsx(Sk,{children:"No image"}),h.jsx("img",{src:e,alt:a,onLoad:()=>o("loaded"),onError:()=>o("error"),style:{opacity:r==="loaded"?1:0}})]})}function uk(){const{device:e}=Lr(),[a,r]=w.useState([]),[o,l]=w.useState([]),[u,d]=w.useState("similarity"),[m,p]=w.useState(!0),[g,y]=w.useState([]),v=xn();na();const b=xn(),{isAuthenticated:S}=Ho(),[T,M]=w.useState({category:new Set,store:new Set}),[j,C]=w.useState(e!=="mobile"),[z,N]=w.useState(!1),[q,H]=w.useState(null);w.useEffect(()=>{C(e!=="mobile")},[e]),w.useEffect(()=>{S()||v("/registration",{state:{form:"signup"}})},[]),w.useEffect(()=>{El.getFavorites().then(D=>{de(D),se(D),pe(D),y(D),p(!1)}).catch(D=>{console.error("Error in retreiving favorites: ",D)})},[]);const A=async D=>{try{const _=await El.removeFromFavorite(D);if(!_.ok){const I=await _.text().catch(()=>null);throw new Error(`Failed to remove from favorite: ${_.status} ${I||""}`)}y(I=>I.filter(oe=>oe.item_id!==D)),st.notifySuccess("Removed from favorites")}catch(_){st.notifyError("Failed to remove from favorites"),console.error(_)}},$=(D,_)=>{_&&typeof _.stopPropagation=="function"&&_.stopPropagation(),H(D),N(!0)},P=async()=>{N(!1),q&&(await A(q),H(null))},X=()=>{N(!1),H(null)},se=D=>{const _=[];D.length>0&&D.forEach(I=>{I.category&&!_.includes(I.category)&&_.push(I.category)}),r(_)},pe=D=>{const _=[];D.length>0&&D.forEach(I=>{_.includes(I.seller)||_.push(I.seller)}),l(_)},Ne=D=>{const{hostname:_}=new URL(D);return _.replace(/^www\./,"").split(".")[0].replace(/-/g," ")},de=D=>{D.length>0&&D.forEach(_=>{_.seller=Ne(_.itemWebURL)})},ge=(D,_)=>{M(I=>{const oe={...I,[D]:new Set(I[D])};return oe[D].has(_)?oe[D].delete(_):oe[D].add(_),oe})},ze=g.length>0?g.filter(D=>!(T.store.size&&!T.store.has(D.seller)||T.category.size&&!T.category.has(D.category))).sort((D,_)=>u==="lowest_price"?D.price-_.price:u==="highest_price"?_.price-D.price:0):[];return h.jsx(dk,{children:h.jsxs(fk,{device:e,children:[h.jsxs(hk,{device:e,children:[h.jsx("h1",{style:{marginBottom:"1rem"},children:"Favorites"}),h.jsxs(mk,{children:[h.jsx("h3",{children:"Filters"}),e!=="desktop"&&h.jsx(pk,{onClick:()=>C(D=>!D),children:j?"Hide":"Show"})]}),j&&h.jsxs(gk,{device:e,children:[h.jsxs(gb,{children:[h.jsx("h4",{children:"Category"}),a.map(D=>h.jsxs(yb,{onClick:()=>ge("category",D),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:T.category.has(D)}),h.jsx("label",{children:D})]},D))]}),h.jsxs(gb,{children:[h.jsx("h4",{children:"Store"}),o.map(D=>h.jsxs(yb,{onClick:()=>ge("store",D),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:T.store.has(D)}),h.jsx("label",{children:D})]},D))]})]})]}),h.jsxs(yk,{children:[h.jsx(vk,{children:h.jsxs(xk,{children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:u,onChange:D=>d(D.target.value),children:[h.jsx("option",{value:"similarity",children:"similarity"}),h.jsx("option",{value:"lowest_price",children:"lowest price"}),h.jsx("option",{value:"highest_price",children:"highest price"})]})]})}),h.jsx(bk,{device:e,children:m?Array.from({length:8}).map((D,_)=>h.jsxs(vb,{children:[h.jsx(W2,{children:h.jsx(J2,{})}),h.jsxs(xb,{children:[h.jsx(bb,{children:"Loading..."}),h.jsxs(wb,{children:[h.jsx(Sb,{children:"--"}),h.jsx(Eb,{children:"--"})]})]})]},_)):ze.length>0&&ze.map(D=>h.jsxs(vb,{onClick:()=>b(`/product/${D.item_id}`,{state:{product:D,similarProducts:ze.filter(_=>_.category===D.category)}}),children:[h.jsx(ck,{src:D.imageURL,alt:D.title}),h.jsx(Ek,{onClick:_=>$(D.item_id,_),"aria-label":"Remove from favorites",title:"Remove from favorites",children:h.jsx(id,{size:25})}),h.jsxs(xb,{children:[h.jsx(bb,{children:D.title}),h.jsxs(wb,{children:[h.jsxs(Sb,{children:[D.price," ",D.currency]}),h.jsx(Eb,{children:D.seller})]})]})]},D.item_id))}),z&&h.jsx(jk,{role:"dialog","aria-modal":"true",onClick:X,children:h.jsxs(Ak,{onClick:D=>D.stopPropagation(),children:[h.jsx("h3",{children:"Remove from favorites?"}),h.jsx("p",{children:"Are you sure you want to remove this item from your favorites?"}),h.jsxs(Rk,{children:[h.jsx(Dk,{onClick:X,children:"Cancel"}),h.jsx(Mk,{onClick:P,children:"Yes, remove"})]})]})}),ze.length==0&&!m&&h.jsx("img",{src:lk,style:{}})]})]})})}const dk=R.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  color: var(--text-color);
`,fk=R.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"260px 1fr":"320px 1fr"};
  gap: ${({device:e})=>e==="mobile"?"1.25rem":"2rem"};
  padding: 0 1rem;
`,hk=R.aside`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: ${({device:e})=>e==="desktop"?"sticky":"static"};
  top: 84px;
  align-self: start;
`,mk=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,pk=R.button.attrs({type:"button"})`
  border: 1px solid var(--text-color);
  background: transparent;
  color: var(--text-color);
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--text-color);
    color: var(--bg-color);
  }
`,gk=R.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`,gb=R.div`
  margin-top: 1rem;
`,yb=R.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`,yk=R.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,vk=R.div`
  display: flex;
  justify-content: flex-end;
`,xk=R.div`
  display: flex;
  gap: 0.5rem;
  select {
    padding: 0.2rem;
    border-radius: 20px;
  }
`,bk=R.div`
  display: grid;
  gap: ${({device:e})=>e==="mobile"?"0.9rem":"1.1rem"};
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"repeat(2, 1fr)":"repeat(4, 1fr)"};
`,vb=R.div`
  position: relative;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease-in-out;
  transition: background-color 0.5s ease-in-out;
  color: var(--text-color);
  box-shadow: 0 0 2px 5px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: scale(1.02);
  }
`,xb=R.div`
  padding: 0.8rem;
`,bb=R.h3`
  font-size: 0.95rem;
  height: 40px;
  overflow: hidden;
`,wb=R.div`
  display: flex;
  justify-content: space-between;
`,Sb=R.span`
  font-weight: 700;
`,Eb=R.span`
  font-size: 0.85rem;
  color: #666;
`,wk=ct`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,W2=R.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
`,J2=R.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${wk} 1.4s infinite;
`,Sk=R.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #888;
`,Ek=R.button`
  position: absolute;
  top: 0; /* sits over the image */
  right: 0;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #e63946; /* neutral by default */
  margin: 1rem;
  transition:
    color 160ms ease,
    transform 120ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #bbb; /* heart red */
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.96);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(230, 57, 70, 0.12);
    border-radius: 6px;
  }
`,Tk=ct`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,Ck=ct`
  0% { opacity: 0; transform: translateY(12px) scale(0.96); }
  60% { opacity: 1; transform: translateY(-6px) scale(1.03); }
  100% { transform: translateY(0) scale(1); }
`,jk=R.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.639);
  z-index: 1000;
  animation: ${Tk} 220ms ease forwards;
`,Ak=R.div`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 1.25rem;
  border-radius: 8px;
  width: min(420px, 90%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: left;
  will-change: transform, opacity;
  transform-origin: center center;
  animation: ${Ck} 320ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;

  h3 {
    margin: 0 0 0.5rem 0;
  }
  p {
    margin: 0 0 1rem 0;
    color: var(--text-color);
  }
`,Rk=R.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`,Mk=R.button.attrs({type:"button"})`
  background: #e63946;
  color: #fff;
  border: none;

  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    scale: 1.02;
  }
`,Dk=R.button.attrs({type:"button"})`
  border: solid 1px transparent;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.95;
    border-color: black;
  }
`,zk=()=>{const e=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return w.useEffect(()=>e("hero"),[]),h.jsxs(Ok,{children:[h.jsx(kk,{children:h.jsxs(Lk,{children:[h.jsx(ki,{onClick:()=>e("hero"),children:"About"}),h.jsx(ki,{onClick:()=>e("introduction"),children:"Introduction"}),h.jsx(ki,{onClick:()=>e("how-it-works"),children:"How It Works"}),h.jsx(ki,{onClick:()=>e("access"),children:"User Access"}),h.jsx(ki,{onClick:()=>e("features"),children:"Features"}),h.jsx(ki,{onClick:()=>e("personalization"),children:"Personalization"}),h.jsx(ki,{onClick:()=>e("academic"),children:"Academic"}),h.jsx(ki,{onClick:()=>e("contributors"),children:"Contributors"})]})}),h.jsxs(Nk,{children:[h.jsx(Li,{id:"hero",children:h.jsxs(Ni,{children:[h.jsx(_k,{children:"About FITFINDER"}),h.jsx(Uk,{children:"A smart visual fashion discovery platform that turns inspiration into action."})]})}),h.jsx(Li,{id:"introduction",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(vr,{children:"What is FITFINDER?"}),h.jsx(qs,{children:"FITFINDER is a web application that allows users to discover clothing items using images instead of traditional text-based searches."}),h.jsx(qs,{children:"The platform uses intelligent image segmentation using (SAM), accurate embedding for images and text prompts by (OpenCLIP), and visual similarity search using (FAISS Index)."})]})}),h.jsx(Li,{id:"how-it-works",children:h.jsxs(Ni,{children:[h.jsx(vr,{children:"How It Works"}),h.jsx(Bk,{children:h.jsx(Hk,{controls:!0,src:"https://www.dropbox.com/scl/fi/wtzwj2trdhnd611o44mg5/How-to-use.mp4?rlkey=n6xa1fwtukjud63ujsg3g6ob1&st=h8i4vpfb&raw=1",poster:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f79b4e' width='400' height='300'/%3E%3C/svg%3E"})}),h.jsxs(Vk,{children:[h.jsx("li",{children:"Upload an image containing a person."}),h.jsx("li",{children:"Click Segment to highlight clothing pieces."}),h.jsx("li",{children:"Select the clothing item to segment."}),h.jsx("li",{children:"(Optionally) add positive/negative points and re-segment to refine the segmentation."}),h.jsx("li",{children:"The selected clothing item is cropped."}),h.jsx("li",{children:"(Optionally) add a text prompt to refine the search."}),h.jsx("li",{children:"Click search to retrieve similar products."}),h.jsx("li",{children:"Visit original product websites."})]})]})}),h.jsx(Li,{id:"access",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(vr,{children:"Accessible for Everyone"}),h.jsxs(qs,{children:["FITFINDER can be used with ",h.jsx("strong",{children:"or without"})," an account."]}),h.jsxs(Tb,{children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Guest Users:"})," Free visual searching."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Logged-In Users:"})," History, favorites, and theme customization."]})]})]})}),h.jsx(Li,{id:"features",children:h.jsxs(Ni,{children:[h.jsx(vr,{children:"Key Features"}),h.jsxs(Tb,{children:[h.jsx("li",{children:"Clothing segmentation from images"}),h.jsx("li",{children:"Text prompting for refined searches"}),h.jsx("li",{children:"Visual similarity search"}),h.jsx("li",{children:"Search history"}),h.jsx("li",{children:"Favorites system"}),h.jsx("li",{children:"Recomendations system for similar products and most searched for"}),h.jsx("li",{children:"Light, dark, and system themes"})]})]})}),h.jsx(Li,{id:"personalization",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(vr,{children:"Personalized Experience"}),h.jsx(qs,{children:"FITFINDER adapts to user preferences through responsive design and theming support."})]})}),h.jsxs(Li,{id:"academic",children:[" ",h.jsxs(Ni,{children:[" ",h.jsx(vr,{children:"Academic Background"})," ",h.jsxs(qs,{children:[" ","FITFINDER is a graduation project developed by"," ",h.jsx("strong",{children:"CSED2026 students Alexandria University"}),". The project demonstrates the application of modern web development, software engineering principles, and intelligent image processing in a real-world scenario."," "]})," "]})," "]}),h.jsx(Li,{id:"contributors",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(vr,{children:"Project Contributors"}),h.jsxs($k,{children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Ibrahim Mohamed"})," — Frontend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Ali Hassan"})," — Frontend / Backend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Naira Tarek"})," — Backend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Mohamed Abdelmonaem"})," — AI Services / Backend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Omnia Karem"})," — AI Services / Backend Engineer"]})]})]})}),h.jsxs(Pk,{children:["© ",new Date().getFullYear()," FITFINDER — CSED2026 Graduation Project"]})]})]})},Ok=R.div`
  display: flex;
  padding-top: 1rem;
  scroll-behavior: smooth;
  color: var(--text-color);
  scroll-behavior: smooth; /* enable smooth scroll for anchor links */
`,kk=R.aside`
  position: sticky;
  top: 6rem;
  height: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 220px;
  padding: 2rem 1rem;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  transition: all 0.25s ease-in-out;
  &:hover {
    scale: 1.02;
    transform: translateX(5px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`,Lk=R.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ki=R.a`
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px none;
  text-decoration: none;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    transform: translateX(5px);
    border-bottom: 1px solid var(--text-color);
  }

  /* &:hover::after {
    content: " →";
  } */
`,Nk=R.main`
  flex: 1;
`,Li=R.section`
  padding: 4rem 1.5rem;
  background-color: ${({$alt:e,theme:a})=>e?a.surface:"transparent"};
`,Ni=R.div`
  max-width: 1100px;
  margin: 0 auto;
`,_k=R.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`,Uk=R.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.textSecondary};
  max-width: 700px;
`,vr=R.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,qs=R.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textSecondary};
`,Tb=R.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`,Vk=R.ol`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`,Bk=R.div`
  width: 100%;
  max-width: 700px;
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Hk=R.video`
  width: 100%;
  height: auto;
  display: block;
  background-color: #000;

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`,$k=R.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }
`,Pk=R.footer`
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textSecondary};
  border-top: 1px solid ${({theme:e})=>e.border};
`,Fk=()=>{const e=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return w.useEffect(()=>e("introduction"),[]),h.jsxs(Yk,{children:[h.jsx(Gk,{children:h.jsxs(Xk,{children:[h.jsx(bo,{onClick:()=>e("introduction"),children:"Introduction"}),h.jsx(bo,{onClick:()=>e("information"),children:"Information We Collect"}),h.jsx(bo,{onClick:()=>e("information-usage"),children:"How We Use Your Information"}),h.jsx(bo,{onClick:()=>e("storage"),children:"Data Storage"}),h.jsx(bo,{onClick:()=>e("third-party"),children:"Third-Party Services"}),h.jsx(bo,{onClick:()=>e("choices"),children:"User Choices"})]})}),h.jsxs(qk,{children:[h.jsx(xr,{children:h.jsxs(br,{children:[h.jsx(Ik,{children:"Privacy Policy"}),h.jsx(Kk,{children:"Your privacy matters to us at FITFINDER."})]})}),h.jsx(xr,{id:"introduction",children:h.jsxs(br,{children:[h.jsx(wo,{children:"Introduction"}),h.jsx(cu,{children:"FITFINDER is a graduation project developed by CSED2026 students at Alexandria University. This Privacy Policy explains how we handle user data while using the FITFINDER web application."})]})}),h.jsx(xr,{id:"information",children:h.jsxs(br,{children:[h.jsx(wo,{children:"Information We Collect"}),h.jsxs(Cb,{children:[h.jsx("li",{children:"Images uploaded by users for visual search purposes"}),h.jsx("li",{children:"Search history for logged-in users"}),h.jsx("li",{children:"Favorite products saved by logged-in users"}),h.jsx("li",{children:"Basic authentication data for registered users"}),h.jsxs("li",{children:["Profile image for logged-in users ",h.jsx("small",{children:"(Optional)"})]})]})]})}),h.jsx(xr,{id:"information-usage",children:h.jsxs(br,{children:[h.jsx(wo,{children:"How We Use Your Information"}),h.jsxs(Cb,{children:[h.jsx("li",{children:"To perform clothing segmentation and visual search"}),h.jsx("li",{children:"To improve search accuracy and user experience"}),h.jsx("li",{children:"To improve recommendation system"}),h.jsx("li",{children:"To provide features such as history and favorites"}),h.jsx("li",{children:"For academic and demonstration purposes only"})]})]})}),h.jsx(xr,{id:"storage",children:h.jsxs(br,{children:[h.jsx(wo,{children:"Data Storage"}),h.jsxs(cu,{children:["Uploaded images and related data are stored only for the duration necessary to provide the requested functionality. FITFINDER is not intended for commercial use and ",h.jsx("strong",{children:"does not sell"})," ","user data."]})]})}),h.jsx(xr,{id:"third-party",children:h.jsxs(br,{children:[h.jsx(wo,{children:"Third-Party Services"}),h.jsx(cu,{children:"FITFINDER may redirect users to third-party websites to view or purchase products. We are not responsible for the privacy practices of those external websites."})]})}),h.jsx(xr,{id:"choices",children:h.jsxs(br,{children:[h.jsx(wo,{children:"User Choices"}),h.jsx(cu,{children:"Users may choose to use FITFINDER without creating an account. Logged-in users may manage their history and favorite items at any time."})]})}),h.jsxs(Qk,{children:["© ",new Date().getFullYear()," FITFINDER — Privacy Policy"]})]})]})},Yk=R.div`
  display: flex;
`,Gk=R.aside`
  position: sticky;
  top: 6rem;
  height: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 220px;
  padding: 2rem 1rem;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  transition: all 0.25s ease-in-out;
  &:hover {
    scale: 1.02;
    transform: translateX(5px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`,Xk=R.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,bo=R.a`
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px none;
  text-decoration: none;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    transform: translateX(5px);
    border-bottom: 1px solid var(--text-color);
  }

  /* &:hover::after {
    content: " →";
  } */
`,qk=R.main`
  flex: 1;
  color: var(--text-color);
  margin-top: 1rem;
`,xr=R.section`
  padding: 4rem 1.5rem;
`,br=R.div`
  max-width: 1100px;
  margin: 0 auto;
`,Ik=R.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`,Kk=R.p`
  font-size: 1.2rem;
  color: var(--text-color);
`,wo=R.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,cu=R.p`
  line-height: 1.7;
  color: var(--text-color);
`,Cb=R.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.75rem;
  }
`,Qk=R.footer`
  padding: 2rem;
  text-align: center;
  color: var(--text-color);
  border-top: 1px solid var(--text-color);
`,Zk=()=>{const e=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return w.useEffect(()=>e("acceptance"),[]),h.jsxs(Wk,{children:[h.jsx(Jk,{children:h.jsxs(eL,{children:[h.jsx(wr,{onClick:()=>e("acceptance"),children:"Acceptance of Terms"}),h.jsx(wr,{onClick:()=>e("purpose"),children:"Purpose of the Application"}),h.jsx(wr,{onClick:()=>e("responsibilities"),children:"User Responsibilities"}),h.jsx(wr,{onClick:()=>e("usage"),children:"Account Usage"}),h.jsx(wr,{onClick:()=>e("extera"),children:"External Links"}),h.jsx(wr,{onClick:()=>e("liability"),children:"Limitation of Liability"}),h.jsx(wr,{onClick:()=>e("changes"),children:"Changes to These Terms"})]})}),h.jsxs(tL,{children:[h.jsx(_i,{children:h.jsxs(Ui,{children:[h.jsx(nL,{children:"Terms of Service"}),h.jsx(aL,{children:"Please read these terms carefully before using FITFINDER."})]})}),h.jsx(_i,{id:"acceptance",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Acceptance of Terms"}),h.jsx(So,{children:"By accessing or using FITFINDER, you agree to be bound by these Terms of Service. If you do not agree, please do not use the application."})]})}),h.jsx(_i,{id:"purpose",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Purpose of the Application"}),h.jsx(So,{children:"FITFINDER is an academic graduation project designed for research, learning, and demonstration purposes. It is not a commercial service."})]})}),h.jsx(_i,{id:"responsibilities",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"User Responsibilities"}),h.jsxs(iL,{children:[h.jsx("li",{children:"Do not upload illegal or inappropriate content"}),h.jsx("li",{children:"Use the application for personal and academic purposes only"}),h.jsx("li",{children:"Respect intellectual property rights"})]})]})}),h.jsx(_i,{id:"usage",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Account Usage"}),h.jsx(So,{children:"Users may use FITFINDER with or without an account. Logged-in users are responsible for maintaining the confidentiality of their account information."})]})}),h.jsx(_i,{id:"extera",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"External Links"}),h.jsx(So,{children:"FITFINDER may provide links to third-party websites. We do not control and are not responsible for the content or practices of those websites."})]})}),h.jsx(_i,{id:"liability",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Limitation of Liability"}),h.jsx(So,{children:'FITFINDER is provided "as is" without warranties of any kind. The developers are not liable for any damages arising from the use of this application.'})]})}),h.jsx(_i,{id:"changes",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Changes to These Terms"}),h.jsx(So,{children:"These terms may be updated as the project evolves. Continued use of FITFINDER implies acceptance of the updated terms."})]})}),h.jsxs(rL,{children:["© ",new Date().getFullYear()," FITFINDER — Terms of Service"]})]})]})},Wk=R.div`
  display: flex;
  color: var(--text-color);
`,Jk=R.aside`
  position: sticky;
  top: 6rem;
  height: fit-content;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 220px;
  padding: 2rem 1rem;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  transition: all 0.25s ease-in-out;
  &:hover {
    scale: 1.02;
    transform: translateX(5px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`,eL=R.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,wr=R.a`
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px none;
  text-decoration: none;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    transform: translateX(5px);
    border-bottom: 1px solid var(--text-color);
  }

  /* &:hover::after {
    content: " →";
  } */
`,tL=R.main`
  flex: 1;
  margin: 1rem;
`,_i=R.section`
  padding: 4rem 1.5rem;
`,Ui=R.div`
  max-width: 1100px;
  margin: 0 auto;
`,nL=R.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`,aL=R.p`
  font-size: 1.2rem;
  color: var(--text-color);
`,Sr=R.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,So=R.p`
  line-height: 1.7;
  color: var(--text-color);
`,iL=R.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.75rem;
  }
`,rL=R.footer`
  padding: 2rem;
  text-align: center;
  color: var(--text-color);
  border-top: 1px solid var(--text-color);
`;function oL(){const e=vj(KC(h.jsxs(qn,{path:"/",element:h.jsx(_O,{}),children:[h.jsx(qn,{index:!0,element:h.jsx(d9,{})}),h.jsx(qn,{path:"registration",element:h.jsx(IO,{})}),h.jsx(qn,{path:"search-result",element:h.jsx(ZO,{})}),h.jsx(qn,{path:"product/:id",element:h.jsx(m8,{})}),h.jsx(qn,{path:"history",element:h.jsx(H9,{})}),h.jsx(qn,{path:"favorite",element:h.jsx(uk,{})}),h.jsx(qn,{path:"about-us",element:h.jsx(zk,{})}),h.jsx(qn,{path:"privacy-policy",element:h.jsx(Fk,{})}),h.jsx(qn,{path:"terms-of-service",element:h.jsx(Zk,{})}),h.jsx(qn,{path:"*",element:h.jsx(DA,{})})]})),{basename:"/FitFinder/"});return h.jsxs(h.Fragment,{children:[h.jsx(Dj,{router:e}),h.jsx(Nw,{})]})}gT.createRoot(document.getElementById("root")).render(h.jsx(HO,{clientId:OA,children:h.jsx(gz,{children:h.jsx(aO,{children:h.jsx(NA,{children:h.jsx(oL,{})})})})}));
