(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();function rE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fh={exports:{}},Ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function oE(){if(Rv)return Ls;Rv=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(o,l,d){var u=null;if(d!==void 0&&(u=""+d),l.key!==void 0&&(u=""+l.key),"key"in l){d={};for(var m in l)m!=="key"&&(d[m]=l[m])}else d=l;return l=d.ref,{$$typeof:e,type:o,key:u,ref:l!==void 0?l:null,props:d}}return Ls.Fragment=a,Ls.jsx=r,Ls.jsxs=r,Ls}var Mv;function sE(){return Mv||(Mv=1,fh.exports=oE()),fh.exports}var h=sE(),hh={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function lE(){if(Dv)return Ne;Dv=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),u=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),b=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function E(k,q,te){this.props=k,this.context=q,this.refs=R,this.updater=te||j}E.prototype.isReactComponent={},E.prototype.setState=function(k,q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,q,"setState")},E.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function D(){}D.prototype=E.prototype;function N(k,q,te){this.props=k,this.context=q,this.refs=R,this.updater=te||j}var G=N.prototype=new D;G.constructor=N,M(G,E.prototype),G.isPureReactComponent=!0;var H=Array.isArray;function A(){}var $={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function Z(k,q,te){var le=te.ref;return{$$typeof:e,type:k,key:q,ref:le!==void 0?le:null,props:te}}function ne(k,q){return Z(k.type,q,k.props)}function me(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function Le(k){var q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(te){return q[te]})}var ye=/\/+/g;function ve(k,q){return typeof k=="object"&&k!==null&&k.key!=null?Le(""+k.key):q.toString(36)}function Ue(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(A,A):(k.status="pending",k.then(function(q){k.status==="pending"&&(k.status="fulfilled",k.value=q)},function(q){k.status==="pending"&&(k.status="rejected",k.reason=q)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function z(k,q,te,le,pe){var Te=typeof k;(Te==="undefined"||Te==="boolean")&&(k=null);var ae=!1;if(k===null)ae=!0;else switch(Te){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(k.$$typeof){case e:case a:ae=!0;break;case y:return ae=k._init,z(ae(k._payload),q,te,le,pe)}}if(ae)return pe=pe(k),ae=le===""?"."+ve(k,0):le,H(pe)?(te="",ae!=null&&(te=ae.replace(ye,"$&/")+"/"),z(pe,q,te,"",function(fe){return fe})):pe!=null&&(me(pe)&&(pe=ne(pe,te+(pe.key==null||k&&k.key===pe.key?"":(""+pe.key).replace(ye,"$&/")+"/")+ae)),q.push(pe)),1;ae=0;var oe=le===""?".":le+":";if(H(k))for(var ie=0;ie<k.length;ie++)le=k[ie],Te=oe+ve(le,ie),ae+=z(le,q,te,Te,pe);else if(ie=S(k),typeof ie=="function")for(k=ie.call(k),ie=0;!(le=k.next()).done;)le=le.value,Te=oe+ve(le,ie++),ae+=z(le,q,te,Te,pe);else if(Te==="object"){if(typeof k.then=="function")return z(Ue(k),q,te,le,pe);throw q=String(k),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ae}function U(k,q,te){if(k==null)return k;var le=[],pe=0;return z(k,le,"","",function(Te){return q.call(te,Te,pe++)}),le}function I(k){if(k._status===-1){var q=k._result;q=q(),q.then(function(te){(k._status===0||k._status===-1)&&(k._status=1,k._result=te)},function(te){(k._status===0||k._status===-1)&&(k._status=2,k._result=te)}),k._status===-1&&(k._status=0,k._result=q)}if(k._status===1)return k._result.default;throw k._result}var se=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},ue={map:U,forEach:function(k,q,te){U(k,function(){q.apply(this,arguments)},te)},count:function(k){var q=0;return U(k,function(){q++}),q},toArray:function(k){return U(k,function(q){return q})||[]},only:function(k){if(!me(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Ne.Activity=v,Ne.Children=ue,Ne.Component=E,Ne.Fragment=r,Ne.Profiler=l,Ne.PureComponent=N,Ne.StrictMode=o,Ne.Suspense=g,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(k){return $.H.useMemoCache(k)}},Ne.cache=function(k){return function(){return k.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(k,q,te){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var le=M({},k.props),pe=k.key;if(q!=null)for(Te in q.key!==void 0&&(pe=""+q.key),q)!P.call(q,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&q.ref===void 0||(le[Te]=q[Te]);var Te=arguments.length-2;if(Te===1)le.children=te;else if(1<Te){for(var ae=Array(Te),oe=0;oe<Te;oe++)ae[oe]=arguments[oe+2];le.children=ae}return Z(k.type,pe,le)},Ne.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:d,_context:k},k},Ne.createElement=function(k,q,te){var le,pe={},Te=null;if(q!=null)for(le in q.key!==void 0&&(Te=""+q.key),q)P.call(q,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(pe[le]=q[le]);var ae=arguments.length-2;if(ae===1)pe.children=te;else if(1<ae){for(var oe=Array(ae),ie=0;ie<ae;ie++)oe[ie]=arguments[ie+2];pe.children=oe}if(k&&k.defaultProps)for(le in ae=k.defaultProps,ae)pe[le]===void 0&&(pe[le]=ae[le]);return Z(k,Te,pe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(k){return{$$typeof:m,render:k}},Ne.isValidElement=me,Ne.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:I}},Ne.memo=function(k,q){return{$$typeof:p,type:k,compare:q===void 0?null:q}},Ne.startTransition=function(k){var q=$.T,te={};$.T=te;try{var le=k(),pe=$.S;pe!==null&&pe(te,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(A,se)}catch(Te){se(Te)}finally{q!==null&&te.types!==null&&(q.types=te.types),$.T=q}},Ne.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},Ne.use=function(k){return $.H.use(k)},Ne.useActionState=function(k,q,te){return $.H.useActionState(k,q,te)},Ne.useCallback=function(k,q){return $.H.useCallback(k,q)},Ne.useContext=function(k){return $.H.useContext(k)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(k,q){return $.H.useDeferredValue(k,q)},Ne.useEffect=function(k,q){return $.H.useEffect(k,q)},Ne.useEffectEvent=function(k){return $.H.useEffectEvent(k)},Ne.useId=function(){return $.H.useId()},Ne.useImperativeHandle=function(k,q,te){return $.H.useImperativeHandle(k,q,te)},Ne.useInsertionEffect=function(k,q){return $.H.useInsertionEffect(k,q)},Ne.useLayoutEffect=function(k,q){return $.H.useLayoutEffect(k,q)},Ne.useMemo=function(k,q){return $.H.useMemo(k,q)},Ne.useOptimistic=function(k,q){return $.H.useOptimistic(k,q)},Ne.useReducer=function(k,q,te){return $.H.useReducer(k,q,te)},Ne.useRef=function(k){return $.H.useRef(k)},Ne.useState=function(k){return $.H.useState(k)},Ne.useSyncExternalStore=function(k,q,te){return $.H.useSyncExternalStore(k,q,te)},Ne.useTransition=function(){return $.H.useTransition()},Ne.version="19.2.0",Ne}var zv;function Bm(){return zv||(zv=1,hh.exports=lE()),hh.exports}var w=Bm();const Je=rE(w);var mh={exports:{}},Ns={},ph={exports:{}},gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function cE(){return Ov||(Ov=1,(function(e){function a(z,U){var I=z.length;z.push(U);e:for(;0<I;){var se=I-1>>>1,ue=z[se];if(0<l(ue,U))z[se]=U,z[I]=ue,I=se;else break e}}function r(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var U=z[0],I=z.pop();if(I!==U){z[0]=I;e:for(var se=0,ue=z.length,k=ue>>>1;se<k;){var q=2*(se+1)-1,te=z[q],le=q+1,pe=z[le];if(0>l(te,I))le<ue&&0>l(pe,te)?(z[se]=pe,z[le]=I,se=le):(z[se]=te,z[q]=I,se=q);else if(le<ue&&0>l(pe,I))z[se]=pe,z[le]=I,se=le;else break e}}return U}function l(z,U){var I=z.sortIndex-U.sortIndex;return I!==0?I:z.id-U.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var u=Date,m=u.now();e.unstable_now=function(){return u.now()-m}}var g=[],p=[],y=1,v=null,b=3,S=!1,j=!1,M=!1,R=!1,E=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function G(z){for(var U=r(p);U!==null;){if(U.callback===null)o(p);else if(U.startTime<=z)o(p),U.sortIndex=U.expirationTime,a(g,U);else break;U=r(p)}}function H(z){if(M=!1,G(z),!j)if(r(g)!==null)j=!0,A||(A=!0,Le());else{var U=r(p);U!==null&&Ue(H,U.startTime-z)}}var A=!1,$=-1,P=5,Z=-1;function ne(){return R?!0:!(e.unstable_now()-Z<P)}function me(){if(R=!1,A){var z=e.unstable_now();Z=z;var U=!0;try{e:{j=!1,M&&(M=!1,D($),$=-1),S=!0;var I=b;try{t:{for(G(z),v=r(g);v!==null&&!(v.expirationTime>z&&ne());){var se=v.callback;if(typeof se=="function"){v.callback=null,b=v.priorityLevel;var ue=se(v.expirationTime<=z);if(z=e.unstable_now(),typeof ue=="function"){v.callback=ue,G(z),U=!0;break t}v===r(g)&&o(g),G(z)}else o(g);v=r(g)}if(v!==null)U=!0;else{var k=r(p);k!==null&&Ue(H,k.startTime-z),U=!1}}break e}finally{v=null,b=I,S=!1}U=void 0}}finally{U?Le():A=!1}}}var Le;if(typeof N=="function")Le=function(){N(me)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,ve=ye.port2;ye.port1.onmessage=me,Le=function(){ve.postMessage(null)}}else Le=function(){E(me,0)};function Ue(z,U){$=E(function(){z(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(z){switch(b){case 1:case 2:case 3:var U=3;break;default:U=b}var I=b;b=U;try{return z()}finally{b=I}},e.unstable_requestPaint=function(){R=!0},e.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=b;b=z;try{return U()}finally{b=I}},e.unstable_scheduleCallback=function(z,U,I){var se=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=I+ue,z={id:y++,callback:U,priorityLevel:z,startTime:I,expirationTime:ue,sortIndex:-1},I>se?(z.sortIndex=I,a(p,z),r(g)===null&&z===r(p)&&(M?(D($),$=-1):M=!0,Ue(H,I-se))):(z.sortIndex=ue,a(g,z),j||S||(j=!0,A||(A=!0,Le()))),z},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(z){var U=b;return function(){var I=b;b=U;try{return z.apply(this,arguments)}finally{b=I}}}})(gh)),gh}var kv;function uE(){return kv||(kv=1,ph.exports=cE()),ph.exports}var yh={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function dE(){if(Lv)return en;Lv=1;var e=Bm();function a(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function d(g,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:g,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,en.createPortal=function(g,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return d(g,p,null,y)},en.flushSync=function(g){var p=u.T,y=o.p;try{if(u.T=null,o.p=2,g)return g()}finally{u.T=p,o.p=y,o.d.f()}},en.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(g,p))},en.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},en.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var y=p.as,v=m(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?o.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:b,fetchPriority:S}):y==="script"&&o.d.X(g,{crossOrigin:v,integrity:b,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},en.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);o.d.M(g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(g)},en.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=m(y,p.crossOrigin);o.d.L(g,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},en.preloadModule=function(g,p){if(typeof g=="string")if(p){var y=m(p.as,p.crossOrigin);o.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(g)},en.requestFormReset=function(g){o.d.r(g)},en.unstable_batchedUpdates=function(g,p){return g(p)},en.useFormState=function(g,p,y){return u.H.useFormState(g,p,y)},en.useFormStatus=function(){return u.H.useHostTransitionStatus()},en.version="19.2.0",en}var Nv;function Tb(){if(Nv)return yh.exports;Nv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),yh.exports=dE(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function fE(){if(_v)return Ns;_v=1;var e=uE(),a=Bm(),r=Tb();function o(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(d(t)!==t)throw Error(o(188))}function p(t){var n=t.alternate;if(!n){if(n=d(t),n===null)throw Error(o(188));return n!==t?null:t}for(var i=t,s=n;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){i=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return g(c),t;if(f===s)return g(c),n;f=f.sibling}throw Error(o(188))}if(i.return!==s.return)i=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===i){x=!0,i=c,s=f;break}if(T===s){x=!0,s=c,i=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===i){x=!0,i=f,s=c;break}if(T===s){x=!0,s=f,i=c;break}T=T.sibling}if(!x)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),N=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function Le(t){return t===null||typeof t!="object"?null:(t=me&&t[me]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ye?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case E:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case A:return"SuspenseList";case Z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case N:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case G:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var Ue=Array.isArray,z=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],ue=-1;function k(t){return{current:t}}function q(t){0>ue||(t.current=se[ue],se[ue]=null,ue--)}function te(t,n){ue++,se[ue]=t.current,t.current=n}var le=k(null),pe=k(null),Te=k(null),ae=k(null);function oe(t,n){switch(te(Te,n),te(pe,t),te(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zy(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zy(n),t=Wy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(le),te(le,t)}function ie(){q(le),q(pe),q(Te)}function fe(t){t.memoizedState!==null&&te(ae,t);var n=le.current,i=Wy(n,t.type);n!==i&&(te(pe,t),te(le,i))}function ze(t){pe.current===t&&(q(le),q(pe)),ae.current===t&&(q(ae),Ds._currentValue=I)}var Ae,Oe;function Me(t){if(Ae===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Ae=n&&n[1]||"",Oe=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ae+t+Oe}var ut=!1;function Et(t,n){if(!t||ut)return"";ut=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(Q){var X=Q}Reflect.construct(t,[],ee)}else{try{ee.call()}catch(Q){X=Q}t.call(ee.prototype)}}else{try{throw Error()}catch(Q){X=Q}(ee=t())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(Q){if(Q&&X&&typeof Q.stack=="string")return[Q.stack,X.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var O=x.split(`
`),Y=T.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Y.length&&!Y[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===Y.length)for(s=O.length-1,c=Y.length-1;1<=s&&0<=c&&O[s]!==Y[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==Y[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==Y[c]){var W=`
`+O[s].replace(" at new "," at ");return t.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",t.displayName)),W}while(1<=s&&0<=c);break}}}finally{ut=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Me(i):""}function nn(t,n){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Et(t.type,!1);case 11:return Et(t.type.render,!1);case 1:return Et(t.type,!0);case 31:return Me("Activity");default:return""}}function jt(t){try{var n="",i=null;do n+=nn(t,i),i=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ct=Object.prototype.hasOwnProperty,an=e.unstable_scheduleCallback,Sn=e.unstable_cancelCallback,aa=e.unstable_shouldYield,ma=e.unstable_requestPaint,De=e.unstable_now,dt=e.unstable_getCurrentPriorityLevel,Ht=e.unstable_ImmediatePriority,gt=e.unstable_UserBlockingPriority,pa=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,si=e.unstable_IdlePriority,Xo=e.log,Gt=e.unstable_setDisableYieldValue,On=null,$t=null;function ia(t){if(typeof Xo=="function"&&Gt(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(On,t)}catch{}}var rn=Math.clz32?Math.clz32:Ll,kl=Math.log,Nr=Math.LN2;function Ll(t){return t>>>=0,t===0?32:31-(kl(t)/Nr|0)|0}var li=256,_r=262144,Ki=4194304;function Ma(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qi(t,n,i){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Ma(s):(x&=T,x!==0?c=Ma(x):i||(i=T&~t,i!==0&&(c=Ma(i))))):(T=s&~f,T!==0?c=Ma(T):x!==0?c=Ma(x):i||(i=s&~t,i!==0&&(c=Ma(i)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,i=n&-n,f>=i||f===32&&(i&4194048)!==0)?n:c}function ga(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ur(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nl(){var t=Ki;return Ki<<=1,(Ki&62914560)===0&&(Ki=4194304),t}function Go(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function L(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function B(t,n,i,s,c,f){var x=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var T=t.entanglements,O=t.expirationTimes,Y=t.hiddenUpdates;for(i=x&~i;0<i;){var W=31-rn(i),ee=1<<W;T[W]=0,O[W]=-1;var X=Y[W];if(X!==null)for(Y[W]=null,W=0;W<X.length;W++){var Q=X[W];Q!==null&&(Q.lane&=-536870913)}i&=~ee}s!==0&&K(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function K(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-rn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|i&261930}function re(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-rn(i),c=1<<s;c&n|t[s]&n&&(t[s]|=n),i&=~c}}function ce(t,n){var i=n&-n;return i=(i&42)!==0?1:Se(i),(i&(t.suspendedLanes|n))!==0?0:i}function Se(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function we(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function xe(){var t=U.p;return t!==0?t:(t=window.event,t===void 0?32:Sv(t.type))}function Ee(t,n){var i=U.p;try{return U.p=t,n()}finally{U.p=i}}var je=Math.random().toString(36).slice(2),de="__reactFiber$"+je,he="__reactProps$"+je,Be="__reactContainer$"+je,nt="__reactEvents$"+je,Dt="__reactListeners$"+je,qt="__reactHandles$"+je,lt="__reactResources$"+je,Qe="__reactMarker$"+je;function ra(t){delete t[de],delete t[he],delete t[nt],delete t[Dt],delete t[qt]}function kn(t){var n=t[de];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Be]||i[de]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=rv(t);t!==null;){if(i=t[de])return i;t=rv(t)}return n}t=i,i=t.parentNode}return null}function on(t){if(t=t[de]||t[Be]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Jt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(o(33))}function ya(t){var n=t[lt];return n||(n=t[lt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(t){t[Qe]=!0}var va=new Set,Zi={};function Ln(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(Zi[t]=n,t=0;t<n.length;t++)va.add(n[t])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Da={},xa={};function At(t){return Ct.call(xa,t)?!0:Ct.call(Da,t)?!1:Pt.test(t)?xa[t]=!0:(Da[t]=!0,!1)}function za(t,n,i){if(At(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function Wi(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function oa(t,n,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+s)}}function Nn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function W2(t,n,i){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){i=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(x){i=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function id(t){if(!t._valueTracker){var n=Fp(t)?"checked":"value";t._valueTracker=W2(t,n,""+t[n])}}function Yp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=Fp(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var J2=/[\n"\\]/g;function _n(t){return t.replace(J2,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function rd(t,n,i,s,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Nn(n)):t.value!==""+Nn(n)&&(t.value=""+Nn(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?od(t,x,Nn(n)):i!=null?od(t,x,Nn(i)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Nn(T):t.removeAttribute("name")}function Xp(t,n,i,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||i!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){id(t);return}i=i!=null?""+Nn(i):"",n=n!=null?""+Nn(n):i,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),id(t)}function od(t,n,i){n==="number"&&_l(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Vr(t,n,i,s){if(t=t.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<t.length;i++)c=n.hasOwnProperty("$"+t[i].value),t[i].selected!==c&&(t[i].selected=c),c&&s&&(t[i].defaultSelected=!0)}else{for(i=""+Nn(i),n=null,c=0;c<t.length;c++){if(t[c].value===i){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Gp(t,n,i){if(n!=null&&(n=""+Nn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Nn(i):""}function qp(t,n,i,s){if(n==null){if(s!=null){if(i!=null)throw Error(o(92));if(Ue(s)){if(1<s.length)throw Error(o(93));s=s[0]}i=s}i==null&&(i=""),n=i}i=Nn(n),t.defaultValue=i,s=t.textContent,s===i&&s!==""&&s!==null&&(t.value=s),id(t)}function Br(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var e5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ip(t,n,i){var s=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,i):typeof i!="number"||i===0||e5.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Kp(t,n,i){if(n!=null&&typeof n!="object")throw Error(o(62));if(t=t.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&i[c]!==s&&Ip(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ip(t,f,n[f])}function sd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var t5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),n5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return n5.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oa(){}var ld=null;function cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hr=null,$r=null;function Qp(t){var n=on(t);if(n&&(t=n.stateNode)){var i=t[he]||null;e:switch(t=n.stateNode,n.type){case"input":if(rd(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var c=s[he]||null;if(!c)throw Error(o(90));rd(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<i.length;n++)s=i[n],s.form===t.form&&Yp(s)}break e;case"textarea":Gp(t,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&Vr(t,!!i.multiple,n,!1)}}}var ud=!1;function Zp(t,n,i){if(ud)return t(n,i);ud=!0;try{var s=t(n);return s}finally{if(ud=!1,(Hr!==null||$r!==null)&&(Ec(),Hr&&(n=Hr,t=$r,$r=Hr=null,Qp(n),t)))for(n=0;n<t.length;n++)Qp(t[n])}}function qo(t,n){var i=t.stateNode;if(i===null)return null;var s=i[he]||null;if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=!1;if(ka)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){dd=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{dd=!1}var ci=null,fd=null,Vl=null;function Wp(){if(Vl)return Vl;var t,n=fd,i=n.length,s,c="value"in ci?ci.value:ci.textContent,f=c.length;for(t=0;t<i&&n[t]===c[t];t++);var x=i-t;for(s=1;s<=x&&n[i-s]===c[f-s];s++);return Vl=c.slice(t,1<s?1-s:void 0)}function Bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function Jp(){return!1}function un(t){function n(i,s,c,f,x){this._reactName=i,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(i=t[T],this[T]=i?i(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Hl:Jp,this.isPropagationStopped=Jp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),n}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=un(Ji),Ko=v({},Ji,{view:0,detail:0}),a5=un(Ko),hd,md,Qo,Pl=v({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(hd=t.screenX-Qo.screenX,md=t.screenY-Qo.screenY):md=hd=0,Qo=t),hd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),e0=un(Pl),i5=v({},Pl,{dataTransfer:0}),r5=un(i5),o5=v({},Ko,{relatedTarget:0}),pd=un(o5),s5=v({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),l5=un(s5),c5=v({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u5=un(c5),d5=v({},Ji,{data:0}),t0=un(d5),f5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p5(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=m5[t])?!!n[t]:!1}function gd(){return p5}var g5=v({},Ko,{key:function(t){if(t.key){var n=f5[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y5=un(g5),v5=v({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=un(v5),x5=v({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),b5=un(x5),S5=v({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),w5=un(S5),T5=v({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E5=un(T5),j5=v({},Ji,{newState:0,oldState:0}),C5=un(j5),A5=[9,13,27,32],yd=ka&&"CompositionEvent"in window,Zo=null;ka&&"documentMode"in document&&(Zo=document.documentMode);var R5=ka&&"TextEvent"in window&&!Zo,a0=ka&&(!yd||Zo&&8<Zo&&11>=Zo),i0=" ",r0=!1;function o0(t,n){switch(t){case"keyup":return A5.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function M5(t,n){switch(t){case"compositionend":return s0(n);case"keypress":return n.which!==32?null:(r0=!0,i0);case"textInput":return t=n.data,t===i0&&r0?null:t;default:return null}}function D5(t,n){if(Pr)return t==="compositionend"||!yd&&o0(t,n)?(t=Wp(),Vl=fd=ci=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return a0&&n.locale!=="ko"?null:n.data;default:return null}}var z5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!z5[t.type]:n==="textarea"}function c0(t,n,i,s){Hr?$r?$r.push(s):$r=[s]:Hr=s,n=zc(n,"onChange"),0<n.length&&(i=new $l("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var Wo=null,Jo=null;function O5(t){Xy(t,0)}function Fl(t){var n=Jt(t);if(Yp(n))return t}function u0(t,n){if(t==="change")return n}var d0=!1;if(ka){var vd;if(ka){var xd="oninput"in document;if(!xd){var f0=document.createElement("div");f0.setAttribute("oninput","return;"),xd=typeof f0.oninput=="function"}vd=xd}else vd=!1;d0=vd&&(!document.documentMode||9<document.documentMode)}function h0(){Wo&&(Wo.detachEvent("onpropertychange",m0),Jo=Wo=null)}function m0(t){if(t.propertyName==="value"&&Fl(Jo)){var n=[];c0(n,Jo,t,cd(t)),Zp(O5,n)}}function k5(t,n,i){t==="focusin"?(h0(),Wo=n,Jo=i,Wo.attachEvent("onpropertychange",m0)):t==="focusout"&&h0()}function L5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Jo)}function N5(t,n){if(t==="click")return Fl(n)}function _5(t,n){if(t==="input"||t==="change")return Fl(n)}function U5(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var wn=typeof Object.is=="function"?Object.is:U5;function es(t,n){if(wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var c=i[s];if(!Ct.call(n,c)||!wn(t[c],n[c]))return!1}return!0}function p0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g0(t,n){var i=p0(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=p0(i)}}function y0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?y0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function v0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_l(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=_l(t.document)}return n}function bd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var V5=ka&&"documentMode"in document&&11>=document.documentMode,Fr=null,Sd=null,ts=null,wd=!1;function x0(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;wd||Fr==null||Fr!==_l(s)||(s=Fr,"selectionStart"in s&&bd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ts&&es(ts,s)||(ts=s,s=zc(Sd,"onSelect"),0<s.length&&(n=new $l("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=Fr)))}function er(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Yr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Td={},b0={};ka&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function tr(t){if(Td[t])return Td[t];if(!Yr[t])return t;var n=Yr[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in b0)return Td[t]=n[i];return t}var S0=tr("animationend"),w0=tr("animationiteration"),T0=tr("animationstart"),B5=tr("transitionrun"),H5=tr("transitionstart"),$5=tr("transitioncancel"),E0=tr("transitionend"),j0=new Map,Ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ed.push("scrollEnd");function sa(t,n){j0.set(t,n),Ln(n,[t])}var Yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Un=[],Xr=0,jd=0;function Xl(){for(var t=Xr,n=jd=Xr=0;n<t;){var i=Un[n];Un[n++]=null;var s=Un[n];Un[n++]=null;var c=Un[n];Un[n++]=null;var f=Un[n];if(Un[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&C0(i,c,f)}}function Gl(t,n,i,s){Un[Xr++]=t,Un[Xr++]=n,Un[Xr++]=i,Un[Xr++]=s,jd|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Cd(t,n,i,s){return Gl(t,n,i,s),ql(t)}function nr(t,n){return Gl(t,null,null,n),ql(t)}function C0(t,n,i){t.lanes|=i;var s=t.alternate;s!==null&&(s.lanes|=i);for(var c=!1,f=t.return;f!==null;)f.childLanes|=i,s=f.alternate,s!==null&&(s.childLanes|=i),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-rn(i),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=i|536870912),f):null}function ql(t){if(50<Ts)throw Ts=0,_f=null,Error(o(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function P5(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,n,i,s){return new P5(t,n,i,s)}function Ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function La(t,n){var i=t.alternate;return i===null?(i=Tn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function A0(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Il(t,n,i,s,c,f){var x=0;if(s=t,typeof t=="function")Ad(t)&&(x=1);else if(typeof t=="string")x=qT(t,i,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Z:return t=Tn(31,i,n,c),t.elementType=Z,t.lanes=f,t;case M:return ar(i.children,c,f,n);case R:x=8,c|=24;break;case E:return t=Tn(12,i,n,c|2),t.elementType=E,t.lanes=f,t;case H:return t=Tn(13,i,n,c),t.elementType=H,t.lanes=f,t;case A:return t=Tn(19,i,n,c),t.elementType=A,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break e;case D:x=9;break e;case G:x=11;break e;case $:x=14;break e;case P:x=16,s=null;break e}x=29,i=Error(o(130,t===null?"null":typeof t,"")),s=null}return n=Tn(x,i,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ar(t,n,i,s){return t=Tn(7,t,s,n),t.lanes=i,t}function Rd(t,n,i){return t=Tn(6,t,null,n),t.lanes=i,t}function R0(t){var n=Tn(18,null,null,0);return n.stateNode=t,n}function Md(t,n,i){return n=Tn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var M0=new WeakMap;function Vn(t,n){if(typeof t=="object"&&t!==null){var i=M0.get(t);return i!==void 0?i:(n={value:t,source:n,stack:jt(n)},M0.set(t,n),n)}return{value:t,source:n,stack:jt(n)}}var qr=[],Ir=0,Kl=null,ns=0,Bn=[],Hn=0,ui=null,ba=1,Sa="";function Na(t,n){qr[Ir++]=ns,qr[Ir++]=Kl,Kl=t,ns=n}function D0(t,n,i){Bn[Hn++]=ba,Bn[Hn++]=Sa,Bn[Hn++]=ui,ui=t;var s=ba;t=Sa;var c=32-rn(s)-1;s&=~(1<<c),i+=1;var f=32-rn(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,ba=1<<32-rn(n)+c|i<<c|s,Sa=f+t}else ba=1<<f|i<<c|s,Sa=t}function Dd(t){t.return!==null&&(Na(t,1),D0(t,1,0))}function zd(t){for(;t===Kl;)Kl=qr[--Ir],qr[Ir]=null,ns=qr[--Ir],qr[Ir]=null;for(;t===ui;)ui=Bn[--Hn],Bn[Hn]=null,Sa=Bn[--Hn],Bn[Hn]=null,ba=Bn[--Hn],Bn[Hn]=null}function z0(t,n){Bn[Hn++]=ba,Bn[Hn++]=Sa,Bn[Hn++]=ui,ba=n.id,Sa=n.overflow,ui=t}var It=null,ft=null,qe=!1,di=null,$n=!1,Od=Error(o(519));function fi(t){var n=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw as(Vn(n,t)),Od}function O0(t){var n=t.stateNode,i=t.type,s=t.memoizedProps;switch(n[de]=t,n[he]=s,i){case"dialog":Ye("cancel",n),Ye("close",n);break;case"iframe":case"object":case"embed":Ye("load",n);break;case"video":case"audio":for(i=0;i<js.length;i++)Ye(js[i],n);break;case"source":Ye("error",n);break;case"img":case"image":case"link":Ye("error",n),Ye("load",n);break;case"details":Ye("toggle",n);break;case"input":Ye("invalid",n),Xp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ye("invalid",n);break;case"textarea":Ye("invalid",n),qp(n,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||s.suppressHydrationWarning===!0||Ky(n.textContent,i)?(s.popover!=null&&(Ye("beforetoggle",n),Ye("toggle",n)),s.onScroll!=null&&Ye("scroll",n),s.onScrollEnd!=null&&Ye("scrollend",n),s.onClick!=null&&(n.onclick=Oa),n=!0):n=!1,n||fi(t,!0)}function k0(t){for(It=t.return;It;)switch(It.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:It=It.return}}function Kr(t){if(t!==It)return!1;if(!qe)return k0(t),qe=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Zf(t.type,t.memoizedProps)),i=!i),i&&ft&&fi(t),k0(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));ft=iv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));ft=iv(t)}else n===27?(n=ft,Ci(t.type)?(t=nh,nh=null,ft=t):ft=n):ft=It?Fn(t.stateNode.nextSibling):null;return!0}function ir(){ft=It=null,qe=!1}function kd(){var t=di;return t!==null&&(mn===null?mn=t:mn.push.apply(mn,t),di=null),t}function as(t){di===null?di=[t]:di.push(t)}var Ld=k(null),rr=null,_a=null;function hi(t,n,i){te(Ld,n._currentValue),n._currentValue=i}function Ua(t){t._currentValue=Ld.current,q(Ld)}function Nd(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function _d(t,n,i,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var O=0;O<n.length;O++)if(T.context===n[O]){f.lanes|=i,T=f.alternate,T!==null&&(T.lanes|=i),Nd(f.return,i,t),s||(x=null);break e}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(o(341));x.lanes|=i,f=x.alternate,f!==null&&(f.lanes|=i),Nd(x,i,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Qr(t,n,i,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(o(387));if(x=x.memoizedProps,x!==null){var T=c.type;wn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===ae.current){if(x=c.alternate,x===null)throw Error(o(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ds):t=[Ds])}c=c.return}t!==null&&_d(n,t,i,s),n.flags|=262144}function Ql(t){for(t=t.firstContext;t!==null;){if(!wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function or(t){rr=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return L0(rr,t)}function Zl(t,n){return rr===null&&or(t),L0(t,n)}function L0(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},_a===null){if(t===null)throw Error(o(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return i}var F5=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Y5=e.unstable_scheduleCallback,X5=e.unstable_NormalPriority,zt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ud(){return{controller:new F5,data:new Map,refCount:0}}function is(t){t.refCount--,t.refCount===0&&Y5(X5,function(){t.controller.abort()})}var rs=null,Vd=0,Zr=0,Wr=null;function G5(t,n){if(rs===null){var i=rs=[];Vd=0,Zr=Pf(),Wr={status:"pending",value:void 0,then:function(s){i.push(s)}}}return Vd++,n.then(N0,N0),n}function N0(){if(--Vd===0&&rs!==null){Wr!==null&&(Wr.status="fulfilled");var t=rs;rs=null,Zr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function q5(t,n){var i=[],s={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<i.length;c++)(0,i[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),s}var _0=z.S;z.S=function(t,n){xy=De(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&G5(t,n),_0!==null&&_0(t,n)};var sr=k(null);function Bd(){var t=sr.current;return t!==null?t:ot.pooledCache}function Wl(t,n){n===null?te(sr,sr.current):te(sr,n.pool)}function U0(){var t=Bd();return t===null?null:{parent:zt._currentValue,pool:t}}var Jr=Error(o(460)),Hd=Error(o(474)),Jl=Error(o(542)),ec={then:function(){}};function V0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function B0(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(Oa,Oa),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$0(t),t;default:if(typeof n.status=="string")n.then(Oa,Oa);else{if(t=ot,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$0(t),t}throw cr=n,Jr}}function lr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(cr=i,Jr):i}}var cr=null;function H0(){if(cr===null)throw Error(o(459));var t=cr;return cr=null,t}function $0(t){if(t===Jr||t===Jl)throw Error(o(483))}var eo=null,os=0;function tc(t){var n=os;return os+=1,eo===null&&(eo=[]),B0(eo,t,n)}function ss(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nc(t,n){throw n.$$typeof===b?Error(o(525)):(t=Object.prototype.toString.call(n),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function P0(t){function n(V,_){if(t){var F=V.deletions;F===null?(V.deletions=[_],V.flags|=16):F.push(_)}}function i(V,_){if(!t)return null;for(;_!==null;)n(V,_),_=_.sibling;return null}function s(V){for(var _=new Map;V!==null;)V.key!==null?_.set(V.key,V):_.set(V.index,V),V=V.sibling;return _}function c(V,_){return V=La(V,_),V.index=0,V.sibling=null,V}function f(V,_,F){return V.index=F,t?(F=V.alternate,F!==null?(F=F.index,F<_?(V.flags|=67108866,_):F):(V.flags|=67108866,_)):(V.flags|=1048576,_)}function x(V){return t&&V.alternate===null&&(V.flags|=67108866),V}function T(V,_,F,J){return _===null||_.tag!==6?(_=Rd(F,V.mode,J),_.return=V,_):(_=c(_,F),_.return=V,_)}function O(V,_,F,J){var Ce=F.type;return Ce===M?W(V,_,F.props.children,J,F.key):_!==null&&(_.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===P&&lr(Ce)===_.type)?(_=c(_,F.props),ss(_,F),_.return=V,_):(_=Il(F.type,F.key,F.props,null,V.mode,J),ss(_,F),_.return=V,_)}function Y(V,_,F,J){return _===null||_.tag!==4||_.stateNode.containerInfo!==F.containerInfo||_.stateNode.implementation!==F.implementation?(_=Md(F,V.mode,J),_.return=V,_):(_=c(_,F.children||[]),_.return=V,_)}function W(V,_,F,J,Ce){return _===null||_.tag!==7?(_=ar(F,V.mode,J,Ce),_.return=V,_):(_=c(_,F),_.return=V,_)}function ee(V,_,F){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Rd(""+_,V.mode,F),_.return=V,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case S:return F=Il(_.type,_.key,_.props,null,V.mode,F),ss(F,_),F.return=V,F;case j:return _=Md(_,V.mode,F),_.return=V,_;case P:return _=lr(_),ee(V,_,F)}if(Ue(_)||Le(_))return _=ar(_,V.mode,F,null),_.return=V,_;if(typeof _.then=="function")return ee(V,tc(_),F);if(_.$$typeof===N)return ee(V,Zl(V,_),F);nc(V,_)}return null}function X(V,_,F,J){var Ce=_!==null?_.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return Ce!==null?null:T(V,_,""+F,J);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===Ce?O(V,_,F,J):null;case j:return F.key===Ce?Y(V,_,F,J):null;case P:return F=lr(F),X(V,_,F,J)}if(Ue(F)||Le(F))return Ce!==null?null:W(V,_,F,J,null);if(typeof F.then=="function")return X(V,_,tc(F),J);if(F.$$typeof===N)return X(V,_,Zl(V,F),J);nc(V,F)}return null}function Q(V,_,F,J,Ce){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return V=V.get(F)||null,T(_,V,""+J,Ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return V=V.get(J.key===null?F:J.key)||null,O(_,V,J,Ce);case j:return V=V.get(J.key===null?F:J.key)||null,Y(_,V,J,Ce);case P:return J=lr(J),Q(V,_,F,J,Ce)}if(Ue(J)||Le(J))return V=V.get(F)||null,W(_,V,J,Ce,null);if(typeof J.then=="function")return Q(V,_,F,tc(J),Ce);if(J.$$typeof===N)return Q(V,_,F,Zl(_,J),Ce);nc(_,J)}return null}function ge(V,_,F,J){for(var Ce=null,Ie=null,be=_,Ve=_=0,Ge=null;be!==null&&Ve<F.length;Ve++){be.index>Ve?(Ge=be,be=null):Ge=be.sibling;var Ke=X(V,be,F[Ve],J);if(Ke===null){be===null&&(be=Ge);break}t&&be&&Ke.alternate===null&&n(V,be),_=f(Ke,_,Ve),Ie===null?Ce=Ke:Ie.sibling=Ke,Ie=Ke,be=Ge}if(Ve===F.length)return i(V,be),qe&&Na(V,Ve),Ce;if(be===null){for(;Ve<F.length;Ve++)be=ee(V,F[Ve],J),be!==null&&(_=f(be,_,Ve),Ie===null?Ce=be:Ie.sibling=be,Ie=be);return qe&&Na(V,Ve),Ce}for(be=s(be);Ve<F.length;Ve++)Ge=Q(be,V,Ve,F[Ve],J),Ge!==null&&(t&&Ge.alternate!==null&&be.delete(Ge.key===null?Ve:Ge.key),_=f(Ge,_,Ve),Ie===null?Ce=Ge:Ie.sibling=Ge,Ie=Ge);return t&&be.forEach(function(zi){return n(V,zi)}),qe&&Na(V,Ve),Ce}function Re(V,_,F,J){if(F==null)throw Error(o(151));for(var Ce=null,Ie=null,be=_,Ve=_=0,Ge=null,Ke=F.next();be!==null&&!Ke.done;Ve++,Ke=F.next()){be.index>Ve?(Ge=be,be=null):Ge=be.sibling;var zi=X(V,be,Ke.value,J);if(zi===null){be===null&&(be=Ge);break}t&&be&&zi.alternate===null&&n(V,be),_=f(zi,_,Ve),Ie===null?Ce=zi:Ie.sibling=zi,Ie=zi,be=Ge}if(Ke.done)return i(V,be),qe&&Na(V,Ve),Ce;if(be===null){for(;!Ke.done;Ve++,Ke=F.next())Ke=ee(V,Ke.value,J),Ke!==null&&(_=f(Ke,_,Ve),Ie===null?Ce=Ke:Ie.sibling=Ke,Ie=Ke);return qe&&Na(V,Ve),Ce}for(be=s(be);!Ke.done;Ve++,Ke=F.next())Ke=Q(be,V,Ve,Ke.value,J),Ke!==null&&(t&&Ke.alternate!==null&&be.delete(Ke.key===null?Ve:Ke.key),_=f(Ke,_,Ve),Ie===null?Ce=Ke:Ie.sibling=Ke,Ie=Ke);return t&&be.forEach(function(iE){return n(V,iE)}),qe&&Na(V,Ve),Ce}function rt(V,_,F,J){if(typeof F=="object"&&F!==null&&F.type===M&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var Ce=F.key;_!==null;){if(_.key===Ce){if(Ce=F.type,Ce===M){if(_.tag===7){i(V,_.sibling),J=c(_,F.props.children),J.return=V,V=J;break e}}else if(_.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===P&&lr(Ce)===_.type){i(V,_.sibling),J=c(_,F.props),ss(J,F),J.return=V,V=J;break e}i(V,_);break}else n(V,_);_=_.sibling}F.type===M?(J=ar(F.props.children,V.mode,J,F.key),J.return=V,V=J):(J=Il(F.type,F.key,F.props,null,V.mode,J),ss(J,F),J.return=V,V=J)}return x(V);case j:e:{for(Ce=F.key;_!==null;){if(_.key===Ce)if(_.tag===4&&_.stateNode.containerInfo===F.containerInfo&&_.stateNode.implementation===F.implementation){i(V,_.sibling),J=c(_,F.children||[]),J.return=V,V=J;break e}else{i(V,_);break}else n(V,_);_=_.sibling}J=Md(F,V.mode,J),J.return=V,V=J}return x(V);case P:return F=lr(F),rt(V,_,F,J)}if(Ue(F))return ge(V,_,F,J);if(Le(F)){if(Ce=Le(F),typeof Ce!="function")throw Error(o(150));return F=Ce.call(F),Re(V,_,F,J)}if(typeof F.then=="function")return rt(V,_,tc(F),J);if(F.$$typeof===N)return rt(V,_,Zl(V,F),J);nc(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,_!==null&&_.tag===6?(i(V,_.sibling),J=c(_,F),J.return=V,V=J):(i(V,_),J=Rd(F,V.mode,J),J.return=V,V=J),x(V)):i(V,_)}return function(V,_,F,J){try{os=0;var Ce=rt(V,_,F,J);return eo=null,Ce}catch(be){if(be===Jr||be===Jl)throw be;var Ie=Tn(29,be,null,V.mode);return Ie.lanes=J,Ie.return=V,Ie}finally{}}}var ur=P0(!0),F0=P0(!1),mi=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function gi(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ze&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ql(t),C0(t,null,i),n}return Gl(t,s,n,i),ql(t)}function ls(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,re(t,i)}}function Fd(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var x={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,i=i.next}while(i!==null);f===null?c=f=n:f=f.next=n}else c=f=n;i={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var Yd=!1;function cs(){if(Yd){var t=Wr;if(t!==null)throw t}}function us(t,n,i,s){Yd=!1;var c=t.updateQueue;mi=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var O=T,Y=O.next;O.next=null,x===null?f=Y:x.next=Y,x=O;var W=t.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==x&&(T===null?W.firstBaseUpdate=Y:T.next=Y,W.lastBaseUpdate=O))}if(f!==null){var ee=c.baseState;x=0,W=Y=O=null,T=f;do{var X=T.lane&-536870913,Q=X!==T.lane;if(Q?(Xe&X)===X:(s&X)===X){X!==0&&X===Zr&&(Yd=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ge=t,Re=T;X=n;var rt=i;switch(Re.tag){case 1:if(ge=Re.payload,typeof ge=="function"){ee=ge.call(rt,ee,X);break e}ee=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Re.payload,X=typeof ge=="function"?ge.call(rt,ee,X):ge,X==null)break e;ee=v({},ee,X);break e;case 2:mi=!0}}X=T.callback,X!==null&&(t.flags|=64,Q&&(t.flags|=8192),Q=c.callbacks,Q===null?c.callbacks=[X]:Q.push(X))}else Q={lane:X,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(Y=W=Q,O=ee):W=W.next=Q,x|=X;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;Q=T,T=Q.next,Q.next=null,c.lastBaseUpdate=Q,c.shared.pending=null}}while(!0);W===null&&(O=ee),c.baseState=O,c.firstBaseUpdate=Y,c.lastBaseUpdate=W,f===null&&(c.shared.lanes=0),Si|=x,t.lanes=x,t.memoizedState=ee}}function Y0(t,n){if(typeof t!="function")throw Error(o(191,t));t.call(n)}function X0(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Y0(i[t],n)}var to=k(null),ac=k(0);function G0(t,n){t=Ga,te(ac,t),te(to,n),Ga=t|n.baseLanes}function Xd(){te(ac,Ga),te(to,to.current)}function Gd(){Ga=ac.current,q(to),q(ac)}var En=k(null),Pn=null;function yi(t){var n=t.alternate;te(Rt,Rt.current&1),te(En,t),Pn===null&&(n===null||to.current!==null||n.memoizedState!==null)&&(Pn=t)}function qd(t){te(Rt,Rt.current),te(En,t),Pn===null&&(Pn=t)}function q0(t){t.tag===22?(te(Rt,Rt.current),te(En,t),Pn===null&&(Pn=t)):vi()}function vi(){te(Rt,Rt.current),te(En,En.current)}function jn(t){q(En),Pn===t&&(Pn=null),q(Rt)}var Rt=k(0);function ic(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||eh(i)||th(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Va=0,_e=null,at=null,Ot=null,rc=!1,no=!1,dr=!1,oc=0,ds=0,ao=null,I5=0;function bt(){throw Error(o(321))}function Id(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!wn(t[i],n[i]))return!1;return!0}function Kd(t,n,i,s,c,f){return Va=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Dg:df,dr=!1,f=i(s,c),dr=!1,no&&(f=K0(n,i,s,c)),I0(t),f}function I0(t){z.H=ms;var n=at!==null&&at.next!==null;if(Va=0,Ot=at=_e=null,rc=!1,ds=0,ao=null,n)throw Error(o(300));t===null||kt||(t=t.dependencies,t!==null&&Ql(t)&&(kt=!0))}function K0(t,n,i,s){_e=t;var c=0;do{if(no&&(ao=null),ds=0,no=!1,25<=c)throw Error(o(301));if(c+=1,Ot=at=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=zg,f=n(i,s)}while(no);return f}function K5(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?fs(n):n,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(_e.flags|=1024),n}function Qd(){var t=oc!==0;return oc=0,t}function Zd(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Wd(t){if(rc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rc=!1}Va=0,Ot=at=_e=null,no=!1,ds=oc=0,ao=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?_e.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Mt(){if(at===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var n=Ot===null?_e.memoizedState:Ot.next;if(n!==null)Ot=n,at=t;else{if(t===null)throw _e.alternate===null?Error(o(467)):Error(o(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},Ot===null?_e.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(t){var n=ds;return ds+=1,ao===null&&(ao=[]),t=B0(ao,t,n),n=_e,(Ot===null?n.memoizedState:Ot.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Dg:df),t}function lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fs(t);if(t.$$typeof===N)return Kt(t)}throw Error(o(438,String(t)))}function Jd(t){var n=null,i=_e.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=sc(),_e.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),s=0;s<t;s++)i[s]=ne;return n.index++,i}function Ba(t,n){return typeof n=="function"?n(t):n}function cc(t){var n=Mt();return ef(n,at,t)}function ef(t,n,i){var s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=i;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,O=null,Y=n,W=!1;do{var ee=Y.lane&-536870913;if(ee!==Y.lane?(Xe&ee)===ee:(Va&ee)===ee){var X=Y.revertLane;if(X===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),ee===Zr&&(W=!0);else if((Va&X)===X){Y=Y.next,X===Zr&&(W=!0);continue}else ee={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},O===null?(T=O=ee,x=f):O=O.next=ee,_e.lanes|=X,Si|=X;ee=Y.action,dr&&i(f,ee),f=Y.hasEagerState?Y.eagerState:i(f,ee)}else X={lane:ee,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},O===null?(T=O=X,x=f):O=O.next=X,_e.lanes|=ee,Si|=ee;Y=Y.next}while(Y!==null&&Y!==n);if(O===null?x=f:O.next=T,!wn(f,t.memoizedState)&&(kt=!0,W&&(i=Wr,i!==null)))throw i;t.memoizedState=f,t.baseState=x,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function tf(t){var n=Mt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=t;var s=i.dispatch,c=i.pending,f=n.memoizedState;if(c!==null){i.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);wn(f,n.memoizedState)||(kt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,s]}function Q0(t,n,i){var s=_e,c=Mt(),f=qe;if(f){if(i===void 0)throw Error(o(407));i=i()}else i=n();var x=!wn((at||c).memoizedState,i);if(x&&(c.memoizedState=i,kt=!0),c=c.queue,rf(J0.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||Ot!==null&&Ot.memoizedState.tag&1){if(s.flags|=2048,io(9,{destroy:void 0},W0.bind(null,s,c,i,n),null),ot===null)throw Error(o(349));f||(Va&127)!==0||Z0(s,n,i)}return i}function Z0(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=_e.updateQueue,n===null?(n=sc(),_e.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function W0(t,n,i,s){n.value=i,n.getSnapshot=s,eg(n)&&tg(t)}function J0(t,n,i){return i(function(){eg(n)&&tg(t)})}function eg(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!wn(t,i)}catch{return!0}}function tg(t){var n=nr(t,2);n!==null&&pn(n,t,2)}function nf(t){var n=sn();if(typeof t=="function"){var i=t;if(t=i(),dr){ia(!0);try{i()}finally{ia(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},n}function ng(t,n,i,s){return t.baseState=i,ef(t,at,typeof s=="function"?s:Ba)}function Q5(t,n,i,s,c){if(fc(t))throw Error(o(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?i(!0):f.isTransition=!1,s(f),i=n.pending,i===null?(f.next=n.pending=f,ag(n,f)):(f.next=i.next,n.pending=i.next=f)}}function ag(t,n){var i=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var T=i(c,s),O=z.S;O!==null&&O(x,T),ig(t,n,T)}catch(Y){af(t,n,Y)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=i(c,s),ig(t,n,f)}catch(Y){af(t,n,Y)}}function ig(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){rg(t,n,s)},function(s){return af(t,n,s)}):rg(t,n,i)}function rg(t,n,i){n.status="fulfilled",n.value=i,og(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,ag(t,i)))}function af(t,n,i){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=i,og(n),n=n.next;while(n!==s)}t.action=null}function og(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function sg(t,n){return n}function lg(t,n){if(qe){var i=ot.formState;if(i!==null){e:{var s=_e;if(qe){if(ft){t:{for(var c=ft,f=$n;c.nodeType!==8;){if(!f){c=null;break t}if(c=Fn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ft=Fn(c.nextSibling),s=c.data==="F!";break e}}fi(s)}s=!1}s&&(n=i[0])}}return i=sn(),i.memoizedState=i.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sg,lastRenderedState:n},i.queue=s,i=Ag.bind(null,_e,s),s.dispatch=i,s=nf(!1),f=uf.bind(null,_e,!1,s.queue),s=sn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,i=Q5.bind(null,_e,c,f,i),c.dispatch=i,s.memoizedState=t,[n,i,!1]}function cg(t){var n=Mt();return ug(n,at,t)}function ug(t,n,i){if(n=ef(t,n,sg)[0],t=cc(Ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=fs(n)}catch(x){throw x===Jr?Jl:x}else s=n;n=Mt();var c=n.queue,f=c.dispatch;return i!==n.memoizedState&&(_e.flags|=2048,io(9,{destroy:void 0},Z5.bind(null,c,i),null)),[s,f,t]}function Z5(t,n){t.action=n}function dg(t){var n=Mt(),i=at;if(i!==null)return ug(n,i,t);Mt(),n=n.memoizedState,i=Mt();var s=i.queue.dispatch;return i.memoizedState=t,[n,s,!1]}function io(t,n,i,s){return t={tag:t,create:i,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=sc(),_e.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t),t}function fg(){return Mt().memoizedState}function uc(t,n,i,s){var c=sn();_e.flags|=t,c.memoizedState=io(1|n,{destroy:void 0},i,s===void 0?null:s)}function dc(t,n,i,s){var c=Mt();s=s===void 0?null:s;var f=c.memoizedState.inst;at!==null&&s!==null&&Id(s,at.memoizedState.deps)?c.memoizedState=io(n,f,i,s):(_e.flags|=t,c.memoizedState=io(1|n,f,i,s))}function hg(t,n){uc(8390656,8,t,n)}function rf(t,n){dc(2048,8,t,n)}function W5(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=sc(),_e.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function mg(t){var n=Mt().memoizedState;return W5({ref:n,nextImpl:t}),function(){if((Ze&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}function pg(t,n){return dc(4,2,t,n)}function gg(t,n){return dc(4,4,t,n)}function yg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function vg(t,n,i){i=i!=null?i.concat([t]):null,dc(4,4,yg.bind(null,n,t),i)}function of(){}function xg(t,n){var i=Mt();n=n===void 0?null:n;var s=i.memoizedState;return n!==null&&Id(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function bg(t,n){var i=Mt();n=n===void 0?null:n;var s=i.memoizedState;if(n!==null&&Id(n,s[1]))return s[0];if(s=t(),dr){ia(!0);try{t()}finally{ia(!1)}}return i.memoizedState=[s,n],s}function sf(t,n,i){return i===void 0||(Va&1073741824)!==0&&(Xe&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=Sy(),_e.lanes|=t,Si|=t,i)}function Sg(t,n,i,s){return wn(i,n)?i:to.current!==null?(t=sf(t,i,s),wn(t,n)||(kt=!0),t):(Va&42)===0||(Va&1073741824)!==0&&(Xe&261930)===0?(kt=!0,t.memoizedState=i):(t=Sy(),_e.lanes|=t,Si|=t,n)}function wg(t,n,i,s,c){var f=U.p;U.p=f!==0&&8>f?f:8;var x=z.T,T={};z.T=T,uf(t,!1,n,i);try{var O=c(),Y=z.S;if(Y!==null&&Y(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=q5(O,s);hs(t,n,W,Rn(t))}else hs(t,n,s,Rn(t))}catch(ee){hs(t,n,{then:function(){},status:"rejected",reason:ee},Rn())}finally{U.p=f,x!==null&&T.types!==null&&(x.types=T.types),z.T=x}}function J5(){}function lf(t,n,i,s){if(t.tag!==5)throw Error(o(476));var c=Tg(t).queue;wg(t,c,n,I,i===null?J5:function(){return Eg(t),i(s)})}function Tg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:I},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Eg(t){var n=Tg(t);n.next===null&&(n=t.alternate.memoizedState),hs(t,n.next.queue,{},Rn())}function cf(){return Kt(Ds)}function jg(){return Mt().memoizedState}function Cg(){return Mt().memoizedState}function eT(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=Rn();t=pi(i);var s=gi(n,t,i);s!==null&&(pn(s,n,i),ls(s,n,i)),n={cache:Ud()},t.payload=n;return}n=n.return}}function tT(t,n,i){var s=Rn();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},fc(t)?Rg(n,i):(i=Cd(t,n,i,s),i!==null&&(pn(i,t,s),Mg(i,n,s)))}function Ag(t,n,i){var s=Rn();hs(t,n,i,s)}function hs(t,n,i,s){var c={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(fc(t))Rg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,i);if(c.hasEagerState=!0,c.eagerState=T,wn(T,x))return Gl(t,n,c,0),ot===null&&Xl(),!1}catch{}finally{}if(i=Cd(t,n,c,s),i!==null)return pn(i,t,s),Mg(i,n,s),!0}return!1}function uf(t,n,i,s){if(s={lane:2,revertLane:Pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},fc(t)){if(n)throw Error(o(479))}else n=Cd(t,i,s,2),n!==null&&pn(n,t,2)}function fc(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function Rg(t,n){no=rc=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Mg(t,n,i){if((i&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,re(t,i)}}var ms={readContext:Kt,use:lc,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};ms.useEffectEvent=bt;var Dg={readContext:Kt,use:lc,useCallback:function(t,n){return sn().memoizedState=[t,n===void 0?null:n],t},useContext:Kt,useEffect:hg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,uc(4194308,4,yg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return uc(4194308,4,t,n)},useInsertionEffect:function(t,n){uc(4,2,t,n)},useMemo:function(t,n){var i=sn();n=n===void 0?null:n;var s=t();if(dr){ia(!0);try{t()}finally{ia(!1)}}return i.memoizedState=[s,n],s},useReducer:function(t,n,i){var s=sn();if(i!==void 0){var c=i(n);if(dr){ia(!0);try{i(n)}finally{ia(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=tT.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=sn();return t={current:t},n.memoizedState=t},useState:function(t){t=nf(t);var n=t.queue,i=Ag.bind(null,_e,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:of,useDeferredValue:function(t,n){var i=sn();return sf(i,t,n)},useTransition:function(){var t=nf(!1);return t=wg.bind(null,_e,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var s=_e,c=sn();if(qe){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),ot===null)throw Error(o(349));(Xe&127)!==0||Z0(s,n,i)}c.memoizedState=i;var f={value:i,getSnapshot:n};return c.queue=f,hg(J0.bind(null,s,f,t),[t]),s.flags|=2048,io(9,{destroy:void 0},W0.bind(null,s,f,i,n),null),i},useId:function(){var t=sn(),n=ot.identifierPrefix;if(qe){var i=Sa,s=ba;i=(s&~(1<<32-rn(s)-1)).toString(32)+i,n="_"+n+"R_"+i,i=oc++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=I5++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:cf,useFormState:lg,useActionState:lg,useOptimistic:function(t){var n=sn();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=uf.bind(null,_e,!0,i),i.dispatch=n,[t,n]},useMemoCache:Jd,useCacheRefresh:function(){return sn().memoizedState=eT.bind(null,_e)},useEffectEvent:function(t){var n=sn(),i={impl:t};return n.memoizedState=i,function(){if((Ze&2)!==0)throw Error(o(440));return i.impl.apply(void 0,arguments)}}},df={readContext:Kt,use:lc,useCallback:xg,useContext:Kt,useEffect:rf,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:gg,useMemo:bg,useReducer:cc,useRef:fg,useState:function(){return cc(Ba)},useDebugValue:of,useDeferredValue:function(t,n){var i=Mt();return Sg(i,at.memoizedState,t,n)},useTransition:function(){var t=cc(Ba)[0],n=Mt().memoizedState;return[typeof t=="boolean"?t:fs(t),n]},useSyncExternalStore:Q0,useId:jg,useHostTransitionStatus:cf,useFormState:cg,useActionState:cg,useOptimistic:function(t,n){var i=Mt();return ng(i,at,t,n)},useMemoCache:Jd,useCacheRefresh:Cg};df.useEffectEvent=mg;var zg={readContext:Kt,use:lc,useCallback:xg,useContext:Kt,useEffect:rf,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:gg,useMemo:bg,useReducer:tf,useRef:fg,useState:function(){return tf(Ba)},useDebugValue:of,useDeferredValue:function(t,n){var i=Mt();return at===null?sf(i,t,n):Sg(i,at.memoizedState,t,n)},useTransition:function(){var t=tf(Ba)[0],n=Mt().memoizedState;return[typeof t=="boolean"?t:fs(t),n]},useSyncExternalStore:Q0,useId:jg,useHostTransitionStatus:cf,useFormState:dg,useActionState:dg,useOptimistic:function(t,n){var i=Mt();return at!==null?ng(i,at,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Jd,useCacheRefresh:Cg};zg.useEffectEvent=mg;function ff(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:v({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var hf={enqueueSetState:function(t,n,i){t=t._reactInternals;var s=Rn(),c=pi(s);c.payload=n,i!=null&&(c.callback=i),n=gi(t,c,s),n!==null&&(pn(n,t,s),ls(n,t,s))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=Rn(),c=pi(s);c.tag=1,c.payload=n,i!=null&&(c.callback=i),n=gi(t,c,s),n!==null&&(pn(n,t,s),ls(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=Rn(),s=pi(i);s.tag=2,n!=null&&(s.callback=n),n=gi(t,s,i),n!==null&&(pn(n,t,i),ls(n,t,i))}};function Og(t,n,i,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!es(i,s)||!es(c,f):!0}function kg(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&hf.enqueueReplaceState(n,n.state,null)}function fr(t,n){var i=n;if("ref"in n){i={};for(var s in n)s!=="ref"&&(i[s]=n[s])}if(t=t.defaultProps){i===n&&(i=v({},i));for(var c in t)i[c]===void 0&&(i[c]=t[c])}return i}function Lg(t){Yl(t)}function Ng(t){console.error(t)}function _g(t){Yl(t)}function hc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ug(t,n,i){try{var s=t.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function mf(t,n,i){return i=pi(i),i.tag=3,i.payload={element:null},i.callback=function(){hc(t,n)},i}function Vg(t){return t=pi(t),t.tag=3,t}function Bg(t,n,i,s){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Ug(n,i,s)}}var x=i.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Ug(n,i,s),typeof c!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function nT(t,n,i,s,c){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=i.alternate,n!==null&&Qr(n,i,c,!0),i=En.current,i!==null){switch(i.tag){case 31:case 13:return Pn===null?jc():i.alternate===null&&St===0&&(St=3),i.flags&=-257,i.flags|=65536,i.lanes=c,s===ec?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([s]):n.add(s),Bf(t,s,c)),!1;case 22:return i.flags|=65536,s===ec?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([s]):i.add(s)),Bf(t,s,c)),!1}throw Error(o(435,i.tag))}return Bf(t,s,c),jc(),!1}if(qe)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Od&&(t=Error(o(422),{cause:s}),as(Vn(t,i)))):(s!==Od&&(n=Error(o(423),{cause:s}),as(Vn(n,i))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Vn(s,i),c=mf(t.stateNode,s,c),Fd(t,c),St!==4&&(St=2)),!1;var f=Error(o(520),{cause:s});if(f=Vn(f,i),ws===null?ws=[f]:ws.push(f),St!==4&&(St=2),n===null)return!0;s=Vn(s,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=c&-c,i.lanes|=t,t=mf(i.stateNode,s,t),Fd(i,t),!1;case 1:if(n=i.type,f=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wi===null||!wi.has(f))))return i.flags|=65536,c&=-c,i.lanes|=c,c=Vg(c),Bg(c,t,i,s),Fd(i,c),!1}i=i.return}while(i!==null);return!1}var pf=Error(o(461)),kt=!1;function Qt(t,n,i,s){n.child=t===null?F0(n,null,i,s):ur(n,t.child,i,s)}function Hg(t,n,i,s,c){i=i.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return or(n),s=Kd(t,n,i,x,f,c),T=Qd(),t!==null&&!kt?(Zd(t,n,c),Ha(t,n,c)):(qe&&T&&Dd(n),n.flags|=1,Qt(t,n,s,c),n.child)}function $g(t,n,i,s,c){if(t===null){var f=i.type;return typeof f=="function"&&!Ad(f)&&f.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=f,Pg(t,n,f,s,c)):(t=Il(i.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Tf(t,c)){var x=f.memoizedProps;if(i=i.compare,i=i!==null?i:es,i(x,s)&&t.ref===n.ref)return Ha(t,n,c)}return n.flags|=1,t=La(f,s),t.ref=n.ref,t.return=n,n.child=t}function Pg(t,n,i,s,c){if(t!==null){var f=t.memoizedProps;if(es(f,s)&&t.ref===n.ref)if(kt=!1,n.pendingProps=s=f,Tf(t,c))(t.flags&131072)!==0&&(kt=!0);else return n.lanes=t.lanes,Ha(t,n,c)}return gf(t,n,i,s,c)}function Fg(t,n,i,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|i:i,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Yg(t,n,f,i,s)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,f!==null?f.cachePool:null),f!==null?G0(n,f):Xd(),q0(n);else return s=n.lanes=536870912,Yg(t,n,f!==null?f.baseLanes|i:i,i,s)}else f!==null?(Wl(n,f.cachePool),G0(n,f),vi(),n.memoizedState=null):(t!==null&&Wl(n,null),Xd(),vi());return Qt(t,n,c,i),n.child}function ps(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yg(t,n,i,s,c){var f=Bd();return f=f===null?null:{parent:zt._currentValue,pool:f},n.memoizedState={baseLanes:i,cachePool:f},t!==null&&Wl(n,null),Xd(),q0(n),t!==null&&Qr(t,n,s,!0),n.childLanes=c,null}function mc(t,n){return n=gc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xg(t,n,i){return ur(n,t.child,null,i),t=mc(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function aT(t,n,i){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(qe){if(s.mode==="hidden")return t=mc(n,s),n.lanes=536870912,ps(null,t);if(qd(n),(t=ft)?(t=av(t,$n),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ui!==null?{id:ba,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},i=R0(t),i.return=n,n.child=i,It=n,ft=null)):t=null,t===null)throw fi(n);return n.lanes=536870912,null}return mc(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(qd(n),c)if(n.flags&256)n.flags&=-257,n=Xg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(o(558));else if(kt||Qr(t,n,i,!1),c=(i&t.childLanes)!==0,kt||c){if(s=ot,s!==null&&(x=ce(s,i),x!==0&&x!==f.retryLane))throw f.retryLane=x,nr(t,x),pn(s,t,x),pf;jc(),n=Xg(t,n,i)}else t=f.treeContext,ft=Fn(x.nextSibling),It=n,qe=!0,di=null,$n=!1,t!==null&&z0(n,t),n=mc(n,s),n.flags|=4096;return n}return t=La(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function pc(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(o(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function gf(t,n,i,s,c){return or(n),i=Kd(t,n,i,s,void 0,c),s=Qd(),t!==null&&!kt?(Zd(t,n,c),Ha(t,n,c)):(qe&&s&&Dd(n),n.flags|=1,Qt(t,n,i,c),n.child)}function Gg(t,n,i,s,c,f){return or(n),n.updateQueue=null,i=K0(n,s,i,c),I0(t),s=Qd(),t!==null&&!kt?(Zd(t,n,f),Ha(t,n,f)):(qe&&s&&Dd(n),n.flags|=1,Qt(t,n,i,f),n.child)}function qg(t,n,i,s,c){if(or(n),n.stateNode===null){var f=Gr,x=i.contextType;typeof x=="object"&&x!==null&&(f=Kt(x)),f=new i(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},$d(n),x=i.contextType,f.context=typeof x=="object"&&x!==null?Kt(x):Gr,f.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(ff(n,i,x,s),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&hf.enqueueReplaceState(f,f.state,null),us(n,s,f,c),cs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,O=fr(i,T);f.props=O;var Y=f.context,W=i.contextType;x=Gr,typeof W=="object"&&W!==null&&(x=Kt(W));var ee=i.getDerivedStateFromProps;W=typeof ee=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,W||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Y!==x)&&kg(n,f,s,x),mi=!1;var X=n.memoizedState;f.state=X,us(n,s,f,c),cs(),Y=n.memoizedState,T||X!==Y||mi?(typeof ee=="function"&&(ff(n,i,ee,s),Y=n.memoizedState),(O=mi||Og(n,i,O,s,X,Y,x))?(W||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Y),f.props=s,f.state=Y,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pd(t,n),x=n.memoizedProps,W=fr(i,x),f.props=W,ee=n.pendingProps,X=f.context,Y=i.contextType,O=Gr,typeof Y=="object"&&Y!==null&&(O=Kt(Y)),T=i.getDerivedStateFromProps,(Y=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ee||X!==O)&&kg(n,f,s,O),mi=!1,X=n.memoizedState,f.state=X,us(n,s,f,c),cs();var Q=n.memoizedState;x!==ee||X!==Q||mi||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof T=="function"&&(ff(n,i,T,s),Q=n.memoizedState),(W=mi||Og(n,i,W,s,X,Q,O)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(Y||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,Q,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,Q,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=O,s=W):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,pc(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ur(n,t.child,null,c),n.child=ur(n,null,i,c)):Qt(t,n,i,c),n.memoizedState=f.state,t=n.child):t=Ha(t,n,c),t}function Ig(t,n,i,s){return ir(),n.flags|=256,Qt(t,n,i,s),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(t){return{baseLanes:t,cachePool:U0()}}function xf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=An),t}function Kg(t,n,i){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(Rt.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(qe){if(c?yi(n):vi(),(t=ft)?(t=av(t,$n),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ui!==null?{id:ba,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},i=R0(t),i.return=n,n.child=i,It=n,ft=null)):t=null,t===null)throw fi(n);return th(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(vi(),c=n.mode,T=gc({mode:"hidden",children:T},c),s=ar(s,c,i,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=vf(i),s.childLanes=xf(t,x,i),n.memoizedState=yf,ps(null,s)):(yi(n),bf(n,T))}var O=t.memoizedState;if(O!==null&&(T=O.dehydrated,T!==null)){if(f)n.flags&256?(yi(n),n.flags&=-257,n=Sf(t,n,i)):n.memoizedState!==null?(vi(),n.child=t.child,n.flags|=128,n=null):(vi(),T=s.fallback,c=n.mode,s=gc({mode:"visible",children:s.children},c),T=ar(T,c,i,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,ur(n,t.child,null,i),s=n.child,s.memoizedState=vf(i),s.childLanes=xf(t,x,i),n.memoizedState=yf,n=ps(null,s));else if(yi(n),th(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var Y=x.dgst;x=Y,s=Error(o(419)),s.stack="",s.digest=x,as({value:s,source:null,stack:null}),n=Sf(t,n,i)}else if(kt||Qr(t,n,i,!1),x=(i&t.childLanes)!==0,kt||x){if(x=ot,x!==null&&(s=ce(x,i),s!==0&&s!==O.retryLane))throw O.retryLane=s,nr(t,s),pn(x,t,s),pf;eh(T)||jc(),n=Sf(t,n,i)}else eh(T)?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,ft=Fn(T.nextSibling),It=n,qe=!0,di=null,$n=!1,t!==null&&z0(n,t),n=bf(n,s.children),n.flags|=4096);return n}return c?(vi(),T=s.fallback,c=n.mode,O=t.child,Y=O.sibling,s=La(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,Y!==null?T=La(Y,T):(T=ar(T,c,i,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,ps(null,s),s=n.child,T=t.child.memoizedState,T===null?T=vf(i):(c=T.cachePool,c!==null?(O=zt._currentValue,c=c.parent!==O?{parent:O,pool:O}:c):c=U0(),T={baseLanes:T.baseLanes|i,cachePool:c}),s.memoizedState=T,s.childLanes=xf(t,x,i),n.memoizedState=yf,ps(t.child,s)):(yi(n),i=t.child,t=i.sibling,i=La(i,{mode:"visible",children:s.children}),i.return=n,i.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=i,n.memoizedState=null,i)}function bf(t,n){return n=gc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gc(t,n){return t=Tn(22,t,null,n),t.lanes=0,t}function Sf(t,n,i){return ur(n,t.child,null,i),t=bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qg(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nd(t.return,n,i)}function wf(t,n,i,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=i,x.tailMode=c,x.treeForkCount=f)}function Zg(t,n,i){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=Rt.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,te(Rt,x),Qt(t,n,s,i),s=qe?ns:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qg(t,i,n);else if(t.tag===19)Qg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(i=n.child,c=null;i!==null;)t=i.alternate,t!==null&&ic(t)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),wf(n,!1,c,i,f,s);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ic(t)===null){n.child=c;break}t=c.sibling,c.sibling=i,i=c,c=t}wf(n,!0,i,null,f,s);break;case"together":wf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ha(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Si|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Qr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(o(153));if(n.child!==null){for(t=n.child,i=La(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=La(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function Tf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function iT(t,n,i){switch(n.tag){case 3:oe(n,n.stateNode.containerInfo),hi(n,zt,t.memoizedState.cache),ir();break;case 27:case 5:fe(n);break;case 4:oe(n,n.stateNode.containerInfo);break;case 10:hi(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qd(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(yi(n),n.flags|=128,null):(i&n.child.childLanes)!==0?Kg(t,n,i):(yi(n),t=Ha(t,n,i),t!==null?t.sibling:null);yi(n);break;case 19:var c=(t.flags&128)!==0;if(s=(i&n.childLanes)!==0,s||(Qr(t,n,i,!1),s=(i&n.childLanes)!==0),c){if(s)return Zg(t,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),te(Rt,Rt.current),s)break;return null;case 22:return n.lanes=0,Fg(t,n,i,n.pendingProps);case 24:hi(n,zt,t.memoizedState.cache)}return Ha(t,n,i)}function Wg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)kt=!0;else{if(!Tf(t,i)&&(n.flags&128)===0)return kt=!1,iT(t,n,i);kt=(t.flags&131072)!==0}else kt=!1,qe&&(n.flags&1048576)!==0&&D0(n,ns,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=lr(n.elementType),n.type=t,typeof t=="function")Ad(t)?(s=fr(t,s),n.tag=1,n=qg(null,n,t,s,i)):(n.tag=0,n=gf(null,n,t,s,i));else{if(t!=null){var c=t.$$typeof;if(c===G){n.tag=11,n=Hg(null,n,t,s,i);break e}else if(c===$){n.tag=14,n=$g(null,n,t,s,i);break e}}throw n=ve(t)||t,Error(o(306,n,""))}}return n;case 0:return gf(t,n,n.type,n.pendingProps,i);case 1:return s=n.type,c=fr(s,n.pendingProps),qg(t,n,s,c,i);case 3:e:{if(oe(n,n.stateNode.containerInfo),t===null)throw Error(o(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Pd(t,n),us(n,s,null,i);var x=n.memoizedState;if(s=x.cache,hi(n,zt,s),s!==f.cache&&_d(n,[zt],i,!0),cs(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ig(t,n,s,i);break e}else if(s!==c){c=Vn(Error(o(424)),n),as(c),n=Ig(t,n,s,i);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ft=Fn(t.firstChild),It=n,qe=!0,di=null,$n=!0,i=F0(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(ir(),s===c){n=Ha(t,n,i);break e}Qt(t,n,s,i)}n=n.child}return n;case 26:return pc(t,n),t===null?(i=cv(n.type,null,n.pendingProps,null))?n.memoizedState=i:qe||(i=n.type,t=n.pendingProps,s=Oc(Te.current).createElement(i),s[de]=n,s[he]=t,Zt(s,i,t),yt(s),n.stateNode=s):n.memoizedState=cv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return fe(n),t===null&&qe&&(s=n.stateNode=ov(n.type,n.pendingProps,Te.current),It=n,$n=!0,c=ft,Ci(n.type)?(nh=c,ft=Fn(s.firstChild)):ft=c),Qt(t,n,n.pendingProps.children,i),pc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&qe&&((c=s=ft)&&(s=LT(s,n.type,n.pendingProps,$n),s!==null?(n.stateNode=s,It=n,ft=Fn(s.firstChild),$n=!1,c=!0):c=!1),c||fi(n)),fe(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Zf(c,f)?s=null:x!==null&&Zf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Kd(t,n,K5,null,null,i),Ds._currentValue=c),pc(t,n),Qt(t,n,s,i),n.child;case 6:return t===null&&qe&&((t=i=ft)&&(i=NT(i,n.pendingProps,$n),i!==null?(n.stateNode=i,It=n,ft=null,t=!0):t=!1),t||fi(n)),null;case 13:return Kg(t,n,i);case 4:return oe(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ur(n,null,s,i):Qt(t,n,s,i),n.child;case 11:return Hg(t,n,n.type,n.pendingProps,i);case 7:return Qt(t,n,n.pendingProps,i),n.child;case 8:return Qt(t,n,n.pendingProps.children,i),n.child;case 12:return Qt(t,n,n.pendingProps.children,i),n.child;case 10:return s=n.pendingProps,hi(n,n.type,s.value),Qt(t,n,s.children,i),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,or(n),c=Kt(c),s=s(c),n.flags|=1,Qt(t,n,s,i),n.child;case 14:return $g(t,n,n.type,n.pendingProps,i);case 15:return Pg(t,n,n.type,n.pendingProps,i);case 19:return Zg(t,n,i);case 31:return aT(t,n,i);case 22:return Fg(t,n,i,n.pendingProps);case 24:return or(n),s=Kt(zt),t===null?(c=Bd(),c===null&&(c=ot,f=Ud(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=i),c=f),n.memoizedState={parent:s,cache:c},$d(n),hi(n,zt,c)):((t.lanes&i)!==0&&(Pd(t,n),us(n,null,null,i),cs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),hi(n,zt,s)):(s=f.cache,hi(n,zt,s),s!==c.cache&&_d(n,[zt],i,!0))),Qt(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(o(156,n.tag))}function $a(t){t.flags|=4}function Ef(t,n,i,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(jy())t.flags|=8192;else throw cr=ec,Hd}else t.flags&=-16777217}function Jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mv(n))if(jy())t.flags|=8192;else throw cr=ec,Hd}function yc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nl():536870912,t.lanes|=n,lo|=n)}function gs(t,n){if(!qe)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ht(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var c=t.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)i|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function rT(t,n,i){var s=n.pendingProps;switch(zd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(n),null;case 1:return ht(n),null;case 3:return i=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ua(zt),ie(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Kr(n)?$a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kd())),ht(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?($a(n),f!==null?(ht(n),Jg(n,f)):(ht(n),Ef(n,c,null,s,i))):f?f!==t.memoizedState?($a(n),ht(n),Jg(n,f)):(ht(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&$a(n),ht(n),Ef(n,c,t,s,i)),null;case 27:if(ze(n),i=Te.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&$a(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return ht(n),null}t=le.current,Kr(n)?O0(n):(t=ov(c,s,i),n.stateNode=t,$a(n))}return ht(n),null;case 5:if(ze(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&$a(n);else{if(!s){if(n.stateNode===null)throw Error(o(166));return ht(n),null}if(f=le.current,Kr(n))O0(n);else{var x=Oc(Te.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[de]=n,f[he]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Zt(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&$a(n)}}return ht(n),Ef(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&$a(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(o(166));if(t=Te.current,Kr(n)){if(t=n.stateNode,i=n.memoizedProps,s=null,c=It,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[de]=n,t=!!(t.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||Ky(t.nodeValue,i)),t||fi(n,!0)}else t=Oc(t).createTextNode(s),t[de]=n,n.stateNode=t}return ht(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(s=Kr(n),i!==null){if(t===null){if(!s)throw Error(o(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[de]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),t=!1}else i=kd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(o(558))}return ht(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(o(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[de]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),c=!1}else c=kd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=s!==null,t=t!==null&&t.memoizedState!==null,i&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),yc(n,n.updateQueue),ht(n),null);case 4:return ie(),t===null&&Gf(n.stateNode.containerInfo),ht(n),null;case 10:return Ua(n.type),ht(n),null;case 19:if(q(Rt),s=n.memoizedState,s===null)return ht(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)gs(s,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ic(t),f!==null){for(n.flags|=128,gs(s,!1),t=f.updateQueue,n.updateQueue=t,yc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)A0(i,t),i=i.sibling;return te(Rt,Rt.current&1|2),qe&&Na(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&De()>wc&&(n.flags|=128,c=!0,gs(s,!1),n.lanes=4194304)}else{if(!c)if(t=ic(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,yc(n,t),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!qe)return ht(n),null}else 2*De()-s.renderingStartTime>wc&&i!==536870912&&(n.flags|=128,c=!0,gs(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=De(),t.sibling=null,i=Rt.current,te(Rt,c?i&1|2:i&1),qe&&Na(n,s.treeForkCount),t):(ht(n),null);case 22:case 23:return jn(n),Gd(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(i&536870912)!==0&&(n.flags&128)===0&&(ht(n),n.subtreeFlags&6&&(n.flags|=8192)):ht(n),i=n.updateQueue,i!==null&&yc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048),t!==null&&q(sr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Ua(zt),ht(n),null;case 25:return null;case 30:return null}throw Error(o(156,n.tag))}function oT(t,n){switch(zd(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ua(zt),ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ze(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(o(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(o(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return q(Rt),null;case 4:return ie(),null;case 10:return Ua(n.type),null;case 22:case 23:return jn(n),Gd(),t!==null&&q(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ua(zt),null;case 25:return null;default:return null}}function ey(t,n){switch(zd(n),n.tag){case 3:Ua(zt),ie();break;case 26:case 27:case 5:ze(n);break;case 4:ie();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:q(Rt);break;case 10:Ua(n.type);break;case 22:case 23:jn(n),Gd(),t!==null&&q(sr);break;case 24:Ua(zt)}}function ys(t,n){try{var i=n.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var c=s.next;i=c;do{if((i.tag&t)===t){s=void 0;var f=i.create,x=i.inst;s=f(),x.destroy=s}i=i.next}while(i!==c)}}catch(T){tt(n,n.return,T)}}function xi(t,n,i){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var O=i,Y=T;try{Y()}catch(W){tt(c,O,W)}}}s=s.next}while(s!==f)}}catch(W){tt(n,n.return,W)}}function ty(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{X0(n,i)}catch(s){tt(t,t.return,s)}}}function ny(t,n,i){i.props=fr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(s){tt(t,n,s)}}function vs(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof i=="function"?t.refCleanup=i(s):i.current=s}}catch(c){tt(t,n,c)}}function wa(t,n){var i=t.ref,s=t.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(c){tt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){tt(t,n,c)}else i.current=null}function ay(t){var n=t.type,i=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(c){tt(t,t.return,c)}}function jf(t,n,i){try{var s=t.stateNode;RT(s,t.type,i,n),s[he]=n}catch(c){tt(t,t.return,c)}}function iy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ci(t.type)||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ci(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Oa));else if(s!==4&&(s===27&&Ci(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(Af(t,n,i),t=t.sibling;t!==null;)Af(t,n,i),t=t.sibling}function vc(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(s!==4&&(s===27&&Ci(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(vc(t,n,i),t=t.sibling;t!==null;)vc(t,n,i),t=t.sibling}function ry(t){var n=t.stateNode,i=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Zt(n,s,i),n[de]=t,n[he]=i}catch(f){tt(t,t.return,f)}}var Pa=!1,Lt=!1,Rf=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function sT(t,n){if(t=t.containerInfo,Kf=Bc,t=v0(t),bd(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var x=0,T=-1,O=-1,Y=0,W=0,ee=t,X=null;t:for(;;){for(var Q;ee!==i||c!==0&&ee.nodeType!==3||(T=x+c),ee!==f||s!==0&&ee.nodeType!==3||(O=x+s),ee.nodeType===3&&(x+=ee.nodeValue.length),(Q=ee.firstChild)!==null;)X=ee,ee=Q;for(;;){if(ee===t)break t;if(X===i&&++Y===c&&(T=x),X===f&&++W===s&&(O=x),(Q=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=Q}i=T===-1||O===-1?null:{start:T,end:O}}else i=null}i=i||{start:0,end:0}}else i=null;for(Qf={focusedElem:t,selectionRange:i},Bc=!1,Ft=n;Ft!==null;)if(n=Ft,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Ft=t;else for(;Ft!==null;){switch(n=Ft,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)c=t[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,i=n,c=f.memoizedProps,f=f.memoizedState,s=i.stateNode;try{var ge=fr(i.type,c);t=s.getSnapshotBeforeUpdate(ge,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Re){tt(i,i.return,Re)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)Jf(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=n.sibling,t!==null){t.return=n.return,Ft=t;break}Ft=n.return}}function sy(t,n,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Ya(t,i),s&4&&ys(5,i);break;case 1:if(Ya(t,i),s&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(x){tt(i,i.return,x)}else{var c=fr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){tt(i,i.return,x)}}s&64&&ty(i),s&512&&vs(i,i.return);break;case 3:if(Ya(t,i),s&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{X0(t,n)}catch(x){tt(i,i.return,x)}}break;case 27:n===null&&s&4&&ry(i);case 26:case 5:Ya(t,i),n===null&&s&4&&ay(i),s&512&&vs(i,i.return);break;case 12:Ya(t,i);break;case 31:Ya(t,i),s&4&&uy(t,i);break;case 13:Ya(t,i),s&4&&dy(t,i),s&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=gT.bind(null,i),_T(t,i))));break;case 22:if(s=i.memoizedState!==null||Pa,!s){n=n!==null&&n.memoizedState!==null||Lt,c=Pa;var f=Lt;Pa=s,(Lt=n)&&!f?Xa(t,i,(i.subtreeFlags&8772)!==0):Ya(t,i),Pa=c,Lt=f}break;case 30:break;default:Ya(t,i)}}function ly(t){var n=t.alternate;n!==null&&(t.alternate=null,ly(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ra(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,dn=!1;function Fa(t,n,i){for(i=i.child;i!==null;)cy(t,n,i),i=i.sibling}function cy(t,n,i){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(On,i)}catch{}switch(i.tag){case 26:Lt||wa(i,n),Fa(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Lt||wa(i,n);var s=vt,c=dn;Ci(i.type)&&(vt=i.stateNode,dn=!1),Fa(t,n,i),As(i.stateNode),vt=s,dn=c;break;case 5:Lt||wa(i,n);case 6:if(s=vt,c=dn,vt=null,Fa(t,n,i),vt=s,dn=c,vt!==null)if(dn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(i.stateNode)}catch(f){tt(i,n,f)}else try{vt.removeChild(i.stateNode)}catch(f){tt(i,n,f)}break;case 18:vt!==null&&(dn?(t=vt,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),yo(t)):tv(vt,i.stateNode));break;case 4:s=vt,c=dn,vt=i.stateNode.containerInfo,dn=!0,Fa(t,n,i),vt=s,dn=c;break;case 0:case 11:case 14:case 15:xi(2,i,n),Lt||xi(4,i,n),Fa(t,n,i);break;case 1:Lt||(wa(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"&&ny(i,n,s)),Fa(t,n,i);break;case 21:Fa(t,n,i);break;case 22:Lt=(s=Lt)||i.memoizedState!==null,Fa(t,n,i),Lt=s;break;default:Fa(t,n,i)}}function uy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{yo(t)}catch(i){tt(n,n.return,i)}}}function dy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yo(t)}catch(i){tt(n,n.return,i)}}function lT(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new oy),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new oy),n;default:throw Error(o(435,t.tag))}}function xc(t,n){var i=lT(t);n.forEach(function(s){if(!i.has(s)){i.add(s);var c=yT.bind(null,t,s);s.then(c,c)}})}function fn(t,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var c=i[s],f=t,x=n,T=x;e:for(;T!==null;){switch(T.tag){case 27:if(Ci(T.type)){vt=T.stateNode,dn=!1;break e}break;case 5:vt=T.stateNode,dn=!1;break e;case 3:case 4:vt=T.stateNode.containerInfo,dn=!0;break e}T=T.return}if(vt===null)throw Error(o(160));cy(f,x,c),vt=null,dn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)fy(n,t),n=n.sibling}var la=null;function fy(t,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fn(n,t),hn(t),s&4&&(xi(3,t,t.return),ys(3,t),xi(5,t,t.return));break;case 1:fn(n,t),hn(t),s&512&&(Lt||i===null||wa(i,i.return)),s&64&&Pa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?s:i.concat(s))));break;case 26:var c=la;if(fn(n,t),hn(t),s&512&&(Lt||i===null||wa(i,i.return)),s&4){var f=i!==null?i.memoizedState:null;if(s=t.memoizedState,i===null)if(s===null)if(t.stateNode===null){e:{s=t.type,i=t.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qe]||f[de]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Zt(f,s,i),f[de]=t,yt(f),s=f;break e;case"link":var x=fv("link","href",c).get(s+(i.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&f.getAttribute("rel")===(i.rel==null?null:i.rel)&&f.getAttribute("title")===(i.title==null?null:i.title)&&f.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){x.splice(T,1);break t}}f=c.createElement(s),Zt(f,s,i),c.head.appendChild(f);break;case"meta":if(x=fv("meta","content",c).get(s+(i.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(i.content==null?null:""+i.content)&&f.getAttribute("name")===(i.name==null?null:i.name)&&f.getAttribute("property")===(i.property==null?null:i.property)&&f.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&f.getAttribute("charset")===(i.charSet==null?null:i.charSet)){x.splice(T,1);break t}}f=c.createElement(s),Zt(f,s,i),c.head.appendChild(f);break;default:throw Error(o(468,s))}f[de]=t,yt(f),s=f}t.stateNode=s}else hv(c,t.type,t.stateNode);else t.stateNode=dv(c,s,t.memoizedProps);else f!==s?(f===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):f.count--,s===null?hv(c,t.type,t.stateNode):dv(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&jf(t,t.memoizedProps,i.memoizedProps)}break;case 27:fn(n,t),hn(t),s&512&&(Lt||i===null||wa(i,i.return)),i!==null&&s&4&&jf(t,t.memoizedProps,i.memoizedProps);break;case 5:if(fn(n,t),hn(t),s&512&&(Lt||i===null||wa(i,i.return)),t.flags&32){c=t.stateNode;try{Br(c,"")}catch(ge){tt(t,t.return,ge)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,jf(t,c,i!==null?i.memoizedProps:c)),s&1024&&(Rf=!0);break;case 6:if(fn(n,t),hn(t),s&4){if(t.stateNode===null)throw Error(o(162));s=t.memoizedProps,i=t.stateNode;try{i.nodeValue=s}catch(ge){tt(t,t.return,ge)}}break;case 3:if(Nc=null,c=la,la=kc(n.containerInfo),fn(n,t),la=c,hn(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(ge){tt(t,t.return,ge)}Rf&&(Rf=!1,hy(t));break;case 4:s=la,la=kc(t.stateNode.containerInfo),fn(n,t),hn(t),la=s;break;case 12:fn(n,t),hn(t);break;case 31:fn(n,t),hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xc(t,s)));break;case 13:fn(n,t),hn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Sc=De()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xc(t,s)));break;case 22:c=t.memoizedState!==null;var O=i!==null&&i.memoizedState!==null,Y=Pa,W=Lt;if(Pa=Y||c,Lt=W||O,fn(n,t),Lt=W,Pa=Y,hn(t),s&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(i===null||O||Pa||Lt||hr(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){O=i=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=O.stateNode;var ee=O.memoizedProps.style,X=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(ge){tt(O,O.return,ge)}}}else if(n.tag===6){if(i===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(ge){tt(O,O.return,ge)}}}else if(n.tag===18){if(i===null){O=n;try{var Q=O.stateNode;c?nv(Q,!0):nv(O.stateNode,!1)}catch(ge){tt(O,O.return,ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(i=s.retryQueue,i!==null&&(s.retryQueue=null,xc(t,i))));break;case 19:fn(n,t),hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xc(t,s)));break;case 30:break;case 21:break;default:fn(n,t),hn(t)}}function hn(t){var n=t.flags;if(n&2){try{for(var i,s=t.return;s!==null;){if(iy(s)){i=s;break}s=s.return}if(i==null)throw Error(o(160));switch(i.tag){case 27:var c=i.stateNode,f=Cf(t);vc(t,f,c);break;case 5:var x=i.stateNode;i.flags&32&&(Br(x,""),i.flags&=-33);var T=Cf(t);vc(t,T,x);break;case 3:case 4:var O=i.stateNode.containerInfo,Y=Cf(t);Af(t,Y,O);break;default:throw Error(o(161))}}catch(W){tt(t,t.return,W)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function hy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;hy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ya(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sy(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xi(4,n,n.return),hr(n);break;case 1:wa(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&ny(n,n.return,i),hr(n);break;case 27:As(n.stateNode);case 26:case 5:wa(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Xa(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Xa(c,f,i),ys(4,f);break;case 1:if(Xa(c,f,i),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Y){tt(s,s.return,Y)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)Y0(O[c],T)}catch(Y){tt(s,s.return,Y)}}i&&x&64&&ty(f),vs(f,f.return);break;case 27:ry(f);case 26:case 5:Xa(c,f,i),i&&s===null&&x&4&&ay(f),vs(f,f.return);break;case 12:Xa(c,f,i);break;case 31:Xa(c,f,i),i&&x&4&&uy(c,f);break;case 13:Xa(c,f,i),i&&x&4&&dy(c,f);break;case 22:f.memoizedState===null&&Xa(c,f,i),vs(f,f.return);break;case 30:break;default:Xa(c,f,i)}n=n.sibling}}function Mf(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&is(i))}function Df(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&is(t))}function ca(t,n,i,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)my(t,n,i,s),n=n.sibling}function my(t,n,i,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ca(t,n,i,s),c&2048&&ys(9,n);break;case 1:ca(t,n,i,s);break;case 3:ca(t,n,i,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&is(t)));break;case 12:if(c&2048){ca(t,n,i,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){tt(n,n.return,O)}}else ca(t,n,i,s);break;case 31:ca(t,n,i,s);break;case 13:ca(t,n,i,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?ca(t,n,i,s):xs(t,n):f._visibility&2?ca(t,n,i,s):(f._visibility|=2,ro(t,n,i,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Mf(x,n);break;case 24:ca(t,n,i,s),c&2048&&Df(n.alternate,n);break;default:ca(t,n,i,s)}}function ro(t,n,i,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=i,O=s,Y=x.flags;switch(x.tag){case 0:case 11:case 15:ro(f,x,T,O,c),ys(8,x);break;case 23:break;case 22:var W=x.stateNode;x.memoizedState!==null?W._visibility&2?ro(f,x,T,O,c):xs(f,x):(W._visibility|=2,ro(f,x,T,O,c)),c&&Y&2048&&Mf(x.alternate,x);break;case 24:ro(f,x,T,O,c),c&&Y&2048&&Df(x.alternate,x);break;default:ro(f,x,T,O,c)}n=n.sibling}}function xs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,s=n,c=s.flags;switch(s.tag){case 22:xs(i,s),c&2048&&Mf(s.alternate,s);break;case 24:xs(i,s),c&2048&&Df(s.alternate,s);break;default:xs(i,s)}n=n.sibling}}var bs=8192;function oo(t,n,i){if(t.subtreeFlags&bs)for(t=t.child;t!==null;)py(t,n,i),t=t.sibling}function py(t,n,i){switch(t.tag){case 26:oo(t,n,i),t.flags&bs&&t.memoizedState!==null&&IT(i,la,t.memoizedState,t.memoizedProps);break;case 5:oo(t,n,i);break;case 3:case 4:var s=la;la=kc(t.stateNode.containerInfo),oo(t,n,i),la=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=bs,bs=16777216,oo(t,n,i),bs=s):oo(t,n,i));break;default:oo(t,n,i)}}function gy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ss(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Ft=s,vy(s,t)}gy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yy(t),t=t.sibling}function yy(t){switch(t.tag){case 0:case 11:case 15:Ss(t),t.flags&2048&&xi(9,t,t.return);break;case 3:Ss(t);break;case 12:Ss(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bc(t)):Ss(t);break;default:Ss(t)}}function bc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];Ft=s,vy(s,t)}gy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xi(8,n,n.return),bc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,bc(n));break;default:bc(n)}t=t.sibling}}function vy(t,n){for(;Ft!==null;){var i=Ft;switch(i.tag){case 0:case 11:case 15:xi(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:is(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Ft=s;else e:for(i=t;Ft!==null;){s=Ft;var c=s.sibling,f=s.return;if(ly(s),s===i){Ft=null;break e}if(c!==null){c.return=f,Ft=c;break e}Ft=f}}}var cT={getCacheForType:function(t){var n=Kt(zt),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Kt(zt).controller.signal}},uT=typeof WeakMap=="function"?WeakMap:Map,Ze=0,ot=null,Fe=null,Xe=0,et=0,Cn=null,bi=!1,so=!1,zf=!1,Ga=0,St=0,Si=0,mr=0,Of=0,An=0,lo=0,ws=null,mn=null,kf=!1,Sc=0,xy=0,wc=1/0,Tc=null,wi=null,Bt=0,Ti=null,co=null,qa=0,Lf=0,Nf=null,by=null,Ts=0,_f=null;function Rn(){return(Ze&2)!==0&&Xe!==0?Xe&-Xe:z.T!==null?Pf():xe()}function Sy(){if(An===0)if((Xe&536870912)===0||qe){var t=_r;_r<<=1,(_r&3932160)===0&&(_r=262144),An=t}else An=536870912;return t=En.current,t!==null&&(t.flags|=32),An}function pn(t,n,i){(t===ot&&(et===2||et===9)||t.cancelPendingCommit!==null)&&(uo(t,0),Ei(t,Xe,An,!1)),L(t,i),((Ze&2)===0||t!==ot)&&(t===ot&&((Ze&2)===0&&(mr|=i),St===4&&Ei(t,Xe,An,!1)),Ta(t))}function wy(t,n,i){if((Ze&6)!==0)throw Error(o(327));var s=!i&&(n&127)===0&&(n&t.expiredLanes)===0||ga(t,n),c=s?hT(t,n):Vf(t,n,!0),f=s;do{if(c===0){so&&!s&&Ei(t,n,0,!1);break}else{if(i=t.current.alternate,f&&!dT(i)){c=Vf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var T=t;c=ws;var O=T.current.memoizedState.isDehydrated;if(O&&(uo(T,x).flags|=256),x=Vf(T,x,!1),x!==2){if(zf&&!O){T.errorRecoveryDisabledLanes|=f,mr|=f,c=4;break e}f=mn,mn=c,f!==null&&(mn===null?mn=f:mn.push.apply(mn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){uo(t,0),Ei(t,n,0,!0);break}e:{switch(s=t,f=c,f){case 0:case 1:throw Error(o(345));case 4:if((n&4194048)!==n)break;case 6:Ei(s,n,An,!bi);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((n&62914560)===n&&(c=Sc+300-De(),10<c)){if(Ei(s,n,An,!bi),Qi(s,0,!0)!==0)break e;qa=n,s.timeoutHandle=Jy(Ty.bind(null,s,i,mn,Tc,kf,n,An,mr,lo,bi,f,"Throttled",-0,0),c);break e}Ty(s,i,mn,Tc,kf,n,An,mr,lo,bi,f,null,-0,0)}}break}while(!0);Ta(t)}function Ty(t,n,i,s,c,f,x,T,O,Y,W,ee,X,Q){if(t.timeoutHandle=-1,ee=n.subtreeFlags,ee&8192||(ee&16785408)===16785408){ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oa},py(n,f,ee);var ge=(f&62914560)===f?Sc-De():(f&4194048)===f?xy-De():0;if(ge=KT(ee,ge),ge!==null){qa=f,t.cancelPendingCommit=ge(zy.bind(null,t,n,f,i,s,c,x,T,O,W,ee,null,X,Q)),Ei(t,f,x,!Y);return}}zy(t,n,f,i,s,c,x,T,O)}function dT(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var c=i[s],f=c.getSnapshot;c=c.value;try{if(!wn(f(),c))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ei(t,n,i,s){n&=~Of,n&=~mr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-rn(c),x=1<<f;s[f]=-1,c&=~x}i!==0&&K(t,i,n)}function Ec(){return(Ze&6)===0?(Es(0),!1):!0}function Uf(){if(Fe!==null){if(et===0)var t=Fe.return;else t=Fe,_a=rr=null,Wd(t),eo=null,os=0,t=Fe;for(;t!==null;)ey(t.alternate,t),t=t.return;Fe=null}}function uo(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,zT(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),qa=0,Uf(),ot=t,Fe=i=La(t.current,null),Xe=n,et=0,Cn=null,bi=!1,so=ga(t,n),zf=!1,lo=An=Of=mr=Si=St=0,mn=ws=null,kf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-rn(s),f=1<<c;n|=t[c],s&=~f}return Ga=n,Xl(),i}function Ey(t,n){_e=null,z.H=ms,n===Jr||n===Jl?(n=H0(),et=3):n===Hd?(n=H0(),et=4):et=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Cn=n,Fe===null&&(St=1,hc(t,Vn(n,t.current)))}function jy(){var t=En.current;return t===null?!0:(Xe&4194048)===Xe?Pn===null:(Xe&62914560)===Xe||(Xe&536870912)!==0?t===Pn:!1}function Cy(){var t=z.H;return z.H=ms,t===null?ms:t}function Ay(){var t=z.A;return z.A=cT,t}function jc(){St=4,bi||(Xe&4194048)!==Xe&&En.current!==null||(so=!0),(Si&134217727)===0&&(mr&134217727)===0||ot===null||Ei(ot,Xe,An,!1)}function Vf(t,n,i){var s=Ze;Ze|=2;var c=Cy(),f=Ay();(ot!==t||Xe!==n)&&(Tc=null,uo(t,n)),n=!1;var x=St;e:do try{if(et!==0&&Fe!==null){var T=Fe,O=Cn;switch(et){case 8:Uf(),x=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var Y=et;if(et=0,Cn=null,fo(t,T,O,Y),i&&so){x=0;break e}break;default:Y=et,et=0,Cn=null,fo(t,T,O,Y)}}fT(),x=St;break}catch(W){Ey(t,W)}while(!0);return n&&t.shellSuspendCounter++,_a=rr=null,Ze=s,z.H=c,z.A=f,Fe===null&&(ot=null,Xe=0,Xl()),x}function fT(){for(;Fe!==null;)Ry(Fe)}function hT(t,n){var i=Ze;Ze|=2;var s=Cy(),c=Ay();ot!==t||Xe!==n?(Tc=null,wc=De()+500,uo(t,n)):so=ga(t,n);e:do try{if(et!==0&&Fe!==null){n=Fe;var f=Cn;t:switch(et){case 1:et=0,Cn=null,fo(t,n,f,1);break;case 2:case 9:if(V0(f)){et=0,Cn=null,My(n);break}n=function(){et!==2&&et!==9||ot!==t||(et=7),Ta(t)},f.then(n,n);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:V0(f)?(et=0,Cn=null,My(n)):(et=0,Cn=null,fo(t,n,f,7));break;case 5:var x=null;switch(Fe.tag){case 26:x=Fe.memoizedState;case 5:case 27:var T=Fe;if(x?mv(x):T.stateNode.complete){et=0,Cn=null;var O=T.sibling;if(O!==null)Fe=O;else{var Y=T.return;Y!==null?(Fe=Y,Cc(Y)):Fe=null}break t}}et=0,Cn=null,fo(t,n,f,5);break;case 6:et=0,Cn=null,fo(t,n,f,6);break;case 8:Uf(),St=6;break e;default:throw Error(o(462))}}mT();break}catch(W){Ey(t,W)}while(!0);return _a=rr=null,z.H=s,z.A=c,Ze=i,Fe!==null?0:(ot=null,Xe=0,Xl(),St)}function mT(){for(;Fe!==null&&!aa();)Ry(Fe)}function Ry(t){var n=Wg(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,n===null?Cc(t):Fe=n}function My(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=Gg(i,n,n.pendingProps,n.type,void 0,Xe);break;case 11:n=Gg(i,n,n.pendingProps,n.type.render,n.ref,Xe);break;case 5:Wd(n);default:ey(i,n),n=Fe=A0(n,Ga),n=Wg(i,n,Ga)}t.memoizedProps=t.pendingProps,n===null?Cc(t):Fe=n}function fo(t,n,i,s){_a=rr=null,Wd(n),eo=null,os=0;var c=n.return;try{if(nT(t,c,n,i,Xe)){St=1,hc(t,Vn(i,t.current)),Fe=null;return}}catch(f){if(c!==null)throw Fe=c,f;St=1,hc(t,Vn(i,t.current)),Fe=null;return}n.flags&32768?(qe||s===1?t=!0:so||(Xe&536870912)!==0?t=!1:(bi=t=!0,(s===2||s===9||s===3||s===6)&&(s=En.current,s!==null&&s.tag===13&&(s.flags|=16384))),Dy(n,t)):Cc(n)}function Cc(t){var n=t;do{if((n.flags&32768)!==0){Dy(n,bi);return}t=n.return;var i=rT(n.alternate,n,Ga);if(i!==null){Fe=i;return}if(n=n.sibling,n!==null){Fe=n;return}Fe=n=t}while(n!==null);St===0&&(St=5)}function Dy(t,n){do{var i=oT(t.alternate,t);if(i!==null){i.flags&=32767,Fe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){Fe=t;return}Fe=t=i}while(t!==null);St=6,Fe=null}function zy(t,n,i,s,c,f,x,T,O){t.cancelPendingCommit=null;do Ac();while(Bt!==0);if((Ze&6)!==0)throw Error(o(327));if(n!==null){if(n===t.current)throw Error(o(177));if(f=n.lanes|n.childLanes,f|=jd,B(t,i,f,x,T,O),t===ot&&(Fe=ot=null,Xe=0),co=n,Ti=t,qa=i,Lf=f,Nf=c,by=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vT(pa,function(){return _y(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=U.p,U.p=2,x=Ze,Ze|=4;try{sT(t,n,i)}finally{Ze=x,U.p=c,z.T=s}}Bt=1,Oy(),ky(),Ly()}}function Oy(){if(Bt===1){Bt=0;var t=Ti,n=co,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=z.T,z.T=null;var s=U.p;U.p=2;var c=Ze;Ze|=4;try{fy(n,t);var f=Qf,x=v0(t.containerInfo),T=f.focusedElem,O=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&y0(T.ownerDocument.documentElement,T)){if(O!==null&&bd(T)){var Y=O.start,W=O.end;if(W===void 0&&(W=Y),"selectionStart"in T)T.selectionStart=Y,T.selectionEnd=Math.min(W,T.value.length);else{var ee=T.ownerDocument||document,X=ee&&ee.defaultView||window;if(X.getSelection){var Q=X.getSelection(),ge=T.textContent.length,Re=Math.min(O.start,ge),rt=O.end===void 0?Re:Math.min(O.end,ge);!Q.extend&&Re>rt&&(x=rt,rt=Re,Re=x);var V=g0(T,Re),_=g0(T,rt);if(V&&_&&(Q.rangeCount!==1||Q.anchorNode!==V.node||Q.anchorOffset!==V.offset||Q.focusNode!==_.node||Q.focusOffset!==_.offset)){var F=ee.createRange();F.setStart(V.node,V.offset),Q.removeAllRanges(),Re>rt?(Q.addRange(F),Q.extend(_.node,_.offset)):(F.setEnd(_.node,_.offset),Q.addRange(F))}}}}for(ee=[],Q=T;Q=Q.parentNode;)Q.nodeType===1&&ee.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var J=ee[T];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Bc=!!Kf,Qf=Kf=null}finally{Ze=c,U.p=s,z.T=i}}t.current=n,Bt=2}}function ky(){if(Bt===2){Bt=0;var t=Ti,n=co,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=z.T,z.T=null;var s=U.p;U.p=2;var c=Ze;Ze|=4;try{sy(t,n.alternate,n)}finally{Ze=c,U.p=s,z.T=i}}Bt=3}}function Ly(){if(Bt===4||Bt===3){Bt=0,ma();var t=Ti,n=co,i=qa,s=by;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Bt=5:(Bt=0,co=Ti=null,Ny(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(wi=null),we(i),n=n.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(On,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=U.p,U.p=2,z.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{z.T=n,U.p=c}}(qa&3)!==0&&Ac(),Ta(t),c=t.pendingLanes,(i&261930)!==0&&(c&42)!==0?t===_f?Ts++:(Ts=0,_f=t):Ts=0,Es(0)}}function Ny(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,is(n)))}function Ac(){return Oy(),ky(),Ly(),_y()}function _y(){if(Bt!==5)return!1;var t=Ti,n=Lf;Lf=0;var i=we(qa),s=z.T,c=U.p;try{U.p=32>i?32:i,z.T=null,i=Nf,Nf=null;var f=Ti,x=qa;if(Bt=0,co=Ti=null,qa=0,(Ze&6)!==0)throw Error(o(331));var T=Ze;if(Ze|=4,yy(f.current),my(f,f.current,x,i),Ze=T,Es(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(On,f)}catch{}return!0}finally{U.p=c,z.T=s,Ny(t,n)}}function Uy(t,n,i){n=Vn(i,n),n=mf(t.stateNode,n,2),t=gi(t,n,2),t!==null&&(L(t,2),Ta(t))}function tt(t,n,i){if(t.tag===3)Uy(t,t,i);else for(;n!==null;){if(n.tag===3){Uy(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wi===null||!wi.has(s))){t=Vn(i,t),i=Vg(2),s=gi(n,i,2),s!==null&&(Bg(i,s,n,t),L(s,2),Ta(s));break}}n=n.return}}function Bf(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new uT;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(i)||(zf=!0,c.add(i),t=pT.bind(null,t,n,i),n.then(t,t))}function pT(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,ot===t&&(Xe&i)===i&&(St===4||St===3&&(Xe&62914560)===Xe&&300>De()-Sc?(Ze&2)===0&&uo(t,0):Of|=i,lo===Xe&&(lo=0)),Ta(t)}function Vy(t,n){n===0&&(n=Nl()),t=nr(t,n),t!==null&&(L(t,n),Ta(t))}function gT(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Vy(t,i)}function yT(t,n){var i=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(i=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(o(314))}s!==null&&s.delete(n),Vy(t,i)}function vT(t,n){return an(t,n)}var Rc=null,ho=null,Hf=!1,Mc=!1,$f=!1,ji=0;function Ta(t){t!==ho&&t.next===null&&(ho===null?Rc=ho=t:ho=ho.next=t),Mc=!0,Hf||(Hf=!0,bT())}function Es(t,n){if(!$f&&Mc){$f=!0;do for(var i=!1,s=Rc;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-rn(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(i=!0,Py(s,f))}else f=Xe,f=Qi(s,s===ot?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ga(s,f)||(i=!0,Py(s,f));s=s.next}while(i);$f=!1}}function xT(){By()}function By(){Mc=Hf=!1;var t=0;ji!==0&&DT()&&(t=ji);for(var n=De(),i=null,s=Rc;s!==null;){var c=s.next,f=Hy(s,n);f===0?(s.next=null,i===null?Rc=c:i.next=c,c===null&&(ho=i)):(i=s,(t!==0||(f&3)!==0)&&(Mc=!0)),s=c}Bt!==0&&Bt!==5||Es(t),ji!==0&&(ji=0)}function Hy(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-rn(f),T=1<<x,O=c[x];O===-1?((T&i)===0||(T&s)!==0)&&(c[x]=Ur(T,n)):O<=n&&(t.expiredLanes|=T),f&=~T}if(n=ot,i=Xe,i=Qi(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,i===0||t===n&&(et===2||et===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Sn(s),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||ga(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(s!==null&&Sn(s),we(i)){case 2:case 8:i=gt;break;case 32:i=pa;break;case 268435456:i=si;break;default:i=pa}return s=$y.bind(null,t),i=an(i,s),t.callbackPriority=n,t.callbackNode=i,n}return s!==null&&s!==null&&Sn(s),t.callbackPriority=2,t.callbackNode=null,2}function $y(t,n){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Ac()&&t.callbackNode!==i)return null;var s=Xe;return s=Qi(t,t===ot?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(wy(t,s,n),Hy(t,De()),t.callbackNode!=null&&t.callbackNode===i?$y.bind(null,t):null)}function Py(t,n){if(Ac())return null;wy(t,n,!0)}function bT(){OT(function(){(Ze&6)!==0?an(Ht,xT):By()})}function Pf(){if(ji===0){var t=Zr;t===0&&(t=li,li<<=1,(li&261888)===0&&(li=256)),ji=t}return ji}function Fy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(""+t)}function Yy(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function ST(t,n,i,s,c){if(n==="submit"&&i&&i.stateNode===c){var f=Fy((c[he]||null).action),x=s.submitter;x&&(n=(n=x[he]||null)?Fy(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new $l("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ji!==0){var O=x?Yy(c,x):new FormData(c);lf(i,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=x?Yy(c,x):new FormData(c),lf(i,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var Ff=0;Ff<Ed.length;Ff++){var Yf=Ed[Ff],wT=Yf.toLowerCase(),TT=Yf[0].toUpperCase()+Yf.slice(1);sa(wT,"on"+TT)}sa(S0,"onAnimationEnd"),sa(w0,"onAnimationIteration"),sa(T0,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(B5,"onTransitionRun"),sa(H5,"onTransitionStart"),sa($5,"onTransitionCancel"),sa(E0,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ET=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js));function Xy(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],O=T.instance,Y=T.currentTarget;if(T=T.listener,O!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Y;try{f(c)}catch(W){Yl(W)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(T=s[x],O=T.instance,Y=T.currentTarget,T=T.listener,O!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=Y;try{f(c)}catch(W){Yl(W)}c.currentTarget=null,f=O}}}}function Ye(t,n){var i=n[nt];i===void 0&&(i=n[nt]=new Set);var s=t+"__bubble";i.has(s)||(Gy(n,t,2,!1),i.add(s))}function Xf(t,n,i){var s=0;n&&(s|=4),Gy(i,t,s,n)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[Dc]){t[Dc]=!0,va.forEach(function(i){i!=="selectionchange"&&(ET.has(i)||Xf(i,!1,t),Xf(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dc]||(n[Dc]=!0,Xf("selectionchange",!1,n))}}function Gy(t,n,i,s){switch(Sv(n)){case 2:var c=WT;break;case 8:c=JT;break;default:c=sh}i=c.bind(null,n,i,t),c=void 0,!dd||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,i,{capture:!0,passive:c}):t.addEventListener(n,i,!0):c!==void 0?t.addEventListener(n,i,{passive:c}):t.addEventListener(n,i,!1)}function qf(t,n,i,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=kn(T),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue e}T=T.parentNode}}s=s.return}Zp(function(){var Y=f,W=cd(i),ee=[];e:{var X=j0.get(t);if(X!==void 0){var Q=$l,ge=t;switch(t){case"keypress":if(Bl(i)===0)break e;case"keydown":case"keyup":Q=y5;break;case"focusin":ge="focus",Q=pd;break;case"focusout":ge="blur",Q=pd;break;case"beforeblur":case"afterblur":Q=pd;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=e0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=r5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=b5;break;case S0:case w0:case T0:Q=l5;break;case E0:Q=w5;break;case"scroll":case"scrollend":Q=a5;break;case"wheel":Q=E5;break;case"copy":case"cut":case"paste":Q=u5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=n0;break;case"toggle":case"beforetoggle":Q=C5}var Re=(n&4)!==0,rt=!Re&&(t==="scroll"||t==="scrollend"),V=Re?X!==null?X+"Capture":null:X;Re=[];for(var _=Y,F;_!==null;){var J=_;if(F=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||F===null||V===null||(J=qo(_,V),J!=null&&Re.push(Cs(_,J,F))),rt)break;_=_.return}0<Re.length&&(X=new Q(X,ge,null,i,W),ee.push({event:X,listeners:Re}))}}if((n&7)===0){e:{if(X=t==="mouseover"||t==="pointerover",Q=t==="mouseout"||t==="pointerout",X&&i!==ld&&(ge=i.relatedTarget||i.fromElement)&&(kn(ge)||ge[Be]))break e;if((Q||X)&&(X=W.window===W?W:(X=W.ownerDocument)?X.defaultView||X.parentWindow:window,Q?(ge=i.relatedTarget||i.toElement,Q=Y,ge=ge?kn(ge):null,ge!==null&&(rt=d(ge),Re=ge.tag,ge!==rt||Re!==5&&Re!==27&&Re!==6)&&(ge=null)):(Q=null,ge=Y),Q!==ge)){if(Re=e0,J="onMouseLeave",V="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(Re=n0,J="onPointerLeave",V="onPointerEnter",_="pointer"),rt=Q==null?X:Jt(Q),F=ge==null?X:Jt(ge),X=new Re(J,_+"leave",Q,i,W),X.target=rt,X.relatedTarget=F,J=null,kn(W)===Y&&(Re=new Re(V,_+"enter",ge,i,W),Re.target=F,Re.relatedTarget=rt,J=Re),rt=J,Q&&ge)t:{for(Re=jT,V=Q,_=ge,F=0,J=V;J;J=Re(J))F++;J=0;for(var Ce=_;Ce;Ce=Re(Ce))J++;for(;0<F-J;)V=Re(V),F--;for(;0<J-F;)_=Re(_),J--;for(;F--;){if(V===_||_!==null&&V===_.alternate){Re=V;break t}V=Re(V),_=Re(_)}Re=null}else Re=null;Q!==null&&qy(ee,X,Q,Re,!1),ge!==null&&rt!==null&&qy(ee,rt,ge,Re,!0)}}e:{if(X=Y?Jt(Y):window,Q=X.nodeName&&X.nodeName.toLowerCase(),Q==="select"||Q==="input"&&X.type==="file")var Ie=u0;else if(l0(X))if(d0)Ie=_5;else{Ie=L5;var be=k5}else Q=X.nodeName,!Q||Q.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Y&&sd(Y.elementType)&&(Ie=u0):Ie=N5;if(Ie&&(Ie=Ie(t,Y))){c0(ee,Ie,i,W);break e}be&&be(t,X,Y),t==="focusout"&&Y&&X.type==="number"&&Y.memoizedProps.value!=null&&od(X,"number",X.value)}switch(be=Y?Jt(Y):window,t){case"focusin":(l0(be)||be.contentEditable==="true")&&(Fr=be,Sd=Y,ts=null);break;case"focusout":ts=Sd=Fr=null;break;case"mousedown":wd=!0;break;case"contextmenu":case"mouseup":case"dragend":wd=!1,x0(ee,i,W);break;case"selectionchange":if(V5)break;case"keydown":case"keyup":x0(ee,i,W)}var Ve;if(yd)e:{switch(t){case"compositionstart":var Ge="onCompositionStart";break e;case"compositionend":Ge="onCompositionEnd";break e;case"compositionupdate":Ge="onCompositionUpdate";break e}Ge=void 0}else Pr?o0(t,i)&&(Ge="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Ge="onCompositionStart");Ge&&(a0&&i.locale!=="ko"&&(Pr||Ge!=="onCompositionStart"?Ge==="onCompositionEnd"&&Pr&&(Ve=Wp()):(ci=W,fd="value"in ci?ci.value:ci.textContent,Pr=!0)),be=zc(Y,Ge),0<be.length&&(Ge=new t0(Ge,t,null,i,W),ee.push({event:Ge,listeners:be}),Ve?Ge.data=Ve:(Ve=s0(i),Ve!==null&&(Ge.data=Ve)))),(Ve=R5?M5(t,i):D5(t,i))&&(Ge=zc(Y,"onBeforeInput"),0<Ge.length&&(be=new t0("onBeforeInput","beforeinput",null,i,W),ee.push({event:be,listeners:Ge}),be.data=Ve)),ST(ee,t,Y,i,W)}Xy(ee,n)})}function Cs(t,n,i){return{instance:t,listener:n,currentTarget:i}}function zc(t,n){for(var i=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=qo(t,i),c!=null&&s.unshift(Cs(t,c,f)),c=qo(t,n),c!=null&&s.push(Cs(t,c,f))),t.tag===3)return s;t=t.return}return[]}function jT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qy(t,n,i,s,c){for(var f=n._reactName,x=[];i!==null&&i!==s;){var T=i,O=T.alternate,Y=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||Y===null||(O=Y,c?(Y=qo(i,f),Y!=null&&x.unshift(Cs(i,Y,O))):c||(Y=qo(i,f),Y!=null&&x.push(Cs(i,Y,O)))),i=i.return}x.length!==0&&t.push({event:n,listeners:x})}var CT=/\r\n?/g,AT=/\u0000|\uFFFD/g;function Iy(t){return(typeof t=="string"?t:""+t).replace(CT,`
`).replace(AT,"")}function Ky(t,n){return n=Iy(n),Iy(t)===n}function it(t,n,i,s,c,f){switch(i){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Br(t,""+s);break;case"className":Wi(t,"class",s);break;case"tabIndex":Wi(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Wi(t,i,s);break;case"style":Kp(t,s,f);break;case"data":if(n!=="object"){Wi(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Ul(""+s),t.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(i==="formAction"?(n!=="input"&&it(t,n,"name",c.name,c,null),it(t,n,"formEncType",c.formEncType,c,null),it(t,n,"formMethod",c.formMethod,c,null),it(t,n,"formTarget",c.formTarget,c,null)):(it(t,n,"encType",c.encType,c,null),it(t,n,"method",c.method,c,null),it(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(i);break}s=Ul(""+s),t.setAttribute(i,s);break;case"onClick":s!=null&&(t.onclick=Oa);break;case"onScroll":s!=null&&Ye("scroll",t);break;case"onScrollEnd":s!=null&&Ye("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}i=Ul(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""+s):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":s===!0?t.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(i,s):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(i,s):t.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(i):t.setAttribute(i,s);break;case"popover":Ye("beforetoggle",t),Ye("toggle",t),za(t,"popover",s);break;case"xlinkActuate":oa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":oa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":oa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":oa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":oa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":oa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":oa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":oa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":oa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":za(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=t5.get(i)||i,za(t,i,s))}}function If(t,n,i,s,c,f){switch(i){case"style":Kp(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(o(61));if(i=s.__html,i!=null){if(c.children!=null)throw Error(o(60));t.innerHTML=i}}break;case"children":typeof s=="string"?Br(t,s):(typeof s=="number"||typeof s=="bigint")&&Br(t,""+s);break;case"onScroll":s!=null&&Ye("scroll",t);break;case"onScrollEnd":s!=null&&Ye("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zi.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),n=i.slice(2,c?i.length-7:void 0),f=t[he]||null,f=f!=null?f[i]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,s,c);break e}i in t?t[i]=s:s===!0?t.setAttribute(i,""):za(t,i,s)}}}function Zt(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",t),Ye("load",t);var s=!1,c=!1,f;for(f in i)if(i.hasOwnProperty(f)){var x=i[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:it(t,n,f,x,i,null)}}c&&it(t,n,"srcSet",i.srcSet,i,null),s&&it(t,n,"src",i.src,i,null);return;case"input":Ye("invalid",t);var T=f=x=c=null,O=null,Y=null;for(s in i)if(i.hasOwnProperty(s)){var W=i[s];if(W!=null)switch(s){case"name":c=W;break;case"type":x=W;break;case"checked":O=W;break;case"defaultChecked":Y=W;break;case"value":f=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(o(137,n));break;default:it(t,n,s,W,i,null)}}Xp(t,f,T,O,Y,x,c,!1);return;case"select":Ye("invalid",t),s=x=f=null;for(c in i)if(i.hasOwnProperty(c)&&(T=i[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:it(t,n,c,T,i,null)}n=f,i=x,t.multiple=!!s,n!=null?Vr(t,!!s,n,!1):i!=null&&Vr(t,!!s,i,!0);return;case"textarea":Ye("invalid",t),f=c=s=null;for(x in i)if(i.hasOwnProperty(x)&&(T=i[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(91));break;default:it(t,n,x,T,i,null)}qp(t,s,c,f);return;case"option":for(O in i)if(i.hasOwnProperty(O)&&(s=i[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:it(t,n,O,s,i,null)}return;case"dialog":Ye("beforetoggle",t),Ye("toggle",t),Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":Ye("load",t);break;case"video":case"audio":for(s=0;s<js.length;s++)Ye(js[s],t);break;case"image":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"embed":case"source":case"link":Ye("error",t),Ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(s=i[Y],s!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,n));default:it(t,n,Y,s,i,null)}return;default:if(sd(n)){for(W in i)i.hasOwnProperty(W)&&(s=i[W],s!==void 0&&If(t,n,W,s,i,void 0));return}}for(T in i)i.hasOwnProperty(T)&&(s=i[T],s!=null&&it(t,n,T,s,i,null))}function RT(t,n,i,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,O=null,Y=null,W=null;for(Q in i){var ee=i[Q];if(i.hasOwnProperty(Q)&&ee!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":O=ee;default:s.hasOwnProperty(Q)||it(t,n,Q,null,s,ee)}}for(var X in s){var Q=s[X];if(ee=i[X],s.hasOwnProperty(X)&&(Q!=null||ee!=null))switch(X){case"type":f=Q;break;case"name":c=Q;break;case"checked":Y=Q;break;case"defaultChecked":W=Q;break;case"value":x=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,n));break;default:Q!==ee&&it(t,n,X,Q,s,ee)}}rd(t,x,T,O,Y,W,f,c);return;case"select":Q=x=T=X=null;for(f in i)if(O=i[f],i.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":Q=O;default:s.hasOwnProperty(f)||it(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=i[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":X=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==O&&it(t,n,c,f,s,O)}n=T,i=x,s=Q,X!=null?Vr(t,!!i,X,!1):!!s!=!!i&&(n!=null?Vr(t,!!i,n,!0):Vr(t,!!i,i?[]:"",!1));return;case"textarea":Q=X=null;for(T in i)if(c=i[T],i.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:it(t,n,T,null,s,c)}for(x in s)if(c=s[x],f=i[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":X=c;break;case"defaultValue":Q=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==f&&it(t,n,x,c,s,f)}Gp(t,X,Q);return;case"option":for(var ge in i)if(X=i[ge],i.hasOwnProperty(ge)&&X!=null&&!s.hasOwnProperty(ge))switch(ge){case"selected":t.selected=!1;break;default:it(t,n,ge,null,s,X)}for(O in s)if(X=s[O],Q=i[O],s.hasOwnProperty(O)&&X!==Q&&(X!=null||Q!=null))switch(O){case"selected":t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:it(t,n,O,X,s,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in i)X=i[Re],i.hasOwnProperty(Re)&&X!=null&&!s.hasOwnProperty(Re)&&it(t,n,Re,null,s,X);for(Y in s)if(X=s[Y],Q=i[Y],s.hasOwnProperty(Y)&&X!==Q&&(X!=null||Q!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(o(137,n));break;default:it(t,n,Y,X,s,Q)}return;default:if(sd(n)){for(var rt in i)X=i[rt],i.hasOwnProperty(rt)&&X!==void 0&&!s.hasOwnProperty(rt)&&If(t,n,rt,void 0,s,X);for(W in s)X=s[W],Q=i[W],!s.hasOwnProperty(W)||X===Q||X===void 0&&Q===void 0||If(t,n,W,X,s,Q);return}}for(var V in i)X=i[V],i.hasOwnProperty(V)&&X!=null&&!s.hasOwnProperty(V)&&it(t,n,V,null,s,X);for(ee in s)X=s[ee],Q=i[ee],!s.hasOwnProperty(ee)||X===Q||X==null&&Q==null||it(t,n,ee,X,s,Q)}function Qy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var c=i[s],f=c.transferSize,x=c.initiatorType,T=c.duration;if(f&&T&&Qy(x)){for(x=0,T=c.responseEnd,s+=1;s<i.length;s++){var O=i[s],Y=O.startTime;if(Y>T)break;var W=O.transferSize,ee=O.initiatorType;W&&Qy(ee)&&(O=O.responseEnd,x+=W*(O<T?1:(T-Y)/(O-Y)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function Zy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function DT(){var t=window.event;return t&&t.type==="popstate"?t===Wf?!1:(Wf=t,!0):(Wf=null,!1)}var Jy=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,OT=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(kT)}:Jy;function kT(t){setTimeout(function(){throw t})}function Ci(t){return t==="head"}function tv(t,n){var i=n,s=0;do{var c=i.nextSibling;if(t.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(s===0){t.removeChild(c),yo(n);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")As(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,As(i);for(var f=i.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[Qe]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||i.removeChild(f),f=x}}else i==="body"&&As(t.ownerDocument.body);i=c}while(i);yo(n)}function nv(t,n){var i=t;t=0;do{var s=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=s}while(i)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Jf(i),ra(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function LT(t,n,i,s){for(;t.nodeType===1;){var c=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function NT(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Fn(t.nextSibling),t===null))return null;return t}function av(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Fn(t.nextSibling),t===null))return null;return t}function eh(t){return t.data==="$?"||t.data==="$~"}function th(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _T(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var s=function(){n(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Fn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var nh=null;function iv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return Fn(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function rv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function ov(t,n,i){switch(n=Oc(i),t){case"html":if(t=n.documentElement,!t)throw Error(o(452));return t;case"head":if(t=n.head,!t)throw Error(o(453));return t;case"body":if(t=n.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function As(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ra(t)}var Yn=new Map,sv=new Set;function kc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ia=U.d;U.d={f:UT,r:VT,D:BT,C:HT,L:$T,m:PT,X:YT,S:FT,M:XT};function UT(){var t=Ia.f(),n=Ec();return t||n}function VT(t){var n=on(t);n!==null&&n.tag===5&&n.type==="form"?Eg(n):Ia.r(t)}var mo=typeof document>"u"?null:document;function lv(t,n,i){var s=mo;if(s&&typeof n=="string"&&n){var c=_n(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),sv.has(c)||(sv.add(c),t={rel:t,crossOrigin:i,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Zt(n,"link",t),yt(n),s.head.appendChild(n)))}}function BT(t){Ia.D(t),lv("dns-prefetch",t,null)}function HT(t,n){Ia.C(t,n),lv("preconnect",t,n)}function $T(t,n,i){Ia.L(t,n,i);var s=mo;if(s&&t&&n){var c='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+_n(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+_n(i.imageSizes)+'"]')):c+='[href="'+_n(t)+'"]';var f=c;switch(n){case"style":f=po(t);break;case"script":f=go(t)}Yn.has(f)||(t=v({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Yn.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Rs(f))||n==="script"&&s.querySelector(Ms(f))||(n=s.createElement("link"),Zt(n,"link",t),yt(n),s.head.appendChild(n)))}}function PT(t,n){Ia.m(t,n);var i=mo;if(i&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_n(s)+'"][href="'+_n(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=go(t)}if(!Yn.has(f)&&(t=v({rel:"modulepreload",href:t},n),Yn.set(f,t),i.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ms(f)))return}s=i.createElement("link"),Zt(s,"link",t),yt(s),i.head.appendChild(s)}}}function FT(t,n,i){Ia.S(t,n,i);var s=mo;if(s&&t){var c=ya(s).hoistableStyles,f=po(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(Rs(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Yn.get(f))&&ah(t,i);var O=x=s.createElement("link");yt(O),Zt(O,"link",t),O._p=new Promise(function(Y,W){O.onload=Y,O.onerror=W}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Lc(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function YT(t,n){Ia.X(t,n);var i=mo;if(i&&t){var s=ya(i).hoistableScripts,c=go(t),f=s.get(c);f||(f=i.querySelector(Ms(c)),f||(t=v({src:t,async:!0},n),(n=Yn.get(c))&&ih(t,n),f=i.createElement("script"),yt(f),Zt(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function XT(t,n){Ia.M(t,n);var i=mo;if(i&&t){var s=ya(i).hoistableScripts,c=go(t),f=s.get(c);f||(f=i.querySelector(Ms(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=Yn.get(c))&&ih(t,n),f=i.createElement("script"),yt(f),Zt(f,"link",t),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function cv(t,n,i,s){var c=(c=Te.current)?kc(c):null;if(!c)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=po(i.href),i=ya(c).hoistableStyles,s=i.get(n),s||(s={type:"style",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=po(i.href);var f=ya(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(Rs(t)))&&!f._p&&(x.instance=f,x.state.loading=5),Yn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Yn.set(t,i),f||GT(c,t,i,x.state))),n&&s===null)throw Error(o(528,""));return x}if(n&&s!==null)throw Error(o(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=go(i),i=ya(c).hoistableScripts,s=i.get(n),s||(s={type:"script",instance:null,count:0,state:null},i.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function po(t){return'href="'+_n(t)+'"'}function Rs(t){return'link[rel="stylesheet"]['+t+"]"}function uv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function GT(t,n,i,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Zt(n,"link",i),yt(n),t.head.appendChild(n))}function go(t){return'[src="'+_n(t)+'"]'}function Ms(t){return"script[async]"+t}function dv(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+_n(i.href)+'"]');if(s)return n.instance=s,yt(s),s;var c=v({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),yt(s),Zt(s,"style",c),Lc(s,i.precedence,t),n.instance=s;case"stylesheet":c=po(i.href);var f=t.querySelector(Rs(c));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;s=uv(i),(c=Yn.get(c))&&ah(s,c),f=(t.ownerDocument||t).createElement("link"),yt(f);var x=f;return x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),Zt(f,"link",s),n.state.loading|=4,Lc(f,i.precedence,t),n.instance=f;case"script":return f=go(i.src),(c=t.querySelector(Ms(f)))?(n.instance=c,yt(c),c):(s=i,(c=Yn.get(f))&&(s=v({},i),ih(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),yt(c),Zt(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(o(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Lc(s,i.precedence,t));return n.instance}function Lc(t,n,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ih(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nc=null;function fv(t,n,i){if(Nc===null){var s=new Map,c=Nc=new Map;c.set(i,s)}else c=Nc,s=c.get(i),s||(s=new Map,c.set(i,s));if(s.has(t))return s;for(s.set(t,null),i=i.getElementsByTagName(t),c=0;c<i.length;c++){var f=i[c];if(!(f[Qe]||f[de]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function hv(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function qT(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function IT(t,n,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=po(s.href),f=n.querySelector(Rs(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_c.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=f,yt(f);return}f=n.ownerDocument||n,s=uv(s),(c=Yn.get(c))&&ah(s,c),f=f.createElement("link"),yt(f);var x=f;x._p=new Promise(function(T,O){x.onload=T,x.onerror=O}),Zt(f,"link",s),i.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=_c.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var rh=0;function KT(t,n){return t.stylesheets&&t.count===0&&Vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var s=setTimeout(function(){if(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&rh===0&&(rh=62500*MT());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>rh?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uc=null;function Vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,n.forEach(QT,t),Uc=null,_c.call(t))}function QT(t,n){if(!(n.state.loading&4)){var i=Uc.get(t);if(i)var s=i.get(null);else{i=new Map,Uc.set(t,i);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(i.set(x.dataset.precedence,x),s=x)}s&&i.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=i.get(x)||s,f===s&&i.set(null,c),i.set(x,c),this.count++,s=_c.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ds={$$typeof:N,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function ZT(t,n,i,s,c,f,x,T,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.hiddenUpdates=Go(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function pv(t,n,i,s,c,f,x,T,O,Y,W,ee){return t=new ZT(t,n,i,x,O,Y,W,ee,T),n=1,f===!0&&(n|=24),f=Tn(3,null,null,n),t.current=f,f.stateNode=t,n=Ud(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:i,cache:n},$d(f),t}function gv(t){return t?(t=Gr,t):Gr}function yv(t,n,i,s,c,f){c=gv(c),s.context===null?s.context=c:s.pendingContext=c,s=pi(n),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=gi(t,s,n),i!==null&&(pn(i,t,n),ls(i,t,n))}function vv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function oh(t,n){vv(t,n),(t=t.alternate)&&vv(t,n)}function xv(t){if(t.tag===13||t.tag===31){var n=nr(t,67108864);n!==null&&pn(n,t,67108864),oh(t,67108864)}}function bv(t){if(t.tag===13||t.tag===31){var n=Rn();n=Se(n);var i=nr(t,n);i!==null&&pn(i,t,n),oh(t,n)}}var Bc=!0;function WT(t,n,i,s){var c=z.T;z.T=null;var f=U.p;try{U.p=2,sh(t,n,i,s)}finally{U.p=f,z.T=c}}function JT(t,n,i,s){var c=z.T;z.T=null;var f=U.p;try{U.p=8,sh(t,n,i,s)}finally{U.p=f,z.T=c}}function sh(t,n,i,s){if(Bc){var c=lh(s);if(c===null)qf(t,n,s,Hc,i),wv(t,s);else if(tE(c,t,n,i,s))s.stopPropagation();else if(wv(t,s),n&4&&-1<eE.indexOf(t)){for(;c!==null;){var f=on(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ma(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var O=1<<31-rn(x);T.entanglements[1]|=O,x&=~O}Ta(f),(Ze&6)===0&&(wc=De()+500,Es(0))}}break;case 31:case 13:T=nr(f,2),T!==null&&pn(T,f,2),Ec(),oh(f,2)}if(f=lh(s),f===null&&qf(t,n,s,Hc,i),f===c)break;c=f}c!==null&&s.stopPropagation()}else qf(t,n,s,null,i)}}function lh(t){return t=cd(t),ch(t)}var Hc=null;function ch(t){if(Hc=null,t=kn(t),t!==null){var n=d(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=u(n),t!==null)return t;t=null}else if(i===31){if(t=m(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hc=t,null}function Sv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case Ht:return 2;case gt:return 8;case pa:case Yo:return 32;case si:return 268435456;default:return 32}default:return 32}}var uh=!1,Ai=null,Ri=null,Mi=null,zs=new Map,Os=new Map,Di=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(t,n){switch(t){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Ri=null;break;case"mouseover":case"mouseout":Mi=null;break;case"pointerover":case"pointerout":zs.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(n.pointerId)}}function ks(t,n,i,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=on(n),n!==null&&xv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function tE(t,n,i,s,c){switch(n){case"focusin":return Ai=ks(Ai,t,n,i,s,c),!0;case"dragenter":return Ri=ks(Ri,t,n,i,s,c),!0;case"mouseover":return Mi=ks(Mi,t,n,i,s,c),!0;case"pointerover":var f=c.pointerId;return zs.set(f,ks(zs.get(f)||null,t,n,i,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Os.set(f,ks(Os.get(f)||null,t,n,i,s,c)),!0}return!1}function Tv(t){var n=kn(t.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=u(i),n!==null){t.blockedOn=n,Ee(t.priority,function(){bv(i)});return}}else if(n===31){if(n=m(i),n!==null){t.blockedOn=n,Ee(t.priority,function(){bv(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=lh(t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);ld=s,i.target.dispatchEvent(s),ld=null}else return n=on(i),n!==null&&xv(n),t.blockedOn=i,!1;n.shift()}return!0}function Ev(t,n,i){$c(t)&&i.delete(n)}function nE(){uh=!1,Ai!==null&&$c(Ai)&&(Ai=null),Ri!==null&&$c(Ri)&&(Ri=null),Mi!==null&&$c(Mi)&&(Mi=null),zs.forEach(Ev),Os.forEach(Ev)}function Pc(t,n){t.blockedOn===n&&(t.blockedOn=null,uh||(uh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nE)))}var Fc=null;function jv(t){Fc!==t&&(Fc=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Fc===t&&(Fc=null);for(var n=0;n<t.length;n+=3){var i=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(ch(s||i)===null)continue;break}var f=on(i);f!==null&&(t.splice(n,3),n-=3,lf(f,{pending:!0,data:c,method:i.method,action:s},s,c))}}))}function yo(t){function n(O){return Pc(O,t)}Ai!==null&&Pc(Ai,t),Ri!==null&&Pc(Ri,t),Mi!==null&&Pc(Mi,t),zs.forEach(n),Os.forEach(n);for(var i=0;i<Di.length;i++){var s=Di[i];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Di.length&&(i=Di[0],i.blockedOn===null);)Tv(i),i.blockedOn===null&&Di.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var c=i[s],f=i[s+1],x=c[he]||null;if(typeof f=="function")x||jv(i);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[he]||null)T=x.formAction;else if(ch(c)!==null)continue}else T=x.action;typeof T=="function"?i[s+1]=T:(i.splice(s,3),s-=3),jv(i)}}}function Cv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function dh(t){this._internalRoot=t}Yc.prototype.render=dh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(o(409));var i=n.current,s=Rn();yv(i,s,t,n,null,null)},Yc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yv(t.current,2,null,t,null,null),Ec(),n[Be]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=xe();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Di.length&&n!==0&&n<Di[i].priority;i++);Di.splice(i,0,t),i===0&&Tv(t)}};var Av=a.version;if(Av!=="19.2.0")throw Error(o(527,Av,"19.2.0"));U.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=p(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var aE={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{On=Xc.inject(aE),$t=Xc}catch{}}return Ns.createRoot=function(t,n){if(!l(t))throw Error(o(299));var i=!1,s="",c=Lg,f=Ng,x=_g;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=pv(t,1,!1,null,null,i,s,null,c,f,x,Cv),t[Be]=n.current,Gf(t),new dh(n)},Ns.hydrateRoot=function(t,n,i){if(!l(t))throw Error(o(299));var s=!1,c="",f=Lg,x=Ng,T=_g,O=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(x=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.formState!==void 0&&(O=i.formState)),n=pv(t,1,!0,n,i??null,s,c,O,f,x,T,Cv),n.context=gv(null),i=n.current,s=Rn(),s=Se(s),c=pi(s),c.callback=null,gi(i,c,s),i=s,n.current.lanes=i,L(n,i),Ta(n),t[Be]=n.current,Gf(t),new Yc(n)},Ns.version="19.2.0",Ns}var Uv;function hE(){if(Uv)return mh.exports;Uv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),mh.exports=fE(),mh.exports}var mE=hE();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Eb=e=>{throw TypeError(e)},pE=(e,a,r)=>a.has(e)||Eb("Cannot "+r),vh=(e,a,r)=>(pE(e,a,"read from private field"),r?r.call(e):a.get(e)),gE=(e,a,r)=>a.has(e)?Eb("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,r),Vv="popstate";function yE(e={}){function a(o,l){let{pathname:d,search:u,hash:m}=o.location;return ol("",{pathname:d,search:u,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:Yi(l)}return xE(a,r,null,e)}function Pe(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function Vt(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function vE(){return Math.random().toString(36).substring(2,10)}function Bv(e,a){return{usr:e.state,key:e.key,idx:a}}function ol(e,a,r=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?Gi(a):a,state:r,key:a&&a.key||o||vE()}}function Yi({pathname:e="/",search:a="",hash:r=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(e){let a={};if(e){let r=e.indexOf("#");r>=0&&(a.hash=e.substring(r),e=e.substring(0,r));let o=e.indexOf("?");o>=0&&(a.search=e.substring(o),e=e.substring(0,o)),e&&(a.pathname=e)}return a}function xE(e,a,r,o={}){let{window:l=document.defaultView,v5Compat:d=!1}=o,u=l.history,m="POP",g=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function v(){m="POP";let R=y(),E=R==null?null:R-p;p=R,g&&g({action:m,location:M.location,delta:E})}function b(R,E){m="PUSH";let D=ol(M.location,R,E);p=y()+1;let N=Bv(D,p),G=M.createHref(D);try{u.pushState(N,"",G)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(G)}d&&g&&g({action:m,location:M.location,delta:1})}function S(R,E){m="REPLACE";let D=ol(M.location,R,E);p=y();let N=Bv(D,p),G=M.createHref(D);u.replaceState(N,"",G),d&&g&&g({action:m,location:M.location,delta:0})}function j(R){return jb(R)}let M={get action(){return m},get location(){return e(l,u)},listen(R){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(Vv,v),g=R,()=>{l.removeEventListener(Vv,v),g=null}},createHref(R){return a(l,R)},createURL:j,encodeLocation(R){let E=j(R);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:b,replace:S,go(R){return u.go(R)}};return M}function jb(e,a=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Yi(e);return o=o.replace(/ $/,"%20"),!a&&o.startsWith("//")&&(o=r+o),new URL(o,r)}var Is,Hv=class{constructor(e){if(gE(this,Is,new Map),e)for(let[a,r]of e)this.set(a,r)}get(e){if(vh(this,Is).has(e))return vh(this,Is).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,a){vh(this,Is).set(e,a)}};Is=new WeakMap;var bE=new Set(["lazy","caseSensitive","path","id","index","children"]);function SE(e){return bE.has(e)}var wE=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function TE(e){return wE.has(e)}function EE(e){return e.index===!0}function sl(e,a,r=[],o={},l=!1){return e.map((d,u)=>{let m=[...r,String(u)],g=typeof d.id=="string"?d.id:m.join("-");if(Pe(d.index!==!0||!d.children,"Cannot specify children on an index route"),Pe(l||!o[g],`Found a route id collision on id "${g}".  Route id's must be globally unique within Data Router usages`),EE(d)){let p={...d,...a(d),id:g};return o[g]=p,p}else{let p={...d,...a(d),id:g,children:void 0};return o[g]=p,d.children&&(p.children=sl(d.children,a,m,o,l)),p}})}function Hi(e,a,r="/"){return cu(e,a,r,!1)}function cu(e,a,r,o){let l=typeof a=="string"?Gi(a):a,d=ta(l.pathname||"/",r);if(d==null)return null;let u=Cb(e);CE(u);let m=null;for(let g=0;m==null&&g<u.length;++g){let p=UE(d);m=NE(u[g],p,o)}return m}function jE(e,a){let{route:r,pathname:o,params:l}=e;return{id:r.id,pathname:o,params:l,data:a[r.id],loaderData:a[r.id],handle:r.handle}}function Cb(e,a=[],r=[],o="",l=!1){let d=(u,m,g=l,p)=>{let y={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:m,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(o)&&g)return;Pe(y.relativePath.startsWith(o),`Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(o.length)}let v=Ca([o,y.relativePath]),b=r.concat(y);u.children&&u.children.length>0&&(Pe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Cb(u.children,a,b,v,g)),!(u.path==null&&!u.index)&&a.push({path:v,score:kE(v,u.index),routesMeta:b})};return e.forEach((u,m)=>{if(u.path===""||!u.path?.includes("?"))d(u,m);else for(let g of Ab(u.path))d(u,m,!0,g)}),a}function Ab(e){let a=e.split("/");if(a.length===0)return[];let[r,...o]=a,l=r.endsWith("?"),d=r.replace(/\?$/,"");if(o.length===0)return l?[d,""]:[d];let u=Ab(o.join("/")),m=[];return m.push(...u.map(g=>g===""?d:[d,g].join("/"))),l&&m.push(...u),m.map(g=>e.startsWith("/")&&g===""?"/":g)}function CE(e){e.sort((a,r)=>a.score!==r.score?r.score-a.score:LE(a.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var AE=/^:[\w-]+$/,RE=3,ME=2,DE=1,zE=10,OE=-2,$v=e=>e==="*";function kE(e,a){let r=e.split("/"),o=r.length;return r.some($v)&&(o+=OE),a&&(o+=ME),r.filter(l=>!$v(l)).reduce((l,d)=>l+(AE.test(d)?RE:d===""?DE:zE),o)}function LE(e,a){return e.length===a.length&&e.slice(0,-1).every((o,l)=>o===a[l])?e[e.length-1]-a[a.length-1]:0}function NE(e,a,r=!1){let{routesMeta:o}=e,l={},d="/",u=[];for(let m=0;m<o.length;++m){let g=o[m],p=m===o.length-1,y=d==="/"?a:a.slice(d.length)||"/",v=Eu({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},y),b=g.route;if(!v&&p&&r&&!o[o.length-1].route.index&&(v=Eu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!v)return null;Object.assign(l,v.params),u.push({params:l,pathname:Ca([d,v.pathname]),pathnameBase:$E(Ca([d,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(d=Ca([d,v.pathnameBase]))}return u}function Eu(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=_E(e.path,e.caseSensitive,e.end),l=a.match(r);if(!l)return null;let d=l[0],u=d.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:o.reduce((p,{paramName:y,isOptional:v},b)=>{if(y==="*"){let j=m[b]||"";u=d.slice(0,d.length-j.length).replace(/(.)\/+$/,"$1")}const S=m[b];return v&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:u,pattern:e}}function _E(e,a=!1,r=!0){Vt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,m,g)=>(o.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,a?void 0:"i"),o]}function UE(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Vt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function ta(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let r=a.endsWith("/")?a.length-1:a.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function VE({basename:e,pathname:a}){return a==="/"?e:Ca([e,a])}function BE(e,a="/"){let{pathname:r,search:o="",hash:l=""}=typeof e=="string"?Gi(e):e;return{pathname:r?r.startsWith("/")?r:HE(r,a):a,search:PE(o),hash:FE(l)}}function HE(e,a){let r=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function xh(e,a,r,o){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rb(e){return e.filter((a,r)=>r===0||a.route.path&&a.route.path.length>0)}function Hm(e){let a=Rb(e);return a.map((r,o)=>o===a.length-1?r.pathname:r.pathnameBase)}function $m(e,a,r,o=!1){let l;typeof e=="string"?l=Gi(e):(l={...e},Pe(!l.pathname||!l.pathname.includes("?"),xh("?","pathname","search",l)),Pe(!l.pathname||!l.pathname.includes("#"),xh("#","pathname","hash",l)),Pe(!l.search||!l.search.includes("#"),xh("#","search","hash",l)));let d=e===""||l.pathname==="",u=d?"/":l.pathname,m;if(u==null)m=r;else{let v=a.length-1;if(!o&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),v-=1;l.pathname=b.join("/")}m=v>=0?a[v]:"/"}let g=BE(l,m),p=u&&u!=="/"&&u.endsWith("/"),y=(d||u===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(p||y)&&(g.pathname+="/"),g}var Ca=e=>e.join("/").replace(/\/\/+/g,"/"),$E=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),PE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,FE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ju=class{constructor(e,a,r,o=!1){this.status=e,this.statusText=a||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function ll(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Mb=["POST","PUT","PATCH","DELETE"],YE=new Set(Mb),XE=["GET",...Mb],GE=new Set(XE),qE=new Set([301,302,303,307,308]),IE=new Set([307,308]),bh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},KE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_s={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},QE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pm=e=>QE.test(e),ZE=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Db="remix-router-transitions",zb=Symbol("ResetLoaderData");function WE(e){const a=e.window?e.window:typeof window<"u"?window:void 0,r=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";Pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o=e.hydrationRouteProperties||[],l=e.mapRouteProperties||ZE,d={},u=sl(e.routes,l,void 0,d),m,g=e.basename||"/";g.startsWith("/")||(g=`/${g}`);let p=e.dataStrategy||aj,y={...e.future},v=null,b=new Set,S=null,j=null,M=null,R=e.hydrationData!=null,E=Hi(u,e.history.location,g),D=!1,N=null,G;if(E==null&&!e.patchRoutesOnNavigation){let L=Zn(404,{pathname:e.history.location.pathname}),{matches:B,route:K}=Gc(u);G=!0,E=B,N={[K.id]:L}}else if(E&&!e.hydrationData&&ga(E,u,e.history.location.pathname).active&&(E=null),E)if(E.some(L=>L.route.lazy))G=!1;else if(!E.some(L=>Fm(L.route)))G=!0;else{let L=e.hydrationData?e.hydrationData.loaderData:null,B=e.hydrationData?e.hydrationData.errors:null;if(B){let K=E.findIndex(re=>B[re.route.id]!==void 0);G=E.slice(0,K+1).every(re=>!Wh(re.route,L,B))}else G=E.every(K=>!Wh(K.route,L,B))}else{G=!1,E=[];let L=ga(null,u,e.history.location.pathname);L.active&&L.matches&&(D=!0,E=L.matches)}let H,A={historyAction:e.history.action,location:e.history.location,matches:E,initialized:G,navigation:bh,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||N,fetchers:new Map,blockers:new Map},$="POP",P=!1,Z,ne=!1,me=new Map,Le=null,ye=!1,ve=!1,Ue=new Set,z=new Map,U=0,I=-1,se=new Map,ue=new Set,k=new Map,q=new Map,te=new Set,le=new Map,pe,Te=null;function ae(){if(v=e.history.listen(({action:L,location:B,delta:K})=>{if(pe){pe(),pe=void 0;return}Vt(le.size===0||K!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let re=Ll({currentLocation:A.location,nextLocation:B,historyAction:L});if(re&&K!=null){let ce=new Promise(Se=>{pe=Se});e.history.go(K*-1),Nr(re,{state:"blocked",location:B,proceed(){Nr(re,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),ce.then(()=>e.history.go(K))},reset(){let Se=new Map(A.blockers);Se.set(re,_s),fe({blockers:Se})}});return}return Me(L,B)}),r){vj(a,me);let L=()=>xj(a,me);a.addEventListener("pagehide",L),Le=()=>a.removeEventListener("pagehide",L)}return A.initialized||Me("POP",A.location,{initialHydration:!0}),H}function oe(){v&&v(),Le&&Le(),b.clear(),Z&&Z.abort(),A.fetchers.forEach((L,B)=>si(B)),A.blockers.forEach((L,B)=>kl(B))}function ie(L){return b.add(L),()=>b.delete(L)}function fe(L,B={}){L.matches&&(L.matches=L.matches.map(ce=>{let Se=d[ce.route.id],we=ce.route;return we.element!==Se.element||we.errorElement!==Se.errorElement||we.hydrateFallbackElement!==Se.hydrateFallbackElement?{...ce,route:Se}:ce})),A={...A,...L};let K=[],re=[];A.fetchers.forEach((ce,Se)=>{ce.state==="idle"&&(te.has(Se)?K.push(Se):re.push(Se))}),te.forEach(ce=>{!A.fetchers.has(ce)&&!z.has(ce)&&K.push(ce)}),[...b].forEach(ce=>ce(A,{deletedFetchers:K,viewTransitionOpts:B.viewTransitionOpts,flushSync:B.flushSync===!0})),K.forEach(ce=>si(ce)),re.forEach(ce=>A.fetchers.delete(ce))}function ze(L,B,{flushSync:K}={}){let re=A.actionData!=null&&A.navigation.formMethod!=null&&gn(A.navigation.formMethod)&&A.navigation.state==="loading"&&L.state?._isRedirect!==!0,ce;B.actionData?Object.keys(B.actionData).length>0?ce=B.actionData:ce=null:re?ce=A.actionData:ce=null;let Se=B.loaderData?Zv(A.loaderData,B.loaderData,B.matches||[],B.errors):A.loaderData,we=A.blockers;we.size>0&&(we=new Map(we),we.forEach((de,he)=>we.set(he,_s)));let xe=ye?!1:Qi(L,B.matches||A.matches),Ee=P===!0||A.navigation.formMethod!=null&&gn(A.navigation.formMethod)&&L.state?._isRedirect!==!0;m&&(u=m,m=void 0),ye||$==="POP"||($==="PUSH"?e.history.push(L,L.state):$==="REPLACE"&&e.history.replace(L,L.state));let je;if($==="POP"){let de=me.get(A.location.pathname);de&&de.has(L.pathname)?je={currentLocation:A.location,nextLocation:L}:me.has(L.pathname)&&(je={currentLocation:L,nextLocation:A.location})}else if(ne){let de=me.get(A.location.pathname);de?de.add(L.pathname):(de=new Set([L.pathname]),me.set(A.location.pathname,de)),je={currentLocation:A.location,nextLocation:L}}fe({...B,actionData:ce,loaderData:Se,historyAction:$,location:L,initialized:!0,navigation:bh,revalidation:"idle",restoreScrollPosition:xe,preventScrollReset:Ee,blockers:we},{viewTransitionOpts:je,flushSync:K===!0}),$="POP",P=!1,ne=!1,ye=!1,ve=!1,Te?.resolve(),Te=null}async function Ae(L,B){if(typeof L=="number"){e.history.go(L);return}let K=Zh(A.location,A.matches,g,L,B?.fromRouteId,B?.relative),{path:re,submission:ce,error:Se}=Pv(!1,K,B),we=A.location,xe=ol(A.location,re,B&&B.state);xe={...xe,...e.history.encodeLocation(xe)};let Ee=B&&B.replace!=null?B.replace:void 0,je="PUSH";Ee===!0?je="REPLACE":Ee===!1||ce!=null&&gn(ce.formMethod)&&ce.formAction===A.location.pathname+A.location.search&&(je="REPLACE");let de=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,he=(B&&B.flushSync)===!0,Be=Ll({currentLocation:we,nextLocation:xe,historyAction:je});if(Be){Nr(Be,{state:"blocked",location:xe,proceed(){Nr(Be,{state:"proceeding",proceed:void 0,reset:void 0,location:xe}),Ae(L,B)},reset(){let nt=new Map(A.blockers);nt.set(Be,_s),fe({blockers:nt})}});return}await Me(je,xe,{submission:ce,pendingError:Se,preventScrollReset:de,replace:B&&B.replace,enableViewTransition:B&&B.viewTransition,flushSync:he})}function Oe(){Te||(Te=bj()),dt(),fe({revalidation:"loading"});let L=Te.promise;return A.navigation.state==="submitting"?L:A.navigation.state==="idle"?(Me(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),L):(Me($||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:ne===!0}),L)}async function Me(L,B,K){Z&&Z.abort(),Z=null,$=L,ye=(K&&K.startUninterruptedRevalidation)===!0,Ma(A.location,A.matches),P=(K&&K.preventScrollReset)===!0,ne=(K&&K.enableViewTransition)===!0;let re=m||u,ce=K&&K.overrideNavigation,Se=K?.initialHydration&&A.matches&&A.matches.length>0&&!D?A.matches:Hi(re,B,g),we=(K&&K.flushSync)===!0;if(Se&&A.initialized&&!ve&&dj(A.location,B)&&!(K&&K.submission&&gn(K.submission.formMethod))){ze(B,{matches:Se},{flushSync:we});return}let xe=ga(Se,re,B.pathname);if(xe.active&&xe.matches&&(Se=xe.matches),!Se){let{error:qt,notFoundMatches:lt,route:Qe}=li(B.pathname);ze(B,{matches:lt,loaderData:{},errors:{[Qe.id]:qt}},{flushSync:we});return}Z=new AbortController;let Ee=Eo(e.history,B,Z.signal,K&&K.submission),je=e.getContext?await e.getContext():new Hv,de;if(K&&K.pendingError)de=[$i(Se).route.id,{type:"error",error:K.pendingError}];else if(K&&K.submission&&gn(K.submission.formMethod)){let qt=await ut(Ee,B,K.submission,Se,je,xe.active,K&&K.initialHydration===!0,{replace:K.replace,flushSync:we});if(qt.shortCircuited)return;if(qt.pendingActionResult){let[lt,Qe]=qt.pendingActionResult;if(Dn(Qe)&&ll(Qe.error)&&Qe.error.status===404){Z=null,ze(B,{matches:qt.matches,loaderData:{},errors:{[lt]:Qe.error}});return}}Se=qt.matches||Se,de=qt.pendingActionResult,ce=Sh(B,K.submission),we=!1,xe.active=!1,Ee=Eo(e.history,Ee.url,Ee.signal)}let{shortCircuited:he,matches:Be,loaderData:nt,errors:Dt}=await Et(Ee,B,Se,je,xe.active,ce,K&&K.submission,K&&K.fetcherSubmission,K&&K.replace,K&&K.initialHydration===!0,we,de);he||(Z=null,ze(B,{matches:Be||Se,...Wv(de),loaderData:nt,errors:Dt}))}async function ut(L,B,K,re,ce,Se,we,xe={}){dt();let Ee=gj(B,K);if(fe({navigation:Ee},{flushSync:xe.flushSync===!0}),Se){let he=await Ur(re,B.pathname,L.signal);if(he.type==="aborted")return{shortCircuited:!0};if(he.type==="error"){if(he.partialMatches.length===0){let{matches:nt,route:Dt}=Gc(u);return{matches:nt,pendingActionResult:[Dt.id,{type:"error",error:he.error}]}}let Be=$i(he.partialMatches).route.id;return{matches:he.partialMatches,pendingActionResult:[Be,{type:"error",error:he.error}]}}else if(he.matches)re=he.matches;else{let{notFoundMatches:Be,error:nt,route:Dt}=li(B.pathname);return{matches:Be,pendingActionResult:[Dt.id,{type:"error",error:nt}]}}}let je,de=uu(re,B);if(!de.route.action&&!de.route.lazy)je={type:"error",error:Zn(405,{method:L.method,pathname:B.pathname,routeId:de.route.id})};else{let he=zo(l,d,L,re,de,we?[]:o,ce),Be=await ma(L,he,ce,null);if(je=Be[de.route.id],!je){for(let nt of re)if(Be[nt.route.id]){je=Be[nt.route.id];break}}if(L.signal.aborted)return{shortCircuited:!0}}if(Tr(je)){let he;return xe&&xe.replace!=null?he=xe.replace:he=Iv(je.response.headers.get("Location"),new URL(L.url),g)===A.location.pathname+A.location.search,await aa(L,je,!0,{submission:K,replace:he}),{shortCircuited:!0}}if(Dn(je)){let he=$i(re,de.route.id);return(xe&&xe.replace)!==!0&&($="PUSH"),{matches:re,pendingActionResult:[he.route.id,je,de.route.id]}}return{matches:re,pendingActionResult:[de.route.id,je]}}async function Et(L,B,K,re,ce,Se,we,xe,Ee,je,de,he){let Be=Se||Sh(B,we),nt=we||xe||e1(Be),Dt=!ye&&!je;if(ce){if(Dt){let Pt=nn(he);fe({navigation:Be,...Pt!==void 0?{actionData:Pt}:{}},{flushSync:de})}let He=await Ur(K,B.pathname,L.signal);if(He.type==="aborted")return{shortCircuited:!0};if(He.type==="error"){if(He.partialMatches.length===0){let{matches:Da,route:xa}=Gc(u);return{matches:Da,loaderData:{},errors:{[xa.id]:He.error}}}let Pt=$i(He.partialMatches).route.id;return{matches:He.partialMatches,loaderData:{},errors:{[Pt]:He.error}}}else if(He.matches)K=He.matches;else{let{error:Pt,notFoundMatches:Da,route:xa}=li(B.pathname);return{matches:Da,loaderData:{},errors:{[xa.id]:Pt}}}}let qt=m||u,{dsMatches:lt,revalidatingFetchers:Qe}=Fv(L,re,l,d,e.history,A,K,nt,B,je?[]:o,je===!0,ve,Ue,te,k,ue,qt,g,e.patchRoutesOnNavigation!=null,he);if(I=++U,!e.dataStrategy&&!lt.some(He=>He.shouldLoad)&&!lt.some(He=>He.route.middleware&&He.route.middleware.length>0)&&Qe.length===0){let He=$t();return ze(B,{matches:K,loaderData:{},errors:he&&Dn(he[1])?{[he[0]]:he[1].error}:null,...Wv(he),...He?{fetchers:new Map(A.fetchers)}:{}},{flushSync:de}),{shortCircuited:!0}}if(Dt){let He={};if(!ce){He.navigation=Be;let Pt=nn(he);Pt!==void 0&&(He.actionData=Pt)}Qe.length>0&&(He.fetchers=jt(Qe)),fe(He,{flushSync:de})}Qe.forEach(He=>{Gt(He.key),He.controller&&z.set(He.key,He.controller)});let ra=()=>Qe.forEach(He=>Gt(He.key));Z&&Z.signal.addEventListener("abort",ra);let{loaderResults:kn,fetcherResults:on}=await De(lt,Qe,L,re);if(L.signal.aborted)return{shortCircuited:!0};Z&&Z.signal.removeEventListener("abort",ra),Qe.forEach(He=>z.delete(He.key));let Jt=qc(kn);if(Jt)return await aa(L,Jt.result,!0,{replace:Ee}),{shortCircuited:!0};if(Jt=qc(on),Jt)return ue.add(Jt.key),await aa(L,Jt.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:ya,errors:yt}=Qv(A,K,kn,he,Qe,on);je&&A.errors&&(yt={...A.errors,...yt});let va=$t(),Zi=ia(I),Ln=va||Zi||Qe.length>0;return{matches:K,loaderData:ya,errors:yt,...Ln?{fetchers:new Map(A.fetchers)}:{}}}function nn(L){if(L&&!Dn(L[1]))return{[L[0]]:L[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function jt(L){return L.forEach(B=>{let K=A.fetchers.get(B.key),re=Us(void 0,K?K.data:void 0);A.fetchers.set(B.key,re)}),new Map(A.fetchers)}async function Ct(L,B,K,re){Gt(L);let ce=(re&&re.flushSync)===!0,Se=m||u,we=Zh(A.location,A.matches,g,K,B,re?.relative),xe=Hi(Se,we,g),Ee=ga(xe,Se,we);if(Ee.active&&Ee.matches&&(xe=Ee.matches),!xe){gt(L,B,Zn(404,{pathname:we}),{flushSync:ce});return}let{path:je,submission:de,error:he}=Pv(!0,we,re);if(he){gt(L,B,he,{flushSync:ce});return}let Be=e.getContext?await e.getContext():new Hv,nt=(re&&re.preventScrollReset)===!0;if(de&&gn(de.formMethod)){await an(L,B,je,xe,Be,Ee.active,ce,nt,de);return}k.set(L,{routeId:B,path:je}),await Sn(L,B,je,xe,Be,Ee.active,ce,nt,de)}async function an(L,B,K,re,ce,Se,we,xe,Ee){dt(),k.delete(L);let je=A.fetchers.get(L);Ht(L,yj(Ee,je),{flushSync:we});let de=new AbortController,he=Eo(e.history,K,de.signal,Ee);if(Se){let At=await Ur(re,new URL(he.url).pathname,he.signal,L);if(At.type==="aborted")return;if(At.type==="error"){gt(L,B,At.error,{flushSync:we});return}else if(At.matches)re=At.matches;else{gt(L,B,Zn(404,{pathname:K}),{flushSync:we});return}}let Be=uu(re,K);if(!Be.route.action&&!Be.route.lazy){let At=Zn(405,{method:Ee.formMethod,pathname:K,routeId:B});gt(L,B,At,{flushSync:we});return}z.set(L,de);let nt=U,Dt=zo(l,d,he,re,Be,o,ce),lt=(await ma(he,Dt,ce,L))[Be.route.id];if(he.signal.aborted){z.get(L)===de&&z.delete(L);return}if(te.has(L)){if(Tr(lt)||Dn(lt)){Ht(L,Qa(void 0));return}}else{if(Tr(lt))if(z.delete(L),I>nt){Ht(L,Qa(void 0));return}else return ue.add(L),Ht(L,Us(Ee)),aa(he,lt,!1,{fetcherSubmission:Ee,preventScrollReset:xe});if(Dn(lt)){gt(L,B,lt.error);return}}let Qe=A.navigation.location||A.location,ra=Eo(e.history,Qe,de.signal),kn=m||u,on=A.navigation.state!=="idle"?Hi(kn,A.navigation.location,g):A.matches;Pe(on,"Didn't find any matches after fetcher action");let Jt=++U;se.set(L,Jt);let ya=Us(Ee,lt.data);A.fetchers.set(L,ya);let{dsMatches:yt,revalidatingFetchers:va}=Fv(ra,ce,l,d,e.history,A,on,Ee,Qe,o,!1,ve,Ue,te,k,ue,kn,g,e.patchRoutesOnNavigation!=null,[Be.route.id,lt]);va.filter(At=>At.key!==L).forEach(At=>{let za=At.key,Wi=A.fetchers.get(za),oa=Us(void 0,Wi?Wi.data:void 0);A.fetchers.set(za,oa),Gt(za),At.controller&&z.set(za,At.controller)}),fe({fetchers:new Map(A.fetchers)});let Zi=()=>va.forEach(At=>Gt(At.key));de.signal.addEventListener("abort",Zi);let{loaderResults:Ln,fetcherResults:He}=await De(yt,va,ra,ce);if(de.signal.aborted)return;if(de.signal.removeEventListener("abort",Zi),se.delete(L),z.delete(L),va.forEach(At=>z.delete(At.key)),A.fetchers.has(L)){let At=Qa(lt.data);A.fetchers.set(L,At)}let Pt=qc(Ln);if(Pt)return aa(ra,Pt.result,!1,{preventScrollReset:xe});if(Pt=qc(He),Pt)return ue.add(Pt.key),aa(ra,Pt.result,!1,{preventScrollReset:xe});let{loaderData:Da,errors:xa}=Qv(A,on,Ln,void 0,va,He);ia(Jt),A.navigation.state==="loading"&&Jt>I?(Pe($,"Expected pending action"),Z&&Z.abort(),ze(A.navigation.location,{matches:on,loaderData:Da,errors:xa,fetchers:new Map(A.fetchers)})):(fe({errors:xa,loaderData:Zv(A.loaderData,Da,on,xa),fetchers:new Map(A.fetchers)}),ve=!1)}async function Sn(L,B,K,re,ce,Se,we,xe,Ee){let je=A.fetchers.get(L);Ht(L,Us(Ee,je?je.data:void 0),{flushSync:we});let de=new AbortController,he=Eo(e.history,K,de.signal);if(Se){let Qe=await Ur(re,new URL(he.url).pathname,he.signal,L);if(Qe.type==="aborted")return;if(Qe.type==="error"){gt(L,B,Qe.error,{flushSync:we});return}else if(Qe.matches)re=Qe.matches;else{gt(L,B,Zn(404,{pathname:K}),{flushSync:we});return}}let Be=uu(re,K);z.set(L,de);let nt=U,Dt=zo(l,d,he,re,Be,o,ce),lt=(await ma(he,Dt,ce,L))[Be.route.id];if(z.get(L)===de&&z.delete(L),!he.signal.aborted){if(te.has(L)){Ht(L,Qa(void 0));return}if(Tr(lt))if(I>nt){Ht(L,Qa(void 0));return}else{ue.add(L),await aa(he,lt,!1,{preventScrollReset:xe});return}if(Dn(lt)){gt(L,B,lt.error);return}Ht(L,Qa(lt.data))}}async function aa(L,B,K,{submission:re,fetcherSubmission:ce,preventScrollReset:Se,replace:we}={}){B.response.headers.has("X-Remix-Revalidate")&&(ve=!0);let xe=B.response.headers.get("Location");Pe(xe,"Expected a Location header on the redirect Response"),xe=Iv(xe,new URL(L.url),g);let Ee=ol(A.location,xe,{_isRedirect:!0});if(r){let Dt=!1;if(B.response.headers.has("X-Remix-Reload-Document"))Dt=!0;else if(Pm(xe)){const qt=jb(xe,!0);Dt=qt.origin!==a.location.origin||ta(qt.pathname,g)==null}if(Dt){we?a.location.replace(xe):a.location.assign(xe);return}}Z=null;let je=we===!0||B.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:de,formAction:he,formEncType:Be}=A.navigation;!re&&!ce&&de&&he&&Be&&(re=e1(A.navigation));let nt=re||ce;if(IE.has(B.response.status)&&nt&&gn(nt.formMethod))await Me(je,Ee,{submission:{...nt,formAction:xe},preventScrollReset:Se||P,enableViewTransition:K?ne:void 0});else{let Dt=Sh(Ee,re);await Me(je,Ee,{overrideNavigation:Dt,fetcherSubmission:ce,preventScrollReset:Se||P,enableViewTransition:K?ne:void 0})}}async function ma(L,B,K,re){let ce,Se={};try{ce=await rj(p,L,B,re,K,!1)}catch(we){return B.filter(xe=>xe.shouldLoad).forEach(xe=>{Se[xe.route.id]={type:"error",error:we}}),Se}if(L.signal.aborted)return Se;for(let[we,xe]of Object.entries(ce))if(mj(xe)){let Ee=xe.result;Se[we]={type:"redirect",response:cj(Ee,L,we,B,g)}}else Se[we]=await lj(xe);return Se}async function De(L,B,K,re){let ce=ma(K,L,re,null),Se=Promise.all(B.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let de=(await ma(Ee.request,Ee.matches,re,Ee.key))[Ee.match.route.id];return{[Ee.key]:de}}else return Promise.resolve({[Ee.key]:{type:"error",error:Zn(404,{pathname:Ee.path})}})})),we=await ce,xe=(await Se).reduce((Ee,je)=>Object.assign(Ee,je),{});return{loaderResults:we,fetcherResults:xe}}function dt(){ve=!0,k.forEach((L,B)=>{z.has(B)&&Ue.add(B),Gt(B)})}function Ht(L,B,K={}){A.fetchers.set(L,B),fe({fetchers:new Map(A.fetchers)},{flushSync:(K&&K.flushSync)===!0})}function gt(L,B,K,re={}){let ce=$i(A.matches,B);si(L),fe({errors:{[ce.route.id]:K},fetchers:new Map(A.fetchers)},{flushSync:(re&&re.flushSync)===!0})}function pa(L){return q.set(L,(q.get(L)||0)+1),te.has(L)&&te.delete(L),A.fetchers.get(L)||KE}function Yo(L,B){Gt(L,B?.reason),Ht(L,Qa(null))}function si(L){let B=A.fetchers.get(L);z.has(L)&&!(B&&B.state==="loading"&&se.has(L))&&Gt(L),k.delete(L),se.delete(L),ue.delete(L),te.delete(L),Ue.delete(L),A.fetchers.delete(L)}function Xo(L){let B=(q.get(L)||0)-1;B<=0?(q.delete(L),te.add(L)):q.set(L,B),fe({fetchers:new Map(A.fetchers)})}function Gt(L,B){let K=z.get(L);K&&(K.abort(B),z.delete(L))}function On(L){for(let B of L){let K=pa(B),re=Qa(K.data);A.fetchers.set(B,re)}}function $t(){let L=[],B=!1;for(let K of ue){let re=A.fetchers.get(K);Pe(re,`Expected fetcher: ${K}`),re.state==="loading"&&(ue.delete(K),L.push(K),B=!0)}return On(L),B}function ia(L){let B=[];for(let[K,re]of se)if(re<L){let ce=A.fetchers.get(K);Pe(ce,`Expected fetcher: ${K}`),ce.state==="loading"&&(Gt(K),se.delete(K),B.push(K))}return On(B),B.length>0}function rn(L,B){let K=A.blockers.get(L)||_s;return le.get(L)!==B&&le.set(L,B),K}function kl(L){A.blockers.delete(L),le.delete(L)}function Nr(L,B){let K=A.blockers.get(L)||_s;Pe(K.state==="unblocked"&&B.state==="blocked"||K.state==="blocked"&&B.state==="blocked"||K.state==="blocked"&&B.state==="proceeding"||K.state==="blocked"&&B.state==="unblocked"||K.state==="proceeding"&&B.state==="unblocked",`Invalid blocker state transition: ${K.state} -> ${B.state}`);let re=new Map(A.blockers);re.set(L,B),fe({blockers:re})}function Ll({currentLocation:L,nextLocation:B,historyAction:K}){if(le.size===0)return;le.size>1&&Vt(!1,"A router only supports one blocker at a time");let re=Array.from(le.entries()),[ce,Se]=re[re.length-1],we=A.blockers.get(ce);if(!(we&&we.state==="proceeding")&&Se({currentLocation:L,nextLocation:B,historyAction:K}))return ce}function li(L){let B=Zn(404,{pathname:L}),K=m||u,{matches:re,route:ce}=Gc(K);return{notFoundMatches:re,route:ce,error:B}}function _r(L,B,K){if(S=L,M=B,j=K||null,!R&&A.navigation===bh){R=!0;let re=Qi(A.location,A.matches);re!=null&&fe({restoreScrollPosition:re})}return()=>{S=null,M=null,j=null}}function Ki(L,B){return j&&j(L,B.map(re=>jE(re,A.loaderData)))||L.key}function Ma(L,B){if(S&&M){let K=Ki(L,B);S[K]=M()}}function Qi(L,B){if(S){let K=Ki(L,B),re=S[K];if(typeof re=="number")return re}return null}function ga(L,B,K){if(e.patchRoutesOnNavigation)if(L){if(Object.keys(L[0].params).length>0)return{active:!0,matches:cu(B,K,g,!0)}}else return{active:!0,matches:cu(B,K,g,!0)||[]};return{active:!1,matches:null}}async function Ur(L,B,K,re){if(!e.patchRoutesOnNavigation)return{type:"success",matches:L};let ce=L;for(;;){let Se=m==null,we=m||u,xe=d;try{await e.patchRoutesOnNavigation({signal:K,path:B,matches:ce,fetcherKey:re,patch:(de,he)=>{K.aborted||Yv(de,he,we,xe,l,!1)}})}catch(de){return{type:"error",error:de,partialMatches:ce}}finally{Se&&!K.aborted&&(u=[...u])}if(K.aborted)return{type:"aborted"};let Ee=Hi(we,B,g);if(Ee)return{type:"success",matches:Ee};let je=cu(we,B,g,!0);if(!je||ce.length===je.length&&ce.every((de,he)=>de.route.id===je[he].route.id))return{type:"success",matches:null};ce=je}}function Nl(L){d={},m=sl(L,l,void 0,d)}function Go(L,B,K=!1){let re=m==null;Yv(L,B,m||u,d,l,K),re&&(u=[...u],fe({}))}return H={get basename(){return g},get future(){return y},get state(){return A},get routes(){return u},get window(){return a},initialize:ae,subscribe:ie,enableScrollRestoration:_r,navigate:Ae,fetch:Ct,revalidate:Oe,createHref:L=>e.history.createHref(L),encodeLocation:L=>e.history.encodeLocation(L),getFetcher:pa,resetFetcher:Yo,deleteFetcher:Xo,dispose:oe,getBlocker:rn,deleteBlocker:kl,patchRoutes:Go,_internalFetchControllers:z,_internalSetRoutes:Nl,_internalSetStateDoNotUseOrYouWillBreakYourApp(L){fe(L)}},H}function JE(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Zh(e,a,r,o,l,d){let u,m;if(l){u=[];for(let p of a)if(u.push(p),p.route.id===l){m=p;break}}else u=a,m=a[a.length-1];let g=$m(o||".",Hm(u),ta(e.pathname,r)||e.pathname,d==="path");if(o==null&&(g.search=e.search,g.hash=e.hash),(o==null||o===""||o===".")&&m){let p=Ym(g.search);if(m.route.index&&!p)g.search=g.search?g.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&p){let y=new URLSearchParams(g.search),v=y.getAll("index");y.delete("index"),v.filter(S=>S).forEach(S=>y.append("index",S));let b=y.toString();g.search=b?`?${b}`:""}}return r!=="/"&&(g.pathname=VE({basename:r,pathname:g.pathname})),Yi(g)}function Pv(e,a,r){if(!r||!JE(r))return{path:a};if(r.formMethod&&!pj(r.formMethod))return{path:a,error:Zn(405,{method:r.formMethod})};let o=()=>({path:a,error:Zn(400,{type:"invalid-body"})}),d=(r.formMethod||"get").toUpperCase(),u=Ub(a);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!gn(d))return o();let v=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,[S,j])=>`${b}${S}=${j}
`,""):String(r.body);return{path:a,submission:{formMethod:d,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:v}}}else if(r.formEncType==="application/json"){if(!gn(d))return o();try{let v=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:a,submission:{formMethod:d,formAction:u,formEncType:r.formEncType,formData:void 0,json:v,text:void 0}}}catch{return o()}}}Pe(typeof FormData=="function","FormData is not available in this environment");let m,g;if(r.formData)m=em(r.formData),g=r.formData;else if(r.body instanceof FormData)m=em(r.body),g=r.body;else if(r.body instanceof URLSearchParams)m=r.body,g=Kv(m);else if(r.body==null)m=new URLSearchParams,g=new FormData;else try{m=new URLSearchParams(r.body),g=Kv(m)}catch{return o()}let p={formMethod:d,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:g,json:void 0,text:void 0};if(gn(p.formMethod))return{path:a,submission:p};let y=Gi(a);return e&&y.search&&Ym(y.search)&&m.append("index",""),y.search=`?${m}`,{path:Yi(y),submission:p}}function Fv(e,a,r,o,l,d,u,m,g,p,y,v,b,S,j,M,R,E,D,N){let G=N?Dn(N[1])?N[1].error:N[1].data:void 0,H=l.createURL(d.location),A=l.createURL(g),$;if(y&&d.errors){let ye=Object.keys(d.errors)[0];$=u.findIndex(ve=>ve.route.id===ye)}else if(N&&Dn(N[1])){let ye=N[0];$=u.findIndex(ve=>ve.route.id===ye)-1}let P=N?N[1].statusCode:void 0,Z=P&&P>=400,ne={currentUrl:H,currentParams:d.matches[0]?.params||{},nextUrl:A,nextParams:u[0].params,...m,actionResult:G,actionStatus:P},me=u.map((ye,ve)=>{let{route:Ue}=ye,z=null;if($!=null&&ve>$?z=!1:Ue.lazy?z=!0:Fm(Ue)?y?z=Wh(Ue,d.loaderData,d.errors):ej(d.loaderData,d.matches[ve],ye)&&(z=!0):z=!1,z!==null)return Jh(r,o,e,ye,p,a,z);let U=Z?!1:v||H.pathname+H.search===A.pathname+A.search||H.search!==A.search||tj(d.matches[ve],ye),I={...ne,defaultShouldRevalidate:U},se=Cu(ye,I);return Jh(r,o,e,ye,p,a,se,I)}),Le=[];return j.forEach((ye,ve)=>{if(y||!u.some(q=>q.route.id===ye.routeId)||S.has(ve))return;let Ue=d.fetchers.get(ve),z=Ue&&Ue.state!=="idle"&&Ue.data===void 0,U=Hi(R,ye.path,E);if(!U){if(D&&z)return;Le.push({key:ve,routeId:ye.routeId,path:ye.path,matches:null,match:null,request:null,controller:null});return}if(M.has(ve))return;let I=uu(U,ye.path),se=new AbortController,ue=Eo(l,ye.path,se.signal),k=null;if(b.has(ve))b.delete(ve),k=zo(r,o,ue,U,I,p,a);else if(z)v&&(k=zo(r,o,ue,U,I,p,a));else{let q={...ne,defaultShouldRevalidate:Z?!1:v};Cu(I,q)&&(k=zo(r,o,ue,U,I,p,a,q))}k&&Le.push({key:ve,routeId:ye.routeId,path:ye.path,matches:k,match:I,request:ue,controller:se})}),{dsMatches:me,revalidatingFetchers:Le}}function Fm(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function Wh(e,a,r){if(e.lazy)return!0;if(!Fm(e))return!1;let o=a!=null&&e.id in a,l=r!=null&&r[e.id]!==void 0;return!o&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!o&&!l}function ej(e,a,r){let o=!a||r.route.id!==a.route.id,l=!e.hasOwnProperty(r.route.id);return o||l}function tj(e,a){let r=e.route.path;return e.pathname!==a.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==a.params["*"]}function Cu(e,a){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(a);if(typeof r=="boolean")return r}return a.defaultShouldRevalidate}function Yv(e,a,r,o,l,d){let u;if(e){let p=o[e];Pe(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=r;let m=[],g=[];if(a.forEach(p=>{let y=u.find(v=>Ob(p,v));y?g.push({existingRoute:y,newRoute:p}):m.push(p)}),m.length>0){let p=sl(m,l,[e||"_","patch",String(u?.length||"0")],o);u.push(...p)}if(d&&g.length>0)for(let p=0;p<g.length;p++){let{existingRoute:y,newRoute:v}=g[p],b=y,[S]=sl([v],l,[],{},!0);Object.assign(b,{element:S.element?S.element:b.element,errorElement:S.errorElement?S.errorElement:b.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:b.hydrateFallbackElement})}}function Ob(e,a){return"id"in e&&"id"in a&&e.id===a.id?!0:e.index===a.index&&e.path===a.path&&e.caseSensitive===a.caseSensitive?(!e.children||e.children.length===0)&&(!a.children||a.children.length===0)?!0:e.children.every((r,o)=>a.children?.some(l=>Ob(r,l))):!1}var Xv=new WeakMap,kb=({key:e,route:a,manifest:r,mapRouteProperties:o})=>{let l=r[a.id];if(Pe(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let d=l.lazy[e];if(!d)return;let u=Xv.get(l);u||(u={},Xv.set(l,u));let m=u[e];if(m)return m;let g=(async()=>{let p=SE(e),v=l[e]!==void 0&&e!=="hasErrorBoundary";if(p)Vt(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(v)Vt(!1,`Route "${l.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let b=await d();b!=null&&(Object.assign(l,{[e]:b}),Object.assign(l,o(l)))}typeof l.lazy=="object"&&(l.lazy[e]=void 0,Object.values(l.lazy).every(b=>b===void 0)&&(l.lazy=void 0))})();return u[e]=g,g},Gv=new WeakMap;function nj(e,a,r,o,l){let d=r[e.id];if(Pe(d,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=Gv.get(d);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let v=(async()=>{Pe(typeof e.lazy=="function","No lazy route function found");let b=await e.lazy(),S={};for(let j in b){let M=b[j];if(M===void 0)continue;let R=TE(j),D=d[j]!==void 0&&j!=="hasErrorBoundary";R?Vt(!R,"Route property "+j+" is not a supported property to be returned from a lazy route function. This property will be ignored."):D?Vt(!D,`Route "${d.id}" has a static property "${j}" defined but its lazy function is also returning a value for this property. The lazy route property "${j}" will be ignored.`):S[j]=M}Object.assign(d,S),Object.assign(d,{...o(d),lazy:void 0})})();return Gv.set(d,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let u=Object.keys(e.lazy),m=[],g;for(let y of u){if(l&&l.includes(y))continue;let v=kb({key:y,route:e,manifest:r,mapRouteProperties:o});v&&(m.push(v),y===a&&(g=v))}let p=m.length>0?Promise.all(m).then(()=>{}):void 0;return p?.catch(()=>{}),g?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:g}}async function qv(e){let a=e.matches.filter(l=>l.shouldLoad),r={};return(await Promise.all(a.map(l=>l.resolve()))).forEach((l,d)=>{r[a[d].route.id]=l}),r}async function aj(e){return e.matches.some(a=>a.route.middleware)?Lb(e,()=>qv(e)):qv(e)}function Lb(e,a){return ij(e,a,o=>o,fj,r);function r(o,l,d){if(d)return Promise.resolve(Object.assign(d.value,{[l]:{type:"error",result:o}}));{let{matches:u}=e,m=Math.min(Math.max(u.findIndex(p=>p.route.id===l),0),Math.max(u.findIndex(p=>p.unstable_shouldCallHandler()),0)),g=$i(u,u[m].route.id).route.id;return Promise.resolve({[g]:{type:"error",result:o}})}}}async function ij(e,a,r,o,l){let{matches:d,request:u,params:m,context:g}=e,p=d.flatMap(v=>v.route.middleware?v.route.middleware.map(b=>[v.route.id,b]):[]);return await Nb({request:u,params:m,context:g},p,a,r,o,l)}async function Nb(e,a,r,o,l,d,u=0){let{request:m}=e;if(m.signal.aborted)throw m.signal.reason??new Error(`Request aborted: ${m.method} ${m.url}`);let g=a[u];if(!g)return await r();let[p,y]=g,v,b=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await Nb(e,a,r,o,l,d,u+1)},v.value}catch(S){return v={value:await d(S,p,v)},v.value}};try{let S=await y(e,b),j=S!=null?o(S):void 0;return l(j)?j:v?j??v.value:(v={value:await b()},v.value)}catch(S){return await d(S,p,v)}}function _b(e,a,r,o,l){let d=kb({key:"middleware",route:o.route,manifest:a,mapRouteProperties:e}),u=nj(o.route,gn(r.method)?"action":"loader",a,e,l);return{middleware:d,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Jh(e,a,r,o,l,d,u,m=null){let g=!1,p=_b(e,a,r,o,l);return{...o,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:m,unstable_shouldCallHandler(y){return g=!0,m?typeof y=="boolean"?Cu(o,{...m,defaultShouldRevalidate:y}):Cu(o,m):u},resolve(y){let{lazy:v,loader:b,middleware:S}=o.route,j=g||u||y&&!gn(r.method)&&(v||b),M=S&&S.length>0&&!b&&!v;return j&&!M?oj({request:r,match:o,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:y,scopedContext:d}):Promise.resolve({type:"data",result:void 0})}}}function zo(e,a,r,o,l,d,u,m=null){return o.map(g=>g.route.id!==l.route.id?{...g,shouldLoad:!1,unstable_shouldRevalidateArgs:m,unstable_shouldCallHandler:()=>!1,_lazyPromises:_b(e,a,r,g,d),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Jh(e,a,r,g,d,u,!0,m))}async function rj(e,a,r,o,l,d){r.some(p=>p._lazyPromises?.middleware)&&await Promise.all(r.map(p=>p._lazyPromises?.middleware));let u={request:a,params:r[0].params,context:l,matches:r},g=await e({...u,fetcherKey:o,runClientMiddleware:p=>{let y=u;return Lb(y,()=>p({...y,fetcherKey:o,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return g}async function oj({request:e,match:a,lazyHandlerPromise:r,lazyRoutePromise:o,handlerOverride:l,scopedContext:d}){let u,m,g=gn(e.method),p=g?"action":"loader",y=v=>{let b,S=new Promise((R,E)=>b=E);m=()=>b(),e.signal.addEventListener("abort",m);let j=R=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${a.route.id}]`)):v({request:e,params:a.params,context:d},...R!==void 0?[R]:[]),M=(async()=>{try{return{type:"data",result:await(l?l(E=>j(E)):j())}}catch(R){return{type:"error",result:R}}})();return Promise.race([M,S])};try{let v=g?a.route.action:a.route.loader;if(r||o)if(v){let b,[S]=await Promise.all([y(v).catch(j=>{b=j}),r,o]);if(b!==void 0)throw b;u=S}else{await r;let b=g?a.route.action:a.route.loader;if(b)[u]=await Promise.all([y(b),o]);else if(p==="action"){let S=new URL(e.url),j=S.pathname+S.search;throw Zn(405,{method:e.method,pathname:j,routeId:a.route.id})}else return{type:"data",result:void 0}}else if(v)u=await y(v);else{let b=new URL(e.url),S=b.pathname+b.search;throw Zn(404,{pathname:S})}}catch(v){return{type:"error",result:v}}finally{m&&e.signal.removeEventListener("abort",m)}return u}async function sj(e){let a=e.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?e.body==null?null:e.json():e.text()}async function lj(e){let{result:a,type:r}=e;if(Vb(a)){let o;try{o=await sj(a)}catch(l){return{type:"error",error:l}}return r==="error"?{type:"error",error:new ju(a.status,a.statusText,o),statusCode:a.status,headers:a.headers}:{type:"data",data:o,statusCode:a.status,headers:a.headers}}return r==="error"?Jv(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:a.init?.status,headers:a.init?.headers?new Headers(a.init.headers):void 0}:{type:"error",error:new ju(a.init?.status||500,void 0,a.data),statusCode:ll(a)?a.status:void 0,headers:a.init?.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:ll(a)?a.status:void 0}:Jv(a)?{type:"data",data:a.data,statusCode:a.init?.status,headers:a.init?.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function cj(e,a,r,o,l){let d=e.headers.get("Location");if(Pe(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!Pm(d)){let u=o.slice(0,o.findIndex(m=>m.route.id===r)+1);d=Zh(new URL(a.url),u,l,d),e.headers.set("Location",d)}return e}function Iv(e,a,r){if(Pm(e)){let o=e,l=o.startsWith("//")?new URL(a.protocol+o):new URL(o),d=ta(l.pathname,r)!=null;if(l.origin===a.origin&&d)return l.pathname+l.search+l.hash}return e}function Eo(e,a,r,o){let l=e.createURL(Ub(a)).toString(),d={signal:r};if(o&&gn(o.formMethod)){let{formMethod:u,formEncType:m}=o;d.method=u.toUpperCase(),m==="application/json"?(d.headers=new Headers({"Content-Type":m}),d.body=JSON.stringify(o.json)):m==="text/plain"?d.body=o.text:m==="application/x-www-form-urlencoded"&&o.formData?d.body=em(o.formData):d.body=o.formData}return new Request(l,d)}function em(e){let a=new URLSearchParams;for(let[r,o]of e.entries())a.append(r,typeof o=="string"?o:o.name);return a}function Kv(e){let a=new FormData;for(let[r,o]of e.entries())a.append(r,o);return a}function uj(e,a,r,o=!1,l=!1){let d={},u=null,m,g=!1,p={},y=r&&Dn(r[1])?r[1].error:void 0;return e.forEach(v=>{if(!(v.route.id in a))return;let b=v.route.id,S=a[b];if(Pe(!Tr(S),"Cannot handle redirect results in processLoaderData"),Dn(S)){let j=S.error;if(y!==void 0&&(j=y,y=void 0),u=u||{},l)u[b]=j;else{let M=$i(e,b);u[M.route.id]==null&&(u[M.route.id]=j)}o||(d[b]=zb),g||(g=!0,m=ll(S.error)?S.error.status:500),S.headers&&(p[b]=S.headers)}else d[b]=S.data,S.statusCode&&S.statusCode!==200&&!g&&(m=S.statusCode),S.headers&&(p[b]=S.headers)}),y!==void 0&&r&&(u={[r[0]]:y},r[2]&&(d[r[2]]=void 0)),{loaderData:d,errors:u,statusCode:m||200,loaderHeaders:p}}function Qv(e,a,r,o,l,d){let{loaderData:u,errors:m}=uj(a,r,o);return l.filter(g=>!g.matches||g.matches.some(p=>p.shouldLoad)).forEach(g=>{let{key:p,match:y,controller:v}=g;if(v&&v.signal.aborted)return;let b=d[p];if(Pe(b,"Did not find corresponding fetcher result"),Dn(b)){let S=$i(e.matches,y?.route.id);m&&m[S.route.id]||(m={...m,[S.route.id]:b.error}),e.fetchers.delete(p)}else if(Tr(b))Pe(!1,"Unhandled fetcher revalidation redirect");else{let S=Qa(b.data);e.fetchers.set(p,S)}}),{loaderData:u,errors:m}}function Zv(e,a,r,o){let l=Object.entries(a).filter(([,d])=>d!==zb).reduce((d,[u,m])=>(d[u]=m,d),{});for(let d of r){let u=d.route.id;if(!a.hasOwnProperty(u)&&e.hasOwnProperty(u)&&d.route.loader&&(l[u]=e[u]),o&&o.hasOwnProperty(u))break}return l}function Wv(e){return e?Dn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function $i(e,a){return(a?e.slice(0,e.findIndex(o=>o.route.id===a)+1):[...e]).reverse().find(o=>o.route.hasErrorBoundary===!0)||e[0]}function Gc(e){let a=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function Zn(e,{pathname:a,routeId:r,method:o,type:l,message:d}={}){let u="Unknown Server Error",m="Unknown @remix-run/router error";return e===400?(u="Bad Request",o&&a&&r?m=`You made a ${o} request to "${a}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:l==="invalid-body"&&(m="Unable to encode submission body")):e===403?(u="Forbidden",m=`Route "${r}" does not match URL "${a}"`):e===404?(u="Not Found",m=`No route matches URL "${a}"`):e===405&&(u="Method Not Allowed",o&&a&&r?m=`You made a ${o.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:o&&(m=`Invalid request method "${o.toUpperCase()}"`)),new ju(e||500,u,new Error(m),!0)}function qc(e){let a=Object.entries(e);for(let r=a.length-1;r>=0;r--){let[o,l]=a[r];if(Tr(l))return{key:o,result:l}}}function Ub(e){let a=typeof e=="string"?Gi(e):e;return Yi({...a,hash:""})}function dj(e,a){return e.pathname!==a.pathname||e.search!==a.search?!1:e.hash===""?a.hash!=="":e.hash===a.hash?!0:a.hash!==""}function fj(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([a,r])=>typeof a=="string"&&hj(r))}function hj(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function mj(e){return Vb(e.result)&&qE.has(e.result.status)}function Dn(e){return e.type==="error"}function Tr(e){return(e&&e.type)==="redirect"}function Jv(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Vb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function pj(e){return GE.has(e.toUpperCase())}function gn(e){return YE.has(e.toUpperCase())}function Ym(e){return new URLSearchParams(e).getAll("index").some(a=>a==="")}function uu(e,a){let r=typeof a=="string"?Gi(a).search:a.search;if(e[e.length-1].route.index&&Ym(r||""))return e[e.length-1];let o=Rb(e);return o[o.length-1]}function e1(e){let{formMethod:a,formAction:r,formEncType:o,text:l,formData:d,json:u}=e;if(!(!a||!r||!o)){if(l!=null)return{formMethod:a,formAction:r,formEncType:o,formData:void 0,json:void 0,text:l};if(d!=null)return{formMethod:a,formAction:r,formEncType:o,formData:d,json:void 0,text:void 0};if(u!==void 0)return{formMethod:a,formAction:r,formEncType:o,formData:void 0,json:u,text:void 0}}}function Sh(e,a){return a?{state:"loading",location:e,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function gj(e,a){return{state:"submitting",location:e,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}}function Us(e,a){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function yj(e,a){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:a?a.data:void 0}}function Qa(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function vj(e,a){try{let r=e.sessionStorage.getItem(Db);if(r){let o=JSON.parse(r);for(let[l,d]of Object.entries(o||{}))d&&Array.isArray(d)&&a.set(l,new Set(d||[]))}}catch{}}function xj(e,a){if(a.size>0){let r={};for(let[o,l]of a)r[o]=[...l];try{e.sessionStorage.setItem(Db,JSON.stringify(r))}catch(o){Vt(!1,`Failed to save applied view transitions in sessionStorage (${o}).`)}}}function bj(){let e,a,r=new Promise((o,l)=>{e=async d=>{o(d);try{await r}catch{}},a=async d=>{l(d);try{await r}catch{}}});return{promise:r,resolve:e,reject:a}}var kr=w.createContext(null);kr.displayName="DataRouter";var Tl=w.createContext(null);Tl.displayName="DataRouterState";w.createContext(!1);var Xm=w.createContext({isTransitioning:!1});Xm.displayName="ViewTransition";var Bb=w.createContext(new Map);Bb.displayName="Fetchers";var Sj=w.createContext(null);Sj.displayName="Await";var Ra=w.createContext(null);Ra.displayName="Navigation";var Pu=w.createContext(null);Pu.displayName="Location";var ha=w.createContext({outlet:null,matches:[],isDataRoute:!1});ha.displayName="Route";var Gm=w.createContext(null);Gm.displayName="RouteError";function wj(e,{relative:a}={}){Pe(El(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=w.useContext(Ra),{hash:l,pathname:d,search:u}=jl(e,{relative:a}),m=d;return r!=="/"&&(m=d==="/"?r:Ca([r,d])),o.createHref({pathname:m,search:u,hash:l})}function El(){return w.useContext(Pu)!=null}function zn(){return Pe(El(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Pu).location}var Hb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $b(e){w.useContext(Ra).static||w.useLayoutEffect(e)}function xn(){let{isDataRoute:e}=w.useContext(ha);return e?Vj():Tj()}function Tj(){Pe(El(),"useNavigate() may be used only in the context of a <Router> component.");let e=w.useContext(kr),{basename:a,navigator:r}=w.useContext(Ra),{matches:o}=w.useContext(ha),{pathname:l}=zn(),d=JSON.stringify(Hm(o)),u=w.useRef(!1);return $b(()=>{u.current=!0}),w.useCallback((g,p={})=>{if(Vt(u.current,Hb),!u.current)return;if(typeof g=="number"){r.go(g);return}let y=$m(g,JSON.parse(d),l,p.relative==="path");e==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:Ca([a,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[a,r,d,l,e])}var Pb=w.createContext(null);function Ej(){return w.useContext(Pb)}function jj(e){let a=w.useContext(ha).outlet;return w.useMemo(()=>a&&w.createElement(Pb.Provider,{value:e},a),[a,e])}function Cj(){let{matches:e}=w.useContext(ha),a=e[e.length-1];return a?a.params:{}}function jl(e,{relative:a}={}){let{matches:r}=w.useContext(ha),{pathname:o}=zn(),l=JSON.stringify(Hm(r));return w.useMemo(()=>$m(e,JSON.parse(l),o,a==="path"),[e,l,o,a])}function Aj(e,a,r,o,l){Pe(El(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=w.useContext(Ra),{matches:u}=w.useContext(ha),m=u[u.length-1],g=m?m.params:{},p=m?m.pathname:"/",y=m?m.pathnameBase:"/",v=m&&m.route;{let D=v&&v.path||"";Fb(p,!v||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let b=zn(),S;S=b;let j=S.pathname||"/",M=j;if(y!=="/"){let D=y.replace(/^\//,"").split("/");M="/"+j.replace(/^\//,"").split("/").slice(D.length).join("/")}let R=Hi(e,{pathname:M});return Vt(v||R!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Vt(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Oj(R&&R.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:Ca([y,d.encodeLocation?d.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?y:Ca([y,d.encodeLocation?d.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),u,r,o,l)}function Rj(){let e=Uj(),a=ll(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:d},"ErrorBoundary")," or"," ",w.createElement("code",{style:d},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},a),r?w.createElement("pre",{style:l},r):null,u)}var Mj=w.createElement(Rj,null),Dj=class extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){this.props.unstable_onError?this.props.unstable_onError(e,a):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?w.createElement(ha.Provider,{value:this.props.routeContext},w.createElement(Gm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zj({routeContext:e,match:a,children:r}){let o=w.useContext(kr);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),w.createElement(ha.Provider,{value:e},r)}function Oj(e,a=[],r=null,o=null,l=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let d=e,u=r?.errors;if(u!=null){let p=d.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);Pe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),d=d.slice(0,Math.min(d.length,p+1))}let m=!1,g=-1;if(r)for(let p=0;p<d.length;p++){let y=d[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=p),y.route.id){let{loaderData:v,errors:b}=r,S=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!b||b[y.route.id]===void 0);if(y.route.lazy||S){m=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((p,y,v)=>{let b,S=!1,j=null,M=null;r&&(b=u&&y.route.id?u[y.route.id]:void 0,j=y.route.errorElement||Mj,m&&(g<0&&v===0?(Fb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,M=null):g===v&&(S=!0,M=y.route.hydrateFallbackElement||null)));let R=a.concat(d.slice(0,v+1)),E=()=>{let D;return b?D=j:S?D=M:y.route.Component?D=w.createElement(y.route.Component,null):y.route.element?D=y.route.element:D=p,w.createElement(zj,{match:y,routeContext:{outlet:p,matches:R,isDataRoute:r!=null},children:D})};return r&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?w.createElement(Dj,{location:r.location,revalidation:r.revalidation,component:j,error:b,children:E(),routeContext:{outlet:null,matches:R,isDataRoute:!0},unstable_onError:o}):E()},null)}function qm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kj(e){let a=w.useContext(kr);return Pe(a,qm(e)),a}function Lj(e){let a=w.useContext(Tl);return Pe(a,qm(e)),a}function Nj(e){let a=w.useContext(ha);return Pe(a,qm(e)),a}function Im(e){let a=Nj(e),r=a.matches[a.matches.length-1];return Pe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function _j(){return Im("useRouteId")}function Uj(){let e=w.useContext(Gm),a=Lj("useRouteError"),r=Im("useRouteError");return e!==void 0?e:a.errors?.[r]}function Vj(){let{router:e}=kj("useNavigate"),a=Im("useNavigate"),r=w.useRef(!1);return $b(()=>{r.current=!0}),w.useCallback(async(l,d={})=>{Vt(r.current,Hb),r.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:a,...d}))},[e,a])}var t1={};function Fb(e,a,r){!a&&!t1[e]&&(t1[e]=!0,Vt(!1,r))}var n1={};function a1(e,a){!e&&!n1[a]&&(n1[a]=!0,console.warn(a))}function Bj(e){let a={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Vt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:w.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Vt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Vt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),a}var Hj=["HydrateFallback","hydrateFallbackElement"],$j=class{constructor(){this.status="pending",this.promise=new Promise((e,a)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",a(r))}})}};function Pj({router:e,flushSync:a,unstable_onError:r}){let[o,l]=w.useState(e.state),[d,u]=w.useState(),[m,g]=w.useState({isTransitioning:!1}),[p,y]=w.useState(),[v,b]=w.useState(),[S,j]=w.useState(),M=w.useRef(new Map),R=w.useCallback(H=>{l(A=>(H.errors&&r&&Object.entries(H.errors).forEach(([$,P])=>{A.errors?.[$]!==P&&r(P)}),H))},[r]),E=w.useCallback((H,{deletedFetchers:A,flushSync:$,viewTransitionOpts:P})=>{H.fetchers.forEach((ne,me)=>{ne.data!==void 0&&M.current.set(me,ne.data)}),A.forEach(ne=>M.current.delete(ne)),a1($===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Z=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(a1(P==null||Z,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!P||!Z){a&&$?a(()=>R(H)):w.startTransition(()=>R(H));return}if(a&&$){a(()=>{v&&(p&&p.resolve(),v.skipTransition()),g({isTransitioning:!0,flushSync:!0,currentLocation:P.currentLocation,nextLocation:P.nextLocation})});let ne=e.window.document.startViewTransition(()=>{a(()=>R(H))});ne.finished.finally(()=>{a(()=>{y(void 0),b(void 0),u(void 0),g({isTransitioning:!1})})}),a(()=>b(ne));return}v?(p&&p.resolve(),v.skipTransition(),j({state:H,currentLocation:P.currentLocation,nextLocation:P.nextLocation})):(u(H),g({isTransitioning:!0,flushSync:!1,currentLocation:P.currentLocation,nextLocation:P.nextLocation}))},[e.window,a,v,p,R]);w.useLayoutEffect(()=>e.subscribe(E),[e,E]),w.useEffect(()=>{m.isTransitioning&&!m.flushSync&&y(new $j)},[m]),w.useEffect(()=>{if(p&&d&&e.window){let H=d,A=p.promise,$=e.window.document.startViewTransition(async()=>{w.startTransition(()=>R(H)),await A});$.finished.finally(()=>{y(void 0),b(void 0),u(void 0),g({isTransitioning:!1})}),b($)}},[d,p,e.window,R]),w.useEffect(()=>{p&&d&&o.location.key===d.location.key&&p.resolve()},[p,v,o.location,d]),w.useEffect(()=>{!m.isTransitioning&&S&&(u(S.state),g({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),j(void 0))},[m.isTransitioning,S]);let D=w.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:H=>e.navigate(H),push:(H,A,$)=>e.navigate(H,{state:A,preventScrollReset:$?.preventScrollReset}),replace:(H,A,$)=>e.navigate(H,{replace:!0,state:A,preventScrollReset:$?.preventScrollReset})}),[e]),N=e.basename||"/",G=w.useMemo(()=>({router:e,navigator:D,static:!1,basename:N,unstable_onError:r}),[e,D,N,r]);return w.createElement(w.Fragment,null,w.createElement(kr.Provider,{value:G},w.createElement(Tl.Provider,{value:o},w.createElement(Bb.Provider,{value:M.current},w.createElement(Xm.Provider,{value:m},w.createElement(Gj,{basename:N,location:o.location,navigationType:o.historyAction,navigator:D},w.createElement(Fj,{routes:e.routes,future:e.future,state:o,unstable_onError:r})))))),null)}var Fj=w.memo(Yj);function Yj({routes:e,future:a,state:r,unstable_onError:o}){return Aj(e,void 0,r,o,a)}function Xj(e){return jj(e.context)}function In(e){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gj({basename:e="/",children:a=null,location:r,navigationType:o="POP",navigator:l,static:d=!1}){Pe(!El(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:u,navigator:l,static:d,future:{}}),[u,l,d]);typeof r=="string"&&(r=Gi(r));let{pathname:g="/",search:p="",hash:y="",state:v=null,key:b="default"}=r,S=w.useMemo(()=>{let j=ta(g,u);return j==null?null:{location:{pathname:j,search:p,hash:y,state:v,key:b},navigationType:o}},[u,g,p,y,v,b,o]);return Vt(S!=null,`<Router basename="${u}"> is not able to match the URL "${g}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:w.createElement(Ra.Provider,{value:m},w.createElement(Pu.Provider,{children:a,value:S}))}function tm(e,a=[]){let r=[];return w.Children.forEach(e,(o,l)=>{if(!w.isValidElement(o))return;let d=[...a,l];if(o.type===w.Fragment){r.push.apply(r,tm(o.props.children,d));return}Pe(o.type===In,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let u={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=tm(o.props.children,d)),r.push(u)}),r}var qj=tm,du="get",fu="application/x-www-form-urlencoded";function Fu(e){return e!=null&&typeof e.tagName=="string"}function Ij(e){return Fu(e)&&e.tagName.toLowerCase()==="button"}function Kj(e){return Fu(e)&&e.tagName.toLowerCase()==="form"}function Qj(e){return Fu(e)&&e.tagName.toLowerCase()==="input"}function Zj(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wj(e,a){return e.button===0&&(!a||a==="_self")&&!Zj(e)}var Ic=null;function Jj(){if(Ic===null)try{new FormData(document.createElement("form"),0),Ic=!1}catch{Ic=!0}return Ic}var eC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wh(e){return e!=null&&!eC.has(e)?(Vt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fu}"`),null):e}function tC(e,a){let r,o,l,d,u;if(Kj(e)){let m=e.getAttribute("action");o=m?ta(m,a):null,r=e.getAttribute("method")||du,l=wh(e.getAttribute("enctype"))||fu,d=new FormData(e)}else if(Ij(e)||Qj(e)&&(e.type==="submit"||e.type==="image")){let m=e.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=e.getAttribute("formaction")||m.getAttribute("action");if(o=g?ta(g,a):null,r=e.getAttribute("formmethod")||m.getAttribute("method")||du,l=wh(e.getAttribute("formenctype"))||wh(m.getAttribute("enctype"))||fu,d=new FormData(m,e),!Jj()){let{name:p,type:y,value:v}=e;if(y==="image"){let b=p?`${p}.`:"";d.append(`${b}x`,"0"),d.append(`${b}y`,"0")}else p&&d.append(p,v)}}else{if(Fu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=du,o=null,l=fu,u=e}return d&&l==="text/plain"&&(u=d,d=void 0),{action:o,method:r.toLowerCase(),encType:l,formData:d,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Km(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function nC(e,a,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname=`_root.${r}`:a&&ta(o.pathname,a)==="/"?o.pathname=`${a.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function aC(e,a){if(e.id in a)return a[e.id];try{let r=await import(e.module);return a[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iC(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function rC(e,a,r){let o=await Promise.all(e.map(async l=>{let d=a.routes[l.route.id];if(d){let u=await aC(d,r);return u.links?u.links():[]}return[]}));return cC(o.flat(1).filter(iC).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function i1(e,a,r,o,l,d){let u=(g,p)=>r[p]?g.route.id!==r[p].route.id:!0,m=(g,p)=>r[p].pathname!==g.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==g.params["*"];return d==="assets"?a.filter((g,p)=>u(g,p)||m(g,p)):d==="data"?a.filter((g,p)=>{let y=o.routes[g.route.id];if(!y||!y.hasLoader)return!1;if(u(g,p)||m(g,p))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function oC(e,a,{includeHydrateFallback:r}={}){return sC(e.map(o=>{let l=a.routes[o.route.id];if(!l)return[];let d=[l.module];return l.clientActionModule&&(d=d.concat(l.clientActionModule)),l.clientLoaderModule&&(d=d.concat(l.clientLoaderModule)),r&&l.hydrateFallbackModule&&(d=d.concat(l.hydrateFallbackModule)),l.imports&&(d=d.concat(l.imports)),d}).flat(1))}function sC(e){return[...new Set(e)]}function lC(e){let a={},r=Object.keys(e).sort();for(let o of r)a[o]=e[o];return a}function cC(e,a){let r=new Set;return new Set(a),e.reduce((o,l)=>{let d=JSON.stringify(lC(l));return r.has(d)||(r.add(d),o.push({key:d,link:l})),o},[])}function Yb(){let e=w.useContext(kr);return Km(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function uC(){let e=w.useContext(Tl);return Km(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Qm=w.createContext(void 0);Qm.displayName="FrameworkContext";function Xb(){let e=w.useContext(Qm);return Km(e,"You must render this element inside a <HydratedRouter> element"),e}function dC(e,a){let r=w.useContext(Qm),[o,l]=w.useState(!1),[d,u]=w.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=a,b=w.useRef(null);w.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let M=E=>{E.forEach(D=>{u(D.isIntersecting)})},R=new IntersectionObserver(M,{threshold:.5});return b.current&&R.observe(b.current),()=>{R.disconnect()}}},[e]),w.useEffect(()=>{if(o){let M=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(M)}}},[o]);let S=()=>{l(!0)},j=()=>{l(!1),u(!1)};return r?e!=="intent"?[d,b,{}]:[d,b,{onFocus:Vs(m,S),onBlur:Vs(g,j),onMouseEnter:Vs(p,S),onMouseLeave:Vs(y,j),onTouchStart:Vs(v,S)}]:[!1,b,{}]}function Vs(e,a){return r=>{e&&e(r),r.defaultPrevented||a(r)}}function fC({page:e,...a}){let{router:r}=Yb(),o=w.useMemo(()=>Hi(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?w.createElement(mC,{page:e,matches:o,...a}):null}function hC(e){let{manifest:a,routeModules:r}=Xb(),[o,l]=w.useState([]);return w.useEffect(()=>{let d=!1;return rC(e,a,r).then(u=>{d||l(u)}),()=>{d=!0}},[e,a,r]),o}function mC({page:e,matches:a,...r}){let o=zn(),{manifest:l,routeModules:d}=Xb(),{basename:u}=Yb(),{loaderData:m,matches:g}=uC(),p=w.useMemo(()=>i1(e,a,g,l,o,"data"),[e,a,g,l,o]),y=w.useMemo(()=>i1(e,a,g,l,o,"assets"),[e,a,g,l,o]),v=w.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let j=new Set,M=!1;if(a.forEach(E=>{let D=l.routes[E.route.id];!D||!D.hasLoader||(!p.some(N=>N.route.id===E.route.id)&&E.route.id in m&&d[E.route.id]?.shouldRevalidate||D.hasClientLoader?M=!0:j.add(E.route.id))}),j.size===0)return[];let R=nC(e,u,"data");return M&&j.size>0&&R.searchParams.set("_routes",a.filter(E=>j.has(E.route.id)).map(E=>E.route.id).join(",")),[R.pathname+R.search]},[u,m,o,l,p,a,e,d]),b=w.useMemo(()=>oC(y,l),[y,l]),S=hC(y);return w.createElement(w.Fragment,null,v.map(j=>w.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...r})),b.map(j=>w.createElement("link",{key:j,rel:"modulepreload",href:j,...r})),S.map(({key:j,link:M})=>w.createElement("link",{key:j,nonce:r.nonce,...M})))}function pC(...e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r!=null&&(r.current=a)})}}var Gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gb&&(window.__reactRouterVersion="7.9.3")}catch{}function gC(e,a){return WE({basename:a?.basename,getContext:a?.getContext,future:a?.future,history:yE({window:a?.window}),hydrationData:a?.hydrationData||yC(),routes:e,mapRouteProperties:Bj,hydrationRouteProperties:Hj,dataStrategy:a?.dataStrategy,patchRoutesOnNavigation:a?.patchRoutesOnNavigation,window:a?.window}).initialize()}function yC(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:vC(e.errors)}),e}function vC(e){if(!e)return null;let a=Object.entries(e),r={};for(let[o,l]of a)if(l&&l.__type==="RouteErrorResponse")r[o]=new ju(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let d=window[l.__subType];if(typeof d=="function")try{let u=new d(l.message);u.stack="",r[o]=u}catch{}}if(r[o]==null){let d=new Error(l.message);d.stack="",r[o]=d}}else r[o]=l;return r}var qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ja=w.forwardRef(function({onClick:a,discover:r="render",prefetch:o="none",relative:l,reloadDocument:d,replace:u,state:m,target:g,to:p,preventScrollReset:y,viewTransition:v,...b},S){let{basename:j}=w.useContext(Ra),M=typeof p=="string"&&qb.test(p),R,E=!1;if(typeof p=="string"&&M&&(R=p,Gb))try{let Z=new URL(window.location.href),ne=p.startsWith("//")?new URL(Z.protocol+p):new URL(p),me=ta(ne.pathname,j);ne.origin===Z.origin&&me!=null?p=me+ne.search+ne.hash:E=!0}catch{Vt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=wj(p,{relative:l}),[N,G,H]=dC(o,b),A=wC(p,{replace:u,state:m,target:g,preventScrollReset:y,relative:l,viewTransition:v});function $(Z){a&&a(Z),Z.defaultPrevented||A(Z)}let P=w.createElement("a",{...b,...H,href:R||D,onClick:E||d?a:$,ref:pC(S,G),target:g,"data-discover":!M&&r==="render"?"true":void 0});return N&&!M?w.createElement(w.Fragment,null,P,w.createElement(fC,{page:D})):P});Ja.displayName="Link";var xC=w.forwardRef(function({"aria-current":a="page",caseSensitive:r=!1,className:o="",end:l=!1,style:d,to:u,viewTransition:m,children:g,...p},y){let v=jl(u,{relative:p.relative}),b=zn(),S=w.useContext(Tl),{navigator:j,basename:M}=w.useContext(Ra),R=S!=null&&AC(v)&&m===!0,E=j.encodeLocation?j.encodeLocation(v).pathname:v.pathname,D=b.pathname,N=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(D=D.toLowerCase(),N=N?N.toLowerCase():null,E=E.toLowerCase()),N&&M&&(N=ta(N,M)||N);const G=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let H=D===E||!l&&D.startsWith(E)&&D.charAt(G)==="/",A=N!=null&&(N===E||!l&&N.startsWith(E)&&N.charAt(E.length)==="/"),$={isActive:H,isPending:A,isTransitioning:R},P=H?a:void 0,Z;typeof o=="function"?Z=o($):Z=[o,H?"active":null,A?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let ne=typeof d=="function"?d($):d;return w.createElement(Ja,{...p,"aria-current":P,className:Z,ref:y,style:ne,to:u,viewTransition:m},typeof g=="function"?g($):g)});xC.displayName="NavLink";var bC=w.forwardRef(({discover:e="render",fetcherKey:a,navigate:r,reloadDocument:o,replace:l,state:d,method:u=du,action:m,onSubmit:g,relative:p,preventScrollReset:y,viewTransition:v,...b},S)=>{let j=jC(),M=CC(m,{relative:p}),R=u.toLowerCase()==="get"?"get":"post",E=typeof m=="string"&&qb.test(m),D=N=>{if(g&&g(N),N.defaultPrevented)return;N.preventDefault();let G=N.nativeEvent.submitter,H=G?.getAttribute("formmethod")||u;j(G||N.currentTarget,{fetcherKey:a,method:H,navigate:r,replace:l,state:d,relative:p,preventScrollReset:y,viewTransition:v})};return w.createElement("form",{ref:S,method:R,action:M,onSubmit:o?g:D,...b,"data-discover":!E&&e==="render"?"true":void 0})});bC.displayName="Form";function SC(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ib(e){let a=w.useContext(kr);return Pe(a,SC(e)),a}function wC(e,{target:a,replace:r,state:o,preventScrollReset:l,relative:d,viewTransition:u}={}){let m=xn(),g=zn(),p=jl(e,{relative:d});return w.useCallback(y=>{if(Wj(y,a)){y.preventDefault();let v=r!==void 0?r:Yi(g)===Yi(p);m(e,{replace:v,state:o,preventScrollReset:l,relative:d,viewTransition:u})}},[g,m,p,r,o,a,e,l,d,u])}var TC=0,EC=()=>`__${String(++TC)}__`;function jC(){let{router:e}=Ib("useSubmit"),{basename:a}=w.useContext(Ra),r=_j();return w.useCallback(async(o,l={})=>{let{action:d,method:u,encType:m,formData:g,body:p}=tC(o,a);if(l.navigate===!1){let y=l.fetcherKey||EC();await e.fetch(y,r,l.action||d,{preventScrollReset:l.preventScrollReset,formData:g,body:p,formMethod:l.method||u,formEncType:l.encType||m,flushSync:l.flushSync})}else await e.navigate(l.action||d,{preventScrollReset:l.preventScrollReset,formData:g,body:p,formMethod:l.method||u,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,a,r])}function CC(e,{relative:a}={}){let{basename:r}=w.useContext(Ra),o=w.useContext(ha);Pe(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),d={...jl(e||".",{relative:a})},u=zn();if(e==null){d.search=u.search;let m=new URLSearchParams(d.search),g=m.getAll("index");if(g.some(y=>y==="")){m.delete("index"),g.filter(v=>v).forEach(v=>m.append("index",v));let y=m.toString();d.search=y?`?${y}`:""}}return(!e||e===".")&&l.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(d.pathname=d.pathname==="/"?r:Ca([r,d.pathname])),Yi(d)}function AC(e,{relative:a}={}){let r=w.useContext(Xm);Pe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Ib("useViewTransitionState"),l=jl(e,{relative:a});if(!r.isTransitioning)return!1;let d=ta(r.currentLocation.pathname,o)||r.currentLocation.pathname,u=ta(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Eu(l.pathname,u)!=null||Eu(l.pathname,d)!=null}var Kn=Tb();function RC(e){return w.createElement(Pj,{flushSync:Kn.flushSync,...e})}var yn=function(){return yn=Object.assign||function(a){for(var r,o=1,l=arguments.length;o<l;o++){r=arguments[o];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(a[d]=r[d])}return a},yn.apply(this,arguments)};function cl(e,a,r){if(r||arguments.length===2)for(var o=0,l=a.length,d;o<l;o++)(d||!(o in a))&&(d||(d=Array.prototype.slice.call(a,0,o)),d[o]=a[o]);return e.concat(d||Array.prototype.slice.call(a))}var mt="-ms-",Zs="-moz-",We="-webkit-",Kb="comm",Yu="rule",Zm="decl",MC="@import",Qb="@keyframes",DC="@layer",Zb=Math.abs,Wm=String.fromCharCode,nm=Object.assign;function zC(e,a){return Yt(e,0)^45?(((a<<2^Yt(e,0))<<2^Yt(e,1))<<2^Yt(e,2))<<2^Yt(e,3):0}function Wb(e){return e.trim()}function Wa(e,a){return(e=a.exec(e))?e[0]:e}function $e(e,a,r){return e.replace(a,r)}function hu(e,a,r){return e.indexOf(a,r)}function Yt(e,a){return e.charCodeAt(a)|0}function ko(e,a,r){return e.slice(a,r)}function Ea(e){return e.length}function Jb(e){return e.length}function Ks(e,a){return a.push(e),e}function OC(e,a){return e.map(a).join("")}function r1(e,a){return e.filter(function(r){return!Wa(r,a)})}var Xu=1,Lo=1,eS=0,na=0,_t=0,Ho="";function Gu(e,a,r,o,l,d,u,m){return{value:e,root:a,parent:r,type:o,props:l,children:d,line:Xu,column:Lo,length:u,return:"",siblings:m}}function Vi(e,a){return nm(Gu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function vo(e){for(;e.root;)e=Vi(e.root,{children:[e]});Ks(e,e.siblings)}function kC(){return _t}function LC(){return _t=na>0?Yt(Ho,--na):0,Lo--,_t===10&&(Lo=1,Xu--),_t}function da(){return _t=na<eS?Yt(Ho,na++):0,Lo++,_t===10&&(Lo=1,Xu++),_t}function Ar(){return Yt(Ho,na)}function mu(){return na}function qu(e,a){return ko(Ho,e,a)}function am(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function NC(e){return Xu=Lo=1,eS=Ea(Ho=e),na=0,[]}function _C(e){return Ho="",e}function Th(e){return Wb(qu(na-1,im(e===91?e+2:e===40?e+1:e)))}function UC(e){for(;(_t=Ar())&&_t<33;)da();return am(e)>2||am(_t)>3?"":" "}function VC(e,a){for(;--a&&da()&&!(_t<48||_t>102||_t>57&&_t<65||_t>70&&_t<97););return qu(e,mu()+(a<6&&Ar()==32&&da()==32))}function im(e){for(;da();)switch(_t){case e:return na;case 34:case 39:e!==34&&e!==39&&im(_t);break;case 40:e===41&&im(e);break;case 92:da();break}return na}function BC(e,a){for(;da()&&e+_t!==57;)if(e+_t===84&&Ar()===47)break;return"/*"+qu(a,na-1)+"*"+Wm(e===47?e:da())}function HC(e){for(;!am(Ar());)da();return qu(e,na)}function $C(e){return _C(pu("",null,null,null,[""],e=NC(e),0,[0],e))}function pu(e,a,r,o,l,d,u,m,g){for(var p=0,y=0,v=u,b=0,S=0,j=0,M=1,R=1,E=1,D=0,N="",G=l,H=d,A=o,$=N;R;)switch(j=D,D=da()){case 40:if(j!=108&&Yt($,v-1)==58){hu($+=$e(Th(D),"&","&\f"),"&\f",Zb(p?m[p-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:$+=Th(D);break;case 9:case 10:case 13:case 32:$+=UC(j);break;case 92:$+=VC(mu()-1,7);continue;case 47:switch(Ar()){case 42:case 47:Ks(PC(BC(da(),mu()),a,r,g),g);break;default:$+="/"}break;case 123*M:m[p++]=Ea($)*E;case 125*M:case 59:case 0:switch(D){case 0:case 125:R=0;case 59+y:E==-1&&($=$e($,/\f/g,"")),S>0&&Ea($)-v&&Ks(S>32?s1($+";",o,r,v-1,g):s1($e($," ","")+";",o,r,v-2,g),g);break;case 59:$+=";";default:if(Ks(A=o1($,a,r,p,y,l,m,N,G=[],H=[],v,d),d),D===123)if(y===0)pu($,a,A,A,G,d,v,m,H);else switch(b===99&&Yt($,3)===110?100:b){case 100:case 108:case 109:case 115:pu(e,A,A,o&&Ks(o1(e,A,A,0,0,l,m,N,l,G=[],v,H),H),l,H,v,m,o?G:H);break;default:pu($,A,A,A,[""],H,0,m,H)}}p=y=S=0,M=E=1,N=$="",v=u;break;case 58:v=1+Ea($),S=j;default:if(M<1){if(D==123)--M;else if(D==125&&M++==0&&LC()==125)continue}switch($+=Wm(D),D*M){case 38:E=y>0?1:($+="\f",-1);break;case 44:m[p++]=(Ea($)-1)*E,E=1;break;case 64:Ar()===45&&($+=Th(da())),b=Ar(),y=v=Ea(N=$+=HC(mu())),D++;break;case 45:j===45&&Ea($)==2&&(M=0)}}return d}function o1(e,a,r,o,l,d,u,m,g,p,y,v){for(var b=l-1,S=l===0?d:[""],j=Jb(S),M=0,R=0,E=0;M<o;++M)for(var D=0,N=ko(e,b+1,b=Zb(R=u[M])),G=e;D<j;++D)(G=Wb(R>0?S[D]+" "+N:$e(N,/&\f/g,S[D])))&&(g[E++]=G);return Gu(e,a,r,l===0?Yu:m,g,p,y,v)}function PC(e,a,r,o){return Gu(e,a,r,Kb,Wm(kC()),ko(e,2,-2),0,o)}function s1(e,a,r,o,l){return Gu(e,a,r,Zm,ko(e,0,o),ko(e,o+1,-1),o,l)}function tS(e,a,r){switch(zC(e,a)){case 5103:return We+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return We+e+e;case 4789:return Zs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return We+e+Zs+e+mt+e+e;case 5936:switch(Yt(e,a+11)){case 114:return We+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return We+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return We+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return We+e+mt+e+e;case 6165:return We+e+mt+"flex-"+e+e;case 5187:return We+e+$e(e,/(\w+).+(:[^]+)/,We+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return We+e+mt+"flex-item-"+$e(e,/flex-|-self/g,"")+(Wa(e,/flex-|baseline/)?"":mt+"grid-row-"+$e(e,/flex-|-self/g,""))+e;case 4675:return We+e+mt+"flex-line-pack"+$e(e,/align-content|flex-|-self/g,"")+e;case 5548:return We+e+mt+$e(e,"shrink","negative")+e;case 5292:return We+e+mt+$e(e,"basis","preferred-size")+e;case 6060:return We+"box-"+$e(e,"-grow","")+We+e+mt+$e(e,"grow","positive")+e;case 4554:return We+$e(e,/([^-])(transform)/g,"$1"+We+"$2")+e;case 6187:return $e($e($e(e,/(zoom-|grab)/,We+"$1"),/(image-set)/,We+"$1"),e,"")+e;case 5495:case 3959:return $e(e,/(image-set\([^]*)/,We+"$1$`$1");case 4968:return $e($e(e,/(.+:)(flex-)?(.*)/,We+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+We+e+e;case 4200:if(!Wa(e,/flex-|baseline/))return mt+"grid-column-align"+ko(e,a)+e;break;case 2592:case 3360:return mt+$e(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,l){return a=l,Wa(o.props,/grid-\w+-end/)})?~hu(e+(r=r[a].value),"span",0)?e:mt+$e(e,"-start","")+e+mt+"grid-row-span:"+(~hu(r,"span",0)?Wa(r,/\d+/):+Wa(r,/\d+/)-+Wa(e,/\d+/))+";":mt+$e(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return Wa(o.props,/grid-\w+-start/)})?e:mt+$e($e(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $e(e,/(.+)-inline(.+)/,We+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ea(e)-1-a>6)switch(Yt(e,a+1)){case 109:if(Yt(e,a+4)!==45)break;case 102:return $e(e,/(.+:)(.+)-([^]+)/,"$1"+We+"$2-$3$1"+Zs+(Yt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~hu(e,"stretch",0)?tS($e(e,"stretch","fill-available"),a,r)+e:e}break;case 5152:case 5920:return $e(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,l,d,u,m,g,p){return mt+l+":"+d+p+(u?mt+l+"-span:"+(m?g:+g-+d)+p:"")+e});case 4949:if(Yt(e,a+6)===121)return $e(e,":",":"+We)+e;break;case 6444:switch(Yt(e,Yt(e,14)===45?18:11)){case 120:return $e(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+We+(Yt(e,14)===45?"inline-":"")+"box$3$1"+We+"$2$3$1"+mt+"$2box$3")+e;case 100:return $e(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $e(e,"scroll-","scroll-snap-")+e}return e}function Au(e,a){for(var r="",o=0;o<e.length;o++)r+=a(e[o],o,e,a)||"";return r}function FC(e,a,r,o){switch(e.type){case DC:if(e.children.length)break;case MC:case Zm:return e.return=e.return||e.value;case Kb:return"";case Qb:return e.return=e.value+"{"+Au(e.children,o)+"}";case Yu:if(!Ea(e.value=e.props.join(",")))return""}return Ea(r=Au(e.children,o))?e.return=e.value+"{"+r+"}":""}function YC(e){var a=Jb(e);return function(r,o,l,d){for(var u="",m=0;m<a;m++)u+=e[m](r,o,l,d)||"";return u}}function XC(e){return function(a){a.root||(a=a.return)&&e(a)}}function GC(e,a,r,o){if(e.length>-1&&!e.return)switch(e.type){case Zm:e.return=tS(e.value,e.length,r);return;case Qb:return Au([Vi(e,{value:$e(e.value,"@","@"+We)})],o);case Yu:if(e.length)return OC(r=e.props,function(l){switch(Wa(l,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vo(Vi(e,{props:[$e(l,/:(read-\w+)/,":"+Zs+"$1")]})),vo(Vi(e,{props:[l]})),nm(e,{props:r1(r,o)});break;case"::placeholder":vo(Vi(e,{props:[$e(l,/:(plac\w+)/,":"+We+"input-$1")]})),vo(Vi(e,{props:[$e(l,/:(plac\w+)/,":"+Zs+"$1")]})),vo(Vi(e,{props:[$e(l,/:(plac\w+)/,mt+"input-$1")]})),vo(Vi(e,{props:[l]})),nm(e,{props:r1(r,o)});break}return""})}}var qC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mn={},No=typeof process<"u"&&Mn!==void 0&&(Mn.REACT_APP_SC_ATTR||Mn.SC_ATTR)||"data-styled",nS="active",aS="data-styled-version",Iu="6.1.19",Jm=`/*!sc*/
`,Ru=typeof window<"u"&&typeof document<"u",IC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==""?Mn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.SC_DISABLE_SPEEDY!==void 0&&Mn.SC_DISABLE_SPEEDY!==""&&Mn.SC_DISABLE_SPEEDY!=="false"&&Mn.SC_DISABLE_SPEEDY),Ku=Object.freeze([]),_o=Object.freeze({});function KC(e,a,r){return r===void 0&&(r=_o),e.theme!==r.theme&&e.theme||a||r.theme}var iS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),QC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ZC=/(^-|-$)/g;function l1(e){return e.replace(QC,"-").replace(ZC,"")}var WC=/(a)(d)/gi,Kc=52,c1=function(e){return String.fromCharCode(e+(e>25?39:97))};function rm(e){var a,r="";for(a=Math.abs(e);a>Kc;a=a/Kc|0)r=c1(a%Kc)+r;return(c1(a%Kc)+r).replace(WC,"$1-$2")}var Eh,rS=5381,jo=function(e,a){for(var r=a.length;r;)e=33*e^a.charCodeAt(--r);return e},oS=function(e){return jo(rS,e)};function sS(e){return rm(oS(e)>>>0)}function JC(e){return e.displayName||e.name||"Component"}function jh(e){return typeof e=="string"&&!0}var lS=typeof Symbol=="function"&&Symbol.for,cS=lS?Symbol.for("react.memo"):60115,eA=lS?Symbol.for("react.forward_ref"):60112,tA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aA=((Eh={})[eA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Eh[cS]=uS,Eh);function u1(e){return("type"in(a=e)&&a.type.$$typeof)===cS?uS:"$$typeof"in e?aA[e.$$typeof]:tA;var a}var iA=Object.defineProperty,rA=Object.getOwnPropertyNames,d1=Object.getOwnPropertySymbols,oA=Object.getOwnPropertyDescriptor,sA=Object.getPrototypeOf,f1=Object.prototype;function dS(e,a,r){if(typeof a!="string"){if(f1){var o=sA(a);o&&o!==f1&&dS(e,o,r)}var l=rA(a);d1&&(l=l.concat(d1(a)));for(var d=u1(e),u=u1(a),m=0;m<l.length;++m){var g=l[m];if(!(g in nA||r&&r[g]||u&&g in u||d&&g in d)){var p=oA(a,g);try{iA(e,g,p)}catch{}}}}return e}function Uo(e){return typeof e=="function"}function ep(e){return typeof e=="object"&&"styledComponentId"in e}function Er(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function om(e,a){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=e[o];return r}function ul(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sm(e,a,r){if(r===void 0&&(r=!1),!r&&!ul(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var o=0;o<a.length;o++)e[o]=sm(e[o],a[o]);else if(ul(a))for(var o in a)e[o]=sm(e[o],a[o]);return e}function tp(e,a){Object.defineProperty(e,"toString",{value:a})}function Cl(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var lA=(function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var r=0,o=0;o<a;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var o=this.groupSizes,l=o.length,d=l;a>=d;)if((d<<=1)<0)throw Cl(16,"".concat(a));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var u=l;u<d;u++)this.groupSizes[u]=0}for(var m=this.indexOfGroup(a+1),g=(u=0,r.length);u<g;u++)this.tag.insertRule(m,r[u])&&(this.groupSizes[a]++,m++)},e.prototype.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],o=this.indexOfGroup(a),l=o+r;this.groupSizes[a]=0;for(var d=o;d<l;d++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var o=this.groupSizes[a],l=this.indexOfGroup(a),d=l+o,u=l;u<d;u++)r+="".concat(this.tag.getRule(u)).concat(Jm);return r},e})(),gu=new Map,Mu=new Map,yu=1,Qc=function(e){if(gu.has(e))return gu.get(e);for(;Mu.has(yu);)yu++;var a=yu++;return gu.set(e,a),Mu.set(a,e),a},cA=function(e,a){yu=a+1,gu.set(e,a),Mu.set(a,e)},uA="style[".concat(No,"][").concat(aS,'="').concat(Iu,'"]'),dA=new RegExp("^".concat(No,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fA=function(e,a,r){for(var o,l=r.split(","),d=0,u=l.length;d<u;d++)(o=l[d])&&e.registerName(a,o)},hA=function(e,a){for(var r,o=((r=a.textContent)!==null&&r!==void 0?r:"").split(Jm),l=[],d=0,u=o.length;d<u;d++){var m=o[d].trim();if(m){var g=m.match(dA);if(g){var p=0|parseInt(g[1],10),y=g[2];p!==0&&(cA(y,p),fA(e,y,g[3]),e.getTag().insertRules(p,l)),l.length=0}else l.push(m)}}},h1=function(e){for(var a=document.querySelectorAll(uA),r=0,o=a.length;r<o;r++){var l=a[r];l&&l.getAttribute(No)!==nS&&(hA(e,l),l.parentNode&&l.parentNode.removeChild(l))}};function mA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fS=function(e){var a=document.head,r=e||a,o=document.createElement("style"),l=(function(m){var g=Array.from(m.querySelectorAll("style[".concat(No,"]")));return g[g.length-1]})(r),d=l!==void 0?l.nextSibling:null;o.setAttribute(No,nS),o.setAttribute(aS,Iu);var u=mA();return u&&o.setAttribute("nonce",u),r.insertBefore(o,d),o},pA=(function(){function e(a){this.element=fS(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,l=0,d=o.length;l<d;l++){var u=o[l];if(u.ownerNode===r)return u}throw Cl(17)})(this.element),this.length=0}return e.prototype.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var r=this.sheet.cssRules[a];return r&&r.cssText?r.cssText:""},e})(),gA=(function(){function e(a){this.element=fS(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,r){if(a<=this.length&&a>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e})(),yA=(function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e})(),m1=Ru,vA={isServer:!Ru,useCSSOMInjection:!IC},hS=(function(){function e(a,r,o){a===void 0&&(a=_o),r===void 0&&(r={});var l=this;this.options=yn(yn({},vA),a),this.gs=r,this.names=new Map(o),this.server=!!a.isServer,!this.server&&Ru&&m1&&(m1=!1,h1(this)),tp(this,function(){return(function(d){for(var u=d.getTag(),m=u.length,g="",p=function(v){var b=(function(E){return Mu.get(E)})(v);if(b===void 0)return"continue";var S=d.names.get(b),j=u.getGroup(v);if(S===void 0||!S.size||j.length===0)return"continue";var M="".concat(No,".g").concat(v,'[id="').concat(b,'"]'),R="";S!==void 0&&S.forEach(function(E){E.length>0&&(R+="".concat(E,","))}),g+="".concat(j).concat(M,'{content:"').concat(R,'"}').concat(Jm)},y=0;y<m;y++)p(y);return g})(l)})}return e.registerId=function(a){return Qc(a)},e.prototype.rehydrate=function(){!this.server&&Ru&&h1(this)},e.prototype.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new e(yn(yn({},this.options),a),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(r){var o=r.useCSSOMInjection,l=r.target;return r.isServer?new yA(l):o?new pA(l):new gA(l)})(this.options),new lA(a)));var a},e.prototype.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},e.prototype.registerName=function(a,r){if(Qc(a),this.names.has(a))this.names.get(a).add(r);else{var o=new Set;o.add(r),this.names.set(a,o)}},e.prototype.insertRules=function(a,r,o){this.registerName(a,r),this.getTag().insertRules(Qc(a),o)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(Qc(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e})(),xA=/&/g,bA=/^\s*\/\/.*$/gm;function mS(e,a){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(a," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(a," ")),r.props=r.props.map(function(o){return"".concat(a," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=mS(r.children,a)),r})}function SA(e){var a,r,o,l=_o,d=l.options,u=d===void 0?_o:d,m=l.plugins,g=m===void 0?Ku:m,p=function(b,S,j){return j.startsWith(r)&&j.endsWith(r)&&j.replaceAll(r,"").length>0?".".concat(a):b},y=g.slice();y.push(function(b){b.type===Yu&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(xA,r).replace(o,p))}),u.prefix&&y.push(GC),y.push(FC);var v=function(b,S,j,M){S===void 0&&(S=""),j===void 0&&(j=""),M===void 0&&(M="&"),a=M,r=S,o=new RegExp("\\".concat(r,"\\b"),"g");var R=b.replace(bA,""),E=$C(j||S?"".concat(j," ").concat(S," { ").concat(R," }"):R);u.namespace&&(E=mS(E,u.namespace));var D=[];return Au(E,YC(y.concat(XC(function(N){return D.push(N)})))),D};return v.hash=g.length?g.reduce(function(b,S){return S.name||Cl(15),jo(b,S.name)},rS).toString():"",v}var wA=new hS,lm=SA(),pS=Je.createContext({shouldForwardProp:void 0,styleSheet:wA,stylis:lm});pS.Consumer;Je.createContext(void 0);function p1(){return w.useContext(pS)}var gS=(function(){function e(a,r){var o=this;this.inject=function(l,d){d===void 0&&(d=lm);var u=o.name+d.hash;l.hasNameForId(o.id,u)||l.insertRules(o.id,u,d(o.rules,u,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=r,tp(this,function(){throw Cl(12,String(o.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=lm),this.name+a.hash},e})(),TA=function(e){return e>="A"&&e<="Z"};function g1(e){for(var a="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;TA(o)?a+="-"+o.toLowerCase():a+=o}return a.startsWith("ms-")?"-"+a:a}var yS=function(e){return e==null||e===!1||e===""},vS=function(e){var a,r,o=[];for(var l in e){var d=e[l];e.hasOwnProperty(l)&&!yS(d)&&(Array.isArray(d)&&d.isCss||Uo(d)?o.push("".concat(g1(l),":"),d,";"):ul(d)?o.push.apply(o,cl(cl(["".concat(l," {")],vS(d),!1),["}"],!1)):o.push("".concat(g1(l),": ").concat((a=l,(r=d)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||a in qC||a.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Rr(e,a,r,o){if(yS(e))return[];if(ep(e))return[".".concat(e.styledComponentId)];if(Uo(e)){if(!Uo(d=e)||d.prototype&&d.prototype.isReactComponent||!a)return[e];var l=e(a);return Rr(l,a,r,o)}var d;return e instanceof gS?r?(e.inject(r,o),[e.getName(o)]):[e]:ul(e)?vS(e):Array.isArray(e)?Array.prototype.concat.apply(Ku,e.map(function(u){return Rr(u,a,r,o)})):[e.toString()]}function EA(e){for(var a=0;a<e.length;a+=1){var r=e[a];if(Uo(r)&&!ep(r))return!1}return!0}var jA=oS(Iu),CA=(function(){function e(a,r,o){this.rules=a,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&EA(a),this.componentId=r,this.baseHash=jo(jA,r),this.baseStyle=o,hS.registerId(r)}return e.prototype.generateAndInjectStyles=function(a,r,o){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=Er(l,this.staticRulesId);else{var d=om(Rr(this.rules,a,r,o)),u=rm(jo(this.baseHash,d)>>>0);if(!r.hasNameForId(this.componentId,u)){var m=o(d,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,m)}l=Er(l,u),this.staticRulesId=u}else{for(var g=jo(this.baseHash,o.hash),p="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")p+=v;else if(v){var b=om(Rr(v,a,r,o));g=jo(g,b+y),p+=b}}if(p){var S=rm(g>>>0);r.hasNameForId(this.componentId,S)||r.insertRules(this.componentId,S,o(p,".".concat(S),void 0,this.componentId)),l=Er(l,S)}}return l},e})(),xS=Je.createContext(void 0);xS.Consumer;var Ch={};function AA(e,a,r){var o=ep(e),l=e,d=!jh(e),u=a.attrs,m=u===void 0?Ku:u,g=a.componentId,p=g===void 0?(function(G,H){var A=typeof G!="string"?"sc":l1(G);Ch[A]=(Ch[A]||0)+1;var $="".concat(A,"-").concat(sS(Iu+A+Ch[A]));return H?"".concat(H,"-").concat($):$})(a.displayName,a.parentComponentId):g,y=a.displayName,v=y===void 0?(function(G){return jh(G)?"styled.".concat(G):"Styled(".concat(JC(G),")")})(e):y,b=a.displayName&&a.componentId?"".concat(l1(a.displayName),"-").concat(a.componentId):a.componentId||p,S=o&&l.attrs?l.attrs.concat(m).filter(Boolean):m,j=a.shouldForwardProp;if(o&&l.shouldForwardProp){var M=l.shouldForwardProp;if(a.shouldForwardProp){var R=a.shouldForwardProp;j=function(G,H){return M(G,H)&&R(G,H)}}else j=M}var E=new CA(r,b,o?l.componentStyle:void 0);function D(G,H){return(function(A,$,P){var Z=A.attrs,ne=A.componentStyle,me=A.defaultProps,Le=A.foldedComponentIds,ye=A.styledComponentId,ve=A.target,Ue=Je.useContext(xS),z=p1(),U=A.shouldForwardProp||z.shouldForwardProp,I=KC($,Ue,me)||_o,se=(function(pe,Te,ae){for(var oe,ie=yn(yn({},Te),{className:void 0,theme:ae}),fe=0;fe<pe.length;fe+=1){var ze=Uo(oe=pe[fe])?oe(ie):oe;for(var Ae in ze)ie[Ae]=Ae==="className"?Er(ie[Ae],ze[Ae]):Ae==="style"?yn(yn({},ie[Ae]),ze[Ae]):ze[Ae]}return Te.className&&(ie.className=Er(ie.className,Te.className)),ie})(Z,$,I),ue=se.as||ve,k={};for(var q in se)se[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&se.theme===I||(q==="forwardedAs"?k.as=se.forwardedAs:U&&!U(q,ue)||(k[q]=se[q]));var te=(function(pe,Te){var ae=p1(),oe=pe.generateAndInjectStyles(Te,ae.styleSheet,ae.stylis);return oe})(ne,se),le=Er(Le,ye);return te&&(le+=" "+te),se.className&&(le+=" "+se.className),k[jh(ue)&&!iS.has(ue)?"class":"className"]=le,P&&(k.ref=P),w.createElement(ue,k)})(N,G,H)}D.displayName=v;var N=Je.forwardRef(D);return N.attrs=S,N.componentStyle=E,N.displayName=v,N.shouldForwardProp=j,N.foldedComponentIds=o?Er(l.foldedComponentIds,l.styledComponentId):"",N.styledComponentId=b,N.target=o?l.target:e,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(G){this._foldedDefaultProps=o?(function(H){for(var A=[],$=1;$<arguments.length;$++)A[$-1]=arguments[$];for(var P=0,Z=A;P<Z.length;P++)sm(H,Z[P],!0);return H})({},l.defaultProps,G):G}}),tp(N,function(){return".".concat(N.styledComponentId)}),d&&dS(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function y1(e,a){for(var r=[e[0]],o=0,l=a.length;o<l;o+=1)r.push(a[o],e[o+1]);return r}var v1=function(e){return Object.assign(e,{isCss:!0})};function bS(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];if(Uo(e)||ul(e))return v1(Rr(y1(Ku,cl([e],a,!0))));var o=e;return a.length===0&&o.length===1&&typeof o[0]=="string"?Rr(o):v1(Rr(y1(o,a)))}function cm(e,a,r){if(r===void 0&&(r=_o),!a)throw Cl(1,a);var o=function(l){for(var d=[],u=1;u<arguments.length;u++)d[u-1]=arguments[u];return e(a,r,bS.apply(void 0,cl([l],d,!1)))};return o.attrs=function(l){return cm(e,a,yn(yn({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},o.withConfig=function(l){return cm(e,a,yn(yn({},r),l))},o}var SS=function(e){return cm(AA,e)},C=SS;iS.forEach(function(e){C[e]=SS(e)});function ct(e){for(var a=[],r=1;r<arguments.length;r++)a[r-1]=arguments[r];var o=om(bS.apply(void 0,cl([e],a,!1))),l=sS(o);return new gS(l,o)}const RA=()=>h.jsxs(MA,{children:[h.jsx("h1",{children:" 404! This is an empty page"}),h.jsx(Ja,{to:"/",children:"Go Home"})]}),MA=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #f0f0f0; */
  text-align: center;
  margin-top: 4.5rem;
  color: var(--text-color);
`;function wS({fontSize:e=70,scale:a=1,variant:r=0}){const o=["#19029b","#FFD93D","#6BCB77","#4D96FF","#ae2c2c","#845EC2"],u=w.useRef(null),[m,g]=w.useState({x:0,y:0,width:100,height:100}),p=w.useMemo(()=>{const y=[],v=S=>{let j=Math.sin(S)*1e4;return j-Math.floor(j)};let b=r*1e3;for(let S=0;S<20;S++){const j=S*50;for(let M=0;M<8;M++){b+=1;const R=o[Math.floor(v(b)*o.length)],E=(v(b+1)*2).toFixed(2),D=(1+v(b+2)).toFixed(2),N=(v(b+3)*40-20).toFixed(1);y.push(h.jsx("rect",{x:j,y:M*50,width:"50",height:50,fill:R,children:h.jsx("animateTransform",{attributeName:"transform",type:"translate",values:`0,0; 0,${N}; 0,0`,dur:`${D}s`,repeatCount:"indefinite",begin:`${E}s`})},`${S}-${M}`))}}return y},[r]);return w.useEffect(()=>{if(u.current){const y=u.current.getBBox();g(y)}},[e]),h.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:`${m.x} ${m.y} ${m.width} ${m.height}`,preserveAspectRatio:"xMinYMin meet",style:{display:"block",background:"transparent",width:`${m.width*a}px`,height:`${m.height*a}px`},children:[h.jsx("defs",{children:h.jsx("pattern",{id:"slidePattern",patternUnits:"userSpaceOnUse",width:"1000",height:"400",children:p})}),h.jsx("text",{ref:u,x:"0",y:e,fontSize:e,fontFamily:"sans-serif",fill:"url(#slidePattern)",dominantBaseline:"alphabetic",textAnchor:"start",children:"FITFINDER"})]})}const ln={setToken:(e,a)=>{if(e?localStorage.setItem("accessToken",e):localStorage.removeItem("accessToken"),!a){localStorage.removeItem("tokenExpiry"),localStorage.removeItem("TTL");return}let r;typeof a=="number"&&a>Date.now()?r=a:r=Date.now()+Number(a)*1e3,localStorage.setItem("tokenExpiry",String(r));const o=Math.max(0,Math.floor((r-Date.now())/1e3));localStorage.setItem("TTL",String(o))},getToken:()=>localStorage.getItem("accessToken")||null,getTTL:()=>{const e=localStorage.getItem("TTL");if(e!==null&&!Number.isNaN(Number(e)))return Number(e);const a=localStorage.getItem("tokenExpiry");return a?Math.max(0,Math.floor((Number(a)-Date.now())/1e3)):null},clearToken:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("tokenExpiry"),localStorage.removeItem("TTL")},isExpired:()=>{const e=localStorage.getItem("tokenExpiry");return e?Date.now()>=Number(e):!0},getTimeToExpiry:()=>{const e=localStorage.getItem("tokenExpiry");return e?Math.max(0,Number(e)-Date.now()):0}},um="https://telescopic-ungodlily-wilbert.ngrok-free.dev",DA="668166958235-qme7mcbk6ab0v0lin94i1b8pvheidba2.apps.googleusercontent.com",zA=(e,a)=>{try{return new URL(a,e).toString()}catch(r){return console.error("Invalid API base URL",e,r),a}};let Zc=null;const tn=async(e,a={})=>{const{skipAuth:r,...o}=a;!r&&ln.getToken()&&ln.getTimeToExpiry()<3e4&&(Zc||(Zc=Za.refreshAccessToken().catch(m=>{throw console.error("Token refresh failed:",m),ln.clearToken(),m}).finally(()=>{Zc=null})),await Zc);const l=ln.getToken(),d={...o.headers||{},...l&&!r?{Authorization:`Bearer ${l}`}:{},...um?.includes("ngrok")?{"ngrok-skip-browser-warning":"true"}:{}},u=await fetch(zA(um,e),{mode:"cors",credentials:"include",...o,headers:d});if(u.status==452&&!r)throw ln.clearToken(),new Error("Unauthorized — session expired");return u},Za={signup:async(e,a,r)=>{const o=await tn("/api/v1/auth/signup",{method:"POST",body:JSON.stringify({userName:e,email:a,password:r}),skipAuth:!1,headers:{"Content-Type":"application/json"}});if(o.status==201){const l=await o.json(),d=new Date(Date.parse(l.expiresIn.replace("EET","GMT+0200"))),u=new Date(d);ln.setToken(l.accessToken,u.getTime())}return o},login:async(e,a)=>{const r=await tn("/api/v1/auth/login",{method:"POST",body:JSON.stringify({email:e,password:a}),skipAuth:!1,headers:{"Content-Type":"application/json"}});if(r.status==200){const o=await r.json(),l=new Date(Date.parse(o.expiresIn.replace("EET","GMT+0200"))),d=new Date(l);ln.setToken(o.accessToken,d.getTime())}return r},refreshAccessToken:async()=>{const e=await tn("/api/v1/auth/refresh",{method:"POST",skipAuth:!0});if(!e.ok){const o=await e.text().catch(()=>null);throw new Error(`Refresh failed: ${e.status} ${o||""}`)}const a=await e.json().catch(()=>null);if(!a||!a.expiresIn)throw new Error("Refresh response missing required 'expiresIn' value");let r;if(typeof a.expiresIn=="string"){const o=a.expiresIn.includes("EET")?a.expiresIn.replace("EET","GMT+0200"):a.expiresIn;r=Date.parse(o)}else if(typeof a.expiresIn=="number")r=a.expiresIn;else throw new Error("Unknown format for 'expiresIn' in refresh response");if(Number.isNaN(r)||r<=0)throw new Error("Invalid 'expiresIn' value in refresh response");return ln.setToken(a.accessToken,r),e},logout:async()=>{try{await tn("/api/v1/auth/logout",{method:"POST",skipAuth:!0})}catch(e){console.warn("Logout request failed:",e)}finally{ln.clearToken()}},sendCode:async e=>await tn("/api/v1/auth/send-code",{method:"POST",body:JSON.stringify({email:e}),skipAuth:!1,headers:{"Content-Type":"application/json"}}),updatePassword:async(e,a)=>await tn("/api/v1/auth/update-password",{method:"POST",body:JSON.stringify({email:e,newPassword:a}),skipAuth:!1,headers:{"Content-Type":"application/json"}}),updateProfileImage:async e=>{const a=new FormData;return a.append("image",e),await tn("/api/v1/auth/profile/photo",{method:"PUT",body:a,skipAuth:!1})},getProfile:async()=>await tn("/api/v1/auth/profile",{method:"GET",skipAuth:!1})},OA=()=>{const[e,a]=w.useState(ln.getToken()),[r,o]=w.useState(null),l=async(j,M,R)=>{const E=await Za.signup(j,M,R);return a(ln.getToken()),S(),await y(),E},d=async(j,M)=>{const R=await Za.login(j,M);return a(ln.getToken()),S(),await y(),R},u=async()=>{await Za.logout(),a(null),clearTimeout(b)},m=async j=>await Za.sendCode(j),g=async(j,M)=>await Za.updatePassword(j,M),p=()=>!ln.isExpired(),y=async()=>{try{const j=await Za.getProfile();if(j&&j.ok){const M=await j.json();o(M)}else console.error("getProfile failed",j&&j.status),o(null)}catch(j){console.error("getProfile error",j),o(null)}},v=async j=>await Za.updateProfileImage(j);let b;const S=()=>{clearTimeout(b);const j=ln.getTimeToExpiry();j>3e4&&(b=setTimeout(async()=>{try{await Za.refreshAccessToken(),a(ln.getToken()),S()}catch(M){console.error("Background refresh failed:",M),alert("Sorry but your session has expired. Please login again!"),u()}},j-3e4))};return w.useEffect(()=>(e&&(S(),y()),()=>clearTimeout(b)),[e]),{signup:l,login:d,logout:u,isAuthenticated:p,sendCode:m,updatePassword:g,updateProfileImage:v,user:r}},TS=w.createContext(),kA=({children:e})=>{const a=OA();return h.jsx(TS.Provider,{value:a,children:e})},zr=()=>w.useContext(TS);function x1({processImage:e,isDisabled:a,name:r}){return h.jsxs(LA,{onClick:e,$disabled:a,$buttonDisabled:a,children:[r,h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})}),h.jsx("div",{children:h.jsxs("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 784.11 815.53",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd"},version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("defs",{}),h.jsxs("g",{id:"Layer_x0020_1",children:[h.jsx("metadata",{id:"CorelCorpID_0Corel-Layer"}),h.jsx("path",{d:"M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"})]})]})})]})}const LA=C.button`
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
`;var NA={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function ES(e){if(typeof e=="number")return{value:e,unit:"px"};var a,r=(e.match(/^[0-9.]*/)||"").toString();r.includes(".")?a=parseFloat(r):a=parseInt(r,10);var o=(e.match(/[^0-9]*$/)||"").toString();return NA[o]?{value:a,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}function Wc(e){var a=ES(e);return"".concat(a.value).concat(a.unit)}var b1=function(e,a,r){var o="react-spinners-".concat(e,"-").concat(r);if(typeof window>"u"||!window.document)return o;var l=document.createElement("style");document.head.appendChild(l);var d=l.sheet,u=`
    @keyframes `.concat(o,` {
      `).concat(a,`
    }
  `);return d&&d.insertRule(u,0),o},Du;(function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"})(Du||(Du={}));var _A=function(e,a){if(e.includes("/"))return e.replace("rgb(","rgba(");var r=e.substring(e.startsWith("rgba(")?5:4,e.length-1).trim(),o=r.split(",");return o.length===4?e.replace("rgb(","rgba("):o.length===3?"rgba(".concat(r,", ").concat(a,")"):"rgba(".concat(r," / ").concat(a,")")},UA=function(e,a){if(e.startsWith("rgb"))return _A(e,a);if(Object.keys(Du).includes(e)&&(e=Du[e]),e[0]==="#"&&(e=e.slice(1)),e.length===3){var r="";e.split("").forEach(function(l){r+=l,r+=l}),e=r}var o=(e.match(/.{2}/g)||[]).map(function(l){return parseInt(l,16)}).join(", ");return"rgba(".concat(o,", ").concat(a,")")},zu=function(){return zu=Object.assign||function(e){for(var a,r=1,o=arguments.length;r<o;r++){a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},zu.apply(this,arguments)},VA=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)a.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(r[o[l]]=e[o[l]]);return r};function Pi(e){var a=e.loading,r=a===void 0?!0:a,o=e.color,l=o===void 0?"#000000":o,d=e.speedMultiplier,u=d===void 0?1:d,m=e.cssOverride,g=m===void 0?{}:m,p=e.size,y=p===void 0?50:p,v=VA(e,["loading","color","speedMultiplier","cssOverride","size"]),b=ES(y),S=b.value,j=b.unit,M=zu({display:"inherit",position:"relative",width:Wc(y),height:Wc(y),transform:"rotate(165deg)"},g),R=S/5,E=(S-R)/2,D=E-R,N=UA(l,.75),G=b1("HashLoader","0% {width: ".concat(R,"px; box-shadow: ").concat(E,"px ").concat(-D,"px ").concat(N,", ").concat(-E,"px ").concat(D,"px ").concat(N,`}
    35% {width: `).concat(Wc(y),"; box-shadow: 0 ").concat(-D,"px ").concat(N,", 0 ").concat(D,"px ").concat(N,`}
    70% {width: `).concat(R,"px; box-shadow: ").concat(-E,"px ").concat(-D,"px ").concat(N,", ").concat(E,"px ").concat(D,"px ").concat(N,`}
    100% {box-shadow: `).concat(E,"px ").concat(-D,"px ").concat(N,", ").concat(-E,"px ").concat(D,"px ").concat(N,"}"),"before"),H=b1("HashLoader","0% {height: ".concat(R,"px; box-shadow: ").concat(D,"px ").concat(E,"px ").concat(l,", ").concat(-D,"px ").concat(-E,"px ").concat(l,`}
    35% {height: `).concat(Wc(y),"; box-shadow: ").concat(D,"px 0 ").concat(l,", ").concat(-D,"px 0 ").concat(l,`}
    70% {height: `).concat(R,"px; box-shadow: ").concat(D,"px ").concat(-E,"px ").concat(l,", ").concat(-D,"px ").concat(E,"px ").concat(l,`}
    100% {box-shadow: `).concat(D,"px ").concat(E,"px ").concat(l,", ").concat(-D,"px ").concat(-E,"px ").concat(l,"}"),"after"),A=function($){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(S/5).concat(j),height:"".concat(S/5).concat(j),borderRadius:"".concat(S/10).concat(j),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat($===1?G:H," ").concat(2/u,"s infinite")}};return r?w.createElement("span",zu({style:M},v),w.createElement("span",{style:A(1)}),w.createElement("span",{style:A(2)})):null}let BA={data:""},HA=e=>{if(typeof window=="object"){let a=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return a.nonce=window.__nonce__,a.parentNode||(e||document.head).appendChild(a),a.firstChild}return e||BA},$A=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,PA=/\/\*[^]*?\*\/|  +/g,S1=/\n+/g,Fi=(e,a)=>{let r="",o="",l="";for(let d in e){let u=e[d];d[0]=="@"?d[1]=="i"?r=d+" "+u+";":o+=d[1]=="f"?Fi(u,d):d+"{"+Fi(u,d[1]=="k"?"":a)+"}":typeof u=="object"?o+=Fi(u,a?a.replace(/([^,])+/g,m=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,g=>/&/.test(g)?g.replace(/&/g,m):m?m+" "+g:g)):d):u!=null&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=Fi.p?Fi.p(d,u):d+":"+u+";")}return r+(a&&l?a+"{"+l+"}":l)+o},Ka={},jS=e=>{if(typeof e=="object"){let a="";for(let r in e)a+=r+jS(e[r]);return a}return e},FA=(e,a,r,o,l)=>{let d=jS(e),u=Ka[d]||(Ka[d]=(g=>{let p=0,y=11;for(;p<g.length;)y=101*y+g.charCodeAt(p++)>>>0;return"go"+y})(d));if(!Ka[u]){let g=d!==e?e:(p=>{let y,v,b=[{}];for(;y=$A.exec(p.replace(PA,""));)y[4]?b.shift():y[3]?(v=y[3].replace(S1," ").trim(),b.unshift(b[0][v]=b[0][v]||{})):b[0][y[1]]=y[2].replace(S1," ").trim();return b[0]})(e);Ka[u]=Fi(l?{["@keyframes "+u]:g}:g,r?"":"."+u)}let m=r&&Ka.g?Ka.g:null;return r&&(Ka.g=Ka[u]),((g,p,y,v)=>{v?p.data=p.data.replace(v,g):p.data.indexOf(g)===-1&&(p.data=y?g+p.data:p.data+g)})(Ka[u],a,o,m),u},YA=(e,a,r)=>e.reduce((o,l,d)=>{let u=a[d];if(u&&u.call){let m=u(r),g=m&&m.props&&m.props.className||/^go/.test(m)&&m;u=g?"."+g:m&&typeof m=="object"?m.props?"":Fi(m,""):m===!1?"":m}return o+l+(u??"")},"");function Qu(e){let a=this||{},r=e.call?e(a.p):e;return FA(r.unshift?r.raw?YA(r,[].slice.call(arguments,1),a.p):r.reduce((o,l)=>Object.assign(o,l&&l.call?l(a.p):l),{}):r,HA(a.target),a.g,a.o,a.k)}let CS,dm,fm;Qu.bind({g:1});let ei=Qu.bind({k:1});function XA(e,a,r,o){Fi.p=a,CS=e,dm=r,fm=o}function qi(e,a){let r=this||{};return function(){let o=arguments;function l(d,u){let m=Object.assign({},d),g=m.className||l.className;r.p=Object.assign({theme:dm&&dm()},m),r.o=/ *go\d+/.test(g),m.className=Qu.apply(r,o)+(g?" "+g:"");let p=e;return e[0]&&(p=m.as||e,delete m.as),fm&&p[0]&&fm(m),CS(p,m)}return l}}var GA=e=>typeof e=="function",Ou=(e,a)=>GA(e)?e(a):e,qA=(()=>{let e=0;return()=>(++e).toString()})(),AS=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");e=!a||a.matches}return e}})(),IA=20,np="default",RS=(e,a)=>{let{toastLimit:r}=e.settings;switch(a.type){case 0:return{...e,toasts:[a.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(u=>u.id===a.toast.id?{...u,...a.toast}:u)};case 2:let{toast:o}=a;return RS(e,{type:e.toasts.find(u=>u.id===o.id)?1:0,toast:o});case 3:let{toastId:l}=a;return{...e,toasts:e.toasts.map(u=>u.id===l||l===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return a.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(u=>u.id!==a.toastId)};case 5:return{...e,pausedAt:a.time};case 6:let d=a.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+d}))}}},vu=[],MS={toasts:[],pausedAt:void 0,settings:{toastLimit:IA}},ja={},DS=(e,a=np)=>{ja[a]=RS(ja[a]||MS,e),vu.forEach(([r,o])=>{r===a&&o(ja[a])})},zS=e=>Object.keys(ja).forEach(a=>DS(e,a)),KA=e=>Object.keys(ja).find(a=>ja[a].toasts.some(r=>r.id===e)),Zu=(e=np)=>a=>{DS(a,e)},QA={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ZA=(e={},a=np)=>{let[r,o]=w.useState(ja[a]||MS),l=w.useRef(ja[a]);w.useEffect(()=>(l.current!==ja[a]&&o(ja[a]),vu.push([a,o]),()=>{let u=vu.findIndex(([m])=>m===a);u>-1&&vu.splice(u,1)}),[a]);let d=r.toasts.map(u=>{var m,g,p;return{...e,...e[u.type],...u,removeDelay:u.removeDelay||((m=e[u.type])==null?void 0:m.removeDelay)||e?.removeDelay,duration:u.duration||((g=e[u.type])==null?void 0:g.duration)||e?.duration||QA[u.type],style:{...e.style,...(p=e[u.type])==null?void 0:p.style,...u.style}}});return{...r,toasts:d}},WA=(e,a="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||qA()}),Al=e=>(a,r)=>{let o=WA(a,e,r);return Zu(o.toasterId||KA(o.id))({type:2,toast:o}),o.id},Ut=(e,a)=>Al("blank")(e,a);Ut.error=Al("error");Ut.success=Al("success");Ut.loading=Al("loading");Ut.custom=Al("custom");Ut.dismiss=(e,a)=>{let r={type:3,toastId:e};a?Zu(a)(r):zS(r)};Ut.dismissAll=e=>Ut.dismiss(void 0,e);Ut.remove=(e,a)=>{let r={type:4,toastId:e};a?Zu(a)(r):zS(r)};Ut.removeAll=e=>Ut.remove(void 0,e);Ut.promise=(e,a,r)=>{let o=Ut.loading(a.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(l=>{let d=a.success?Ou(a.success,l):void 0;return d?Ut.success(d,{id:o,...r,...r?.success}):Ut.dismiss(o),l}).catch(l=>{let d=a.error?Ou(a.error,l):void 0;d?Ut.error(d,{id:o,...r,...r?.error}):Ut.dismiss(o)}),e};var JA=1e3,e3=(e,a="default")=>{let{toasts:r,pausedAt:o}=ZA(e,a),l=w.useRef(new Map).current,d=w.useCallback((v,b=JA)=>{if(l.has(v))return;let S=setTimeout(()=>{l.delete(v),u({type:4,toastId:v})},b);l.set(v,S)},[]);w.useEffect(()=>{if(o)return;let v=Date.now(),b=r.map(S=>{if(S.duration===1/0)return;let j=(S.duration||0)+S.pauseDuration-(v-S.createdAt);if(j<0){S.visible&&Ut.dismiss(S.id);return}return setTimeout(()=>Ut.dismiss(S.id,a),j)});return()=>{b.forEach(S=>S&&clearTimeout(S))}},[r,o,a]);let u=w.useCallback(Zu(a),[a]),m=w.useCallback(()=>{u({type:5,time:Date.now()})},[u]),g=w.useCallback((v,b)=>{u({type:1,toast:{id:v,height:b}})},[u]),p=w.useCallback(()=>{o&&u({type:6,time:Date.now()})},[o,u]),y=w.useCallback((v,b)=>{let{reverseOrder:S=!1,gutter:j=8,defaultPosition:M}=b||{},R=r.filter(N=>(N.position||M)===(v.position||M)&&N.height),E=R.findIndex(N=>N.id===v.id),D=R.filter((N,G)=>G<E&&N.visible).length;return R.filter(N=>N.visible).slice(...S?[D+1]:[0,D]).reduce((N,G)=>N+(G.height||0)+j,0)},[r]);return w.useEffect(()=>{r.forEach(v=>{if(v.dismissed)d(v.id,v.removeDelay);else{let b=l.get(v.id);b&&(clearTimeout(b),l.delete(v.id))}})},[r,d]),{toasts:r,handlers:{updateHeight:g,startPause:m,endPause:p,calculateOffset:y}}},t3=ei`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,n3=ei`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,a3=ei`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,i3=qi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${t3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${n3} 0.15s ease-out forwards;
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
    animation: ${a3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,r3=ei`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,o3=qi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${r3} 1s linear infinite;
`,s3=ei`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,l3=ei`
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
}`,c3=qi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${s3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${l3} 0.2s ease-out forwards;
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
`,u3=qi("div")`
  position: absolute;
`,d3=qi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,f3=ei`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,h3=qi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${f3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,m3=({toast:e})=>{let{icon:a,type:r,iconTheme:o}=e;return a!==void 0?typeof a=="string"?w.createElement(h3,null,a):a:r==="blank"?null:w.createElement(d3,null,w.createElement(o3,{...o}),r!=="loading"&&w.createElement(u3,null,r==="error"?w.createElement(i3,{...o}):w.createElement(c3,{...o})))},p3=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,g3=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,y3="0%{opacity:0;} 100%{opacity:1;}",v3="0%{opacity:1;} 100%{opacity:0;}",x3=qi("div")`
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
`,b3=qi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,S3=(e,a)=>{let r=e.includes("top")?1:-1,[o,l]=AS()?[y3,v3]:[p3(r),g3(r)];return{animation:a?`${ei(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ei(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},w3=w.memo(({toast:e,position:a,style:r,children:o})=>{let l=e.height?S3(e.position||a||"top-center",e.visible):{opacity:0},d=w.createElement(m3,{toast:e}),u=w.createElement(b3,{...e.ariaProps},Ou(e.message,e));return w.createElement(x3,{className:e.className,style:{...l,...r,...e.style}},typeof o=="function"?o({icon:d,message:u}):w.createElement(w.Fragment,null,d,u))});XA(w.createElement);var T3=({id:e,className:a,style:r,onHeightUpdate:o,children:l})=>{let d=w.useCallback(u=>{if(u){let m=()=>{let g=u.getBoundingClientRect().height;o(e,g)};m(),new MutationObserver(m).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return w.createElement("div",{ref:d,className:a,style:r},l)},E3=(e,a)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:AS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(r?1:-1)}px)`,...o,...l}},j3=Qu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Jc=16,OS=({reverseOrder:e,position:a="top-center",toastOptions:r,gutter:o,children:l,toasterId:d,containerStyle:u,containerClassName:m})=>{let{toasts:g,handlers:p}=e3(r,d);return w.createElement("div",{"data-rht-toaster":d||"",style:{position:"fixed",zIndex:9999,top:Jc,left:Jc,right:Jc,bottom:Jc,pointerEvents:"none",...u},className:m,onMouseEnter:p.startPause,onMouseLeave:p.endPause},g.map(y=>{let v=y.position||a,b=p.calculateOffset(y,{reverseOrder:e,gutter:o,defaultPosition:a}),S=E3(v,b);return w.createElement(T3,{id:y.id,key:y.id,onHeightUpdate:p.updateHeight,className:y.visible?j3:"",style:S},y.type==="custom"?Ou(y.message,y):l?l(y):w.createElement(w3,{toast:y,position:v}))}))};const st={notifySuccess:e=>{Ut.success(e)},notifyError:e=>{Ut.error(e)}};function C3({disabled:e,mode:a,setMode:r}){return h.jsx(D3,{children:h.jsxs(z3,{disabled:e,role:"switch","aria-checked":a==="remove",children:[h.jsx("input",{id:"switch-opt-1",type:"radio",name:"flip-switch",checked:a==="add",onChange:()=>r("add"),disabled:e}),h.jsx("input",{id:"switch-opt-2",type:"radio",name:"flip-switch",checked:a==="remove",onChange:()=>r("remove"),disabled:e}),h.jsxs("label",{htmlFor:"switch-opt-1",title:"Add mask",children:[h.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:h.jsx("path",{d:"M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"})}),h.jsx("span",{children:"Add Mask"})]}),h.jsxs("label",{htmlFor:"switch-opt-2",title:"Remove mask",children:[h.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:h.jsx("path",{d:"M5 11h14v2H5z"})}),h.jsx("span",{children:"Remove Mask"})]}),h.jsxs(hm,{"aria-hidden":"true",children:[h.jsx(O3,{}),h.jsx(k3,{})]})]})})}const A3=ct`
  0% {
    transform: translateX(0%) rotateY(0deg);
  }
  50% {
    transform: translateX(50%) rotateY(90deg) scale(1.05);
  }
  100% {
    transform: translateX(100%) rotateY(180deg) scale(1);
  }  
`,R3=ct`
  0% {
    transform: translateX(100%) rotateY(180deg);
  }
  50% {
    transform: translateX(50%) rotateY(90deg) scale(1.05);
  }
  100% {
    transform: translateX(0%) rotateY(0deg) scale(1);
  }
`,M3=ct`
  from {
    box-shadow: 0 0 5px var(--highlight-color);
  }
  to {
    box-shadow:
      0 0 15px var(--highlight-color),
      0 0 25px var(--highlight-color);
  }
`,D3=C.div`
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
`,hm=C.div`
  position: absolute;
  width: var(--card-width);
  height: var(--card-height);
  z-index: 2;
  transform-style: preserve-3d;
  transform-origin: center;
  pointer-events: none;
`,z3=C.div`
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
    animation: ${M3} 1.5s infinite alternate;
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
    animation: ${A3} 0.52s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }

  /* When opt-1 (add) is checked -> flip to left (initial state) */
  input#switch-opt-1:checked ~ ${hm} {
    animation: ${R3} 0.52s cubic-bezier(0.76, 0, 0.24, 1) forwards;
  }
`,kS=`
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
`,O3=C.div`
  ${kS}
  background: var(--card-front-bg);
  transform: translateZ(0) rotateY(0deg);
`,k3=C.div`
  ${kS}
  background: var(--card-back-bg);
  transform: rotateY(180deg);
`;function L3({imageURL:e,loading:a,setLoading:r,imageObj:o,setImageObj:l,setSelectedSegments:d,setIsBeingCustomized:u,segmentationService:m}){const[g,p]=w.useState([]),[y,v]=w.useState([]),[b,S]=w.useState([]),[j,M]=w.useState([]),[R,E]=w.useState(null),[D,N]=w.useState("add"),[G,H]=w.useState([]),[A,$]=w.useState([]),[P,Z]=w.useState(!1),[ne,me]=w.useState([]),[Le,ye]=w.useState("idle"),ve=w.useRef(null);w.useEffect(()=>{m.connect()&&Z(!0);const oe=ve.current;if(!oe)return;const ie=fe=>fe.preventDefault();return oe.addEventListener("contextmenu",ie),()=>oe.removeEventListener("contextmenu",ie)},[]);const Ue=m.subscribeToMasks(ae=>{if(ae?.error){st.notifyError(`Segmentation failed. Please try again.
${ae.error}`),ye("idle"),r(!1);return}else if(ae?.masks&&ae?.boxes){const oe=z(ae.masks);me(ae.boxes),p(oe)}else{const oe=z(ae.masks);p(oe)}ye("completed"),r(!1)});w.useEffect(()=>()=>{Ue()}),w.useEffect(()=>{if(!e||!ve.current)return;const ae=new Image;ae.src=e,ae.onload=()=>{const oe=ve.current;oe.width=ae.width,oe.height=ae.height;const ie=oe.getContext("2d",{willReadFrequently:!0});ie.clearRect(0,0,oe.width,oe.height),ie.drawImage(ae,0,0,oe.width,oe.height),l(ae)}},[e]),w.useEffect(()=>{if(!g.length)return;const ae=[],oe=[];g.forEach(ie=>{const fe=ie.length,ze=ie[0].length,Ae=document.createElement("canvas");Ae.width=ze,Ae.height=fe;const Oe=Ae.getContext("2d",{willReadFrequently:!0}),Me=Oe.createImageData(ze,fe);for(let jt=0;jt<fe;jt++)for(let Ct=0;Ct<ze;Ct++){const an=(jt*ze+Ct)*4;ie[jt][Ct]===1?(Me.data[an]=0,Me.data[an+1]=150,Me.data[an+2]=255,Me.data[an+3]=100):Me.data[an+3]=0}Oe.putImageData(Me,0,0),ae.push(Ae);const ut=document.createElement("canvas");ut.width=ze,ut.height=fe;const Et=ut.getContext("2d",{willReadFrequently:!0}),nn=Et.createImageData(ze,fe);for(let jt=0;jt<fe;jt++)for(let Ct=0;Ct<ze;Ct++)if(ie[jt][Ct]===1&&[ie[jt-1]?.[Ct]||0,ie[jt+1]?.[Ct]||0,ie[jt]?.[Ct-1]||0,ie[jt]?.[Ct+1]||0].some(Sn=>Sn===0)){const Sn=(jt*ze+Ct)*4;nn.data[Sn]=255,nn.data[Sn+1]=105,nn.data[Sn+2]=180,nn.data[Sn+3]=255}Et.putImageData(nn,0,0),oe.push(ut)}),v(ae),S(oe)},[g]);const z=ae=>{if(!Array.isArray(ae)||ae.length===0)return[];const oe=ae.length,ie=ae[0].length;let fe=0;for(let Ae=0;Ae<oe;Ae++)for(let Oe=0;Oe<ie;Oe++)fe=Math.max(fe,ae[Ae][Oe]);const ze=Array.from({length:fe},()=>Array.from({length:oe},()=>Array(ie).fill(0)));for(let Ae=0;Ae<oe;Ae++)for(let Oe=0;Oe<ie;Oe++){const Me=ae[Ae][Oe];Me>0&&(ze[Me-1][Ae][Oe]=1)}return ze},U=async()=>{if(!e)return;ye("uploading"),r(!0);const ae=await fetch(e).then(fe=>fe.blob()),oe=new File([ae],"photo.jpg",{type:ae.type||"image/jpeg"}),ie=new FormData;ie.append("image",oe),await m.segment(ie).then(fe=>{fe?.error?(st.notifyError(`Segmentation failed: ${fe.error}`),ye("idle"),r(!1)):ye("segmenting")}).catch(fe=>{st.notifyError(`Segmentation failed. Please try again.
${fe}`),r(!1),ye("idle")})},I=()=>{let ae=ne,oe=ne,ie=[];return G.length>0&&ae.filter(fe=>{G.forEach(ze=>{if(ze[0]>fe[0]&&ze[0]<fe[2]&&ze[1]<fe[1]&&ze[1]>fe[3])return!0})}),A.length>0&&oe.filter(fe=>{A.forEach(ze=>{if(ze[0]>fe[0]&&ze[0]<fe[2]&&ze[1]<fe[1]&&ze[1]>fe[3])return!0})}),ie=ae,oe.forEach(fe=>{ie.includes(fe)||ie.push(fe)}),ie};function se(ae){return ae.map(oe=>oe.map(ie=>Math.round(ie)))}const ue=async()=>{if(!e)return;if(G.length===0&&A.length===0){st.notifyError("Please provide selected or deselected points for re-segmentation.");return}ye("uploading"),r(!0);const ae=await fetch(e).then(ie=>ie.blob());new File([ae],"photo.jpg",{type:ae.type||"image/jpeg"});const oe={pos_points:se(G),neg_points:se(A),boxes:I()};await m.resegment(oe).then(ie=>{if(ie.ok)ye("segmenting");else return ie.json()}).then(ie=>{ie&&ie.error&&(st.notifyError(`Segmentation failed: ${ie.error}`),ye("idle"),r(!1))}).catch(ie=>{st.notifyError(`Segmentation failed. Please try again.
${ie}`),r(!1),ye("idle")})},k=ae=>{const oe=ve.current;if(!oe||!y.length)return;const ie=oe.getBoundingClientRect(),fe=(ae.clientX-ie.left)/ie.width*oe.width,ze=(ae.clientY-ie.top)/ie.height*oe.height;let Ae=null;for(let Oe=y.length-1;Oe>=0;Oe--){const Me=y[Oe].getContext("2d",{willReadFrequently:!0}),ut=Math.floor(fe*y[Oe].width/oe.width),Et=Math.floor(ze*y[Oe].height/oe.height);if(Me.getImageData(ut,Et,1,1).data[3]>0){Ae=Oe;break}}E(Ae)},q=(ae,oe)=>{const ie=ve.current;if(!ie||!y.length)return;const fe=ie.getBoundingClientRect(),ze=(ae.clientX-fe.left)/fe.width*ie.width,Ae=(ae.clientY-fe.top)/fe.height*ie.height;let Oe=null;for(let Me=y.length-1;Me>=0;Me--){const ut=y[Me].getContext("2d",{willReadFrequently:!0}),Et=Math.floor(ze*y[Me].width/ie.width),nn=Math.floor(Ae*y[Me].height/ie.height);if(ut.getImageData(Et,nn,1,1).data[3]>0){Oe=Me;break}}Oe!==null&&(oe==="add"?j.includes(Oe)||(M([...j,Oe]),d(Me=>[...Me,g[Oe]]),H(Me=>[...Me,[ze,Ae]])):(M(j.filter(Me=>Me!==Oe)),d(Me=>Me.filter(ut=>ut!==g[Oe])),$(Me=>[...Me,[ze,Ae]])))},te=ae=>q(ae,"add"),le=ae=>q(ae,"remove"),pe=()=>{const ae=ve.current;if(!ae||!o)return;const oe=ae.getContext("2d",{willReadFrequently:!0});oe.clearRect(0,0,ae.width,ae.height),oe.imageSmoothingEnabled=!1,oe.globalAlpha=1,oe.drawImage(o,0,0,ae.width,ae.height);const ie=(Ae,Oe,Me)=>{const ut=document.createElement("canvas");ut.width=Ae.width,ut.height=Ae.height;const Et=ut.getContext("2d",{willReadFrequently:!0});Et.drawImage(Ae,0,0),Et.globalCompositeOperation="source-in",Et.fillStyle=Oe,Et.globalAlpha=Me,Et.fillRect(0,0,ut.width,ut.height),oe.drawImage(ut,0,0,ae.width,ae.height)};y.forEach((Ae,Oe)=>{!j.includes(Oe)&&R!==Oe&&ie(Ae,"rgba(0,150,255,1)",.5)}),R!==null&&!j.includes(R)&&ie(y[R],"rgba(255,105,180,1)",.6);let fe=["#00ffd5","#fc218f","#ff0000","#4a4902","#ff0000"],ze=0;j.forEach(Ae=>{ie(y[Ae],fe[ze%fe.length],.95);const Oe=b[Ae];Oe&&oe.drawImage(Oe,0,0,ae.width,ae.height),ze++}),G.forEach(([Ae,Oe])=>{oe.beginPath(),oe.arc(Ae,Oe,12,0,2*Math.PI),oe.fillStyle="rgba(255,105,180,1)",oe.fill()}),A.forEach(([Ae,Oe])=>{oe.beginPath(),oe.arc(Ae,Oe,12,0,2*Math.PI),oe.fillStyle="rgba(0,150,255,1)",oe.fill()})};w.useEffect(()=>{pe()},[R,j,y,b,o,G,A]);const Te=()=>{if(j.length>1){st.notifyError("You must select just one segment to search for!");return}u(!0)};return h.jsxs("div",{style:{position:"relative",width:"100%",textAlign:"center",animation:"fadeIn 0.5s"},children:[P?h.jsxs(w1,{children:[h.jsx(Pi,{size:50,color:"#fff"}),h.jsx("p",{children:"Connecting to segmentation server..."})]}):h.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[h.jsx(N3,{ref:ve,onClick:D==="add"?te:le,onContextMenu:j.length?le:te,onMouseMove:k,onMouseLeave:()=>E(null),$imageURL:e,$loading:a}),a&&h.jsx(w1,{children:h.jsxs(_3,{children:[h.jsx(Pi,{size:50,color:"#fff"}),Le==="uploading"&&h.jsx("p",{children:"Uploading image..."}),Le==="segmenting"&&h.jsx("p",{children:"Segmenting image, please wait..."}),h.jsx(T1,{onClick:()=>{r(!1),m.endSession(),ye("idle")},$bgColor:"orange",$bgColorHover:"red",children:"Cancel"})]})})]}),h.jsxs("div",{style:{marginTop:10},children:[g.length===0?h.jsx(x1,{processImage:U,isDisabled:!e||a,name:"Segment"}):h.jsx(x1,{processImage:ue,isDisabled:!e||a,name:"Re-segment"}),j.length!==0&&h.jsx(T1,{onClick:Te,$bgColor:"rgba(255,105,180,1)",$marginLeft:"1rem",children:"Send Selected"})]}),h.jsx("div",{style:{marginTop:10,opacity:g.length===0?"0":"1",transition:"all 1s"},children:h.jsx(C3,{disabled:j.length===0,mode:D,setMode:N})})]})}const LS=ct`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,N3=C.canvas`
  display: ${e=>e.$imageURL?"block":"none"};
  border: none;
  max-width: 100%;
  filter: ${e=>e.$loading?"blur(20px)":"none"};
  animation: ${LS} 1.5s;
`,w1=C.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--text-color);
`,T1=C.button`
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
  animation: ${LS} 0.5s;

  &:hover {
    background-color: ${e=>e?.$bgColorHover||"#6BCB77"};
  }
`,_3=C.div`
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
`,NS=w.createContext({});function ap(e){const a=w.useRef(null);return a.current===null&&(a.current=e()),a.current}const ip=typeof window<"u",_S=ip?w.useLayoutEffect:w.useEffect,rp=w.createContext(null);function op(e,a){e.indexOf(a)===-1&&e.push(a)}function Wu(e,a){const r=e.indexOf(a);r>-1&&e.splice(r,1)}const ti=(e,a,r)=>r>a?a:r<e?e:r;let sp=()=>{};const ni={},US=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function VS(e){return typeof e=="object"&&e!==null}const BS=e=>/^0[^.\s]+$/u.test(e);function lp(e){let a;return()=>(a===void 0&&(a=e()),a)}const ea=e=>e,U3=(e,a)=>r=>a(e(r)),Rl=(...e)=>e.reduce(U3),Vo=(e,a,r)=>{const o=a-e;return o===0?1:(r-e)/o};class cp{constructor(){this.subscriptions=[]}add(a){return op(this.subscriptions,a),()=>Wu(this.subscriptions,a)}notify(a,r,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](a,r,o);else for(let d=0;d<l;d++){const u=this.subscriptions[d];u&&u(a,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fa=e=>e*1e3,Jn=e=>e/1e3;function HS(e,a){return a?e*(1e3/a):0}const V3=(e,a,r)=>{const o=a-e;return((r-e)%o+o)%o+e},$S=(e,a,r)=>(((1-3*r+3*a)*e+(3*r-6*a))*e+3*a)*e,B3=1e-7,H3=12;function $3(e,a,r,o,l){let d,u,m=0;do u=a+(r-a)/2,d=$S(u,o,l)-e,d>0?r=u:a=u;while(Math.abs(d)>B3&&++m<H3);return u}function Ml(e,a,r,o){if(e===a&&r===o)return ea;const l=d=>$3(d,0,1,e,r);return d=>d===0||d===1?d:$S(l(d),a,o)}const PS=e=>a=>a<=.5?e(2*a)/2:(2-e(2*(1-a)))/2,FS=e=>a=>1-e(1-a),YS=Ml(.33,1.53,.69,.99),up=FS(YS),XS=PS(up),GS=e=>(e*=2)<1?.5*up(e):.5*(2-Math.pow(2,-10*(e-1))),dp=e=>1-Math.sin(Math.acos(e)),qS=FS(dp),IS=PS(dp),P3=Ml(.42,0,1,1),F3=Ml(0,0,.58,1),KS=Ml(.42,0,.58,1),QS=e=>Array.isArray(e)&&typeof e[0]!="number";function ZS(e,a){return QS(e)?e[V3(0,e.length,a)]:e}const WS=e=>Array.isArray(e)&&typeof e[0]=="number",Y3={linear:ea,easeIn:P3,easeInOut:KS,easeOut:F3,circIn:dp,circInOut:IS,circOut:qS,backIn:up,backInOut:XS,backOut:YS,anticipate:GS},X3=e=>typeof e=="string",E1=e=>{if(WS(e)){sp(e.length===4);const[a,r,o,l]=e;return Ml(a,r,o,l)}else if(X3(e))return Y3[e];return e},eu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function G3(e,a){let r=new Set,o=new Set,l=!1,d=!1;const u=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function g(y){u.has(y)&&(p.schedule(y),e()),y(m)}const p={schedule:(y,v=!1,b=!1)=>{const j=b&&l?r:o;return v&&u.add(y),j.has(y)||j.add(y),y},cancel:y=>{o.delete(y),u.delete(y)},process:y=>{if(m=y,l){d=!0;return}l=!0,[r,o]=[o,r],r.forEach(g),r.clear(),l=!1,d&&(d=!1,p.process(y))}};return p}const q3=40;function JS(e,a){let r=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},d=()=>r=!0,u=eu.reduce((N,G)=>(N[G]=G3(d),N),{}),{setup:m,read:g,resolveKeyframes:p,preUpdate:y,update:v,preRender:b,render:S,postRender:j}=u,M=()=>{const N=ni.useManualTiming?l.timestamp:performance.now();r=!1,ni.useManualTiming||(l.delta=o?1e3/60:Math.max(Math.min(N-l.timestamp,q3),1)),l.timestamp=N,l.isProcessing=!0,m.process(l),g.process(l),p.process(l),y.process(l),v.process(l),b.process(l),S.process(l),j.process(l),l.isProcessing=!1,r&&a&&(o=!1,e(M))},R=()=>{r=!0,o=!0,l.isProcessing||e(M)};return{schedule:eu.reduce((N,G)=>{const H=u[G];return N[G]=(A,$=!1,P=!1)=>(r||R(),H.schedule(A,$,P)),N},{}),cancel:N=>{for(let G=0;G<eu.length;G++)u[eu[G]].cancel(N)},state:l,steps:u}}const{schedule:pt,cancel:ai,state:Wt,steps:Ah}=JS(typeof requestAnimationFrame<"u"?requestAnimationFrame:ea,!0);let xu;function I3(){xu=void 0}const vn={now:()=>(xu===void 0&&vn.set(Wt.isProcessing||ni.useManualTiming?Wt.timestamp:performance.now()),xu),set:e=>{xu=e,queueMicrotask(I3)}},ew=e=>a=>typeof a=="string"&&a.startsWith(e),fp=ew("--"),K3=ew("var(--"),hp=e=>K3(e)?Q3.test(e.split("/*")[0].trim()):!1,Q3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$o={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},dl={...$o,transform:e=>ti(0,1,e)},tu={...$o,default:1},Ws=e=>Math.round(e*1e5)/1e5,mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Z3(e){return e==null}const W3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pp=(e,a)=>r=>!!(typeof r=="string"&&W3.test(r)&&r.startsWith(e)||a&&!Z3(r)&&Object.prototype.hasOwnProperty.call(r,a)),tw=(e,a,r)=>o=>{if(typeof o!="string")return o;const[l,d,u,m]=o.match(mp);return{[e]:parseFloat(l),[a]:parseFloat(d),[r]:parseFloat(u),alpha:m!==void 0?parseFloat(m):1}},J3=e=>ti(0,255,e),Rh={...$o,transform:e=>Math.round(J3(e))},jr={test:pp("rgb","red"),parse:tw("red","green","blue"),transform:({red:e,green:a,blue:r,alpha:o=1})=>"rgba("+Rh.transform(e)+", "+Rh.transform(a)+", "+Rh.transform(r)+", "+Ws(dl.transform(o))+")"};function e4(e){let a="",r="",o="",l="";return e.length>5?(a=e.substring(1,3),r=e.substring(3,5),o=e.substring(5,7),l=e.substring(7,9)):(a=e.substring(1,2),r=e.substring(2,3),o=e.substring(3,4),l=e.substring(4,5),a+=a,r+=r,o+=o,l+=l),{red:parseInt(a,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const mm={test:pp("#"),parse:e4,transform:jr.transform},Dl=e=>({test:a=>typeof a=="string"&&a.endsWith(e)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${e}`}),Bi=Dl("deg"),Aa=Dl("%"),ke=Dl("px"),t4=Dl("vh"),n4=Dl("vw"),j1={...Aa,parse:e=>Aa.parse(e)/100,transform:e=>Aa.transform(e*100)},Co={test:pp("hsl","hue"),parse:tw("hue","saturation","lightness"),transform:({hue:e,saturation:a,lightness:r,alpha:o=1})=>"hsla("+Math.round(e)+", "+Aa.transform(Ws(a))+", "+Aa.transform(Ws(r))+", "+Ws(dl.transform(o))+")"},Nt={test:e=>jr.test(e)||mm.test(e)||Co.test(e),parse:e=>jr.test(e)?jr.parse(e):Co.test(e)?Co.parse(e):mm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?jr.transform(e):Co.transform(e),getAnimatableNone:e=>{const a=Nt.parse(e);return a.alpha=0,Nt.transform(a)}},a4=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function i4(e){return isNaN(e)&&typeof e=="string"&&(e.match(mp)?.length||0)+(e.match(a4)?.length||0)>0}const nw="number",aw="color",r4="var",o4="var(",C1="${}",s4=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function fl(e){const a=e.toString(),r=[],o={color:[],number:[],var:[]},l=[];let d=0;const m=a.replace(s4,g=>(Nt.test(g)?(o.color.push(d),l.push(aw),r.push(Nt.parse(g))):g.startsWith(o4)?(o.var.push(d),l.push(r4),r.push(g)):(o.number.push(d),l.push(nw),r.push(parseFloat(g))),++d,C1)).split(C1);return{values:r,split:m,indexes:o,types:l}}function iw(e){return fl(e).values}function rw(e){const{split:a,types:r}=fl(e),o=a.length;return l=>{let d="";for(let u=0;u<o;u++)if(d+=a[u],l[u]!==void 0){const m=r[u];m===nw?d+=Ws(l[u]):m===aw?d+=Nt.transform(l[u]):d+=l[u]}return d}}const l4=e=>typeof e=="number"?0:Nt.test(e)?Nt.getAnimatableNone(e):e;function c4(e){const a=iw(e);return rw(e)(a.map(l4))}const Xi={test:i4,parse:iw,createTransformer:rw,getAnimatableNone:c4};function Mh(e,a,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(a-e)*6*r:r<1/2?a:r<2/3?e+(a-e)*(2/3-r)*6:e}function u4({hue:e,saturation:a,lightness:r,alpha:o}){e/=360,a/=100,r/=100;let l=0,d=0,u=0;if(!a)l=d=u=r;else{const m=r<.5?r*(1+a):r+a-r*a,g=2*r-m;l=Mh(g,m,e+1/3),d=Mh(g,m,e),u=Mh(g,m,e-1/3)}return{red:Math.round(l*255),green:Math.round(d*255),blue:Math.round(u*255),alpha:o}}function ku(e,a){return r=>r>0?a:e}const xt=(e,a,r)=>e+(a-e)*r,Dh=(e,a,r)=>{const o=e*e,l=r*(a*a-o)+o;return l<0?0:Math.sqrt(l)},d4=[mm,jr,Co],f4=e=>d4.find(a=>a.test(e));function A1(e){const a=f4(e);if(!a)return!1;let r=a.parse(e);return a===Co&&(r=u4(r)),r}const R1=(e,a)=>{const r=A1(e),o=A1(a);if(!r||!o)return ku(e,a);const l={...r};return d=>(l.red=Dh(r.red,o.red,d),l.green=Dh(r.green,o.green,d),l.blue=Dh(r.blue,o.blue,d),l.alpha=xt(r.alpha,o.alpha,d),jr.transform(l))},pm=new Set(["none","hidden"]);function h4(e,a){return pm.has(e)?r=>r<=0?e:a:r=>r>=1?a:e}function m4(e,a){return r=>xt(e,a,r)}function gp(e){return typeof e=="number"?m4:typeof e=="string"?hp(e)?ku:Nt.test(e)?R1:y4:Array.isArray(e)?ow:typeof e=="object"?Nt.test(e)?R1:p4:ku}function ow(e,a){const r=[...e],o=r.length,l=e.map((d,u)=>gp(d)(d,a[u]));return d=>{for(let u=0;u<o;u++)r[u]=l[u](d);return r}}function p4(e,a){const r={...e,...a},o={};for(const l in r)e[l]!==void 0&&a[l]!==void 0&&(o[l]=gp(e[l])(e[l],a[l]));return l=>{for(const d in o)r[d]=o[d](l);return r}}function g4(e,a){const r=[],o={color:0,var:0,number:0};for(let l=0;l<a.values.length;l++){const d=a.types[l],u=e.indexes[d][o[d]],m=e.values[u]??0;r[l]=m,o[d]++}return r}const y4=(e,a)=>{const r=Xi.createTransformer(a),o=fl(e),l=fl(a);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?pm.has(e)&&!l.values.length||pm.has(a)&&!o.values.length?h4(e,a):Rl(ow(g4(o,l),l.values),r):ku(e,a)};function sw(e,a,r){return typeof e=="number"&&typeof a=="number"&&typeof r=="number"?xt(e,a,r):gp(e)(e,a)}const v4=e=>{const a=({timestamp:r})=>e(r);return{start:(r=!0)=>pt.update(a,r),stop:()=>ai(a),now:()=>Wt.isProcessing?Wt.timestamp:vn.now()}},lw=(e,a,r=10)=>{let o="";const l=Math.max(Math.round(a/r),2);for(let d=0;d<l;d++)o+=Math.round(e(d/(l-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Lu=2e4;function yp(e){let a=0;const r=50;let o=e.next(a);for(;!o.done&&a<Lu;)a+=r,o=e.next(a);return a>=Lu?1/0:a}function cw(e,a=100,r){const o=r({...e,keyframes:[0,a]}),l=Math.min(yp(o),Lu);return{type:"keyframes",ease:d=>o.next(l*d).value/a,duration:Jn(l)}}const x4=5;function uw(e,a,r){const o=Math.max(a-x4,0);return HS(r-e(o),a-o)}const Tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zh=.001;function b4({duration:e=Tt.duration,bounce:a=Tt.bounce,velocity:r=Tt.velocity,mass:o=Tt.mass}){let l,d,u=1-a;u=ti(Tt.minDamping,Tt.maxDamping,u),e=ti(Tt.minDuration,Tt.maxDuration,Jn(e)),u<1?(l=p=>{const y=p*u,v=y*e,b=y-r,S=gm(p,u),j=Math.exp(-v);return zh-b/S*j},d=p=>{const v=p*u*e,b=v*r+r,S=Math.pow(u,2)*Math.pow(p,2)*e,j=Math.exp(-v),M=gm(Math.pow(p,2),u);return(-l(p)+zh>0?-1:1)*((b-S)*j)/M}):(l=p=>{const y=Math.exp(-p*e),v=(p-r)*e+1;return-zh+y*v},d=p=>{const y=Math.exp(-p*e),v=(r-p)*(e*e);return y*v});const m=5/e,g=w4(l,d,m);if(e=fa(e),isNaN(g))return{stiffness:Tt.stiffness,damping:Tt.damping,duration:e};{const p=Math.pow(g,2)*o;return{stiffness:p,damping:u*2*Math.sqrt(o*p),duration:e}}}const S4=12;function w4(e,a,r){let o=r;for(let l=1;l<S4;l++)o=o-e(o)/a(o);return o}function gm(e,a){return e*Math.sqrt(1-a*a)}const T4=["duration","bounce"],E4=["stiffness","damping","mass"];function M1(e,a){return a.some(r=>e[r]!==void 0)}function j4(e){let a={velocity:Tt.velocity,stiffness:Tt.stiffness,damping:Tt.damping,mass:Tt.mass,isResolvedFromDuration:!1,...e};if(!M1(e,E4)&&M1(e,T4))if(e.visualDuration){const r=e.visualDuration,o=2*Math.PI/(r*1.2),l=o*o,d=2*ti(.05,1,1-(e.bounce||0))*Math.sqrt(l);a={...a,mass:Tt.mass,stiffness:l,damping:d}}else{const r=b4(e);a={...a,...r,mass:Tt.mass},a.isResolvedFromDuration=!0}return a}function hl(e=Tt.visualDuration,a=Tt.bounce){const r=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:a}:e;let{restSpeed:o,restDelta:l}=r;const d=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],m={done:!1,value:d},{stiffness:g,damping:p,mass:y,duration:v,velocity:b,isResolvedFromDuration:S}=j4({...r,velocity:-Jn(r.velocity||0)}),j=b||0,M=p/(2*Math.sqrt(g*y)),R=u-d,E=Jn(Math.sqrt(g/y)),D=Math.abs(R)<5;o||(o=D?Tt.restSpeed.granular:Tt.restSpeed.default),l||(l=D?Tt.restDelta.granular:Tt.restDelta.default);let N;if(M<1){const H=gm(E,M);N=A=>{const $=Math.exp(-M*E*A);return u-$*((j+M*E*R)/H*Math.sin(H*A)+R*Math.cos(H*A))}}else if(M===1)N=H=>u-Math.exp(-E*H)*(R+(j+E*R)*H);else{const H=E*Math.sqrt(M*M-1);N=A=>{const $=Math.exp(-M*E*A),P=Math.min(H*A,300);return u-$*((j+M*E*R)*Math.sinh(P)+H*R*Math.cosh(P))/H}}const G={calculatedDuration:S&&v||null,next:H=>{const A=N(H);if(S)m.done=H>=v;else{let $=H===0?j:0;M<1&&($=H===0?fa(j):uw(N,H,A));const P=Math.abs($)<=o,Z=Math.abs(u-A)<=l;m.done=P&&Z}return m.value=m.done?u:A,m},toString:()=>{const H=Math.min(yp(G),Lu),A=lw($=>G.next(H*$).value,H,30);return H+"ms "+A},toTransition:()=>{}};return G}hl.applyToOptions=e=>{const a=cw(e,100,hl);return e.ease=a.ease,e.duration=fa(a.duration),e.type="keyframes",e};function ym({keyframes:e,velocity:a=0,power:r=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:d=500,modifyTarget:u,min:m,max:g,restDelta:p=.5,restSpeed:y}){const v=e[0],b={done:!1,value:v},S=P=>m!==void 0&&P<m||g!==void 0&&P>g,j=P=>m===void 0?g:g===void 0||Math.abs(m-P)<Math.abs(g-P)?m:g;let M=r*a;const R=v+M,E=u===void 0?R:u(R);E!==R&&(M=E-v);const D=P=>-M*Math.exp(-P/o),N=P=>E+D(P),G=P=>{const Z=D(P),ne=N(P);b.done=Math.abs(Z)<=p,b.value=b.done?E:ne};let H,A;const $=P=>{S(b.value)&&(H=P,A=hl({keyframes:[b.value,j(b.value)],velocity:uw(N,P,b.value),damping:l,stiffness:d,restDelta:p,restSpeed:y}))};return $(0),{calculatedDuration:null,next:P=>{let Z=!1;return!A&&H===void 0&&(Z=!0,G(P),$(P)),H!==void 0&&P>=H?A.next(P-H):(!Z&&G(P),b)}}}function C4(e,a,r){const o=[],l=r||ni.mix||sw,d=e.length-1;for(let u=0;u<d;u++){let m=l(e[u],e[u+1]);if(a){const g=Array.isArray(a)?a[u]||ea:a;m=Rl(g,m)}o.push(m)}return o}function dw(e,a,{clamp:r=!0,ease:o,mixer:l}={}){const d=e.length;if(sp(d===a.length),d===1)return()=>a[0];if(d===2&&a[0]===a[1])return()=>a[1];const u=e[0]===e[1];e[0]>e[d-1]&&(e=[...e].reverse(),a=[...a].reverse());const m=C4(a,o,l),g=m.length,p=y=>{if(u&&y<e[0])return a[0];let v=0;if(g>1)for(;v<e.length-2&&!(y<e[v+1]);v++);const b=Vo(e[v],e[v+1],y);return m[v](b)};return r?y=>p(ti(e[0],e[d-1],y)):p}function fw(e,a){const r=e[e.length-1];for(let o=1;o<=a;o++){const l=Vo(0,a,o);e.push(xt(r,1,l))}}function hw(e){const a=[0];return fw(a,e.length-1),a}function A4(e,a){return e.map(r=>r*a)}function R4(e,a){return e.map(()=>a||KS).splice(0,e.length-1)}function Js({duration:e=300,keyframes:a,times:r,ease:o="easeInOut"}){const l=QS(o)?o.map(E1):E1(o),d={done:!1,value:a[0]},u=A4(r&&r.length===a.length?r:hw(a),e),m=dw(u,a,{ease:Array.isArray(l)?l:R4(a,l)});return{calculatedDuration:e,next:g=>(d.value=m(g),d.done=g>=e,d)}}const M4=e=>e!==null;function vp(e,{repeat:a,repeatType:r="loop"},o,l=1){const d=e.filter(M4),m=l<0||a&&r!=="loop"&&a%2===1?0:d.length-1;return!m||o===void 0?d[m]:o}const D4={decay:ym,inertia:ym,tween:Js,keyframes:Js,spring:hl};function mw(e){typeof e.type=="string"&&(e.type=D4[e.type])}class xp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,r){return this.finished.then(a,r)}}const z4=e=>e/100;class bp extends xp{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:r}=this.options;r&&r.updatedAt!==vn.now()&&this.tick(vn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;mw(a);const{type:r=Js,repeat:o=0,repeatDelay:l=0,repeatType:d,velocity:u=0}=a;let{keyframes:m}=a;const g=r||Js;g!==Js&&typeof m[0]!="number"&&(this.mixKeyframes=Rl(z4,sw(m[0],m[1])),m=[0,100]);const p=g({...a,keyframes:m});d==="mirror"&&(this.mirroredGenerator=g({...a,keyframes:[...m].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=yp(p));const{calculatedDuration:y}=p;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(o+1)-l,this.generator=p}updateTime(a){const r=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(a,r=!1){const{generator:o,totalDuration:l,mixKeyframes:d,mirroredGenerator:u,resolvedDuration:m,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:p=0,keyframes:y,repeat:v,repeatType:b,repeatDelay:S,type:j,onUpdate:M,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-l/this.speed,this.startTime)),r?this.currentTime=a:this.updateTime(a);const E=this.currentTime-p*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?E<0:E>l;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let N=this.currentTime,G=o;if(v){const P=Math.min(this.currentTime,l)/m;let Z=Math.floor(P),ne=P%1;!ne&&P>=1&&(ne=1),ne===1&&Z--,Z=Math.min(Z,v+1),!!(Z%2)&&(b==="reverse"?(ne=1-ne,S&&(ne-=S/m)):b==="mirror"&&(G=u)),N=ti(0,1,ne)*m}const H=D?{done:!1,value:y[0]}:G.next(N);d&&(H.value=d(H.value));let{done:A}=H;!D&&g!==null&&(A=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return $&&j!==ym&&(H.value=vp(y,this.options,R,this.speed)),M&&M(H.value),$&&this.finish(),H}then(a,r){return this.finished.then(a,r)}get duration(){return Jn(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Jn(a)}get time(){return Jn(this.currentTime)}set time(a){a=fa(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(vn.now());const r=this.playbackSpeed!==a;this.playbackSpeed=a,r&&(this.time=Jn(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=v4,startTime:r}=this.options;this.driver||(this.driver=a(l=>this.tick(l))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=r??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(vn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function O4(e){for(let a=1;a<e.length;a++)e[a]??(e[a]=e[a-1])}const Cr=e=>e*180/Math.PI,vm=e=>{const a=Cr(Math.atan2(e[1],e[0]));return xm(a)},k4={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:vm,rotateZ:vm,skewX:e=>Cr(Math.atan(e[1])),skewY:e=>Cr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},xm=e=>(e=e%360,e<0&&(e+=360),e),D1=vm,z1=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),O1=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),L4={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:z1,scaleY:O1,scale:e=>(z1(e)+O1(e))/2,rotateX:e=>xm(Cr(Math.atan2(e[6],e[5]))),rotateY:e=>xm(Cr(Math.atan2(-e[2],e[0]))),rotateZ:D1,rotate:D1,skewX:e=>Cr(Math.atan(e[4])),skewY:e=>Cr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function bm(e){return e.includes("scale")?1:0}function Sm(e,a){if(!e||e==="none")return bm(a);const r=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,l;if(r)o=L4,l=r;else{const m=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=k4,l=m}if(!l)return bm(a);const d=o[a],u=l[1].split(",").map(_4);return typeof d=="function"?d(u):u[d]}const N4=(e,a)=>{const{transform:r="none"}=getComputedStyle(e);return Sm(r,a)};function _4(e){return parseFloat(e.trim())}const Po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fo=new Set(Po),k1=e=>e===$o||e===ke,U4=new Set(["x","y","z"]),V4=Po.filter(e=>!U4.has(e));function B4(e){const a=[];return V4.forEach(r=>{const o=e.getValue(r);o!==void 0&&(a.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),a}const Mr={width:({x:e},{paddingLeft:a="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(a)-parseFloat(r),height:({y:e},{paddingTop:a="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(a)-parseFloat(r),top:(e,{top:a})=>parseFloat(a),left:(e,{left:a})=>parseFloat(a),bottom:({y:e},{top:a})=>parseFloat(a)+(e.max-e.min),right:({x:e},{left:a})=>parseFloat(a)+(e.max-e.min),x:(e,{transform:a})=>Sm(a,"x"),y:(e,{transform:a})=>Sm(a,"y")};Mr.translateX=Mr.x;Mr.translateY=Mr.y;const Dr=new Set;let wm=!1,Tm=!1,Em=!1;function pw(){if(Tm){const e=Array.from(Dr).filter(o=>o.needsMeasurement),a=new Set(e.map(o=>o.element)),r=new Map;a.forEach(o=>{const l=B4(o);l.length&&(r.set(o,l),o.render())}),e.forEach(o=>o.measureInitialState()),a.forEach(o=>{o.render();const l=r.get(o);l&&l.forEach(([d,u])=>{o.getValue(d)?.set(u)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Tm=!1,wm=!1,Dr.forEach(e=>e.complete(Em)),Dr.clear()}function gw(){Dr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Tm=!0)})}function H4(){Em=!0,gw(),pw(),Em=!1}class Sp{constructor(a,r,o,l,d,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=r,this.name=o,this.motionValue=l,this.element=d,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(Dr.add(this),wm||(wm=!0,pt.read(gw),pt.resolveKeyframes(pw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:r,element:o,motionValue:l}=this;if(a[0]===null){const d=l?.get(),u=a[a.length-1];if(d!==void 0)a[0]=d;else if(o&&r){const m=o.readValue(r,u);m!=null&&(a[0]=m)}a[0]===void 0&&(a[0]=u),l&&d===void 0&&l.set(a[0])}O4(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),Dr.delete(this)}cancel(){this.state==="scheduled"&&(Dr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const $4=e=>e.startsWith("--");function P4(e,a,r){$4(a)?e.style.setProperty(a,r):e.style[a]=r}const F4=lp(()=>window.ScrollTimeline!==void 0),Y4={};function X4(e,a){const r=lp(e);return()=>Y4[a]??r()}const yw=X4(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qs=([e,a,r,o])=>`cubic-bezier(${e}, ${a}, ${r}, ${o})`,L1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qs([0,.65,.55,1]),circOut:Qs([.55,0,1,.45]),backIn:Qs([.31,.01,.66,-.59]),backOut:Qs([.33,1.53,.69,.99])};function vw(e,a){if(e)return typeof e=="function"?yw()?lw(e,a):"ease-out":WS(e)?Qs(e):Array.isArray(e)?e.map(r=>vw(r,a)||L1.easeOut):L1[e]}function G4(e,a,r,{delay:o=0,duration:l=300,repeat:d=0,repeatType:u="loop",ease:m="easeOut",times:g}={},p=void 0){const y={[a]:r};g&&(y.offset=g);const v=vw(m,l);Array.isArray(v)&&(y.easing=v);const b={delay:o,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:d+1,direction:u==="reverse"?"alternate":"normal"};return p&&(b.pseudoElement=p),e.animate(y,b)}function wp(e){return typeof e=="function"&&"applyToOptions"in e}function q4({type:e,...a}){return wp(e)&&yw()?e.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class I4 extends xp{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,!a)return;const{element:r,name:o,keyframes:l,pseudoElement:d,allowFlatten:u=!1,finalKeyframe:m,onComplete:g}=a;this.isPseudoElement=!!d,this.allowFlatten=u,this.options=a,sp(typeof a.type!="string");const p=q4(a);this.animation=G4(r,o,l,p,d),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=vp(l,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(y):P4(r,o,y),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return Jn(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Jn(a)}get time(){return Jn(Number(this.animation.currentTime)||0)}set time(a){this.finishedTime=null,this.animation.currentTime=fa(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(a){this.animation.startTime=a}attachTimeline({timeline:a,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&F4()?(this.animation.timeline=a,ea):r(this)}}const xw={anticipate:GS,backInOut:XS,circInOut:IS};function K4(e){return e in xw}function Q4(e){typeof e.ease=="string"&&K4(e.ease)&&(e.ease=xw[e.ease])}const N1=10;class Z4 extends I4{constructor(a){Q4(a),mw(a),super(a),a.startTime&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:r,onUpdate:o,onComplete:l,element:d,...u}=this.options;if(!r)return;if(a!==void 0){r.set(a);return}const m=new bp({...u,autoplay:!1}),g=fa(this.finishedTime??this.time);r.setWithVelocity(m.sample(g-N1).value,m.sample(g).value,N1),m.stop()}}const _1=(e,a)=>a==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Xi.test(e)||e==="0")&&!e.startsWith("url("));function W4(e){const a=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==a)return!0}function J4(e,a,r,o){const l=e[0];if(l===null)return!1;if(a==="display"||a==="visibility")return!0;const d=e[e.length-1],u=_1(l,a),m=_1(d,a);return!u||!m?!1:W4(e)||(r==="spring"||wp(r))&&o}function jm(e){e.duration=0,e.type="keyframes"}const eR=new Set(["opacity","clipPath","filter","transform"]),tR=lp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nR(e){const{motionValue:a,name:r,repeatDelay:o,repeatType:l,damping:d,type:u}=e;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:p}=a.owner.getProps();return tR()&&r&&eR.has(r)&&(r!=="transform"||!p)&&!g&&!o&&l!=="mirror"&&d!==0&&u!=="inertia"}const aR=40;class iR extends xp{constructor({autoplay:a=!0,delay:r=0,type:o="keyframes",repeat:l=0,repeatDelay:d=0,repeatType:u="loop",keyframes:m,name:g,motionValue:p,element:y,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=vn.now();const b={autoplay:a,delay:r,type:o,repeat:l,repeatDelay:d,repeatType:u,name:g,motionValue:p,element:y,...v},S=y?.KeyframeResolver||Sp;this.keyframeResolver=new S(m,(j,M,R)=>this.onKeyframesResolved(j,M,b,!R),g,p,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,r,o,l){this.keyframeResolver=void 0;const{name:d,type:u,velocity:m,delay:g,isHandoff:p,onUpdate:y}=o;this.resolvedAt=vn.now(),J4(a,d,u,m)||((ni.instantAnimations||!g)&&y?.(vp(a,o,r)),a[0]=a[a.length-1],jm(o),o.repeat=0);const b={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>aR?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...o,keyframes:a},S=!p&&nR(b)?new Z4({...b,element:b.motionValue.owner.current}):new bp(b);S.finished.then(()=>this.notifyFinished()).catch(ea),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(a,r){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),H4()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}class rR{constructor(a){this.stop=()=>this.runAll("stop"),this.animations=a.filter(Boolean)}get finished(){return Promise.all(this.animations.map(a=>a.finished))}getAll(a){return this.animations[0][a]}setAll(a,r){for(let o=0;o<this.animations.length;o++)this.animations[o][a]=r}attachTimeline(a){const r=this.animations.map(o=>o.attachTimeline(a));return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(a){this.setAll("time",a)}get speed(){return this.getAll("speed")}set speed(a){this.setAll("speed",a)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return U1(this.animations,"duration")}get iterationDuration(){return U1(this.animations,"iterationDuration")}runAll(a){this.animations.forEach(r=>r[a]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function U1(e,a){let r=0;for(let o=0;o<e.length;o++){const l=e[o][a];l!==null&&l>r&&(r=l)}return r}class oR extends rR{then(a,r){return this.finished.finally(a).then(()=>{})}}const sR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function lR(e){const a=sR.exec(e);if(!a)return[,];const[,r,o,l]=a;return[`--${r??o}`,l]}function bw(e,a,r=1){const[o,l]=lR(e);if(!o)return;const d=window.getComputedStyle(a).getPropertyValue(o);if(d){const u=d.trim();return US(u)?parseFloat(u):u}return hp(l)?bw(l,a,r+1):l}function Tp(e,a){return e?.[a]??e?.default??e}const Sw=new Set(["width","height","top","left","right","bottom",...Po]),cR={test:e=>e==="auto",parse:e=>e},ww=e=>a=>a.test(e),Tw=[$o,ke,Aa,Bi,n4,t4,cR],V1=e=>Tw.find(ww(e));function uR(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||BS(e):!0}const dR=new Set(["brightness","contrast","saturate","opacity"]);function fR(e){const[a,r]=e.slice(0,-1).split("(");if(a==="drop-shadow")return e;const[o]=r.match(mp)||[];if(!o)return e;const l=r.replace(o,"");let d=dR.has(a)?1:0;return o!==r&&(d*=100),a+"("+d+l+")"}const hR=/\b([a-z-]*)\(.*?\)/gu,Cm={...Xi,getAnimatableNone:e=>{const a=e.match(hR);return a?a.map(fR).join(" "):e}},B1={...$o,transform:Math.round},mR={rotate:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:Bi,skewX:Bi,skewY:Bi,distance:ke,translateX:ke,translateY:ke,translateZ:ke,x:ke,y:ke,z:ke,perspective:ke,transformPerspective:ke,opacity:dl,originX:j1,originY:j1,originZ:ke},Ep={borderWidth:ke,borderTopWidth:ke,borderRightWidth:ke,borderBottomWidth:ke,borderLeftWidth:ke,borderRadius:ke,radius:ke,borderTopLeftRadius:ke,borderTopRightRadius:ke,borderBottomRightRadius:ke,borderBottomLeftRadius:ke,width:ke,maxWidth:ke,height:ke,maxHeight:ke,top:ke,right:ke,bottom:ke,left:ke,padding:ke,paddingTop:ke,paddingRight:ke,paddingBottom:ke,paddingLeft:ke,margin:ke,marginTop:ke,marginRight:ke,marginBottom:ke,marginLeft:ke,backgroundPositionX:ke,backgroundPositionY:ke,...mR,zIndex:B1,fillOpacity:dl,strokeOpacity:dl,numOctaves:B1},pR={...Ep,color:Nt,backgroundColor:Nt,outlineColor:Nt,fill:Nt,stroke:Nt,borderColor:Nt,borderTopColor:Nt,borderRightColor:Nt,borderBottomColor:Nt,borderLeftColor:Nt,filter:Cm,WebkitFilter:Cm},Ew=e=>pR[e];function jw(e,a){let r=Ew(e);return r!==Cm&&(r=Xi),r.getAnimatableNone?r.getAnimatableNone(a):void 0}const gR=new Set(["auto","none","0"]);function yR(e,a,r){let o=0,l;for(;o<e.length&&!l;){const d=e[o];typeof d=="string"&&!gR.has(d)&&fl(d).values.length&&(l=e[o]),o++}if(l&&r)for(const d of a)e[d]=jw(r,l)}class vR extends Sp{constructor(a,r,o,l,d){super(a,r,o,l,d,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:r,name:o}=this;if(!r||!r.current)return;super.readKeyframes();for(let g=0;g<a.length;g++){let p=a[g];if(typeof p=="string"&&(p=p.trim(),hp(p))){const y=bw(p,r.current);y!==void 0&&(a[g]=y),g===a.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!Sw.has(o)||a.length!==2)return;const[l,d]=a,u=V1(l),m=V1(d);if(u!==m)if(k1(u)&&k1(m))for(let g=0;g<a.length;g++){const p=a[g];typeof p=="string"&&(a[g]=parseFloat(p))}else Mr[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:r}=this,o=[];for(let l=0;l<a.length;l++)(a[l]===null||uR(a[l]))&&o.push(l);o.length&&yR(a,o,r)}measureInitialState(){const{element:a,unresolvedKeyframes:r,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[o](a.measureViewportBox(),window.getComputedStyle(a.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&a.getValue(o,l).jump(l,!1)}measureEndState(){const{element:a,name:r,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const l=a.getValue(r);l&&l.jump(this.measuredOrigin,!1);const d=o.length-1,u=o[d];o[d]=Mr[r](a.measureViewportBox(),window.getComputedStyle(a.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,g])=>{a.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function Cw(e,a,r){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const l=r?.[e]??o.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}const Aw=(e,a)=>a&&typeof e=="number"?a.transform(e):e;function xR(e){return VS(e)&&"offsetHeight"in e}const H1=30,bR=e=>!isNaN(parseFloat(e)),el={current:void 0};class SR{constructor(a,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const l=vn.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=r.owner}setCurrent(a){this.current=a,this.updatedAt=vn.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=bR(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,r){this.events[a]||(this.events[a]=new cp);const o=this.events[a].add(r);return a==="change"?()=>{o(),pt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,r){this.passiveEffect=a,this.stopPassiveEffect=r}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,r,o){this.set(r),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,r=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return el.current&&el.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const a=vn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>H1)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,H1);return HS(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(a){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=a(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Or(e,a){return new SR(e,a)}const{schedule:jp}=JS(queueMicrotask,!1),ua={x:!1,y:!1};function Rw(){return ua.x||ua.y}function wR(e){return e==="x"||e==="y"?ua[e]?null:(ua[e]=!0,()=>{ua[e]=!1}):ua.x||ua.y?null:(ua.x=ua.y=!0,()=>{ua.x=ua.y=!1})}function Mw(e,a){const r=Cw(e),o=new AbortController,l={passive:!0,...a,signal:o.signal};return[r,l,()=>o.abort()]}function $1(e){return!(e.pointerType==="touch"||Rw())}function TR(e,a,r={}){const[o,l,d]=Mw(e,r),u=m=>{if(!$1(m))return;const{target:g}=m,p=a(g,m);if(typeof p!="function"||!g)return;const y=v=>{$1(v)&&(p(v),g.removeEventListener("pointerleave",y))};g.addEventListener("pointerleave",y,l)};return o.forEach(m=>{m.addEventListener("pointerenter",u,l)}),d}const Dw=(e,a)=>a?e===a?!0:Dw(e,a.parentElement):!1,Cp=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,ER=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jR(e){return ER.has(e.tagName)||e.tabIndex!==-1}const bu=new WeakSet;function P1(e){return a=>{a.key==="Enter"&&e(a)}}function Oh(e,a){e.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const CR=(e,a)=>{const r=e.currentTarget;if(!r)return;const o=P1(()=>{if(bu.has(r))return;Oh(r,"down");const l=P1(()=>{Oh(r,"up")}),d=()=>Oh(r,"cancel");r.addEventListener("keyup",l,a),r.addEventListener("blur",d,a)});r.addEventListener("keydown",o,a),r.addEventListener("blur",()=>r.removeEventListener("keydown",o),a)};function F1(e){return Cp(e)&&!Rw()}function AR(e,a,r={}){const[o,l,d]=Mw(e,r),u=m=>{const g=m.currentTarget;if(!F1(m))return;bu.add(g);const p=a(g,m),y=(S,j)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",b),bu.has(g)&&bu.delete(g),F1(S)&&typeof p=="function"&&p(S,{success:j})},v=S=>{y(S,g===window||g===document||r.useGlobalTarget||Dw(g,S.target))},b=S=>{y(S,!1)};window.addEventListener("pointerup",v,l),window.addEventListener("pointercancel",b,l)};return o.forEach(m=>{(r.useGlobalTarget?window:m).addEventListener("pointerdown",u,l),xR(m)&&(m.addEventListener("focus",p=>CR(p,l)),!jR(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),d}function Ap(e){return VS(e)&&"ownerSVGElement"in e}function zw(e){return Ap(e)&&e.tagName==="svg"}function Su(...e){const a=!Array.isArray(e[0]),r=a?0:-1,o=e[0+r],l=e[1+r],d=e[2+r],u=e[3+r],m=dw(l,d,u);return a?m(o):m}const Xt=e=>!!(e&&e.getVelocity),RR=[...Tw,Nt,Xi],MR=e=>RR.find(ww(e)),Rp=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function DR(e=!0){const a=w.useContext(rp);if(a===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:l}=a,d=w.useId();w.useEffect(()=>{if(e)return l(d)},[e]);const u=w.useCallback(()=>e&&o&&o(d),[d,o,e]);return!r&&o?[!1,u]:[!0]}const Ow=w.createContext({strict:!1}),Y1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bo={};for(const e in Y1)Bo[e]={isEnabled:a=>Y1[e].some(r=>!!a[r])};function zR(e){for(const a in e)Bo[a]={...Bo[a],...e[a]}}const OR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Nu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||OR.has(e)}let kw=e=>!Nu(e);function kR(e){typeof e=="function"&&(kw=a=>a.startsWith("on")?!Nu(a):e(a))}try{kR(require("@emotion/is-prop-valid").default)}catch{}function LR(e,a,r){const o={};for(const l in e)l==="values"&&typeof e.values=="object"||(kw(l)||r===!0&&Nu(l)||!a&&!Nu(l)||e.draggable&&l.startsWith("onDrag"))&&(o[l]=e[l]);return o}const Ju=w.createContext({});function ed(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ml(e){return typeof e=="string"||Array.isArray(e)}const Mp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dp=["initial",...Mp];function td(e){return ed(e.animate)||Dp.some(a=>ml(e[a]))}function Lw(e){return!!(td(e)||e.variants)}function NR(e,a){if(td(e)){const{initial:r,animate:o}=e;return{initial:r===!1||ml(r)?r:void 0,animate:ml(o)?o:void 0}}return e.inherit!==!1?a:{}}function _R(e){const{initial:a,animate:r}=NR(e,w.useContext(Ju));return w.useMemo(()=>({initial:a,animate:r}),[X1(a),X1(r)])}function X1(e){return Array.isArray(e)?e.join(" "):e}const pl={};function UR(e){for(const a in e)pl[a]=e[a],fp(a)&&(pl[a].isCSSVariable=!0)}function Nw(e,{layout:a,layoutId:r}){return Fo.has(e)||e.startsWith("origin")||(a||r!==void 0)&&(!!pl[e]||e==="opacity")}const VR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},BR=Po.length;function HR(e,a,r){let o="",l=!0;for(let d=0;d<BR;d++){const u=Po[d],m=e[u];if(m===void 0)continue;let g=!0;if(typeof m=="number"?g=m===(u.startsWith("scale")?1:0):g=parseFloat(m)===0,!g||r){const p=Aw(m,Ep[u]);if(!g){l=!1;const y=VR[u]||u;o+=`${y}(${p}) `}r&&(a[u]=p)}}return o=o.trim(),r?o=r(a,l?"":o):l&&(o="none"),o}function zp(e,a,r){const{style:o,vars:l,transformOrigin:d}=e;let u=!1,m=!1;for(const g in a){const p=a[g];if(Fo.has(g)){u=!0;continue}else if(fp(g)){l[g]=p;continue}else{const y=Aw(p,Ep[g]);g.startsWith("origin")?(m=!0,d[g]=y):o[g]=y}}if(a.transform||(u||r?o.transform=HR(a,e.transform,r):o.transform&&(o.transform="none")),m){const{originX:g="50%",originY:p="50%",originZ:y=0}=d;o.transformOrigin=`${g} ${p} ${y}`}}const Op=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _w(e,a,r){for(const o in a)!Xt(a[o])&&!Nw(o,r)&&(e[o]=a[o])}function $R({transformTemplate:e},a){return w.useMemo(()=>{const r=Op();return zp(r,a,e),Object.assign({},r.vars,r.style)},[a])}function PR(e,a){const r=e.style||{},o={};return _w(o,r,e),Object.assign(o,$R(e,a)),o}function FR(e,a){const r={},o=PR(e,a);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const YR={offset:"stroke-dashoffset",array:"stroke-dasharray"},XR={offset:"strokeDashoffset",array:"strokeDasharray"};function GR(e,a,r=1,o=0,l=!0){e.pathLength=1;const d=l?YR:XR;e[d.offset]=ke.transform(-o);const u=ke.transform(a),m=ke.transform(r);e[d.array]=`${u} ${m}`}function Uw(e,{attrX:a,attrY:r,attrScale:o,pathLength:l,pathSpacing:d=1,pathOffset:u=0,...m},g,p,y){if(zp(e,m,p),g){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:b}=e;v.transform&&(b.transform=v.transform,delete v.transform),(b.transform||v.transformOrigin)&&(b.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),b.transform&&(b.transformBox=y?.transformBox??"fill-box",delete v.transformBox),a!==void 0&&(v.x=a),r!==void 0&&(v.y=r),o!==void 0&&(v.scale=o),l!==void 0&&GR(v,l,d,u,!1)}const Vw=()=>({...Op(),attrs:{}}),Bw=e=>typeof e=="string"&&e.toLowerCase()==="svg";function qR(e,a,r,o){const l=w.useMemo(()=>{const d=Vw();return Uw(d,a,Bw(o),e.transformTemplate,e.style),{...d.attrs,style:{...d.style}}},[a]);if(e.style){const d={};_w(d,e.style,e),l.style={...d,...l.style}}return l}const IR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kp(e){return typeof e!="string"||e.includes("-")?!1:!!(IR.indexOf(e)>-1||/[A-Z]/u.test(e))}function KR(e,a,r,{latestValues:o},l,d=!1){const m=(kp(e)?qR:FR)(a,o,l,e),g=LR(a,typeof e=="string",d),p=e!==w.Fragment?{...g,...m,ref:r}:{},{children:y}=a,v=w.useMemo(()=>Xt(y)?y.get():y,[y]);return w.createElement(e,{...p,children:v})}function G1(e){const a=[{},{}];return e?.values.forEach((r,o)=>{a[0][o]=r.get(),a[1][o]=r.getVelocity()}),a}function Lp(e,a,r,o){if(typeof a=="function"){const[l,d]=G1(o);a=a(r!==void 0?r:e.custom,l,d)}if(typeof a=="string"&&(a=e.variants&&e.variants[a]),typeof a=="function"){const[l,d]=G1(o);a=a(r!==void 0?r:e.custom,l,d)}return a}function wu(e){return Xt(e)?e.get():e}function QR({scrapeMotionValuesFromProps:e,createRenderState:a},r,o,l){return{latestValues:ZR(r,o,l,e),renderState:a()}}function ZR(e,a,r,o){const l={},d=o(e,{});for(const b in d)l[b]=wu(d[b]);let{initial:u,animate:m}=e;const g=td(e),p=Lw(e);a&&p&&!g&&e.inherit!==!1&&(u===void 0&&(u=a.initial),m===void 0&&(m=a.animate));let y=r?r.initial===!1:!1;y=y||u===!1;const v=y?m:u;if(v&&typeof v!="boolean"&&!ed(v)){const b=Array.isArray(v)?v:[v];for(let S=0;S<b.length;S++){const j=Lp(e,b[S]);if(j){const{transitionEnd:M,transition:R,...E}=j;for(const D in E){let N=E[D];if(Array.isArray(N)){const G=y?N.length-1:0;N=N[G]}N!==null&&(l[D]=N)}for(const D in M)l[D]=M[D]}}}return l}const Hw=e=>(a,r)=>{const o=w.useContext(Ju),l=w.useContext(rp),d=()=>QR(e,a,o,l);return r?d():ap(d)};function Np(e,a,r){const{style:o}=e,l={};for(const d in o)(Xt(o[d])||a.style&&Xt(a.style[d])||Nw(d,e)||r?.getValue(d)?.liveStyle!==void 0)&&(l[d]=o[d]);return l}const WR=Hw({scrapeMotionValuesFromProps:Np,createRenderState:Op});function $w(e,a,r){const o=Np(e,a,r);for(const l in e)if(Xt(e[l])||Xt(a[l])){const d=Po.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[d]=e[l]}return o}const JR=Hw({scrapeMotionValuesFromProps:$w,createRenderState:Vw}),eM=Symbol.for("motionComponentSymbol");function Ao(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function tM(e,a,r){return w.useCallback(o=>{o&&e.onMount&&e.onMount(o),a&&(o?a.mount(o):a.unmount()),r&&(typeof r=="function"?r(o):Ao(r)&&(r.current=o))},[a])}const _p=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),nM="framerAppearId",Pw="data-"+_p(nM),Fw=w.createContext({});function aM(e,a,r,o,l){const{visualElement:d}=w.useContext(Ju),u=w.useContext(Ow),m=w.useContext(rp),g=w.useContext(Rp).reducedMotion,p=w.useRef(null);o=o||u.renderer,!p.current&&o&&(p.current=o(e,{visualState:a,parent:d,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g}));const y=p.current,v=w.useContext(Fw);y&&!y.projection&&l&&(y.type==="html"||y.type==="svg")&&iM(p.current,r,l,v);const b=w.useRef(!1);w.useInsertionEffect(()=>{y&&b.current&&y.update(r,m)});const S=r[Pw],j=w.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return _S(()=>{y&&(b.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),j.current&&y.animationState&&y.animationState.animateChanges())}),w.useEffect(()=>{y&&(!j.current&&y.animationState&&y.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),j.current=!1),y.enteringChildren=void 0)}),y}function iM(e,a,r,o){const{layoutId:l,layout:d,drag:u,dragConstraints:m,layoutScroll:g,layoutRoot:p,layoutCrossfade:y}=a;e.projection=new r(e.latestValues,a["data-framer-portal-id"]?void 0:Yw(e.parent)),e.projection.setOptions({layoutId:l,layout:d,alwaysMeasureLayout:!!u||m&&Ao(m),visualElement:e,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:g,layoutRoot:p})}function Yw(e){if(e)return e.options.allowProjection!==!1?e.projection:Yw(e.parent)}function kh(e,{forwardMotionProps:a=!1}={},r,o){r&&zR(r);const l=kp(e)?JR:WR;function d(m,g){let p;const y={...w.useContext(Rp),...m,layoutId:rM(m)},{isStatic:v}=y,b=_R(m),S=l(m,v);if(!v&&ip){oM();const j=sM(y);p=j.MeasureLayout,b.visualElement=aM(e,S,y,o,j.ProjectionNode)}return h.jsxs(Ju.Provider,{value:b,children:[p&&b.visualElement?h.jsx(p,{visualElement:b.visualElement,...y}):null,KR(e,m,tM(S,b.visualElement,g),S,v,a)]})}d.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=w.forwardRef(d);return u[eM]=e,u}function rM({layoutId:e}){const a=w.useContext(NS).id;return a&&e!==void 0?a+"-"+e:e}function oM(e,a){w.useContext(Ow).strict}function sM(e){const{drag:a,layout:r}=Bo;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a?.isEnabled(e)||r?.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function lM(e,a){if(typeof Proxy>"u")return kh;const r=new Map,o=(d,u)=>kh(d,u,e,a),l=(d,u)=>o(d,u);return new Proxy(l,{get:(d,u)=>u==="create"?o:(r.has(u)||r.set(u,kh(u,void 0,e,a)),r.get(u))})}function Xw({top:e,left:a,right:r,bottom:o}){return{x:{min:a,max:r},y:{min:e,max:o}}}function cM({x:e,y:a}){return{top:a.min,right:e.max,bottom:a.max,left:e.min}}function uM(e,a){if(!a)return e;const r=a({x:e.left,y:e.top}),o=a({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function Lh(e){return e===void 0||e===1}function Am({scale:e,scaleX:a,scaleY:r}){return!Lh(e)||!Lh(a)||!Lh(r)}function wr(e){return Am(e)||Gw(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Gw(e){return q1(e.x)||q1(e.y)}function q1(e){return e&&e!=="0%"}function _u(e,a,r){const o=e-r,l=a*o;return r+l}function I1(e,a,r,o,l){return l!==void 0&&(e=_u(e,l,o)),_u(e,r,o)+a}function Rm(e,a=0,r=1,o,l){e.min=I1(e.min,a,r,o,l),e.max=I1(e.max,a,r,o,l)}function qw(e,{x:a,y:r}){Rm(e.x,a.translate,a.scale,a.originPoint),Rm(e.y,r.translate,r.scale,r.originPoint)}const K1=.999999999999,Q1=1.0000000000001;function dM(e,a,r,o=!1){const l=r.length;if(!l)return;a.x=a.y=1;let d,u;for(let m=0;m<l;m++){d=r[m],u=d.projectionDelta;const{visualElement:g}=d.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Mo(e,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),u&&(a.x*=u.x.scale,a.y*=u.y.scale,qw(e,u)),o&&wr(d.latestValues)&&Mo(e,d.latestValues))}a.x<Q1&&a.x>K1&&(a.x=1),a.y<Q1&&a.y>K1&&(a.y=1)}function Ro(e,a){e.min=e.min+a,e.max=e.max+a}function Z1(e,a,r,o,l=.5){const d=xt(e.min,e.max,l);Rm(e,a,r,d,o)}function Mo(e,a){Z1(e.x,a.x,a.scaleX,a.scale,a.originX),Z1(e.y,a.y,a.scaleY,a.scale,a.originY)}function Iw(e,a){return Xw(uM(e.getBoundingClientRect(),a))}function fM(e,a,r){const o=Iw(e,r),{scroll:l}=a;return l&&(Ro(o.x,l.offset.x),Ro(o.y,l.offset.y)),o}const W1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Do=()=>({x:W1(),y:W1()}),J1=()=>({min:0,max:0}),wt=()=>({x:J1(),y:J1()}),Uu={current:null},Up={current:!1};function Kw(){if(Up.current=!0,!!ip)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),a=()=>Uu.current=e.matches;e.addEventListener("change",a),a()}else Uu.current=!1}const gl=new WeakMap;function hM(e,a,r){for(const o in a){const l=a[o],d=r[o];if(Xt(l))e.addValue(o,l);else if(Xt(d))e.addValue(o,Or(l,{owner:e}));else if(d!==l)if(e.hasValue(o)){const u=e.getValue(o);u.liveStyle===!0?u.jump(l):u.hasAnimated||u.set(l)}else{const u=e.getStaticValue(o);e.addValue(o,Or(u!==void 0?u:l,{owner:e}))}}for(const o in r)a[o]===void 0&&e.removeValue(o);return a}const ex=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Qw{scrapeMotionValuesFromProps(a,r,o){return{}}constructor({parent:a,props:r,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:d,visualState:u},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Sp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=vn.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,pt.render(this.render,!1,!0))};const{latestValues:g,renderState:p}=u;this.latestValues=g,this.baseTarget={...g},this.initialValues=r.initial?{...g}:{},this.renderState=p,this.parent=a,this.props=r,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=l,this.options=m,this.blockInitialAnimation=!!d,this.isControllingVariants=td(r),this.isVariantNode=Lw(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(r,{},this);for(const b in v){const S=v[b];g[b]!==void 0&&Xt(S)&&S.set(g[b])}}mount(a){this.current=a,gl.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),Up.current||Kw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Uu.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ai(this.notifyUpdate),ai(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,r){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Fo.has(a);o&&this.onBindTransform&&this.onBindTransform();const l=r.on("change",u=>{this.latestValues[a]=u,this.props.onUpdate&&pt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,a,r)),this.valueSubscriptions.set(a,()=>{l(),d&&d(),r.owner&&r.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in Bo){const r=Bo[a];if(!r)continue;const{isEnabled:o,Feature:l}=r;if(!this.features[a]&&l&&o(this.props)&&(this.features[a]=new l(this)),this.features[a]){const d=this.features[a];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):wt()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,r){this.latestValues[a]=r}update(a,r){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<ex.length;o++){const l=ex[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const d="on"+l,u=a[d];u&&(this.propEventSubscriptions[l]=this.on(l,u))}this.prevMotionValues=hM(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(a),()=>r.variantChildren.delete(a)}addValue(a,r){const o=this.values.get(a);r!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,r),this.values.set(a,r),this.latestValues[a]=r.get())}removeValue(a){this.values.delete(a);const r=this.valueSubscriptions.get(a);r&&(r(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,r){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&r!==void 0&&(o=Or(r===null?void 0:r,{owner:this}),this.addValue(a,o)),o}readValue(a,r){let o=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return o!=null&&(typeof o=="string"&&(US(o)||BS(o))?o=parseFloat(o):!MR(o)&&Xi.test(r)&&(o=jw(a,r)),this.setBaseTarget(a,Xt(o)?o.get():o)),Xt(o)?o.get():o}setBaseTarget(a,r){this.baseTarget[a]=r}getBaseTarget(a){const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const d=Lp(this.props,r,this.presenceContext?.custom);d&&(o=d[a])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,a);return l!==void 0&&!Xt(l)?l:this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]}on(a,r){return this.events[a]||(this.events[a]=new cp),this.events[a].add(r)}notify(a,...r){this.events[a]&&this.events[a].notify(...r)}scheduleRenderMicrotask(){jp.render(this.render)}}class Zw extends Qw{constructor(){super(...arguments),this.KeyframeResolver=vR}sortInstanceNodePosition(a,r){return a.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(a,r){return a.style?a.style[r]:void 0}removeValueFromRenderState(a,{vars:r,style:o}){delete r[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;Xt(a)&&(this.childSubscription=a.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function Ww(e,{style:a,vars:r},o,l){const d=e.style;let u;for(u in a)d[u]=a[u];l?.applyProjectionStyles(d,o);for(u in r)d.setProperty(u,r[u])}function mM(e){return window.getComputedStyle(e)}class Jw extends Zw{constructor(){super(...arguments),this.type="html",this.renderInstance=Ww}readValueFromInstance(a,r){if(Fo.has(r))return this.projection?.isProjecting?bm(r):N4(a,r);{const o=mM(a),l=(fp(r)?o.getPropertyValue(r):o[r])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(a,{transformPagePoint:r}){return Iw(a,r)}build(a,r,o){zp(a,r,o.transformTemplate)}scrapeMotionValuesFromProps(a,r,o){return Np(a,r,o)}}const e2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function pM(e,a,r,o){Ww(e,a,void 0,o);for(const l in a.attrs)e.setAttribute(e2.has(l)?l:_p(l),a.attrs[l])}class t2 extends Zw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=wt}getBaseTargetFromProps(a,r){return a[r]}readValueFromInstance(a,r){if(Fo.has(r)){const o=Ew(r);return o&&o.default||0}return r=e2.has(r)?r:_p(r),a.getAttribute(r)}scrapeMotionValuesFromProps(a,r,o){return $w(a,r,o)}build(a,r,o){Uw(a,r,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(a,r,o,l){pM(a,r,o,l)}mount(a){this.isSVGTag=Bw(a.tagName),super.mount(a)}}const gM=(e,a)=>kp(e)?new t2(a):new Jw(a,{allowProjection:e!==w.Fragment});function Oo(e,a,r){const o=e.getProps();return Lp(o,a,r!==void 0?r:o.custom,e)}const Mm=e=>Array.isArray(e);function yM(e,a,r){e.hasValue(a)?e.getValue(a).set(r):e.addValue(a,Or(r))}function vM(e){return Mm(e)?e[e.length-1]||0:e}function xM(e,a){const r=Oo(e,a);let{transitionEnd:o={},transition:l={},...d}=r||{};d={...d,...o};for(const u in d){const m=vM(d[u]);yM(e,u,m)}}function bM(e){return!!(Xt(e)&&e.add)}function Dm(e,a){const r=e.getValue("willChange");if(bM(r))return r.add(a);if(!r&&ni.WillChange){const o=new ni.WillChange("auto");e.addValue("willChange",o),o.add(a)}}function n2(e){return e.props[Pw]}const SM=e=>e!==null;function wM(e,{repeat:a,repeatType:r="loop"},o){const l=e.filter(SM),d=a&&r!=="loop"&&a%2===1?0:l.length-1;return l[d]}const TM={type:"spring",stiffness:500,damping:25,restSpeed:10},EM=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),jM={type:"keyframes",duration:.8},CM={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AM=(e,{keyframes:a})=>a.length>2?jM:Fo.has(e)?e.startsWith("scale")?EM(a[1]):TM:CM;function RM({when:e,delay:a,delayChildren:r,staggerChildren:o,staggerDirection:l,repeat:d,repeatType:u,repeatDelay:m,from:g,elapsed:p,...y}){return!!Object.keys(y).length}const Vp=(e,a,r,o={},l,d)=>u=>{const m=Tp(o,e)||{},g=m.delay||o.delay||0;let{elapsed:p=0}=o;p=p-fa(g);const y={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-p,onUpdate:b=>{a.set(b),m.onUpdate&&m.onUpdate(b)},onComplete:()=>{u(),m.onComplete&&m.onComplete()},name:e,motionValue:a,element:d?void 0:l};RM(m)||Object.assign(y,AM(e,y)),y.duration&&(y.duration=fa(y.duration)),y.repeatDelay&&(y.repeatDelay=fa(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(jm(y),y.delay===0&&(v=!0)),(ni.instantAnimations||ni.skipAnimations)&&(v=!0,jm(y),y.delay=0),y.allowFlatten=!m.type&&!m.ease,v&&!d&&a.get()!==void 0){const b=wM(y.keyframes,m);if(b!==void 0){pt.update(()=>{y.onUpdate(b),y.onComplete()});return}}return m.isSync?new bp(y):new iR(y)};function MM({protectedKeys:e,needsAnimating:a},r){const o=e.hasOwnProperty(r)&&a[r]!==!0;return a[r]=!1,o}function Bp(e,a,{delay:r=0,transitionOverride:o,type:l}={}){let{transition:d=e.getDefaultTransition(),transitionEnd:u,...m}=a;o&&(d=o);const g=[],p=l&&e.animationState&&e.animationState.getState()[l];for(const y in m){const v=e.getValue(y,e.latestValues[y]??null),b=m[y];if(b===void 0||p&&MM(p,y))continue;const S={delay:r,...Tp(d||{},y)},j=v.get();if(j!==void 0&&!v.isAnimating&&!Array.isArray(b)&&b===j&&!S.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const E=n2(e);if(E){const D=window.MotionHandoffAnimation(E,y,pt);D!==null&&(S.startTime=D,M=!0)}}Dm(e,y),v.start(Vp(y,v,b,e.shouldReduceMotion&&Sw.has(y)?{type:!1}:S,e,M));const R=v.animation;R&&g.push(R)}return u&&Promise.all(g).then(()=>{pt.update(()=>{u&&xM(e,u)})}),g}function a2(e,a,r,o=0,l=1){const d=Array.from(e).sort((p,y)=>p.sortNodePosition(y)).indexOf(a),u=e.size,m=(u-1)*o;return typeof r=="function"?r(d,u):l===1?d*o:m-d*o}function zm(e,a,r={}){const o=Oo(e,a,r.type==="exit"?e.presenceContext?.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(l=r.transitionOverride);const d=o?()=>Promise.all(Bp(e,o,r)):()=>Promise.resolve(),u=e.variantChildren&&e.variantChildren.size?(g=0)=>{const{delayChildren:p=0,staggerChildren:y,staggerDirection:v}=l;return DM(e,a,g,p,y,v,r)}:()=>Promise.resolve(),{when:m}=l;if(m){const[g,p]=m==="beforeChildren"?[d,u]:[u,d];return g().then(()=>p())}else return Promise.all([d(),u(r.delay)])}function DM(e,a,r=0,o=0,l=0,d=1,u){const m=[];for(const g of e.variantChildren)g.notify("AnimationStart",a),m.push(zm(g,a,{...u,delay:r+(typeof o=="function"?0:o)+a2(e.variantChildren,g,o,l,d)}).then(()=>g.notify("AnimationComplete",a)));return Promise.all(m)}function zM(e,a,r={}){e.notify("AnimationStart",a);let o;if(Array.isArray(a)){const l=a.map(d=>zm(e,d,r));o=Promise.all(l)}else if(typeof a=="string")o=zm(e,a,r);else{const l=typeof a=="function"?Oo(e,a,r.custom):a;o=Promise.all(Bp(e,l,r))}return o.then(()=>{e.notify("AnimationComplete",a)})}function i2(e,a){if(!Array.isArray(a))return!1;const r=a.length;if(r!==e.length)return!1;for(let o=0;o<r;o++)if(a[o]!==e[o])return!1;return!0}const OM=Dp.length;function r2(e){if(!e)return;if(!e.isControllingVariants){const r=e.parent?r2(e.parent)||{}:{};return e.props.initial!==void 0&&(r.initial=e.props.initial),r}const a={};for(let r=0;r<OM;r++){const o=Dp[r],l=e.props[o];(ml(l)||l===!1)&&(a[o]=l)}return a}const kM=[...Mp].reverse(),LM=Mp.length;function NM(e){return a=>Promise.all(a.map(({animation:r,options:o})=>zM(e,r,o)))}function _M(e){let a=NM(e),r=tx(),o=!0;const l=g=>(p,y)=>{const v=Oo(e,y,g==="exit"?e.presenceContext?.custom:void 0);if(v){const{transition:b,transitionEnd:S,...j}=v;p={...p,...j,...S}}return p};function d(g){a=g(e)}function u(g){const{props:p}=e,y=r2(e.parent)||{},v=[],b=new Set;let S={},j=1/0;for(let R=0;R<LM;R++){const E=kM[R],D=r[E],N=p[E]!==void 0?p[E]:y[E],G=ml(N),H=E===g?D.isActive:null;H===!1&&(j=R);let A=N===y[E]&&N!==p[E]&&G;if(A&&o&&e.manuallyAnimateOnMount&&(A=!1),D.protectedKeys={...S},!D.isActive&&H===null||!N&&!D.prevProp||ed(N)||typeof N=="boolean")continue;const $=UM(D.prevProp,N);let P=$||E===g&&D.isActive&&!A&&G||R>j&&G,Z=!1;const ne=Array.isArray(N)?N:[N];let me=ne.reduce(l(E),{});H===!1&&(me={});const{prevResolvedValues:Le={}}=D,ye={...Le,...me},ve=U=>{P=!0,b.has(U)&&(Z=!0,b.delete(U)),D.needsAnimating[U]=!0;const I=e.getValue(U);I&&(I.liveStyle=!1)};for(const U in ye){const I=me[U],se=Le[U];if(S.hasOwnProperty(U))continue;let ue=!1;Mm(I)&&Mm(se)?ue=!i2(I,se):ue=I!==se,ue?I!=null?ve(U):b.add(U):I!==void 0&&b.has(U)?ve(U):D.protectedKeys[U]=!0}D.prevProp=N,D.prevResolvedValues=me,D.isActive&&(S={...S,...me}),o&&e.blockInitialAnimation&&(P=!1);const Ue=A&&$;P&&(!Ue||Z)&&v.push(...ne.map(U=>{const I={type:E};if(typeof U=="string"&&o&&!Ue&&e.manuallyAnimateOnMount&&e.parent){const{parent:se}=e,ue=Oo(se,U);if(se.enteringChildren&&ue){const{delayChildren:k}=ue.transition||{};I.delay=a2(se.enteringChildren,e,k)}}return{animation:U,options:I}}))}if(b.size){const R={};if(typeof p.initial!="boolean"){const E=Oo(e,Array.isArray(p.initial)?p.initial[0]:p.initial);E&&E.transition&&(R.transition=E.transition)}b.forEach(E=>{const D=e.getBaseTarget(E),N=e.getValue(E);N&&(N.liveStyle=!0),R[E]=D??null}),v.push({animation:R})}let M=!!v.length;return o&&(p.initial===!1||p.initial===p.animate)&&!e.manuallyAnimateOnMount&&(M=!1),o=!1,M?a(v):Promise.resolve()}function m(g,p){if(r[g].isActive===p)return Promise.resolve();e.variantChildren?.forEach(v=>v.animationState?.setActive(g,p)),r[g].isActive=p;const y=u(g);for(const v in r)r[v].protectedKeys={};return y}return{animateChanges:u,setActive:m,setAnimateFunction:d,getState:()=>r,reset:()=>{r=tx()}}}function UM(e,a){return typeof a=="string"?a!==e:Array.isArray(a)?!i2(a,e):!1}function pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tx(){return{animate:pr(!0),whileInView:pr(),whileHover:pr(),whileTap:pr(),whileDrag:pr(),whileFocus:pr(),exit:pr()}}class Ii{constructor(a){this.isMounted=!1,this.node=a}update(){}}class VM extends Ii{constructor(a){super(a),a.animationState||(a.animationState=_M(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();ed(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:r}=this.node.prevProps||{};a!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let BM=0;class HM extends Ii{constructor(){super(...arguments),this.id=BM++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const l=this.node.animationState.setActive("exit",!a);r&&!a&&l.then(()=>{r(this.id)})}mount(){const{register:a,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const $M={animation:{Feature:VM},exit:{Feature:HM}};function yl(e,a,r,o={passive:!0}){return e.addEventListener(a,r,o),()=>e.removeEventListener(a,r)}function zl(e){return{point:{x:e.pageX,y:e.pageY}}}const PM=e=>a=>Cp(a)&&e(a,zl(a));function tl(e,a,r,o){return yl(e,a,PM(r),o)}const o2=1e-4,FM=1-o2,YM=1+o2,s2=.01,XM=0-s2,GM=0+s2;function cn(e){return e.max-e.min}function qM(e,a,r){return Math.abs(e-a)<=r}function nx(e,a,r,o=.5){e.origin=o,e.originPoint=xt(a.min,a.max,e.origin),e.scale=cn(r)/cn(a),e.translate=xt(r.min,r.max,e.origin)-e.originPoint,(e.scale>=FM&&e.scale<=YM||isNaN(e.scale))&&(e.scale=1),(e.translate>=XM&&e.translate<=GM||isNaN(e.translate))&&(e.translate=0)}function nl(e,a,r,o){nx(e.x,a.x,r.x,o?o.originX:void 0),nx(e.y,a.y,r.y,o?o.originY:void 0)}function ax(e,a,r){e.min=r.min+a.min,e.max=e.min+cn(a)}function IM(e,a,r){ax(e.x,a.x,r.x),ax(e.y,a.y,r.y)}function ix(e,a,r){e.min=a.min-r.min,e.max=e.min+cn(a)}function al(e,a,r){ix(e.x,a.x,r.x),ix(e.y,a.y,r.y)}function Qn(e){return[e("x"),e("y")]}const l2=({current:e})=>e?e.ownerDocument.defaultView:null,rx=(e,a)=>Math.abs(e-a);function KM(e,a){const r=rx(e.x,a.x),o=rx(e.y,a.y);return Math.sqrt(r**2+o**2)}class c2{constructor(a,r,{transformPagePoint:o,contextWindow:l=window,dragSnapToOrigin:d=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=_h(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,j=KM(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!j)return;const{point:M}=b,{timestamp:R}=Wt;this.history.push({...M,timestamp:R});const{onStart:E,onMove:D}=this.handlers;S||(E&&E(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,b)},this.handlePointerMove=(b,S)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Nh(S,this.transformPagePoint),pt.update(this.updatePoint,!0)},this.handlePointerUp=(b,S)=>{this.end();const{onEnd:j,onSessionEnd:M,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=_h(b.type==="pointercancel"?this.lastMoveEventInfo:Nh(S,this.transformPagePoint),this.history);this.startEvent&&j&&j(b,E),M&&M(b,E)},!Cp(a))return;this.dragSnapToOrigin=d,this.handlers=r,this.transformPagePoint=o,this.distanceThreshold=u,this.contextWindow=l||window;const m=zl(a),g=Nh(m,this.transformPagePoint),{point:p}=g,{timestamp:y}=Wt;this.history=[{...p,timestamp:y}];const{onSessionStart:v}=r;v&&v(a,_h(g,this.history)),this.removeListeners=Rl(tl(this.contextWindow,"pointermove",this.handlePointerMove),tl(this.contextWindow,"pointerup",this.handlePointerUp),tl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),ai(this.updatePoint)}}function Nh(e,a){return a?{point:a(e.point)}:e}function ox(e,a){return{x:e.x-a.x,y:e.y-a.y}}function _h({point:e},a){return{point:e,delta:ox(e,u2(a)),offset:ox(e,QM(a)),velocity:ZM(a,.1)}}function QM(e){return e[0]}function u2(e){return e[e.length-1]}function ZM(e,a){if(e.length<2)return{x:0,y:0};let r=e.length-1,o=null;const l=u2(e);for(;r>=0&&(o=e[r],!(l.timestamp-o.timestamp>fa(a)));)r--;if(!o)return{x:0,y:0};const d=Jn(l.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const u={x:(l.x-o.x)/d,y:(l.y-o.y)/d};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function WM(e,{min:a,max:r},o){return a!==void 0&&e<a?e=o?xt(a,e,o.min):Math.max(e,a):r!==void 0&&e>r&&(e=o?xt(r,e,o.max):Math.min(e,r)),e}function sx(e,a,r){return{min:a!==void 0?e.min+a:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function JM(e,{top:a,left:r,bottom:o,right:l}){return{x:sx(e.x,r,l),y:sx(e.y,a,o)}}function lx(e,a){let r=a.min-e.min,o=a.max-e.max;return a.max-a.min<e.max-e.min&&([r,o]=[o,r]),{min:r,max:o}}function eD(e,a){return{x:lx(e.x,a.x),y:lx(e.y,a.y)}}function tD(e,a){let r=.5;const o=cn(e),l=cn(a);return l>o?r=Vo(a.min,a.max-o,e.min):o>l&&(r=Vo(e.min,e.max-l,a.min)),ti(0,1,r)}function nD(e,a){const r={};return a.min!==void 0&&(r.min=a.min-e.min),a.max!==void 0&&(r.max=a.max-e.min),r}const Om=.35;function aD(e=Om){return e===!1?e=0:e===!0&&(e=Om),{x:cx(e,"left","right"),y:cx(e,"top","bottom")}}function cx(e,a,r){return{min:ux(e,a),max:ux(e,r)}}function ux(e,a){return typeof e=="number"?e:e[a]||0}const iD=new WeakMap;class rD{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=wt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:r=!1,distanceThreshold:o}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const d=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(zl(v).point)},u=(v,b)=>{const{drag:S,dragPropagation:j,onDragStart:M}=this.getProps();if(S&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wR(S),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=b,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qn(E=>{let D=this.getAxisMotionValue(E).get()||0;if(Aa.test(D)){const{projection:N}=this.visualElement;if(N&&N.layout){const G=N.layout.layoutBox[E];G&&(D=cn(G)*(parseFloat(D)/100))}}this.originPoint[E]=D}),M&&pt.postRender(()=>M(v,b)),Dm(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},m=(v,b)=>{this.latestPointerEvent=v,this.latestPanInfo=b;const{dragPropagation:S,dragDirectionLock:j,onDirectionLock:M,onDrag:R}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:E}=b;if(j&&this.currentDirection===null){this.currentDirection=oD(E),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",b.point,E),this.updateAxis("y",b.point,E),this.visualElement.render(),R&&R(v,b)},g=(v,b)=>{this.latestPointerEvent=v,this.latestPanInfo=b,this.stop(v,b),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>Qn(v=>this.getAnimationState(v)==="paused"&&this.getAxisMotionValue(v).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new c2(a,{onSessionStart:d,onStart:u,onMove:m,onSessionEnd:g,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:o,contextWindow:l2(this.visualElement)})}stop(a,r){const o=a||this.latestPointerEvent,l=r||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!l||!o)return;const{velocity:u}=l;this.startAnimation(u);const{onDragEnd:m}=this.getProps();m&&pt.postRender(()=>m(o,l))}cancel(){this.isDragging=!1;const{projection:a,animationState:r}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(a,r,o){const{drag:l}=this.getProps();if(!o||!nu(a,l,this.currentDirection))return;const d=this.getAxisMotionValue(a);let u=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(u=WM(u,this.constraints[a],this.elastic[a])),d.set(u)}resolveConstraints(){const{dragConstraints:a,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;a&&Ao(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=JM(o.layoutBox,a):this.constraints=!1,this.elastic=aD(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Qn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=nD(o.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:r}=this.getProps();if(!a||!Ao(a))return!1;const o=a.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const d=fM(o,l.root,this.visualElement.getTransformPagePoint());let u=eD(l.layout.layoutBox,d);if(r){const m=r(cM(u));this.hasMutatedConstraints=!!m,m&&(u=Xw(m))}return u}startAnimation(a){const{drag:r,dragMomentum:o,dragElastic:l,dragTransition:d,dragSnapToOrigin:u,onDragTransitionEnd:m}=this.getProps(),g=this.constraints||{},p=Qn(y=>{if(!nu(y,r,this.currentDirection))return;let v=g&&g[y]||{};u&&(v={min:0,max:0});const b=l?200:1e6,S=l?40:1e7,j={type:"inertia",velocity:o?a[y]:0,bounceStiffness:b,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...d,...v};return this.startAxisValueAnimation(y,j)});return Promise.all(p).then(m)}startAxisValueAnimation(a,r){const o=this.getAxisMotionValue(a);return Dm(this.visualElement,a),o.start(Vp(a,o,0,r,this.visualElement,!1))}stopAnimation(){Qn(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Qn(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const r=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps(),l=o[r];return l||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){Qn(r=>{const{drag:o}=this.getProps();if(!nu(r,o,this.currentDirection))return;const{projection:l}=this.visualElement,d=this.getAxisMotionValue(r);if(l&&l.layout){const{min:u,max:m}=l.layout.layoutBox[r];d.set(a[r]-xt(u,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Ao(r)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Qn(u=>{const m=this.getAxisMotionValue(u);if(m&&this.constraints!==!1){const g=m.get();l[u]=tD({min:g,max:g},this.constraints[u])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Qn(u=>{if(!nu(u,a,null))return;const m=this.getAxisMotionValue(u),{min:g,max:p}=this.constraints[u];m.set(xt(g,p,l[u]))})}addListeners(){if(!this.visualElement.current)return;iD.set(this.visualElement,this);const a=this.visualElement.current,r=tl(a,"pointerdown",g=>{const{drag:p,dragListener:y=!0}=this.getProps();p&&y&&this.start(g)}),o=()=>{const{dragConstraints:g}=this.getProps();Ao(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,d=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),pt.read(o);const u=yl(window,"resize",()=>this.scalePositionWithinConstraints()),m=l.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:p})=>{this.isDragging&&p&&(Qn(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=g[y].translate,v.set(v.get()+g[y].translate))}),this.visualElement.render())}));return()=>{u(),r(),d(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:d=!1,dragElastic:u=Om,dragMomentum:m=!0}=a;return{...a,drag:r,dragDirectionLock:o,dragPropagation:l,dragConstraints:d,dragElastic:u,dragMomentum:m}}}function nu(e,a,r){return(a===!0||a===e)&&(r===null||r===e)}function oD(e,a=10){let r=null;return Math.abs(e.y)>a?r="y":Math.abs(e.x)>a&&(r="x"),r}class sD extends Ii{constructor(a){super(a),this.removeGroupControls=ea,this.removeListeners=ea,this.controls=new rD(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ea}unmount(){this.removeGroupControls(),this.removeListeners()}}const dx=e=>(a,r)=>{e&&pt.postRender(()=>e(a,r))};class lD extends Ii{constructor(){super(...arguments),this.removePointerDownListener=ea}onPointerDown(a){this.session=new c2(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:l2(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:r,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:dx(a),onStart:dx(r),onMove:o,onEnd:(d,u)=>{delete this.session,l&&pt.postRender(()=>l(d,u))}}}mount(){this.removePointerDownListener=tl(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Tu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fx(e,a){return a.max===a.min?0:e/(a.max-a.min)*100}const Bs={correct:(e,a)=>{if(!a.target)return e;if(typeof e=="string")if(ke.test(e))e=parseFloat(e);else return e;const r=fx(e,a.target.x),o=fx(e,a.target.y);return`${r}% ${o}%`}},cD={correct:(e,{treeScale:a,projectionDelta:r})=>{const o=e,l=Xi.parse(e);if(l.length>5)return o;const d=Xi.createTransformer(e),u=typeof l[0]!="number"?1:0,m=r.x.scale*a.x,g=r.y.scale*a.y;l[0+u]/=m,l[1+u]/=g;const p=xt(m,g,.5);return typeof l[2+u]=="number"&&(l[2+u]/=p),typeof l[3+u]=="number"&&(l[3+u]/=p),d(l)}};let Uh=!1;class uD extends w.Component{componentDidMount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o,layoutId:l}=this.props,{projection:d}=a;UR(dD),d&&(r.group&&r.group.add(d),o&&o.register&&l&&o.register(d),Uh&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,onExitComplete:()=>this.safeToRemove()})),Tu.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:r,visualElement:o,drag:l,isPresent:d}=this.props,{projection:u}=o;return u&&(u.isPresent=d,Uh=!0,l||a.layoutDependency!==r||r===void 0||a.isPresent!==d?u.willUpdate():this.safeToRemove(),a.isPresent!==d&&(d?u.promote():u.relegate()||pt.postRender(()=>{const m=u.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),jp.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:l}=a;Uh=!0,l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function d2(e){const[a,r]=DR(),o=w.useContext(NS);return h.jsx(uD,{...e,layoutGroup:o,switchLayoutGroup:w.useContext(Fw),isPresent:a,safeToRemove:r})}const dD={borderRadius:{...Bs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Bs,borderTopRightRadius:Bs,borderBottomLeftRadius:Bs,borderBottomRightRadius:Bs,boxShadow:cD};function f2(e,a,r){const o=Xt(e)?e:Or(e);return o.start(Vp("",o,a,r)),o.animation}const fD=(e,a)=>e.depth-a.depth;class hD{constructor(){this.children=[],this.isDirty=!1}add(a){op(this.children,a),this.isDirty=!0}remove(a){Wu(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(fD),this.isDirty=!1,this.children.forEach(a)}}function mD(e,a){const r=vn.now(),o=({timestamp:l})=>{const d=l-r;d>=a&&(ai(o),e(d-a))};return pt.setup(o,!0),()=>ai(o)}const h2=["TopLeft","TopRight","BottomLeft","BottomRight"],pD=h2.length,hx=e=>typeof e=="string"?parseFloat(e):e,mx=e=>typeof e=="number"||ke.test(e);function gD(e,a,r,o,l,d){l?(e.opacity=xt(0,r.opacity??1,yD(o)),e.opacityExit=xt(a.opacity??1,0,vD(o))):d&&(e.opacity=xt(a.opacity??1,r.opacity??1,o));for(let u=0;u<pD;u++){const m=`border${h2[u]}Radius`;let g=px(a,m),p=px(r,m);if(g===void 0&&p===void 0)continue;g||(g=0),p||(p=0),g===0||p===0||mx(g)===mx(p)?(e[m]=Math.max(xt(hx(g),hx(p),o),0),(Aa.test(p)||Aa.test(g))&&(e[m]+="%")):e[m]=p}(a.rotate||r.rotate)&&(e.rotate=xt(a.rotate||0,r.rotate||0,o))}function px(e,a){return e[a]!==void 0?e[a]:e.borderRadius}const yD=m2(0,.5,qS),vD=m2(.5,.95,ea);function m2(e,a,r){return o=>o<e?0:o>a?1:r(Vo(e,a,o))}function gx(e,a){e.min=a.min,e.max=a.max}function Xn(e,a){gx(e.x,a.x),gx(e.y,a.y)}function yx(e,a){e.translate=a.translate,e.scale=a.scale,e.originPoint=a.originPoint,e.origin=a.origin}function vx(e,a,r,o,l){return e-=a,e=_u(e,1/r,o),l!==void 0&&(e=_u(e,1/l,o)),e}function xD(e,a=0,r=1,o=.5,l,d=e,u=e){if(Aa.test(a)&&(a=parseFloat(a),a=xt(u.min,u.max,a/100)-u.min),typeof a!="number")return;let m=xt(d.min,d.max,o);e===d&&(m-=a),e.min=vx(e.min,a,r,m,l),e.max=vx(e.max,a,r,m,l)}function xx(e,a,[r,o,l],d,u){xD(e,a[r],a[o],a[l],a.scale,d,u)}const bD=["x","scaleX","originX"],SD=["y","scaleY","originY"];function bx(e,a,r,o){xx(e.x,a,bD,r?r.x:void 0,o?o.x:void 0),xx(e.y,a,SD,r?r.y:void 0,o?o.y:void 0)}function Sx(e){return e.translate===0&&e.scale===1}function p2(e){return Sx(e.x)&&Sx(e.y)}function wx(e,a){return e.min===a.min&&e.max===a.max}function wD(e,a){return wx(e.x,a.x)&&wx(e.y,a.y)}function Tx(e,a){return Math.round(e.min)===Math.round(a.min)&&Math.round(e.max)===Math.round(a.max)}function g2(e,a){return Tx(e.x,a.x)&&Tx(e.y,a.y)}function Ex(e){return cn(e.x)/cn(e.y)}function jx(e,a){return e.translate===a.translate&&e.scale===a.scale&&e.originPoint===a.originPoint}class TD{constructor(){this.members=[]}add(a){op(this.members,a),a.scheduleRender()}remove(a){if(Wu(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(a){const r=this.members.findIndex(l=>a===l);if(r===0)return!1;let o;for(let l=r;l>=0;l--){const d=this.members[l];if(d.isPresent!==!1){o=d;break}}return o?(this.promote(o),!0):!1}promote(a,r){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,r&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:l}=a.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:r,resumingFrom:o}=a;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ED(e,a,r){let o="";const l=e.x.translate/a.x,d=e.y.translate/a.y,u=r?.z||0;if((l||d||u)&&(o=`translate3d(${l}px, ${d}px, ${u}px) `),(a.x!==1||a.y!==1)&&(o+=`scale(${1/a.x}, ${1/a.y}) `),r){const{transformPerspective:p,rotate:y,rotateX:v,rotateY:b,skewX:S,skewY:j}=r;p&&(o=`perspective(${p}px) ${o}`),y&&(o+=`rotate(${y}deg) `),v&&(o+=`rotateX(${v}deg) `),b&&(o+=`rotateY(${b}deg) `),S&&(o+=`skewX(${S}deg) `),j&&(o+=`skewY(${j}deg) `)}const m=e.x.scale*a.x,g=e.y.scale*a.y;return(m!==1||g!==1)&&(o+=`scale(${m}, ${g})`),o||"none"}const Vh=["","X","Y","Z"],jD=1e3;let CD=0;function Bh(e,a,r,o){const{latestValues:l}=a;l[e]&&(r[e]=l[e],a.setStaticValue(e,0),o&&(o[e]=0))}function y2(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:a}=e.options;if(!a)return;const r=n2(a);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:d}=e.options;window.MotionCancelOptimisedAnimation(r,"transform",pt,!(l||d))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&y2(o)}function v2({attachResizeListener:e,defaultParent:a,measureScroll:r,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(u={},m=a?.()){this.id=CD++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(MD),this.nodes.forEach(kD),this.nodes.forEach(LD),this.nodes.forEach(DD)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new hD)}addEventListener(u,m){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new cp),this.eventHandlers.get(u).add(m)}notifyListeners(u,...m){const g=this.eventHandlers.get(u);g&&g.notify(...m)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=Ap(u)&&!zw(u),this.instance=u;const{layoutId:m,layout:g,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||m)&&(this.isLayoutDirty=!0),e){let y,v=0;const b=()=>this.root.updateBlockedByResize=!1;pt.read(()=>{v=window.innerWidth}),e(u,()=>{const S=window.innerWidth;S!==v&&(v=S,this.root.updateBlockedByResize=!0,y&&y(),y=mD(b,250),Tu.hasAnimatedSinceResize&&(Tu.hasAnimatedSinceResize=!1,this.nodes.forEach(Rx)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||g)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:b,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||p.getDefaultTransition()||BD,{onLayoutAnimationStart:M,onLayoutAnimationComplete:R}=p.getProps(),E=!this.targetLayout||!g2(this.targetLayout,S),D=!v&&b;if(this.options.layoutRoot||this.resumeFrom||D||v&&(E||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Tp(j,"layout"),onPlay:M,onComplete:R};(p.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(y,D)}else v||Rx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ai(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ND),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&y2(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:m,layout:g}=this.options;if(m===void 0&&!g)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ax);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(OD),this.nodes.forEach(AD),this.nodes.forEach(RD)):this.nodes.forEach(Ax),this.clearAllSnapshots();const m=vn.now();Wt.delta=ti(0,1e3/60,m-Wt.timestamp),Wt.timestamp=m,Wt.isProcessing=!0,Ah.update.process(Wt),Ah.preRender.process(Wt),Ah.render.process(Wt),Wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(zD),this.sharedNodes.forEach(_D)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!cn(this.snapshot.measuredBox.x)&&!cn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=wt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(m=!1),m&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:g,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!l)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!p2(this.projectionDelta),g=this.getTransformTemplate(),p=g?g(this.latestValues,""):void 0,y=p!==this.prevTransformTemplateValue;u&&this.instance&&(m||wr(this.latestValues)||y)&&(l(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const m=this.measurePageBox();let g=this.removeElementScroll(m);return u&&(g=this.removeTransform(g)),HD(g),{animationId:this.root.animationId,measuredBox:m,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return wt();const m=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some($D))){const{scroll:p}=this.root;p&&(Ro(m.x,p.offset.x),Ro(m.y,p.offset.y))}return m}removeElementScroll(u){const m=wt();if(Xn(m,u),this.scroll?.wasRoot)return m;for(let g=0;g<this.path.length;g++){const p=this.path[g],{scroll:y,options:v}=p;p!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Xn(m,u),Ro(m.x,y.offset.x),Ro(m.y,y.offset.y))}return m}applyTransform(u,m=!1){const g=wt();Xn(g,u);for(let p=0;p<this.path.length;p++){const y=this.path[p];!m&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Mo(g,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),wr(y.latestValues)&&Mo(g,y.latestValues)}return wr(this.latestValues)&&Mo(g,this.latestValues),g}removeTransform(u){const m=wt();Xn(m,u);for(let g=0;g<this.path.length;g++){const p=this.path[g];if(!p.instance||!wr(p.latestValues))continue;Am(p.latestValues)&&p.updateSnapshot();const y=wt(),v=p.measurePageBox();Xn(y,v),bx(m,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,y)}return wr(this.latestValues)&&bx(m,this.latestValues),m}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(u||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=Wt.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wt(),this.relativeTargetOrigin=wt(),al(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),Xn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=wt(),this.targetWithTransforms=wt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),IM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xn(this.target,this.layout.layoutBox),qw(this.target,this.targetDelta)):Xn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=wt(),this.relativeTargetOrigin=wt(),al(this.relativeTargetOrigin,this.target,b.target),Xn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Am(this.parent.latestValues)||Gw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),m=!!this.resumingFrom||this!==u;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===Wt.timestamp&&(g=!1),g)return;const{layout:p,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||y))return;Xn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,b=this.treeScale.y;dM(this.layoutCorrected,this.treeScale,this.path,m),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=wt());const{target:S}=u;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yx(this.prevProjectionDelta.x,this.projectionDelta.x),yx(this.prevProjectionDelta.y,this.projectionDelta.y)),nl(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==b||!jx(this.projectionDelta.x,this.prevProjectionDelta.x)||!jx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Do(),this.projectionDelta=Do(),this.projectionDeltaWithTransform=Do()}setAnimationOrigin(u,m=!1){const g=this.snapshot,p=g?g.latestValues:{},y={...this.latestValues},v=Do();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const b=wt(),S=g?g.source:void 0,j=this.layout?this.layout.source:void 0,M=S!==j,R=this.getStack(),E=!R||R.members.length<=1,D=!!(M&&!E&&this.options.crossfade===!0&&!this.path.some(VD));this.animationProgress=0;let N;this.mixTargetDelta=G=>{const H=G/1e3;Mx(v.x,u.x,H),Mx(v.y,u.y,H),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(al(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),UD(this.relativeTarget,this.relativeTargetOrigin,b,H),N&&wD(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=wt()),Xn(N,this.relativeTarget)),M&&(this.animationValues=y,gD(y,p,this.latestValues,H,D,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ai(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pt.update(()=>{Tu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Or(0)),this.currentAnimation=f2(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),u.onUpdate&&u.onUpdate(m)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jD),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:m,target:g,layout:p,latestValues:y}=u;if(!(!m||!g||!p)){if(this!==u&&this.layout&&p&&x2(this.options.animationType,this.layout.layoutBox,p.layoutBox)){g=this.target||wt();const v=cn(this.layout.layoutBox.x);g.x.min=u.target.x.min,g.x.max=g.x.min+v;const b=cn(this.layout.layoutBox.y);g.y.min=u.target.y.min,g.y.max=g.y.min+b}Xn(m,g),Mo(m,y),nl(this.projectionDeltaWithTransform,this.layoutCorrected,m,y)}}registerSharedNode(u,m){this.sharedNodes.has(u)||this.sharedNodes.set(u,new TD),this.sharedNodes.get(u).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:m,preserveFollowOpacity:g}={}){const p=this.getStack();p&&p.promote(this,g),u&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let m=!1;const{latestValues:g}=u;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(m=!0),!m)return;const p={};g.z&&Bh("z",u,p,this.animationValues);for(let y=0;y<Vh.length;y++)Bh(`rotate${Vh[y]}`,u,p,this.animationValues),Bh(`skew${Vh[y]}`,u,p,this.animationValues);u.render();for(const y in p)u.setStaticValue(y,p[y]),this.animationValues&&(this.animationValues[y]=p[y]);u.scheduleRender()}applyProjectionStyles(u,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=wu(m?.pointerEvents)||"",u.transform=g?g(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=wu(m?.pointerEvents)||""),this.hasProjected&&!wr(this.latestValues)&&(u.transform=g?g({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=p.animationValues||p.latestValues;this.applyTransformsToTarget();let v=ED(this.projectionDeltaWithTransform,this.treeScale,y);g&&(v=g(y,v)),u.transform=v;const{x:b,y:S}=this.projectionDelta;u.transformOrigin=`${b.origin*100}% ${S.origin*100}% 0`,p.animationValues?u.opacity=p===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=p===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const j in pl){if(y[j]===void 0)continue;const{correct:M,applyTo:R,isCSSVariable:E}=pl[j],D=v==="none"?y[j]:M(y[j],p);if(R){const N=R.length;for(let G=0;G<N;G++)u[R[G]]=D}else E?this.options.visualElement.renderState.vars[j]=D:u[j]=D}this.options.layoutId&&(u.pointerEvents=p===this?wu(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(Cx),this.root.sharedNodes.clear()}}}function AD(e){e.updateLayout()}function RD(e){const a=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&a&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:l}=e.options,d=a.source!==e.layout.source;l==="size"?Qn(y=>{const v=d?a.measuredBox[y]:a.layoutBox[y],b=cn(v);v.min=r[y].min,v.max=v.min+b}):x2(l,a.layoutBox,r)&&Qn(y=>{const v=d?a.measuredBox[y]:a.layoutBox[y],b=cn(r[y]);v.max=v.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+b)});const u=Do();nl(u,r,a.layoutBox);const m=Do();d?nl(m,e.applyTransform(o,!0),a.measuredBox):nl(m,r,a.layoutBox);const g=!p2(u);let p=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:b}=y;if(v&&b){const S=wt();al(S,a.layoutBox,v.layoutBox);const j=wt();al(j,r,b.layoutBox),g2(S,j)||(p=!0),y.options.layoutRoot&&(e.relativeTarget=j,e.relativeTargetOrigin=S,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:a,delta:m,layoutDelta:u,hasLayoutChanged:g,hasRelativeLayoutChanged:p})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function MD(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function DD(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function zD(e){e.clearSnapshot()}function Cx(e){e.clearMeasurements()}function Ax(e){e.isLayoutDirty=!1}function OD(e){const{visualElement:a}=e.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),e.resetTransform()}function Rx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function kD(e){e.resolveTargetDelta()}function LD(e){e.calcProjection()}function ND(e){e.resetSkewAndRotation()}function _D(e){e.removeLeadSnapshot()}function Mx(e,a,r){e.translate=xt(a.translate,0,r),e.scale=xt(a.scale,1,r),e.origin=a.origin,e.originPoint=a.originPoint}function Dx(e,a,r,o){e.min=xt(a.min,r.min,o),e.max=xt(a.max,r.max,o)}function UD(e,a,r,o){Dx(e.x,a.x,r.x,o),Dx(e.y,a.y,r.y,o)}function VD(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const BD={duration:.45,ease:[.4,0,.1,1]},zx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ox=zx("applewebkit/")&&!zx("chrome/")?Math.round:ea;function kx(e){e.min=Ox(e.min),e.max=Ox(e.max)}function HD(e){kx(e.x),kx(e.y)}function x2(e,a,r){return e==="position"||e==="preserve-aspect"&&!qM(Ex(a),Ex(r),.2)}function $D(e){return e!==e.root&&e.scroll?.wasRoot}const PD=v2({attachResizeListener:(e,a)=>yl(e,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Hh={current:void 0},b2=v2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Hh.current){const e=new PD({});e.mount(window),e.setOptions({layoutScroll:!0}),Hh.current=e}return Hh.current},resetTransform:(e,a)=>{e.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),FD={pan:{Feature:lD},drag:{Feature:sD,ProjectionNode:b2,MeasureLayout:d2}};function Lx(e,a,r){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,d=o[l];d&&pt.postRender(()=>d(a,zl(a)))}class YD extends Ii{mount(){const{current:a}=this.node;a&&(this.unmount=TR(a,(r,o)=>(Lx(this.node,o,"Start"),l=>Lx(this.node,l,"End"))))}unmount(){}}class XD extends Ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rl(yl(this.node.current,"focus",()=>this.onFocus()),yl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Nx(e,a,r){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),d=o[l];d&&pt.postRender(()=>d(a,zl(a)))}class GD extends Ii{mount(){const{current:a}=this.node;a&&(this.unmount=AR(a,(r,o)=>(Nx(this.node,o,"Start"),(l,{success:d})=>Nx(this.node,l,d?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const km=new WeakMap,$h=new WeakMap,qD=e=>{const a=km.get(e.target);a&&a(e)},ID=e=>{e.forEach(qD)};function KD({root:e,...a}){const r=e||document;$h.has(r)||$h.set(r,{});const o=$h.get(r),l=JSON.stringify(a);return o[l]||(o[l]=new IntersectionObserver(ID,{root:e,...a})),o[l]}function QD(e,a,r){const o=KD(a);return km.set(e,r),o.observe(e),()=>{km.delete(e),o.unobserve(e)}}const ZD={some:0,all:1};class WD extends Ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:r,margin:o,amount:l="some",once:d}=a,u={root:r?r.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:ZD[l]},m=g=>{const{isIntersecting:p}=g;if(this.isInView===p||(this.isInView=p,d&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),b=p?y:v;b&&b(g)};return QD(this.node.current,u,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:r}=this.node;["amount","margin","root"].some(JD(a,r))&&this.startObserver()}unmount(){}}function JD({viewport:e={}},{viewport:a={}}={}){return r=>e[r]!==a[r]}const e6={inView:{Feature:WD},tap:{Feature:GD},focus:{Feature:XD},hover:{Feature:YD}},t6={layout:{ProjectionNode:b2,MeasureLayout:d2}},n6={...$M,...e6,...FD,...t6},ii=lM(n6,gM);function Lm(e){const a=ap(()=>Or(e)),{isStatic:r}=w.useContext(Rp);if(r){const[,o]=w.useState(e);w.useEffect(()=>a.on("change",o),[])}return a}function S2(e,a){const r=Lm(a()),o=()=>r.set(a());return o(),_S(()=>{const l=()=>pt.preRender(o,!1,!0),d=e.map(u=>u.on("change",l));return()=>{d.forEach(u=>u()),ai(o)}}),r}function a6(e){el.current=[],e();const a=S2(el.current,e);return el.current=void 0,a}function il(e,a,r,o){if(typeof e=="function")return a6(e);const l=typeof a=="function"?a:Su(a,r,o);return Array.isArray(e)?_x(e,l):_x([e],([d])=>l(d))}function _x(e,a){const r=ap(()=>[]);return S2(e,()=>{r.length=0;const o=e.length;for(let l=0;l<o;l++)r[l]=e[l].get();return a(r)})}function i6(){!Up.current&&Kw();const[e]=w.useState(Uu.current);return e}function Hp(e){return typeof e=="object"&&!Array.isArray(e)}function w2(e,a,r,o){return typeof e=="string"&&Hp(a)?Cw(e,r,o):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function r6(e,a,r){return e*(a+1)}function Ux(e,a,r,o){return typeof a=="number"?a:a.startsWith("-")||a.startsWith("+")?Math.max(0,e+parseFloat(a)):a==="<"?r:a.startsWith("<")?Math.max(0,r+parseFloat(a.slice(1))):o.get(a)??e}function o6(e,a,r){for(let o=0;o<e.length;o++){const l=e[o];l.at>a&&l.at<r&&(Wu(e,l),o--)}}function s6(e,a,r,o,l,d){o6(e,l,d);for(let u=0;u<a.length;u++)e.push({value:a[u],at:xt(l,d,o[u]),easing:ZS(r,u)})}function l6(e,a){for(let r=0;r<e.length;r++)e[r]=e[r]/(a+1)}function c6(e,a){return e.at===a.at?e.value===null?1:a.value===null?-1:0:e.at-a.at}const u6="easeInOut";function d6(e,{defaultTransition:a={},...r}={},o,l){const d=a.duration||.3,u=new Map,m=new Map,g={},p=new Map;let y=0,v=0,b=0;for(let S=0;S<e.length;S++){const j=e[S];if(typeof j=="string"){p.set(j,v);continue}else if(!Array.isArray(j)){p.set(j.name,Ux(v,j.at,y,p));continue}let[M,R,E={}]=j;E.at!==void 0&&(v=Ux(v,E.at,y,p));let D=0;const N=(G,H,A,$=0,P=0)=>{const Z=f6(G),{delay:ne=0,times:me=hw(Z),type:Le="keyframes",repeat:ye,repeatType:ve,repeatDelay:Ue=0,...z}=H;let{ease:U=a.ease||"easeOut",duration:I}=H;const se=typeof ne=="function"?ne($,P):ne,ue=Z.length,k=wp(Le)?Le:l?.[Le||"keyframes"];if(ue<=2&&k){let pe=100;if(ue===2&&p6(Z)){const oe=Z[1]-Z[0];pe=Math.abs(oe)}const Te={...z};I!==void 0&&(Te.duration=fa(I));const ae=cw(Te,pe,k);U=ae.ease,I=ae.duration}I??(I=d);const q=v+se;me.length===1&&me[0]===0&&(me[1]=1);const te=me.length-Z.length;if(te>0&&fw(me,te),Z.length===1&&Z.unshift(null),ye){I=r6(I,ye);const pe=[...Z],Te=[...me];U=Array.isArray(U)?[...U]:[U];const ae=[...U];for(let oe=0;oe<ye;oe++){Z.push(...pe);for(let ie=0;ie<pe.length;ie++)me.push(Te[ie]+(oe+1)),U.push(ie===0?"linear":ZS(ae,ie-1))}l6(me,ye)}const le=q+I;s6(A,Z,U,me,q,le),D=Math.max(se+I,D),b=Math.max(le,b)};if(Xt(M)){const G=Vx(M,m);N(R,E,Bx("default",G))}else{const G=w2(M,R,o,g),H=G.length;for(let A=0;A<H;A++){R=R,E=E;const $=G[A],P=Vx($,m);for(const Z in R)N(R[Z],h6(E,Z),Bx(Z,P),A,H)}}y=v,v+=D}return m.forEach((S,j)=>{for(const M in S){const R=S[M];R.sort(c6);const E=[],D=[],N=[];for(let H=0;H<R.length;H++){const{at:A,value:$,easing:P}=R[H];E.push($),D.push(Vo(0,b,A)),N.push(P||"easeOut")}D[0]!==0&&(D.unshift(0),E.unshift(E[0]),N.unshift(u6)),D[D.length-1]!==1&&(D.push(1),E.push(null)),u.has(j)||u.set(j,{keyframes:{},transition:{}});const G=u.get(j);G.keyframes[M]=E,G.transition[M]={...a,duration:b,ease:N,times:D,...r}}}),u}function Vx(e,a){return!a.has(e)&&a.set(e,{}),a.get(e)}function Bx(e,a){return a[e]||(a[e]=[]),a[e]}function f6(e){return Array.isArray(e)?e:[e]}function h6(e,a){return e&&e[a]?{...e,...e[a]}:{...e}}const m6=e=>typeof e=="number",p6=e=>e.every(m6);function g6(e,a){return e in a}class y6 extends Qw{constructor(){super(...arguments),this.type="object"}readValueFromInstance(a,r){if(g6(r,a)){const o=a[r];if(typeof o=="string"||typeof o=="number")return o}}getBaseTargetFromProps(){}removeValueFromRenderState(a,r){delete r.output[a]}measureInstanceViewportBox(){return wt()}build(a,r){Object.assign(a.output,r)}renderInstance(a,{output:r}){Object.assign(a,r)}sortInstanceNodePosition(){return 0}}function v6(e){const a={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=Ap(e)&&!zw(e)?new t2(a):new Jw(a);r.mount(e),gl.set(e,r)}function x6(e){const a={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},r=new y6(a);r.mount(e),gl.set(e,r)}function b6(e,a){return Xt(e)||typeof e=="number"||typeof e=="string"&&!Hp(a)}function T2(e,a,r,o){const l=[];if(b6(e,a))l.push(f2(e,Hp(a)&&a.default||a,r&&(r.default||r)));else{const d=w2(e,a,o),u=d.length;for(let m=0;m<u;m++){const g=d[m],p=g instanceof Element?v6:x6;gl.has(g)||p(g);const y=gl.get(g),v={...r};"delay"in v&&typeof v.delay=="function"&&(v.delay=v.delay(m,u)),l.push(...Bp(y,{...a,transition:v},{}))}}return l}function S6(e,a,r){const o=[];return d6(e,a,r,{spring:hl}).forEach(({keyframes:d,transition:u},m)=>{o.push(...T2(m,d,u))}),o}function w6(e){return Array.isArray(e)&&e.some(Array.isArray)}function T6(e){function a(r,o,l){let d=[],u;if(w6(r))d=S6(r,o,e);else{const{onComplete:g,...p}=l||{};typeof g=="function"&&(u=g),d=T2(r,o,p,e)}const m=new oR(d);return u&&m.finished.then(u),m}return a}const au=T6();function Hx(e,a){let r;return(...o)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...o),a)}}function E6({debounce:e,scroll:a,polyfill:r,offsetSize:o}={debounce:0,scroll:!1,offsetSize:!1}){const l=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!l)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[d,u]=w.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),m=w.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:d,orientationHandler:null}),g=e?typeof e=="number"?e:e.scroll:null,p=e?typeof e=="number"?e:e.resize:null,y=w.useRef(!1);w.useEffect(()=>(y.current=!0,()=>void(y.current=!1)));const[v,b,S]=w.useMemo(()=>{const E=()=>{if(!m.current.element)return;const{left:D,top:N,width:G,height:H,bottom:A,right:$,x:P,y:Z}=m.current.element.getBoundingClientRect(),ne={left:D,top:N,width:G,height:H,bottom:A,right:$,x:P,y:Z};m.current.element instanceof HTMLElement&&o&&(ne.height=m.current.element.offsetHeight,ne.width=m.current.element.offsetWidth),Object.freeze(ne),y.current&&!R6(m.current.lastBounds,ne)&&u(m.current.lastBounds=ne)};return[E,p?Hx(E,p):E,g?Hx(E,g):E]},[u,o,g,p]);function j(){m.current.scrollContainers&&(m.current.scrollContainers.forEach(E=>E.removeEventListener("scroll",S,!0)),m.current.scrollContainers=null),m.current.resizeObserver&&(m.current.resizeObserver.disconnect(),m.current.resizeObserver=null),m.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",m.current.orientationHandler))}function M(){m.current.element&&(m.current.resizeObserver=new l(S),m.current.resizeObserver.observe(m.current.element),a&&m.current.scrollContainers&&m.current.scrollContainers.forEach(E=>E.addEventListener("scroll",S,{capture:!0,passive:!0})),m.current.orientationHandler=()=>{S()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",m.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",m.current.orientationHandler))}const R=E=>{!E||E===m.current.element||(j(),m.current.element=E,m.current.scrollContainers=E2(E),M())};return C6(S,!!a),j6(b),w.useEffect(()=>{j(),M()},[a,S,b]),w.useEffect(()=>j,[]),[R,d,v]}function j6(e){w.useEffect(()=>{const a=e;return window.addEventListener("resize",a),()=>void window.removeEventListener("resize",a)},[e])}function C6(e,a){w.useEffect(()=>{if(a){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,a])}function E2(e){const a=[];if(!e||e===document.body)return a;const{overflow:r,overflowX:o,overflowY:l}=window.getComputedStyle(e);return[r,o,l].some(d=>d==="auto"||d==="scroll")&&a.push(e),[...a,...E2(e.parentElement)]}const A6=["x","y","top","bottom","left","right","width","height"],R6=(e,a)=>A6.every(r=>e[r]===a[r]);var j2=w.createContext(void 0);function Ol(){const e=w.useContext(j2);if(!e)throw new Error("Sheet context error");return e}var ri={root:{base:{position:"fixed",top:0,bottom:0,left:0,right:0,overflow:"hidden",pointerEvents:"none"},decorative:{}},backdrop:{base:{zIndex:1,position:"fixed",top:0,left:0,width:"100%",height:"100%",touchAction:"none",userSelect:"none"},decorative:{backgroundColor:"rgba(0, 0, 0, 0.2)",border:"none",WebkitTapHighlightColor:"transparent"}},container:{base:{zIndex:2,position:"absolute",left:0,bottom:0,width:"100%",pointerEvents:"auto",display:"flex",flexDirection:"column"},decorative:{backgroundColor:"#fff",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",boxShadow:"0px -2px 16px rgba(0, 0, 0, 0.3)"}},headerWrapper:{base:{width:"100%"},decorative:{}},header:{base:{width:"100%",position:"relative"},decorative:{height:"40px",display:"flex",alignItems:"center",justifyContent:"center"}},indicatorWrapper:{base:{display:"flex"},decorative:{}},indicator:{base:{display:"inline-block"},decorative:{width:"18px",height:"4px",borderRadius:"99px",backgroundColor:"#ddd"}},content:{base:{minHeight:"0px",position:"relative",flexGrow:1,display:"flex",flexDirection:"column"},decorative:{}},scroller:{base:{height:"100%",overflowY:"auto",overscrollBehaviorY:"none"},decorative:{}}},$x="calc(100% - env(safe-area-inset-top) - 34px)",vl=typeof window>"u",M6={ease:"easeOut",duration:.2},D6={ease:"linear",duration:.01},z6=.6,O6=500;function oi(e,a){return a?e.base:{...e.base,...e.decorative}}function k6(e){for(let a=0;a<e.length;a++)if(e[a+1]<e[a])return!1;return!0}function Vu(e){return a=>{e.forEach(r=>{typeof r=="function"?r(a):r&&(r.current=a)})}}function $p(e){var a;return typeof window<"u"&&window.navigator!=null?e.test(((a=window.navigator.userAgentData)==null?void 0:a.platform)||window.navigator.platform):!1}function nd(e){let a=null;return()=>(a==null&&(a=e()),a)}var L6=nd(function(){return $p(/^Mac/i)}),N6=nd(function(){return $p(/^iPhone/i)}),_6=nd(function(){return $p(/^iPad/i)||L6()&&navigator.maxTouchPoints>1}),U6=nd(function(){return N6()||_6()});function V6(e,a=50,r=20){return new Promise(o=>{let l=0;const d=setInterval(()=>{const u=document.getElementsByClassName(e)[0];l++,(u||l>=r)&&(clearInterval(d),o(u))},a)})}var B6=e=>!!e.onClick||!!e.onTap,C2=w.forwardRef(({style:e,className:a="",unstyled:r,...o},l)=>{const d=Ol(),u=B6(o),m=u?ii.button:ii.div,g=u?"auto":"none",p=r??d.unstyled,y={...oi(ri.backdrop,p),...e,pointerEvents:g};return Je.createElement(m,{...o,ref:l,className:`react-modal-sheet-backdrop ${a}`,style:y,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1}})});C2.displayName="SheetBackdrop";var A2=w.forwardRef(({children:e,style:a,className:r="",unstyled:o,...l},d)=>{const u=Ol(),m=o??u.unstyled,g={...oi(ri.container,m),...a,y:u.y};return u.detent==="default"&&(g.height=$x),u.detent==="full"&&(g.height="100%",g.maxHeight="100%"),u.detent==="content"&&(g.height="auto",g.maxHeight=$x),Je.createElement(ii.div,{...l,ref:Vu([d,u.sheetRef,u.sheetBoundsRef]),className:`react-modal-sheet-container ${r}`,style:g},e)});A2.displayName="SheetContainer";var H6={bottom:0,top:0,left:0,right:0};function R2(){const e=w.useRef(null),a=w.useCallback(()=>H6,[]);return{ref:e,onMeasure:a}}function $6(e={}){const{debounceDelay:a=32,isEnabled:r=!0}=e,[o,l]=w.useState(null),[d,u]=w.useState(void 0);return w.useEffect(()=>{if(!o||!r)return;let m=null;function g(v){const{scrollTop:b,scrollHeight:S,clientHeight:j}=v;if(!(S>j)){d&&u(void 0);return}const R=b<=0,E=Math.ceil(S)-Math.ceil(b)===Math.ceil(j);let D;R?D="top":E?D="bottom":D="middle",D!==d&&u(D)}function p(v){if(v.currentTarget instanceof HTMLElement){const b=v.currentTarget;m&&clearTimeout(m),a===0?g(b):m=setTimeout(()=>g(b),a)}}function y(v){v.currentTarget instanceof HTMLElement&&g(v.currentTarget)}return g(o),o.addEventListener("scroll",p),o.addEventListener("touchstart",y),()=>{m&&clearTimeout(m),o.removeEventListener("scroll",p),o.removeEventListener("touchstart",y)}},[o,r]),{scrollRef:m=>l(m),scrollPosition:d}}var M2=w.forwardRef(({disableScroll:e,disableDrag:a,children:r,style:o,className:l="",scrollClassName:d="",scrollStyle:u,scrollRef:m=null,unstyled:g,...p},y)=>{const v=Ol(),b=R2(),S=$6(),j=typeof e=="function"?e({scrollPosition:S.scrollPosition,currentSnap:v.currentSnap}):!!e,M=!j&&S.scrollPosition&&S.scrollPosition!=="top",D=(typeof a=="function"?a({scrollPosition:S.scrollPosition,currentSnap:v.currentSnap}):!!a)||M||v.disableDrag||v.disableDrag?void 0:v.dragProps,N=g??v.unstyled,G={...oi(ri.content,N),...o},H=oi(ri.scroller,N);return v.avoidKeyboard&&(H.paddingBottom="env(keyboard-inset-height, var(--keyboard-inset-height, 0px))"),j&&(H.overflowY="hidden"),Je.createElement(ii.div,{...p,ref:Vu([y,b.ref]),className:`react-modal-sheet-content ${l}`,style:G,...D,dragConstraints:b.ref,onMeasureDragConstraints:b.onMeasure},Je.createElement(ii.div,{ref:Vu([S.scrollRef,m]),style:{...H,...u},className:`react-modal-sheet-content-scroller ${d}`},r))});M2.displayName="SheetContent";function D2({style:e,className:a="",unstyled:r,...o}){const l=Ol(),d=il(l.indicatorRotation,y=>`translateX(2px) rotate(${y}deg)`),u=il(l.indicatorRotation,y=>`translateX(-2px) rotate(${-1*y}deg)`),m=r??l.unstyled,g={...oi(ri.indicatorWrapper,m),...e},p=oi(ri.indicator,m);return Je.createElement("div",{className:`react-modal-sheet-drag-indicator-container ${a}`,style:g,...o},Je.createElement(ii.span,{className:"react-modal-sheet-drag-indicator",style:{...p,transform:d}}),Je.createElement(ii.span,{className:"react-modal-sheet-drag-indicator",style:{...p,transform:u}}))}var z2=w.forwardRef(({children:e,style:a,disableDrag:r,unstyled:o,className:l="",...d},u)=>{const m=Ol(),g=R2(),p=r||m.disableDrag?void 0:m.dragProps,y=o??m.unstyled,v={...oi(ri.headerWrapper,y),...a},b=oi(ri.header,y);return Je.createElement(ii.div,{...d,ref:Vu([u,g.ref]),style:v,className:`react-modal-sheet-header-container ${l}`,...p,dragConstraints:g.ref,onMeasureDragConstraints:g.onMeasure},e||Je.createElement("div",{className:"react-modal-sheet-header",style:b},Je.createElement(D2,null)))});z2.displayName="SheetHeader";var xl=vl?w.useEffect:w.useLayoutEffect;function P6(){const[e,a]=w.useState(()=>({windowHeight:vl?0:window.innerHeight,windowWidth:vl?0:window.innerWidth}));return xl(()=>{function r(){a({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),e}function F6(){const[e]=w.useState(()=>{const a={top:0,left:0,right:0,bottom:0};if(vl)return a;const r=document.querySelector(":root");if(!r)return a;r.style.setProperty("--rms-sat","env(safe-area-inset-top)"),r.style.setProperty("--rms-sal","env(safe-area-inset-left)"),r.style.setProperty("--rms-sar","env(safe-area-inset-right)"),r.style.setProperty("--rms-sab","env(safe-area-inset-bottom)");const o=getComputedStyle(r),l=iu(o,"--rms-sat"),d=iu(o,"--rms-sal"),u=iu(o,"--rms-sar"),m=iu(o,"--rms-sab");return r.style.removeProperty("--rms-sat"),r.style.removeProperty("--rms-sal"),r.style.removeProperty("--rms-sar"),r.style.removeProperty("--rms-sab"),{top:l,left:d,right:u,bottom:m}});return e}function iu(e,a){const r=e.getPropertyValue(a).replace("px","").trim();return parseInt(r,10)||0}function Y6({y:e,detent:a,rootId:r,sheetHeight:o,snapPoints:l,startThreshold:d}){const u=F6().top;let m=r;m&&a==="full"&&(console.warn('Using "full" detent with modal effect is not supported.'),m=void 0),xl(()=>()=>{m&&Px(m)},[]),xl(()=>{if(!m)return;const g=document.querySelector(`#${m}`);if(!g)return;const p=e.on("animationStart",()=>{X6(m)}),y=e.on("change",j=>{if(!g)return;let M=Math.max(0,1-j/o);const R=l.length>1?l[l.length-2]:void 0;if(R!==void 0){const H=R.snapValueY;j<=H?M=(H-j)/H:M=0}if(d!==void 0){const H=o-Math.min(Math.floor(d*o),o);j<=H?M=(H-j)/H:M=0}M=Math.max(0,Math.min(1,M));const E=window.innerWidth,D=Su(M,[0,1],[0,24+u]),N=Su(M,[0,1],[1,(E-16)/E]),G=Su(M,[0,1],[0,10]);g.style.transform=`scale(${N}) translate3d(0, ${D}px, 0)`,g.style.borderTopRightRadius=`${G}px`,g.style.borderTopLeftRadius=`${G}px`});function v(){e.get()-5>=o&&Px(m)}const b=e.on("animationComplete",v),S=e.on("animationCancel",v);return()=>{p(),y(),b(),S()}},[e,m,u,d,o])}function X6(e){const a=document.querySelector(`#${e}`),r=document.querySelector("body");a&&(r.style.backgroundColor="#000",a.style.overflow="hidden",a.style.transitionTimingFunction="cubic-bezier(0.32, 0.72, 0, 1)",a.style.transitionProperty="transform, border-radius",a.style.transitionDuration="0.5s",a.style.transformOrigin="center top")}function Px(e){const a=document.querySelector(`#${e}`),r=document.querySelector("body");a&&(r.style.removeProperty("background-color"),a.style.removeProperty("overflow"),a.style.removeProperty("transition-timing-function"),a.style.removeProperty("transition-property"),a.style.removeProperty("transition-duration"),a.style.removeProperty("transform-origin"),a.style.removeProperty("transform"),a.style.removeProperty("border-top-right-radius"),a.style.removeProperty("border-top-left-radius"))}var G6=24;function Nm(...e){return(...a)=>{for(const r of e)typeof r=="function"&&r(...a)}}var Ph=typeof document<"u"&&window.visualViewport;function Fx(e,a){if(!e)return!1;const r=window.getComputedStyle(e);let o=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return o&&a&&(o=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),o}function O2(e,a){let r=e;for(Fx(r,a)&&(r=r.parentElement);r&&!Fx(r,a);)r=r.parentElement;return r||document.scrollingElement||document.documentElement}var q6=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),ru=0,ou;function I6(e={}){const{isDisabled:a}=e;xl(()=>{if(!a)return ru++,ru===1&&(U6()?ou=Q6():ou=K6()),()=>{ru--,ru===0&&ou?.()}},[a])}function K6(){return Nm(rl(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),rl(document.documentElement,"overflow","hidden"))}function Q6(){let e,a=0;const r=v=>{var b;const S=(b=v.composedPath())==null?void 0:b[0];e=O2(S,!0),!(e===document.documentElement&&e===document.body)&&(a=v.changedTouches[0].pageY)},o=v=>{if(e===void 0)return;if(!e||e===document.documentElement||e===document.body){v.preventDefault();return}const b=v.changedTouches[0].pageY,S=e.scrollTop,j=e.scrollHeight-e.clientHeight;j!==0&&((S<=0&&b>a||S>=j&&b<a)&&v.preventDefault(),a=b)},l=v=>{var b;const S=(b=v.composedPath())==null?void 0:b[0];Xx(S)&&S!==document.activeElement&&(v.preventDefault(),S.style.transform="translateY(-2000px)",S.focus(),requestAnimationFrame(()=>{S.style.transform=""}))},d=v=>{var b;const S=(b=v.composedPath())==null?void 0:b[0];Xx(S)&&(S.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{S.style.transform="",Ph&&(Ph.height<window.innerHeight?requestAnimationFrame(()=>{Yx(S)}):Ph.addEventListener("resize",()=>Yx(S),{once:!0}))}))},u=()=>{window.scrollTo(0,0)},m=window.pageXOffset,g=window.pageYOffset,p=Nm(rl(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),rl(document.documentElement,"overflow","hidden"),rl(document.body,"marginTop",`-${g}px`));window.scrollTo(0,0);const y=Nm(Hs(document,"touchstart",r,{passive:!1,capture:!0}),Hs(document,"touchmove",o,{passive:!1,capture:!0}),Hs(document,"touchend",l,{passive:!1,capture:!0}),Hs(document,"focus",d,!0),Hs(window,"scroll",u));return()=>{p(),y(),window.scrollTo(m,g)}}function rl(e,a,r){const o=e.style[a];return e.style[a]=r,()=>{e.style[a]=o}}function Hs(e,a,r,o){return e.addEventListener(a,r,o),()=>{e.removeEventListener(a,r,o)}}function Yx(e){const a=document.scrollingElement||document.documentElement;for(;e&&e!==a;){const r=O2(e);if(r!==document.documentElement&&r!==document.body&&r!==e){const o=r.getBoundingClientRect().top,l=e.getBoundingClientRect().top,d=e.getBoundingClientRect().bottom,u=r.getBoundingClientRect().bottom+G6;d>u&&(r.scrollTop+=l-o)}e=r.parentElement}}function Xx(e){return e instanceof HTMLInputElement&&!q6.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function Wn(e){const a=w.useRef(void 0);return xl(()=>{a.current=e}),w.useCallback((...r)=>{const o=a.current;return o?.(...r)},[])}function Z6({isOpen:e,onClosed:a,onOpening:r,onOpen:o,onClosing:l}){const[d,u]=w.useState(e?"opening":"closed"),m=Wn(()=>a?.()),g=Wn(()=>r?.()),p=Wn(()=>o?.()),y=Wn(()=>l?.());return w.useEffect(()=>{e&&d==="closed"?u("opening"):!e&&(d==="open"||d==="opening")&&u("closing")},[e,d]),w.useEffect(()=>{async function v(){switch(d){case"closed":await m?.();break;case"opening":await g?.(),u("open");break;case"open":await p?.();break;case"closing":await y?.(),u("closed");break}}v().catch(b=>{console.error("Internal sheet state error:",b)})},[d]),d}function W6(e={}){const{containerRef:a,isEnabled:r=!0,debounceDelay:o=100,includeContentEditable:l=!0,visualViewportThreshold:d=100}=e,[u,m]=w.useState({isVisible:!1,height:0}),g=w.useRef(null),p=w.useRef(null),y=Wn(v=>v?.tagName==="INPUT"||v?.tagName==="TEXTAREA"||l&&v instanceof HTMLElement&&v.isContentEditable);return w.useEffect(()=>{if(!r)return;const v=window.visualViewport,b=navigator.virtualKeyboard;function S(D){const N=a?.current||document.documentElement;window.isSecureContext?N.style.setProperty("--keyboard-inset-height",`env(keyboard-inset-height, ${D}px)`):N.style.setProperty("--keyboard-inset-height",`${D}px`)}function j(D){D.target instanceof HTMLElement&&y(D.target)&&(g.current=D.target,R())}function M(){g.current=null,R()}function R(){p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{const D=g.current;if(!y(D)){S(0),m({isVisible:!1,height:0});return}if(v){const G=window.innerHeight-v.height;G>d?(S(G),m({isVisible:!0,height:G})):(S(0),m({isVisible:!1,height:0}))}},o)}window.addEventListener("focusin",j),window.addEventListener("focusout",M),v&&(v.addEventListener("resize",R),v.addEventListener("scroll",R));let E=!1;return b&&(E=b.overlaysContent,b.overlaysContent=!0),()=>{window.removeEventListener("focusin",j),window.removeEventListener("focusout",M),v&&(v.removeEventListener("resize",R),v.removeEventListener("scroll",R)),b&&(b.overlaysContent=E),p.current&&clearTimeout(p.current)}},[o,l,r,d]),{keyboardHeight:u.height,isKeyboardOpen:u.isVisible}}function J6({snapPointsProp:e,sheetHeight:a}){if(e[0]!==0&&(console.error(`First snap point should be 0 to ensure the sheet can be fully closed. Got: [${e.join(", ")}]`),e.unshift(0)),e[e.length-1]!==1&&(console.error(`Last snap point should be 1 to ensure the sheet can be fully opened. Got: [${e.join(", ")}]`),e.push(1)),a<=0)return console.error(`Sheet height is ${a}, cannot compute snap points. Make sure the sheet is mounted and has a valid height.`),[];const r=e.map(o=>o>0&&o<=1?Math.round(o*a):o<0?a+o:o);return console.assert(k6(r),`Snap points need to be in ascending order got: [${e.join(", ")}]`),r.forEach(o=>{(o<0||o>a)&&console.warn(`Snap point ${o} is outside of the sheet height ${a}. This can cause unexpected behavior. Consider adjusting your snap points.`)}),r.includes(a)||(console.warn("Snap points do not include the sheet height.Please include `1` as the last snap point or it will be included automatically.This is to ensure the sheet can be fully opened."),r.push(a)),r.map((o,l)=>({snapIndex:l,snapValue:o,snapValueY:a-o}))}function ez({snapPoints:e,currentY:a}){return e.reduce((r,o)=>Math.abs(o.snapValueY-a)<Math.abs(r.snapValueY-a)?o:r)}function tz({y:e,snapPoints:a,dragDirection:r}){return r==="down"?a.slice().reverse().find(o=>o.snapValueY>e):a.find(o=>o.snapValueY<e)}function nz({dragDirection:e,snapPoints:a}){const r=a[0],o=a[a.length-1];return e==="down"?{yTo:r.snapValueY,snapIndex:r.snapIndex}:{yTo:o.snapValueY,snapIndex:o.snapIndex}}function az({currentSnapPoint:e,currentY:a,dragDirection:r,snapPoints:o,velocity:l}){const d=ez({snapPoints:o,currentY:a});if(Math.abs(l)<20)return{yTo:d.snapValueY,snapIndex:d.snapIndex};const u=tz({y:a,snapPoints:o,dragDirection:r});return u?{yTo:u.snapValueY,snapIndex:u.snapIndex}:{yTo:e.snapValueY,snapIndex:e.snapIndex}}var k2=w.forwardRef(({avoidKeyboard:e=!0,children:a,className:r="",detent:o="default",disableDismiss:l=!1,disableDrag:d=!1,disableScrollLocking:u=!1,dragCloseThreshold:m=z6,dragVelocityThreshold:g=O6,initialSnap:p,isOpen:y,modalEffectRootId:v,modalEffectThreshold:b,mountPoint:S,prefersReducedMotion:j=!1,snapPoints:M,style:R,tweenConfig:E=M6,unstyled:D=!1,onOpenStart:N,onOpenEnd:G,onClose:H,onCloseStart:A,onCloseEnd:$,onSnap:P,onDrag:Z,onDragStart:ne,onDragEnd:me,...Le},ye)=>{const[ve,Ue]=E6(),z=w.useRef(null),U=Math.round(Ue.height),[I,se]=w.useState(p),ue=M&&U>0?J6({sheetHeight:U,snapPointsProp:M}):[],{windowHeight:k}=P6(),q=U>0?U:k,te=Lm(q),le=il(te,De=>Math.max(U-De,0)),pe=Lm(0),Te=i6(),oe={type:"tween",...!!(j||Te)?D6:E},fe=W6({isEnabled:y&&e,containerRef:z}).isKeyboardOpen||d,ze=il(te,De=>De+2>=q?-1:R?.zIndex??9999),Ae=il(te,De=>De+2>=q?"hidden":"visible"),Oe=Wn(De=>{se(De),P?.(De)}),Me=Wn(De=>M&&ue?De<0||De>=ue.length?(console.warn(`Invalid snap index ${De}. Snap points are: [${M.join(", ")}] and their computed values are: [${ue.map(dt=>dt.snapValue).join(", ")}]`),null):ue[De]:null),ut=Wn(async De=>{if(!M){console.warn("Snapping is not possible without `snapPoints` prop.");return}const dt=Me(De);if(dt===null){console.warn(`Invalid snap index ${De}.`);return}if(De===0){H();return}await au(te,dt.snapValueY,{...oe,onComplete:()=>Oe(De)})}),Et=Wn(()=>{const De=document.activeElement;if(!De||!z.current)return;(De.tagName==="INPUT"||De.tagName==="TEXTAREA")&&z.current.contains(De)&&De.blur()}),nn=Wn((De,dt)=>{Z?.(De,dt);const Ht=te.get(),gt=te.getVelocity();gt>0&&pe.set(10),gt<0&&pe.set(-10),te.set(Math.max(Ht+dt.delta.y,0))}),jt=Wn((De,dt)=>{Et(),ne?.(De,dt)}),Ct=Wn((De,dt)=>{Et(),me?.(De,dt);const Ht=te.get();let gt=0;const pa=I!==void 0?Me(I):null;if(pa){const Yo=dt.offset.y>0?"down":"up",si=dt.velocity.y>0?"down":"up",Xo=Math.abs(dt.velocity.y)>g;let Gt;if(Xo?Gt=nz({snapPoints:ue,dragDirection:si}):Gt=az({currentSnapPoint:pa,currentY:Ht,dragDirection:Yo,snapPoints:ue,velocity:dt.velocity.y}),gt=Gt.yTo,l&&gt+1>=U){const On=ue.find($t=>$t.snapValue>0);On?(gt=On.snapValueY,Oe(On.snapIndex)):gt=Ht}else Gt.snapIndex!==void 0&&Oe(Gt.snapIndex)}else(dt.velocity.y>g||Ht>U*m)&&(l?gt=0:gt=q);au(te,gt,oe),gt+1>=U&&!l&&H(),pe.set(0)});w.useImperativeHandle(ye,()=>({y:te,yInverted:le,height:U,snapTo:ut})),Y6({y:te,detent:o,sheetHeight:U,snapPoints:ue,rootId:v,startThreshold:b}),I6({isDisabled:u||!y});const an=Z6({isOpen:y,onOpen:async()=>{N?.(),await V6("react-modal-sheet-container");const De=p!==void 0?Me(p):null,dt=De?.snapValueY??0;await au(te,dt,oe),p!==void 0&&Oe(p),G?.()},onClosing:async()=>{A?.(),await au(te,q,oe),$?.()}}),aa={currentSnap:I,detent:o,disableDrag:fe,dragProps:{drag:"y",dragElastic:0,dragMomentum:!1,dragPropagation:!1,onDrag:nn,onDragStart:jt,onDragEnd:Ct},indicatorRotation:pe,avoidKeyboard:e,sheetBoundsRef:ve,sheetRef:z,unstyled:D,y:te},ma=Je.createElement(j2.Provider,{value:aa},Je.createElement(ii.div,{...Le,ref:ye,"data-sheet-state":an,className:`react-modal-sheet-root ${r}`,style:{...oi(ri.root,D),zIndex:ze,visibility:Ae,...R}},an!=="closed"?a:null));return vl?ma:Kn.createPortal(ma,S??document.body)});k2.displayName="Sheet";var $s=Object.assign(k2,{Container:A2,Header:z2,DragIndicator:D2,Content:M2,Backdrop:C2});let gr=null,Fh=null,Gn=null,Gx=null,xo=[];const Bu={connect:()=>{Gn=new WebSocket(`${um.replace(/^https/,"wss")}/ws`),Gn.onopen=()=>{console.log("WebSocket Connected")},Gn.onmessage=e=>{try{const a=JSON.parse(e.data);if(a?.sessionId)gr=a.sessionId;else if(a?.masks&&a?.boxes)Gx=a,xo.forEach(r=>r(Gx));else throw xo.forEach(r=>r({error:"Something is wrong with the segementation, please try again."})),new Error("Unknown message format")}catch(a){throw console.error("Something is wrong with the response: ",e.data),console.error(a),xo.forEach(r=>r({error:"Something is wrong with the segementation, please try again."})),a}},Gn.onerror=e=>{console.error("WebSocket error:",e)},Gn.onclose=e=>{console.log("WebSocket closed:",e.code,e.reason)}},endSession:()=>{Gn?(Gn.close(),Gn=null,gr=null,console.log("WebSocket connection closed and session ended.")):console.log("No active WebSocket connection to close.")},getSessionId:()=>gr,subscribeToMasks:e=>(xo.push(e),()=>{xo=xo.filter(a=>a!==e)}),segment:async e=>{(!(()=>Gn&&Gn.readyState===WebSocket.OPEN)||!gr)&&Bu.connect(),e.append("sessionId",gr);let r;return await tn("/segment/upload",{method:"POST",body:e,skipAuth:!1}).then(o=>{if(!o.ok)throw new Error("Segmentation request failed");return o.json()}).then(o=>{o?.job_id&&(Fh=o.job_id),r=o}).catch(o=>{throw console.error("Segmentation error:",o),o}),r},resegment:async e=>((!(()=>Gn&&Gn.readyState===WebSocket.OPEN)||!gr)&&Bu.connect(),e={...e,job_id:Fh},await tn(`/re-segment?sessionId=${gr}`,{method:"POST",body:JSON.stringify(e),skipAuth:!1,headers:{"Content-Type":"application/json"}})),search:async(e,a)=>await tn("/api/v1/items/search",{method:"POST",skipAuth:!1,body:JSON.stringify({job_id:Fh,mask_json:e}),headers:{"Content-Type":"application/json"}})},iz=(e,a)=>{if(!e)return console.error("No imageObj provided!"),null;if(!a||a.length===0)return console.error("No masks provided!"),null;try{const r=document.createElement("canvas");r.width=e.width,r.height=e.height;const o=r.getContext("2d");o.drawImage(e,0,0,r.width,r.height);const l=document.createElement("canvas");l.width=a[0][0].length,l.height=a[0].length;const d=l.getContext("2d"),u=d.createImageData(l.width,l.height);return a.forEach((g,p)=>{for(let y=0;y<g.length;y++)for(let v=0;v<g[0].length;v++){const b=(y*g[0].length+v)*4;g[y][v]&&(u.data[b+3]=255)}}),d.putImageData(u,0,0),o.globalCompositeOperation="destination-in",o.drawImage(l,0,0,r.width,r.height),r.toDataURL()}catch(r){return console.error("Error in cropSelectedSegments:",r),null}};function rz({imageObj:e,selectedSegments:a,setIsBeingCustomized:r,setImageUploaded:o,segmentationService:l,handleCloseSegmentationSheet:d}){const[u,m]=w.useState(null),[g,p]=w.useState([]),[y,v]=w.useState(!1),[b,S]=w.useState(""),j=xn();w.useEffect(()=>{if(!e){console.error("No imageObj!");return}const E=[...a];if(!E.length){console.warn("No masks to crop");return}p(E);try{const D=iz(e,E);if(!D)throw new Error("Cropped segment is empty.");m(D)}catch(D){console.error("Failed to crop segment:",D),st.notifyError("Failed to crop segment: "+D.message)}},[]);const M=E=>{S(E.target.value)},R=async()=>{if(!u){console.warn("Segmented image not ready"),st.notifyError("Segmented image not ready.");return}v(!0),await l.search(g[0],b).then(E=>E.json()).then(E=>{E&&E?.error?st.notifyError(`Search failed: ${E.error}`):(o(!1),l.endSession(),d(),j("/search-result",{state:{products:E,searchingPeice:u}}))}).catch(E=>{console.error("Search failed:",E),st.notifyError(E.message)}),v(!1)};return h.jsxs(sz,{children:[u?h.jsx(lz,{src:u,alt:"cropped segment"}):h.jsx("p",{children:"Loading cropped segment..."}),h.jsx(cz,{value:b,onChange:M,placeholder:"Enter any additional details...",disabled:y}),h.jsxs(uz,{children:[h.jsx(dz,{onClick:()=>r(!1),children:h.jsx("span",{children:"Back"})}),h.jsx(fz,{onClick:R,disabled:y,children:y?h.jsx(Pi,{size:20,color:"#fff"}):"Search"})]}),h.jsx(hz,{children:h.jsxs("p",{children:["Add extra information about the cloth you are looking for"," ",h.jsx("small",{children:"(e.g., black, cutting, linen)"})," and click"," ",h.jsx("strong",{children:"Search"})," to find it online."]})})]})}const bl=ct`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,oz=ct`
  0% { transform: translateX(-150%) rotate(25deg); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateX(150%) rotate(25deg); opacity: 0; }
`,sz=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  animation: ${bl} 0.5s;
  padding: 1rem;
`,lz=C.img`
  width: 50%;
  animation: ${bl} 1.5s;
`,cz=C.textarea`
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
`,uz=C.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,dz=C.button`
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
    animation: ${bl} 0.5s ease forwards;
  }
`,fz=C.button`
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
`,hz=C.div`
  margin-top: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: #f0f8ff72;
  border-radius: 2rem;
  animation: ${bl} 1s;
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
    animation: ${oz} 1s ease forwards;
  }

  p {
    animation: ${bl} 1s;
    font-family: "Cinzel", "MedievalSharp", serif;
  }
`,L2=w.createContext();function mz({children:e}){const[a,r]=w.useState("desktop");return w.useEffect(()=>{const o=window.getComputedStyle(document.documentElement),l=parseInt(o.getPropertyValue("--mobile")),d=parseInt(o.getPropertyValue("--tablet")),u=()=>{const m=window.innerWidth;m<=l?r("mobile"):m<=d?r("tablet"):r("desktop")};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),h.jsx(L2.Provider,{value:{device:a,setDevice:r},children:e})}const Lr=()=>w.useContext(L2);function N2({imageUploaded:e,setImageUploaded:a,imageURL:r,setImageURL:o}){const[l,d]=w.useState(!1),[u,m]=w.useState(null),[g,p]=w.useState([]),[y,v]=w.useState(!1),b=w.useRef(),{device:S}=Lr();w.useEffect(()=>{b.current&&b.current.scrollTo({top:0,behavior:"smooth"})},[l]),w.useEffect(()=>{p([])},[y]);const j=()=>{a(!1),d(!1),o(null),m(null),p([]),v(!1)},M={borderTopLeftRadius:"2rem",borderTopRightRadius:"2rem",backgroundColor:"transparent",width:S==="mobile"?"100%":"50%",marginLeft:S==="mobile"?"0":"25%",backgroundImage:"repeating-linear-gradient(0deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(90deg,rgba(255, 255, 255, 0.08) 0 1px,rgba(0, 0, 0, 0.05) 1px 2px),repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.05) 0 2px,rgba(0, 0, 0, 0.05) 2px 4px), linear-gradient(-45deg, var(--bg-color) 0%, #90b9f644 100%)",backgroundSize:"6px 6px, 6px 6px, 12px 12px, cover",backgroundBlendMode:"multiply, multiply, overlay, normal",maskComposite:"intersect"};return h.jsxs($s,{isOpen:e,onClose:j,children:[h.jsxs($s.Container,{style:M,children:[h.jsx($s.Header,{style:{backgroundColor:"rgba(255, 255, 255, 0.527)",borderTopLeftRadius:"2rem",borderTopRightRadius:"2rem"}}),h.jsxs($s.Content,{ref:b,children:[y?h.jsx(rz,{imageObj:u,setIsBeingCustomized:v,selectedSegments:g,setImageUploaded:a,segmentationService:Bu,handleCloseSegmentationSheet:j}):h.jsx(L3,{imageURL:r,loading:l,setLoading:d,imageObj:u,setImageObj:m,setSelectedSegments:p,setIsBeingCustomized:v,segmentationService:Bu}),h.jsx(OS,{})]})]}),h.jsx($s.Backdrop,{})]})}/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pz=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gz=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,r,o)=>o?o.toUpperCase():r.toLowerCase()),qx=e=>{const a=gz(e);return a.charAt(0).toUpperCase()+a.slice(1)},_2=(...e)=>e.filter((a,r,o)=>!!a&&a.trim()!==""&&o.indexOf(a)===r).join(" ").trim(),yz=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xz=w.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:l="",children:d,iconNode:u,...m},g)=>w.createElement("svg",{ref:g,...vz,width:a,height:a,stroke:e,strokeWidth:o?Number(r)*24/Number(a):r,className:_2("lucide",l),...!d&&!yz(m)&&{"aria-hidden":"true"},...m},[...u.map(([p,y])=>w.createElement(p,y)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=(e,a)=>{const r=w.forwardRef(({className:o,...l},d)=>w.createElement(xz,{ref:d,iconNode:a,className:_2(`lucide-${pz(qx(e))}`,`lucide-${e}`,o),...l}));return r.displayName=qx(e),r};/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bz=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],_m=bn("camera",bz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sz=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],wz=bn("door-open",Sz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tz=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],Ps=bn("eye-closed",Tz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ez=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fs=bn("eye",Ez);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],U2=bn("heart",jz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Az=bn("history",Cz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rz=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Mz=bn("instagram",Rz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.72a10 10 0 0 1 2.69 2.7",key:"jiglxs"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.28 17.61a10 10 0 0 1-2.7 2.69",key:"elg7ff"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98",key:"1qsu07"}]],zz=bn("message-circle-dashed",Dz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oz=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],kz=bn("message-circle",Oz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Nz=bn("moon",Lz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _z=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Uz=bn("pen",_z);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Bz=bn("sun",Vz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hz=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],V2=bn("upload",Hz);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $z=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],B2=bn("user",$z);function Sl(e){"@babel/helpers - typeof";return Sl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Sl(e)}function Pz(e,a){if(Sl(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,a);if(Sl(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Fz(e){var a=Pz(e,"string");return Sl(a)=="symbol"?a:a+""}function Yz(e,a,r){return(a=Fz(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Ys(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?Object(arguments[a]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&o.push.apply(o,Object.getOwnPropertySymbols(r).filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),o.forEach(function(l){Yz(e,l,r[l])})}return e}function Um(e,a){return Um=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Um(e,a)}function Xz(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,Um(e,a)}function qn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ix=20,Xs={root:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},sidebar:{zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},content:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},overlay:{zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},dragHandle:{zIndex:1,position:"fixed",top:0,bottom:0}},H2=(function(e){Xz(a,e);function a(o){var l;return l=e.call(this,o)||this,l.state={sidebarWidth:o.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchCurrentX:null,dragSupported:!1},l.overlayClicked=l.overlayClicked.bind(qn(qn(l))),l.onTouchStart=l.onTouchStart.bind(qn(qn(l))),l.onTouchMove=l.onTouchMove.bind(qn(qn(l))),l.onTouchEnd=l.onTouchEnd.bind(qn(qn(l))),l.onScroll=l.onScroll.bind(qn(qn(l))),l.saveSidebarRef=l.saveSidebarRef.bind(qn(qn(l))),l}var r=a.prototype;return r.componentDidMount=function(){var l=/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"");this.setState({dragSupported:typeof window=="object"&&"ontouchstart"in window&&!l}),this.saveSidebarWidth()},r.componentDidUpdate=function(){this.isTouching()||this.saveSidebarWidth()},r.onTouchStart=function(l){if(!this.isTouching()){var d=l.targetTouches[0];this.setState({touchIdentifier:d.identifier,touchStartX:d.clientX,touchCurrentX:d.clientX})}},r.onTouchMove=function(l){if(this.isTouching()){for(var d=0;d<l.targetTouches.length;d++)if(l.targetTouches[d].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:l.targetTouches[d].clientX});break}}},r.onTouchEnd=function(){if(this.isTouching()){var l=this.touchSidebarWidth();(this.props.open&&l<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&l>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})}},r.onScroll=function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchCurrentX:null})},r.inCancelDistanceOnScroll=function(){var l;return this.props.pullRight?l=Math.abs(this.state.touchCurrentX-this.state.touchStartX)<Ix:l=Math.abs(this.state.touchStartX-this.state.touchCurrentX)<Ix,l},r.isTouching=function(){return this.state.touchIdentifier!==null},r.overlayClicked=function(){this.props.open&&this.props.onSetOpen(!1)},r.saveSidebarWidth=function(){var l=this.sidebar.offsetWidth;l!==this.state.sidebarWidth&&this.setState({sidebarWidth:l})},r.saveSidebarRef=function(l){this.sidebar=l},r.touchSidebarWidth=function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)},r.render=function(){var l=Ys({},Xs.sidebar,this.props.styles.sidebar),d=Ys({},Xs.content,this.props.styles.content),u=Ys({},Xs.overlay,this.props.styles.overlay),m=this.state.dragSupported&&this.props.touch,g=this.isTouching(),p={className:this.props.rootClassName,style:Ys({},Xs.root,this.props.styles.root),role:"navigation",id:this.props.rootId},y,v=this.props.shadow&&(g||this.props.open||this.props.docked);if(this.props.pullRight?(l.right=0,l.transform="translateX(100%)",l.WebkitTransform="translateX(100%)",v&&(l.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(l.left=0,l.transform="translateX(-100%)",l.WebkitTransform="translateX(-100%)",v&&(l.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),g){var b=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(l.transform="translateX("+(1-b)*100+"%)",l.WebkitTransform="translateX("+(1-b)*100+"%)"):(l.transform="translateX(-"+(1-b)*100+"%)",l.WebkitTransform="translateX(-"+(1-b)*100+"%)"),u.opacity=b,u.visibility="visible"}else this.props.docked?(this.state.sidebarWidth!==0&&(l.transform="translateX(0%)",l.WebkitTransform="translateX(0%)"),this.props.pullRight?d.right=this.state.sidebarWidth+"px":d.left=this.state.sidebarWidth+"px"):this.props.open&&(l.transform="translateX(0%)",l.WebkitTransform="translateX(0%)",u.opacity=1,u.visibility="visible");if((g||!this.props.transitions)&&(l.transition="none",l.WebkitTransition="none",d.transition="none",u.transition="none"),m)if(this.props.open)p.onTouchStart=this.onTouchStart,p.onTouchMove=this.onTouchMove,p.onTouchEnd=this.onTouchEnd,p.onTouchCancel=this.onTouchEnd,p.onScroll=this.onScroll;else{var S=Ys({},Xs.dragHandle,this.props.styles.dragHandle);S.width=this.props.touchHandleWidth,this.props.pullRight?S.right=0:S.left=0,y=Je.createElement("div",{style:S,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return Je.createElement("div",p,Je.createElement("div",{className:this.props.sidebarClassName,style:l,ref:this.saveSidebarRef,id:this.props.sidebarId},this.props.sidebar),Je.createElement("div",{className:this.props.overlayClassName,style:u,onClick:this.overlayClicked,id:this.props.overlayId}),Je.createElement("div",{className:this.props.contentClassName,style:d,id:this.props.contentId},y,this.props.children))},a})(w.Component);H2.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0};var $2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kx=Je.createContext&&Je.createContext($2),Gz=["attr","size","title"];function qz(e,a){if(e==null)return{};var r=Iz(e,a),o,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)o=d[l],!(a.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function Iz(e,a){if(e==null)return{};var r={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(a.indexOf(o)>=0)continue;r[o]=e[o]}return r}function Hu(){return Hu=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},Hu.apply(this,arguments)}function Qx(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,o)}return r}function $u(e){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Qx(Object(r),!0).forEach(function(o){Kz(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qx(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Kz(e,a,r){return a=Qz(a),a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function Qz(e){var a=Zz(e,"string");return typeof a=="symbol"?a:a+""}function Zz(e,a){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,a);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function P2(e){return e&&e.map((a,r)=>Je.createElement(a.tag,$u({key:r},a.attr),P2(a.child)))}function Pp(e){return a=>Je.createElement(Wz,Hu({attr:$u({},e.attr)},a),P2(e.child))}function Wz(e){var a=r=>{var{attr:o,size:l,title:d}=e,u=qz(e,Gz),m=l||r.size||"1em",g;return r.className&&(g=r.className),e.className&&(g=(g?g+" ":"")+e.className),Je.createElement("svg",Hu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,u,{className:g,style:$u($u({color:e.color||r.color},r.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),d&&Je.createElement("title",null,d),e.children)};return Kx!==void 0?Je.createElement(Kx.Consumer,null,r=>a(r)):a($2)}function Jz(e){return Pp({attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z",fill:"currentColor"},child:[]},{tag:"path",attr:{d:"M20 11H16V13H20V11Z",fill:"currentColor"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z",fill:"currentColor"},child:[]}]})(e)}const F2=w.createContext();function e8({children:e}){const[a,r]=w.useState(()=>localStorage.getItem("theme")||"system");return w.useEffect(()=>{const o=window.matchMedia("(prefers-color-scheme: dark)").matches,l=a==="system"?o?"dark":"light":a;document.documentElement.setAttribute("data-theme",l),localStorage.setItem("theme",a)},[a]),h.jsx(F2.Provider,{value:{theme:a,setTheme:r},children:e})}const t8=()=>w.useContext(F2);function Yh(e){return Pp({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function n8({isOpen:e,setIsOpen:a}){const{logout:r,user:o,updateProfileImage:l}=zr(),d=xn(),[u,m]=w.useState(!1),[g,p]=w.useState(!1),y=w.useRef(null),{theme:v,setTheme:b}=t8(),[S,j]=w.useState(!1),M="https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog";w.useEffect(()=>{m(!1)},[o?.profileImageURL]);const R=()=>{r(),d("/"),a(!1)},E=()=>{d("/history"),a(!1)},D=()=>{d("/favorite"),a(!1)},N=()=>{o&&y.current?.click()},G=async A=>{const $=A.target.files?.[0];if($){p(!0);try{(await l($))?.ok?st.notifySuccess("Profile image changed successfully"):st.notifyError("Profile image upload failed")}catch{st.notifyError("Profile image upload failed")}finally{p(!1),A.target.value=null}}},H=h.jsxs(h.Fragment,{children:[h.jsxs(d8,{children:[h.jsx(a8,{ref:y,type:"file",accept:"image/*",onChange:G}),h.jsxs(i8,{children:[h.jsxs(r8,{children:[h.jsx(o8,{onClick:N,children:o&&o.profileImageURL&&!u?h.jsx(s8,{src:o.profileImageURL,alt:o.userName,onError:()=>m(!0)}):h.jsx(l8,{children:h.jsx(B2,{size:48})})}),o&&h.jsx(c8,{$theme:v,disabled:g,onClick:N,children:g?"...":h.jsx(Uz,{size:14})})]}),h.jsx(u8,{children:o?.userName||"Guest"})]})]}),h.jsxs(f8,{children:[h.jsxs(Oi,{onClick:E,children:[h.jsx(Az,{})," Recent Searches"]}),h.jsxs(Oi,{onClick:D,children:[h.jsx(U2,{})," Saved Items"]}),h.jsxs(Oi,{onClick:()=>window.open(M),children:[h.jsx(zz,{})," Send Feedback"]}),h.jsxs(h8,{onClick:()=>j(A=>!A),children:[v==="light"?h.jsx(Bz,{style:{rotate:S?"90deg":"0deg",transition:"rotate 0.5s ease-in-out"}}):h.jsx(Nz,{style:{rotate:S?"90deg":"0deg",transition:"rotate 0.5s ease-in-out"}}),"Theme"]}),h.jsxs(m8,{$open:S,children:[h.jsxs(Oi,{onClick:()=>b("light"),children:[v==="light"&&h.jsx(Yh,{})," Light"]}),h.jsxs(Oi,{onClick:()=>b("dark"),children:[v==="dark"&&h.jsx(Yh,{})," Dark"]}),h.jsxs(Oi,{onClick:()=>b("system"),children:[v==="system"&&h.jsx(Yh,{})," System"]})]}),h.jsxs(Oi,{children:[h.jsx(Jz,{size:20})," Change Password"]}),h.jsxs(Oi,{onClick:R,children:[h.jsx(wz,{})," Sign out"]})]})]});return h.jsx(H2,{open:e,onSetOpen:a,pullRight:!0,styles:{root:{position:"fixed",inset:0,zIndex:1200,pointerEvents:e?"auto":"none"},sidebar:{pointerEvents:"auto",zIndex:"10",background:v==="light"?"#ffffffa0":"#181818a0",color:v==="light"?"black":"white",transition:"0.5s ease-in-out",width:280},overlay:{pointerEvents:"auto",backgroundColor:"rgba(0,0,0,0.4)"}},sidebar:H})}const a8=C.input`
  display: none;
`,i8=C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,r8=C.div`
  position: relative;
  margin-bottom: 8px;
`,o8=C.div`
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
`,s8=C.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,l8=C.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
`,c8=C.button`
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
  color: var(--text-color);
  transition:
    transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    background 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    pointer-events: none;
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition:
      opacity 0.2s ease,
      transform 0.3s ease;
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
`,u8=C.h2`
  margin: 0;
`,d8=C.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  transition: all 0.5s ease-in-out;
`,f8=C.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`,Oi=C.button`
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
`,h8=C.div`
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
`,m8=C.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  max-height: ${({$open:e})=>e?"200px":"0"};
  opacity: ${({$open:e})=>e?1:0};
  transform: ${({$open:e})=>e?"translateY(0)":"translateY(-4px)"};

  transition:
    max-height 0.3s ease,
    opacity 0.25s ease,
    transform 0.25s ease;
`;function p8({navigationBlocked:e,setIsSideBarOpen:a}){const{user:r}=zr(),o=xn(),{isAuthenticated:l}=zr(),[d,u]=w.useState(!1),[m,g]=w.useState(!1),[p,y]=w.useState(!1),[v,b]=w.useState(null),[S,j]=w.useState(!1),M=w.useRef(null),R=w.useRef(null),{device:E}=Lr();w.useEffect(()=>{l()?g(!0):g(!1)},[l]),w.useEffect(()=>{p||(M.current&&(M.current.value=""),R.current&&(R.current.value=""))},[p]);const D=$=>{const P=$.target.files[0];P&&(b(URL.createObjectURL(P)),y(!0),j(!1))},N=()=>{a(!0)},G=()=>{E==="desktop"?A():j(!0)},H=()=>{R.current.click()},A=()=>{M.current.click()};return h.jsxs(h.Fragment,{children:[h.jsxs(g8,{children:[h.jsx("div",{style:{gridColumn:"1",textAlign:"left",cursor:"pointer"},onClick:()=>o("/",{state:{cameFrom:"navbar"}}),children:h.jsx(y8,{src:"/logo.png",alt:"FITFINDER",title:"Home"})}),h.jsxs("div",{style:{gridColumn:"2",textAlign:"center"},children:[h.jsx("input",{type:"file",accept:"image/*",ref:M,style:{display:"none"},onChange:D}),h.jsx("input",{type:"file",accept:"image/*",capture:"camera",ref:R,style:{display:"none"},onChange:D}),h.jsxs(v8,{onClick:G,children:[h.jsx(_m,{width:24,height:24}),h.jsx("label",{style:{marginLeft:"0.5rem",cursor:"pointer"},children:"Search With Image"})]})]}),h.jsx("div",{style:{gridColumn:"3",textAlign:"right",gap:"2rem",display:"flex",justifyContent:"flex-end"},children:m?h.jsx(x8,{children:h.jsx(A8,{children:h.jsx(R8,{onClick:N,children:r&&r.profileImageURL&&!d?h.jsx(M8,{src:r.profileImageURL,alt:r.userName,onError:()=>u(!0)}):h.jsx(D8,{children:h.jsx(B2,{size:48})})})})}):h.jsxs(h.Fragment,{children:[h.jsx(b8,{onClick:()=>o("/registration",{state:{form:"login"}}),disabled:e,children:"Login"}),E!=="mobile"&&h.jsx(S8,{onClick:()=>o("/registration",{state:{form:"signup"}}),disabled:e,children:"Join"})]})})]}),p&&h.jsx(N2,{imageUploaded:p,setImageUploaded:y,imageURL:v,setImageURL:b}),S&&h.jsx(w8,{onClick:()=>j(!1),children:h.jsxs(T8,{device:E,onClick:$=>$.stopPropagation(),children:[h.jsx(E8,{device:E,children:"Choose Image Source"}),h.jsxs(j8,{device:E,children:[h.jsxs(Zx,{device:E,onClick:H,children:[h.jsx(_m,{size:24}),h.jsx("span",{children:"Take Photo"})]}),h.jsxs(Zx,{device:E,onClick:A,children:[h.jsx(V2,{size:24}),h.jsx("span",{children:"Upload from Device"})]})]}),h.jsx(C8,{device:E,onClick:()=>j(!1),children:"Cancel"})]})})]})}const g8=C.nav`
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
`,y8=C.img`
  width: 60px;
  height: 60px;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`,v8=C.button.attrs({type:"button"})`
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
`,x8=C.button.attrs({type:"button"})`
  padding-right: 0.2rem;
  transition: all 0.3s ease-in-out;
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    scale: 1.1;
  }
`,b8=C.button.attrs({type:"button"})`
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
`,S8=C.button.attrs({type:"button"})`
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
`,w8=C.div`
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
`,T8=C.div`
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
`,E8=C.h2`
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
`,j8=C.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.device==="mobile"?"0.75rem":"1rem"};

  @media (max-width: var(--mobile)) {
    gap: 0.75rem;
  }
`,Zx=C.button.attrs({type:"button"})`
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
`,C8=C.button.attrs({type:"button"})`
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
`,A8=C.div`
  position: relative;
  margin-right: 8px;
`,R8=C.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: solid 2px white;
  }
`,M8=C.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,D8=C.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(255, 255, 255, 0.06); */
`;function z8({navigationBlocked:e}){const a=(l,d="",u="")=>{const m=`mailto:${l}?subject=${encodeURIComponent(d)}&body=${encodeURIComponent(u)}`;window.location.href=m},r=xn(),{device:o}=Lr();return h.jsxs(k8,{device:o,children:[h.jsxs(L8,{device:o,children:[h.jsxs(N8,{device:o,children:[h.jsx(wS,{fontSize:o==="mobile"?50:70,scale:.3,variant:2}),h.jsx(_8,{device:o,children:"Your perfect fit, our mission"})]}),h.jsxs(Wx,{device:o,children:[h.jsx(Jx,{device:o,children:"Quick Links"}),h.jsxs(eb,{device:o,children:[h.jsx(Gs,{device:o,onClick:()=>r("/"),disabled:e,children:"Home"}),h.jsx(Gs,{device:o,onClick:()=>r("/about-us"),disabled:e,children:"About Us"}),h.jsx(Gs,{device:o,onClick:()=>a("fitfindercsed@gmail.com","Inquiry about FITFINDER","Hello, I would like to know more about your platform..."),disabled:e,children:"Contact"})]})]}),h.jsxs(Wx,{device:o,children:[h.jsx(Jx,{device:o,children:"Legal"}),h.jsxs(eb,{device:o,children:[h.jsx(Gs,{device:o,onClick:()=>r("/privacy-policy"),disabled:e,children:"Privacy Policy"}),h.jsx(Gs,{device:o,onClick:()=>r("/terms-of-service"),disabled:e,children:"Terms of Service"})]})]})]}),h.jsx(U8,{device:o,children:h.jsxs(V8,{device:o,children:["© ",new Date().getFullYear()," FitFinder. All rights reserved."]})})]})}const O8=ct`
    from{
        transform: translateY(10%);
    }  
    to{
        transform: translateY(0%);
    }
`,k8=C.footer`
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
  animation: ${O8} 1s;
  margin-top: auto;
  box-sizing: border-box;
  background-image: var(--footer-bg-image);

  @media (max-width: var(--tablet)) {
    padding: 2rem 2rem;
  }

  @media (max-width: var(--mobile)) {
    padding: 2rem 1.5rem;
  }
`,L8=C.div`
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
`,N8=C.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.device==="mobile"?"center":"flex-start"};
  gap: 0.5rem;

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`,_8=C.p`
  margin: 0;
  font-size: ${e=>e.device==="mobile"?"0.938rem":"1rem"};
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: var(--text-color);
  opacity: 0.8;
`,Wx=C.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.device==="mobile"?"center":"flex-start"};
  gap: 1rem;

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`,Jx=C.h3`
  margin: 0;
  font-size: ${e=>e.device==="mobile"?"1.063rem":"1.125rem"};
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--text-color);
`,eb=C.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: ${e=>e.device==="mobile"?"center":"flex-start"};

  @media (max-width: var(--mobile)) {
    align-items: center;
  }
`,U8=C.div`
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  text-align: center;
`,Gs=C.a`
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
`,V8=C.span`
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
`;function B8(){const[e,a]=w.useState(!1),[r,o]=w.useState(!1);return h.jsxs(H8,{children:[h.jsx(p8,{navigationBlocked:e,setIsSideBarOpen:o}),h.jsx(n8,{isOpen:r,setIsOpen:o,children:h.jsx("div",{})}),h.jsxs($8,{children:[h.jsx(Xj,{context:{setNavigationBlocked:a}}),h.jsx(z8,{navigationBlocked:e})]})]})}const H8=C.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* full viewport height, not min-height */
  overflow: hidden;
  background-color: var(--bg-color);
  transition: 0.5s ease-in-out;
`,$8=C.main`
  flex: 1;
  overflow-y: auto; /* internal scrolling here */
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;function P8(e={}){const{nonce:a,onScriptLoadSuccess:r,onScriptLoadError:o}=e,[l,d]=w.useState(!1),u=w.useRef(r);u.current=r;const m=w.useRef(o);return m.current=o,w.useEffect(()=>{const g=document.createElement("script");return g.src="https://accounts.google.com/gsi/client",g.async=!0,g.defer=!0,g.nonce=a,g.onload=()=>{var p;d(!0),(p=u.current)===null||p===void 0||p.call(u)},g.onerror=()=>{var p;d(!1),(p=m.current)===null||p===void 0||p.call(m)},document.body.appendChild(g),()=>{document.body.removeChild(g)}},[a]),l}const F8=w.createContext(null);function Y8({clientId:e,nonce:a,onScriptLoadSuccess:r,onScriptLoadError:o,children:l}){const d=P8({nonce:a,onScriptLoadSuccess:r,onScriptLoadError:o}),u=w.useMemo(()=>({clientId:e,scriptLoadedSuccessfully:d}),[e,d]);return Je.createElement(F8.Provider,{value:u},l)}class X8 extends Error{}X8.prototype.name="InvalidTokenError";function G8({usedForm:e,setUsedForm:a,setNavigationBlocked:r}){const[o,l]=w.useState({}),[d,u]=w.useState({}),[m,g]=w.useState({}),[p,y]=w.useState(!1),[v,b]=w.useState(!1),[S,j]=w.useState("login"),[M,R]=w.useState(""),[E,D]=w.useState({emailAlreadyExist:!1,wrongPassword:!1,wrongCode:!1}),{login:N,signup:G,sendCode:H,updatePassword:A}=zr(),$=xn();w.useEffect(()=>{let U=document.getElementById("container"),I;return U&&(I=setTimeout(()=>{e=="login"?U.classList.add("sign-in"):e=="signup"&&U.classList.add("sign-up")},200)),()=>clearTimeout(I)},[]),w.useEffect(()=>{j("login"),P(e)},[e]);const P=U=>{U=="login"?(container.classList.remove("sign-up"),container.classList.add("sign-in")):(container.classList.remove("sign-in"),container.classList.add("sign-up")),a(U)},Z=U=>{const{name:I,value:se}=U.target;l(ue=>({...ue,[I]:se}))},ne=U=>{const{name:I,value:se}=U.target;u(ue=>({...ue,[I]:se}))},me=U=>{const{name:I,value:se}=U.target;g(ue=>({...ue,[I]:se}))},Le=async U=>{U.preventDefault();const I=document.getElementById("password");if(o.password.length==0){I.setCustomValidity("Please enter a password."),I.reportValidity();return}else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]).{8,64}$/.test(o.password)){I.setCustomValidity("Password must follow the below red conditions."),I.reportValidity();return}Kn.flushSync(()=>{b(!0),r(!0)});try{const se=await G(o.username,o.email,o.password);if(se.status==409)D(ue=>({...ue,emailAlreadyExist:!0})),st.notifyError("Email already exists");else if(se.status==201)$("/",{state:{cameFrom:"signup"}}),st.notifySuccess("Welcome to FitFinder");else throw new Error(se.status)}catch(se){st.notifyError("Signup failed: ",se)}Kn.flushSync(()=>{b(!1),r(!1)})},ye=async U=>{U.preventDefault(),Kn.flushSync(()=>{b(!0),r(!0)});try{const I=await N(d.email,d.password);if(I.status==422)st.notifyError("Password is not correct"),D(se=>({...se,wrongPassword:!0}));else if(I.status==200)st.notifySuccess("Welcome back!"),$("/",{state:{cameFrom:"login"}});else throw new Error(I.status)}catch(I){st.notifyError("Login failed: ",I)}Kn.flushSync(()=>{b(!1),r(!1)})},ve=async U=>{U.preventDefault(),Kn.flushSync(()=>{b(!0),r(!0)});try{const I=await H(m.email);if(I.status==200){const se=I.json();R(se.code),st.notifySuccess("Verification code sent to your email."),j("verifyCode")}else throw new Error(I.status)}catch(I){st.notifyError("Sending code failed: ",I)}Kn.flushSync(()=>{b(!1),r(!1)})},Ue=async U=>{U.preventDefault(),Kn.flushSync(()=>{b(!0),r(!0)}),m.code===M?j("updatePassword"):D(I=>({...I,wrongCode:!0})),Kn.flushSync(()=>{b(!1),r(!1)})},z=async U=>{U.preventDefault(),Kn.flushSync(()=>{b(!0),r(!0)});try{const I=await A(m.email,m.password);if(I.status==200)st.notifySuccess("Password updated successfully. You can now log in with your new password."),j("login");else throw new Error(I.status)}catch(I){st.notifyError("Updating password failed: ",I)}Kn.flushSync(()=>{b(!1),r(!1)})};return h.jsxs("div",{id:"container",className:"container",children:[h.jsxs("div",{className:"row",children:[h.jsx("div",{className:"col align-items-center flex-col sign-up",children:h.jsx("div",{className:"form-wrapper align-items-center",children:h.jsxs("form",{onSubmit:Le,className:"form sign-up",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-lock-alt"}),h.jsx("input",{type:"text",name:"username",placeholder:"Username",pattern:"^[A-Za-z]+[A-Za-z0-9._]+$",minLength:3,maxLength:30,title:"Username can only contain letters, numbers, must start with a letter and of length between 3 to 30 characters",onChange:Z,required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{type:"email",name:"email",placeholder:"Email",pattern:"^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[A-Za-z]{2,}$",title:"Please enter a valid email address in the format: username@example.com",onChange:Z,style:{border:E.emailAlreadyExist&&"1px solid red"},required:!0}),E.emailAlreadyExist&&h.jsx("p",{style:{color:"red",textAlign:"start"},children:"Email already exists."})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("input",{type:p?"text":"password",name:"password",placeholder:"Password",title:"Must contain 8-64 characters, with at least one uppercase, one lowercase, one number, and one special character.",onChange:Z,required:!0}),p?h.jsx(Fs,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)}):h.jsx(Ps,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)})]}),h.jsx("div",{style:{display:(o.password==null||o.password.length==0)&&"none"},children:h.jsxs("ul",{className:"password-requirements",children:[h.jsx("li",{style:{color:/.{8,64}/.test(o.password)?"green":"red"},children:"At least 8 characters and at most 64 characters"}),h.jsx("li",{style:{color:/[A-Z]/.test(o.password)?"green":"red"},children:"At least one uppercase letter (A-Z)"}),h.jsx("li",{style:{color:/[a-z]/.test(o.password)?"green":"red"},children:"At least one lowercase letter (a-z)"}),h.jsx("li",{style:{color:/\d/.test(o.password)?"green":"red"},children:"At least one digit (0-9)"}),h.jsxs("li",{style:{color:/[!@#$%^&*()_+\-=\[\]{};':",.<>\/?\\|]/.test(o.password)?"green":"red"},children:["At least one special character (!@#$%^&*()_+-=[]",`;':",. <>/?\\|)`]})]})}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-lock-alt"}),h.jsx("input",{name:"password",type:p?"text":"password",placeholder:"Confirm Password",pattern:o.password,title:"Your passwords must match",required:!0}),p?h.jsx(Fs,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)}):h.jsx(Ps,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)})]}),h.jsx("button",{className:"signupButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Sign up"}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"or"})}),h.jsxs("p",{children:[h.jsx("span",{children:"Already have an account?"}),h.jsx(Ja,{onClick:U=>v?U.preventDefault():P("login"),className:"pointer",children:"  Log in here"})]})]})})}),h.jsxs("div",{className:"col align-items-center flex-col sign-in",children:[h.jsxs("div",{className:"form-wrapper align-items-center",children:[h.jsxs("form",{onSubmit:ye,className:"form sign-in",style:{display:S!="login"&&"none",animation:S=="login"&&"fadeIn 0.5s"},children:[h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{name:"email",placeholder:"Email",required:!0,onChange:ne})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("input",{type:p?"text":"password",name:"password",placeholder:"Password",onChange:ne,style:{border:E.wrongPassword&&"1px solid red"},required:!0}),p?h.jsx(Fs,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)}):h.jsx(Ps,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)})]}),E.wrongPassword&&h.jsxs("p",{style:{color:"red",textAlign:"start"},children:["Entered password is not correct please try again or press"," ",h.jsx("br",{}),h.jsx("strong",{children:"Forgot your Passord"}),"."]}),h.jsx(Ja,{onClick:U=>{U.preventDefault(),j("sendCode")},className:"pointer",children:"Forgot your password?"}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Log in"}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"or"})}),h.jsxs("p",{children:[h.jsx("span",{children:"Don't have an account?"}),h.jsx(Ja,{onClick:U=>v?U.preventDefault():P("signup"),className:"pointer",children:"  Sign up here"})]})]}),h.jsxs("form",{onSubmit:ve,className:"form sign-in send-code-form",style:{display:S!="sendCode"&&"none",animation:S=="sendCode"&&"fadeIn 0.5s"},children:[h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{type:"email",name:"email",placeholder:"Email",required:!0,onChange:me})]}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Send Code"})]}),h.jsxs("form",{onSubmit:Ue,className:"form sign-in send-code-form",style:{display:S!="verifyCode"&&"none",animation:S=="verifyCode"&&"fadeIn 0.5s"},children:[h.jsx("p",{children:"Please copy and past the code sent to your email in the field below."}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-user"}),h.jsx("input",{type:"text",name:"code",placeholder:"Code",style:{border:E.wrongCode&&"1px solid red"},onChange:me,required:!0}),E.wrongCode&&h.jsx("p",{style:{color:"red"},children:"The code doesn't match the one sent to your email, please try again or press resend."})]}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Verify Code"}),h.jsxs("p",{children:[h.jsx(Ja,{onClick:ve,className:"pointer",children:"Resend"}),h.jsx("span",{children:" code."})]})]}),h.jsxs("form",{onSubmit:z,className:"form sign-in",style:{display:S!="updatePassword"&&"none",animation:S=="updatePassword"&&"fadeIn 0.5s"},children:[h.jsxs("div",{className:"input-group",children:[h.jsx("input",{type:p?"text":"password",name:"password",placeholder:"Password",title:"Must contain 8-64 characters, with at least one uppercase, one lowercase, one number, and one special character.",onChange:me,required:!0}),p?h.jsx(Fs,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)}):h.jsx(Ps,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)})]}),h.jsx("div",{style:{display:(m.password==null||m.password.length==0)&&"none"},children:h.jsxs("ul",{className:"password-requirements",children:[h.jsx("li",{style:{color:/.{8,64}/.test(m.password)?"green":"red"},children:"At least 8 characters and at most 64 characters"}),h.jsx("li",{style:{color:/[A-Z]/.test(m.password)?"green":"red"},children:"At least one uppercase letter (A-Z)"}),h.jsx("li",{style:{color:/[a-z]/.test(m.password)?"green":"red"},children:"At least one lowercase letter (a-z)"}),h.jsx("li",{style:{color:/\d/.test(m.password)?"green":"red"},children:"At least one digit (0-9)"}),h.jsxs("li",{style:{color:/[!@#$%^&*()_+\-=\[\]{};':",.<>\/?\\|]/.test(m.password)?"green":"red"},children:["At least one special character (!@#$%^&*()_+-=[]",`;':",. <>/?\\|)`]})]})}),h.jsxs("div",{className:"input-group",children:[h.jsx("i",{className:"bx bxs-lock-alt"}),h.jsx("input",{name:"password",type:p?"text":"password",placeholder:"Confirm Password",pattern:m.password,title:"Your passwords must match",required:!0}),p?h.jsx(Fs,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)}):h.jsx(Ps,{alt:p?"Show password":"Hide password",className:"password-toggle-icon",onClick:()=>y(!p)})]}),h.jsx("button",{className:"loginButton",type:"submit",disabled:v,children:v?h.jsx(Pi,{size:20,color:"#fff"}):"Update Password"})]})]}),h.jsx("div",{className:"form-wrapper"})]})]}),h.jsxs(q8,{className:"row content-row",children:[h.jsxs("div",{className:"col align-items-center flex-col",children:[h.jsx("div",{className:"text sign-in",children:h.jsx("h2",{children:"Welcome back"})}),h.jsx("div",{className:"img sign-in"})]}),h.jsxs("div",{className:"col align-items-center flex-col",children:[h.jsx("div",{className:"img sign-up"}),h.jsx("div",{className:"text sign-up",children:h.jsx("h2",{children:"Join with us"})})]})]})]})}const q8=C.div`
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
`;function I8(){const e=zn(),a=e.state?.form||"signup",[r,o]=w.useState(a),{setNavigationBlocked:l}=Ej();return w.useEffect(()=>{o(e.state?.form)},[e.state]),h.jsx("div",{children:h.jsx(G8,{usedForm:r,setUsedForm:o,setNavigationBlocked:l})})}const K8="/FitFinder/assets/noDataFound-CKZsNQN8.svg";function ad(e){return Pp({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"},child:[]}]})(e)}function Q8({src:e,alt:a}){const[r,o]=w.useState("loading");return h.jsxs(Y2,{children:[r==="loading"&&h.jsx(X2,{}),r==="error"&&h.jsx(fO,{children:"No image"}),h.jsx("img",{src:e,alt:a,onLoad:()=>o("loaded"),onError:()=>o("error"),style:{opacity:r==="loaded"?1:0}})]})}function Z8(){const{device:e}=Lr(),[a,r]=w.useState([]),[o,l]=w.useState([]),[d,u]=w.useState("similarity"),[m,g]=w.useState(!0),[p,y]=w.useState([]),[v,b]=w.useState(e!=="mobile"),S=zn(),j=xn(),M=S.state?.searchingPeice||null,[R,E]=w.useState({category:new Set,store:new Set});w.useEffect(()=>{b(e!=="mobile")},[e]),w.useEffect(()=>{const P=S.state?.products||[];setTimeout(()=>{const Z=JSON.parse(JSON.stringify(P));H(Z),D(Z),N(Z),y(Z),g(!1)},500)},[]);const D=P=>{const Z=[];P.forEach(ne=>{ne.category&&!Z.includes(ne.category)&&Z.push(ne.category)}),r(Z)},N=P=>{const Z=[];P.forEach(ne=>{Z.includes(ne.seller)||Z.push(ne.seller)}),l(Z)},G=P=>{const{hostname:Z}=new URL(P);return Z.replace(/^www\./,"").split(".")[0].replace(/-/g," ")},H=P=>{P.forEach(Z=>{Z.seller=G(Z.itemWebURL)})},A=(P,Z)=>{E(ne=>{const me={...ne,[P]:new Set(ne[P])};return me[P].has(Z)?me[P].delete(Z):me[P].add(Z),me})},$=p.filter(P=>!(R.store.size&&!R.store.has(P.seller)||R.category.size&&!R.category.has(P.category))).sort((P,Z)=>d==="lowest_price"?P.price-Z.price:d==="highest_price"?Z.price-P.price:0);return h.jsx(W8,{children:h.jsxs(J8,{device:e,children:[h.jsxs(eO,{device:e,children:[h.jsx(tO,{children:M?h.jsx(nO,{src:M}):h.jsx(aO,{children:"Segmented Image"})}),h.jsxs(iO,{children:[h.jsx("h3",{children:"Filters"}),e!=="desktop"&&h.jsx(rO,{onClick:()=>b(P=>!P),children:v?"Hide":"Show"})]}),v&&h.jsxs(oO,{device:e,children:[h.jsxs(tb,{children:[h.jsx("h4",{children:"Category"}),a.map(P=>h.jsxs(nb,{onClick:()=>A("category",P),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:R.category.has(P)}),h.jsx("label",{children:P})]},P))]}),h.jsxs(tb,{children:[h.jsx("h4",{children:"Store"}),o.map(P=>h.jsxs(nb,{onClick:()=>A("store",P),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:R.store.has(P)}),h.jsx("label",{children:P})]},P))]})]})]}),h.jsxs(sO,{children:[h.jsx(lO,{children:h.jsxs(cO,{children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:d,onChange:P=>u(P.target.value),children:[h.jsx("option",{value:"similarity",children:"similarity"}),h.jsx("option",{value:"lowest_price",children:"lowest price"}),h.jsx("option",{value:"highest_price",children:"highest price"})]})]})}),h.jsx(uO,{device:e,children:m?Array.from({length:8}).map((P,Z)=>h.jsxs(ab,{children:[h.jsx(Y2,{children:h.jsx(X2,{})}),h.jsxs(ib,{children:[h.jsx(rb,{children:"Loading..."}),h.jsxs(ob,{children:[h.jsx(sb,{children:"--"}),h.jsx(lb,{children:"--"})]})]})]},Z)):$.map(P=>h.jsxs(ab,{onClick:()=>j(`/product/${P.item_id}`,{state:{product:P,similarProducts:$.filter(Z=>Z.category===P.category)}}),children:[h.jsx(Q8,{src:P.imageURL,alt:P.title}),P.favorite&&h.jsx(hO,{"aria-label":"Remove from favorites",title:"Remove from favorites",children:h.jsx(ad,{size:25})}),h.jsxs(ib,{children:[h.jsx(rb,{children:P.title}),h.jsxs(ob,{children:[h.jsxs(sb,{children:[P.price," ",P.currency]}),h.jsx(lb,{children:P.seller})]})]})]},P.item_id))}),$.length===0&&!m&&h.jsx("img",{src:K8,style:{}})]})]})})}const W8=C.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
`,J8=C.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"260px 1fr":"320px 1fr"};
  gap: ${({device:e})=>e==="mobile"?"1.25rem":"2rem"};
  padding: 0 1rem;
`,eO=C.aside`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: ${({device:e})=>e==="desktop"?"sticky":"static"};
  top: 84px;
  align-self: start;
`,tO=C.div`
  border-radius: 10px;
  padding: 1rem;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color);
  background: var(--card-bg-color);
`,nO=C.img`
  max-width: 100%;
  max-height: 320px;
  object-fit: contain;
`,aO=C.div`
  color: #777;
`,iO=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.25rem;
  color: var(--text-color);
`,rO=C.button`
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
`,oO=C.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`,tb=C.div`
  margin-top: 1rem;
`,nb=C.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`,sO=C.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,lO=C.div`
  display: flex;
  justify-content: flex-end;
`,cO=C.div`
  color: var(--text-color);
  display: flex;
  gap: 0.5rem;
  select {
    padding: 0.2rem;
    border-radius: 20px;
  }
`,uO=C.div`
  display: grid;
  gap: ${({device:e})=>e==="mobile"?"0.9rem":"1.1rem"};
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"repeat(2, 1fr)":"repeat(4, 1fr)"};
`,ab=C.div`
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
`,ib=C.div`
  padding: 0.8rem;
`,rb=C.h3`
  font-size: 0.95rem;
  height: 40px;
  overflow: hidden;
`,ob=C.div`
  display: flex;
  justify-content: space-between;
`,sb=C.span`
  font-weight: 700;
`,lb=C.span`
  font-size: 0.85rem;
  color: #666;
`,dO=ct`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,Y2=C.div`
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
`,X2=C.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${dO} 1.4s infinite;
`,fO=C.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #888;
`,hO=C.button`
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
`,wl={addToFavorite:async e=>{try{return await tn(`/api/v1/favorites/${encodeURIComponent(e)}`,{method:"POST",headers:{"Content-Type":"application/json"},skipAuth:!1})}catch(a){throw console.error("favoriteService.addToFavorite error: ",a),a}},removeFromFavorite:async e=>{try{return await tn(`/api/v1/favorites/${encodeURIComponent(e)}`,{method:"DELETE",skipAuth:!1})}catch(a){throw console.error("favoriteService.removeFromFavorite error: ",a),a}},removeFromFavoritesList:async e=>{try{return await tn(`api/v1/favorites/id/${encodeURI(e)}`,{method:"DELETE",skipAuth:!1})}catch(a){throw console.error("favoriteService.removeFromFavoritesList error: ",a),err}},getFavorites:async()=>{try{const e=await tn("/api/v1/favorites",{method:"GET",skipAuth:!1});if(!e.ok){const a=await e.text().catch(()=>null);throw new Error(`Failed to fetch favorites: ${e.status} ${a||""}`)}return await e.json()}catch(e){throw console.error("favoriteService.getFavorites error:",e),e}},toggleFavorite:async(e,a)=>a?await wl.addToFavorite(e):await wl.removeFromFavorite(e)};function mO(){const{id:e}=Cj(),a=zn(),r=xn(),o=a.state?.product||{favorite:!1,item_id:e,title:`Product ${e}`,price:"0.00",seller:"Unknown",imageURL:`https://picsum.photos/seed/product-${e}/600/720`,description:"No description available. In a real app fetch product details from the backend using the id."},l=a.state?.similarProducts||[],d=o.description,[u,m]=d.split(" Description "),[g,p]=w.useState(o.favorite),[y,v]=w.useState(!1),{isAuthenticated:b}=zr(),S=xn(),j=E=>{const D=document.getElementById(E);D&&D.scrollIntoView({behavior:"smooth",block:"start"})};w.useEffect(()=>j("start"),[]);const M=u.split(/[•🔹]|\s{3}/).map(E=>E.trim()).filter(Boolean),R=async()=>{if(!b()){S("/registration",{state:{form:"signup"}});return}try{if(!(await wl.toggleFavorite(o.item_id,!g)).ok)throw new Error("Failed to toggle favorite");p(D=>!D),v(!0),setTimeout(()=>v(!1),480)}catch(E){console.error("Something went wrong in setting as favorite: ",E),st.notifyError("Failed to add to favorites")}};return h.jsxs(pO,{id:"start",children:[h.jsxs(gO,{children:[h.jsx(yO,{children:h.jsxs(vO,{children:[h.jsx(wO,{src:o.imageURL,alt:o.title}),h.jsxs($O,{onClick:R,className:y?"animating":"","aria-label":g?"Unlike":"Like","aria-pressed":g,children:[g?h.jsx(ad,{size:25}):h.jsx(U2,{}),h.jsx(SO,{className:y?"burst":"","aria-hidden":!0})]})]})}),h.jsxs(TO,{children:[h.jsxs(EO,{children:[h.jsx("h1",{children:o.title}),h.jsxs(jO,{children:["$",o.price]})]}),h.jsx(CO,{children:h.jsxs("span",{children:["Seller: ",o?.seller||"Unknown"]})}),h.jsxs(AO,{children:[h.jsx(RO,{children:M.map((E,D)=>h.jsx("li",{children:E},D))}),m&&h.jsx(MO,{children:m})]}),h.jsxs(DO,{children:[h.jsx(OO,{onClick:()=>r(-1),children:"Back"}),h.jsx(zO,{onClick:()=>window.open(o.itemWebURL,"_blank","noopener,noreferrer"),children:"Go to Store"})]})]})]}),h.jsxs(kO,{children:[h.jsx(LO,{children:h.jsx("h3",{children:"Similar products"})}),h.jsx(NO,{children:l.map(E=>h.jsxs(_O,{onClick:()=>r(`/product/${E.item_id}`,{state:{product:E,similar:l}}),children:[h.jsx(UO,{src:E.imageURL,alt:E.title}),h.jsxs(VO,{children:[h.jsx(BO,{children:E.title}),h.jsxs(HO,{children:[h.jsxs("span",{children:["$",E.price]}),h.jsxs("small",{children:["Sold by ",E.seller]})]})]})]},E.item_id))})]})]})}const pO=C.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  /* background: #fafafa; */
  color: var(--text-color);
`,gO=C.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`,yO=C.div``,vO=C.div`
  position: relative;
  background: var(--bg-color);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 10px 0px 20px var(--back-drop-shadow-color);
  transition: 0.5s ease-in-out;
`,xO=ct`
  0% { transform: scale(1); }
  35% { transform: scale(1.22); }
  55% { transform: scale(0.95); }
  100% { transform: scale(1); }
`,bO=ct`
  0% { transform: scale(0.0); opacity: 0.8; }
  40% { transform: scale(1.05); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
`,SO=C.span`
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
    animation: ${bO} 480ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
`,wO=C.img`
  width: 100%;
  max-height: 420px; /* <- reduced from 620px */
  height: auto; /* keep aspect ratio */
  object-fit: contain;
  border-radius: 8px;
`,TO=C.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,EO=C.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h1 {
    margin: 0;
    font-size: 1.3rem;
  }
`,jO=C.span`
  font-weight: 800;
  font-size: 1.2rem;
`,CO=C.div`
  color: var(--meta-text-color);
  font-size: 0.95rem;
  display: flex;
  gap: 1rem;
`,AO=C.div`
  /* background: #ffffff; */
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--text-color);
  color: var(--text-color);
`,RO=C.ul`
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
`,MO=C.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.6;
`,DO=C.div`
  display: flex;
  gap: 0.75rem;
`,zO=C.button`
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
`,OO=C.button`
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
`,kO=C.section`
  max-width: 1200px;
  margin: 1rem auto 3rem;
  padding: 0 0.5rem;
`,LO=C.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.6rem;
  h3 {
    margin: 0;
    font-size: 1.1rem;
  }
`,NO=C.div`
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
`,_O=C.div`
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
`,UO=C.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`,VO=C.div`
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`,BO=C.h4`
  margin: 0;
  font-size: 0.95rem;
  height: 38px;
  overflow: hidden;
`,HO=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
`,$O=C.button`
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
    animation: ${xO} 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }
`,Xh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADwklEQVR4nO2Zy28OURjGZ1Gi0WotkBSRiEttWtRfUCRi4bJAiL8AkbgvlI3Lwq0hlqoLOwtxFy3+BlRcEixI7FRc2ib4+pO3eU7zZqh+882YqeR7kknmnM55z3m+816ecxpFVVQxMQEsAa4AH0iODxrbXDSJtcAA6WE21hRFYi7wSQu5BMyvwMZ84LJsmK05/2a1f1/EVS3gWga2rsnW1WxWV/7EK51LzMvA3hzgq2ymczFgGnAU6AOGyvTtQ2lJuPkPlTnnkNZ4BKiPG2kG3pIML4DJGRKZLJtJ8GY042knAomnQDswJZqgAKbItfscmfpI7hRITFgCYxAKZDoi12iPMgCwWP7+QK7yTY+99wIHgUUZzbVKa38SucBOtRvACuBhAv82om0p56yVrUFrjCCFsUnARWBYpj6qQK7T7kzVY+/rgS59g8ZcAGpSzD+CVESA6cAjV1OOWfIoY5wlmOP2S7rdaSyEiHYikHgHLIv9fRawBdijx95nxr5pA947MjVFELnoSDS5/mXAPaDE77C+u8BS932TI3M+VyIK7GG50+hOALuBHzJpmeo6cBY4B9xwStm+2eXGLZeblew9TyIhOx2LkUAETwENfxjXCJxxicGTOaG+3lyIKPugzDPNudMP/aJby7CxTWRsTKv6GoB+2V6YB5Eg7rpcn8WE4VQCO+Zyhjuur1t9B/IgYtXZsN5lp5JioiGBnUbFzM+QzYCNst2TB5FXGjIiM5RWDTfKteFs3dLYTTG3fZkHkXAAqlN7v9qnKyAS3Guv2nVqf82DyJcYkX1qn6mAiKVlwx5X8Q2fi3StmxUQuV2ka/WOEewDSfSSdNqggn1GLNjv50HEzhPx9GuyI5F7AZ0ac/sP6Xd/UQVxqYqbFbltZdjYrm+/Ay2FFESDlKrhuOvbpb5hZaPGMdyp00mUne5vJ5O6VRZE2rSYQS/yRCaIRouZm8pM51QzwvnDdmJHTITaSbXklfE/JyIDdrJDEny262812aEgjuOnMlWL+362k/GdFawjNZEa52Lv4/LbZAew2R2sNoXsFNuJQKKnkIOV00uBzKCk+Lh6S4F90l189BR21I3tzHl3IuxXGt2gG8w6Pc2qE90uO5UU/JlcPgxldB203BXLctCTNLDHuw4KF3QrowxgNcDOE1roC4lMe55bapXIXJDRXKv9BZ3daiNC/9OVaS3wTGs/bB31uggOZOwasjaa2ARWOxKvgxIPsiOQ+Z/w2tYeZ2o702H+luAfPUVgCHhs7jS6E1VUUUUVVVQRpcMvymbfLBmZ5tUAAAAASUVORK5CYII=",cb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrElEQVR4nO1ZTUtUURh+gjGUdHQWFVgQRKZt8vMXlEG06GNhUvQLSoLKbFG6sVpUKoXLykU7F31ZSk71G7KJLNAWCe4yysaBdJx45Tnxdhhz7of3jnAfOHDPmXPee577fp4zQIQIRYt9AB4BmAWQc9hmubYubBJHAKRdELCbyDgcFomdAL5zI/cB7HYhQ9Y8pAyRJTIDxzA38NijnE0AnlDWMALGQWUSu3yQJ5qYp0zPJhYH0AMgBSBToG1fgX8QWYW8M8M9dgOosIVI1Pji0EEnAWz2kYjImnS4h2kd8eKKxHsABwCUonhRStNOKTIrmulRJIqZgI1SReYaVEc04Qdqae+vaSq/2OQ5CaALwF6f3tXKvU9AObZXbbQAeOPAvoVos8d3llHWApRgtygBMAhgmXK+MUEepXa2sMnzMQAPOCfHNfcAxDy8P2f274VIAsBblVN6GTzWgsy5zi9ptFMVFpESReIrgEbr9+0A2gFcYJPnbdYcMa0ZRSYWBpFBRaJajQuhMQDZPH4hY6MAGtT8akXmbtBEWmjfaUsT5wEsUp5EqqcA+gD0A3imKmWZ06HWNdHMsnwOjIiJTr0WCePAtwBU5lknfnBHBQZN5gbHkkERqVXRyTh2I7+yfNFTBcg4TTKypp5jQnyOsmuCIGKKOwmjBmMcE00Uij6ueanGhjh2OQgiSc6XnGCiU5Y+kc+cVkMVfWZJRbMTlD0eBJHPnG/KjHb2xZmdYoRr2yyz/RQEEXMAKme/k/3bcA5jXhfZL2df3rHuRH5aRC6xL9HIKfq5VhKmIM7+jzBN6zmc40WYppVcxdnTDuulBJOgOPtWy9lfBUGkK0/4HXVhXgNcI1qxw29nWAmxgcltmcluLZzh3N8A9oeVEMFKNcdS3KBDlSh9q5hZgpowJco59dtNF2blmUgzN7NgFXkdqmhMMwD0s42o84do4qxVhMpJNWtVxutOBDzZ5ViC71Dj9Sw7lvKU8Uv0CWNO4FpTxg+42IdnIjFlYjN5ym8pO06qg1Wbik5aEzOqLImFQQT0A0NmgaV4IfVWJX0io0iEdtQ1iPFkZ06Ecwyjx3kLWM5WxzwxpKJTlubky+VDxqfroCaVLAtp4y4c+7/XQeaCTq4h/UANzxPjvJSbZ/vI0CrJbo9P7zqkL+i62UltsCvTMgAfuPer4AXwtCLTyknFijJqwpCYUpX4StlhyGykNsW9/4MK3mpPOPijJ4yWAfCO5vRXExEiRIgQIQI84A9V2ClzJr61RQAAAABJRU5ErkJggg==";function Vm({children:e,unmountOnHide:a=!0}){const r=w.useRef(null),[o,l]=w.useState(!1),[d,u]=w.useState(!1);w.useEffect(()=>{const g=new IntersectionObserver(([p])=>{p.isIntersecting?(l(!0),u(!0)):l(!1)},{threshold:.1});return r.current&&g.observe(r.current),()=>g.disconnect()},[]);const m=a?o:d;return h.jsx("div",{ref:r,children:m?e:null})}function PO({categoricalProducts:e=null,loading:a=!1}){const r=xn();return h.jsx(Vm,{unmountOnHide:!1,children:h.jsxs(YO,{"aria-busy":a,children:[h.jsx(XO,{children:"Most Searched for Items"}),a&&h.jsx(JO,{role:"status",children:"Loading recommendations…"}),h.jsx(GO,{children:a?Array.from({length:6}).map((o,l)=>h.jsxs(QO,{"aria-hidden":!0,children:[h.jsx(ZO,{}),h.jsx(WO,{})]},l)):Object.entries(e).map(([o,l])=>h.jsxs(qO,{onClick:()=>r("/search-result",{state:{products:e[o],searchingPeice:e[o][0].imageURL}}),children:[h.jsx(IO,{src:l[0].imageURL,alt:o}),h.jsx(KO,{children:o})]},o))})]})})}const FO=ct`
    from{
        opacity: 0.5;
        transform: translateX(10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`,YO=C.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${FO} 1s;
`,XO=C.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 1rem;
`,GO=C.div`
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
`,qO=C.div`
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
`,IO=C.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 14px;
`,KO=C.span`
  font-size: 14px;
  color: var(--text-color);
`,G2=ct`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,QO=C.div`
  width: 140px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,ZO=C.div`
  width: 100%;
  height: 140px;
  border-radius: 14px;
  background: var(--skeleton-loader-bg);
  background-size: 200% 100%;
  animation: ${G2} 1.2s linear infinite;
`,WO=C.div`
  width: 70px;
  height: 14px;
  border-radius: 6px;
  background: var(--skeleton-loader-bg);
  background-size: 200% 100%;
  animation: ${G2} 1.2s linear infinite;
`,JO=C.span`
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
`;function e9({onClose:e}){const[a,r]=w.useState(0),[o,l]=w.useState(!1),d=[{id:1,label:"Streetwear",img:"https://source.unsplash.com/600x400/?streetwear,fashion,outfit",fallback:"https://loremflickr.com/600/400/streetwear,fashion,outfit"},{id:2,label:"Formal",img:"https://source.unsplash.com/600x400/?suit,formal,blazer,evening-wear",fallback:"https://loremflickr.com/600/400/suit,formal,blazer"},{id:3,label:"Boho",img:"https://source.unsplash.com/600x400/?boho,bohemian,dress,floral",fallback:"https://loremflickr.com/600/400/boho,bohemian,dress,floral"},{id:4,label:"Athleisure",img:"https://source.unsplash.com/600x400/?athleisure,sportswear,hoodie,leggings",fallback:"https://loremflickr.com/600/400/athleisure,sportswear,hoodie"}],u=()=>{a<2?r(a+1):(r(3),setTimeout(()=>m(),1500))},m=()=>{l(!0),setTimeout(()=>e&&e(),400)};w.useEffect(()=>{const p=setTimeout(()=>{},800);return()=>clearTimeout(p)},[]);const g=({src:p,fallback:y,alt:v})=>{const[b,S]=w.useState(p);return h.jsx(p9,{src:b,alt:v,loading:"lazy",referrerPolicy:"no-referrer",onError:()=>{y&&b!==y&&S(y)}})};return h.jsx(a9,{children:h.jsxs(i9,{role:"dialog","aria-modal":"true",closing:o,children:[h.jsxs(r9,{children:[h.jsx(o9,{children:"Quick Preferences"}),h.jsx(s9,{"aria-label":"Close",onClick:m,children:"×"})]}),h.jsx(l9,{children:"Hello new user 👋. A few quick questions to personalize your recommendations."}),a!==3&&h.jsx(c9,{children:[0,1,2].map(p=>h.jsx(u9,{$active:a===p},p))}),h.jsxs(d9,{children:[a===0&&h.jsxs(qh,{children:[h.jsx(Gh,{children:"Your gender"}),h.jsxs(ub,{children:[h.jsx(bo,{onClick:u,children:"Male"}),h.jsx(bo,{onClick:u,children:"Female"}),h.jsx(f9,{onClick:u,children:"Prefer not to say"})]})]}),a===1&&h.jsxs(qh,{children:[h.jsx(Gh,{children:"Your favorite color"}),h.jsxs(ub,{children:[h.jsx(bo,{onClick:u,children:"Red"}),h.jsx(bo,{onClick:u,children:"Blue"}),h.jsx(bo,{onClick:u,children:"Black"}),h.jsx(bo,{onClick:u,children:"White"})]})]}),a===2&&h.jsxs(qh,{children:[h.jsx(Gh,{children:"Your favorite style"}),h.jsx(h9,{children:d.map(p=>h.jsxs(m9,{onClick:u,children:[h.jsx(g,{src:p.img,fallback:p.fallback,alt:`${p.label} example`}),h.jsx(g9,{children:p.label})]},p.id))})]}),a===3&&h.jsxs(x9,{children:[h.jsx(b9,{children:"✔"}),h.jsx(S9,{children:"Thanks!"}),h.jsx(w9,{children:"Your preferences have been saved."})]})]}),a!==3&&h.jsx(v9,{children:h.jsx(y9,{onClick:m,children:"Skip for now"})})]})})}const t9=ct`
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,n9=ct`
  from { opacity: 1; transform: translateY(0) scale(1); }
  to { opacity: 0; transform: translateY(-8px) scale(0.98); }
`,a9=C.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  z-index: 9999;
  padding: 1rem;
`,i9=C.div`
  width: 100%;
  max-width: 520px;
  background: var(--bg-color);
  color: var(--text-color);
  border-radius: 16px;
  padding: 18px 18px 12px 18px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: ${e=>e.closing?n9:t9} 0.28s ease;
`,r9=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,o9=C.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
`,s9=C.button`
  appearance: none;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.4rem;
  line-height: 1;
  padding: 0.25rem 0.4rem;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
  &:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  &:active {
    transform: scale(0.96);
  }
`,l9=C.p`
  margin: 8px 4px 12px 4px;
  color: var(--meta-text-color, #8a8a8a);
  font-size: 0.9rem;
`,c9=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 4px 14px 4px;
`,u9=C.span`
  width: ${e=>e.$active?"12px":"8px"};
  height: ${e=>e.$active?"12px":"8px"};
  border-radius: 50%;
  background: ${e=>e.$active?"var(--primary-color, #4d96ff)":"rgba(127,127,127,0.35)"};
  box-shadow: ${e=>e.$active?"0 0 0 3px rgba(77,150,255,0.2)":"none"};
  transition: all 0.2s ease;
`,d9=C.div`
  padding: 4px;
`,Gh=C.h2`
  margin: 0 0 10px 0;
  font-size: 1.05rem;
  font-weight: 700;
  text-align: center;
`,ub=C.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`,q2=`
  width: 100%;
  padding: 12px 14px;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.2s ease, background 0.2s ease;
  outline: none;
  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  &:focus-visible { box-shadow: 0 0 0 3px rgba(77,150,255,0.35); }
`,bo=C.button`
  ${q2}
  background: linear-gradient(135deg, var(--primary-color, #4d96ff), var(--secondary-color, #6bcb77));
  color: #ffffff;
`,f9=C.button`
  ${q2}
  background: rgba(127,127,127,0.12);
  color: var(--text-color);
`,h9=C.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 12px;
`,m9=C.button`
  border: none;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  color: var(--text-color);
  background: var(--card-bg, rgba(127, 127, 127, 0.08));
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`,p9=C.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
`,g9=C.div`
  padding: 8px 10px;
  text-align: center;
  font-size: 0.9rem;
`,y9=C.button`
  appearance: none;
  background: transparent;
  border: none;
  color: var(--meta-text-color, #8a8a8a);
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`,v9=C.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding: 4px 0 4px 0;
`,x9=C.div`
  text-align: center;
  padding: 18px 0 8px 0;
`,b9=C.div`
  font-size: 42px;
  line-height: 1;
  color: var(--primary-color, #4d96ff);
  margin-bottom: 8px;
`,S9=C.div`
  font-size: 1.4rem;
  font-weight: 800;
`,w9=C.div`
  margin-top: 6px;
  color: var(--meta-text-color, #8a8a8a);
  font-size: 0.95rem;
`,qh=C.section`
  display: flex;
  flex-direction: column;
`,T9={getRandomProducts:()=>tn("/api/v1/items/random",{method:"GET",skipAuth:!0})};function E9(){const e=w.useRef(null),a=w.useRef(null),[r,o]=w.useState(!1),[l,d]=w.useState(null),[u,m]=w.useState({}),[g,p]=w.useState(!0),[y,v]=w.useState(!1),[b,S]=w.useState(!1),M=zn().state?.cameFrom||null,R=xn(),{device:E}=Lr(),D="https://docs.google.com/forms/d/e/1FAIpQLSdGvtXgGuBytAzt8AqkEdjSzmdoEGDHlA77UC5fb46Su0rNog/viewform?usp=dialog",N="https://www.instagram.com/fitfinder_csed_2026?igsh=ZG5mamtod3lyMWZo&utm_source=ig_contact_invite",G=ne=>{const me=ne.target.files[0];me&&(d(URL.createObjectURL(me)),o(!0),S(!1))},H=ne=>{const me=document.getElementById(ne);me&&me.scrollIntoView({behavior:"smooth",block:"start"})};w.useEffect(()=>H("hero"),[]);const A=()=>{E==="desktop"?P():S(!0)},$=()=>{a.current.click()},P=()=>{e.current.click()};w.useEffect(()=>{r||(e.current&&(e.current.value=""),a.current&&(a.current.value=""))},[r]),w.useEffect(()=>{(M==="signup"||M==="google-signup")&&v(!0)},[M]),w.useEffect(()=>{p(!0),T9.getRandomProducts().then(ne=>{if(ne.ok)return ne.json();throw new Error("Couldn't fetch random products.")}).then(ne=>{m(Z(ne)),p(!1)}).catch(ne=>new Error(ne))},[]);const Z=(ne,{includeNullCategory:me=!1}={})=>{if(!Array.isArray(ne))throw new TypeError("Expected an array of products");return ne.reduce((Le,ye)=>{let ve=ye?.category;if(typeof ve=="string"&&(ve=ve.trim()),!ve){if(!me)return Le;ve="Uncategorized"}return Le[ve]||(Le[ve]=[]),Le[ve].push(ye),Le},{})};return h.jsxs(N9,{children:[h.jsxs(U9,{id:"hero",device:E,children:[h.jsxs($9,{device:E,children:[h.jsx(_9,{children:h.jsx("h1",{children:"Welcome to"})}),h.jsx(wS,{fontSize:E==="mobile"?60:E==="tablet"?100:150}),h.jsx("input",{type:"file",accept:"image/*",ref:e,style:{display:"none"},onChange:G}),h.jsx("input",{type:"file",accept:"image/*",capture:"camera",ref:a,style:{display:"none"},onChange:G}),h.jsxs(V9,{device:E,children:[E==="desktop"?h.jsxs(B9,{device:E,onClick:A,onMouseOver:ne=>ne.currentTarget.children[0].src=cb,onMouseOut:ne=>ne.currentTarget.children[0].src=Xh,onFocus:ne=>ne.currentTarget.children[0].src=cb,onBlur:ne=>ne.currentTarget.children[0].src=Xh,tabIndex:0,children:[h.jsx("img",{src:Xh,style:{width:"24px",height:"24px",cursor:"pointer"},alt:"Camera Icon"}),h.jsx("label",{style:{marginLeft:"0.5rem",cursor:"pointer"},children:"Search With Image"})]}):h.jsx(X9,{device:E,onClick:()=>R("/registration",{state:{form:"signup"}}),children:"Join"}),h.jsx(H9,{device:E,onClick:()=>R("/about-us",{state:{toSection:"how-it-works"}}),children:"Demo"})]})]}),E==="desktop"&&h.jsx(P9,{device:E,children:h.jsx(z9,{children:h.jsxs(O9,{children:[h.jsxs(k9,{viewBox:"0 0 280 280",preserveAspectRatio:"xMidYMid slice",children:[h.jsx(Ih,{d:"M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z"}),h.jsx(Ih,{d:"M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z"}),h.jsx(Ih,{d:"M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z"}),h.jsx(Kh,{d:"M 70 60 Q 90 40 110 50 L 130 70 Q 120 90 100 100 Q 80 95 70 80 Z"}),h.jsx(Kh,{d:"M 150 90 Q 180 70 200 100 L 210 140 Q 180 160 150 150 Z"}),h.jsx(Kh,{d:"M 80 150 Q 110 140 130 160 L 120 200 Q 90 210 70 190 Z"}),h.jsx(su,{cx:"95",cy:"75"}),h.jsx(su,{cx:"175",cy:"120"}),h.jsx(su,{cx:"105",cy:"175"}),h.jsx(su,{cx:"200",cy:"85"})]}),h.jsx(L9,{children:"Click to refine"})]})})})]}),h.jsx(PO,{categoricalProducts:u,loading:g}),h.jsx(Vm,{unmountOnHide:!0,children:h.jsxs(F9,{children:[h.jsx("h1",{children:"Tell us what you think about FitFinder"}),h.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginLeft:"1rem"},children:[h.jsx(kz,{width:E==="mobile"?50:24,height:E==="mobile"?50:24,flexShrink:0}),h.jsxs("span",{children:["We'd love to hear your feedback! Click"," ",h.jsx(Ja,{style:{color:"var(--links-color)"},onClick:()=>window.open(D),children:"here"})," ","and drop us a message."]})]})]})}),h.jsx(Vm,{unmountOnHide:!0,children:h.jsxs(Y9,{children:[h.jsx("h1",{children:"Follow us on social media"}),h.jsxs("div",{style:{display:"flex",gap:"0.3rem",alignItems:"center"},children:[h.jsx(Mz,{width:E==="mobile"?120:60,height:E==="mobile"?120:60}),h.jsxs("p",{children:["Connect with us on Instagram and stay up to date with",E!=="mobile"&&h.jsx("br",{}),"our announcements and future updates. ",E!=="mobile"&&h.jsx("br",{}),h.jsx(Ja,{style:{color:"var(--links-color)"},onClick:()=>window.open(N),children:"Follow us"})]})]})]})}),r&&h.jsx(N2,{imageURL:l,setImageURL:d,imageUploaded:r,setImageUploaded:o}),y&&h.jsx(e9,{onClose:()=>v(!1)}),b&&h.jsx(G9,{onClick:()=>S(!1),children:h.jsxs(q9,{device:E,onClick:ne=>ne.stopPropagation(),children:[h.jsx(I9,{device:E,children:"Choose Image Source"}),h.jsxs(K9,{device:E,children:[h.jsxs(db,{device:E,onClick:$,children:[h.jsx(_m,{size:24}),h.jsx("span",{children:"Take Photo"})]}),h.jsxs(db,{device:E,onClick:P,children:[h.jsx(V2,{size:24}),h.jsx("span",{children:"Upload from Device"})]})]}),h.jsx(Q9,{device:E,onClick:()=>S(!1),children:"Cancel"})]})})]})}const I2=ct`
    from{
        opacity: 0.5;
        transform: translateX(-10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`,K2=ct`
    from{
        opacity: 0.5;
        transform: translateX(10%);
    }  
    to{
        opacity: 1;
        transform: translateX(0%);
    }
`,j9=ct`
    from{
        opacity: 0.5;
    }
    to{
        opacity: 1;
    }
`,C9=ct`
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
`,A9=ct`
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
`,R9=ct`
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
`,M9=ct`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`,D9=ct`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 150, 255, 0.3), inset 0 0 20px rgba(0, 150, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 150, 255, 0.6), inset 0 0 30px rgba(0, 150, 255, 0.2);
  }
`,z9=C.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,O9=C.div`
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
  animation: ${D9} 3s ease-in-out infinite;

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
    animation: ${M9} 3s infinite;
    pointer-events: none;
  }
`,k9=C.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 1px rgba(0, 150, 255, 0.3));
`,Ih=C.path`
  fill: rgba(0, 150, 255, 0.35);
  animation: ${C9} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 1.2s;
  }
`,Kh=C.path`
  fill: none;
  stroke: rgba(255, 105, 180, 1);
  stroke-width: 2.5;
  animation: ${A9} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:nth-child(2) {
    animation-delay: 0.9s;
  }

  &:nth-child(3) {
    animation-delay: 1.5s;
  }
`,su=C.circle`
  fill: rgba(255, 105, 180, 1);
  animation: ${R9} 1.8s ease-in-out infinite;

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
`,L9=C.div`
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
`,N9=C.div`
  width: 100%;
  max-width: 100%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  animation: ${j9} 1s;
  background-color: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
`,_9=C.div`
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
`,U9=C.div`
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
`,V9=C.div`
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
`,B9=C.button`
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
`,H9=C.button`
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
`,$9=C.div`
  animation: ${I2} 1s;
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
`,P9=C.div`
  animation: ${K2} 1s;
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
`,F9=C.div`
  width: 100%;
  padding: 2rem 1rem;
  animation: ${K2} 1s;
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
`,Y9=C.div`
  width: 100%;
  padding: 2rem 1rem;
  animation: ${I2} 1s;
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
`,X9=C.button`
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
`,G9=C.div`
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
`,q9=C.div`
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
`,I9=C.h2`
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
`,K9=C.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.device==="mobile"?"0.75rem":"1rem"};

  @media (max-width: var(--mobile)) {
    gap: 0.75rem;
  }
`,db=C.button`
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
`,Q9=C.button`
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
`,Qh=e=>{const[a,r,o]=e.split("/").map(Number);return new Date(o,r-1,a)},Z9=e=>{if(!e)return null;const[a,r,o]=e.split("-");return`${o}/${r}/${a}`};function W9({src:e,alt:a}){const[r,o]=w.useState("loading");return h.jsxs(pk,{children:[r==="loading"&&h.jsx(gk,{}),r==="error"&&h.jsx(yk,{children:"Image unavailable"}),h.jsx("img",{src:e,alt:a,onLoad:()=>o("loaded"),onError:()=>o("error"),style:{opacity:r==="loaded"?1:0}})]})}function J9(){const{device:e}=Lr(),[a,r]=w.useState("most_recent"),[o,l]=w.useState({date:new Set,specificDate:""}),d=xn(),{isAuthenticated:u}=zr(),[m,g]=w.useState(e!=="mobile");w.useEffect(()=>{u()||d("/registration",{state:{form:"signup"}})},[]);const p=S=>{const j=document.getElementById(S);j&&j.scrollIntoView({behavior:"smooth",block:"start"})};w.useEffect(()=>p("start"),[]);const y=[{imageURL:"https://picsum.photos/200",prompt:"Red t-shirt with vertical black stripes.",date:"20/12/2025",numOfLikes:"5",id:"1"},{imageURL:"https://picsum.photos/201",prompt:"Minimal hoodie design.",date:"18/12/2025",numOfLikes:"12",id:"2"},{imageURL:"https://picsum.photos/202",prompt:"Cyberpunk jacket concept.",date:"10/12/2025",numOfLikes:"7",id:"3"}];w.useEffect(()=>{g(e!=="mobile")},[e]);const v=(S,j)=>{l(M=>{const R={...M,[S]:new Set(M[S])};return R[S].has(j)?R[S].delete(j):R[S].add(j),R})},b=y.filter(S=>{const j=Qh(S.date),M=new Date;let R=!1,E=!1;return o.date.size>0&&(R=[...o.date].some(D=>{const N=(M-j)/864e5;return D==="today"?j.toDateString()===M.toDateString():D==="last_7"?N<=7:D==="last_30"?N<=30:!1})),o.specificDate&&(E=S.date===Z9(o.specificDate)),o.date.size===0&&!o.specificDate?!0:R||E}).sort((S,j)=>{const M=Qh(S.date),R=Qh(j.date);return a==="most_recent"?R-M:M-R});return h.jsx(tk,{children:h.jsxs(nk,{id:"start",device:e,children:[h.jsxs(ak,{device:e,children:[h.jsx("h1",{style:{marginBottom:"1rem"},children:"History"}),h.jsxs(ik,{children:[h.jsx("h3",{children:"Filters"}),e!=="desktop"&&h.jsx(rk,{onClick:()=>g(S=>!S),children:m?"Hide":"Show"})]}),m&&h.jsx(ok,{device:e,children:h.jsxs(sk,{children:[h.jsx("h4",{children:"Date"}),[{label:"Today",value:"today"},{label:"Last 7 days",value:"last_7"},{label:"Last 30 days",value:"last_30"}].map(S=>h.jsxs(lk,{children:[h.jsx("input",{type:"checkbox",checked:o.date.has(S.value),onChange:()=>v("date",S.value)}),S.label]},S.value)),h.jsxs(ck,{children:[h.jsx("label",{children:"Specific date"}),h.jsx("input",{type:"date",value:o.specificDate,onChange:S=>l(j=>({...j,specificDate:S.target.value}))})]})]})})]}),h.jsxs(uk,{children:[h.jsx(dk,{children:h.jsxs(fk,{children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:a,onChange:S=>r(S.target.value),children:[h.jsx("option",{value:"most_recent",children:"Most recent"}),h.jsx("option",{value:"least_recent",children:"Least recent"})]})]})}),h.jsx(hk,{device:e,children:b.map(S=>h.jsxs(mk,{children:[h.jsx(W9,{src:S.imageURL,alt:"segment"}),h.jsxs(vk,{children:[h.jsx(xk,{children:S.prompt}),h.jsxs(bk,{children:[h.jsx(fb,{children:S.date}),h.jsxs(fb,{children:[h.jsx(ad,{})," ",S.numOfLikes]})]})]})]},S.id))})]})]})})}const ek=ct`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,tk=C.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  color: var(--text-color);
  transition: 0.5s ease-in-out;
`,nk=C.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"260px 1fr":"320px 1fr"};
  gap: ${({device:e})=>e==="mobile"?"1.25rem":"2rem"};
  padding: 0 1rem;
`,ak=C.aside`
  position: ${({device:e})=>e==="desktop"?"sticky":"static"};
  top: 84px;
  align-self: start;
`,ik=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,rk=C.button.attrs({type:"button"})`
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
`,ok=C.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`,sk=C.div`
  margin-top: 1rem;
`,lk=C.label`
  display: flex;
  gap: 0.6rem;
  margin: 0.4rem 0;
`,ck=C.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;

  input {
    padding: 0.3rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 20px;
  }
`,uk=C.section``,dk=C.div`
  display: flex;
  justify-content: flex-end;
`,fk=C.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  select {
    padding: 0.2rem;
    margin-bottom: 0.5rem;
    border-radius: 20px;
  }
`,hk=C.div`
  display: grid;
  gap: ${({device:e})=>e==="mobile"?"0.9rem":"1.1rem"};
  grid-template-columns: 1fr;
`,mk=C.div`
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
`,pk=C.div`
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
`,gk=C.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 400px 100%;
  animation: ${ek} 1.4s infinite linear;
`,yk=C.div`
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #666;
`,vk=C.div`
  padding: 0.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,xk=C.h3`
  font-size: 0.95rem;
`,bk=C.div`
  display: flex;
  justify-content: space-between;
`,fb=C.span`
  font-size: 0.85rem;
  color: #666;
`,Sk="/FitFinder/assets/noFavorites-Cey5RiO6.svg";function wk({src:e,alt:a}){const[r,o]=w.useState("loading");return h.jsxs(Q2,{children:[r==="loading"&&h.jsx(Z2,{}),r==="error"&&h.jsx(Nk,{children:"No image"}),h.jsx("img",{src:e,alt:a,onLoad:()=>o("loaded"),onError:()=>o("error"),style:{opacity:r==="loaded"?1:0}})]})}function Tk(){const{device:e}=Lr(),[a,r]=w.useState([]),[o,l]=w.useState([]),[d,u]=w.useState("similarity"),[m,g]=w.useState(!0),[p,y]=w.useState([]),v=xn();zn();const b=xn(),{isAuthenticated:S}=zr(),[j,M]=w.useState({category:new Set,store:new Set}),[R,E]=w.useState(e!=="mobile"),[D,N]=w.useState(!1),[G,H]=w.useState(null);w.useEffect(()=>{E(e!=="mobile")},[e]),w.useEffect(()=>{S()||v("/registration",{state:{form:"signup"}})},[]),w.useEffect(()=>{wl.getFavorites().then(z=>{ye(z),ne(z),me(z),y(z),g(!1)}).catch(z=>{console.error("Error in retreiving favorites: ",z)})},[]);const A=async z=>{try{const U=await wl.removeFromFavorite(z);if(!U.ok){const I=await U.text().catch(()=>null);throw new Error(`Failed to remove from favorite: ${U.status} ${I||""}`)}y(I=>I.filter(se=>se.item_id!==z)),st.notifySuccess("Removed from favorites")}catch(U){st.notifyError("Failed to remove from favorites"),console.error(U)}},$=(z,U)=>{U&&typeof U.stopPropagation=="function"&&U.stopPropagation(),H(z),N(!0)},P=async()=>{N(!1),G&&(await A(G),H(null))},Z=()=>{N(!1),H(null)},ne=z=>{const U=[];z.length>0&&z.forEach(I=>{I.category&&!U.includes(I.category)&&U.push(I.category)}),r(U)},me=z=>{const U=[];z.length>0&&z.forEach(I=>{U.includes(I.seller)||U.push(I.seller)}),l(U)},Le=z=>{const{hostname:U}=new URL(z);return U.replace(/^www\./,"").split(".")[0].replace(/-/g," ")},ye=z=>{z.length>0&&z.forEach(U=>{U.seller=Le(U.itemWebURL)})},ve=(z,U)=>{M(I=>{const se={...I,[z]:new Set(I[z])};return se[z].has(U)?se[z].delete(U):se[z].add(U),se})},Ue=p.length>0?p.filter(z=>!(j.store.size&&!j.store.has(z.seller)||j.category.size&&!j.category.has(z.category))).sort((z,U)=>d==="lowest_price"?z.price-U.price:d==="highest_price"?U.price-z.price:0):[];return h.jsx(Ek,{children:h.jsxs(jk,{device:e,children:[h.jsxs(Ck,{device:e,children:[h.jsx("h1",{style:{marginBottom:"1rem"},children:"Favorites"}),h.jsxs(Ak,{children:[h.jsx("h3",{children:"Filters"}),e!=="desktop"&&h.jsx(Rk,{onClick:()=>E(z=>!z),children:R?"Hide":"Show"})]}),R&&h.jsxs(Mk,{device:e,children:[h.jsxs(hb,{children:[h.jsx("h4",{children:"Category"}),a.map(z=>h.jsxs(mb,{onClick:()=>ve("category",z),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:j.category.has(z)}),h.jsx("label",{children:z})]},z))]}),h.jsxs(hb,{children:[h.jsx("h4",{children:"Store"}),o.map(z=>h.jsxs(mb,{onClick:()=>ve("store",z),children:[h.jsx("input",{type:"checkbox",readOnly:!0,checked:j.store.has(z)}),h.jsx("label",{children:z})]},z))]})]})]}),h.jsxs(Dk,{children:[h.jsx(zk,{children:h.jsxs(Ok,{children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:d,onChange:z=>u(z.target.value),children:[h.jsx("option",{value:"similarity",children:"similarity"}),h.jsx("option",{value:"lowest_price",children:"lowest price"}),h.jsx("option",{value:"highest_price",children:"highest price"})]})]})}),h.jsx(kk,{device:e,children:m?Array.from({length:8}).map((z,U)=>h.jsxs(pb,{children:[h.jsx(Q2,{children:h.jsx(Z2,{})}),h.jsxs(gb,{children:[h.jsx(yb,{children:"Loading..."}),h.jsxs(vb,{children:[h.jsx(xb,{children:"--"}),h.jsx(bb,{children:"--"})]})]})]},U)):Ue.length>0&&Ue.map(z=>h.jsxs(pb,{onClick:()=>b(`/product/${z.item_id}`,{state:{product:z,similarProducts:Ue.filter(U=>U.category===z.category)}}),children:[h.jsx(wk,{src:z.imageURL,alt:z.title}),h.jsx(_k,{onClick:U=>$(z.item_id,U),"aria-label":"Remove from favorites",title:"Remove from favorites",children:h.jsx(ad,{size:25})}),h.jsxs(gb,{children:[h.jsx(yb,{children:z.title}),h.jsxs(vb,{children:[h.jsxs(xb,{children:[z.price," ",z.currency]}),h.jsx(bb,{children:z.seller})]})]})]},z.item_id))}),D&&h.jsx(Bk,{role:"dialog","aria-modal":"true",onClick:Z,children:h.jsxs(Hk,{onClick:z=>z.stopPropagation(),children:[h.jsx("h3",{children:"Remove from favorites?"}),h.jsx("p",{children:"Are you sure you want to remove this item from your favorites?"}),h.jsxs($k,{children:[h.jsx(Fk,{onClick:Z,children:"Cancel"}),h.jsx(Pk,{onClick:P,children:"Yes, remove"})]})]})}),Ue.length==0&&!m&&h.jsx("img",{src:Sk,style:{}})]})]})})}const Ek=C.main`
  padding-top: 84px;
  min-height: calc(100vh - 84px);
  color: var(--text-color);
`,jk=C.div`
  max-width: 1200px;
  margin: 1.2rem auto;
  display: grid;
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"260px 1fr":"320px 1fr"};
  gap: ${({device:e})=>e==="mobile"?"1.25rem":"2rem"};
  padding: 0 1rem;
`,Ck=C.aside`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: ${({device:e})=>e==="desktop"?"sticky":"static"};
  top: 84px;
  align-self: start;
`,Ak=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`,Rk=C.button.attrs({type:"button"})`
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
`,Mk=C.div`
  background: var(--bg-color);
  border-radius: 10px;
  padding: 1rem;
  color: var(--text-color);
  transition: 0.3s ease-in-out;
  box-shadow: 4px 4px 10px var(--back-drop-shadow-color);
  border: 1px solid var(--text-color);
`,hb=C.div`
  margin-top: 1rem;
`,mb=C.label`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
`,Dk=C.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zk=C.div`
  display: flex;
  justify-content: flex-end;
`,Ok=C.div`
  display: flex;
  gap: 0.5rem;
  select {
    padding: 0.2rem;
    border-radius: 20px;
  }
`,kk=C.div`
  display: grid;
  gap: ${({device:e})=>e==="mobile"?"0.9rem":"1.1rem"};
  grid-template-columns: ${({device:e})=>e==="mobile"?"1fr":e==="tablet"?"repeat(2, 1fr)":"repeat(4, 1fr)"};
`,pb=C.div`
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
`,gb=C.div`
  padding: 0.8rem;
`,yb=C.h3`
  font-size: 0.95rem;
  height: 40px;
  overflow: hidden;
`,vb=C.div`
  display: flex;
  justify-content: space-between;
`,xb=C.span`
  font-weight: 700;
`,bb=C.span`
  font-size: 0.85rem;
  color: #666;
`,Lk=ct`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,Q2=C.div`
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
`,Z2=C.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: ${Lk} 1.4s infinite;
`,Nk=C.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #888;
`,_k=C.button`
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
`,Uk=ct`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,Vk=ct`
  0% { opacity: 0; transform: translateY(12px) scale(0.96); }
  60% { opacity: 1; transform: translateY(-6px) scale(1.03); }
  100% { transform: translateY(0) scale(1); }
`,Bk=C.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.639);
  z-index: 1000;
  animation: ${Uk} 220ms ease forwards;
`,Hk=C.div`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 1.25rem;
  border-radius: 8px;
  width: min(420px, 90%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: left;
  will-change: transform, opacity;
  transform-origin: center center;
  animation: ${Vk} 320ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;

  h3 {
    margin: 0 0 0.5rem 0;
  }
  p {
    margin: 0 0 1rem 0;
    color: var(--text-color);
  }
`,$k=C.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`,Pk=C.button.attrs({type:"button"})`
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
`,Fk=C.button.attrs({type:"button"})`
  border: solid 1px transparent;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.95;
    border-color: black;
  }
`,Yk=()=>{const e=zn(),{toSection:a}=e.state||{},r=o=>{const l=document.getElementById(o);l&&l.scrollIntoView({behavior:"smooth",block:"start"})};return w.useEffect(()=>r(a||"hero"),[]),h.jsxs(Xk,{children:[h.jsx(Gk,{children:h.jsxs(qk,{children:[h.jsx(ki,{onClick:()=>r("hero"),children:"About"}),h.jsx(ki,{onClick:()=>r("introduction"),children:"Introduction"}),h.jsx(ki,{onClick:()=>r("how-it-works"),children:"How It Works"}),h.jsx(ki,{onClick:()=>r("access"),children:"User Access"}),h.jsx(ki,{onClick:()=>r("features"),children:"Features"}),h.jsx(ki,{onClick:()=>r("personalization"),children:"Personalization"}),h.jsx(ki,{onClick:()=>r("academic"),children:"Academic"}),h.jsx(ki,{onClick:()=>r("contributors"),children:"Contributors"})]})}),h.jsxs(Ik,{children:[h.jsx(Li,{id:"hero",children:h.jsxs(Ni,{children:[h.jsx(Kk,{children:"About FITFINDER"}),h.jsx(Qk,{children:"A smart visual fashion discovery platform that turns inspiration into action."})]})}),h.jsx(Li,{id:"introduction",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(yr,{children:"What is FITFINDER?"}),h.jsx(qs,{children:"FITFINDER is a web application that allows users to discover clothing items using images instead of traditional text-based searches."}),h.jsx(qs,{children:"The platform uses intelligent image segmentation using (SAM), accurate embedding for images and text prompts by (OpenCLIP), and visual similarity search using (FAISS Index)."})]})}),h.jsx(Li,{id:"how-it-works",children:h.jsxs(Ni,{children:[h.jsx(yr,{children:"How It Works"}),h.jsx(Wk,{children:h.jsx(Jk,{controls:!0,src:"https://www.dropbox.com/scl/fi/wtzwj2trdhnd611o44mg5/How-to-use.mp4?rlkey=n6xa1fwtukjud63ujsg3g6ob1&st=h8i4vpfb&raw=1",poster:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f79b4e' width='400' height='300'/%3E%3C/svg%3E"})}),h.jsxs(Zk,{children:[h.jsx("li",{children:"Upload an image containing a person."}),h.jsx("li",{children:"Click Segment to highlight clothing pieces."}),h.jsx("li",{children:"Select the clothing item to segment."}),h.jsx("li",{children:"(Optionally) add positive/negative points and re-segment to refine the segmentation."}),h.jsx("li",{children:"The selected clothing item is cropped."}),h.jsx("li",{children:"(Optionally) add a text prompt to refine the search."}),h.jsx("li",{children:"Click search to retrieve similar products."}),h.jsx("li",{children:"Visit original product websites."})]})]})}),h.jsx(Li,{id:"access",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(yr,{children:"Accessible for Everyone"}),h.jsxs(qs,{children:["FITFINDER can be used with ",h.jsx("strong",{children:"or without"})," an account."]}),h.jsxs(Sb,{children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Guest Users:"})," Free visual searching."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Logged-In Users:"})," History, favorites, and theme customization."]})]})]})}),h.jsx(Li,{id:"features",children:h.jsxs(Ni,{children:[h.jsx(yr,{children:"Key Features"}),h.jsxs(Sb,{children:[h.jsx("li",{children:"Clothing segmentation from images"}),h.jsx("li",{children:"Text prompting for refined searches"}),h.jsx("li",{children:"Visual similarity search"}),h.jsx("li",{children:"Search history"}),h.jsx("li",{children:"Favorites system"}),h.jsx("li",{children:"Recomendations system for similar products and most searched for"}),h.jsx("li",{children:"Light, dark, and system themes"})]})]})}),h.jsx(Li,{id:"personalization",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(yr,{children:"Personalized Experience"}),h.jsx(qs,{children:"FITFINDER adapts to user preferences through responsive design and theming support."})]})}),h.jsxs(Li,{id:"academic",children:[" ",h.jsxs(Ni,{children:[" ",h.jsx(yr,{children:"Academic Background"})," ",h.jsxs(qs,{children:[" ","FITFINDER is a graduation project developed by"," ",h.jsx("strong",{children:"CSED2026 students Alexandria University"}),". The project demonstrates the application of modern web development, software engineering principles, and intelligent image processing in a real-world scenario."," "]})," "]})," "]}),h.jsx(Li,{id:"contributors",$alt:!0,children:h.jsxs(Ni,{children:[h.jsx(yr,{children:"Project Contributors"}),h.jsxs(eL,{children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Ibrahim Mohamed"})," — Frontend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Ali Hassan"})," — Frontend / Backend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Naira Tarek"})," — Backend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Mohamed Abdelmonaem"})," — AI Services / Backend Engineer"]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Omnia Karem"})," — AI Services / Backend Engineer"]})]})]})}),h.jsxs(tL,{children:["© ",new Date().getFullYear()," FITFINDER — CSED2026 Graduation Project"]})]})]})},Xk=C.div`
  display: flex;
  padding-top: 1rem;
  scroll-behavior: smooth;
  color: var(--text-color);
  scroll-behavior: smooth; /* enable smooth scroll for anchor links */
`,Gk=C.aside`
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
`,qk=C.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ki=C.a`
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
`,Ik=C.main`
  flex: 1;
`,Li=C.section`
  padding: 4rem 1.5rem;
  background-color: ${({$alt:e,theme:a})=>e?a.surface:"transparent"};
`,Ni=C.div`
  max-width: 1100px;
  margin: 0 auto;
`,Kk=C.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`,Qk=C.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.textSecondary};
  max-width: 700px;
`,yr=C.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,qs=C.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: ${({theme:e})=>e.textSecondary};
`,Sb=C.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`,Zk=C.ol`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }
`,Wk=C.div`
  width: 100%;
  max-width: 700px;
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Jk=C.video`
  width: 100%;
  height: auto;
  display: block;
  background-color: #000;

  &:focus {
    outline: 2px solid var(--primary-color);
  }
`,eL=C.ul`
  padding-left: 1.2rem;
  margin-top: 1rem;

  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
  }
`,tL=C.footer`
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textSecondary};
  border-top: 1px solid ${({theme:e})=>e.border};
`,nL=()=>{const e=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return w.useEffect(()=>e("introduction"),[]),h.jsxs(aL,{children:[h.jsx(iL,{children:h.jsxs(rL,{children:[h.jsx(So,{onClick:()=>e("introduction"),children:"Introduction"}),h.jsx(So,{onClick:()=>e("information"),children:"Information We Collect"}),h.jsx(So,{onClick:()=>e("information-usage"),children:"How We Use Your Information"}),h.jsx(So,{onClick:()=>e("storage"),children:"Data Storage"}),h.jsx(So,{onClick:()=>e("third-party"),children:"Third-Party Services"}),h.jsx(So,{onClick:()=>e("choices"),children:"User Choices"})]})}),h.jsxs(oL,{children:[h.jsx(vr,{children:h.jsxs(xr,{children:[h.jsx(sL,{children:"Privacy Policy"}),h.jsx(lL,{children:"Your privacy matters to us at FITFINDER."})]})}),h.jsx(vr,{id:"introduction",children:h.jsxs(xr,{children:[h.jsx(wo,{children:"Introduction"}),h.jsx(lu,{children:"FITFINDER is a graduation project developed by CSED2026 students at Alexandria University. This Privacy Policy explains how we handle user data while using the FITFINDER web application."})]})}),h.jsx(vr,{id:"information",children:h.jsxs(xr,{children:[h.jsx(wo,{children:"Information We Collect"}),h.jsxs(wb,{children:[h.jsx("li",{children:"Images uploaded by users for visual search purposes"}),h.jsx("li",{children:"Search history for logged-in users"}),h.jsx("li",{children:"Favorite products saved by logged-in users"}),h.jsx("li",{children:"Basic authentication data for registered users"}),h.jsxs("li",{children:["Profile image for logged-in users ",h.jsx("small",{children:"(Optional)"})]})]})]})}),h.jsx(vr,{id:"information-usage",children:h.jsxs(xr,{children:[h.jsx(wo,{children:"How We Use Your Information"}),h.jsxs(wb,{children:[h.jsx("li",{children:"To perform clothing segmentation and visual search"}),h.jsx("li",{children:"To improve search accuracy and user experience"}),h.jsx("li",{children:"To improve recommendation system"}),h.jsx("li",{children:"To provide features such as history and favorites"}),h.jsx("li",{children:"For academic and demonstration purposes only"})]})]})}),h.jsx(vr,{id:"storage",children:h.jsxs(xr,{children:[h.jsx(wo,{children:"Data Storage"}),h.jsxs(lu,{children:["Uploaded images and related data are stored only for the duration necessary to provide the requested functionality. FITFINDER is not intended for commercial use and ",h.jsx("strong",{children:"does not sell"})," ","user data."]})]})}),h.jsx(vr,{id:"third-party",children:h.jsxs(xr,{children:[h.jsx(wo,{children:"Third-Party Services"}),h.jsx(lu,{children:"FITFINDER may redirect users to third-party websites to view or purchase products. We are not responsible for the privacy practices of those external websites."})]})}),h.jsx(vr,{id:"choices",children:h.jsxs(xr,{children:[h.jsx(wo,{children:"User Choices"}),h.jsx(lu,{children:"Users may choose to use FITFINDER without creating an account. Logged-in users may manage their history and favorite items at any time."})]})}),h.jsxs(cL,{children:["© ",new Date().getFullYear()," FITFINDER — Privacy Policy"]})]})]})},aL=C.div`
  display: flex;
`,iL=C.aside`
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
`,rL=C.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,So=C.a`
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
`,oL=C.main`
  flex: 1;
  color: var(--text-color);
  margin-top: 1rem;
`,vr=C.section`
  padding: 4rem 1.5rem;
`,xr=C.div`
  max-width: 1100px;
  margin: 0 auto;
`,sL=C.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`,lL=C.p`
  font-size: 1.2rem;
  color: var(--text-color);
`,wo=C.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,lu=C.p`
  line-height: 1.7;
  color: var(--text-color);
`,wb=C.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.75rem;
  }
`,cL=C.footer`
  padding: 2rem;
  text-align: center;
  color: var(--text-color);
  border-top: 1px solid var(--text-color);
`,uL=()=>{const e=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return w.useEffect(()=>e("acceptance"),[]),h.jsxs(dL,{children:[h.jsx(fL,{children:h.jsxs(hL,{children:[h.jsx(br,{onClick:()=>e("acceptance"),children:"Acceptance of Terms"}),h.jsx(br,{onClick:()=>e("purpose"),children:"Purpose of the Application"}),h.jsx(br,{onClick:()=>e("responsibilities"),children:"User Responsibilities"}),h.jsx(br,{onClick:()=>e("usage"),children:"Account Usage"}),h.jsx(br,{onClick:()=>e("extera"),children:"External Links"}),h.jsx(br,{onClick:()=>e("liability"),children:"Limitation of Liability"}),h.jsx(br,{onClick:()=>e("changes"),children:"Changes to These Terms"})]})}),h.jsxs(mL,{children:[h.jsx(_i,{children:h.jsxs(Ui,{children:[h.jsx(pL,{children:"Terms of Service"}),h.jsx(gL,{children:"Please read these terms carefully before using FITFINDER."})]})}),h.jsx(_i,{id:"acceptance",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Acceptance of Terms"}),h.jsx(To,{children:"By accessing or using FITFINDER, you agree to be bound by these Terms of Service. If you do not agree, please do not use the application."})]})}),h.jsx(_i,{id:"purpose",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Purpose of the Application"}),h.jsx(To,{children:"FITFINDER is an academic graduation project designed for research, learning, and demonstration purposes. It is not a commercial service."})]})}),h.jsx(_i,{id:"responsibilities",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"User Responsibilities"}),h.jsxs(yL,{children:[h.jsx("li",{children:"Do not upload illegal or inappropriate content"}),h.jsx("li",{children:"Use the application for personal and academic purposes only"}),h.jsx("li",{children:"Respect intellectual property rights"})]})]})}),h.jsx(_i,{id:"usage",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Account Usage"}),h.jsx(To,{children:"Users may use FITFINDER with or without an account. Logged-in users are responsible for maintaining the confidentiality of their account information."})]})}),h.jsx(_i,{id:"extera",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"External Links"}),h.jsx(To,{children:"FITFINDER may provide links to third-party websites. We do not control and are not responsible for the content or practices of those websites."})]})}),h.jsx(_i,{id:"liability",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Limitation of Liability"}),h.jsx(To,{children:'FITFINDER is provided "as is" without warranties of any kind. The developers are not liable for any damages arising from the use of this application.'})]})}),h.jsx(_i,{id:"changes",children:h.jsxs(Ui,{children:[h.jsx(Sr,{children:"Changes to These Terms"}),h.jsx(To,{children:"These terms may be updated as the project evolves. Continued use of FITFINDER implies acceptance of the updated terms."})]})}),h.jsxs(vL,{children:["© ",new Date().getFullYear()," FITFINDER — Terms of Service"]})]})]})},dL=C.div`
  display: flex;
  color: var(--text-color);
`,fL=C.aside`
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
`,hL=C.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,br=C.a`
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
`,mL=C.main`
  flex: 1;
  margin: 1rem;
`,_i=C.section`
  padding: 4rem 1.5rem;
`,Ui=C.div`
  max-width: 1100px;
  margin: 0 auto;
`,pL=C.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
`,gL=C.p`
  font-size: 1.2rem;
  color: var(--text-color);
`,Sr=C.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`,To=C.p`
  line-height: 1.7;
  color: var(--text-color);
`,yL=C.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.75rem;
  }
`,vL=C.footer`
  padding: 2rem;
  text-align: center;
  color: var(--text-color);
  border-top: 1px solid var(--text-color);
`;function xL(){const e=gC(qj(h.jsxs(In,{path:"/",element:h.jsx(B8,{}),children:[h.jsx(In,{index:!0,element:h.jsx(E9,{})}),h.jsx(In,{path:"registration",element:h.jsx(I8,{})}),h.jsx(In,{path:"search-result",element:h.jsx(Z8,{})}),h.jsx(In,{path:"product/:id",element:h.jsx(mO,{})}),h.jsx(In,{path:"history",element:h.jsx(J9,{})}),h.jsx(In,{path:"favorite",element:h.jsx(Tk,{})}),h.jsx(In,{path:"about-us",element:h.jsx(Yk,{})}),h.jsx(In,{path:"privacy-policy",element:h.jsx(nL,{})}),h.jsx(In,{path:"terms-of-service",element:h.jsx(uL,{})}),h.jsx(In,{path:"*",element:h.jsx(RA,{})})]})),{basename:"/FitFinder/"});return h.jsxs(h.Fragment,{children:[h.jsx(RC,{router:e}),h.jsx(OS,{})]})}mE.createRoot(document.getElementById("root")).render(h.jsx(Y8,{clientId:DA,children:h.jsx(mz,{children:h.jsx(e8,{children:h.jsx(kA,{children:h.jsx(xL,{})})})})}));
